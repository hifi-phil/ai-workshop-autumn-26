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
Run the above prompt in a Claude session in the `/section-1-prompt-only` directory. Take a screenshot of what it generates and post it in #agentic-developer-workshop on Slack.

> [!NOTE]
> Test run timing: 
> - A single test run took ~26 min and ~208k tokens

### Example outcome
![alt text](assets/image.png)

## Section 2: With Context
A design has been created and can be found in the `design-assets` folder. This is automatically added to the context when running Claude in the `/section-2-with-context` directory.

Run the same prompt as section 1, now with added context.

*Optionally, add the Umbraco CMS source directory with `/add-dir /path/to/umbraco`*

After this section, run `/init` to generate a CLAUDE.md, and pass it the following prompt:

```
Create a PRD document based on what you have implemented
```

Once the CLAUDE.md and PRD docs are created, review them both for correctness and copy them into both the `section-3-with-harness` and `section-4-with-loop` folders.

> [!NOTE]
> A single test run with took ~17 min and ~187k tokens. With the CMS source dir added took ~18 min and ~184k tokens, and it chose to run Playwright too.

### Example outcome
![alt text](assets/image2.png)
![alt text](assets/image3.png)

## Section 3: With Harness
```bash
# Add Umbraco CMS Backoffice Skills marketplace
/plugin marketplace add umbraco/Umbraco-CMS-Backoffice-Skills

# Install backoffice extension skills (58 skills)
/plugin install umbraco-cms-backoffice-skills@umbraco-backoffice-marketplace

# Install testing skills (8 skills) — optional but recommended
/plugin install umbraco-cms-backoffice-testing-skills@umbraco-backoffice-marketplace
```

> [!NOTE]
> A single test run with a CLAUDE.md took ~12 min and ~140k tokens

After the run, give it the following prompt:
```
Create a small batch of SKILL.md files that would make this a better process
```

Review and edit the skills for correctness, then copy the created files into `section-4-with-loop` folder.

### Example outcome
![alt text](assets/image4.png)

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
> A single test run without `/goal` took ~15 min and ~170k tokens
> A single test run with `/goal` took ~24 min and ~535k tokens

### Example outcome
![alt text](assets/image5.png)