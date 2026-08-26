export function detectPlatform() {
  const ua = navigator.userAgent || '';
  const ios = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const android = /Android/i.test(ua);
  const safari = ios && /Safari/i.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS/i.test(ua);
  const secure = Boolean(window.isSecureContext);
  let system = 'none';
  if (ios) system = 'quicklook';
  else if (android) system = 'webxr';
  return {
    ios,
    android,
    desktop: !ios && !android,
    safari,
    secure,
    system,
    label: ios ? 'iOS' : android ? 'Android' : 'Desktop'
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
