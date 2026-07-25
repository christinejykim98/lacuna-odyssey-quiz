# Lacuna · "Your Hero's Journey" — drop-in package

A self-contained, single-file web experience:
**birthday → hero blueprint** (Sun · North Node · Saturn · Midheaven), a **vibe quiz**,
illustrated **character cards**, and a **shareable poster**.

No build step, no dependencies — fonts, character art, and the astrology/ephemeris
tables are all inlined in `index.html`. Just open it and it runs.

## Files
- `index.html` — the whole app (open in any browser)
- `supabase-schema.sql` — table for storing submissions
- `README.md` — this file

---

## Put it in Lovable

**Option A — embed as-is (fastest):**
Add a page in Lovable and drop the contents of `index.html` into a full-page HTML
embed / iframe. It runs standalone, no changes needed.

**Option B — rebuild natively (cleaner, recommended for the real product):**
Use this as the reference and have Lovable recreate the screens in React + Tailwind,
then connect Supabase (below). The engine is framework-agnostic — copy these from the
`<script>` at the bottom of `index.html`:
`CHARS` (character map), `SATURN` + `NODE` (sign-ingress tables), `sunSign()`,
`chartAngles()`, `zonedToUTC()`, and the `CITIES` list. That's the entire astrology core.

---

## Store data (Supabase — Lovable's native backend)

1. In Lovable, connect Supabase (or create a project at supabase.com).
2. Open the Supabase **SQL editor** and run `supabase-schema.sql`.
   It creates a `submissions` table and allows anonymous inserts only.
3. In `index.html`, find the config near the top of the `<script>`:
   ```js
   var SUPABASE_URL = "";       // https://YOURPROJECT.supabase.co
   var SUPABASE_ANON_KEY = "";  // anon (public) key
   ```
   Paste your project URL + anon key. Save.
4. Done. Every reading writes birth data + placements; every quiz writes the
   resulting traveler. **Until you fill those in, storage is off and the app is
   fully offline.**

### Add email / waitlist capture (optional but recommended for the funnel)
1. Add an input somewhere on the reading or result screen:
   `<input type="email" id="email" placeholder="your email ♡">`
2. Include it in the stored payload — the `submissions` table already has an `email` column:
   ```js
   storeSubmission({ /* ...existing fields..., */ email: (document.getElementById("email")||{}).value || null });
   ```

---

## Privacy
This collects birth data (and email, if you add it). Add a short consent line near any
capture and handle the data per your privacy policy. The Supabase **anon key is safe to
expose** — row-level security restricts it to inserts on this one table.

## Notes
- There is a hidden `#dev` shortcut / "dev" button that jumps straight to a sample
  reading (Seoul birth data). Remove the `.devlink` button + the `devJump()` block
  before going public.
- File is ~740KB (the AI-upscaled character art). Can be slimmed to ~400KB if needed.
