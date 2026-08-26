const $ = (s) => document.querySelector(s);
const TOKEN_KEY = 'steel-admin-token';
const PRODUCT_FIELDS = [
  'manufacturer', 'productName', 'skuPrefix', 'basePrice', 'currency', 'width', 'depth', 'height',
  'contactEmail', 'accent', 'familyName', 'familyCategory', 'omniClass', 'masterFormat',
  'assemblyCode', 'ifcClass', 'keynote', 'productUrl', 'lod', 'hostMethod',
  'materialRateCarbon', 'materialRateSs304', 'materialRateAlu',
  'finishRateMill', 'finishRateGalvanized', 'finishRateBrushed', 'finishRatePowder',
  'punchRate', 'formedPunchRate', 'topFoldAdd', 'sideReturnsAdd', 'cassetteAdd',
  'customFoldAdd', 'mountingAdd', 'formedPatternAdd', 'notchAdd', 'deburrStandardAdd',
  'deburrFineAdd', 'toleranceFineAdd', 'flatnessPrecisionAdd', 'nonStandardBendAdd'
];

function token() {
  return sessionStorage.getItem(TOKEN_KEY) || '';
}

function setToken(value) {
  if (value) sessionStorage.setItem(TOKEN_KEY, value);
  else sessionStorage.removeItem(TOKEN_KEY);
}

function authHeaders(extra = {}) {
  const headers = { ...extra };
  const t = token();
  if (t) headers.Authorization = `Bearer ${t}`;
  return headers;
}

function api(path, opts = {}) {
  return fetch(path, { ...opts, headers: authHeaders(opts.headers) });
}

function quoteConfig(q) {
  const root = q?.configuration || {};
  if (root.configuration && typeof root.configuration === 'object') return root.configuration;
  return root;
}

function showApp(unlocked) {
  $('#loginGate')?.classList.toggle('hidden', unlocked);
  $('#adminApp')?.classList.toggle('hidden', !unlocked);
  $('#logoutAdmin')?.classList.toggle('hidden', !unlocked);
}

async function unlock(value) {
  setToken(value);
  const res = await api('/api/session');
  if (!res.ok) {
    setToken('');
    showApp(false);
    $('#loginError')?.classList.remove('hidden');
    return false;
  }
  $('#loginError')?.classList.add('hidden');
  showApp(true);
  await load();
  return true;
}

async function load() {
  const [productRes, analyticsRes, quotesRes] = await Promise.all([
    fetch('/api/product'),
    api('/api/analytics'),
    api('/api/quotes')
  ]);
  if (analyticsRes.status === 401 || quotesRes.status === 401) {
    setToken('');
    showApp(false);
    return;
  }
  const product = await productRes.json();
  for (const k of PRODUCT_FIELDS) if ($(`#${k}`)) $(`#${k}`).value = product[k] ?? '';
  const a = await analyticsRes.json();
  $('#mViews').textContent = a.views;
  $('#mBim').textContent = (a.specDownloads || 0) + (a.bimDownloads || 0);
  $('#mQuotes').textContent = a.quotes;
  $('#mAR').textContent = a.arLaunches;
  renderQuotes(await quotesRes.json());
  const origin = location.origin;
  $('#embedCode').textContent = `<iframe\n  src="${origin}/?embed=1"\n  title="${product.productName} 3D configurator"\n  width="100%" height="800"\n  style="border:0;border-radius:16px"\n  allow="xr-spatial-tracking; fullscreen; camera"\n></iframe>`;
}

function renderQuotes(quotes) {
  const host = $('#quoteRows');
  host.innerHTML = '';
  quotes.slice(0, 8).forEach((q) => {
    const c = quoteConfig(q);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td><strong>${esc(q.id)}</strong><br><small>${new Date(q.createdAt).toLocaleDateString()}</small></td><td>${esc(q.company)}</td><td>${esc(q.name)}<br><small>${esc(q.email)}</small></td><td><strong>${esc(c.computed?.sku || '—')}</strong><br><small>Qty ${esc(q.quantity || 1)} · ${esc(c.width || '—')} × ${esc(c.height || '—')} × ${esc(c.thickness || '—')} mm · ${esc(c.material || '')} · ${esc(c.pattern || '')}</small></td><td><span class="status">${esc(q.status)}</span></td>`;
    host.appendChild(tr);
  });
  if (!quotes.length) host.innerHTML = '<tr><td colspan="5">No quotation requests yet.</td></tr>';
}

$('#loginForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const value = $('#adminToken')?.value?.trim() || '';
  if (!value) return;
  const ok = await unlock(value);
  if (!ok) toast('Invalid admin token');
});

$('#logoutAdmin')?.addEventListener('click', () => {
  setToken('');
  showApp(false);
  if ($('#adminToken')) $('#adminToken').value = '';
});

$('#saveProduct').addEventListener('click', async () => {
  const body = {};
  for (const k of PRODUCT_FIELDS) body[k] = $(`#${k}`).value;
  const r = await api('/api/product', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  if (r.ok) { toast('Product settings saved'); load(); }
  else if (r.status === 401) { setToken(''); showApp(false); toast('Admin session expired'); }
  else toast('Save failed');
});
$('#copyEmbed').addEventListener('click', async () => {
  await navigator.clipboard?.writeText($('#embedCode').textContent);
  toast('Embed code copied');
});
function toast(m) {
  const t = $('#toast');
  t.textContent = m;
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), 2200);
}
function esc(s) {
  return String(s ?? '').replace(/[&<>'"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
}

if (token()) unlock(token());
else showApp(false);
