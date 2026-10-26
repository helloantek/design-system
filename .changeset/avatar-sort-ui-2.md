---
"@helloantek/ds-css": minor
"@helloantek/ds-react": minor
---

BREAKING: Avatar follows Sort UI 2.0 (Avatar, Avatar Badge, Avatar Group). `size`: `xs` · `sm` · `default` (was `md`, now the default) · `lg` · `xl`, with `2xs`, `2xl` and `3xl` kept as extensions; `shape`: `round` · `square` (was `circular` · `rounded`). Initials sit on a muted fill in muted text; with neither picture nor initials the avatar shows an icon (a person, or the new `icon` prop) instead of the silhouette; the inner stroke is gone. New: `AvatarBadge` (Figma "badge": a primary dot, optionally with an icon, inside the bottom right corner) and `AvatarGroup` (overlapping avatars with a ring, `max`/`total` for the "+N" count). `StatusBadge` and both badge slots are unchanged (Sort UI 1.3).
