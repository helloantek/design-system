---
"@helloantek/ds-css": minor
"@helloantek/ds-react": minor
---

Add AI Trace (Sort UI 2.0): the steps an AI agent took, one line each. `TraceLine` shows a step with a status (`done`, `running` with a sweeping light, `error`, `pending`), an icon, a description and a trailing icon, and becomes a link with `href` or a button with `onClick`; `TraceCollapsible` opens to show what the step returned in a `TraceContent`; `Trace` stacks them and `TraceCode` shows command output. Running, failed and pending steps say so to assistive technology.
