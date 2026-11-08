import { Directive } from '@angular/core';

// Slot markers for projected content, the counterparts of React's `icon`, `leadingIcon` and `trailingIcon` props:
// put one on the element you project (`<svg dsLeadingIcon …>`). The host component detects them with contentChild
// and wraps them in the right ds-* element; they add nothing themselves.

/** Figma "Leading Icon" ("L Icon" slot). */
@Directive({ selector: '[dsLeadingIcon]' })
export class DsLeadingIcon {}

/** Figma "Trailing Icon" ("T Icon" slot). */
@Directive({ selector: '[dsTrailingIcon]' })
export class DsTrailingIcon {}

/** Figma Icon only / "❖ Icon": the one icon of an icon-only button, or a badge's icon. */
@Directive({ selector: '[dsIcon]' })
export class DsIcon {}

/** Figma Badge Variant=Image: a picture, e.g. `<img dsImage alt="" …>` (decorative). */
@Directive({ selector: '[dsImage]' })
export class DsImage {}
