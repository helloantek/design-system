---
"@helloantek/ds-css": minor
"@helloantek/ds-react": minor
---

Keep popups inside the window. Select, Combobox, Dropdown Menu and its submenus, Menubar, Date Picker, Popover, Hover Card and Tooltip flip to the opposite side when theirs has no room (a menu at the bottom opens upwards, a submenu at the right edge opens on the left), and these and Navigation Menu shift along their side to stay 8 px from the window's edges; Select and Combobox lists get shorter and scroll when neither side has room. They measure again on scroll and resize. New CSS modifiers for the flipped sides: `ds-select__menu--top`, `ds-dropdown__content--top`, `ds-dropdown__content--left`, `ds-date-picker__panel--top`, and the `--popup-shift-x`, `--popup-shift-y` and `--popup-max-block-size` properties.
