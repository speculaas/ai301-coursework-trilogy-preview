# Why `issue-01` failed on a cheap Claude `--limit 3` (and how to handle it)

## Is this note worth keeping?

**Yes.** Cheap Claude runs are for catching rubric over-tightening before a full ~$4
confirming run. Documenting the first false reject saves re-learning the same trap
(smoke said accept; Sonnet said reject on `scope-fits-newcomer`).

## What happened

Command:

```bash
python3 run_eval.py --rubric ~/.claude/skills/issue-select/rubric.md --limit 3
```

| Item | Gold | Claude | Agree? |
|---|---|---|---|
| `issue-01` | accept (clear docs task) | **reject** — `scope-fits-newcomer` | **NO** |
| `issue-02` | reject | reject | yes |
| `issue-03` | reject | reject | yes |

`issue-01` (conda docs for PyPI-via-`conda install`) proposes **one permanent docs page**
plus updates to a few related docs files. Gold treats that as a good first issue.
After we tightened `scope-fits-newcomer` against mega/tracking issues, Sonnet over-read
“several docs files” as an **umbrella** and rejected a clear-accept.

Offline `simulate_rubric.py` still **accepted** `issue-01` — reminder that smoke is an
estimate, not a faithful Sonnet replay.

## How to handle it

1. **Loosen the check wording** (done in starter `skill/rubric.md`): multi-file **docs**
   work that serves **one feature/workflow** still **passes**; true tracking/mega lists,
   open design debates, and one-line wishes still **fail**.
2. **Re-copy** starter skill → `~/.claude/skills/issue-select/`.
3. **Re-check only the miss** (cheap):
   ```bash
   cd …/ai301-unit1-starter/eval
   python3 run_eval.py --rubric ~/.claude/skills/issue-select/rubric.md --only issue-01
   ```
4. If it flips to accept, optionally `--only issue-10,issue-15,issue-20` to ensure scope
   rejects still hold — then **one** full confirming run with `--save-run`.
5. Do **not** hand-edit `eval-run.txt`. Do **not** burn repeated full 20s while iterating.

## Write-up tip

If this run stays in your history, you can use `issue-01` in **Issue analysis**: gold
accept vs an earlier reject, and how you changed `scope-fits-newcomer` so coherent docs
packages pass while mega-issues still fail. A single final full run that already passes
is also fine — iterations are not required for credit.
