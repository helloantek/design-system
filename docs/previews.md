# Trying components before they ship

Every component starts on a branch and reaches the design system only when its pull request is merged. Until then anyone can try it in a **preview**: a Storybook built from that branch.

| Where | What it is |
|---|---|
| `https://helloantek.github.io/design-system/` | List of all previews |
| `https://helloantek.github.io/design-system/main/` | `main`: what the design system ships |
| `https://helloantek.github.io/design-system/<branch>/` | One branch (`claude/select-component` → `claude-select-component/`); the pull request links it in a comment |

The sidebar title says which build you are looking at (`helloantek DS · preview · <branch>`).

## What to try

- **Components/…**: each component's Playground (change props in the Controls panel), every Figma variant and state, sizes and brands.
- **Playground/Form**: a sign-up form built only from design-system components. Use it to try components together: tab through it, submit it empty to see errors, fill it and check the submitted data, reset it, switch brand and scheme in the toolbar.
- The **Accessibility** panel runs axe on the current story.

Review checklist for designers and product:
1. The component looks like Figma in every brand and in dark mode (toolbar).
2. Keyboard works: Tab reaches it, the expected keys operate it, focus is always visible.
3. Texts, errors and empty states read well with real content (edit them in Controls).
4. Leave feedback on the pull request.

## How it works

`.github/workflows/preview.yml` builds Storybook on every push and `tools/storybook-preview.mjs` puts it in a folder of the `gh-pages` branch, which GitHub Pages serves. Deleting the branch removes its preview. Previews of forks are not built.

**One-time setup** (repository admin), after the workflow has run once and created the `gh-pages` branch: Settings → Pages → Build and deployment → Source: *Deploy from a branch* → Branch: `gh-pages`, folder `/ (root)` → Save.

Previews are public, like the repository.
