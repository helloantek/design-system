---
'@helloantek/ds-react': patch
---

Lists scroll their active item into view without scrolling the page: Command, Select and Combobox no longer jump the window to a list further down (a Command below the fold used to scroll the page to its first item). An open Select or Combobox list also keeps its scroll position when the page scrolls or the window resizes, instead of jumping back to the top.
