const CACHE = 'steel-quicklook-v1';
const ENTRY = 'detail-usdz';

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const path = new URL(event.request.url).pathname;
  if (!path.endsWith('/quicklook/detail.usdz')) return;
  event.respondWith(
    caches.open(CACHE).then((cache) => cache.match(ENTRY).then((response) => {
      if (response) return response;
      return new Response('USDZ not ready', { status: 404, statusText: 'Not Ready' });
    }))
  );
});
