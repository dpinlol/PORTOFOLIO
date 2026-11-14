# The Art of Becoming
## An Immersive 3D Developer Portfolio & Digital Exhibition

> *"An empty canvas becomes a self-portrait, and the self-portrait becomes a collection of creative work."*

**The Art of Becoming** is an interactive 3D digital exhibition created for **Devin (`dpinlol`)**, a software engineering student and interface developer based in Indonesia. Rather than presenting a conventional grid of project cards, the visitor enters a minimalist, north-lit artist studio and explores the developer's identity through the act of painting.

---

## 1. Creative Direction & Storytelling

The experience is structured as an exhibition in five acts / seven scenes, driven continuously and reversibly by scroll progress:

1. **Scene 01 — The Blank Canvas**
   - The visitor enters a quiet, dimly lit artist studio with soft directional light, ambient shadows, and atmospheric dust.
   - An empty linen painting canvas rests on a hand-crafted wooden easel with an oil jar and brush on the ledge.
   - Subtle scroll cue guides the visitor forward; no competing conventional navigation.

2. **Scene 02 — Approaching the Canvas**
   - As the visitor scrolls, the camera glides smoothly forward toward the canvas.
   - Canvas proportions, fabric weave, and surface depth become tactile and prominent while background elements fade.

3. **Scene 03 — The Self-Portrait**
   - Progressive brushstrokes and speckle noise sweep downward across the canvas surface using a custom Three.js shader chunk (`uReveal`).
   - The ink lines and warm clay washes complete an original figure study.
   - Once complete, Devin's professional identity, focus statement, and student background are revealed alongside the canvas.

4. **Scene 04 — The Transformation**
   - The central canvas dissolves and divides outward in space: *"One canvas, many creations."*
   - Camera pulls back to reveal the open gallery room as canvases separate and float into their spatial positions.

5. **Scene 05 — The Project Exhibition**
   - Five independent floating canvases form an interactive exhibition in the 3D studio:
     1. **Seapedia** (COMPFEST 18 multi-role marketplace)
     2. **u-FIND2** (Serverless Upstash Redis lost-and-found port)
     3. **U-Find** (Native PHP MVC school lost-and-found desk)
     4. **Perpustakaan Sekolah** (UKK competency exam digital library)
     5. **Ruang Editing** (Cinematic film study interface)
   - Each canvas has restrained physical floating motion, responsive hover feedback (canvas turns toward the visitor, warm spot-lighting intensifies), and direct click/touch handling.
   - Below the 3D stage, an interactive catalogue rail provides direct keyboard-accessible navigation and quick-jump triggers.

6. **Scene 06 — Project Case Studies**
   - Selecting any canvas or index item smoothly opens a high-editorial exhibition case study dialog.
   - Each case study contains real, uninvented data: overview, problem statement, objectives, role, stack, development process, technical challenges with concrete solutions, visual demonstrations, and verified links (GitHub repository, live preview, API documentation).

7. **Scene 07 — Beyond the Canvas**
   - The studio seamlessly rolls up into tactile warm paper (`#D8C9B3` / `#F2EBDD`):
     - **About**: Approach to software craftsmanship, schema design, and interface usability.
     - **Materials & Tools**: Meaningfully organized skill groups (Languages, Frontend, Backend, Data, Tools, Practice) with honest notes.
     - **Exhibitions & Studies**: Chronological timeline of competitions, exams, and releases.
     - **Contact**: Email copy trigger, direct mailto link, GitHub link, and return-to-canvas smooth navigation.

---

## 2. Visual Identity & Design Tokens

### Color Palette
- **Canvas Ivory**: `#F2EBDD` — Primary surface and light text highlights
- **Warm Paper**: `#D8C9B3` — Editorial background transitions and italic accents
- **Muted Clay**: `#A58A70` — Linework, secondary borders, and warm wash accents
- **Ink Brown**: `#51483E` — Editorial typography, captions, and fine details
- **Charcoal**: `#292823` & `#211F1B` — Deep studio atmosphere and shadows

### Typography
- **Editorial Serif**: `Fraunces` (variable optical size `opsz`, `WONK`, `SOFT`)
- **Interface Sans**: `DM Sans` (clean, highly readable interface typography)
- All fonts are self-hosted locally in `public/fonts/` as `.woff2` for performance and zero external font dependency.

---

## 3. Architecture & Codebase Structure

The project is built with **Three.js**, **GSAP & ScrollTrigger**, **TypeScript**, and **Vite**:

