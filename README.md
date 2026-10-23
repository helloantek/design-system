# @helloantek design system

One UI kit, many brands, any platform. Components are designed in Figma, implemented once, verified against Figma in CI and themed per brand through tokens.

| Package | What it is | Who uses it |
|---|---|---|
| [`@helloantek/ds-tokens`](packages/tokens) | Figma variables → CSS, JS, Swift, Kotlin for every brand | every project |
| [`@helloantek/ds-css`](packages/css) | Component styles as plain CSS classes, built only on tokens | every web project |
| [`@helloantek/ds-react`](packages/react) | React components (markup + classes) | React / Next.js |
| [`apps/storybook`](apps/storybook) | Documentation with brand and colour-scheme switchers | design, development |

Why it is split this way: [ADR 0001](docs/adr/0001-layered-packages.md). It is based on the [Button pilot](docs/pilot/2026-10-button/REPORT.md).

**Source of truth:** Figma file `4tiBR2hKd4yvQehtKhM9OY`. **Components:** Avatar (with Status Badge), Badge, Button, Input, Select. Planned: see [backlog](docs/backlog.md). **Brands:** `theme-1`, `theme-2`.

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

<Button variant="secondary" leadIcon={<RiAddLine />}>Add</Button>
```

Colour scheme: `data-ds-scheme="dark"` on `<html>` (or any section), `"system"` to follow the OS. Light is the default.

### Other web frameworks (Vue, Svelte, Angular, plain HTML)

Load the same two CSS files and use the classes; each component's markup is documented at the top of its CSS file:

```html
<button class="ds-button ds-button--primary ds-button--md ds-button--rounded">
  <span class="ds-button__label">Save</span>
