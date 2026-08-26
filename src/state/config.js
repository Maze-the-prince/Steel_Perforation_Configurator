import { pbrPresetFor } from './pbrPresets.js';

export const FINISH_COLORS = {
  ral9005: { label: 'RAL 9005', name: 'Jet black', hex: '#0a0a0d', color: 0x0a0a0d },
  ral7016: { label: 'RAL 7016', name: 'Anthracite Grey', hex: '#383e42', color: 0x383e42 },
  ral7035: { label: 'RAL 7035', name: 'Light grey', hex: '#c5c7c4', color: 0xc5c7c4 },
  ral9010: { label: 'RAL 9010', name: 'Pure white', hex: '#f1eee8', color: 0xf1eee8 },
  ral3000: { label: 'RAL 3000', name: 'Flame red', hex: '#a72920', color: 0xa72920 },
  ral5005: { label: 'RAL 5005', name: 'Signal blue', hex: '#154889', color: 0x154889 },
  ral6005: { label: 'RAL 6005', name: 'Moss green', hex: '#0f4336', color: 0x0f4336 },
  ral1003: { label: 'RAL 1003', name: 'Signal yellow', hex: '#f3a900', color: 0xf3a900 },
  ral7021: { label: 'RAL 7021', name: 'Black grey', hex: '#2e3234', color: 0x2e3234 },
  ral9006: { label: 'RAL 9006', name: 'White aluminium', hex: '#a5a8a6', color: 0xa5a8a6 },
  ral9007: { label: 'RAL 9007', name: 'Grey aluminium', hex: '#8f8c83', color: 0x8f8c83 },
  ral5010: { label: 'RAL 5010', name: 'Gentian blue', hex: '#0e518d', color: 0x0e518d },
  ral3020: { label: 'RAL 3020', name: 'Traffic red', hex: '#bf111b', color: 0xbf111b },
  ral1021: { label: 'RAL 1021', name: 'Rape yellow', hex: '#e4b800', color: 0xe4b800 },
  ral6018: { label: 'RAL 6018', name: 'Yellow green', hex: '#4e9b41', color: 0x4e9b41 },
  ral2004: { label: 'RAL 2004', name: 'Pure orange', hex: '#e75b12', color: 0xe75b12 },
  ral4008: { label: 'RAL 4008', name: 'Signal violet', hex: '#844c82', color: 0x844c82 },
  ral8017: { label: 'RAL 8017', name: 'Chocolate brown', hex: '#45322e', color: 0x45322e },
  ral7040: { label: 'RAL 7040', name: 'Window grey', hex: '#9da3a6', color: 0x9da3a6 },
  ral9016: { label: 'RAL 9016', name: 'Traffic white', hex: '#f1f0ea', color: 0xf1f0ea }
};
export const FINISH_COLOR_ORDER = Object.keys(FINISH_COLORS);
export const FINISH_COLOR_PREVIEW = FINISH_COLOR_ORDER.slice(0, 8);

export const MATERIALS = {
  carbon: {
    label: 'Carbon steel',
    short: 'CRS',
    density: 7850,
    baseHex: '#58544e',
    galvanizedHex: '#9aa48e',
    metalness: 0.9,
    roughness: 0.46,
    grain: 'rolled',
    preview: { hi: '#9a9590', mid: '#6a6762', lo: '#3c3a37' },
    swatch: 'url("./materials/mild_steel_mill/preview.png")'
  },
  ss304: {
    label: 'Stainless 304',
    short: '304',
    density: 7930,
    baseHex: '#e8eef2',
    galvanizedHex: '#c5d0c8',
    metalness: 0.99,
    roughness: 0.11,
    grain: 'brushed',
    preview: { hi: '#f4f7f9', mid: '#c5ced4', lo: '#8f99a1' },
    swatch: 'url("./materials/stainless_304_brushed/preview.png")'
  },
  alu: {
    label: 'Aluminium',
    short: 'ALU',
    density: 2700,
    baseHex: '#f3f5f7',
    galvanizedHex: '#d8dcd8',
    metalness: 0.97,
    roughness: 0.17,
    grain: 'fine',
    preview: { hi: '#fcfdfe', mid: '#e4e8eb', lo: '#b8bcc0' },
    swatch: 'url("./materials/brushed_aluminium/preview.png")'
  }
};

export const PANEL_FORMS = {
  flat: { label: 'Flat sheet' },
  topFold: { label: 'Top fold' },
  sideReturns: { label: 'Side returns' },
  cassette: { label: 'Cassette panel' }
};

export const CORNER_OPTIONS = {
  square: { label: 'Square' },
  radius: { label: 'Radius' },
  chamfer: { label: 'Chamfer' }
};
export const CORNER_TREATMENT_SIZE = 10;

export function cornerTreatmentMm(config = {}) {
  if (config.corner === 'square' || !config.corner) return 0;
  const max = Math.max(1, Math.floor(Math.min(Number(config.width) || 0, Number(config.height) || 0) / 3));
  return Math.min(num(config.cornerRadius, CORNER_TREATMENT_SIZE, 1, 150, 1), max);
}

export const MOUNTING_OPTIONS = {
  none: { label: 'None' }
};

export const STOCK_SHEETS = [
  { label: '1000 × 2000', w: 1000, h: 2000 },
  { label: '1250 × 2500', w: 1250, h: 2500 },
  { label: '1500 × 3000', w: 1500, h: 3000 },
  { label: '2000 × 4000', w: 2000, h: 4000 }
];

