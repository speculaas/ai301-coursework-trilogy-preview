# After the 18/20 PASS — submit next steps (and where they come from)

**Status (2026-09-22):** Full harness run **PASS** (18/20, category floor OK).  
Artifact: `/tmp/eval-run.txt` (also keep a copy under this folder as `eval-run.txt` when packaging).  
Eval alone is **not** a complete portal submit.

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
| Rubric + skill + Claude eval ≥18/20 | **Done** (`/tmp/eval-run.txt`) |
| Confirm late portal submit with staff (`@ai-help`) | **Open** (printed deadline was Mon Sep 21 12:59AM MDT) |
| Live-select Path Review issue + paste accept transcript | **Open** |
| Fill `selection.md` reflections / four write-up fields | **Open** |
| Upload skill + `eval-run.txt` + `selection.md` into **your** `ai301-coursework` | **Open** |
| Paste course-repo URL in course portal | **Open** |

`ai301-coursework-trilogy-preview` is a **layout/notes** repo, not a substitute for the template-created `ai301-coursework` unless staff say otherwise.

---

## Next steps (in order)

### 1. Staff / late submit *(policy, not LMS submit recipe)*
Ask whether a late Assignment-tab submit is accepted. Don’t assume the portal still takes updates.

### 2. Copy the harness artifact into packaging
```bash
cp /tmp/eval-run.txt \
  /path/to/ai301-coursework/beat-1-sandbox/unit-1/eval-run.txt
```
**Source:** LMS — *eval-run.txt: one complete eval run, written by the harness… Never hand-edit it.*

### 3. Live-select an issue (Unit 1 “Choose your issue”)
1. Browse `https://github.com/codepath/pathreview-ai301-fa26-s1/issues`
2. Run (any cwd):
   ```bash
   claude "issue-select: grade these candidate first issues: <URL> <URL>"
   ```
3. Pick one the skill **accepts**; copy **full** output ending in fenced JSON with `"verdict": "accept"`
4. **Do not** post a claim comment yet (Unit 2)

**Source:** LMS Assignment — *🧭 Choose your issue*; Path Review repo line `codepath/pathreview-ai301-fa26-s1`; *Choosing is not claiming*.

### 4. Fill `beat-1-sandbox/unit-1/selection.md`
- Issue link + live verdict paste  
- Reflection prompts  
- Four scored fields: **Run history**, **Issue analysis**, **Check rationale**, **Trade-offs**

**Source:** LMS — *selection.md* bullet under *What you submit*; points detail (7 pts across those four fields).  
**Tip:** Run history can be one confirming full run if that’s all you did; last score must match `eval-run.txt`. Disagreements `issue-15` / `issue-19` are useful analysis fodder.

### 5. Upload current skill into `tools/issue-select/`
From the install Claude actually used:
```bash
# then GitHub web “Add file → Upload files” into tools/issue-select/
~/.claude/skills/issue-select/   # SKILL.md, rubric.md, scope.md, references/…
```

**Source:** LMS — *tools/issue-select/: your filled rubric.md plus the rest of the installed skill…*

### 6. Ensure the submission repo exists
GitHub → `codepath/ai301-coursework-template` → **Use this template** → public → `ai301-coursework` (your account).

**Source:** LMS — *create it from the course template with GitHub’s "Use this template" button*.

### 7. Portal
Submit **only the link** to that public repo on the Assignment tab.

**Source:** LMS — *You submit one thing: the link to your course repo, through the course portal.*

---

## Related notes in this folder

- `2026-09-21-unit1-step-by-step.md` — full working sequence  
- `2026-09-21-smoke-vs-claude-eval.md` — smoke vs `run_eval.py`  
- `2026-09-22-issue-01-scope-false-reject.md` / `…-run-eval-only-issue-01-sequence.md` — cheap-loop history  
- LMS scrape (outside this repo): `../unit-01/Overview-Activity-Assignment.txt` under zimmnotes `beat-1-sandbox/unit-01/`
