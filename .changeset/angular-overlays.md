---
'@helloantek/ds-angular': minor
---

Tooltip and Dialog for Angular, with the React components' markup and behaviour. `<ds-tooltip>` goes around its trigger (`content`, `side`, `shortcut`, `delay`, `[(open)]`, an icon marked `dsIcon`): it describes the trigger, shows on hover after the delay or at once on keyboard focus, and flips and shifts inside the window with ds-core's placement maths. `<ds-dialog>` is a native modal `<dialog>` (`title`, `titleAs`, `description`, `closeButton`, `closeLabel`, `bodyPadding`, `footerVariant`, `width`, `[(open)]`): `dsDialogTrigger` marks the element that opens it, `<ng-container dsDialogFooter>` holds the actions and `dsDialogClose` closes it from a button; Escape, the Close button or the backdrop close it and focus returns to the trigger.
