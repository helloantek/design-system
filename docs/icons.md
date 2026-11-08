# Icons

Audit of the icons in Sort UI 2.0 and in the code, 2026-11-08.

## Decision

- **Remix Icons** (`@remixicon/react`, the line style, `Ri…Line`) is the icon set of the library, its stories and the apps that use it.
- **lucide** only for an icon Remix does not have (the ten in the table below). `lucide-react` is not a dependency yet; add it when the first of them is needed, with the 1.25 px stroke (`absoluteStrokeWidth`) at 16 px so it sits with the Remix icons.
- **Brand logos** (131 on the Icons page: GitHub, Google, Apple Pay, Visa…) come later, from their owners' official sources (e.g. simple-icons), when a section needs them.

Sort UI 2.0's Icons page (`1:2`) holds 1,668 lucide icons (stroked, 1.25 px, drawn at 17.3 px: a 16 px icon scaled by 1.08) and the 131 logos. The components and demos use 135 of the icons.

## Inside the components

### Glyphs drawn in the components

Most components draw their own glyphs as inline SVG traced from Figma's lucide icons (16 px, 1.25 px stroke), so they match the Figma references the visual check compares. They are part of a component's look, not an icon you choose: they stay as they are, outside the Remix rule.

| Component | Glyphs (Figma name) |
|---|---|
| Accordion | chevron-down |
| Avatar | user (no picture or initials); Status Badge: its status shapes |
| Breadcrumb | chevron-right, dot (separators), chevron-down, ellipsis |
| Bubble | chevron-down (Show more) |
| Calendar | chevron-left, chevron-right |
| Carousel | chevron-left, chevron-right |
| Checkbox | check, minus |
| Collapsible | chevron-down, chevron-up |
| Combobox | chevron-down, check, x (chip remove) |
| Command | search, check |
| Date Picker | calendar, chevron-down |
| Dialog / Alert Dialog / Sheet / Drawer | x (close) |
| Dropdown Menu, Context Menu, Menubar | check, chevron-right |
| Input | loader-circle (loading), chevron-down (Input Group Dropdown) |
| Input OTP | minus (separator) |
| Marker | loader-circle |
| Navigation Menu | chevron-down |
| Pagination | chevron-left, chevron-right, chevrons, ellipsis |
| Select | chevron-down, check, the checkbox check |
| Sidebar | chevron-right (collapse icon), panel-left (trigger) |
| Sonner | circle-check, info, triangle-alert, octagon-x, loader-circle, x |
| Spinner | loader-circle |
| Table | chevrons-up-down, arrow-up, arrow-down (sort) |

Exception: Message Scroller's jump buttons draw Remix's filled arrows (`arrow-down-line`, `arrow-up-line`); Figma's Message Scroller page has no icon to follow.

### Remix icons the components import

The components built in stage 6 import Remix for their fixed buttons; Figma draws lucide there.

| Remix icon | Component |
|---|---|
| `RiArrowDownSLine` | AITrace |
| `RiArrowRightSLine` | AITrace |
| `RiArrowUpLine` | AIChatComposer |
| `RiCloseFill` | Badge |
| `RiCloseLine` | AIChatComposer |
| `RiCollapseDiagonalLine` | AIChatComposer |
| `RiExpandDiagonalLine` | AIChatComposer |
| `RiExpandVerticalLine` | Diff |
| `RiStopLine` | AIChatComposer |
| `RiVoiceprintLine` | AIChatComposer |

Badge's `RiCloseFill` is the only filled icon among them (the remove button); the others are line icons.

## Figma icons and their Remix equivalent

The 135 icons the Sort UI 2.0 component pages and demos use: 120 have a Remix equivalent, 5 a close one, and 10 none (use lucide). "Pages" are the Figma component pages that use the icon, in the component or its demos.

