# ADR 0002: An Angular adapter on a shared behaviour core

**Status:** proposed · 2026-11

## Context
Projects in Angular need the design system. ADR 0001 planned for this: tokens (`ds-tokens`) and styles (`ds-css`) work with any markup, so Angular can load them as they are. What does not carry over is in `ds-react`: the markup with its ARIA, and the behaviour (popup placement, keyboard navigation in lists and menus, type-ahead, list scrolling, the diff, `fileIconFor`, chart scales, calendar maths).

ADR 0001 accepted that behaviour would be duplicated per adapter. With 60 components that means two implementations of every interaction, which drift apart and need every fix twice (the list-scrolling fix of 2026-11, in `revealInList` and `usePlacement`, would have had to be found and made again in Angular).

The target is Angular 22 (22.2 at the time of writing): standalone components, signal inputs and models, zoneless change detection, and Signal Forms (`FormValueControl`, stable in 22) next to Reactive Forms.

## Decision
- **`@helloantek/ds-core`**: framework-free TypeScript for the behaviour both adapters share: placement maths (flip, shift, cap) and `revealInList`; list and menu navigation (next and previous enabled item, Home/End, type-ahead); `diffLines` / `diffWords`; `fileIconFor`; chart scales and formatting; calendar maths. Pure functions and small state machines, no DOM framework, unit-tested without a browser.
  - Not in the core: rendering, state, lifecycle, events, focus and form integration. Those stay in each adapter.
  - Extracted step by step, when an Angular component needs it, each step as its own PR that leaves `ds-react`'s API and behaviour unchanged (verified by the visual check and the interaction tests).
- **`@helloantek/ds-angular`**: a thin Angular 22 adapter, the counterpart of `ds-react`: the same markup and `ds-*` classes, inputs named after Figma properties.
  - Standalone components with signal `input()` / `model()` / `output()`, `OnPush`, working without zone.js.
  - Content slots with `<ng-content select="…">` (icons, children).
  - Elements that are a native element with classes use an attribute selector on that element (`<button dsButton>`, `<a dsBadge>`), so native semantics and the markup stay as in React.
  - Fields (Input, Textarea, Select, Combobox, Checkbox, Radio, Switch, Slider, Date Picker, Input OTP) implement Signal Forms' `FormValueControl` / `FormCheckboxControl` and `ControlValueAccessor`, so they work with Signal Forms, Reactive Forms and `ngModel`.
  - Built with ng-packagr (Angular package format); peer dependency `@angular/core ^22`, widened as new majors are verified.
- **Icons**: Remix stays the main set (docs/icons.md). Remix has no official Angular package, so `ds-angular` gets a small `ds-icon` component for Remix SVGs; lucide's official `lucide-angular` works as is (the ds-css rule draws it at 1.25 px).
- **Verification is shared, not rewritten**:
  - The Figma visual check gets an Angular renderer that uses the same references and manifests, so every variant is compared with Figma as in React.
  - An Angular Storybook (`@storybook/angular`) uses the same story ids and markup, so the Playwright interaction tests run against it by changing the base URL. It is composed into the main Storybook (Storybook Composition), with the HTML panel and Docs pages.
- **Releases**: `ds-core` and `ds-angular` join the changesets group and are versioned with the other three packages.
- **Order**:
  1. This ADR.
  2. A pilot that covers every hard case: Button (attribute directive), Badge, Input and Checkbox (forms), Select (popup and list: the first `ds-core` extraction), Dialog (native modal, focus), Tooltip (placement). With it, the Angular Storybook, the renderer for the visual check and the shared interaction tests.
  3. The remaining components in batches, as in the Sort UI 2.0 migration, one PR per batch.

## Alternatives considered
- **A separate behaviour implementation in Angular (with Angular CDK: Overlay, ListKeyManager, FocusTrap).** Faster to start, but behaviour drifts from React and every fix is made twice. Worth it only for a few components, not for the whole system.
- **Web Components (e.g. Lit) shared by React and Angular.** One implementation, but a rewrite of `ds-react`, with weaker form integration and server rendering in both frameworks, and a component model that neither framework's users expect.

## Consequences
- Angular gets the same look (same CSS) and the same behaviour (same core) as React; a fix in the core reaches both.
- This replaces ADR 0001's "component logic is duplicated per adapter" for the logic in the core; markup, ARIA and focus handling are still written once per adapter, kept thin and checked by the same stories and references.
- `ds-react` gains a dependency on `ds-core`; its public API does not change.
- The pilot gives the real cost per component before the remaining ~50 are scheduled.
- New components are built for both frameworks from then on, or for React first with the Angular version in the next batch.
