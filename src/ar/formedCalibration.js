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

/** Per-pattern instance caps — dense patterns (perfocon/trieur) must stay low on mobile. */
export function getFormedInstanceCap(pattern, { arExport = false, compact = false } = {}) {
  const tune = getFormedExporterTune(pattern);
  const patternTune = spec.formedCalibration?.patterns?.[pattern] ?? {};
  if (arExport) {
    return patternTune.arMaxInstances ?? tune.arMaxInstances ?? 60000;
  }
  if (patternTune.viewerMaxInstances != null) return patternTune.viewerMaxInstances;
  if (tune.viewerMaxInstances != null) return tune.viewerMaxInstances;
  return compact ? 25000 : 250000;
}

/** Panel-baked alpha is only safe for low-density formed patterns (e.g. bridge slot). */
export function canPanelBakePattern(config) {
  const c = typeof config === 'string' ? { pattern: config } : config;
  const pattern = c.pattern;
  if (pattern === 'perfocon' || pattern === 'trieur') return false;
  return true;
}
