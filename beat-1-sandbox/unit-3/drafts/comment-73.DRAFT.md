### Plan for #73: add `OPENROUTER_API_KEY` to `.env.example`

**Diagnosis.** Building on my reproduction above (commit `f89c06f`, still upstream `main` today): the README Quick Start and `docs/SETUP.md` both tell you to set `OPENROUTER_API_KEY` in `.env`, and `core/config.py` has a matching `openrouter_api_key` field (pydantic-settings, case-insensitive), but `.env.example`, the file you `cp` to make `.env`, never names that variable. So the README is right and `.env.example` is the incomplete file.

**Scope.**
- In: add one `OPENROUTER_API_KEY=sk-or-your-key-here` placeholder line (with a one-line comment above it) to the `# LLM provider` block of `.env.example`, directly under `OPENAI_API_KEY`.
- Not in: `core/config.py` (no field or default changes), `README.md` / `docs/SETUP.md` (already correct), the `OPENAI_API_KEY` line, the `LLM_PROVIDER` default or its `Options:` list, `OPENROUTER_BASE_URL` / `OPENROUTER_MODEL`, or any Python code.

**Approach.** On my fork, branch `fix/73-openrouter-env-example` from `main`; edit only `.env.example`; check the diff is that one file, additions only.

**Test.** Re-run my repro steps before and after: `grep -n -i "LLM_PROVIDER\|API_KEY" .env.example`, and `cp .env.example /tmp/env73 && grep -c "^OPENROUTER_API_KEY=" /tmp/env73`. Before: no `OPENROUTER_API_KEY` line, count `0`. Expected after: the new line next to `OPENAI_API_KEY`, count `1`; README, SETUP and `core/config.py` unchanged.

**Unknowns.** I'm leaving the `LLM_PROVIDER` `Options:` comment as is: nothing in the repo branches on `llm_provider`'s value, so I can't show that an `"openrouter"` option does anything. If a maintainer wants that line changed too, I'd treat it as a follow-up.
