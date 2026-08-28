export function isIPad() {
  if (typeof window === 'undefined') return false;
  const ua = navigator.userAgent || '';
  if (/iPad/i.test(ua)) return true;
  return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
}

export function isIPhone() {
  if (typeof window === 'undefined') return false;
  const ua = navigator.userAgent || '';
  return /iPhone|iPod/i.test(ua);
}

export function isIOS() {
  return isIPad() || isIPhone();
}

export function isCompactWeb() {
  if (typeof window === 'undefined') return false;
  if (isIPhone()) return true;
  if (isIPad()) {
    const saveData = Boolean(navigator.connection?.saveData);
    const lowMem = Number(navigator.deviceMemory) > 0 && navigator.deviceMemory <= 4;
    return saveData || lowMem;
  }
  const coarse = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 1;
  const narrow = window.matchMedia('(max-width: 900px)').matches;
  const saveData = Boolean(navigator.connection?.saveData);
  const lowMem = Number(navigator.deviceMemory) > 0 && navigator.deviceMemory <= 4;
  return saveData || lowMem || (coarse && narrow) || narrow;
}

export function detectPlatform() {
  const ua = navigator.userAgent || '';
  const ipad = isIPad();
  const iphone = isIPhone();
  const ios = ipad || iphone;
  const android = /Android/i.test(ua);
  const safari = ios && /Safari/i.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS/i.test(ua);
  const secure = Boolean(window.isSecureContext);
  const touchTablet = ipad || (navigator.maxTouchPoints > 1 && !android && !/Mobile/i.test(ua));
  let system = 'none';
  if (ios) system = 'quicklook';
  else if (android) system = 'webxr';
  return {
    ios,
    ipad,
    iphone,
    android,
    touchTablet,
    desktop: !ios && !android,
    safari,
    secure,
    system,
    label: ipad ? 'iPad' : iphone ? 'iPhone' : android ? 'Android' : 'Desktop'
  };
}

export const AR_DEVICE_HELP = 'This device has no AR camera. Open the configuration on a phone — Chrome on Android, or Safari on iOS — to view the sheet at 1:1.';

export async function immersiveArAvailable() {
  if (!navigator.xr?.isSessionSupported) return false;
  try {
    return Boolean(await navigator.xr.isSessionSupported('immersive-ar'));
  } catch {
    return false;
  }
}

export function friendlyArError(err) {
  const msg = String(err?.message || err || '');
  if (/no xr hardware|not supported|requestSession|immersive-ar|xr system/i.test(msg)) return AR_DEVICE_HELP;
  return msg || AR_DEVICE_HELP;
}
