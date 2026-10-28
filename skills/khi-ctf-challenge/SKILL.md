---
name: khi-ctf-challenge
description: Author a Kent Hack It (KHI) CTF challenge in the kent-hack-it-challenges repo, including the SOLUTION.md metadata, player files in dist/, optional SSH or web Docker image, hints, and a verified reference solve. Use when creating, porting, or reviewing a KHI challenge.
---

# KHI CTF Challenge

## Location

`<year>/<Category>/<slug>/`, for example `2026/ReverseEngineer/go1/`. 2026 categories: AI, BinaryExploitation, Blockchain, Cryptography, Forensics, GeneralSkills, OSINT, PrivilegeEscalation, ReverseEngineer, Riddles, Steganography, WebExploitation.

## Files

```
<slug>/
  SOLUTION.md        metadata, hints, and full solution (never shipped)
  dist/              everything players download, zipped recursively
  generate.sh        optional; runs inside a scratch copy of dist/ before packaging
  Dockerfile         required for Image: ssh or web
  .khi-deps          optional, ssh only: extra packages, or !pkg to drop a default
  .khi-writable      optional, web only: paths left writable under WORKDIR
  solve.py           reference solver, outside dist/
```

Start `SOLUTION.md` from [assets/SOLUTION.template.md](assets/SOLUTION.template.md). The title becomes the challenge name.

## Image types

- `none`: download-only. Players get `dist/` as a zip.
- `ssh`: the build adds a wrapper with `openssh-server`, `nano`, `vim`, and an unprivileged `ctf-player` whose home is the challenge `WORKDIR`. The password comes from `CTF_PASSWORD`. Tagged `khi-ssh/<slug>`.
- `web`: the image must expose exactly one port, or set a `khi.port` label. If it runs as root, a wrapper adds `ctf-web` and makes `WORKDIR` read-only except `.khi-writable` paths. Tagged `khi-web/<slug>`.

## Rules

- Flags use the `khi{...}` format and must match the `Flag` field exactly.
- Never put SOLUTION.md, solvers, private flag files, or generators in `dist/`.
- Three hints, escalating from concept to tool to key step, without giving away the flag.
- Write the description for players: how to connect or what to download, no solution details.
- Difficulty is one of Simple, Easy, Medium, Hard, Extreme.

## Verify before calling it done

1. Solve from a fresh copy of the player download or a freshly built image, not the source directory.
2. Run the reference solver and confirm the recovered flag matches `Flag`.
3. Validate the manifest:

   ```sh
   node scripts/generate-manifest.mjs 2026 --author-from-git --author Yoyojesus --strict --out manifest.json
   KHI_URL=https://dev.ctf.hacksu.com node scripts/upload-challenges.mjs manifest.json --dry-run
   ```

4. For images, smoke test the built image: `python scripts/smoke-challenge-image.py <image> <ssh|web> <slug>`.
