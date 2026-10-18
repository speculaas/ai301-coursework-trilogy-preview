> Extracted from `BUNDLE_watch_dedup_watch7_m365_v2.txt` SECTION 1 (v2, supersedes v1 bundle; source files not included here; paste into M365 together with the v2 bundle or regenerate bundle).
> Verbatim Section 1 extract — prompt wording matches v2 bundle SECTION 1; bundle = this prompt + source context (Sections 2-7 incl. 6H watch.html / 6I watch3.html). Redundancy check: 0 copied source blocks in this file; only filenames/identifiers/storage keys are repeated from repo sources (no watch*.js/html source duplicated) — standalone file is paste-text only, without the bundle Copilot lacks Sections 2+ context.
> v2 changes (2026-10-18, per Copilot turn4): Step 0 constraints added (watch1 no-op history hooks, watch3 migration adapter + DECISION/data-safety, watch5 clean port); watch.html/watch3.html now in bundle, no extra uploads.

# PROMPT — watch de-duplication (1/3/5 → -core) + watch 7 design, for M365 Copilot — v2 (prompt extract)

# PROMPT — watch de-duplication (1/3/5 → -core) + watch 7 design, for M365 Copilot — v2

> Use with `BUNDLE_watch_dedup_watch7_m365_v2.txt` (v2, supersedes `BUNDLE_watch_dedup_watch7_m365.txt` v1): upload ONLY that bundle (1 file — no extra uploads needed; `watch.html`/`watch3.html` are now inside as SECTION 6H/6I) and paste: "Follow SECTION 1 PROMPT in the attached file. Return Part A, Part B, Risks and Manual test checklist in that order."

You are working on a small local citation-graph viewer (no build step, vanilla JS, served locally on `:8000`, data from a local `/api/graph?graph=...` endpoint). Sources are in SECTIONS 2-7 of the bundle (incl. 6H/6I added in v2). Analyse the ACTUAL included sources — do not invent an API. Mark anything you cannot verify from them `[unverified]`. No placeholders, no TODO, no truncated files.

## STEP 0 — Constraints from Copilot turn4 review (dialogue-dlg-m365-40265e47-turn4, 2026-10-18 — already done, do NOT redo or re-request)

A previous Copilot pass reviewed v1, requested `watch.html` + `watch3.html`, and analysed the three faces. Those two files are NOW INCLUDED (SECTION 6H: `watch.html`, SECTION 6I: `watch3.html`), so:
- Do NOT ask for more files before implementing, and do NOT mark watch1/watch3 HTML structure (headings, controls, DOM ids, SVG history-tree containers, structural classes) as `[unverified]` on grounds of missing HTML — verify it from 6H/6I. `[unverified]` is now only for things genuinely absent from ALL included sources.
- Turn4 findings below are STARTING CONSTRAINTS to verify against the sources, not conclusions to copy blindly. If a source contradicts a turn4 claim, say so explicitly.

### Watch 1 (turn4: NOT config-only)
- `src/watch.js` has no saved history/visits model; `watch-core.js` always runs `loadNavState(); renderRecent(); renderHistory();` and its default `renderTreeView`/`renderBreadcrumb` hooks throw "renderer not installed".
- Therefore watch 1 needs at least: `historyModel: "none"` OR no-op renderer hooks. CHOOSE THE MINIMAL OPTION and justify it: prefer no-op hooks installed in `src/watch1-core.js` + the hidden/compatible DOM containers the core expects, with NO change to `watch-core.js`, unless you prove that cannot run — only then propose `historyModel:"none"` as a clearly separated OPTIONAL core patch (flag regression risk for watch 2/4/6, do not bake it in).
- Flag the behavioural delta either way: the core will still maintain history internally even if the watch 1 UI hides it.

