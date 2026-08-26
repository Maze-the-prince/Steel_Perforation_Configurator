import {
  AD_LINE, CORNER_OPTIONS, FINISHES, FINISH_COLORS, MATERIALS, PANEL_FORMS, PATTERNS, catalog,
  cornerTreatmentMm, estimatedPrice, estimatedWeightKg, formatMoney, openAreaPercent
} from '../state/config.js';
import { drawQr } from '../../public/vendor/qr-matrix.js';

function slug(value) { return String(value || 'product').replace(/[^A-Za-z0-9]+/g, '_').replace(/^_|_$/g, ''); }
function localConfigCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += alphabet[alphabet.length * Math.random() | 0];
  return code;
}
async function saveConfigCode(config, viewUrl) {
  try {
    const res = await fetch('/api/codes', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ configuration: config }) });
    if (res.ok) {
      const saved = await res.json();
      return { code: saved.code || localConfigCode(), url: saved.url || viewUrl };
    }
  } catch {}
  return { code: localConfigCode(), url: viewUrl };
}
function loadImage(src) { return new Promise((resolve, reject) => { const img = new Image(); img.onload = () => resolve(img); img.onerror = reject; img.src = src; }); }
function roundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}
function drawLabel(ctx, label, value, x, y, w) {
  ctx.fillStyle = '#74808a'; ctx.font = '700 12px Inter, Segoe UI, Arial, sans-serif'; ctx.fillText(label.toUpperCase(), x, y);
  ctx.fillStyle = '#151b20'; ctx.font = '700 20px Inter, Segoe UI, Arial, sans-serif';
  const text = String(value);
  let shown = text;
  while (ctx.measureText(shown).width > w && shown.length > 3) shown = `${shown.slice(0, -2)}…`;
  ctx.fillText(shown, x, y + 26);
}
async function composePdfPage(code, viewUrl, shotUrl, config, sku) {
  const LAYOUT_W = 1920, LAYOUT_H = 1080, SCALE = 2;
  const page = document.createElement('canvas');
  page.width = LAYOUT_W * SCALE;
  page.height = LAYOUT_H * SCALE;
  const ctx = page.getContext('2d', { alpha: false, willReadFrequently: true });
  ctx.scale(SCALE, SCALE);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  const W = LAYOUT_W, H = LAYOUT_H;
  ctx.fillStyle = '#f4f6f7'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#11171c'; ctx.fillRect(0, 0, W, 96);
  ctx.fillStyle = '#d8ff37'; ctx.fillRect(0, 0, 10, 96);
  ctx.fillStyle = '#d8ff37'; ctx.font = '800 12px Inter, Segoe UI, Arial, sans-serif'; ctx.fillText('STEELWORKS / CONFIGURATION SHEET', 40, 28);
  ctx.fillStyle = '#fff'; ctx.font = '800 34px Inter, Segoe UI, Arial, sans-serif'; ctx.fillText(catalog.productName, 40, 64);
  ctx.fillStyle = '#9ba5ad'; ctx.font = '500 13px Inter, Segoe UI, Arial, sans-serif'; ctx.fillText(AD_LINE, 40, 84);
  ctx.textAlign = 'right';
  ctx.fillStyle = '#fff'; ctx.font = '700 15px Inter, Segoe UI, Arial, sans-serif'; ctx.fillText(sku, W - 40, 32);
  ctx.fillStyle = '#9ba5ad'; ctx.font = '500 13px Inter, Segoe UI, Arial, sans-serif';
  ctx.fillText(new Date().toLocaleDateString(), W - 40, 54);
  ctx.fillText(`${catalog.contactEmail}  ·  ${catalog.contactPhone}`, W - 40, 76);
  ctx.textAlign = 'left';

  const shot = await loadImage(shotUrl);
  const boxX = 32, boxY = 116, boxW = 1188, boxH = 748;
  ctx.fillStyle = '#dce1e4';
  roundRect(ctx, boxX, boxY, boxW, boxH, 10);
  ctx.fill();
  const imgScale = Math.min((boxW - 48) / shot.width, (boxH - 48) / shot.height);
  const dw = shot.width * imgScale, dh = shot.height * imgScale;
  ctx.save();
  roundRect(ctx, boxX, boxY, boxW, boxH, 10);
  ctx.clip();
  ctx.drawImage(shot, boxX + (boxW - dw) / 2, boxY + (boxH - dh) / 2, dw, dh);
  ctx.restore();

  const mat = MATERIALS[config.material]; const finish = FINISHES[config.finish]; const pattern = PATTERNS[config.pattern];
  const openArea = openAreaPercent(config); const weight = estimatedWeightKg(config);
  const price = estimatedPrice(config);
  const slotPattern = pattern?.kind === 'slot' || pattern?.kind === 'bridge';
  const pitchText = slotPattern ? `${config.pitch} × ${config.rowPitch} mm` : `${config.pitch} mm`;
  const bendText = config.panelForm === 'flat' ? 'N/A' : `${config.flangeDepth} mm / ${config.bendAngle}° / R${config.bendRadius}`;
  const cardX = 1240, cardY = 116, cardW = 648, cardH = 748;
  ctx.fillStyle = '#fff';
  roundRect(ctx, cardX, cardY, cardW, cardH, 10);
  ctx.fill();
  ctx.fillStyle = '#d8ff37';
  ctx.fillRect(cardX, cardY + 10, 8, cardH - 20);
  ctx.fillStyle = '#11171c'; ctx.font = '800 16px Inter, Segoe UI, Arial, sans-serif';
  ctx.fillText('FABRICATION PARAMETERS', cardX + 36, cardY + 42);
  ctx.strokeStyle = '#d7dde1'; ctx.beginPath(); ctx.moveTo(cardX + 36, cardY + 58); ctx.lineTo(cardX + cardW - 28, cardY + 58); ctx.stroke();
  const colA = cardX + 36, colB = cardX + 340, labelW = 270;
  const rows = [
    ['Sheet size', `${config.width} × ${config.height} mm`, 'Thickness', `${config.thickness} mm`],
    ['Material', mat.label, 'Finish', `${finish.label}${config.finish === 'powder' ? ` · ${FINISH_COLORS[config.color].label}` : ''}`],
    ['Pattern', pattern?.conical ? `${pattern.label} · ${config.coneAngle}°` : pattern.label, 'Opening', `${config.holeSize} mm${slotPattern ? ` × ${config.slotLength} L` : ''}${pattern?.conical ? ` / ${config.coneAngle}°` : ''}`],
    ['Pitch', pitchText, 'Quantity', String(config.quantity || 1)],
    ['Panel form', PANEL_FORMS[config.panelForm].label, 'Bend / flange', bendText],
    ['Corner', `${CORNER_OPTIONS[config.corner].label}${config.corner === 'square' ? '' : ` ${cornerTreatmentMm(config)} mm`}`, 'Quality', `${config.deburr} / ${config.tolerance} / ${config.flatness}`],
    ['Open area / mass', `${openArea.toFixed(1)}% / ${weight.toFixed(1)} kg`, `Indicative ${catalog.currency}`, formatMoney(price, catalog.currency)]
  ];
  rows.forEach((row, i) => {
    const y = cardY + 88 + i * 80;
    drawLabel(ctx, row[0], row[1], colA, y, labelW);
    drawLabel(ctx, row[2], row[3], colB, y, labelW);
  });

  ctx.fillStyle = '#11171c';
  roundRect(ctx, 32, 884, 1856, 164, 10);
  ctx.fill();
  ctx.fillStyle = '#d8ff37';
  ctx.fillRect(32, 894, 8, 144);
  try { drawQr(ctx, viewUrl, 56, 904, 124); } catch {}
  ctx.fillStyle = '#d8ff37'; ctx.font = '800 22px Inter, Segoe UI, Arial, sans-serif'; ctx.fillText(`CONFIGURATION ${code}`, 204, 938);
  ctx.fillStyle = '#fff'; ctx.font = '700 16px Inter, Segoe UI, Arial, sans-serif'; ctx.fillText('Scan to reopen this exact configuration', 204, 968);
  ctx.fillStyle = '#9ba5ad'; ctx.font = '500 13px Inter, Segoe UI, Arial, sans-serif';
  const urlText = viewUrl.length > 140 ? `${viewUrl.slice(0, 140)}…` : viewUrl;
  ctx.fillText(urlText, 204, 994);
  ctx.fillText('DXF export contains blank profile, bend lines, perforations and fabrication notes. Final CAM/tooling validation remains the responsibility of the fabricator.', 204, 1018);
  ctx.fillStyle = '#6f7a82'; ctx.font = '600 11px Inter, Segoe UI, Arial, sans-serif';
  ctx.fillText(`${catalog.manufacturer} · Parametric 3D product configuration`, 204, 1038);
  return page;
}
function imageToPdf(bytes, imgW, imgH, filter) {
  const pageW = 1080, pageH = 607.5; const encoder = new TextEncoder(); const parts = []; let offset = 0; const offsets = [0];
  const add = (data) => { const chunk = typeof data === 'string' ? encoder.encode(data) : data; parts.push(chunk); offset += chunk.length; };
  add('%PDF-1.4\n');
  const obj = (n, body, stream) => { offsets[n] = offset; add(`${n} 0 obj\n${body}`); if (stream) { add('stream\n'); add(stream); add('endstream\n'); } add('endobj\n'); };
  obj(1, '<< /Type /Catalog /Pages 2 0 R >>\n'); obj(2, '<< /Type /Pages /Kids [3 0 R] /Count 1 >>\n');
  obj(3, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageW} ${pageH}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\n`);
  obj(4, `<< /Type /XObject /Subtype /Image /Width ${imgW} /Height ${imgH} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /${filter} /Length ${bytes.length} >>\n`, bytes);
  const content = `q ${pageW} 0 0 ${pageH} 0 0 cm /Im0 Do Q`; obj(5, `<< /Length ${content.length} >>\n`, encoder.encode(content));
  const xrefPos = offset; add('xref\n0 6\n0000000000 65535 f \n'); for (let i = 1; i <= 5; i++) add(`${String(offsets[i]).padStart(10, '0')} 00000 n \n`);
  add(`trailer << /Size 6 /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`);
  const total = parts.reduce((n, p) => n + p.length, 0); const out = new Uint8Array(total); let p = 0; parts.forEach((chunk) => { out.set(chunk, p); p += chunk.length; }); return out;
}
async function deflateBytes(bytes) {
  const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream('deflate'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}
async function canvasToJpeg(page, quality = 0.97) {
  const blob = await new Promise((resolve) => page.toBlob(resolve, 'image/jpeg', quality));
  if (blob) return new Uint8Array(await blob.arrayBuffer());
  const dataUrl = page.toDataURL('image/jpeg', quality); const binary = atob(dataUrl.split(',')[1] || ''); const out = new Uint8Array(binary.length); for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i); return out;
}
async function canvasToPdfImage(page) {
  try {
    const { width, height } = page;
    const ctx = page.getContext('2d', { willReadFrequently: true });
    const { data } = ctx.getImageData(0, 0, width, height);
    const rgb = new Uint8Array(width * height * 3);
    for (let i = 0, j = 0; i < data.length; i += 4, j += 3) {
      rgb[j] = data[i];
      rgb[j + 1] = data[i + 1];
      rgb[j + 2] = data[i + 2];
    }
    return { bytes: await deflateBytes(rgb), filter: 'FlateDecode' };
  } catch {
    return { bytes: await canvasToJpeg(page, 0.97), filter: 'DCTDecode' };
  }
}
export async function downloadConfigurationPdf({ config, viewUrl, captureJpeg, sku }) {
  const saved = await saveConfigCode(config, viewUrl);
  const qrUrl = saved.url || viewUrl;
  const shot = captureJpeg();
  const page = await composePdfPage(saved.code, qrUrl, shot, config, sku);
  const image = await canvasToPdfImage(page);
  const pdf = imageToPdf(image.bytes, page.width, page.height, image.filter);
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
  a.download = `${slug(catalog.productName)}_${saved.code}.pdf`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1500);
  return { code: saved.code, sku, url: qrUrl };
}
