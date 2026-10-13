# Unit 4 eval: why pkg-13 failed (2026-10-13)

Run: `run_eval.py --skill ~/.claude/skills/pr-precheck --include-calibration --only pkg-09,pkg-13,pkg-16,pkg-18,pkg-01,pkg-20,calib-04` (7 packages, ~$1.75, no `--out` file written).

| item | category | gold | verdict | agree | note |
|---|---|---|---|---|---|
| pkg-01 | standards-wall | reject | reject | yes | |
| pkg-09 | silent-drift | reject | reject | yes | |
| pkg-13 | clear-accept | accept | reject | **NO** | failed: repro-rerun-observable |
| pkg-16 | clear-accept | accept | accept | yes | |
| pkg-18 | unreviewable | reject | reject | yes | |
| pkg-20 | standards-wall | reject | reject | yes | |
| calib-04 | calib | reject | reject | yes | |

## Finding a package's grader log

Each `claude -p` call writes one JSONL in
`~/.claude/projects/-Users-watney-git-zimmnotes-chat-codepath-ai301-beat-1-sandbox-unit-04-ai301-unit4-starter-eval/`.
Every log mentions calib-03/calib-04 (they're quoted in the skill), so count ids and take the top one that isn't calib-03:

```sh
cd ~/.claude/projects/-Users-watney-git-zimmnotes-chat-codepath-ai301-beat-1-sandbox-unit-04-ai301-unit4-starter-eval
for f in *.jsonl; do echo "$f $(grep -o 'pkg-[0-9]*\|calib-0[0-9]' $f | grep -v calib-03 | sort | uniq -c | sort -rn | head -1)"; done
```

Or search the final JSON directly: `grep -l '\\"item\\": \\"pkg-13\\"' *.jsonl` (source string such as `neovim/neovim#41337` also works).

This run: pkg-13 = `2922368f…`, pkg-16 = `6fb7f2f6…`, pkg-09 = `dad1df92…`, pkg-01 = `58adf035…`, pkg-18 = `8ae9bb68…`, pkg-20 = `5d5acd2a…`, calib-04 = `0750552d…`.

## pkg-13 vs pkg-16

| | pkg-13 (neovim, failed) | pkg-16 (minikube, passed) |
|---|---|---|
| Main repro | real before/after exit codes + stderr; grader accepted it | not-a-tar repro pasted, exit 1 + error text |
| Control | **one sentence: "No-ampersand control unchanged."** | valid-tarball control pasted: exit 0, `ssh … grep alpine` |
| Suite | "`make functionaltest` passes" (sentence) → pass | "`go test …` passes" (sentence) → pass |
| repro-rerun-observable | fail | pass |

pkg-13 grader evidence: *"\"No-ampersand control unchanged.\" is a bare prose assertion with no command or output shown."*
pkg-16 grader evidence: *"real pasted output for both the not-a-tar repro … and the valid-tarball control."*

Everything else in pkg-13 passed, including the `-- before/after` output (grader notes: "Main repro shown with real before/after exit codes and stderr"). The only difference is that pkg-16 pasted its control and pkg-13 described it.

## Reject comparison (pkg-09)

pkg-09 **passed** repro-rerun-observable ("Both repro cases re-run with real output") and was rejected on diff-within-plan, plan-delivered, description-matches-diff and template-asks-met. So a looser repro check can't flip it.

## Root cause

The old rubric treated every Test-plan item, including a control, as needing pasted output. pkg-13's plan named a no-ampersand control and its evidence covered it in one sentence. The `-- before:` comment-style output was **not** the cause.

## The fix (zimmnotes `f02681d`) and whether it covers it

The installed row now says: "A control or unchanged-behaviour check … may be reported in one sentence; only the bug's own repro and named failure modes need pasted output." That directly covers the cause. The `-- before/after` clause is harmless but wasn't needed.

## Risk of flipping rejects

Gold rejects whose notes rely on the repro check: pkg-04 (prose "colors work"), pkg-07 (only the single-file control run), pkg-14 (unchanged GET path run), calib-04 (second failure mode not re-run). The fix still fails all of these: prose standing in for the *bug's* repro fails, evidence on the control/unchanged path only fails, and every named failure mode still needs output. calib-04 is the one to watch, since a grader might misread its second failure mode as a "control".

## Next runs

1. `uv run --python 3.12 run_eval.py --skill ~/.claude/skills/pr-precheck --only pkg-13` (~$0.25)
2. Optional: `--only pkg-04,pkg-07,pkg-14 --include-calibration` plus calib-04 to check the rejects hold (~$1)
3. Full run: `--save-run eval-run.txt` (~$5)
