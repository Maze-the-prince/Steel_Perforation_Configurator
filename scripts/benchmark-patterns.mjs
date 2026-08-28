/**
 * Pattern performance report — viewer vs AR export path at reference panel size.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createCanvas } from 'canvas';
import { Window } from 'happy-dom';
import * as THREE from 'three';
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js';
import { estimatedHoleCount, normalizeConfig, PATTERNS } from '../src/state/config.js';
import { buildArSheetGroupForConfig, prepareArSheetGroupForExport } from '../src/three/Three3DScene.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const spec = JSON.parse(fs.readFileSync(path.join(root, 'references', 'spec.json'), 'utf8'));

function installDom() {
  const window = new Window({ url: 'http://localhost/' });
  global.window = window;
  global.document = window.document;
  Object.defineProperty(global, 'navigator', { value: window.navigator, configurable: true });
  const orig = window.document.createElement.bind(window.document);
  window.document.createElement = (tag) => (tag === 'canvas' ? createCanvas(512, 512) : orig(tag));
}

function meshStats(group) {
  const box = new THREE.Box3().setFromObject(group);
  const size = new THREE.Vector3();
  box.getSize(size);
  let tris = 0;
  let meshes = 0;
  let instanced = 0;
  let instancedCount = 0;
  let vertices = 0;
  group.traverse((o) => {
    if (o.isInstancedMesh) {
      instanced += 1;
      instancedCount += o.count;
      const g = o.geometry;
      const per = g.index ? g.index.count / 3 : g.attributes.position.count / 3;
      tris += per * o.count;
      vertices += g.attributes.position.count * o.count;
      return;
    }
    if (!o.isMesh) return;
    meshes += 1;
    const g = o.geometry;
    if (g.index) tris += g.index.count / 3;
    else if (g.attributes.position) tris += g.attributes.position.count / 3;
    if (g.attributes.position) vertices += g.attributes.position.count;
  });
  return {
    meshes,
    instanced,
    instancedCount,
    tris: Math.round(tris),
    vertices: Math.round(vertices),
    sizeMm: size.toArray().map((v) => Math.round(v * 1000))
  };
}

function ms(start) {
  return Math.round(performance.now() - start);
}

function fmt(n) {
  if (n >= 1e6) return `${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}k`;
  return String(n);
}

installDom();

const base = normalizeConfig({
  ...spec.panel,
  panelForm: 'flat',
  flangeDepth: 0,
  bendAngle: 0,
  bendRadius: 0
});

const patternKeys = Object.keys(PATTERNS);
const rows = [];

for (const patternKey of patternKeys) {
  const config = normalizeConfig({ ...base, pattern: patternKey, ...spec.patterns[patternKey] });
  const holes = estimatedHoleCount(config);
  const formed = Boolean(PATTERNS[patternKey].formed);

  let buildMs = 0;
  let prepareMs = 0;
  let exportMs = 0;
  let usdzBytes = 0;
  let before = null;
  let after = null;

  try {
    const t0 = performance.now();
    const { group } = buildArSheetGroupForConfig(config);
    buildMs = ms(t0);
    before = meshStats(group);

    const t1 = performance.now();
    await prepareArSheetGroupForExport(group, 2048);
    prepareMs = ms(t1);
    after = meshStats(group);

    try {
      const wrapper = new THREE.Group();
      wrapper.add(group);
      wrapper.updateMatrixWorld(true);
      const t2 = performance.now();
      const bytes = await new USDZExporter().parseAsync(wrapper, { quickLookCompatible: true, maxTextureSize: 2048 });
      exportMs = ms(t2);
      usdzBytes = bytes.byteLength;
    } catch {
      exportMs = -1;
      usdzBytes = 0;
    }
  } catch (err) {
    rows.push({ patternKey, holes, formed, error: err.message });
    continue;
  }

  rows.push({
    patternKey,
    holes,
    formed,
    buildMs,
    prepareMs,
    exportMs,
    totalMs: buildMs + prepareMs,
    usdzMb: +(usdzBytes / (1024 * 1024)).toFixed(2),
    instBefore: before.instancedCount,
    trisBefore: before.tris,
    trisAfter: after.tris,
    meshesAfter: after.meshes,
    verticesAfter: after.vertices
  });
}

console.log('\nPattern performance @ 600×600 mm reference panel\n');
console.log(
  'Pattern'.padEnd(16),
  'Holes'.padStart(8),
  'Build'.padStart(7),
  'Prep'.padStart(7),
  'USDZ'.padStart(7),
  'Geom'.padStart(7),
  'Size'.padStart(7),
  'Tris(pre)'.padStart(10),
  'Tris(post)'.padStart(11)
);
console.log('-'.repeat(92));

let slowest = null;
for (const r of rows) {
  if (r.error) {
    console.log(r.patternKey.padEnd(16), 'ERROR:', r.error);
    continue;
  }
  console.log(
    r.patternKey.padEnd(16),
    fmt(r.holes).padStart(8),
    `${r.buildMs}ms`.padStart(7),
    `${r.prepareMs}ms`.padStart(7),
    `${r.exportMs < 0 ? 'n/a' : `${r.exportMs}ms`}`.padStart(7),
    `${r.buildMs + r.prepareMs}ms`.padStart(7),
    `${r.usdzMb}MB`.padStart(7),
    fmt(r.trisBefore).padStart(10),
    fmt(r.trisAfter).padStart(11)
  );
  if (!slowest || r.totalMs > slowest.totalMs) slowest = r;
}

console.log('\nNotes:');
console.log('- "Prep" includes instanced-mesh merge + texture bake for AR faces.');
console.log('- Formed patterns cap AR instances at formedCalibration.arMaxInstances (120k).');
console.log('- Viewer uses up to 250k formed instances; AR merge explodes triangle count.');
if (slowest) console.log(`- Slowest total path: ${slowest.patternKey} (${slowest.totalMs}ms, ${fmt(slowest.trisAfter)} tris after merge).`);

const outPath = path.join(root, 'references', 'performance.json');
fs.writeFileSync(outPath, `${JSON.stringify({ panel: spec.panel, patterns: rows }, null, 2)}\n`);
console.log(`\nWrote ${outPath}`);
