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
  commit id: "6: scan + scan-output.md (10-15)"
  commit id: "7: scan-notes + rubric prereq fix (10-15)"
  commit id: "8: picks #235 + HHS#5289 (10-15)"
  commit id: "9: graded, HHS accept, #235 reject (10-15)"
  commit id: "NEXT 10: U5 Toolkit entry (drafted 10-15)"
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

## Fun twist: Japan Shinkansen map as gitGraph

Same viewer, no course content: Shinkansen lines are branches and stations are commits in geographic order. The conceptual trunk is re-rooted south-to-north from Kagoshima-Chuo through Hakata, Shin-Osaka, and Tokyo, placing Tokyo nearer the visual center in both LR and TB views. Joetsu/Hokuriku diverge at Omiya, Yamagata at Fukushima, Akita at Morioka, Hokkaido at Shin-Aomori, and the future Chuo maglev at Tokyo. The `window-views` branch adds two intentionally non-station video bubbles at Niigata. `NEXT` + `type: REVERSE` means not yet open. Live board: `?board=shinkansen` (data: `docs/status/data/shinkansen.json`). Not to scale; not every station.

Orbit prompts (verbatim M365 bundle extracts, reusable paste-text): [`prompts/PROMPT_orbit_m365.md`](prompts/PROMPT_orbit_m365.md) · [`prompts/PROMPT_orbit_followup_m365.md`](prompts/PROMPT_orbit_followup_m365.md) — paste into M365 together with the corresponding `BUNDLE_*.txt`, or regenerate the bundle.

```mermaid
gitGraph
  commit id: "Kagoshima-Chuo" tag: "Kyushu Shinkansen"
  commit id: "Kumamoto"
  commit id: "Shin-Tosu"
  commit id: "Hakata" tag: "Kyushu + Sanyo boundary"
  commit id: "Shin-Yamaguchi"
  commit id: "Hiroshima"
  commit id: "Okayama"
  commit id: "Himeji"
  commit id: "Shin-Kobe"
  commit id: "Shin-Osaka" tag: "Sanyo + Tokaido boundary"
  commit id: "Kyoto"
  commit id: "Nagoya" tag: "Tokaido Shinkansen"
  commit id: "Hamamatsu"
  commit id: "Shizuoka"
  commit id: "Shin-Yokohama"
  commit id: "Tokyo" tag: "Tokaido + Tohoku hub" type: HIGHLIGHT
  branch chuo-maglev
  checkout chuo-maglev
  commit id: "NEXT Shinagawa (Chuo maglev)" type: REVERSE
  commit id: "NEXT Nagoya (Chuo maglev)" type: REVERSE tag: "Chuo Shinkansen maglev"
  checkout main
  branch tohoku
  checkout tohoku
  commit id: "Ueno"
  commit id: "Omiya" tag: "Joetsu + Hokuriku junction"
  branch joetsu
  checkout joetsu
  commit id: "Echigo-Yuzawa"
  commit id: "Nagaoka"
  commit id: "Niigata" tag: "Joetsu Shinkansen"
  branch window-views
  checkout window-views
  commit id: "VIDEO E7 Toki window view"
  commit id: "VIDEO E4 Max Toki upper deck" tag: "4K60 upper-deck view"
  checkout joetsu
  checkout tohoku
  branch hokuriku
  checkout hokuriku
  commit id: "Karuizawa"
  commit id: "Nagano"
  commit id: "Toyama"
  commit id: "Kanazawa"
  commit id: "Tsuruga" tag: "Hokuriku Shinkansen"
  checkout tohoku
  commit id: "Fukushima" tag: "Yamagata junction"
  branch yamagata
  checkout yamagata
  commit id: "Yonezawa"
  commit id: "Akayu"
  commit id: "Yamagata" tag: "prefectural capital"
  commit id: "Sakuranbo-Higashine"
  commit id: "Murayama"
  commit id: "Tendo"
  commit id: "Shinjo" tag: "Yamagata Shinkansen"
  checkout tohoku
  commit id: "Sendai"
  commit id: "Morioka" tag: "Akita junction"
  branch akita
  checkout akita
  commit id: "Tazawako"
  commit id: "Kakunodate"
  commit id: "Omagari"
  commit id: "Akita" tag: "Akita Shinkansen"
  checkout tohoku
  commit id: "Shin-Aomori" tag: "Tohoku Shinkansen"
  branch hokkaido
  checkout hokkaido
  commit id: "Shin-Hakodate-Hokuto" tag: "Hokkaido Shinkansen"
  commit id: "NEXT Sapporo" type: REVERSE tag: "extension under construction"
```
