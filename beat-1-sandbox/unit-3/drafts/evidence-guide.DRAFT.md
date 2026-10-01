# DRAFT evidence-guide.md — plan-check (NOT installed yet)

Label: **DRAFT**. Paste into
`~/.claude/skills/plan-check/references/evidence-guide.md` after confirm.

# Evidence guide: where evidence lives in a plan package

## Diagnosis and grounding

- **Where (eval):** Repro evidence block (Expected / Actual / Steps) and
  Candidate plan Diagnosis.
- **Where (live):** Student's posted Unit 2 repro comment on the issue; plan
  Diagnosis in `plan.md`.
- **Good looks like:** Stated cause cites behavior the repro actually shows
  (including toggles/timings). Contradicting the repro is a fail, even if a
  cause sentence exists.

## Scope

- **Where:** Plan Scope / Changes — in-scope files or areas and not-in lines.
- **Good looks like:** Both sides present; change is one bounded surface.
  Missing not-in is a fail for scope-pair.

## Executability

- **Where:** Files/areas + Approach in the candidate plan.
- **Good looks like:** A stranger could start the first step without asking
  the author (named files or areas, ordered approach).

## Test plan

- **Where:** Plan Test plan next to Repro evidence Steps.
- **Good looks like:** Observable before/after tied to those steps;
  expected-after stated first. Automated test is preferred polish, not the
  only path to pass test-observable.

## Honesty

- **Where:** Risks / unknowns; Deviations section after build.
- **Good looks like:** Unknowns stated as unknowns; mid-build deviation
  recorded in plan.md rather than only in the diff.

## Comms

- **Where (eval):** Candidate plan comment + thread highlights + repo-facts.
- **Where (live):** Draft comment + live thread + repo CONTRIBUTING / template
  docs named in scope or evidence guide.
- **Good looks like:** Comment promises only plan contents; engages
  maintainer/policy signals when present; no piggyback plan.
