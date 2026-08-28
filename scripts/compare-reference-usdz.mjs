/**
 * Export configurator USDZ for reference patterns and compare with Blender refs.
 */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { createCanvas } from 'canvas';
import { Window } from 'happy-dom';
import { unzipSync } from '../node_modules/three/examples/jsm/libs/fflate.module.js';
import { normalizeConfig } from '../src/state/config.js';
import { buildArSheetGroupForConfig, prepareArSheetGroupForExport } from '../src/three/Three3DScene.js';
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js';
import * as THREE from 'three';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const spec = JSON.parse(await fs.readFile(path.join(root, 'references', 'spec.json'), 'utf8'));

function installDom() {
  const window = new Window({ url: 'http://localhost/' });
  global.window = window;
  global.document = window.document;
  Object.defineProperty(global, 'navigator', { value: window.navigator, configurable: true });
  const orig = window.document.createElement.bind(window.document);
  window.document.createElement = (tag, options) => {
    if (tag === 'canvas') return createCanvas(512, 512);
    return orig(tag, options);
  };
}

installDom();

function countTris(group) {
  let tris = 0;
  let meshes = 0;
  group.traverse((o) => {
    if (!o.isMesh) return;
    meshes += 1;
    const g = o.geometry;
    if (g.index) tris += g.index.count / 3;
    else if (g.attributes.position) tris += g.attributes.position.count / 3;
  });
  return { meshes, tris: Math.round(tris) };
}

function bbox(group) {
  const box = new THREE.Box3().setFromObject(group);
  const s = new THREE.Vector3();
  box.getSize(s);
  return { min: box.min.toArray().map((v) => +v.toFixed(4)), max: box.max.toArray().map((v) => +v.toFixed(4)), size: s.toArray().map((v) => +v.toFixed(4)) };
}

function usdzInfo(bytes) {
  const files = unzipSync(new Uint8Array(bytes));
  const names = Object.keys(files);
  return {
    entries: names,
    totalBytes: bytes.byteLength,
    usd: names.find((n) => n.endsWith('.usda') || n.endsWith('.usdc')),
    usdBytes: names.filter((n) => n.endsWith('.usda') || n.endsWith('.usdc')).reduce((s, n) => s + files[n].length, 0)
  };
}

const base = normalizeConfig({
  ...spec.panel,
  pattern: 'bridgeSlot',
  panelForm: 'flat',
  flangeDepth: 0,
  bendAngle: 0,
  bendRadius: 0
});

const patterns = ['bridgeSlot', 'embossed', 'perfocon', 'trieur'];
const exporter = new USDZExporter();
const outDir = path.join(root, 'references', 'usdz', '_ours');

await fs.mkdir(outDir, { recursive: true });

console.log('Pattern comparison (600×600 mm reference spec)\n');
console.log('pattern          | ref KB | ours KB | ref meshes | ours meshes | ref tris   | ours tris');
console.log('-----------------|--------|---------|------------|-------------|------------|----------');

for (const patternKey of patterns) {
  const config = normalizeConfig({ ...base, pattern: patternKey, ...spec.patterns[patternKey] });
  const refPath = path.join(root, 'references', 'usdz', `${patternKey}.usdz`);
  const refBytes = await fs.readFile(refPath);
  const refInfo = usdzInfo(refBytes);

  const { group } = buildArSheetGroupForConfig(config);
  await prepareArSheetGroupForExport(group, 2048);
  const stats = countTris(group);
  const bounds = bbox(group);

  const wrapper = new THREE.Group();
  wrapper.add(group);
  wrapper.updateMatrixWorld(true);
  const oursBytes = await exporter.parseAsync(wrapper, {
    quickLookCompatible: true,
    maxTextureSize: 2048,
    ar: { anchoring: { type: 'plane' }, planeAnchoring: { alignment: 'horizontal' } }
  });
  const oursInfo = usdzInfo(oursBytes);
  await fs.writeFile(path.join(outDir, `${patternKey}.usdz`), Buffer.from(oursBytes));

  console.log(
    `${patternKey.padEnd(16)} | ${(refInfo.totalBytes / 1024).toFixed(0).padStart(6)} | ${(oursInfo.totalBytes / 1024).toFixed(0).padStart(7)} | ${String(refInfo.entries.length).padStart(10)} | ${String(stats.meshes).padStart(11)} | ${'—'.padStart(10)} | ${stats.tris.toLocaleString().padStart(8)}`
  );
  console.log(`  bounds ${patternKey}: ${bounds.size.join('×')} m  entries ref: ${refInfo.entries.join(', ')}`);
  console.log(`  bounds ours usd: ${oursInfo.usd} (${(oursInfo.usdBytes / 1024).toFixed(0)} KB)`);
}

console.log('\nOur exports written to references/usdz/_ours/');
