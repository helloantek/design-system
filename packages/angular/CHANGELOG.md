# @helloantek/ds-angular

## 2.58.0

### Minor Changes

- f35642f: Tooltip and Dialog for Angular, with the React components' markup and behaviour. `<ds-tooltip>` goes around its trigger (`content`, `side`, `shortcut`, `delay`, `[(open)]`, an icon marked `dsIcon`): it describes the trigger, shows on hover after the delay or at once on keyboard focus, and flips and shifts inside the window with ds-core's placement maths. `<ds-dialog>` is a native modal `<dialog>` (`title`, `titleAs`, `description`, `closeButton`, `closeLabel`, `bodyPadding`, `footerVariant`, `width`, `[(open)]`): `dsDialogTrigger` marks the element that opens it, `<ng-container dsDialogFooter>` holds the actions and `dsDialogClose` closes it from a button; Escape, the Close button or the backdrop close it and focus returns to the trigger.
- 8156965: Select for Angular, with the React Select's markup and behaviour: `<ds-select>` with `options` as data (options, groups, separators, captions; an option's `caption`, `description`, `badge`, `disabled`, and `icon` / `media` as templates that get the option as context), `label`, `caption`, `error`, `placeholder`, `variant`, `size`, `indicator` (check, Checkbox or Radio), `multiple`, `tags` with `tagsOverflow`, `disabled`, `required`, `name` (hidden inputs) and `[(open)]`; `dsLeadingIcon` / `dsTrailingIcon` mark the field's icons. Keyboard (arrows, Home/End, PageUp/PageDown, Enter/Space, Escape, Tab, type-ahead) uses ds-core's list navigation and type-ahead, as React does. The value (`[(value)]`: a string or `null`, a list with `multiple`) works with Signal Forms, Reactive Forms and `ngModel`.

### Patch Changes

- @helloantek/ds-core@2.58.0

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
