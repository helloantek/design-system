# @helloantek design system

One UI kit, many brands, any platform. Components are designed in Figma, implemented once, verified against Figma in CI and themed per brand through tokens.

| Package | What it is | Who uses it |
|---|---|---|
| [`@helloantek/ds-tokens`](packages/tokens) | Figma variables → CSS, JS, Swift, Kotlin for every brand | every project |
| [`@helloantek/ds-css`](packages/css) | Component styles as plain CSS classes, built only on tokens | every web project |
| [`@helloantek/ds-react`](packages/react) | React components (markup + classes) | React / Next.js |
| [`apps/storybook`](apps/storybook) | Documentation with brand and colour-scheme switchers | design, development |

Why it is split this way: [ADR 0001](docs/adr/0001-layered-packages.md). It is based on the [Button pilot](docs/pilot/2026-10-button/REPORT.md).

**Source of truth:** Figma file `4tiBR2hKd4yvQehtKhM9OY`. **Components:** Button, Input, Select. Planned: see [backlog](docs/backlog.md). **Brands:** `theme-1`, `theme-2`.

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

A field that opens a list of options: the WAI-ARIA select-only combobox (arrows, Home/End, PageUp/PageDown, Enter/Space, Escape, Tab, type-ahead). Covers Figma Select Input Variant = Default and Select Menu Items Type = Default, Label and Divider; the other variants, the menu search and the menu button are in the [backlog](docs/backlog.md).

```tsx
<Select label="Owner" placeholder="Select a user" options={users} value={owner} onValueChange={setOwner} leadIcon={<RiUser3Line />} />
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
| State = Active | focus (the menu opens on click or keys) | `:focus` |
| State = Failed | `error` (replaces the caption, sets `aria-invalid`) | `ds-select__trigger--invalid` |
| State = Destructive (drawn as disabled) | `disabled` | `ds-select__trigger--disabled` |
| Label · Caption | `label` · `caption` (wired with `aria-labelledby` / `aria-describedby`) | `ds-field__label` · `ds-field__caption` |
| ❖ Lead Icon · ❖ Tail Icon | `leadIcon` · `tailIcon` | `ds-select__icon` |
| ↩ Placeholder | `placeholder` | |
| Menu Items Type = Default | `options: [{ value, label, caption?, icon?, badge?, disabled? }]` | `ds-select__option` |
| Menu Items State = Hover · Active · Disabled | highlight (mouse or keys) · selected · `disabled` | `[data-highlighted]` · `[aria-selected]` · `[aria-disabled]` |
| Menu Items Type = Label | `{ label, caption?, options }` (a group) | `ds-select__group-label` |
| Menu Items Type = Divider | `{ type: 'separator' }` | `ds-select__separator` |

Forms: `name` submits the value through a hidden input, and resetting the form restores `defaultValue`. The menu opens below the field and scrolls past 296 px; it does not flip near the bottom of the viewport yet.

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
