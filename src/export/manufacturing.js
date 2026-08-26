import {
  CORNER_OPTIONS, FINISHES, FINISH_COLORS, MATERIALS, PANEL_FORMS, PATTERNS,
  cornerTreatmentMm, estimatedHoleCount, estimatedWeightKg, forEachHole, forEachOpening,
  normalizeConfig, openAreaPercent, conicalProfile
} from '../state/config.js';

const K_FACTOR = 0.33;

function downloadText(filename, text, type = 'text/plain;charset=utf-8') {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = String(filename).replace(/[<>:"/\\|?*\u0000-\u001f]+/g, '-');
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 2500);
}

function dxfPair(code, value) { return `${code}\n${value}\n`; }
function n4(value) { return Number(Number(value).toFixed(4)); }
function circle(layer, x, y, r) {
  return dxfPair(0, 'CIRCLE') + dxfPair(8, layer) + dxfPair(10, n4(x)) + dxfPair(20, n4(y)) + dxfPair(30, 0) + dxfPair(40, n4(r));
}
function line(layer, x1, y1, x2, y2) {
  return dxfPair(0, 'LINE') + dxfPair(8, layer) + dxfPair(10, n4(x1)) + dxfPair(20, n4(y1)) + dxfPair(30, 0)
    + dxfPair(11, n4(x2)) + dxfPair(21, n4(y2)) + dxfPair(31, 0);
}
function textEntity(layer, x, y, text, height = 6, rotation = 0) {
  const safe = String(text).replace(/[^\x20-\x7E]/g, ' ').slice(0, 220);
  return dxfPair(0, 'TEXT') + dxfPair(8, layer) + dxfPair(10, n4(x)) + dxfPair(20, n4(y)) + dxfPair(30, 0)
    + dxfPair(40, n4(height)) + dxfPair(1, safe) + dxfPair(50, n4(rotation));
}
function polyline(layer, points, closed = true) {
  let s = dxfPair(0, 'LWPOLYLINE') + dxfPair(8, layer) + dxfPair(90, points.length) + dxfPair(70, closed ? 1 : 0);
  for (const point of points) {
    const [x, y, bulge = 0] = point;
    s += dxfPair(10, n4(x)) + dxfPair(20, n4(y));
    if (Math.abs(bulge) > 1e-9) s += dxfPair(42, n4(bulge));
  }
  return s;
}
function rect(layer, x1, y1, x2, y2) { return polyline(layer, [[x1,y1],[x2,y1],[x2,y2],[x1,y2]], true); }
function roundedRect(layer, x1, y1, x2, y2, radius) {
  const r = Math.max(0, Math.min(radius, Math.abs(x2 - x1) / 2, Math.abs(y2 - y1) / 2));
  if (r <= 0.01) return rect(layer, x1, y1, x2, y2);
  const b = Math.tan(Math.PI / 8);
  return polyline(layer, [
    [x1 + r, y1], [x2 - r, y1, b], [x2, y1 + r], [x2, y2 - r, b],
    [x2 - r, y2], [x1 + r, y2, b], [x1, y2 - r], [x1, y1 + r, b]
  ], true);
}
function chamferedRect(layer, x1, y1, x2, y2, size) {
  const c = Math.max(0, Math.min(size, Math.abs(x2 - x1) / 3, Math.abs(y2 - y1) / 3));
  return polyline(layer, [[x1+c,y1],[x2-c,y1],[x2,y1+c],[x2,y2-c],[x2-c,y2],[x1+c,y2],[x1,y2-c],[x1,y1+c]], true);
}
function slotPoints(cx, cy, width, length, { segments = 10, horizontal = false } = {}) {
  const r = width / 2;
  const halfStraight = Math.max(0, (length - width) / 2);
  const pts = [];
  if (horizontal) {
    for (let i = 0; i <= segments; i++) { const a = i / segments * Math.PI; pts.push([cx + halfStraight + r * Math.sin(a), cy + r * Math.cos(a)]); }
    for (let i = 0; i <= segments; i++) { const a = Math.PI + i / segments * Math.PI; pts.push([cx - halfStraight + r * Math.sin(a), cy + r * Math.cos(a)]); }
    return pts;
  }
  for (let i = 0; i <= segments; i++) { const a = i / segments * Math.PI; pts.push([cx + r * Math.cos(a), cy + halfStraight + r * Math.sin(a)]); }
  for (let i = 0; i <= segments; i++) { const a = Math.PI + i / segments * Math.PI; pts.push([cx + r * Math.cos(a), cy - halfStraight + r * Math.sin(a)]); }
  return pts;
}
function hexPoints(x, y, r) { return Array.from({ length: 6 }, (_, i) => { const a = Math.PI / 3 * i; return [x + r * Math.cos(a), y + r * Math.sin(a)]; }); }
function diamondPoints(x, y, size) { const r = size / 2; return [[x, y - r], [x + r, y], [x, y + r], [x - r, y]]; }
function processLabel(pattern) {
  if (pattern.conical) return 'Conical punch (small entrance, larger exit)';
  if (pattern.kind === 'trieur') return 'Emboss / form only - no through-cut';
  if (pattern.kind === 'embossed') return 'Formed diamond, punched through from the reverse';
  if (pattern.kind === 'bridge') return 'Formed bridge over slotted opening';
  if (pattern.through === false) return 'Formed';
  return 'Punch';
}
function bendData(c) {
  if (c.panelForm === 'flat') return { kFactor: K_FACTOR, allowance: 0, deduction: 0, developedFlange: 0 };
  const angle = Math.max(1, Math.min(179, c.bendAngle)) * Math.PI / 180;
  const allowance = angle * (c.bendRadius + K_FACTOR * c.thickness);
  const setback = Math.tan(angle / 2) * (c.bendRadius + c.thickness);
  const deduction = Math.max(0, 2 * setback - allowance);
  return { kFactor: K_FACTOR, allowance, deduction, developedFlange: Math.max(c.thickness * 2, c.flangeDepth - deduction / 2) };
}
export function flatPatternMetrics(config) {
  const c = normalizeConfig(config);
  const bend = bendData(c);
  const f = bend.developedFlange;
  const flags = {
    left: c.panelForm === 'sideReturns' || c.panelForm === 'cassette',
    right: c.panelForm === 'sideReturns' || c.panelForm === 'cassette',
    top: c.panelForm === 'topFold' || c.panelForm === 'cassette',
    bottom: c.panelForm === 'cassette'
  };
  const ext = { left: flags.left ? f : 0, right: flags.right ? f : 0, top: flags.top ? f : 0, bottom: flags.bottom ? f : 0 };
  return { c, bend, flags, ext, faceX: ext.left, faceY: ext.bottom, blankWidth: c.width + ext.left + ext.right, blankHeight: c.height + ext.top + ext.bottom };
}
function outerProfile(m) {
  const { c, ext, blankWidth: w, blankHeight: h } = m;
  if (c.panelForm === 'cassette' && ext.left && ext.right && ext.top && ext.bottom) {
    return polyline('CUT_OUTER', [
      [ext.left,0],[ext.left+c.width,0],[ext.left+c.width,ext.bottom],[w,ext.bottom],
      [w,ext.bottom+c.height],[ext.left+c.width,ext.bottom+c.height],[ext.left+c.width,h],[ext.left,h],
      [ext.left,ext.bottom+c.height],[0,ext.bottom+c.height],[0,ext.bottom],[ext.left,ext.bottom]
    ], true);
  }
  if (c.corner === 'radius') return roundedRect('CUT_OUTER', 0, 0, w, h, cornerTreatmentMm(c));
  if (c.corner === 'chamfer') return chamferedRect('CUT_OUTER', 0, 0, w, h, cornerTreatmentMm(c));
  return rect('CUT_OUTER', 0, 0, w, h);
}
function bendEntities(m) {
  const { c, flags, faceX: x, faceY: y } = m;
  let s = '';
  const note = `BEND ${c.bendAngle}deg R${c.bendRadius} BA=${m.bend.allowance.toFixed(2)} BD=${m.bend.deduction.toFixed(2)} K=${m.bend.kFactor}`;
  if (flags.left) { s += line('BEND', x, y, x, y + c.height); s += textEntity('BEND_NOTE', Math.max(1, x - 7), y + c.height / 2, note, 4, 90); }
  if (flags.right) s += line('BEND', x + c.width, y, x + c.width, y + c.height);
  if (flags.bottom) s += line('BEND', x, y, x + c.width, y);
  if (flags.top) { s += line('BEND', x, y + c.height, x + c.width, y + c.height); s += textEntity('BEND_NOTE', x + 8, y + c.height + 7, note, 4, 0); }
  return s;
}
function notchEntities(m) {
  if (!m.c.notches) return '';
  const { c, faceX: x, faceY: y } = m;
  const n = Math.max(10, Math.min(25, c.flangeDepth * 0.5));
  return [[x,y,x+n,y+n],[x+c.width-n,y,x+c.width,y+n],[x,y+c.height-n,x+n,y+c.height],[x+c.width-n,y+c.height-n,x+c.width,y+c.height]]
    .map(([x1,y1,x2,y2]) => rect('CUT_NOTCH', x1, y1, x2, y2)).join('');
}
function perforationEntities(m) {
  const { c, faceX, faceY } = m;
  const kind = PATTERNS[c.pattern]?.kind;
  const parts = [];
  const addOpening = (xx, yy, index) => {
    if (index >= 60000) throw new Error('This configuration exceeds the 60,000-opening DXF limit. Increase pitch or use the production CAM/nesting service.');
    const x = xx + faceX, y = yy + faceY;
    if (kind === 'square') parts.push(rect('PERFORATION', x-c.holeSize/2, y-c.holeSize/2, x+c.holeSize/2, y+c.holeSize/2));
    else if (kind === 'hex') parts.push(polyline('PERFORATION', hexPoints(x, y, c.holeSize/2), true));
    else if (kind === 'slot') parts.push(polyline('PERFORATION', slotPoints(x, y, c.holeSize, c.slotLength), true));
    else if (kind === 'bridge') {
      const len = Math.max(c.holeSize, c.slotLength);
      const wid = c.holeSize;
      parts.push(rect('PERFORATION', x - len / 2, y - wid / 2, x + len / 2, y + wid / 2));
      parts.push(rect('FORM_BRIDGE', x - len / 2, y - wid / 2, x + len / 2, y + wid / 2));
    }
    else if (kind === 'trieur') parts.push(circle('FORM_TRIEUR', x, y, c.holeSize/2));
    else if (kind === 'embossed') {
      parts.push(polyline('PERFORATION', diamondPoints(x, y, c.holeSize), true));
      parts.push(polyline('FORM_EMBOSS', diamondPoints(x, y, c.holeSize), true));
    }
    else if (kind === 'perfocon') {
      const cone = conicalProfile(c);
      parts.push(circle('PERFORATION', x, y, cone.entrance / 2));
      parts.push(circle('FORM_CONE', x, y, cone.head / 2));
      parts.push(circle('EXIT', x, y, cone.exit / 2));
    } else parts.push(circle('PERFORATION', x, y, c.holeSize/2));
  };
  if (kind === 'decorative') forEachOpening(c, addOpening); else forEachHole(c, addOpening);
  return parts.join('');
}
function fabricationNotes(m) {
  const { c, blankHeight } = m;
  const slotPattern = PATTERNS[c.pattern]?.kind === 'slot' || PATTERNS[c.pattern]?.kind === 'bridge';
  const pitchText = slotPattern ? `${c.pitch}x${c.rowPitch}` : `${c.pitch}`;
  const featureName = PATTERNS[c.pattern].through === false ? 'FORMED FEATURE' : (PATTERNS[c.pattern].kind === 'perfocon' ? 'ENTRANCE' : 'OPENING');
  const notes = [
    `FORM=${PANEL_FORMS[c.panelForm].label.toUpperCase()} | BLANK=${m.blankWidth.toFixed(2)}x${m.blankHeight.toFixed(2)} mm | FINISHED FACE=${c.width}x${c.height} mm`,
    `PATTERN=${PATTERNS[c.pattern].label.toUpperCase()} | ${featureName}=${c.holeSize} mm | PITCH=${pitchText} mm${slotPattern ? ` | SLOT L=${c.slotLength} mm` : ''}${PATTERNS[c.pattern]?.conical ? ` | CONE=${conicalProfile(c).includedDeg}deg | HEAD Ø=${conicalProfile(c).head.toFixed(2)} mm | EXIT Ø=${conicalProfile(c).exit} mm` : ''}`,
    `CORNER=${CORNER_OPTIONS[c.corner].label.toUpperCase()}${c.corner === 'square' ? '' : ` ${cornerTreatmentMm(c)} mm`}`,
    `DEBURR=${c.deburr.toUpperCase()} | TOLERANCE=${c.tolerance.toUpperCase()} | FLATNESS=${c.flatness.toUpperCase()}`
  ];
  if (c.panelForm !== 'flat') notes.push(`FLANGE=${c.flangeDepth} mm | BEND=${c.bendAngle}deg | R=${c.bendRadius} mm | BA=${m.bend.allowance.toFixed(2)} mm | BD=${m.bend.deduction.toFixed(2)} mm | K=${m.bend.kFactor}`);
  return notes.map((note, i) => textEntity('FAB_NOTES', 0, blankHeight + 18 + i * 8, note, 5)).join('');
}
export function buildDxf(config) {
  const m = flatPatternMetrics(config);
  const { c, faceX, faceY } = m;
  const layers = ['CUT_OUTER','PERFORATION_ZONE','PERFORATION','FORM_BRIDGE','FORM_TRIEUR','FORM_EMBOSS','FORM_CONE','EXIT','BEND','BEND_NOTE','CUT_NOTCH','FAB_NOTES'];
  let tables = dxfPair(0,'SECTION') + dxfPair(2,'TABLES') + dxfPair(0,'TABLE') + dxfPair(2,'LAYER') + dxfPair(70, layers.length);
  for (const name of layers) tables += dxfPair(0,'LAYER') + dxfPair(2,name) + dxfPair(70,0) + dxfPair(62,7) + dxfPair(6,'CONTINUOUS');
  tables += dxfPair(0,'ENDTAB') + dxfPair(0,'ENDSEC');
  let entities = outerProfile(m);
  if (c.border > 0 && c.width > c.border*2 && c.height > c.border*2) entities += rect('PERFORATION_ZONE', faceX+c.border, faceY+c.border, faceX+c.width-c.border, faceY+c.height-c.border);
  entities += bendEntities(m) + notchEntities(m) + perforationEntities(m) + fabricationNotes(m);
  return dxfPair(0,'SECTION') + dxfPair(2,'HEADER') + dxfPair(9,'$ACADVER') + dxfPair(1,'AC1015') + dxfPair(9,'$INSUNITS') + dxfPair(70,4)
    + dxfPair(0,'ENDSEC') + tables + dxfPair(0,'SECTION') + dxfPair(2,'ENTITIES') + entities + dxfPair(0,'ENDSEC') + dxfPair(0,'EOF');
}
export function downloadDxf(config, sku) {
  downloadText(`${sku}.dxf`, buildDxf(config), 'application/dxf');
}
export function buildCsv(config, sku) {
  const c = normalizeConfig(config), pattern = PATTERNS[c.pattern], kind = pattern?.kind;
  const slotNeeded = kind === 'slot' || kind === 'bridge';
  const flat = flatPatternMetrics(c);
  const rows = [
    ['Parameter','Value','Unit'], ['SKU',sku,''], ['Finished width',c.width,'mm'], ['Finished height',c.height,'mm'], ['Thickness',c.thickness,'mm'],
    ['Flat blank width',Number(flat.blankWidth.toFixed(2)),'mm'], ['Flat blank height',Number(flat.blankHeight.toFixed(2)),'mm'],
    ['Material',MATERIALS[c.material].label,''], ['Finish',FINISHES[c.finish].label,''], ['Powder color',c.finish === 'powder' ? FINISH_COLORS[c.color].label : 'N/A',''],
    ['Pattern',pattern.label,''], ['Process',processLabel(pattern),''],
    [kind === 'trieur' ? 'Bump size' : kind === 'embossed' ? 'Diamond size' : kind === 'perfocon' ? 'Entrance diameter' : 'Hole / opening size', c.holeSize, 'mm'],
    ['Slot length',slotNeeded ? c.slotLength : 'N/A','mm'], ['Column pitch',c.pitch,'mm'], ['Row pitch',slotNeeded ? c.rowPitch : 'Derived by pattern','mm'], ['Solid border',c.border,'mm'],
    ['Exit diameter',kind === 'perfocon' ? conicalProfile(c).exit : 'N/A','mm'], ['Head diameter',kind === 'perfocon' ? Number(conicalProfile(c).head.toFixed(2)) : 'N/A','mm'], ['Cone included angle',kind === 'perfocon' ? conicalProfile(c).includedDeg : 'N/A',kind === 'perfocon' ? 'deg' : ''], ['Through opening',pattern.through === false ? 'No' : 'Yes',''],
    ['Panel form',PANEL_FORMS[c.panelForm].label,''], ['Quantity',c.quantity,'pcs'], ['Flange depth',c.panelForm === 'flat' ? 'N/A' : c.flangeDepth,'mm'],
    ['Bend angle',c.panelForm === 'flat' ? 'N/A' : c.bendAngle,'deg'], ['Bend radius',c.panelForm === 'flat' ? 'N/A' : c.bendRadius,'mm'],
    ['Bend allowance',c.panelForm === 'flat' ? 'N/A' : Number(flat.bend.allowance.toFixed(2)),'mm'], ['Bend deduction',c.panelForm === 'flat' ? 'N/A' : Number(flat.bend.deduction.toFixed(2)),'mm'], ['K factor',c.panelForm === 'flat' ? 'N/A' : flat.bend.kFactor,''],
    ['Corner treatment',CORNER_OPTIONS[c.corner].label,''], ['Corner treatment size',c.corner === 'square' ? 'N/A' : cornerTreatmentMm(c),'mm'],
    ['Deburr',c.deburr,''], ['Tolerance',c.tolerance,''], ['Flatness',c.flatness,''],
    ['Open area',openAreaPercent(c).toFixed(1),'%'], ['Estimated mass',estimatedWeightKg(c).toFixed(1),'kg'], ['Estimated opening count',estimatedHoleCount(c),'']
  ];
  return rows.map((row) => row.map((v) => `"${String(v).replaceAll('"','""')}"`).join(',')).join('\r\n');
}
export function downloadCsv(config, sku) { downloadText(`${sku}.csv`, buildCsv(config, sku), 'text/csv;charset=utf-8'); }
