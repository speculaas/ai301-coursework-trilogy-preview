# Solar System Orbit Explorer (Copilot turn 2) — docs/orbit/

Dependency-free Canvas page at `docs/orbit/`, sibling of `docs/status/` (NOT a board; do not put it in `docs/status/`).

## Version history

- **v2 (current, 2026-10-18, M365 Copilot turn 2, dlg-m365-40265e47-turn2):** real Solar System — Sun + Mercury…Neptune, values rounded from NASA/NSSDCA Planetary Fact Sheet. Replaces the fictional data in the live page. Package: `orbit-page-package.zip` (7 files, 18 KB uncompressed, gitignored pack stays uncommitted). Copilot chose Option B (`docs/orbit/`) itself in INTEGRATION.md.
- **v1 (git 83a0596, in history):** fictional "Aurum System (Copilot v1)" — CHAR, FORTUNE, CRAG, SOLITAIRE / SOLACE, AUGUST, WISP, THE MOTHERSHIP around AURUM. Preserved in git history; bodies must be restored intact if a multi-mode page (follow-up v2 prompt) is built.

## Modes / features (v2)

Single mode only: **Solar System**. No `?system=` switcher yet — Aurum and Animorphs modes are follow-up work (see `beat-2-contribution/unit-5/prompts/PROMPT_orbit_followup_m365.md` v2).

- Click/tap + hover highlight + tooltip, selected ring, keyboard-accessible body buttons, aria-live details panel
- Play/pause, speed, labels toggle, orbit-path toggle, drag-pan, wheel + pinch zoom, reset view
- Scale: **Readable** (default, log-compressed distances, enlarged sqrt body sizes) vs **Realistic-ish** (linear AU, common linear body scale, 1.5 px floor — explicitly not fully true-to-scale; note text in page explains)
- `prefers-reduced-motion` starts paused; DPR capped at 2; ResizeObserver; responsive to ~390 px

## Preview

```bash
python3 -m http.server 8766 --directory docs   # from preview-repo root
```

Open http://127.0.0.1:8766/orbit/ (status: http://127.0.0.1:8766/status/)
Live after push: https://speculaas.github.io/ai301-coursework-trilogy-preview/orbit/

Edit the `bodies` array in `app.js` for facts/colours/angles; scale formulas in `orbitPx()` / `bodyPx()`. Illustrative, not an ephemeris. No license file in either Copilot zip; both generated for this user from their own sketch/data — add a repo-level license before redistribution.
