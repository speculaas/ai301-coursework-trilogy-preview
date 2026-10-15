<!-- Step 6 scan: claude "issue-scout: run a scan", 2026-10-15 ~2:48 AM MDT, model claude-sonnet-5 -->

## Scan results (4 queries → 397 unique → 255 after label/activity filters → top 5 graded)

**Accepted, in fit order:**

1. **AutomatosAI/automatos-ai#1059** — "API returns 500 instead of 404/400" (query 2: api/fastapi bug; ranked: 0 comments, bug label, 3rd-most-recent). Best fit: a REST API edge-case bug with exact file/line locations, explicit acceptance criteria and test spec, and a CONTRIBUTING.md that explicitly welcomes AI-assisted contributions.
2. **AutomatosAI/automatos-ai#1057** — "Credentials stats/health always return 422" (same query/repo, essentially tied ranking). Same strong fit: a tightly-scoped FastAPI route-ordering bug, precise locations, test requirement spelled out.
3. **cubrid-lab/cubrid-cookbook-python#361** — docs/test fix for a link-parsing bug in a staging script (query 3: docs/test/ci; most recently updated, bug label). Matches the "docs/tests, small workflow fix" part of your profile well, but note this repo has an unusually heavy review gate (Copilot/maintainer review route documented in AGENTS.md) — more process overhead than the automatos issues.
4. **ThreeSixtyGiving/dataquality#190** — cache the 360Giving schema to survive fetch failures (query 1: storage/cache; 2nd-most-recent). Fits the caching/storage half of your profile and is reproducible, but the ask is phrased as "some combination of" three options rather than one settled fix, and it's a very small, low-adoption repo (1 star).

**Rejected:**

- **mila-iqia/cluv#200** (query 4: opencv/image/dataset) — fails `scope-fits-newcomer`: the maintainer who filed it (also a top committer) proposes two possible fixes and says one "feels dumb," with no settled spec — unsettled design, not a bounded ask.