```
portfolio/
├── index.html                   # Semantic HTML structure, meta tags, and WebGL fallback
├── package.json                 # Scripts and pinned dependencies (three, gsap, typescript, vite)
├── tsconfig.json                # Strict TypeScript configuration
├── public/
│   ├── assets/
│   │   └── projects/            # Real project screenshots and WebP previews
│   ├── fonts/                   # Fraunces and DM Sans self-hosted woff2 files
│   └── favicon.svg              # Custom studio mark
└── src/
    ├── main.ts                  # Boot lifecycle, WebGL check, ScrollTrigger & section sync
    ├── data/
    │   ├── profile.ts           # Real profile, bio, skills grouping, and achievements
    │   └── projects.ts          # Comprehensive real case studies for all 5 projects
    ├── experience/
    │   ├── Experience.ts        # Three.js orchestration, camera curves, RAF loop, raycaster
    │   ├── math.ts              # Interpolation, clamp, damp, smoothstep, camera key sampling
    │   ├── textures.ts          # Linen canvas generator, procedural project textures, image loader
    │   ├── artwork.ts           # Box canvas geometry, paint shader chunk with uReveal & noise
    │   ├── easel.ts             # 3D studio wooden easel and shelf structure
    │   ├── studio.ts            # Studio floor, walls, north-light spot, and ambient light
    │   └── gallery.ts           # 5 floating canvases with desktop/mobile slots and idle physics
    ├── ui/
    │   ├── overlay.ts           # Scene copy orchestration (intro, approach, portrait, transform, gallery)
    │   ├── caseStudy.ts         # Modal dialog management, accessibility focus trap, Esc key
    │   └── content.ts           # Populates About, Skills, Timeline, and Contact sections
    └── styles/
        ├── index.css            # Style aggregator
        ├── base.css             # Design tokens, studio stage, 3D overlays, chapter rail
        ├── content.css          # Paper sections, ledger, timeline, skill groups, contact
        ├── case-study.css       # Exhibition case study dialog and typography
        └── responsive.css       # Mobile breakpoints, touch sizing, and compact gallery
```

---

## 4. Key Engineering Invariants & Optimization

- **Single Source of Truth for Progress**:
  The 3D loop in `Experience.ts` interpolates scroll targets with dampening (`damp(current, target, 6.5, dt)`). The HTML overlay is updated in exact synchrony from `Experience`'s `applyProgress` call, eliminating jitter and cross-talk.
- **Zero Text Ghosting**:
  Scene transition windows (`intro`, `approach`, `portrait`, `transform`, `gallery`) are spaced so adjacent text blocks never overlap or occupy the same viewport coordinates simultaneously.
- **Dynamic Pin-Spacer Awareness**:
  Section transitions (`#about`, `#contact`) measure live element positions (`getBoundingClientRect().top`) inside the scroll listener rather than relying on stale trigger positions, ensuring reliability across viewports and font loads.
- **Touch & Mobile Support**:
  Floating project canvases are arranged in a 2×2+1 composition on mobile viewports (`< 860px`). Canvases are directly touch-interactive via pointerdown/up distance heuristics, with dedicated high-contrast project index buttons.
- **Accessibility & Reduced Motion**:
  - Full support for `prefers-reduced-motion: reduce`: camera damping is bypassed, canvas positions update immediately, and parallax is silenced.
  - Complete WebGL Fallback: browsers without WebGL display `#fallback`, presenting the entire exhibition as a clean editorial catalogue with figure study illustrations.
  - Full keyboard support: accessible tab stops, `<dialog>` with `aria-labelledby`, Esc key to close, and focus restoration to the trigger element.

---

## 5. Development & Build

### Install Dependencies
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```

### Production Build & Typecheck
```bash
npm run build
```
This runs `tsc --noEmit` followed by `vite build`, outputting optimized assets into `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 6. Asset Customization

- **Portrait Asset**:
  The figure study on the main canvas is an original artistic sample designed to indicate a human figure without fabricating likeness. To supply an authentic portrait, place a square/portrait WebP image at `public/assets/portrait.webp` and update `topTexture` in `Experience.ts` or `profile.ts`.
- **Project Previews**:
  Project imagery is located in `public/assets/projects/` (`seapedia.webp`, `ruang-editing.webp`). Projects with interactive interface studies (`u-FIND`, `u-FIND2`, `Perpustakaan`) render crisp canvas studies drawn from the application layout.
