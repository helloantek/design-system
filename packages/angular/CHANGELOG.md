# @helloantek/ds-angular

## 2.57.0

### Minor Changes

- 018a13c: Input and Checkbox for Angular, with the React components' markup: `<ds-input>` (label, caption, error, `variant`, `size`, icons with `dsLeadingIcon` / `dsTrailingIcon`, `prefix` / `suffix` or `[dsPrefix]` / `[dsSuffix]`, `addonBefore` / `addonAfter`, `shortcut`, `blockStart` / `blockEnd` / `blockDivider`, `loading`), `<button dsInputAction>` for the T-slot button, `<ds-checkbox>` (label, caption, error, `control`, `card`, `indeterminate`) and `<fieldset dsCheckboxGroup>`. Both fields work with Signal Forms (`[formField]`: they implement `FormValueControl` / `FormCheckboxControl`), Reactive Forms and `ngModel` (`ControlValueAccessor`), or `[(value)]` / `[(checked)]`. With Signal Forms an invalid value is flagged once the field is touched (left); an `error` message or a hand-set `invalid` shows at once. Adds `@angular/forms` ^22 as a peer dependency.

### Patch Changes

- @helloantek/ds-core@2.57.0

## 2.56.0

### Minor Changes

- b7e917d: New package `@helloantek/ds-angular`: the Angular 22 adapter (ADR 0002), with the same markup and `ds-*` classes as `@helloantek/ds-react`. The pilot starts with `DsButton` (`<button dsButton>` / `<a dsButton>`: `variant`, `size`, `badge`, `type`) and `DsBadge` (`<span dsBadge>`: `variant`, `size`, `color`, `shape`, `border`, `dot`, `removable` and `(remove)`), and the slot markers `dsLeadingIcon`, `dsTrailingIcon`, `dsIcon` and `dsImage`. Standalone components with signal inputs and `OnPush`, written for zoneless change detection. Storybook shows them under **Angular**.

### Patch Changes

- Updated dependencies [c354e7d]
  - @helloantek/ds-core@2.56.0
