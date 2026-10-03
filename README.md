# CLIVIO website

Plain static site (HTML + CSS + a little JS), published with GitHub Pages at
https://nadanabill.github.io/clivio/ — no build step, edit the files and push.

- `index.html` — all the Arabic content (default language). Every translatable element has a `data-i18n` key.
- `js/main.js` — English strings (`EN`), language/theme toggles, WhatsApp links, video facade, tracking.
  - `CONFIG.googlePlayUrl`: set it after the Google Play release and the Android card links to the store.
- `css/style.css` — styles (light/dark, RTL/LTR).
- `window.CLIVIO_PIXEL_ID` (bottom of `index.html`): Meta Pixel ID, empty = tracking off.
- `flutter_service_worker.js` — clears the old Flutter app's cache for returning visitors. Safe to delete after a few weeks.
