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

function tilePatternToImageData(src, outW, outH, repeatX, repeatY) {
  const canvas = document.createElement('canvas');
  canvas.width = outW;
  canvas.height = outH;
  const ctx = canvas.getContext('2d');
  tilePatternMask(ctx, src, outW, outH, repeatX, repeatY);
  return ctx.getImageData(0, 0, outW, outH);
}

/** Bake perforated + relief shading into one Quick Look–friendly RGBA map (opacityThreshold, not blending). */
export async function bakeReliefFaceUsdzMap(material, config, innerWidthMm, innerHeightMm, colorHex, { maxSize = 4096, flipY = false, relief = 1 } = {}) {
  const { repeatX, repeatY } = usdzFaceRepeat(config, innerWidthMm, innerHeightMm);
  const { outW, outH } = innerFaceTextureSize(innerWidthMm, innerHeightMm, repeatX, repeatY, maxSize);
  const color = resolveColor(colorHex);
  const baseR = color.r;
  const baseG = color.g;
  const baseB = color.b;
  const pixelCount = outW * outH;

  let alphaData = null;
  if (material.alphaMap?.image) {
    await ensureTextureImage(material.alphaMap);
    alphaData = tilePatternToImageData(material.alphaMap.image, outW, outH, repeatX, repeatY).data;
  }

  let bumpData = null;
  if (material.bumpMap?.image) {
    await ensureTextureImage(material.bumpMap);
    bumpData = tilePatternToImageData(material.bumpMap.image, outW, outH, repeatX, repeatY).data;
  }

  const rgbaCanvas = document.createElement('canvas');
  rgbaCanvas.width = outW;
  rgbaCanvas.height = outH;
  const ctx = rgbaCanvas.getContext('2d');
  const out = ctx.createImageData(outW, outH);
  const shadeMin = 0.42;
  const shadeRange = 0.58 * relief;

  for (let i = 0, p = 0; p < pixelCount; p += 1, i += 4) {
    const alpha = alphaData ? alphaData[i] : 255;
    const bumpLum = bumpData ? bumpData[i] / 255 : 1;
    const shade = bumpData ? shadeMin + shadeRange * bumpLum : 1;
    const a = alpha / 255;
    out.data[i] = Math.round(baseR * shade * a * 255);
    out.data[i + 1] = Math.round(baseG * shade * a * 255);
    out.data[i + 2] = Math.round(baseB * shade * a * 255);
    out.data[i + 3] = alpha;
  }
  ctx.putImageData(out, 0, 0);
  return canvasToUsdzTexture(rgbaCanvas, { flipY });
}

/** Bake a high-resolution perforated map for the inner face plane only. */
export async function bakeInnerFaceUsdzMap(material, config, innerWidthMm, innerHeightMm, colorHex, { maxSize = 4096, flipY = false } = {}) {
  return bakeReliefFaceUsdzMap(material, config, innerWidthMm, innerHeightMm, colorHex, { maxSize, flipY, relief: 0 });
}

/** Extend a baked inner-zone texture to cover the taller AR face plane (top bleed under frame). */
function extendTextureForArFaceBleed(texture, innerHeightMm, arFaceHeightMm, colorHex) {
  if (!texture?.image || arFaceHeightMm <= innerHeightMm + 0.5) return texture;
  const innerRatio = innerHeightMm / arFaceHeightMm;
  const img = texture.image;
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = Math.max(img.height, Math.round(img.height / innerRatio));
  const ctx = canvas.getContext('2d');
  const color = resolveColor(colorHex);
  const patternH = Math.round(canvas.height * innerRatio);
  const bleedH = canvas.height - patternH;
  if (bleedH > 0) {
    ctx.fillStyle = `rgb(${Math.round(color.r * 255)},${Math.round(color.g * 255)},${Math.round(color.b * 255)})`;
    ctx.fillRect(0, 0, canvas.width, bleedH);
  }
  // Only fill the top bleed band — a full-canvas fill would paint over alpha cutouts.
  ctx.drawImage(img, 0, 0, img.width, img.height, 0, bleedH, canvas.width, patternH);
  const next = texture.clone();
  next.image = canvas;
  next.repeat.set(1, 1);
  next.offset.set(0, 0);
  next.wrapS = THREE.ClampToEdgeWrapping;
  next.wrapT = THREE.ClampToEdgeWrapping;
  next.needsUpdate = true;
  return next;
}

/** Bake an AR face/back map — perforated, relief, or solid — sized to the inner cutout. */
const arFaceBakeCache = new Map();
const AR_FACE_CACHE_MAX = 16;