| Figma (lucide) | Remix | Use | Pages |
|---|---|---|---|
| `apple` | `RiAppleFill` | Remix | Button |
| `arrow-left` | `RiArrowLeftLine` | Remix | Command |
| `arrow-right` | `RiArrowRightLine` | Remix | Badge, Button, Button Group, Collapsible |
| `arrow-right-left` | `RiArrowLeftRightLine` | Remix | Marker |
| `arrow-up` | `RiArrowUpLine` | Remix | AI Chat Composer, Attachment |
| `arrow-up-right` | `RiArrowRightUpLine` | Remix | AI Trace |
| `at-sign` | `RiAtLine` | Remix | Button, Button Group |
| `audio-lines` | `RiVoiceprintLine` | Remix | AI Chat Composer, Attachment |
| `badge-check` | `RiVerifiedBadgeLine` | Remix | Badge |
| `ban` | `RiForbidLine` | Remix | Button Group |
| `bell` | `RiNotification3Line` | Remix | Carousel, Command, Dialog |
| `book-open` | `RiBookOpenLine` | Remix | AI Trace |
| `bookmark` | `RiBookmarkLine` | Remix | Badge |
| `bot` | `RiRobot2Line` | Remix | AI Trace |
| `brain` | `RiBrainLine` | Remix | AI Trace |
| `calculator` | `RiCalculatorLine` | Remix | Command |
| `calendar` | `RiCalendarLine` | Remix | Command, Date Picker |
| `chart-column` | `RiBarChartLine` | Remix | Command |
| `check` | `RiCheckLine` | Remix | AI Chat Composer, Button Group, Checkbox, Combobox, Command, Context Menu, Dialog, Dropdown Menu, Select |
| `chevron-down` | `RiArrowDownSLine` | Remix | AI Chat Composer, AI Trace, Accordion, Attachment, Breadcrumb, Bubble, Button, Button Group, Calendar, Carousel, Collapsible, Combobox, Command, Date Picker, Dialog, Dropdown Menu, Input Group, Marker, Navigation Menu, Select, Sidebar |
| `chevron-left` | `RiArrowLeftSLine` | Remix | Calendar, Card, Carousel, Date Picker |
| `chevron-right` | `RiArrowRightSLine` | Remix | AI Chat Composer, AI Trace, Breadcrumb, Calendar, Card, Carousel, Context Menu, Date Picker, Dropdown Menu, Sidebar |
| `chevron-up` | `RiArrowUpSLine` | Remix | Accordion, Button Group, Carousel, Collapsible |
| `chevrons-down-up` | `RiContractUpDownLine` | Remix | Collapsible |
| `chevrons-up-down` | `RiExpandUpDownLine` | Remix | Sidebar |
| `circle` | `RiCheckboxBlankCircleLine` | Remix | Context Menu |
| `circle-alert` | `RiErrorWarningLine` | Remix | AI Trace, Alert |
| `circle-check` | `RiCheckboxCircleLine` | Remix | AI Trace, Alert, Context Menu, Dialog, Sonner |
| `circle-dashed` | — | **lucide** | AI Trace, Context Menu |
| `circle-dot` | `RiRadioButtonLine` | Remix | Context Menu |
| `circle-dot-dashed` | — | **lucide** | Context Menu |
| `circle-x` | `RiCloseCircleLine` | Remix | Context Menu |
| `clipboard-check` | `RiClipboardLine` (without the check) | Remix, close | Empty |
| `code-xml` | `RiCodeSSlashLine` | Remix | Diff |
| `command` | `RiCommandLine` | Remix | Kbd |
| `contrast` | `RiContrast2Line` | Remix | Command |
| `copy` | `RiFileCopyLine` | Remix | Button Group, Command, Context Menu, Dialog |
| `credit-card` | `RiBankCardLine` | Remix | Avatar, Command, Dialog |
| `database` | `RiDatabase2Line` | Remix | Dialog |
| `disc-3` | `RiDiscLine` | Remix | Carousel |
| `dot` | — | **lucide** | Breadcrumb |
| `download` | `RiDownloadLine` | Remix | Attachment, Button, Button Group, Carousel, Chart, Command, Context Menu |
| `ellipsis` | `RiMoreLine` | Remix | Breadcrumb, Chart, Checkbox, Pagination, Sidebar |
| `ellipsis-vertical` | `RiMore2Line` | Remix | Card, Carousel |
| `external-link` | `RiExternalLinkLine` | Remix | Dialog |
| `eye-off` | `RiEyeOffLine` | Remix | Context Menu |
| `file` | `RiFileLine` | Remix | AI Trace, Command |
| `file-code-corner` | `RiFileCodeLine` | Remix | AI Trace |
| `file-text` | `RiFileTextLine` | Remix | AI Trace |
| `flower-2` | `RiFlowerLine` | Remix | Carousel |
| `folder` | `RiFolderLine` | Remix | Command, Sidebar |
| `folder-plus` | `RiFolderAddLine` | Remix | Command |
| `folder-search` | — | **lucide** | AI Trace |
| `folders` | `RiFoldersLine` | Remix | Command |
| `forward` | `RiShareForwardLine` | Remix | Context Menu |
| `git-branch` | `RiGitBranchLine` | Remix | AI Trace, Button, Button Group |
| `github` | `RiGithubFill` | Remix | Avatar, Button |
| `globe` | `RiGlobalLine` | Remix | AI Chat Composer, AI Trace, Button Group, Select, Tooltip |
| `google` | `RiGoogleFill` | Remix | Button, Card |
| `hash` | `RiHashtag` | Remix | Context Menu |
| `heart` | `RiHeartLine` | Remix | Card, Carousel, Context Menu |
| `house` | `RiHome5Line` | Remix | Breadcrumb |
| `image` | `RiImageLine` | Remix | Context Menu |
| `import` | `RiImportLine` | Remix | Card |
| `inbox` | `RiInboxLine` | Remix | Card, Command |
| `info` | `RiInformationLine` | Remix | AI Chat Composer, Alert, Input Group, Sonner |
| `key-round` | `RiKey2Line` | Remix | Accordion |
| `languages` | `RiTranslate2` | Remix | Command |
| `layers` | `RiStackLine` | Remix | Card |
| `layers-2` | `RiStackLine` | Remix | AI Chat Composer |
| `layout-dashboard` | `RiDashboardLine` | Remix | Command |
| `link` | `RiLink` | Remix | Context Menu |
| `list-checks` | `RiListCheck2` | Remix | AI Trace |
| `list-filter` | `RiFilter3Line` | Remix | Chart |
| `loader-circle` | `RiLoader4Line` | Remix | AI Chat Composer, Button, Sonner, Spinner |
| `log-out` | `RiLogoutBoxRLine` | Remix | Command |
| `mail` | `RiMailLine` | Remix | Context Menu |
| `map` | `RiMap2Line` | Remix | Card |
| `map-pin` | `RiMapPinLine` | Remix | Alert Dialog |
| `maximize` | `RiExpandDiagonalLine` | Remix | AI Chat Composer |
| `message-circle` | `RiChat1Line` | Remix | Avatar |
| `minimize` | `RiCollapseDiagonalLine` | Remix | Collapsible |
| `minus` | `RiSubtractLine` | Remix | Button Group, Checkbox, Input OTP, Sidebar |
| `monitor` | `RiComputerLine` | Remix | Command |
| `monitor-smartphone` | `RiDeviceLine` | Remix | Accordion |
| `moon` | `RiMoonLine` | Remix | Command |
| `mountain` | `RiLandscapeLine` | Remix | Carousel |
| `music` | `RiMusic2Line` | Remix | Card |
| `octagon-x` | `RiSpam3Line` (check the shape) | Remix, close | Sonner |
| `palette` | `RiPaletteLine` | Remix | Command, Dialog |
| `panel-left` | `RiLayoutLeftLine` | Remix | Button |
| `paperclip` | `RiAttachment2` | Remix | AI Chat Composer |
| `pen` | `RiPenNibLine` | Remix | AI Trace |
| `pencil` | `RiPencilLine` | Remix | Context Menu |
| `pencil-line` | `RiEdit2Line` | Remix | AI Trace |
| `pin` | `RiPushpinLine` | Remix | Context Menu |
| `plug` | `RiPlugLine` | Remix | Dialog |
| `plus` | `RiAddLine` | Remix | AI Chat Composer, Attachment, Avatar, Badge, Button, Button Group, Command, Sidebar |
| `reply` | `RiReplyLine` | Remix | Context Menu |
| `rotate-ccw` | `RiResetLeftLine` | Remix | AI Trace, Attachment, Context Menu |
| `scan-face` | — | **lucide** | Alert Dialog |
| `scan-search` | `RiScan2Line` (without the magnifier) | Remix, close | AI Chat Composer |
| `scroll` | — | **lucide** | AI Chat Composer |
| `search` | `RiSearchLine` | Remix | AI Chat Composer, AI Trace, Button, Button Group, Combobox, Command, Input Group |
| `settings` | `RiSettings3Line` | Remix | Avatar, Dialog |
| `settings-2` | `RiEqualizerLine` | Remix | Command |
| `share` | `RiShareLine` | Remix | Button Group, Context Menu |
| `shield` | `RiShieldLine` | Remix | Dialog |
| `shield-check` | `RiShieldCheckLine` | Remix | Accordion |
| `signal-high` | `RiSignalCellular3Line` (cellular bars) | Remix, close | Context Menu |
| `smile` | `RiEmotionLine` | Remix | Command |
| `smile-plus` | `RiEmotionAddLine` | Remix, close | Context Menu |
| `sparkle` | `RiSparkling2Line` | Remix | Button |
| `square` | `RiStopLine` | Remix | AI Chat Composer |
| `square-arrow-out-up-right` | `RiShareBoxLine` | Remix | Button |
| `square-dashed` | — | **lucide** | Button, Button Group, Collapsible, Command, Dropdown Menu, Input Group, Item, Tabs, Toggle |
| `star` | `RiStarLine` | Remix | Carousel |
| `sun` | `RiSunLine` | Remix | Carousel, Command |
| `tag` | `RiPriceTag3Line` | Remix | Context Menu |
| `telescope` | — | **lucide** | AI Trace |
| `terminal` | `RiTerminalLine` | Remix | AI Trace |
| `trash-2` | `RiDeleteBinLine` | Remix | Alert Dialog, Button Group, Context Menu |
| `trending-down` | — | **lucide** | Card |
| `trending-up` | — | **lucide** | Card |
| `triangle-alert` | `RiAlertLine` | Remix | Button Group, Sonner |
| `unfold-vertical` | `RiExpandVerticalLine` | Remix | Diff |
| `user` | `RiUserLine` | Remix | Avatar, Button, Command, Sidebar |
| `user-plus` | `RiUserAddLine` | Remix | Command |
| `user-round` | `RiUser3Line` | Remix | Context Menu |
| `users` | `RiGroupLine` | Remix | AI Chat Composer, Carousel, Command |
| `volume-off` | `RiVolumeMuteLine` | Remix | Button Group |
| `wifi` | `RiWifiLine` | Remix | Card |
| `wifi-off` | `RiWifiOffLine` | Remix | Alert |
| `x` | `RiCloseLine` | Remix | AI Chat Composer, Attachment, Badge, Button, Combobox, Dialog, Sonner |
| `zap` | `RiFlashlightLine` | Remix | Button, Card |

