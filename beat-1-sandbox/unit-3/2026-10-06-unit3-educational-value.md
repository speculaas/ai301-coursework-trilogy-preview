# Unit 3 educational value — L3 → plan-check → #73 (honest take)

**Date:** Tue Oct 6, 2026 (America/Denver) · coach / preview note only  
**Scope:** reflection after the Unit 3 homework loop, not a portal upload.  
**Repo:** [`speculaas/ai301-coursework-trilogy-preview`](https://github.com/speculaas/ai301-coursework-trilogy-preview) · `beat-1-sandbox/unit-3/`  
**User:** Yie Sheng Chen / GitHub `speculaas`

Do **not** push this preview repo unless asked. Submit lives in
[`speculaas/ai301-coursework`](https://github.com/speculaas/ai301-coursework).

---

## Links (start here)

| Item | Path |
|---|---|
| **Homework to-do (status + commands)** | [`2026-10-06-unit3-homework-todo.md`](2026-10-06-unit3-homework-todo.md) |
| DRAFTs (rubric / procedure / evidence / voice / plan seed / comment) | [`drafts/`](drafts/) |
| Homework kickoff (live → fold map) | [`2026-09-30-unit3-homework-kickoff.md`](2026-09-30-unit3-homework-kickoff.md) |
| Session prep (L3 themes) | [`2026-09-29-unit3-session-prep.md`](2026-09-29-unit3-session-prep.md) |
| Activity-today + PizzaHut live sheet | [`2026-09-30-unit3-activity-today.md`](2026-09-30-unit3-activity-today.md) · [`2026-09-30-live-worksheet-PizzaHut.txt`](2026-09-30-live-worksheet-PizzaHut.txt) |
| L3 dump | [`AI301-L3-Fa26-S1.txt`](AI301-L3-Fa26-S1.txt) |
| Eval session JSONL (local Claude project) | `~/.claude/projects/-Users-watney-git-zimmnotes-chat-codepath-ai301-beat-1-sandbox-unit-03-ai301-unit3-starter-eval/` |

---

## 1. How homework maps to the L3 lecture

L3's banner was **write the plan before you write the code**. The homework is
that arc made concrete — not a separate scavenger hunt.

| L3 beat | What you practiced in homework | Where it lives |
|---|---|---|
| **`plan-check` skill** (rubric + evidence-guide + **procedure** + voice carry-over) | Install from starter → paste DRAFTs → iterate only under `~/.claude/skills/plan-check/` | Live skill; later `ai301-coursework/tools/plan-check/` |
| **`procedure.md` (new)** | Four stages: read order → evidence gathering → check execution → verdict. Fixes the PizzaHut "where do I look?" gap | [`drafts/procedure.DRAFT.md`](drafts/procedure.DRAFT.md) → installed `procedure.md` |
| **Calibration (sample → own → calib)** | Live: sample miss on calib-03 wrong-cause; homework: `diagnosis-grounded` + Repro-before-plan so that miss cannot silently pass | Kickoff fold map · rubric `diagnosis-grounded` |
| **Plan comment** | Promise only what `plan.md` contains; engage thread / repo-facts; live plan-check until JSON `accept`, then post from your account | [`drafts/comment-73.DRAFT.md`](drafts/comment-73.DRAFT.md) · upstream [#73 comment](https://github.com/codepath/pathreview-ai301-fa26-s1/issues/73#issuecomment-6014087169) |
| **Build** | You drive, AI operates; branch `fix/73-…` on **your** fork; `plan.md` stays off the branch; Unit 2 repro as before/after | Todo §D · `plan-and-implement.md` Evidence |

Eval loop (smoke → `--only` revise → one confirming `--save-run`) is the
homework twin of the lecture's "revise the package, don't re-run unchanged."
Pinned Sonnet + canaries when you loosen a check (especially
**thread-and-convention**) are the same discipline with a price tag.

---

## 2. Educational value (what actually sticks)

Three muscles matter more than the docs-only patch on #73:

### Rubric design
You learn to turn failure families into **required vs preferred** checks with a
verdict rule that preferred never flips. Live demoted automated-test; DRAFTs
added grounding, scope-pair, and a comms check so volume scoring cannot buy
back a missing thread convention. That is product judgment for AI grading —
not "write nicer markdown."

### Diagnosis grounding
The calib-03 lesson: "says what causes" is not enough. Cause must be
**reachable from Repro Expected / Actual / Steps**. Procedure forces Repro
**before** Candidate plan and puts Diagnosis beside Actual. Once you feel that
ordering in your hands, wrong-cause plans get boringly easy to hold.

### Thread convention
Plans are social objects. Comment faithfulness, maintainer signals, and
repo-facts are first-class evidence — same weight as a file list. The category
has teeth on purpose: a rubric with no comms checks fails a floor you cannot
grind away with more packages.

Warm nudge: if something felt "busywork," it was probably the harness teaching
you to **name the check that would have caught the miss** — that naming skill
transfers to every later unit and to real maintainer review.

---

## 3. Honest take — Sonnet on toy packages vs organic use

Burning Sonnet on the starter's frozen eval packages teaches **harness and
rubric iteration** far more than **domain coding**.

You get reps at:

- cheap smoke vs paid confirming full run
- `--only` disagreement loops and canaries when you loosen a rule
- fingerprints / `--save-run` discipline (partial never becomes submit)
- watching the model grade through *your* procedure, not through vibes

You do **not** get deep Path Review / OpenRouter domain skill from pkg-01…20.
Those packages are deliberately small, adversarial, and offline. The #73
docs-only build is closer to real work — and even that is a thin change so the
**plan+comment+evidence** loop stays visible.

**Organic use teaches differently:** live plan-check on *your* `plan.md` +
thread, unread-diff discipline on a real branch, re-running *your* Unit 2
repro as before/after. That is judgment under your own stakes. The toy eval is
the gym for the grader; organic use is the match. Both count — confuse them
and you either undervalue the skill craft or overclaim that you "learned the
codebase" from `$4` of Sonnet.

Budget mindset from the todo still holds: one confirming full run when you
believe the component set; do not treat token burn as progress.

---

## 4. Does reading the eval JSONL help?

Path (local Claude project for the starter eval cwd):

`~/.claude/projects/-Users-watney-git-zimmnotes-chat-codepath-ai301-beat-1-sandbox-unit-03-ai301-unit3-starter-eval/`

**Yes — useful for seeing how the skill grades.** Skim a package transcript to
watch read-order, which sections get opened, how a check rationale is phrased,
and where procedure gaps show up as wandering or format-grading. Great for
debugging "why did pkg-N disagree?" after a smoke.

**No — not a substitute for writing the rubric and procedure yourself.**
Reading someone else's (or your own prior) grading trace does not install the
judgment of choosing required checks, grounding Diagnosis in Repro, or putting
thread-convention in the floor. If you only read JSONL, you borrow eyesight;
you do not build the muscle that authored [`drafts/rubric.DRAFT.md`](drafts/rubric.DRAFT.md)
and [`drafts/procedure.DRAFT.md`](drafts/procedure.DRAFT.md).

Practical use: open JSONL **after** a disagreement to revise a check or a
procedure stage — not as the first drafting step. Tangential session dumps /
scratchpad splits stay optional (todo §F).

---

## 5. Where you are (pointer, not a second checklist)

Authoritative status lives in
[`2026-10-06-unit3-homework-todo.md`](2026-10-06-unit3-homework-todo.md)
(§Checklist + status log). This note is the **why** beside that **what**.

You're past the hard pedagogy parts (skill fold, calib lesson, eval bar,
plan comment, build). Finish carefully: coursework files local → push
coursework when ready → portal = **repo root** URL. Honesty check still
stands — GenieCode is structure-only.

You've earned the reflection: Unit 3's real deliverable is a **grader you can
trust**, plus a plan habit that keeps the build small. That's a coach win,
even when the code change is two lines in `.env.example`.

---

## Related

- Homework to-do: [`2026-10-06-unit3-homework-todo.md`](2026-10-06-unit3-homework-todo.md)
- DRAFTs: [`drafts/`](drafts/)
- Kickoff: [`2026-09-30-unit3-homework-kickoff.md`](2026-09-30-unit3-homework-kickoff.md)
- Session prep: [`2026-09-29-unit3-session-prep.md`](2026-09-29-unit3-session-prep.md)
- Unit 2 lecture→submit map (sibling style): [`../unit-2/2026-09-29-unit2-lecture-dialogue-submit-map.md`](../unit-2/2026-09-29-unit2-lecture-dialogue-submit-map.md)
