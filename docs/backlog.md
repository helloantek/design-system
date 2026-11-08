# Backlog

What is left after the Sort UI 2.0 component pages (all implemented, see [migration-sort-ui-2.md](migration-sort-ui-2.md)). Reviewed against the Sort UI 2.0 file (`4JnqgEbdlnKgiFrfmiwEZw`) on 2026-11-08. Each item follows [playbook.md](playbook.md) and is done when [definition-of-done.md](definition-of-done.md) holds.

## Next

| Item | What | Notes |
|---|---|---|
| Brand logos (Icons page `1:2`) | The 131 logos (GitHub, Google, Apple Pay, Visa…) | Later, from their owners' official sources (e.g. simple-icons), when a section needs them. The icon set itself is decided: Remix Icons, lucide only where Remix has none ([icons.md](icons.md)). |
| Marketing sections | Navigation Bar (with Logo), Hero, Features, Social Proof, About, Content, Pricing, Stats, CTA, FAQ, Footer | Eleven pages of page sections built from the components. To be scoped first: library components or Playground compositions. |

## Code debt

Found in the code, not missing from Figma.

| Item | What | Notes |
|---|---|---|
| Textarea character-count ring | Use `ProgressCircle` | Textarea draws its own 16 px ring (`ds-textarea__progress`) although `ProgressCircle` exists. |

## Not in Sort UI 2.0

Sort UI 1.3 Input variants that Sort UI 2.0 dropped. Build them only when a product needs them, then ask design for a 2.0 spec first.

| 1.3 variant | Would become |
|---|---|
| Input · Quantity, Quantity 2 | `NumberInput` (stepper: native `type="number"`, `−`/`+` buttons, min/max/step) |
| Input · Lead button | `FileInput` (wraps `<input type="file">`, shows the chosen file's name) |

## Done since the last backlog

Items from the previous backlog that Sort UI 2.0 components now cover.

| Previous item | Covered by |
|---|---|
| Input · Lead / Tail dropdown | Input Group Dropdown (`InputDropdown` as a DropdownMenu trigger, passed as the Input's `action`) |
| Select Menu · Search Input, Empty State | Combobox (search in the field, "No results") |
| Select Menu Items · Caption | Select Item Description (`description`) |
| Select Menu · Button | Dropped in Sort UI 2.0 (Select Content holds only items) |
| Input · Tags, Inline tags | Combobox with `multiple` (removable chips) |
| Popup positioning (code debt) | Popups flip and shift inside the window (README, "Popups near the window's edge") |
| Select indicators (code debt) | `indicator="checkbox"` / `"radio"` draw the Checkbox and Radio components, inert inside the option |
