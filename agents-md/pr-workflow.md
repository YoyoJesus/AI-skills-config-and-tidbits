# Pull Request Workflow

- Open pull requests from a branch. Never push directly to `main`.
- Run `npm test`, `npm run check`, and `npm run lint` before pushing, plus `npm run build` when the change can affect bundling or deployment. Every one must pass.
- If `npm run lint` flags files you did not touch, that is a CRLF working-tree artifact on Windows, not a repository baseline. Run `npm run format`, then commit only the files your change actually touches.
- `gh pr create` and API-created PRs do not apply `.github/pull_request_template.md`. Supply the body explicitly with `gh pr create --body-file`.

## PR body

Use this body. Keep every heading, replace each HTML comment with your own text, and tick the boxes you completed.

```markdown
## Summary

<!-- What changed, and what problem does it solve? -->

## Verification

<!-- List the commands and manual checks you ran, with their results. -->

- [ ] `npm test`
- [ ] `npm run check`
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] I added or updated tests for changed behavior.
- [ ] I included screenshots or recordings for meaningful UI changes, or marked this not applicable below.

## Risk and deployment

<!-- Note privacy, security, AI-cost, dependency-size, migration, or deployment implications. Write "None" if not applicable. -->

## Checklist

- [ ] My changes are focused.
- [ ] I updated relevant documentation.
- [ ] I used synthetic test data and did not commit secrets or personal information.
- [ ] I reviewed the diff for unrelated generated or formatting changes.
```
