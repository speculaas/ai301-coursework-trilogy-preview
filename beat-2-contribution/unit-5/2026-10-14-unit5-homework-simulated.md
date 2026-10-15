# Unit 5 homework — SIMULATED walkthrough (Assignment tab, steps 1–10)

> **SIMULATED.** This is a rehearsal file. Step 1 and the `gh` searches in section 4 were really run (2026-10-14, ~7:10 PM MDT). Nothing was installed, `~/.claude/skills` was not touched, and **no `claude` grading was run**. Section 5 is a made-up example of what the output should look like, not a real result.

Back to the guide: [2026-10-14-unit5-activity-today.md](2026-10-14-unit5-activity-today.md) · Practice worksheet: [2026-10-14-unit5-worksheet-mock.md](2026-10-14-unit5-worksheet-mock.md)

## 0. Fixing the team's Phase 1 search

Our team's best search was `is:issue is:open label:"good first issue" language:python csv OR json` (6.9k). Without parentheses, the `OR` can split the query into "everything + csv" OR "json". Fixed version:

```
is:issue is:open label:"good first issue" language:python (csv OR json)
```

Tighter version: add `in:title`. For gh, see the gotcha in section 4. Quoting `"csv OR json"` as a single argument turns it into a phrase search, and you get 0 results.

## 1. Step-by-step status

| # | Step | Status |
|---|------|--------|
| 1 | Check gh (`gh auth status`) | **Done for real.** gh 2.96, logged in as `speculaas`. Needs `export PATH=$PATH:/opt/homebrew/bin` (add it to `~/.zshrc`) |
| 2 | Save the fit profile from `~/.claude/skills/issue-select/scope.md` | **Done 2026-10-15.** Snapshot: [`../../beat-1-sandbox/unit-1/scope-unit1-snapshot-2026-10-15.md`](../../beat-1-sandbox/unit-1/scope-unit1-snapshot-2026-10-15.md); full backup at `~/.claude/skills-backup-2026-10-15/issue-select/` |
| 3 | Install the scout (`cp ...` then `mv issue-select issue-scout`) | **Done 2026-10-15.** Exact `cp`/`mv` from the Assignment tab (starter at `27e3202`); `rubric.md` and `references/evidence-guide.md` kept |
| 4 | Paste the profile into the new `issue-scout/scope.md` | **Done 2026-10-15.** Section 2 text (with the AI-policy sentence) replaces the placeholder; template comment kept |
| 5 | Write `search-strategy.md` | **Done 2026-10-15.** Section 3 queries and filters in `~/.claude/skills/issue-scout/search-strategy.md` (template comments kept; `From:` line above each query). Re-run 10-15 ~1:30 AM MDT: each query returned 100 (cap); 397 unique, 259 after filters |
| 6 | (Web dry-run bundle: `zimmnotes/.../unit-05/copilot-pack-unit5/BUNDLE_unit5_scout_for_claude_web.txt`, gitignored; not a substitute for the real scan) `claude "issue-scout: run a scan"` → `scan-output.md` (~$1) | To do. Simulated example in section 5 |
| 7 | Fix rubric/strategy, log it in `scan-notes.md` | To do |
| 8 | Pick 2–3 on the Issue Selection site | To do. Checklist in section 6 |
| 9 | `claude "issue-scout: grade <URL> <URL>"` (~$0.20 each) | To do |
| 10 | Unit 5 Toolkit entry in `contribution-story.md` | Draft in section 7 |

## 2. Proposed scope.md fit profile (paste under "Your fit profile")

These are your real Unit 1 sentences. Only the last sentence is new, and it's optional (the repo-policy lesson from yt-dlp):

```
PhD student (UNM) with industry Python backend / storage / ML-CV experience (ASUS). Comfortable with Python, REST APIs, tests, docs, and small bugfixes; also interested in light CI/tooling and dependency or config hygiene when the ticket is clearly scoped. Prefer bounded issues with clear acceptance criteria—reproducible bugs, docs/tests, API edge cases, or small workflow/config fixes—that teach the contribution loop. Want practice at reading a foreign codebase and landing a reviewable first PR without sprawling refactors. Avoid large frontend/UI redesigns, long unsettled product debates, umbrella typing epics, and work that needs deep domain redesign before a first PR. Skip projects whose CONTRIBUTING.md forbids AI-assisted contributions.
```

