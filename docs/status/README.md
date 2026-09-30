# AI301 Unit 3 — workstream board

Personal coach board for the **Unit 3 Plan & Build homework arc**: Mermaid overview plus expand/collapse branch cards.

**Trilogy-preview only.** This lives in [`speculaas/ai301-coursework-trilogy-preview`](https://github.com/speculaas/ai301-coursework-trilogy-preview). It is **not** the portal submit. Graders want the whole [`speculaas/ai301-coursework`](https://github.com/speculaas/ai301-coursework) repo-root URL, not this board and not a folder URL.

**Not today's worksheet.** The live activity (Wed Sep 30, 2026, 4:00 PM MDT) still uses the group Doc and [`2026-09-30-unit3-activity-today.md`](../../beat-1-sandbox/unit-3/2026-09-30-unit3-activity-today.md). This board is the homework thread beside that, not a replacement.

**Not repository commit history** — conceptual workstreams only.

**Interaction:** click a gitGraph commit to open the matching milestone; click a card to highlight the graph. Every `commit id` in `mermaid` matches a `branches[].nodes[].title` (branch id/label also link). Header search scans nodes; Back restores the cards. Direct link: `?board=ai301-unit3`.

## Run locally

`fetch()` needs HTTP. Opening `index.html` as `file://` will not load `data/boards.json`.

```bash
cd docs/status   # from ai301-coursework-trilogy-preview root
python3 -m http.server 8766
```

Open [http://127.0.0.1:8766/](http://127.0.0.1:8766/)

## Edit content

`data/boards.json` defaults to board id `ai301-unit3`, which loads `data/workstream.json`:

- top: `title`, `caption`, `mermaid` (gitGraph string), `branches[]`
- branch: `id`, `label`, `status` (`done` | `open` | `blocked`), `summary`, `nodes[]`
- node: `id`, `title`, `status`, `detail`

To add another board: drop a same-schema JSON file under `data/`, register a unique `id`, filename, and `label` in `data/boards.json`, then open `?board=<id>`. No build step.

## Notes this board is grounded in

- Session prep: [`../../beat-1-sandbox/unit-3/2026-09-29-unit3-session-prep.md`](../../beat-1-sandbox/unit-3/2026-09-29-unit3-session-prep.md)
- Activity today (checklist + DRAFTs): [`../../beat-1-sandbox/unit-3/2026-09-30-unit3-activity-today.md`](../../beat-1-sandbox/unit-3/2026-09-30-unit3-activity-today.md)

Continuity is Path Review issue 73 (`OPENROUTER_API_KEY` docs vs `.env.example`). Only that Unit 2 claim/repro and the preview notes are marked done. Skill, eval, plan/build, and submit stay open. Project 3 due Mon Oct 5, 2026, 12:59 AM MDT.

## Reframework credit

Board assets (`app.js`, `styles.css`, `index.html`, `.nojekyll`) are a copy of the AI201 lab6 / FedPrint `docs/status` pattern. Source (not modified):

`zimmnotes/chat/codepath/ai201/m2/w6/ai201-lab6-grocerylist-starter/docs/status/`

That copy originally came from the FedPrint status board. Optional prompt docs, if you extend the pattern, stay with AI201 tooling: `zimmnotes/chat/codepath/ai201/llm/docs/workstream-board/`.

```bash
SRC="/Users/watney/git/zimmnotes/chat/codepath/ai201/m2/w6/ai201-lab6-grocerylist-starter/docs/status"
DEST="/Users/watney/git/zimmnotes/chat/codepath/ai301/ai301-coursework-trilogy-preview/docs/status"

mkdir -p "$DEST/data"
cp -v "$SRC/app.js" "$SRC/styles.css" "$SRC/index.html" "$SRC/.nojekyll" "$DEST/"
```
