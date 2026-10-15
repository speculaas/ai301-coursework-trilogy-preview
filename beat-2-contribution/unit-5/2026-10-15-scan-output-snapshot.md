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
