import * as THREE from 'three';
import { PATTERNS, STAGGER_ROW, normalizeConfig } from '../state/config.js';

/** Tile repeat for a perforated face — used by Quick Look texture baking and tests. */
export function usdzFaceRepeat(config, innerWidthMm, innerHeightMm) {
  const c = normalizeConfig(config);
  const pattern = PATTERNS[c.pattern];
  const staggered = Boolean(pattern?.staggered);
  const kind = pattern?.kind;
  const rowPitch = (kind === 'slot' || kind === 'bridge') ? c.rowPitch : (staggered ? c.pitch * STAGGER_ROW : c.pitch);
  const tileW = Math.max(0.01, c.pitch);
  const tileH = Math.max(0.01, staggered ? rowPitch * 2 : rowPitch);
  const zoneW = Math.max(0.01, innerWidthMm);
  const zoneH = Math.max(0.01, innerHeightMm);
  return {
    pattern: c.pattern,
    repeatX: zoneW / tileW,
    repeatY: zoneH / tileH,
    tileW,
    tileH
  };
}

/** Inner perforated zone dimensions in mm. */
export function sheetInnerSizeMm(widthMm, heightMm, borderMm) {
  return {
    innerWidthMm: Math.max(1, widthMm - 2 * borderMm),
    innerHeightMm: Math.max(1, heightMm - 2 * borderMm)
  };
}

function resolveColor(colorHex) {
  return new THREE.Color(colorHex?.startsWith('#') ? colorHex : `#${colorHex || 'b8bcc2'}`);
}

export function innerFaceTextureSize(innerWidthMm, innerHeightMm, repeatX, repeatY, maxSize = 4096) {
  const aspect = innerWidthMm / innerHeightMm;
  const pxPerPitch = Math.min(48, Math.max(22, Math.floor(maxSize / Math.max(repeatX, repeatY, 1))));
  let outH = Math.min(maxSize, Math.max(512, Math.round(pxPerPitch * repeatY)));
  let outW = Math.min(maxSize, Math.max(512, Math.round(outH * aspect)));
  if (outW > maxSize) {
    outW = maxSize;
    outH = Math.max(256, Math.round(maxSize / aspect));
  }
  return { outW, outH, pxPerPitch };
}

function tilePatternMask(ctx, src, outW, outH, repeatX, repeatY) {
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, outW, outH);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  const cellW = outW / repeatX;
  const cellH = outH / repeatY;
  for (let row = 0; row < Math.ceil(repeatY); row += 1) {
    for (let col = 0; col < Math.ceil(repeatX); col += 1) {
      ctx.drawImage(src, col * cellW, row * cellH, cellW, cellH);
    }
  }
}

function canvasToUsdzTexture(canvas, { flipY = false } = {}) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = flipY;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(1, 1);
  texture.offset.set(0, 0);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return texture;
}

/** Map a full-inner bake onto an AR face plane that extends slightly above the frame. */
export function applyArFaceBleedUv(texture, innerHM, arFaceHM) {
  if (!texture || !(arFaceHM > innerHM + 1e-6)) return texture;
  texture.repeat.set(1, innerHM / arFaceHM);
  texture.offset.set(0, 0);
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

export function bakeSolidFaceUsdzMap(colorHex, innerWidthMm, innerHeightMm, { maxSize = 4096, flipY = false } = {}) {
  const { outW, outH } = innerFaceTextureSize(innerWidthMm, innerHeightMm, 1, 1, maxSize);
  const color = resolveColor(colorHex);
  const canvas = document.createElement('canvas');
  canvas.width = outW;
  canvas.height = outH;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = `rgb(${Math.round(color.r * 255)},${Math.round(color.g * 255)},${Math.round(color.b * 255)})`;
  ctx.fillRect(0, 0, outW, outH);
  return canvasToUsdzTexture(canvas, { flipY });
}

/** Bake a high-resolution perforated map for the inner face plane only. */
export async function bakeInnerFaceUsdzMap(material, config, innerWidthMm, innerHeightMm, colorHex, { maxSize = 4096, flipY = false } = {}) {
  const alphaMap = material.alphaMap;
  if (!alphaMap?.image) return null;

  await ensureTextureImage(alphaMap);
  const src = alphaMap.image;
  const { repeatX, repeatY } = usdzFaceRepeat(config, innerWidthMm, innerHeightMm);
  const { outW, outH } = innerFaceTextureSize(innerWidthMm, innerHeightMm, repeatX, repeatY, maxSize);
  const color = resolveColor(colorHex);
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);

  const maskCanvas = document.createElement('canvas');
  maskCanvas.width = outW;
  maskCanvas.height = outH;
  const mctx = maskCanvas.getContext('2d');
  tilePatternMask(mctx, src, outW, outH, repeatX, repeatY);
  const mask = mctx.getImageData(0, 0, outW, outH);
  const rgbaCanvas = document.createElement('canvas');
  rgbaCanvas.width = outW;
  rgbaCanvas.height = outH;
  const ctx = rgbaCanvas.getContext('2d');
  const out = ctx.createImageData(outW, outH);
  for (let i = 0; i < mask.data.length; i += 4) {
    const lum = mask.data[i];
    out.data[i] = r;
    out.data[i + 1] = g;
    out.data[i + 2] = b;
    out.data[i + 3] = lum;
  }
  ctx.putImageData(out, 0, 0);
  return canvasToUsdzTexture(rgbaCanvas, { flipY });
}