export const MM_PER_IN = 25.4;

export const FINISHES = {
  mill: { label: 'Mill / raw', code: 'ML', roughness: 0.36 },
  galvanized: { label: 'Galvanized', code: 'GZ', roughness: 0.4 },
  brushed: { label: 'Brushed', code: 'BR', roughness: 0.22 },
  powder: { label: 'Powder coated', code: 'PC', roughness: 0.48 }
};

export const PATTERNS = {
  round60: { label: 'Round hole', short: 'R60', kind: 'round', staggered: true, through: true, family: 'standard', process: 'punch', blurb: 'Round openings on a true 60° staggered triangular pitch.' },
  square: { label: 'Square hole', short: 'SQ', kind: 'square', staggered: false, through: true, family: 'standard', process: 'punch', blurb: 'Square openings on an aligned straight grid for architectural applications.' },
  slot: { label: 'Slot hole', short: 'SL', kind: 'slot', staggered: true, through: true, family: 'standard', process: 'punch', blurb: 'Vertical round-ended slots with independent column and row pitch.' },
  hex: { label: 'Hexagonal', short: 'HX', kind: 'hex', staggered: true, through: true, family: 'standard', process: 'punch', blurb: 'True six-sided openings on a 60° staggered honeycomb layout. Size is point-to-point.' },
  roundStraight: { label: 'Round · straight', short: 'RS', kind: 'round', staggered: false, through: true, family: 'standard', process: 'punch', blurb: 'Round openings with horizontal and vertical rows aligned.' },
  bridgeSlot: { label: 'Bridge slot', short: 'BS', kind: 'bridge', staggered: true, through: true, formed: true, family: 'formed', process: 'form+punch', blurb: 'Horizontal raised bridge/louver over a slotted opening for directional flow.' },
  trieur: { label: 'Trieur cups', short: 'TR', kind: 'trieur', staggered: true, through: false, formed: true, family: 'formed', process: 'form', blurb: 'Formed sorting cups/dimples with no through-cut opening.' },
  perfocon: { label: 'Perfocon conical', short: 'PF', kind: 'perfocon', staggered: true, through: true, conical: true, formed: true, family: 'specialty', process: 'form+punch', blurb: 'Raised conical collar with a punched-through centre. Choose 30° heavy-duty or 60° DIN 9861 / ISO 6752.' },
  decorative: { label: 'Decorative clusters', short: 'DC', kind: 'decorative', staggered: false, through: true, family: 'specialty', process: 'punch', blurb: 'Repeatable 13-hole diamond clusters on a controlled motif pitch.' },
  embossed: { label: 'Embossed diamond', short: 'EM', kind: 'embossed', staggered: true, through: true, formed: true, family: 'formed', process: 'form+punch', blurb: 'Raised diamond formed on the face, punched through from the back so the opening is visible on the reverse.' }
};

export const PATTERN_GROUPS = [
  { id: 'standard', title: 'Standard perforation', keys: ['round60', 'square', 'slot', 'hex', 'roundStraight'] },
  { id: 'formed', title: 'Formed & specialty', keys: ['bridgeSlot', 'trieur', 'perfocon', 'decorative', 'embossed'] }
];

export const PATTERN_DEFAULTS = {
  round60: { holeSize: 8, pitch: 12 },
  square: { holeSize: 8, pitch: 12 },
  slot: { holeSize: 5, slotLength: 20, pitch: 12, rowPitch: 24 },
  hex: { holeSize: 8, pitch: 12 },
  roundStraight: { holeSize: 8, pitch: 12 },
  bridgeSlot: { holeSize: 4, slotLength: 22, pitch: 26, rowPitch: 12 },
  trieur: { holeSize: 8, pitch: 10 },
  perfocon: { holeSize: 3, pitch: 8 },
  decorative: { holeSize: 3, pitch: 32 },
  embossed: { holeSize: 12, pitch: 18 }
};

export const PRODUCT_NAME = 'Perforated Metal Sheet';
export const AD_LINE = 'Configure perforation, material, finish and fabrication size in real time';
export const CONTACT_EMAIL = 'mazenbanat@outlook.com';
export const CONTACT_PHONE = '+961 81931045';
export const STAGGER_ROW = Math.sqrt(3) / 2;
export const CONE_INCLUDED_OPTIONS = {
  60: { label: '60° DIN 9861', blurb: 'ISO 6752 / DIN 9861 Shape DA — standard countersunk head. d₂ = d₁ + √3 mm.' },
  30: { label: '30° heavy duty', blurb: 'Dense mill-screen packing. Head is only 1 mm larger than the entrance.' }
};

export function conicalProfile(input = {}) {
  const thickness = num(input.thickness, catalog.thickness, 0.5, 12, 0.5);
  const holeSize = num(input.holeSize, PATTERN_DEFAULTS.perfocon?.holeSize || 3, 1, 80, 1);
  const includedDeg = Number(input.coneAngle) === 30 ? 30 : 60;
  const halfRad = (includedDeg / 2) * Math.PI / 180;
  const headAdd = includedDeg === 30 ? 1 : Math.sqrt(3);
  const entrance = holeSize;
  const head = holeSize + headAdd;
  const height = (headAdd / 2) / Math.tan(halfRad);
  const exit = Number((entrance + 2 * thickness * Math.tan(halfRad)).toFixed(2));
  return { entrance, head, exit, height, includedDeg, headAdd };
}

