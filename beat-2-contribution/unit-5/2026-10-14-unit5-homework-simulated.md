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
| 6 | `claude "issue-scout: run a scan"` → `scan-output.md` (~$1) | Done 2026-10-15 (Sonnet 5): 397 unique → 255 → top 5, 4 accept / 1 reject. Copy: [`2026-10-15-scan-output-snapshot.md`](2026-10-15-scan-output-snapshot.md). Earlier web dry run: [`2026-10-15-unit5-web-dry-run.md`](2026-10-15-unit5-web-dry-run.md) |
| 7 | Fix rubric/strategy, log it in `scan-notes.md` | **Done 2026-10-15.** `~/.claude/skills/issue-scout/scan-notes.md` created (20 dated lines, 3 marked changed, the rest proposed; snapshot [`2026-10-15-scan-notes-snapshot.md`](2026-10-15-scan-notes-snapshot.md)). `rubric.md`: added scope fail (6) "blocked on an open prerequisite" (backup `~/.claude/skills-backup-2026-10-15/issue-scout-rubric.md.bak`) |
| 8 | Pick 2–3 on the Issue Selection site | Done 2026-10-15: opengris-scaler #235 (held with site Claim) and HHS/simpler-grants-gov #5289 (not held; site warned against a 2nd claim). Candidates: [`2026-10-15-unit5-site-scan.md`](2026-10-15-unit5-site-scan.md) |
| 9 | `claude "issue-scout: grade <URL> <URL>"` (~$0.20 each) | Done 2026-10-15 (Sonnet 5.5): HHS #5289 accept; opengris #235 reject (blocked on open prerequisites #233/#951; queue_size spans 8+ files). Read-out appended in [`2026-10-15-scan-output-snapshot.md`](2026-10-15-scan-output-snapshot.md) |
| 10 | Unit 5 Toolkit entry in `contribution-story.md` | **Drafted 2026-10-15, not done.** New draft in section 7. Rewrite it, then edit and commit `contribution-story.md` in the course repo |

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
```
```json
{"simulated": true, "candidates": [{"url": "...", "verdict": "accept", "checks": {...}}]}
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

Draft for `beat-2-contribution/contribution-story.md` → Toolkit → the Unit 5 entry. The template wants the heading to keep "Unit 5:" plus one line, then 2-4 sentences. **Rewrite in your own words before you paste it; don't edit the story from here.**

> **Unit 5: installed issue-scout over my Unit 1 skill and gave it a four-query search strategy from my fit profile**
>
> My four gh queries returned 397 unique issues, my free ranking rules kept 255, and the scout graded the top five (four accepted). Before paying for that scan I ran free web-Claude dry runs plus read-only gh evidence as practice, which showed my rubric couldn't see claim comments, setup feasibility, or CLA/DCO costs. When I graded my Issue Selection picks, the scout accepted HHS/simpler-grants-gov#5289 but rejected finos/opengris-scaler#235, my favorite, because it depends on open issues #233 and #951. No rubric check covered that, so the reject rested on a loose reading of scope, and I added a "blocked on an open prerequisite" fail condition to scope-fits-newcomer and logged it in scan-notes.md.

### Three-beat version (2026-10-21, follows lecture rule 1)

Same facts, arranged as the lecture's three beats (produced, fought me, changed). See the [lecture-to-story map](2026-10-21-unit5-lecture-to-story-map.md).

> **Unit 5: turned my Unit 1 grader into issue-scout with a four-query search strategy traced to my fit profile**
>
> My four gh queries returned 397 unique issues, my free ranking rules kept 255, and the scout graded the top five, accepting four. What fought me was the rubric itself: free dry runs beforehand showed it couldn't see claim comments, setup feasibility or CLA/DCO costs, and when I graded my Issue Selection picks it rejected my favorite, finos/opengris-scaler#235, only on a loose reading of scope, because no check covered an issue blocked on open #233 and #951. So I added a sixth fail condition, "blocked on an open prerequisite", to scope-fits-newcomer and logged it in scan-notes.md, while HHS/simpler-grants-gov#5289 passed every check and became my lead pick for Claim Day.

