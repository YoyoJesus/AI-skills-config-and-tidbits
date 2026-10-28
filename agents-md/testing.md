# Testing

Pick one variant per project.

## Proportional (default)

- Use Vitest (JS/TS) or pytest (Python).
- Add or update a few focused tests for important behavior, including happy paths and meaningful failure cases.
- Add regression coverage for input boundaries, fallback behavior, and failure paths.
- Avoid exhaustive coverage and tests that merely mirror implementation details.
- Run focused tests while developing. Run the full suite before opening a PR, not before every commit.
- Put tests in their own `tests/` folder unless the project already colocates them.

## No tests

- Do not write tests unless explicitly asked.
