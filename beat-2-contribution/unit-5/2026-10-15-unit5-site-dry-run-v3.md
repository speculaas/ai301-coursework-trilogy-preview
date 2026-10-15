# Unit 5: web dry run v3 on Issue Selection site picks (2026-10-15)

This is Claude web (Sonnet)'s answer to `BUNDLE_unit5_scout_site_v3.txt`, in my summary. The raw dialogue JSON stays in the gitignored copilot-pack. It is a **web dry run, not the real scout grade**: step 9 is `claude "issue-scout: grade <URL> <URL>"`. Input is the [site scan](2026-10-15-unit5-site-scan.md).

## Grades (rubric.md + evidence guide, unclear = fail)

| # | Issue | Web verdict | My prelim | Deciding field |
|---|---|---|---|---|
| 1 | eclipse-iceoryx/iceoryx2#1992 | **accept** | reject | scope: two checkbox criteria (update build script, update tutorial) |
| 2 | code-charity/youtube#4314 | reject | reject | scope unclear: size and root cause unknown |
| 3 | librefang/librefang#8590 | reject (fail, not unclear) | reject | bot-opened test-comment fragment, no ask |
| 4 | beetbox/beets#5411 | reject | reject | ai-policy: AI not for good-first issues; agents may not open PRs |
| 5 | HHS/simpler-grants-gov#5289 | accept | accept | 3 acceptance criteria |
| 6 | Snoww3d/jwst-data-analysis#1396 | accept | accept | one-line fix spelled out, owner-filed |
| 7 | eclipse-opensovd/classic-diagnostic-adapter#453 | accept | accept | one pure refactor; closed PR #323 doesn't fail |
| 8 | finos/opengris-scaler#235 | accept | accept | concrete proposed change |
| 9 | apache/mahout#1468 | accept, **hold** | accept (caution) | repro + expected result; stranger claim |
| 10 | monarch-initiative/dismech#11297 | accept | accept | one CLAUDE.md section, rule text supplied |

## Where web Claude disagreed with me

- **#1 iceoryx2 flips to accept.** "Needs a QNX toolchain" is a feasibility worry, not a rubric check. If it should count, add a "can reproduce locally" check instead of calling the scope `unclear`.
- **#3 is a fail, not unclear.** There's no ask at all.
- **#5 deserves more credit.** It matches my "dependency or config hygiene" sentence. Check that the warning still appears on main, since the issue has been open since 2025-06.
- **The maintainer-response sampler was broken.** It came back null for all 50 samples, so "maintainer-alive" rested on commit dates alone, with no commit authors. It's fixed now; see the site-scan note.

## Fit ranking (accepted only)

| Rank | Issue | Notes |
|---|---|---|
| 1 | mahout#1468 | Python, ML-adjacent; on hold for the claim |
| 2 | opengris-scaler#235 | Best actionable fit. Costs: FINOS CLA; touches the worker heartbeat/scheduler contract |
| 3 | HHS#5289 | |
| 4 | dismech#11297 | |
| 5 | opensovd CDA#453 | Rust, DCO |
| 6 | jwst#1396 | TS, solo repo, agent merges |
| 7 | iceoryx2#1992 | Rust, QNX toolchain |

## Step 8 picks (suggested)

- **Primary: finos/opengris-scaler#235.** Comment the plan and timing before starting, and confirm the approach (open 13 months, no takers).
- **Conditional: apache/mahout#1468.** `alisha-1000` commented on 2026-09-21 that they'd like to work on it, with a plan. The rubric passes it (stale, no assignee or PR), but scope.md says never claim over a stranger. Ask politely, wait about a week, then move on.
  - Check Apache's generative-AI guidance.
  - Check whether the Rust loader builds without a GPU (the repro used an RTX 4090).
- **Fallback: HHS/simpler-grants-gov#5289**, with **dismech#11297** in reserve.

## Claim flags

| Issue | Flag |
|---|---|
| #9 mahout | stranger claim (above) |
| #10 dismech | the only comment is a bot's; read it in full |
| #2 youtube, #7 opensovd | read the closed PRs #4319 and #323 |

**CLA / UNM IP:** before signing the FINOS CLA, check whether my UNM assistantship has IP terms that cover outside code contributions.

Claude's 7 scan-notes lines are merged into the step 7 draft in [2026-10-15-unit5-web-dry-run.md](2026-10-15-unit5-web-dry-run.md) (section "scan-notes.md candidates").
