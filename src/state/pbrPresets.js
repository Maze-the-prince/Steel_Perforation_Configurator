export const PBR_PRESETS = {
  mild_steel_mill: {
    metalness: 1,
    roughness: 0.42,
    anisotropy: 0,
    envMapIntensity: 2.35,
    hex: '#58544e',
    tint: '#ffffff',
    colorBoost: 3.2,
    clearcoat: 0.04,
    anisotropyMap: false,
    useColorMap: true
  },
  stainless_316_satin: {
    metalness: 1,
    roughness: 0.36,
    anisotropy: 0.58,
    envMapIntensity: 2.35,
    hex: '#dce4e9',
    clearcoat: 0.05,
    anisotropyMap: true,
    useColorMap: true
  },
  stainless_304_brushed: {
    metalness: 1,
    roughness: 0.333,
    anisotropy: 0.82,
    envMapIntensity: 2.55,
    hex: '#e8eef2',
    clearcoat: 0.04,
    anisotropyMap: true,
    useColorMap: true
  },
  stainless_polished: {
    metalness: 1,
    roughness: 0.087,
    anisotropy: 0,
    envMapIntensity: 2.75,
    hex: '#f2f5f7',
    clearcoat: 0.06,
    anisotropyMap: false,
    useColorMap: true
  },
  galvanized_steel: {
    metalness: 1,
    roughness: 0.448,
    anisotropy: 0,
    envMapIntensity: 1.95,
    hex: '#9aa48e',
    clearcoat: 0.06,
    anisotropyMap: false,
    useColorMap: true
  },
  brushed_aluminium: {
    metalness: 1,
    roughness: 0.368,
    anisotropy: 0.76,
    envMapIntensity: 2.2,
    hex: '#f3f5f7',
    clearcoat: 0.04,
    anisotropyMap: true,
    useColorMap: true
  },
  powdercoat_satin: {
    metalness: 0,
    roughness: 0.48,
    anisotropy: 0,
    envMapIntensity: 0.95,
    hex: null,
    clearcoat: 0.28,
    anisotropyMap: false,
    useColorMap: false
  }
};

export function pbrPresetFor(config = {}) {
  const material = config.material || 'carbon';
  const finish = config.finish || 'mill';
  if (finish === 'powder') return { id: 'powdercoat_satin', ...PBR_PRESETS.powdercoat_satin };
  if (finish === 'galvanized') return { id: 'galvanized_steel', ...PBR_PRESETS.galvanized_steel };
  if (finish === 'brushed') {
    const id = material === 'alu' ? 'brushed_aluminium' : 'stainless_304_brushed';
    return { id, ...PBR_PRESETS[id] };
  }
  if (material === 'ss304') return { id: 'stainless_316_satin', ...PBR_PRESETS.stainless_316_satin };
  if (material === 'alu') return { id: 'brushed_aluminium', ...PBR_PRESETS.brushed_aluminium };
  return { id: 'mild_steel_mill', ...PBR_PRESETS.mild_steel_mill };
}
