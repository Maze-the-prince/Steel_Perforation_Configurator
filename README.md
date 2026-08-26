# SteelWorks — Parametric Perforated Sheet 3D Configurator

A manufacturer-focused React + Three.js configurator for perforated metal sheets, formed perforation products and architectural metal panels.

## V1.1 manufacturing-fidelity update

This package includes the six priority corrections from the technical review:

- Independent column/row pitch for slot and bridge-slot patterns, with ligament-aware manufacturing limits and visible blocking validation instead of silent correction.
- Fabrication-oriented DXF output with developed blank geometry, bend lines/notes, bend allowance and deduction, mounting holes/slots, corner cutouts/notches, perforations and fabrication-note layers.
- Complete share/configuration persistence for dimensions, material, finish, pattern geometry, quantity, panel form, flange/bend settings, corner treatment, mounting, notches and quality requirements.
- Fabrication controls now feed downstream outputs: 3D form preview where applicable, validation, DXF, CSV, technical PDF, lead-time/pricing logic and specification text.
- Admin-driven pricing and currency: material/finish rates, punching, forming, mounting, notches and quality additions are editable in the manufacturer portal and consumed by the live configurator.
- Production security hardening: no production default admin credential, public POST rate limits and baseline security headers.

## Main capabilities

- Procedural 3D perforated sheet preview without a fixed product GLB.
- Carbon steel, Stainless 304 and Stainless 316.
- Round, straight round, square, slot, hexagonal, bridge slot, Trieur, Perfocon, decorative and embossed patterns.
- Width, height, thickness, solid border, opening size and pattern-pitch controls.
- Flat, top-fold, side-return, cassette and custom-fold panel forms.
- Bend angle, bend radius, flange depth, corner treatment, mounting, cutouts/notches, deburr, tolerance and flatness options.
- Live open-area, mass, opening-count, stock-fit, lead-time and indicative-price feedback.
- Shareable full-configuration URL and short configuration codes.
- Local saved configurations.
- DXF fabrication export, CSV manufacturing schedule and technical PDF + QR code.
- RFQ capture, embed mode and manufacturer admin portal.
- WebXR Android AR and iOS USDZ Quick Look path.

## Clean installation

Do **not** copy `node_modules` between operating systems. Install dependencies on the machine that will run/build the project:

```bash
npm install
npm start
```

`npm start` builds the current source into `docs/` and then starts the Node server. Open http://localhost:8080/ . For Vite development use `npm run dev`.

## Production deployment

Set both production mode and a private admin token before starting the server:

```bash
NODE_ENV=production ADMIN_TOKEN="replace-with-a-long-random-secret" npm start
```

When `NODE_ENV=production`, the server refuses to start if `ADMIN_TOKEN` is missing. The `steelworks-local` fallback exists only for local development. If the server is behind a trusted reverse proxy, set `TRUST_PROXY=1` so rate limiting uses the forwarded client IP; otherwise forwarded IP headers are ignored.

Pricing, currency, product identity and BIM metadata are editable from `/admin` after authentication. Pricing values are indicative until replaced with the manufacturer's approved commercial rates.

## Manufacturing notes

The browser viewer intentionally uses generated texture/mask techniques for large perforation counts. DXF geometry is generated directly from configuration values rather than extracted from the display mesh.

Bend development currently uses a configurable geometry model with a default K-factor of 0.33. Mounting-hole/slot dimensions, corner-treatment size and other shop defaults in `src/export/manufacturing.js` must be aligned with the manufacturer's tooling standards before issuing files directly to CAM/CNC.

The rule engine is intended to stop obviously invalid configurations and preserve the customer's entered value for review. Final production release should still be checked against tooling, coil/sheet stock, material-specific minimums, bend tables, tolerances and machine capability.

## Recommended next modules

1. Manufacturer-specific tooling/process tables by grade, thickness and punch/forming machine.
2. Mother-sheet nesting, utilization %, waste %, pieces per stock sheet and grain direction.
3. True sheet-metal bend solids for engineering-close 3D views.
4. Custom DXF/SVG pattern ingestion and validation.
5. Project basket, panel tagging, BOM/schedule and batch DXF export.
6. ERP/PIM/CRM integration and approval workflow.
7. Revit family / IFC / STEP handoff pipeline.
8. Full-scale facade array and AR mockup review.
