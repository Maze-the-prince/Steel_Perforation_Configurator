export const PBR_PRESETS = {
  // Carbon: clean mill plate (no speckled ambientCG hole-look maps)
  sheet_metal_001: {
    folder: 'mild_steel_mill',
    metalness: 0.88,
    roughness: 0.5,
    anisotropy: 0.22,
    envMapIntensity: 1.65,
    hex: '#7a746c',
    tint: '#c4bdb4',
    colorBoost: 1.55,
    clearcoat: 0.03,
    anisotropyMap: false,
    useColorMap: true,
    useNormalMap: true,
    useRoughnessMap: true,
    useMetalnessMap: false
  },
  metal049a_ss: {
    folder: 'stainless_304_brushed',
    metalness: 0.96,
    roughness: 0.28,
    anisotropy: 0.72,
    envMapIntensity: 2.2,
    hex: '#d8e0e6',
    tint: '#eef3f6',
    colorBoost: 1.2,
    clearcoat: 0.06,
    anisotropyMap: true,
    useColorMap: true,
    useNormalMap: true,
    useRoughnessMap: true,
    useMetalnessMap: true
  },
  metal049a_alu: {
    folder: 'brushed_aluminium',
    metalness: 0.94,
    roughness: 0.3,
    anisotropy: 0.55,
    envMapIntensity: 2.0,
    hex: '#e8ecef',
    tint: '#f4f6f8',
    colorBoost: 1.15,
    clearcoat: 0.04,
    anisotropyMap: true,
    useColorMap: true,
    useNormalMap: true,
    useRoughnessMap: true,
    useMetalnessMap: true
  },
  metal049a_brushed: {
    folder: 'stainless_304_brushed',
    metalness: 0.95,
    roughness: 0.4,
    anisotropy: 0.85,
    envMapIntensity: 2.15,
    hex: '#e8eef2',
    tint: '#eef3f6',
    colorBoost: 1.15,
    clearcoat: 0.04,
    anisotropyMap: true,
    useColorMap: true,
    useNormalMap: true,
    useRoughnessMap: true,
    useMetalnessMap: true
  },
  galvanized_steel: {
    folder: 'galvanized_steel',
    metalness: 0.92,
    roughness: 0.4,
    anisotropy: 0,
    envMapIntensity: 1.72,
    hex: '#9aa48e',
    tint: '#c5cdc0',
    clearcoat: 0.05,
    anisotropyMap: false,
    useColorMap: true
  },
  powdercoat_satin: {
    folder: 'powdercoat_satin',
    metalness: 0,
    roughness: 0.46,
    anisotropy: 0,
    envMapIntensity: 0.95,
    hex: null,
    clearcoat: 0.28,
    anisotropyMap: false,
    useColorMap: false,
    useMetalnessMap: false
  }
};

export function pbrPresetFor(config = {}) {
  const material = config.material || 'carbon';
  const finish = config.finish || 'mill';
  if (finish === 'powder') return { id: 'powdercoat_satin', ...PBR_PRESETS.powdercoat_satin };
  if (finish === 'galvanized') return { id: 'galvanized_steel', ...PBR_PRESETS.galvanized_steel };
  if (finish === 'brushed') {
    if (material === 'carbon') {
      return { id: 'sheet_metal_001', ...PBR_PRESETS.sheet_metal_001, anisotropy: 0.58, roughness: 0.54 };
    }
    return { id: 'metal049a_brushed', ...PBR_PRESETS.metal049a_brushed };
  }
  if (material === 'ss304') return { id: 'metal049a_ss', ...PBR_PRESETS.metal049a_ss };
  if (material === 'alu') return { id: 'metal049a_alu', ...PBR_PRESETS.metal049a_alu };
  return { id: 'sheet_metal_001', ...PBR_PRESETS.sheet_metal_001 };
}