</button>
```

### iOS / Android

`@helloantek/ds-tokens` ships `ios/DSColor.swift` + `ios/<Brand>Tokens.swift` and `android/<Brand>Tokens.kt` (plain values, no UI framework dependency). Native components are not part of the system yet.

## Button

| Figma property | React prop | CSS class |
|---|---|---|
| Style | `variant`: `primary` · `secondary` · `dashed` · `soft` · `ghost` · `ghost-muted` · `destructive` | `ds-button--<variant>` |
| Size | `size`: `lg` · `md` · `sm` · `xs` · `2xs` | `ds-button--<size>` |
| Shape | `shape`: `rounded` · `pill` | `ds-button--<shape>` |
| Variant = Icon only | `icon` + required `aria-label` | `ds-button--icon-only` |
| State = Hover / Press / Focus | CSS | `:hover` · `:active` · `:focus-visible` |
| State = Disabled | `disabled` | `:disabled` |
| State = Loading | `loading` (keeps width, `aria-busy`, blocks `onClick`) | `[data-loading]` |
| Lead Icon / Tail Icon / Badge | `leadIcon` · `tailIcon` · `badge` | `__icon` · `__badge` |

## Avatar

A person's picture, initials or a placeholder, with optional status badges. Covers every Figma Variant, Size and Shape, the Ring, Top badge and Bottom badge, and the Status Badge component.

```tsx
<Avatar src={user.photo} name="Sam Rivera" />
<Avatar initials="SR" name="Sam Rivera" size="lg" shape="rounded" />
<Avatar name="Unknown user" bottomBadge={<StatusBadge variant="offline" />} />
<Avatar src={user.photo} name="Sam Rivera" ring topBadge={<StatusBadge variant="checkmark" />} />
```

| Figma property | React prop | CSS class |
|---|---|---|
| Variant (Userpic, Initials, Empty) | set by the content: `src` · `initials` · neither (a picture that fails to load falls back) | `ds-avatar__image` > `img` · `ds-avatar--initials` + `ds-avatar__initials` · `ds-avatar__placeholder` |
| Size | `size`: `2xs` · `xs` · `sm` · `md` · `lg` · `xl` · `2xl` · `3xl` | `ds-avatar--<size>` |
| Shape | `shape`: `circular` · `rounded` | `ds-avatar--<shape>` |
| Ring | `ring` | `ds-avatar--ring` |
| Top badge / Bottom badge | `topBadge` · `bottomBadge` (any node, usually a `StatusBadge`) | `ds-avatar__badge--top` · `--bottom` |
| — | `name`: the accessible name (without it the avatar is decorative) | |
| Status Badge · Variant | `<StatusBadge variant>`: `checkmark` · `online` · `offline` · `notification` · `icon` (+ `icon`) · `logo` (+ `image`); `label` overrides the spoken name | `ds-status-badge--<variant>` |

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

Label, input and caption in one field. Covers Figma Variant = Default, Shortcut, Add-on, Inline add-on and Tail button; the remaining Figma variants are separate components ([backlog](docs/backlog.md)).

```tsx
<Input label="Email" caption="We never share it" placeholder="mail@domain.com" leadIcon={<RiAtLine />} />
<Input label="Website" addonBefore="https://" addonAfter=".com" />
<Input label="Invite" placeholder="mail@domain.com" action={<InputAction onClick={send}>Send</InputAction>} />
<Input label="Email" error="Enter a valid address" />
```

| Figma property | React prop | CSS class |
|---|---|---|
| Style | `variant`: `default` · `shadow` · `soft` | `ds-input--<variant>` |
| Size | `size`: `lg` · `sm` | `ds-field--<size>` |
| State = Placeholder / Filled | `placeholder` / `value` | native |
| State = Active | focus | `:focus-within` |
| State = Failed | `error` (replaces the caption, sets `aria-invalid`) | `ds-input--invalid` · `ds-field__caption--error` |
| State = Disabled | `disabled` | `ds-input--disabled` |
| Label · Caption | `label` · `caption` (wired with `for` / `aria-describedby`) | `ds-field__label` · `ds-field__caption` |
| Lead Icon · Tail Icon | `leadIcon` · `tailIcon` | `ds-input__icon` |
| Variant = Shortcut | `shortcut` (also `aria-keyshortcuts`) | `ds-input__shortcut` |
| Variant = Inline add-on | `prefix` · `suffix` | `ds-input__affix` |
| Variant = Add-on | `addonBefore` · `addonAfter` | `ds-input__addon` |
| Variant = Tail button | `action={<InputAction>…</InputAction>}` | `ds-input__action` |

## Select

A field that opens a list of options: the WAI-ARIA select-only combobox (arrows, Home/End, PageUp/PageDown, Enter/Space, Escape, Tab, type-ahead). Covers Figma Select Input Variant = Default, Multi-select, Tags and Avatar, and Select Menu Items Type = Default, Default Large, Country Flag, Label, Caption and Divider with every Select type (check, Checkbox, Radio Button); the other variants, the menu search and the menu button are in the [backlog](docs/backlog.md).

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
| Style | `variant`: `default` · `shadow` · `soft` | `ds-select__trigger--<variant>` |
| Size | `size`: `lg` · `sm` | `ds-field--<size>` |
| State = Placeholder / Filled | `placeholder` / `value` · `defaultValue` | `ds-select__value--placeholder` |
| Variant = Multi-select | `multiple` (`value`/`defaultValue` are arrays; options toggle and the menu stays open; the trigger lists the labels) | `[aria-multiselectable]` on the menu |
| Variant = Avatar; Menu Items Type = Avatar | option `media: <Avatar size="xs" shape="rounded" …/>`; a single select shows the selected option's `media` in place of the lead icon (also for flags) | `ds-select__media` in the option and the trigger |
| Variant = Tags | `multiple tags`: each value is a `Badge` (sm, Neutral, Soft, Border, Close Icon). × removes it with the mouse, Backspace/Delete removes the last one, the menu toggles any; removals are announced. Tags that do not fit wrap onto more rows (default), or with `tagsOverflow="count"` stay on one row with a "+N" badge (its tooltip and screen-reader text name the hidden values); Figma clips one row. No buttons inside the combobox: the × is a pointer target only. | `ds-select__tags` · `--count` · `ds-select__more` · `ds-select__status` |
| State = Active | focus (the menu opens on click or keys) | `:focus` |
| State = Failed | `error` (replaces the caption, sets `aria-invalid`) | `ds-select__trigger--invalid` |
| State = Destructive (drawn as disabled) | `disabled` | `ds-select__trigger--disabled` |
| Label · Caption | `label` · `caption` (wired with `aria-labelledby` / `aria-describedby`) | `ds-field__label` · `ds-field__caption` |
| ❖ Lead Icon · ❖ Tail Icon | `leadIcon` · `tailIcon` | `ds-select__icon` |
| ↩ Placeholder | `placeholder` | |
| Menu Items Type = Default | `options: [{ value, label, caption?, icon?, badge?, disabled? }]` | `ds-select__option` |
| Menu Items State = Hover · Active · Disabled | highlight (mouse or keys) · selected · `disabled` | `[data-highlighted]` · `[aria-selected]` · `[aria-disabled]` |
| Menu Items Select type = Default / Checkbox / Radio Button | `indicator`: `check` · `checkbox` · `radio` | `ds-select__check` · `ds-select__box--checkbox` · `ds-select__box--radio` |
| Menu Items Type = Default Large | option `description` (second line; the icon sits in a 36 px circle, the check on the right) | `ds-select__option--large` |
| Menu Items Type = Country Flag | option `media` (20 px picture, e.g. a flag `<svg>`) | `ds-select__media` |
| Menu Items Type = Caption | `{ type: 'caption', label }` (read as the menu's description) | `ds-select__note` |
| Menu Items Type = Label | `{ label, caption?, options }` (a group) | `ds-select__group-label` |
| Menu Items Type = Divider | `{ type: 'separator' }` | `ds-select__separator` |

Forms: `name` submits the value through a hidden input (one per value with `multiple`, read them with `formData.getAll(name)`), and resetting the form restores `defaultValue`. The menu opens below the field and scrolls past 296 px; it does not flip near the bottom of the viewport yet.

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
- Releases: add a changeset (`npm run changeset`); merging the "Version packages" PR publishes. Publishing is off until the repository variable `RELEASE_ENABLED` is set to `true` (Settings → Secrets and variables → Actions → Variables).

## Known design findings

These come from the Figma palette, not the code (details in the pilot report):
- Destructive white text is 3.9–3.97:1 against WCAG AA's 4.5:1.
- Theme-2 Primary's text shadow lowers contrast to 3.25:1.
- Ghost Muted icon-only changes icon colour on hover.
- The `Tooltip` property has no layer.
- Input: State=Failed adds a local shadow in Style=Default and Soft that those styles have nowhere else; the label row has an empty 78 px "Tail" frame with no property.
- Input: disabled prefix/suffix text is 1.83:1 (WCAG exempts disabled controls, but axe reports it).
- Select: State=Destructive is drawn as a disabled field (grey background, hint text), not as an error; Failed is the error state. The name invites misuse.
- Select: State=Failed has no extra shadow in Style=Default and Soft, while Input does; one of the two is likely unintended.
- Select: the Active variant shows the placeholder while its menu has "Simon Alt" checked.
- Select Menu Items Type=Divider: the line is centred on a half pixel, so Figma renders it as two faint rows; the code draws one crisp row.
- Badge: Strong badges put white text on the accent colour, below WCAG AA's 4.5:1 for every colour but Neutral (Lime 1.91, Green 2.19, Cyan 2.38, Orange 2.9, Fuchsia 3.71, Pink 3.73, Blue 3.76, Red 3.97, Violet 4.43).
- Badge: Border has no effect on Strong badges, except Neutral, where Strong + Border looks exactly like Soft + Border. The Style value is spelled "Srong".
- Badge: Orange + Strong + Dot draws the dot in the badge's own colour, so it is invisible (every other colour uses white); the code uses white.
- Badge: the Orange Soft label still draws #ba420d although its variable (orange/700) is #a73b0c; the component has not picked up the library update. The code follows the variable.
- Badge: the Close Icon stays grey (Control buttons Style=Default): invisible on Strong badges and faint on dark Soft colours. The code gives it the label colour and a round hover in Pill badges.
- Avatar: Rounded uses radius/xs up to size md and radius/sm from lg, but Initials use radius/sm at every size; the ring's corners (6/8/10 px) and the badge offsets are fixed numbers that change irregularly between sizes (e.g. Rounded lg badges stick out 2 px, md and xl 4 and 6 px). The code follows Figma.
- Avatar: in Theme-1 Dark, Initials put text/white-default (#18181b there) on bg/basic/gray-accent (#6f6f77): 3.6:1, below AA.
- Avatar: the Empty picture is a raster image (#f4f4f5 / #d4d4d8) with no variables; the code draws it with bg/basic/gray-subtle and border/darker (#d5d5d8 on that background), so it follows the colour scheme.
- Select Tags: the Active variant's menu shows Avatar items (Figma reuses the Avatar menu), and the tags sit on one clipped row, so values past the field width disappear; the code wraps them.
- Select Menu Items Type=Avatar: the item overrides its Avatar's fill to bg/basic/gray-contrast (#18181b), which the Avatar component has no property for; the code uses the Avatar's own bg/basic/gray-accent.
- Status Badge: Offline uses icon/black-disabled, which is the same dark grey in Dark mode, so the dot disappears on dark backgrounds.
