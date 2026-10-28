---
name: ctf-challenge
description: Author a CTF challenge with player-facing files separated from the solution, metadata and escalating hints, an optional SSH or web Docker image, and a verified reference solve. Use when creating, porting, or reviewing a CTF challenge for an event or practice gym.
---

# CTF Challenge

## Check the repo first

Before writing anything, look for the event's existing conventions and follow them over the defaults below:

- README or CONTRIBUTING notes on challenge layout
- an existing solution or metadata template
- the flag format (e.g. `ctf{...}`, `khi{...}`)
- category names and difficulty scale
- packaging, manifest, upload, or image build scripts
- a recent challenge in the same category to copy the shape of

## Layout

```
<year>/<Category>/<slug>/
  SOLUTION.md        metadata, hints, and full solution (never shipped)
  dist/              everything players download, nothing else
  generate.sh        optional; produces randomized or large player files
  Dockerfile         only for challenges with a running service
  solve.py           reference solver, outside dist/
```

Start `SOLUTION.md` from [assets/SOLUTION.template.md](assets/SOLUTION.template.md). The title becomes the challenge name.

## Delivery types

- **Download:** players get a zip of `dist/`. No container.
- **SSH:** players log into a shell as an unprivileged user. The image runs `sshd`, sets the password from an environment variable at start, and makes the challenge directory the user's home.
- **Web:** the image exposes exactly one port (or labels which one is the challenge). Run the service as an unprivileged user and keep the app directory read-only except paths that must be writable.

Never run the challenge process as root unless root is the point of the challenge.

## Writing it

- The flag must appear exactly once in metadata and be recoverable only by solving.
- The description tells players how to connect or what to download. No solution details.
- Three hints that escalate: concept, then tool or technique, then key step. None gives away the flag.
- Difficulty should match the number of steps and how obscure the technique is, not how long it took to build.
- Keep SOLUTION.md, solvers, private flag files, and generators out of `dist/`.
- For randomized flags or per-instance secrets, generate them at build or start time instead of committing them.

## Verify before calling it done

1. Build the player view from scratch: a fresh zip of `dist/`, or a freshly built image.
2. Solve it from that player view only, not the source directory.
3. Run the reference solver and confirm the recovered flag matches the metadata exactly.
4. For images, confirm the service starts, the port or SSH login works, and the player user cannot read the solution or modify shared files.
5. Run the repo's manifest or packaging validation if it has one, in dry-run mode first.