```json
[
  {
    "item": "https://github.com/AutomatosAI/automatos-ai/issues/1059",
    "checks": [
      {"name": "maintainer-alive", "grade": "pass", "evidence": "commits on 2026-10-14/13/12/11 (today is 2026-10-15)"},
      {"name": "repo-in-use", "grade": "pass", "evidence": "not archived, pushedAt 2026-10-14T22:40:05Z"},
      {"name": "scope-fits-newcomer", "grade": "pass", "evidence": "exact file/line locations for each fix, 'what done looks like' + required tests listed"},
      {"name": "not-already-taken", "grade": "pass", "evidence": "assignees:[], comments:[], no linked PRs (GraphQL closedByPullRequestsReferences empty)"},
      {"name": "ai-policy-ok", "grade": "pass", "evidence": "CONTRIBUTING.md: 'AI-assisted contributions are welcome, and most contributions now start in one'"},
      {"name": "good-first-signal", "grade": "pass", "evidence": "labeled good first issue + bug, filed by the project account"}
    ],
    "verdict": "accept"
  },
  {
    "item": "https://github.com/AutomatosAI/automatos-ai/issues/1057",
    "checks": [
      {"name": "maintainer-alive", "grade": "pass", "evidence": "same repo, commits on 2026-10-14/13/12/11"},
      {"name": "repo-in-use", "grade": "pass", "evidence": "not archived, pushedAt 2026-10-14T22:40:05Z"},
      {"name": "scope-fits-newcomer", "grade": "pass", "evidence": "precise route-ordering bug, 2 named fix options, required regression test specified"},
      {"name": "not-already-taken", "grade": "pass", "evidence": "assignees:[], comments:[], no linked PRs"},
      {"name": "ai-policy-ok", "grade": "pass", "evidence": "same repo CONTRIBUTING.md explicitly welcomes AI-assisted contributions"},
      {"name": "good-first-signal", "grade": "pass", "evidence": "labeled good first issue + bug, filed by the project account"}
    ],
    "verdict": "accept"
  },
  {
    "item": "https://github.com/cubrid-lab/cubrid-cookbook-python/issues/361",
    "checks": [
      {"name": "maintainer-alive", "grade": "pass", "evidence": "commits at 2026-10-15T06:45 (today) by the issue's own author"},
      {"name": "repo-in-use", "grade": "pass", "evidence": "not archived, pushedAt 2026-10-15T06:45:43Z"},
      {"name": "scope-fits-newcomer", "grade": "pass", "evidence": "scoped to 2 files, explicit acceptance criteria and validation commands"},
      {"name": "not-already-taken", "grade": "pass", "evidence": "assignees:[], comments:[], no linked PRs"},
      {"name": "ai-policy-ok", "grade": "pass", "evidence": "AGENTS.md: 'human-led contributors, including people who direct and review AI-assisted work... without prior maintainer approval'"},
      {"name": "good-first-signal", "grade": "pass", "evidence": "labeled good first issue, filed by a top committer/maintainer"}
    ],
    "verdict": "accept"
  },
  {
    "item": "https://github.com/ThreeSixtyGiving/dataquality/issues/190",
    "checks": [
      {"name": "maintainer-alive", "grade": "pass", "evidence": "human commit (jwilson232) on 2026-10-06, 9 days before today"},
      {"name": "repo-in-use", "grade": "pass", "evidence": "not archived, pushedAt 2026-10-12T11:26:10Z"},
      {"name": "scope-fits-newcomer", "grade": "pass", "evidence": "single bounded ask (catch + cache the schema fetch) despite 'some combination of' phrasing"},
      {"name": "not-already-taken", "grade": "pass", "evidence": "assignees:[], comments:[], no linked PRs"},
      {"name": "ai-policy-ok", "grade": "pass", "evidence": "CONTRIBUTING.md has no AI mention; silence passes"},
      {"name": "good-first-signal", "grade": "pass", "evidence": "labeled good first issue + bug"}
    ],
    "verdict": "accept"
  },
  {
    "item": "https://github.com/mila-iqia/cluv/issues/200",
    "checks": [
      {"name": "maintainer-alive", "grade": "pass", "evidence": "commits on 2026-10-14 by lebrice/Fabrice Normandin"},
      {"name": "repo-in-use", "grade": "pass", "evidence": "not archived, release v0.1.5 on 2026-10-01, pushed 2026-10-14"},
      {"name": "scope-fits-newcomer", "grade": "fail", "evidence": "opener proposes a flag option then says 'this feels dumb... better if we could just realise this case' — no settled spec"},
      {"name": "not-already-taken", "grade": "pass", "evidence": "assignees:[], comments:[], no linked PRs"},
      {"name": "ai-policy-ok", "grade": "pass", "evidence": "CONTRIBUTING.md has no AI mention; silence passes"},
      {"name": "good-first-signal", "grade": "pass", "evidence": "labeled good first issue + bug"}
    ],
    "verdict": "reject"
  }
]
```

---

<!-- Step 9 grade: claude "issue-scout: grade <opengris-scaler#235> <simpler-grants-gov#5289>", 2026-10-15 ~1:12 PM MDT, model claude-sonnet-5-5 -->

## Graded picks

Direct mode, so no search or ranking stage ran. Both repos are active. I accept simpler-grants-gov #5289 and reject opengris-scaler #235, which is blocked on unfinished prerequisite work.

**1. HHS/simpler-grants-gov#5289 "Update browserlist": accept** (surfaced by: direct)
- **maintainer-alive: pass.** Default-branch commits landed 2026-10-15 and 2026-10-14. A maintainer replied to #12802 within 3 minutes and to #12779 within about 2 hours.
- **repo-in-use: pass.** Not archived, last push 2026-10-15, latest release 2026.10.14-1.
- **scope-fits-newcomer: pass.** The issue is one bounded config change, with three acceptance criteria: update browserslist, no build warning, and the app still works.
- **not-already-taken: pass.** No assignees, no linked PRs, no comments.
- **ai-policy-ok: pass.** CONTRIBUTING.md says "it's fine to use AI tools to work on issues".
- **good-first-signal (preferred): yes.** It has the `good first issue` label and was filed by a team member (doug-s-nava).
- **Caveat:** the issue is from June 2025, and I did not check whether `caniuse-lite` has since been updated. Run `npx update-browserslist-db@latest` and check that the warning still appears on a frontend build before claiming it.

