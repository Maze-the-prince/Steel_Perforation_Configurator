import assert from 'node:assert/strict';
import {
  PATTERNS, PATTERN_DEFAULTS, decorativeOffsets, estimatedHoleCount, fabricationLimits,
  manufacturingIssues, normalizeConfig, openAreaPercent, recommendedManufacturingFixes, conicalProfile
} from '../src/state/config.js';
import { buildCsv, buildDxf } from '../src/export/manufacturing.js';

function cfg(pattern, overrides = {}) {
  return normalizeConfig({
    pattern,
    ...PATTERN_DEFAULTS[pattern],
    width: 600,
    height: 600,
    thickness: 2,
    border: 25,
    finish: 'mill',
    ...overrides
  });
}

const keys = Object.keys(PATTERNS);
assert.deepEqual(keys, ['round60','square','slot','hex','roundStraight','bridgeSlot','trieur','perfocon','decorative','embossed']);

for (const key of keys) {
  const c = cfg(key);
  const issues = manufacturingIssues(c);
  const blocks = issues.filter((x) => x.level === 'block');
  assert.equal(blocks.length, 0, `${key} defaults should be fabrication-valid: ${blocks.map(x => x.text).join(' | ')}`);
  assert.ok(estimatedHoleCount(c) > 0, `${key} should generate at least one pattern feature`);
  const oa = openAreaPercent(c);
  assert.ok(oa >= 0 && oa <= 88, `${key} open area should be bounded`);
  if (PATTERNS[key].through === false) assert.equal(oa, 0, `${key} is formed-only and must have zero open area`);
  else assert.ok(oa > 0, `${key} is through-cut and should have non-zero open area`);

  const dxf = buildDxf(c);
  const csv = buildCsv(c, `TEST-${key}`);
  assert.match(dxf, /PERFORATION_ZONE/, `${key} DXF should contain the active perforation/forming zone`);
  assert.match(csv, new RegExp(PATTERNS[key].label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${key} CSV should identify the selected pattern`);
}

// Mathematical behavior checks.
assert.ok(Math.abs(openAreaPercent(cfg('round60')) - 40.305) < 0.2, '60-degree round open area should use triangular cell area');
assert.ok(Math.abs(openAreaPercent(cfg('roundStraight')) - 34.907) < 0.2, 'straight round open area should use square cell area');
assert.ok(Math.abs(openAreaPercent(cfg('perfocon')) - 12.753) < 0.2, 'Perfocon open area should be governed by the round entrance, not the old hex approximation');
assert.ok(Math.abs(openAreaPercent(cfg('hex')) - 33.333) < 0.2, 'hex open area should match point-to-point hex geometry');

// Decorative motif is deterministic and count/export stay synchronized.
assert.equal(decorativeOffsets(cfg('decorative')).length, 13, 'Decorative motif should always be 13 holes');
assert.equal(estimatedHoleCount(cfg('decorative')) % 13, 0, 'Decorative opening count should be a multiple of 13');

// Conical exits govern minimum pitch so backside cones cannot overlap.
const pf = cfg('perfocon');
assert.ok(fabricationLimits(pf).minPitchX >= Math.ceil(conicalProfile(pf).exit + 2), 'Perfocon pitch must consider the 60° conical exit diameter');

const iso60 = conicalProfile({ holeSize: 3, thickness: 2, coneAngle: 60 });
assert.equal(iso60.includedDeg, 60, 'ISO 6752 / DIN 9861 Shape DA is a 60° included head');
assert.ok(Math.abs(iso60.head - (3 + Math.sqrt(3))) < 1e-9, '60° head diameter follows d₂ = d₁ + √3');
assert.ok(Math.abs(iso60.height - 1.5) < 0.01, '60° collar height is 1.5 mm for a √3 mm head add');
assert.equal(iso60.exit, 5.31, '60° exit grows through thickness at 30° from the punch axis');

const heavy30 = conicalProfile({ holeSize: 5, thickness: 2, coneAngle: 30 });
assert.equal(heavy30.includedDeg, 30, 'Heavy-duty mill-screen head is a 30° included angle');
assert.equal(heavy30.head, 6, '30° typical head is d₁ + 1 mm');
assert.ok(Math.abs(heavy30.height - (0.5 / Math.tan(15 * Math.PI / 180))) < 0.01, '30° collar height follows the 15° half-angle');
const tight30 = conicalProfile({ holeSize: 3, thickness: 2, coneAngle: 30 });
assert.ok(tight30.head < iso60.head, '30° head is only slightly larger than the entrance, so punches pack closer');
assert.ok(tight30.exit < iso60.exit, '30° exit envelope is smaller than 60° at the same entrance and thickness');
assert.equal(manufacturingIssues(cfg('perfocon', { coneAngle: 30 })).filter((x) => x.level === 'block').length, 0, 'Default Perfocon pitch must remain valid at 30°');
assert.match(buildDxf(cfg('perfocon')), /FORM_CONE/, 'Perfocon DXF should include the formed head circle');
assert.match(buildCsv(cfg('perfocon', { coneAngle: 30 }), 'TEST-PF30'), /30/, '30° cone angle should appear in the CSV');

// Invalid inputs should be reported and recommended fixes should resolve them.
for (const key of keys) {
  const bad = cfg(key, { holeSize: 1, pitch: 2, rowPitch: 2, slotLength: 2, border: 0 });
  const initialBlocks = manufacturingIssues(bad).filter((x) => x.level === 'block');
  assert.ok(initialBlocks.length > 0, `${key} should reject clearly invalid geometry`);
  const repaired = normalizeConfig({ ...bad, ...recommendedManufacturingFixes(bad) });
  const remainingBlocks = manufacturingIssues(repaired).filter((x) => x.level === 'block');
  assert.equal(remainingBlocks.length, 0, `${key} recommended fixes should resolve blocking pattern issues: ${remainingBlocks.map(x => x.text).join(' | ')}`);
}

// DXF manufacturing intent per pattern.
assert.match(buildDxf(cfg('round60')), /\nCIRCLE\n8\nPERFORATION\n/, 'Round DXF should export circular perforations');
assert.match(buildDxf(cfg('square')), /\nLWPOLYLINE\n8\nPERFORATION\n/, 'Square DXF should export closed polylines');
assert.match(buildDxf(cfg('slot')), /\nLWPOLYLINE\n8\nPERFORATION\n/, 'Slot DXF should export capsule polylines');
assert.match(buildDxf(cfg('hex')), /\nLWPOLYLINE\n8\nPERFORATION\n/, 'Hex DXF should export six-sided polylines');
assert.match(buildDxf(cfg('bridgeSlot')), /FORM_BRIDGE/, 'Bridge-slot DXF should include forming geometry as well as the opening');
const trieurDxf = buildDxf(cfg('trieur'));
assert.match(trieurDxf, /FORM_TRIEUR/, 'Trieur DXF should include cup forming marks');
assert.doesNotMatch(trieurDxf, /\nCIRCLE\n8\nPERFORATION\n/, 'Trieur must not export through-cut perforations');
const perfoconDxf = buildDxf(cfg('perfocon'));
assert.match(perfoconDxf, /\n8\nPERFORATION\n/, 'Perfocon should export entrance circles');
assert.match(perfoconDxf, /\n8\nEXIT\n/, 'Perfocon should export larger exit circles');
const embossedDxf = buildDxf(cfg('embossed'));
assert.match(embossedDxf, /FORM_EMBOSS/, 'Embossed diamond DXF should include diamond forming outlines');
assert.match(embossedDxf, /\n8\nPERFORATION\n/, 'Embossed diamond should export the reverse-side punch-out');

console.log(`Pattern suite passed for ${keys.length} pattern families.`);
