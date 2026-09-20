const CACHE_NAME = 'portfolio-v1.0.1';
const STATIC_CACHE_NAME = 'portfolio-static-v1.0.1';
const DYNAMIC_CACHE_NAME = 'portfolio-dynamic-v1.0.1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/globals.css',
  '/logo.svg',
  '/coder.svg',
  '/og-image.jpg',
  '/favicon.ico'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        return cache.addAll(STATIC_ASSETS);
      })
      .catch(error => {
        console.error('Failed to cache static assets:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache or fetch and cache
self.addEventListener('fetch', event => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin requests
  if (request.url.indexOf('http') !== 0) return;

  // Handle different request types
  if (request.destination === 'document') {
    // HTML documents - Network first, cache fallback
    event.respondWith(
      fetch(request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE_NAME)
            .then(cache => cache.put(request, responseClone));
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
  } else if (
    request.destination === 'image' ||
    request.destination === 'font' ||
    request.destination === 'style' ||
    request.destination === 'script'
  ) {
    // Static assets - Cache first, network fallback
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(request).then(response => {
            const responseClone = response.clone();
            caches.open(STATIC_CACHE_NAME)
              .then(cache => cache.put(request, responseClone));
            return response;
          });
        })
    );
  } else {
    // Other requests - Network first
    event.respondWith(
      fetch(request).catch(() => {
        return caches.match(request);
      })
    );
  }
});