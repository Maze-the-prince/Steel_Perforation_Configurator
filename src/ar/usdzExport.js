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

function resolveColor(colorHex) {
  return new THREE.Color(colorHex?.startsWith('#') ? colorHex : `#${colorHex || 'b8bcc2'}`);
}

function outputSizeForSheet(widthMm, heightMm, repeatX, repeatY, maxSize) {
  const aspect = widthMm / heightMm;
  const pxPerPitch = Math.min(48, Math.max(22, Math.floor(maxSize / Math.max(repeatX, repeatY, 1))));
  let outH = Math.min(maxSize, Math.max(768, Math.round(pxPerPitch * repeatY)));
  let outW = Math.min(maxSize, Math.max(768, Math.round(outH * aspect)));
  if (outW > maxSize) {
    outW = maxSize;
    outH = Math.max(512, Math.round(maxSize / aspect));
  }
  return { outW, outH, pxPerPitch };
}

/** Bake a full-sheet RGBA map with solid border bands and perforated inner zone. */
export async function bakeFullSheetUsdzMap(material, config, widthMm, heightMm, borderMm, colorHex, { maxSize = 4096 } = {}) {
  const alphaMap = material.alphaMap;
  if (!alphaMap?.image) return null;

  await ensureTextureImage(alphaMap);
  const src = alphaMap.image;
  const innerW = Math.max(1, widthMm - 2 * borderMm);
  const innerH = Math.max(1, heightMm - 2 * borderMm);
  const { repeatX, repeatY } = usdzFaceRepeat(config, innerW, innerH);
  const { outW, outH } = outputSizeForSheet(widthMm, heightMm, repeatX, repeatY, maxSize);
  const borderPxX = Math.round(outW * (borderMm / widthMm));
  const borderPxY = Math.round(outH * (borderMm / heightMm));
  const innerPxW = Math.max(16, outW - 2 * borderPxX);
  const innerPxH = Math.max(16, outH - 2 * borderPxY);
  const color = resolveColor(colorHex);
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);

  const maskCanvas = document.createElement('canvas');
  maskCanvas.width = innerPxW;
  maskCanvas.height = innerPxH;
  const mctx = maskCanvas.getContext('2d');
  mctx.fillStyle = '#ffffff';
  mctx.fillRect(0, 0, innerPxW, innerPxH);
  mctx.imageSmoothingEnabled = true;
  mctx.imageSmoothingQuality = 'high';
  const cellW = innerPxW / repeatX;
  const cellH = innerPxH / repeatY;
  for (let row = 0; row < Math.ceil(repeatY); row += 1) {
    for (let col = 0; col < Math.ceil(repeatX); col += 1) {
      mctx.drawImage(src, col * cellW, row * cellH, cellW, cellH);
    }
  }

  const mask = mctx.getImageData(0, 0, innerPxW, innerPxH);
  const innerOut = mctx.createImageData(innerPxW, innerPxH);
  for (let i = 0; i < mask.data.length; i += 4) {
    const lum = mask.data[i];
    innerOut.data[i] = r;
    innerOut.data[i + 1] = g;
    innerOut.data[i + 2] = b;
    innerOut.data[i + 3] = lum;
  }
  mctx.putImageData(innerOut, 0, 0);

  const canvas = document.createElement('canvas');
  canvas.width = outW;
  canvas.height = outH;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fillRect(0, 0, outW, outH);
  ctx.drawImage(maskCanvas, borderPxX, borderPxY);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = true;
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
  widthMm = 0,
  heightMm = 0,
  borderMm = 0
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

  const baked = perforated && config && widthMm > 0 && heightMm > 0
    ? await bakeFullSheetUsdzMap(source, config, widthMm, heightMm, borderMm, hex, { maxSize: maxTextureSize })
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
