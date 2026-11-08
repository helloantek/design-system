---
'@helloantek/ds-css': minor
'@helloantek/ds-react': minor
---

Select's `indicator="checkbox"` and `"radio"` draw the Checkbox and Radio components (`ds-checkbox`, `ds-radio`) instead of their own boxes, so they look and change with them. Their inputs only show the option's state: inert, out of the tab order, unnamed and hidden from assistive technology; the option still takes focus and clicks. Removed: `ds-select__box`, `ds-select__box--checkbox`, `ds-select__box--radio` and `ds-select__dot`; markup that used them should use the Checkbox and Radio markup shown in select.css.
