import assert from 'node:assert/strict';
import {
  canPanelBakePattern,
  getFormedExporterTune,
  getFormedInstanceCap,
  hasFormedReference
} from '../src/ar/formedCalibration.js';

assert.ok(hasFormedReference('bridgeSlot'));
assert.ok(!hasFormedReference('round60'));

const bridge = getFormedExporterTune('bridgeSlot');
assert.equal(bridge.hoodRise, 1);
assert.equal(bridge.arMaxInstances, 25000);
assert.equal(bridge.viewerMaxInstances, 25000);

const perf = getFormedExporterTune('perfocon');
assert.equal(perf.arPerfoconSegments, 6);
assert.equal(getFormedInstanceCap('perfocon', { arExport: true }), 10000);
assert.equal(getFormedInstanceCap('perfocon', { compact: true }), 12000);
assert.equal(getFormedInstanceCap('bridgeSlot', { arExport: true }), 25000);
assert.ok(!canPanelBakePattern({ pattern: 'perfocon' }));
assert.ok(canPanelBakePattern({ pattern: 'bridgeSlot' }));

console.log('Formed calibration tests passed.');
