The prompt we will run each time is this:
```
Create an Umbraco 'Content Audit' dashboard that users see when first logging in, showing information about:
- the number of unpublished nodes
- stale content (not been touched in 90+ days)
- number of nodes scanned

Also include a table of 'Flagged nodes' with the stale node's last edited date, path in the content tree, a status of 'stale' or 'unpublished' and the last edited date. The table should have pagination and an export feature.
```

At each level, more information is added for the agent to use to generate a more accurate and context-aware response.

## Section 1: Prompt Only
Run the above prompt in a Claude session in the `/section-1-prompt-only` directory.

> [!NOTE]
> A single test run took ~1h 12min and ~800k tokens

## Section 2: With Context
A design has been created and can be found in the `design-assets` folder. This is automatically added to the context when running Claude in the `/section-2-with-context` directory.

Run the same prompt as above, now with added context. 

*Optionally, add the Umbraco CMS source directory with `/add-dir /path/to/umbraco`*

> [!NOTE]
> A single test run took ~20 min and ~560k tokens.
> A single test run with the CMS source dir added took ~22 min and ~550k tokens.

## Section 3: With Harness
```bash
/plugin marketplace add umbraco/Umbraco-CMS-Backoffice-Skills
```

```bash
# Install backoffice extension skills (58 skills)
/plugin install umbraco-cms-backoffice-skills@umbraco-backoffice-marketplace

# Install testing skills (8 skills) — optional but recommended
/plugin install umbraco-cms-backoffice-testing-skills@umbraco-backoffice-marketplace
```

> [!NOTE]
> A single test run took ~30 min and ~550k tokens

After the run, give it the following prompt:
```
Create a PRD document based on what you have implemented, a small set of user stories and and a small batch of SKILL.md files that would make this a better process
```

Copy the created files into `section-4-with-loop` folder.

## Section 4: With Loop
Combining all the things we've learnt so far, run the following prompt:

```
/goal Create an Umbraco 'Content Audit' dashboard that users see when first logging in, showing information about:
- the number of unpublished nodes
- stale content (not been touched in 90+ days)
- number of nodes scanned

Also include a table of 'Flagged nodes' with the stale node's last edited date, path in the content tree, a status of 'stale' or 'unpublished' and the last edited date. The table should have pagination and an export feature.

Use the `docs` folder files to help guide the implementation and ensure all requirements are met.

Run until you've satisfied the PRD requirements.
```

> [!NOTE]
> A single test run without `/goal` took ~22 min and ~720k tokens
> A single test run with `/goal` took ~27 min and ~790k tokens
> A single test run with `/goal` and the CMS source added took ~X min and ~Xk tokens - only one that decided to do E2E verification.

TBD:
- Skill to route in the test helpers
- Validation