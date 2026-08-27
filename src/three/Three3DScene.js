import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js';
import { XREstimatedLight } from 'three/examples/jsm/webxr/XREstimatedLight.js';
import { conicalProfile, cornerTreatmentMm, decorativeOffsets, estimatedHoleCount, finishAppearance, forEachHole, normalizeConfig, PATTERNS, STAGGER_ROW } from '../state/config.js';
import { bindPbrMaps, loadPbrMaps } from './pbrMaterials.js';
import { createUsdzMaterial } from '../ar/usdzExport.js';
import { detectPlatform, isCompactWeb } from '../ar/detect.js';

const _hitPos = new THREE.Vector3();

function roundedRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawCapsule(ctx, x, y, w, h) {
  const r = Math.min(w, h) / 2;
  roundedRect(ctx, x - w / 2, y - h / 2, w, h, r);
  ctx.fill();
}

function drawDiamond(ctx, x, y, size, radius = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(Math.PI / 4);
  roundedRect(ctx, -size / 2, -size / 2, size, size, radius);
  ctx.restore();
}

function drawHex(ctx, x, y, r) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = Math.PI / 3 * i;
    const xx = x + r * Math.cos(a);
    const yy = y + r * Math.sin(a);
    if (i === 0) ctx.moveTo(xx, yy); else ctx.lineTo(xx, yy);
  }
  ctx.closePath();
  ctx.fill();
}

function drawOpening(ctx, c, x, y, d, sx, sy, scale = 1) {
  const kind = PATTERNS[c.pattern]?.kind;
  const size = d * scale;
  if (kind === 'trieur') {
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.fill();
    return;
  }
  if (kind === 'square') {
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
    return;
  }
  if (kind === 'slot') {
    drawCapsule(ctx, x, y, size, Math.max(size, c.slotLength * sy));
    return;
  }
  if (kind === 'bridge') {
    const bw = Math.max(1.2, c.holeSize * sy * scale);
    const len = Math.max(bw, c.slotLength * sx);
    ctx.fillRect(x - len / 2, y - bw / 2, len, bw);
    return;
  }
  if (kind === 'hex') {
    drawHex(ctx, x, y, size / 2);
    return;
  }
  if (kind === 'embossed') {
    const r = size / 2;
    ctx.beginPath();
    ctx.moveTo(x, y - r);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x, y + r);
    ctx.lineTo(x - r, y);
    ctx.closePath();
    ctx.fill();
    return;
  }
  if (kind === 'decorative') {
    const holePx = Math.max(1.4, c.holeSize * Math.min(sx, sy));
    decorativeOffsets(c).forEach(([dx, dy]) => {
      ctx.beginPath();
      ctx.arc(x + dx * sx, y + dy * sy, holePx / 2, 0, Math.PI * 2);
      ctx.fill();
    });
    return;
  }
  ctx.beginPath();
  ctx.arc(x, y, size / 2, 0, Math.PI * 2);
  ctx.fill();
}

function drawBump(ctx, c, x, y, d, sx, sy) {
  const kind = PATTERNS[c.pattern]?.kind;
  if (kind === 'trieur') {
    const g = ctx.createRadialGradient(x, y * 0.98, 0, x, y, d * 0.62);
    g.addColorStop(0, '#f4f4f4');
    g.addColorStop(0.45, '#c6c6c6');
    g.addColorStop(1, '#7a7a7a');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, d * 0.58, 0, Math.PI * 2);
    ctx.fill();
    return;
  }
  if (kind === 'embossed') {
    const w = d * 0.9;
    const g = ctx.createLinearGradient(x - w / 2, y - w / 2, x + w / 2, y + w / 2);
    g.addColorStop(0, '#686868');
    g.addColorStop(0.34, '#f6f6f6');
    g.addColorStop(0.58, '#c8c8c8');
    g.addColorStop(1, '#737373');
    ctx.fillStyle = g;
    drawDiamond(ctx, x, y, w, w * 0.08);
    ctx.fill();
    return;
  }
  if (kind === 'perfocon') {
    const r = d * 0.72;
    const g = ctx.createRadialGradient(x - r * 0.18, y - r * 0.18, r * 0.05, x, y, r);
    g.addColorStop(0, '#efefef');
    g.addColorStop(0.38, '#b9b9b9');
    g.addColorStop(0.68, '#747474');
    g.addColorStop(1, '#969696');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    return;
  }
  if (kind === 'bridge') {
    const w = Math.max(d, c.slotLength * sx);
    const h = d * 1.35;
    const g = ctx.createLinearGradient(x, y - h / 2, x, y + h / 2);
    g.addColorStop(0, '#8a8a8a');
    g.addColorStop(0.45, '#f0f0f0');
    g.addColorStop(1, '#6e6e6e');
    ctx.fillStyle = g;
    roundedRect(ctx, x - w / 2, y - h / 2, w, h, h / 2);
    ctx.fill();
  }
}

const TILE_PX = 512;
const HOLE_ALPHA_TEST = 0.5;
const ZOOM_MIN = 0.12;
const ZOOM_MAX = 4.6;

function patternPeriod(c) {
  const pattern = PATTERNS[c.pattern];
  const staggered = Boolean(pattern?.staggered);
  const kind = pattern?.kind;
  const rowPitch = (kind === 'slot' || kind === 'bridge') ? c.rowPitch : (staggered ? c.pitch * STAGGER_ROW : c.pitch);
  const tileW = Math.max(0.01, c.pitch);
  const tileH = Math.max(0.01, staggered ? rowPitch * 2 : rowPitch);
  return { pattern, staggered, kind, rowPitch, tileW, tileH };
}

function drawPeriodic(cellW, cellH, x, y, draw) {
  for (const ox of [-cellW, 0, cellW]) {
    for (const oy of [-cellH, 0, cellH]) draw(x + ox, y + oy);
  }
}

function paintPatternTile(c, { holeScale = 1, bump = false } = {}) {
  const { staggered, kind, rowPitch, tileW, tileH } = patternPeriod(c);
  const cellW = TILE_PX;
  const cellH = Math.max(2, Math.round(TILE_PX * tileH / tileW));
  const canvas = document.createElement('canvas');
  canvas.width = cellW;
  canvas.height = cellH;
  const ctx = canvas.getContext('2d', { alpha: false });
  const sx = cellW / tileW;
  const sy = cellH / tileH;
  const d = Math.max(1.6, c.holeSize * Math.min(sx, sy));
  ctx.fillStyle = bump ? '#808080' : '#ffffff';
  ctx.fillRect(0, 0, cellW, cellH);
  if (!bump) ctx.fillStyle = '#000000';
  ctx.imageSmoothingEnabled = kind !== 'square' && kind !== 'bridge';
  ctx.imageSmoothingQuality = 'high';
  const rowH = rowPitch * sy;
  const stamp = (x, y) => {
    drawPeriodic(cellW, cellH, x, y, (xx, yy) => {
      if (bump) drawBump(ctx, c, xx, yy, d, sx, sy);
      else drawOpening(ctx, c, xx, yy, d, sx, sy, holeScale);
    });
  };
  ctx.save();
  ctx.translate(0, cellH);
  ctx.scale(1, -1);
  stamp(cellW / 2, rowH / 2);
  if (staggered) stamp(cellW, rowH + rowH / 2);
  ctx.restore();
  return canvas;
}

function isExtrudedForm(kind) {
  return kind === 'trieur' || kind === 'embossed' || kind === 'bridge' || kind === 'perfocon';
}

function buildPatternMaps(config, maxAnisotropy = 4, { holeScale = 1, skipBump = false } = {}) {
  const c = normalizeConfig(config);
  const kind = PATTERNS[c.pattern]?.kind;
  const formed = Boolean(PATTERNS[c.pattern]?.formed) && !skipBump && !isExtrudedForm(kind);
  const { tileW, tileH } = patternPeriod(c);
  const zoneW = Math.max(0.01, c.width - 2 * c.border);
  const zoneH = Math.max(0.01, c.height - 2 * c.border);
  const repeatX = zoneW / tileW;
  const repeatY = zoneH / tileH;
  const wrap = { repeatX, repeatY };
  const alphaCanvas = paintPatternTile(c, { holeScale, bump: false });
  const bumpCanvas = formed ? paintPatternTile(c, { bump: true }) : null;
  return {
    alphaMap: makeMaskTexture(alphaCanvas, maxAnisotropy, wrap),
    bumpMap: bumpCanvas ? makeMaskTexture(bumpCanvas, maxAnisotropy, { ...wrap, mipmaps: true }) : null,
    backAlphaMap: null
  };
}

