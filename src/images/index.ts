// @index('./*.*', (f, _) => `export { default as ${_.camelCase(f.name)} } from "${f.path}${f.ext}";`)
export { default as icon } from "./icon.png";
export { default as wideSilhouetteCircle } from "./wide-silhouette-circle.png";
export { default as wideSilhouetteCropped } from "./wide-silhouette-cropped.png";
export { default as wideSilhouette } from "./wide-silhouette.png";
export { default as yellowIconWhiteText } from "./yellow-icon-white-text.png";
// @endindex

// @index('./*/index.ts', f => `export * from "${f.path}";`);
export * from "./crew/index";
// @endindex