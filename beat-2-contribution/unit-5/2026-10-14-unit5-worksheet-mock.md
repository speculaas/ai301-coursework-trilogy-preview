# Unit 5 worksheet mock: Find Five Worth Grading (rehearsal copy)

> **This is a mock.** The real worksheet is restricted until the session. Its structure here is inferred from the Activity tab, and all of the rows are pre-filled so you can rehearse.
> The counts and issues are real. They come from the GitHub search API, queried **Wed Oct 14, 2026, ~1:50 PM MDT**, and will drift by 4:00 PM.
> Note that the API ignores the web UI's sort menu, so the sorts below used `&sort=updated` and `&sort=comments&order=asc`.
> Nothing was commented on or reacted to.
> Companion guide: [2026-10-14-unit5-activity-today.md](2026-10-14-unit5-activity-today.md)

## Sample fit profile
1. I write Python and like working with data files such as CSV and JSON.
2. I want a small bug fix I can finish in two weeks, not a new feature.
3. I want a project where people answer questions.

## Filter key

| What it checks | Browser filter | `gh search issues` flag |
|---|---|---|
| Issues only, open | `is:issue is:open` | (default) `--state open` |
| Repo language | `language:python` | `--language python` |
| Words in title/body | `csv json` / `csv in:title` | positional `csv json` / `--match title` |
| Label | `label:"good first issue"`, `label:bug` | `--label "good first issue" --label bug` |
| Exclude a label | `-label:enhancement` | `-- -label:enhancement` |
| Nobody assigned | `no:assignee` | `--no-assignee` |
| No linked PR | `-linked:pr` | `-- -linked:pr` |
| Repo not archived | `archived:false` | `--archived=false` |
| Recently updated | `updated:>2026-07-15` | `--updated ">2026-07-15"` |
| Comment count | `comments:<5` | `--comments "<5"` |
| Sort | Sort by menu | `--sort updated` / `--sort comments --order asc` |
| How many | (page) | `--limit 100` |

## Search log (Phase 1, line 1, results page only)

| Who | Search | Count | Top ten fit line 1? |
|---|---|---|---|
| me | `is:issue is:open language:python csv json` | 23,064 | Partly. It's on topic, but almost all of them are export/import features, and some are personal repos. |
| me | `… csv json label:"good first issue"` | 338 | Yes for topic, but 10/10 are features (`enhancement`, "Add…", "Export…"). |
| me | `… csv label:"good first issue"` (no `json`) | 1,382 | Yes. Wider pool, still mostly features. |
| me | `… csv in:title label:"good first issue"` | 331 | Yes, but it's the same top ten as above, so `in:title` didn't change the ranking. |

**Our best search, and why:** `is:issue is:open language:python csv label:"good first issue"` (1,382). Requiring both `csv` and `json` was too strict for line 1 ("CSV *and* JSON" is a preference, not a requirement). This gives the largest on-topic pool for Phase 2 to narrow, and `good first issue` is a free signal that a maintainer thinks it's beginner-sized.

## Narrowing log (Phase 2, line 2)

| Step | Filter added | Count |
|---|---|---|
| 0 | (best search) | 1,382 |
| 1 | `label:bug`: a "bug fix, not a feature" | 98 |
| 2 | `no:assignee`: nobody else is on it | 74 |
| 3 | `-linked:pr`: no fix already open | 56 |
| 4 | `archived:false`: repo still accepts PRs | 52 |
| 5 | `updated:>2026-07-15`: still alive | 9 |
| Sort | **Fewest comments** (`sort=comments&order=asc`). Untouched threads are less likely to be claimed. ("Recently updated" gives the same 5 in a different order.) | 9 |

"Finish in two weeks" can't be checked by a filter (that's the rubric's job). `label:bug` and `good first issue` are the closest proxies.

## Top five (Phase 3)

