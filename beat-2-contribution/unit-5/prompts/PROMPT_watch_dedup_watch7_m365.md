> Extracted from `BUNDLE_watch_dedup_watch7_m365.txt` (source files not included; paste into M365 together with the bundle or regenerate bundle).
> Verbatim Section 1 extract — 100% match vs `BUNDLE_watch_dedup_watch7_m365.txt` checked 2026-10-18 (America/Denver); bundle = this prompt + source context (Sections 2-7). Redundancy check: 0 copied source blocks; backticked filenames/identifiers = 19.7% of prompt, no repo source duplicated.
> Standalone reuse is paste-text only: without the bundle, Copilot lacks the Sections 2+ source context (watch-core.js, watch/watch3/watch5 sources, -core examples, watch7 NOTE).

# PROMPT — watch de-duplication (1/3/5 → -core) + watch 7 design, for M365 Copilot

> Use with `BUNDLE_watch_dedup_watch7_m365.txt`: upload ONLY that bundle (1 file) and paste: "Follow SECTION 1 PROMPT in the attached file. Return Part A, Part B, Risks and Manual test checklist in that order."

You are working on a small local citation-graph viewer (no build step, vanilla JS, served locally on `:8000`, data from a local `/api/graph?graph=...` endpoint). Sources are in SECTIONS 2–6 of the bundle. Analyse the ACTUAL included sources — do not invent an API. Mark anything you cannot verify from them `[unverified]`. No placeholders, no TODO, no truncated files.

## What exists (verify against the sections, correct me if wrong)

- Plain faces: `watch.html`+`src/watch.js` (watch 1), `watch3.html`+`src/watch3.js`, `watch5.html`+`src/watch5.js` — each a largely self-contained copy (data load, honeycomb layout, canvas draw, search/detail, history). `watch5.js`/`watch6.js` were measured at ~91% shared long lines; 1/3/5 were never de-duplicated.
- Shared core: `src/watch-core.js` (~150 long lines, SECTION 3). A page sets `window.WATCH_CONFIG` inline BEFORE loading it, then loads a thin renderer script. Config fields (from its header): `canvasId`, `storagePrefix`, `historyModel` (`tree`|`linear`), `renderer` (`mermaid`|`svg-tree`|`breadcrumb`, informational), `layers`, `hoverEdges`, `importFromWatch2`, `trailWidth`, `trailDash`. The renderer script installs hooks the core calls (notably `renderTreeView(L)` / `renderBreadcrumb()`; the core's defaults throw "renderer not installed"). Defaults reproduce watch 6.
- Existing thin examples (SECTION 5): `src/watch2-core.js`, `src/watch4-core.js`, `src/watch6-core.js` + their HTML (SECTION 6: `watch2-core.html`, `watch4-core.html`, `watch6-core.html`). Follow THIS naming/loading pattern exactly: new pages `watch1-core.html`, `watch3-core.html`, `watch5-core.html`; new thin scripts `src/watch1-core.js`, `src/watch3-core.js`, `src/watch5-core.js`. Preserve each original's localStorage keys / migration behaviour (state them per face — e.g. what the original read/wrote) so existing saved trails/visits are not silently lost.
- NOT included, deliberately: full plain `src/watch2.js`, `src/watch4.js`, `src/watch6.js`. Reason: the target pattern is already shown by their `-core` renderers + the core, and including three more ~20–30 KB near-copies would drown the diff analysis. If a Part A conclusion truly needs one of them, say which file and why instead of guessing.
- Watch 7 plan note is SECTION 7 (`NOTE_watch7_orbit_plan_2026-10-18.md`, canonical in the bib repo). Treat it as the spec for Part B; do not contradict it without flagging why.

## PART A — DE-DUPLICATE watch 1, 3, 5 onto watch-core (implementation)

For EACH of watch 1, 3, 5 separately:

A1. Behaviour inventory: what the plain file does that the core does / does not already provide (map each function/behaviour in `watch.js` / `watch3.js` / `watch5.js` to: core-provided, config-only, renderer-hook, or NOT portable). Be specific with function names from the included sources.
A2. Verdict per face, explicitly: (i) config-only possible, (ii) config + renderer hook needed (name the hook, e.g. a `renderTreeView` variant, and why), or (iii) cannot be faithfully ported without changing `watch-core.js` — say so and do NOT force-fit; propose the smallest core change instead and flag its regression risk for watch 2/4/6.
A3. Per-file diff plan: table file-by-file (new/changed/untouched). Originals `watch.html`, `watch3.html`, `watch5.html`, `src/watch.js`, `src/watch3.js`, `src/watch5.js` and ALL existing `-core` files must stay UNTOUCHED — your deliverable is only the six new files (3 HTML + 3 JS), plus (only if A2-iii applies) a clearly separated optional core patch that I may reject.
A4. Full new files: complete `watch1-core.html`, `src/watch1-core.js`, `watch3-core.html`, `src/watch3-core.js`, `watch5-core.html`, `src/watch5-core.js` — paste-ready, following the `WATCH_CONFIG` inline-script → `watch-core.js` → renderer-script load order of SECTION 6, reusing `src/watch-core.css` (say if a face needs extra CSS and give it as a separate small file, not an edit to shared CSS). Where a face's original behaviour cannot be reproduced, the file must still run and you must list the behavioural delta in A1/A5 rather than silently dropping it.
A5. Regression checklist per face: original vs `-core` side-by-side checks (first load, `?graph=` switching, search, click/re-centre, history/trail persistence across reload with the ORIGINAL's saved keys, keyboard, layers toggle if any, canvas-missing error), plus "existing 2/4/6-core pages unchanged" checks.

## PART B — DESIGN watch 7 (design only, no implementation beyond skeleton)

Per SECTION 7 only: orbital/BFS renderer (`renderer:'orbit'` concept), focus paper at centre, ring k = undirected BFS distance k, depth cap + `+N more`, sibling-sector angles, node size ~log(degree), dimmed chords with hover highlight, click-to-re-centre, rotation off by default, static mode (`?static=1`, `prefers-reduced-motion`, export), keyboard (within/across rings, Enter re-centres), local `:8000` hosting only, and the Pages link option (option C: a clearly labelled local-only link, never merging planets/papers into the gitGraph board viewer).

Return:
B1. Design doc (short): data flow from the same `?graph=` papers/edges schema, BFS/layout algorithm, what is reused from `watch-core.js` vs genuinely new, and the open questions in SECTION 7 (depth cap measurement, animate-vs-snap) with your recommendation.
B2. `WATCH_CONFIG` skeleton for a future `watch7-core.html` (config object only, plus the file/skeleton list: HTML, `src/watch7-core.js` renderer hook signatures, any CSS) — skeleton, not a full renderer.
B3. Risks + what to test by hand at `:8000` for watch 7, and what must be measured on the real `work-threads` graph before building it.

## RETURN FORMAT (exactly)

1. PART A: A1–A5 per face (1, then 3, then 5), with the six full files in fenced blocks labelled by filename.
2. PART B: B1–B3 (design + skeleton only).
3. RISKS: anything that could break watch 2/4/6-core, saved localStorage state, or the `:8000` API assumptions.
4. MANUAL TEST CHECKLIST: copy-pasteable list for `:8000` (name the exact URLs, e.g. `/watch1-core.html?graph=work-threads`).

Do not edit or reprint the original files. If you conclude a face should stay un-ported, that is an acceptable answer — argue it from the sources.
