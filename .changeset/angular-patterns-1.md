---
'@helloantek/ds-angular': minor
---

The patterns Approval Card, Tool Call Card and Permission Request for Angular, with the React components' markup and behaviour: `<article dsApprovalCard>` (with `dsApprovalCardDetails`, `dsApprovalCardSummary`, `dsApprovalCardPreview`, `dsApprovalCardRecipients`; Esc denies, Enter approves), `<div dsToolCall>` and `<div dsToolCallGroup>` (opens to the arguments and result with Copy; a failed call opens with Retry), and `<article dsPermissionRequest>` (with `dsPermissionScope` and `dsPermissionFiles`; a duration toggle group; Esc denies, Enter allows). Toggle Group gets `allowEmpty` (set `false` for a single choice that always has a value) and Checkbox `fieldClass` (classes on its field).
