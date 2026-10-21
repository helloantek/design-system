# Adding a brand

All brands share the same components. A brand is a choice of one mode per Figma variable collection.

1. **In Figma:** add the brand's modes. Light and dark go in `Themes` (e.g. `Theme-3-Light`, `Theme-3-Dark`); if needed, a new mode in `Radius` or `Font Family`.
2. **Export variables:** re-export `packages/tokens/figma/variables.json` with the new modes (see the token export step in `.claude/skills/figma-to-component/SKILL.md`).
3. **Register the brand** in `packages/tokens/brands.json`:
   ```json
   "theme-3": {
     "label": "Theme 3",
     "Themes": { "light": "Theme-3-Light", "dark": "Theme-3-Dark" },
     "Radius": "Rounded",
     "Font Family": "Font B"
   }
   ```
   A missing collection falls back to its first mode; an unknown mode fails the build.
4. **Build:** `npm run build -w @helloantek/ds-tokens` produces CSS, JS, Swift and Kotlin for the brand.
5. **Check:** the Brands story in Storybook shows every component in the new brand. Read the axe output for contrast.
6. **Fonts:** a brand with a new font family must document how apps load it (e.g. `@fontsource/<font>`).

A project then installs `@helloantek/ds-tokens`, `@helloantek/ds-css` and an adapter, and loads `@helloantek/ds-tokens/css/theme-3.css`.
