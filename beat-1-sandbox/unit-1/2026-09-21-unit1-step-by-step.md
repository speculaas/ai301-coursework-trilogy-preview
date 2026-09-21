# AI301 Unit 1 — step-by-step (issue-select)

Starter location (updated 2026-09-21): `beat-1-sandbox/unit-01/ai301-unit1-starter/`.

Practical sequence. Pair with the LMS Assignment tab if anything conflicts (LMS wins).

**Deadline reminder:** printed due was Mon Sep 21, 12:59AM MDT. If you are past that with no late allowance, ask staff/`@ai-help` before investing Claude credit.

---

## What you already have locally (from clones)

| Local path | What it is | Fork to your GitHub? |
|---|---|---|
| `…/ai301/beat-1-sandbox/unit-01/ai301-unit1-starter/` | Official Unit 1 materials (`skill/` + `eval/`) | **No.** Just use this clone (or re-clone). Working copy only. |
| `~/.claude/skills/issue-select/` | Installed skill (copy of `skill/` + your rubric/scope edits) | **No.** Stays on your machine. |
| `…/ai301/ai301-coursework-trilogy-preview/` | Layout preview only | **No** — not your graded submit repo. |
| `…/beat-1-sandbox/pathreview/` (if present) | Optional local app clone | **No** for HW1 select. |
| Path Review on GitHub: `codepath/pathreview-ai301-fa26-s1` | Classroom sandbox issues | **Do not fork for HW1 selection.** Browse/pick issues on that repo. Fork is for later contribution/PR workflow (repo description); Unit 1 only asks you to **select** and paste a live grade. |

**Submission repo (separate):** create **once** with GitHub **Use this template** on `codepath/ai301-coursework-template` → public repo named `ai301-coursework` under **your** account. That is packaging for the portal, not where you invent the rubric.

---

## Step-by-step

### 0. Blockers / staff (if still open)
1. Install **Claude Code CLI** (`claude` on PATH) and sign in with course credit. Without it, eval + live accept cannot complete honestly.
2. If past deadline: ask whether a late portal update is allowed (see Slack draft in `2026-09-21-submission-without-claude-and-ai-help-draft.md`).

### 1. Confirm skill install
```bash
ls ~/.claude/skills/issue-select/
# expect: SKILL.md  rubric.md  scope.md  references/
```
If missing:
```bash
cp -R ~/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-01/ai301-unit1-starter/skill/. \
  ~/.claude/skills/issue-select/
```

### 2. Set live scope
Edit `~/.claude/skills/issue-select/scope.md`:
- Repo line: `codepath/pathreview-ai301-fa26-s1`
- Fit profile: a few honest sentences about you

### 3. Write / tighten the rubric
Edit **only** `~/.claude/skills/issue-select/rubric.md` (checks table + verdict rule).  
Optional free smoke (not official):
```bash
python3 ~/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-01/ai301-unit1-starter/eval/simulate_rubric.py
```

### 4. Eval loop (costs Claude credit)
```bash
cd ~/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-01/ai301-unit1-starter/eval

# smoke
python3 run_eval.py --rubric ~/.claude/skills/issue-select/rubric.md --limit 3

# full run, read disagreements
python3 run_eval.py --rubric ~/.claude/skills/issue-select/rubric.md

# cheap fixes
python3 run_eval.py --rubric ~/.claude/skills/issue-select/rubric.md --only issue-07,issue-12

# confirming full run you will submit (writes the file)
python3 run_eval.py --rubric ~/.claude/skills/issue-select/rubric.md \
  --save-run /tmp/eval-run.txt
```
Target: ≥18/20 agreement **and** category floor. Do not hand-edit `eval-run.txt`.

### 5. Live-select a Path Review issue
1. Open issues on `https://github.com/codepath/pathreview-ai301-fa26-s1/issues` (good-first / small bugs are fine).
2. From any directory, run Claude Code with the skill on 2–3 URLs, e.g.  
   `claude "issue-select: grade these candidate first issues: <URL> <URL>"`
3. Pick one the skill **accepts**. Copy the **full** output ending in the fenced JSON (`"verdict": "accept"`).
4. **Do not** post a claim comment yet (Unit 2).

### 6. Create submission repo (if you don’t have it yet)
1. GitHub → `codepath/ai301-coursework-template` → **Use this template** → public → name `ai301-coursework`.
2. You do **not** fork the unit1 starter into this repo.

### 7. Upload Unit 1 artifacts into that repo
Into your `ai301-coursework`:

| Upload to | From |
|---|---|
| `tools/issue-select/` | Current files from `~/.claude/skills/issue-select/` |
| `beat-1-sandbox/unit-1/eval-run.txt` | Harness `--save-run` output |
| `beat-1-sandbox/unit-1/selection.md` | Issue link + live transcript + reflection fields |

Web UI “Add file → Upload files” is what the assignment describes.

### 8. Portal
Submit the **link** to your public `ai301-coursework` repo. Latest upload wins if resubmits are still allowed.

---

## Short answers

- **Can I just use what was cloned?** Yes for **doing** the work (`ai301-unit1-starter` + installed skill).
- **Fork the starter?** No.
- **Fork Path Review for HW1?** Not required to *select*; browse the shared section repo. (Contribution/PR later may use a fork — Unit 2+.)
- **What goes on *my* GitHub?** The **template** repo `ai301-coursework`, filled at the end (or whenever you upload).