export const catalog = {
  productName: PRODUCT_NAME,
  skuPrefix: 'PERF',
  contactEmail: CONTACT_EMAIL,
  contactPhone: CONTACT_PHONE,
  manufacturer: 'Innovio Solutions',
  width: 1200,
  height: 2400,
  thickness: 2,
  basePrice: 72,
  currency: 'USD',
  materialRateCarbon: 1.42,
  materialRateSs304: 4.85,
  materialRateAlu: 3.15,
  finishRateMill: 0,
  finishRateGalvanized: 0.58,
  finishRateBrushed: 0.42,
  finishRatePowder: 0.96,
  punchRate: 0.014,
  formedPunchRate: 0.006,
  topFoldAdd: 18,
  sideReturnsAdd: 32,
  cassetteAdd: 54,
  customFoldAdd: 28,
  mountingAdd: 12,
  formedPatternAdd: 24,
  notchAdd: 8,
  deburrStandardAdd: 4,
  deburrFineAdd: 12,
  toleranceFineAdd: 16,
  flatnessPrecisionAdd: 18,
  nonStandardBendAdd: 10
};

export const initialConfig = {
  width: 1200,
  height: 2400,
  thickness: 2,
  material: 'carbon',
  finish: 'mill',
  color: 'ral7016',
  pattern: 'round60',
  holeSize: 8,
  slotLength: 20,
  pitch: 12,
  rowPitch: 12,
  border: 25,
  orientation: 'portrait',
  units: 'mm',
  quantity: 1,
  panelForm: 'flat',
  flangeDepth: 25,
  bendAngle: 90,
  bendRadius: 2,
  corner: 'square',
  cornerRadius: 10,
  mounting: 'none',
  mountingPitch: 150,
  notches: false,
  deburr: 'standard',
  tolerance: 'iso-m',
  flatness: 'standard',
  coneAngle: 60
};

export function toDisplay(mm, units, digits = units === 'in' ? 3 : 0) {
  const n = units === 'in' ? mm / MM_PER_IN : mm;
  return Number(n.toFixed(digits));
}

export function fromDisplay(value, units) {
  const n = Number(value);
  if (!Number.isFinite(n)) return n;
  return units === 'in' ? n * MM_PER_IN : n;
}

function num(value, fallback, min, max, step = 1) {
  const n = Number(value);
  const x = Number.isFinite(n) ? n : fallback;
  return Math.min(max, Math.max(min, Math.round(x / step) * step));
}

export function applyProduct(product) {
  if (!product || typeof product !== 'object') return { ...catalog };
  if (product.productName) catalog.productName = String(product.productName).slice(0, 120);
  if (product.skuPrefix) catalog.skuPrefix = String(product.skuPrefix).replace(/[^A-Za-z0-9]/g, '').slice(0, 24).toUpperCase() || catalog.skuPrefix;
  if (product.contactEmail) catalog.contactEmail = String(product.contactEmail).slice(0, 120);
  if (product.manufacturer) catalog.manufacturer = String(product.manufacturer).slice(0, 80);
  const width = Number(product.width);
  const height = Number(product.height);
  const thickness = Number(product.depth);
  if (Number.isFinite(width)) catalog.width = num(width, catalog.width, 200, 3000, 5);
  if (Number.isFinite(height)) catalog.height = num(height, catalog.height, 200, 4000, 5);
  if (Number.isFinite(thickness)) catalog.thickness = num(thickness, catalog.thickness, 0.5, 12, 0.5);
  const priceKeys = [
    'basePrice', 'materialRateCarbon', 'materialRateSs304', 'materialRateAlu',
    'finishRateMill', 'finishRateGalvanized', 'finishRateBrushed', 'finishRatePowder',
    'punchRate', 'formedPunchRate', 'topFoldAdd', 'sideReturnsAdd', 'cassetteAdd',
    'customFoldAdd', 'mountingAdd', 'formedPatternAdd', 'notchAdd', 'deburrStandardAdd',
    'deburrFineAdd', 'toleranceFineAdd', 'flatnessPrecisionAdd', 'nonStandardBendAdd'
  ];
  for (const key of priceKeys) {
    const value = Number(product[key]);
    if (Number.isFinite(value) && value >= 0) catalog[key] = value;
  }
  if (product.currency) catalog.currency = String(product.currency).replace(/[^A-Za-z]/g, '').slice(0, 3).toUpperCase() || catalog.currency;
  return { ...catalog };
}

export function decorativeFeatureSpacing(input = {}) {
  const thickness = num(input.thickness, catalog.thickness, 0.5, 12, 0.5);
  const holeSize = num(input.holeSize, PATTERN_DEFAULTS.decorative.holeSize, 1, 80, 1);
  const ligament = Math.max(2, thickness);
  return Math.max(holeSize + ligament, holeSize * 1.55);
}

export function decorativeClusterSpan(input = {}) {
  const holeSize = num(input.holeSize, PATTERN_DEFAULTS.decorative.holeSize, 1, 80, 1);
  return decorativeFeatureSpacing(input) * 4 + holeSize;
}

