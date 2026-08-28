import assert from 'node:assert/strict';
import { Window } from 'happy-dom';
import { detectPlatform, isCompactWeb, isIPad, isIPhone, isIOS } from '../src/ar/detect.js';

function withUA(ua, platform = 'iPhone', touchPoints = 5, fn) {
  const window = new Window({ url: 'http://localhost/' });
  Object.defineProperty(window.navigator, 'userAgent', { value: ua, configurable: true });
  Object.defineProperty(window.navigator, 'platform', { value: platform, configurable: true });
  Object.defineProperty(window.navigator, 'maxTouchPoints', { value: touchPoints, configurable: true });
  global.window = window;
  Object.defineProperty(global, 'navigator', { value: window.navigator, configurable: true });
  try {
    fn();
  } finally {
    delete global.window;
  }
}

withUA(
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  'iPhone',
  5,
  () => {
    assert.ok(isIPhone());
    assert.ok(!isIPad());
    assert.ok(isIOS());
    assert.ok(isCompactWeb());
    const p = detectPlatform();
    assert.equal(p.label, 'iPhone');
    assert.equal(p.iphone, true);
    assert.equal(p.ipad, false);
  }
);

withUA(
  'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  'iPad',
  5,
  () => {
    assert.ok(isIPad());
    assert.ok(!isIPhone());
    assert.ok(isIOS());
    assert.ok(!isCompactWeb());
    const p = detectPlatform();
    assert.equal(p.label, 'iPad');
    assert.equal(p.ipad, true);
    assert.equal(p.touchTablet, true);
  }
);

withUA(
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
  'MacIntel',
  5,
  () => {
    assert.ok(isIPad());
    assert.ok(!isIPhone());
    assert.ok(!isCompactWeb());
    assert.equal(detectPlatform().label, 'iPad');
  }
);

console.log('Platform detect tests passed.');
