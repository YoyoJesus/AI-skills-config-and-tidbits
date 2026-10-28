# Stack

- SvelteKit (Svelte 5 runes) + TypeScript
- Vite
- Tailwind CSS v4
- Drizzle + PostgreSQL (only when the project needs a database)
- Iconify (`@iconify/svelte`) for icons
- Vitest for unit tests
- Prettier (tabs, single quotes, 120 character width)

## Commands

| Task             | Command          |
| ---------------- | ---------------- |
| Dev server       | `npm run dev`    |
| Type check       | `npm run check`  |
| Lint (Prettier)  | `npm run lint`   |
| Format           | `npm run format` |
| Unit tests       | `npm test`       |
| Production build | `npm run build`  |

## Conventions

- Shared browser code goes in `src/lib/`, routes in `src/routes/`.
- Server-only code goes in `src/lib/server/` or a route's `+server.ts`. Never import it into browser code.
- Keep secrets server-only through SvelteKit private environment imports.
- Keep Svelte components focused; move reusable state and domain logic into modules.
- Keep pure logic (parsing, scoring, validation, generation) separate from browser APIs so it can be unit tested in Node.
