# Figma file checklist

Give this to the designer before a component is built. Each item removes a class of bugs found in the Button pilot.

- [ ] **Every value is a variable:** colours, spacing, radius, stroke width, font family, size, weight and line height. Raw values become hard-coded numbers in code.
- [ ] **Effects (shadows, focus rings) are effect styles,** with colours bound to variables where they differ between themes.
- [ ] **One component set per component,** with variant properties named as they should be in code (`Style`, `Size`, `State`, `Shape`) and values in a consistent case.
- [ ] **Every component property has a layer.** (The pilot found a `Tooltip` property with no tooltip in any variant.)
- [ ] **States are complete and consistent:** Default, Hover, Press, Focus, Disabled, Loading where relevant, the same across styles. (Pilot: Ghost Muted icon-only changed icon colour on hover, other styles did not.)
- [ ] **Text layers use text styles** with real font names. Text that should hug content uses auto width.
- [ ] **Auto layout everywhere,** no absolutely positioned children except true overlays.
- [ ] **Icons are instance-swap properties** pointing at one icon library.
- [ ] **Contrast meets WCAG AA** (4.5:1 for text under 18 px) in every theme mode. (Pilot: Destructive white text was 3.9–3.97:1.)
- [ ] **Brand-specific values live in modes** (Themes, Radius, Font Family), so a new brand is a new mode, not a new component.
