# photos/

Drop the property's images here, then point at them from `data/property.js` with
relative paths, e.g. `heroImage: "photos/hero.jpg"`.

Suggested set:

| File | Used by | Size |
|---|---|---|
| hero.jpg | property.heroImage | 1600x1200 |
| host.jpg | host.photo | 600x600 |
| checkin-door.jpg | checkIn.photos[] | 1200x800 |
| guide-*.jpg | houseGuide[].image | 1200x800 |
| place-*.jpg | restaurants[].image / activities[].image | 1200x800 |
| wifi-qr.png | wifi.qrImage | 600x600 |
| guide-qr.png | property.guideQrImage | 600x600 |

Any field left as "" renders a labeled placeholder, so the app never breaks
while photos are still missing. JPEG under ~300KB each keeps the guide fast on
hotel Wi-Fi and cheap to cache offline.
