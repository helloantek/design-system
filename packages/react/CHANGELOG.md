# @helloantek/ds-react

## 2.28.0

### Minor Changes

- 4668390: Tabs (Sort UI 2.0): `Tabs` holds the selected `value` (`defaultValue`, `onValueChange`), `variant` `default`, `secondary` or `line`, `size` `default` or `lg` and `orientation`; `TabsList` is the tablist (`fullWidth` stretches it), `TabsTrigger` a tab with a label and optional `icon`, `count`, `eyebrow` or `description`, `TabsContent` its panel. One Tab stop: the arrow keys, Home and End move between the tabs and select them, skipping disabled ones.

## 2.27.0

### Minor Changes

- b5fae69: Toggle Group (Sort UI 2.0): `ToggleGroup` holds `ToggleGroupItem`s, `type` `single` (at most one on) or `multiple`, with `value`, `defaultValue` and `onValueChange`, in `variant` `default` or `outline`, `spacing` 2 (8 px), 1 (4 px) or 0 (joined in a pill, or a rounded box when vertical, with dividers when outlined), `orientation` and `size`. It is a named group with one Tab stop; the arrow keys, Home and End move between the items.

## 2.26.0

### Minor Changes

- 9eae6a1: Toggle (Sort UI 2.0): `Toggle` is a button that is on or off (`pressed`, `defaultPressed`, `onPressedChange`), in `variant` `default` or `outline` and `size` `sm`, `default` or `lg`, with `leadingIcon` and `trailingIcon`, or `icon` (and an `aria-label`) for a square icon-only toggle. It renders a `<button aria-pressed>`.

## 2.25.0

### Minor Changes

- 6ec7cde: Drawer (Sort UI 2.0): `Drawer` opens a rounded modal panel that floats 8 px from the bottom (`direction="down"`, the default), the top (`up`) or the end edge (`side`), with a swipe handle (`swipeHandle`) that closes it when dragged towards the edge, a `title`, a `description`, any content and a `footer` whose buttons stack full-width; `DrawerClose` makes a button close it. Down and up are 664 px wide with a centred heading, side is full-height and 384 px wide (`width`). Focus stays inside; Escape or a click on the backdrop closes it and returns focus. `closeButton` adds a Close button, which Figma's Drawer does not have.
- 4b12b04: Hover Card (Sort UI 2.0): `HoverCard` previews what is behind a link in a 288 px card (`width`) while the pointer rests on it (`openDelay`, 700 ms) or the link has keyboard focus. It stays while the pointer or focus is on the link or the card, closes `closeDelay` (300 ms) after the pointer leaves, and Escape closes it; `side` and `align` place it 4 px from the trigger.

## 2.24.0

### Minor Changes

- d7aba34: Sheet (Sort UI 2.0): `Sheet` opens a modal panel along an edge of the screen (`side`: `right`, `left`, `top`, `bottom`) with a `title`, a `description`, the Close button, any content and a `footer` whose buttons stack full-width; `SheetClose` makes a button close it. Left and right sheets are full-height and 384 px wide (`width`), top and bottom full-width. It slides in from its edge, keeps focus inside, and Escape, Close or a click on the backdrop closes it and returns focus. Dialog and Sheet now share their modal code; Dialog's behaviour is unchanged.

## 2.23.0

### Minor Changes

- c6ccc64: Dialog (Sort UI 2.0): `Dialog` opens a modal window from its `trigger` with a `title`, a `description`, the Close button (`closeButton`), any content and a `footer`; `DialogClose` makes a button close it. Focus moves inside and stays there; Escape, Close or a click on the backdrop closes it and returns focus. It is 448 px wide (`width`), the content scrolls past the viewport while the header and footer stay, `footerVariant="muted"` fills the footer and `bodyPadding="flush"` drops the content's padding.
- d668059: Popover (Sort UI 2.0): `Popover` opens a 288 px non-modal panel from its `trigger`, with a `title`, a `description` and any content; `PopoverActions` lines up its buttons and `PopoverClose` makes one close it. `side` (`bottom`, `top`, `left`, `right`) and `align` (`center`, `start`, `end`) place it 4 px from the trigger; `width` changes its width. Focus moves into it, Escape closes it and returns focus to the trigger, a click outside closes it.

## 2.22.0

### Minor Changes

- a64f306: Aspect Ratio (Sort UI 2.0): `AspectRatio` keeps a `ratio` (`1:1`, `4:3`, `3:2`, `16:9`, `21:9`, `2:3`, `3:4`, `9:16` or a number) at its container's width; the picture, video or iframe inside fills it, cropped from the middle. `rounded` gives the demos' 12 px corners.

## 2.21.0

### Minor Changes

- 53a8eb8: Progress and Progress circle (Sort UI 2.0): `Progress` with `value` of `max`, `variant` `default` or `dashed` (steps), `label`, `valueLabel` and `description`, indeterminate without a value; `ProgressCircle` with `value`, `size`, `thickness`, `variant="destructive"` and a label in the middle. Both are labelled `role="progressbar"`s.

## 2.20.0

### Minor Changes

