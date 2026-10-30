# @helloantek design system

One UI kit, many brands, any platform. Components are designed in Figma, implemented once, verified against Figma in CI and themed per brand through tokens.

| Package | What it is | Who uses it |
|---|---|---|
| [`@helloantek/ds-tokens`](packages/tokens) | Figma variables → CSS, JS, Swift, Kotlin for every brand | every project |
| [`@helloantek/ds-css`](packages/css) | Component styles as plain CSS classes, built only on tokens | every web project |
| [`@helloantek/ds-react`](packages/react) | React components (markup + classes) | React / Next.js |
| [`apps/storybook`](apps/storybook) | Documentation with brand and colour-scheme switchers | design, development |

Why it is split this way: [ADR 0001](docs/adr/0001-layered-packages.md). It is based on the [Button pilot](docs/pilot/2026-10-button/REPORT.md).

**Source of truth:** Figma file Sort UI 2.0 (`4JnqgEbdlnKgiFrfmiwEZw`); Badge and Status Badge stay on Sort UI 1.3 (`4tiBR2hKd4yvQehtKhM9OY`), see the [migration plan](docs/migration-sort-ui-2.md). **Components:** Alert, Alert Dialog, Avatar (with Avatar Badge, Avatar Group and Status Badge), Badge, Button, Button Group, Card, Checkbox, Combobox, Context Menu, Dropdown Menu, Input, Marker, Radio, Select, Sonner, Switch, Textarea, Tooltip. Planned: see [backlog](docs/backlog.md). **Brands:** `theme-1`.

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
<Input blockStart="Client" defaultValue="Northlight Studio" />
<Input aria-label="Amount" prefix="$" action={<DropdownMenu align="end" trigger={<InputDropdown>USD</InputDropdown>}>…</DropdownMenu>} />
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
| Button (Outline or Ghost xs) in the T slot | `action={<InputAction>…</InputAction>}` (`variant="ghost"`; an icon alone makes it 24 px square); in the L / T slot as `prefix` / `suffix` (the stepper demo) | `ds-input__action` · `--ghost` |
| Input Group Dropdown (State = Default · Hover · Focus · Disabled) | `<InputDropdown icon>` as a `DropdownMenu` trigger, passed as `action`; disabled with its Input | `ds-input__dropdown` |
| Input Group Block start · Block end | `blockStart` (names the input without a `label`) · `blockEnd` (describes it); `blockDivider` for the "Dividers" demo | `ds-input--block` · `ds-input__row` · `ds-input__block` · `--end` · `--divider` |
| — (the "Loading" demo) | `loading` (`true` / `'start'` for the leading icon, `'end'` for the trailing one): a turning spinner and `aria-busy` | `ds-input__icon--spin` |
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

## Alert

A callout for a short message: Sort UI 2.0 **Alert** (Variant) with an icon, a title, a description and an action.

```tsx
<Alert icon={<CircleCheckIcon />} title="Booking confirmed" description="Your stay is booked for Sep 18 – 21." />
<Alert variant="destructive" icon={<CircleAlertIcon />} title="Payment failed" description="Your card was declined."
  action={<Button variant="outline" size="sm">Retry</Button>} />
```

| Figma property | React prop | CSS class |
|---|---|---|
| Variant = Default · Destructive | `variant`: `destructive` draws the title, icon and description in `destructive-foreground` | `ds-alert` · `ds-alert--destructive` |
| icon | `icon`: a 16 px icon using `currentColor`, decorative (hidden from screen readers) | `ds-alert__icon` |
| Title · Description | `title`; `description` or children (text, `<p>`s, a `<ul>`) | `ds-alert__title` · `ds-alert__description` |
| action | `action`: small buttons at the end | `ds-alert__action` |

It is a live region, so an alert added while the page is open is read out: `role="status"` by default and `role="alert"` when destructive. Pass another `role`, or `role={undefined}` for an alert that is part of the page from the start.

## Alert Dialog

A modal that asks to confirm an action: Sort UI 2.0 **Alert Dialog** (Size, Media, footer). A native `<dialog>` opened with `showModal()` and `role="alertdialog"`.

