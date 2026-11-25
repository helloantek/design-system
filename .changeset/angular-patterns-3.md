---
'@helloantek/ds-angular': minor
---

The patterns Decision Inbox, Review Center and Autonomy Dial for Angular, with the React components' markup and behaviour: `<section dsDecisionInbox>` with `<li dsDecisionInboxItem>` and `<li dsDecisionInboxAnswered>` (Undo takes the focus, the row folds away after `dismissAfter`), `<section dsReviewCenter>` with `<li dsReviewCenterQueueItem>`, `<article dsReviewCenterItem>` and `<section dsReviewCenterDone>` (single-key actions, Reject asks why with 1–4, Z undoes), and `<section dsAutonomyDial>` (a three-stop dial; locked actions always ask, with a Tooltip on the lock; `runsOnItsOwn`). With them, all eight stage 1 patterns are in ds-angular. Fix: a closed Tooltip (and other placed popups) now carries its `side` class rather than `top`.
