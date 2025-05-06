importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

if (workbox) {
  console.log('Workbox loaded ✅');

  // Precache files (this gets auto-injected after build)
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

  // Cache API calls (stale-while-revalidate)
  workbox.routing.registerRoute(
    ({ url }) => url.origin === 'https://api-game.bloque.app',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'bloque-api-cache'
    })
  );

  // Optional fallback: Handle navigation offline
  self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
      event.respondWith(
        caches.match('/index.html').then((cached) => {
          return cached || fetch(event.request).catch(() => {
            return new Response('<h1>Offline</h1>', {
              headers: { 'Content-Type': 'text/html' }
            });
          });
        })
      );
    }
  });

  // Force new Service Worker to take control immediately
  self.addEventListener('install', (event) => {
    self.skipWaiting();
  });

  self.addEventListener('activate', (event) => {
    clients.claim();
  });

} else {
  console.error('Workbox failed to load ❌');
}