## 3. Draft search-strategy.md

```markdown
## Queries

# From: "industry Python backend / storage / ML-CV experience" (storage half)
gh search issues --language python --label "good first issue" --state open --no-assignee --updated ">2026-08-15" --limit 100 --json title,repository,labels,assignees,commentsCount,updatedAt,url -- storage OR s3 OR cache -linked:pr

# From: "Comfortable with Python, REST APIs ... small bugfixes" + "API edge cases"
gh search issues --language python --label "good first issue" --label bug --state open --no-assignee --limit 100 --json title,repository,labels,assignees,commentsCount,updatedAt,url -- api OR endpoint OR fastapi -linked:pr

# From: "docs/tests, ... small workflow/config fixes" + "light CI/tooling"
gh search issues --match title --language python --label "good first issue" --state open --no-assignee --comments "<10" --updated ">2026-08-15" --limit 100 --json title,repository,labels,assignees,commentsCount,updatedAt,url -- test OR docs OR ci -linked:pr -label:question

# From: "ML-CV experience (ASUS)"
gh search issues --language python --label "good first issue" --state open --no-assignee --updated ">2026-08-15" --limit 100 --json title,repository,labels,assignees,commentsCount,updatedAt,url -- opencv OR image OR dataset -linked:pr

## Ranking filters

1. Deduplicate by URL across all queries.
2. Drop any result with an assignee.
3. Drop any result not updated since 2026-08-15 (about 60 days).
4. Drop any result with 10 or more comments ("long unsettled product debates").
5. Drop any result whose labels match question, discussion, epic, wontfix, duplicate, design, feature, enhancement, frontend or ui ("avoid large frontend/UI redesigns", "umbrella ... epics").
6. Order: fewest comments first; tie-break, `bug` label before no `bug` label; then most recently updated first.

## How many to grade

Grade the top **5** ranked results per scan.
```

**Repo-policy gate (yt-dlp lesson).** "Does the repo's CONTRIBUTING.md forbid AI/LLM help?" **can't** be a ranking filter, because gh doesn't return it. Put it in `rubric.md` as a required check ("read CONTRIBUTING.md / AI policy; reject if AI-assisted contributions are banned"). The same goes for "clear repro steps" and "maintainers respond": both are rubric checks, not ranking rules.

## 4. Real scan results (run 2026-10-14 ~7:10 PM MDT)

| Query (profile sentence) | Total on GitHub | Returned (`--limit 100`) |
|---|---|---|
| Q1 storage OR s3 OR cache | 442 | 100 |
| Q2 api OR endpoint OR fastapi + bug | 429 | 100 |
| Q3 test OR docs OR ci, in title, <10 comments | 1,855 | 100 |
| Q4 opencv OR image OR dataset | 644 | 100 |

- **Unique after dedup:** 397 of 400.
- **After ranking filters 2–5:** 256 kept.
- **Ranked top five** (rule 6). All have 0 comments and the `bug` label:

