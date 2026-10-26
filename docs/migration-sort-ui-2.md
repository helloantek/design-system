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
   Button (`40:2125`), Input (`82:50`), Select (`104:37` + Select Item `102:44`), Avatar (`174:6534` + Avatar Badge
   `174:6524`, Avatar Group `179:80`), all done. A component's CSS uses 2.0 tokens only; its Figma references are
   re-exported from 2.0.
   **Badge and Status Badge stay on Sort UI 1.3** (decided with the owner): 2.0's Badge (`55:129`) is a different
   component (Default, Outline, Secondary, Ghost, Destructive, Link and Solid/Tint colours, always a pill), while 1.3's
   Soft/Strong colours, shapes, border, dot, image and remove button are what the system uses, Select tags included;
   2.0's Avatar Badge is a plain dot, while Status Badge carries checkmark, online, offline, notification, icon and logo.
3. **Cleanup and release** (`claude/tokens/sort-ui-2-cleanup`): the 1.3 tokens, `theme-2` and
   `figma/variables.json`/`effects.json` are gone. The 40 Sort UI 1.3 colours Badge and Status Badge still use live in
   `figma/sort-ui-1.3-kept.json` (Theme-1 Light and Dark values, same `--ds-*` names), so their Figma references are
   unchanged; Badge's sizes, spacing and font use the equal 2.0 tokens. Released as 2.0.0 with a migration note for apps.

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
The kept 1.3 colours (`figma/sort-ui-1.3-kept.json`) are added to the same set; the build fails if a name is defined twice
with different values. The **Foundations/Sort UI 2.0** stories show every token in Light and Dark.

Notable changes from 1.3: `text-xs` is 13 px (12 px is now `text-2xs`), the page background is `#fcfcfc`, primary is
near-black (`#0a0a0a`, white in Dark), radii go up to `4xl` (24 px), and spacing is the Tailwind scale.

## Upgrading an app to 2.0.0

- **Brands:** only `theme-1` remains; drop `theme-2.css` imports and `data-ds-brand="theme-2"`.
- **Components:** Button, Input, Select and Avatar have new size and variant names; each changeset (`CHANGELOG.md`)
  lists them. In short: sizes are `xl` · `lg` · `default` · `sm` · `xs` where the component has them (`default` is the
  default), Button variants are `default` · `outline` · `secondary` · `ghost` · `destructive`, Avatar shapes are
  `round` · `square`, Button's `leadIcon`/`tailIcon` are `leadingIcon`/`trailingIcon`. Badge and StatusBadge are unchanged.
- **Tokens:** every Sort UI 1.3 `--ds-*` token is gone except the 40 colours Badge and Status Badge use. Closest 2.0
  tokens for app code:

| 1.3 | 2.0 |
|---|---|
| `--ds-bg-default` · `--ds-bg-card` | `--ds-background` · `--ds-card` |
| `--ds-text-default` · `--ds-text-muted` · `--ds-text-subtle` | `--ds-foreground` · `--ds-muted-foreground` |
| `--ds-text-destructive` | `--ds-destructive-foreground` |
| `--ds-border-default` · `--ds-border-darker` | `--ds-border` · `--ds-field-border` |
| `--ds-bg-state-primary` · `--ds-text-white-default` on it | `--ds-primary` · `--ds-primary-foreground` |
| `--ds-bg-input` · `--ds-bg-input-soft` | `--ds-field` · `--ds-fill-1` |
| `--ds-font-family-body` | `--ds-font-sans` |
| `--ds-font-size-xs` / `-sm` (12 / 14 px) | `--ds-text-2xs` / `--ds-text-sm` (`--ds-text-xs` is 13 px now) |
| `--ds-font-line-height-leading-4` / `-5` | `--ds-text-2xs--line-height` / `--ds-text-sm--line-height` |
| `--ds-space-<px>` (e.g. `space-8`) | `--ds-spacing-<px ÷ 4>` (e.g. `spacing-2`) |
| `--ds-stroke-default` | `--ds-stroke-width-1` |
| `--ds-shadow-components-default` · `--ds-shadow-modal-sm` | `--ds-shadow-xs` · `--ds-surface-popover` |
| `--ds-icon-size-<size>` | `--ds-spacing-*` (e.g. 24 px = `spacing-6`) |
