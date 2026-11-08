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

On phones, components turn off the browser's grey tap highlight (they draw their own states); `-webkit-tap-highlight-color` on your own element brings it back.

### Other web frameworks (Vue, Svelte, Angular, plain HTML)

Load the same two CSS files and use the classes; each component's markup is documented at the top of its CSS file:

```html
<button class="ds-button ds-button--default ds-button--size-default">
  <span class="ds-button__label">Save</span>
</button>
```

### iOS / Android

`@helloantek/ds-tokens` ships `ios/DSColor.swift` + `ios/<Brand>Tokens.swift` and `android/<Brand>Tokens.kt` (plain values, no UI framework dependency). Native components are not part of the system yet.

## Breadcrumb

The path to the current page: the Sort UI 2.0 **Breadcrumb** with **Breadcrumb Item**, **Breadcrumb Separator** and **Breadcrumb Ellipsis**.

```tsx
<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbEllipsis>
    <DropdownMenuItem>Documents</DropdownMenuItem>
  </BreadcrumbEllipsis>
  <BreadcrumbItem menu={<DropdownMenuItem>Archive</DropdownMenuItem>}>Projects</BreadcrumbItem>
  <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
</Breadcrumb>
<BreadcrumbItem asChild><Link to="/projects">Projects</Link></BreadcrumbItem>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Breadcrumb Item type=link | `href` (or `asChild` for a router link) | `ds-breadcrumb__link` |
| type=active | `current` | `ds-breadcrumb__page` |
| type=dropdown | `menu` (DropdownMenuItems), `menuLabel` | `ds-breadcrumb__link--menu` |
| state=hover | `:hover` | — |
| Icon / Icon swap | `icon` | — |
| Breadcrumb Separator Type | `separator` on the Breadcrumb: `chevron` (default), `slash`, `dot` | `ds-breadcrumb__separator`, `--slash`, `--dot` |
| Breadcrumb Ellipsis | `BreadcrumbEllipsis` with DropdownMenuItems (`aria-label`, default "Show more pages") | Ghost xs icon Button |

It is a `nav` landmark (named "Breadcrumb" unless you pass `aria-label`) holding an ordered list. Breadcrumb draws the separators between the items; they are `aria-hidden`, so a screen reader lists only the steps. The current page is text with `aria-current="page"`. The Ellipsis and a dropdown item open a Dropdown Menu (Enter, Space or Down; Escape returns focus). Long trails wrap.

## Bubble

A chat message: Sort UI 2.0 **Bubble** (Variant, Text, Reactions) and **Bubble Reactions**.

```tsx
<BubbleGroup>
  <Bubble variant="muted">Morning! Is the 2.4 build ready?</Bubble>
  <Bubble variant="muted" reactions="😍">QA signed off on the new checkout.</Bubble>
</BubbleGroup>
<BubbleGroup align="end" footer="Sent 9:51 AM · Read by Mira">
  <Bubble>Rolling out now</Bubble>
</BubbleGroup>
<Bubble variant="ghost">A long answer as plain text across the width…</Bubble>
<Bubble collapsible>A very long message…</Bubble>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Variant = Default · Muted · Ghost · Destructive | `variant`: card with a 1 px border and a soft shadow (yours) · fill-2 (theirs) · plain text across the width · destructive border at 70 % (Figma 30 %) and text | `ds-bubble` · `--muted` · `--ghost` · `--destructive` · `ds-bubble__content` |
| Text | children: 13/20, up to 320 px wide (`--bubble-max-width`), line breaks kept | `ds-bubble__text` |
| Reactions · Bubble Reactions | `reactions` (emoji, a count, a short reply) in a muted pill 7 px over a corner; `reactionsPlacement` `bottom-end` (default) · `bottom-start` (default for end bubbles) · `top-start` · `top-end` | `ds-bubble__reactions` · `ds-bubble--reactions-…` |
| "Long message" demo | `collapsible` (`true` = 8 lines, or a number): the text is clamped and a "Show more" / "Show less" toggle (`moreLabel`, `lessLabel`) with `aria-expanded` appears when it is cut | `ds-bubble__text--clamped` · `ds-bubble__more` |
| Bubble Group (demos) | `<BubbleGroup align footer>`: one sender's bubbles 8 px apart, at the start or the end, with a 12/16 meta line | `ds-bubble-group` · `--end` · `__footer` |

Bubbles are plain text containers; put a conversation in an element with `role="log"` and a name so new messages are announced.

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

## Aspect Ratio

A box that keeps a width-to-height ratio, filled by its picture: Sort UI 2.0 **Aspect Ratio** (ratio).

```tsx
<AspectRatio ratio="16:9" rounded>
  <img src="/cover.jpg" alt="Lake at dusk" />
</AspectRatio>
<AspectRatio ratio={4 / 5}><video src="/clip.mp4" controls /></AspectRatio>
```

