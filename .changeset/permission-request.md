---
'@helloantek/ds-css': minor
'@helloantek/ds-react': minor
---

New PermissionRequest (Patterns/Permission Request): an agent asks for one specific right – who wants to do what, on which tool, and why; what it can and cannot do (`PermissionRequestScope`) or which files it touches (`PermissionRequestFiles`); and for how long (Just once, 1 hour, Always). A destructive right is allowed once at most. Esc denies, Enter allows; once answered it folds to one status line with Revoke, Change or Ask again.
