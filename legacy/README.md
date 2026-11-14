# Portfolio — Software Engineering Student

School task portfolio. One page, no build tools, no npm. GSAP loads from a CDN.

## Structure (requested order 1-2-4-3-5)
1. Hero — `id="hero"`
2. About — `id="about"`
3. Skills — `id="skills"` (requested as section 4, shown after About)
4. Projects — `id="projects"` (requested as section 3, shown after Skills)
5. Contact — `id="contact"` + footer

Sections are unnumbered on purpose; only project rows and the skill counter keep numbers, because there they label content.

## Run it
```bash
cd ~/portfolio
python3 -m http.server 8000
# open http://localhost:8000/
```
Keep `index.html`, `style.css` and `script.js` in the same folder. Opening `index.html` straight from disk also works; fonts and GSAP need internet either way.

## Replace the placeholders
- `Your Name`, `YN`, `Your` / `Name` in the hero → your name
- `your@email.com`, `github.com/yourname`, `linkedin.com/in/yourname` → real links
- `images/photo.jpg` → your portrait (any 4:5 photo)
- Four project rows in `#projects` → your real titles, descriptions, stack, year
- Each project's mock UI in `.w-thumb` and `.preview-item` → keep as a visual, or swap in a screenshot
- Skills in `script.js` → the `SKILLS` array controls name, level, description and tools
- About text, the quote, availability and location → your details

## What the JS does
- Mobile menu, demo form with a live status line, copy-email button
- Hover/click project rows with a pinned preview (arrow keys work)
- Skills map: fixed node positions, spotlight on hover/focus, sway + mouse parallax, animated level count, lines that draw in on entry
- GSAP reveals on scroll, ticker band that leans with scroll speed, count-up figures, portrait + preview tilt and magnetic buttons on a fine pointer
- Three.js ink-line object in the hero portrait slot while `photo.jpg` is missing — slowly turns, leans with the cursor, drag to rotate; falls back to the portrait placeholder when a photo exists, when WebGL or the CDN fails
- `Motion: on/off` chip in the topbar overrides the system's reduced-motion setting (stored in localStorage); with motion off the page is fully static and the placeholder returns
- Everything is visible if JS or the CDN fails

## Files
- `index.html` — markup and mocks
- `style.css` — design tokens at the top, then sections, responsive and print styles
- `script.js` — interactions, project preview, skills map, motion
- `images/` — put photos here

## References
Ideas taken from [portfolio-ideas](https://github.com/evavic44/portfolio-ideas), not copied:
Dennis Snellenberg (index rows + pinned preview), Olaolu Olawuyi (editorial rules, vertical meta),
George Francis (one restrained live element), Robb Owen (typographic grid).

Design rules: cream paper + deep green ink + olive/tan accents (Colorhunt 1E3B2F · 7F8C6A · C8B48A · F5F0E6),
Instrument Serif display, IBM Plex Sans body, JetBrains Mono meta, square corners only, no drop shadows.

Projects currently shown (real work in `/home/dpin/docker-dev/src/`): Pengaduan Sekolah (Laravel),
Lost & Found (PHP MVC), L&F port (Next.js + Upstash Redis), plus a Python CLI file organiser.

Print styles included — use the browser's Print / Save as PDF for hand-in.
