---
name: umbraco-backoffice-build-playbook
description: Sequencing checklist and known gotchas for building a custom Umbraco 18 backoffice extension end-to-end in this workshop's scaffold (RCL + Lit/TS client + generated OpenAPI client). Use this whenever the task is "build a dashboard/section/property-editor for Umbraco", or anything that involves a C# backoffice API controller paired with a Lit/TypeScript frontend that calls it through the generated client. Distilled from a real run of the Content Audit dashboard build — follow the ordered steps to skip the traps that run hit.
---

# Umbraco Backoffice Extension: Build Playbook

This is a *sequencing and gotchas* skill, not a from-scratch tutorial — the
`umbraco-cms-backoffice-skills` marketplace plugin already covers dashboards, controllers,
OpenAPI wiring, etc. individually. This skill exists because the order you do things in, and
a handful of environment traps, cost real time on the first run even with those skills
installed. Follow the checklist in order; each step names the trap it prevents.

## Before writing any code

1. Run the `umbraco-version-guard` skill once — cheap, and prevents writing code against the
   wrong Umbraco major.
2. **Verify actual current file-tree state before trusting `CLAUDE.md` or a PRD.**
   `CLAUDE.md`'s "Architecture" section describes the *target* design, and a PRD's checkboxes
   can be pre-filled/aspirational — neither guarantees the code exists yet. `ls`/`find` the
   extension project directly.
3. If a design mockup exists (e.g. a `.dc.html` in a sibling `design-assets/` folder), read
   it before writing any UI — it gives exact labels, data shape, and layout up front instead
   of a redesign pass later.
4. When you need a constant/export that a reference source repo (e.g. the `Umbraco-CMS`
   monorepo) uses via a relative import, **check the installed npm package's own
   `node_modules/@umbraco-cms/backoffice/package.json` `exports` map and `.d.ts` files** —
   don't assume the published package matches the monorepo's internal layout. It sometimes
   doesn't (see Gotchas below).
5. **Check standing org/project requirements before writing UI copy or formatting code** —
   a fixed date format, units, or other compliance rules. No Umbraco skill will ever know
   about these; they come from outside the framework and take priority over whatever
   `localize.date()`/`Intl` would produce by default. See `references/snippets.md` for the
   fixed-format date helper this workshop's org context requires (`DD-MM-YYYY`).

## Backend → verify → generate client → frontend, in that order

This ordering exists specifically so you never have to guess a generated SDK function name.

1. Write the backend: DTOs, service (+ interface for DI), a composer registering it, and the
   controller endpoints. `dotnet build` to confirm it compiles before doing anything else.
2. **Start the site carefully — this is where most of the friction is:**
   - Check whether the *default* launch port is already bound before running:
     `lsof -nP -iTCP:<port> -sTCP:LISTEN`. This workshop runs multiple sibling sections
     (`section-1`, `section-2`, …) that can each have their own instance running — if the
     port's taken, **don't kill it without confirming whose process it is**; just pick a
     different port.
   - If you bypass the launch profile with `--no-launch-profile --urls "https://localhost:<port>"`,
     you **also lose `ASPNETCORE_ENVIRONMENT=Development`**, which `launchSettings.json`
     normally sets. Without it, the OpenAPI/Swagger endpoints silently 404 with no hint why.
     Always pass both together:
     `ASPNETCORE_ENVIRONMENT=Development dotnet run --no-launch-profile --urls "https://localhost:<port>"`
   - Wait for readiness with a background poll loop, not a sleep chain:
     `until curl -sk -o /dev/null -w '%{http_code}' <openapi-doc-url> | grep -q 200; do sleep 2; done`
3. Curl-verify the OpenAPI document is reachable
   (`/umbraco/openapi/<Constants.ApiName>.json`) before generating the client — this is the
   cheapest place to catch the environment-variable trap above.
4. Run `npm run generate-client` (update the hardcoded URL/port in the script call to match
   whatever port you actually started on). Read the generated `sdk.gen.ts`/`types.gen.ts` to
   get the *real* function names and response shapes — Umbraco's OpenAPI generation derives
   operation names from the controller action, not always predictably.
5. Only now write the frontend, against the real generated types. See
   `references/snippets.md` for the Lit/UUI patterns (table+pagination, localization,
   `tryExecute`, CSV export) that took the most digging to find on the first run — reuse them
   rather than re-deriving.
6. `npm run build` (`tsc --noEmit` + `vite build`) is your primary safety net — it catches
   binding/type mistakes before you ever load a browser. Treat a clean `tsc` pass as the gate
   before browser verification, not an afterthought.
7. Browser-verify with the `umbraco-chrome-navigation` skill's helpers. One thing that skill
   doesn't cover: **the login page (`Umbraco.Web.UI.Login`) is a separate, non-Lit app** whose
   `<input>` elements have no `label`/`aria-label`/`placeholder` — only a `name` attribute. The
   skill's `__umb.fill()` helper matches on the former, so it silently fails on the login
   form. Use this instead:
   ```js
   function setVal(el, val) {
     const desc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), 'value');
     desc.set.call(el, val);
     el.dispatchEvent(new Event('input', {bubbles:true}));
     el.dispatchEvent(new Event('change', {bubbles:true}));
   }
   setVal(document.getElementById('username-input'), '<email>');
   setVal(document.getElementById('password-input'), '<password>');
   __umb.click('Login');
   ```
8. Clean up before finishing: kill any temporary `dotnet run` process you started, close
   browser tabs you opened, and check `git status`/`git diff --stat` for incidental noise —
   a fresh unattended install or a test run can dirty a tracked SQLite dev database
   (`umbraco/Data/*.sqlite.db`) with pure runtime state (audit trail, server registration).
   `git checkout -- <path>` it if the diff is binary-only and you didn't intend a data change.

## Known platform gotchas (bucket: things that looked right but weren't)

- **Condition alias constants aren't always exported where the reference source implies.**
  `UMB_SECTION_ALIAS_CONDITION_ALIAS` is used via a relative import inside the `Umbraco-CMS`
  monorepo, but is **not** re-exported from the installed `@umbraco-cms/backoffice@18.1.1`
  package's public `./section` subpath. When this happens, hardcode the literal string
  (e.g. `'Umb.Condition.SectionAlias'`) — these are stable public API strings even when not
  surfaced as a TS constant in a given package version. Don't assume every constant you see
  used in the source repo is importable from the published package; check the installed
  `.d.ts` first.
- **Lit: bind optional/non-string values as properties, not attributes.** Something like
  `state=${maybe ? "waiting" : undefined}` as an *attribute* binding stringifies to the
  literal text `"undefined"`. Use a property binding instead: `.state=${maybe ? "waiting" : undefined}`.
- **Don't guess Umbraco icon names.** If you're not certain an icon name exists in the
  installed icon set, leave the icon off rather than risk a silently-blank icon — verify
  against a known-good list before adding one, don't invent one because it "sounds right".

See `references/snippets.md` for the reusable backend and frontend code patterns.
