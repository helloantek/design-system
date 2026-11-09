# Backlog

What is left after the Sort UI 2.0 component pages (all implemented, see [migration-sort-ui-2.md](migration-sort-ui-2.md)). Reviewed against the Sort UI 2.0 file (`4JnqgEbdlnKgiFrfmiwEZw`) on 2026-11-08. Each item follows [playbook.md](playbook.md) and is done when [definition-of-done.md](definition-of-done.md) holds.

## Next

| Item | What | Notes |
|---|---|---|
| Brand logos (Icons page `1:2`) | The 131 logos (GitHub, Google, Apple Pay, Visa…) | Later, from their owners' official sources (e.g. simple-icons), when a section needs them. The icon set itself is decided: Remix Icons, lucide only where Remix has none ([icons.md](icons.md)). |
| Marketing sections | Navigation Bar (with Logo), Hero, Features, Social Proof, About, Content, Pricing, Stats, CTA, FAQ, Footer | Eleven pages of page sections built from the components. To be scoped first: library components or Playground compositions. |

## Compared with affectUI (2026-11-09)

[affectUI](https://www.affectui.com/components) lists 90 React components for AI products and SaaS. Below, each of them is sorted against what we have. Its Pro items are paid, and the free ones have a license of their own, so we copy neither its code nor its look. What we take from it is the list of jobs a product needs done. We design each one in Sort UI 2.0 terms (tokens, `ds-css`, a Figma spec from design per [playbook.md](playbook.md)) and build it for React and Angular (ADR 0002).

**We have it (12):** Button, Checkbox, Combobox, Command Menu (Command), OTP Input (Input OTP), Select, Switch, Text Area (Textarea), Text Field (Input), Toaster (Sonner), Chat Composer (AI Chat Composer), Segmented Control (Toggle Group, Tabs).

**Phase 1: extend what we have (16).** Each is a variant or a demo of an existing component, so no new package API is needed.

| affectUI | Ours | What is missing |
|---|---|---|
| Agent Trail | AI Trace | A live timer on the running step, an "approval needed" step, a step counter (3/5) in the header |
| Usage Meter | Usage Bar | A credits demo by category, with a near-the-limit state |
| KPI Chart, Breakdown Chart, Compact Breakdown | Chart + Card | Demos: a metric card with a line chart; a stacked bar with a linked table; a total with ranked rows |
| Data Table | Table | Cell and range selection, editing in place, copy and paste (a big job: scope it first) |
| Date Range Picker | Date Picker | Presets and a comparison period |
| Inline Diff | Diff | Prose with per-word accept and reject |
| Dropzone | Attachment | A drop area that turns into Attachment rows with progress |
| Notification Stack | Sonner | A stack of persistent notices |
| Thinking Loader | Spinner | A label that cycles through phases |
| Tag Input | Combobox `multiple` | Pasting a list, flagging duplicates |
| Message Actions | Message | An actions bar (copy, regenerate, feedback) |
| Filter Menu | Dropdown Menu + Badge | A Playground composition: grouped filters with removable chips |
| Profile Menu | Dropdown Menu + Avatar | A Playground composition |
| Comment Thread | Message, Bubble | A thread with replies (Playground) |

**Phase 2: new general components (6).** Not tied to AI; worth having in the library. Ask design for a Sort UI 2.0 spec first.

| Component | Covers |
|---|---|
| `Stepper` | Stepper Form: numbered steps, done and current, inline validation |
| `Checklist` | Progress Tracker, Setup Guide, Tips Panel: tasks with a progress bar, collapsible groups, done state |
| `Stat` | Change Summary: a metric with its trend (value, delta, colour) |
| `ReactionBar` | Reaction Bar: like, comment and share counts in one pill |

**Phase 3: AI building blocks (11).** The pieces that recur across agent UIs. Each is small and composes from what we have (Card, Badge, Button, AI Trace, Diff).

| Component | Covers |
|---|---|
| `ToolCall` | Tool Call Card: one call with status and a timer, folding open to arguments and result |
| `ApprovalRequest` | Approval Card, Permission Request: what the agent wants to do, its risk, Approve or Deny, then folds to one line |
| `Thinking` | Thinking State: a timer, sources searched, steps appearing one by one (on AI Trace) |
| `Citation` | AI Answer, Cited Answer: inline citation chips that preview their source, and source cards |
| `ModelPicker` | Model Picker: a Select with each model's speed, quality and cost |
| `ContextMeter` | Context Window: what fills the context, on Usage Bar |
| `DecisionCard` | Decision Card: numbered options, one recommended, plus a free answer |
| `AgentPlan` | Agent Plan: a step list to review (reorder, edit, remove) before the agent runs it |
| `TaskStatus` | Running Now: a header pill with running tasks and the ones that need you |

**Phase 4: agent patterns (45).** Whole screens and dashboards: Agent Inbox, Agent Tree, Agent Lanes, Agent Fleet, Agent Graph, Agent Queue, Agent Ledger, Agent Recap, Trace Waterfall, Cost Waterfall, Context Map, Conflict Radar, Judge Bracket, Parallel Attempts, Fan-out Grid, Fallback Chain, Root Cause Tree, Decision Tree, Delegate Board, Scheduled Runs, Review Center, Approval Gates, Collaboration Stream, and the rest of the list: Agent Checkpoints, Agent Cursors, Agent Findings, Agent Handoff, Agent Monitor, Agent Steering, Autonomy Dial, Away Summary, Comments Panel, Decision Inbox, Experiment Card, Memory Panel, Plan vs Actual, Prompt Library, Smart Recommendation, Tool Access Map, Writing Assistant, Email Draft, Billing Schedule, Integration Picker, Integration Settings, Project Card.

These are products rather than components. Build each one as a `Playground/*` composition of phases 1–3 when a product needs it, and promote a part to the library only when a second product needs it too.

## Code debt

Found in the code, not missing from Figma.

None right now.

## Not in Sort UI 2.0

Sort UI 1.3 Input variants that Sort UI 2.0 dropped. Build them only when a product needs them, then ask design for a 2.0 spec first.

| 1.3 variant | Would become |
|---|---|
| Input · Quantity, Quantity 2 | `NumberInput` (stepper: native `type="number"`, `−`/`+` buttons, min/max/step) |
| Input · Lead button | `FileInput` (wraps `<input type="file">`, shows the chosen file's name) |

## Done since the last backlog

Items from the previous backlog that Sort UI 2.0 components now cover.

| Previous item | Covered by |
|---|---|
| Input · Lead / Tail dropdown | Input Group Dropdown (`InputDropdown` as a DropdownMenu trigger, passed as the Input's `action`) |
| Select Menu · Search Input, Empty State | Combobox (search in the field, "No results") |
| Select Menu Items · Caption | Select Item Description (`description`) |
| Select Menu · Button | Dropped in Sort UI 2.0 (Select Content holds only items) |
| Input · Tags, Inline tags | Combobox with `multiple` (removable chips) |
| Popup positioning (code debt) | Popups flip and shift inside the window (README, "Popups near the window's edge") |
| Select indicators (code debt) | `indicator="checkbox"` / `"radio"` draw the Checkbox and Radio components, inert inside the option |
| Textarea character-count ring (code debt) | `ProgressCircle` (16 px, thickness 15), red over a soft limit |
