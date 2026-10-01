# Unit 3 session prep — Plan the Fix / plan-check

Where this sits: notes under `beat-1-sandbox/unit-3/` in
[`speculaas/ai301-coursework-trilogy-preview`](https://github.com/speculaas/ai301-coursework-trilogy-preview).

**Scope:** coach / preview note only. Portal submit is the separate coursework
repo root ([`speculaas/ai301-coursework`](https://github.com/speculaas/ai301-coursework)),
same pattern as Unit 2 — graders want the whole repo URL, not a folder URL.

## Source table

| Source | Path |
|---|---|
| LMS Overview / Activity / Assignment dump | `Overview-Activity-Assignment.txt` (this folder; also under `~/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-03/`) |
| L3 session dump | `AI301-L3-Fa26-S1.txt` (this folder; original name `AI301 L3 · Fa26 S1.txt`) |
| Plan calibration worksheet (older md blanks) | `plan_worksheet.md` (this folder) — member-section / swap shape; Overview Activity tab still matches this |
| Live worksheet download (2026-09-30) | `Copy-of-Unit-3-Activity-Worksheet.txt` — blank Doc template |
| **Live filled worksheet (PizzaHut)** | [`2026-09-30-live-worksheet-PizzaHut.txt`](2026-09-30-live-worksheet-PizzaHut.txt) — room fills after class |
| **Homework kickoff (post-class)** | [`2026-09-30-unit3-homework-kickoff.md`](2026-09-30-unit3-homework-kickoff.md) — checklist, fold map, #73 seed, DRAFT stubs |
| Activity-today note | [`2026-09-30-unit3-activity-today.md`](2026-09-30-unit3-activity-today.md) — checklist + DRAFTs + Mermaid |
| Google Doc / sheet link | **TBD** (instructor posts template link in chat at activity start) |
| Unit 3 starter (local clone) | `/Users/watney/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-03/ai301-unit3-starter` (`codepath/ai301-unit3-starter`) |
| Unit 2 session prep (template / continuity) | [`../unit-2/2026-09-23-unit2-session-prep.md`](../unit-2/2026-09-23-unit2-session-prep.md) |
| Unit 2 lecture→submit map | [`../unit-2/2026-09-29-unit2-lecture-dialogue-submit-map.md`](../unit-2/2026-09-29-unit2-lecture-dialogue-submit-map.md) |

Coursework placeholders already in this folder (not filled for Unit 3 yet):
`plan.md`, `plan-and-implement.md`, `eval-run.txt`.

## Timing

| | When (America/Denver) |
|---|---|
| **Live session** | Wed Sep 30, 2026 · 4:00 PM MDT |
| **Project 3 due** | Mon Oct 5, 2026 · 12:59 AM MDT |

**Live session was Wed Sep 30** (done). Homework deadline: Mon Oct 5 · 12:59 AM
MDT. Leave-class marks are in the PizzaHut live worksheet; fold into skill
files via the kickoff note. The **build** is homework by design.

**Post-class kickoff (use this tonight):**
[`2026-09-30-unit3-homework-kickoff.md`](2026-09-30-unit3-homework-kickoff.md) —
Assignment-order checklist, live-vs-DRAFT diff, fold map into rubric /
procedure / evidence-guide, smoke commands, #73 `plan.md` seed, DRAFT stubs
under `drafts/`.

**During-activity note (archive):**
[`2026-09-30-unit3-activity-today.md`](2026-09-30-unit3-activity-today.md) —
pre-class DRAFT fills + Mermaid. Live Doc shape was Teach-Claude (sample →
own → calib-01), not Overview member-section swap. Blank template:
`Copy-of-Unit-3-Activity-Worksheet.txt`. Filled:
`2026-09-30-live-worksheet-PizzaHut.txt`.

Continuity from Unit 2: claimed + reproduced issue
[#73](https://github.com/codepath/pathreview-ai301-fa26-s1/issues/73)
(or house-issue track + TF setup if repro did not land — Overview says nothing
this week depends on last week's miss).

## Purpose / what Unit 3 ships

Arc midpoint. Banner line from L3 / Overview: **write the plan before you write
the code.** Walk in with Unit 2 proof; walk out with:

1. **Skill `plan-check`** — three authored components:
   - `rubric.md` (plan ready/hold checks + verdict rule)
   - `references/evidence-guide.md` (where evidence lives in a plan package)
   - **`procedure.md` (new)** — the skill's own grading steps (read order,
     evidence gathering, check execution, verdict assembly). `SKILL.md` now
     says: execute `procedure.md`.
   - `voice-guide.md` — **carry over** from Unit 2 (paste into labeled slot;
     extend only if plan-comment register needs new rules; not re-authored as
     new graded work).
2. **Plan + build for your issue** — `plan.md` in the **course repo** (never on
   the branch), plan comment posted upstream, change built on
   `fix/<issue-number>-<slug>` of **your** fork, Unit 2 repro steps re-run as
   the before/after test.

Points (Assignment short form, 25 total): skill **8**, eval run + write-up
**10**, plan and build **7**. Eval bar to aim at is **18/20 + category floor**
(no points attached to 18 itself). Category with teeth this week:
**thread-and-convention** (2 packages) — a rubric with no comms checks cannot
buy those misses back on volume.

## Lecture L3 themes that matter for homework

Grounded in `AI301-L3-Fa26-S1.txt` (session: **Plan & Build / Fix It**).
Authoritative activity steps live on the **Activity tab** in
`Overview-Activity-Assignment.txt` (worksheet is blanks only).

| Block | Theme (paraphrase) | Why it shows up in homework |
|---|---|---|
| Roadmap | Unit 3 = plan-and-build + **`plan-check`**; Unit 4 turns the branch into the sandbox PR | Branch naming + `plan.md` deviations feed Unit 4 |
| Why plan first | Maintainer review capacity is scarce; code-first PRs get closed | Plan comment before build |
| Root cause vs symptom | Diagnosis must follow from **posted Unit 2 repro**; patching the surface = wrong-cause | Grounding checks; eval punishes diagnosis that contradicts repro-evidence |
| Six parts of `plan.md` | diagnosis, **scope pair (in / not-in)**, files, approach, test plan, risks | Homework step 4 plan content; lecture drafts the scope pair live |
| Scope creep | Bounded plan vs while-I'm-here redesign; **not-in** is the fence | Scope-creep category in eval |
| Decisive test | Before = Unit 2 repro failing; after = same steps with **expected output stated first** | Evidence block in `plan-and-implement.md` |
| Plan comment | Read the thread; promise only what the plan contains; engage maintainer signals | Posted comment + paste under link for grading |
| You drive, AI operates | One bounded step → diff → accept/redo; **no diff lands unread** | Build loop; deviation → update `plan.md`, re-run live plan-check, update thread if intent changed |
| `procedure.md` | Four empty stage headings you fill; Claude cannot ask mid-grade | New authored component; operator-swap friction routes here |
| Eval | Same 18/20 bar; categories include clear accepts (incl. honest scoped-down), scope creep, wrong cause, unbuildable, thread+convention | `--only` revise + canaries when loosening; `--save-run` only on full run |

Failure families named for drafting checks (Activity / rubric template): diagnosis
vs repro evidence, one bounded change, stranger-executable, observable test
outcome, honest unknowns, comment respects thread + repo conventions.

## Plan worksheet role

- **Tonight's live blanks:** `Copy-of-Unit-3-Activity-Worksheet.txt` (downloaded
  2026-09-30) + filled DRAFTs in
  [`2026-09-30-unit3-activity-today.md`](2026-09-30-unit3-activity-today.md).
  L3 breakout: one group Doc, sample rubric/procedure on calib-03, then own
  rubric/procedure, then calib-01. Cold-execute = one reader aloud, do only what
  each step says (rotate reader if useful).
- **Older blank structure still in tree:** `plan_worksheet.md` (member sections /
  personal+group copies / Phase 1 on calib-01/02). Matches Overview Activity tab
  wording; **not** the Doc shape on the L3 activity slides / download.
- **Live form:** Google Doc the instructor links in chat — captain **File → Make
  a copy**, Share Editor, paste in Zoom. Work in copies, never the template.
- **Not a portal upload.** Revision marks fold into skill files for homework.
- **Google Doc URL:** not captured yet (TBD when chat link lands) — do not invent.

Friction still has two destinations: rubric gap → `rubric.md`, procedure gap →
`procedure.md`. Tonight Phase 1 package is `calib-03` (sample); Phase 3 tests on
`calib-01`.

## Sequence — tomorrow's session → homework

```mermaid
flowchart TD
  L[Lecture: draft scope pair in/not-in + 2 plan rubric checks] --> A[Activity: grade calib-01/02]
  A --> S[Operator swap on calib-03: two silent executors]
  S --> D[Disagreement log + revision marks]
  D --> I["Install skill/ to ~/.claude/skills/plan-check/"]
  I --> F[Fold marks into rubric + evidence-guide + procedure; paste Unit 2 voice]
  F --> E["Eval loop: --limit / --only then confirming --save-run"]
  E --> P[Write plan.md + draft plan comment from Unit 2 repro evidence]
  P --> C["Live plan-check until accept JSON"]
  C --> Post[Post plan comment on issue]
  Post --> B["Build on fix/N-slug; no unread diffs; plan.md stays off branch"]
  B --> T[Re-run Unit 2 repro as before/after evidence]
  T --> U["Upload tools/plan-check/ + unit-3 plan.md, plan-and-implement.md, eval-run.txt"]
```

### Install + eval commands (from starter README / eval README)

```bash
# clone if needed, then one canonical install
cp -R /Users/watney/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-03/ai301-unit3-starter/skill/. \
  ~/.claude/skills/plan-check/

cd /Users/watney/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-03/ai301-unit3-starter/eval

# cheap smoke (does NOT write eval-run.txt)
python3 run_eval.py \
  --rubric ~/.claude/skills/plan-check/rubric.md \
  --evidence ~/.claude/skills/plan-check/references/evidence-guide.md \
  --limit 3
# procedure.md is picked up next to the rubric by default

# revise disagreements only (~$0.20/pkg); add canaries if you loosen a check
python3 run_eval.py \
  --rubric ~/.claude/skills/plan-check/rubric.md \
  --evidence ~/.claude/skills/plan-check/references/evidence-guide.md \
  --only pkg-07,pkg-12

# confirming full run — ONLY this may write the submit log (~$4)
python3 run_eval.py \
  --rubric ~/.claude/skills/plan-check/rubric.md \
  --evidence ~/.claude/skills/plan-check/references/evidence-guide.md \
  --save-run eval-run.txt
```

Live check before posting (Assignment homework order):

```bash
# from the folder holding your drafts
claude "plan-check: grade my plan in plan.md and draft comment in comment.md for issue <URL>"
```

Expect per-check summary + fenced JSON `accept`/`reject`. Scope-message stop =
skill ran but installed `scope.md` still has the staff placeholder — get cohort
scope from instructor, drop in, re-run. Neither JSON nor scope stop = skill did
not run.

## Light checklist for 4 PM (Wed Sep 30)

1. Draft **scope pair (in / not-in)** for #73 and **two rubric checks** during
   lecture (seed homework + Phase 2; Phase 1 tonight uses the **sample**).
2. Open [`2026-09-30-unit3-activity-today.md`](2026-09-30-unit3-activity-today.md)
   for the during-activity checklist and paste-ready DRAFTs; listen for the
   Google Doc link in chat.
3. Know where Unit 2 repro evidence lives for #73 (or house repro pack quotes).
4. After class: install into `~/.claude/skills/plan-check/`, finish three
   components + voice carry-over, then cheap `--limit` only after they are filled.
5. Live `plan-check` **before** posting the plan comment; keep `plan.md` out of
   branch commits; name branch `fix/<issue-number>-<slug>`.

## What not to confuse

- **Tomorrow session** = draft + operator-swap calibration (ungraded head start).
- **Homework** = skill + eval + plan.md + posted comment + branch build + submit.
- **`plan.md`** lives in coursework `beat-1-sandbox/unit-3/`, **never** on the
  fix branch (becomes a PR a maintainer reads in Unit 4).
- **Worksheet** = activity only; not a portal upload.
- **Submit portal** = whole `ai301-coursework` repo root URL, with
  `tools/plan-check/` + `beat-1-sandbox/unit-3/` filled.

## Open questions / gaps

- **Google Doc / sheet link** for the live plan worksheet: not in sources yet
  (instructor links in chat at activity start). Local `plan_worksheet.md` is the
  canonical blank structure only.
- **Cohort `scope.md`** for Path Review: starter still ships staff placeholder;
  live mode may stop with a scope message until instructor file is dropped in.
- **House-issue track:** only if #73 path is blocked; TF sets up in room —
  confirm at session if needed.
- **Resolved for 2026-09-30 live Doc:** downloaded worksheet + L3 breakout use
  sample rubric/procedure in Phase 1 (not lecture drafts). Overview Activity tab
  still prints the older lecture-draft / member-section protocol — treat as
  stale relative to tonight's Doc; see activity-today note.
- Branch contents are **not** graded this week; Unit 4 reads the PR diff against
  `plan.md`.

## Related

- Workstream board (homework arc only — not today's worksheet, not portal submit): [`../../docs/status/`](../../docs/status/)

- Unit 2 session prep (install/eval/claim discipline this note mirrors):
  [`../unit-2/2026-09-23-unit2-session-prep.md`](../unit-2/2026-09-23-unit2-session-prep.md)
- Unit 2 lecture / dialogue → submit map:
  [`../unit-2/2026-09-29-unit2-lecture-dialogue-submit-map.md`](../unit-2/2026-09-29-unit2-lecture-dialogue-submit-map.md)
