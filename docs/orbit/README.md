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

- **Header dropdown:** the former Solar / Aurum / Animorphs button row and the
  separate "Status boards" header link are now one compact
  `<select id="systemMenu">` (Solar, Aurum, Animorphs, Status boards).
  Choosing a system calls the same `setSystem()` as before (same
  `?system=solar|aurum|animorphs` `history.replaceState` behaviour, same
  play/speed/toggle carry-over, selected/time/pan/zoom reset); choosing
  Status boards navigates to `../status/` (the previous header link's href)
  after restoring the select to the active system. The select always shows
  the active system (`ui.system.value = key` in `setSystem`).
- **Tabbed side panel:** "SELECTED BODY" and "ANIMATION" are slim one-line
  text tabs (`#panelTabSelected` / `#panelTabAnimation`, `role=tab`,
  arrow-key switching, rendered as "Selected Body | Animation" with no
  tall button boxes) over one panel box (`#panelSelected` /
  `#panelAnimation`, `role=tabpanel`). Selected Body is the default.
  Switching tabs only toggles `hidden`/`aria-selected` — it never touches
  simulation time, running/static state, or the selected body. All
  pre-existing control ids and handlers (play/pause, Static, speed,
  labels/orbits, scale, reset, eccentricity, apsides, equal-area,
  construction, Lagrange, scale note) are unchanged and live in the
  Animation tab.
- **Panel height = display height:** both the stage and the side panel use
  the same `--display-h: min(64vh, 650px)` token (`.stage` and
  `.side-panel`), with the same 450px floor (460px under 760px, matching
  the stage). The panel is a flex column whose tab panels
  (`flex:1; min-height:0; overflow-y:auto`) scroll internally, so the
  SELECTED BODY box is fixed-size and selection changes cannot shift the
  layout. At a 1280x800 viewport both boxes are 512px tall.
- **Static** (button, `?static=1`, and the default when
  `prefers-reduced-motion` is set): freezes time at day 0, stops the
  animation advance, and uses the v1 framing below. Pressing Play exits
  static (for Solar/Animorphs that means the fit-to-viewport framing
  below; for Aurum, the v1 framing). Pause alone is *not* static.

### Static view now follows Aurum v1 at 83a0596 (corrected)

The 35c5cc2 interpretation (centre *at* 16% width / 82% height, log-compressed
readable radii, angles opening down-and-to-the-right) did **not** match v1.
Reading `git show 83a0596:docs/orbit/app.js` directly:

| v1 (83a0596) | Value | Now in static mode |
|---|---|---|
| `worldToScreen` | `x = W*0.16 + panX + x*56`, `y = H*0.82 + panY - y*56` (Y flipped) | same anchor, same Y flip for all systems |
| System centre | world `(-3, -3)`, i.e. screen `(0.16W - 168, 0.82H + 168)` at the fixed initial zoom 56 px/unit — the star sits just off the lower-left corner | same (offset scales with the user's zoom factor around the initial zoom, so at default zoom it is exactly 168px) |
| Orbits | circles, radii = the `radius` numbers x 56: CHAR 296.8px, FORTUNE 380.8, CRAG 476.0, SOLITAIRE/SOLACE 532.0, AUGUST 644.0, WISP 739.2, MOTHERSHIP 571.2px | Aurum static: literal `au * 56 * zoomFactor`, eccentricity forced to 0 (v1 circles) so Kepler reduces to the v1 angle |
| Starting angles | CHAR 40°, FORTUNE 30°, CRAG 18°, SOLITAIRE 45°, AUGUST 58°, WISP 64°, MOTHERSHIP 28°, drawn up-and-to-the-right | unchanged data; static now flips Y so they again open up-and-to-the-right. On a 900x512 canvas WISP lands at y~-77px — cropped at the top, exactly as in v1 (its y was also negative on v1's stage) |
| Aurum itself | no filled disc: a quarter arc (0-90°) of radius 4.2 units = 235.2px, label `AURUM` at world (1.2, 1.2) = star + (235.2, -235.2)px | same arc and label position in Aurum static; no gold centre dot in that mode |
| Bodies | paper `#f6f1e5` fill, ink `#161616` stroke (1.3px, 2.7 selected), sizes `size*56` (CHAR 10.1px ... AUGUST 19.6px), dashed `[5,6]` orbit circles in `#81796c`, ring ellipses for SOLITAIRE/AUGUST, FORTUNE/SOLITAIRE companion dots, CRAG as a 6-dot cluster, MOTHERSHIP a 3px ink dot | all reproduced in Aurum static (`drawV1Body`); body size is recovered as `radiusKm/150000*56` because v3 stored `size` that way |

Deliberate deviations, because v1 was Aurum-only:

- **Solar / Animorphs static** have no v1 counterpart. They keep the
  day-0 freeze and Y flip, but are re-centred on the viewport centre and
  **fit-to-viewport** (`staticFit()` in `app.js`, recomputed on every
  draw, so it tracks resize): the outermost orbit's semi-major axis is
  scaled to `0.96 x min(W,H)/2`, i.e. its edge sits ~2% of the viewport
  height from the nearest edge, under both the readable (log-spaced) and
  realistic-ish (linear) settings — only the relative spacing of the
  inner orbits differs between the settings, and the ellipse/foci
  geometry scales through the same `axis()` value, so overlays stay
  consistent. Outermost bodies: Solar = Neptune (30.069 AU), Animorphs
  = Leera (slot 5). At a 900x512 canvas the fitted radius is 245.8px in
  both systems/settings (before: Solar 200.0px readable / 180.1px
  realistic-ish; Animorphs 98.7px readable / 30.0px realistic-ish).
  A literal 56 px-per-AU Solar view would put Neptune ~1680px out, so
  the v1 pixel scale itself is not reused outside Aurum.
- **Multi-mode scale controls:** in Aurum static the Scale select and Reset
  no longer shrink the view to the readable scale's zoom (that would break
  the 56 px/unit derivation); they keep the system initial zoom. Ellipse
  overlays (apsides/area/construction/Lagrange) still work in static for
  Solar/Animorphs; in Aurum static the eccentricity slider is overridden
  to circles, as in v1.
- The star's centre is off-canvas in Aurum static (as in v1), so it is
  selectable via the body buttons rather than by clicking its centre; its
  quarter arc and label are the visible part.

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
