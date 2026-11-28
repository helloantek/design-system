# @helloantek/ds-core

## 2.58.0

### Minor Changes

- badf009: The patterns Context Window, AI Answer, Cited Answer and Inline Diff for Angular, with the React components' markup and behaviour: `<section dsContextWindow>`, `<article dsAIAnswer>` (with `dsAIAnswerPoints`, `dsAIAnswerPoint`, `dsAIAnswerCitation`, `dsAIAnswerCaret`), `<article dsCitedAnswer>` and `<section dsInlineDiff>` (Y and N on the focused edit, Accept all, Reject all, Undo). The Context Window maths, `formatTokens` and `contextCells`, moved to ds-core (ds-react re-exports them as before).

## 2.57.0

## 2.56.0

### Minor Changes

- c354e7d: New package `@helloantek/ds-core`: the behaviour the adapters share, without a framework (ADR 0002). It starts with popup placement (`computePlacement`), list navigation (`moveEnabled`, `firstEnabled`, `lastEnabled`, `pageEnabled`), type-ahead (`Typeahead`) and `revealInList`. `@helloantek/ds-react` now uses it for every popup's placement, Select's keyboard navigation and type-ahead, and list scrolling in Select, Combobox and Command; its API and behaviour do not change. `ds-core` is installed with `ds-react` as a dependency.
