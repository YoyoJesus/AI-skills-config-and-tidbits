---
name: sveltekit-scaffold
description: Scaffold a new web project on the preferred stack (SvelteKit, Svelte 5, TypeScript, Tailwind v4, Prettier at 120 chars, Iconify, Vitest, and Drizzle + PostgreSQL when a database is needed). Use when starting a new web app, prototype, or hackathon project with no stack specified.
---

# SvelteKit Scaffold

## 1. Create the project

```sh
npx sv create <name> --template minimal --types ts
cd <name>
npx sv add tailwindcss prettier vitest
```

Add Drizzle only if the project needs a database:

```sh
npx sv add drizzle   # choose PostgreSQL and postgres.js
```

Add Iconify:

```sh
npm install -D @iconify/svelte
```

## 2. Configure

`.prettierrc`:

```json
{
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "none",
	"printWidth": 120,
	"plugins": ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	"overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
}
```

`.gitattributes`:

```
* text=auto
```

Make sure `package.json` has `dev`, `build`, `check`, `lint` (`prettier --check .`), `format` (`prettier --write .`), and `test` (`vitest run`) scripts.

## 3. Layout

```
src/
  lib/
    components/
    server/        server-only code, including db/
    types.ts
  routes/
tests/             or colocated *.test.ts, pick one
static/
```

## 4. Agent files

Create `AGENTS.md` from the chunks at https://github.com/YoyoJesus/AI-skills-config-and-tidbits/tree/main/agents-md (at minimum `sveltekit-stack.md`, `commits-and-attribution.md`, `writing-style.md`, `code-style.md`, and one variant from `testing.md`), plus a short project section describing what the app does. Create `CLAUDE.md` containing only `@AGENTS.md`.

## 5. Check

Run `npm run check`, `npm run lint`, `npm test`, and `npm run build`. All must pass before the first commit. Commit with a one-line conventional message and no co-author trailer.

## Rules

- Svelte 5 runes only, no legacy `export let` or stores for component state.
- Use Iconify icons, never emojis.
- Do not add a database, auth, or backend the project does not need.
- If the project needs a heavier backend than SvelteKit server routes, use Flask (Python 3.13+) in a separate folder.
