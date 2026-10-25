---
"@helloantek/ds-css": minor
"@helloantek/ds-react": minor
---

BREAKING: Select follows Sort UI 2.0 (Select, Select Item, Select Label, Select Separator, Select Content, Checkbox, Radio), and its sizes take the Figma names Button and Input use. `size`: `xl` (40 px, new) · `lg` (36 px) · `default` (32 px, was `sm`) · `sm` (28 px, new); the default is now `default` (was `lg`), and classes are `ds-field--xl|lg|default|sm`. Looks: the Input's field (10 px radius, 13 px text, focus ring, red stroke and ring when invalid, 50 % when disabled) with a chevron; a popover menu with 14 px radius; 32 px items with the check mark on the right, the accent highlight and 50 % disabled items; 12 px group labels and notes; 2.0 Checkbox and Radio. Every other prop and the behaviour (multi-select, tags, avatars, captions, badges, descriptions, keyboard) are unchanged; `shadow` adds Shadow/xs and `soft` is a borderless tinted field.