| # | Issue | Who read it | Keep/drop | What the results page didn't show |
|---|---|---|---|---|
| 1 | [techcsispit/grade-tracker#26](https://github.com/techcsispit/grade-tracker/issues/26): HTML report has cards for students not in the CSV | | **Keep** | It has exact repro steps (`python3 -m grade_tracker export`, a grep) and quotes the README's expected behaviour. Someone was **assigned then unassigned 2 minutes later** on Oct 13. The repo was created Sept 2026 with 0 stars and 5 forks, so it looks like a teaching/sandbox repo. It's fine for practice, but it's not clear maintainers answer. |
| 2 | [Ayberkrk/turkiye-deprem-verisi#35](https://github.com/Ayberkrk/turkiye-deprem-verisi/issues/35): `nehrp_class` maps NaN/≤0 Vs30 to "E" | | **Keep (with caveat)** | It's a textbook small bug: written by the owner, with a 3-line repro and expected output. However, the **thread is in Turkish**. It was cross-referenced by an unrelated merged Ruff PR (#42) and by someone's "issue-finder" repo, so another scout already found it. |
| 3 | [rkb32/winnow#10](https://github.com/rkb32/winnow/issues/10): audit pair 90 (chain saw) may be mislabeled | | **Drop** | It's a **data-labelling judgment**, not a code bug: is one CSV row right? There's nothing to reproduce or test, and the fix is a one-cell edit the owner should decide. |
| 4 | [MieuxVoter/presidentielle2027#157](https://github.com/MieuxVoter/presidentielle2027/issues/157): one PDF cited by two IFOP poll groups | | **Drop** | It's in French, and it needs research into poll sources to decide which group is right. There's been **no reply in 6 weeks** (fails line 3). Data-provenance work, not a two-week Python fix. |
| 5 | [Ayham-Ahmad/SFAv2#1](https://github.com/Ayham-Ahmad/SFAv2/issues/1): CSV/Excel row not blocked during file replacement | | **Drop** | The fix is **frontend UI** (disable row, loading state), not Python. The repo has 0 stars, and its last push was Aug 26 (the same day as the issue). Probably nobody would answer. |

## Where each miss belongs

| A search filter can catch it | Only the rubric can catch it |
|---|---|
| Repo inactive: `updated:>2026-09-15`, or rank by recency | Not a code bug (a labelling or data-judgment call), seen in #3 |
| Fix lives in frontend: `-label:frontend` / `label:backend` (only if repos label it) | Thread in a language I can't work in, seen in #2 and #4 |
| Assignment churn: partly `no:assignee`, which only shows the *current* state | Fixable in two weeks? Needs reading (#4 needs research) |
| | Someone else's scout or a cross-ref already circling it, seen in #2 |
| | **Line 3, "people answer questions"**: no filter checks maintainer replies (#4 waited 6 weeks with none) |

## What we changed (Phase 4)
Added `updated:>2026-09-15` (tightened from `>2026-07-15`) to drop dead repos, and kept the fewest-comments sort.
`is:issue is:open language:python csv label:"good first issue" label:bug no:assignee -linked:pr archived:false updated:>2026-09-15`
**New count: 3** (from 9). It removed #4 and #5. Adding `-label:"help wanted"` didn't change anything (still 3).

## New #1

| Who | Keep/drop | Why |
|---|---|---|
| me | **Keep** | grade-tracker#26 has clear repro, a CSV-driven Python bug, and fits lines 1 and 2. Line 3 is unproven (0 comments, an odd assign/unassign). I'd grade it with the rubric before claiming it. |

## Final group answer
**Did the change help?** Partly. The recency filter cut the dead and slow repos (9→3), so the top three are all live, Python, CSV bugs with repro steps. It can't fix the rubric-only misses: a data-judgment "bug", a non-English thread, and whether anyone answers questions.
**Next:** add `json` back as an OR (`csv OR json`) to widen the pool after narrowing. Then let the rubric check maintainer response time, for example "a maintainer replied to any issue within 7 days".

## Lines to say (cheat sheet)
- **Setup:** "I can be captain. I'll make a copy, set it to Editor, and drop the link in chat." Or: "Waiting for the captain's link, so we all type in one doc."
- **Phase 1:** "`csv json` together was too strict, 338 versus 1,382 with just `csv`. Line 1 says 'such as', so I'd keep `json` optional."
- **Phase 2:** "`label:bug` is the free part of line 2. 'Two weeks' isn't filterable, so that's the rubric's. Let's add one filter at a time and log the count."
- **Phase 3:** "Mine looked fine on the results page, but opening it showed [assign churn / it's in Turkish / no reply in 6 weeks]. Only the rubric could catch that."
- **Line 3:** "No filter shows whether maintainers answer, so it goes in the rubric column."
- **Phase 4:** "Tightening `updated` cut us from 9 to 3 and removed both dead repos. Next I'd check maintainer response time in the rubric."

## Finished early: compare with the Issue Selection site (not seen yet)
Sign in, set Language = Python and a data or CSV tag, and **don't click Claim**. Look for:
- whether its issues come from **partner repos** with active maintainers (line 3 solved by curation, which our search couldn't do)
- how many are **bugs vs features**, and whether its tags map to `label:bug`
- whether any of our top five appear there (probably not, since ours are tiny personal repos)
- whether it shows **assignment and claim state**, which the GitHub results page hides
- the size of the pool compared with our 3–9, and the repo star counts and activity

## Homework head start: `search-strategy.md` (DRAFT, edit before use)
Assumed profile: PhD student, Python, storage/infra and ML/CV. Adjust the sentences to your real `scope.md`.

```text
# Profile: "I write Python and want to work on storage, I/O or data-loading code."
gh search issues --state open --limit 100 --language python --label "good first issue" --no-assignee --archived=false --updated ">2026-09-01" -- "storage OR cache OR dataloader OR io" -linked:pr

# Profile: "I like computer vision and ML tooling (image I/O, datasets, transforms)."
gh search issues --state open --limit 100 --language python --label bug --no-assignee --archived=false --updated ">2026-09-01" -- "image OR opencv OR dataset OR transform" -linked:pr

# Profile: "I want a small bug fix, not a feature."
gh search issues --state open --limit 100 --language python --label bug --label "good first issue" --no-assignee --comments "<6" -- -label:enhancement -linked:pr
```

Ranking rules (only the fields gh returns):
1. **Order:** fewest comments first, with ties broken by most recently updated.
2. Drop any result with assignees.
3. Drop any result not updated in the last 45 days.
4. Prefer `bug` over `enhancement`, and drop results whose labels include `feature` or `discussion`.
5. Max 2 issues per repo in the top five.

Run each query in the terminal first (`gh auth status` must pass, and gh isn't installed on the Mac yet).
