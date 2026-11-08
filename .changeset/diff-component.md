---
"@helloantek/ds-css": minor
"@helloantek/ds-react": minor
---

Add Diff (Sort UI 2.0): a file's changes in a card with its path and counts. `DiffLine` draws a context, added, removed, empty or hunk line with one or two line numbers, a sign, a solid or hatched bar, indent guides, syntax colours (`DiffToken`) and changed words (`DiffWord`); `DiffFold` is a button for folded unchanged lines, `DiffActions` holds buttons under a change and `DiffSplit` shows old and new side by side. `diffLines(before, after)` and `diffWords(line, other)` compute the lines and changed words from two versions.
