import * as THREE from 'three';

const SW_CACHE = 'steel-quicklook-v1';
const SW_ENTRY = 'detail-usdz';

function assetBase() {
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? base : `${base}/`;
}

export function quickLookUsdzUrl() {
  return new URL('quicklook/detail.usdz', `${window.location.origin}${assetBase()}`).href;
}

export async function ensureQuickLookServiceWorker() {
  if (!('serviceWorker' in navigator) || !('caches' in window)) return false;
  try {
    const reg = await navigator.serviceWorker.register(`${assetBase()}quicklook-sw.js`, { scope: assetBase() });
    await reg.update();
    await navigator.serviceWorker.ready;
    return true;
  } catch {
    return false;
  }
}

/** Publish USDZ bytes to same-origin URL (avoids iOS blob white-page flash). */
export async function publishQuickLookUsdz(bytes) {
  const url = quickLookUsdzUrl();
  const ready = await ensureQuickLookServiceWorker();
  if (ready) {
    const cache = await caches.open(SW_CACHE);
    await cache.put(SW_ENTRY, new Response(bytes, {
      headers: {
        'Content-Type': 'model/vnd.usdz+zip',
        'Content-Disposition': 'inline; filename="steel-detail.usdz"'
      }
    }));
    return url;
  }
  const file = new File([bytes], 'steel-detail.usdz', { type: 'model/vnd.usdz+zip' });
  return URL.createObjectURL(file);
}

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
    try { await image.decode(); } catch { /* ignore */ }
  }
}

export async function createUsdzMaterial(source, { colorHex, metalness = 0.82, roughness = 0.34 } = {}) {
  const mat = new THREE.MeshStandardMaterial({
    color: colorHex || '#b8bcc2',
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

export function quickLookHref(usdzUrl) {
  if (!usdzUrl) return '#ar';
  return usdzUrl.includes('#') ? usdzUrl : `${usdzUrl}#allowsContentScaling=0`;
}