```tsx
<AlertDialog
  trigger={<Button variant="destructive">Delete account</Button>}
  variant="destructive"
  media={<TrashIcon />}
  title="Delete your account?"
  description="This permanently deletes your profile. You can't undo this."
>
  <AlertDialogCancel>Cancel</AlertDialogCancel>
  <AlertDialogAction variant="destructive" onClick={deleteAccount}>Delete account</AlertDialogAction>
</AlertDialog>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Size = default · sm | `size`: 448 px with the media beside the text, or 320 px centred with the buttons sharing the width | `ds-alert-dialog` · `ds-alert-dialog--sm` |
| Media | `media`: a 20 px icon on a 48 px tile; `variant="destructive"` tints it red (the "Destructive" demo) | `ds-alert-dialog__media` · `ds-alert-dialog--destructive` |
| Title · Description | `title` (`titleAs`, `h2` by default) names the dialog; `description` describes it | `ds-alert-dialog__title` · `__description` |
| footer | children: `AlertDialogCancel` (Outline) then `AlertDialogAction` (Default, or `variant="destructive"`) | `ds-alert-dialog__footer` |

Open it with `trigger`, or control it with `open` / `onOpenChange`. Focus starts on Cancel and stays in the dialog; the page behind is inert and does not scroll; Escape and Cancel close it and focus goes back to the trigger. A click on the backdrop does not close it, as it asks for an answer. The action closes it after `onClick` unless that calls `event.preventDefault()` (to keep it open while saving).

## Card

A surface for related content and actions: Sort UI 2.0 **Card** (Size, Media) with its slots as parts. Every part is optional; content gets the space above or below when it starts or ends the card.

```tsx
<Card as="article">
  <CardMedia><img src={photo} alt="Lake at dusk" /></CardMedia>
  <CardHeader title="Lakeside cabin" description="Entire cabin · 2 guests" action={<Button variant="outline" size="sm">Share</Button>} />
  <CardContent>A timber cabin on the shore of the lake…</CardContent>
  <CardFooter justify="between">…price… <Button>Reserve</Button></CardFooter>
</Card>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Size = default · sm | `<Card size>`: 20 px or 16 px around the parts; `as` (`div` · `article` · `section` · `li`) | `ds-card` · `ds-card--sm` |
| Media (16:9) | `<CardMedia ratio>` with an `<img>` (needs `alt`), `<video>` or `<svg>` | `ds-card__media` |
| header: Title · Description · action | `<CardHeader title titleAs description icon action>` (`titleAs` `h3` by default; set it to fit the page) | `ds-card__header` · `__title` · `__description` · `__icon` · `__action` |
| content | `<CardContent>` | `ds-card__content` |
| footer | `<CardFooter justify muted>`: `end` (default) · `start` · `between`; `muted` puts it on a fill-1 band (the "With action" demo) | `ds-card__footer` · `--start` · `--between` · `--muted` |

The card does not clip its content, so menus and tooltips inside it can overflow; media is rounded with the card's top corners.

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
| State = Disabled | `disabled` (the checkbox at 50 %; in a Field the label and description too) | `:disabled` |
| State = Invalid | `invalid`, or `error` in a Field (sets `aria-invalid`, the label turns red) | `[aria-invalid="true"]` |
| — | `indeterminate` (minus on the unchecked box; a click clears it) | `:indeterminate` |
| Field Orientation = Horizontal · Field Label · Description · Error | `label` · `caption` · `error` (replaces the description, as in Input); wired with `<label for>` and `aria-describedby` | `ds-field--horizontal` · `ds-field__control` · `ds-field__content` |
| Field Control = Start · End | `control`: `start` (default) · `end` | `ds-field--control-end` |
| Choice Card | `card`: the field in a bordered 16 px card, filled when checked; a click anywhere on the card toggles it; hover gives it a dark 1.5 px stroke | `ds-field--card` |
| Field Group | `<CheckboxGroup label caption error disabled>`: a `<fieldset>` with a legend, fields 12 px apart | `ds-fieldset` · `ds-fieldset__legend` · `ds-fieldset__fields` |

Without `label`, the types require `aria-label` or `aria-labelledby`. Other props (`name`, `value`, `required`, `ref`…) go to the input.

## Marker

