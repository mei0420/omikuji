// キャッシュ名とキャッシュするリソースのリスト
const CACHE_NAME = 'omikuji-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/名称未設定のデザイン (1).png',
  '/名称未設定のデザイン.png'
];

// インストールイベント
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('キャッシュがインストールされました');
        return cache.addAll(urlsToCache);
      })
  );
});

// アクティベートイベント
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// フェッチイベント
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // キャッシュがあればそれを返す
        if (cachedResponse) {
          return cachedResponse;
        }
        // キャッシュがなければネットワークでリクエスト
        return fetch(event.request);
      })
  );
});
