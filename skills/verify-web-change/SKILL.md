---
name: verify-web-change
description: Run a web project, open the affected pages at desktop and phone widths, take screenshots, and check the change actually works before calling UI work done. Use after any frontend change, or when asked to verify, preview, or screenshot a page.
---

# Verify a Web Change

Type checks and tests do not prove a page looks or behaves right. Look at it.

## 1. Run the project

Detect how the project runs before starting anything:

| Project | Command |
| --- | --- |
| SvelteKit / Vite (`package.json` with `dev` script) | `npm run dev` (or `bun run dev` if `bun.lock` exists) |
| Static HTML, no build step | `python -m http.server 8765 --bind 127.0.0.1` from the repo root |
| Flask | `flask --app app run --debug` |
| Astro | `npm run dev` |

If a dev server is already running (the user said so, or the port answers), reuse it instead of starting a second one. Start new servers in the background and stop them when done.

## 2. Pick the pages

- Every page or route the change touches.
- Pages that share the changed component, stylesheet, or script.
- Pages that render content with JavaScript must be checked with JavaScript running, not by reading the HTML.

## 3. Look at each page

For each page, at a desktop width (1440px) and a phone width (390px):

1. Load it and wait for content to render.
2. Check the browser console for errors.
3. Take a screenshot.
4. Exercise the changed interaction: open the menu, submit the form, toggle the accordion, trigger the error state.
5. Check keyboard focus and Escape on any dialog that changed.

Use whatever browser tooling the harness provides (built-in browser, Chrome extension, Playwright). If none is available, say so instead of claiming the UI was checked.

## 4. Judge it

- Layout does not overflow or overlap at phone width.
- Nothing on the page is filler. Remove elements that do not do a job.
- Text meets contrast on its background.
- No invented content, placeholder text, or broken images.

## 5. Report

List the pages and widths checked, what was exercised, and anything that looked wrong. Attach or reference the screenshots. Do not report the UI as verified if any step was skipped.