function createSheetMaps(config, maxAnisotropy) {
  const c = normalizeConfig(config);
  if (PATTERNS[c.pattern]?.conical) {
    const cone = conicalProfile(c);
    const maps = buildPatternMaps(c, maxAnisotropy, { holeScale: 1, skipBump: true });
    maps.backAlphaMap = buildPatternMaps(c, maxAnisotropy, { holeScale: cone.exit / cone.entrance, skipBump: true }).alphaMap;
    return maps;
  }
  if (PATTERNS[c.pattern]?.kind === 'embossed') {
    const maps = buildPatternMaps(c, maxAnisotropy, { holeScale: 0.48, skipBump: true });
    maps.backAlphaMap = maps.alphaMap;
    return maps;
  }
  if (PATTERNS[c.pattern]?.kind === 'trieur') {
    const maps = buildPatternMaps(c, maxAnisotropy, { holeScale: 0.72, skipBump: true });
    maps.backAlphaMap = buildPatternMaps(c, maxAnisotropy, { holeScale: 0.9, skipBump: true }).alphaMap;
    return maps;
  }
  return buildPatternMaps(c, maxAnisotropy);
}

function bindPatternMaps(faceMat, backMat, maps, c) {
  const through = PATTERNS[c.pattern]?.through !== false;
  const kind = PATTERNS[c.pattern]?.kind;
  const formed = Boolean(PATTERNS[c.pattern]?.formed) && !isExtrudedForm(kind);
  const cutSkin = through || kind === 'trieur';
  const faceAlpha = cutSkin ? maps.alphaMap : null;
  const backAlpha = cutSkin ? (maps.backAlphaMap || maps.alphaMap) : null;
  const iosAlpha = typeof navigator !== 'undefined' && (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
  if (faceMat) {
    faceMat.alphaMap = faceAlpha;
    faceMat.alphaTest = cutSkin ? HOLE_ALPHA_TEST : 0;
    faceMat.transparent = Boolean(cutSkin && iosAlpha);
    faceMat.bumpMap = maps.bumpMap;
    faceMat.bumpScale = formed ? 0.016 : 0;
    faceMat.needsUpdate = true;
  }
  if (backMat) {
    backMat.alphaMap = backAlpha;
    backMat.alphaTest = cutSkin ? HOLE_ALPHA_TEST : 0;
    backMat.transparent = Boolean(cutSkin && iosAlpha);
    backMat.bumpMap = null;
    backMat.bumpScale = 0;
    backMat.needsUpdate = true;
  }
}

function disposeUnusedMaps(prev, next) {
  const keep = new Set([next.alphaMap, next.bumpMap, next.backAlphaMap].filter(Boolean));
  prev.forEach((tex) => {
    if (tex && !keep.has(tex)) {
      keep.add(tex);
      tex.dispose();
    }
  });
}

function makeMaskTexture(canvas, maxAnisotropy, { repeatX = 1, repeatY = 1, mipmaps = false } = {}) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.NoColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.generateMipmaps = mipmaps;
  texture.minFilter = mipmaps ? THREE.LinearMipmapLinearFilter : THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = mipmaps ? Math.max(1, maxAnisotropy) : 1;
  texture.needsUpdate = true;
  return texture;
}

function sheetOutlineShape(width, height, c) {
  const shape = new THREE.Shape();
  const hw = width / 2;
  const size = Math.min(cornerTreatmentMm(c) / 1000, width / 3, height / 3);
  if (c.corner === 'radius' && size > 0.0005) {
    const r = size;
    shape.moveTo(-hw + r, 0);
    shape.lineTo(hw - r, 0);
    shape.absarc(hw - r, r, r, -Math.PI / 2, 0, false);
    shape.lineTo(hw, height - r);
    shape.absarc(hw - r, height - r, r, 0, Math.PI / 2, false);
    shape.lineTo(-hw + r, height);
    shape.absarc(-hw + r, height - r, r, Math.PI / 2, Math.PI, false);
    shape.lineTo(-hw, r);
    shape.absarc(-hw + r, r, r, Math.PI, Math.PI * 1.5, false);
    shape.closePath();
  } else if (c.corner === 'chamfer' && size > 0.0005) {
    const ch = size;
    shape.moveTo(-hw + ch, 0);
    shape.lineTo(hw - ch, 0);
    shape.lineTo(hw, ch);
    shape.lineTo(hw, height - ch);
    shape.lineTo(hw - ch, height);
    shape.lineTo(-hw + ch, height);
    shape.lineTo(-hw, height - ch);
    shape.lineTo(-hw, ch);
    shape.closePath();
  } else {
    shape.moveTo(-hw, 0);
    shape.lineTo(hw, 0);
    shape.lineTo(hw, height);
    shape.lineTo(-hw, height);
    shape.closePath();
  }
  return shape;
}

function addSheetSkins(group, faceMat, backMat, solidMat, width, height, thickness, c) {
  const borderM = c.border / 1000;
  const z = thickness / 2 + 0.0001;
  const innerW = Math.max(0.0008, width - 2 * borderM);
  const innerH = Math.max(0.0008, height - 2 * borderM);
  const outline = sheetOutlineShape(width, height, c);
  if (borderM > 0.00025 && innerW > 0.001 && innerH > 0.001) {
    const hole = new THREE.Path();
    const hw = innerW / 2;
    const y0 = borderM;
    hole.moveTo(-hw, y0);
    hole.lineTo(-hw, y0 + innerH);
    hole.lineTo(hw, y0 + innerH);
    hole.lineTo(hw, y0);
    hole.closePath();
    outline.holes.push(hole);
  }
  const bodyGeo = new THREE.ExtrudeGeometry(outline, {
    depth: thickness,
    bevelEnabled: false,
    curveSegments: c.corner === 'radius' ? 14 : 1
  });
  bodyGeo.translate(0, 0, -thickness / 2);
  const body = new THREE.Mesh(bodyGeo, solidMat);
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  const addFace = (mat, sign) => {
    const inner = new THREE.Mesh(new THREE.PlaneGeometry(innerW, innerH, 1, 1), mat);
    inner.position.set(0, height / 2, sign * z);
    inner.castShadow = false;
    inner.receiveShadow = sign > 0;
    group.add(inner);
  };
  addFace(faceMat, 1);
  if (backMat) addFace(backMat, -1);

  if (c._arExport) return;

  const outlineLines = new THREE.LineSegments(
    new THREE.EdgesGeometry(bodyGeo, 18),
    new THREE.LineBasicMaterial({ color: 0x12171d, transparent: true, opacity: 0.28 })
  );
  group.add(outlineLines);
}

const FORMED_INSTANCE_LIMIT = 250000;
const _formDummy = new THREE.Object3D();
const _dimA = new THREE.Vector3();
const _dimB = new THREE.Vector3();

function seatGeometryOnFace(geo) {
  geo.computeBoundingBox();
  const box = geo.boundingBox;
  geo.translate(-(box.min.x + box.max.x) / 2, -(box.min.y + box.max.y) / 2, -box.min.z);
  geo.computeVertexNormals();
  return geo;
}

function trieurCupGeometry(wallDepth = 0.45) {
  const dome = new THREE.SphereGeometry(1, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2);
  dome.rotateX(Math.PI / 2);
  seatGeometryOnFace(dome);
  const depth = Math.max(0.12, wallDepth);
  const neck = new THREE.CylinderGeometry(0.9, 0.9, depth, 16, 1, true);
  neck.rotateX(Math.PI / 2);
  neck.translate(0, 0, -depth / 2);
  return mergeIndexedGeometries([dome, neck]);
}

