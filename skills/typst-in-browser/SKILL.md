---
name: typst-in-browser
description: Compile Typst to PDF or SVG entirely in the browser in a SvelteKit app using typst.ts, and safely interpolate user data into generated Typst source. Use when adding PDF generation, a live Typst preview, or a Typst template driven by form input.
---

# Typst in the Browser

Pattern used in ResumeSmith, CardSmith, and ProjectSmith. Compilation runs client-side, so user data never leaves the browser and no server is needed.

## Setup

1. Install the three packages at the same version:

   ```sh
   npm install @myriaddreamin/typst.ts @myriaddreamin/typst-ts-web-compiler @myriaddreamin/typst-ts-renderer
   npm install -D vite-plugin-wasm
   ```

2. Copy the WASM binaries into `static/` with [references/copy-wasm.js](references/copy-wasm.js) saved as `scripts/copy-wasm.js`, and wire it into `package.json`:

   ```json
   "prepare": "svelte-kit sync && node scripts/copy-wasm.js",
   "prebuild": "npm run copy-wasm",
   "copy-wasm": "node scripts/copy-wasm.js"
   ```

   Add `static/*.wasm` to `.gitignore` unless the project already commits them.

3. In `vite.config.ts`, add `wasm()` to `plugins` and exclude the package from dependency optimization:

   ```ts
   import wasm from 'vite-plugin-wasm';

   export default defineConfig({
   	plugins: [wasm(), tailwindcss(), sveltekit()],
   	optimizeDeps: { exclude: ['@myriaddreamin/typst.ts'] }
   });
   ```

4. Add a compiler module based on [references/pdf-compiler.ts](references/pdf-compiler.ts) at `src/lib/pdf-compiler.ts`. It lazily initializes once, resets on failure so a retry can succeed, and exposes `compileToPdf`, `compileToSvg`, and `downloadPdf`.

## Generating Typst from user input

Never interpolate raw user strings into Typst source. Use the helpers in [references/typst-escape.ts](references/typst-escape.ts):

| Destination | Helper |
| --- | --- |
| Inside a Typst string literal, e.g. `#heading("...")` | `typstString` |
| Multi-line embedded file content (BibTeX) | `typstTextString` |
| Markup position (bullets, paragraphs) | `typstMarkup` |
| Code position numbers (font sizes) | `typstNumber` (validate and clamp, never escape) |
| Colors | `typstColor` (validate hex, fall back) |
| Link targets | `typstUrl` (http, https, mailto only) |

Keep the generator a pure function from data to Typst source so it can be unit tested in Node without WASM.

## Rules

- Keep compilation in the browser unless an architectural change is explicitly approved.
- Use only the compile entry points from the compiler module in components; do not call `$typst` directly elsewhere.
- Debounce live SVG previews and ignore stale compile results when a newer one has started.
- Test escaping, optional fields, URL normalization, and page dimensions. Put tests that need the real WASM compiler in separate `*.wasm.test.ts` files.
