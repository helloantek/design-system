---
"@helloantek/ds-tokens": major
"@helloantek/ds-css": major
"@helloantek/ds-react": major
---

BREAKING: Sort UI 2.0 only. The Sort UI 1.3 tokens and the `theme-2` brand are removed; `theme-1` is built from Sort UI 2.0 plus the 40 Sort UI 1.3 colours Badge and Status Badge still use (same `--ds-*` names). App code that used other 1.3 tokens moves to their 2.0 equivalents; see "Upgrading an app to 2.0.0" in `docs/migration-sort-ui-2.md` for the mapping (e.g. `--ds-bg-default` → `--ds-background`, `--ds-text-default` → `--ds-foreground`, `--ds-space-8` → `--ds-spacing-2`). Swift and Kotlin token files follow: `Theme2Tokens` is gone and `Theme1Tokens` holds the 2.0 names.
