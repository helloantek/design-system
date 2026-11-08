---
'@helloantek/ds-angular': minor
---

New package `@helloantek/ds-angular`: the Angular 22 adapter (ADR 0002), with the same markup and `ds-*` classes as `@helloantek/ds-react`. The pilot starts with `DsButton` (`<button dsButton>` / `<a dsButton>`: `variant`, `size`, `badge`, `type`) and `DsBadge` (`<span dsBadge>`: `variant`, `size`, `color`, `shape`, `border`, `dot`, `removable` and `(remove)`), and the slot markers `dsLeadingIcon`, `dsTrailingIcon`, `dsIcon` and `dsImage`. Standalone components with signal inputs and `OnPush`, written for zoneless change detection. Storybook shows them under **Angular**.
