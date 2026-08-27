import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { Viewer } from './components/Viewer.jsx';
import { PatternPreview } from './components/PatternPreview.jsx';
import { AR_DEVICE_HELP, detectPlatform, friendlyArError, immersiveArAvailable, isCompactWeb } from './ar/detect.js';
import { ensureQuickLookServiceWorker, publishQuickLookUsdz, quickLookHref } from './ar/usdzExport.js';
import {
  AD_LINE, CONE_INCLUDED_OPTIONS, CORNER_OPTIONS, FINISHES, FINISH_COLORS, FINISH_COLOR_ORDER, FINISH_COLOR_PREVIEW,
  MATERIALS, MM_PER_IN, PANEL_FORMS, PATTERN_DEFAULTS, PATTERN_GROUPS, PATTERNS,
  applyProduct, catalog, configFromRecord, configReducer, configViewUrl, conicalProfile, cornerTreatmentMm, estimatedHoleCount,
  estimatedPrice, estimatedWeightKg, fabricationLimits, formatMoney, fromDisplay, leadTimeLabel,
  manufacturingIssues, openAreaPercent, readConfigFromUrl, recommendedManufacturingFixes, skuFor, specificationText,
  stockAvailability, toDisplay
} from './state/config.js';
import { downloadConfigurationPdf } from './pdf/configurationPdf.js';

const FINISH_ORDER = ['mill', 'brushed', 'galvanized', 'powder'];
const STEPS = [
  { id: 'configure', n: '1', label: 'Configure' },
  { id: 'review', n: '2', label: 'Review & quote' }
];
const DEBURR_LABELS = { none: 'None', standard: 'Standard', fine: 'Fine' };
const TOLERANCE_LABELS = { 'iso-c': 'ISO coarse', 'iso-m': 'ISO medium', 'iso-f': 'ISO fine' };
const FLATNESS_LABELS = { standard: 'Standard', precision: 'Precision' };
const EMBED = new URL(location.href).searchParams.get('embed') === '1';
const SAVE_KEY = 'steel-configurator-saved';
const PLATFORM = detectPlatform();
const COMPACT = isCompactWeb();
const USDZ_DEBOUNCE_MS = COMPACT ? 650 : 400;
let didTrackView = false;

function embedTargetOrigin() {
  try {
    if (document.referrer) return new URL(document.referrer).origin;
  } catch {}
  return EMBED ? '*' : location.origin;
}

function postToHost(payload) {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ source: 'steel-configurator', ...payload }, embedTargetOrigin());
  }
}