function pointInDiamond(x, y, half) {
  return Math.abs(x) + Math.abs(y) <= half;
}

function stripInnerBottomCap(geo, innerHalf, zMax = 0.0015) {
  const pos = geo.attributes.position;
  const isInnerFloor = (a, b, c) => {
    if (pos.getZ(a) > zMax || pos.getZ(b) > zMax || pos.getZ(c) > zMax) return false;
    const x = (pos.getX(a) + pos.getX(b) + pos.getX(c)) / 3;
    const y = (pos.getY(a) + pos.getY(b) + pos.getY(c)) / 3;
    return pointInDiamond(x, y, innerHalf);
  };
  if (geo.index) {
    const src = geo.index.array;
    const keep = [];
    for (let i = 0; i < src.length; i += 3) {
      const a = src[i];
      const b = src[i + 1];
      const c = src[i + 2];
      if (isInnerFloor(a, b, c)) continue;
      keep.push(a, b, c);
    }
    geo.setIndex(keep);
  } else {
    const next = [];
    for (let i = 0; i < pos.count; i += 3) {
      if (isInnerFloor(i, i + 1, i + 2)) continue;
      next.push(
        pos.getX(i), pos.getY(i), pos.getZ(i),
        pos.getX(i + 1), pos.getY(i + 1), pos.getZ(i + 1),
        pos.getX(i + 2), pos.getY(i + 2), pos.getZ(i + 2)
      );
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(next, 3));
  }
  geo.computeVertexNormals();
  return geo;
}

