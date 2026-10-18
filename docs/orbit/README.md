# Orbit Explorer v3

Three modes share one dependency-free Canvas engine:

- `?system=solar`: Sun and eight planets, Kepler-style elliptical approximation.
- `?system=aurum`: intact Aurum v1 names and extras. Fictional eccentricities are explicitly invented.
- `?system=animorphs`: Earth plus selected alien homeworlds. These canonically belong to different systems; the shared diagram is explicitly non-canon. Uncertain facts are marked `[unverified]` and should be checked against the books or a reliable reference. No copyrighted prose or images are included.

## Versions

- v1: Aurum fictional system.
- v2: real Solar System.
- v3: multimode architecture, elliptical motion, eccentricity exaggeration, apsides, approximate equal-area sweep, ellipse construction, and schematic Lagrange points.

Feature inspiration: Mordechai Ben-Ari, *The Geometry of Ellipses and Planetary Orbits*, Springer (2026), Open Access, DOI: https://doi.org/10.1007/978-3-032-26272-1. The implementation and diagrams are original and do not reproduce the book.

The L1–L5 overlay is intentionally schematic, not a numerical restricted three-body calculation. Solar motion solves Kepler's equation iteratively from mean anomaly to eccentric anomaly. This remains educational, not an ephemeris.

```bash
python3 -m http.server 8766 --directory docs
```

Edit `systems`, `solar`, `aurum`, and `anim` near the top of `app.js`. Keep uncertainty labels visible.

## Credit / provenance

- v3 package: M365 Copilot, dialogue `dlg-m365-40265e47` turn 3 (`dialogue-dlg-m365-40265e47-turn3.json`, kept in the local copilot pack, not committed), delivered as `orbit-v3-followup.zip` in response to follow-up prompt v2 (`417a63a`). Installed 2026-10-18 (America/Denver).
- Design rationale: see `DESIGN.md` in this folder (Copilot iteration-3 notes, Parts A-F).
- Prior versions preserved in git history: v1 Aurum (`83a0596`), v2 Solar (`a6cabc1`).

## Controls layout & Static view (2026-10-18, edited here, not Copilot)

- The animation controls (play/pause, **Static**, speed, labels/orbits toggles, scale,
  reset, plus the ellipse/math overlay controls and scale note) now live in a
  **scrollable fixed-height panel (`.anim-panel`, 210px, `overflow-y:auto`) directly
  below the SELECTED BODY panel** in the sidebar, instead of under the canvas.
  All element ids are unchanged; the canvas/stage is untouched. On narrow screens the
  sidebar stacks below the stage, so the panel still follows SELECTED BODY.
- **Static** (button, `?static=1`, and the default when `prefers-reduced-motion`
  is set): freezes time at a fixed epoch (day 0, each body's starting angle),
  stops the animation advance, and uses the **quarter-circle framing** below.
  Pressing Play exits static. Pause alone is *not* static — pause keeps the
  current epoch and the centred framing.

### What "original quarter circle view" was interpreted as

Aurum v1 (`83a0596`, `docs/orbit/app.js` in git history) drew the system from a
hand sketch: `worldToScreen` placed the centre at **16% of the width, 82% of the
height** (lower-left), at a fixed initial zoom, and drew a decorative
**quarter arc (0–90°)** as "Aurum's organic edge". Bodies started at fixed angles
(18–64°) in that quarter. So "quarter circle view" here means: **centre near the
lower-left, orbits opening up-and-to-the-right like the original sketch, at a
fixed epoch** — not "show only 90° of each orbit". Static mode therefore sets the
centre to `(0.16·W, 0.82·H)` (plus any user pan) and day 0. *Uncertainty flagged:*
if the intent was instead cropping to a 90° wedge, that is a different feature;
the framing interpretation was chosen because it matches v1's actual code.

## Watch 7

A plan/design note for a possible orbital *citation-graph* renderer
(`watch7-core.html`, BFS rings around a focus paper, `?static=1`, option-C linked
hosting) lives at
[`beat-2-contribution/unit-5/2026-10-18-watch7-orbit-plan.md`](../../beat-2-contribution/unit-5/2026-10-18-watch7-orbit-plan.md).
Plan only — not implemented; the orbit page and the watch faces stay separate views.

## Known limits (verified on install)

- Central body is drawn at the selected orbit's focus offset; other orbits share the same centre, so only the selected orbit's focus is exact - illustrative, not a multi-focus diagram.
- L1-L5 overlay and equal-area sweep are schematic/approximate (see above); Aurum eccentricities are invented and Animorphs layout is non-canon, both labelled in-page.
- No watch-face cross-link was added in v3 (Part D recommended linked views, but no link was implemented in the page).
