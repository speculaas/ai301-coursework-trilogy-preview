> Extracted from `BUNDLE_orbit_followup_m365.txt` (source files not included; paste into M365 together with the bundle or regenerate bundle).
> Verbatim Section 1 extract — 100% match vs `BUNDLE_orbit_followup_m365.txt` checked 2026-10-18 (America/Denver); bundle = this prompt + source context.
> Standalone reuse is paste-text only: without the bundle, Copilot lacks the Sections 2+ source context.

# PROMPT - orbit follow-up (iteration 2) for M365 Copilot

> Use with `BUNDLE_orbit_followup_m365.txt`: upload ONLY that bundle (1 file) and paste: "Follow SECTION 1 PROMPT in the attached file." Same prompt saved separately for reuse. Built 2026-10-18 (America/Denver).

---

You are designing ITERATION 2 of a small static orbit/planet page. Design first, implement second: return design rationale + COMPLETE paste-ready files (or exact patches) in the order below. No placeholders, no TODO, no truncated code, no invented facts - mark anything you cannot verify [unverified].

WHAT EXISTS NOW (committed, do not break):
- Pages repo speculaas/ai301-coursework-trilogy-preview from main /docs. Live: .../status/ (gitGraph boards) and .../orbit/.
- docs/orbit/ is Copilot v1 COMMITTED as-is (git 83a0596): dependency-free Canvas 'Aurum System (Copilot v1)' - FICTIONAL bodies CHAR, FORTUNE, CRAG, SOLITAIRE / SOLACE, AUGUST, WISP, THE MOTHERSHIP around AURUM; play/pause, speed, labels/orbits toggles, drag-pan, wheel zoom, click-a-body info panel, light paper theme. Full source in SECTION 3. A previous bundle asked for a real-Solar-System redesign (readable vs realistic-ish); this follow-up builds on that line - Aurum v1 content must never be lost.

RETURN EXACTLY THESE PARTS, IN ORDER:

PART A - THREE MODES IN ONE PAGE? (decision, 1 page + table)
Should (1) Real Solar System (Sun+8), (2) Aurum fictional (v1 bodies intact), (3) Animorphs fictional multi-system set be THREE MODES of one docs/orbit/ page, or separate pages? Weigh shared Canvas engine + systems dataset switcher (?system=solar|aurum|animorphs + buttons) vs folders; URL shareability; file size; Animorphs worlds are in different star systems in canon (system-selector vs stylised collection labelled non-canon); mobile UX. RECOMMEND one architecture, give exact URL scheme, mode-switcher UI, and what state carries across modes vs resets.

PART B - SPRINGER-INSPIRED FEATURES (book in SECTION 4: 'The Geometry of Ellipses and Planetary Orbits', Ben-Ari, Springer 2026, Open Access; if you cannot access the link say so, rely on SECTION 4, mark rest [unverified]). Design ORIGINAL features, no copied text/figures:
 B1 elliptical orbits, eccentricity per body + 'exaggerate eccentricity' slider, star at a focus, perihelion/aphelion markers;
 B2 Kepler position approx (mean->eccentric->true anomaly, label approximations), optional equal-area sweep (2nd law) for selected planet;
 B3 ellipse-construction overlay (foci, axes, pins-and-string) for selected orbit;
 B4 Lagrange points L1-L5 for selected planet (approximate, labelled; if not computable properly say [unverified], schematic only);
 B5 feature x mode matrix (Solar only vs also Aurum/Animorphs; invented fictional eccentricities labelled invented). Say 'cut' with reason where complexity is disproportionate. Vanilla Canvas, no build.

PART C - ANIMORPHS SYSTEM VIEW (design + data)
Use SECTION 5. One short paragraph for page/README clarifying Earth IS a planet in Animorphs (human homeworld, main setting) and this view adds alien homeworlds alongside it, stylised multi-system (canon = different star systems; label single-diagram layout non-canon, or design system selector). Then DATA: short confident world list (Earth, Andalite homeworld, Yeerk homeworld, Hork-Bajir homeworld, Leera, + only confident extras), each: display name (descriptive label where canon gives no name - never invent canon-sounding names), species, 2-3 premise-level facts, colour/size/slot. Every uncertain fact [unverified]. Spoiler care (premise only, or spoilers toggle). No copyrighted text/images, generic circles. Say what a fan should verify.

PART D - WATCH INTEGRATION (evaluate, do not just agree)
SECTION 2 has investigated facts (watch6-core.html?graph=work-threads on :8000, papers/edges data, honeycomb, NO watch7 yet). Evaluate A orbit-as-papers/edges inside watch, B orbit-as-watch-background, C linked views via URL (investigation's recommendation), D future watch7-core with orbital renderer. Each: concrete data mapping (planet/thread/hub), effort S/M/L, what breaks, hosting mismatch (local Python /api vs static Pages). Final recommendation + exact first cross-links/URL params (label 127.0.0.1 links local-only). Do not propose editing shared watch-core.js without regression note for watch2/4/6.

PART E - IMPLEMENTATION (complete files or exact patches)
 E1 Full replacement docs/orbit/index.html + style.css + app.js implementing Part A architecture (all recommended modes in one page, or state which deferred and why), Part B features not cut, Part C data. Preserve Aurum v1 bodies intact in Aurum mode. Define every DOM id used; keyboard-accessible body list; aria-live panel; prefers-reduced-motion; mobile <600px; light theme consistent with v1/status. OR exact unified-diff patches against SECTION 3 if genuinely smaller/safer, saying why patch > replacement.
 E2 Updated docs/orbit/README.md (modes, Springer credit with DOI https://doi.org/10.1007/978-3-032-26272-1, Animorphs canon-care note, local preview, editing datasets).
 E3 Link-snippet changes for docs/status/index.html if any (header already has 'Orbit' -> ../orbit/; say if ?system= needs a change).
PART F - VERIFICATION CHECKLIST for human/Grok Bot: serve python3 -m http.server 8766 --directory docs; check /orbit/ each mode, click every body, Springer features, Animorphs [unverified] markings, status ?board=shinkansen unaffected, mobile 390px, Pages after push + hard refresh. List what you could NOT verify.
Limits: no framework/build, no external images/textures, no absolute /orbit/ paths, flag if docs/orbit/ total exceeds ~60 KB.
