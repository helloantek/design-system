---
'@helloantek/ds-react': patch
---

CommandDialog: closing with Escape updates the open state at once, so a key that reopens it right after (/ or ⌘K) is no longer lost to the dialog's late close event.
