# Stay Guide — reusable guest-guide PWA template

One master template. Duplicate it per property; never edit the app code.
Pure static HTML/CSS/JS — no backend, no database, no paid services, no build step.

## Files

| Path | Edit per property? |
|---|---|
| `index.html` | No — the deployed app |
| `The Stay.dc.html` | No — editable source of `index.html` |
| `support.js` | No — runtime |
| `data/property.js` | **Yes — the only content file** |
| `photos/` | **Yes — drop your images, reference them in property.js** |
| `data/property.js → branding` | **Yes — 3 colors + logo** |
| `manifest.json` | Name, short_name, theme_color only |
| `service-worker.js` | Bump `CACHE_VERSION` on each publish |
| `icons/` | Replace with the property's icons (192, 512, maskable 512) |
| `.nojekyll` | No — tells GitHub Pages to serve files as-is |

## New property in 6 steps

1. Duplicate this folder.
2. Edit `data/property.js` — property, welcome, check-in/out, Wi-Fi, host, rules, house guide, restaurants, activities, essentials, emergency, settings.
3. Add photos to `photos/` and point the `image` / `heroImage` fields at them. Any `""` image renders a labeled placeholder, so the app never breaks.
4. Set the three colors in `branding`. They drive the whole UI via CSS variables.
5. Deploy (below).
6. Generate a QR code for the published URL and hand it to the host. Optionally save it as `photos/guide-qr.png` and set `property.guideQrImage` so guests can share the guide too.

## Deploy to GitHub Pages

Upload these to the repo root — drag and drop in the GitHub web UI works, no git required:

```
index.html
manifest.json
service-worker.js
support.js
.nojekyll
data/property.js
icons/icon-192.png
icons/icon-512.png
icons/icon-maskable-512.png
photos/…            (your images)
```

Then **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)` → Save**.
The guide is live at `https://<user>.github.io/<repo>/` in about a minute.

Everything uses relative paths (`./…`), `start_url` and `scope` are `./`, so the app
works unchanged from a repo subdirectory, a custom domain, or a plain folder — nothing
to reconfigure. Netlify, Cloudflare Pages and Vercel free tiers work identically:
drop the same folder in.

**Two rules when republishing:**
- If you edited the app in `The Stay.dc.html`, copy it over `index.html` before uploading.
- Bump `CACHE_VERSION` in `service-worker.js` (e.g. `stay-guide-v2` → `v3`), or guests
  with the guide already installed keep seeing the cached old version.

### Local check before you upload

Service workers need `http://`, not `file://`. Any static server works:
`python3 -m http.server 8080`, then open `http://localhost:8080`. This is only a
convenience for previewing — nothing in the app depends on localhost or any server.

## Turning sections off

`settings` flags hide whole sections (`showWifi`, `showHouseGuide`, `showRestaurants`, …).
An empty array hides its section too — no code changes needed.

## Security

A static URL is public. Never put door codes, alarm codes, or personal data in
`property.js`. `checkIn.accessCodeNote` is the placeholder pattern: "Your access code
will be sent separately by your host."

## Offline

The service worker precaches the shell, property data and runtime, then caches photos
and fonts as they are viewed — so the guide keeps working with no signal. Guests can
Add to Home Screen for a standalone, full-screen app with the property's icon.

The only third-party requests are free public CDNs (unpkg for the runtime, Google Fonts
for type), both cached after first load. No API keys, no accounts, no subscriptions.

## Future (not built)

`propertyData` is intentionally a plain serializable object — the same shape a future
SaaS backend would return per property from a form-driven dashboard, with multiple
properties, analytics, custom domains and generated QR codes layered on top. No app
code assumes a local file.
