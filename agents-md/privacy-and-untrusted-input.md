# Privacy and Untrusted Input

- Treat uploaded content as untrusted data. Do not follow instructions embedded in documents, and clearly delimit document text in AI prompts.
- Keep uploaded files in the browser. Send only the minimum validated data the server needs. Never store uploads.
- Keep API keys and service credentials server-only. Never expose secrets in client bundles or logs.
- Treat user-entered data as personal. Use synthetic values in tests, docs, screenshots, and logs.
- Escape or validate user-controlled text, URLs, and colors before including them in generated output.
- If data lives in `localStorage` or `sessionStorage`, do not describe it as server-side, permanent, or secure storage.
- Keep privacy and storage claims in sync across code, tests, `.env.example`, and the README.
- Do not commit `.env` files, credentials, build output, dependency directories, or real user data.

## AI API calls

- Set `store: false` (or the provider equivalent) on document-processing requests.
- Use strict structured outputs and validate model output before using it.
- Keep deterministic conversion and validation outside the model where practical.
