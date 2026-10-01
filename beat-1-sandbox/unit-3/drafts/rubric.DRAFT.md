# DRAFT rubric.md — plan-check (NOT installed yet)

Label: **DRAFT**. Paste into `~/.claude/skills/plan-check/rubric.md` after
you confirm. Built from PizzaHut live marks + pre-class grounding DRAFT.
Live PizzaHut rubric alone is insufficient (diagnosis still sample-shaped).

# Rubric: is this plan ready to post and build from?

## Checks

| Check | Evidence | Pass condition | Weight |
|---|---|---|---|
| diagnosis-grounded | Candidate plan Diagnosis read next to package Repro evidence (Expected, Actual, Steps, toggle timings). Live: posted Unit 2 repro comment on the issue. | Stated cause is reachable from that repro; no contradiction with timings, toggles, or observed surfaces the repro already ran. A cause that is merely *stated* but conflicts with Repro → fail. | required |
| scope-pair | Plan Scope / Changes (in-scope files or areas AND not-in / will-not-touch). | Names what it will change and what it will not touch; one bounded change, not a drive-by rewrite. | required |
| test-observable | Plan Test plan read against Repro evidence steps. | Names an observable before/after outcome a stranger could run, tied to the repro steps, with expected-after stated. Automated test is welcome but not required to pass this check. | required |
| automated-test | Plan Test plan. | Plan adds an automated test (or names an existing harness check) for the change. | preferred |
| comment-faithful | Candidate plan comment read against plan contents + thread highlights / repo-facts (templates, contributing, AI disclosure). | Promises only what the plan contains; engages maintainer or policy signals when present; no piggyback ("same as above"). | required |

## Verdict rule

accept (ready) only if every **required** check is pass; fail or unclear on
any required check → reject (hold); **preferred** checks never change the
verdict; unclear counts as fail when the package lacks the field the check
needs.
