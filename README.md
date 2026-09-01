# Stay Guide — reusable guest-guide PWA template

One master template. Duplicate it per property; never edit the app code.

## Files

| Path | Edit per property? |
|---|---|
| `The Stay.dc.html` | No — the core app |
| `support.js` | No — runtime |
| `data/property.js` | **Yes — the only content file** |
| `photos/` | **Yes — drop your images, reference them in property.js** |
| `data/property.js → branding` | **Yes — 3 colors + logo** |
| `manifest.json` | Name, short_name, theme_color only |
| `service-worker.js` | Bump `CACHE_VERSION` on each publish |
| `icons/` | Replace with the property's icons (192, 512, maskable 512) |

## New property in 6 steps

1. Duplicate this folder.
2. Edit `data/property.js` — property, welcome, check-in/out, Wi-Fi, host, rules, house guide, restaurants, activities, essentials, emergency, settings.
3. Add photos to `photos/` and point the `image` / `heroImage` fields at them. Any `""` image renders a labeled placeholder, so the app never breaks.
4. Set the three colors in `branding`. They drive the whole UI via CSS variables.
5. Publish: copy `The Stay.dc.html` to `index.html` (keep `support.js`, `data/`, `photos/`, `icons/`, `manifest.json`, `service-worker.js` beside it) and push to GitHub Pages / Netlify / Cloudflare Pages — all free, all static.
6. Generate a QR code for the published URL (any free generator) and hand it to the host. Optionally save it as `photos/guide-qr.png` and set `property.guideQrImage` so guests can share the guide too.

## Turning sections off

`settings` flags hide whole sections (`showWifi`, `showHouseGuide`, `showRestaurants`, …). An empty array hides its section too — no code changes needed.

## Security

A static URL is public. Never put door codes, alarm codes, or personal data in `property.js`. `checkIn.accessCodeNote` is the placeholder pattern: "Your access code will be sent separately by your host."

## Offline

The service worker caches the shell, property data and visited photos, so the guide keeps working with no signal. Guests can Add to Home Screen for a standalone app.

## Future (not built)

Data shape is intentionally serializable — `propertyData` is the same object a future SaaS backend would return per property from a form-driven dashboard, with multiple properties, analytics, custom domains and generated QR codes layered on top. No app code assumes a local file.