| Figma property | React prop | CSS class |
|---|---|---|
| ratio = 1-1 · 4-3 · 3-2 · 16-9 · 21-9 · 2-3 · 3-4 · 9-16 | `ratio`: `"1:1"` (default) · `"4:3"` · `"3:2"` · `"16:9"` · `"21:9"` · `"2:3"` · `"3:4"` · `"9:16"`, or a number (width / height) | `ds-aspect-ratio` (`--aspect-ratio`) |
| — (the demos' 12 px corners) | `rounded` | `ds-aspect-ratio--rounded` |

The box takes its container's width; an `img`, `video`, `iframe`, `picture`, `svg` or `canvas` inside fills it and is cropped from the middle (`object-fit: cover`), like Figma's image fill.

## AI Chat Composer

The prompt box of an AI chat: Sort UI 2.0 **AI Chat Composer** (Layout, State, header, Maximize), **AI Chat Composer Bar** (Type, Dictate, Placeholder) and **AI Chat Composer Token**.

```tsx
const [prompt, setPrompt] = useState('');
<AIChatComposer
  value={prompt}
  onValueChange={setPrompt}
  onSubmit={(text) => { send(text); setPrompt(''); }}
  leading={<Button variant="ghost" size="sm" icon={<RiAddLine />} aria-label="Add files or tools" />}
  model={<Button variant="ghost" size="sm" trailingIcon={<RiArrowDownSLine />}>Opus 5.5 High</Button>}
  onDictate={startDictation}
/>
<AIChatComposer state="recording" levels={levels} onCancelRecording={cancel} onStopRecording={stop} />
<AIChatComposer header={<Attachment type="card" title="acme-audit.docx" typeLabel="DOCX" />} badges={<Badge size="lg" color="blue" onRemove={…}>Web search</Badge>} />
<p>Use <AIChatComposerToken>/release-notes</AIChatComposerToken> for 4.2.</p>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Layout = Row · Column | `layout`: `auto` (default: a 40 px row until the text wraps or has a line break, or there is a `header` or `badges`; the textarea is never remounted, so focus stays) · `row` · `column` | `ds-ai-composer` · `--column` |
| State = Default · Recording · Transcribing | `state`: `default` · `recording` (cancel, the waveform from `levels` 0–1, stop) · `transcribing` (cancel, `transcribingLabel` as a status, a spinner) | `--recording` · `--transcribing` |
| header | `header`: attachments above the text | `ds-ai-composer__header` |
| Placeholder · text | `placeholder` (default "Ask about anything…"), `value` / `defaultValue` / `onValueChange`, `inputLabel` (default "Message"); 13/20, grows to 8 lines; Enter calls `onSubmit`, Shift+Enter adds a line | `ds-ai-composer__field` · `__input` |
| Maximize | `maximize`: `auto` (default: the expand button once the text scrolls; expanded it grows to 24 lines) · `true` · `false` | `ds-ai-composer__expand` · `--expanded` |
| Bar: + · Type=Badges · model · Dictate | `leading` (usually a ghost sm + that opens a menu) · `badges` · `model` (a ghost sm button with a chevron; its label is regular weight and its chevron 14 px) · `dictate` (default true) with `onDictate` | `ds-ai-composer__leading` · `__badges` · `__trailing` |
| send | the default sm button, disabled while the prompt is empty and there is no header (`submitDisabled` overrides), and all of it with `disabled` | — |
| AI Chat Composer Token | `tokens` tints /commands in the prompt (default `/\/[\w.-]+/` at a word start; `false` turns it off); `AIChatComposerToken` draws one elsewhere | `ds-ai-composer-token` |

Labels for the icon buttons: `sendLabel`, `dictateLabel`, `cancelRecordingLabel`, `stopRecordingLabel`, `expandLabel`, `collapseLabel`. `inputRef` reaches the textarea.

## AI Trace

The steps an AI agent took: Sort UI 2.0 **Trace Line** (Status, Type, State, Title, Icon, Description, Trailing icon), **Trace Content** and **Trace**.

```tsx
<Trace>
  <TraceLine icon={<RiBrainLine />}>Thought for 8s</TraceLine>
  <TraceLine icon={<RiGlobalLine />} description="8 results">Searched the web</TraceLine>
  <TraceLine status="error" icon={<RiErrorWarningLine />}>Failed to start the dev server</TraceLine>
  <TraceLine icon={<RiBookOpenLine />} trailingIcon={<RiArrowRightUpLine />} href="https://base-ui.com" target="_blank">Read the Base UI install guide</TraceLine>
  <TraceCollapsible icon={<RiTerminalLine />} title="Ran pnpm test" description="14s" defaultOpen>
    <TraceCode>{'Packages: +412\nDone in 8.7s'}</TraceCode>
  </TraceCollapsible>
</Trace>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Status = Done · Running · Error · Pending | `status`: `done` (default) · `running` (a light sweeps over the title; still with reduced motion) · `error` (destructive) · `pending` (60 %); running, failed and pending steps add a visually hidden `statusLabel` (defaults "In progress", "Failed", "Not started") | `ds-trace-line--done` · `--running` · `--error` · `--pending` |
| Type = Line · Trigger · Trigger open | `TraceLine` (a `<div>`; `href` makes it a link, `onClick` a button) · `TraceCollapsible` (a button with `aria-expanded`, chevron right or down; `open` / `defaultOpen` / `onOpenChange`) | `ds-trace-line` · `ds-trace-collapsible` · `ds-trace-line__chevron` |
| State = Default · Hover · Focus | from the pointer and the keyboard: the foreground colour on a link or button, the 3 px ring | — |
| Title · Icon swap · Description text · Trailing icon swap | `children` (`title` on `TraceCollapsible`, cut with an ellipsis) · `icon` (16 px) · `description` (muted at 70 %) · `trailingIcon` | `ds-trace-line__text` · `__icon` · `__description` · `__trailing` |
| Trace Content | the children of `TraceCollapsible`, or `TraceContent` on its own: 24 px in, with a rule under the step's icon | `ds-trace-content` · `__body` |
| Trace | `Trace`: the lines, 8 px apart | `ds-trace` |
| — (the demos' command output) | `TraceCode`: 12 px Geist Mono on fill-1 | `ds-trace-code` |

## Attachment

A file added to a message or a composer: Sort UI 2.0 **Attachment** (Type, State, Title, Type label, Size, Error, Icon, actions).

```tsx
<AttachmentGroup direction="column" aria-label="Attachments">
  <Attachment title="acme-audit.zip" description="2.1 MB" icon={<ArchiveIcon />} actions={<Button variant="ghost" size="xs" icon={<RiDownloadLine />} aria-label="Download acme-audit.zip" />} />
  <Attachment state="uploading" title="pricing-model.xlsx" icon={<SpreadsheetIcon />} actions={removeButton} />
  <Attachment state="error" title="site-visit.mov" error="Over the 25 MB limit" icon={<VideoIcon />} actions={retryButton} />
</AttachmentGroup>
<Attachment type="card" title="brand-assets.pdf" typeLabel="PDF" description="2.1 MB" />
<Attachment type="image" title="red-forest-peak.webp" description="1.4 MB" src={picture} />
<Attachment type="card" typeLabel="northwind.app" title="Northwind — Plans and pricing" description="https://northwind.app/pricing" href="https://northwind.app/pricing" />
```

| Figma property | React prop | CSS class |
|---|---|---|
| Type = File · File sm · Card · Image | `type`: a 240 × 54 row with a 32 px icon · a 240 × 36 row with a 20 px icon and the title alone · a 160 px square with the type label at the top · a 160 px picture under a scrim (`--attachment-width`, `--attachment-height`) | `ds-attachment--file` · `--file-sm` · `--card` · `--image` (`--picture` once it shows one) |
| State = Done · Uploading · Hover · Error | `state` `done` · `uploading` (`aria-busy`, `uploadingLabel`, default "Uploading…") · `error` (destructive border at 70 %, Figma 30 %, and message); Hover comes from the pointer: control-hover, or black at 20 % more over a picture | `--uploading` · `--error` |
| Title · Size · Error | `title` (cut with an ellipsis) · `description` (the size, a link's address) · `error` | `ds-attachment__title` · `__description` |
| Type label | `typeLabel` (Card), 12/16 Geist Mono | `ds-attachment__type` |
| Icon | `icon` (File, File sm); a plain document when omitted | `ds-attachment__media` |
| — | `src` (Image): the picture, a background under the scrim | `style="background-image: …"` |
| actions | `actions`: ghost xs icon buttons, each with an `aria-label`; on a card or a picture they show on hover or focus, and always when it failed | `ds-attachment__actions` |
| Group (demo) | `<AttachmentGroup direction>`: a row that scrolls sideways (default) or a column, 8 px apart | `ds-attachment-group` · `--column` |

`href` (with `target`) turns the title into a link that covers the whole attachment, under the actions. The demos' file icons come from Figma's File Icons set as story fixtures until File Icons ships.

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

## Empty

What a view shows when it has nothing yet (no items, no results), with a way forward: Sort UI 2.0 **Empty** (Media, Title, Description, Slot).

```tsx
<Empty
  icon={<SearchIcon />}
  title="No trips yet"
  description="Your upcoming stays and flights will show up here once you book them."
  actions={<><Button>Explore stays</Button><Button variant="outline">Import booking</Button></>}
/>
<Empty media={<AvatarGroup size="sm">…</AvatarGroup>} title="Listen together" actions={<Button>Invite friends</Button>} />
<Empty icon={<SearchIcon />} title="No restaurants found" description="Try another search.">
  <Input aria-label="Search restaurants" />
</Empty>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Media (icon tile) | `icon`: a 16 px icon in a 32 px fill-2 tile, decorative | `ds-empty__media ds-empty__media--icon` |
| Media (anything else) | `media`, e.g. an Avatar Group | `ds-empty__media` |
| Title | `title` · `titleAs` (`h3` by default; `h2`, `h4`, `p`) | `ds-empty__title` |
| Description | `description` | `ds-empty__description` |
| Slot › Buttons | `actions`: buttons side by side, 8 px apart | `ds-empty__actions` |
| Slot | children under the actions (a search field takes the full width) | `ds-empty__content` |

## Field

The layout around any form control: Sort UI 2.0 **Field** (Orientation, Control, State, Description, Error), **Field Label** (Required, Helper, label-addon), **Field Group**, **Field Set** and **Field Separator**. Input, Select, Combobox and Textarea already draw a vertical Field with `label` / `caption` / `error`, and Checkbox, Radio and Switch a horizontal one and the Choice Card (`card`); `Field` puts any control in one, wires it and composes forms.

```tsx
<FieldSet legend="Profile" description="How others see you.">
  <Field label="Display name" required helper="(shown publicly)" description="3–30 characters." error={nameError}>
    <Input />
  </Field>
  <Field label="Region">
    <Select options={regions} />
  </Field>
  <FieldSeparator>or</FieldSeparator>
  <Field label="Crossfade" orientation="responsive" description="Seconds of overlap.">
    <input type="range" />
  </Field>
</FieldSet>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Field Orientation = Vertical · Horizontal | `orientation`: `vertical` (default) · `horizontal` · `responsive` (not in Figma: beside the control until the row is too narrow) | `ds-field` · `ds-field--horizontal` · `ds-field--responsive` |
| Control = Start · End | `control` (horizontal) | `ds-field--control-end` |
| State = Invalid · Disabled | `error` (under the description; label and control turn red) or `invalid` · `disabled` (disables the control, fades the label) | `ds-field--invalid` · `ds-field--disabled` |
| Description · Show Description | `description` | `ds-field__caption` |
| Field Label Required · Helper · label-addon | `required` (a red asterisk, not read; the control gets `required`) · `helper` · `labelAddon` | `ds-field__required` · `ds-field__helper` · `ds-field__addon` |
| Field Group | `<FieldGroup>`: fields 20 px apart | `ds-field-group` |
| Field Set (Field Label Variant=Legend) | `<FieldSet legend description disabled>`: a `<fieldset>`, 16/24 legend, fields 20 px under the description | `ds-fieldset ds-fieldset--set` |
| Field Separator Content = None · Text | `<FieldSeparator>` (children: the text) | `ds-field-separator` · `__content` |
| — | `<FieldLabel htmlFor required helper addon>` on its own | `ds-field__label` |

The Field gives its control the id (for `<label for>`), `aria-describedby` (description and error), invalid, disabled and required: Input, Select, Combobox and Textarea read them, a native element (`<input>`, `<select>`) receives them as attributes, and a custom control reads them with `useField()`. A Radio or Checkbox group takes the Field Set look with `className="ds-fieldset--set"`.

## Hover Card

A card that previews what is behind a link while the pointer rests on it: Sort UI 2.0 **Hover Card** (content).

```tsx
<HoverCard trigger={<a href="/@priya">Priya Raman</a>}>
  …avatar, name, a line about them…
</HoverCard>
```

| Figma property / layer | React prop | CSS class |
|---|---|---|
| content | children | `ds-hover-card__content` (16 px padding, parts 12 px apart) |
| — (the demos' placements) | `side`: `bottom` (default) · `top` · `left` · `right`; `align`: `center` (default) · `start` · `end` | `ds-hover-card__content--top` · `--left` · `--right`, `--start` · `--end` |
| width 288 | `width` | `--hover-card-width` |

It opens `openDelay` (700 ms) after the pointer rests on the trigger, or at once when the trigger gets keyboard focus; it stays while the pointer or focus is on the trigger or the card (Tab moves into it), closes `closeDelay` (300 ms) after the pointer leaves, and Escape closes it. It is a convenience for sighted users and is not announced, so the link must make sense on its own; use Popover for content people have to reach. `open`, `defaultOpen` and `onOpenChange` work as usual.

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

## Input OTP

A one-time code typed into a row of character slots. Sort UI 2.0 **Input OTP** (Layout, State, Separator) and **OTP Slot** (Position, State, Value).

```tsx
<Field label="Verification code" error={wrong ? 'That code is not right.' : undefined}>
  <InputOTP groups={2} value={code} onValueChange={setCode} onComplete={verify} />
</Field>
<InputOTP aria-label="Verification code" layout="cells" />
```

| Figma property | React prop | CSS class |
|---|---|---|
| — | `length` (6), `value` / `defaultValue` / `onValueChange`, `onComplete` | `ds-input-otp` |
| Layout = Single group · Two groups · Three groups · Cells | `layout`: `"groups"` with `groups` 1 · 2 · 3, or `"cells"` | `ds-input-otp__group`, `ds-input-otp--cells` |
| Separator | `separator` (default true) | `ds-input-otp__separator` |
| State = Default · Invalid · Disabled | `invalid` (or a Field's error) · `disabled` | `ds-input-otp--invalid` · `--disabled` |
| OTP Slot State = Active | the slot the next character goes into while focused | `ds-input-otp__slot--active` |
| — | `pattern`: `"digits"` (default) · `"alphanumeric"` · a RegExp; `name`; `aria-label` | — |
| — ("Input OTP" demo) | `fullWidth`; `--otp-slot-width` / `--otp-slot-height` | `ds-input-otp--full-width` |

Slots are 32 × 32 on `field`, joined in 8 px rounded groups with 1 px dividers; Cells puts each slot in its own box, 8 px apart. One real `<input autocomplete="one-time-code">` lies invisible over the slots: typing, Backspace, paste (only accepted characters are kept) and the phone's code autofill all work, and screen readers meet one text field named by the Field's label or `aria-label`. Focus makes the next empty slot active with a blinking caret.

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

## Accordion

A list of items whose headers show or hide their panels: the Sort UI 2.0 **Accordion** (a card holding **Accordion Item**s, each with a trigger slot, a content slot and a divider).

```tsx
<Accordion defaultValue="arrive">
  <AccordionItem value="arrive">
    <AccordionTrigger>When will my order arrive?</AccordionTrigger>
    <AccordionContent>
      <p>Most orders ship within 24 hours…</p>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion type="multiple" variant="separated" value={open} onValueChange={setOpen}>…</Accordion>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Accordion (card surface) / "Accordion" demo / "Separated items" demo | `variant`: `card` (default), `flush`, `separated` | `ds-accordion`, `--flush`, `--separated` |
| Accordion Item State=Open | `value` / `defaultValue` / `onValueChange` on the Accordion; `type` (`single`, `multiple`), `collapsible` | `ds-accordion__item[data-state]` |
| Accordion Item State=Disabled | `disabled` on `AccordionItem` | `ds-accordion__trigger:disabled` |
| Divider | `divider` (default true; never under the last item) | `ds-accordion__item--no-divider` |
| trigger (slot) | `AccordionTrigger` (`icon` for the "With icons" demo) | `ds-accordion__trigger`, `__title`, `__chevron` |
| content (slot) | `AccordionContent` | `ds-accordion__content` |
| — | `headingLevel` (default 3) | `ds-accordion__heading` |

Each trigger is a button with `aria-expanded` and `aria-controls` inside a heading; each panel is a `role="region"` labelled by its trigger; it animates its height open and closed (no motion with `prefers-reduced-motion`) and is hidden once collapsed, so closed content leaves the tab order. Up / Down (wrapping), Home and End move between the enabled triggers; Enter or Space toggles. With `type="single"` (default) opening an item closes the others, and pressing the open one closes it unless `collapsible={false}`.

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

## Calendar

A month grid to pick a day or a range: the WAI-ARIA date grid. Sort UI 2.0 **Calendar** (Mode, Type), **Calendar Navigation** (Variant) and **Calendar Day** (Selection, Day, State).

```tsx
<Calendar selected={date} onSelect={setDate} />
<Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} />
<Calendar captionLayout="dropdown" min={new Date()} disabled={(d) => d.getDay() === 0} />
```

| Figma property | React prop | CSS class |
|---|---|---|
| Mode = single · range | `mode`; `selected` / `defaultSelected` / `onSelect` (a `Date`, or `{ from, to }`) | — |
| Type = panel · flat | `variant` | `ds-calendar--flat` |
| Calendar Navigation Variant = label · dropdown · dropdown-months · dropdown-years | `captionLayout`; `startMonth` / `endMonth` set the years | `ds-calendar__nav`, `ds-calendar__dropdown` |
| Calendar Day Selection = selected · range-start · range-middle · range-end | from `selected` | `[aria-pressed="true"]`, `ds-calendar__cell--range-*` |
| Calendar Day Day = today · outside · disabled | `today` (default the current date), `showOutsideDays`, `min` / `max` / `disabled` | `ds-calendar__day--today` · `--outside` · `:disabled` |
| Calendar Day State = hover · focus | `:hover` · `:focus-visible` | — |
| — (the demos) | `month` / `defaultMonth` / `onMonthChange`, `numberOfMonths`, `orientation`, `footer`, `aside`, `weekStartsOn`, `locale` | `ds-calendar--vertical`, `__footer`, `__aside` |

The panel is a 256 px popover surface (14 px radius, Surface/Popover); flat drops the surface, e.g. inside a Popover or Card. Days are 28 px tall and share the month's width; the selected day is primary, today fill-2, and a range draws a fill-2 band rounded at its ends and where a week starts or ends. Several months sit side by side (the navigation on the last) or stacked (on the first). Each grid is one Tab stop: the arrow keys move by a day or a week (crossing months), Home and End go to the week's ends, Page Up and Page Down by a month (Shift: a year), Enter or Space picks. Days are named in full ("Friday, March 27, 2026") and today is `aria-current="date"`; month and weekday names come from Intl in `locale`.

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

## Carousel

Slides shown one (or a few) at a time: Sort UI 2.0 **Carousel** (Orientation), following the WAI-ARIA carousel pattern.

```tsx
<Carousel aria-label="Destinations">
  <CarouselSlide>…</CarouselSlide>
  <CarouselSlide>…</CarouselSlide>
</Carousel>
<Carousel aria-label="New albums" perView={3} gap={8}>…</Carousel>
<Carousel aria-label="Upcoming events" orientation="vertical" perView={2} gap={8} slideSize={88}>…</Carousel>
<Carousel aria-label="Getting started" indicators>…</Carousel>
<Carousel aria-label="Photos" controls="overlay" indicators gap={0}>…</Carousel>
<Carousel aria-label="Reviews" controls="none" index={index} onIndexChange={setIndex}>…</Carousel>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Orientation = Horizontal · Vertical | `orientation`; vertical slides are `slideSize` px tall (default 192) | `ds-carousel` · `ds-carousel--vertical` (`--carousel-slide-size`) |
| Previous · Next | Button Variant=Outline, Size=sm, icon only, 20 px from the viewport; disabled at the ends · `controls="overlay"` (round translucent buttons over the bottom corners, for media slides: keep text out of the bottom 52 px; each control and the dot pill stay dark (white arrow) on light and grey content and turn white (black arrow) only on near-black content, read from a slide's `tone`, an `<img>`'s pixels or a background colour or gradient; `controlsTone` fixes it) · `controls="none"` | `ds-carousel__previous` · `__next` · `__control` · `ds-carousel--overlay` |
| viewport › slides | `perView` (slides in view, stepping one at a time) · `gap` (default 16 px) · `index` / `defaultIndex` / `onIndexChange` | `ds-carousel__viewport` · `__track` · `__slide` (`--carousel-index`, `--carousel-per-view`, `--carousel-gap`) |
| Indicators (the "With indicators" demo) | `indicators`: a 16 px pill for the current position, 6 px dots for the rest | `ds-carousel__indicators` · `__indicator` |
| — | `slideLabel` (default "1 of 3") · `<CarouselSlide>` fills its slide | — |

The carousel is a `region` with `aria-roledescription="carousel"`, named with `aria-label`; each slide is a `group` with `aria-roledescription="slide"`. Slides out of view are `aria-hidden` and `inert`, so Tab skips them. The arrow keys (Up and Down when vertical), Home and End move it while the viewport has focus, and a swipe works on touch. The track slides 300 ms; with reduced motion it jumps.

## Chart

Bar, line, area, pie and radial charts: the Sort UI 2.0 **Chart** page, built from **Chart Grid**, **Chart Axis**, **Chart Bar** (Vaiant, Orientation), **Chart Reference Line**, **Chart Tooltip** and **Swatch** (Variant). Drawn with HTML and SVG, no chart library.

```tsx
const data = [{ month: 'Jan', web: 186, ios: 80 }, { month: 'Feb', web: 305, ios: 200 } /* … */];
const series = [{ key: 'web', label: 'Web' }, { key: 'ios', label: 'iOS' }];

<BarChart aria-label="Visitors" data={data} index="month" series={series} stacked />
<LineChart aria-label="Visitors" data={data} index="month" series={series} curve="monotone" references={[{ value: 250, label: 'Goal' }]} />
<AreaChart aria-label="Deploys" data={deploys} index="month" series={[{ key: 'deploys', label: 'Deploys' }]} curve="step" />
<PieChart aria-label="Browsers" variant="donut" data={[{ label: 'Chrome', value: 275 }, { label: 'Safari', value: 200 }]} value="925" caption="Visitors" />
<RadialChart aria-label="7,240 of 10,000 steps" variant="progress" data={[{ label: 'Steps', value: 7240 }]} max={10000} value="7,240" caption="Steps" />
<ChartLegend items={[{ label: 'Web', color: 'var(--ds-chart-7)' }, { label: 'iOS', color: 'var(--ds-chart-3)' }]} />
```

| Figma | React prop | CSS class |
|---|---|---|
| Chart Grid | `grid` (intervals, default 6; `0` hides it) · `<ChartGrid lines vertical>` | `ds-chart__grid` · `__grid-line` |
| Chart Axis Axis = X · Y | the `index` field of each row (bars), or `ticks` (lines with more points than labels); a value axis with `yAxis={{ side, ticks, format }}`; categories on the left of horizontal bars · `<ChartAxis>` | `ds-chart__axis--x` · `--y` · `--categories` · `--values` |
| Chart Bar Vaiant = Default · Capped, Orientation = Vertical · Horizontal | `<BarChart variant layout stacked labels>`: bands 8 px in, grouped bars 4 px apart | `ds-chart__band` · `ds-chart__bar` · `--capped` · `--stacked` · `ds-chart--horizontal` |
| Line and Area samples Default · Linear · Step · Multiple · Dots | `<LineChart curve dots area min>` · `<AreaChart>`: 1.5 px lines; areas fade from 15 % to 0 | `ds-chart__lines` · `__line` · `__area-stop` · `__dot` |
| Chart Reference Line | `references={[{ value, label }]}`: 1 px, dashed 4/4, the label above its end | `ds-chart__reference` · `__reference-label` |
| Chart Tooltip | on hover or keyboard focus (`tooltip`, `tooltipLabel`, `formatValue`; `activeIndex` / `defaultActiveIndex` / `onActiveIndexChange`) · `<ChartTooltip label items description>` | `ds-chart-tooltip` · `ds-chart__tooltip` · `__band--active` · `__cursor` |
| Swatch Variant = Default · Line · Line Horizontal · Dashed · Dashed Horizontal | `<ChartSwatch variant color>` | `ds-chart-swatch` · `--line` · `--line-horizontal` · `--dashed` · `--dashed-horizontal` |
| Pie samples Default · Donut · Donut with Label | `<PieChart variant data size value caption>`: slices clockwise from 12 o'clock, the donut 10 % thick | `ds-chart-pie` · `__slice` · `__center` |
| Radial samples Simple · Stacked · Text | `<RadialChart variant="rings" · "half" · "progress" max>` | `ds-chart-pie--rings` · `--half` · `--progress` · `__track` |
| Totals (demos) | `<ChartLegend variant="totals" columns>`; header legend: `variant="inline"` | `ds-chart-legend` · `--totals` |

A series takes `{ key, label, color }`; without a colour the charts use `--ds-chart-7`, `-3`, `-5`, `-6`, `-1`… in turn, as the demos do. The plot is a `group` named with `aria-label` (or `aria-labelledby`); it takes focus, the arrow keys (Up and Down for horizontal bars), Home and End move between categories, Escape clears, and the tooltip (a `status`) describes the plot. Every chart also renders its data as a visually hidden table; pies and rings are named images.

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

## Item

A row with media, a title and description, and actions: the Sort UI 2.0 **Item**, **Item Media**, **Item Group** and **Item Separator**.

```tsx
<ItemGroup aria-label="Backups">
  <Item
    variant="outline"
    media={<ItemMedia variant="image"><DatabaseIcon /></ItemMedia>}
    title="Production database"
    description="Snapshot of 14 tables."
    actions={<Button variant="outline" size="sm">Restore</Button>}
  />
  <Item variant="muted" href="/audit" title="Open the audit log" actions={<ChevronRight />} />
</ItemGroup>
<Item as="label" title="Error alerts" actions={<Switch aria-labelledby="…" />} />
```

| Figma property | React prop | CSS class |
|---|---|---|
| Variant | `variant`: `default`, `outline`, `muted` | `ds-item--outline`, `--muted` |
| Size | `size`: `default`, `sm`, `xs` | `ds-item--sm`, `--xs` |
| State=Hover / Focus | rows that are one action: `href` (link), `as="button"`, `as="label"` | `ds-item--interactive` |
| header / footer slots | `header`, `footer` | `ds-item__header`, `__footer` |
| media slot (Item Media Icon / Image) | `media` (`ItemMedia variant="icon" \| "image"`, an Avatar, a Radio…) | `ds-item__media`, `ds-item-media--image` |
| content slot | `title`, `description`, `children` | `ds-item__title`, `__description` |
| actions slot | `actions` | `ds-item__actions` |
| Item Group / Item Separator | `ItemGroup` (`variant="joined"` for the "Navigation" demo), `ItemSeparator` | `ds-item-group`, `--joined` |
| — | `flush` (no padding, "Separated list" demo) | `ds-item--flush` |

`ItemGroup` is a list (`<ul>`); each Item is a list item and an `ItemSeparator` is a hidden line between them. A row with its own buttons stays a `<div>` so the buttons keep their own focus; a row that is one action becomes a link, button or label (around a Switch, Radio or Checkbox, so a click anywhere toggles it) and takes Figma's Hover and Focus states. Item Media icons are decorative (`aria-hidden`).

## Kbd

Keyboard keys and shortcuts: Sort UI 2.0 **Kbd** (Variant, Size, Key, Icon) and **Kbd Group**.

```tsx
<KbdGroup>
  <Kbd label="Command">⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>
<Kbd>Space</Kbd>
<Kbd icon={<CornerDownLeftIcon />} label="Enter" />
<Kbd variant="inverted" size="sm">Esc</Kbd>   {/* on dark surfaces, as in Tooltip */}
```

| Figma property | React prop | CSS class |
|---|---|---|
| Variant = Default · Inverted | `variant`: `default` (muted key on fill-2) · `inverted` (background-coloured key on a 20 % background tint, for dark surfaces) | `ds-kbd` · `ds-kbd--inverted` |
| Size = default · sm | `size`: `default` (20 px) · `sm` (16 px) | `ds-kbd--sm` |
| Key · Show key | children | — |
| Icon · Icon swap | `icon` (12 px, the key colour) | `ds-kbd > svg` |
| — | `label`: a spoken name for a symbol ("Command" for ⌘); the symbol is then hidden from screen readers | `ds-kbd__label` |
| Kbd Group | `<KbdGroup>`: the keys of one shortcut, 2 px apart (a `<kbd>` of `<kbd>`s, as HTML marks a key combination) | `ds-kbd-group` |

Input's `shortcut` (one key, also `aria-keyshortcuts`) and Tooltip's `shortcut` (Inverted sm keys) draw the same keys; for several keys in an Input, put a `KbdGroup` in `suffix` and set `aria-keyshortcuts` yourself.

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

## Menubar

An application menu bar: the Sort UI 2.0 **Menubar** and **Menubar Trigger**, each opening a Dropdown Menu.

```tsx
<Menubar aria-label="Editor">
  <MenubarMenu label="File">
    <DropdownMenuItem shortcut="⌘N">New Tab</DropdownMenuItem>
    <DropdownMenuSub label="Share">…</DropdownMenuSub>
  </MenubarMenu>
  <MenubarMenu label="View">
    <DropdownMenuCheckboxItem type="menubar" checked={urls} onCheckedChange={setUrls}>Always Show Full URLs</DropdownMenuCheckboxItem>
  </MenubarMenu>
</Menubar>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Menubar ("triggers" slot) | `Menubar` (`aria-label`, `defaultValue`) | `ds-menubar` |
| Menubar Trigger "Label" | `MenubarMenu label` | `ds-menubar__trigger` |
| Menubar Trigger State=Hover / Open | the pointer; an open menu | `[aria-expanded="true"]` |
| Menubar Trigger "slot" (the menu) | `MenubarMenu` children: Dropdown Menu items (`type="menubar"` puts checkbox and radio checks on the left) | `ds-dropdown__content` |

It follows the WAI-ARIA menubar pattern: `role="menubar"` with `menuitem` triggers and one Tab stop; Arrow Left / Right (Home / End) move between the triggers; Enter, Space or Arrow Down opens a menu on its first item (Arrow Up on its last). While a menu is open, Arrow Left / Right in it, or pointing at another trigger, switches to that menu; submenus keep their own Left / Right. Escape closes the menu and returns focus to its trigger; a click outside closes it.

## Message

One chat message laid out around its bubbles: Sort UI 2.0 **Message** (Align, Avatar, Footer), with the demos' Message Group and typing line.

```tsx
<div role="log" aria-label="Payments thread">
  <MessageGroup avatar={<Avatar initials="J" name="Jonas Lindqvist" />}>
    <Message sender="Jonas Lindqvist" badge={<Badge shape="pill">Payments</Badge>}>
      <Bubble variant="muted">Weekly checkout digest is in.</Bubble>
    </Message>
    <Message footer="Today, 9:02 AM">
      <Bubble variant="muted">Only invoices still use the old flow.</Bubble>
    </Message>
  </MessageGroup>
  <Message align="end" avatar={<Avatar initials="M" name="Mira Okafor" />} footer="9:05 AM · Seen by Jonas">
    <Bubble>Great. Are invoices blocked on capacity?</Bubble>
  </Message>
  <MessageTyping>Olivia is typing…</MessageTyping>
</div>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Align = Start · End | `align`: theirs with the avatar on the left · yours with it on the right | `ds-message` · `--end` |
| Avatar = True · False | `avatar` (an `Avatar`, 32 px column, 8 px from the bubbles, level with the last bubble's bottom); none drops the column, `avatarSpace` keeps it empty | `ds-message__avatar` · `--no-avatar` |
| bubbles | children: `Bubble`s, a carousel, a file… 8 px apart, hugging up to 320 px | `ds-message__bubbles` |
| header | `sender` (12/16 Medium) and `badge`, or a custom `header`, 8 px above the bubbles | `ds-message__header` · `__sender` |
| Footer = True | `footer`: the time, receipts, actions or a send error, 12/16 muted, 8 px below | `ds-message__footer` |
| Message Group (demos) | `<MessageGroup align avatar>`: one sender's messages 8 px apart, the avatar on the last one | `ds-message-group` |
| typing-shimmer (demo) | `<MessageTyping>`: a 12/16 Medium line with a light sweeping across it (still with reduced motion), `role="status"` | `ds-message-typing` |

Put a conversation in an element with `role="log"` and a name so new messages are announced. Avatars take `--avatar-fill` and `--avatar-ink` for the coloured fallbacks the demos use. The "With a trace" demo waits for AI Trace.

## Message Scroller

A chat transcript in a fixed height: Sort UI 2.0 **Message Scroller** (Fade, Button end, Button start, content).

```tsx
const scroller = useRef<MessageScrollerHandle>(null);

<MessageScroller aria-label="Conversation" anchorOffset={64} controlRef={scroller} style={{ height: 440 }}>
  {turns.map((turn) => (
    <MessageScrollerItem key={turn.id} id={turn.id} scrollAnchor={turn.role === 'user'}>
      <Message align={turn.role === 'user' ? 'end' : 'start'}>
        <Bubble variant={turn.role === 'user' ? 'muted' : 'ghost'}>{turn.text}</Bubble>
      </Message>
    </MessageScrollerItem>
  ))}
</MessageScroller>

scroller.current?.scrollToItem('turn-12');
```

| Figma property | React prop | CSS class |
|---|---|---|
| content | children: `MessageScrollerItem`s (an `id` to jump to, `scrollAnchor` for a turn that settles near the top edge) holding Messages and Markers, 32 px apart | `ds-message-scroller__content` · `__item` |
| Fade | `fade` (default true): 40 px from the background at 5 % to the surface (`--message-scroller-surface`, default card), while there is more below | `ds-message-scroller__fade` |
| Button end | `scrollToEndButton` (default true): an outline sm icon button 16 px above the bottom, while the reader is above the live edge (`scrollToEndLabel`) | `ds-message-scroller__to-end` |
| Button start | `scrollToStartButton` (default false): the same 16 px below the top, while the reader is below the first message (`scrollToStartLabel`) | `ds-message-scroller__to-start` |
| "Following the Live Edge" demo | `autoScroll` (default true): messages that arrive or stream keep the live edge in view while the reader is at it | — |
| "Anchoring Turns", "Group Chat", "Keeping Context Visible" demos | a new `scrollAnchor` turn added at the end settles at the top edge with `anchorOffset` px of the previous reply in view; room below it lets it get there before its reply fills the view | `ds-message-scroller__spacer` |
| "Opening Saved Threads" demo | `defaultScrollPosition`: `end` (default) · `start` · `last-anchor` | — |
| "Loading Earlier Messages" demo | messages added above keep the first visible message in place, the same in every browser | — |
| "Animating New Messages" demo | `animation`: `none` (default) · `fade` · `slide` · `scale`, for turns added at the end (still with reduced motion) | `[data-animation]` · `__item[data-entering]` |
| "Jumping to Messages" demo | `controlRef`: `scrollToStart()`, `scrollToEnd()`, `scrollToItem(id)` | — |
| "Tracking the Reader's Position" demo | `onAnchorChange(id)`: the anchored turn at the top edge as the reader scrolls | — |
| "Reading Scroll State" demo | `onScrollStateChange({ atStart, atEnd })` | `[data-at-start]` · `[data-at-end]` |

The transcript is a focusable `role="log"` (name it with `aria-label`), so new messages are announced and the arrow keys, Page Up/Down, Home and End scroll it. The buttons hide once used, and focus moves to the log. Figma draws no scrollbar, and neither does the code; the buttons and the keyboard move through it. The demos' composer is a stand-in until AI Chat Composer ships.

## Navigation Menu

A site's main navigation: the Sort UI 2.0 **Navigation Menu**, **Navigation Menu Trigger**, **Navigation Menu Content** and **Navigation Menu Link**.

```tsx
<NavigationMenu aria-label="Main">
  <NavigationMenuItem label="Product" width="368px">
    <NavigationMenuList columns={2}>
      <NavigationMenuLink href="/hosting" title="Hosting" description="Deploy from Git" icon={<ServerIcon />} />
      <NavigationMenuLink href="/databases" title="Databases" description="Postgres and Redis" />
    </NavigationMenuList>
  </NavigationMenuItem>
  <NavigationMenuItem href="/pricing" label="Pricing" active />
</NavigationMenu>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Navigation Menu Trigger Type=Trigger | `NavigationMenuItem label` with panel content | `ds-navigation-menu__trigger` (a button) |
| Navigation Menu Trigger Type=Link | `NavigationMenuItem href` | `ds-navigation-menu__trigger` (a link) |
| Trigger State=Hover / Focus | pointer and keyboard | — |
| Trigger State=Active | an open trigger; `active` on a link (`aria-current="page"`) | `[aria-expanded="true"]`, `[aria-current="page"]` |
| Trigger State=Disabled | `disabled` | — |
| Navigation Menu Content | the item's children; `width`, `align="end"`, `flush` | `ds-navigation-menu__content`, `--end`, `--flush` |
| Navigation Menu Link (State=Hover / Active) | `NavigationMenuLink` (`title`, `description`, `icon`, `iconPlacement`, `active`) | `ds-navigation-menu__link`, `--top` |
| — | `NavigationMenuList columns` ("Grid" demo) | `ds-navigation-menu__links` |

The menu is a `nav` landmark with a list of items; a trigger is a button with `aria-expanded` and `aria-controls` whose panel follows it in the reading order, so Tab moves from the trigger into its links (it is not an ARIA menu: the links are ordinary links). Enter, Space or a click toggles a panel, Arrow Down opens it and focuses the first link, and resting the mouse on a trigger opens it (touch uses the click). One panel is open at a time; Escape returns focus to its trigger, and Tab out of the item or a click outside closes it. Arrow Left / Right, Home and End move between the top-level items.

## Pagination

Page links with Previous and Next: the Sort UI 2.0 **Pagination** and **Pagination Ellipsis** (built from Ghost and Outline Buttons).

```tsx
<Pagination page={page} pageCount={12} onPageChange={setPage} />
<Pagination page={5} pageCount={12} getHref={(p) => `?page=${p}`} />
<Pagination iconsOnly page={page} pageCount={5} onPageChange={setPage} />
```

| Figma | React prop | CSS class |
|---|---|---|
| Previous / Next (Ghost Buttons with a chevron) | `labels.previous` / `labels.next` | `ds-pagination__edge` |
| Link (32 px Ghost Button) / Link (active) (Outline) | `page`, `pageCount`, `onPageChange`, `getHref` | `ds-pagination__page`, `aria-current="page"` |
| Pagination Ellipsis | `siblingCount`, `boundaryCount` (which pages show around a gap) | `ds-pagination__ellipsis` |
| "Icons only" demo | `iconsOnly`, `showFirstLast` | `ds-button--icon-only` |
| — | `align` (`center`, `start`), `labels` (other languages), `aria-label` | `ds-pagination--start` |

It is a `nav` landmark (named "Pagination" unless you pass `aria-label`) holding a list of buttons, or links with `getHref`. Each page link is named "Page 3" (`labels.page`); the current one has `aria-current="page"`. Previous / Next (and First / Last) are disabled on the first / last page; disabled links lose their `href`. Ellipses are `aria-hidden`. The pages shown are the first and last (`boundaryCount`), the current one with `siblingCount` on each side, and an ellipsis for each gap; a gap of one page shows that page instead (page 2 of 12 → 1 2 3 … 12). `paginationRange(page, pageCount, siblingCount, boundaryCount)` is exported for custom layouts. The "Previous and next" and "Rows per page" demos are layouts made of Button and Select (see the stories).

## Popover

A small non-modal panel that opens from a button, with a title, a description and any content: Sort UI 2.0 **Popover** (header, content, Actions).

```tsx
<Popover trigger={<Button variant="outline">Share</Button>} title="Share this playlist" description="Anyone with the link can listen along." align="start">
  <Input aria-label="Playlist link" readOnly defaultValue="https://sort.fm/p/late-night-focus" />
  <PopoverActions>
    <PopoverClose><Button size="sm">Done</Button></PopoverClose>
  </PopoverActions>
</Popover>
```

| Figma property / layer | React prop | CSS class |
|---|---|---|
| header: Title, Description | `title`, `description` | `ds-popover__header`, `__title`, `__description` |
| content | children | `ds-popover__body` |
| Actions | `PopoverActions` | `ds-popover__actions` |
| — (the demos' placements) | `side`: `bottom` (default) · `top` · `left` · `right`; `align`: `center` (default) · `start` · `end` | `ds-popover__content--top` · `--left` · `--right`, `--start` · `--end` |
| width 288 | `width` (any CSS length) | `--popover-width` |

The trigger gets `aria-haspopup="dialog"`, `aria-expanded` and `aria-controls`; the panel is a `role="dialog"` named by its title (or `aria-label`). It opens 4 px from the trigger and focus moves to its first control. Escape closes it and returns focus to the trigger; a click outside or focus leaving the trigger and the panel closes it. `PopoverClose` makes a button inside close it. `open`, `defaultOpen` and `onOpenChange` work as usual.

## Progress

How far a task has got: Sort UI 2.0 **Progress** (Variant, header, footer) and **Progress circle** (Value).

```tsx
<Progress label="Copying" value={54} description="2.5GB of 5GB" />
<Progress label="Storage" value={70} valueLabel="Used: 70GB of 100GB" />
<Progress variant="dashed" label="Steps" value={3} max={10} valueLabel="3/10 completed" />
<Progress label="Preparing your export" />            {/* no value: indeterminate */}
<ProgressCircle value={75} label="75%" aria-label="Tailwind CSS" />
```

| Figma property | React prop | CSS class |
|---|---|---|
| Variant = Default · Dashed | `variant`: one bar · one 4 px segment per step (`max` steps, `value` done; meant for a handful of steps, as Figma's 10) | `ds-progress__track` · `ds-progress__track--dashed` · `ds-progress__step--done` |
| header › Label · Value | `label` (names the bar; otherwise `aria-label`) · `valueLabel` (default "54%" or "3/10"; read as the value; `false` hides it) | `ds-progress__label` · `ds-progress__value` |
| track › Indicator | `value` of `max` (default 100); none: indeterminate (a sliding third; with reduced motion a still, half-tint bar) | `ds-progress__indicator` (`--progress`) · `ds-progress__track--indeterminate` |
| footer › Description | `description` (also describes the bar) | `ds-progress__description` |
| Progress circle Value = Empty · Filled | `<ProgressCircle value max label size thickness variant>`: 72 px by default, a ring 10 % of the size from 12 o'clock; `variant="destructive"` (the "Circle" demo's warning) | `ds-progress-circle` (`--progress`, `--progress-circle-size`, `--progress-circle-thickness`) |

Both are `role="progressbar"` with `aria-valuenow`, `aria-valuemax` and the shown value as `aria-valuetext`.

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

## Sheet

A modal panel along an edge of the screen: Sort UI 2.0 **Sheet** (Side, header, content, footer, Close button).

```tsx
<Sheet
  trigger={<Button variant="outline">Edit profile</Button>}
  side="right"
  title="Edit profile"
  description="Make changes to your profile here. Click save when you're done."
  footer={<>
    <SheetClose><Button>Save changes</Button></SheetClose>
    <SheetClose><Button variant="outline">Cancel</Button></SheetClose>
  </>}
>
  …fields…
</Sheet>
```

| Figma property / layer | React prop | CSS class |
|---|---|---|
| Side = right · left · top · bottom | `side` (default `right`) | `ds-sheet--right` · `--left` · `--top` · `--bottom` |
| header: Title, Description | `title` (`titleAs`), `description` | `ds-sheet__header`, `__heading`, `__title`, `__description` |
| Close button = true · false | `closeButton` (default `true`), `closeLabel` | `ds-sheet__close` |
| content | children; `bodyPadding="flush"` | `ds-sheet__body`, `--flush` |
| footer | `footer`; `footerVariant="muted"` | `ds-sheet__footer`, `--muted` |
| width 384 (left, right) | `width` | `--sheet-width` |

Left and right sheets are full-height and 384 px wide; top and bottom are full-width and as tall as their content. The footer stacks full-width buttons, the main action first (put a row in a `div` for side-by-side buttons). The content scrolls; the header and footer stay. It behaves like Dialog (the two share their code): a native modal `<dialog>` that slides in from its edge (fades with reduced motion), keeps focus inside, closes on Escape, Close or a click on the backdrop and returns focus to the trigger. `SheetClose` makes a button close it.

## Sidebar

An app's side navigation: the Sort UI 2.0 **Sidebar**, **Sidebar Group**, **Sidebar Group Label**, **Sidebar Menu Item**, **Sidebar Menu Button**, **Sidebar Menu Sub Item** and **Sidebar Collapse Icon**.

```tsx
<SidebarLayout>
  <Sidebar aria-label="Workspace">
    <SidebarHeader plain>…</SidebarHeader>
    <SidebarContent>
      <SidebarGroup label="Workspace" labelSize="sm" action={<Button variant="ghost" size="xs" icon={<PlusIcon />} aria-label="New project" />}>
        <SidebarMenuItem label="Projects" icon={<FolderIcon />} href="/projects" active badge="16" />
        <SidebarMenuItem label="Components" icon={<FolderIcon />}>
          <SidebarMenuItem label="Input" href="/input" />
        </SidebarMenuItem>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>…</SidebarFooter>
  </Sidebar>
  <SidebarInset>
    <SidebarTrigger /> …
  </SidebarInset>
</SidebarLayout>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Sidebar Type=Default / Floating | `Sidebar variant` | `ds-sidebar`, `--floating` |
| Header / Content / Footer slots | `SidebarHeader`, `SidebarContent`, `SidebarFooter` (`plain`: no line) | `ds-sidebar__header`, `__content`, `__footer` |
| Sidebar Group / Group Label (Size, Action, Collapsible) | `SidebarGroup` (`label`, `labelSize`, `action`, `collapsible`, `defaultOpen`) | `ds-sidebar__group`, `__group-label`, `--sm` |
| Sidebar Menu Button Size=Default / sm / lg | `SidebarMenuItem size` (`description` for lg) | `ds-sidebar__button`, `--sm`, `--lg` |
| Menu Button State=hover / active / focus | the pointer; `active` (`aria-current="page"`); the keyboard | — |
| Leading Icon / Media, Badge, Dropdown | `icon`, `badge`, `action` | `ds-sidebar__icon`, `__badge`, `__action` |
| Collapsible + Sidebar Menu Sub Item (Level 2…5) | children of a `SidebarMenuItem` (`defaultOpen`) | `ds-sidebar__sub`, `ds-sidebar__menu--sub` |
| Sidebar Collapse Icon (Default / Up Down) | the chevron of items with sub items; `endIcon` (a switcher's up-down) | `ds-sidebar__chevron` |
| Menu Button Collapsed=True | `SidebarLayout` collapsed (`collapsed` / `defaultCollapsed`, `SidebarTrigger`) | `[data-state="collapsed"]` |

The sidebar is an `aside` landmark of lists of links; the current page has `aria-current="page"`. An item with sub items is a button with `aria-expanded` and `aria-controls`, and its sub menu animates its height (as Collapsible does); a collapsible group's label works the same way. `SidebarTrigger` (named "Toggle sidebar", with `aria-expanded`) collapses the sidebar to a 48 px rail of 32 px icon buttons; their names stay for assistive technology and show as tooltips, while group labels, badges, actions and sub menus hide. Narrow screens (40 rem and less) start with the rail; the open sidebar lies over the dimmed content there, and a click on it or Escape closes it. `SidebarInset` is the page's `main` (`as="div"` inside a page that has one) and scrolls on its own.

## Slider

Pick a number, or a range, along a track: the WAI-ARIA slider. Sort UI 2.0 **Slider** (Orientation, Range, State) and **Slider Thumb** (State).

```tsx
<Slider label="Stagger" valueText={`${ms} ms`} value={ms} onValueChange={setMs} min={0} max={160} step={5} />
<Slider label="Delay window" value={[40, 120]} onValueChange={setWindow} max={160} aria-label={['Shortest delay', 'Longest delay']} />
<Slider aria-label="Volume" defaultValue={50} orientation="vertical" />
```

| Figma property | React prop | CSS class |
|---|---|---|
| — | `value` / `defaultValue` / `onValueChange`, `onValueCommit`; `min` (0), `max` (100), `step` (1) | `ds-slider` |
| Range = False · True | a number · `[from, to]` | — |
| Orientation = Horizontal · Vertical | `orientation` (vertical runs bottom to top, 160 px tall by default) | `ds-slider--vertical` |
| State = Default · Disabled | `disabled` | `ds-slider--disabled` |
| Slider Thumb State = Default · Hover · Focus | — · `:hover` · `:focus-visible` (and while dragged) | `ds-slider__thumb` |
| — (the demos' label row) | `label`, `valueText` | `ds-slider-field` |
| — | `name` (a hidden input per thumb), `getAriaValueText`, `aria-label` (one name, or two for a range) | — |
| — (the demos' looks) | `variant`: `"default"` · `"block"` (24 px track, 20 × 24 thumbs) · `"scrubber"` (32 px bar, label and value inside) | `ds-slider--block` · `--scrubber` |
| — (block step dots) | `marks`: `true` (every step) or values, `{ value, emphasis }` for a bar | `ds-slider__mark` (`--emphasis`) |
| — ("Color picker") | `thumbDot`: a colour dot in the thumb | `ds-slider__dot` |

`variant="block"` is the look of the "Autoscaling range", "Claude Effort Slider" and "Color picker" demos: a 24 px fill-2 track with a 6 px radius, 20 × 24 thumbs and a fill-4 fill, with optional step dots. `variant="scrubber"` is the "Scrubber": the whole 32 px bar is the control, a 2 px line marks the value, and the label and value sit inside (the bar takes the focus ring). Both are horizontal only. The track is a 4 px fill-2 pill and the fill primary; the 16 px thumbs stay inside the track and the fill reaches their outer edges. `--slider-track`, `--slider-fill` and `--slider-thickness` repaint it (a hue gradient, a colour). Each thumb is a `role="slider"` with its own Tab stop: the arrow keys move by a step (Up and Right raise), Page Up and Page Down by ten, Home and End to the ends. A click or a drag on the track moves the nearest thumb; a range's thumbs cannot cross.

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

## Spinner

A turning indicator for work in progress: Sort UI 2.0 **Spinner** (Variant, Size).

```tsx
<Spinner />                                   {/* role="status", named "Loading" */}
<Spinner variant="gradient" size="lg" label="Syncing your library" />
<Button disabled leadingIcon={<Spinner decorative />}>Please wait</Button>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Variant = Default · Gradient | `variant`: `default` (the Lucide loader arc in the current text colour, 1.25 px at every size) · `gradient` (a 1.5 px ring fading from foreground 50 % to 5 %) | `ds-spinner` · `ds-spinner--gradient` |
| Size = sm · default · lg · xl | `size`: 12 · 16 (default) · 20 · 24 px | `ds-spinner--sm` · `ds-spinner--lg` · `ds-spinner--xl` |
| — | `label` (default "Loading") names the `role="status"`; `decorative` hides it when the text next to it already says what is happening (a "Please wait" button, a "Processing payment…" row) | — |

It turns once a second (the gradient the other way, so its dark end leads); with reduced motion it turns three times slower instead of stopping, so it still reads as in progress.

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

## Table

Rows of data in a native `<table>`: the Sort UI 2.0 **Table**, **Table Row** and **Table Cell**.

```tsx
<Table caption="Invoices for the Team plan.">
  <TableHeader>
    <TableRow>
      <TableHead sort={sort} onSort={toggleSort}>Invoice</TableHead>
      <TableHead align="right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow selected>
      <TableCell>INV-2041</TableCell>
      <TableCell align="right">$48.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>…</TableFooter>
</Table>
<Table variant="card" aria-label="Members">…</Table>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Table header / body / footer / caption slots | `TableHeader`, `TableBody`, `TableFooter`, `caption` | `thead`, `tbody`, `tfoot`, `ds-table__caption` |
| Table Row Type=Head / Body / Footer | `TableRow` in the header, body or footer | — |
| Table Row State=Hover / Selected | the pointer; `selected` | `tr[data-state="selected"]` |
| Table Row Divider | lines under the header and between body rows, above the footer | — |
| Table Cell Type=Head / Cell / Footer | `TableHead` (a column header), `TableCell` | `ds-table__head`, `ds-table__cell` |
| Table Cell Align | `align`: `left`, `right` | `ds-table__head--right`, `ds-table__cell--right` |
| — | `fit` (a checkbox or chevron column), `wrap` (text that wraps) | `ds-table__cell--fit`, `--wrap` |
| — | `TableHead sort` + `onSort` ("Sorting" demo) | `ds-table__sort` |
| — | `variant="card"` (the demos' layout: the header on the muted fill, the body in a bordered box) | `ds-table--card` |

The table is a native `<table>` with column headers (`scope="col"`), so screen readers announce rows and columns; name it with `caption` or `aria-label`. A sortable header is a button inside the header cell, which carries `aria-sort`. Selection, expandable rows, editable cells, an empty state, a toolbar and paging are built from Checkbox, Button, Input, Empty and Select (see the stories). The table scrolls sideways when it is wider than its container.

## Tabs

Switch between panels of content: the WAI-ARIA tabs pattern. Sort UI 2.0 **Tabs Trigger** (Variant, State, Size, Layout) and **Tabs List** (Variant, Orientation, Size).

```tsx
<Tabs defaultValue="overview">
  <TabsList aria-label="Order">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="tracking" count={2}>Tracking</TabsTrigger>
    <TabsTrigger value="invoice" disabled>Invoice</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">…</TabsContent>
  <TabsContent value="tracking">…</TabsContent>
</Tabs>
```

| Figma property | React prop | CSS class |
|---|---|---|
| — | `Tabs` `value` / `defaultValue` / `onValueChange` | `ds-tabs` |
| Variant = Default · Secondary · Line · Line Vertical | `Tabs` `variant`: `"default"` · `"secondary"` · `"line"` (with `orientation="vertical"` for Line Vertical) | `ds-tabs-list--secondary` · `--line` |
| Orientation = Horizontal · Vertical | `Tabs` `orientation` | `ds-tabs--vertical`, `ds-tabs-list--vertical` |
| Size = Default · lg | `Tabs` `size`: `"default"` (28 px) · `"lg"` (32 px) | `ds-tabs-list--size-lg` |
| State = Active · Hover · Focus · Disabled | selected tab · `:hover` · `:focus-visible` · `TabsTrigger` `disabled` | `[aria-selected="true"]` |
| Layout = Inline · Eyebrow · Icon top | `TabsTrigger` children (label), `icon`, `count`; `eyebrow`; `description` | `ds-tabs__trigger--eyebrow` · `--icon-top` |
| — ("Full width" demo) | `TabsList` `fullWidth` | `ds-tabs-list--full-width` |
| — | `TabsContent` `value`, `forceMount` | `ds-tabs__content` |

Default draws a fill-2 track with the selected tab raised; Secondary fills the selected tab; Line underlines it with a 2 px bar (on the right when vertical). The list is a `role="tablist"` with one Tab stop (the selected tab): the arrow keys along the orientation, Home and End move between the tabs and select them as they go, skipping disabled ones; Tab then moves into the panel (`role="tabpanel"`, named by its tab). Name the list with `aria-label` when the page has more than one.

## Toggle

A button that is on or off: Sort UI 2.0 **Toggle** (Variant, Size, Pressed, State, Label, icons).

```tsx
<Toggle defaultPressed>Art</Toggle>
<Toggle variant="outline" leadingIcon={<BookmarkIcon />} pressed={saved} onPressedChange={setSaved}>Save</Toggle>
<Toggle icon={<BoldIcon />} aria-label="Bold" />
```

| Figma property | React prop | CSS class |
|---|---|---|
| Variant = Default · Outline | `variant`: `"default"` · `"outline"` | `ds-toggle--outline` |
| Size = sm · default · lg | `size`: `"sm"` · `"default"` · `"lg"` | `ds-toggle--size-sm` · `--size-lg` |
| Pressed = False · True | `pressed` / `defaultPressed` / `onPressedChange` | `aria-pressed="true"` |
| State = Hover · Focus · Disabled | — (`:hover`, `:focus-visible`), `disabled` | — |
| Label, Show Label | children; `icon` + `aria-label` for icon only | `ds-toggle__label`, `ds-toggle--icon-only` |
| Leading Icon, Trailing Icon | `leadingIcon`, `trailingIcon` | `ds-toggle__icon` |

It renders a `<button type="button" aria-pressed>`: a click, Space or Enter flips it and screen readers announce "pressed" or "not pressed". Use Switch for a setting that applies at once, Toggle Group for a set of options.

## Toggle Group

Toggles in a group, one or several on: Sort UI 2.0 **Toggle Group** (Spacing, Orientation, Variant).

```tsx
<ToggleGroup type="single" aria-label="Platform" defaultValue="ios" variant="outline">
  <ToggleGroupItem value="web">Web</ToggleGroupItem>
  <ToggleGroupItem value="ios">iOS</ToggleGroupItem>
  <ToggleGroupItem value="android">Android</ToggleGroupItem>
</ToggleGroup>
<ToggleGroup type="multiple" aria-label="Text formatting" spacing={0}>
  <ToggleGroupItem value="bold" icon={<BoldIcon />} aria-label="Bold" />
  …
</ToggleGroup>
```

| Figma property | React prop | CSS class |
|---|---|---|
| — | `type`: `"single"` (at most one on) · `"multiple"`; `value` / `defaultValue` / `onValueChange` | — |
| Variant = Default · Outline | `variant` (every item) | `ds-toggle-group--outline` |
| Spacing = 2 · 1 · 0 | `spacing`: `2` (8 px, default) · `1` (4 px) · `0` (joined) | `ds-toggle-group--spacing-1` · `--spacing-0` |
| Orientation = Horizontal · Vertical | `orientation` | `ds-toggle-group--vertical` |
| — (Toggle Size) | `size` (every item) | — |
| items | `ToggleGroupItem` (`value`, label or `icon` + `aria-label`, `disabled`) | `ds-toggle` |

A joined group (Spacing 0) is a pill, or a 16 px rounded box when vertical; a joined Outline group has one border and 1 px dividers. The group is a named `role="group"` of `<button aria-pressed>`s with one Tab stop (the pressed item, or the first): the arrow keys along the orientation, Home and End move between the items, skipping disabled ones. In a single group, pressing the pressed item turns it off; ignore an empty value in `onValueChange` to keep one always on.

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

## Usage Bar

How a whole splits into parts (a budget, a disk, a night's sleep): Sort UI 2.0 **Usage Bar** with **Usage Bar Segment** (Variant, State), **Usage Bar Legend Item** (Variant) and **Usage Bar Tick** (Align).

```tsx
<UsageBar aria-label="Database storage" axis={['0 GB', '25 GB', '50 GB']}>
  <UsageBarSegment value={18} label="Tables, 18 GB" />
  <UsageBarSegment value={9} variant="muted" label="Logs, 9 GB" />
  <UsageBarSegment value={11} variant="primary" label="Free, 11 GB" />
  <UsageBarSegment value={5} variant="dashed" label="Restore point, 5 GB" />
</UsageBar>
<UsageBarSegment value={42} color="var(--ds-chart-2)" label="Photos, 42 GB" tooltip="Photos · 42 GB" />
<UsageBarLegend columns={2}>
  <UsageBarLegendItem color="var(--ds-chart-4)" value="$1,200">Rent</UsageBarLegendItem>
  <UsageBarLegendItem variant="muted" value="$720">Left</UsageBarLegendItem>
</UsageBarLegend>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Usage Bar › track | `<UsageBar>` children: the segments share the 28 px bar in proportion to their `value`, 1 px apart | `ds-usage-bar` · `ds-usage-bar__track` |
| Usage Bar › axis · Usage Bar Tick Align = Start · Center · End | `axis`: the tick values, spread evenly (the first hangs right of its line, the last left); `<UsageBarTick align>` for other layouts | `ds-usage-bar__axis` · `ds-usage-bar-tick` · `--start` · `--end` |
| Segment Variant = Default · Muted · Primary · Dashed · Striped | `variant`; `color` recolours Default (the demos use the chart colours) | `ds-usage-bar__segment` · `--muted` · `--primary` · `--dashed` · `--striped` (`--usage-bar-value`, `--usage-bar-color`) |
| Segment State = Default · Active | `active`; also on hover and keyboard focus of a focusable segment (`tabIndex`, or a `tooltip`) | `ds-usage-bar__segment--active` |
| — | `label` (read by screen readers; without it the segment is hidden from them) · `tooltip` · `tooltipProps` | `ds-usage-bar__cell` (around a tooltip) |
| Legend Item Variant · Label | `<UsageBarLegendItem variant color value>` in `<UsageBarLegend columns>` (a wrapping row 16 px apart, or a grid) | `ds-usage-bar-legend` · `--columns` · `ds-usage-bar-legend__item` · `__swatch` · `__label` · `__value` |

The bar is a `group` named with `aria-label`; each labelled segment is an `img` named by its `label`, so the parts are read in order. Segments with a `tooltip` take focus and show it on keyboard focus.

## Collapsible

Shows or hides content under a trigger: the Sort UI 2.0 **Collapsible** (State=Closed / Open, a trigger slot and a content slot 16 px apart).

```tsx
<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger>{open ? 'Hide replies' : 'Show replies'}</CollapsibleTrigger>
  <CollapsibleContent>…</CollapsibleContent>
</Collapsible>
<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="outline" size="sm">Show details</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>…</CollapsibleContent>
</Collapsible>
```

| Figma property | React prop | CSS class |
|---|---|---|
| State=Closed / Open | `open` / `defaultOpen` / `onOpenChange` | `ds-collapsible[data-state]` |
| trigger (slot; the sample: 14/20 Medium label and a chevron, 4 px apart) | `CollapsibleTrigger` (`showChevron`), or any button with `asChild` | `ds-collapsible__trigger`, `ds-collapsible__chevron` |
| content (slot) | `CollapsibleContent` (`keepMounted`) | `ds-collapsible__panel`, `ds-collapsible__content` |
| — | `disabled` | — |

The trigger is a button with `aria-expanded` and `aria-controls` pointing at the content; click, Enter or Space toggles it. The content animates its height open and closed (no motion with `prefers-reduced-motion`) and, once collapsed, stays in the DOM hidden, so it leaves the tab order; `keepMounted={false}` removes it as soon as it closes, without the animation. `--collapsible-gap` changes the 16 px between the trigger and the content, and closes with it. The trigger can sit anywhere inside the Collapsible: the "Order summary" and "Flight details" demos put a Ghost icon button or an Outline sm button in a header.

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

## Command

A command palette: the Sort UI 2.0 **Command**, **Command Item**, **Command Group Heading** and **Command Separator**.

```tsx
<Command label="Commands">
  <CommandInput placeholder="Type a command or search…" />
  <CommandList>
    <CommandGroup heading="Suggestions">
      <CommandItem icon={<CalendarIcon />} onSelect={openCalendar}>Calendar</CommandItem>
      <CommandItem icon={<CalculatorIcon />} disabled>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem icon={<UserIcon />} shortcut="P" keywords={['account']}>Profile</CommandItem>
    </CommandGroup>
    <CommandEmpty><Empty title="No results found." /></CommandEmpty>
  </CommandList>
</Command>
<CommandDialog open={open} onOpenChange={setOpen} label="Search">…</CommandDialog>
```

| Figma property | React prop | CSS class |
|---|---|---|
| Command Variant=Default | `Command` (`label`, `search` / `defaultSearch` / `onSearchChange`, `shouldFilter`, `loop`, `width`, `plain`) | `ds-command`, `--plain` |
| Search (an Input Group) | `CommandInput` (`placeholder`) | `ds-command__search` + `ds-input` |
| list | `CommandList` (`maxHeight`) | `ds-command__list` |
| Command Group Heading | `CommandGroup heading` | `ds-command__heading` |
| Command Separator | `CommandSeparator` | `ds-command__separator` |
| Command Item "L slot" / "Label" | `CommandItem icon`, children (`value`, `keywords` for the search), `description` | `ds-command__icon`, `__label`, `__description` |
| Command Item Shortcut "Keys" | `shortcut` (or any trailing note) | `ds-command__meta` |
| Command Item Checked | `checked` | `ds-command__check` |
| Command Item State=Selected / Disabled | the keyboard and pointer selection; `disabled` | `[aria-selected="true"]`, `[aria-disabled="true"]` |
| Command Variant=Empty | `CommandEmpty` | `ds-command__empty` |
| — | `CommandDialog` (a modal palette) | `ds-command-dialog` |

The search field is a combobox (`aria-controls`, `aria-activedescendant`) that keeps focus while Arrow Up / Down, Home and End move the selected option (skipping disabled items and wrapping unless `loop={false}`) and Enter runs it; the pointer selects what it is over and a click runs it. Typing filters the items by their text, `value` and `keywords`; groups with no match and the separators hide, and `CommandEmpty` shows when nothing matches (it sits outside the listbox). `CommandDialog` is a native modal `<dialog>`: the field takes focus, Escape or a click on the backdrop closes it and focus returns.

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

## Date Picker

A date (or range) field that opens a Calendar: the Sort UI 2.0 **Date Picker** demos (an Outline Button or an Input over a Calendar panel; Figma has no component set for it).

```tsx
<Field label="Review due">
  <DatePicker value={due} onValueChange={setDue} />
</Field>
<DatePicker mode="range" aria-label="Trip dates" showIcon value={range} onValueChange={setRange} />
<Field label="Subscription date">
  <DatePicker input name="start" />
</Field>
```

| Figma demo | React prop | CSS class |
|---|---|---|
| "Date Picker" (Outline Button with a chevron) | default; `value` / `defaultValue` / `onValueChange`, `placeholder`, `format` | `ds-date-picker__trigger` |
| "Range picker" | `mode="range"` (two months by default), `showIcon` | — |
| "Date of birth" | `captionLayout="dropdown"`, `startMonth` / `endMonth`, `max`, `format` | — |
| "Input" (Input Group with a calendar button) | `input`, `parse` | `ds-input`, `ds-input__action--ghost` |
| — | `align`, `fullWidth` (default inside a Field), `disabled`, `invalid`, `name` (YYYY-MM-DD), `min`, `isDateDisabled`, `weekStartsOn`, `locale`, `numberOfMonths`, `calendarWidth`, `open` / `defaultOpen` / `onOpenChange` | `ds-date-picker__panel` |

The trigger is a button with `aria-haspopup="dialog"`, named by the Field's label and the date ("Review due Mar 27, 2026"). Opening it shows the Calendar panel 4 px below in a non-modal dialog and moves focus to the selected (or today's) day; picking a date, or a range's second date, closes it and returns focus to the trigger, as does Escape; a click or focus outside closes it too. With `input`, typed text is read on Enter or blur (`Date.parse`, with YYYY-MM-DD as a local day; `parse` replaces it), written back in `format`, and dropped when it is not a date or not allowed; Alt+Down opens the calendar.

## Dialog

A modal window with a header, any content and a footer of actions: Sort UI 2.0 **Dialog** (header, content, footer, Close button).

```tsx
<Dialog
  trigger={<Button variant="outline">Edit profile</Button>}
  title="Edit profile"
  description="Make changes to your profile here. Click save when you're done."
  footer={<>
    <DialogClose><Button variant="outline">Cancel</Button></DialogClose>
    <Button type="submit" form="profile">Save changes</Button>
  </>}
>
  <form id="profile">…</form>
</Dialog>
```

| Figma property / layer | React prop | CSS class |
|---|---|---|
| header: Title, Description | `title` (`titleAs`), `description` | `ds-dialog__header`, `__heading`, `__title`, `__description` |
| Close button = true · false | `closeButton` (default `true`), `closeLabel` | `ds-dialog__close` (a Ghost sm Button) |
| content | children; `bodyPadding="flush"` for media or a layout of its own | `ds-dialog__body`, `--flush` |
| footer | `footer`; `footerVariant="muted"` (the "Sticky footer" demo) | `ds-dialog__footer`, `--muted` |
| width 448 (demos 400–600) | `width` (any CSS length) | `--dialog-width` |

A native modal `<dialog>`: focus moves to its first control and stays inside, the page behind is inert and does not scroll. Escape, the Close button or a click on the backdrop closes it and focus goes back to the trigger; `DialogClose` makes a button close it. It never grows past the viewport: the content scrolls, the header and footer stay. `open`, `defaultOpen` and `onOpenChange` work as usual; without a `title`, give `aria-label`. Use Alert Dialog to ask for a confirmation.

## Drawer

A rounded modal panel that comes in from the bottom, the top or the side, with a swipe handle: Sort UI 2.0 **Drawer** (Direction, Swipe handle, header, content, footer).

```tsx
<Drawer
  trigger={<Button variant="outline">Step goal</Button>}
  title="Daily step goal"
  description="Set how many steps you want to walk each day."
  footer={<>
    <DrawerClose><Button>Save goal</Button></DrawerClose>
    <DrawerClose><Button variant="outline">Cancel</Button></DrawerClose>
  </>}
>
  …
</Drawer>
```

| Figma property / layer | React prop | CSS class |
|---|---|---|
| Direction = down · up · side | `direction` (default `down`) | `ds-drawer--down` · `--up` · `--side` |
| Swipe handle = true · false | `swipeHandle` (default `true`; down and up) | `ds-drawer__handle`, `__bar` |
| header: Title, Description | `title` (`titleAs`), `description` | `ds-drawer__header`, `__heading`, `__title`, `__description` |
| — (not in Figma) | `closeButton` (default `false`), `closeLabel` | `ds-drawer__close` |
| content | children; `bodyPadding="flush"` | `ds-drawer__body`, `--flush` |
| footer | `footer`; `footerVariant="muted"` | `ds-drawer__footer`, `--muted` |
| width 664 (down, up) · 384 (side) | `width` | `--drawer-width` |

It floats 8 px from its edge with 24 px corners: down and up are centred and 664 px wide with a centred heading, side is full-height and 384 px wide on the end edge. Dragging the handle towards the edge moves the drawer with the pointer; letting go past a quarter of its height (or after a quick flick) closes it, otherwise it springs back. The handle is decorative for assistive technology: Escape, a click on the backdrop or a `DrawerClose` button closes the drawer too, and focus goes back to the trigger. The footer stacks full-width buttons, the main action first; the content scrolls while the header and footer stay. Drawer shares its modal code with Dialog and Sheet.

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
- Spinner (2.0): Variant=Default Size=default is 17.3 px (a Lucide 16 px icon in its 17.3 px frame), while Gradient default is 16 px; the code draws both at 16 px. Figma's Default keeps a 1.25 px stroke and Gradient a 1.5 px one at every size; the code follows. The "In buttons" demo shows the spinner in disabled buttons; Button has no loading state, so the stories pass `leadingIcon={<Spinner decorative />}` with `disabled`.
- Kbd (2.0): the Icon slot is an 8.65 px frame (a Lucide 8 px icon), hidden in every variant and demo; the code draws `icon` at 12 px, the key text's size. Figma renders the Inverted variants on white, where they are invisible; they are meant for dark surfaces such as Tooltip.
- Field (2.0): State=Invalid shows the description and the error together; `Field` does too, while Input, Select, Combobox and Textarea's own `error` replaces their `caption` (unchanged). State=Disabled fades the label and the control to 50 % but not the description. The Field Label's label-addon Badge is Badge Variant=Outline (control fill, border), which the code draws with Badge `shape="pill" border`. The "Orientation" demo's "Responsive" field is not a Figma variant; the code offers it as `orientation="responsive"`.
- Empty (2.0): the icon is a 17.3 px Lucide frame (a 16 px icon) in the 32 px tile; the code draws 16 px icons. The "No results" demo's search field spans the content (336 px), which the code does for any Field inside an Empty.
- Progress (2.0): the Progress circle's ring is 10 % of its size in the component (80 % inner radius) and 7.5 % in the "Circle" demo (85 %); the code defaults to 10 % and takes `thickness`. The demo's red ring (alpha/destructive/10 track, destructive indicator) is not a variant; the code offers it as `variant="destructive"`. Figma has no indeterminate state; the code slides a third of the bar while there is no value.
- Aspect Ratio (2.0): the component set has square corners and the demos round them (12 px, radius-xl); the code offers `rounded`. Card's media uses an Aspect Ratio instance in Figma; `CardMedia` keeps its own `ratio` for now.
- Popover (2.0): the panel keeps its 14 px radius (radius-14) like the other surfaces (Card, Alert Dialog, Sonner); menus and controls use 8 px. The header slot is a horizontal auto-layout with a 12 px gap that never shows (it holds one frame); the code draws the header as the title-and-description column. Figma has no placement property; the demos show bottom and top, the code adds `side` and `align`.
- Dialog (2.0): Figma draws no backdrop; the code dims the page (alpha black 50, as for Alert Dialog). The "Sticky footer" demo fills the footer with `muted`, which the component has no property for; the code offers `footerVariant="muted"`. Demo widths vary (400, 448, 480, 600 px) without a size property; the code offers `width`.
- Sheet (2.0): Figma draws top and bottom 800 px wide and left and right 640 px tall as samples; the code fills the screen's width or height. The panel has no radius and no backdrop in Figma; the code keeps the square edges and dims the page like Dialog. Several demos put two buttons side by side in the footer while the component stacks them; the code stacks direct children and lets a row inside lay out its own.
- Drawer (2.0): the component centres the sample body text when down or up; the code centres only the heading, so fields and lists in the content stay start-aligned (centre a paragraph yourself, as the Step goal demo does). The "side" drawer has a Swipe handle property but draws no handle; the code shows none. There is no Close button in Figma, yet several side demos draw one; the code offers `closeButton`. Figma draws no backdrop; the code dims the page like Dialog.
- Hover Card (2.0): the surface matches Popover (288 px, 14 px radius, Surface/Popover) but with 16 px padding all round and no header. Figma has no placement or timing; the code opens below the link after 700 ms and offers `side`, `align`, `openDelay` and `closeDelay`. The sample's separator is a 0 px line; the code's is 1 px, so the card is 1 px taller.
- Toggle (2.0): default and lg toggles have a 10 px radius (radius-lg) while Button's are 8 px; sm toggles are 8 px. The focus ring is 3 px (Button's is 2 px) and Default turns its background to the page colour when focused; the code follows Figma. The sample icons are 17 px; the code draws 16 px icons like Button.
- Toggle Group (2.0): Figma holds nine items and shows three; the code renders the items you give it. A joined group clips its items, so a focused item's ring is drawn inside it. Figma has no single or multiple choice; the code offers `type`.
- Tabs (2.0): Variant=Default, Orientation=Vertical, Size=lg start-aligns its labels while every other vertical list centres them; the code centres them everywhere. Tabs Trigger State=Focus draws an unselected tab; Figma has no focused selected tab, and the code keeps the selected surface under the ring. The icons are 17 px as in Figma, while Button and Toggle draw 16 px. Figma has no tab panel and no full-width list; the code adds `TabsContent` and `fullWidth` from the demos.
- Slider (2.0): the thumb's Hover and Focus states use a smaller shadow (4/6 px and 2/4 px blur at 10 %) that is not an effect style; the code keeps Shadow/md and adds the 4 px ring. The thumb is white (an unbound colour); the code uses `control` (white in Light, neutral-800 in Dark). Disabled vertical sliders are 180 px tall and the others 160 px; the code defaults to 160 px. The demos' label row and their block ("Autoscaling range", "Claude Effort Slider", "Color picker") and scrubber looks are compositions of the slot and the thumb, not properties; the code offers them as `label` / `valueText`, `variant` (`block`, `scrubber`), `marks` and `thumbDot`, compared with the demo instances. The colour-picker thumbs carry the dot as an extra layer; the code draws it from `thumbDot`. The scrubber's label is muted in Figma; on the Dark fill that is 3.9:1, so the code draws it in foreground (the value stays muted).
- Input OTP (2.0): an invalid group has a 2 px invalid ring in its effects, but Figma does not draw a shadow under a frame without a fill, so it never shows; the code draws the invalid stroke only. Slots round their outer corners 10 px inside an 8 px group; the code rounds them 8 px to follow the group's edge. The "Input OTP" demo stretches 48 px tall cells across the card, which no property gives; the code offers `fullWidth` and `--otp-slot-height`.
- Calendar (2.0): Figma clips each week to a 6 px radius so a range band rounds at the week's ends; the code rounds the end days instead, so a focused day's ring is not clipped. The "Range" demos highlight the outside days that fall inside the range, as the code does. Figma has no limits, locales or week start; the code adds `min`, `max`, `disabled`, `locale` and `weekStartsOn`, and `footer` / `aside` for the "Presets" and "Range with presets" demos (whose preset column is left-aligned in Figma; the stories use a vertical Toggle Group).
- Date Picker (2.0): Figma has no Date Picker component, only demos that place an Outline Button (or an Input Group with a calendar button) over a Calendar panel 4 px below; the code packages them as `DatePicker` and compares the "Date Picker" and "Input" demo frames. The demos shrink the Calendar to the 240 px field; the code keeps 256 px unless `calendarWidth` is set. The "Range picker" demo labels the trigger "Mar 27, 2026 - Apr 14, 2026"; the code uses the same hyphen.
- Collapsible (2.0): the trigger slot's sample is a detached "Button" frame with no padding, background or hover state, and Figma draws no focus state for it; the code adds the 3 px ring the other controls use. The "Settings panel" demo has no Collapsible instance (four inputs and an icon button) and the "Order summary" demo uses Item, which is not built yet; the stories rebuild both from Card, Input and Button. The fallback avatar in the sample puts `primary-foreground` initials on `palette/orange-solid`, which turns dark on orange in Dark.
- Accordion (2.0): the Accordion component is drawn as a card, while its first demo ("Accordion") overrides it to a flush list and "Separated items" to muted boxes 8 px apart; the code offers the three as `variant`. The chevron is the 16 px icon scaled to 17.33 px, drawn 2 px down. Figma has no hover or focus state for the trigger; the code adds the 3 px ring the other controls use. The Divider is a 0 px line on the item's bottom edge; the code draws it as a 1 px inset shadow, which renders the same.
- Breadcrumb (2.0): the Breadcrumb's slot is fixed at 20 px while its Ellipsis is a 24 px Ghost xs button, so the ellipsis overflows the row by 2 px above and below; the code lets the list grow to 24 px with the items centred on the same line. Chevron and Dot separators are the 16 px icons scaled to 17.33 px. Figma has no focus state for links; the code adds the 3 px ring the other controls use.
- Pagination (2.0): the current page is an Outline Button that keeps the default 8 px side padding inside its fixed 32 px width, while the other page links have none; the code gives every page link the same box. The Pagination component's sample (1, 2, [3], …, 8) is not a range a rule produces; the code follows the "Pagination" demo (page 2 of 12: 1, [2], 3, …, 12). Figma does not draw Previous or Next disabled at the ends; the code disables them there.
- Item (2.0): Item Media Variant=Icon holds a 17.33 px square-dashed icon in a 16 px box; the code centres any icon in the 16 px box. The Default and Outline variants show State=Hover and Focus, but rows with their own buttons cannot be one action, so the code gives the states only to link, button and label rows. The "Navigation" demo joins Muted rows into one clipped block with bottom lines; the code offers it as `ItemGroup variant="joined"`. The xs Row is 424 px while its header and footer are 428 px; the code gives all three the box's width.
- Table (2.0): the row dividers are 1 px centre strokes on the row's edge, so half the line falls outside the row; the code draws the whole line inside the row's bottom edge. The Footer row's line is positioned over its top edge the same way. Most demos ("Table", "Sorting", "Editable cells", "Empty state", "Toolbar and pagination") lay the header on the muted fill and the body in a white bordered box with the xs shadow, which no component property draws; the code offers it as `variant="card"`. Table Cell lays its content out with an 8 px gap; table cells hold inline content, so several items go in their own flex wrapper. The checkbox and chevron columns drop the cell's end padding; the code offers that as `fit`.
- Navigation Menu (2.0): Navigation Menu Link is 10 px rounded in its component set but 8 px in the Navigation Menu Content component; the code uses 10 px, as the demos do. Trigger State=Active is drawn both for an open trigger (with the chevron turned up and the panel 8 px below) and for Type=Link; the code uses it for open triggers and for the link to the current page. The "Featured" and "Groups" demos are layouts inside the panel (a promoted card, labelled columns), built in the stories from Badge, Button and NavigationMenuList; `flush` drops the panel padding for "Groups".
- Menubar (2.0): the menus are the Dropdown Menu component placed in the trigger's slot 8 px below it; the code reuses DropdownMenu (and its Menubar checkbox type for the demos' left-hand checks). Figma draws no keyboard focus for Menubar Trigger; the code gives it the fill-1 tint and the 3 px ring the other controls use. The demos set the bar 320 px wide with the triggers at the start; the component hugs its triggers and the stories set the width.
- Command (2.0): the Command Separator's line is 384 px wide in a 372 px list (it runs to the edges past the list's 6 px padding); the code does the same. The separator and the empty state are not options, so they sit outside what assistive technology reads as the listbox (the separator is decoration and the empty state follows the listbox). Shortcuts are drawn as 12/16 muted text, not Kbd keys; the code follows Figma. The "Dialog" demo shows the palette under its trigger; the code's CommandDialog is a modal window 15 % from the top, as palettes usually are, and the "In a popover" demo puts a `plain` Command in a Popover.
- Sidebar (2.0): Sidebar Menu Button's Size=sm variant keeps its Tree chevron and dropdown when an instance turns them off (the properties are not wired in that variant), so the visual check compares its size and spec only. The Sub Item puts the 24 px indent on each row; the code puts it on the sub menu, with the 1 px line 16 px in. Figma shows the collapsed rail and Floating but no narrow-screen behaviour; the code starts collapsed on narrow screens and lays the open sidebar over dimmed content. The group label sizes in the demos are sm (12/16) while the component defaults to 14/20; the code keeps the component's default and the stories use `labelSize="sm"`.
- Usage Bar (2.0): Figma has no states for hovering or focusing a segment; the code shows State=Active on hover and keyboard focus of a focusable segment, with the focus ring. The Dashed segment is drawn as an inset outline (a border would add to its share of the bar) and the Dashed swatch's 2/2 dashes with gradients; Active Dashed turns the stroke solid, as in Figma. Figma's ticks are 24 or 48 px boxes spread with space-between; in code a tick takes no width, so its line sits exactly on its point whatever the value's width. The "Sleep" demo's wake window is drawn as a plain track; the story uses Slider Variant=Scrubber, which puts the label and value inside it.
- Chart (2.0): Figma draws charts from parts and demos rather than one component, so the code offers chart components (BarChart, LineChart, AreaChart, PieChart, RadialChart) that compute those parts from data. Figma's Axis component spreads 32 px ticks from edge to edge, while every demo centres one tick per band; the code follows the demos. The radial "Simple" rings run counter-clockwise from 3 o'clock and the "Stacked" half ring layers arcs from 3 o'clock; the code keeps those directions but draws the half ring's data side by side from the left. The pie samples start at 3 o'clock; the code starts slices at 12 o'clock, as is usual. Figma shows a hovered state (tooltip, highlighted band, cursor) but no keyboard path; the plot takes focus and the arrow keys move between categories. The dashed swatch is a 0 px vector in Figma; the code draws a 1.5 px dashed line.
- Carousel (2.0): Figma's overlay controls are always dark (foreground at 20 %); the code reads what lies under each control and switches to a white control (white at 90 %, a black icon) over near-black pictures (relative luminance under 0.05), so the circle never disappears. Cross-origin images without CORS cannot be read: give their slides a `tone`. The component has only Previous and Next; the "With indicators" and "Image Carousel" demos draw the dots and the overlay controls themselves, and the code offers them as `indicators` and `controls="overlay"`. Figma has no slide transition, focus state for the viewport or keyboard path; the code slides the track in 300 ms (none with reduced motion), rings the focused viewport and moves with the arrow keys. The overlay buttons and dot pill use black at 40 % with a faint white ring and white icons where Figma's demo uses foreground at 20 % and primary-foreground: at 20 % they disappeared on darker photos, and primary-foreground is black in Dark.
- Bubble (2.0): the Destructive border is destructive at 70 % instead of Figma's 30 %, as on Attachment's Error state (design review). The component samples 13 px reactions, every demo uses 14 px; the code follows the demos. Figma counts the reactions pill's 0.5 px border in its layout (39 × 21 for two emoji); the code adds the half pixel to the padding. The demos place reactions on the bottom-end corner of start bubbles, the bottom-start corner of end bubbles and the top-start corner when a bubble's top is free; the code makes those the defaults and the `reactionsPlacement` options. Figma's "Long message" bubble draws its border outside; the code keeps it inside like the other bubbles. Figma's Default and Destructive bubbles carry Surface/Card's inset white top highlight; under the 1 px border it reads as a glow on dark cards, so the code keeps only the two soft drop shadows (black at 5 %).
- Message (2.0): Figma's Time text in the footer is Regular while the component's text style is Medium; the code follows the demos (Regular, with the sender in Medium). The demos colour fallback avatars with palette solids; Avatar gained `--avatar-fill` and `--avatar-ink` for that instead of a new prop.
- Message Scroller (2.0): the component is a single component with a slot, not a set; its booleans (Fade, Button end, Button start) are the props, and the eleven demos describe behaviour (anchoring, streaming, opening position, history, animation, commands, outline, scroll state) that the adapter implements. Figma shows the fade and the end button whatever the position; the code shows them only while there is more below. Figma draws no scrollbar; the code hides it too and keeps the transcript keyboard-scrollable. The sample's fallback avatars put white initials on `palette/orange-solid` (2.88:1, under the 4.5:1 AA minimum).
- Attachment (2.0): the Error border is destructive at 70 % instead of Figma's 30 %, which was hard to see in Light and Dark (design review); Bubble's Destructive border follows. Figma draws the text on a picture in `primary-foreground`, which turns dark in Dark; the code keeps it white in both schemes (the white of `alpha-white-90`, made opaque). The Card and Image squares pad two inner frames (12 12 0 12 and 12) in an unpadded square; the code pads the square by 12 px, which lands every part in the same place. A card's actions only appear in Figma's Hover and Error variants; the code also shows them on keyboard focus. The File Icons in the demos are illustrations with raw colours, not tokens, so they stay the same in Dark.
- AI Trace (2.0): the line's icon and chevron are 16 px lucide icons scaled to 17.3 px (an instance scaled by 1.08, no token); the code draws them at 16 px, which puts the icon's centre on Trace Content's rule and the title on its 24 px indent, so a line is 1.3 px narrower per icon (design review; `sizeOverride` in the visual check). Figma's lines have a 10 px radius that only shows as the 4 px focus ring; the code keeps both. The code interpreter demo's lines are separate 16 px text layers 4 px apart; `TraceCode` is one block with 20 px lines, which lands the text in the same places. The Description (muted at 70 %, about 3.2:1 on white) and Pending steps (60 %, about 2.6:1) fall below 4.5:1 (axe reports them); the code follows Figma.
- AI Chat Composer (2.0): Figma's box has an inset white top highlight; under the 1 px border it reads as a glow in Dark, so the code leaves it out, as on Bubble. Figma's trailing frame stretches over the bar's free middle (and, while dictating, wraps the waveform or status); the code's hugs its buttons, with every part in the same place. A /command in the prompt cannot take room (the textarea's text would no longer line up), so the token's 4 px sides are drawn with shadows there. The Effort slider of Figma's model menu is shown as a radio group in the stories.
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