- 42c10bc: Empty (Sort UI 2.0): `icon` (a 32 px tile) or `media`, `title` (`titleAs` for the heading level), `description`, `actions` side by side and anything under them (a search field spans the width).

## 2.19.0

### Minor Changes

- 48ba1e6: Field (Sort UI 2.0): `Field` puts any control in a Field (label with Required, Helper and an add-on, description, error, `orientation` vertical, horizontal or responsive, disabled) and wires it; `FieldLabel`, `FieldGroup`, `FieldSet` and `FieldSeparator`, and `useField()` for custom controls. Input, Select, Combobox and Textarea take the id, description, invalid, disabled and required state from a surrounding Field.

## 2.18.0

### Minor Changes

- 18c89e2: Kbd and Kbd Group (Sort UI 2.0): `Kbd` with `variant` `default` or `inverted` (for dark surfaces), `size` `default` or `sm`, `icon` and a spoken `label` for symbols; `KbdGroup` puts the keys of one shortcut 2 px apart.

## 2.17.0

### Minor Changes

- bd7548b: Spinner (Sort UI 2.0): `variant` `default` (the loader arc in the text colour) or `gradient` (a fading ring), `size` `sm` · `default` · `lg` · `xl`; a `role="status"` named by `label`, or `decorative` inside a control that says what is happening. Slower, not stopped, with reduced motion.

## 2.16.0

### Minor Changes

