import assert from 'node:assert/strict';
import {
  catalog,
  configViewUrl,
  estimatedPrice,
  fabricationLimits,
  finishAppearance,
  initialConfig,
  manufacturingIssues,
  MATERIALS,
  normalizeConfig,
  readConfigFromUrl,
  recommendedManufacturingFixes,
  cornerTreatmentMm
} from '../src/state/config.js';
import { pbrPresetFor } from '../src/state/pbrPresets.js';
import { buildCsv, buildDxf, flatPatternMetrics } from '../src/export/manufacturing.js';

const slot = normalizeConfig({
  ...initialConfig,
  pattern: 'slot',
  holeSize: 5,
  slotLength: 20,
  pitch: 12,
  rowPitch: 24
});
assert.equal(manufacturingIssues(slot).filter((i) => i.level === 'block').length, 0, 'default slot should manufacture');
assert.ok(fabricationLimits(slot).minRowPitch >= 22, 'slot row spacing must account for slot length');

const invalidSlot = normalizeConfig({ ...slot, rowPitch: 10 });
assert.ok(manufacturingIssues(invalidSlot).some((i) => i.field === 'rowPitch' && i.level === 'block'), 'invalid slot row pitch must block');
const fixedSlot = recommendedManufacturingFixes(invalidSlot);
assert.equal(manufacturingIssues(fixedSlot).filter((i) => i.level === 'block').length, 0, 'recommended fix should resolve slot conflict');

const cassette = normalizeConfig({
  ...slot,
  panelForm: 'cassette',
  flangeDepth: 35,
  bendAngle: 90,
  bendRadius: 2,
  corner: 'radius',
  cornerRadius: 15,
  deburr: 'fine',
  tolerance: 'iso-f',
  flatness: 'precision'
});
assert.equal(cassette.cornerRadius, 15, 'custom corner radius should be preserved');
assert.equal(cornerTreatmentMm(cassette), 15, 'radius treatment should use the entered corner radius');
const flat = flatPatternMetrics(cassette);
assert.ok(flat.blankWidth > cassette.width && flat.blankHeight > cassette.height, 'cassette flat blank must include developed returns');
const dxf = buildDxf(cassette);
for (const layer of ['CUT_OUTER', 'BEND', 'BEND_NOTE', 'PERFORATION', 'FAB_NOTES']) {
  assert.ok(dxf.includes(layer), `DXF missing ${layer}`);
}
assert.ok(!dxf.includes('MOUNTING'), 'DXF should not include mounting features');
const csv = buildCsv(cassette, 'SMOKE-TEST');
for (const label of ['Flat blank width', 'Bend allowance', 'Deburr', 'Tolerance', 'Flatness']) {
  assert.ok(csv.includes(label), `CSV missing ${label}`);
}
assert.ok(!csv.includes('Mounting pitch'), 'CSV should not include mounting');
assert.equal(normalizeConfig({ ...cassette, mounting: 'holes' }).mounting, 'none', 'legacy mounting holes should be stripped');
assert.equal(normalizeConfig({ ...cassette, mounting: 'slots' }).mounting, 'none', 'legacy mounting slots should be stripped');

const originalLocation = globalThis.location;
globalThis.location = { origin: 'https://example.test', pathname: '/configure', href: 'https://example.test/configure' };
const shareUrl = configViewUrl(cassette);
globalThis.location.href = shareUrl;
const restored = readConfigFromUrl();
for (const key of [
  'width', 'height', 'thickness', 'material', 'finish', 'color', 'pattern', 'holeSize', 'slotLength',
  'pitch', 'rowPitch', 'border', 'quantity', 'panelForm', 'flangeDepth', 'bendAngle', 'bendRadius',
  'corner', 'cornerRadius', 'mounting', 'mountingPitch', 'deburr', 'tolerance', 'flatness', 'orientation', 'units', 'coneAngle'
]) {
  assert.equal(String(restored[key]), String(cassette[key]), `share URL round-trip mismatch: ${key}`);
}
if (originalLocation === undefined) delete globalThis.location; else globalThis.location = originalLocation;

const price = estimatedPrice(cassette);
assert.ok(price > catalog.basePrice, 'pricing engine must include material/fabrication additions');
assert.match(catalog.currency, /^[A-Z]{3}$/);

assert.equal(normalizeConfig({ material: 'ss316' }).material, 'alu', 'legacy 316 should map to aluminium');
assert.equal(MATERIALS.alu.short, 'ALU');
assert.ok(!MATERIALS.ss316, 'stainless 316 should be removed from the catalog');
const millCarbon = finishAppearance({ ...initialConfig, material: 'carbon', finish: 'mill' });
const mill304 = finishAppearance({ ...initialConfig, material: 'ss304', finish: 'mill' });
const millAlu = finishAppearance({ ...initialConfig, material: 'alu', finish: 'mill' });
assert.notEqual(millCarbon.hex, mill304.hex, 'carbon and stainless mill colors must differ');
assert.notEqual(mill304.hex, millAlu.hex, 'stainless and aluminium mill colors must differ');
assert.ok(millCarbon.roughness > mill304.roughness, 'carbon mill should be duller than stainless');
assert.ok(millAlu.metalness > 0.9 && mill304.metalness > millAlu.metalness - 0.01);
assert.equal(pbrPresetFor({ material: 'carbon', finish: 'mill' }).id, 'sheet_metal_001');
assert.equal(pbrPresetFor({ material: 'ss304', finish: 'brushed' }).id, 'metal049a_brushed');
assert.equal(pbrPresetFor({ material: 'alu', finish: 'mill' }).id, 'metal049a_alu');
assert.equal(pbrPresetFor({ material: 'carbon', finish: 'galvanized' }).id, 'galvanized_steel');
assert.equal(pbrPresetFor({ material: 'ss304', finish: 'powder' }).id, 'powdercoat_satin');

console.log('SteelWorks V1.1 smoke tests passed.');
