/**
 * Compare procedural AR geometry against Blender reference USDZ bounds.
 * Writes references/calibration.json used by the exporter (reference-only, not served in AR).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createCanvas } from 'canvas';
import { Window } from 'happy-dom';
import * as THREE from 'three';
import { unzipSync } from '../node_modules/three/examples/jsm/libs/fflate.module.js';
import { normalizeConfig } from '../src/state/config.js';
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
  group.traverse((o) => {
    if (!o.isMesh) return;
    meshes += 1;
    const g = o.geometry;
    if (g.index) tris += g.index.count / 3;
    else if (g.attributes.position) tris += g.attributes.position.count / 3;
  });
  return {
    min: box.min.toArray().map((v) => +v.toFixed(5)),
    max: box.max.toArray().map((v) => +v.toFixed(5)),
    size: size.toArray().map((v) => +v.toFixed(5)),
    meshes,
    tris: Math.round(tris)
  };
}

/** Rough bounds scan of USDC vertex-like float triplets. */
function scanUsdcBounds(usdc) {
  const dv = new DataView(usdc.buffer, usdc.byteOffset, usdc.byteLength);
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;
  let hits = 0;
  for (let i = 0; i <= usdc.length - 12; i += 4) {
    const x = dv.getFloat32(i, true);
    const y = dv.getFloat32(i + 4, true);
    const z = dv.getFloat32(i + 8, true);
    if (![x, y, z].every(Number.isFinite)) continue;
    if (Math.abs(x) > 1.5 || Math.abs(y) > 1.5 || Math.abs(z) > 0.2) continue;
    hits += 1;
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
    minZ = Math.min(minZ, z);
    maxZ = Math.max(maxZ, z);
  }
  if (hits < 100) return null;
  const size = [maxX - minX, maxY - minY, maxZ - minZ];
  return {
    min: [minX, minY, minZ].map((v) => +v.toFixed(5)),
    max: [maxX, maxY, maxZ].map((v) => +v.toFixed(5)),
    size: size.map((v) => +v.toFixed(5)),
    hits
  };
}

function calibrationRatios(ours, ref) {
  const ratio = (a, b) => (b > 1e-6 ? +(a / b).toFixed(4) : 1);
  return {
    scaleX: ratio(ref.size[0], ours.size[0]),
    scaleY: ratio(ref.size[1], ours.size[1]),
    scaleZ: ratio(ref.size[2], ours.size[2]),
    formedHeightMm: +((ref.max[2] - ref.min[2]) * 1000).toFixed(3)
  };
}

installDom();

const base = normalizeConfig({
  ...spec.panel,
  panelForm: 'flat',
  flangeDepth: 0,
  bendAngle: 0,
  bendRadius: 0
});

const patterns = ['bridgeSlot', 'embossed', 'perfocon', 'trieur'];
const calibration = { description: 'Exporter tuning from Blender reference USDZ (dev-only, not served in AR)', patterns: {} };

for (const patternKey of patterns) {
  const config = normalizeConfig({ ...base, pattern: patternKey, ...spec.patterns[patternKey] });
  const { group } = buildArSheetGroupForConfig(config);
  await prepareArSheetGroupForExport(group, 2048);
  const ours = meshStats(group);

  const refPath = path.join(root, 'references', 'usdz', `${patternKey}.usdz`);
  const usdc = unzipSync(new Uint8Array(fs.readFileSync(refPath)))[`${patternKey}.usdc`];
  const ref = scanUsdcBounds(usdc);

  const ratios = ref ? calibrationRatios(ours, ref) : { scaleX: 1, scaleY: 1, scaleZ: 1 };
  calibration.patterns[patternKey] = {
    ours,
    reference: ref,
    exporter: {
      hoodRiseScale: patternKey === 'bridgeSlot' ? ratios.scaleZ : undefined,
      featureHeightScale: ratios.scaleZ,
      featureWidthScale: (ratios.scaleX + ratios.scaleY) / 2,
      meshSimplify: ref && ours.tris > ref.hits / 3 ? 0.75 : 1
    }
  };

  console.log(`\n${patternKey}`);
  console.log('  ours  size(m):', ours.size.join(' × '), `tris=${ours.tris}`);
  if (ref) console.log('  ref   size(m):', ref.size.join(' × '), `(~${ref.hits} float hits)`);
  console.log('  tune  Z:', ratios.scaleZ, 'XY:', ratios.featureWidthScale);
}

const outPath = path.join(root, 'references', 'calibration.json');
fs.writeFileSync(outPath, `${JSON.stringify(calibration, null, 2)}\n`);
console.log(`\nWrote ${outPath}`);
