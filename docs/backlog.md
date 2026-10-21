# Component backlog

Figma variants that are not implemented yet, and the component each one becomes. Ordered by how much other work they unblock.

| Figma source | Becomes | Notes |
|---|---|---|
| Input · Variant = Lead dropdown, Tail dropdown | `Select` (+ menu/listbox), composed into `Input` as an add-on | Needs a popover + listbox with keyboard support; reuse for any dropdown. |
| Input · Variant = Tags, Inline tags | `Tag` + `TagInput` | `Tag` is reusable on its own (filters, chips). |
| Input · Variant = Quantity, Quantity 2 | `NumberInput` (stepper) | Native `type="number"` semantics, `−`/`+` or chevron buttons, min/max/step. |
| Input · Variant = Lead button | `FileInput` | Wraps `<input type="file">`; shows the chosen file name. |

Each one follows [playbook.md](playbook.md) and is done when [definition-of-done.md](definition-of-done.md) holds.