export function fabricationLimits(input = {}) {
  const thickness = num(input.thickness, catalog.thickness, 0.5, 12, 0.5);
  const pattern = PATTERNS[input.pattern] || PATTERNS[initialConfig.pattern];
  const kind = pattern?.kind;
  const holeSize = num(input.holeSize, initialConfig.holeSize, 1, 80, 1);
  const slotLength = num(input.slotLength, initialConfig.slotLength, 1, 160, 1);
  const through = pattern?.through !== false;
  const ligament = Math.max(2, thickness);
  const minHoleSize = through ? (pattern?.conical ? 1 : Math.max(2, Math.ceil(thickness))) : Math.max(2, Math.ceil(thickness * 1.5));
  const cone = pattern?.conical ? conicalProfile({ ...input, thickness, holeSize }) : null;
  const envelope = cone ? cone.exit : holeSize;
  let minPitchX;
  let minRowPitch;
  if (kind === 'slot') {
    minPitchX = Math.ceil(holeSize + ligament);
    minRowPitch = Math.ceil(slotLength + ligament);
  } else if (kind === 'bridge') {
    minPitchX = Math.ceil(slotLength + ligament);
    minRowPitch = Math.ceil(holeSize + ligament);
  } else if (kind === 'decorative') {
    minPitchX = Math.ceil(decorativeClusterSpan({ ...input, thickness, holeSize }) + ligament);
    minRowPitch = minPitchX;
  } else {
    minPitchX = Math.ceil(envelope + ligament);
    minRowPitch = Math.ceil(minPitchX * (pattern?.staggered ? STAGGER_ROW : 1));
  }
  const borderEnvelope = kind === 'decorative' ? decorativeClusterSpan({ ...input, thickness, holeSize }) / 2 : envelope / 2;
  const minBorder = Math.ceil(Math.max(thickness, borderEnvelope) / 5) * 5;
  return {
    minHoleSize,
    minPitch: Math.max(3, minPitchX),
    minPitchX: Math.max(3, minPitchX),
    minRowPitch: Math.max(3, minRowPitch),
    minSlotLength: Math.max(3, Math.ceil(holeSize + 2)),
    minBorder,
    ligament
  };
}

export function normalizeConfig(input = {}) {
  const next = { ...initialConfig, ...input };
  if (next.material === 'ss316') next.material = 'alu';
  if (!MATERIALS[next.material]) next.material = initialConfig.material;
  if (!FINISHES[next.finish]) next.finish = initialConfig.finish;
  if (!FINISH_COLORS[next.color]) next.color = initialConfig.color;
  if (!PATTERNS[next.pattern]) next.pattern = initialConfig.pattern;
  next.width = num(next.width, catalog.width, 200, 3000, 5);
  next.height = num(next.height, catalog.height, 200, 4000, 5);
  next.thickness = num(next.thickness, catalog.thickness, 0.5, 12, 0.5);
  // Preserve customer-entered fabrication values; validation reports conflicts rather than silently correcting them.
  next.holeSize = num(next.holeSize, initialConfig.holeSize, 1, 80, 1);
  next.slotLength = num(next.slotLength, initialConfig.slotLength, 1, 160, 1);
  next.pitch = num(next.pitch, initialConfig.pitch, 2, 200, 1);
  next.rowPitch = num(next.rowPitch, PATTERN_DEFAULTS[next.pattern]?.rowPitch ?? next.pitch, 2, 200, 1);
  const borderMax = Math.floor(Math.min(next.width, next.height) / 3);
  next.border = num(next.border, initialConfig.border, 0, Math.max(0, borderMax), 5);
  next.units = next.units === 'in' ? 'in' : 'mm';
  next.quantity = num(next.quantity, 1, 1, 9999, 1);
  if (next.panelForm === 'customFold') next.panelForm = 'topFold';
  next.panelForm = PANEL_FORMS[next.panelForm] ? next.panelForm : 'flat';
  next.flangeDepth = num(next.flangeDepth, 25, 8, 150, 1);
  next.bendAngle = num(next.bendAngle, 90, 30, 120, 1);
  next.bendRadius = num(next.bendRadius, 2, 0.5, 20, 0.5);
  next.corner = CORNER_OPTIONS[next.corner] ? next.corner : 'square';
  next.cornerRadius = num(next.cornerRadius, CORNER_TREATMENT_SIZE, 1, 150, 1);
  next.mounting = 'none';
  next.mountingPitch = num(next.mountingPitch, 150, 40, 600, 5);
  next.notches = false;
  next.deburr = ['none', 'standard', 'fine'].includes(next.deburr) ? next.deburr : 'standard';
  next.tolerance = ['iso-c', 'iso-m', 'iso-f'].includes(next.tolerance) ? next.tolerance : 'iso-m';
  next.flatness = next.flatness === 'precision' ? 'precision' : 'standard';
  next.orientation = next.orientation === 'landscape' ? 'landscape' : 'portrait';
  next.coneAngle = Number(next.coneAngle) === 30 ? 30 : 60;
  return next;
}

export function catalogInitialConfig() {
  return normalizeConfig({
    ...initialConfig,
    width: catalog.width,
    height: catalog.height,
    thickness: catalog.thickness
  });
}