/** Bake an AR face/back map — perforated or solid — sized to the inner cutout. */
export async function bakeArFaceUsdzMap(sourceMat, config, colorHex, { maxSize = 4096, flipY = false } = {}) {
  const { innerWidthMm, innerHeightMm } = sheetInnerSizeMm(config.width, config.height, config.border);
  const hex = colorHex?.startsWith('#') ? colorHex : `#${colorHex || 'b8bcc2'}`;
  if (sourceMat?.alphaMap) {
    return bakeInnerFaceUsdzMap(sourceMat, config, innerWidthMm, innerHeightMm, hex, { maxSize, flipY });
  }
  return bakeSolidFaceUsdzMap(hex, innerWidthMm, innerHeightMm, { maxSize, flipY });
}

async function ensureTextureImage(texture) {
  const image = texture?.image;
  if (!image) return;
  if (typeof image.decode === 'function') {
    try { await image.decode(); } catch { /* ignore */ }
  }
}

export async function createUsdzMaterial(source, {
  colorHex,
  metalness = 0.82,
  roughness = 0.34,
  maxTextureSize = 4096,
  perforated = false,
  config = null,
  innerWidthMm = 0,
  innerHeightMm = 0
} = {}) {
  const hex = colorHex?.startsWith('#') ? colorHex : `#${colorHex || 'b8bcc2'}`;
  const mat = new THREE.MeshStandardMaterial({
    color: hex,
    metalness,
    roughness,
    side: perforated ? THREE.DoubleSide : THREE.FrontSide,
    transparent: false,
    opacity: 1,
    alphaTest: 0
  });

  const baked = perforated && config && innerWidthMm > 0 && innerHeightMm > 0
    ? await bakeInnerFaceUsdzMap(source, config, innerWidthMm, innerHeightMm, hex, { maxSize: maxTextureSize })
    : null;
  if (baked) {
    mat.map = baked;
    mat.transparent = false;
    mat.alphaTest = 0.35;
    mat.depthWrite = true;
  } else if (source.map) {
    mat.map = source.map;
    mat.color.copy(source.color);
  }

  return mat;
}

export function detailConfigFrom(config, crop) {
  const border = Math.min(
    config.border,
    40,
    Math.max(8, Math.round(Math.min(crop.detailW, crop.detailH) * 1000 * 0.1))
  );
  const innerW = Math.round(crop.detailW * 1000);
  const innerH = Math.round(crop.detailH * 1000);
  return {
    ...config,
    width: innerW + border * 2,
    height: innerH + border * 2,
    border,
    panelForm: 'flat',
    flangeDepth: 0,
    bendAngle: 0,
    bendRadius: 0,
    corner: 'square',
    cornerRadius: 0
  };
}

export function usdzExportFingerprint(config) {
  const c = normalizeConfig(config);
  return [
    c.width, c.height, c.thickness, c.material, c.finish, c.color,
    c.pattern, c.holeSize, c.slotLength, c.pitch, c.rowPitch, c.border,
    c.coneAngle, c.corner, c.cornerRadius
  ].join('|');
}

/** How far the AR face extends upward under the top frame bar (fraction of border width). */
export const AR_FACE_TOP_BLEED_BORDER_RATIO = 0.5;

/** Upward extension in metres — capped so the face tucks under the frame without overshooting. */
export function arFaceTopBleedM(innerHM, borderMm = 0) {
  const borderM = Math.max(0, borderMm) / 1000;
  if (borderM <= 0) return innerHM * 0.004;
  return Math.min(borderM * AR_FACE_TOP_BLEED_BORDER_RATIO, innerHM * 0.012);
}

export function arFaceHeightM(innerHM, borderMm = 0) {
  return innerHM + arFaceTopBleedM(innerHM, borderMm);
}
