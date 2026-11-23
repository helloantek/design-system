---
'@helloantek/ds-css': minor
'@helloantek/ds-react': minor
---

New Stepper (Sort UI 2.0 Stepper, Stepper Item and Stepper Indicator, ported from Sort UI 1.3): the steps of a flow in order, horizontal or vertical, with a round marker and a line (`variant="indicator"`) or a thin bar on top (`variant="bar"`). Pass `steps` with `current`, or `StepperItem` children with `state` (upcoming, current, complete, error), `label`, `caption`, `number` and `showLine`. It is an ordered list; the current step has `aria-current="step"`, and done or failed steps say so to screen readers.