- d8fc138: Separator (Sort UI 2.0): a 1 px `border` line, `orientation` `horizontal` (fills the width) or `vertical` (the row's height), decorative by default; `decorative={false}` gives it `role="separator"`.

## 2.15.1

### Patch Changes

- ef7389f: Combobox goes back to its `defaultValue` (and drops typed text) when its form is reset, as Select does.

## 2.15.0

### Minor Changes

- 2cb7fe5: Combobox and Textarea get `variant` (`default` · `shadow` · `soft`), the same field styles as Input and Select.
- a4f9e98: Input Group (Sort UI 2.0): `InputDropdown` (Input Group Dropdown) for a `DropdownMenu` in the T slot; `blockStart` / `blockEnd` / `blockDivider` rows in the same box; `loading` (a spinner and `aria-busy`); `InputAction` `variant="ghost"`, icon-only buttons, and buttons as `prefix` / `suffix`.

## 2.14.0

### Minor Changes

- dfea8ac: Marker (Sort UI 2.0): `Marker` (`variant` default · separator · border, `icon`, `trailingIcon`, `loading`), a quiet line for events, dates and steps in a feed or a chat.

## 2.13.0

### Minor Changes

- 2616096: Combobox (Sort UI 2.0): `Combobox` (`size` default · lg · xl, `multiple` chips, `leadIcon`, `leadMedia`, `error`, `disabled`, `emptyMessage`, `filter`) with the Select's options, groups and separators; the WAI-ARIA combobox with list autocomplete.

## 2.12.0

### Minor Changes

- dc91546: Alert Dialog (Sort UI 2.0): `AlertDialog` (`size` default · sm, `variant`, `media`, `title`, `description`, `trigger` or `open`) with `AlertDialogCancel` and `AlertDialogAction`; a native modal `<dialog>` with `role="alertdialog"`.

## 2.11.0

### Minor Changes

- 46a915f: Sonner (Sort UI 2.0): `toast()` (`.success`, `.info`, `.warning`, `.error`, `.loading`, `.promise`, `.dismiss`) with `<Toaster>` (`position`, `duration`, `closeButton`, `visibleToasts`, and `stacked`, a pile not in Figma) and `<Toast>` for a single toast.

## 2.10.0

### Minor Changes

- d00236e: Alert (Sort UI 2.0): `Alert` (`variant` default · destructive) with `title`, `description`, `icon` and `action`; a `status` / `alert` live region.

## 2.9.0

### Minor Changes

- 19c291b: Card (Sort UI 2.0): `Card` (`size`, `as`) with `CardMedia` (16:9), `CardHeader` (`title`, `titleAs`, `description`, `icon`, `action`), `CardContent` and `CardFooter` (`justify`, `muted`).

## 2.8.0

### Minor Changes

- 11eb9db: Tooltip (Sort UI 2.0): `Tooltip` describes its trigger and shows on hover (after `delay`) or keyboard focus, stays while the pointer is over it and hides on Escape; `side` (top, bottom, left, right), a leading `icon` and a `shortcut` drawn as inverted Kbd keys.

## 2.7.0

### Minor Changes

- efeccc3: Switch (Sort UI 2.0): `Switch` on a native checkbox with `role="switch"`, in two sizes, with `label`, `caption`, `error` / `invalid`, `disabled`, `control` (end by default) and `card`; `SwitchGroup` puts switches under a legend. Field gains a muted Helper after the label (`ds-field__helper`). A disabled Checkbox, Radio or Switch field now fades its description with its label.

## 2.6.0

### Minor Changes

- aedcdb4: Context Menu (Sort UI 2.0): `ContextMenu` opens the Dropdown Menu parts at the pointer on a right-click, or with Shift+F10 / the Menu key, kept inside the viewport, with the menu keyboard of Dropdown Menu. `DropdownMenuRow` and `DropdownMenuIconItem` add a row of 32 px icon or emoji items (the "Chat message" demo's reactions).

## 2.5.0

### Minor Changes

- 92fbbbc: Textarea (Sort UI 2.0): `Textarea` on a native `<textarea>` with `label`, `caption`, `error` / `invalid` and `disabled`; at least 64 px tall and growing with its text. `showCount` with `maxLength` or a soft `limit` adds the character count and a progress circle to the label; `resizable` adds a drag handle. Field gains a label row with a trail add-on (`ds-field__label-row`, `ds-field__addon`).

## 2.4.0

### Minor Changes

- 2738a9b: Button Group (Sort UI 2.0): `ButtonGroup` (`orientation`) joins Buttons, a Dropdown Menu's button, an Input or a Select into one control with only the outer corners rounded and shared strokes dropped; a group of groups spaces them 8 px apart. `ButtonGroupText` adds a label segment (e.g. a URL prefix). Button's stroke can now be reshaped with `--btn-stroke-shape`.

## 2.3.0

### Minor Changes

- d010c7c: New Radio and RadioGroup (Sort UI 2.0) on native radios: Checked, Focus, Disabled and Invalid; `label`, `caption` and `control` render the horizontal Field and `card` the Choice Card; RadioGroup shares the name, value and Invalid, takes `error`, `required`, `disabled` and `columns`. Choice cards (Checkbox too) now take Figma's Choice Card focus: the ring goes on the card. Styles: `ds-radio*` in `radio.css`; `ds-fieldset__fields--grid` in `input.css`.

## 2.2.1

## 2.2.0

### Minor Changes

- 6a5b08a: New Checkbox (Sort UI 2.0) on a native checkbox: Checked, Focus, Disabled, Invalid and indeterminate; with `label`, `caption`, `error` and `control` (start, end) it renders the horizontal Field, `card` makes it a choice card, and `CheckboxGroup` puts checkboxes under a legend. Styles: `ds-checkbox*` in `checkbox.css`; `ds-field--horizontal`, `ds-field__control`, `ds-field__content`, `ds-field--card` and `ds-fieldset*` in `input.css`.

## 2.1.0

### Minor Changes

- 2d34c87: New Dropdown Menu (Sort UI 2.0): `DropdownMenu` (a trigger and its menu, WAI-ARIA menu button) or `DropdownMenuContent` on its own, with `DropdownMenuItem` (Item, Destructive), `DropdownMenuCheckboxItem` (Checkbox, Menubar checkbox), `DropdownMenuRadioGroup` and `DropdownMenuRadioItem`, `DropdownMenuSub` (Sub trigger and submenu), `DropdownMenuGroup`, `DropdownMenuLabel` (xs, sm), `DropdownMenuSeparator` and `DropdownMenuUserProfile` (lg, default). Styles: `ds-dropdown*` in `dropdown-menu.css`.

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
- d4cd490: Select: add `multiple` (Figma Variant=Multi-select). Values are arrays, options toggle and the menu stays open, the trigger lists the selected labels, and forms receive one entry per value.
- dbcc75d: BREAKING: Select follows Sort UI 2.0 (Select, Select Item, Select Label, Select Separator, Select Content, Checkbox, Radio), and its sizes take the Figma names Button and Input use. `size`: `xl` (40 px, new) · `lg` (36 px) · `default` (32 px, was `sm`) · `sm` (28 px, new); the default is now `default` (was `lg`), and classes are `ds-field--xl|lg|default|sm`. Looks: the Input's field (8 px radius, 13 px text, focus ring, red stroke and ring when invalid, 50 % when disabled) with a chevron; a popover menu with an 8 px radius; 32 px items with a 4 px radius with the check mark on the right, the accent highlight and 50 % disabled items; 12 px group labels and notes; 2.0 Checkbox and Radio. Every other prop and the behaviour (multi-select, tags, avatars, captions, badges, descriptions, keyboard) are unchanged; `shadow` adds Shadow/xs and `soft` is a borderless tinted field.
- 2763374: Select: `multiple tags` shows the values as removable badges (Figma Variant=Tags): × with the mouse, Backspace/Delete removes the last one, removals are announced. Tags that do not fit wrap, or with `tagsOverflow="count"` stay on one row with a "+N" badge. Badge: `removeButton={false}` draws the Close Icon as a pointer target for badges inside another control.

### Patch Changes

- Updated dependencies [6d87dbf]
- Updated dependencies [78f5557]
- Updated dependencies [7e4b3a3]
- Updated dependencies [fa5b332]
- Updated dependencies [f2a9b6d]
- Updated dependencies [b8a223d]
- Updated dependencies [847d61b]
- Updated dependencies [58d1806]
- Updated dependencies [aea0911]
- Updated dependencies [9c3c9a3]
- Updated dependencies [292eca9]
- Updated dependencies [dbcc75d]
- Updated dependencies [2763374]
- Updated dependencies [6104007]
  - @helloantek/ds-css@2.0.0