function readSaved() {
  try {
    const list = JSON.parse(localStorage.getItem(SAVE_KEY) || '[]');
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function track(type, payload = {}) {
  fetch('/api/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, payload })
  }).catch(() => {});
}

export function App() {
  const [config, dispatch] = useReducer(configReducer, null, readConfigFromUrl);
  const [brand, setBrand] = useState(() => ({ ...catalog }));
  const [toast, setToast] = useState('');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [savedOpen, setSavedOpen] = useState(false);
  const [ralOpen, setRalOpen] = useState(false);
  const [arHelp, setArHelp] = useState('');
  const [arMode, setArMode] = useState('idle');
  const [viewerError, setViewerError] = useState(false);
  const [orbitHint, setOrbitHint] = useState(true);
  const [sceneReady, setSceneReady] = useState(false);
  const [sceneBusy, setSceneBusy] = useState(false);
  const [arScale, setArScale] = useState(100);
  const [usdzHref, setUsdzHref] = useState('');
  const [step, setStep] = useState('configure');
  const [tool, setTool] = useState('orbit');
  const [sizeLock, setSizeLock] = useState(false);
  const lockedPairRef = useRef({ w: 0, h: 0 });
  const [paramsOpen, setParamsOpen] = useState(() => !isCompactWeb());
  const [fabOpen, setFabOpen] = useState('form');
  const sceneRef = useRef(null);
  const overlayRef = useRef(null);
  const dimHudRef = useRef({ width: null, height: null, thickness: null });
  const usdzUrlRef = useRef('');
  const toastTimer = useRef(0);
  const sku = useMemo(() => skuFor(config, brand.skuPrefix), [config, brand.skuPrefix]);
  const openArea = useMemo(() => openAreaPercent(config), [config]);
  const weight = useMemo(() => estimatedWeightKg(config), [config]);
  const holes = useMemo(() => estimatedHoleCount(config), [config]);
  const price = useMemo(() => estimatedPrice(config), [config, brand]);
  const money = useMemo(() => formatMoney(price, brand.currency), [price, brand.currency]);
  const lead = useMemo(() => leadTimeLabel(config), [config]);
  const limits = useMemo(() => fabricationLimits(config), [config]);
  const issues = useMemo(() => manufacturingIssues(config), [config]);
  const stock = useMemo(() => stockAvailability(config), [config]);
  const blocking = useMemo(() => issues.filter((item) => item.level === 'block'), [issues]);
  const inAndroidAR = PLATFORM.android && arMode !== 'idle';
  const unit = config.units === 'in' ? 'in' : 'mm';
  const dim = (mm, digits = unit === 'in' ? 3 : 0) => `${toDisplay(mm, config.units, digits)} ${unit}`;
  const specText = useMemo(
    () => specificationText({ config, sku, openArea, weight, price, lead, currency: brand.currency }),
    [config, sku, openArea, weight, price, lead, brand.currency]
  );

  const flash = (msg) => {
    setToast(msg);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(''), 2400);
  };

  useEffect(() => {
    postToHost({ type: 'ready', configuration: config, sku });
    const onMessage = (event) => {
      if (event.source !== window.parent) return;
      const data = event.data;
      if (!data || data.source === 'steel-configurator') return;
      if (data.type === 'setConfiguration' && data.configuration) dispatch({ type: 'load', config: data.configuration });
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  useEffect(() => { postToHost({ type: 'configurationChanged', configuration: config, sku }); }, [config, sku]);

  useEffect(() => {
    if (PLATFORM.ios) ensureQuickLookServiceWorker().catch(() => {});
  }, []);

  useEffect(() => {
    document.body.classList.toggle('is-touch-tablet', PLATFORM.touchTablet || PLATFORM.ios);
    return () => document.body.classList.remove('is-touch-tablet');
  }, []);

  useEffect(() => {
    Object.values(MATERIALS).forEach((item) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = item.cardImage;
    });
  }, []);

  useEffect(() => {
    if (didTrackView) return undefined;
    didTrackView = true;
    track('view', { sku });
    return undefined;
  }, [sku]);

  useEffect(() => {
    fetch('/api/product').then((res) => res.ok ? res.json() : Promise.reject()).then((product) => {
      const next = applyProduct(product);
      setBrand(next);
      const params = new URL(location.href).searchParams;
      if (!params.has('w') && !params.has('h') && !params.has('t') && !params.has('cfg')) {
        dispatch({ type: 'applyCatalogDefaults', values: { width: next.width, height: next.height, thickness: next.thickness } });
      }
    }).catch(() => {});
  }, []);

  useEffect(() => {
    const code = (new URL(location.href).searchParams.get('cfg') || '').toUpperCase();
    if (!code) return undefined;
    let cancelled = false;
    fetch(`/api/codes/${code}`).then((res) => res.ok ? res.json() : Promise.reject()).then((record) => {
      if (cancelled) return;
      const loaded = configFromRecord(record);
      if (loaded) dispatch({ type: 'load', config: loaded });
    }).catch(() => {});
    return () => { cancelled = true; };
  }, []);

  const onArScale = useCallback((value) => setArScale(value), []);
  const onArState = useCallback((mode) => {
    setArMode(mode);
    if (mode === 'idle') { setArScale(100); sceneRef.current?.setScalePercent(100); }
  }, []);
  const onReady = useCallback((scene) => {
    sceneRef.current = scene;
    scene.setDimensionHud(dimHudRef.current);
    setSceneReady(true);
  }, []);
  const onBusy = useCallback((busy) => setSceneBusy(Boolean(busy)), []);

  const usdzKey = [
    config.width, config.height, config.thickness, config.material, config.finish, config.color,
    config.pattern, config.holeSize, config.slotLength, config.pitch, config.rowPitch, config.border,
    config.coneAngle, config.panelForm, config.flangeDepth, config.bendAngle, config.bendRadius,
    config.corner, config.cornerRadius
  ].join('|');

  useEffect(() => () => {
    if (usdzUrlRef.current?.startsWith('blob:')) URL.revokeObjectURL(usdzUrlRef.current);
  }, []);

  useEffect(() => {
    if (!PLATFORM.ios || !sceneReady || !sceneRef.current || sceneBusy) return undefined;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (cancelled || sceneBusy) return;
      sceneRef.current.exportUSDZ().then(async (bytes) => {
        if (cancelled) return;
        if (usdzUrlRef.current?.startsWith('blob:')) URL.revokeObjectURL(usdzUrlRef.current);
        const url = await publishQuickLookUsdz(bytes);
        usdzUrlRef.current = url;
        setUsdzHref(url);
      }).catch(() => { if (!cancelled) setUsdzHref(''); });
    }, USDZ_DEBOUNCE_MS);
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, [sceneReady, sceneBusy, usdzKey]);

  async function startAR() {
    if (!sceneRef.current) { setArHelp('Wait for the 3D panel to load, then tap View in AR again.'); return; }
    if (!(await immersiveArAvailable())) { setArHelp(AR_DEVICE_HELP); return; }
    try {
      setArScale(100); sceneRef.current.setScalePercent(100); setArMode('launching');
      track('ar_launch', { sku });
      await sceneRef.current.enterAR({ overlay: overlayRef.current });
    } catch (err) {
      setArMode('idle'); setArHelp(friendlyArError(err));
    }
  }

  async function share() {
    const url = configViewUrl(config);
    try {
      track('share', { sku });
      if (navigator.share) await navigator.share({ title: `${brand.productName} ${sku}`, url });
      else { await navigator.clipboard.writeText(url); flash('Configuration link copied'); }
    } catch {}
  }

  function save() {
    const list = readSaved();
    list.unshift({ id: `CFG-${Date.now()}`, name: `${sku} · ${new Date().toLocaleString()}`, config });
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(list.slice(0, 16))); } catch {}
    setSavedOpen(true); flash('Configuration saved locally');
  }

  async function copyText(text, ok) {
    try {
      await navigator.clipboard.writeText(text);
      flash(ok);
    } catch {
      flash('Could not copy');
    }
  }

  function openQuote() {
    if (blocking.length) {
      setFabOpen('rules');
      flash('This configuration cannot be manufactured as specified');
      return;
    }
    setQuoteOpen(true);
  }

  async function printView() {
    if (blocking.length) {
      setFabOpen('rules');
      flash('Fix manufacturing issues before export or quote');
      return;
    }
    try {
      flash('Preparing technical PDF…');
      const saved = await downloadConfigurationPdf({ config, viewUrl: configViewUrl(config), captureJpeg: () => sceneRef.current.captureJpeg(), sku });
      track('spec_download', { sku, kind: 'pdf', code: saved.code });
      flash(`PDF saved · ${saved.code}`);
    } catch (err) { console.error(err); flash(err?.message || 'Could not create the PDF'); }
  }

  async function requestOffer(event) {
    event.preventDefault();
    if (blocking.length) {
      flash('Fix manufacturing issues before sending an RFQ');
      return;
    }
    const fd = new FormData(event.currentTarget);
    const body = Object.fromEntries(fd.entries());
    const subject = `RFQ: ${brand.productName} ${sku}`;
    const mailText = [
      'Perforated sheet RFQ', '', `Name: ${body.name || ''}`, `Company: ${body.company || ''}`,
      `Email: ${body.email || ''}`, `Phone: ${body.phone || ''}`, `Quantity: ${body.quantity || config.quantity}`, '',
      specText, `Link: ${configViewUrl(config)}`, '', 'Notes:', body.notes || '(none)'
    ].join('\n');
    try {
      await fetch('/api/quotes', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...body, quantity: Number(body.quantity) || config.quantity, configuration: { ...config, computed: { sku, openArea, weight, holes } } }) });
    } catch {}
    window.location.href = `mailto:${brand.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailText)}`;
  }

  const saved = savedOpen ? readSaved() : [];
  const arHint = !inAndroidAR ? '' : arMode === 'scanning' || arMode === 'launching'
    ? 'Move the phone to find the floor, then tap to place'
    : arMode === 'placing' ? 'Tap to place the sheet at 1:1 scale'
      : arMode === 'scaling' ? `${arScale}%` : 'Drag to move · pinch to scale · twist to rotate';
  const finishLabel = `${FINISHES[config.finish].label}${config.finish === 'powder' ? ` · ${FINISH_COLORS[config.color].label} – ${FINISH_COLORS[config.color].name}` : ''}`;
  const viewStep = step === 'configure' ? 'configure' : 'review';
  const slotPattern = PATTERNS[config.pattern]?.kind === 'slot' || PATTERNS[config.pattern]?.kind === 'bridge';
  const pitchText = slotPattern ? `${config.pitch} × ${config.rowPitch}` : String(config.pitch);
  const holeInvalid = config.holeSize < limits.minHoleSize;
  const ligamentInvalid = config.pitch < limits.minPitchX;
  const rowPitchInvalid = (PATTERNS[config.pattern]?.kind === 'slot' || PATTERNS[config.pattern]?.kind === 'bridge') && config.rowPitch < limits.minRowPitch;
  const slotLengthInvalid = (PATTERNS[config.pattern]?.kind === 'slot' || PATTERNS[config.pattern]?.kind === 'bridge') && config.slotLength < limits.minSlotLength;
  const borderInvalid = config.border < limits.minBorder;

  function applyTool(next) {
    setTool(next);
    sceneRef.current?.setTool(next);
  }

  function setSize(key, value) {
    const n = Number(value);
    if (!Number.isFinite(n) || n <= 0) return;
    if (!sizeLock || (key !== 'width' && key !== 'height')) {
      dispatch({ type: 'set', key, value: n });
      return;
    }
    const pair = lockedPairRef.current.w > 0 ? lockedPairRef.current : { w: config.width, h: config.height };
    lockedPairRef.current = pair;
    if (key === 'width') {
      const width = n;
      const height = width * pair.h / pair.w;
      dispatch({ type: 'setMany', values: { width, height } });
      return;
    }
    const height = n;
    const width = height * pair.w / pair.h;
    dispatch({ type: 'setMany', values: { width, height } });
  }

  function toggleSizeLock() {
    setSizeLock((on) => {
      if (!on) lockedPairRef.current = { w: config.width, h: config.height };
      return !on;
    });
  }

  function applyRecommendedFixes() {
    const fixes = recommendedManufacturingFixes(config);
    if (!Object.keys(fixes).length) { flash('No automatic corrections are required'); return; }
    dispatch({ type: 'setMany', values: fixes });
    flash('Recommended manufacturing values applied');
  }

  return (
    <main className={`steel-app${EMBED ? ' is-embed' : ''}${viewStep !== 'configure' ? ' step-review' : ''}`}>
      <header className="steel-head">
        <div className="brand-lockup">
          <div className="brand-mark-steel">S</div>
          <div className="brand-text"><strong>STEELWORKS</strong><span>Configurator</span></div>
        </div>
        <nav className="stepper" aria-label="Configuration steps">
          {STEPS.map((item) => (
            <button type="button" key={item.id} className={`step${viewStep === item.id ? ' active' : ''}`} onClick={() => setStep(item.id)}>
              <em>{item.n}</em> {item.label}
            </button>
          ))}
        </nav>
        <div className="head-actions">
          <button className="ghost-action" type="button" aria-label="Save configuration" onClick={save}><IconSave /> <span className="action-label">Save</span></button>
          <button className="ghost-action" type="button" aria-label="Share configuration" onClick={share}><IconShare /> <span className="action-label">Share</span></button>
          <button className="ghost-action quote-action" type="button" aria-label="Request quote" onClick={openQuote}><span className="action-label">Request </span>Quote</button>
        </div>
      </header>

      <div className="steel-layout">
        <section className="steel-stage">
          <div className="stage-head">
            <div>
              <h1>{brand.productName}</h1>
              <p className="steel-tagline">{viewStep === 'review' ? 'Confirm the 3D sheet, then copy the spec or request a quote.' : AD_LINE}</p>
            </div>
            <div className="sku-chip" title={sku}>
              <code>{sku}</code>
              <button type="button" className="icon-copy" title="Copy product code" onClick={() => copyText(sku, 'Product code copied')}><IconCopy /></button>
            </div>
          </div>

          <div className="viewer-shell" onPointerDown={() => setOrbitHint(false)}>
            <Viewer config={config} scalePercent={100} onReady={onReady} onError={() => setViewerError(true)} onArState={onArState} onArScale={onArScale} onBusy={onBusy} />
            <div className={`viewer-tools${PLATFORM.touchTablet ? ' viewer-tools-touch' : ''}`}>
              <ToolBtn active={tool === 'orbit'} title="Rotate the sheet" onClick={() => applyTool('orbit')}><IconOrbit /></ToolBtn>
              {!PLATFORM.touchTablet && <ToolBtn active={tool === 'zoom'} title="Zoom the view" onClick={() => applyTool('zoom')}><IconZoom /></ToolBtn>}
              <ToolBtn title="Fit sheet in view" onClick={() => sceneRef.current?.fitView()}><IconFit /></ToolBtn>
              {!PLATFORM.touchTablet && <ToolBtn active={tool === 'pan'} title="Pan the camera" onClick={() => applyTool('pan')}><IconPan /></ToolBtn>}
              <ToolBtn title="Reset camera" onClick={() => { applyTool('orbit'); sceneRef.current?.resetView(); }}><IconReset /></ToolBtn>
            </div>
            <div className="nav-cube">
              <button type="button" title="Top view" onClick={() => sceneRef.current?.setPreset('top')}>Top</button>
              <button type="button" title="Front view" onClick={() => sceneRef.current?.setPreset('front')}>Front</button>
              <button type="button" title="Right view" onClick={() => sceneRef.current?.setPreset('right')}>Right</button>
            </div>
            <div className="pattern-thumb" title={PATTERNS[config.pattern].label}><PatternPreview pattern={config.pattern} material={config.material} className="pattern-thumb-svg" variant="thumb" /><span>Pattern preview</span></div>
            <div className="dim dim-w" ref={(el) => { dimHudRef.current.width = el; }}><i /><b /><i /><em>{dim(config.width)}</em></div>
            <div className="dim dim-h" ref={(el) => { dimHudRef.current.height = el; }}><i /><b /><i /><em>{dim(config.height)}</em></div>
            <div className="dim dim-t" ref={(el) => { dimHudRef.current.thickness = el; }}><i /><b /><i /><em>{dim(config.thickness, unit === 'in' ? 3 : 1)}</em></div>
            <div className="viewer-ar">
              <ArButton usdzHref={usdzHref} posterSrc={MATERIALS[config.material].cardImage} onLaunch={startAR} onHelp={setArHelp} />
            </div>
            {sceneBusy && <div className="viewer-busy">Updating perforation…</div>}
            {orbitHint && <p className="orbit-caption">Drag to rotate · pinch or scroll to zoom</p>}
            {viewerError && <p className="viewer-error">3D view could not start. Open this page in Chrome or Safari.</p>}
          </div>

        </section>

        <aside className="config-panel">
          {viewStep === 'review' ? (
            <div className="review-panel">
              <p className="eyebrow">Review & quote</p>
              <h2>Check this sheet</h2>
              <p className="review-intro">This is the manufacturing specification for the 3D sheet. Edit configuration to change values, then quote from here.</p>
              <div className="config-summary prominent">
                <div className="summary-sku"><span>Product code</span><strong>{sku}</strong></div>
                <div><span>Sheet</span><strong>{dim(config.width)} × {dim(config.height)} × {dim(config.thickness, unit === 'in' ? 3 : 1)}</strong></div>
                <div><span>Quantity</span><strong>{config.quantity} pcs · {stock.label}</strong></div>
                <div className="review-pattern">
                  <span className="material-preview review-material-preview" aria-hidden="true">
                    <img src={MATERIALS[config.material].cardImage} alt="" />
                  </span>
                  <div className="review-pattern-meta">
                    <span>Material</span>
                    <strong>{MATERIALS[config.material].label}</strong>
                  </div>
                </div>
                <div className="review-pattern">
                  <span className={`pattern-preview pattern-${config.pattern}`} aria-hidden="true" />
                  <div className="review-pattern-meta">
                    <span>Pattern</span>
                    <strong>{PATTERNS[config.pattern].label}{PATTERNS[config.pattern]?.conical ? ` · ${config.coneAngle}°` : ''}</strong>
                  </div>
                </div>
                <div><span>Opening</span><strong>{config.holeSize} mm · {pitchText} mm centers{slotPattern ? ` · slot ${config.slotLength} mm` : ''}{PATTERNS[config.pattern]?.conical ? ` · head Ø${conicalProfile(config).head.toFixed(2)} · exit Ø${conicalProfile(config).exit}` : ''}</strong></div>
                <div><span>Finish</span><strong>{finishLabel}</strong></div>
                <div><span>Form</span><strong>{PANEL_FORMS[config.panelForm].label}{config.panelForm !== 'flat' ? ` · flange ${config.flangeDepth} mm · ${config.bendAngle}° · R${config.bendRadius}` : ''}</strong></div>
                <div><span>Corners</span><strong>{CORNER_OPTIONS[config.corner].label}{config.corner !== 'square' ? ` ${cornerTreatmentMm(config)} mm` : ''}</strong></div>
                <div><span>Quality</span><strong>{DEBURR_LABELS[config.deburr]} · {TOLERANCE_LABELS[config.tolerance]} · {FLATNESS_LABELS[config.flatness]}</strong></div>
                <div><span>Open area / mass</span><strong>{openArea.toFixed(1)}% · {weight.toFixed(1)} kg</strong></div>
                <div><span>Price / lead</span><strong>{money} · {lead}</strong></div>
              </div>
              <div className={`review-status${blocking.length ? ' block' : issues.length ? ' warn' : ' ok'}`}>
                {blocking.length
                  ? 'Manufacturing blocks must be fixed before quoting or export.'
                  : issues.length
                    ? 'Configuration can be quoted, but review the warnings below.'
                    : 'Within standard punching rules.'}
              </div>
              {issues.length > 0 && (
                <ul className="issue-list">
                  {issues.map((item) => <li key={item.text} className={`issue-${item.level}`}>{item.text}</li>)}
                </ul>
              )}
              {issues.length > 0 && <button className="btn btn-primary reset-btn" type="button" onClick={applyRecommendedFixes}>Apply recommended fixes</button>}
              <div className="review-actions">
                <button className="btn btn-outline" type="button" onClick={() => setStep('configure')}>← Edit configuration</button>
              </div>
              <button className="btn btn-primary summary-cta" type="button" onClick={openQuote}>Request Quote →</button>
            </div>
          ) : (
            <>
              <PanelSection index="01" title="Sheet size">
                <div className="section-meta">
                  <label className="units-select">
                    <span>Units</span>
                    <select value={config.units} onChange={(e) => dispatch({ type: 'set', key: 'units', value: e.target.value })}>
                      <option value="mm">mm</option>
                      <option value="in">inch</option>
                    </select>
                  </label>
                </div>
                <div className="dimension-grid size-grid">
                  <NumberControl label="Width" units={config.units} value={config.width} min={200} max={3000} step={5} onChange={(v) => setSize('width', v)} />
                  <button
                    className={`lock-btn${sizeLock ? ' active' : ''}`}
                    type="button"
                    aria-pressed={sizeLock}
                    title={sizeLock ? 'Unlock width and height' : 'Lock width and height in proportion'}
                    onClick={toggleSizeLock}
                  >
                    {sizeLock ? <IconLock /> : <IconUnlock />}
                  </button>
                  <NumberControl label="Height" units={config.units} value={config.height} min={200} max={4000} step={5} onChange={(v) => setSize('height', v)} />
                  <NumberControl label="Thickness" units={config.units} value={config.thickness} min={0.5} max={12} step={0.5} digits={1} onChange={(v) => dispatch({ type: 'set', key: 'thickness', value: v })} />
                  <NumberControl label="Border" units={config.units} value={config.border} min={0} max={300} step={5} invalid={borderInvalid} onChange={(v) => dispatch({ type: 'set', key: 'border', value: v })} />
                </div>
                {sizeLock && <p className="fab-note">Width and height are locked in proportion. Change one, the other follows.</p>}
                <div className="dimension-grid tight-top">
                  <NumberControl label="Quantity" suffix="pcs" value={config.quantity} min={1} max={9999} step={1} onChange={(v) => dispatch({ type: 'set', key: 'quantity', value: v })} />
                  <div className={`stock-chip${stock.ok ? '' : ' warn'}`}>{stock.label}</div>
                </div>
              </PanelSection>

              <PanelSection index="02" title="Material">
                <div className="material-grid">
                  {Object.entries(MATERIALS).map(([key, item]) => (
                    <button
                      type="button"
                      key={key}
                      className={`material-card${config.material === key ? ' active' : ''}`}
                      onClick={() => dispatch({ type: 'set', key: 'material', value: key })}
                    >
                      <div className="material-preview">
                        <img
                          src={item.cardImage}
                          alt=""
                          width={480}
                          height={240}
                          loading={config.material === key ? 'eager' : 'lazy'}
                          decoding="async"
                          fetchPriority={config.material === key ? 'high' : 'low'}
                        />
                        {config.material === key && <span className="material-check" aria-hidden="true">✓</span>}
                      </div>
                      <div className="material-info">
                        <strong className="material-name">{item.label}</strong>
                        <small className="material-code">{item.short}</small>
                      </div>
                    </button>
                  ))}
                </div>
              </PanelSection>

              <PanelSection index="03" title="Perforation pattern">
                {PATTERN_GROUPS.map((group) => (
                  <div className="pattern-group" key={group.id}>
                    <p className="pattern-group-title">{group.title}</p>
                    <div className="pattern-grid">
                      {group.keys.map((key) => {
                        const pattern = PATTERNS[key];
                        return (
                          <button className={`pattern-card ${config.pattern === key ? 'active' : ''}`} type="button" key={key} onClick={() => dispatch({ type: 'setMany', values: { pattern: key, ...(PATTERN_DEFAULTS[key] || {}) } })}>
                            {config.pattern === key && <span className="pattern-check" aria-hidden="true">✓</span>}
                            <span className={`pattern-preview pattern-${key}`} />
                            <span>{pattern.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div className="pattern-grid tight-top">
                  <label className="pattern-card pattern-upload">
                    <span className="pattern-preview pattern-custom" />
                    <strong>Upload DXF / SVG</strong>
                    <span>Custom pattern file</span>
                    <input type="file" accept=".dxf,.svg" hidden onChange={() => flash('Custom DXF / SVG patterns ship with the production CAM module')} />
                  </label>
                </div>
                <p className="pattern-blurb">{PATTERNS[config.pattern].blurb}</p>
                {PATTERNS[config.pattern]?.conical && (
                  <>
                    <p className="fab-label">Conical mold head</p>
                    <div className="choice-grid">
                      {[60, 30].map((deg) => (
                        <button type="button" key={deg} className={`choice-card${config.coneAngle === deg ? ' active' : ''}`} onClick={() => dispatch({ type: 'set', key: 'coneAngle', value: deg })}>
                          {CONE_INCLUDED_OPTIONS[deg].label}
                        </button>
                      ))}
                    </div>
                    <p className="fab-note">{CONE_INCLUDED_OPTIONS[config.coneAngle].blurb} Head Ø {conicalProfile(config).head.toFixed(2)} mm · collar {conicalProfile(config).height.toFixed(2)} mm · exit Ø {conicalProfile(config).exit} mm.</p>
                  </>
                )}
                <button className="edit-params" type="button" onClick={() => setParamsOpen((v) => !v)}>{paramsOpen ? 'Hide' : 'Edit'} pattern parameters</button>
                {paramsOpen && (
                  <div className="dimension-grid tight-top">
                    <NumberControl label={holeSizeLabel(config.pattern)} units={config.units} value={config.holeSize} min={1} max={80} step={1} invalid={holeInvalid} onChange={(v) => dispatch({ type: 'set', key: 'holeSize', value: v })} />
                    <NumberControl label={pitchLabel(config.pattern)} units={config.units} value={config.pitch} min={2} max={200} step={1} invalid={ligamentInvalid} onChange={(v) => dispatch({ type: 'set', key: 'pitch', value: v })} />
                    {(PATTERNS[config.pattern]?.kind === 'slot' || PATTERNS[config.pattern]?.kind === 'bridge') && <>
                      <NumberControl label="Row pitch" units={config.units} value={config.rowPitch} min={2} max={200} step={1} invalid={rowPitchInvalid} onChange={(v) => dispatch({ type: 'set', key: 'rowPitch', value: v })} />
                      <NumberControl label="Slot length" units={config.units} value={config.slotLength} min={1} max={160} step={1} invalid={slotLengthInvalid} onChange={(v) => dispatch({ type: 'set', key: 'slotLength', value: v })} />
                    </>}
                  </div>
                )}
              </PanelSection>

              <PanelSection index="04" title="Finish">
                <div className="finish-tabs">
                  {FINISH_ORDER.map((key) => (
                    <button type="button" key={key} className={config.finish === key ? 'active' : ''} onClick={() => dispatch({ type: 'set', key: 'finish', value: key })}>{FINISHES[key].label}</button>
                  ))}
                </div>
                {config.finish === 'powder' && (
                  <>
                    <p className="ral-selected">{FINISH_COLORS[config.color].label} – {FINISH_COLORS[config.color].name}</p>
                    <div className="color-swatches">
                      {FINISH_COLOR_PREVIEW.map((key) => (
                        <button className={`color-chip ${config.color === key ? 'active' : ''}`} key={key} type="button" title={`${FINISH_COLORS[key].label} – ${FINISH_COLORS[key].name}`} onClick={() => dispatch({ type: 'set', key: 'color', value: key })}>
                          <span style={{ background: FINISH_COLORS[key].hex }} />
                          <small>{FINISH_COLORS[key].label.replace('RAL ', '')}</small>
                        </button>
                      ))}
                    </div>
                    <button className="link-btn" type="button" onClick={() => setRalOpen(true)}>View All RAL Colors</button>
                  </>
                )}
              </PanelSection>

              <PanelSection index="05" title="Edge & fabrication">
                <button type="button" className={`fab-row${fabOpen === 'form' ? ' open' : ''}`} onClick={() => setFabOpen(fabOpen === 'form' ? '' : 'form')}>Panel form</button>
                {fabOpen === 'form' && (
                  <>
                    <div className="choice-grid">
                      {Object.entries(PANEL_FORMS).map(([key, item]) => (
                        <button type="button" key={key} className={`choice-card${config.panelForm === key ? ' active' : ''}`} onClick={() => dispatch({ type: 'set', key: 'panelForm', value: key })}>{item.label}</button>
                      ))}
                    </div>
                    {config.panelForm !== 'flat' && (
                      <div className="dimension-grid tight-top">
                        <NumberControl label="Flange depth" units={config.units} value={config.flangeDepth} min={8} max={150} step={1} onChange={(v) => dispatch({ type: 'set', key: 'flangeDepth', value: v })} />
                        <NumberControl label="Bend angle" suffix="°" value={config.bendAngle} min={30} max={120} step={1} onChange={(v) => dispatch({ type: 'set', key: 'bendAngle', value: v })} />
                        <NumberControl label="Bend radius" units={config.units} value={config.bendRadius} min={0.5} max={20} step={0.5} digits={1} onChange={(v) => dispatch({ type: 'set', key: 'bendRadius', value: v })} />
                      </div>
                    )}
                  </>
                )}
                <button type="button" className={`fab-row${fabOpen === 'edge' ? ' open' : ''}`} onClick={() => setFabOpen(fabOpen === 'edge' ? '' : 'edge')}>Corners</button>
                {fabOpen === 'edge' && (
                  <>
                    <p className="fab-label">Corner treatment</p>
                    <div className="choice-grid three">
                      {Object.entries(CORNER_OPTIONS).map(([key, item]) => (
                        <button type="button" key={key} className={`choice-card${config.corner === key ? ' active' : ''}`} onClick={() => dispatch({ type: 'set', key: 'corner', value: key })}>
                          {item.label}
                        </button>
                      ))}
                    </div>
                    {config.corner !== 'square' && (
                      <div className="dimension-grid tight-top">
                        <NumberControl
                          label={config.corner === 'radius' ? 'Corner radius' : 'Chamfer size'}
                          units={config.units}
                          value={config.cornerRadius}
                          min={1}
                          max={150}
                          step={1}
                          onChange={(v) => dispatch({ type: 'set', key: 'cornerRadius', value: v })}
                        />
                      </div>
                    )}
                    {config.corner !== 'square' && <p className="fab-note">Outer blank corners are {config.corner === 'radius' ? `rounded at R${cornerTreatmentMm(config)} mm` : `chamfered ${cornerTreatmentMm(config)} mm`} on the 3D sheet and fabrication drawing.</p>}
                  </>
                )}
                <button type="button" className={`fab-row${fabOpen === 'quality' ? ' open' : ''}`} onClick={() => setFabOpen(fabOpen === 'quality' ? '' : 'quality')}>Deburr, tolerance & flatness</button>
                {fabOpen === 'quality' && (
                  <>
                    <p className="fab-label">Deburring</p>
                    <div className="choice-grid three">
                      {[['none', 'None'], ['standard', 'Standard'], ['fine', 'Fine']].map(([key, label]) => (
                        <button type="button" key={key} className={`choice-card${config.deburr === key ? ' active' : ''}`} onClick={() => dispatch({ type: 'set', key: 'deburr', value: key })}>{label}</button>
                      ))}
                    </div>
                    <p className="fab-label">Tolerance</p>
                    <div className="choice-grid three">
                      {[['iso-c', 'ISO coarse'], ['iso-m', 'ISO medium'], ['iso-f', 'ISO fine']].map(([key, label]) => (
                        <button type="button" key={key} className={`choice-card${config.tolerance === key ? ' active' : ''}`} onClick={() => dispatch({ type: 'set', key: 'tolerance', value: key })}>{label}</button>
                      ))}
                    </div>
                    <p className="fab-label">Flatness</p>
                    <div className="choice-grid three">
                      {[['standard', 'Standard'], ['precision', 'Precision']].map(([key, label]) => (
                        <button type="button" key={key} className={`choice-card${config.flatness === key ? ' active' : ''}`} onClick={() => dispatch({ type: 'set', key: 'flatness', value: key })}>{label}</button>
                      ))}
                    </div>
                  </>
                )}
                <button type="button" className={`fab-row${fabOpen === 'rules' ? ' open' : ''}${issues.length ? ' has-issues' : ''}`} onClick={() => setFabOpen(fabOpen === 'rules' ? '' : 'rules')}>Punching rules & validation</button>
                {fabOpen === 'rules' && (
                  <>
                    <p className="fab-note">Opening ≥ {limits.minHoleSize} mm. Ligament ≥ {limits.ligament} mm. Edge ≥ {limits.minBorder} mm.{(PATTERNS[config.pattern]?.kind === 'slot' || PATTERNS[config.pattern]?.kind === 'bridge') ? ` Minimum centers: ${limits.minPitchX} × ${limits.minRowPitch} mm.` : ''}{PATTERNS[config.pattern]?.conical ? ` Perfocon pitch is governed by the ${config.coneAngle}° exit Ø ${conicalProfile(config).exit} mm.` : ''} Entered values are preserved so conflicts are visible.</p>
                    {issues.length === 0 && <p className="fab-ok">Configuration is within standard punching rules.</p>}
                    {issues.length > 0 && (
                      <ul className="issue-list">
                        {issues.map((item) => <li key={item.text} className={`issue-${item.level}`}>{item.text}</li>)}
                      </ul>
                    )}
                    {issues.length > 0 && <button className="btn btn-primary reset-btn" type="button" onClick={applyRecommendedFixes}>Apply recommended fixes</button>}
                    <button className="btn btn-outline reset-btn" type="button" onClick={() => dispatch({ type: 'reset' })}>Reset configuration</button>
                  </>
                )}
              </PanelSection>
              <button className="btn btn-primary reset-btn" type="button" onClick={() => setStep('review')}>Review & quote →</button>
            </>
          )}
        </aside>
      </div>

      <div className="metric-strip">
        <Metric label="Open area" value={`${openArea.toFixed(1)}%`} />
        <Metric label="Est. mass" value={`${weight.toFixed(1)} kg`} />
        <Metric label={countLabel(config.pattern)} value={holes.toLocaleString()} />
        <Metric label="Thickness" value={dim(config.thickness, unit === 'in' ? 3 : 1)} />
        <Metric label="Indicative price" value={money} accent />
        <Metric label="Lead time" value={lead} />
      </div>

      <footer className="steel-foot">
        <div className="foot-exports">
          <button className="btn btn-primary pdf-card" type="button" onClick={printView}>Technical PDF</button>
        </div>
        <div className="foot-summary">
          <span>Configuration summary</span>
          <strong>{sku}</strong>
          <small>{MATERIALS[config.material].short} · {PATTERNS[config.pattern].short} {config.holeSize}/{config.pitch}{(PATTERNS[config.pattern]?.kind === 'slot' || PATTERNS[config.pattern]?.kind === 'bridge') ? `×${config.rowPitch}` : ''}{PATTERNS[config.pattern]?.conical ? ` · ${config.coneAngle}°` : ''} · {PANEL_FORMS[config.panelForm].label} · qty {config.quantity}</small>
          <small>{dim(config.width)} × {dim(config.height)} × {dim(config.thickness, unit === 'in' ? 3 : 1)}</small>
        </div>
      </footer>

      <div ref={overlayRef} className={`ar-overlay${inAndroidAR ? ' is-active' : ''}`}>
        {arHint && <p className="ar-banner">{arHint}</p>}
        <button className="btn btn-dark" type="button" onClick={() => sceneRef.current?.exitAR()}>Exit AR</button>
      </div>

      {quoteOpen && (
        <Modal title="Request quotation" onClose={() => setQuoteOpen(false)}>
          <div className="quote-spec"><strong>{sku}</strong><span>{dim(config.width)} × {dim(config.height)} × {dim(config.thickness, unit === 'in' ? 3 : 1)} · qty {config.quantity} · {openArea.toFixed(1)}% open area</span></div>
          {issues.length > 0 && (
            <ul className="issue-list">
              {issues.map((item) => <li key={item.text} className={`issue-${item.level}`}>{item.text}</li>)}
            </ul>
          )}
          <form onSubmit={requestOffer}>
            <div className="form-grid">
              <Field name="name" label="Name" required />
              <Field name="company" label="Company" required />
              <Field name="email" label="Email" type="email" required />
              <Field name="phone" label="Phone" type="tel" />
              <Field name="quantity" label="Quantity" type="number" defaultValue={String(config.quantity)} />
              <div className="full"><label className="label">Project / fabrication notes</label><textarea className="textarea" name="notes" rows={4} placeholder="Quantity, tolerances, edge treatment, delivery location..." /></div>
            </div>
            <div className="modal-actions"><button type="button" className="btn" onClick={() => setQuoteOpen(false)}>Cancel</button><button className="btn btn-primary" type="submit" disabled={blocking.length > 0}>Send RFQ</button></div>
          </form>
        </Modal>
      )}

      {savedOpen && (
        <Modal title="Saved configurations" onClose={() => setSavedOpen(false)}>
          {saved.length === 0 && <p className="muted">No saved configurations yet.</p>}
          {saved.map((item) => (
            <div className="saved-row" key={item.id}><div><strong>{item.name}</strong><small>{item.id}</small></div><button className="btn" type="button" onClick={() => { dispatch({ type: 'load', config: item.config }); setSavedOpen(false); flash('Configuration loaded'); }}>Load</button></div>
          ))}
        </Modal>
      )}

      {ralOpen && (
        <Modal title="RAL colors" onClose={() => setRalOpen(false)}>
          <div className="ral-grid">
            {FINISH_COLOR_ORDER.map((key) => (
              <button type="button" key={key} className={`ral-option${config.color === key ? ' active' : ''}`} onClick={() => { dispatch({ type: 'set', key: 'color', value: key }); setRalOpen(false); }}>
                <span style={{ background: FINISH_COLORS[key].hex }} />
                <strong>{FINISH_COLORS[key].label}</strong>
                <small>{FINISH_COLORS[key].name}</small>
              </button>
            ))}
          </div>
        </Modal>
      )}

      {arHelp && <Modal title="View in AR" onClose={() => setArHelp('')}><p className="muted">{arHelp}</p><div className="modal-actions"><button className="btn btn-primary" type="button" onClick={() => setArHelp('')}>OK</button></div></Modal>}
      {toast && <div className="toast">{toast}</div>}
    </main>
  );
}

function ArButton({ usdzHref, onLaunch, onHelp, posterSrc }) {
  if (PLATFORM.ios) {
    return (
      <a
        className="btn btn-outline ar-quicklook-link"
        rel="ar"
        href={quickLookHref(usdzHref)}
        onClick={(event) => {
          if (!usdzHref) {
            event.preventDefault();
            onHelp('Preparing the AR detail sample. Wait a moment, then tap View in AR again.');
          }
        }}
      >
        {posterSrc ? <img src={posterSrc} alt="" className="ar-poster" /> : null}
        View in AR
      </a>
    );
  }
  return (
    <button className="btn btn-outline" type="button" onClick={async () => {
      if (await immersiveArAvailable()) onLaunch();
      else onHelp(AR_DEVICE_HELP);
    }}>View in AR</button>
  );
}
function PanelSection({ index, title, children }) {
  return <section className="panel-section"><div className="section-title"><span>{index}</span><h2>{title}</h2></div>{children}</section>;
}
function holeSizeLabel(patternKey) {
  const kind = PATTERNS[patternKey]?.kind;
  if (kind === 'square') return 'Opening size';
  if (kind === 'hex') return 'Hex size · point-to-point';
  if (kind === 'trieur') return 'Cup diameter';
  if (kind === 'embossed') return 'Diamond size';
  if (kind === 'perfocon') return 'Entrance diameter';
  if (kind === 'bridge') return 'Slot width';
  return 'Hole size';
}
function pitchLabel(patternKey) {
  const kind = PATTERNS[patternKey]?.kind;
  if (kind === 'decorative') return 'Motif pitch';
  if (kind === 'slot' || kind === 'bridge') return 'Column pitch';
  return 'Pitch / centers';
}

function countLabel(patternKey) {
  const kind = PATTERNS[patternKey]?.kind;
  if (kind === 'trieur') return 'Cup count';
  return 'Hole count';
}
function Metric({ label, value, accent }) { return <div className={`metric-item${accent ? ' accent' : ''}`}><span>{label}</span><strong>{value}</strong></div>; }
function NumberControl({ label, suffix, value, min, max, step, onChange, units, digits, invalid }) {
  const isIn = units === 'in';
  const unitLabel = suffix || (isIn ? 'in' : units ? 'mm' : '');
  const d = digits ?? (isIn ? 3 : step < 1 ? 1 : 0);
  const display = units ? toDisplay(value, units, d) : value;
  const displayMin = units ? toDisplay(min, units, d) : min;
  const displayMax = units ? toDisplay(max, units, d) : max;
  const displayStep = units && isIn ? Number((step / MM_PER_IN).toFixed(4)) : step;
  const [draft, setDraft] = useState(null);
  const shown = draft === null ? display : draft;
  return (
    <label className={`number-control${invalid ? ' invalid' : ''}`}>
      <span>{label}</span>
      <div>
        <input
          type="number"
          inputMode="decimal"
          enterKeyHint="done"
          value={shown}
          min={displayMin}
          max={displayMax}
          step={displayStep}
          onWheel={(e) => e.currentTarget.blur()}
          onFocus={() => setDraft(display)}
          onBlur={() => {
            if (draft !== null && draft !== '') {
              const n = Number(draft);
              if (Number.isFinite(n)) onChange(units ? fromDisplay(n, units) : n);
            }
            setDraft(null);
          }}
          onChange={(e) => {
            const raw = e.target.value;
            setDraft(raw);
            if (raw === '') return;
            const n = Number(raw);
            if (!Number.isFinite(n)) return;
            onChange(units ? fromDisplay(n, units) : n);
          }}
        />
        {unitLabel && <small>{unitLabel}</small>}
      </div>
    </label>
  );
}
function Modal({ title, onClose, children }) { return <div className="modal-backdrop"><div className="modal"><div className="modal-head"><h2>{title}</h2><button className="icon-btn" type="button" onClick={onClose}>×</button></div><div className="modal-body">{children}</div></div></div>; }
function Field({ name, label, type = 'text', required, defaultValue }) {
  const inputMode = type === 'email' ? 'email' : type === 'tel' ? 'tel' : type === 'number' ? 'numeric' : undefined;
  const autoComplete = type === 'email' ? 'email' : type === 'tel' ? 'tel' : name === 'name' ? 'name' : name === 'company' ? 'organization' : undefined;
  return (
    <div>
      <label className="label">{label}</label>
      <input className="text-input" name={name} type={type} inputMode={inputMode} autoComplete={autoComplete} required={required} defaultValue={defaultValue} min={type === 'number' ? 1 : undefined} enterKeyHint={type === 'email' || type === 'tel' ? 'next' : undefined} />
    </div>
  );
}
function ToolBtn({ active, title, onClick, children }) {
  return <button type="button" className={active ? 'active' : ''} title={title} aria-label={title} onClick={onClick}>{children}</button>;
}
function Ico({ d, children }) {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{children || <path d={d} />}</svg>;
}
function IconSave() { return <Ico d="M5 5h11l3 3v11H5V5zm3 0v5h8V5M8 19v-6h8v6" />; }
function IconShare() { return <Ico d="M16 5h4v4M20 5l-9 9M9 5H5v14h14v-4" />; }
function IconOrbit() { return <Ico d="M12 5a7 7 0 1 0 6.3 4M12 5l2.5 2.5M12 5 9.5 7.5" />; }
function IconZoom() { return <Ico d="M10.5 17a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13zM15 15l5 5" />; }
function IconFit() { return <Ico d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />; }
function IconPan() { return <Ico d="M12 4v16M4 12h16M8 8l-4 4 4 4M16 8l4 4-4 4" />; }
function IconReset() { return <Ico d="M4 12a8 8 0 1 0 2.2-5.6M4 4v5h5" />; }
function IconLock() { return <Ico d="M8 11V8a4 4 0 1 1 8 0v3M6 11h12v9H6v-9z" />; }
function IconUnlock() { return <Ico d="M8 11V8a4 4 0 0 1 7.5-2M6 11h12v9H6v-9z" />; }
function IconCopy() { return <Ico d="M8 8h11v13H8V8zm-3 3V3h11" />; }
