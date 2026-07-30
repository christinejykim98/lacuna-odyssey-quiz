# Lacuna · Your Hero's Journey — current build

A Kawaii astrology UI flow: birthday → the Odyssey traveler you're becoming.
Client-side static site (React via CDN + the `dc-runtime`), no build step.

## Host
Serve over http(s) (GitHub Pages / any static host) — `index.html` at the root.
Needs internet: loads React/Babel from unpkg, fonts from Google Fonts, and uses
open-meteo for birthplace geocoding. (Won't run from a bare `file://` open — the
engine loads as an ES module.)

**Files:** `index.html` (app) · `support.js` (dc-runtime) · `astro.js` (chart engine + the 12) · `characters/` (art)

**Live:** https://christinejykim98.github.io/lacuna-odyssey-quiz/
