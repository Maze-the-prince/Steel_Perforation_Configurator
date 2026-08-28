import { strToU8, unzipSync, zipSync } from 'three/examples/jsm/libs/fflate.module.js';
import { normalizeConfig, PATTERNS } from '../state/config.js';
import referenceSpec from '../../references/spec.json' with { type: 'json' };

/** Formed patterns shipped as Blender reference USDZ (see references/usdz/). */
export const REFERENCE_USDZ_PATTERNS = new Set(['bridgeSlot', 'embossed', 'perfocon', 'trieur']);

export function hasReferenceUsdzPattern(pattern) {
  return REFERENCE_USDZ_PATTERNS.has(pattern);
}

/** Scale a reference panel baked at references/spec.json to the active configuration. */
export function computeReferenceUsdzScale(config) {
  const c = normalizeConfig(config);
  const ref = referenceSpec.panel;
  const refPat = referenceSpec.patterns[c.pattern] || {};
  const kind = PATTERNS[c.pattern]?.kind;

  const panelSx = c.width / ref.width;
  const panelSy = c.height / ref.height;
  const panelSz = c.thickness / ref.thickness;

  const refPitchX = refPat.pitch || c.pitch;
  const refPitchY = refPat.rowPitch || refPat.pitch || c.rowPitch || c.pitch;
  const pitchX = c.pitch;
  const pitchY = (kind === 'slot' || kind === 'bridge') ? c.rowPitch : c.pitch;
  const holeScale = c.holeSize / (refPat.holeSize || c.holeSize);

  let sx = panelSx * (refPitchX / pitchX) * holeScale;
  let sy = panelSy * (refPitchY / pitchY) * holeScale;
  let sz = panelSz * holeScale;

  if (kind === 'bridge' && refPat.slotLength && c.slotLength) {
    sx *= c.slotLength / refPat.slotLength;
  }

  return { sx, sy, sz };
}

function buildWrapperUsda(usdcFileName, { sx, sy, sz }, alignment = 'horizontal') {
  return `#usda 1.0
(
    customLayerData = {
        string creator = "SteelWorks Perforation Configurator"
    }
    defaultPrim = "Root"
    metersPerUnit = 1
    upAxis = "Y"
)

def Xform "Root"
{
    def Scope "Scenes" (
        kind = "sceneLibrary"
    )
    {
        def Xform "Scene" (
            customData = {
                bool preliminary_collidesWithEnvironment = 0
                string sceneName = "Scene"
            }
            sceneName = "Scene"
        )
        {
            token preliminary:anchoring:type = "plane"
            token preliminary:planeAnchoring:alignment = "${alignment}"

            def Xform "ConfiguredPanel" (
                prepend references = @./${usdcFileName}@
            )
            {
                double3 xformOp:scale = (${sx.toFixed(6)}, ${sy.toFixed(6)}, ${sz.toFixed(6)})
                uniform token[] xformOpOrder = ["xformOp:scale"]
            }
        }
    }
}
`;
}

/**
 * Load a Blender reference USDZ, wrap it with configurator scale, return Quick Look bytes.
 * @param {object} config — normalized panel configuration
 * @param {{ baseUrl?: string, userScale?: number }} options
 */
export async function exportScaledReferenceUsdz(config, { baseUrl = './', userScale = 1 } = {}) {
  const c = normalizeConfig(config);
  if (!hasReferenceUsdzPattern(c.pattern)) {
    throw new Error(`No reference USDZ for pattern "${c.pattern}".`);
  }

  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const url = `${base}references/usdz/${c.pattern}.usdz`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Reference USDZ fetch failed (${response.status}): ${c.pattern}`);
  }

  const extracted = unzipSync(new Uint8Array(await response.arrayBuffer()));
  const usdcName = Object.keys(extracted).find((name) => name.endsWith('.usdc'));
  if (!usdcName) throw new Error(`Reference USDZ "${c.pattern}" has no USDC layer.`);

  const scale = computeReferenceUsdzScale(c);
  const factor = Math.max(0.01, userScale);
  scale.sx *= factor;
  scale.sy *= factor;
  scale.sz *= factor;

  const files = {
    'model.usda': strToU8(buildWrapperUsda(usdcName, scale))
  };
  Object.entries(extracted).forEach(([name, data]) => {
    files[name] = data;
  });

  return zipSync(files, { level: 0 }).buffer;
}
