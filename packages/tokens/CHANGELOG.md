# @helloantek/ds-tokens

## 2.7.0

## 2.6.0

## 2.5.0

## 2.4.0

## 2.3.0

## 2.2.1

## 2.2.0

## 2.1.0

## 2.0.0

### Major Changes

- 6104007: BREAKING: Sort UI 2.0 only. The Sort UI 1.3 tokens and the `theme-2` brand are removed; `theme-1` is built from Sort UI 2.0 plus the 40 Sort UI 1.3 colours Badge and Status Badge still use (same `--ds-*` names). App code that used other 1.3 tokens moves to their 2.0 equivalents; see "Upgrading an app to 2.0.0" in `docs/migration-sort-ui-2.md` for the mapping (e.g. `--ds-bg-default` → `--ds-background`, `--ds-text-default` → `--ds-foreground`, `--ds-space-8` → `--ds-spacing-2`). Swift and Kotlin token files follow: `Theme2Tokens` is gone and `Theme1Tokens` holds the 2.0 names.

### Minor Changes

- 6d87dbf: Add Avatar (picture, initials or placeholder; 2xs–3xl; circular or rounded; ring; top and bottom badges) and StatusBadge (checkmark, online, offline, notification, icon, logo). New tokens: `icon/black-disabled`, `radius/sm`, font sizes `md`/`lg`/`xl` with line heights `leading-6`/`leading-7`, and the Icon Size collection (`--ds-icon-size-xs` … `xl`).
- 7e4b3a3: Add Badge: Soft and Strong styles in ten colours, sm/lg, rounded/pill, border, icon, dot or image, and a remove button (`onRemove`) whose icon follows the label colour. Select menu items now render their badge with it. New tokens: `bg/badge/<color>`, `bg/basic/<color>-accent` and `-strong`, `bg/state/ghost-hover`.
- b8a223d: Add Input (label, input, caption) with Default, Shortcut, Add-on, Inline add-on and Tail button variants, Default/Shadow/Soft styles, lg/sm sizes and all Figma states. New tokens: input backgrounds, destructive and highlight borders, accent caret, destructive text and icon, normal font weight, failed-input shadow.
- 9c3c9a3: Add Select: a select-only combobox with label, caption, error, Default/Shadow/Soft styles, lg/sm sizes and all Figma states, plus a menu with options (icon, caption, badge, disabled), group labels and dividers. Full keyboard support (arrows, Home/End, PageUp/PageDown, Enter/Space, Escape, Tab, type-ahead) and form support through `name` (submits the value, restores `defaultValue` on form reset). New tokens: card background, default badge background, `shadow/modal-sm`.
- 292eca9: Select menu items: `indicator` (check, checkbox, radio), Default Large options (`description`, 36 px icon circle), Country Flag options (`media`), and caption notes (`{ type: 'caption' }`). Disabled options now fade the badge to 50% as in Figma. New tokens: `bg/checkbox/*`, `border/strong`, `bg/basic/gray-subtle`, `bg/state/soft`, `shadow/checkbox`, `shadow/checkbox-highlight`.
- 408fc47: Add the Sort UI 2.0 tokens next to the 1.3 ones (first stage of the migration, see docs/migration-sort-ui-2.md): colours for Light and Dark (`--ds-background`, `--ds-muted-foreground`, `--ds-palette-*`, `--ds-alpha-*`…), radius, spacing (`--ds-spacing-*`), typography (`--ds-text-*`, `--ds-font-*`), opacity, motion and effect styles (`--ds-shadow-*`, `--ds-controls-*`, `--ds-surface-*`). Nothing existing changes.
