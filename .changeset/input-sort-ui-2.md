---
"@helloantek/ds-css": minor
"@helloantek/ds-react": minor
---

BREAKING: Input follows Sort UI 2.0 (Input, Input Group, Field, Kbd), and its sizes take the Figma names Button already uses. `size`: `xl` (40 px, new) · `lg` (36 px) · `default` (32 px, was `sm`); the default is now `default` (was `lg`), and classes are `ds-field--xl|lg|default` / `ds-input--xl|lg|default` (`ds-field--sm` / `ds-input--sm` no longer style an Input). Looks: a 10 px radius, 13 px text, a 2 px focus ring, a red stroke and ring when invalid, 50 % opacity when disabled, 14 px label and description, a Kbd-style shortcut and an Outline xs button for `action`. Every other prop is unchanged: `shadow` adds Shadow/xs and `soft` is a borderless tinted field. Select keeps its Sort UI 1.3 label, caption and sizes until it moves to 2.0.
