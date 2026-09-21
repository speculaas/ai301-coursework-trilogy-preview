# Rubric: is this a good first issue?

<!-- Draft starter. FILL-IN: edit check names/thresholds in your own voice before submit. -->

## Checks

| Check | Evidence | Pass condition | Weight |
|---|---|---|---|
| maintainer-alive | Repo facts block: `last 5 default-branch commits` dates and `maintainer first-response sample` | Pass if at least one of the last 5 default-branch commits is dated within 90 days of the bundle `captured` date (or today in live mode), OR at least one sample issue shows a numeric maintainer first-response ≤ 45 days. Fail if `archived: yes`, or if all five commits are older than 90 days AND every sample line is `no maintainer comment in thread` / has no numeric response. | required |
| repo-in-use | Repo facts: `archived`, `last push to any branch`, `latest release` | Pass if not archived AND (`last push to any branch` within 180 days OR `latest release` date within 180 days of capture/today). Fail if archived or both signals are older than 180 days (or missing with no other activity). | required |
| scope-fits-newcomer | Issue title + body + labels + thread | Pass if the ask is one bounded change (docs, tests, small bugfix, single behavior) with enough detail to start (repro, acceptance criteria, or concrete proposed change). Fail if it is an umbrella/tracking/"add types across the codebase" style issue, an unsettled design debate with no maintainer decision, a pure usage question, or maintainers say it needs core internals / large cross-cutting work. | required |
| not-already-taken | Repo facts `this issue: assignees` / `linked PRs` + Comments | Pass if assignees are none/empty AND there is no **open** linked PR. Closed or merged linked PRs alone do not fail. In Path Review live mode, classmate claim comments do not fail (see scope house rule). Fail if assigned or any linked PR is open. | required |
| ai-policy-ok | Repo facts `contribution policy` (live: CONTRIBUTING / AI policy files) | Pass unless the policy explicitly bans AI-assisted contributions. Conditions (disclose, understand, test) still pass. Silence passes. | required |
| good-first-signal | Labels / opener association | Preferred if labeled good first issue / help wanted / docs, or opened by a maintainer with a concrete ask. Never flips the verdict. | preferred |

## Verdict rule

Accept only if every **required** check is `pass`. Treat `unclear` as `fail` for required checks. Preferred checks never change accept/reject; use them only to rank accepted live candidates.
