---
'@helloantek/ds-css': patch
'@helloantek/ds-react': patch
---

Mobile: components no longer show the browser's grey tap highlight (it flashed over buttons, tabs and triggers as their own states changed). Collapsible content now animates its height open and closed, like Accordion, instead of appearing at once; closed content is hidden once collapsed and `--collapsible-gap` sets the space above it.
