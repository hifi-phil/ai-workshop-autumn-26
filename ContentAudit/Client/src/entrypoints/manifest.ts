export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Content Audit Entrypoint",
    alias: "ContentAudit.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint.js"),
  },
];
