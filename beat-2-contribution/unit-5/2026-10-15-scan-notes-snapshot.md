# scan-notes.md: dated changes to my scout (step 7)

Format: date | what happened | why / fix | status (changed = file actually edited; proposed = logged, not applied yet)

2026-10-14 | `gh search issues "storage OR s3 OR cache"` returned 0 | a quoted argument is an exact phrase; keywords go unquoted after `--` | changed (search-strategy.md queries written that way)
2026-10-15 | step 6 CLI scan: 4 queries, each capped at 100 -> 397 unique -> 255 after filters -> top 5 graded (4 accept) | every query hit --limit 100, so ranking only sees GitHub's best-match slice | proposed (tighter queries)
2026-10-15 | sort key did not discriminate: top 5 all had 0 comments + bug | add tie-break: size:S/docs labels first, then oldest created | proposed
2026-10-15 | codepath sandbox repos leaked into the ranked list (ranks 19-20) | drop repos owned by codepath | proposed
2026-10-15 | automatos-ai had 2 of the top 5 | keep at most 1 result per repo | proposed
2026-10-15 | Q2 supplied 13 of the top 20 | narrow Q2 or take at most 5 per query | proposed
2026-10-15 | Q4 "image" too broad | opencv OR torchvision OR "computer vision" (check gh phrase handling first) | proposed
2026-10-15 | `--updated ">2026-08-15"` is hard-coded and drifts | use a date 60 days before the scan | proposed
2026-10-15 | bulk/agent-filed issues (automatos #1057/#1059 updated 4 s apart; leitir ready-for-agent; librefang#8590 bot-opened with no ask) | who-filed check; good-first-signal should not count a bot opener | proposed
2026-10-15 | no check for whether outside contributors' PRs get merged | candidate rubric check from repo history | proposed
2026-10-15 | not-already-taken passes a live stranger claim (mahout#1468, comment 2026-09-21 with a plan) | claim comment <=30 days with no PR or maintainer reply => unclear/hold | proposed
2026-10-15 | site Language=Python filter is repo-level: 7 of the site top 10 were Rust/TS/docs-only, and the rubric ignores language | language-fit preferred check or repo-language ranking filter | proposed
2026-10-15 | CLA (FINOS) and DCO (Eclipse OpenSOVD) newcomer costs not captured | note field or preferred "no CLA/DCO" check | proposed
2026-10-15 | beets AI_POLICY bans AI only for good-first issues | ai-policy-ok: a scoped ban counts when it covers the candidate | proposed
2026-10-15 | feasibility (QNX toolchain, GPU) invisible to the rubric | can-reproduce-locally check | proposed
2026-10-15 | my gh evidence sampler returned no maintainer replies for all 50 samples (only newest items, issue comments only) | sample items >=7 days old; count reviews, review comments, merges; record commit authors + bot flag | changed (my evidence script ev_site.py, outside the skill)
2026-10-15 | CLI scan flagged cubrid-cookbook-python's AGENTS.md as unusually agent-targeted (Copilot/maintainer review route for standalone agents) | treat as process cost, not a fail | proposed (note only)
2026-10-15 | step 9 rejected finos/opengris-scaler#235 only via a loose reading of scope: body says "Once numerical capabilities are supported (#233)", #233 open, a maintainer says #951 should be done first | added fail condition (6) "blocked on an open prerequisite" to scope-fits-newcomer; check names unchanged | changed (rubric.md; backup in skills-backup-2026-10-15)
2026-10-15 | opengris AGENTS.md forbids an agent Co-authored-by trailer | strip the trailer from commits if I contribute there | proposed (habit, nothing to edit yet)
2026-10-15 | step 9 accepted HHS/simpler-grants-gov#5289 with a caveat: issue is from 2025-06 | run `npx update-browserslist-db@latest` / a frontend build and confirm the warning still appears before claiming | proposed (to do before U6 claim)
