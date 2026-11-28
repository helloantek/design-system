---
'@helloantek/ds-react': patch
'@helloantek/ds-angular': patch
---

Dialog, Sheet, Drawer and Alert Dialog report Escape at once (on `cancel`), and a late `close` event no longer closes a dialog that was opened again right after Escape.
