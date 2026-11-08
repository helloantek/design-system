---
'@helloantek/ds-angular': minor
---

Input and Checkbox for Angular, with the React components' markup: `<ds-input>` (label, caption, error, `variant`, `size`, icons with `dsLeadingIcon` / `dsTrailingIcon`, `prefix` / `suffix` or `[dsPrefix]` / `[dsSuffix]`, `addonBefore` / `addonAfter`, `shortcut`, `blockStart` / `blockEnd` / `blockDivider`, `loading`), `<button dsInputAction>` for the T-slot button, `<ds-checkbox>` (label, caption, error, `control`, `card`, `indeterminate`) and `<fieldset dsCheckboxGroup>`. Both fields work with Signal Forms (`[formField]`: they implement `FormValueControl` / `FormCheckboxControl`), Reactive Forms and `ngModel` (`ControlValueAccessor`), or `[(value)]` / `[(checked)]`. Adds `@angular/forms` ^22 as a peer dependency.
