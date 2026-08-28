import assert from 'node:assert/strict';
import { getFormedExporterTune, hasFormedReference } from '../src/ar/formedCalibration.js';

assert.ok(hasFormedReference('bridgeSlot'));
assert.ok(!hasFormedReference('round60'));

const bridge = getFormedExporterTune('bridgeSlot');
assert.equal(bridge.hoodRise, 1);
assert.equal(bridge.arMaxInstances, 8000);

const trieur = getFormedExporterTune('trieur');
assert.equal(trieur.arMaxInstances, 5000);
assert.equal(trieur.arTrieurWidthSegments, 6);

const perf = getFormedExporterTune('perfocon');
assert.equal(perf.arPerfoconSegments, 8);

console.log('Formed calibration tests passed.');
