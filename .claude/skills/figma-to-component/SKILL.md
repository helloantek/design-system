---
name: figma-to-component
description: Build or update a design-system component from a Figma component set (figma.com link with node-id), following docs/playbook.md — collect the spec with the Figma MCP server, write tokens + CSS + React adapter + stories, export Figma reference renders and pass the visual check. Use whenever someone asks to implement, port or sync a Figma component in this repo.
---

# Figma → component

Follow `docs/playbook.md`; this skill adds the exact tool calls and the traps found in the Button pilot. Done means `docs/definition-of-done.md` holds.

Branch: `claude/component/<name>` from `main` (`docs/branches.md`).

## 1. Read the component set

Parse the URL: `figma.com/design/<fileKey>/…?node-id=<a>-<b>` → nodeId `<a>:<b>`. The link should point at the **component set**.

1. `get_metadata(fileKey, nodeId)` — large sets overflow the context; the result is then saved to a file: parse it with `jq`/Python to list variants and their property values.
2. Load the Figma `figma-use` skill (MCP resource `skill://figma/figma-use/SKILL.md`), then `use_figma` with `scripts/component-properties.js` (property definitions incl. booleans, text and instance-swap props) and `scripts/variant-styles.js` (fills, strokes, effects, text and icon colours per variant, as variable names). Read-only scripts only.
3. Load `skill://figma/figma-design-to-code/SKILL.md`, then `get_design_context` on 3–5 representative variants (default, smallest and largest size, icon-only…) for paddings, gaps and sizes. Use `scripts/sizes.js` for the numbers across all sizes in one call.

## 2. Tokens

`scripts/export-variables.js` returns resolved values for every mode of the collections you list. Merge new variables into `packages/tokens/figma/variables.json` (same shape) and effect styles into `figma/effects.json`. Run `npm run build -w @helloantek/ds-tokens && npm test`.

## 3. Code

- `packages/css/src/<name>.css` (+ `@import` in `index.css`): BEM `ds-<name>`, `@layer ds.components`, only `var(--ds-*)`.
- `packages/react/src/<Name>/` + export from `src/index.ts`: markup and classes only, props named after Figma properties.
- Stories next to the component: Playground, variant × state matrix, sizes, Brands.

## 4. Visual references and check

1. For each variant to verify, `get_screenshot(fileKey, nodeId, enableBase64Response: true)`: the PNG is saved under the session's `tool-results/` folder (path printed in the result). Copy them into `tools/figma-visual/references/<name>/<slug>.png`. Cover all states of the default size, every size, every shape.
2. Write `manifest.json` like `references/button/manifest.json` (props = Figma properties, nodeW/nodeH from metadata).
   Then export exact values: run `scripts/export-spec.js` with the manifest's node ids and the layer paths you need (`root`, `Label/TEXT`, `badge`, `Suffix#1`…), save the result as `references/<name>/spec.json`, and write `references/<name>/layer-map.json` mapping each path to a selector inside `#target` (how strokes are drawn: `before-border`, `inset-shadow`; icon colour: `"fill": "color"`; placeholder text: `"text": "placeholder-if-empty"`). Skip a key only when the structure differs on purpose, and say why in `$why`.
3. Add `tools/figma-visual/renderers/<name>.tsx` and register it in `renderers/index.ts`. Hover/Press/Focus come from real input; render the element to measure with `id="target"`.
4. `npm run test:visual -- <name>` and `npm run build-storybook && npm run test:storybook`. Look at `tools/figma-visual/out/report.html`; do not raise thresholds to pass.

## Traps seen before

- **Raw MCP code is not the component.** It renders a `<div>`, one file per variant, props like `badge1`/`leadIcon1`, and `font-family: 'Inter:Medium'` (an invalid family → serif fallback). Take values from it, not structure.
- **`var(--name, fallback)` in MCP output looks tokenised but the variables are never defined** — map every value to a `--ds-*` token instead.
- **Strokes are inside in Figma.** CSS `border` makes the element 2 px bigger; use an overlay or inset shadow.
- **`none` inside a `box-shadow` list invalidates the whole declaration** — use `0 0 #0000` as the empty value.
- **`box-sizing: border-box`** on any element with `min-width` + padding.
- **Loading states in Figma keep the default width** — keep the content in the layout (hidden) and overlay spinner + label.
- **The container's proxy may block `www.figma.com`**, so asset/screenshot URLs fail with 403. Export SVGs with `use_figma` (`node.exportAsync({ format: 'SVG_STRING' })`) and screenshots with `enableBase64Response`. Ask the user to allow the domain in the environment's network settings if it is needed often.
- **`use_figma` returns at most 48 KB** — never return PNG bytes from it; batch large reads.
- **Raw MCP output for form fields uses a `<button>` root and no `<input>`.** Build on the native control.
- **Effect colours bound to variables** (focus rings) belong in the component CSS, composed from colour tokens — a CSS variable that references other variables is resolved where it is defined, so a dark section would inherit the light colours.
- **Load every font weight the component uses** (`@fontsource/inter/400.css` and `500.css`). With one weight loaded, the browser draws every weight with it and the visual check cannot see weight mistakes (Input text rendered Medium instead of Regular until this was fixed).
- **Text must be laid out with fractional glyph advances** (`--font-render-hinting=none`, set in `check.mjs`). Hinted builds snap labels to whole pixels (~1 px narrower than Figma) and fail only on CI; the check now refuses to run in that mode.
- **Interactive states in the visual check need a repaint and a real focus**; `check.mjs` waits for both. If an Active/Focus reference fails, look at the capture before changing CSS.
- **Pixels miss 1 px spacing, radius and weight changes**; the spec check catches them. A spec mismatch is a real difference from Figma even when the render looks identical (e.g. icon-only buttons had a 6 px `gap` that Figma doesn't).
- **Subtle fills (≤ 10% alpha) pass the 0.1 pixelmatch threshold** — the `tint` metric exists for them; never raise `maxTint` to make a variant pass.
- **Don't build one component for a whole Figma set** when variants need their own behaviour; see "Decide the scope" in the playbook.
- **Figma draws open menus over the field.** A variant like Select State=Active includes the open menu, which covers the caption. Take the reference of the trigger box (its node id via `use_figma`) and give the manifest entry `"target"`; the same for menu items (reference the inner row, render the item inside an open menu).
- **State names can lie.** Select State=Destructive is drawn as a disabled field; read the styles per variant, not the names, and report the name.
- **Reading layers by name is case-sensitive and depth-first**: `container` ≠ `Container`, and a layer map key means the same element in every entry of the component, so use different paths (e.g. `root` vs `Container/Container`) when entries start at different layers.
- **A listbox may only own options and groups** (axe `aria-required-children`): dividers are decoration (`aria-hidden`), group labels go inside the group as `role="presentation"`.
- Contrast failures that come from the Figma palette are design findings: report them, do not change colours in code.
