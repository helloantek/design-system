# @helloantek design system

One UI kit, many brands, any platform. Components are designed in Figma, implemented once, verified against Figma in CI and themed per brand through tokens.

| Package | What it is | Who uses it |
|---|---|---|
| [`@helloantek/ds-tokens`](packages/tokens) | Figma variables → CSS, JS, Swift, Kotlin for every brand | every project |
| [`@helloantek/ds-css`](packages/css) | Component styles as plain CSS classes, built only on tokens | every web project |
| [`@helloantek/ds-react`](packages/react) | React components (markup + classes) | React / Next.js |
| [`apps/storybook`](apps/storybook) | Documentation with brand and colour-scheme switchers | design, development |

Why it is split this way: [ADR 0001](docs/adr/0001-layered-packages.md). It is based on the [Button pilot](docs/pilot/2026-10-button/REPORT.md).

**Source of truth:** Figma file Sort UI 2.0 (`4JnqgEbdlnKgiFrfmiwEZw`); Badge and Status Badge stay on Sort UI 1.3 (`4tiBR2hKd4yvQehtKhM9OY`), see the [migration plan](docs/migration-sort-ui-2.md). **Components:** Avatar (with Avatar Badge, Avatar Group and Status Badge), Badge, Button, Button Group, Checkbox, Context Menu, Dropdown Menu, Input, Radio, Select, Textarea. Planned: see [backlog](docs/backlog.md). **Brands:** `theme-1`.

## Using it in a project

Packages are published to GitHub Packages. Add an `.npmrc` with a token that can read packages:

```ini
@helloantek:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### React / Next.js

```sh
npm i @helloantek/ds-tokens @helloantek/ds-css @helloantek/ds-react @fontsource/inter
```

```tsx
// once, at the app root
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@helloantek/ds-tokens/css/theme-1.css'; // the project's brand
import '@helloantek/ds-css';

import { Button } from '@helloantek/ds-react';

<Button variant="secondary" leadingIcon={<RiAddLine />}>Add</Button>
```

Colour scheme: `data-ds-scheme="dark"` on `<html>` (or any section), `"system"` to follow the OS. Light is the default.

### Other web frameworks (Vue, Svelte, Angular, plain HTML)

Load the same two CSS files and use the classes; each component's markup is documented at the top of its CSS file:

```html
<button class="ds-button ds-button--default ds-button--size-default">
  <span class="ds-button__label">Save</span>
