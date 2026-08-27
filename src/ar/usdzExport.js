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

/** Bake alphaMap holes into a single tiled RGBA map that Quick Look can render. */
export async function bakeUsdzDiffuseMap(material, colorHex = '#b8bcc2', { maxSize = 1024 } = {}) {
  const alphaMap = material.alphaMap;
  if (!alphaMap?.image) return null;

  await ensureTextureImage(alphaMap);
  const src = alphaMap.image;
  const tileW = src.width || 512;
  const tileH = src.height || 512;
  const repeatX = Math.max(0.001, alphaMap.repeat?.x || 1);
  const repeatY = Math.max(0.001, alphaMap.repeat?.y || 1);
  const offsetX = alphaMap.offset?.x || 0;
  const offsetY = alphaMap.offset?.y || 0;

  const outAspect = (tileW * repeatX) / (tileH * repeatY);
  let outW;
  let outH;
  if (outAspect >= 1) {
    outW = maxSize;
    outH = Math.max(32, Math.round(maxSize / outAspect));
  } else {
    outH = maxSize;
    outW = Math.max(32, Math.round(maxSize * outAspect));
  }

  const canvas = document.createElement('canvas');
  canvas.width = outW;
  canvas.height = outH;
  const ctx = canvas.getContext('2d');
  const cellW = outW / repeatX;
  const cellH = outH / repeatY;
  const cols = Math.ceil(repeatX + Math.abs(offsetX));
  const rows = Math.ceil(repeatY + Math.abs(offsetY));
  const startCol = -Math.floor(offsetX);
  const startRow = -Math.floor(offsetY);

  for (let row = startRow; row < startRow + rows; row += 1) {
    for (let col = startCol; col < startCol + cols; col += 1) {
      ctx.drawImage(
        src,
        (col + offsetX) * cellW,
        outH - (row + 1 + offsetY) * cellH,
        cellW,
        cellH
      );
    }
  }

  const mask = ctx.getImageData(0, 0, outW, outH);
  const color = new THREE.Color(colorHex);
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  const out = ctx.createImageData(outW, outH);
  for (let i = 0; i < mask.data.length; i += 4) {
    const lum = mask.data[i];
    out.data[i] = r;
    out.data[i + 1] = g;
    out.data[i + 2] = b;
    out.data[i + 3] = lum;
  }
  ctx.putImageData(out, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
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

export async function createUsdzMaterial(source, { colorHex, metalness = 0.82, roughness = 0.34, maxTextureSize = 1024 } = {}) {
  const mat = new THREE.MeshStandardMaterial({
    color: colorHex || '#b8bcc2',
    metalness,
    roughness,
    side: THREE.FrontSide,
    transparent: false,
    opacity: 1,
    alphaTest: 0
  });

  const baked = await bakeUsdzDiffuseMap(source, mat.color.getHexString(), { maxSize: maxTextureSize });
  if (baked) {
    mat.map = baked;
    mat.transparent = true;
    mat.alphaTest = 0.5;
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
