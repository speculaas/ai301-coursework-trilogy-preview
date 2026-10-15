# Unit 5: web dry run of the scout (v1 bundle) vs gh evidence (v2), 2026-10-15

Practice only. This is **not** step 6's real scan (`claude "issue-scout: run a scan"`, about $1). None of these repos is known to be on the AI301 Issue Selection site, and my real issue must come from that site. Bundles and evidence live in the gitignored `zimmnotes/.../unit-05/copilot-pack-unit5/` folder (`BUNDLE_unit5_scout_for_claude_web.txt` v1, `..._v2.txt`, `scout-q/evidence-2026-10-15.{json,md}`).

## What web Claude (Sonnet) said about v1

v1 had only the gh result fields, so every check that needs the issue page or repo came back unverified. Under the rubric (`unclear` = fail), all five were rejected.

| # | Issue | Web verdict (v1) | Web fit rank | gh evidence v2 (my calls) |
|---|---|---|---|---|
| 1 | cubrid-lab/cubrid-cookbook-python#361 | reject (unverified) | 5 | accept: active, untaken, AI allowed (standalone agents need a Copilot or maintainer review) |
| 2 | existence-master/Sentient#355 | reject (unverified) | 4 | accept: AI assistants welcome; Windows-only flake |
| 3 | ThreeSixtyGiving/dataquality#190 | reject (unverified) | 1 | accept: no AI wording; agree on the approach first ("some combination of") |
| 4 | AutomatosAI/automatos-ai#1059 | reject (unverified) | 3 | accept: "AI-assisted contributions are welcome"; disclose in the PR template |
| 5 | AutomatosAI/automatos-ai#1057 | reject (unverified) | 2 | accept: same repo as #4, so take at most one |

In v2, the top 10 came out as 7 accepts and 3 rejects: cluv#200 (scope unclear), EvoScientist#593 (open linked PRs #594 and #639) and two-wheeler-safety#21 (several bugs in one issue). So page evidence resolves every "unverified" verdict. The cost-free part of the scout is fine; the verdicts depend on evidence that only the real scout (or gh) can fetch.

## Web Claude's 8 suggested fixes

