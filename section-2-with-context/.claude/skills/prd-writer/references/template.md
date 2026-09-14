# PRD template

Use this structure. Keep every section short — a sentence or a handful of
bullets. Omit a section only if it's genuinely not applicable, don't pad it.

```markdown
# PRD: [Feature name]

## Overview
One or two sentences: what this feature is and who sees it.

## Goals / Requirements
- Bullet list of concrete, checkable requirements.
- Each one should be verifiable by looking at the running app or the code —
  avoid vague adjectives like "modern" or "user-friendly".

## Non-goals
- Things that sound related but are explicitly out of scope for this work.

## Acceptance Criteria
- [ ] Checklist form, one line per requirement from the Goals section.
- [ ] Written so "done" is unambiguous — an agent should be able to tick
      each box by inspecting the app, not by judgment call.

## Open Questions
- Anything left unresolved that a human should confirm before this is final.
  Leave empty (or omit) if there aren't any.
```

## Example: Content Audit dashboard

For this workshop's Content Audit prompt, Acceptance Criteria would look
like:

```markdown
## Acceptance Criteria
- [ ] Dashboard is shown to users on first login
- [ ] Dashboard shows count of unpublished nodes
- [ ] Dashboard shows count of stale content (not edited in 90+ days)
- [ ] Dashboard shows count of nodes scanned
- [ ] Flagged nodes table shows path, status (stale/unpublished), last edited date
- [ ] Flagged nodes table supports pagination
- [ ] Flagged nodes table supports export
```

That level of specificity — one line per testable behaviour — is the bar for
every PRD written with this template.
