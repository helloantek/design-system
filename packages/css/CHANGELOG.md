# @helloantek/ds-css

## 2.0.0

### Major Changes

- 6104007: BREAKING: Sort UI 2.0 only. The Sort UI 1.3 tokens and the `theme-2` brand are removed; `theme-1` is built from Sort UI 2.0 plus the 40 Sort UI 1.3 colours Badge and Status Badge still use (same `--ds-*` names). App code that used other 1.3 tokens moves to their 2.0 equivalents; see "Upgrading an app to 2.0.0" in `docs/migration-sort-ui-2.md` for the mapping (e.g. `--ds-bg-default` → `--ds-background`, `--ds-text-default` → `--ds-foreground`, `--ds-space-8` → `--ds-spacing-2`). Swift and Kotlin token files follow: `Theme2Tokens` is gone and `Theme1Tokens` holds the 2.0 names.

### Minor Changes

- 6d87dbf: Add Avatar (picture, initials or placeholder; 2xs–3xl; circular or rounded; ring; top and bottom badges) and StatusBadge (checkmark, online, offline, notification, icon, logo). New tokens: `icon/black-disabled`, `radius/sm`, font sizes `md`/`lg`/`xl` with line heights `leading-6`/`leading-7`, and the Icon Size collection (`--ds-icon-size-xs` … `xl`).
- 78f5557: BREAKING: Avatar follows Sort UI 2.0 (Avatar, Avatar Badge, Avatar Group). `size`: `xs` · `sm` · `default` (was `md`, now the default) · `lg` · `xl`; `2xs`, `2xl` and `3xl` are removed (not in Sort UI 2.0); `shape`: `round` · `square` (was `circular` · `rounded`). Initials sit on a muted fill in muted text; with neither picture nor initials the avatar shows an icon (a person, or the new `icon` prop) instead of the silhouette; the inner stroke is gone. New: `AvatarBadge` (Figma "badge": a primary dot, optionally with an icon, inside the bottom right corner) and `AvatarGroup` (overlapping avatars with a ring, `max`/`total` for the "+N" count). `StatusBadge` and both badge slots are unchanged (Sort UI 1.3).
- 7e4b3a3: Add Badge: Soft and Strong styles in ten colours, sm/lg, rounded/pill, border, icon, dot or image, and a remove button (`onRemove`) whose icon follows the label colour. Select menu items now render their badge with it. New tokens: `bg/badge/<color>`, `bg/basic/<color>-accent` and `-strong`, `bg/state/ghost-hover`.
- fa5b332: BREAKING: Button follows Sort UI 2.0 and its tokens. `variant`: `default` · `outline` · `secondary` · `ghost` · `destructive` (was `primary` · `secondary` · `dashed` · `soft` · `ghost` · `ghost-muted` · `destructive`); `size`: `xl` · `lg` · `default` · `sm` · `xs` (was `lg` · `md` · `sm` · `xs` · `2xs`; classes are now `ds-button--size-<size>`); `leadIcon`/`tailIcon` → `leadingIcon`/`trailingIcon`; `shape`, `loading` and the Press state are removed (not in Sort UI 2.0).
- b8a223d: Add Input (label, input, caption) with Default, Shortcut, Add-on, Inline add-on and Tail button variants, Default/Shadow/Soft styles, lg/sm sizes and all Figma states. New tokens: input backgrounds, destructive and highlight borders, accent caret, destructive text and icon, normal font weight, failed-input shadow.
- 847d61b: BREAKING: Input follows Sort UI 2.0 (Input, Input Group, Field, Kbd), and its sizes take the Figma names Button already uses. `size`: `xl` (40 px, new) · `lg` (36 px) · `default` (32 px, was `sm`); the default is now `default` (was `lg`), and classes are `ds-field--xl|lg|default` / `ds-input--xl|lg|default` (`ds-field--sm` / `ds-input--sm` no longer style an Input). Looks: an 8 px radius like Button (Figma draws 10 px), 13 px text, a 2 px focus ring, a red stroke and ring when invalid, 50 % opacity when disabled, 14 px label and description, a Kbd-style shortcut and an Outline xs button for `action` (4 px radius, 4 px inside the field). Every other prop is unchanged: `shadow` adds Shadow/xs and `soft` is a borderless tinted field. Select keeps its Sort UI 1.3 label, caption and sizes until it moves to 2.0.
- aea0911: Select: options take an `Avatar` as `media` (Figma Menu Items Type=Avatar), and a single select shows the selected option's `media` in place of the lead icon (Figma Select Input Variant=Avatar).
- 9c3c9a3: Add Select: a select-only combobox with label, caption, error, Default/Shadow/Soft styles, lg/sm sizes and all Figma states, plus a menu with options (icon, caption, badge, disabled), group labels and dividers. Full keyboard support (arrows, Home/End, PageUp/PageDown, Enter/Space, Escape, Tab, type-ahead) and form support through `name` (submits the value, restores `defaultValue` on form reset). New tokens: card background, default badge background, `shadow/modal-sm`.
- 292eca9: Select menu items: `indicator` (check, checkbox, radio), Default Large options (`description`, 36 px icon circle), Country Flag options (`media`), and caption notes (`{ type: 'caption' }`). Disabled options now fade the badge to 50% as in Figma. New tokens: `bg/checkbox/*`, `border/strong`, `bg/basic/gray-subtle`, `bg/state/soft`, `shadow/checkbox`, `shadow/checkbox-highlight`.
- dbcc75d: BREAKING: Select follows Sort UI 2.0 (Select, Select Item, Select Label, Select Separator, Select Content, Checkbox, Radio), and its sizes take the Figma names Button and Input use. `size`: `xl` (40 px, new) · `lg` (36 px) · `default` (32 px, was `sm`) · `sm` (28 px, new); the default is now `default` (was `lg`), and classes are `ds-field--xl|lg|default|sm`. Looks: the Input's field (8 px radius, 13 px text, focus ring, red stroke and ring when invalid, 50 % when disabled) with a chevron; a popover menu with an 8 px radius; 32 px items with a 4 px radius with the check mark on the right, the accent highlight and 50 % disabled items; 12 px group labels and notes; 2.0 Checkbox and Radio. Every other prop and the behaviour (multi-select, tags, avatars, captions, badges, descriptions, keyboard) are unchanged; `shadow` adds Shadow/xs and `soft` is a borderless tinted field.
- 2763374: Select: `multiple tags` shows the values as removable badges (Figma Variant=Tags): × with the mouse, Backspace/Delete removes the last one, removals are announced. Tags that do not fit wrap, or with `tagsOverflow="count"` stay on one row with a "+N" badge. Badge: `removeButton={false}` draws the Close Icon as a pointer target for badges inside another control.

### Patch Changes

- f2a9b6d: Button icon-only: set `gap` to 0 as in Figma (it inherited the size's gap; no visual change).
- 58d1806: Document that apps must load Inter 400 as well as 500: Input text (placeholder, value, caption) uses the regular weight.
- Updated dependencies [6d87dbf]
- Updated dependencies [7e4b3a3]
- Updated dependencies [b8a223d]
- Updated dependencies [9c3c9a3]
- Updated dependencies [292eca9]
- Updated dependencies [6104007]
- Updated dependencies [408fc47]
  - @helloantek/ds-tokens@2.0.0