**2. finos/opengris-scaler#235 "Replace worker queue size with a new numerical capability": reject** (surfaced by: direct)
- **maintainer-alive: pass.** Commits landed 2026-10-15 and v2.9.0 was released 2026-10-08.
- **repo-in-use: pass.** Not archived, last push 2026-10-15.
- **scope-fits-newcomer: fail.** The body opens with "Once numerical capabilities are supported (#233)", and #233 is still open. On 2026-06-03 the maintainer said of #233 "No, it's not implemented yet". On 2026-08-20 another maintainer said #951 (open) "should be done before this". The `queue_size` field also appears in at least 8 files, including the worker, heartbeat manager, ray compat and the symphony and oci workers. This is a judgment call: no single fail condition in the rubric is literally stated about #235, so I applied unsettled design and cross-cutting work from the prerequisite chain. The `good first issue` label doesn't override it.
- **not-already-taken: pass.** No assignees and no linked PRs. The only cross-reference is issue #233.
- **ai-policy-ok: pass.** CONTRIBUTING.md has no AI terms. AGENTS.md does set a condition: commits must have a human author and no agent `Co-authored-by` trailer.
- **good-first-signal (preferred): yes.** It has the `good first issue` and `python` labels and was filed by a maintainer. This doesn't affect the verdict.
- **Friction note for `scan-notes.md`:** the rubric has no check for a dependency on an unfinished issue, so this reject rests on a loose reading of the scope check. Consider adding a "blocked on an open prerequisite" fail condition.
- **Commit trailer:** the Co-Authored-By trailer I'm told to add to commits would violate opengris's rule, so strip it if you ever contribute there.

```json
[
  {
    "item": "https://github.com/HHS/simpler-grants-gov/issues/5289",
    "checks": [
      {"name": "maintainer-alive", "grade": "pass", "evidence": "default-branch commits 2026-10-15 and 2026-10-14; maintainer replies within minutes to hours on #12802 and #12779"},
      {"name": "repo-in-use", "grade": "pass", "evidence": "archived=false; pushed 2026-10-15; release 2026.10.14-1"},
      {"name": "scope-fits-newcomer", "grade": "pass", "evidence": "single browserslist update with 3 acceptance criteria"},
      {"name": "not-already-taken", "grade": "pass", "evidence": "assignees empty; no linked or mentioned PRs; no comments"},
      {"name": "ai-policy-ok", "grade": "pass", "evidence": "CONTRIBUTING.md: \"it's fine to use AI tools to work on issues\""},
      {"name": "good-first-signal", "grade": "pass", "evidence": "labeled good first issue; opened by team member doug-s-nava"}
    ],
    "verdict": "accept"
  },
  {
    "item": "https://github.com/finos/opengris-scaler/issues/235",
    "checks": [
      {"name": "maintainer-alive", "grade": "pass", "evidence": "commits 2026-10-15 and 2026-10-13; v2.9.0 released 2026-10-08"},
      {"name": "repo-in-use", "grade": "pass", "evidence": "archived=false; pushed 2026-10-15; release v2.9.0 on 2026-10-08"},
      {"name": "scope-fits-newcomer", "grade": "fail", "evidence": "depends on #233, which a maintainer says is \"not implemented yet\" and which another maintainer says should wait on #951 (open); queue_size spans 8+ files"},
      {"name": "not-already-taken", "grade": "pass", "evidence": "assignees empty; closedByPullRequestsReferences empty; no PRs mention #235"},
      {"name": "ai-policy-ok", "grade": "pass", "evidence": "no AI ban in CONTRIBUTING.md; AGENTS.md only requires human commit authors and no agent Co-authored-by trailer"},
      {"name": "good-first-signal", "grade": "pass", "evidence": "labeled good first issue and python; opened by maintainer sharpener6"}
    ],
    "verdict": "reject"
  }
]
```
