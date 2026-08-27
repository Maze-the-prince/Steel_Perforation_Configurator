import assert from 'node:assert/strict';
import {
  applyArFaceBleedUv,
  arFaceHeightM,
  innerFaceTextureSize,
  sheetInnerSizeMm,
  usdzExportFingerprint,
  usdzFaceRepeat
} from '../src/ar/usdzExport.js';
import { initialConfig, normalizeConfig, PATTERN_DEFAULTS, PATTERNS, STAGGER_ROW } from '../src/state/config.js';

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

assert.ok(arFaceHeightM(2.36, 20) > 2.36, 'AR face should extend slightly under the top frame');
assert.ok(arFaceHeightM(2.36, 20) < 2.371, 'AR top bleed should stay within border scale, not 5% of height');
assert.ok(Math.abs(arFaceHeightM(2.36, 20) - 2.36 - 0.01) < 0.0001, '20 mm border should add 10 mm top bleed');

function viewerRepeat(config, innerW, innerH) {
  const pattern = PATTERNS[config.pattern];
  const staggered = Boolean(pattern?.staggered);
  const kind = pattern?.kind;
  const rowPitch = (kind === 'slot' || kind === 'bridge') ? config.rowPitch : (staggered ? config.pitch * STAGGER_ROW : config.pitch);
  const tileW = Math.max(0.01, config.pitch);
  const tileH = Math.max(0.01, staggered ? rowPitch * 2 : rowPitch);
  return { repeatX: innerW / tileW, repeatY: innerH / tileH, tileW, tileH };
}

for (const patternKey of Object.keys(PATTERNS)) {
  const cfg = normalizeConfig({
    ...base,
    pattern: patternKey,
    ...(PATTERN_DEFAULTS[patternKey] || {})
  });
  const { innerWidthMm: iw, innerHeightMm: ih } = sheetInnerSizeMm(cfg.width, cfg.height, cfg.border);
  const ar = usdzFaceRepeat(cfg, iw, ih);
  const view = viewerRepeat(cfg, iw, ih);
  assert.ok(Math.abs(ar.repeatX - view.repeatX) < 0.001, `${patternKey} repeatX should match viewer`);
  assert.ok(Math.abs(ar.repeatY - view.repeatY) < 0.001, `${patternKey} repeatY should match viewer`);
  assert.ok(ar.repeatX > 0 && ar.repeatY > 0, `${patternKey} should have positive tile repeat`);
}

const slotRepeat = usdzFaceRepeat(normalizeConfig({ ...base, pattern: 'slot', ...PATTERN_DEFAULTS.slot }), innerWidthMm, innerHeightMm);
assert.ok(Math.abs(slotRepeat.tileH - PATTERN_DEFAULTS.slot.rowPitch * 2) < 0.001, 'slot tile height should use doubled row pitch');

const hexRepeat = usdzFaceRepeat(normalizeConfig({ ...base, pattern: 'hex', ...PATTERN_DEFAULTS.hex }), innerWidthMm, innerHeightMm);
assert.ok(Math.abs(hexRepeat.tileH - PATTERN_DEFAULTS.hex.pitch * STAGGER_ROW * 2) < 0.01, 'hex tile height should use stagger band');

const bleedUv = applyArFaceBleedUv({ repeat: { set(x, y) { this.x = x; this.y = y; } }, offset: { set(x, y) { this.ox = x; this.oy = y; } }, wrapT: 0 }, 2.36, 2.37);
assert.ok(Math.abs(bleedUv.repeat.y - 2.36 / 2.37) < 0.0001, 'bleed UV should shrink pattern to inner height');

console.log('AR USDZ export tests passed.');
