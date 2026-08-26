# V1.1 — Manufacturing Fidelity & Production Hardening

## Six priority fixes

1. **Slot / bridge spacing**
   - Added independent column and row pitch.
   - Slot row spacing validates against slot length + minimum ligament.
   - Bridge-slot column spacing validates against slot length + minimum ligament.
   - Invalid customer values remain visible and can be corrected with **Apply recommended fixes**.

2. **DXF fabrication output**
   - Added developed blank calculation, bend allowance/deduction and bend-note layers.
   - Added formed-panel outer profiles, bend lines, mounting holes/slots, notch/cutout geometry and fabrication notes.
   - CSV output now includes the same fabrication parameters.

3. **Complete configuration persistence**
   - Shared URLs now serialize and restore sheet, pattern, 2D pitch, quantity, form, flange, bend, corner, mounting, notches, quality, orientation and units.
   - Short configuration codes continue to store the complete configuration object.

4. **Fabrication controls connected downstream**
   - Bend angle affects the folded 3D preview.
   - Bend radius/angle/flange feed DXF flat-development metadata.
   - Corner, mounting and cutout choices feed manufacturing output.
   - Deburr, tolerance and flatness feed PDF/specification, lead time and pricing.

5. **Admin pricing / currency**
   - Manufacturer portal controls material, finish, punch/forming and fabrication additions.
   - Live price and technical PDF use the configured 3-letter currency.

6. **Production security**
   - Production startup requires `ADMIN_TOKEN`.
   - Public RFQ/event/config-code POST endpoints are rate limited.
   - Forwarded client IP is trusted only when `TRUST_PROXY=1`.
   - Baseline response security headers were added while preserving external configurator embedding; the admin page cannot be framed.

## Verification

Run:

```bash
npm run test:smoke
```

The smoke suite checks slot validation/fixes, developed cassette blank dimensions, required DXF layers, CSV fabrication fields, full share-URL round trip and pricing behavior.