(The older draft below is kept for comparison.)

### 7a. Earlier draft (2026-10-14)

```
### Unit 5: turned my fit profile into a four-query issue scout
- What it produced: 4 gh queries from my profile sentences returned 397 unique issues; free filters kept 256 and ranked five for grading.
- What fought me: quoting "storage OR s3" made gh search a phrase and return 0, and every query capped at 100, so ranking only saw a slice.
- What I changed: moved keywords unquoted after `--`, added a fewest-comments-then-bug ordering, and added a CONTRIBUTING.md AI-policy check to my rubric after the yt-dlp case.
```

### 7b. Practice runs that exposed rubric gaps (material for step 10 and the Unit 9 portfolio)

These were free web Claude dry runs plus read-only `gh` evidence, not the real scout. Say so honestly in the Toolkit entry.

| Date | Practice run | Gap it exposed | Where the fix goes |
|---|---|---|---|
| 10-15 | Web dry run v1 on result fields only ([note](2026-10-15-unit5-web-dry-run.md)) | Five checks need the issue page, so a field-only grade is all "unclear". The sort key didn't discriminate because all results had 0 comments and bug. No per-repo cap, codepath sandbox repos leaked in, Q2 dominated, and the `--updated` date was hard-coded | `search-strategy.md` |
| 10-15 | gh page evidence v2, top 10 | Resolved the NEEDS PAGE checks (7 accept, 3 reject). EvoScientist had open linked PRs that the search filter missed | ranking and rubric |
| 10-15 | Site scan + web dry run v3 ([scan](2026-10-15-unit5-site-scan.md), [dry run](2026-10-15-unit5-site-dry-run-v3.md)) | The site's Language filter works per repo (7 of 10 were Rust/TS). not-already-taken ignores claim comments (mahout). Feasibility (QNX, GPU) and CLA/DCO costs aren't checked. Scoped AI bans (beets) and bot-opened issues need rules | `rubric.md` |
| 10-15 | My evidence sampler | Maintainer-alive rested on commit dates only, because the response sampler returned empty. Fixed to count reviews and merges and flag bot commits | evidence tooling |

One-line Toolkit seed: *"Free dry runs before paying for the scout showed my rubric was blind to claim comments, setup feasibility and CLA costs, so I logged those as rubric fixes before grading my real picks."*

## 8. What's left for you to actually do

1. Copy your profile (section 2) somewhere safe, then run the two install commands from the Assignment tab yourself.
2. Paste the profile into `issue-scout/scope.md`, and the section 3 strategy into `search-strategy.md`. Add the AI-policy check to `rubric.md`.
3. Rerun one query in your terminal to confirm, then run the real scan (~$1) and save `scan-output.md`.
4. Log your fixes in `scan-notes.md` (dated lines).
5. Pick 2–3 on the Issue Selection site and grade them.
6. Write the real Unit 5 Toolkit entry in `ai301-coursework/beat-2-contribution/contribution-story.md`, commit it, and submit the repo link.

## 9. Debug note: GitHub rendering rule (2026-10-18)

Symptom: raw file showed `## 7. Draft Unit 5 Toolkit entry`, but the GitHub blob view put §7 inside a code block after `claude "issue-scout: grade ..."`.

Cause: in §5 the simulated block opened with a plain ` ``` ` fence and later had a ` ```json ` line. On GitHub/CommonMark, a fence *with* an info string (`json`) opens a block; it does not close a plain fence. Counting backticks looked even, but open/close parity flipped, so §§6–8 alternated in/out of code blocks.

Rule: close a plain fence with a plain ` ``` ` line first, then open the next block with ` ```json `. Never use a language-tagged fence as a closer.

Fix: `de62bfe` inserted the missing plain closer before the ` ```json ` block and removed the stray extra fence. Verify by checking fences semantically (no fence open at EOF, headings outside fences), not by counting ` ``` ` lines.
