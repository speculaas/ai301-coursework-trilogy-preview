<!--
DRAFT — review before install.
Target paste path: ~/.claude/skills/plan-check/voice-guide.md
Live mode only; eval runs never read the voice guide.
-->
# Voice guide carry-over notes for plan-check

## Copy unchanged

Copy the filled Unit 2 guide whole, no edits:

    /Users/watney/git/zimmnotes/chat/codepath/ai301/ai301-coursework/tools/repro-check/voice-guide.md

(It is the same file as installed `~/.claude/skills/repro-check/voice-guide.md`
if that copy has not drifted; check with `diff` before copying.)

Its four rules already cover most of the plan-comment register: state only
what the evidence supports, promise the next artifact not the outcome, be
specific without filler, disclose AI use when the repo requires it.

## Optional extension (append under "Rules I write by")

Only if you want the plan register spelled out. Same Wrong/Right shape as
the Unit 2 rules:

### Rule: Promise only what my plan.md contains

A plan comment commits me to an approach in front of maintainers. I name
the scope and the files from my plan, and the next artifact (the branch),
nothing outside the not-in line.

- Wrong: "I'll clean up the config docs too and have OpenRouter fully supported this week."
- Right: "Plan: add OPENROUTER_API_KEY and the openrouter LLM_PROVIDER option to `.env.example` so it matches README Quick Start; no `core/config.py` changes. I'll push fix/73-openrouter-env-example to my fork after the edit."

### Rule: Answer the thread before proposing

If someone in the thread already suggested or ruled out a direction, I say
whether my plan follows it, and why if not.

- Wrong: (plan comment that ignores a maintainer's suggested fix)
- Right: "This follows the direction above (X); I'm leaving Y out of scope as discussed."

Optional line for "Things I never post": a plan comment that promises work
outside my plan's scope.
