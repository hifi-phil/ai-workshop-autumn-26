# Reusable patterns

Each of these took real grepping through the `Umbraco-CMS` monorepo or NuGet XML docs to
pin down on the first run. Reuse them instead of re-deriving.

## Backend: scan the whole content tree

```csharp
private const int ScanPageSize = 500;

private IReadOnlyList<IContent> GetAllContent()
{
    var all = new List<IContent>();
    var page = 0;
    long total;
    do
    {
        IEnumerable<IContent> batch = _contentService.GetPagedDescendants(
            Umbraco.Cms.Core.Constants.System.Root, page, ScanPageSize, out total);
        all.AddRange(batch);
        page++;
    }
    while (all.Count < total);
    return all;
}
```

Classification idiom — `Published`/`Edited`/`UpdateDate` are on `IContent` (via
`IPublishableContentBase`/`IEntity`), no extra service needed:

```csharp
// Unpublished takes priority: never published, or published with pending unsaved changes.
if (!content.Published || content.Edited) return Status.Unpublished;
if (content.UpdateDate < staleThresholdDate) return Status.Stale;
return null; // not flagged
```

Human-readable tree path from a flat scan result (build an id→name map from the *same* full
scan, since scanning from `Constants.System.Root` already returns every ancestor too):

```csharp
var namesById = allContent.ToDictionary(c => c.Id, c => c.Name ?? string.Empty);
var segments = content.Path.Split(',', StringSplitOptions.RemoveEmptyEntries)
    .Select(int.Parse)
    .Where(id => id != Umbraco.Cms.Core.Constants.System.Root)
    .Select(id => namesById.TryGetValue(id, out var name) ? name : "?");
var path = "/" + string.Join("/", segments);
```

## Backend: short-TTL cache around an expensive scan

```csharp
private ScanResult GetOrCreateScanResult() =>
    _memoryCache.GetOrCreate(CacheKey, entry =>
    {
        entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromSeconds(60);
        return Scan();
    })!;
```

## Backend: a CSV/file-download endpoint

```csharp
[HttpGet("export")]
[Produces("text/csv")]
[ProducesResponseType(StatusCodes.Status200OK)]
public FileContentResult Export()
{
    var bytes = Encoding.UTF8.GetBytes(BuildCsv(_service.GetAllRows()));
    return File(bytes, "text/csv", $"export-{DateTime.UtcNow:yyyy-MM-dd}.csv");
}

// Not Umbraco-specific, but written fresh every time an export endpoint is needed —
// worth keeping as a ready helper rather than re-deriving the escaping rule each time.
private static string CsvEscape(string value) =>
    value.Contains(',') || value.Contains('"') || value.Contains('\n')
        ? $"\"{value.Replace("\"", "\"\"")}\""
        : value;
```

The generated fetch client picks its parse mode from the response `Content-Type` at
runtime (see `getParseAs` in the generated `client/utils.gen.ts`): `text/csv` falls through
to `parseAs: 'text'`, so `data` in the frontend is already a plain string — safe to pass
straight to `blobDownload` (see below). No special OpenAPI annotation is needed for this.

## Frontend: dashboard manifest, conditioned on a section, plus localization

```ts
// manifests.ts
import { UMB_CONTENT_SECTION_ALIAS } from "@umbraco-cms/backoffice/content";

export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "dashboard",
    alias: "MyExtension.Dashboard",
    name: "My Extension Dashboard",
    element: () => import("./my-dashboard.element.js"),
    weight: 100, // higher weight = further left / more likely to be the default tab
    meta: { label: "#myExtension_dashboardLabel", pathname: "my-extension" },
    conditions: [
      // Hardcode this literal — see SKILL.md Gotchas for why it isn't imported.
      { alias: "Umb.Condition.SectionAlias", match: UMB_CONTENT_SECTION_ALIAS },
    ],
  },
  {
    type: "localization",
    alias: "MyExtension.Localization.EN",
    name: "My Extension English Localization",
    meta: { culture: "en" },
    js: () => import("./lang/en.js"),
  },
];
```

