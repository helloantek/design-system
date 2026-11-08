---
'@helloantek/ds-css': minor
'@helloantek/ds-react': minor
---

Textarea's character-count ring is now the Progress circle (`ProgressCircle`, 16 px, thickness 15) instead of its own SVG, so it looks and animates like it; over a soft limit it is still red. Removed: `ds-textarea__progress-track`, `ds-textarea__progress-indicator` and `--textarea-progress`; markup that used them should use the Progress circle markup (with the `ds-textarea__progress` class) shown in textarea.css.
