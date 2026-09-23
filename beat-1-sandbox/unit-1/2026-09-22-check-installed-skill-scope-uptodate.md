# Check whether installed `issue-select` scope is up to date

Local helper for AI301 Unit 1. Compares Claude’s installed skill copy with the
starter skill you edit/commit first.

## Paths

| Role | Path |
|---|---|
| Installed (what Claude Code loads) | `~/.claude/skills/issue-select/scope.md` |
| Source of truth (edit → commit → copy) | `…/beat-1-sandbox/unit-01/ai301-unit1-starter/skill/scope.md` |

Adjust the starter path if your clone lives elsewhere.

## One-shot: is it current?

```bash
SRC=~/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-01/ai301-unit1-starter/skill/scope.md
INST=~/.claude/skills/issue-select/scope.md

cmp -s "$INST" "$SRC" && echo UP_TO_DATE || echo OUT_OF_DATE
```

## See what differs

```bash
diff -u "$INST" "$SRC"
shasum -a 256 "$INST" "$SRC"
```

## Whole skill folder (not just scope)

```bash
diff -ru ~/.claude/skills/issue-select/ \
  ~/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-01/ai301-unit1-starter/skill/
```

## Sync after starter edits

Prefer refresh of the full skill so `rubric.md` stays in lockstep too:

```bash
cp -R ~/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-01/ai301-unit1-starter/skill/. \
  ~/.claude/skills/issue-select/
```

Or scope only:

```bash
cp ~/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-01/ai301-unit1-starter/skill/scope.md \
  ~/.claude/skills/issue-select/scope.md
```

Re-run `cmp` until it prints `UP_TO_DATE`.

## What “up to date” must include for live/eval

- **Repo** line: `codepath/pathreview-ai301-fa26-s1` (not the `<ORG>/…` placeholder)
- **Fit profile**: filled AI301-shaped blurb (not `(Write a few sentences here.)`)
- **Rubric**: same as starter after any `scope-fits-newcomer` (or other) edits

Eval mode ignores `scope.md` for grading frozen bundles, but live mode and ranking use it—and a stale install is a common reason live picks the wrong repo field of view.
