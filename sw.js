var CACHE_NAME = 'portofolio-cache';
var urlsToPrefetch = [
    `/`,
    `/index.html`,
    `/home.html`,
    `/projects/easitill.html`,
    `/projects/homestart.html`,
    `/projects/johncullen.html`,
    `/projects/portfolio.html`,
    `/projects/uniplanner.html`,
    `/projects/waterperry.html`,
    `/stylesheets/css/style.css`,
    `/js/script.js`,
    `/js/modernizr.js`,
    `/js/scrollspy.min.js`,
    `/js/velocity.min.js`,
    `/js/moment.min.js`,
    `/js/cookieconsent.min.js`,
    `/images/favicon/site.webmanifest`,
    `/images/favicon/favicon/favicon-32x32.png`,
    `/images/favicon/favicon/favicon-16x16.png`
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                // Magic is here. Look the  mode: 'no-cors' part.
                cache.addAll(urlsToPrefetch.map(function(urlToPrefetch) {
                    return new Request(urlToPrefetch, { mode: 'no-cors' });
                })).then(function() {
                    console.log('All resources have been fetched and cached.');
                });
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(CACHE_NAME)
            .then(cache => cache.match(event.request, {ignoreSearch: true}))
            .then(response => {
                return response || fetch(event.request);
            })
    );
});