/**
 * Bake configurator reference GLBs (one per pattern) into references/glb/.
 * Uses the same AR sheet geometry path as iOS Quick Look export.
 *
 *   npm run bake:reference-glb
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createCanvas } from 'canvas';
import { Window } from 'happy-dom';
import { normalizeConfig } from '../src/state/config.js';
import { exportReferenceSheetGLB } from '../src/three/Three3DScene.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const specPath = path.join(root, 'references', 'spec.json');
const outDir = path.join(root, 'references', 'glb');

function installDom() {
  const window = new Window({ url: 'http://localhost/' });
  global.window = window;
  global.document = window.document;
  global.HTMLElement = window.HTMLElement;
  global.FileReader = window.FileReader;
  global.Blob = window.Blob;
  global.URL = window.URL;
  global.devicePixelRatio = 1;
  Object.defineProperty(global, 'navigator', { value: window.navigator, configurable: true });

  const origCreate = window.document.createElement.bind(window.document);
  window.document.createElement = (tag, options) => {
    if (tag === 'canvas') return createCanvas(512, 512);
    return origCreate(tag, options);
  };
}

async function main() {
  installDom();
  const spec = JSON.parse(await fs.readFile(specPath, 'utf8'));
  await fs.mkdir(outDir, { recursive: true });

  const base = normalizeConfig({
    ...spec.panel,
    pattern: 'round60',
    holeSize: 8,
    pitch: 12,
    rowPitch: 12,
    slotLength: 20,
    coneAngle: 60,
    panelForm: 'flat',
    flangeDepth: 0,
    bendAngle: 0,
    bendRadius: 0
  });

  for (const [patternKey, patternParams] of Object.entries(spec.patterns)) {
    const config = normalizeConfig({
      ...base,
      pattern: patternKey,
      ...patternParams
    });
    process.stdout.write(`baking ${patternKey}… `);
    const bytes = await exportReferenceSheetGLB(config);
    const outPath = path.join(outDir, `${patternKey}.glb`);
    await fs.writeFile(outPath, Buffer.from(bytes));
    console.log(`${(bytes.byteLength / 1024).toFixed(1)} KB → references/glb/${patternKey}.glb`);
  }

  console.log('\nDone — 10 GLBs in references/glb/');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