1. **The sort key doesn't discriminate.** All top 5 have 0 comments and `bug`, so rule 6 falls through to "most recently updated".
2. **Drop codepath-owned repos** (Path Review sandboxes showed up at ranks 19-20).
3. **Cap results at 1 per repo** (automatos had #4 and #5).
4. **Signal for bulk or agent-filed issues.** automatos #1057 and #1059 were updated 4 seconds apart, and leitir uses a `ready-for-agent` label. Needs a who-filed check.
5. **Q4's "image" is ambiguous.** Use `opencv OR "computer vision" OR torchvision`.
6. **Q2 dominates** (13 of the top 20). Tighten it or give each query a quota.
7. **The hard-coded `--updated ">2026-08-15"` drifts.** Compute it relative to today.
8. **Rubric gap:** nothing checks whether outside contributors' PRs ever get merged.

**My take:**
- **Cheap result-field fixes:** 2, 3, 6 and 7 fit search-strategy.md.
- **Rubric checks:** 4 and 8 need the issue page or repo history, so they belong in rubric.md, not in ranking (same lesson as the AI-policy gate).
- **Sort key:** for 1, add a tie-break on a field gh returns. Repo stars aren't in `gh search issues --json`, so use oldest-created-first or prefer `size: S`/`docs` labels.
- **Q4 phrase:** for 5, quoting `"computer vision"` must go after `--` as a phrase token. Test it first, since a quoted argument turned into an exact-phrase search before.

## scan-notes.md candidates (step 7, draft; copy into `~/.claude/skills/issue-scout/scan-notes.md` only after the real scan)

```
2026-10-15 web dry run (v1 bundle, no page evidence): all 5 rejected as unverified -> the free stages work; verdicts need page evidence. gh evidence (v2) gave 7 accept / 3 reject on the top 10.
2026-10-15 search-strategy: add "drop repos owned by codepath" (sandbox issues leaked in at ranks 19-20).
2026-10-15 search-strategy: add "keep at most 1 result per repo" (automatos had 2 in the top 5).
2026-10-15 search-strategy: tie-break after fewest comments: labels size:S/docs first, then oldest created (all top 5 tied at 0 comments + bug).
2026-10-15 search-strategy: Q2 gave 13 of the top 20; narrow it (e.g. add fastapi-only variant) or take at most 5 per query.
2026-10-15 search-strategy: Q4 "image" too broad -> opencv OR torchvision OR "computer vision" (verify phrase handling in gh).
2026-10-15 search-strategy: replace fixed --updated ">2026-08-15" with a date 60 days before the scan.
2026-10-15 rubric (candidate): who-filed check (bulk/agent-filed issues, e.g. created seconds apart or a ready-for-agent label) and outside-contributor merge history; decide after the real scan.
2026-10-15 site/language: Language=Python on the site is repo-level; 7 of the site top 10 were Rust/TS/docs-only and the rubric ignores language. Add a language-fit preferred check or a repo-language ranking filter.
2026-10-15 rubric not-already-taken: a live stranger claim comment (mahout#1468, 24 days old, with a plan) passes. Patch: claim comment <=30 days with no PR or maintainer reply => unclear/hold.
2026-10-15 evidence: maint_response_sample was null for all 50 (sampler bug, fixed in ev_site.py); also record commit authors and exclude bot commits from maintainer-alive.
2026-10-15 rubric: CLA (FINOS) and DCO (Eclipse OpenSOVD) newcomer costs aren't captured; add a note field or a preferred "no CLA/DCO" check.
2026-10-15 rubric ai-policy-ok: scoped bans count when they cover the candidate (beets bans AI on good-first issues only).
2026-10-15 rubric good-first-signal: don't count a bot opener (librefang#8590 had a gfi label and no ask).
2026-10-15 rubric: feasibility (QNX toolchain, GPU) is invisible; consider a can-reproduce-locally check.
```

Lines added 2026-10-15 from the [site dry run v3](2026-10-15-unit5-site-dry-run-v3.md). All 7 were kept: none repeats an earlier line. The bot-opener line narrows the earlier who-filed line, and the sampler line rewords Claude's to say the sampler is fixed.

## Web dry runs vs the real CLI scan (step 6)

The real scan ran 2026-10-15 ~2:48 AM MDT with Sonnet 5 ([snapshot](2026-10-15-scan-output-snapshot.md)).

| | Web dry run v1 (field-only bundle) | Web dry run v3 (site bundle + gh evidence) | CLI `claude "issue-scout: run a scan"` |
|---|---|---|---|
| Search | Used results I collected and pasted | Used the site list I scraped | Ran your 4 `gh` queries live: 397 unique, 255 after filters |
| Issue pages / policy files | None, so everything was NEEDS PAGE | Only what I bundled from `gh` | Read each issue, repo facts and CONTRIBUTING/AGENTS.md itself |
| Verdicts on the top 5 | All "reject (unverified)" | Real verdicts (7 accept / 3 reject of 10) | 4 accept (automatos #1059, #1057, cubrid #361, dataquality #190), 1 reject (cluv #200, unsettled scope) |
| Unique catch | Ranking-filter gaps (sort key, per-repo cap, date drift) | Rubric gaps (claim comments, feasibility, CLA/DCO, repo-level language) | Flagged cubrid's AGENTS.md as oddly aimed at AI agents. Eyeball it before choosing that repo |
| Counts for the course | Practice only | Practice only | Yes, this goes in `scan-output.md` |

Takeaway for the Toolkit entry: the free web runs were good at criticizing the strategy and rubric. Only the CLI could gather live evidence, so it is the real read-out.

## Step 9: web v3 vs CLI grades

| Issue | Web dry run v3 (Claude web, 2026-10-15 ~2:15 AM MDT) | Step 9 CLI (`claude "issue-scout: grade ..."`, claude-sonnet-5-5, 2026-10-15 ~1:12 PM MDT) | Why they differ |
|---|---|---|---|
| finos/opengris-scaler#235 | **accept**, primary pick; scope: "concrete proposed change"; noted CLA cost and "confirm approach" | **reject**; scope fail: body opens "Once numerical capabilities are supported (#233)", #233 still open (maintainer: "not implemented yet"), another maintainer says #951 "should be done before this"; queue_size in 8+ files | The CLI read the linked issues and comment thread live; the web run only had my 1,500-character body excerpt and no linked-issue state. The CLI said itself that no rubric condition named this, so I added fail (6) "blocked on an open prerequisite" |
| HHS/simpler-grants-gov#5289 | accept (fallback); 3 acceptance criteria | accept, with caveat: confirm the warning still appears before claiming (issue from 2025-06) | Agree. The CLI also found maintainer replies within minutes to hours, where my sampler had shown 0/5 |
| Both, ai-policy-ok | pass | pass; CLI also flagged opengris AGENTS.md "no agent Co-authored-by trailer" and said to strip the scout's own trailer | Same verdict, more practical detail live |

### Why the web run missed it: bundle gap

The v3 bundle's evidence for each issue included:

- a **1,500-character body excerpt**
- labels, assignees and the comment count
- timeline-linked PRs

It did **not** include the comment thread or any issue the body referred to.

#235's body begins "Once numerical capabilities are supported (#233)", but the rest of the story lived outside the bundle:

- In #233's thread, a maintainer says "No, it's not implemented yet" (2026-06-03).
- Also in #233's thread, a comment (2026-08-20) says #951 "should be done before this".

Web Claude could only grade the text it was handed, so it saw a concrete proposed change and accepted. The CLI scout followed the `#233` link itself, read the thread, and found the chain.

**Lesson:** a bundle is only as good as its evidence. **Fix:**

- pack the full comment thread
- follow `#N` / `owner/repo#N` / issue and PR URL references and record each one's state and its last maintainer comment
- flag prerequisite wording ("once #N", "depends on", "blocked by", "should be done before")

`ev_site.py` now does this (see the site-scan note).

**Model info:** the CLI transcript records `"model": "claude-sonnet-5-5"` (with `advisorModel: claude-opus-5-5`). The web dialogue export (`dialogue-dlg-m365-04920039-turn32.json`) has no model field (keys: id, question, answer, reasoning, timestamps). It was Claude web per my run, but the export doesn't record which model.

**Lesson:** a dry run grades only the evidence it's handed. The prerequisite chain sat in the linked issues, which my evidence bundle never fetched. The real scout caught it, so the paid grade was worth its $0.40.