### Watch 3 (turn4: storage schema INCOMPATIBLE — highest risk)
- Original keys: `bcg.watch3.tree.<graph>`, `bcg.watch3.visits.<graph>`; it also reads old watch 2 state from `bcg.watch.history.<graph>` / `bcg.watch.visits.<graph>`.
- Stored tree schema differs and is NOT interchangeable: watch 3 uses fields incl. `nextId`, `migrated`, `lastVisited`, `source`; the shared core uses `seq`, `clock`, `time`, `edge`.
- DATA-SAFETY WARNING (state this verbatim in your answer): never point the core at the old schema directly — do NOT simply set `storagePrefix: "bcg.watch3"`, or the core may mis-read existing trees, mis-allocate sequence, mis-order branches, or mutate saved state.
- A migration adapter design is REQUIRED (A2/A4 for watch 3): one-time, read-only migration from `bcg.watch3.*` to a NEW distinct prefix (suggest a name, e.g. `bcg.watch3core`, and justify it), leaving old keys untouched, writes only to the new prefix, adapter runs BEFORE the core loads state.
- DECISION REQUIRED — flag explicitly at the top of Part A / watch 3: v1 asked to "preserve the original keys", but the safest option (read-only migration to a new prefix) does NOT continue writing to the original keys. Present this as an explicit decision point with your recommendation and trade-offs; do NOT silently preserve keys and do NOT silently switch prefixes.

### Watch 5 (turn4: cleanest port)
- Straightforward: history/tree-layout/Mermaid/migration already essentially match `watch-core.js` + `watch6-core.js`/`watch6-core.html`. Keys: `bcg.watch5.tree.<graph>`, `bcg.watch5.visits.<graph>`, `bcg.watch5.zoom`. Follow the watch 6 thin-renderer pattern, change `storagePrefix: "bcg.watch5"` (+ Watch 5 class/labels). A renderer hook is needed; NO `watch-core.js` change is expected — if you think one is, prove why.

## What exists (verify against the sections, correct me if wrong)

