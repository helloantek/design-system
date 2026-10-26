# Design system — working notes for Claude

Multi-brand design system: one UI kit, many brands. See `README.md` for the architecture and `docs/adr/0001-layered-packages.md` for why.

- `packages/tokens` — Sort UI 2.0 variables (Figma `4JnqgEbdlnKgiFrfmiwEZw`, `figma/sort-ui-2/`) + the few Sort UI 1.3 colours Badge and Status Badge still use (`figma/sort-ui-1.3-kept.json`) + `brands.json` → CSS/JS/Swift/Kotlin. Generated `dist/` is never edited. History: `docs/migration-sort-ui-2.md`.
- `packages/css` — component styles. BEM `ds-<component>`, `@layer ds.components`, only `var(--ds-*)` values.
- `packages/react` — thin adapter: markup and classes, props named after Figma properties.
- `apps/storybook` — documentation; stories live next to components in `packages/*/src`.
- `tools/figma-visual` — pixel comparison with Figma reference renders; `tools/storybook-smoke.mjs` — every story renders, axe report; `tools/storybook-interactions.mjs` — keyboard/mouse tests.
- Previews: every pushed branch is published as a Storybook on GitHub Pages (`docs/previews.md`); `Playground/*` stories compose components for review.

To build a component from Figma, use the `figma-to-component` skill and `docs/playbook.md`. It is done when `docs/definition-of-done.md` holds.

Branches: `claude/<kind>/<topic>` with kind `component`, `fix`, `tokens`, `tooling` or `docs` (`docs/branches.md`), e.g. `claude/component/tag-input`. One change per branch.

Before pushing: `npm run build && npm test && npm run typecheck && npm run build-storybook && npm run test:storybook && npm run test:visual`.
The visual check is calibrated on Chromium 141.0.7390.37 (`npx -y playwright@1.56.1 install chromium`, then `CHROMIUM_PATH=~/.cache/ms-playwright/chromium-1194/chrome-linux/chrome`); in cloud sessions it is preinstalled at `/opt/pw-browsers/chromium`.
User-facing changes need a changeset (`npm run changeset`).
