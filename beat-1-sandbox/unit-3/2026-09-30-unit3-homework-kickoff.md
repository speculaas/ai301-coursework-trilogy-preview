# Unit 3 homework kickoff — after PizzaHut live worksheet

**Date:** Wed Sep 30, 2026 (America/Denver) · written after live session  
**Due:** Project 3 · Mon Oct 5, 2026 · 12:59 AM MDT  
**Scope:** coach / preview note only (`beat-1-sandbox/unit-3/` in
[`speculaas/ai301-coursework-trilogy-preview`](https://github.com/speculaas/ai301-coursework-trilogy-preview)).  
**User:** Yie Sheng Chen / GitHub `speculaas` · Path Review
[#73](https://github.com/codepath/pathreview-ai301-fa26-s1/issues/73)
(README vs `.env.example` OPENROUTER_API_KEY docs mismatch).  
**Do not push** this preview repo unless asked. Do **not** overwrite
installed `~/.claude/skills/plan-check/` or coursework submit files
until you confirm the DRAFTs below.

## Source table

| Source | Path |
|---|---|
| **Live filled worksheet (PizzaHut)** | [`2026-09-30-live-worksheet-PizzaHut.txt`](2026-09-30-live-worksheet-PizzaHut.txt) |
| Blank template (pre-class download) | [`Copy-of-Unit-3-Activity-Worksheet.txt`](Copy-of-Unit-3-Activity-Worksheet.txt) |
| Pre-class DRAFT fills | [`2026-09-30-unit3-activity-today.md`](2026-09-30-unit3-activity-today.md) |
| Session prep | [`2026-09-29-unit3-session-prep.md`](2026-09-29-unit3-session-prep.md) |
| Assignment / Activity text | [`Overview-Activity-Assignment.txt`](Overview-Activity-Assignment.txt) |
| Local starter | `/Users/watney/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-03/ai301-unit3-starter/` |
| DRAFT skill stubs (this kickoff) | [`drafts/`](drafts/) — **not** installed yet |
| Unit 2 voice (carry-over source) | `ai301-coursework/tools/repro-check/voice-guide.md` |

---

## 1. Live worksheet vs our pre-class DRAFTs

Group **PizzaHut** · Date **Sep 30 2026**. Room used the Teach-Claude Doc
shape (sample → own → calib-01), not the Overview member-section swap.

| Box | Live (PizzaHut) | Our DRAFT (activity-today) | Takeaway for homework |
|---|---|---|---|
| calib-03 grades | diagnosis **P**, scope **P**, test **?** | diagnosis P, scope P, test **P** | Room treated automated-test as unclear; we treated sample literally → ready. Both expose sample weakness; staff correct = **hold**. |
| calib-03 verdict | **HOLD** | **ready** (then note staff hold) | Live lucked into staff verdict via test `?`. Compare-with-correct box was **left empty** — wrong-cause lesson not written down. |
| What was unclear | **Test was unclear** | **diagnosis** ("says what causes" ≠ grounded in Repro) | Room fixed test weight; **did not** tighten diagnosis grounding. **Must add diagnosis-grounded in homework.** |
| Where to look | Sample step 2 "Find the evidence…" (**where?**) | Same — Repro vs Diagnosis never named | Shared procedure gap → `procedure.md` stages 1–2. |
| Our rubric | Nearly **sample clone**; only `test` → **preferred** | diagnosis-grounded / scope-pair / test-observable / comment-faithful | Live rubric still lets calib-03 wrong-cause through. Fold live demotion **plus** DRAFT grounding + thread check. |
| Our procedure | Read plan; "Read diagnosis, scope, and test sections, compare with rubric"; Grade P/F/?; Apply rule | Full four-stage with Repro **before** plan + Diagnosis-beside-Actual | Live step 2 is still thin. Expand to DRAFT procedure. |
| calib-01 grades | diagnosis P, scope P, test (preferred) **F** | all required P; comment preferred P | Preferred F must **not** hold. Live **Verdict box blank** — write **ready**. |
| What we changed | automated test → preferred; step 2 more specific where to look | grounding + test-observable allow manual expected-after + procedure read order | Keep both change lists when folding. |
| Phase 4 debrief | **How to gather evidence** | Without procedure Claude never opens Repro first | Align: gathering = Repro-first + side-by-side Diagnosis. |
| calib-04 | empty | structure only | Skip tonight unless curious. |

**Bottom line:** Live marks correctly demoted automated-test and flagged
where-to-look. They **did not** close the Phase 1 wrong-cause hole. Homework
skill must upgrade diagnosis to **grounded in Repro evidence**, not "a cause
is stated."

---

## 2. Ordered homework checklist (Assignment tab)

Do in this order. Portal submit = whole
[`speculaas/ai301-coursework`](https://github.com/speculaas/ai301-coursework)
repo root URL (not a folder).

1. **Install skill** — copy starter `skill/` → `~/.claude/skills/plan-check/`
   (create dirs if needed). That installed tree is the one canonical set.
2. **Fold marks into components** (edit **inside** installed copy):
   - `rubric.md` — see §3 fold map + [`drafts/rubric.DRAFT.md`](drafts/rubric.DRAFT.md)
   - `references/evidence-guide.md` — [`drafts/evidence-guide.DRAFT.md`](drafts/evidence-guide.DRAFT.md)
   - `procedure.md` — [`drafts/procedure.DRAFT.md`](drafts/procedure.DRAFT.md)
   - `voice-guide.md` — paste Unit 2 voice from
     `ai301-coursework/tools/repro-check/voice-guide.md`; optionally add one
     plan-comment rule (promise only what `plan.md` contains).
3. **Eval loop** (from starter `eval/`):
   - smoke: `--limit 3` (**no** `--save-run`)
   - revise disagreements with `--only pkg-…` (~$0.20/pkg); add canaries if
     you loosen a check (esp. thread-and-convention)
   - confirming full run **only** when you believe the set:
     `--save-run eval-run.txt` (~$4)
4. **Write `plan.md` for #73** — in coursework
   `beat-1-sandbox/unit-3/plan.md` (never on the fix branch). Seed in §5.
5. **Draft plan comment** + **live plan-check** until JSON `accept`:
   ```bash
   claude "plan-check: grade my plan in plan.md and draft comment in comment.md for issue https://github.com/codepath/pathreview-ai301-fa26-s1/issues/73"
   ```
   Scope stop = skill ran; drop cohort `scope.md` from instructor and re-run.
6. **Post plan comment** on #73.
7. **Build** on fork branch `fix/73-<slug>` (e.g. `fix/73-openrouter-env-example`).
   You drive, AI operates; no unread diffs. Keep `plan.md` **out** of commits.
8. **Re-run Unit 2 repro** as before/after; paste into
   `plan-and-implement.md` Evidence.
9. **Upload / fill coursework** then submit portal URL:
   - `tools/plan-check/` ← installed skill files
   - `beat-1-sandbox/unit-3/eval-run.txt` ← harness-written only
   - `beat-1-sandbox/unit-3/plan.md`
   - `beat-1-sandbox/unit-3/plan-and-implement.md` (username, comment link +
     pasted text, branch name, Evidence, four eval-iteration fields)

Points reminder: skill 8 · eval+write-up 10 · plan+build 7. Aim **18/20** +
category floor (thread-and-convention has teeth).

---

## 3. Exact fold-in: live lines → skill files

| Live / lesson line | Route | Target file | What to write |
|---|---|---|---|
| calib-03 wrong cause still passes sample "says what causes" (lesson; **missing from live rubric**) | rubric | `rubric.md` | Check `diagnosis-grounded` (required): Diagnosis vs Repro Expected/Actual/Steps; pass if cause is reachable from repro (no contradiction). |
| Live: "Changed automated test to preferred" | rubric | `rubric.md` | Check `test-observable` (required for observable outcome; automated is **preferred** polish, or keep one preferred `automated-test` row). Pass if stranger-runnable before/after tied to repro; expected-after stated. |
| Live scope check (kept required) | rubric | `rubric.md` | Check `scope-pair` (required): names files/areas **and** not-in. |
| Eval category thread-and-convention (not on live Doc) | rubric | `rubric.md` | Check `comment-faithful` or `thread-convention` (**required** or at least one required comms check): comment promises only plan contents; engages thread / repo-facts when present. |
| Live verdict rule incomplete on `?` | rubric | `rubric.md` | Verdict: ready/accept iff every **required** is P; required F or ? → hold; preferred never flips. |
| Live: "Where we didn't know where to look" + debrief "How to gather evidence" | procedure | `procedure.md` | Stages Read order + Evidence gathering: Repro **before** Candidate plan; pull Expected/Actual/toggles; put Diagnosis beside Actual. |
| Live step 2 "more specific as to where to find evidence" | procedure + evidence | both | Name package sections (Repro evidence, Diagnosis, Scope/Changes, Test plan, Candidate plan comment, repo-facts). |
| Missing what-good-looks-like for families | evidence guide | `references/evidence-guide.md` | Fill Diagnosis/Scope/Test/Comms families per DRAFT stub. |
| Unit 2 voice | voice | `voice-guide.md` | Paste carry-over; optional plan-comment rule. |

Do **not** ship the live PizzaHut rubric as-is — it re-creates the sample miss.

---

## 4. First commands tonight (smoke only)

```bash
export PATH=$PATH:/opt/homebrew/bin

# 1) Install (once)
mkdir -p ~/.claude/skills/plan-check
cp -R /Users/watney/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-03/ai301-unit3-starter/skill/. \
  ~/.claude/skills/plan-check/

# 2) After you paste DRAFT contents into the installed files (or copy from drafts/):
#    ~/.claude/skills/plan-check/rubric.md
#    ~/.claude/skills/plan-check/procedure.md
#    ~/.claude/skills/plan-check/references/evidence-guide.md
#    ~/.claude/skills/plan-check/voice-guide.md  (Unit 2 paste)

# 3) Smoke — does NOT write eval-run.txt
cd /Users/watney/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-03/ai301-unit3-starter/eval
python3 run_eval.py \
  --rubric ~/.claude/skills/plan-check/rubric.md \
  --evidence ~/.claude/skills/plan-check/references/evidence-guide.md \
  --limit 3
```

**Not tonight unless components feel solid:** `--save-run eval-run.txt`.  
**Not tonight:** posting the plan comment, pushing `fix/73-*`, portal submit.

Optional after smoke looks sane: `--only` on disagreements; include a
thread-convention canary if you loosen comms checks.

---

## 5. `#73` plan.md seed (scope pair + live marks)

Copy into coursework `beat-1-sandbox/unit-3/plan.md` when ready (preview
seed also at [`drafts/plan-73.SEED.md`](drafts/plan-73.SEED.md)). Grounded in
posted Unit 2 repro at commit `f89c06f` + lecture scope pair.

```
# Plan: Path Review #73 — document OPENROUTER_API_KEY in .env.example

## Diagnosis
README Quick Start tells contributors to set OPENROUTER_API_KEY when using
OpenRouter, but `.env.example` only shows LLM_PROVIDER=mock and OPENAI_API_KEY.
core/config.py already defines both key fields — this is a docs/example-env
mismatch, not a missing config field. (Cause follows from Unit 2 repro:
README asks for the key; example env never surfaces it.)

## Scope
In: align `.env.example` with README Quick Start by documenting
OPENROUTER_API_KEY (and clarifying LLM_PROVIDER options so openrouter is not
invisible next to mock/openai); keep the change docs/example-env only unless
a one-line README comment is required for the same mismatch.
Not in: changing core/config.py field defaults or OpenRouter base URL /
model defaults, OpenAI key behavior, mock provider logic, UI, or unrelated
docs refactors.

## Files / areas
- `.env.example` (primary)
- README.md only if a one-line cross-reference is needed for the same mismatch

## Approach
1. Add commented OPENROUTER_API_KEY (and LLM_PROVIDER=openrouter example) to
   `.env.example` beside the existing mock/openai lines.
2. Keep wording consistent with README Quick Start; do not invent new defaults.
3. Diff-review: no Python/runtime files in the change.

## Test plan
Re-run Unit 2 repro steps: open README Quick Start next to `.env.example` and
confirm a stranger can find OPENROUTER_API_KEY (and openrouter as a
LLM_PROVIDER option) without reading core/config.py. Expected-after: example
env documents the same key README names. (Automated test preferred later if
the repo has a docs lint; not required for ready.)

## Risks / unknowns
- Exact comment style in `.env.example` may need to match existing file voice.
- Confirm whether README needs any one-line tweak after example-env edit.

## Deviations
[Fill after build. If nothing changed: say so in your own words.]
```

Draft plan comment (voice-safe sketch):

```
I'd like to plan a docs-only fix for the README vs `.env.example`
OPENROUTER_API_KEY mismatch on #73 (repro at f89c06f). Approach: document
OPENROUTER_API_KEY and the openrouter LLM_PROVIDER option in `.env.example`
to match README Quick Start; no core/config.py or provider-logic changes.
I'll post the branch as fix/73-openrouter-env-example after the example-env
edit and re-check the README↔.env.example pairing.
```

---

## 6. Top 5 actions for tonight

1. Install `skill/` → `~/.claude/skills/plan-check/`.
2. Paste [`drafts/*.DRAFT.md`](drafts/) into installed rubric / procedure /
   evidence-guide; paste Unit 2 voice into `voice-guide.md`.
3. Run eval smoke `--limit 3` (no `--save-run`).
4. Start `plan.md` for #73 from the seed above (coursework path when you are
   ready to grade it live).
5. Stop before posting / `--save-run` / branch push unless smoke + live
   plan-check both look good.

---

## Related

- Activity-today DRAFTs (pre-class): [`2026-09-30-unit3-activity-today.md`](2026-09-30-unit3-activity-today.md)
- Session prep: [`2026-09-29-unit3-session-prep.md`](2026-09-29-unit3-session-prep.md)
- Live worksheet: [`2026-09-30-live-worksheet-PizzaHut.txt`](2026-09-30-live-worksheet-PizzaHut.txt)