- Plain faces: `watch.html` (SECTION 6H) + `src/watch.js` (watch 1), `watch3.html` (SECTION 6I) + `src/watch3.js`, `watch5.html` (SECTION 6D) + `src/watch5.js` — each a largely self-contained copy (data load, honeycomb layout, canvas draw, search/detail, history). `watch5.js`/`watch6.js` were measured at ~91% shared long lines; 1/3/5 were never de-duplicated.
- Shared core: `src/watch-core.js` (~150 long lines, SECTION 3). A page sets `window.WATCH_CONFIG` inline BEFORE loading it, then loads a thin renderer script. Config fields (from its header): `canvasId`, `storagePrefix`, `historyModel` (`tree`|`linear`), `renderer` (`mermaid`|`svg-tree`|`breadcrumb`, informational), `layers`, `hoverEdges`, `importFromWatch2`, `trailWidth`, `trailDash`. The renderer script installs hooks the core calls (notably `renderTreeView(L)` / `renderBreadcrumb()`; the core's defaults throw "renderer not installed"). Defaults reproduce watch 6.
- Existing thin examples (SECTION 5): `src/watch2-core.js`, `src/watch4-core.js`, `src/watch6-core.js` + their HTML (SECTION 6: `watch2-core.html`, `watch4-core.html`, `watch6-core.html`). Follow THIS naming/loading pattern exactly: new pages `watch1-core.html`, `watch3-core.html`, `watch5-core.html`; new thin scripts `src/watch1-core.js`, `src/watch3-core.js`, `src/watch5-core.js`. Subject to the Watch 3 DECISION above, preserve each original's localStorage keys / migration behaviour (state them per face) so existing saved trails/visits are not silently lost — for watch 3, "preserve" means the adapter/migration in Step 0, never direct core reads of the old schema.
- NOT included, deliberately: full plain `src/watch2.js`, `src/watch4.js`, `src/watch6.js`. Reason: the target pattern is already shown by their `-core` renderers + the core, and including three more ~20–30 KB near-copies would drown the diff analysis. If a Part A conclusion truly needs one of them, say which file and why instead of guessing.
- Watch 7 plan note is SECTION 7 (`NOTE_watch7_orbit_plan_2026-10-18.md`, canonical in the bib repo). Treat it as the spec for Part B; do not contradict it without flagging why.

## PART A — DE-DUPLICATE watch 1, 3, 5 onto watch-core (implementation)

For EACH of watch 1, 3, 5 separately:

A1. Behaviour inventory: what the plain file does that the core does / does not already provide (map each function/behaviour in `watch.js` / `watch3.js` / `watch5.js` to: core-provided, config-only, renderer-hook, or NOT portable). Be specific with function names from the included sources.
A2. Verdict per face, explicitly: (i) config-only possible, (ii) config + renderer hook needed (name the hook, e.g. a `renderTreeView` variant, and why), or (iii) cannot be faithfully ported without changing `watch-core.js` — say so and do NOT force-fit; propose the smallest core change instead and flag its regression risk for watch 2/4/6. Apply Step 0: watch 1 = minimal no-op-hook choice unless disproven, watch 3 = migration adapter + DECISION, watch 5 = clean port.
A3. Per-file diff plan: table file-by-file (new/changed/untouched). Originals `watch.html`, `watch3.html`, `watch5.html`, `src/watch.js`, `src/watch3.js`, `src/watch5.js` and ALL existing `-core` files must stay UNTOUCHED — your deliverable is only the six new files (3 HTML + 3 JS), plus (only if A2-iii applies) a clearly separated optional core patch that I may reject.
A4. Full new files: complete `watch1-core.html`, `src/watch1-core.js`, `watch3-core.html`, `src/watch3-core.js`, `watch5-core.html`, `src/watch5-core.js` — paste-ready, following the `WATCH_CONFIG` inline-script → `watch-core.js` → renderer-script load order of SECTION 6, reusing `src/watch-core.css` (say if a face needs extra CSS and give it as a separate small file, not an edit to shared CSS). Base watch1/watch3 HTML structure on SECTION 6H/6I originals (headings, controls, ids, containers), not invention. Where a face's original behaviour cannot be reproduced, the file must still run and you must list the behavioural delta in A1/A5 rather than silently dropping it.
A5. Regression checklist per face: original vs `-core` side-by-side checks (first load, `?graph=` switching, search, click/re-centre, history/trail persistence across reload — for watch 3 explicitly with the migration adapter: old keys untouched/read-only, new prefix written, reload re-reads migrated state; keyboard, layers toggle if any, canvas-missing error), plus "existing 2/4/6-core pages unchanged" checks.

## PART B — DESIGN watch 7 (design only, no implementation beyond skeleton)

Per SECTION 7 only: orbital/BFS renderer (`renderer:'orbit'` concept), focus paper at centre, ring k = undirected BFS distance k, depth cap + `+N more`, sibling-sector angles, node size ~log(degree), dimmed chords with hover highlight, click-to-re-centre, rotation off by default, static mode (`?static=1`, `prefers-reduced-motion`, export), keyboard (within/across rings, Enter re-centres), local `:8000` hosting only, and the Pages link option (option C: a clearly labelled local-only link, never merging planets/papers into the gitGraph board viewer).

Return:
B1. Design doc (short): data flow from the same `?graph=` papers/edges schema, BFS/layout algorithm, what is reused from `watch-core.js` vs genuinely new, and the open questions in SECTION 7 (depth cap measurement, animate-vs-snap) with your recommendation.
B2. `WATCH_CONFIG` skeleton for a future `watch7-core.html` (config object only, plus the file/skeleton list: HTML, `src/watch7-core.js` renderer hook signatures, any CSS) — skeleton, not a full renderer.
B3. Risks + what to test by hand at `:8000` for watch 7, and what must be measured on the real `work-threads` graph before building it.

## RETURN FORMAT (exactly)

1. PART A: A1–A5 per face (1, then 3, then 5), with the six full files in fenced blocks labelled by filename. Watch 3 section must open with the DECISION + data-safety warning from Step 0.
2. PART B: B1–B3 (design + skeleton only).
3. RISKS: anything that could break watch 2/4/6-core, saved localStorage state, or the `:8000` API assumptions.
4. MANUAL TEST CHECKLIST: copy-pasteable list for `:8000` (name the exact URLs, e.g. `/watch1-core.html?graph=work-threads`).

Do not edit or reprint the original files. If you conclude a face should stay un-ported, that is an acceptable answer — argue it from the sources.

