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

export async function loadPbrMaps(config, anisotropyLimit = 1) {
  const preset = pbrPresetFor(config);
  const cached = cache.get(preset.id);
  if (cached) return cached;

  const pending = (async () => {
    const folder = `materials/${preset.id}`;
    const aniso = anisotropyLimit;
    const [colorMap, normalMap, roughnessMap, metalnessMap, anisotropyMap] = await Promise.all([
      loadOptional(assetUrl(`${folder}/basecolor.png`), { srgb: true, anisotropy: aniso }),
      loadOptional(assetUrl(`${folder}/normal.png`), { anisotropy: aniso }),
      loadOptional(assetUrl(`${folder}/roughness.png`), { anisotropy: aniso }),
      loadOptional(assetUrl(`${folder}/metallic.png`), { anisotropy: aniso }),
      preset.anisotropyMap ? loadOptional(assetUrl(`${folder}/anisotropy.png`), { anisotropy: aniso }) : Promise.resolve(null)
    ]);
    if (!colorMap && !normalMap && !roughnessMap && !metalnessMap) {
      throw new Error(`PBR maps missing for ${preset.id}`);
    }
    return { preset, colorMap, normalMap, roughnessMap, metalnessMap, aoMap: null, anisotropyMap };
  })();

  cache.set(preset.id, pending);
  try {
    return await pending;
  } catch (err) {
    cache.delete(preset.id);
    throw err;
  }
}

export function bindPbrMaps(mat, maps, appearance, sheetRepeat) {
  if (!mat || !maps) return;
  const preset = maps.preset || appearance.pbr || {};
  const useColorMap = preset.useColorMap !== false;
  mat.map = useColorMap ? maps.colorMap : null;
  mat.normalMap = maps.normalMap;
  mat.roughnessMap = maps.roughnessMap;
  mat.metalnessMap = maps.metalnessMap;
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