</button>
```

### iOS / Android

`@helloantek/ds-tokens` ships `ios/DSColor.swift` + `ios/<Brand>Tokens.swift` and `android/<Brand>Tokens.kt` (plain values, no UI framework dependency). Native components are not part of the system yet.

## Button

Sort UI 2.0 ([Figma `40:2125`](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=40-2125)), built on the 2.0 tokens.

```tsx
<Button>Save</Button>
<Button variant="outline" leadingIcon={<PlusIcon />} badge="2">Add</Button>
<Button variant="ghost" size="sm" icon={<MoreIcon />} aria-label="More" />
```

| Figma property | React prop | CSS class |
|---|---|---|
| Variant | `variant`: `default` · `outline` · `secondary` · `ghost` · `destructive` | `ds-button--<variant>` |
| Size | `size`: `xl` (40) · `lg` (36) · `default` (32) · `sm` (28) · `xs` (24) | `ds-button--size-<size>` |
| Icon only | `icon` + required `aria-label` | `ds-button--icon-only` |
| State = Hover / Focus | CSS | `:hover` · `:focus-visible` |
| State = Disabled | `disabled` | `:disabled` (or `aria-disabled="true"`) |
| Leading Icon / Trailing Icon / Badge | `leadingIcon` · `trailingIcon` · `badge` | `__icon` · `__badge` |

Changed from 1.3: variants `primary` → `default`, `soft`/`dashed`/`ghost-muted` are gone (closest: `secondary`, `outline`, `ghost`); sizes `lg`/`md`/`sm`/`xs`/`2xs` → `xl`/`lg`/`default`/`sm`/`xs`; `shape` (one radius now), `loading` (no Figma state; use a Spinner next to the label once it exists) and the Press state are gone; `leadIcon`/`tailIcon` → `leadingIcon`/`trailingIcon`.

## Avatar

A person's picture, initials or an icon, with an optional badge, and avatar groups. Sort UI 2.0 **Avatar**, **Avatar Badge** and **Avatar Group**; the Sort UI 1.3 **Status Badge** stays available (like Badge).

```tsx
<Avatar src={user.photo} name="Sam Rivera" />
<Avatar initials="SR" name="Sam Rivera" size="lg" shape="square" />
<Avatar src={user.photo} name="Sam Rivera" bottomBadge={<AvatarBadge label="Online" />} />
<Avatar name="Unknown user" topBadge={<StatusBadge variant="checkmark" />} />
<AvatarGroup size="sm" max={3} aria-label="Reviewers">{people.map((p) => <Avatar key={p.id} {...p} />)}</AvatarGroup>
```

| Figma property | React prop | CSS class |
|---|---|---|
| variant (image, fallback, icon) | set by the content: `src` · `initials` · neither (a person icon, or `icon`); a picture that fails to load falls back | `ds-avatar__image` > `img` · `ds-avatar--fallback` + `ds-avatar__initials` · `ds-avatar__icon` |
| size | `size`: `xs` (20) · `sm` (24) · `default` (32, the default) · `lg` (40) · `xl` (48) | `ds-avatar--<size>` |
| shape | `shape`: `round` · `square` (6 / 8 / 10 px by size) | `ds-avatar--<shape>` |
| badge (Avatar Badge) | `bottomBadge={<AvatarBadge label? icon? />}`: a primary dot inside the bottom right corner, 8 / 10 / 12 px by size | `ds-avatar-badge` · `--icon` |
| Avatar Group (avatars, Count, Size) | `<AvatarGroup size max total>`: children overlap by 8 px with a 2 px ring; `max` (or `total`) adds the "+N" count | `ds-avatar-group` · `ds-avatar-group__count` |
| — | `ring`: the group's 2 px ring on a single avatar | `ds-avatar--ring` |
| — | `topBadge` · `bottomBadge` with a `StatusBadge` (Sort UI 1.3): `checkmark` · `online` · `offline` · `notification` · `icon` (+ `icon`) · `logo` (+ `image`); `label` overrides the spoken name | `ds-avatar__badge--top` · `--bottom` · `ds-status-badge--<variant>` |
| — | `name`: the accessible name (without it the avatar is decorative) | |

## Badge

A short label: status, category, count or a removable value. Covers every Figma Variant, Size, Color, Shape, Border and Style, and the Close Icon.

```tsx
<Badge color="green">Active</Badge>
<Badge color="blue" variant="strong" dot>New</Badge>
<Badge border icon={<RiUser3Fill />}>Owner</Badge>
<Badge border onRemove={() => removeTag('design')}>Design</Badge>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Style (Soft, Srong) | `variant`: `soft` · `strong` | `ds-badge--soft` · `ds-badge--strong` |
| Size | `size`: `sm` · `lg` | `ds-badge--<size>` |
| Color | `color`: `neutral` · `red` · `orange` · `lime` · `green` · `cyan` · `blue` · `violet` · `fuchsia` · `pink` | `ds-badge--<color>` |
| Shape | `shape`: `rounded` · `pill` | `ds-badge--pill` |
| Border | `border` (Soft badges only) | `ds-badge--border` |
| Variant = Icon / Dot / Image | `icon` · `dot` · `image` | `ds-badge__lead` · `ds-badge__dot` · `ds-badge__image` |
| ↩ Label | `children` | `ds-badge__label` |
| Close Icon | `onRemove` (+ `removeLabel`, default "Remove <label>"; `removeButton={false}` draws it as a pointer target inside another control) | `ds-badge__remove` |

## Input

Label, input and description in one field: Sort UI 2.0 **Input**, **Input Group** and **Field**.

```tsx
<Input label="Email" caption="We never share it" placeholder="mail@domain.com" leadIcon={<RiAtLine />} />
<Input label="Website" prefix="https://" suffix=".com" />
<Input label="Invite" placeholder="mail@domain.com" action={<InputAction onClick={send}>Send</InputAction>} />
<Input label="Email" error="Enter a valid address" />
```

