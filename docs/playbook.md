# Playbook: Figma → component

The path every component follows. It comes from the Button pilot (`pilot/2026-10-button/REPORT.md`), where raw Figma MCP output looked right (3% pixel mismatch once its font bug was fixed) but was not usable code: a `<div>` instead of a `<button>`, no keyboard support, one file per variant, tokens referenced by name but never defined.

**Rule of thumb:** Figma MCP output is a *specification of values* (sizes, spacing, colours, effects). The component is written by hand on top of tokens and verified against Figma automatically.

Work on a branch named `claude/component/<name>` (or `component/<name>`), see [branches.md](branches.md); its preview is what design reviews in step 5.

## 0. Prepare Figma

Go through [figma-checklist.md](figma-checklist.md) with the designer first. Most code problems start in the file.

## 1. Collect the specification

With the Figma MCP server (see `.claude/skills/figma-to-component/SKILL.md` for the exact calls):

1. `get_metadata` on the component set → list of variants and their properties.
2. `use_figma` (read-only) → `componentPropertyDefinitions`, and resolved fills, strokes, effects and text styles **per variant**, including which variables they are bound to.
3. `get_design_context` on a few representative variants → paddings, gaps, sizes, structure.
4. New variables or effect styles → re-export Sort UI 2.0 with `export-variables-v2.js` and `packages/tokens/scripts/import-sort-ui-2.mjs` (see [the migration notes](migration-sort-ui-2.md#tokens)).

### Decide the scope

A Figma component set can bundle several components under one `Variant` property. Implement the variants that are the same element with extras (icons, affixes, a joined button) as one component; turn variants that need their own behaviour (a dropdown, tag entry, a number stepper, a file picker) into separate components that compose with it, and list them in [backlog.md](backlog.md). One "mega-component" per Figma set is harder to use and to test.

## 2. Write the component

- **CSS first, in `packages/css/src/<component>.css`.** BEM classes `ds-<component>`, `__part`, `--modifier`, inside `@layer ds.components`. Only `var(--ds-*)` values; no hex, no raw px except icon box sizes taken from Figma.
- **Then the React adapter, in `packages/react/src/<Component>/`.** It renders markup and classes only.
- Map Figma properties to props 1:1 (names in the props table of the README). States are CSS (`:hover`, `:active`, `:focus-visible`, `:disabled`), not props.
- Use the native element (`button`, `input`, `dialog`…). Anything without visible text needs an accessible name in the type signature.
- Figma strokes are *inside* and do not change size: use an overlay or `inset` box-shadow, not `border`.

## 3. Document in Storybook

`<Component>.stories.tsx` next to the component: Playground with controls, a matrix of every Figma variant and state, sizes, and the Brands story. The docs description links to the Figma node.

## 4. Verify against Figma

1. Export reference renders and the spec (`spec.json`, `layer-map.json`) for the important variants (all states of the default size, every size, every shape) into `tools/figma-visual/references/<component>/` with a `manifest.json`.
2. Add a renderer in `tools/figma-visual/renderers/`.
3. `npm run test:visual -- <component>`: every variant must be within the manifest thresholds — **mismatch** (structure, colour threshold 0.1) ≤ 8%, **tint** (subtle fills, threshold 0.03) ≤ 10%, size within 2 px. Both are 1 px tolerant: a pixel counts only when its colour lies outside the colour range of the other image's 3×3 neighbourhood, so glyph anti-aliasing and sub-pixel text advances (which differ between machines) do not count, while a wrong or missing fill, border, icon or text does. Exact geometry and colours are the spec check's job. A healthy component sits at a few percent; investigate anything above ~4%. Open `tools/figma-visual/out/report.html` for anything close to a limit.
   - Prove the check can fail: break one value (a padding, a background) and confirm the affected variants go red, then revert.
   - Pixel metrics are coarse (rasterisation differs between machines by ~2 points). Exact values come from the **spec check**: export `spec.json` with `export-spec.js` and map Figma layers to elements in `layer-map.json`. It compares size, padding, gap, radius, fill, stroke and text style per variant — deterministic, and it catches what pixels miss (measured: padding +1 px, radius 4→6 px, weight 500→400, placeholder colour all fail).
   - A manifest entry can compare part of the render with `"target": "<selector>"` (one menu option, the trigger box of an open dropdown). `"pixels": false` with a `$why` leaves an entry to the size and spec checks; use it only when rasterisation itself differs (a 1 px line Figma draws on a half pixel, a reference that is only a long line of text), never to pass a real difference.
   - Known blind spot: a soft drop shadow outside the element (Default vs Shadow style) barely moves either metric; check those variants by eye in the report.
4. `npm run test:storybook`: no render errors; read the axe output. Components with behaviour (menus, popovers) also get keyboard and mouse tests in `tools/storybook-interactions.mjs`, which runs as part of it.

## 5. Review the preview

Each push publishes a Storybook preview of the branch ([previews.md](previews.md)); the pull request links it. Ask design and product to go through its review checklist, and add the component to **Playground/Form** (or a new Playground story) when it belongs in forms or screens with other components.

## 6. Ship

Check [definition-of-done.md](definition-of-done.md), add a changeset (`npm run changeset`) and open a PR. CI runs the same checks.
