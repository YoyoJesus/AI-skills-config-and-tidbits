# Third-Party Skills

Skills from other authors that I use or have tried. All credit goes to the original authors; follow the links for source, install steps, and licenses.

| Name | Author | Link |
| --- | --- | --- |
| Find Skills | [Vercel Labs](https://github.com/vercel-labs) | [skills.sh](https://www.skills.sh/vercel-labs/skills/find-skills) |
| Skill Audit | [pors](https://github.com/pors) | [GitHub](https://github.com/pors/skill-audit) |
| Impeccable | [pbakaus](https://github.com/pbakaus) | [GitHub](https://github.com/pbakaus/impeccable) |
| Modernize (tstack) | [t3dotgg](https://github.com/t3dotgg) | [GitHub](https://github.com/t3dotgg/tstack/tree/main/skills/modernize) |
| Takeover (tstack) | [t3dotgg](https://github.com/t3dotgg) | [GitHub](https://github.com/t3dotgg/tstack/tree/main/skills/takeover) |
| Anti-Slop UI | [Monster0506](https://github.com/Monster0506) | [Gist](https://gist.github.com/Monster0506/60e1f02d59200ad64c1e8f28cee6f5d2) |

## Find Skills

By Vercel Labs. A skill that lets a model search for and install its own skills as needed.

## Skill Audit

By pors. A Python CLI (not a skill itself) that security-audits agent skills before you trust them: prompt-injection patterns in descriptions, hardcoded secrets, risky shell scripts, and code issues via semgrep, with SARIF output for CI. For auditing your own code, Claude Code has a built-in `/security-review`.

## Anti-Slop UI

By Monster0506. Pushes the model to design intentional, product-specific interfaces instead of defaulting to common AI-generated UI patterns. Every element, color, animation, and piece of copy has to justify the job it does. Use when creating, redesigning, reviewing, or polishing frontend work.

## Impeccable

By pbakaus, Apache-2.0. Design skill that grew out of Anthropic's frontend-design skill. Installs with `npx impeccable install`, then `/impeccable init` writes a `PRODUCT.md` with the product's audience, purpose, and constraints. Adds 24 subcommands (`critique`, `audit`, `polish`, `distill`, `bolder`, `quieter`, `harden`, and more) and 62 deterministic detector rules for AI-looking frontend design that run from the CLI or a browser extension without an LLM. [Docs](https://impeccable.style).

## Modernize and Takeover (tstack)

By t3dotgg (Theo), MIT. Two skills from [tstack](https://github.com/t3dotgg/tstack); I only use these two from the set.

- **Modernize:** brings an old PR up to date. Re-checks whether the PR's intent still fits the product, not just whether it rebases cleanly. Pulls latest first, uses a disposable worktree if the current one is dirty, and only force-pushes with `--force-with-lease` against the pre-rebase head. Does not merge, close, or expand scope.
- **Takeover:** finishes someone else's PR, branch, or agent thread. Treats the handoff as context rather than proof, imports the original commits onto a new branch, and keeps the original authors' credit in Git history and the PR description. Calls `modernize` to update the work.

`modernize` refers to tstack's `leaving-pr-comments` skill for PR comments; install that too or drop the reference.

See also: [plugins](../plugins/README.md), [MCP servers](../mcp/README.md).