export async function bakeArFaceUsdzMap(sourceMat, config, colorHex, {
  maxSize = 4096,
  flipY = false,
  faceRole = 'front',
  arFaceHeightMm = 0
} = {}) {
  const hex = colorHex?.startsWith('#') ? colorHex : `#${colorHex || 'b8bcc2'}`;
  const { innerWidthMm, innerHeightMm } = sheetInnerSizeMm(config.width, config.height, config.border);
  const key = `${usdzExportFingerprint(config)}|${maxSize}|${flipY ? 1 : 0}|${hex}|${faceRole}|${Math.round(arFaceHeightMm)}`;
  const cached = arFaceBakeCache.get(key);
  if (cached) return cached.clone();

  const kind = PATTERNS[config.pattern]?.kind;
  const formedKind = kind === 'embossed' || kind === 'bridge' || kind === 'perfocon';
  let texture;
  if (kind === 'trieur' && faceRole === 'front') {
    texture = bakeSolidFaceUsdzMap(hex, innerWidthMm, innerHeightMm, { maxSize, flipY });
  } else if (sourceMat?.alphaMap || sourceMat?.bumpMap) {
    texture = await bakeReliefFaceUsdzMap(sourceMat, config, innerWidthMm, innerHeightMm, hex, {
      maxSize,
      flipY,
      relief: formedKind ? 1.15 : 1
    });
  } else {
    texture = bakeSolidFaceUsdzMap(hex, innerWidthMm, innerHeightMm, { maxSize, flipY });
  }

  texture = extendTextureForArFaceBleed(texture, innerHeightMm, arFaceHeightMm || innerHeightMm, hex);

  if (arFaceBakeCache.size >= AR_FACE_CACHE_MAX) {
    const oldest = arFaceBakeCache.keys().next().value;
    arFaceBakeCache.get(oldest)?.dispose?.();
    arFaceBakeCache.delete(oldest);
  }
  arFaceBakeCache.set(key, texture);
  return texture.clone();
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

const _instMatrix = new THREE.Matrix4();
const _instVert = new THREE.Vector3();

function mergePositionGeometries(geometries) {
  const positions = [];
  const indices = [];
  let offset = 0;
  geometries.forEach((geo) => {
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i += 1) positions.push(pos.getX(i), pos.getY(i), pos.getZ(i));
    const idx = geo.index ? geo.index.array : null;
    if (idx) {
      for (let i = 0; i < idx.length; i += 1) indices.push(idx[i] + offset);
    } else {
      for (let i = 0; i < pos.count; i += 1) indices.push(offset + i);
    }
    offset += pos.count;
    geo.dispose();
  });
  const merged = new THREE.BufferGeometry();
  merged.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  if (indices.length) merged.setIndex(indices);
  merged.computeVertexNormals();
  return merged;
}

function cloneGeometryWithMatrix(geometry, matrix) {
  const geo = geometry.clone();
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i += 1) {
    _instVert.fromBufferAttribute(pos, i);
    _instVert.applyMatrix4(matrix);
    pos.setXYZ(i, _instVert.x, _instVert.y, _instVert.z);
  }
  geo.computeVertexNormals();
  return geo;
}

/** Quick Look ignores InstancedMesh — merge instances into one exportable mesh. */
export function instancedMeshToMergedMesh(instanced) {
  const parts = [];
  for (let i = 0; i < instanced.count; i += 1) {
    instanced.getMatrixAt(i, _instMatrix);
    parts.push(cloneGeometryWithMatrix(instanced.geometry, _instMatrix));
  }
  const material = instanced.material?.clone?.() || instanced.material;
  if (material) {
    material.side = THREE.FrontSide;
    material.transparent = false;
    material.alphaTest = 0;
    material.alphaMap = null;
    material.bumpMap = null;
    material.needsUpdate = true;
  }
  const mesh = new THREE.Mesh(mergePositionGeometries(parts), material);
  mesh.name = instanced.name || 'FORMED_FEATURES';
  mesh.renderOrder = 3;
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  return mesh;
}

export function expandInstancedMeshesForUsdz(root) {
  const instanced = [];
  root.traverse((obj) => {
    if (obj.isInstancedMesh && obj.count > 0) instanced.push(obj);
  });
  instanced.forEach((source) => {
    const parent = source.parent;
    if (!parent) return;
    const mesh = instancedMeshToMergedMesh(source);
    mesh.position.copy(source.position);
    mesh.quaternion.copy(source.quaternion);
    mesh.scale.copy(source.scale);
    mesh.renderOrder = source.renderOrder;
    parent.add(mesh);
    parent.remove(source);
  });
}
