# Trying components before they ship

Every component starts on a branch and reaches the design system only when its pull request is merged. Until then anyone can try it in a **preview**: a Storybook built from that branch.

| Where | What it is |
|---|---|
| `https://helloantek.github.io/design-system/` | List of all previews, grouped by the kind in the branch name ([branches.md](branches.md)): new components, fixes, tokens, tooling, docs |
| `https://helloantek.github.io/design-system/main/` | `main`: what the design system ships |
| `https://helloantek.github.io/design-system/<branch>/` | One branch (`claude/component/tag-input` → `claude-component-tag-input/`); the pull request links it in a comment |

The sidebar title says which build you are looking at (`helloantek DS · preview · <branch>`).

## What to try

- **Components/…**: each component's Playground (change props in the Controls panel), every Figma variant and state, sizes and brands.
- **Playground/Form**: a sign-up form in a Card, built only from design-system fields (Input, Select, Combobox, Textarea, Radio, Switch, Checkbox) composed with Field, Field Group, Field Set and Field Separator, with a Tooltip, an error Alert and a toast. Tab through it, submit it empty to see errors, fill it and check the submitted data, reset it, switch brand and scheme in the toolbar.
- **Playground/Team**: a team settings page with everything that is not a field: Card, Avatar and Avatar Group, Badge, Button Group, Separator, Spinner, Kbd, Progress and Progress circle, Aspect Ratio, Empty, Input with Input Group Dropdown, Dropdown Menu, Context Menu (right-click a member), Tooltip, Alert, Alert Dialog (remove a member), Dialog (team settings), Sheet (the activity log), Drawer (add seats), Hover Card (the workspace owner), Toggle (compact list), Toggle Group (sort by), Tabs (seats and storage usage), Popover (the invite link), Marker and toasts.

Each new component is added to one of them on its own branch ([playbook.md](playbook.md)); when a stage of the plan closes, both stories are checked to hold every component of that stage.
- The **Accessibility** panel runs axe on the current story.

Review checklist for designers and product:
1. The component looks like Figma in every brand and in dark mode (toolbar).
2. Keyboard works: Tab reaches it, the expected keys operate it, focus is always visible.
3. Texts, errors and empty states read well with real content (edit them in Controls).
4. Leave feedback on the pull request.

## How it works

`.github/workflows/preview.yml` builds Storybook on every push and `tools/storybook-preview.mjs` puts it in a folder of the `gh-pages` branch, which GitHub Pages serves. Deleting the branch removes its preview. Previews of forks are not built.

After a push, a tab that was already open may show the previous build for up to 10 minutes (GitHub Pages lets browsers cache files that long). Each publish keeps the previous build's `assets/`, so that old version still loads instead of failing with "Failed to fetch dynamically imported module". To see the new build at once, open the preview in a private window or clear the site's data for `helloantek.github.io`.

**One-time setup** (repository admin), after the workflow has run once and created the `gh-pages` branch: Settings → Pages → Build and deployment → Source: *Deploy from a branch* → Branch: `gh-pages`, folder `/ (root)` → Save.

Previews are public, like the repository.
