# Component backlog

Figma variants that are not implemented yet, and the component each one becomes. Ordered by how much other work they unblock.

| Figma source | Becomes | Notes |
|---|---|---|
| Input · Variant = Lead dropdown, Tail dropdown | `Select` composed into `Input` as an add-on | `Select` exists; needs a compact trigger without the field box. |
| Select Input · Variant = Multi-select, Tags; Select Menu Items · Select type = Checkbox, Radio Button | `MultiSelect` (listbox with `aria-multiselectable`) | Tags reuse `Tag` from the row below. |
| Select Input · Variant = Avatar; Select Menu Items · Type = Avatar, Country Flag | `Select` option `icon` slot with `Avatar` / flag | Needs `Avatar`; the slot already takes any node. |
| Select Menu · Search Input, Empty State; Menu Search Input | `Select` with `searchable` (combobox with listbox popup) | Filtering changes the ARIA pattern: focus moves to the search input. |
| Select Menu · Button; Select Menu Items · Type = Caption, Default Large | `Select` menu footer and option description | Small; waiting for a use case. |
| Select Menu positioning | Flip/shift near the viewport edge | CSS anchor positioning or a small positioning helper. |
| Input · Variant = Tags, Inline tags | `Tag` + `TagInput` | `Tag` is reusable on its own (filters, chips). |
| Input · Variant = Quantity, Quantity 2 | `NumberInput` (stepper) | Native `type="number"` semantics, `−`/`+` or chevron buttons, min/max/step. |
| Input · Variant = Lead button | `FileInput` | Wraps `<input type="file">`; shows the chosen file name. |

Each one follows [playbook.md](playbook.md) and is done when [definition-of-done.md](definition-of-done.md) holds.
