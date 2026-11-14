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
| 1. Decisions and permissions (8) | Approval Card, Tool Call Card, Permission Request, Decision Card, Approval Gates, Decision Inbox, Autonomy Dial, Review Center | 8 / 8 (accepted) |
| 2. Answers and thinking (12) | AI Answer, Cited Answer, Thinking State, Thinking Loader, Message Actions, Model Picker, Context Window, Inline Diff, Writing Assistant, Email Draft, Prompt Library, Memory Panel | 12 / 12 (accepted) |
| 3. One agent at work (10) | Agent Trail, Agent Monitor, Agent Plan, Agent Steering, Running Now, Plan vs Actual, Agent Checkpoints, Parallel Attempts, Agent Handoff, Smart Recommendation | 10 / 10 (accepted) |
| 4. Many agents (13) | Agent Inbox, Agent Fleet, Agent Tree, Agent Lanes, Agent Queue, Fan-out Grid, Delegate Board, Collaboration Stream, Agent Cursors, Conflict Radar, Agent Findings, Agent Graph, Tool Access Map | 13 / 13 (accepted) |
| 5. Runs, costs and causes (11) | Trace Waterfall, Cost Waterfall, Context Map, Fallback Chain, Judge Bracket, Root Cause Tree, Decision Tree, Agent Ledger, Agent Recap, Away Summary, Scheduled Runs | 11 / 11 (accepted) |
| 6. Data and SaaS (9) | KPI Chart, Breakdown Chart, Compact Breakdown, Change Summary, Usage Meter, Experiment Card, Data Table, Billing Schedule, Project Card | 9 / 9 (drawn, in review) |
| 7. Forms and onboarding (10) | Stepper Form, Progress Tracker, Setup Guide, Tips Panel, Date Range Picker, Dropzone, Tag Input, Filter Menu, Integration Picker, Integration Settings | 0 / 10 |
| 8. People and messages (5) | Comment Thread, Comments Panel, Notification Stack, Reaction Bar, Profile Menu | 0 / 5 |

**Drafting rules so far** (from Tomek's reviews):
- Remix icons (the "Remix Icon Set v4.91" library), not the Sort UI / lucide set. A running step shows the Spinner (default size, 17 px, the size of the icons).
- Toggle Group: Variant=Default with Spacing=2, not the joined Outline group.
- Layout frames around a card do not clip, or they cut off the card's outside border and shadow.
- Cards use `colors/border` (`--ds-border`), the Sort UI 2.0 name of 1.3's `border/default`.
- Inside a Card slot, put side-by-side content in a frame of its own: Figma does not lay out a slot's children again after they change.
- A popover floats: it is out of the card's flow, hugs its content, hangs under the thing it belongs to and uses `Surface/Popover`; it never becomes a full-width bar inside the card.
- A keyboard shortcut is part of its button: a Kbd (Size=sm) in the button's trailing icon slot, Variant=Inverted on a Default (dark) button. Never a Kbd or a key legend next to the buttons.
- A key that is a symbol is an icon, not text: Kbd Type=Icon with the Remix icon (↵ `corner-down-left`, ⌘ `command`, ⌫ `delete-back-2`). A shortcut of two keys is a Kbd Group (Size=16) with one Kbd per key in its slot: ⌘ ↵, Ctrl ↵, ⌘ Z. Letters, digits and Esc stay text.
- Compact scale: a one-line header (14 px medium title, its meta on the right), rows of 28 to 34 px, 13 to 14 px text, cards 380 to 640 px wide. Times, counts and costs sit right-aligned.
- Status colours are the Badge palette tokens (`colors/palette/*`): running blue, needs you amber, done green, failed red, paused muted. Running shows the Spinner in blue, needs you a dashed amber ring; done is a solid green circle (`colors/palette/green-text`) with a check in `colors/background`, failed a solid red one (`colors/palette/red-text`) with a cross.
- Tools show their logo from Remix (GitHub, Slack, Google Drive…); an agent with no logo gets a letter or a robot tile.
- Each pattern is drawn in all its states: at work, needs you, failed, done, and folded or empty. One state per card: a card shows one idea, not several at once.
- Use an icon where the job needs one, not a hand-drawn chart: progress is Remix `progress-1` … `progress-8` (line). Every icon comes from the "Remix Icon Set v4.91" library (the version the code uses); the old Remix 2.5 library is no longer used in the patterns.
- Time bars (Plan vs Actual): the planned ghost is dashed with 2 px corners; the actual bar rounds only its start, and the part over plan follows after a 2 px gap, rounding only its end.
- A pattern that lives in a conversation is drawn there too: an approval under the agent's message, a question above the chat composer (the AI Chat Composer component), a tool call after the user's message.
- On the light Destructive button the shortcut is the Default Kbd, not the Inverted one.
- Highlighted words (a cited sentence, a suggested edit) carry a continuous tint behind the words, not a pill per phrase: blue for a citation, red struck for removed words, green for added ones, the stronger tint for the one in focus.
- Follow the original's structure where it carries the job (Agent Handoff: agents on top, a handoff column between each pair, linked by lines); only the look and the content are ours.
- Radii follow the size of the thing: small elements inside a card (rows, slots, chips, tiles of 20 to 40 px) use `radius/sm` or `radius/md`; `radius/lg` and up are for cards and panels. Small elements with a large radius look like pills.
- A value over time is a line chart (line with a light area under it, the latest point marked), not bars.
- Colours that sort things into kinds never reuse a status colour (blue running, amber needs you, green done, red failed): use violet, teal, pink and cyan from the palette. So far: LLM calls and cost steps violet; changed files violet; agent identities (cursors) violet, teal, pink; calls blue and answers green in Agent Graph, as in the original (a pulse that travels along a link, not a status); context parts (Context Map) files blue, conversation violet, tool results teal, tool definitions pink, instructions grey; prompt categories violet, teal, pink, cyan, while the gaps to fill in a prompt stay blue so they never share a colour with a category. Context Window keeps its first colours (Tomek preferred them). Logic gates and usage bars stay neutral grey. A long label may end in an ellipsis when it has to.
- Connectors leave and reach their nodes horizontally, with enough room between columns that they read as a fan, not a vertical bundle.
- Cards side by side that show options of the same kind have the same height.
- Selection handles sit on the corners of a square selection frame, even when the selected thing has rounded corners.
- Every connector takes the colour of the indicator on the node it leads to (a busy agent, a tool being called, a failed call, the agent's pick in violet), in the same shade as that node's border, never a lighter tint. A lit path (the way to a root cause, a winner, a chosen branch) colours its connectors and its nodes alike: the line from the node up to its parent takes the node's border colour (blue checking or chosen, red root cause, green winner), the rest stays grey and dashed. When content grows, the nodes are laid out again so nothing overlaps.
- Connectors share one look across patterns: 1.5 px, rounded elbows (corner radius 8), leaving and entering nodes horizontally, never across a label. A connector with nothing to signal is plain border grey. Every green that means done or confirmed is the same green as the confirmations (green text), never the stronger green solid.
- A node at work keeps its normal tile (card fill, grey border) and shows a soft pulse around it (two faint rings of the running blue), not a blue or tinted tile and no strong glow. Needs you (amber dashed) and failed (red) still colour the tile.
- Text never overlaps its neighbour or leaves its card or tooltip: a long label wraps, or ends in an ellipsis inside a box of fixed width. A highlighted span on a chart (a pause, a limit) starts exactly where the line changes.

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
