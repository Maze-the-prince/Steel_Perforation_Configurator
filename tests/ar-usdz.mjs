import assert from 'node:assert/strict';
import {
  innerFaceTextureSize,
  sheetInnerSizeMm,
  usdzExportFingerprint,
  usdzFaceRepeat
} from '../src/ar/usdzExport.js';
import { initialConfig, normalizeConfig } from '../src/state/config.js';

const base = normalizeConfig({ ...initialConfig, width: 1200, height: 2400, border: 20, pitch: 12, rowPitch: 24 });

const round = usdzFaceRepeat({ ...base, pattern: 'round60', holeSize: 6 }, 1160, 2360);
const slot = usdzFaceRepeat({ ...base, pattern: 'slot', holeSize: 5, slotLength: 20 }, 1160, 2360);
const square = usdzFaceRepeat({ ...base, pattern: 'square', holeSize: 8 }, 1160, 2360);

assert.equal(round.pattern, 'round60');
assert.equal(slot.pattern, 'slot');
assert.equal(square.pattern, 'square');
assert.ok(round.repeatX > 10, 'round sheet should tile many times across width');
assert.ok(round.repeatY > 10, 'round sheet should tile many times across height');
assert.notEqual(slot.repeatY, round.repeatY, 'slot row pitch should change vertical repeat');

const smallPitch = usdzFaceRepeat({ ...base, pattern: 'round60', pitch: 6 }, 1160, 2360);
assert.ok(smallPitch.repeatX > round.repeatX, 'smaller pitch should increase horizontal repeat');

const { innerWidthMm, innerHeightMm } = sheetInnerSizeMm(base.width, base.height, base.border);
assert.equal(innerWidthMm, 1160);
assert.equal(innerHeightMm, 2360);
assert.ok(Math.abs((innerWidthMm / round.tileW) - round.repeatX) < 0.001, 'repeat should match inner width over pitch');

const tex = innerFaceTextureSize(innerWidthMm, innerHeightMm, round.repeatX, round.repeatY, 4096);
assert.ok(tex.outW >= 512 && tex.outH >= 512, 'AR texture should be at least 512px');
assert.ok(tex.pxPerPitch >= 22, 'AR texture should allocate enough pixels per pitch');
assert.ok(Math.abs((tex.outW / tex.outH) - (innerWidthMm / innerHeightMm)) < 0.05, 'AR texture aspect should match inner face');

const fp1 = usdzExportFingerprint(base);
const fp2 = usdzExportFingerprint({ ...base, pattern: 'slot' });
const fp3 = usdzExportFingerprint(base);
assert.notEqual(fp1, fp2, 'export fingerprint should change when pattern changes');
assert.equal(fp1, fp3, 'export fingerprint should be stable for the same config');

console.log('AR USDZ export tests passed.');