| # | Issue | Updated | Labels |
|---|---|---|---|
| 1 | [workfloworchestrator/orchestrator-core#1872](https://github.com/workfloworchestrator/orchestrator-core/issues/1872): ALL_SCHEDULERS deprecation warning fires on any import | 2026-10-14 | bug, good first issue |
| 2 | [cubrid-lab/cubrid-cookbook-python#361](https://github.com/cubrid-lab/cubrid-cookbook-python/issues/361): preserve links with query strings + fragments when staging | 2026-10-14 | bug, gfi, size: S |
| 3 | [existence-master/Sentient#355](https://github.com/existence-master/Sentient/issues/355): Flaky test on Windows CI | 2026-10-14 | bug, gfi, size: S |
| 4 | [ThreeSixtyGiving/dataquality#190](https://github.com/ThreeSixtyGiving/dataquality/issues/190): Cache 360Giving schema so download failures don't crash | 2026-10-12 | bug, gfi |
| 5 | [AutomatosAI/automatos-ai#1059](https://github.com/AutomatosAI/automatos-ai/issues/1059): API returns 500 instead of 404/400 | 2026-10-09 | bug, gfi, backend |

The next ones down are automatos-ai#1057, mila-iqia/cluv#200 and PicadoLabs/ai-model-router#37.

**What we learned from the real run:**
- **gh gotcha:** `gh search issues "storage OR s3 OR cache" ...` returned **0**. Quoting the keywords as one argument makes gh search for the exact phrase. Put the keywords unquoted after `--` along with the negative filters (`-- storage OR s3 -linked:pr`).
- **Every query hit the 100 cap,** so the scout only sees the first 100 in GitHub's default (best-match) order. Rule 6 can only re-rank those 100. Tighter queries make it more likely the real best issue is in the list.
- **"Fewest comments first" favors brand-new issues** (3 of the top 5 were opened today). It's a weak signal that anyone answers questions, so the rubric's "maintainers respond" check matters.
- **Running searches back to back hit GitHub's secondary rate limit.** Space them out.

## 5. SIMULATED scan-output.md (expected shape, not real)

```
SIMULATED — Scan 2026-10-xx: 4 queries, 397 unique, 256 after filters, graded top 5.
1. orchestrator-core#1872 — ACCEPT. Clear repro (import triggers warning), small scope.
2. cubrid-cookbook-python#361 — ACCEPT (weak). Docs tooling; fit OK.
3. Sentient#355 — REJECT. Flaky Windows-only CI; can't reproduce on macOS.
4. dataquality#190 — ACCEPT. Bounded caching fix; matches storage profile.
5. automatos-ai#1059 — CHECK. Fit good; check CONTRIBUTING / maintainer activity.
```json
{"simulated": true, "candidates": [{"url": "...", "verdict": "accept", "checks": {...}}]}
```
```

## 6. Picking 2–3 on the Issue Selection site (not yet seen)

Filters to set: Language **Python**. Tags such as **bug / docs / tests / backend / CI**. Leave Organization empty unless a project stands out.

For each issue, check:
- clear repro or acceptance criteria
- no PR linked and no non-classmate claim
- maintainers replied recently
- CONTRIBUTING.md allows AI help
- you can run its tests on a Mac in under a day

Click Claim (up to 3; it doesn't post anything) to hold picks while you decide, then run:

```
claude "issue-scout: grade <URL> <URL> <URL>"
```

(~$0.20 each.) Add the read-out to `scan-output.md` below the scan.

## 7. Draft Unit 5 Toolkit entry (rewrite in your own words)

```
### Unit 5: turned my fit profile into a four-query issue scout
- What it produced: 4 gh queries from my profile sentences returned 397 unique issues; free filters kept 256 and ranked five for grading.
- What fought me: quoting "storage OR s3" made gh search a phrase and return 0, and every query capped at 100, so ranking only saw a slice.
- What I changed: moved keywords unquoted after `--`, added a fewest-comments-then-bug ordering, and added a CONTRIBUTING.md AI-policy check to my rubric after the yt-dlp case.
```

## 8. What's left for you to actually do

1. Copy your profile (section 2) somewhere safe, then run the two install commands from the Assignment tab yourself.
2. Paste the profile into `issue-scout/scope.md`, and the section 3 strategy into `search-strategy.md`. Add the AI-policy check to `rubric.md`.
3. Rerun one query in your terminal to confirm, then run the real scan (~$1) and save `scan-output.md`.
4. Log your fixes in `scan-notes.md` (dated lines).
5. Pick 2–3 on the Issue Selection site and grade them.
6. Write the real Unit 5 Toolkit entry in `ai301-coursework/beat-2-contribution/contribution-story.md`, commit it, and submit the repo link.
