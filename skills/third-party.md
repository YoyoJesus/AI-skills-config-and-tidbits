# Third-Party Skills, Plugins, and MCPs

Tools from other authors that I use or have tried. All credit goes to the original authors; follow the links for source, install steps, and licenses.

| Name | Type | Author | Link |
| --- | --- | --- | --- |
| Find Skills | Skill | [Vercel Labs](https://github.com/vercel-labs) | [skills.sh](https://www.skills.sh/vercel-labs/skills/find-skills) |
| Superpowers | Plugin (skills) | [obra](https://github.com/obra) | [GitHub](https://github.com/obra/superpowers) |
| CodeGraph | MCP server | [colbymchenry](https://github.com/colbymchenry) | [GitHub](https://github.com/colbymchenry/codegraph) |
| Ponytail | Plugin | [dietrichgebert](https://github.com/dietrichgebert) | [GitHub](https://github.com/dietrichgebert/ponytail) |
| Skill Audit | Skill | [pors](https://github.com/pors) | [GitHub](https://github.com/pors/skill-audit) |

## Find Skills

By Vercel Labs. A skill that lets a model search for and install its own skills as needed.

## Superpowers

By obra. Turns AI implementation into a TDD-driven workflow.

- Works with you to build a spec, then builds a plan from it
- Can implement with multiple sub-agents, isolated in git worktrees
- Reviews code after each step and at the end
- Includes debugging and brainstorming/mockup skills

## CodeGraph

By colbymchenry. A local MCP server that indexes your code into a map so the model can find snippets faster and cheaper, with less grepping.

## Ponytail

By dietrichgebert. Acts like a senior-level reviewer/implementer: keeps the model from writing overly complex code and provides auditing tools for cleanup. Can get expensive since it fires off many sub-agents.

## Skill Audit

By pors. Security audit skill for finding vulnerabilities in code so a human can fix them. Claude Code ships a stronger built-in version (`/security-review`), but it is closed source.
