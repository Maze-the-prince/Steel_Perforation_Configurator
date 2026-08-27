import * as THREE from 'three';

/** Bake alphaMap holes into an RGBA map that USDZ / Quick Look understands. */
export async function bakeUsdzDiffuseMap(material, colorHex = '#b8bcc2') {
  const alphaMap = material.alphaMap;
  if (!alphaMap?.image) return null;

  await ensureTextureImage(alphaMap);
  const src = alphaMap.image;
  const w = Math.min(1024, src.width || 512);
  const h = Math.min(1024, src.height || 512);
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(src, 0, 0, w, h);
  const mask = ctx.getImageData(0, 0, w, h);
  const color = new THREE.Color(colorHex);
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  const out = ctx.createImageData(w, h);
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
  texture.wrapS = alphaMap.wrapS;
  texture.wrapT = alphaMap.wrapT;
  texture.repeat.copy(alphaMap.repeat);
  texture.offset.copy(alphaMap.offset);
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
    try { await image.decode(); } catch { /* ignore decode errors */ }
  }
}

/** Convert a scene mesh material into a Quick Look compatible USDZ material. */
export async function createUsdzMaterial(source, { colorHex, metalness = 0.82, roughness = 0.34 } = {}) {
  const mat = new THREE.MeshStandardMaterial({
    color: colorHex || source.color?.getHexString?.() || '#b8bcc2',
    metalness,
    roughness,
    side: THREE.FrontSide,
    transparent: false,
    opacity: 1,
    alphaTest: 0
  });

  const baked = await bakeUsdzDiffuseMap(source, mat.color.getHexString());
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
  return {
    ...config,
    width: Math.round(crop.detailW * 1000),
    height: Math.round(crop.detailH * 1000),
    border: 0,
    panelForm: 'flat',
    flangeDepth: 0,
    bendAngle: 0,
    bendRadius: 0,
    corner: 'square',
    cornerRadius: 0
  };
}

export function createUsdzBlobUrl(bytes, filename = 'steel-detail.usdz') {
  const file = new File([bytes], filename, { type: 'model/vnd.usdz+zip' });
  return URL.createObjectURL(file);
}
