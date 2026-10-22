# Unit 6: Claim Day (Oct 21) — notes for this week

These are my working notes, not the graded file. For every week, see the [notes hub](../../NOTES-HUB.md); the graded file is `beat-2-contribution/contribution-story.md` in ai301-coursework.

| Note | Purpose |
|---|---|
| [2026-10-21-unit6-homework-path.md](2026-10-21-unit6-homework-path.md) | **Start here.** Assignment steps with my status, commands, where each output goes |
| [2026-10-21-claim-choice-235-vs-5289.md](2026-10-21-claim-choice-235-vs-5289.md) | Keep opengris-scaler#235 or swap to simpler-grants-gov#5289 |
| [2026-10-21-fit-filter-update-proposal.md](2026-10-21-fit-filter-update-proposal.md) | Adding "learning value / manageable / new" to the scout |
| [2026-10-21-crack-the-hook-simulated.md](2026-10-21-crack-the-hook-simulated.md) | Simulated run of the breakout game I skipped (spoilers) |
| [2026-10-21-unit6-extra-materials.md](2026-10-21-unit6-extra-materials.md) | Instructor's extra links, concurrent hooks, client vs server side (DeepInfer) |

## Today's topics at a glance

The lecture runs along `main` in three parts. The activity and the instructor's extra materials branch off where they connect. Slide titles are paraphrased.

```mermaid
gitGraph
  commit id: "U6 opens: working with maintainers"
  commit id: "opening: your own evidence"
  branch part1-claim-craft
  commit id: "claim timing"
  commit id: "last week's shortlist"
  commit id: "claim form (real example)"
  commit id: "norms flip: sandbox vs wild"
  commit id: "questions before claiming"
  commit id: "pings and silence"
  commit id: "house rules: PR needs, tests, AI rules"
  checkout main
  merge part1-claim-craft
  branch part2-capability
  commit id: "memory: one scoped orientation run"
  commit id: "the scope rule"
  commit id: "hooks: what a hook is"
  branch extras-hooks
  commit id: "Claude Code hooks ref + guide"
  commit id: "agentic hook definition + draft spec"
  commit id: "concurrent hooks: parallel, strictest wins"
  checkout part2-capability
  commit id: "hook events + where they live"
  commit id: "one entry: tool, command, time limit"
  commit id: "how it answers: JSON in, exit code out"
  commit id: "voice guard"
  commit id: "your voice guide"
  checkout main
  merge part2-capability
  branch part3-choice
  commit id: "the choice"
  commit id: "three lenses, your read"
  checkout main
  merge part3-choice
  commit id: "A5 story + Toolkit U6 entry"
  branch activity
  commit id: "crack-the-hook L1: push to main"
  commit id: "L2: claimed in a comment"
  commit id: "L3: AI-use line vs --web"
  checkout extras-hooks
  commit id: "cli/cli AGENTS.md: repo rules for agents"
  commit id: "certifi 2026.10.19 advisory"
  commit id: "Padlet: several claims approved"
  commit id: "DeepInfer: server side, not hooks"
  checkout main
  merge activity
  merge extras-hooks
  commit id: "this week: update tools, choose + claim"
  commit id: "next: Unit 7 Ship Week"
```

How to read it: hooks are the main thread of today's lecture. The extras branch starts at "what a hook is", because almost every link the instructor shared expands on hooks: the official reference, the definition and spec, and concurrent hooks. The last few extras come from repo rules for agents, dependency hygiene and the claims question, so they come back in at the end. DeepInfer sits on that branch only to mark the boundary: hooks run on my machine, and DeepInfer runs on the provider's servers.
