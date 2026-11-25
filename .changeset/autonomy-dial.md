---
'@helloantek/ds-css': minor
'@helloantek/ds-react': minor
---

New AutonomyDial (Patterns/Autonomy Dial): how much one agent may do on its own. A three-stop dial (Always ask, If risky, Full auto) and every action split between "Runs on its own" and "Asks you first", with the tool it uses and how risky it is; locked actions always ask, and their lock says why in a tooltip. `runsOnItsOwn(action, level)` gives the same split for your own logic.
