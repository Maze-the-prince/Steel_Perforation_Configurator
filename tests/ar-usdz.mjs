import assert from 'node:assert/strict';
import { usdzFaceRepeat } from '../src/ar/usdzExport.js';
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

const fullW = base.width;
const fullH = base.height;
const border = base.border;
const innerW = fullW - border * 2;
const innerH = fullH - border * 2;
assert.ok(innerW > 0 && innerH > 0, 'inner sheet dimensions should be positive');
assert.ok(Math.abs((innerW / round.tileW) - round.repeatX) < 0.001, 'repeat should match inner width over pitch');

console.log('AR USDZ export tests passed.');