```ts
// lang/en.ts
import type { UmbLocalizationDictionary } from "@umbraco-cms/backoffice/localization-api";

const dictionary: UmbLocalizationDictionary = {
  myExtension: {
    someLabel: "Some label",
    // Dynamic strings are functions — args are passed positionally to localize.term():
    withArg: (value: string) => `Last scan ${value}`,
  },
};
export default dictionary;
// Usage: this.localize.term('myExtension_someLabel')
//        this.localize.term('myExtension_withArg', someDateString)
```

It's safe to call `this.localize.term(...)` directly inside a **class-field initializer**
(not just inside a method or the constructor body), e.g.
`#tableColumns = [{ name: this.localize.term('...'), alias: '...' }]` as a field default.
`UmbLitElement`'s controllers (including `localize`) are set up in the base class
constructor, which runs before a subclass's own field initializers — this is real Umbraco
source convention (see e.g. `webhook-table-collection-view.element.ts`), not a risky
shortcut, but it's not obvious and worth confirming against a real example rather than
assuming, if you haven't seen it done before.

## Frontend: fixed date/number formats that override the framework default

Umbraco's `localize.date()` (and `Intl.DateTimeFormat` generally) formats according to the
**viewer's browser locale** — it will not reliably produce a specific fixed format. When a
project or org mandates an exact format regardless of locale (this workshop's org context
requires `DD-MM-YYYY` dates), don't reach for `localize.date()` — write a tiny manual
formatter instead. No Umbraco skill will ever tell you this, because it isn't a framework
rule, it's a standing requirement that sits outside the framework entirely:

```ts
function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}-${month}-${date.getFullYear()}`;
}
```

Check standing org/project formatting requirements (date format, units, currency) *before*
writing any UI copy or data formatting — they take priority over whatever the framework
would do by default, and retrofitting them after the fact means re-touching every call site.

## Frontend: `umb-table` + pagination

```ts
import type { UmbTableColumn, UmbTableConfig, UmbTableItem } from "@umbraco-cms/backoffice/components";
import { UmbPaginationManager } from "@umbraco-cms/backoffice/utils";
import type { UUIPaginationEvent } from "@umbraco-cms/backoffice/external/uui";

#paginationManager = new UmbPaginationManager();

constructor() {
  super();
  this.#paginationManager.setPageSize(PAGE_SIZE);
  this.observe(this.#paginationManager.currentPage, (n) => (this._currentPageNumber = n));
  this.observe(this.#paginationManager.totalPages, (n) => (this._totalPages = n));
}

async #load() {
  const { data } = await tryExecute(this, getItems({
    query: { skip: this.#paginationManager.getSkip(), take: PAGE_SIZE },
  }));
  if (data) {
    this._items = data.items;
    this.#paginationManager.setTotalItems(data.total);
  }
}

#onPageChange(e: UUIPaginationEvent) {
  this.#paginationManager.setCurrentPageNumber(e.target.current);
  this.#load();
}
```

Template: `<umb-table .config=${cfg} .columns=${cols} .items=${items}></umb-table>` — no
explicit import/registration needed for `umb-table` or `uui-pagination`, they're globally
registered by the backoffice core bundle already. Only render `<uui-pagination>` when
`_totalPages > 1`.

## Frontend: calling the generated API client and downloading a file

```ts
import { tryExecute } from "@umbraco-cms/backoffice/resources";
import { blobDownload } from "@umbraco-cms/backoffice/utils";
import { getExport } from "../api/sdk.gen.js";

async #onExport() {
  const { data } = await tryExecute(this, getExport());
  if (data) blobDownload(data, `export-${new Date().toISOString().slice(0, 10)}.csv`, "text/csv");
}
```

`tryExecute(host, promise)` wraps a generated-client call, shows notifications on error, and
returns `{ data, error, request, response }` — this is the standard pattern used throughout
Umbraco's own backoffice source for every API call, not something specific to file exports.

## Frontend: action button in a `uui-box` header

```html
<uui-box .headline=${label}>
  <uui-button slot="header-actions" look="secondary" label=${exportLabel} @click=${this.#onExport}>
    ${exportLabel}
  </uui-button>
  <!-- box content -->
</uui-box>
```