export function configReducer(state, action) {
  switch (action.type) {
    case 'set':
      return normalizeConfig({ ...state, [action.key]: action.value });
    case 'setMany':
      return normalizeConfig({ ...state, ...action.values });
    case 'load':
      return normalizeConfig(action.config);
    case 'applyCatalogDefaults': {
      const untouched = state.width === initialConfig.width && state.height === initialConfig.height && state.thickness === initialConfig.thickness;
      if (!untouched) return state;
      return normalizeConfig({ ...state, ...action.values });
    }
    case 'reset':
      return catalogInitialConfig();
    default:
      return state;
  }
}

export function holeLayout(config) {
  const c = normalizeConfig(config);
  const pattern = PATTERNS[c.pattern];
  const staggered = Boolean(pattern?.staggered);
  const rowPitch = (pattern?.kind === 'slot' || pattern?.kind === 'bridge') ? c.rowPitch : staggered ? c.pitch * STAGGER_ROW : c.pitch;
  return {
    c,
    staggered,
    rowPitch,
    left: c.border,
    right: c.width - c.border,
    bottom: c.border,
    top: c.height - c.border
  };
}

function countCenters(first, last, step) {
  if (!(step > 0) || first > last + 1e-6) return 0;
  return Math.floor((last - first) / step + 1e-6) + 1;
}

export function forEachHole(config, callback, { limit = Infinity } = {}) {
  const { c, staggered, rowPitch, left, right, bottom, top } = holeLayout(config);
  let row = 0;
  let count = 0;
  for (let y = bottom + rowPitch / 2; y <= top - rowPitch / 2 + 1e-6; y += rowPitch, row++) {
    const stagger = staggered && row % 2 ? c.pitch / 2 : 0;
    for (let x = left + c.pitch / 2 + stagger; x <= right - c.pitch / 2 + 1e-6; x += c.pitch) {
      if (callback(x, y, count) === false) return count;
      count += 1;
      if (count >= limit) return count;
    }
  }
  return count;
}

export function decorativeOffsets(config) {
  const c = normalizeConfig(config);
  const s = decorativeFeatureSpacing(c);
  return [
    [0, -2 * s],
    [-s, -s], [0, -s], [s, -s],
    [-2 * s, 0], [-s, 0], [0, 0], [s, 0], [2 * s, 0],
    [-s, s], [0, s], [s, s],
    [0, 2 * s]
  ];
}

export function featureDiameter(config) {
  const c = normalizeConfig(config);
  return c.holeSize;
}

export function estimatedCellCount(config) {
  const { c, staggered, rowPitch, left, right, bottom, top } = holeLayout(config);
  const rows = countCenters(bottom + rowPitch / 2, top - rowPitch / 2, rowPitch);
  if (rows <= 0) return 0;
  const evenCols = countCenters(left + c.pitch / 2, right - c.pitch / 2, c.pitch);
  if (!staggered) return rows * evenCols;
  const oddCols = countCenters(left + c.pitch, right - c.pitch / 2, c.pitch);
  const evenRows = Math.ceil(rows / 2);
  const oddRows = Math.floor(rows / 2);
  return evenRows * evenCols + oddRows * oddCols;
}

export function forEachOpening(config, callback, { limit = Infinity } = {}) {
  const c = normalizeConfig(config);
  const kind = PATTERNS[c.pattern]?.kind;
  const offsets = kind === 'decorative' ? decorativeOffsets(c) : [[0, 0]];
  let count = 0;
  forEachHole(c, (x, y) => {
    for (const [dx, dy] of offsets) {
      callback(x + dx, y + dy, count);
      count += 1;
      if (count >= limit) return false;
    }
    return undefined;
  });
  return count;
}

export function estimatedHoleCount(config) {
  const cells = estimatedCellCount(config);
  const c = normalizeConfig(config);
  if (PATTERNS[c.pattern]?.kind === 'decorative') return cells * decorativeOffsets(c).length;
  return cells;
}

export function openAreaPercent(config) {
  const c = normalizeConfig(config);
  const pattern = PATTERNS[c.pattern];
  const kind = pattern?.kind;
  if (pattern?.through === false) return 0;

  const d = c.holeSize;
  const p = Math.max(c.pitch, 0.1);
  let fraction = 0;
  if (kind === 'round' || kind === 'perfocon') {
    const cellArea = pattern?.staggered ? p * p * STAGGER_ROW : p * p;
    fraction = (Math.PI * (d / 2) ** 2) / Math.max(1e-6, cellArea);
  } else if (kind === 'square') {
    fraction = (d * d) / Math.max(1e-6, p * p);
  } else if (kind === 'hex') {
    const hexArea = (3 * Math.sqrt(3) / 8) * d * d;
    const cellArea = p * p * STAGGER_ROW;
    fraction = hexArea / Math.max(1e-6, cellArea);
  } else if (kind === 'decorative') {
    const motifArea = p * p;
    const openingArea = decorativeOffsets(c).length * Math.PI * (d / 2) ** 2;
    fraction = openingArea / Math.max(1e-6, motifArea);
  } else if (kind === 'slot' || kind === 'bridge') {
    const w = d;
    const l = Math.max(c.slotLength, w);
    const slotArea = Math.max(0, l - w) * w + Math.PI * (w / 2) ** 2;
    fraction = slotArea / Math.max(1e-6, c.pitch * c.rowPitch);
  } else if (kind === 'embossed') {
    const diamondArea = (d * d) / 2;
    const cellArea = p * p * STAGGER_ROW;
    fraction = diamondArea / Math.max(1e-6, cellArea);
  }
  return Math.min(88, Math.max(0, fraction * 100));
}

