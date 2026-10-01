# DRAFT procedure.md — plan-check (NOT installed yet)

Label: **DRAFT**. Paste into `~/.claude/skills/plan-check/procedure.md` after
confirm. Addresses PizzaHut debrief ("How to gather evidence") and live
"where?" on sample step 2.

# Procedure: how this skill grades a plan package

## Read order

1. Do not open the live upstream issue in eval mode; use only the package.
2. Read in this order, noting one line from each:
   - Issue / thread highlights (and repo-facts block)
   - **Repro evidence** (Expected, Actual, Steps, any toggle timings) — before the plan
   - Candidate plan: Summary → Diagnosis → Scope/Changes → Test plan → Risks
   - Candidate plan comment
3. Why this order: diagnosis-grounded and test-observable both require the
   repro pins before grading the plan's cause or test claims.

## Evidence gathering

1. From Repro evidence: pull Expected, Actual, Steps, and any timings/toggles.
2. From Diagnosis: pull the cause sentence(s).
3. Place Diagnosis beside Repro Actual for a side-by-side compare (wrong-cause trap).
4. From Scope/Changes: pull in-scope files/areas and not-in lines.
5. From Test plan: pull the observable outcome and whether an automated test is named.
6. From the comment: pull promises and any maintainer/policy nods; compare promises to plan Scope.
7. From repo-facts: pull template asks, contributing policy, AI disclosure if present.
8. Record quotes only from the package (eval) or from the live sources named in
   `references/evidence-guide.md` (live). Do not invent facts.

## Check execution

1. Run checks in table order: diagnosis-grounded → scope-pair → test-observable
   → automated-test → comment-faithful.
2. Apply each check's pass condition to the gathered quotes only.
3. Grade pass, fail, or unclear. If the package lacks the field the check needs,
   grade unclear and name the missing field in one line.
4. Do not re-read the whole package between checks unless a quote is missing;
   use the gathered set.

## Verdict assembly

1. Apply the rubric verdict rule: any required fail or unclear → reject (hold);
   else accept (ready). Preferred fails are noted in the summary only.
2. In the output summary, quote the deciding check's evidence line next to the
   verdict.
3. Emit the required fenced JSON last (accept/reject; checks with
   pass|fail|unclear).
