# Adding a brand

All brands share the same components; a brand is a set of token values. Sort UI 2.0 has one theme (Light and Dark), so the
system ships one brand, `theme-1`, built from `packages/tokens/figma/sort-ui-2/` and `figma/sort-ui-1.3-kept.json`.

A second brand needs its own values first:

1. **In Figma:** give the Sort UI 2.0 `Themes` collection (and, if the brand differs there, `Radius` or `Typography`)
   a mode per brand, e.g. `Brand-B Light` / `Brand-B Dark`.
2. **Tokens:** extend `export-variables-v2.js`, `import-sort-ui-2.mjs` and `resolveSortUi2()` in
   `packages/tokens/scripts/build.mjs` to read a brand's modes, and register the brand in `packages/tokens/brands.json`
   (`"brand-b": { "label": "Brand B" }`). Add a test for it in `packages/tokens/test/build.test.mjs`.
3. **Build:** `npm run build -w @helloantek/ds-tokens` produces CSS (`css/brand-b.css`, `css/scoped/brand-b.css`), JS,
   Swift and Kotlin for every brand.
4. **Check:** load the scoped CSS in `apps/storybook/.storybook/preview.tsx`, switch the Brand toolbar and read the axe
   output for contrast; run the visual check with `brand` set to the new brand in a manifest if it has its own Figma renders.
5. **Fonts:** a brand with a new font family must document how apps load it (e.g. `@fontsource/<font>`).
