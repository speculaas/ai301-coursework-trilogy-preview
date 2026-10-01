# SEED — plan.md for Path Review #73 (DRAFT; coursework path when ready)

Do **not** commit this to the fix branch. Target submit path:
`ai301-coursework/beat-1-sandbox/unit-3/plan.md`.

# Plan: Path Review #73 — document OPENROUTER_API_KEY in .env.example

## Diagnosis
README Quick Start tells contributors to set OPENROUTER_API_KEY when using
OpenRouter, but `.env.example` only shows `LLM_PROVIDER=mock` and
`OPENAI_API_KEY`. `core/config.py` already defines both key fields — this is a
docs/example-env mismatch, not a missing config field. Cause follows from Unit
2 repro at commit `f89c06f`: README asks for the key; example env never
surfaces it.

## Scope
**In:** align `.env.example` with README Quick Start by documenting
`OPENROUTER_API_KEY` (and clarifying `LLM_PROVIDER` options so `openrouter` is
not invisible next to `mock`/`openai`); keep the change docs/example-env only
unless a one-line README comment is required for the same mismatch.

**Not in:** changing `core/config.py` field defaults or OpenRouter base URL /
model defaults, OpenAI key behavior, mock provider logic, UI, or unrelated
docs refactors.

## Files / areas
- `.env.example` (primary)
- `README.md` only if a one-line cross-reference is needed for the same mismatch

## Approach
1. Add commented `OPENROUTER_API_KEY` (and `LLM_PROVIDER=openrouter` example) to
   `.env.example` beside the existing mock/openai lines.
2. Keep wording consistent with README Quick Start; do not invent new defaults.
3. Diff-review: no Python/runtime files in the change.

## Test plan
Re-run Unit 2 repro steps: open README Quick Start next to `.env.example` and
confirm a stranger can find `OPENROUTER_API_KEY` (and `openrouter` as a
`LLM_PROVIDER` option) without reading `core/config.py`.

**Expected-after:** example env documents the same key README names.

## Risks / unknowns
- Exact comment style in `.env.example` may need to match existing file voice.
- Confirm whether README needs any one-line tweak after the example-env edit.

## Deviations
[What changed between the plan you posted and the change you built, and why.
If nothing changed, say so in your own words.]
