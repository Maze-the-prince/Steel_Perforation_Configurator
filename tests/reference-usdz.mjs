import assert from 'node:assert/strict';
import { computeReferenceUsdzScale, hasReferenceUsdzPattern } from '../src/ar/referenceUsdzExport.js';
import { normalizeConfig } from '../src/state/config.js';

assert.ok(hasReferenceUsdzPattern('bridgeSlot'));
assert.ok(!hasReferenceUsdzPattern('round60'));

const ref = normalizeConfig({
  width: 600,
  height: 600,
  thickness: 2,
  border: 25,
  pattern: 'bridgeSlot',
  holeSize: 4,
  slotLength: 22,
  pitch: 26,
  rowPitch: 12,
  panelForm: 'flat'
});
const same = computeReferenceUsdzScale(ref);
assert.ok(Math.abs(same.sx - 1) < 0.001 && Math.abs(same.sy - 1) < 0.001 && Math.abs(same.sz - 1) < 0.001, 'reference spec should scale 1:1');

const wide = computeReferenceUsdzScale({ ...ref, width: 1200 });
assert.ok(Math.abs(wide.sx / same.sx - 2) < 0.01, 'width should double X scale');

const thicker = computeReferenceUsdzScale({ ...ref, holeSize: 8 });
assert.ok(thicker.sx > same.sx && thicker.sz > same.sz, 'larger holes should scale formed features up');

console.log('Reference USDZ scale tests passed.');