function mergeIndexedGeometries(geos) {
  const positions = [];
  const indices = [];
  let offset = 0;
  geos.forEach((g) => {
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) positions.push(pos.getX(i), pos.getY(i), pos.getZ(i));
    const idx = g.index ? g.index.array : null;
    if (idx) {
      for (let i = 0; i < idx.length; i++) indices.push(idx[i] + offset);
    } else {
      for (let i = 0; i < pos.count; i++) indices.push(offset + i);
    }
    offset += pos.count;
    g.dispose();
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

function diamondPunchWalls(half, zFront, zBack) {
  const ring = (z) => ([0, -half, z, half, 0, z, 0, half, z, -half, 0, z]);
  const positions = [...ring(zFront), ...ring(zBack)];
  const indices = [];
  const quad = (a, b, c, d) => { indices.push(a, b, c, a, c, d); };
  for (let i = 0; i < 4; i++) {
    const n = (i + 1) % 4;
    quad(i, n, 4 + n, 4 + i);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  return geo;
}

function diamondSealRing(outer, inner, z) {
  const ring = (half) => ([0, -half, z, half, 0, z, 0, half, z, -half, 0, z]);
  const positions = [...ring(outer), ...ring(inner)];
  const indices = [];
  const quad = (a, b, c, d) => { indices.push(a, b, c, a, c, d); };
  for (let i = 0; i < 4; i++) {
    const n = (i + 1) % 4;
    quad(i, n, 4 + n, 4 + i);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  return geo;
}

function embossedDiamondGeometry(wallDepth = 0.45) {
  const punch = 0.32;
  const shape = new THREE.Shape();
  shape.moveTo(0, -0.5);
  shape.lineTo(0.5, 0);
  shape.lineTo(0, 0.5);
  shape.lineTo(-0.5, 0);
  shape.closePath();
  const boss = new THREE.ExtrudeGeometry(shape, {
    depth: 0.72,
    bevelEnabled: true,
    bevelThickness: 0.28,
    bevelSize: 0.1,
    bevelSegments: 2,
    curveSegments: 1
  });
  seatGeometryOnFace(boss);
  stripInnerBottomCap(boss, punch + 0.02);
  const seal = diamondSealRing(0.62, punch, 0.00035);
  const walls = diamondPunchWalls(punch, 0.00035, -Math.max(0.12, wallDepth));
  return mergeIndexedGeometries([boss, seal, walls]);
}

function bridgeHoodGeometry(c) {
  const slotW = c.holeSize / 1000;
  const width = slotW * 0.84;
  const length = Math.max(c.holeSize, c.slotLength) / 1000;
  const metal = Math.max(0.0004, Math.min(c.thickness / 1000, slotW * 0.16));
  const rise = slotW * 0.72;
  const top = length * 0.62;
  const y0 = -width / 2;
  const y1 = width / 2;
  const xs = [-length / 2, -top / 2, top / 2, length / 2];
  const innerZ = [0.00004, rise, rise, 0.00004];
  const outerZ = [metal, rise + metal, rise + metal, metal];

  const positions = [];
  for (const y of [y0, y1]) {
    for (let i = 0; i < 4; i++) positions.push(xs[i], y, innerZ[i]);
  }
  for (const y of [y0, y1]) {
    for (let i = 0; i < 4; i++) positions.push(xs[i], y, outerZ[i]);
  }

  const indices = [];
  const quad = (a, b, c, d) => { indices.push(a, b, c, a, c, d); };
  for (let i = 0; i < 3; i++) {
    quad(8 + i, 9 + i, 13 + i, 12 + i);
    quad(i, i + 1, i + 9, i + 8);
    quad(4 + i, 12 + i, 13 + i, 5 + i);
  }
  quad(0, 8, 12, 4);
  quad(3, 7, 15, 11);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

function perfoconConeGeometry(c, segments = 16) {
  const cone = conicalProfile(c);
  const rIn = cone.entrance / 2000;
  const rHead = cone.head / 2000;
  const h = Math.max(0.0008, cone.height / 1000);
  const lip = Math.max(0.00012, Math.min((rHead - rIn) * 0.22, rIn * 0.18));
  const underHead = Math.max(0.00005, (rHead - rIn) * 0.1);
  const pts = [
    new THREE.Vector2(rIn, 0.00002),
    new THREE.Vector2(rIn, h),
    new THREE.Vector2(rIn + lip, h),
    new THREE.Vector2(rHead, underHead),
    new THREE.Vector2(rHead, 0.00002)
  ];
  const geo = new THREE.LatheGeometry(pts, segments);
  geo.rotateX(Math.PI / 2);
  geo.computeVertexNormals();
  return geo;
}

function addFormedFeatures(group, c, width, height, thickness, mat) {
  const kind = PATTERNS[c.pattern]?.kind;
  if (!isExtrudedForm(kind)) return null;
  const count = Math.min(FORMED_INSTANCE_LIMIT, estimatedHoleCount(c));
  if (count <= 0) return null;

  let geometry;
  let sx;
  let sy;
  let sz;
  if (kind === 'trieur') {
    const radius = c.holeSize / 2000;
    sx = radius;
    sy = radius;
    sz = radius;
    geometry = trieurCupGeometry(thickness / sz);
  } else if (kind === 'embossed') {
    const size = c.holeSize / 1000;
    sx = size * 0.9;
    sy = size * 0.9;
    sz = size * 0.38;
    geometry = embossedDiamondGeometry(thickness / sz);
  } else if (kind === 'perfocon') {
    const segments = count > 80000 ? 8 : count > 25000 ? 12 : 16;
    geometry = perfoconConeGeometry(c, segments);
    sx = 1;
    sy = 1;
    sz = 1;
  } else {
    geometry = bridgeHoodGeometry(c);
    sx = 1;
    sy = 1;
    sz = 1;
  }

  const meshMat = (kind === 'perfocon' || kind === 'bridge' || kind === 'embossed' || kind === 'trieur') ? mat.clone() : mat;
  if (kind === 'perfocon' || kind === 'trieur') meshMat.side = THREE.DoubleSide;
  if (kind === 'bridge' || kind === 'embossed') meshMat.side = THREE.FrontSide;
  const mesh = new THREE.InstancedMesh(geometry, meshMat, count);
  mesh.name = 'FORMED_FEATURES';
  mesh.frustumCulled = false;
  mesh.receiveShadow = count <= 12000;
  mesh.castShadow = count <= 8000;
  let i = 0;
  forEachHole(c, (x, y) => {
    if (i >= count) return false;
    _formDummy.position.set(x / 1000 - width / 2, y / 1000, thickness / 2);
    _formDummy.rotation.set(0, 0, 0);
    _formDummy.scale.set(sx, sy, sz);
    _formDummy.updateMatrix();
    mesh.setMatrixAt(i, _formDummy.matrix);
    i += 1;
    return undefined;
  });
  mesh.count = i;
  mesh.instanceMatrix.needsUpdate = true;
  const formed = new THREE.Group();
  formed.name = 'FORMED_PATTERN';
  formed.add(mesh);
  group.add(formed);
  return formed;
}

function disposeObject(obj) {
  if (!obj) return;
  const seen = new Set();
  obj.traverse((child) => {
    child.geometry?.dispose?.();
    const mats = Array.isArray(child.material) ? child.material : [child.material];
    mats.forEach((m) => {
      if (!m) return;
      ['alphaMap', 'map', 'envMap', 'bumpMap'].forEach((key) => {
        const tex = m[key];
        if (tex && !seen.has(tex)) {
          seen.add(tex);
          tex.dispose?.();
        }
      });
      if (!seen.has(m)) {
        seen.add(m);
        m.dispose?.();
      }
    });
  });
}

function appearanceKey(c) {
  return `${c.material}|${c.finish}|${c.color}`;
}
function maskKey(c) {
  return `${c.width}|${c.height}|${c.pattern}|${c.holeSize}|${c.slotLength}|${c.pitch}|${c.rowPitch}|${c.border}|${c.coneAngle}|${c.thickness}`;
}
function formKey(c) {
  return `${c.width}|${c.height}|${c.border}|${c.thickness}|${c.panelForm}|${c.flangeDepth}|${c.bendAngle}|${c.bendRadius}|${c.corner}|${c.cornerRadius}`;
}

function addFormDetails(group, c, width, height, thickness, edgeMat) {
  if (c.panelForm !== 'flat') {
    const depth = Math.max(thickness * 3, c.flangeDepth / 1000);
    const tilt = THREE.MathUtils.degToRad(90 - c.bendAngle);
    const z = -Math.cos(tilt) * depth / 2;
    const planar = Math.sin(tilt) * depth / 2;
    const flange = (w, h, d) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), edgeMat);
      mesh.castShadow = true; mesh.receiveShadow = true; return mesh;
    };
    if (c.panelForm === 'topFold' || c.panelForm === 'cassette') {
      const top = flange(width, thickness, depth); top.rotation.x = tilt;
      top.position.set(0, height - thickness / 2 + planar, z); group.add(top);
    }
    if (c.panelForm === 'sideReturns' || c.panelForm === 'cassette') {
      const left = flange(thickness, height, depth); left.rotation.y = -tilt;
      left.position.set(-width / 2 + thickness / 2 - planar, height / 2, z);
      const right = flange(thickness, height, depth); right.rotation.y = tilt;
      right.position.set(width / 2 - thickness / 2 + planar, height / 2, z); group.add(left, right);
    }
    if (c.panelForm === 'cassette') {
      const bottom = flange(width, thickness, depth); bottom.rotation.x = -tilt;
      bottom.position.set(0, thickness / 2 - planar, z); group.add(bottom);
    }
  }
}

export class Three3DScene {
  constructor(canvas, { bakedShadows = true, onArState, onArScale, onBusy } = {}) {
    this.canvas = canvas;
    this.bakedShadows = bakedShadows;
    this.onArState = onArState || (() => {});
    this.onArScale = onArScale || (() => {});
    this.onBusy = onBusy || (() => {});
    this.model = null;
    this.config = null;
    this.sizeKey = '';
    this.configGen = 0;
    this.orbit = { theta: -0.48, phi: 1.18, radius: 1.92 };
    this.target = { ...this.orbit };
    this.lookAt = new THREE.Vector3(0, 0.72, 0);
    this.pointers = new Map();
    this.pinchStart = 0;
    this.dirty = true;
    this.xrSession = null;
    this.hitTestSource = null;
    this.arPlaced = false;
    this.arMoving = false;
    this.arHitStable = 0;
    this.arLastHitY = null;
    this.arPointers = new Map();
    this.arPinchStart = 0;
    this.arPinchScale0 = 100;
    this.arTwistStart = 0;
    this.arTwistYaw0 = 0;
    this.scalePercent = 100;
    this.fitScale = 1;
    this.arFloorY = null;
    this.studioEnv = null;
    this.xrLight = null;
    this.overlay = null;
    this._arMode = 'idle';
    this.tool = 'orbit';
    this.studioColor = 0x101419;
    this.disposed = false;
    this.faceMat = null;
    this.backMat = null;
    this.edgeMat = null;
    this.solidMat = null;
    this.formedGroup = null;
    this.formedMat = null;
    this.appearanceId = '';
    this.maskId = '';
    this.formId = '';
    this.maxAnisotropy = 4;
    this.dimHud = null;
    this.compact = isCompactWeb() || detectPlatform().ios;
    this.iosRenderer = detectPlatform().ios;
    this.pixelRatioCap = this.compact ? Math.min(devicePixelRatio || 1, 1.1) : Math.min(devicePixelRatio || 1, 1.5);

    this.renderer = new THREE.WebGLRenderer({
      canvas, antialias: !this.compact, alpha: false, preserveDrawingBuffer: false, powerPreference: 'default'
    });
    this.renderer.setPixelRatio(this.pixelRatioCap);
    this.renderer.setClearColor(this.studioColor, 1);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.32;
    this.renderer.shadowMap.enabled = !this.compact;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.shadowMap.autoUpdate = !bakedShadows && !this.compact;
    this.renderer.xr.enabled = true;
    this.renderer.xr.setReferenceSpaceType('local');

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(this.studioColor);
    this.scene.fog = this.iosRenderer ? null : new THREE.Fog(this.studioColor, 7.5, 16);
    this.camera = new THREE.PerspectiveCamera(32, 1, 0.02, 100);

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.studioEnv = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environment = this.studioEnv;
    pmrem.dispose();

    this.maxAnisotropy = Math.min(this.compact ? 4 : 16, this.renderer.capabilities.getMaxAnisotropy() || 8);
    this.hemi = new THREE.HemisphereLight(0xf7f9fb, 0x8a9298, 1.85);
    this.scene.add(this.hemi);
    this.keyLight = new THREE.DirectionalLight(0xffffff, this.compact ? 2.2 : 2.62);
    this.keyLight.position.set(2.4, 4.8, 3.4);
    this.keyLight.castShadow = !this.compact;
    this.keyLight.shadow.mapSize.set(this.compact ? 512 : 1024, this.compact ? 512 : 1024);
    this.keyLight.shadow.bias = -0.00025;
    this.keyLight.shadow.normalBias = 0.02;
    const shadowCam = this.keyLight.shadow.camera;
    shadowCam.near = 0.4;
    shadowCam.far = 10;
    shadowCam.left = -2.2;
    shadowCam.right = 2.2;
    shadowCam.top = 2.4;
    shadowCam.bottom = -0.4;
    this.scene.add(this.keyLight);
    this.rimLight = new THREE.DirectionalLight(0xd7e6ff, this.compact ? 1.15 : 2.05);
    this.rimLight.position.set(-3.2, 2.4, -2.8);
    this.scene.add(this.rimLight);
    this.fillLight = new THREE.DirectionalLight(0xfff6ea, this.compact ? 0.45 : 0.7);
    this.fillLight.position.set(-1.4, 1.6, 3.2);
    this.scene.add(this.fillLight);
    if (!this.compact) {
      this.backLight = new THREE.DirectionalLight(0xffffff, 2.15);
      this.backLight.position.set(-2.1, 3.6, -3.8);
      this.scene.add(this.backLight);
    }

    this.ground = new THREE.Mesh(
      new THREE.CircleGeometry(1.72, this.compact ? 32 : 64),
      new THREE.MeshStandardMaterial({ color: 0x0c1014, metalness: 0.28, roughness: 0.58, envMapIntensity: 0.18 })
    );
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.receiveShadow = true;
    this.scene.add(this.ground);
    this.groundShadow = new THREE.Mesh(new THREE.CircleGeometry(1.08, this.compact ? 24 : 48), new THREE.ShadowMaterial({ opacity: 0.64 }));
    this.groundShadow.rotation.x = -Math.PI / 2;
    this.groundShadow.position.y = 0.002;
    this.groundShadow.receiveShadow = true;
    this.scene.add(this.groundShadow);

    this.root = new THREE.Group();
    this.scene.add(this.root);

    this.reticle = new THREE.Mesh(
      new THREE.RingGeometry(0.07, 0.09, 36).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.92, transparent: true })
    );
    this.reticle.matrixAutoUpdate = false;
    this.reticle.visible = false;
    this.scene.add(this.reticle);

    this.arFloor = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), new THREE.ShadowMaterial({ opacity: 0.26 }));
    this.arFloor.rotation.x = -Math.PI / 2;
    this.arFloor.position.y = 0.012;
    this.arFloor.receiveShadow = true;
    this.arFloor.visible = false;
    this.root.add(this.arFloor);

    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
    this.onWheel = this.onWheel.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onARPointerDown = this.onARPointerDown.bind(this);
    this.onARPointerMove = this.onARPointerMove.bind(this);
    this.onARPointerUp = this.onARPointerUp.bind(this);
    canvas.addEventListener('pointerdown', this.onPointerDown, { passive: false });
    window.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerup', this.onPointerUp);
    window.addEventListener('pointercancel', this.onPointerUp);
    canvas.addEventListener('wheel', this.onWheel, { passive: false });
    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(canvas.parentElement || canvas);
    window.visualViewport?.addEventListener('resize', this.onResize);

    this.onResize();
    this.applyOrbit(true);
    this.renderer.setAnimationLoop((time, frame) => this.tick(time, frame));
  }

  async load(config) {
    await this.updateConfig(config);
  }

  async updateConfig(input) {
    if (this.disposed) return;
    const c = normalizeConfig(input);
    const gen = ++this.configGen;
    const nextAppearance = appearanceKey(c);
    const nextMask = maskKey(c);
    const nextForm = formKey(c);
    this.onBusy(true);
    try {
      if (this.model && nextForm === this.formId && nextMask === this.maskId && nextAppearance !== this.appearanceId) {
        await this.applyAppearance(c);
        if (this.disposed || gen !== this.configGen) return;
        this.appearanceId = nextAppearance;
        this.config = c;
        return;
      }

      if (this.model && nextForm === this.formId && nextMask !== this.maskId) {
        await new Promise((resolve) => requestAnimationFrame(resolve));
        if (this.disposed || gen !== this.configGen) return;
        this.replaceMask(c);
        await this.applyAppearance(c);
        if (this.disposed || gen !== this.configGen) return;
        this.maskId = nextMask;
        this.appearanceId = nextAppearance;
        this.config = c;
        this.renderer.shadowMap.needsUpdate = true;
        return;
      }

      await new Promise((resolve) => requestAnimationFrame(resolve));
      if (this.disposed || gen !== this.configGen) return;
      await this.applyModel(c);
      if (this.disposed || gen !== this.configGen) return;
      this.formId = nextForm;
      this.maskId = nextMask;
      this.appearanceId = nextAppearance;
    } finally {
      if (gen === this.configGen) this.onBusy(false);
    }
  }

  async applyAppearance(c) {
    const appearance = finishAppearance(c);
    const sheetRepeat = new THREE.Vector2(Math.max(2, c.width / 420), Math.max(2, c.height / 420));
    let maps = null;
    try {
      maps = await loadPbrMaps(c, this.maxAnisotropy);
    } catch {
      maps = null;
    }
    if (this.disposed) return;
    const tint = maps?.colorMap && appearance.pbr?.useColorMap
      ? (appearance.pbr.tint || appearance.hex || '#ffffff')
      : appearance.hex;
    const apply = (mat, extraMetal = 0, extraRough = 0) => {
      if (!mat) return;
      mat.color.set(tint);
      if (maps?.colorMap && appearance.pbr?.useColorMap && appearance.pbr.colorBoost) {
        mat.color.multiplyScalar(appearance.pbr.colorBoost);
      }
      mat.metalness = Math.min(1, appearance.metalness + extraMetal);
      mat.roughness = Math.max(0.04, appearance.roughness + extraRough);
      mat.envMapIntensity = appearance.envMapIntensity + (extraMetal ? 0.12 : 0);
      if (mat.isMeshPhysicalMaterial) {
        mat.clearcoat = appearance.clearcoat;
        mat.clearcoatRoughness = c.finish === 'powder' ? 0.42 : 0.18;
      }
      if (maps) bindPbrMaps(mat, maps, appearance, sheetRepeat);
      mat.needsUpdate = true;
    };
    apply(this.faceMat);
    apply(this.backMat);
    if (this.backMat) this.backMat.envMapIntensity = appearance.envMapIntensity + 0.2;
    apply(this.solidMat);
    apply(this.formedMat);
    apply(this.edgeMat, 0.08, -0.08);
    this.dirty = true;
  }

  replaceMask(c) {
    const maps = createSheetMaps(c, this.maxAnisotropy);
    const prev = [this.faceMat?.alphaMap, this.backMat?.alphaMap, this.faceMat?.bumpMap, this.backMat?.bumpMap];
    bindPatternMaps(this.faceMat, this.backMat, maps, c);
    disposeUnusedMaps(prev, {
      alphaMap: this.faceMat?.alphaMap,
      bumpMap: this.faceMat?.bumpMap,
      backAlphaMap: this.backMat?.alphaMap
    });
    this.replaceFormedFeatures(c);
    this.dirty = true;
  }

  replaceFormedFeatures(c) {
    if (this.formedGroup) {
      this.model?.remove(this.formedGroup);
      const shared = new Set([this.solidMat, this.faceMat, this.backMat, this.edgeMat]);
      this.formedGroup.traverse((child) => {
        child.geometry?.dispose?.();
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach((m) => {
          if (m && !shared.has(m)) {
            shared.add(m);
            m.dispose();
          }
        });
      });
      this.formedGroup = null;
      this.formedMat = null;
    }
    if (!this.model || !this.solidMat) return;
    const width = c.width / 1000;
    const height = c.height / 1000;
    const thickness = Math.max(0.0005, c.thickness / 1000);
    this.formedGroup = addFormedFeatures(this.model, c, width, height, thickness, this.solidMat);
    this.formedMat = this.formedGroup?.children[0]?.material || null;
  }

  async applyModel(c) {
    this.config = c;
    const old = this.model;
    if (old) this.root.remove(old);

    const width = c.width / 1000;
    const height = c.height / 1000;
    const thickness = Math.max(0.0005, c.thickness / 1000);
    const appearance = finishAppearance(c);
    const maps = createSheetMaps(c, this.maxAnisotropy);
    const group = new THREE.Group();
    group.name = 'PERFORATED_SHEET';

    const faceMat = new THREE.MeshPhysicalMaterial({
      color: appearance.hex,
      metalness: appearance.metalness,
      roughness: appearance.roughness,
      alphaTest: PATTERNS[c.pattern]?.through === false ? 0 : HOLE_ALPHA_TEST,
      transparent: false,
      side: THREE.DoubleSide,
      clearcoat: appearance.clearcoat,
      clearcoatRoughness: c.finish === 'powder' ? 0.38 : 0.28,
      envMapIntensity: appearance.envMapIntensity
    });
    bindPatternMaps(faceMat, null, maps, c);
    const backMat = faceMat.clone();
    backMat.side = THREE.DoubleSide;
    backMat.envMapIntensity = appearance.envMapIntensity + 0.2;
    bindPatternMaps(null, backMat, maps, c);
    disposeUnusedMaps([maps.alphaMap, maps.bumpMap, maps.backAlphaMap], {
      alphaMap: faceMat.alphaMap,
      bumpMap: faceMat.bumpMap,
      backAlphaMap: backMat.alphaMap
    });
    const solidMat = faceMat.clone();
    solidMat.alphaMap = null;
    solidMat.bumpMap = null;
    solidMat.alphaTest = 0;
    solidMat.bumpScale = 0;
    addSheetSkins(group, faceMat, backMat, solidMat, width, height, thickness, c);

    const edgeMat = new THREE.MeshPhysicalMaterial({
      color: appearance.hex,
      metalness: Math.min(1, appearance.metalness + 0.08),
      roughness: Math.max(0.08, appearance.roughness - 0.08),
      envMapIntensity: appearance.envMapIntensity + 0.12,
      clearcoat: appearance.clearcoat
    });
    addFormDetails(group, c, width, height, thickness, edgeMat);
    this.formedGroup = addFormedFeatures(group, c, width, height, thickness, solidMat);
    this.formedMat = this.formedGroup?.children[0]?.material || null;

    this.model = group;
    this.faceMat = faceMat;
    this.backMat = backMat;
    this.solidMat = solidMat;
    this.edgeMat = edgeMat;
    await this.applyAppearance(c);
    if (this.disposed) {
      disposeObject(group);
      return;
    }
    this.root.add(group);
    if (old) disposeObject(old);

    const sizeKey = `${c.width}x${c.height}x${c.thickness}`;
    const firstLoad = !this.sizeKey;
    this.sizeKey = sizeKey;
    const maxDim = Math.max(width, height);
    this.fitScale = 1.95 / Math.max(0.15, maxDim);
    this.applyCurrentScale();
    this.lookAt.set(0, height * this.fitScale * 0.5, 0);
    if (firstLoad) {
      this.target.theta = -0.48;
      this.target.phi = 1.18;
      this.target.radius = 1.92;
      this.orbit = { ...this.target };
    }
    this.applyOrbit(true);
    this.renderer.shadowMap.needsUpdate = true;
    this.dirty = true;
  }

  applyCurrentScale() {
    const factor = (this.xrSession ? 1 : this.fitScale) * (this.scalePercent / 100);
    this.root.scale.setScalar(factor);
    this.dirty = true;
  }

  setTool(tool) {
    this.tool = tool === 'pan' || tool === 'zoom' ? tool : 'orbit';
  }

  setPreset(name) {
    const presets = {
      iso: { theta: -0.48, phi: 1.18, radius: 1.92 },
      top: { theta: 0, phi: 0.22, radius: 2.15 },
      front: { theta: 0, phi: 1.38, radius: 2.02 },
      right: { theta: Math.PI / 2, phi: 1.22, radius: 2.02 }
    };
    const next = presets[name] || presets.iso;
    this.target.theta = next.theta;
    this.target.phi = next.phi;
    this.target.radius = next.radius;
    this.dirty = true;
  }

  fitView() {
    this.target.radius = 1.92;
    this.dirty = true;
  }

  resetView() {
    this.lookAt.set(0, this.lookAt.y, 0);
    this.setPreset('iso');
  }

  setScalePercent(percent) {
    this.scalePercent = percent;
    this.applyCurrentScale();
    if (this.xrSession && this.arPlaced) {
      this.onArScale(percent);
      if (this.arFloorY != null) this.snapToFloor(this.arFloorY);
    }
  }

  setDimensionHud(hud) {
    this.dimHud = hud || null;
    this.layoutDimensions();
  }

  hideDimensions() {
    if (!this.dimHud) return;
    Object.values(this.dimHud).forEach((el) => {
      if (el) el.style.opacity = '0';
    });
  }

  layoutDimensions() {
    if (!this.dimHud || !this.config || this.xrSession || !this.model) {
      this.hideDimensions();
      return;
    }
    this.model.updateMatrixWorld(true);
    const w = this.config.width / 1000;
    const h = this.config.height / 1000;
    const t = Math.max(0.0005, this.config.thickness / 1000);
    const gap = Math.max(w, h) * 0.055;
    const world = this.model.matrixWorld;
    this.placeDimLine(this.dimHud.width, -w / 2, -gap, t / 2, w / 2, -gap, t / 2, world, 16);
    this.placeDimLine(this.dimHud.height, -w / 2 - gap, 0, t / 2, -w / 2 - gap, h, t / 2, world, 16);
    this.placeDimLine(this.dimHud.thickness, w / 2 + gap * 0.4, h * 0.72, -t / 2, w / 2 + gap * 0.4, h * 0.72, t / 2, world, 18);
  }

  placeDimLine(el, x1, y1, z1, x2, y2, z2, world, minPx) {
    if (!el) return;
    _dimA.set(x1, y1, z1).applyMatrix4(world).project(this.camera);
    _dimB.set(x2, y2, z2).applyMatrix4(world).project(this.camera);
    const behind = _dimA.z < -1 || _dimA.z > 1 || _dimB.z < -1 || _dimB.z > 1;
    const parent = this.canvas.parentElement || this.canvas;
    const cw = parent.clientWidth;
    const ch = parent.clientHeight;
    const ax = (_dimA.x * 0.5 + 0.5) * cw;
    const ay = (-_dimA.y * 0.5 + 0.5) * ch;
    const bx = (_dimB.x * 0.5 + 0.5) * cw;
    const by = (-_dimB.y * 0.5 + 0.5) * ch;
    const dx = bx - ax;
    const dy = by - ay;
    const len = Math.hypot(dx, dy);
    if (behind || len < 6) {
      el.style.opacity = '0';
      return;
    }
    const ang = Math.atan2(dy, dx);
    el.style.opacity = '1';
    el.style.left = `${(ax + bx) / 2}px`;
    el.style.top = `${(ay + by) / 2}px`;
    el.style.width = `${Math.max(len, minPx)}px`;
    el.style.transform = `translate(-50%, -50%) rotate(${ang}rad)`;
    const label = el.querySelector('em');
    if (label) label.style.transform = `translate(-50%, -130%) rotate(${-ang}rad)`;
  }

  setArMode(mode) {
    if (this._arMode === mode) return;
    this._arMode = mode;
    this.onArState(mode);
  }

  applyOrbit(immediate = false) {
    const { theta, phi, radius } = immediate ? this.target : this.orbit;
    const sinPhi = Math.sin(phi);
    this.camera.position.set(
      this.lookAt.x + radius * sinPhi * Math.sin(theta),
      this.lookAt.y + radius * Math.cos(phi),
      this.lookAt.z + radius * sinPhi * Math.cos(theta)
    );
    this.camera.lookAt(this.lookAt);
  }

  tick(_time, frame) {
    if (this.xrSession) {
      this.updateAR(frame);
      this.renderer.render(this.scene, this.camera);
      return;
    }
    const d = Math.abs(this.target.theta - this.orbit.theta) + Math.abs(this.target.phi - this.orbit.phi) + Math.abs(this.target.radius - this.orbit.radius);
    const moving = d > 0.0004;
    if (moving) {
      this.orbit.theta += (this.target.theta - this.orbit.theta) * 0.12;
      this.orbit.phi += (this.target.phi - this.orbit.phi) * 0.12;
      this.orbit.radius += (this.target.radius - this.orbit.radius) * 0.12;
      this.applyOrbit();
    }
    if (this.dirty || moving) {
      this.renderer.render(this.scene, this.camera);
      this.layoutDimensions();
      this.dirty = false;
    }
  }

  updateAR(frame) {
    if (!frame || !this.hitTestSource) return;
    const space = this.renderer.xr.getReferenceSpace();
    if (!space) return;
    const hits = frame.getHitTestResults(this.hitTestSource);
    if (!hits.length) {
      this.arHitStable = 0;
      if (!this.arPlaced) { this.reticle.visible = false; this.setArMode('scanning'); }
      return;
    }
    const pose = hits[0].getPose(space);
    if (!pose) return;
    const y = pose.transform.position.y;
    if (this.arLastHitY != null && Math.abs(y - this.arLastHitY) < 0.025) this.arHitStable += 1;
    else this.arHitStable = 1;
    this.arLastHitY = y;
    const stable = this.arHitStable >= 8;
    this.reticle.matrix.fromArray(pose.transform.matrix);
    this.reticle.visible = !this.arPlaced && stable;
    if (!this.arPlaced && stable) this.setArMode('placing');
  }

  placeAtReticle() {
    if (!this.reticle.visible) return;
    _hitPos.setFromMatrixPosition(this.reticle.matrix);
    this.root.position.copy(_hitPos);
    this.root.rotation.set(0, this.root.rotation.y, 0);
    this.root.visible = true;
    this.arFloor.visible = true;
    this.arPlaced = true;
    this.reticle.visible = false;
    this.snapToFloor(_hitPos.y);
  }

  snapToFloor(floorY) {
    this.arFloorY = floorY;
    this.root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(this.model);
    if (!Number.isFinite(box.min.y)) return;
    this.root.position.y += floorY - box.min.y - 0.012;
  }

  nudgeOnFloor(dx, dy) {
    const cam = this.renderer.xr.getCamera();
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(cam.quaternion);
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion);
    right.y = 0; fwd.y = 0;
    if (right.lengthSq() < 1e-6 || fwd.lengthSq() < 1e-6) return;
    right.normalize(); fwd.normalize();
    this.root.position.addScaledVector(right, dx * 0.0016);
    this.root.position.addScaledVector(fwd, -dy * 0.0016);
  }

  onARPointerDown(e) {
    if (!this.xrSession || e.target.closest('button, input, label')) return;
    e.preventDefault();
    this.overlay?.setPointerCapture?.(e.pointerId);
    this.arPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.arPointers.size === 2) {
      const pts = [...this.arPointers.values()];
      this.arPinchStart = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      this.arPinchScale0 = this.scalePercent;
      this.arTwistStart = Math.atan2(pts[1].y - pts[0].y, pts[1].x - pts[0].x);
      this.arTwistYaw0 = this.root.rotation.y;
      this.arMoving = false;
    } else if (this.arPlaced) { this.arMoving = true; this.setArMode('moving'); }
  }

  onARPointerMove(e) {
    if (!this.xrSession || !this.arPointers.has(e.pointerId)) return;
    const prev = this.arPointers.get(e.pointerId);
    const dx = e.clientX - prev.x; const dy = e.clientY - prev.y;
    this.arPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.arPointers.size === 2 && this.arPlaced) {
      const pts = [...this.arPointers.values()];
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const twist = Math.atan2(pts[1].y - pts[0].y, pts[1].x - pts[0].x);
      if (this.arPinchStart > 8) {
        const next = THREE.MathUtils.clamp(Math.round(this.arPinchScale0 * (dist / this.arPinchStart)), 50, 200);
        this.setScalePercent(next); this.setArMode('scaling');
      }
      this.root.rotation.y = this.arTwistYaw0 + (twist - this.arTwistStart);
      return;
    }
    if (this.arPlaced && this.arMoving) this.nudgeOnFloor(dx, dy);
  }

  onARPointerUp(e) {
    if (!this.xrSession) return;
    const wasOne = this.arPointers.size === 1;
    this.arPointers.delete(e.pointerId);
    if (wasOne && !this.arPlaced && this.reticle.visible) { this.placeAtReticle(); this.setArMode('placed'); }
    else if (this.arPlaced && this.arPointers.size === 0) { this.arMoving = false; this.reticle.visible = false; this.setArMode('placed'); }
    this.arPinchStart = 0;
  }

  onResize() {
    if (this.xrSession) return;
    const rect = this.canvas.parentElement?.getBoundingClientRect() || this.canvas.getBoundingClientRect();
    const w = Math.max(1, rect.width); const h = Math.max(1, rect.height);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.dirty = true;
  }

  onPointerDown(e) {
    if (this.xrSession) return;
    if (e.pointerType === 'touch') e.preventDefault();
    this.canvas.setPointerCapture(e.pointerId);
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.pointers.size === 2) {
      const pts = [...this.pointers.values()];
      this.pinchStart = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    }
  }

  onPointerMove(e) {
    if (this.xrSession || !this.pointers.has(e.pointerId)) return;
    const prev = this.pointers.get(e.pointerId);
    const dx = e.clientX - prev.x; const dy = e.clientY - prev.y;
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.pointers.size === 2) {
      const pts = [...this.pointers.values()];
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      if (this.pinchStart) this.target.radius = THREE.MathUtils.clamp(this.target.radius * (this.pinchStart / dist), ZOOM_MIN, ZOOM_MAX);
      this.pinchStart = dist; return;
    }
    if (this.tool === 'pan') {
      const right = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 0);
      const up = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 1);
      const scale = 0.0022 * this.orbit.radius;
      this.lookAt.addScaledVector(right, -dx * scale);
      this.lookAt.addScaledVector(up, dy * scale);
      this.applyOrbit(true);
      this.dirty = true;
      return;
    }
    if (this.tool === 'zoom') {
      this.target.radius = THREE.MathUtils.clamp(this.target.radius + dy * 0.012, ZOOM_MIN, ZOOM_MAX);
      return;
    }
    this.target.theta -= dx * 0.006;
    this.target.phi = THREE.MathUtils.clamp(this.target.phi - dy * 0.006, 0.22, 1.46);
  }

  onPointerUp(e) { this.pointers.delete(e.pointerId); this.pinchStart = 0; }
  onWheel(e) { if (this.xrSession) return; e.preventDefault(); this.target.radius = THREE.MathUtils.clamp(this.target.radius + e.deltaY * 0.002, ZOOM_MIN, ZOOM_MAX); }

  captureJpeg() {
    const renderer = this.renderer;
    const prevRatio = renderer.getPixelRatio();
    const prevFog = this.scene.fog;
    const prevBg = this.scene.background;
    const groundOn = this.ground.visible;
    const shadowOn = this.groundShadow.visible;
    this.scene.fog = null;
    this.ground.visible = false;
    this.groundShadow.visible = false;
    this.scene.background = new THREE.Color(0xf4f6f7);
    renderer.setClearColor(0xf4f6f7, 1);
    renderer.setPixelRatio(Math.min(3, Math.max(2, (devicePixelRatio || 1) * 2)));
    this.onResize();
    renderer.render(this.scene, this.camera);
    const data = renderer.domElement.toDataURL('image/png');
    this.scene.fog = prevFog;
    this.ground.visible = groundOn;
    this.groundShadow.visible = shadowOn;
    this.scene.background = prevBg || new THREE.Color(this.studioColor);
    renderer.setClearColor(this.studioColor, 1);
    renderer.setPixelRatio(prevRatio);
    this.onResize();
    this.dirty = true;
    return data;
  }

  buildArSheetGroup(c) {
    const width = c.width / 1000;
    const height = c.height / 1000;
    const thickness = Math.max(0.0005, c.thickness / 1000);
    const borderM = c.border / 1000;
    const innerW = Math.max(0.0008, width - 2 * borderM);
    const innerH = Math.max(0.0008, height - 2 * borderM);
    const appearance = finishAppearance(c);
    const maps = createSheetMaps(c, 4);
    const group = new THREE.Group();
    group.name = 'AR_SHEET';

    const faceMat = new THREE.MeshStandardMaterial({
      color: appearance.hex,
      metalness: appearance.metalness,
      roughness: appearance.roughness,
      alphaTest: PATTERNS[c.pattern]?.through === false ? 0 : HOLE_ALPHA_TEST,
      transparent: false,
      side: THREE.DoubleSide
    });
    bindPatternMaps(faceMat, null, maps, c);

    const solidMat = new THREE.MeshStandardMaterial({
      color: appearance.hex,
      metalness: Math.min(1, appearance.metalness + 0.06),
      roughness: Math.max(0.08, appearance.roughness - 0.06),
      side: THREE.FrontSide
    });

    const outline = sheetOutlineShape(width, height, c);
    if (borderM > 0.00025 && innerW > 0.001 && innerH > 0.001) {
      const hole = new THREE.Path();
      const hw = innerW / 2;
      const y0 = borderM;
      hole.moveTo(-hw, y0);
      hole.lineTo(-hw, y0 + innerH);
      hole.lineTo(hw, y0 + innerH);
      hole.lineTo(hw, y0);
      hole.closePath();
      outline.holes.push(hole);
    }

    const frameGeo = new THREE.ExtrudeGeometry(outline, {
      depth: thickness,
      bevelEnabled: false,
      curveSegments: c.corner === 'radius' ? 14 : 1
    });
    frameGeo.translate(0, 0, -thickness / 2);
    const frame = new THREE.Mesh(frameGeo, solidMat);
    frame.name = 'AR_FRAME';
    group.add(frame);

    const face = new THREE.Mesh(new THREE.PlaneGeometry(innerW, innerH), faceMat);
    face.name = 'AR_FACE';
    face.position.set(0, borderM + innerH / 2, thickness / 2 + 0.004);
    face.renderOrder = 2;
    group.add(face);

    group.rotation.x = -Math.PI / 2;
    group.userData.appearance = appearance;
    group.userData.innerW = innerW;
    group.userData.innerH = innerH;
    group.userData.pattern = c.pattern;
    return { group, appearance, innerW, innerH };
  }

  async prepareGroupForUsdz(group, maxTextureSize = 1024) {
    const appearance = group.userData.appearance || {};
    const colorHex = appearance.hex || '#b8bcc2';
    const tasks = [];
    group.traverse((obj) => {
      if (!obj.isMesh || !obj.material) return;
      const source = obj.material;
      const isFace = obj.name === 'AR_FACE';
      tasks.push(createUsdzMaterial(source, {
        colorHex,
        metalness: source.metalness ?? appearance.metalness ?? 0.82,
        roughness: source.roughness ?? appearance.roughness ?? 0.34,
        maxTextureSize,
        perforated: isFace
      }).then((mat) => {
        obj.material = mat;
      }));
    });
    await Promise.all(tasks);
  }

  async exportUSDZ(exportConfig = this.config) {
    if (!this.model || !exportConfig) throw new Error('3D model is still loading');
    const exporter = new USDZExporter();
    const maxTextureSize = this.compact ? 768 : 1024;
    const options = {
      quickLookCompatible: true,
      maxTextureSize,
      ar: {
        anchoring: { type: 'plane' },
        planeAnchoring: { alignment: 'horizontal' }
      }
    };
    const arConfig = normalizeConfig({
      ...exportConfig,
      panelForm: 'flat',
      flangeDepth: 0,
      bendAngle: 0,
      bendRadius: 0
    });

    try {
      const { group } = this.buildArSheetGroup(arConfig);
      await this.prepareGroupForUsdz(group, maxTextureSize);
      const wrapper = new THREE.Group();
      wrapper.name = 'AR_WRAPPER';
      wrapper.rotation.x = Math.PI / 2;
      wrapper.add(group);
      wrapper.scale.setScalar(this.scalePercent / 100);
      return await exporter.parseAsync(wrapper, options);
    } catch (err) {
      console.warn('AR sheet export failed, using model clone fallback', err);
      const wrapper = new THREE.Group();
      wrapper.rotation.x = Math.PI / 2;
      const clone = this.model.clone(true);
      clone.traverse((obj) => { if (obj.isMesh && obj.material) obj.material = obj.material.clone(); });
      wrapper.add(clone);
      wrapper.scale.setScalar(this.scalePercent / 100);
      return exporter.parseAsync(wrapper, options);
    }
  }

  async enterAR({ overlay } = {}) {
    if (!navigator.xr) throw new Error('WebXR is not available in this browser');
    this.overlay = overlay || null;
    const options = { requiredFeatures: ['hit-test'], optionalFeatures: ['dom-overlay', 'local-floor', 'light-estimation'], ...(overlay ? { domOverlay: { root: overlay } } : {}) };
    this.setArMode('launching');
    this.hideDimensions();
    try { this.xrSession = await navigator.xr.requestSession('immersive-ar', options); }
    catch {
      this.xrSession = await navigator.xr.requestSession('immersive-ar', { optionalFeatures: ['hit-test', 'dom-overlay', 'local-floor', 'light-estimation'], ...(overlay ? { domOverlay: { root: overlay } } : {}) });
    }
    this.renderer.setPixelRatio(1);
    await this.renderer.xr.setSession(this.xrSession);
    this.arPlaced = false; this.arMoving = false; this.arHitStable = 0; this.arLastHitY = null; this.arPointers.clear();
    this.root.rotation.set(0, 0, 0); this.root.visible = false; this.ground.visible = false; this.groundShadow.visible = false; this.arFloor.visible = false; this.reticle.visible = false;
    this.renderer.shadowMap.autoUpdate = true;
    this.applyCurrentScale();
    document.body.classList.add('is-ar');
    this.setArMode('scanning');

    try {
      this.xrLight = new XREstimatedLight(this.renderer);
      this.xrLight.addEventListener('estimationstart', () => {
        this.scene.add(this.xrLight);
        if (this.xrLight.environment) this.scene.environment = this.xrLight.environment;
        this.keyLight.intensity = 0.6; this.hemi.intensity = 0.45;
      });
      this.xrLight.addEventListener('estimationend', () => {
        this.scene.remove(this.xrLight); this.scene.environment = this.studioEnv; this.keyLight.intensity = 2.62; this.hemi.intensity = 1.62;
      });
    } catch { this.xrLight = null; }

    try {
      const viewerSpace = await this.xrSession.requestReferenceSpace('viewer');
      this.hitTestSource = await this.xrSession.requestHitTestSource({ space: viewerSpace });
    } catch { this.hitTestSource = null; }
    this.xrSession.addEventListener('end', () => this.onAREnd());
    if (this.overlay) {
      this.overlay.addEventListener('pointerdown', this.onARPointerDown);
      this.overlay.addEventListener('pointermove', this.onARPointerMove);
      this.overlay.addEventListener('pointerup', this.onARPointerUp);
      this.overlay.addEventListener('pointercancel', this.onARPointerUp);
    }
  }

  async exitAR() { if (this.xrSession) { try { await this.xrSession.end(); } catch {} } }

  onAREnd() {
    if (this.overlay) {
      this.overlay.removeEventListener('pointerdown', this.onARPointerDown);
      this.overlay.removeEventListener('pointermove', this.onARPointerMove);
      this.overlay.removeEventListener('pointerup', this.onARPointerUp);
      this.overlay.removeEventListener('pointercancel', this.onARPointerUp);
    }
    this.xrSession = null; this.hitTestSource = null; this.arPlaced = false; this.arMoving = false; this.arPointers.clear();
    this.reticle.visible = false; this.arFloor.visible = false; this.root.visible = true; this.root.position.set(0, 0, 0); this.root.rotation.set(0, 0, 0);
    this.arFloorY = null; this.ground.visible = true; this.groundShadow.visible = true; this.renderer.shadowMap.autoUpdate = !this.bakedShadows;
    this.keyLight.intensity = 2.62; this.hemi.intensity = 1.62; this.scene.environment = this.studioEnv;
    if (this.xrLight) this.scene.remove(this.xrLight);
    document.body.classList.remove('is-ar');
    this.renderer.setPixelRatio(this.pixelRatioCap);
    this.applyCurrentScale(); this.onResize(); this.setArMode('idle'); this.dirty = true;
  }

  dispose() {
    this.disposed = true;
    this.configGen += 1;
    this.onBusy(false);
    this.renderer.setAnimationLoop(null);
    this.canvas.removeEventListener('pointerdown', this.onPointerDown);
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
    window.removeEventListener('pointercancel', this.onPointerUp);
    this.canvas.removeEventListener('wheel', this.onWheel);
    window.visualViewport?.removeEventListener('resize', this.onResize);
    this.resizeObserver?.disconnect();
    this.hideDimensions();
    this.dimHud = null;
    disposeObject(this.model);
    this.faceMat = null;
    this.backMat = null;
    this.edgeMat = null;
    this.studioEnv?.dispose?.();
    this.renderer.dispose();
  }
}