| Figma property | React prop | CSS class |
|---|---|---|
| Size | `size`: `xl` (40 px) · `lg` (36 px) · `default` (32 px, the default); the same heights as Button's sizes of the same name | `ds-field--<size>` · `ds-input--<size>` |
| — (one style in 2.0) | `variant`: `default` · `shadow` (+ Shadow/xs) · `soft` (borderless, tinted) | `ds-input--<variant>` |
| Value = Placeholder / Filled | `placeholder` / `value` | native |
| State = Focus | focus | `:focus-within` |
| — (hover, ours) | a dark 1.5 px stroke (`muted-foreground`, `stroke-width-3`); not while focused, invalid or disabled | `:hover` |
| State = Invalid · Field Error | `error` (replaces the description, sets `aria-invalid`, label turns red) | `ds-input--invalid` · `ds-field__caption--error` |
| State = Disabled | `disabled` (input and label at 50 %) | `ds-input--disabled` |
| Field Label · Description | `label` · `caption` (wired with `for` / `aria-describedby`) | `ds-field__label` · `ds-field__caption` |
| Leading icon · Trailing icon | `leadIcon` · `tailIcon` | `ds-input__icon` |
| Kbd in the T slot | `shortcut` (also `aria-keyshortcuts`) | `ds-input__shortcut` |
| L slot · T slot text | `prefix` · `suffix` | `ds-input__affix` |
| Button (Outline xs) in the T slot | `action={<InputAction>…</InputAction>}` | `ds-input__action` |
| — | `addonBefore` · `addonAfter`: segments split off by a line | `ds-input__addon` |

## Select

A field that opens a list of options: the WAI-ARIA select-only combobox (arrows, Home/End, PageUp/PageDown, Enter/Space, Escape, Tab, type-ahead). Sort UI 2.0 **Select**, **Select Item**, **Select Label**, **Select Separator** and **Select Content**, with the **Checkbox** and **Radio** components for `indicator`. Multi-select, tags, avatars and flags, captions, badges, notes and descriptions are ours; they wear the 2.0 look. The menu search and the menu button are in the [backlog](docs/backlog.md).

```tsx
<Select label="Owner" placeholder="Select a user" options={users} value={owner} onValueChange={setOwner} leadIcon={<RiUser3Line />} />
<Select label="Reviewers" options={users} multiple value={reviewers} onValueChange={setReviewers} />
<Select label="Reviewers" options={users} multiple tags defaultValue={['simon-alt']} />
<Select
  label="Region"
  name="region"
  options={[
    { label: 'Regions', caption: '3', options: [{ value: 'eu', label: 'Europe', caption: 'EU', badge: 'Default' }, { value: 'us', label: 'North America' }] },
    { type: 'separator' },
    { value: 'global', label: 'Global', icon: <RiGlobalLine /> },
  ]}
/>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Size | `size`: `xl` (40 px) · `lg` (36 px) · `default` (32 px, the default) · `sm` (28 px); the same heights as Button's and Input's sizes of the same name | `ds-field--<size>` |
| — (one style in 2.0) | `variant`: `default` · `shadow` (+ Shadow/xs) · `soft` (borderless, tinted) | `ds-select__trigger--<variant>` |
| Value = Placeholder / Filled | `placeholder` / `value` · `defaultValue` | `ds-select__value--placeholder` |
| State = Focus | focus (the menu opens on click or keys) | `:focus` |
| — (hover, ours) | a dark 1.5 px stroke, as in Input | `:hover` |
| State = Invalid · Field Error | `error` (replaces the description, sets `aria-invalid`, label turns red) | `ds-select__trigger--invalid` |
| State = Disabled | `disabled` (field and label at 50 %) | `ds-select__trigger--disabled` |
| Field Label · Description | `label` · `caption` (wired with `aria-labelledby` / `aria-describedby`) | `ds-field__label` · `ds-field__caption` |
| Leading icon | `leadIcon`; `tailIcon` sits before the chevron | `ds-select__icon` |
| Placeholder | `placeholder` | |
| Select Item | `options: [{ value, label, caption?, icon?, badge?, disabled? }]` | `ds-select__option` |
| Select Item State = Highlighted · Disabled; Selected | highlight (mouse or keys) · `disabled`; selected (check mark on the right) | `[data-highlighted]` · `[aria-disabled]` · `[aria-selected]` |
| Select Item Description | option `description` (second line, 12 px muted) | `ds-select__text` · `ds-select__description` |
| Select Label | `{ label, caption?, options }` (a group) | `ds-select__group-label` |
| Select Separator | `{ type: 'separator' }` | `ds-select__separator` |
| Select Content | the menu (popover, 8 px radius, Surface/Popover shadow) | `ds-select__menu` |
| Checkbox · Radio | `indicator`: `check` (default) · `checkbox` · `radio` | `ds-select__check` · `ds-select__box--checkbox` · `ds-select__box--radio` |
| — | `multiple` (`value`/`defaultValue` are arrays; options toggle and the menu stays open; the trigger lists the labels) | `[aria-multiselectable]` on the menu |
| — | `multiple tags`: each value is a `Badge` (sm, Neutral, Soft, Border, Close Icon). × removes it with the mouse, Backspace/Delete removes the last one, the menu toggles any; removals are announced. Tags that do not fit wrap onto more rows (default), or with `tagsOverflow="count"` stay on one row with a "+N" badge (its tooltip and screen-reader text name the hidden values). No buttons inside the combobox: the × is a pointer target only. | `ds-select__tags` · `--count` · `ds-select__more` · `ds-select__status` |
| — | option `media` (20 px picture: `<Avatar size="xs" shape="square" …/>`, a flag `<svg>`); a single select shows the selected option's `media` in place of the lead icon | `ds-select__media` in the option and the trigger |
| — | `{ type: 'caption', label }`: a note in the menu (read as the menu's description) | `ds-select__note` |

Forms: `name` submits the value through a hidden input (one per value with `multiple`, read them with `formData.getAll(name)`), and resetting the form restores `defaultValue`. The menu opens below the field and scrolls past 296 px; it does not flip near the bottom of the viewport yet.

## Checkbox

A native `<input type="checkbox">` drawn as the Sort UI 2.0 **Checkbox**, alone or in a **Field** Orientation=Horizontal (label, description, error), and **Field Group** for a set of checkboxes under a legend. Indeterminate is ours: Figma's demos draw it with a minus on the unchecked box.

```tsx
<Checkbox label="Subscription renewal emails" caption="Send customers email receipts" checked={renewals} onCheckedChange={setRenewals} />
<Checkbox label="Accept the terms" name="terms" required error={termsError} />
<Checkbox aria-label="Select all rows" checked={all} indeterminate={some && !all} onCheckedChange={selectAll} />
<CheckboxGroup label="Import from Tunely" caption="Choose what to bring over to your new library.">
  <Checkbox label="Playlists" name="import" value="playlists" />
  <Checkbox label="Liked songs" name="import" value="liked" defaultChecked />
