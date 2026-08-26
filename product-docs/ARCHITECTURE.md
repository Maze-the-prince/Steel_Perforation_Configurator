# Architecture

```text
Browser configurator
  ├─ React configuration state
  ├─ Procedural Three.js panel preview
  ├─ manufacturing calculations
  ├─ DXF / CSV / PDF outputs
  ├─ AR / share / save
  └─ RFQ
        │
        ▼
Node demo API
  ├─ product defaults
  ├─ RFQs
  ├─ analytics
  └─ configuration codes
        │
        ▼
Production integrations
  ├─ ERP / PIM / CRM
  ├─ material & finish catalog
  ├─ pricing / stock / nesting
  ├─ CAM / CNC / STEP
  └─ BIM / Revit / IFC
```

The browser preview deliberately uses a perforation mask rather than tens of thousands of boolean-cut solids. Manufacturing geometry should be generated downstream from the same numeric configuration, which is why the DXF exporter uses the parameter values directly instead of extracting geometry from the rendered mesh.