A quiet line in a feed or a chat — an event, a date between messages, a step: Sort UI 2.0 **Marker** (Variant, Icon, Trailing icon).

```tsx
<Marker icon={<UserPlusIcon />}>Alex from Support joined the chat</Marker>
<Marker variant="separator">Today</Marker>
<Marker icon={<CheckIcon />}>Refund issued · <a href="/receipt">View receipt</a></Marker>
<Marker loading>Comparing guest reviews…</Marker>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Variant = Default · Separator · Border | `variant`: `separator` centres the text between two rules; `border` puts a rule 8 px under it | `ds-marker` · `ds-marker--separator` · `ds-marker--border` |
| Icon · Trailing icon | `icon` · `trailingIcon` (16 px, `currentColor`, decorative) | `ds-marker__icon` |
| Text | children; links inside stay muted and underlined | `ds-marker__content` |
| — (the "Loading" demo) | `loading`: a spinner in the foreground colour (still with reduced motion) | `ds-marker__icon--spin` |

It is plain text: give a list of steps `role="list"` / `listitem` (and `aria-current="step"`) or put markers in your own list, as the "Loading" story does.

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
| State = Disabled | `disabled` on a radio or the whole group (the radio at 50 %; in a Field the label and description too) | `:disabled` |
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
| — (one style in 2.0) | `variant`: `default` · `shadow` (+ Shadow/xs) · `soft` (borderless, tinted), as Input and Select | `ds-textarea--shadow` · `--soft` |
| State = Disabled | `disabled` (the box at 50 %, and the label) | `:disabled` |
| State = Invalid | `invalid`, or `error` (replaces the description) | `[aria-invalid="true"]` |
| Field Label · Description | `label` · `caption` | `ds-field__label` · `ds-field__caption` |
| Field Label trail add-on: count · Progress circle | `showCount` with `maxLength` (hard) or `limit` (soft; over it the count is negative and red, and the textarea is invalid). The count is announced as "195 of 280 characters left". | `ds-field__label-row` · `ds-field__addon` · `ds-textarea__count` · `ds-textarea__progress` |
| — (ours) | `resizable`: a vertical drag handle | `ds-textarea--resize` |

Hover draws the dark 1.5 px stroke of Input and Select. Other props (`rows`, `name`, `ref`…) go to the textarea.

## Separator

A 1 px line between groups of content: Sort UI 2.0 **Separator** (Orientation).

```tsx
<Separator />
<div style={{ display: 'flex', gap: 16 }}>
  248 posts <Separator orientation="vertical" /> 12.4k followers
</div>
<Separator decorative={false} />   {/* role="separator": sections a screen reader should hear as separate */}
```

| Figma property | React prop | CSS class |
|---|---|---|
| Orientation = Horizontal · Vertical | `orientation`: `horizontal` (default) fills the container's width; `vertical` takes the height of its row (set `height` for a shorter line) | `ds-separator` · `ds-separator--vertical` |
| — | `decorative` (default `true`: `role="none"`); `false` gives `role="separator"` and `aria-orientation="vertical"` when upright | — |

The line is the element's own 1 px `border` (`--ds-border`), so it works in any flex or grid layout and in every brand and scheme.

## Sonner

Toasts: short notifications that close on their own. Sort UI 2.0 **Sonner** (Type, Title, Description, actions, Close). Mount `<Toaster />` once near the root and call `toast()` anywhere.

```tsx
<Toaster />                                   // position, duration (4000), closeButton, visibleToasts (3), stacked