</CheckboxGroup>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Checked | `checked` · `defaultChecked`; `onCheckedChange(checked)` or the native `onChange` | `ds-checkbox__input:checked` |
| State = Focus | keyboard focus (ring stroke and a 3 px ring) | `:focus-visible` |
| State = Disabled | `disabled` (the checkbox at 50 %; in a Field the label too) | `:disabled` |
| State = Invalid | `invalid`, or `error` in a Field (sets `aria-invalid`, the label turns red) | `[aria-invalid="true"]` |
| — | `indeterminate` (minus on the unchecked box; a click clears it) | `:indeterminate` |
| Field Orientation = Horizontal · Field Label · Description · Error | `label` · `caption` · `error` (replaces the description, as in Input); wired with `<label for>` and `aria-describedby` | `ds-field--horizontal` · `ds-field__control` · `ds-field__content` |
| Field Control = Start · End | `control`: `start` (default) · `end` | `ds-field--control-end` |
| Choice Card | `card`: the field in a bordered 16 px card, filled when checked; a click anywhere on the card toggles it; hover gives it a dark 1.5 px stroke | `ds-field--card` |
| Field Group | `<CheckboxGroup label caption error disabled>`: a `<fieldset>` with a legend, fields 12 px apart | `ds-fieldset` · `ds-fieldset__legend` · `ds-fieldset__fields` |

Without `label`, the types require `aria-label` or `aria-labelledby`. Other props (`name`, `value`, `required`, `ref`…) go to the input.

## Radio

Native `<input type="radio">`s drawn as the Sort UI 2.0 **Radio**, in a **Radio Group** (a fieldset with a legend that shares the name, the value and Invalid with its radios, so the arrow keys and forms work as usual), with **Field** Orientation=Horizontal for labels and **Choice Card** for `card`.

