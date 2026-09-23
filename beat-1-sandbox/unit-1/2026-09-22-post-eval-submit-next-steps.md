# After the 18/20 PASS — submit next steps (and where they come from)

**Status (2026-09-22 night):** Full harness run **PASS** (18/20). Live #73 **accept** captured. `selection.md` **filled**. Ready for GitHub web upload into `speculaas/ai301-coursework`, then portal link submit.

Artifacts in this folder:
- `eval-run.txt` — harness 18/20 PASS (do not hand-edit)
- `selection.md` — #73 link + accept paste + write-ups
- `live-transcript-issue-73-accept.txt` — backup of accept transcript (optional upload)

Windows pack (same files): `windows-upload-staging/` — see `windows-upload-staging/README-WINDOWS-UPLOAD.md`.

Eval alone is **not** a complete portal submit until the course repo + Assignment link are done.

---

## Where these steps come from

| Source | What it is | What it requires |
|---|---|---|
| **LMS Assignment tab** — scraped locally as `beat-1-sandbox/unit-01/Overview-Activity-Assignment.txt` (section *📦 What you submit* / *🧭 Choose your issue*) | Official Unit 1 assignment | Portal gets **one link**: your public course repo; contents in `tools/issue-select/` + `beat-1-sandbox/unit-1/` |
| **LMS Activity homework** (same scrape, *After class*) | Install skill, rubric, eval, save run into course repo | `beat-1-sandbox/unit-1/eval-run.txt` from harness `--save-run` |
| **Local checklist** `2026-09-21-unit1-step-by-step.md` (this folder) | Condensed working order | Steps 5–8 after eval |
| **Course Info → Grading Rubrics** (referenced by LMS; not duplicated here) | Point split | Skill 6 + eval/write-up 10 + chosen issue 9 |

LMS wins if anything conflicts with local notes.

---

## What’s done vs still open

| Piece | Status |
|---|---|
| Rubric + skill + Claude eval ≥18/20 | **Done** (`eval-run.txt`) |
| Live-select Path Review #73 + accept transcript | **Done** (`selection.md` + `live-transcript-issue-73-accept.txt`) |
| Fill `selection.md` reflections / four write-up fields | **Done** |
| Confirm late portal submit with staff (`@ai-help`) | **Open** (printed deadline was Mon Sep 21 12:59AM MDT) |
| Upload skill + `eval-run.txt` + `selection.md` into **`speculaas/ai301-coursework`** | **Open** — use URLs below |
| Paste course-repo URL in course portal | **Open** |

`ai301-coursework-trilogy-preview` is a **layout/notes** repo. Graders look at **`speculaas/ai301-coursework`** unless staff say otherwise.

---

## Upload now (GitHub web flow)

Course instruction: **Add file → Upload files** inside the right folder (not a giant drag onto repo root).

| What | Browser folder (logged in as speculaas) | Files |
|---|---|---|
| Skill | https://github.com/speculaas/ai301-coursework/upload/main/tools/issue-select | From `tools/issue-select/` or `windows-upload-staging/tools/issue-select/`: `SKILL.md`, `rubric.md`, `scope.md`, `references/evidence-guide.md` |
| Eval + selection | https://github.com/speculaas/ai301-coursework/upload/main/beat-1-sandbox/unit-1 | `eval-run.txt`, filled `selection.md` (optional: accept `.txt` backup) |

If folders are missing on `main`:

1. https://github.com/speculaas/ai301-coursework → **Add file → Create new file**
2. Path `tools/issue-select/.gitkeep` → Commit
3. Path `beat-1-sandbox/unit-1/.gitkeep` → Commit
4. Re-open the upload URLs

Then portal: submit **only** https://github.com/speculaas/ai301-coursework

Do **not** claim #73 on Path Review yet (Unit 2).

---

## Earlier step detail (kept for provenance)

### Staff / late submit
Ask whether a late Assignment-tab submit is accepted. Don’t assume the portal still takes updates.

### Harness artifact
`beat-1-sandbox/unit-1/eval-run.txt` is already the real 18/20 file (synced from the harness `--save-run` output). Never hand-edit it.

### Live-select (completed)
- Issue: https://github.com/codepath/pathreview-ai301-fa26-s1/issues/73
- Session: `b8970ca5-3b37-4eed-9fc3-f8cb948e3fa1` → `"verdict": "accept"`
- Failed first attempt (tee / permissions) kept as debug only — do not upload as verdict

### Related notes in this folder
- `2026-09-21-unit1-step-by-step.md` — full working sequence
- `2026-09-21-smoke-vs-claude-eval.md` — smoke vs `run_eval.py`
- `2026-09-22-issue-01-scope-false-reject.md` / `…-run-eval-only-issue-01-sequence.md` — cheap-loop history
- `2026-09-22-debug-live-select-issue-73-permissions.md` — why the first live capture failed
