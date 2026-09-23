# Debug: live `issue-select` on #73 blocked (2026-09-22)

## Is it good to commit this?

**Yes, as debug documentation** in the trilogy-preview notes repo — not as a
graded LMS artifact. It records *why* live select failed so you do not re-paste
a non-accept log into `selection.md`. Do **not** upload this file to
`ai301-coursework` as the verdict transcript.

Companion log: `debug-live-select-issue-73-skill-read-denied-2026-09-22.txt`

## What the log shows

Claude refused to grade because it could not read the installed skill:

- `~/.claude/skills/issue-select/scope.md`
- `~/.claude/skills/issue-select/rubric.md`

Session was **non-interactive**, so permission prompts could not be answered.
It never fetched issue #73. No accept/reject JSON was produced.

`gh` itself works from a normal Mac shell (issue #73 is visible). The blocker
was Claude Code tool permissions / interactivity, not missing GitHub auth.

## Likely cause of “non-interactive”

This pattern:

```bash
claude "…" 2>&1 | tee some.txt
```

pipes stdout into `tee`. That often makes Claude treat the session as
non-interactive, so it cannot show “Allow read?” prompts → auto-deny → this log.

## How to resolve (pick one)

### A) Interactive first (recommended)

In **Mac Terminal** (no pipe):

```bash
claude --add-dir ~/.claude/skills/issue-select \
  "issue-select: grade this candidate first issue: https://github.com/codepath/pathreview-ai301-fa26-s1/issues/73"
```

When prompted, **Allow** reads under `~/.claude/skills/issue-select/**` and any
`gh` / network fetch for the issue. After you see accept JSON, copy from the
terminal (or run again with tee **only after** permissions are remembered).

### B) Save after permissions already granted

Once allow-lists stick for that directory:

```bash
claude --add-dir ~/.claude/skills/issue-select \
  "issue-select: grade this candidate first issue: https://github.com/codepath/pathreview-ai301-fa26-s1/issues/73" \
  2>&1 | tee ~/git/zimmnotes/chat/codepath/ai301/ai301-coursework-trilogy-preview/beat-1-sandbox/unit-1/live-accept-transcript-issue-73.txt
```

Name the successful file clearly (`live-accept-…`), not `debug-…`.

### C) Windows note

Approving prompts must happen on the machine running `claude`. GitHub-in-browser
on Windows does not approve Mac permission dialogs. SSH into Mac only helps if
that SSH session can answer the prompts interactively.

## After a real accept

1. Paste full output into `selection.md` → Verdict output
2. Set Issue link to `https://github.com/codepath/pathreview-ai301-fa26-s1/issues/73`
3. Fill reflections / four write-up fields
4. Upload skill + `eval-run.txt` + `selection.md` to `speculaas/ai301-coursework`