toast('Table booked for 4', { description: 'Friday at 7:30 PM', action: { label: 'Undo', onClick: undo } });
toast.success('Your order is on its way');    // .info · .warning · .error · .loading
toast.promise(upload(), { loading: 'Uploading…', success: 'Uploaded', error: 'Upload failed' });
const id = toast.loading('Saving…'); toast.success('Saved', { id });   // update in place
toast.dismiss(id);                            // or toast.dismiss() for all
```

| Figma property | React | CSS class |
|---|---|---|
| Type = Default · Success · Info · Warning · Error · Loading | `toast.<type>()` or `type`; the icon and its colour (Default has none, Loading spins) | `ds-toast` · `ds-toast--success` · `--info` · `--warning` · `--error` · `--loading` |
| Title · Description | the first argument; `description` | `ds-toast__title` · `ds-toast__description` |
| actions | `action` (Default xs button) and `cancel` (Secondary xs); a click closes the toast unless `onClick` calls `event.preventDefault()` | `ds-toast__actions` |
| Close | `closeButton` on the Toaster or the toast: a round button on the top-left corner | `ds-toast__close` |
| — | `<Toaster position>`: `top-left` · `top-center` · `top-right` · `bottom-left` · `bottom-center` · `bottom-right` (default) | `ds-toaster` · `ds-toaster--<position>` |
| — (not in Figma) | `<Toaster stacked>`: a pile, the newest in front and up to two older ones 14 px out behind it, 5 % smaller each; hover or focus inside spreads it into the list | `ds-toaster--stacked` (+ `data-expanded`) |

`<Toast>` draws one toast on its own (for documentation or a custom stack). Accessibility: toasts are added to a polite live region, so screen readers read them out without moving focus; they wait while the pointer is over them, focus is inside or the page is hidden; Alt+T moves focus to the region and Escape returns it. Put anything people must act on in the page too, as a toast closes on its own. By default toasts are listed 14 px apart (the newest nearest the edge), as in Figma; `stacked` piles them up like the Sonner library.

## Switch

A setting that takes effect at once: a native checkbox with `role="switch"`, drawn as the Sort UI 2.0 **Switch**, with **Field** Orientation=Horizontal for labels (the switch at the end, as in every demo) and the choice card for `card`. Space and a click on the label toggle it. Use a Checkbox for choices sent with a form.

```tsx
<Switch label="Download over Wi-Fi only" caption="Cellular data is never used for downloads." checked={wifiOnly} onCheckedChange={setWifiOnly} />
<SwitchGroup label="Collections">
  <Switch size="sm" label={<>Liked songs <span className="ds-field__helper">1,204 tracks</span></>} defaultChecked />
</SwitchGroup>
<Switch card label="Sleep timer" caption="Stops playback after 30 minutes." />
<Switch aria-label="Autoplay" />
```

| Figma property | React prop | CSS class |
|---|---|---|
| Size = default · sm | `size`: `default` (32 × 20) · `sm` (24 × 16) | `ds-switch` · `ds-switch--sm` |
| Checked | `checked` · `defaultChecked` · `onCheckedChange(checked)` | `ds-switch__input:checked` · `ds-switch__thumb` |
| State = Focus | keyboard focus (ring stroke and a 3 px ring) | `:focus-visible` |
| State = Disabled | `disabled` (the switch at 50 %; in a Field the label and description too) | `:disabled` |
| State = Invalid | `invalid`, or `error` (replaces the description) | `[aria-invalid="true"]` |
| Field Label · Helper · Description · Control | `label` (a `ds-field__helper` span adds the muted Helper) · `caption` · `control`: `end` (default) · `start` | `ds-field--horizontal` · `ds-field__helper` · `ds-field--control-end` |
| Choice card (the "Choice cards" demo) | `card` (filled when on; a click anywhere toggles; focus rings the card; hover draws the dark stroke) | `ds-field--card` |
| Field Group | `<SwitchGroup label caption error disabled>`: a `<fieldset>`, switches 12 px apart | `ds-fieldset` |

Without `label`, the types require `aria-label` or `aria-labelledby`. Other props (`name`, `value`, `ref`…) go to the input.

## Tooltip

Short help for a control: the WAI-ARIA tooltip. It describes its trigger (`aria-describedby`), shows on hover after `delay` ms (500 by default) or at once on keyboard focus, stays while the pointer moves onto it, and hides on Escape, blur or when the pointer leaves. A click does not show it. Sort UI 2.0 **Tooltip** (Side, Leading slot, Trailing slot) with **Kbd** Variant=Inverted, Size=sm for shortcuts.

```tsx
<Tooltip content="Refund this payment">
  <Button variant="outline">Refund</Button>
</Tooltip>
<Tooltip content="Search payments" shortcut={['⌘', 'K']} side="bottom">
  <Button variant="outline" aria-keyshortcuts="Meta+K">Search</Button>
