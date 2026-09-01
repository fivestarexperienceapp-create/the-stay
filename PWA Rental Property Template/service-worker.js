/* Static PWA service worker. No backend, no paid services, no localhost.
   All paths are relative, so this works from a GitHub Pages subdirectory
   (https://user.github.io/repo/) exactly as it does from a domain root.

   Bump CACHE_VERSION whenever you publish new property data or photos —
   that is what pushes the update to guests who already installed the guide. */
const CACHE_VERSION = "stay-guide-v2";

/* Same-origin files that must be available offline. */
const SHELL = [
  "./",
  "./index.html",
  "./support.js",
  "./data/property.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png"
];

/* Third-party runtime, all free public CDNs. Best-effort: if any of these fail
   at install time the app still installs and picks them up on first online run. */
const VENDOR = [
  "https://unpkg.com/react@18.3.1/umd/react.production.min.js",
  "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION).then((c) =>
      Promise.all(
        SHELL.concat(VENDOR).map((u) =>
          c.add(new Request(u, { cache: "reload", mode: u.startsWith("http") ? "no-cors" : "same-origin" })).catch(() => null)
        )
      )
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  // Navigations: network first, fall back to the cached shell so the guide
  // opens with no signal. Deep links inside the app are client-side only.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put("./index.html", copy));
          return res;
        })
        .catch(() => caches.match("./index.html").then((r) => r || caches.match("./")))
    );
    return;
  }

  // Everything else (property data, photos, fonts, vendor JS):
  // cache first for instant offline reads, revalidate in the background.
  e.respondWith(
    caches.match(req).then((hit) => {
      const network = fetch(req)
        .then((res) => {
          if (res && (res.ok || res.type === "opaque")) {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => hit);
      return hit || network;
    })
  );
});

/* Lets a future update prompt activate immediately. */
self.addEventListener("message", (e) => {
  if (e.data === "skipWaiting") self.skipWaiting();
});
