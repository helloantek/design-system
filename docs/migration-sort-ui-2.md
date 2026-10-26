# Migration to Sort UI 2.0

The design system moves from **Sort UI 1.3** (Figma `4tiBR2hKd4yvQehtKhM9OY`) to **Sort UI 2.0** (Figma
[`4JnqgEbdlnKgiFrfmiwEZw`](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw/Sort-UI-2.0)). 2.0 is a new library, not
new values for the old tokens: shadcn/Tailwind-style variable names, its own primitives, one theme (Light and Dark) and
about 70 component sets. Decided with the owner: migrate fully, in stages, one theme for now; release as 2.0.0.

## Stages

Each stage is its own branch and pull request, and `main` stays green between them.

1. **Tokens** (`claude/tokens/sort-ui-2`): Sort UI 2.0 variables and effect styles are generated **next to** the 1.3
   tokens, for every brand. Nothing visible changes; components still use 1.3.
2. **Components**, one pull request each, rebuilt from the 2.0 component sets and their references:
   Button (`40:2125`, done), Input (`82:50`, done), Select (`104:37` + Select Item `102:44`, done), Avatar (`174:6534` +
   Avatar Badge `174:6524`, Avatar Group `179:80`). A component's CSS switches to 2.0 tokens only; its Figma references are
   re-exported from 2.0.
   **Badge stays on Sort UI 1.3** (decided with the owner): 2.0's Badge (`55:129`) is a different component (Default,
   Outline, Secondary, Ghost, Destructive, Link and Solid/Tint colours, always a pill), while 1.3's Soft/Strong colours,
   shapes, border, dot, image and remove button are what the system uses, Select tags included.
3. **Cleanup and release**: remove the 1.3 tokens, `theme-2` and `figma/variables.json`/`effects.json`, rename the brand,
   and publish 2.0.0 with a migration note for apps (the `--ds-*` names change). Badge still reads 1.3 tokens
   (`bg/badge/*`, `bg/basic/*`, text and icon colours), so before they go, its values move into its own CSS or a small
   set of kept tokens, with its Figma references unchanged.

New 2.0 components (Alert Dialog, Dialog, Checkbox, Tabs…) follow the normal playbook after stage 2.

## Tokens

Source: `packages/tokens/figma/sort-ui-2/variables.json` and `effects.json`. To update them from Figma, run
`.claude/skills/figma-to-component/scripts/export-variables-v2.js` with `use_figma`, save its `text` to a file and run
`node packages/tokens/scripts/import-sort-ui-2.mjs <file> <hash>` (the hash proves nothing was mistyped).

CSS names follow Figma's WEB code syntax with the `--ds-` prefix, so Dev Mode output maps one to one:

| Figma variable | Figma code syntax | CSS |
|---|---|---|
| `colors/muted-foreground` | `var(--muted-foreground)` | `--ds-muted-foreground` |
| `colors/alpha/foreground/10` | `color-mix(… var(--foreground) 10% …)` | `--ds-alpha-foreground-10` (resolved colour) |
| `colors/palette/blue-tint` | `blue-100 dark:blue-500/25` | `--ds-palette-blue-tint` |
| `size/xs`, `line-height/xs` | `var(--text-xs)`, `var(--text-xs--line-height)` | `--ds-text-xs`, `--ds-text-xs--line-height` |
| `weight/medium`, `font/sans` | `var(--font-weight-medium)`, `var(--font-sans)` | `--ds-font-weight-medium`, `--ds-font-sans` |
| `radius/lg` | `var(--radius-lg)` | `--ds-radius-lg` |
| `spacing/2` | `calc(var(--spacing) * 2)` | `--ds-spacing-2` (or `calc(var(--ds-spacing) * 2)`) |
| `opacity/5`, `duration/150`, `ease/out` | `5%`, `150ms`, `var(--ease-out)` | `--ds-opacity-5` (0.05), `--ds-duration-150`, `--ds-ease-out` |
| Effect `Surface/Dialog` | — | `--ds-surface-dialog` (box-shadow list) |

Opacity, motion and effects are CSS-only; colours, dimensions, weights and fonts also reach JS, Swift and Kotlin.
Where a 1.3 token has the same CSS name (`--ds-radius-xs`, `--ds-font-weight-medium`…), the values are equal, and the
build fails if they ever differ. The **Foundations/Sort UI 2.0** stories show every token in Light and Dark.

Notable changes from 1.3: `text-xs` is 13 px (12 px is now `text-2xs`), the page background is `#fcfcfc`, primary is
near-black (`#0a0a0a`, white in Dark), radii go up to `4xl` (24 px), and spacing is the Tailwind scale.
