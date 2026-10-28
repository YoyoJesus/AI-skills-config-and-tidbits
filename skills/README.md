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
