// src/service-worker.js
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('blog-cache-v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/static/js/main.js',
          '/static/css/main.css'
        ]);
      })
    );
  });