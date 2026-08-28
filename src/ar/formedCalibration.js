import spec from '../../references/spec.json' with { type: 'json' };

/** Dev-only pattern keys that have a Blender reference USDZ under references/usdz/. */
export const REFERENCE_FORMED_PATTERNS = new Set(['bridgeSlot', 'embossed', 'perfocon', 'trieur']);

export function hasFormedReference(pattern) {
  return REFERENCE_FORMED_PATTERNS.has(pattern);
}

/** Geometry tuning for the procedural exporter (reference-informed, not served in AR). */
export function getFormedExporterTune(pattern) {
  const defaults = spec.formedCalibration?.default ?? {};
  const patternTune = spec.formedCalibration?.patterns?.[pattern] ?? {};
  return { ...defaults, ...patternTune };
}
