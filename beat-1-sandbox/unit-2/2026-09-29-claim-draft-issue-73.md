# Claim draft — Path Review #73 (non-submit note)

**Fork (yours):** https://github.com/speculaas/pathreview-ai301-fa26-s1  
**Upstream Path Review:** https://github.com/codepath/pathreview-ai301-fa26-s1  
**Issue:** https://github.com/codepath/pathreview-ai301-fa26-s1/issues/73  

**Local clone (suggested):**  
`/Users/watney/git/zimmnotes/chat/codepath/ai301/beat-1-sandbox/unit-02/pathreview-ai301-fa26-s1`

**Reminders**
- You already forked (speculaas). Clone is for local setup/repro; claim/repro comments go on the **upstream issue**, not only on the fork.
- Live-check this draft with `repro-check` before posting.
- Coursework copy for submit fields: `ai301-coursework/beat-1-sandbox/unit-2/claim-draft-issue-73.md`
- Later units may use the same Path Review org/repo for other issues; keep this clone and add worktrees/branches per issue if needed.

---

# Draft claim comment for Path Review #73

**Issue:** https://github.com/codepath/pathreview-ai301-fa26-s1/issues/73  
**Status:** DRAFT — live-check with `repro-check` before posting. Do not post until the skill returns `accept`.  
**After posting:** paste the permalink + exact posted text into `reproduction.md`.

---

I'd like to investigate the docs mismatch on this issue: `README.md` Quick Start says to add `OPENROUTER_API_KEY` when copying `.env.example` to `.env`, but `.env.example` does not list `OPENROUTER_API_KEY`, and its `LLM_PROVIDER` comment only offers `mock` and `openai`. `core/config.py` defines both `openai_api_key` and `openrouter_api_key`, so the setup docs and the example env file currently point a new contributor in different directions.

I'll set up from the repo docs and post a reproduction report with the exact file excerpts I compared (README, `.env.example`, and the relevant settings fields). I'm not claiming a root cause beyond that disagreement, and I'm not promising a fix or a timeline.
