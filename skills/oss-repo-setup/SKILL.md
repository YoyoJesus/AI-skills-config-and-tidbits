---
name: oss-repo-setup
description: Set up a public open-source repo for contributors, with community files, an AGENTS.md, PR and issue templates, and GitHub Actions CI that enforces one-line conventional commits and an AI attribution declaration on PRs and issues. Use when preparing a new repo for contributors or bringing an existing one up to that standard.
---

# Open-Source Repo Setup

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
CONTRIBUTING.md             human-facing version of the AGENTS.md rules
LICENSE
README.md                   canonical project README
SECURITY.md
```

## Steps

1. Copy the files in [assets/](assets/) into `.github/`: `scripts/*`, `workflows/*`, `dependabot.yml`, and `pull_request_template.md`.
2. Adjust for the project:
   - The assets assume a Node app in `web/`. Update `working-directory`, `cache-dependency-path`, and the dependabot `directory` if the app is at the root or elsewhere.
   - If the project is not Node, replace the `test` job in `tests.yml` with the project's own install, test, lint, and build steps, and change the dependabot ecosystem. Keep the `commit-messages` job; it only needs Node to run the checker.
   - Edit the Risk and Checklist lines in `pull_request_template.md` for the project's domain.
3. Write the issue templates. Each one ends with a required `agent_attribution` textarea defaulting to `Not AI-generated`, and the safety checks ask the reporter to remove credentials and personal data. Set any feature-area dropdown to the project's real areas. Point `config.yml` at `https://github.com/OWNER/REPO/security/advisories/new`.
4. Write `AGENTS.md`. Start with a "Before opening a pull request" section that lists the required checks, the one-line commit format, and the PR body reproduced verbatim with the three-line agent footer. Then add project layout, development workflow, architecture and privacy, and code and tests sections.
5. Mirror the AGENTS.md rules in `CONTRIBUTING.md` for humans, and note in AGENTS.md that the two must be updated together.
6. Add `SECURITY.md` pointing to GitHub private vulnerability reporting, a `CODE_OF_CONDUCT.md`, and a `LICENSE`.
7. Run `node --test .github/scripts/check-agent-attribution.test.mjs` to confirm the validator works.

## What CI enforces

- `check-commit-messages.mjs`: every commit in the PR is exactly one line and matches `type(scope)!: description`, with types `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- `check-agent-attribution.mjs`: the PR or issue body either declares `AI assistance: no` / `Not AI-generated`, or ends with the exact footer:

  ```text
  Agent provider: PROVIDER_NAME
  Agent model: MODEL_NAME
  Agent harness: HARNESS_NAME
  ```

- `tests.yml`: commit message check, validator tests, then install, test, type check, lint, and build.

Actions are pinned to commit SHAs. Keep them pinned when updating.

## Notes for agents

`gh pr create` and API-created PRs do not apply `.github/pull_request_template.md`. That is why AGENTS.md reproduces the body; agents must pass it explicitly with `gh pr create --body-file`.

Reusable AGENTS.md sections live at https://github.com/YoyoJesus/AI-skills-config-and-tidbits/tree/main/agents-md (`pr-workflow.md`, `commits-and-attribution.md`, `ai-disclosure.md`).
