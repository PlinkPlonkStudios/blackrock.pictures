// TODO optimize images for slow networks

// @index('./*.*', (f, _) => `export { default as ${_.camelCase(f.name)} } from "${f.path}${f.ext}";`)
export { default as favicon } from "./favicon.png";
export { default as indigoSquiggle } from "./indigo-squiggle.png";
export { default as instagramLogo } from "./instagram-logo.png";
export { default as reelPlaceholder } from "./reel-placeholder.mp4";
export { default as reelSlice } from "./reel-slice.png";
export { default as wideSilhouetteCircle } from "./wide-silhouette-circle.png";
export { default as wideSilhouetteCropped } from "./wide-silhouette-cropped.png";
export { default as wideSilhouette } from "./wide-silhouette.png";
export { default as yellowIconWhiteText } from "./yellow-icon-white-text.png";
export { default as youtubeLogo } from "./youtubeLogo.png";
// @endindex

// @index('./*/index.ts', f => `export * from "${f.path}";`);
export * from "./crew/index";
export * from "./logos/index";
// @endindex
