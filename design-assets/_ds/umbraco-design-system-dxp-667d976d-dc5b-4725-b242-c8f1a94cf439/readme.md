# Umbraco Backoffice Design System (Bellissima layer)

A design system for the **Umbraco Backoffice** — specifically the composed component
layer known as **Bellissima** (`@umbraco-cms/backoffice`, the `umb-*` elements), built
on top of the **Umbraco UI Library (UUI)** primitives and the **Lato** typeface.

This is the layer real backoffice extensions actually use: ready-composed views like
the data **Table**, **Collection**, **Workspace**, **Property Editor**, and entity
actions — all sitting on UUI tokens.

> ⚠️ **It is an Umbraco product surface.** Recreate Umbraco's own UI faithfully here;
> do not invent new Umbraco-branded screens. When building *with* this system for a
> third party, compose the primitives into original layouts.

---

## Sources

Everything in this system was derived from real Umbraco source, not from memory:

| Source | What we took from it |
|--------|----------------------|
| **`Umbraco.Web.UI.Client/`** (mounted codebase) | Backoffice layout (`src/apps/backoffice`), composed components (`src/packages/core/components/*` — table, body-layout, footer-layout, history, code-block…), the icon registry (`src/packages/core/icon-registry/icons/*`), layout tokens (`src/css/umb-css.css`), and the design philosophy docs (`docs/design-choices.md`, `docs/style-guide.md`). |
| **[github.com/umbraco/Umbraco.UI](https://github.com/umbraco/Umbraco.UI)** (UUI) | The token source of truth: `src/styles/custom-properties/{palette,colors,sizes,shadow,fonts}.css`, the Lato `@font-face` set (`src/styles/typography/lato.css`), and the `.uui-text` type system. Lato `.woff2` files imported directly from `src/assets/fonts/lato/`. |
| **[npmjs.com/package/@umbraco-cms/backoffice](https://www.npmjs.com/package/@umbraco-cms/backoffice)** | Package shape, the `umb-*` / `uui-*` distinction, extension model. |
| **[uui.umbraco.com](https://uui.umbraco.com/)** | UUI Storybook (style guides for typography, layout, dialog). |

Brand assets (`umbraco-logo.svg`, `favicon.svg`, `installer-illustration.svg`) and the
icon SVGs under `assets/icons/` were copied straight from the codebase.

---

## The two layers

Umbraco's frontend is two stacked libraries — keep the distinction clear:

- **UUI** (`uui-*` web components, e.g. `<uui-button>`, `<uui-table>`, `<uui-box>`) —
  the generic, brand-level primitive library. Ships the **tokens** (`--uui-color-*`,
  `--uui-size-*`), Lato, and the `look` / `color` attribute model.
- **Bellissima** (`umb-*` elements, e.g. `umb-table`, `umb-workspace`,
  `umb-body-layout`) — Umbraco-specific compositions of UUI primitives wired to the
  backoffice's data, routing, and extension system.

This design system models **both**: the tokens + primitive recreations come from UUI;
the screen recreations (UI kit) come from Bellissima.

---

## Content fundamentals

The backoffice voice is defined in `Umbraco.Web.UI.Client/docs/design-choices.md`
("UX writing") and it is unusually strict. The governing line:

> *"UI stays behind. User content takes the visual front seat. Default to restraint on
> every visual decision. When in doubt: leave the icon out, leave the colour off, cut
> the word."*

**Tone & casing**
- **Terse to the point of single words.** "Create a new member" → **New**. "Search for
  content here…" → **Search**. "Successfully saved your changes" → **Saved**.
- **Contextual reference.** In the Members section the button is "New", not "New member".
  On a delete confirm inside a Document workspace, "Delete" is enough — context carries
  the target.
- **Sentence case** for labels and headings, never Title Case or ALL CAPS. Buttons read
  as verbs: `Save`, `Publish`, `Delete`, `Transfer`.
- **No marketing voice, no "please", no "in order to", no explanations.** One verb beats
  two; one sentence beats two.
- **Neither "I" nor "you" as a rule** — copy is impersonal and instructional. The system
  doesn't talk about itself.

**Dialogs** (a distinctive pattern)
- A dialog already implies confirmation — **never** "Are you sure".
- Headline = the action in short form, target only if it sits naturally at the end:
  "Delete 'My Page 1'", "Publish with descendants", "Transfer to 'Development'".
- Description clarifies the *effect*, unfolding internal vocabulary into consequence, and
  uses `<strong>` for target names, `<i>` for secondary effects:
  *"**My Page 1** will be transferred to the trash bin, including <i>all content items
  underneath</i>."*
- Two buttons: cancel (default look) + the action (primary, `color="positive"` or
  `color="danger"`). The button is the bare verb — never repeat the target on it.

**Emoji:** none. The backoffice never uses emoji in product UI. Status is carried by the
`uui-tag` look/colour system and a tightly-curated icon set, not by emoji or unicode
glyphs.

---

## Visual foundations

**Colour.** Default is **no colour** — chrome is neutral surface / border / body text.
Colour is reserved for the *single* primary action on a screen and for genuine status.
The palette is named (chir.ag "name that color" style): the workspace canvas is **sand**
(`#f7f7f8`), surfaces are pure white, the top header is **space-cadet** navy (`#1b264f`).
Interactive/selected state is **violet-blue** (`#283a97`); focus is **malibu**
(`#3879ff`); danger is **maroon-flush** (`#df2a5d`); positive is **forest-green**
(`#0b8152`); warning is **sunglow** (`#fad634`); "current" (e.g. the active variant) is a
soft **spanish-pink**. The Umbraco "U" flag logo uses brand blue `#3544b1`, distinct from
the UUI interactive violet-blue.

**Type.** **Lato** throughout — Light 300 / Regular 400 / Bold 700 / Black 900. Body is
14px / 21px line-height. Headings are *large and light* (h1 = 60px weight 400, h2 = 42px,
h3 = 30px) with slight negative left margins for optical alignment. **Hierarchy comes
from size and weight, never colour.** Don't invent font sizes — use the `--uui-type-*`
scale.

**Spacing.** A **3px base unit**. `--uui-size-1`…`-100` step the raw scale; the everyday
ramp is `--uui-size-space-1` (3px) → `-6` (24px), with `--uui-size-layout-1`…`-6`
(24→138px) for structural gaps. Space declares relationship: related elements closer,
unrelated farther. If no token fits, the layout is wrong — don't hardcode a pixel.

**Backgrounds.** Flat. **No gradients, no textures, no hero imagery, no patterns.** The
canvas is a single sand fill; surfaces are white. The only "imagery" is user content
(media thumbnails) and the installer illustration. Depth is communicated purely by the
shadow ramp on white cards.

**Corner radius.** Gentle and consistent: default `--uui-border-radius` = **9px**.
Smaller chrome (inputs, tags) uses 6px; larger containers up to 15px. Avoid pill shapes
except for the round avatar and toggle.

**Cards / boxes.** A `uui-box` is a **white surface, 9px radius, `--uui-shadow-depth-1`**
(very soft, low-spread), usually no border — the shadow does the separating. A bordered
1px `--uui-color-border` variant is used in denser list contexts. **No coloured
left-border accent cards** — that pattern is not part of Umbraco.

**Shadows.** Soft, neutral, never tinted. `depth-1` for resting cards, `depth-2/3` for
popovers and dropdowns, `depth-4/5` for modals. All are layered black at low opacity on
white.

**Borders & dividers.** 1px. Borders (`#d8d7d9`) outline inputs and table rows; dividers
are lighter (`#f6f6f7` → `#e9e9eb`) for in-surface separation. Dashed
`--uui-color-divider-emphasis` borders mark *empty / add* drop targets (the
`look="placeholder"` button pattern).

**Hover / press.** Restrained. Buttons darken/lighten via the look's `-emphasis` token on
hover; list rows get a faint surface-alt wash; selected rows pick up the violet-blue
`--uui-color-selected` background with white contrast text. No transforms, no scale, no
bounce. Focus shows the malibu outline ring.

**Animation.** Minimal and functional — short fades and slides for popovers, dropdowns,
and modal entry. Easing is standard ease/ease-out, durations ~120–250ms. **No decorative
or infinite animation.** The UI should feel calm and instant.

**Transparency / blur.** Rare. The header contrast text is `rgba(255,255,255,0.8)`;
modal backdrops are a translucent scrim. No glassmorphism / backdrop-blur in product
chrome.

**Layout rules.** Fixed 70px top header (space-cadet), fixed 300px section sidebar, fixed
54px workspace footer holding the primary actions; the workspace body scrolls between
them. This header / sidebar / body / footer frame is the signature backoffice shell.

---

## Iconography

Umbraco's icon approach is **deliberately sparse** — see `docs/design-choices.md`:

> *Default: **no icon**. Add one only when the affordance cannot be carried by text.*

- **Don't** decorate buttons, list rows, or headings with icons for ornament, and never
  pair an icon with a clear text label "for clarity" — pick one.
- Icons appear in: entity actions, label-less toolbars, drag handles (`icon-grip`),
  rich-text editor toolbars, and as the type-glyph on tree nodes / collection cards.

**The icon set.** The backoffice ships a large built-in registry at
`src/packages/core/icon-registry/icons/` (700+ aliases, `icon-*`). Modern Umbraco icons
are **Lucide-style line icons**: stroke-based, `stroke-width≈1.75`, `currentColor`,
24×24, rounded caps/joins. They're stored as SVG strings and rendered via `<umb-icon
name="icon-…">` / `<uui-icon>`. There is also a `codicon` icon **font**
(`@font-face codicon`) used for code-editor chrome.

We copied a representative working set into **`assets/icons/`** (document, folder,
picture, search, home, grid, alert, time, circle-dotted). Never invent an alias — if
it isn't in the registry, use text.

No emoji, ever. No unicode glyphs as icons.

---

## Index — what's in this folder

| Path | What it is |
|------|------------|
| `styles.css` | Root entry. Import list only — link this one file. |
| `tokens/palette.css` | Raw named swatches (`--uui-palette-*`). |
| `tokens/colors.css` | Semantic colour aliases (`--uui-color-*`). |
| `tokens/spacing.css` | Size / space / layout / radius / type-size scale + `--umb-*` layout tokens. |
| `tokens/shadow.css` | Elevation ramp (`--uui-shadow-depth-1…5`). |
| `tokens/typography.css` | Lato `@font-face`, font tokens, `.uui-text` / `.uui-font` classes. |
| `tokens/base.css` | Canvas reset (the `body.uui-font.uui-text` defaults). |
| `assets/` | `favicon.svg`, `fonts/lato/*`, `icons/*`. |
| `_ds_bundle.js` | 46 composed React components (Button, Table, Box, Tag, MenuItem, TabGroup, Avatar, Dialog, …), mounted at runtime onto `window.UmbracoBackofficeDesignSystem_667d97`. |

**Components** — bundled at runtime onto `window.UmbracoBackofficeDesignSystem_667d97`
(the compiler-assigned namespace). 46 composed components, grouped by directory:

- **forms/** — `Button`, `Input`, `Checkbox`, `Switch`, `Select`, `Dropdown`,
  `InputDropdownList`, `InputColor`, `InputEyeDropper`, `InputDate`, `InputNumberRange`,
  `InputRadioButtonList`, `InputSlider`, `InputToggle`, `InputWithAlias`,
  `InputMultipleTextString`, `InputCultureSelect`
- **data-display/** — `Box`, `Tag`, `Badge`, `Avatar`, `Table` (the composed
  selectable/sortable collection table), `FigureCard`, `CodeBlock`
- **layout/** — `BodyLayout`, `FooterLayout`, `PopoverLayout`, `SplitPanel`, `Stack`,
  `EntityFrame`, `WorkspaceEditor`, `WorkspaceFooter`
- **navigation/** — `TabGroup`, `MenuItem`, `SectionSidebarMenu`,
  `SectionSidebarMenuWithEntityActions`
- **property/** — `PropertyLayout`, `Property`
- **actions/** — `EntityActionList`, `EntityActionsBundle`
- **feedback/** — `Toast`, `Dialog` (the confirm modal), `DiscardChangesModal`,
  `ErrorViewerModal`, `IconPickerModal`
- **symbol/** — `Icon`

These are the composed Bellissima (`umb-*`) components — prefer them over raw `uui-*`
primitives. The collection table view (`core/collection/view/table`) composes the same
`Table`.
