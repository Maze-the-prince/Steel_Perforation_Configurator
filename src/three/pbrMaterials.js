import * as THREE from 'three';
import { pbrPresetFor } from '../state/pbrPresets.js';

const loader = new THREE.TextureLoader();
const cache = new Map();

function assetUrl(path) {
  const root = import.meta.env.BASE_URL || './';
  const base = root.endsWith('/') ? root : `${root}/`;
  return `${base}${path.replace(/^\//, '')}`;
}

function loadTexture(url, { srgb = false, anisotropy = 1 } = {}) {
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = Math.max(1, anisotropy);
        texture.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.needsUpdate = true;
        resolve(texture);
      },
      undefined,
      reject
    );
  });
}

async function loadOptional(url, options) {
  try {
    return await loadTexture(url, options);
  } catch {
    return null;
  }
}

async function loadFirst(urls, options) {
  for (const url of urls) {
    const texture = await loadOptional(url, options);
    if (texture) return texture;
  }
  return null;
}

function mapUrls(folder, name) {
  return [
    assetUrl(`materials/${folder}/${name}.jpg`),
    assetUrl(`materials/${folder}/${name}.png`)
  ];
}

export async function loadPbrMaps(config, anisotropyLimit = 1) {
  const preset = pbrPresetFor(config);
  const folder = preset.folder || preset.id;
  const cached = cache.get(folder);
  if (cached) return cached;

  const pending = (async () => {
    const aniso = anisotropyLimit;
    const [colorMap, normalMap, roughnessMap, metalnessMap, anisotropyMap] = await Promise.all([
      loadFirst(mapUrls(folder, 'basecolor'), { srgb: true, anisotropy: aniso }),
      loadFirst(mapUrls(folder, 'normal'), { anisotropy: aniso }),
      loadFirst(mapUrls(folder, 'roughness'), { anisotropy: aniso }),
      preset.useMetalnessMap === false
        ? Promise.resolve(null)
        : loadFirst(mapUrls(folder, 'metallic'), { anisotropy: aniso }),
      preset.anisotropyMap ? loadFirst(mapUrls(folder, 'anisotropy'), { anisotropy: aniso }) : Promise.resolve(null)
    ]);
    if (!colorMap && !normalMap && !roughnessMap && !metalnessMap) {
      throw new Error(`PBR maps missing for ${folder}`);
    }
    return { preset, folder, colorMap, normalMap, roughnessMap, metalnessMap, aoMap: null, anisotropyMap };
  })();

  cache.set(folder, pending);
  try {
    return await pending;
  } catch (err) {
    cache.delete(folder);
    throw err;
  }
}

export function bindPbrMaps(mat, maps, appearance, sheetRepeat) {
  if (!mat || !maps) return;
  const preset = appearance.pbr || maps.preset || {};
  const useColorMap = preset.useColorMap !== false;
  mat.map = useColorMap ? maps.colorMap : null;
  mat.normalMap = maps.normalMap;
  mat.roughnessMap = maps.roughnessMap;
  mat.metalnessMap = preset.useMetalnessMap === false ? null : maps.metalnessMap;
  mat.aoMap = maps.aoMap || null;
  mat.aoMapIntensity = maps.aoMap ? 0.85 : 0;
  if (mat.normalScale) mat.normalScale.set(1, 1);
  [mat.map, mat.normalMap, mat.roughnessMap, mat.metalnessMap, mat.aoMap, maps.anisotropyMap].forEach((tex) => {
    if (!tex) return;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.copy(sheetRepeat);
  });
  if (mat.isMeshPhysicalMaterial) {
    mat.anisotropy = appearance.anisotropy || 0;
    mat.anisotropyRotation = 0;
    if ('anisotropyMap' in mat) mat.anisotropyMap = maps.anisotropyMap || null;
  }
}
