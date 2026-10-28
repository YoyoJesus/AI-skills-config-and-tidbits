# AI Disclosure

Pick one variant per project. If the project also uses the no co-signing rule from `commits-and-attribution.md`, use the PR footer variant so nothing lands in commit messages.

## PR footer (no commit trailers)

Issues and pull requests submitted by an agent end with this footer, using the actual values, as the final three lines:

```text
Agent provider: PROVIDER_NAME
Agent model: MODEL_NAME
Agent harness: HARNESS_NAME
```

Use plain values with no angle brackets, for example `OpenAI`, `GPT-6`, `Codex`.

## Disclosure policy

Material use of an AI tool must be disclosed: AI-authored or substantially AI-revised code, docs, designs, issue text, test plans, or review findings. Completion, spelling fixes, formatting, and search do not count.

Put the disclosure closest to the work:

- Pull request: an `AI assistance` section in the description.
- Direct commit without a PR: an `AI-Assisted-By` trailer.
- Issue or discussion substantially drafted by AI: a short note at the end.

```markdown
## AI assistance

- Tool: Claude
- Used for: Initial implementation and documentation edits
- Human review: Reviewed and revised by NAME
```

Name the tool and what it did. Never claim an AI tool tested, reviewed, or verified work it did not. The human contributor remains responsible for the result.
