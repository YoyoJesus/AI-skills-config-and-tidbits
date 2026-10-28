---
name: toolsmith-repo-setup
description: Set up a public open-source repo for a small SvelteKit tool with community files, an AGENTS.md, PR and issue templates, and CI that enforces one-line conventional commits and an AI attribution declaration. Use when preparing a new tool repo for contributors or bringing an existing one in line with ResumeSmith and CardSmith.
---

# Toolsmith Repo Setup

The repo shape shared by ResumeSmith, CardSmith, ProjectSmith, and email-signature-maker.

## Layout

```
.gitattributes              * text=auto
.github/
  ISSUE_TEMPLATE/
    bug_report.yml
    feature_request.yml
    config.yml              blank issues off, link to private security advisories
  scripts/
    check-agent-attribution.mjs
    check-agent-attribution.test.mjs
    check-commit-messages.mjs
  workflows/
    attribution.yml
    tests.yml
  dependabot.yml
  pull_request_template.md
AGENTS.md
CLAUDE.md                   contains only: @AGENTS.md
CODE_OF_CONDUCT.md
CONTRIBUTING.md             human-facing version of AGENTS.md rules
LICENSE
README.md                   canonical; web/README.md is a short pointer
SECURITY.md
web/                        the SvelteKit app, also the Vercel project root
```

## Steps

1. Copy the files in [assets/](assets/) into `.github/`: `scripts/*`, `workflows/*`, `dependabot.yml`, and `pull_request_template.md`.
2. If the app is at the repo root instead of `web/`, update `working-directory`, `cache-dependency-path`, and the dependabot `directory`.
3. Edit the Risk and Checklist lines in `pull_request_template.md` for the tool's domain (PDF compatibility, AI cost, email clients, and so on).
4. Write the issue templates. Each one ends with a required `agent_attribution` textarea defaulting to `Not AI-generated`, and the safety checks ask the reporter to remove personal data. Set the feature-area dropdown to the tool's real areas.
5. Write `AGENTS.md` starting with a "Before opening a pull request" section that reproduces the PR body verbatim with the three-line agent footer. See `agents-md/pr-workflow.md`, `agents-md/commits-and-attribution.md`, and `agents-md/ai-disclosure.md` in this repo. Then add project layout, development workflow, architecture and privacy, and code and tests sections.
6. Mirror the AGENTS.md rules in `CONTRIBUTING.md` for humans, and note in AGENTS.md that the two must be updated together.
7. Add `SECURITY.md` pointing to GitHub private vulnerability reporting, and `CODE_OF_CONDUCT.md`.
8. Run `node --test .github/scripts/check-agent-attribution.test.mjs` to confirm the validator works.

## What CI enforces

- `check-commit-messages.mjs`: every commit in the PR is exactly one line and matches `type(scope)!: description`.
- `check-agent-attribution.mjs`: the PR or issue body either declares `AI assistance: no` / `Not AI-generated`, or ends with the exact footer:

  ```text
  Agent provider: PROVIDER_NAME
  Agent model: MODEL_NAME
  Agent harness: HARNESS_NAME
  ```

- `tests.yml`: `npm ci`, `npm test`, `npm run check`, `npm run lint`, `npm run build` on Node 22.

Actions are pinned to commit SHAs. Keep them pinned when updating.