```tsx
<RadioGroup label="Streaming quality" caption="Higher quality uses more data." value={quality} onValueChange={setQuality}>
  <Radio value="auto" label="Automatic" />
  <Radio value="high" label="High · 320 kbps" />
  <Radio value="lossless" label="Lossless" disabled />
</RadioGroup>
<RadioGroup label="Billing period" name="plan" defaultValue="yearly" required error={planError}>
  <Radio card control="end" value="monthly" label="Monthly" caption="$12 a month, cancel any time." />
  <Radio card control="end" value="yearly" label="Yearly" caption="$120 a year — two months free." />
</RadioGroup>
<RadioGroup label="Default landing page" columns={2}>…</RadioGroup>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Checked | the group's `value` · `defaultValue` · `onValueChange(value)`; a lone radio takes `checked` / `defaultChecked` | `ds-radio__input:checked` · `ds-radio__dot` |
| State = Focus | keyboard focus (ring stroke and a 3 px ring) | `:focus-visible` |
| State = Disabled | `disabled` on a radio or the whole group (the radio at 50 %; in a Field the label too) | `:disabled` |
| State = Invalid | the group's `invalid`, or `error` (replaces the description); a radio's own `invalid` (sets `aria-invalid`, the label turns red) | `[aria-invalid="true"]` |
| Radio Group (Field Group) | `<RadioGroup label caption error invalid name required disabled columns>`: a `<fieldset>` with a legend, radios 12 px apart (choice cards 8 px); `columns` lays them out in a grid | `ds-fieldset` · `ds-fieldset__fields--grid` (`--fieldset-columns`) |
| Field Orientation = Horizontal · Field Label · Description · Control = Start · End | `label` · `caption` · `control`: `start` (default) · `end` | `ds-field--horizontal` · `ds-field--control-end` |
| Choice Card (Title, Description, Checked, State) | `card` (filled when checked; a click anywhere selects; focus puts the ring on the card; hover draws a dark 1.5 px stroke) | `ds-field--card` |

Without `label`, the types require `aria-label` or `aria-labelledby`. Other props (`value`, `ref`…) go to the input.

## Button Group

Buttons, an Input or a Select joined into one control: Sort UI 2.0 **Button Group** (Orientation), its **Button** set (Start, Middle, End) and **Button Group Text**. The items touch, only the group's outer corners are rounded, and each item after the first drops the stroke it shares with the previous one; Secondary and Ghost buttons are split by a hairline. A group of groups spaces them 8 px apart (Figma's "Button Group" and "Nested" demos). A group has `role="group"` and needs a name.

```tsx
<ButtonGroup aria-label="Review">
  <Button variant="outline">Preview</Button>
  <Button variant="outline">Share</Button>
</ButtonGroup>
<ButtonGroup aria-label="Follow">
  <Button variant="outline">Follow</Button>
  <DropdownMenu trigger={<Button variant="outline" icon={<ChevronDown />} aria-label="More follow options" />} align="end">…</DropdownMenu>
</ButtonGroup>
<ButtonGroup aria-label="Website">
  <ButtonGroupText>https://</ButtonGroupText>
  <Input aria-label="Website" placeholder="example.com" />
