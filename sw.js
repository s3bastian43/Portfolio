const version = "0.6.11";
const cacheName = `portfolio-${version}`;
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                `/`,
                `/index.html`,
                `/home.html`,
                `/stylesheets/css/style.css`,
                `/js/script.js`,
                `/js/modernizr.js`,
                `/js/scollspy.min.js`,
                `/js/velocity.min.js`,
                `/js/moment.min.js`,
                `/js/cookieconsent.min.js`,
                `/js/particles.min.js`
            ])
                .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
            .then(cache => cache.match(event.request, {ignoreSearch: true}))
            .then(response => {
                return response || fetch(event.request);
            })
    );
});