</Tooltip>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Side = top · bottom · left · right | `side` (default `top`): 8 px from the trigger, centred, the arrow pointing at it | `ds-tooltip--top` · `--bottom` · `--left` · `--right` |
| Label | `content` (wraps at 320 px) | `ds-tooltip__text` |
| Leading slot (L slot) | `icon` (16 px, `currentColor`) | `ds-tooltip__icon` |
| Trailing slot with a Kbd Group | `shortcut`: the keys, e.g. `['⌘', 'K']` (2 px apart; the end padding drops to 4 px) | `ds-tooltip__keys` · `ds-tooltip__kbd` |
| — | `delay` · `open` / `defaultOpen` / `onOpenChange` · `className` | `ds-tooltip-anchor` |

The trigger must take focus and keep its own name; the tooltip is help, not a label. Like the menus, the tooltip does not flip near the edge of the viewport yet.

## Combobox

A text field that filters a list: Sort UI 2.0 **Combobox** (Size, Value, State, Leading icon / slot, Chips) with Combobox Content (the Select's options, groups and separators) and Combobox Empty. The WAI-ARIA combobox with list autocomplete.

```tsx
<Combobox label="New owner" options={people} leadIcon={<SearchIcon />} placeholder="Search teammates" />
<Combobox multiple aria-label="Frameworks" options={frameworks} defaultValue={['sveltekit', 'nextjs']} />
```

| Figma property | React prop | CSS class |
|---|---|---|
| Size = default · lg · xl | `size` (32 · 36 · 40 px) | `ds-field--default` · `--lg` · `--xl` on `ds-combobox` |
| — (one style in 2.0) | `variant`: `default` · `shadow` (+ Shadow/xs) · `soft` (borderless, tinted), as Input and Select | `ds-combobox__field--shadow` · `--soft` |
| Value = Placeholder · Filled | `placeholder`; `value` / `defaultValue` / `onValueChange` | `ds-combobox__input` |
| State = Focus · Invalid · Disabled | focus inside the field; `error`; `disabled` | `ds-combobox__field` · `--invalid` · `--disabled` |
| Leading icon · Leading slot | `leadIcon` (16 px); `leadMedia` (20 px, e.g. an Avatar) | `ds-combobox__icon` · `ds-combobox__media` |
| Chips | `multiple`: each value is a chip with a × (Backspace in the field removes the last one) | `ds-combobox__chip` · `__chip-label` · `__chip-remove` |
| Combobox Content | `options`: the Select's `SelectOption` (`description`, `icon`, `media`, `caption`, `disabled`), groups and separators | `ds-select__menu` · `ds-select__option` … (select.css) |
| Combobox Empty | `emptyMessage` (default "No results.") | `ds-combobox__empty` |

Typing filters the options (the label contains the text, ignoring case and accents; pass `filter` to change it) and reads out the number of results; ↓ / ↑ move, Enter picks, Escape closes the list and, when it is closed, clears the text. A click on the chevron opens and closes the list. A single field shows the selected label; emptying it and leaving clears the value. `name` submits the value through a hidden input (one per value with `multiple`), and resetting the form restores `defaultValue` and clears typed text.

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
- Input Group (2.0): Input Group Dropdown Focus puts the button on the page background with a 3 px ring, while other controls use a 2 px ring with a stroke; the code follows Figma. The "Button" demo's last field joins a Default button to the input's edge; the code offers `addonAfter` with any content but no joined-button style yet.
- Input (2.0): Input Group Filled + Invalid keeps the value black, while Input Filled + Invalid turns it red; the code follows Input. Field Invalid shows the description and the error together; `error` replaces the description, as before.
- Input (2.0): disabled prefix/suffix text (muted at 50 %) is 2.1:1 (WCAG exempts disabled controls, but axe reports it).
- Select (2.0): State=Invalid's stroke and ring are bound to Tailwind class names, as in Input; unlike Input, the value stays black.
- Select (2.0): Select Item reserves the check mark's 16 px in a 32 px right padding when not selected; the code keeps an empty 16 px slot, which looks the same.
- Radius (2.0): Figma gives Button 8 px, Input, Textarea and Select 10 px (Select sm 8 px), the Select and Dropdown menus 14 px and their items 10 px. The design system uses one control radius: Button, Input, Select and the menus are 8 px, and what sits inside a 4 px inset takes 8 − 4 = 4 px (menu items, the Input's action button). Figma should follow.
- Checkbox (2.0): there is no indeterminate variant; the "Nested" and "Table rows" demos override a checked checkbox with the unchecked fill and a muted minus, which the code draws for `indeterminate`. Checked + Focus and Checked + Invalid draw the stroke in the primary colour, on the primary fill, so only the ring shows. The radius is 5 px, between the xs (4) and sm (6) tokens.
- Radio (2.0): Choice Card State=Hover fills the card with fill-1; the code keeps the dark 1.5 px hover stroke chosen for Input, Select and the Checkbox cards. In the Choice Card the radio sits level with the top of the title (16 px from the top), while the Field and the earlier Checkbox card demos centre the control on the title's 20 px line (18 px); the code centres it. Focus fills an unchecked card with the page background (`background`), which the code follows.
- Field (2.0): State=Disabled (Orientation=Horizontal) fades only the label to 50 %; the code fades the description too, for Checkbox, Radio and Switch.
- Alert (2.0): the component set's Destructive sample has a Ghost action and the "Destructive" demo an Outline one; both work. The icons are 17.3 px Lucide instances in a 16 × 20 box (the circle is 14.4 px); the stories pass 17.3 px icons, and any size centres in the box. The Destructive description is `alpha/destructive/90` (#fb2c36 at 90 %): 3.5:1 on the card in Light and 4:1 in Dark, under the 4.5:1 WCAG AA asks for 14 px text; the code draws it in `destructive-foreground` like the title (6.4:1 and 6.2:1).
- Sonner (2.0): Success draws its icon in blue (`palette/blue-solid`), not green; the code follows Figma. The Default type's sample action is filled with `foreground`, the other types' with `primary` (the same colour in theme-1); the code uses the Button's Default variant. The Close icon's colour is not readable from the file; the code uses `popover-foreground`.
- Alert Dialog (2.0): Figma draws no backdrop; the code dims the page with `alpha/black/50`. The "Destructive" demo tints the media with `alpha/destructive/10` and a `destructive-foreground` icon, which the code offers as `variant="destructive"`; the component set has only the fill-2 tile.
- Combobox (2.0): the field's radius is 10 px (radius/lg) and the menu's 14 px, while Input and Select draw 8 px; the code uses 8 px for all fields and menus. State=Default and Disabled lay the 1 px stroke out, so they are 2 px taller than Focus and Invalid (34 instead of 32 px); the code keeps one height per size. The "Button trigger" demo (a button that opens a list with a search field) is not built yet.
- Marker (2.0): the "Loading" demo's spinner is a Spinner instance in `foreground`, while the other icons are muted; the code draws it with `loading`. The Border variant's rule is a centred 1 px line on the bottom edge (half outside the box); the code draws it inside.
- Separator (2.0): the line is a centred 1 px stroke on a 0 px frame, so it takes no space in Figma's layouts (the "Separator" demo puts 16 px between the intro and the line and 16 px after it, 32 px in all); the code's line is 1 px in the layout, so the same gaps add up to 33 px. The "Vertical" demo gives each line a fixed height (20 px between the metadata, 16 px between the icon buttons); the code stretches an upright line to its row and takes `height` for a shorter one.
- Card (2.0): the radius is 20 px (radius-3xl), larger than the 8 px control radius; the code follows Figma, as cards are surfaces, not controls. The "Stats" demo puts 4 px between the label and the value while the header frame has 6 px; the stories follow the component.
- Tooltip (2.0): the "Side" demo puts left and right tooltips 14 px from the button and top and bottom ones 8 px; the code uses 8 px on every side. Left and right arrows are drawn smaller (7.2 px instead of 8 px squares); the code uses one 8 px arrow. The "Long label" demo wraps the text at 248 px although the component allows 320 px; the code wraps at 320 px.
- Switch (2.0): the Thumb's stroke is a white gradient (30 % at the top to nothing; 25 % when on) and its unchecked fill has an 8 % white highlight; the code draws a 1 px white rim along the top and uses the 10 % token. Both are invisible on the white thumb and only show in Dark.
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
