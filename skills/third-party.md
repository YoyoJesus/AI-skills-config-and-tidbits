# Third-Party Skills

Skills from other authors that I use or have tried. All credit goes to the original authors; follow the links for source, install steps, and licenses.

| Name | Author | Link |
| --- | --- | --- |
| Find Skills | [Vercel Labs](https://github.com/vercel-labs) | [skills.sh](https://www.skills.sh/vercel-labs/skills/find-skills) |
| Skill Audit | [pors](https://github.com/pors) | [GitHub](https://github.com/pors/skill-audit) |
| Impeccable | [pbakaus](https://github.com/pbakaus) | [GitHub](https://github.com/pbakaus/impeccable) |
| Anti-Slop UI | [Monster0506](https://github.com/Monster0506) | [Gist](https://gist.github.com/Monster0506/60e1f02d59200ad64c1e8f28cee6f5d2) |

## Find Skills

By Vercel Labs. A skill that lets a model search for and install its own skills as needed.

## Skill Audit

By pors. Security audit skill for finding vulnerabilities in code so a human can fix them. Claude Code ships a stronger built-in version (`/security-review`), but it is closed source.

## Anti-Slop UI

By Monster0506. Pushes the model to design intentional, product-specific interfaces instead of defaulting to common AI-generated UI patterns. Every element, color, animation, and piece of copy has to justify the job it does. Use when creating, redesigning, reviewing, or polishing frontend work.

## Impeccable

By pbakaus, Apache-2.0. Design skill that grew out of Anthropic's frontend-design skill. Installs with `npx impeccable install`, then `/impeccable init` writes a `PRODUCT.md` with the product's audience, purpose, and constraints. Adds 24 subcommands (`critique`, `audit`, `polish`, `distill`, `bolder`, `quieter`, `harden`, and more) and 62 deterministic detector rules for AI-looking frontend design that run from the CLI or a browser extension without an LLM. [Docs](https://impeccable.style).

See also: [plugins](../plugins/README.md), [MCP servers](../mcp/README.md).