export function estimatedWeightKg(config) {
  const c = normalizeConfig(config);
  const density = MATERIALS[c.material].density;
  const volumeM3 = (c.width / 1000) * (c.height / 1000) * (c.thickness / 1000);
  const activeW = Math.max(0, c.width - c.border * 2);
  const activeH = Math.max(0, c.height - c.border * 2);
  const activeRatio = (activeW * activeH) / Math.max(1, c.width * c.height);
  const removed = (openAreaPercent(c) / 100) * activeRatio;
  return volumeM3 * density * (1 - removed);
}

export function finishAppearance(config) {
  const c = normalizeConfig(config);
  const material = MATERIALS[c.material] || MATERIALS.carbon;
  const preset = pbrPresetFor(c);
  let hex = preset.hex || material.baseHex;
  let metalness = preset.metalness;
  let roughness = preset.roughness;
  let envMapIntensity = preset.envMapIntensity;
  let clearcoat = preset.clearcoat;
  let anisotropy = preset.anisotropy;
  if (c.finish === 'powder') {
    hex = FINISH_COLORS[c.color].hex;
    metalness = 0;
    roughness = preset.roughness;
    envMapIntensity = preset.envMapIntensity;
    clearcoat = preset.clearcoat;
    anisotropy = 0;
  }
  return { hex, metalness, roughness, envMapIntensity, clearcoat, anisotropy, grain: material.grain, pbr: preset };
}

export function quantityBreak(qty) {
  if (qty >= 50) return 0.82;
  if (qty >= 20) return 0.9;
  if (qty >= 5) return 0.96;
  return 1;
}

export function estimatedPrice(config) {
  const c = normalizeConfig(config);
  const mass = estimatedWeightKg(c);
  const rate = { carbon: catalog.materialRateCarbon, ss304: catalog.materialRateSs304, alu: catalog.materialRateAlu }[c.material] ?? catalog.materialRateCarbon;
  const finish = { mill: catalog.finishRateMill, galvanized: catalog.finishRateGalvanized, brushed: catalog.finishRateBrushed, powder: catalog.finishRatePowder }[c.finish] ?? 0;
  const holes = estimatedHoleCount(c);
  const pattern = PATTERNS[c.pattern] || {};
  const formAdd = { flat: 0, topFold: catalog.topFoldAdd, sideReturns: catalog.sideReturnsAdd, cassette: catalog.cassetteAdd, customFold: catalog.customFoldAdd }[c.panelForm] || 0;
  const mountAdd = c.mounting === 'none' ? 0 : catalog.mountingAdd;
  const punch = holes * (pattern.through === false ? catalog.formedPunchRate : catalog.punchRate);
  const formedAdd = pattern.formed ? catalog.formedPatternAdd : 0;
  const deburrAdd = c.deburr === 'fine' ? catalog.deburrFineAdd : c.deburr === 'standard' ? catalog.deburrStandardAdd : 0;
  const toleranceAdd = c.tolerance === 'iso-f' ? catalog.toleranceFineAdd : 0;
  const flatnessAdd = c.flatness === 'precision' ? catalog.flatnessPrecisionAdd : 0;
  const bendAdd = c.panelForm !== 'flat' && Math.abs(c.bendAngle - 90) > 0.5 ? catalog.nonStandardBendAdd : 0;
  const unit = mass * (rate + finish) + punch + catalog.basePrice + formAdd + mountAdd + formedAdd
    + deburrAdd + toleranceAdd + flatnessAdd + bendAdd;
  return unit * c.quantity * quantityBreak(c.quantity);
}

export const estimatedPriceUsd = estimatedPrice;

export function formatMoney(value, currency = catalog.currency) {
  const amount = Number(value) || 0;
  const code = String(currency || 'USD').toUpperCase();
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: code, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);
  } catch {
    return `${code} ${amount.toFixed(2)}`;
  }
}

export function leadTimeLabel(config) {
  const c = normalizeConfig(config);
  let min = 3;
  let max = 5;
  if (c.finish === 'powder') { min += 2; max += 2; }
  else if (c.finish === 'galvanized') { min += 1; max += 1; }
  if (c.panelForm !== 'flat') { min += 1; max += 2; }
  if (c.deburr === 'fine') max += 1;
  if (c.tolerance === 'iso-f') { min += 1; max += 1; }
  if (c.flatness === 'precision') { min += 1; max += 2; }
  const qtyAdd = Math.min(10, Math.floor((c.quantity - 1) / 15));
  min += qtyAdd;
  max += Math.min(12, Math.ceil(c.quantity / 12));
  return `${min}–${max} days`;
}

export function stockAvailability(config) {
  const c = normalizeConfig(config);
  const fits = (sheet, w, h) => w <= sheet.w && h <= sheet.h;
  const fit = STOCK_SHEETS.find((sheet) => fits(sheet, c.width, c.height) || fits(sheet, c.height, c.width));
  if (fit) {
    const rotated = !(c.width <= fit.w && c.height <= fit.h);
    return { ok: true, sheet: fit, rotated, label: rotated ? `Fits ${fit.label} mm stock if rotated` : `Fits ${fit.label} mm stock` };
  }
  return { ok: false, sheet: null, rotated: false, label: 'Exceeds standard stock sheet sizes' };
}

