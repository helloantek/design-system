---
"@helloantek/ds-css": minor
"@helloantek/ds-react": minor
---

Add Message Scroller (Sort UI 2.0): a chat transcript in a fixed height with a fade over the bottom edge and buttons to the end and the start. It follows the live edge while messages stream, settles a new `scrollAnchor` turn near the top edge with `anchorOffset` px of the previous reply in view, keeps the reader's place when earlier messages load, opens at `defaultScrollPosition` (`start`, `end`, `last-anchor`) and animates new turns; `controlRef` jumps to the start, the end or a message, and `onScrollStateChange` / `onAnchorChange` report where the reader is.
