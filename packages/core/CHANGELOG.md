# @helloantek/ds-core

## 2.56.0

### Minor Changes

- c354e7d: New package `@helloantek/ds-core`: the behaviour the adapters share, without a framework (ADR 0002). It starts with popup placement (`computePlacement`), list navigation (`moveEnabled`, `firstEnabled`, `lastEnabled`, `pageEnabled`), type-ahead (`Typeahead`) and `revealInList`. `@helloantek/ds-react` now uses it for every popup's placement, Select's keyboard navigation and type-ahead, and list scrolling in Select, Combobox and Command; its API and behaviour do not change. `ds-core` is installed with `ds-react` as a dependency.
