# ADR 0001: Layered packages and brands as token sets

**Status:** accepted · 2026-10

## Context
The design system must serve several projects (React/Next.js, other web frameworks, native iOS/Android) and several brands that share one UI kit. The Button pilot showed that generated framework code is not reusable as is, while token values and visual behaviour are.

## Decision
- `@helloantek/ds-tokens`: Figma variables → CSS, JS, Swift, Kotlin per brand. No framework.
- `@helloantek/ds-css`: component styles as BEM classes on tokens only. Works with any markup.
- `@helloantek/ds-react`: thin React adapter (markup + classes). Other adapters (Web Components, native) build on the same tokens and, for web, the same CSS.
- A brand is a selection of Figma modes in `brands.json`, not a fork of components.
- Figma is the source of truth for values; code is verified against Figma renders in CI.

## Consequences
- A new web framework costs one thin adapter; a new brand costs a JSON entry and Figma modes.
- Component logic (keyboard, ARIA) is duplicated per adapter; keep adapters thin and covered by the same stories and visual references.
- Native platforms get tokens now; native components are separate work.
