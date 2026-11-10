# Backlog

What is left after the Sort UI 2.0 component pages (all implemented, see [migration-sort-ui-2.md](migration-sort-ui-2.md)). Reviewed against the Sort UI 2.0 file (`4JnqgEbdlnKgiFrfmiwEZw`) on 2026-11-08. Each item follows [playbook.md](playbook.md) and is done when [definition-of-done.md](definition-of-done.md) holds.

## Next

| Item | What | Notes |
|---|---|---|
| Brand logos (Icons page `1:2`) | The 131 logos (GitHub, Google, Apple Pay, Visa…) | Later, from their owners' official sources (e.g. simple-icons), when a section needs them. The icon set itself is decided: Remix Icons, lucide only where Remix has none ([icons.md](icons.md)). |
| Marketing sections | Navigation Bar (with Logo), Hero, Features, Social Proof, About, Content, Pricing, Stats, CTA, FAQ, Footer | Eleven pages of page sections built from the components. To be scoped first: library components or Playground compositions. |

## Patterns: everything affectUI has (2026-11-09)

[affectUI](https://www.affectui.com/components) lists 90 React components for AI products and SaaS. We want a counterpart for every one of them. We copy neither its code nor its look; its Pro items are paid, and the free ones have a license of their own. What we take is the job each one does, and we build that our own way.

**How each one is made**
1. **Behaviour.** A short spec of our own: states, keyboard, accessibility. It is written from affectUI's public description and nothing else.
2. **Figma.** Claude drafts it on the Sort UI 2.0 file's **Patterns** page (`6084:1290`). The draft uses instances of our components, our variables and text styles, and Remix icons ([icons.md](icons.md)). Tomek approves it or edits it in place, and his edits set the rules for the next drafts.
3. **Code.** Each approved pattern becomes a `Patterns/*` story in React and Angular. Its Figma frames are the references for the visual check, and the interaction tests cover its keyboard and states.

All patterns are drawn first, stage by stage, and coded afterwards in the same stages. A pattern is done when [definition-of-done.md](definition-of-done.md) holds.

**We have it already (12):** Button, Checkbox, Combobox, Command Menu (Command), OTP Input (Input OTP), Select, Switch, Text Area (Textarea), Text Field (Input), Toaster (Sonner), Chat Composer (AI Chat Composer), Segmented Control (Toggle Group, Tabs).

**The other 78, in 8 stages:**

| Stage | Patterns | Drawn |
|---|---|---|
| 1. Decisions and permissions (8) | Approval Card, Tool Call Card, Permission Request, Decision Card, Approval Gates, Decision Inbox, Autonomy Dial, Review Center | 8 / 8 (in review) |
| 2. Answers and thinking (12) | AI Answer, Cited Answer, Thinking State, Thinking Loader, Message Actions, Model Picker, Context Window, Inline Diff, Writing Assistant, Email Draft, Prompt Library, Memory Panel | 12 / 12 (in review) |
| 3. One agent at work (10) | Agent Trail, Agent Monitor, Agent Plan, Agent Steering, Running Now, Plan vs Actual, Agent Checkpoints, Parallel Attempts, Agent Handoff, Smart Recommendation | 10 / 10 (redrawn, in review) |
| 4. Many agents (13) | Agent Inbox, Agent Fleet, Agent Tree, Agent Lanes, Agent Queue, Fan-out Grid, Delegate Board, Collaboration Stream, Agent Cursors, Conflict Radar, Agent Findings, Agent Graph, Tool Access Map | 0 / 13 |
| 5. Runs, costs and causes (11) | Trace Waterfall, Cost Waterfall, Context Map, Fallback Chain, Judge Bracket, Root Cause Tree, Decision Tree, Agent Ledger, Agent Recap, Away Summary, Scheduled Runs | 0 / 11 |
| 6. Data and SaaS (9) | KPI Chart, Breakdown Chart, Compact Breakdown, Change Summary, Usage Meter, Experiment Card, Data Table, Billing Schedule, Project Card | 0 / 9 |
| 7. Forms and onboarding (10) | Stepper Form, Progress Tracker, Setup Guide, Tips Panel, Date Range Picker, Dropzone, Tag Input, Filter Menu, Integration Picker, Integration Settings | 0 / 10 |
| 8. People and messages (5) | Comment Thread, Comments Panel, Notification Stack, Reaction Bar, Profile Menu | 0 / 5 |

**Drafting rules so far** (from Tomek's reviews):
- Remix icons, not the Sort UI / lucide set. A running step shows the Spinner (default size, 17 px, the size of the icons).
- Toggle Group: Variant=Default with Spacing=2, not the joined Outline group.
- Layout frames around a card do not clip, or they cut off the card's outside border and shadow.
- Cards use `colors/border` (`--ds-border`), the Sort UI 2.0 name of 1.3's `border/default`.
- Inside a Card slot, put side-by-side content in a frame of its own: Figma does not lay out a slot's children again after they change.
- A popover floats: it is out of the card's flow, hugs its content, hangs under the thing it belongs to and uses `Surface/Popover`; it never becomes a full-width bar inside the card.
- A keyboard shortcut is part of its button: a Kbd (Size=sm) in the button's trailing icon slot, Variant=Inverted on a Default (dark) button. Never a Kbd or a key legend next to the buttons.
- Compact scale: a one-line header (14 px medium title, its meta on the right), rows of 28 to 34 px, 13 to 14 px text, cards 380 to 640 px wide. Times, counts and costs sit right-aligned.
- Status colours are the Badge palette tokens (`colors/palette/*`): running blue, needs you amber, done green, failed red, paused muted. Running shows the Spinner in blue, needs you a dashed amber ring; done is a solid green circle (`colors/palette/green-text`) with a check in `colors/background`, failed a solid red one (`colors/palette/red-text`) with a cross.
- Tools show their logo from Remix (GitHub, Slack, Google Drive…); an agent with no logo gets a letter or a robot tile.
- Each pattern is drawn in all its states: at work, needs you, failed, done, and folded or empty. One state per card: a card shows one idea, not several at once.
- Use an icon where the job needs one, not a hand-drawn chart: progress is Remix `progress-1-line` … `progress-8-line`. Figma's Remix library is 2.5; the icons the code's Remix 4.9 adds (progress, the Claude, Gemini, Notion and Figma logos, sparkling, arrow-up-down…) are local components in the frame "Remix 4.9 icons" on the Patterns page.
- Time bars (Plan vs Actual): the planned ghost is dashed with 2 px corners; the actual bar rounds only its start, and the part over plan follows after a 2 px gap, rounding only its end.
- Follow the original's structure where it carries the job (Agent Handoff: agents on top, a handoff column between each pair, linked by lines); only the look and the content are ours.

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
