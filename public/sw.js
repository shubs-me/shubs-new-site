// Kill-switch service worker.
//
// The PREVIOUS site (before this one) registered a service worker on visitors'
// devices, which is still serving stale, cached pages — so returning visitors
// see the old site even though the new one is live. This site does NOT use a
// service worker; this file exists only so that any browser still holding an
// old `/sw.js` registration picks up THIS self-destructing version on its next
// update check, cleans itself up, and loads the current site.
//
// On activation it: deletes all caches, unregisters itself, and reloads any
// open tabs. After it runs once on a device, the old worker is gone for good.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      } catch {
        /* ignore */
      }
      try {
        await self.registration.unregister();
      } catch {
        /* ignore */
      }
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        try {
          client.navigate(client.url);
        } catch {
          /* ignore */
        }
      }
    })(),
  );
});
