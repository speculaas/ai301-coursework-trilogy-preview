# Unit 3 homework to-do — plan-check → #73 plan+build → submit

**Date:** Tue Oct 6, 2026 (America/Denver) · coach / preview note only  
**Due:** Project 3 · **Mon Oct 5, 2026 · 12:59 AM MDT** — **PAST DUE**; still finishing.  
**Issue:** [codepath/pathreview-ai301-fa26-s1#73](https://github.com/codepath/pathreview-ai301-fa26-s1/issues/73)  
**User:** Yie Sheng Chen / GitHub `speculaas`

**Repo roles (do not mix):**

| Alias | Role | Path / URL |
|---|---|---|
| **-preview** | notes / DRAFT workspace only | this repo · [`speculaas/ai301-coursework-trilogy-preview`](https://github.com/speculaas/ai301-coursework-trilogy-preview) |
| **`~/.claude`** | live graded skill (canonical while iterating) | `~/.claude/skills/plan-check/` |
| **ai301-coursework** | portal submit target | [`speculaas/ai301-coursework`](https://github.com/speculaas/ai301-coursework) · submit **repo root** URL |

Do **not** push this preview repo unless asked. Do **not** submit GenieCode eval/skill files as yours (structure reference only).

---

## Plan here (workflow)

```text
starter skill/  ──copy──►  ~/.claude/skills/plan-check/     (live skill)
                              ▲
preview drafts/*  ──paste──┘  (+ Unit 2 voice-guide.md)
                              │
                         smoke --limit 3  (no --save-run)
                              │
                    revise / --only … (~$0.20/pkg)
                              │
                    confirming full --save-run (~$4)
                              │
         plan.md from plan-73.SEED ──► coursework unit-3/ (not on fix branch)
                              │
         plan-check live → post comment on upstream #73
                              │
         build on YOUR fork: fix/73-*  · re-run Unit 2 repro before/after
                              │
         plan-and-implement.md ──► coursework unit-3/
                              │
 AFTER good: copy installed skill → coursework tools/plan-check/
             + eval-run.txt, plan.md, plan-and-implement.md under unit-3/
                              │
         Portal = coursework REPO ROOT URL
```

**Numbered steps (correct order):**

1. Copy **starter** `skill/` → `~/.claude/skills/plan-check/` (not “install from preview” as the skill root).
2. Paste/review **trilogy-preview drafts** (`rubric` / `procedure` / `evidence-guide`) into that installed skill; carry Unit 2 `voice-guide.md`.
3. Smoke `run_eval.py --limit 3` (**no** `--save-run`); then full confirming `--save-run` when ready.
4. Write `plan.md` from `plan-73.SEED.md` into **submit** coursework path (not on the fix branch).
5. Post plan comment on upstream #73 from your account; build on `fix/73-*` on **your** fork; re-run Unit 2 repro as before/after; write `plan-and-implement.md`.
6. **After** everything looks good: copy filled installed skill into submit repo `tools/plan-check/`, plus `eval-run.txt`, `plan.md`, `plan-and-implement.md` under `beat-1-sandbox/unit-3/` (match course layout — GenieCode/user stubs for exact paths). Portal = coursework **repo root** URL.

---

## Checklist

Status blanks: `[ ]` todo · `[~]` in progress · `[x]` done · `[!]` blocked / skip

### A. Skill install + fold DRAFTs
- [ ] **A1** mkdir + copy starter skill → live install  
  `mkdir -p ~/.claude/skills/plan-check`  
  `cp -R …/ai301-unit3-starter/skill/. ~/.claude/skills/plan-check/`
- [ ] **A2** Paste preview DRAFTs into installed files (edit **inside** `~/.claude/skills/plan-check/`):  
  - `rubric.md` ← `drafts/rubric.DRAFT.md`  
  - `procedure.md` ← `drafts/procedure.DRAFT.md`  
  - `references/evidence-guide.md` ← `drafts/evidence-guide.DRAFT.md`
- [ ] **A3** Carry Unit 2 voice → installed `voice-guide.md`  
  source: `ai301-coursework/tools/repro-check/voice-guide.md`  
  (optional: one plan-comment rule — promise only what `plan.md` contains)
- [ ] **A4** Confirm live skill is the only place you iterate (preview stays notes/drafts)

### B. Eval loop (tokens)
- [ ] **B1** Smoke from starter `eval/`: `--limit 3` · **no** `--save-run` (cheap sanity)
- [ ] **B2** Revise disagreements with `--only pkg-…` (~**$0.20**/pkg); add canaries if loosening a check (esp. `thread-convention`)
- [ ] **B3** Confirming full run **only** when you believe the set: `--save-run eval-run.txt` (~**$4**); do not hand-edit the file
- [ ] **B4** Aim bar **18/20** + category floor (thread-and-convention has teeth)

### C. Plan #73 (coursework path, not fix branch)
- [ ] **C1** Write `plan.md` from [`drafts/plan-73.SEED.md`](drafts/plan-73.SEED.md) into  
  `ai301-coursework/beat-1-sandbox/unit-3/plan.md`
- [ ] **C2** Live plan-check until JSON `accept` (plan.md + draft comment.md for #73)
- [ ] **C3** Post plan comment on upstream #73 **from your account**
- [ ] **C4** Keep `plan.md` **out** of fix-branch commits

### D. Build + evidence
- [ ] **D1** Branch on **your** fork: `fix/73-<slug>` (e.g. `fix/73-openrouter-env-example`)
- [ ] **D2** You drive, AI operates; no unread diffs
- [ ] **D3** Re-run Unit 2 repro as before/after; paste into `plan-and-implement.md` Evidence
- [ ] **D4** Fill `plan-and-implement.md` (username, comment link + pasted text, branch name, Evidence, four eval-iteration fields)

### E. Upload to submit repo + portal (last)
- [ ] **E1** Copy filled **installed** skill → `ai301-coursework/tools/plan-check/`
- [ ] **E2** Place under `ai301-coursework/beat-1-sandbox/unit-3/`:  
  `eval-run.txt` (harness-written) · `plan.md` · `plan-and-implement.md`
- [ ] **E3** Portal submit = **coursework repo root** URL (not a folder; not this -preview repo)
- [ ] **E4** Honesty check: contents are **yours** — do not ship Genie eval/skill as yours

### F. Tangential / skip unless needed
- [!] **F1** dojo-notes / JSONL split archives under `docs/claude-scratchpad-archives/` — tangential; skip for Project 3 unless debugging a session dump

---

## Links & paths

### Preview notes (this folder)
| Item | Path |
|---|---|
| **This to-do** | [`2026-10-06-unit3-homework-todo.md`](2026-10-06-unit3-homework-todo.md) |
| Kickoff | [`2026-09-30-unit3-homework-kickoff.md`](2026-09-30-unit3-homework-kickoff.md) |
| Activity-today | [`2026-09-30-unit3-activity-today.md`](2026-09-30-unit3-activity-today.md) |
| Session-prep | [`2026-09-29-unit3-session-prep.md`](2026-09-29-unit3-session-prep.md) |
| Overview / Activity / Assignment | [`Overview-Activity-Assignment.txt`](Overview-Activity-Assignment.txt) |
| Live worksheet (PizzaHut) | [`2026-09-30-live-worksheet-PizzaHut.txt`](2026-09-30-live-worksheet-PizzaHut.txt) |
| DRAFTs | [`drafts/`](drafts/) — `rubric.DRAFT.md`, `procedure.DRAFT.md`, `evidence-guide.DRAFT.md`, `voice-notes.DRAFT.md`, `voice-carryover.NOTES.md` |
| Plan seed | [`drafts/plan-73.SEED.md`](drafts/plan-73.SEED.md) |

### Starter (install + eval source of truth)
| Item | Path |
|---|---|
| Unit 3 starter root | `/Users/watney/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-03/ai301-unit3-starter/` |
| Skill to copy | `…/ai301-unit3-starter/skill/` → `~/.claude/skills/plan-check/` |
| Eval harness + README | `…/ai301-unit3-starter/eval/` · [`eval/README.md`](file:///Users/watney/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-03/ai301-unit3-starter/eval/README.md) |
| Smoke command cwd | `…/ai301-unit3-starter/eval` · `python3 run_eval.py --rubric ~/.claude/skills/plan-check/rubric.md --evidence ~/.claude/skills/plan-check/references/evidence-guide.md --limit 3` |

### Live skill + voice carry-over
| Item | Path |
|---|---|
| Installed plan-check | `~/.claude/skills/plan-check/` |
| Unit 2 voice source | `/Users/watney/git/zimmnotes/chat/codepath/ai301/ai301-coursework/tools/repro-check/voice-guide.md` |

### Unit 2 reproduction (re-run for before/after)
| Item | Path |
|---|---|
| Preview repro note | [`../unit-2/reproduction.md`](../unit-2/reproduction.md) |
| Preview repro draft #73 | [`../unit-2/2026-09-29-repro-draft-issue-73.md`](../unit-2/2026-09-29-repro-draft-issue-73.md) |
| Submit-repo Unit 2 repro | `/Users/watney/git/zimmnotes/chat/codepath/ai301/ai301-coursework/beat-1-sandbox/unit-2/reproduction.md` |
| Upstream issue | https://github.com/codepath/pathreview-ai301-fa26-s1/issues/73 |

### Submit repo (portal) — match this layout
| Deliverable | Path under `ai301-coursework` |
|---|---|
| Filled skill | `tools/plan-check/` (`SKILL.md`, `rubric.md`, `procedure.md`, `scope.md`, `voice-guide.md`, `references/evidence-guide.md`, …) |
| Eval transcript | `beat-1-sandbox/unit-3/eval-run.txt` |
| Plan | `beat-1-sandbox/unit-3/plan.md` |
| Write-up | `beat-1-sandbox/unit-3/plan-and-implement.md` |
| Portal URL | https://github.com/speculaas/ai301-coursework (**repo root**) |

### Classmates GenieCode — **structure only** (do not submit as yours)
Local mirror: `/Users/watney/git/zimmnotes/chat/codepath/ai301/classmates/GenieCode-ai301-coursework/`  
Remote: https://github.com/GenieCode/ai301-coursework  

Exact Unit 3 / plan-check layout to mirror (paths only):

```text
beat-1-sandbox/unit-3/
  eval-run.txt
  plan.md
  plan-and-implement.md
tools/plan-check/
  SKILL.md  README.md  procedure.md  rubric.md  scope.md  voice-guide.md
  references/evidence-guide.md
```

**Honesty:** use GenieCode only to confirm folder/file names. Do **not** copy their eval transcript, rubric text, plan, or skill body into your submit repo.

### Tangential skip
- dojo-notes / session JSONL splits under `docs/claude-scratchpad-archives/` — not part of Project 3 upload.

---

## Token cost note

| Run | Approx cost | Writes `eval-run.txt`? | When |
|---|---|---|---|
| Smoke `--limit 3` | cheap (few packages) | **No** (partial refuses save) | First / after big edits |
| Revise `--only pkg-…` | ~**$0.20**/package | **No** | Disagreements + canaries |
| Confirming full (20 scored) | ~**$4** | **Yes** with `--save-run eval-run.txt` | Only when you believe the component set |

Partial runs never count as the submitted run and cannot show category tallies. Unlimited attempts before the deadline; budget for **one** confirming full save after smoke/revise look good.

---

## Due / status

- **Official due:** Mon Oct 5, 2026 · 12:59 AM MDT  
- **Today:** Tue Oct 6, 2026 MDT — **past due**; continue finishing carefully (skill → smoke → plan → comment → build → upload → portal).  
- Points reminder (from kickoff): skill 8 · eval+write-up 10 · plan+build 7. Aim **18/20** + category floor.

---

## First commands (when ready to execute)

```bash
export PATH=$PATH:/opt/homebrew/bin

# 1) Install once from starter (not from -preview)
mkdir -p ~/.claude/skills/plan-check
cp -R /Users/watney/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-03/ai301-unit3-starter/skill/. \
  ~/.claude/skills/plan-check/

# 2) Paste drafts/* into installed rubric / procedure / evidence-guide;
#    paste Unit 2 voice into voice-guide.md
#    (see Checklist A2–A3)

# 3) Smoke only
cd /Users/watney/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-03/ai301-unit3-starter/eval
python3 run_eval.py \
  --rubric ~/.claude/skills/plan-check/rubric.md \
  --evidence ~/.claude/skills/plan-check/references/evidence-guide.md \
  --limit 3
```

Stop before `--save-run`, posting the plan comment, pushing `fix/73-*`, or portal submit until smoke + live plan-check both look good.
