# Repro draft — Path Review #73 (non-submit)

**Issue:** https://github.com/codepath/pathreview-ai301-fa26-s1/issues/73  
**Fork clone:** `/Users/watney/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-02/pathreview-ai301-fa26-s1`  
**Commit checked:** `f89c06f` on `main` (clean vs `origin/main` at draft time)

**Method:** static docs comparison only. No `uv`/venv or app run required to observe the README vs `.env.example` mismatch named in the issue.

Live-check with `repro-check` before posting. After post, paste permalink into coursework `reproduction.md`.

---

## Environment

- OS: macOS 15.1
- Python (host, unused for this repro): 3.9.6
- Repo / fork: `speculaas/pathreview-ai301-fa26-s1`
- Commit: `f89c06f` on `main`
- Method: read `README.md`, `.env.example`, and `core/config.py` at that commit

## Steps

1. Clone / checkout `f89c06f` on the fork above.
2. Open `README.md` Quick Start and note the `.env` instruction.
3. Open `.env.example` and note `LLM_PROVIDER` / API key variables.
4. Open `core/config.py` and note the settings fields for OpenAI / OpenRouter keys.

Artifact command used while drafting:

```bash
cd /Users/watney/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-02/pathreview-ai301-fa26-s1
rg -n 'OPENROUTER|OPENAI_API_KEY|LLM_PROVIDER' README.md .env.example core/config.py
```

## Expected vs actual

- **Expected** (following README Quick Start alone): after `cp .env.example .env`, `.env.example` would document an `OPENROUTER_API_KEY` for the contributor to fill in.
- **Actual:** README tells you to add `OPENROUTER_API_KEY`, but `.env.example` only documents `LLM_PROVIDER=mock` and `OPENAI_API_KEY`. `core/config.py` still defines both `openai_api_key` and `openrouter_api_key`.

## Artifact (excerpts at `f89c06f`)

**README.md**

```
# Configure environment (add your OPENROUTER_API_KEY to .env)
cp .env.example .env
```

**.env.example**

```
LLM_PROVIDER=mock
OPENAI_API_KEY=sk-your-key-here
```

(`OPENROUTER_API_KEY` does not appear in `.env.example`.)

**core/config.py**

```
openai_api_key: str = Field(default="")
openrouter_api_key: str = Field(default="")
openrouter_base_url: str = Field(default="https://openrouter.ai/api/v1")
openrouter_model: str = Field(default="google/gemma-3-27b-it:free")
```

## Paste-ready GitHub comment

### Reproduction Report: README vs `.env.example` docs mismatch (#73)

**Environment.** macOS 15.1; fork `speculaas/pathreview-ai301-fa26-s1` at commit `f89c06f` on `main`. Method: static comparison of `README.md`, `.env.example`, and `core/config.py` (no app run required for this docs mismatch).

**Steps.**

1. Checked out commit `f89c06f`.
2. Read README Quick Start env instruction.
3. Read `.env.example` provider / API key lines.
4. Read `core/config.py` settings fields for OpenAI and OpenRouter keys.

**Expected.** Following the README alone, `.env.example` would list `OPENROUTER_API_KEY` for the contributor to add after `cp .env.example .env`.

**Actual.** README says to add `OPENROUTER_API_KEY` when configuring `.env`, but `.env.example` only shows `LLM_PROVIDER=mock` and `OPENAI_API_KEY=sk-your-key-here` — no `OPENROUTER_API_KEY` line. `core/config.py` defines both `openai_api_key` and `openrouter_api_key` (plus OpenRouter base URL / model defaults).

**Artifact.**

```text
README.md:
# Configure environment (add your OPENROUTER_API_KEY to .env)
cp .env.example .env

.env.example:
LLM_PROVIDER=mock
OPENAI_API_KEY=sk-your-key-here

core/config.py:
openai_api_key: str = Field(default="")
openrouter_api_key: str = Field(default="")
```

This confirms the docs disagreement described in the issue. I am not claiming a product bug beyond the documentation / example-env mismatch, and I am not proposing a fix in this comment.
