# AI301 status boards (2026-10-14)

Reuses the AI201 `docs/status` workstream-board pattern (zimmnotes `ai201-lab6-grocerylist-starter/docs/status`): one overview **gitGraph** per board, one **branch per workstream**, commit ids as milestone titles, states `done` / `open` (NEXT) / `blocked`. Like the AI201 boards, these are **conceptual workstreams, not repo commit history**. The older single board stays in [`2026-10-14-unit5-fit-profiles-and-status.md`](2026-10-14-unit5-fit-profiles-and-status.md#status-board-update-by-adding-commitsbranches).

**Live page (after push + Pages):** https://speculaas.github.io/ai301-coursework-trilogy-preview/status/ (`?board=unit5-homework`, `?board=beat2-a5`, `?board=roadmap-gitgraph`). Source: [`docs/status/`](../../docs/status/).

`T` = TENTATIVE (pre-release pages, as of 2026-10-14; may change). `NEXT` = open.

**How to update:**
- When a step finishes, drop its `NEXT` prefix and add the date or commit hash, e.g. `commit id: "2: fit profile saved (10-15)"`.
- New work goes in as new `commit` lines; side threads go in as new `branch` lines.
- Every commit id must be unique on the board (Mermaid rejects duplicates).
- If a step is blocked, change it to `BLOCKED: ...` and add `type: REVERSE`.

## Board 1: Unit 5 homework (steps 1-10, this week)

```mermaid
gitGraph
  commit id: "U5 lecture + activity"
  commit id: "1: gh logged in (10-14)"
  branch hw-unit5
  checkout hw-unit5
  commit id: "Simulated run (b623dd6)" type: HIGHLIGHT
  commit id: "2: fit profile saved (10-15)"
  commit id: "3: scout installed (10-15)"
  commit id: "4: profile pasted (10-15)"
  commit id: "5: search-strategy.md (10-15)"
  commit id: "web dry run v1 (10-15)"
  commit id: "site scan + gh evidence (10-15)"
  commit id: "site dry run v3 (10-15)"
  commit id: "NEXT 6: run one scan"
  commit id: "NEXT 7: scan-output.md"
  commit id: "NEXT 8: 2-3 site picks"
  commit id: "NEXT 9: grade picks"
  commit id: "NEXT 10: U5 Toolkit entry"
  checkout main
  merge hw-unit5 id: "Unit 5 homework done"
  branch side-explore
  checkout side-explore
  commit id: "LATER: Vue/full-stack profile #2"
```

| Step | State | Where |
|---|---|---|
| 1 gh logged in | done | |
| 2-5 profile, scout install, search-strategy.md | NEXT | guide "Homework checklist"; draft in `2026-10-14-unit5-homework-simulated.md` |
| 6-7 scan + scan-output.md | NEXT | same |
| 8-9 2-3 Issue Selection site picks graded | NEXT | same |
| 10 Toolkit entry | NEXT | same |

## Board 2: Beat 2 / Assignment 5 (U5-U8, one submission)

A5 (250 pts) is one repo-link submission after U8: due **Mon Nov 9, 12:59 AM MST** (Sunday night). Don't claim before U6.

```mermaid
gitGraph
  commit id: "A5 opens (U5)"
  branch u5-scout
  checkout u5-scout
  commit id: "NEXT U5 scan + grades"
  commit id: "NEXT U5 Toolkit"
  checkout main
  merge u5-scout id: "U5 merged"
  branch u6-claim
  checkout u6-claim
  commit id: "T U6 Oct21 fresh scan"
  commit id: "T U6 claim same hour"
  commit id: "T U6 rubric scope patch"
  commit id: "T U6 voice-guard + CLAUDE.local.md"
  commit id: "T U6 Why I Chose + Toolkit"
  checkout main
  merge u6-claim id: "U6 merged" tag: "claim link"
  branch u7-ship
  checkout u7-ship
  commit id: "T U7 Oct28 ship-manifest.md"
  commit id: "T U7 ship-gate run"
  commit id: "T U7 PR from fork" type: HIGHLIGHT
  commit id: "T U7 Toolkit"
  checkout main
  merge u7-ship id: "U7 merged" tag: "PR link"
  branch u8-monitor
  checkout u8-monitor
  commit id: "T U8 Nov4 pr-monitor"
  commit id: "T U8 playbook.md"
  commit id: "T U8 Toolkit + Learnings"
  checkout main
  merge u8-monitor id: "U8 merged"
  commit id: "NEXT A5 submit repo link (due Mon Nov 9 12:59AM MST)" type: HIGHLIGHT
```
