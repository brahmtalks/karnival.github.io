/*
    SKYROUTES LITE 2.0.2

    Copyright © 2019 Aakash Pandey. All rights reserved.
    Use of this source code is governed by a license that can be
    found in the LICENSE file.

    https://skyroutes.github.io

*/

console.log("[SKYROUTES-LITE-2.2]");
const vn = "legacyl7";
const chg = "change time";

var appCash = [
    '/index.html',
    '/lib/skyroutes.js'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(vn).then((cache) => {
            return cache.addAll(appCash);
        })
    );
});


self.addEventListener('message', (event) => {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    } else if (event.data.action === 'clearOld') {
        event.waitUntil(
            caches.keys().then((keys) => Promise.all(
                keys.map((k) => {
                    if (!vn.includes(k)) {
                        return caches.delete(k);
                    }
                })
            )).then(() => {
                console.log('old caches are cleared now');
            })
        )
    }
});


self.addEventListener('fetch', e => {
    const url = new URL(e.request.url);
    if (url.origin === location.origin && (!url.pathname.includes(".")) && (!/howdy|dissolve/.test(url.pathname)) ) {
        var r = caches.match(location.origin + '/index.html');
        e.respondWith(r);
    } else {
        (appCash.includes(url.pathname)) ? e.respondWith(caches.match(url)) : console.log("Server Fetch: " + url);
    }
});