export function manufacturingIssues(config) {
  const c = normalizeConfig(config);
  const limits = fabricationLimits(c);
  const pattern = PATTERNS[c.pattern];
  const kind = pattern?.kind;
  const issues = [];
  const through = pattern?.through !== false;
  if (c.holeSize < limits.minHoleSize) issues.push({ level: 'block', field: 'holeSize', text: `${through ? 'Opening' : 'Formed feature'} ${c.holeSize} mm is below the ${limits.minHoleSize} mm minimum for ${c.thickness} mm material.` });
  if ((kind === 'slot' || kind === 'bridge') && c.slotLength < limits.minSlotLength) issues.push({ level: 'block', field: 'slotLength', text: `Slot length ${c.slotLength} mm must be at least ${limits.minSlotLength} mm for a ${c.holeSize} mm slot width.` });
  if (c.pitch < limits.minPitchX) issues.push({ level: 'block', field: 'pitch', text: `${kind === 'decorative' ? 'Motif pitch' : (kind === 'slot' || kind === 'bridge') ? 'Column pitch' : 'Pitch'} ${c.pitch} mm is below the ${limits.minPitchX} mm minimum for this pattern.` });
  if ((kind === 'slot' || kind === 'bridge') && c.rowPitch < limits.minRowPitch) issues.push({ level: 'block', field: 'rowPitch', text: `Row pitch ${c.rowPitch} mm is below the ${limits.minRowPitch} mm minimum for this ${kind === 'slot' ? 'vertical slot' : 'horizontal bridge slot'} geometry.` });
  if (c.border < limits.minBorder) issues.push({ level: 'block', field: 'border', text: `Edge distance ${c.border} mm is below the ${limits.minBorder} mm minimum.` });
  if (c.mounting !== 'none' && c.border < 18) issues.push({ level: 'block', field: 'border', text: 'Mounting features require at least an 18 mm solid perimeter border.' });
  if (c.panelForm !== 'flat' && c.flangeDepth < c.thickness * 4) issues.push({ level: 'warn', field: 'flangeDepth', text: `Flange depth should be at least 4× thickness (${c.thickness * 4} mm).` });
  if (c.panelForm !== 'flat' && c.bendRadius < c.thickness) issues.push({ level: 'warn', field: 'bendRadius', text: 'Bend radius is below material thickness and may crack.' });
  const stock = stockAvailability(c);
  if (!stock.ok) issues.push({ level: 'warn', text: stock.label + '. Confirm a custom blank or nested yield.' });
  if (estimatedHoleCount(c) > 250000) issues.push({ level: 'warn', text: 'Opening count is high; perforation time and cost will increase.' });
  return issues;
}

export function recommendedManufacturingFixes(config) {
  const c = normalizeConfig(config);
  const fixed = {};
  let limits = fabricationLimits(c);
  if (c.holeSize < limits.minHoleSize) fixed.holeSize = limits.minHoleSize;
  const firstPass = normalizeConfig({ ...c, ...fixed });
  limits = fabricationLimits(firstPass);
  if ((PATTERNS[c.pattern]?.kind === 'slot' || PATTERNS[c.pattern]?.kind === 'bridge') && firstPass.slotLength < limits.minSlotLength) fixed.slotLength = limits.minSlotLength;
  const projected = normalizeConfig({ ...c, ...fixed });
  limits = fabricationLimits(projected);
  if (projected.pitch < limits.minPitchX) fixed.pitch = limits.minPitchX;
  if ((PATTERNS[c.pattern]?.kind === 'slot' || PATTERNS[c.pattern]?.kind === 'bridge') && projected.rowPitch < limits.minRowPitch) fixed.rowPitch = limits.minRowPitch;
  if (projected.border < limits.minBorder) fixed.border = limits.minBorder;
  if (projected.mounting !== 'none' && projected.border < 18) fixed.border = Math.max(fixed.border || 0, 20);
  if (projected.panelForm !== 'flat' && projected.flangeDepth < projected.thickness * 4) fixed.flangeDepth = Math.ceil(projected.thickness * 4);
  if (projected.panelForm !== 'flat' && projected.bendRadius < projected.thickness) fixed.bendRadius = projected.thickness;
  return fixed;
}

export function specificationText({ config, sku, openArea, weight, price, lead, currency = catalog.currency }) {
  const c = normalizeConfig(config);
  const finish = `${FINISHES[c.finish].label}${c.finish === 'powder' ? ` · ${FINISH_COLORS[c.color].label} – ${FINISH_COLORS[c.color].name}` : ''}`;
  const slotPattern = PATTERNS[c.pattern]?.kind === 'slot' || PATTERNS[c.pattern]?.kind === 'bridge';
  const pitch = slotPattern ? `${c.pitch} × ${c.rowPitch} mm centers` : `${c.pitch} mm centers`;
  const kind = PATTERNS[c.pattern]?.kind;
  const feature = kind === 'trieur' ? `cup ${c.holeSize} mm` : kind === 'embossed' ? `diamond ${c.holeSize} mm punched through` : kind === 'perfocon' ? `entrance Ø${c.holeSize} mm / ${conicalProfile(c).includedDeg}° head Ø${conicalProfile(c).head.toFixed(2)} mm / exit Ø${conicalProfile(c).exit} mm` : kind === 'hex' ? `hex ${c.holeSize} mm point-to-point` : `opening ${c.holeSize} mm`;
  return [
    `SKU: ${sku}`,
    `Sheet: ${c.width} × ${c.height} × ${c.thickness} mm`,
    `Material: ${MATERIALS[c.material].label}`,
    `Pattern: ${PATTERNS[c.pattern].label} · ${feature} · ${pitch}`,
    ...(slotPattern ? [`Slot length: ${c.slotLength} mm`] : []),
    `Finish: ${finish}`,
    `Form: ${PANEL_FORMS[c.panelForm].label}${c.panelForm !== 'flat' ? ` · flange ${c.flangeDepth} mm · bend ${c.bendAngle}° · R${c.bendRadius}` : ''}`,
    `Corner treatment: ${CORNER_OPTIONS[c.corner].label}${c.corner === 'square' ? '' : ` ${cornerTreatmentMm(c)} mm`}`,
    `Deburr: ${c.deburr} · tolerance: ${c.tolerance} · flatness: ${c.flatness}`,
    `Quantity: ${c.quantity}`,
    `Open area: ${openArea.toFixed(1)}%`,
    `Est. mass: ${weight.toFixed(1)} kg`,
    `Indicative price: ${formatMoney(price, currency)}`,
    `Lead time: ${lead}`
  ].join('\n');
}

