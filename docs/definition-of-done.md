# Definition of Done: component

A component is ready for other projects when all of these hold:

**Fidelity**
- [ ] Every Figma variant and state is reachable through props or CSS states.
- [ ] `npm run test:visual -- <component>` passes; references cover all states of the default size, every size and every shape.
- [ ] `spec.json` + `layer-map.json` exist and every mapped layer is "exact"; any `skip` has a `$why`.

**Code**
- [ ] Styles live in `@helloantek/ds-css`, use only `var(--ds-*)`, and work with plain HTML.
- [ ] The React adapter only renders markup; props match Figma property names (see README).
- [ ] Native element, `type`/`ref`/`className`/rest props forwarded.
- [ ] Typecheck passes; no `any`.

**Accessibility**
- [ ] Keyboard: focusable, operable with Enter/Space (or the element's native keys), visible `:focus-visible`.
- [ ] Custom widgets (no native element) follow their WAI-ARIA pattern and have keyboard/mouse tests in `tools/storybook-interactions.mjs`.
- [ ] Accessible name required by the types where there is no visible text.
- [ ] Disabled and busy states are announced (`disabled`, `aria-busy`, `aria-disabled`).
- [ ] axe is clean, or each remaining finding is a known design-token issue reported to design.
- [ ] Respects `prefers-reduced-motion`.

**Theming**
- [ ] Renders correctly for every brand and both colour schemes (Brands story).

**Documentation**
- [ ] Stories: Playground, variant matrix, sizes, Brands; docs link to the Figma node.
- [ ] Props table updated in the README.
- [ ] Changeset added.
