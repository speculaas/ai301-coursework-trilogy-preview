# Windows upload pack → `speculaas/ai301-coursework`

Use this folder on Windows (clone/pull trilogy-preview, then open `windows-upload-staging/`).

## 1) Skill → `tools/issue-select/`

Browser: https://github.com/speculaas/ai301-coursework/upload/main/tools/issue-select

Upload everything under `tools/issue-select/` here:
- `SKILL.md`
- `rubric.md`
- `scope.md`
- `references/evidence-guide.md`

## 2) Unit 1 → `beat-1-sandbox/unit-1/`

Browser: https://github.com/speculaas/ai301-coursework/upload/main/beat-1-sandbox/unit-1

Upload:
- `eval-run.txt` (**ready** — 18/20 PASS harness output)
- `selection.md` (**not ready** — still FILL-IN; needs live accept paste + reflections)

Do **not** upload `live-transcript-issue-73.NOT-READY.txt` as the verdict — it is a failed permission run, not an accept transcript.

## Still needed before portal

1. Re-run live `#73` on a machine where you can **approve** Claude’s `gh` / file prompts (see below).
2. Paste accept transcript into `selection.md`, fill write-ups, then upload that file.
3. Submit course-repo link on the portal (late OK with staff if required).

## `gh` approval from Windows?

Claude Code tool approvals are **local to the machine running `claude`**.

- GitHub **website** on Windows does not approve Mac `gh` prompts.
- A Windows → Mac SSH/`sh` session **can** work **if** that session is interactive and you can answer Claude’s permission prompts in that same terminal.
- Easiest: run the live `claude "issue-select: …"` command in **Terminal on the Mac** (or install Claude Code + `gh` on Windows and run it there).

```bash
claude "issue-select: grade this candidate first issue: https://github.com/codepath/pathreview-ai301-fa26-s1/issues/73" \
  2>&1 | tee live-transcript-issue-73.txt
```
