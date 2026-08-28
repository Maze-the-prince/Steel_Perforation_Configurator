# AR reference models (Blender → Quick Look)

Drop **gold-standard exports from Blender** here so the configurator USDZ/GLB pipeline can be matched against known-good geometry.

## Folder layout

```text
references/
├── README.md          ← this file
├── spec.json          ← shared sheet + pattern params for every reference
├── usdz/              ← Blender USDZ (Quick Look reference)
│   ├── round60.usdz
│   ├── square.usdz
│   └── …
└── glb/               ← optional matching Blender GLB (same scene/settings)
    ├── round60.glb
    └── …
```

## Required files (10 patterns)

| File stem | App pattern key | Formed / 3D depth |
|-----------|-----------------|-------------------|
| `round60` | `round60` | flat perforation |
| `square` | `square` | flat |
| `slot` | `slot` | flat |
| `hex` | `hex` | flat |
| `roundStraight` | `roundStraight` | flat |
| `bridgeSlot` | `bridgeSlot` | **yes** — bridge hood |
| `trieur` | `trieur` | **yes** — cups |
| `perfocon` | `perfocon` | **yes** — conical collar |
| `decorative` | `decorative` | flat clusters |
| `embossed` | `embossed` | **yes** — raised diamond |

Use the **same panel size and border** for every reference. Update `spec.json` if you change dimensions.

## Live Quick Look AR (formed patterns)

Blender USDZ files in `usdz/` are **reference only** — they are **not** served in Quick Look.

The configurator **exports its own procedural geometry** (frame, perforated faces, merged 3D formed features). Tune formed-pattern shape using `formedCalibration` in `spec.json` after comparing exports to the Blender references.

Run a dev comparison report:

```bash
npm run calibrate:reference
```

This writes `references/calibration.json` with procedural vs reference stats (for manual tuning).

Flat patterns (round, square, slot, hex, etc.) use procedural USDZ export only.

## Blender export checklist

- Model in **millimetres**, export USD with **metres** (scale 0.001) or model directly in metres.
- **Y-up**, sheet flat for horizontal plane anchoring in Quick Look.
- **Real mesh** for formed patterns (bridge, trieur, perfocon, embossed) — not alpha-only on a plane.
- **MeshStandardMaterial**-style PBR (metalness + roughness); avoid double-sided materials if possible.
- No negative scale (`scale.x = -1`); bake mirrors into geometry.
- Test each `.usdz` on iPhone/iPad Quick Look before adding here.

## After you add files

1. Confirm Quick Look looks correct on device.
2. Commit or share the `references/` folder.
3. The build can then be tuned to match bounding box, formed height, hole layout, and materials per pattern.

Generated configurator GLBs (for cross-check in Blender or glTF viewers) live in `references/glb/`. Rebuild them any time with:

```bash
npm run bake:reference-glb
```

**Panel spec:** 600 × 600 mm, 2 mm thick, 25 mm border — see `spec.json`.

**GLB contents:** frame + face/back planes + real 3D formed geometry (bridge hoods, trieur cups, perfocon cones, embossed diamonds). Flat perforation holes are not cut into the GLB mesh (Quick Look uses baked textures for those); your Blender USDZ references will cover hole appearance for comparison.
