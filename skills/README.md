# Skills

One folder per skill. Each folder holds a `SKILL.md` with frontmatter, plus any scripts or references it needs.

```
skills/
  my-skill/
    SKILL.md
    scripts/
    references/
```

`SKILL.md` frontmatter:

```markdown
---
name: my-skill
description: When the model should use this skill, in one or two sentences.
---
```

To use one, copy or symlink the folder into `~/.claude/skills/` (Claude Code) or the equivalent skills directory for your harness.

## Mine

| Skill | Use for | Inferred from |
| --- | --- | --- |
| [sveltekit-scaffold](sveltekit-scaffold/SKILL.md) | Starting a new web project on my default stack | Dependency-Domino and most SvelteKit repos |
| [verify-web-change](verify-web-change/SKILL.md) | Running a project and checking pages at desktop and phone widths | industry, brain-dump notes on verify skills |
| [typst-in-browser](typst-in-browser/SKILL.md) | Client-side Typst to PDF/SVG with safe escaping | ResumeSmith, CardSmith, ProjectSmith |
| [toolsmith-repo-setup](toolsmith-repo-setup/SKILL.md) | Community files, templates, and attribution/commit CI for public tool repos | ResumeSmith, CardSmith, ProjectSmith, email-signature-maker |
| [ctf-challenge](ctf-challenge/SKILL.md) | Authoring CTF challenges with a verified solve | kent-hack-it-challenges |

## Third-party

Skills from other authors are listed with credit in [third-party.md](third-party.md).
