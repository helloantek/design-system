# Component backlog

Figma variants that are not implemented yet, and the component each one becomes. Ordered by how much other work they unblock.

| Figma source | Becomes | Notes |
|---|---|---|
| Input · Variant = Lead dropdown, Tail dropdown | `Select` composed into `Input` as an add-on | `Select` exists; needs a compact trigger without the field box. |
| `Badge` (Figma set Badge, incl. the × control button) | `Badge` component | Next. Used by Select menu items (today a local `ds-select__badge`) and by Select Variant=Tags. |
| `Avatar` (Figma set Avatar `2725:4557`: Userpic, Initials, Empty; 8 sizes; Circular, Rounded) | `Avatar` component | After Badge. |
| Select Input · Variant = Tags | `Select multiple` showing the values as removable `Badge`s | After Badge. The × buttons must not sit inside the combobox element (nested interactive); keyboard removal with Backspace. |
| Select Menu Items · Select type = Checkbox, Radio Button | Option indicator variants | Figma's Multi-select menu uses the check mark; these are alternatives. |
| Select Input · Variant = Avatar; Select Menu Items · Type = Avatar, Country Flag | `Select` option avatar slot with `Avatar` / flag | After Avatar. In Figma the label then has 8 px left padding instead of 4. |
| Select Menu · Search Input, Empty State; Menu Search Input | `Select` with `searchable` (combobox with listbox popup) | Filtering changes the ARIA pattern: focus moves to the search input. |
| Select Menu · Button; Select Menu Items · Type = Caption, Default Large | `Select` menu footer and option description | Small; waiting for a use case. |
| Select Menu positioning | Flip/shift near the viewport edge | CSS anchor positioning or a small positioning helper. |
| Input · Variant = Tags, Inline tags | `Tag` + `TagInput` | `Tag` is reusable on its own (filters, chips). |
| Input · Variant = Quantity, Quantity 2 | `NumberInput` (stepper) | Native `type="number"` semantics, `−`/`+` or chevron buttons, min/max/step. |
| Input · Variant = Lead button | `FileInput` | Wraps `<input type="file">`; shows the chosen file name. |

Each one follows [playbook.md](playbook.md) and is done when [definition-of-done.md](definition-of-done.md) holds.