## Figma icons kept as story fixtures

A few stories draw Figma's own icons, exported from the file, because the visual check compares them with the Figma references (the renderers import the same fixtures):

| Fixture | Icons | Used by |
|---|---|---|
| `Button.fixtures` `SquareDashed` | square-dashed (Figma's placeholder icon) | Button stories, renderers `button` and `context-menu` |
| `DropdownMenu.fixtures` `icons`, `SquareDashed`, `chevronDown` | user, credit-card, settings, help, log-out, user-plus, users, trash, mail, message, bell, panel-top/bottom/left/right, square-dashed | Dropdown Menu stories |
| `ContextMenu.fixtures` `icons` | circle-dot, circle-dashed, circle, circle-check, circle-x, user, signal, tag, link, hash, trash, copy, download, share, heart, rotate-ccw, image, eye-off, reply, forward, pin, mail, pencil, smile-plus | Context Menu stories, renderer `context-menu` |

They stay: they are what the references were drawn with. Stories that only show a component (not a Figma reference) use Remix.

## Remix icons in the stories

The stories (and Playground) use 103 Remix icons. When a story follows a Figma demo, its icons follow the table above; the lucide-only ones are stood in for by the nearest Remix icon (e.g. telescope by `RiSearchEyeLine` in AI Trace).

| Remix icon | Stories |
|---|---|
| `RiAddLine` | AIChatComposer, Attachment, Command, Input, MessageScroller, Playground, Sidebar |
| `RiArrowDownSLine` | AIChatComposer, Command, Sidebar, Table |
| `RiArrowLeftLine` | Command |
| `RiArrowLeftSLine` | Carousel |
| `RiArrowRightSLine` | Carousel, Table |
| `RiArrowRightUpLine` | AITrace |
| `RiArrowUpLine` | MessageScroller |
| `RiAtLine` | Input, Playground |
| `RiBankCardLine` | Command |
| `RiBarChartLine` | Command, Playground, Sidebar |
| `RiBookOpenLine` | AITrace, NavigationMenu |
| `RiBrainLine` | AITrace |
| `RiBrushLine` | Sidebar |
| `RiBuildingLine` | Select |
| `RiCalculatorLine` | Command |
| `RiCalendarLine` | Command, Playground, Sidebar |
| `RiChat1Line` | Sidebar |
| `RiChatSmile2Line` | MessageScroller |
| `RiCheckboxBlankCircleLine` | AITrace |
| `RiCheckboxCircleLine` | AITrace |
| `RiCloseLine` | AIChatComposer, Attachment, Input |
| `RiCodeSSlashLine` | Diff |
| `RiComputerLine` | Command |
| `RiContractUpDownLine` | Playground |
| `RiContrastLine` | Command |
| `RiDashboardLine` | Command |
| `RiDatabase2Line` | NavigationMenu |
| `RiDeleteBinLine` | Playground, Sidebar |
| `RiDiscLine` | Carousel |
| `RiDownloadLine` | Attachment, Carousel, Chart, Command, FileIcon, Menubar, Message, Playground |
| `RiEmotionLine` | Command |
| `RiEqualizerLine` | Command, Sidebar |
| `RiErrorWarningLine` | AITrace |
| `RiExpandUpDownLine` | Playground, Sidebar |
| `RiFileCodeLine` | AITrace, Diff |
| `RiFileCopyLine` | Command, Input, Message, Playground |
| `RiFileLine` | AITrace, Command, Menubar |
| `RiFileTextLine` | Playground, Sidebar |
| `RiFilter3Line` | Chart, Playground |
| `RiFlashlightLine` | NavigationMenu |
| `RiFlowerLine` | Carousel |
| `RiFolderAddLine` | AIChatComposer, Command |
| `RiFolderChartLine` | Sidebar |
| `RiFolderLine` | Command, Menubar, Playground, Sidebar |
| `RiFolderOpenLine` | AITrace |
| `RiGitBranchLine` | AITrace |
| `RiGlobalLine` | AIChatComposer, AITrace, NavigationMenu, Select, Sidebar |
| `RiGroupLine` | Carousel |
| `RiHardDrive2Line` | NavigationMenu |
| `RiHeart3Line` | Carousel |
| `RiHistoryLine` | NavigationMenu |
| `RiHome5Line` | Playground, Sidebar |
| `RiImageAddLine` | AIChatComposer |
| `RiInboxLine` | Command, Playground, Sidebar |
| `RiInformationFill` | Input, Select |
| `RiKeyboardLine` | Sidebar |
| `RiLandscapeLine` | Carousel |
| `RiLifebuoyLine` | NavigationMenu |
| `RiLineChartLine` | NavigationMenu |
| `RiLinkM` | Playground, Sidebar |
| `RiListCheck2` | AITrace |
| `RiLockLine` | Sidebar |
| `RiLogoutBoxRLine` | Command |
| `RiMailLine` | Playground |
| `RiMenuLine` | Sidebar |
| `RiMoonFill` | Avatar |
| `RiMoonLine` | Command |
| `RiMore2Fill` | Carousel |
| `RiMore2Line` | Chart |
| `RiMoreLine` | Input, Playground, Sidebar, Table |
| `RiNewspaperLine` | NavigationMenu |
| `RiNotification3Line` | Carousel, Command, Sidebar |
| `RiPaletteLine` | Command |
| `RiPencilLine` | AITrace, Sidebar |
| `RiPlugLine` | AIChatComposer |
| `RiPulseLine` | NavigationMenu |
| `RiPushpinLine` | Message |
| `RiQuestionLine` | Playground |
| `RiQuillPenLine` | AITrace |
| `RiRefreshLine` | Message, MessageScroller, Playground |
| `RiResetLeftLine` | AITrace, Attachment |
| `RiRobot2Line` | AITrace |
| `RiRocketLine` | Select |
| `RiSearchEyeLine` | AIChatComposer, AITrace |
| `RiSearchLine` | AITrace, Command, Empty, Input, Kbd, Playground, Sidebar, Table |
| `RiServerLine` | NavigationMenu |
| `RiSettings3Line` | Playground, Sidebar |
| `RiShareForwardLine` | Message |
| `RiShareLine` | Sidebar |
| `RiShieldUserLine` | Playground |
| `RiSparklingLine` | AIChatComposer |
| `RiStackLine` | Command, Playground, Sidebar |
| `RiStarFill` | Carousel |
| `RiSubtractLine` | Input |
| `RiSunLine` | Carousel, Command |
| `RiTeamLine` | Command, NavigationMenu, Playground, Sidebar |
| `RiTerminalLine` | AITrace |
| `RiTranslate2` | Command |
| `RiUser3Fill` | Badge |
| `RiUser3Line` | Playground, Select |
| `RiUserAddLine` | Command, Empty, Playground |
| `RiUserLine` | Command, Input |
| `RiVideoLine` | Sidebar |