export function skuFor(config, prefix = catalog.skuPrefix) {
  const c = normalizeConfig(config);
  const mat = MATERIALS[c.material].short;
  const finish = FINISHES[c.finish].code;
  const finishCode = c.finish === 'powder' ? FINISH_COLORS[c.color].label.replace('RAL ', '') : finish;
  const patt = PATTERNS[c.pattern].short;
  const pitchCode = (PATTERNS[c.pattern]?.kind === 'slot' || PATTERNS[c.pattern]?.kind === 'bridge') ? `${c.pitch}X${c.rowPitch}P` : `${c.pitch}P`;
  const coneCode = PATTERNS[c.pattern]?.conical ? `C${c.coneAngle}` : '';
  return `${prefix}-${mat}-${c.thickness}T-${patt}${c.holeSize}${coneCode}-${pitchCode}-${finishCode}`.replace(/\.0/g, '');
}

export function configViewUrl(config) {
  const c = normalizeConfig(config);
  const url = new URL(location.origin + location.pathname.replace(/index\.html$/i, ''));
  const pairs = {
    w: c.width, h: c.height, t: c.thickness, m: c.material, f: c.finish,
    c: c.color, p: c.pattern, d: c.holeSize, l: c.slotLength, x: c.pitch, y: c.rowPitch,
    b: c.border, q: c.quantity, form: c.panelForm, fd: c.flangeDepth, ba: c.bendAngle,
    br: c.bendRadius, corner: c.corner, cr: c.cornerRadius, mount: c.mounting, mp: c.mountingPitch,
    deburr: c.deburr, tol: c.tolerance, flat: c.flatness,
    o: c.orientation, u: c.units, cone: c.coneAngle
  };
  Object.entries(pairs).forEach(([key, value]) => url.searchParams.set(key, value));
  return url.toString();
}

export function configFromRecord(record) {
  const root = record?.configuration || record || {};
  const cfg = root.configuration && typeof root.configuration === 'object' ? root.configuration : root;
  if (!cfg || cfg.omitted) return null;
  return normalizeConfig(cfg);
}

export function readConfigFromUrl() {
  const p = new URL(location.href).searchParams;
  const pattern = p.get('p') ?? initialConfig.pattern;
  const defaults = PATTERN_DEFAULTS[pattern] || {};
  return normalizeConfig({
    width: p.get('w') ?? catalog.width,
    height: p.get('h') ?? catalog.height,
    thickness: p.get('t') ?? catalog.thickness,
    material: p.get('m') ?? initialConfig.material,
    finish: p.get('f') ?? initialConfig.finish,
    color: p.get('c') ?? initialConfig.color,
    pattern,
    holeSize: p.get('d') ?? defaults.holeSize ?? initialConfig.holeSize,
    slotLength: p.get('l') ?? defaults.slotLength ?? initialConfig.slotLength,
    pitch: p.get('x') ?? defaults.pitch ?? initialConfig.pitch,
    rowPitch: p.get('y') ?? defaults.rowPitch ?? initialConfig.rowPitch,
    border: p.get('b') ?? initialConfig.border,
    quantity: p.get('q') ?? initialConfig.quantity,
    panelForm: p.get('form') ?? initialConfig.panelForm,
    flangeDepth: p.get('fd') ?? initialConfig.flangeDepth,
    bendAngle: p.get('ba') ?? initialConfig.bendAngle,
    bendRadius: p.get('br') ?? initialConfig.bendRadius,
    corner: p.get('corner') ?? initialConfig.corner,
    cornerRadius: p.get('cr') ?? initialConfig.cornerRadius,
    mounting: p.get('mount') ?? initialConfig.mounting,
    mountingPitch: p.get('mp') ?? initialConfig.mountingPitch,
    notches: false,
    deburr: p.get('deburr') ?? initialConfig.deburr,
    tolerance: p.get('tol') ?? initialConfig.tolerance,
    flatness: p.get('flat') ?? initialConfig.flatness,
    orientation: p.get('o') ?? initialConfig.orientation,
    units: p.get('u') ?? initialConfig.units,
    coneAngle: p.get('cone') ?? initialConfig.coneAngle
  });
}