</ButtonGroup>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Orientation = Horizontal · Vertical | `orientation`: `horizontal` (default) · `vertical` | `ds-button-group` · `ds-button-group--vertical` |
| Button Variant = Start · Middle · End | any `Button` (or a Dropdown Menu's button trigger) in the group, by position | `ds-button-group > .ds-button` (uses `--btn-stroke-shape`) |
| Button Group Text (Label, Icon) | `<ButtonGroupText icon>`: the field fill, 12 px padding, xs medium | `ds-button-group__text` |
| items (Input, Select) | an `Input` or a `Select` takes the room left by the buttons | `ds-button-group > .ds-field` |
| nested Button Groups | a `ButtonGroup` of `ButtonGroup`s: 8 px apart, each with its own corners | `ds-button-group:has(> .ds-button-group)` |

The focused item rises above its neighbours so its ring is not covered. Without `aria-label` or `aria-labelledby` the types report an error.

## Textarea

A native `<textarea>` drawn as the Sort UI 2.0 **Textarea**, in a **Field** for the label, description and error. It is at least 64 px tall and grows with its text (Figma: Hug; `field-sizing: content`, so browsers without it keep 64 px and scroll). `showCount` puts the "Character limit" demo's count and **Progress circle** in the label's trail add-on.

```tsx
<Textarea label="Summary" placeholder="What changed in this release and why?" caption="Shown at the top of the release notes." />
<Textarea label="Post" value={post} onChange={(e) => setPost(e.target.value)} maxLength={280} showCount />
<Textarea label="Tagline" limit={48} showCount />   {/* a soft limit: typing may go over, the count turns red */}
<Textarea aria-labelledby="feedback-title" placeholder="I expected the export to include my archived projects…" />
```

| Figma property | React prop | CSS class |
|---|---|---|
| Value = Placeholder · Filled | `placeholder` · `value` / `defaultValue` | `ds-textarea` (`::placeholder`) |
| State = Focus | focus (ring stroke and a 2 px ring) | `:focus` |
| State = Disabled | `disabled` (the box at 50 %, and the label) | `:disabled` |
| State = Invalid | `invalid`, or `error` (replaces the description) | `[aria-invalid="true"]` |
| Field Label · Description | `label` · `caption` | `ds-field__label` · `ds-field__caption` |
| Field Label trail add-on: count · Progress circle | `showCount` with `maxLength` (hard) or `limit` (soft; over it the count is negative and red, and the textarea is invalid). The count is announced as "195 of 280 characters left". | `ds-field__label-row` · `ds-field__addon` · `ds-textarea__count` · `ds-textarea__progress` |
| — (ours) | `resizable`: a vertical drag handle | `ds-textarea--resize` |

Hover draws the dark 1.5 px stroke of Input and Select. Other props (`rows`, `name`, `ref`…) go to the textarea.

## Context Menu

The menu of actions for whatever is under the pointer: a right-click on the trigger opens it there, and Shift+F10 or the Menu key opens it at the trigger's corner with the first item focused. From then on it behaves like Dropdown Menu (arrows, Home/End, letters, → and ← for submenus, Enter or Space to pick, Escape to close and give focus back). A click outside, Tab, scrolling or resizing closes it. Sort UI 2.0 has no component set for it: its demos are **Dropdown Menu Content**, **Item**, **Label** and **Separator**, so the items are the Dropdown Menu parts.

```tsx
<ContextMenu aria-label="Photo" trigger={<figure>…</figure>}>
  <DropdownMenuLabel>IMG_2041.HEIC</DropdownMenuLabel>
  <DropdownMenuItem icon={<Copy />} shortcut="⌘C">Copy image</DropdownMenuItem>
  <DropdownMenuSub label="Status" icon={<CircleDot />}>…</DropdownMenuSub>
  <DropdownMenuSeparator />
  <DropdownMenuItem type="destructive" icon={<Trash />} shortcut="⌘⌫">Delete photo</DropdownMenuItem>
</ContextMenu>
```

| Figma | React prop | CSS class |
|---|---|---|
| the area that is right-clicked | `trigger` (gets `tabIndex` 0 unless it sets one, and `data-open` while the menu is open) | — |
| Dropdown Menu Content at the pointer | `aria-label` (required: the area does not name the menu) · `className` · `style` · `onOpenChange` · `disabled` (keeps the browser's menu) | `ds-context-menu` · `ds-dropdown__content` (fixed at the pointer, kept inside the viewport) |
| items | the Dropdown Menu parts, plus `DropdownMenuRow` / `DropdownMenuIconItem` for a row of reactions | see Dropdown Menu |

The menu is `position: fixed` in place, not portalled, so it inherits the brand and scheme of its section; an ancestor with a `transform` or `filter` would move it.

## Dropdown Menu

A button that opens a menu of actions: the WAI-ARIA menu button (Enter, Space or the arrows open it; arrows, Home/End and type-ahead move; Enter or Space picks; → and ← open and close submenus; Escape closes; focus goes back to the button). Sort UI 2.0 **Dropdown Menu Trigger**, **Content**, **Item**, **Label**, **Separator** and **User Profile**. Radio items are ours: Figma draws them as Checkbox items.

```tsx
<DropdownMenu trigger={<Button variant="outline" trailingIcon={<ChevronDown />}>Account</Button>}>
  <DropdownMenuUserProfile name="Sam Rivera" handle="@sam" src={user.photo} onClick={openProfile} />
  <DropdownMenuSeparator />
  <DropdownMenuGroup label="My Account">
    <DropdownMenuItem icon={<RiUser3Line />} shortcut="⌘P" onClick={openProfile}>Profile</DropdownMenuItem>
    <DropdownMenuCheckboxItem checked={compact} onCheckedChange={setCompact}>Compact view</DropdownMenuCheckboxItem>
    <DropdownMenuSub icon={<RiUserAddLine />} label="Invite">
      <DropdownMenuItem>By email</DropdownMenuItem>
    </DropdownMenuSub>
  </DropdownMenuGroup>
  <DropdownMenuRadioGroup label="Panel position" value={position} onValueChange={setPosition}>
    <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
  </DropdownMenuRadioGroup>
  <DropdownMenuSeparator />
  <DropdownMenuItem type="destructive" icon={<RiLogoutBoxRLine />} onClick={signOut}>Sign out</DropdownMenuItem>
</DropdownMenu>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Dropdown Menu Trigger (Slot, Menu) | `<DropdownMenu trigger={<Button …/>}>`: the trigger gets `aria-haspopup`, `aria-expanded`, `aria-controls`; the menu opens 4 px below it; `align`: `start` (default) · `end`; `open` · `defaultOpen` · `onOpenChange` | `ds-dropdown` · `ds-dropdown__content--end` |
| Dropdown Menu Content (items) | the menu (popover, 8 px radius, outside border, Surface/Popover); `<DropdownMenuContent aria-label>` on its own stays in the page flow (context menus, panels) | `ds-dropdown__content` |
| Item Type = Item · Destructive | `<DropdownMenuItem type>`: a click runs `onClick` and closes the menu unless it calls `preventDefault()` | `ds-dropdown__item` · `--destructive` |
| Item Type = Checkbox · Menubar checkbox; Checked | `<DropdownMenuCheckboxItem type="checkbox" \| "menubar" checked defaultChecked onCheckedChange>`; `<DropdownMenuRadioGroup value onValueChange label>` + `<DropdownMenuRadioItem value type>`. Checking keeps the menu open | `--checkbox` · `--menubar` · `ds-dropdown__check` · `[aria-checked]` |
| Item Type = Sub trigger | `<DropdownMenuSub label icon>{items}</DropdownMenuSub>`: opens on hover, →, Enter or Space, to the right of its trigger | `ds-dropdown__sub` · `ds-dropdown__chevron` |
| Item State = Focus · Disabled | the item under the pointer or the keyboard (and an open sub trigger) · `disabled` (`aria-disabled`, skipped by the keys, 50 %) | `:focus` · `[data-highlighted]` (static previews) · `[aria-disabled]` |
| Item Inset | `inset` (the label lines up after a 20 px icon) | `--inset` |
| Item Leading slot (L slot) · Label · Shortcut (Keys) | `icon` (16 px icon or a 20 px picture such as `<Avatar size="xs" />`) · children · `shortcut` (shown only; the app handles the keys) | `ds-dropdown__icon` · `ds-dropdown__text` · `ds-dropdown__shortcut` |
| Dropdown Menu Label Size · Inset | `<DropdownMenuLabel size="xs" \| "sm" inset>`, or `<DropdownMenuGroup label labelSize labelInset>`, which also names the group | `ds-dropdown__label` · `--sm` · `--inset` |
| Dropdown Menu Separator | `<DropdownMenuSeparator />` | `ds-dropdown__separator` |
| — (Context Menu "Chat message" demo: Reactions) | `<DropdownMenuRow aria-label>` of `<DropdownMenuIconItem aria-label>`s: 32 px square items (an icon or an emoji) spread across the menu | `ds-dropdown__row` · `ds-dropdown__item--icon` |
| Dropdown Menu User Profile Size · State | `<DropdownMenuUserProfile size="lg" \| "default" name handle src initials>` (Hover = the pointer) | `ds-dropdown__profile` |

The menu opens below its trigger; like Select's, it does not flip near the edge of the viewport yet.

## Working on the design system

```sh
npm install
npm run storybook        # http://localhost:6006
npm run build            # tokens + React package
npm test                 # token generator tests
npm run typecheck
npm run build-storybook && npm run test:storybook   # every story renders, axe report, keyboard/mouse behaviour
npm run test:visual      # every component matches Figma: renders (pixels) and exact layer values (report: tools/figma-visual/out/report.html)
```

- Branches: `<kind>/<topic>`, e.g. `component/tag-input`, `fix/…`, `tokens/…`, `tooling/…`, `docs/…` (Claude prefixes `claude/`); see [branch names](docs/branches.md).
- Try components before they are merged: every branch has a Storybook preview, plus a Playground form; see [previews](docs/previews.md).
- New component: [playbook](docs/playbook.md), [Definition of Done](docs/definition-of-done.md), [Figma checklist](docs/figma-checklist.md). With Claude Code, the `figma-to-component` skill runs the whole path.
- New brand: [adding a brand](docs/adding-a-brand.md).
- Releases: add a changeset (`npm run changeset`); the Release workflow opens a "Version packages" PR on each push to `main` (or from "Run workflow" in the Actions tab), and merging it publishes. It runs only when the repository variable `RELEASE_ENABLED` is `true` (Settings → Secrets and variables → Actions → Variables) and Actions may open pull requests (Settings → Actions → General → Workflow permissions: read and write, and "Allow GitHub Actions to create and approve pull requests").

## Known design findings

These come from the Figma files, not the code:
- Hover (2.0): Input, Select and Checkbox have no Hover state (Button has one). On hover the code draws a dark 1.5 px stroke (`muted-foreground`, `stroke-width-3`) on Input, Select and choice cards, without new tokens; Figma should add the state.
- Input (2.0): State=Invalid's stroke and ring are bound to Tailwind class names ("border-destructive dark:border-destructive/50", "ring-destructive/20 …") instead of variables; the code uses `invalid-border` and `invalid-ring`. There is no Invalid + Focus variant; the code keeps the red stroke and ring while focused.
- Input (2.0): Input Group's prefix/suffix text is 13 px in the component but 14 px in the demo frames; the code follows the component.
- Input (2.0): Input Group Filled + Invalid keeps the value black, while Input Filled + Invalid turns it red; the code follows Input. Field Invalid shows the description and the error together; `error` replaces the description, as before.
- Input (2.0): disabled prefix/suffix text (muted at 50 %) is 2.1:1 (WCAG exempts disabled controls, but axe reports it).
- Select (2.0): State=Invalid's stroke and ring are bound to Tailwind class names, as in Input; unlike Input, the value stays black.
- Select (2.0): Select Item reserves the check mark's 16 px in a 32 px right padding when not selected; the code keeps an empty 16 px slot, which looks the same.
- Radius (2.0): Figma gives Button 8 px, Input, Textarea and Select 10 px (Select sm 8 px), the Select and Dropdown menus 14 px and their items 10 px. The design system uses one control radius: Button, Input, Select and the menus are 8 px, and what sits inside a 4 px inset takes 8 − 4 = 4 px (menu items, the Input's action button). Figma should follow.
- Checkbox (2.0): there is no indeterminate variant; the "Nested" and "Table rows" demos override a checked checkbox with the unchecked fill and a muted minus, which the code draws for `indeterminate`. Checked + Focus and Checked + Invalid draw the stroke in the primary colour, on the primary fill, so only the ring shows. The radius is 5 px, between the xs (4) and sm (6) tokens.
- Radio (2.0): Choice Card State=Hover fills the card with fill-1; the code keeps the dark 1.5 px hover stroke chosen for Input, Select and the Checkbox cards. In the Choice Card the radio sits level with the top of the title (16 px from the top), while the Field and the earlier Checkbox card demos centre the control on the title's 20 px line (18 px); the code centres it. Focus fills an unchecked card with the page background (`background`), which the code follows.
- Textarea (2.0): State=Invalid keeps a filled value in `foreground`, while Input turns it red (`destructive-foreground`); the code follows each. The "Character limit" demo's Progress circle shows 25 % for 85 of 280 characters (30 %); the code draws the real share.
- Checkbox (2.0): Field Orientation=Horizontal State=Invalid shows the description and the error together, as the vertical Field does; `error` replaces the description, as in Input and Select.
- Dropdown Menu (2.0): Item State=Focus fills with `fill-2`, while User Profile State=Hover uses `accent` (the same colour today, but two variables for one highlight). The User Profile chevron is `accent-foreground`, the Sub trigger chevron `muted-foreground`.
- Dropdown Menu (2.0): Inset=True keeps the Leading slot visible, so an inset item with an icon is indented twice; Inset is meant for items without an icon. There is no radio item: the "Radio" demo uses Checkbox items.
- Select (2.0): a disabled field's label at 50 % (Field State=Disabled) is 3.69:1. axe reports it for Select, whose combobox is not a native control, but not for Input, whose label belongs to a disabled input.
- Badge: Strong badges put white text on the accent colour, below WCAG AA's 4.5:1 for every colour but Neutral (Lime 1.91, Green 2.19, Cyan 2.38, Orange 2.9, Fuchsia 3.71, Pink 3.73, Blue 3.76, Red 3.97, Violet 4.43).
- Badge: Border has no effect on Strong badges, except Neutral, where Strong + Border looks exactly like Soft + Border. The Style value is spelled "Srong".
- Badge: Orange + Strong + Dot draws the dot in the badge's own colour, so it is invisible (every other colour uses white); the code uses white.
- Badge: the Orange Soft label still draws #ba420d although its variable (orange/700) is #a73b0c; the component has not picked up the library update. The code follows the variable.
- Badge: the Close Icon stays grey (Control buttons Style=Default): invisible on Strong badges and faint on dark Soft colours. The code gives it the label colour and a round hover in Pill badges.
- Button (2.0): Variant=Default draws Hover exactly like Default, so the primary button gives no hover feedback; in Focus the Default variant drops its inset highlight and Outline drops its control shadow (local effects instead of the effect styles).
- Status Badge: Offline uses icon/black-disabled, which is the same dark grey in Dark mode, so the dot disappears on dark backgrounds.
