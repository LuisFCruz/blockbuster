const CACHE_NAME = 'static-cache-v3';

const FILES_TO_CACHE = [
  '/blockbuster/',
  '/blockbuster/index.html',
  '/blockbuster/main.css',
  '/blockbuster/main.js',
  '/blockbuster/manifest.json',
  '/blockbuster/images/icons/icon-128x128.png',
  '/blockbuster/images/icons/icon-144x144.png',
  '/blockbuster/images/icons/icon-152x152.png',
  '/blockbuster/images/icons/icon-192x192.png',
  '/blockbuster/images/icons/icon-256x256.png',
  '/blockbuster/images/icons/icon-512x512.png',
  '/blockbuster/images/ultimato.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key.indexOf(CACHE_NAME) !== 0)
            .map(key => caches.delete(key))
        )
      )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(cachedResponse => {
        return cachedResponse || fetch(event.request).then(response => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          })
        })
      })
  );
});