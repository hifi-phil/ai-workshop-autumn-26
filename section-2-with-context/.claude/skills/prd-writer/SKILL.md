---
name: prd-writer
description: Use when the user asks to create, write, or update a PRD (Product Requirements Document) for this workshop project — phrases like "create a PRD", "write a PRD document", "create a PRD based on what you've implemented", or "update the PRD". Defines what a PRD means in this workshop and the exact template to follow, then saves it to docs/PRD.md so later steps — including the Section 4 goal-loop that runs "until you've satisfied the PRD requirements" — have a concrete, checkable spec to work against.
---

# Writing a PRD for this workshop

A PRD here is not a formal product-management artifact. It's a short, plain
Markdown file that pins down what the Content Audit add-on is supposed to do,
so an agent (in this repo, or in a later section that only reads `docs/`,
never this conversation) can tell whether the work is actually done.

Write it as if a future agent with none of the current context has to build
or verify the feature from this file alone. Vague requirements ("dashboard
looks nice") can't be checked later — prefer requirements that are true or
false ("dashboard shows a count of unpublished nodes").

## Where it goes

Save the PRD to `docs/PRD.md` in the project root. Create the `docs` folder
if it doesn't exist yet. If a PRD already exists there, update it in place
rather than creating a second file.

## What to base it on

- If the feature already exists, base the PRD on what was actually built —
  read the relevant controllers, client code, and views rather than guessing.
- If the user gave a prompt describing the feature (e.g. the workshop's
  Content Audit dashboard prompt), fold its requirements in directly instead
  of paraphrasing loosely.
- Ask the user only when something is genuinely ambiguous or missing from
  both the code and the prompt — don't block on nice-to-have detail.

## Template

Read `references/template.md` for the exact section structure to use,
including a worked example (Acceptance Criteria for this workshop's Content
Audit dashboard) showing the level of specificity expected — one line per
testable behaviour, not vague adjectives.
