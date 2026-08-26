export const PBR_PRESETS = {
  sheet_metal_001: {
    folder: 'sheet_metal_001',
    metalness: 1,
    roughness: 1,
    anisotropy: 0.08,
    envMapIntensity: 2.15,
    hex: '#58544e',
    tint: '#ffffff',
    colorBoost: 2.35,
    clearcoat: 0.03,
    anisotropyMap: false,
    useColorMap: true,
    useMetalnessMap: false
  },
  metal049a_ss: {
    folder: 'metal049a',
    metalness: 1,
    roughness: 0.85,
    anisotropy: 0.42,
    envMapIntensity: 2.45,
    hex: '#dce4e9',
    tint: '#ffffff',
    clearcoat: 0.05,
    anisotropyMap: false,
    useColorMap: true,
    useMetalnessMap: true
  },
  metal049a_alu: {
    folder: 'metal049a',
    metalness: 1,
    roughness: 0.78,
    anisotropy: 0.58,
    envMapIntensity: 2.25,
    hex: '#f3f5f7',
    tint: '#ffffff',
    clearcoat: 0.04,
    anisotropyMap: false,
    useColorMap: true,
    useMetalnessMap: true
  },
  metal049a_brushed: {
    folder: 'metal049a',
    metalness: 1,
    roughness: 0.92,
    anisotropy: 0.82,
    envMapIntensity: 2.55,
    hex: '#e8eef2',
    tint: '#ffffff',
    clearcoat: 0.04,
    anisotropyMap: false,
    useColorMap: true,
    useMetalnessMap: true
  },
  galvanized_steel: {
    folder: 'galvanized_steel',
    metalness: 1,
    roughness: 0.448,
    anisotropy: 0,
    envMapIntensity: 1.95,
    hex: '#9aa48e',
    clearcoat: 0.06,
    anisotropyMap: false,
    useColorMap: true
  },
  powdercoat_satin: {
    folder: 'powdercoat_satin',
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
    if (material === 'carbon') return { id: 'sheet_metal_001', ...PBR_PRESETS.sheet_metal_001, anisotropy: 0.46 };
    return { id: 'metal049a_brushed', ...PBR_PRESETS.metal049a_brushed };
  }
  if (material === 'ss304') return { id: 'metal049a_ss', ...PBR_PRESETS.metal049a_ss };
  if (material === 'alu') return { id: 'metal049a_alu', ...PBR_PRESETS.metal049a_alu };
  return { id: 'sheet_metal_001', ...PBR_PRESETS.sheet_metal_001 };
}
