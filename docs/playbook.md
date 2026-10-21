# Playbook: Figma → component

The path every component follows. It comes from the Button pilot (`pilot/2026-10-button/REPORT.md`), where raw Figma MCP output looked right (3% pixel mismatch once its font bug was fixed) but was not usable code: a `<div>` instead of a `<button>`, no keyboard support, one file per variant, tokens referenced by name but never defined.

**Rule of thumb:** Figma MCP output is a *specification of values* (sizes, spacing, colours, effects). The component is written by hand on top of tokens and verified against Figma automatically.

## 0. Prepare Figma

Go through [figma-checklist.md](figma-checklist.md) with the designer first. Most code problems start in the file.

## 1. Collect the specification

With the Figma MCP server (see `.claude/skills/figma-to-component/SKILL.md` for the exact calls):

1. `get_metadata` on the component set → list of variants and their properties.
2. `use_figma` (read-only) → `componentPropertyDefinitions`, and resolved fills, strokes, effects and text styles **per variant**, including which variables they are bound to.
3. `get_design_context` on a few representative variants → paddings, gaps, sizes, structure.
4. New variables or modes → add them to `packages/tokens/figma/variables.json`, new effect styles to `effects.json`.

## 2. Write the component

- **CSS first, in `packages/css/src/<component>.css`.** BEM classes `ds-<component>`, `__part`, `--modifier`, inside `@layer ds.components`. Only `var(--ds-*)` values; no hex, no raw px except icon box sizes taken from Figma.
- **Then the React adapter, in `packages/react/src/<Component>/`.** It renders markup and classes only.
- Map Figma properties to props 1:1 (names in the props table of the README). States are CSS (`:hover`, `:active`, `:focus-visible`, `:disabled`), not props.
- Use the native element (`button`, `input`, `dialog`…). Anything without visible text needs an accessible name in the type signature.
- Figma strokes are *inside* and do not change size: use an overlay or `inset` box-shadow, not `border`.

## 3. Document in Storybook

`<Component>.stories.tsx` next to the component: Playground with controls, a matrix of every Figma variant and state, sizes, and the Brands story. The docs description links to the Figma node.

## 4. Verify against Figma

1. Export reference renders for the important variants (all states of the default size, every size, every shape) into `tools/figma-visual/references/<component>/` with a `manifest.json`.
2. Add a renderer in `tools/figma-visual/renderers/`.
3. `npm run test:visual -- <component>`: every variant must be within 6% pixel mismatch and 2 px of the Figma size. Open `tools/figma-visual/out/report.html` for anything close to the limit.
4. `npm run test:storybook`: no render errors; read the axe output.

## 5. Ship

Check [definition-of-done.md](definition-of-done.md), add a changeset (`npm run changeset`) and open a PR. CI runs the same checks.
