# Smoke eval vs real Claude eval (Unit 1)

Where this sits: notes under `beat-1-sandbox/unit-1/` in
[`speculaas/ai301-coursework-trilogy-preview`](https://github.com/speculaas/ai301-coursework-trilogy-preview).
The runnable starter lives beside your notes at
`../unit-01/ai301-unit1-starter/` (local zimmnotes layout).

## One-line difference

| | **Smoke** (`simulate_rubric.py`) | **Real / graded** (`run_eval.py`) |
|---|---|---|
| Who grades? | Local Python heuristics | Claude Code CLI (`claude -p`, Sonnet) |
| Cost | Free | Course credit (~$0.20/`--only`, ~$4 full) |
| Writes `eval-run.txt`? | **No** | **Yes**, only with full run + `--save-run` |
| Counts for portal? | **No** (debug only) | **Yes** (harness fingerprint) |
| Reads your `rubric.md`? | Approximates check *ideas* | Sends full skill + rubric + bundle to Sonnet |

Smoke answers: “Do my check *ideas* roughly track gold?”  
Real answers: “Does **Sonnet executing my written rubric** hit the bar (≥18/20 + category floor)?”

```mermaid
flowchart LR
  subgraph smoke [Smoke — free]
    R1[rubric.md ideas] --> S[simulate_rubric.py]
    B1[frozen issues/*.md] --> S
    G1[gold-labels.json] --> S
    S --> O1[agreement printout<br/>no eval-run.txt]
  end

  subgraph real [Real Claude eval — costs credit]
    R2[installed rubric.md] --> H[run_eval.py]
    SK[SKILL.md + refs] --> H
    B2[frozen issues/*.md] --> H
    H --> C["claude -p --model sonnet<br/>× up to 20 bundles"]
    C --> O2[table + category floor]
    O2 --> F["--save-run eval-run.txt<br/>only on full 20"]
  end
```

## Recommended loop

```mermaid
flowchart TD
  A[Edit rubric.md in starter] --> B[git commit]
  B --> C["cp skill/ → ~/.claude/skills/issue-select/"]
  C --> D[Smoke: simulate_rubric.py]
  D --> E{Roughly sensible?}
  E -->|no| A
  E -->|yes| F["Cheap Claude: run_eval.py --limit 3"]
  F --> G["Tighten with --only issue-XX,..."]
  G --> H["Confirming full run + --save-run"]
  H --> I[Copy eval-run.txt + skill into coursework repo]
```

### Commands (after skill install)

```bash
# 0) sync install from starter (edit→commit→copy)
cp -R /path/to/ai301-unit1-starter/skill/. ~/.claude/skills/issue-select/

# 1) smoke (from starter eval/)
cd /path/to/ai301-unit1-starter/eval
python3 simulate_rubric.py

# 2) real — cheap first
python3 run_eval.py --rubric ~/.claude/skills/issue-select/rubric.md --limit 3

# 3) real — fix disagreements only
python3 run_eval.py --rubric ~/.claude/skills/issue-select/rubric.md --only issue-10,issue-15,issue-20

# 4) real — confirming full run for submission
python3 run_eval.py --rubric ~/.claude/skills/issue-select/rubric.md \
  --save-run /path/to/ai301-coursework/beat-1-sandbox/unit-1/eval-run.txt
```

Partial `--limit` / `--only` runs **refuse** to write `eval-run.txt`. Do not hand-edit that file.

## What smoke cannot catch

Sonnet may interpret borderline scope/policy wording differently than the Python heuristics. Recent smoke on this machine was **17/20**, with misses on scope-style gold rejects (`issue-10`, `issue-15`, `issue-20`). Treat that as “tighten `scope-fits-newcomer` before burning a full $4 run,” not as a ship grade.

## Related files

- Smoke how-to: `ai301-unit1-starter/eval/README-simulate-rubric-offline.md`
- Official harness: `ai301-unit1-starter/eval/README.md`
- Unit 1 checklist: `2026-09-21-unit1-step-by-step.md` (same folder)
