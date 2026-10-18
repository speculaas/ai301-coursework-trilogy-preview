# Iteration 3 design and integration notes

## PART A - Three modes in one page

Recommendation: one shared page and renderer. URLs are `./orbit/?system=solar`, `?system=aurum`, and `?system=animorphs`. Header buttons update the query string with `history.replaceState`. Play state, speed, visibility toggles, and math-overlay choices carry across modes; selected body, simulation time, pan, and zoom reset because body identities and scales change. This avoids duplicate interaction code and remains mobile-friendly. Separate folders would provide isolation but duplicate the engine and make fixes drift.

## PART B - Springer-inspired features

Implemented: focus-centred ellipses, body eccentricity, exaggeration slider, apsis markers, seven-iteration Kepler equation solution, approximate equal-area wedge, axes/foci/pins-and-string overlay, and schematic L1–L5 labels. Solar uses published approximate eccentricities. Aurum values are invented and labeled. Animorphs slots are non-canon. True restricted-three-body Lagrange calculation is **cut** because masses and coherent shared systems are absent; pretending otherwise would be misleading.

## PART C - Animorphs

Earth is the human homeworld and main setting. The page adds the descriptively named Andalite, Yeerk and Hork-Bajir homeworlds plus Leera. They are not one solar system in canon, so the common diagram is labeled a non-canon comparative collection. It uses generic circles, premise-level summaries and `[unverified]` labels. A fan should verify whether the three descriptive homeworlds are ever canonically named, and the Leera, Kandrona and psychic-species details against primary books before publication.

## PART D - Watch integration

A. Papers/edges mapping: planet=paper, star=hub, orbit=edge. Effort M–L; corrupts citation semantics and moving layout conflicts with honeycomb focus. Reject.

B. Orbit background: effort M; animation competes with hit regions and readability and risks shared `watch-core.js` behavior across watch2/4/6. Reject.

C. Linked views: effort S. Keep bodies and papers in their native schemas. Recommend now. Static Pages cannot call the local Python `/api`. A Pages-to-local link must say local-only: `http://127.0.0.1:8000/watch6-core.html?graph=work-threads`. A local Watch link can target the published orbit page with `?system=solar`, or a local preview at `http://127.0.0.1:8766/orbit/?system=solar`.

D. Future `watch7-core.html`: effort L. Fork configuration with `bcg.watch7`, introduce a separate orbital renderer, and leave shared core untouched unless watch2/4/6 all receive regression tests. Consider only if genuine graph/orbit domain data appears. Recommend C now, D later only with a concrete use case.

## PART E - Implementation

Full replacements are safer than a patch because v3 changes the data model, rendering geometry, controls and URL state. No status or root changes are required: the existing Orbit link reaches the Solar default, while mode buttons produce shareable URLs.

## PART F - Verification

1. Run `node --check docs/orbit/app.js`.
2. Serve `python3 -m http.server 8766 --directory docs`.
3. Check `/orbit/?system=solar`, `aurum`, `animorphs`.
4. Click every body; use body buttons and canvas arrows/Enter.
5. Exercise eccentricity, apsides, sweep, construction and schematic Lagrange overlays.
6. Confirm `[unverified]` remains visible in Animorphs.
7. Confirm `/status/?board=shinkansen` is unchanged.
8. Test 390 px, reduced motion, mouse, touch/pinch and keyboard.
9. Push, wait for Pages, hard-refresh.

Not verified here: browser rendering on the target Mac, live Pages deployment, the local watch API, and primary-text Animorphs canon claims.
