# Third-Party AGENTS.md Rules

Rule sets from other authors that are worth pulling into an `AGENTS.md`. All credit goes to the original authors; follow the links for the full text.

| Name | Author | Link |
| --- | --- | --- |
| Karpathy Guidelines 12 Rules | [Planxnx](https://github.com/Planxnx) | [Gist](https://gist.github.com/Planxnx/64b173bacf2c8c43435c4333d0b9bd94) |

## Karpathy Guidelines 12 Rules

By Planxnx, extending rules derived from [Andrej Karpathy's observations](https://x.com/karpathy/status/2015883857489522876) on LLM coding pitfalls. Biases toward caution over speed.

1. Think before coding: state assumptions, surface tradeoffs, ask when unclear.
2. Simplicity first: minimum code, nothing speculative.
3. Surgical changes: touch only what the request needs.
4. Goal-driven execution: define verifiable success criteria and loop until met.
5. Use the model only for judgment calls, not deterministic logic.
6. Token budgets are not advisory.
7. Surface conflicting patterns instead of averaging them.
8. Read before you write.
9. Tests verify intent, not just behavior.
10. Checkpoint after every significant step.
11. Match the codebase's conventions, even if you disagree.
12. Fail loud when something can't be confirmed.

Rule 6 sets specific per-task and per-session token numbers; adjust or drop them for your harness and plan.
