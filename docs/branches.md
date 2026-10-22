# Branch names

`<kind>/<topic>` for people, `claude/<kind>/<topic>` for branches Claude creates. The topic is short kebab-case: the component or what changes.

| Kind | For | Example |
|---|---|---|
| `component` | A new component, or new variants of one | `claude/component/tag-input` |
| `fix` | A bug fix in an existing component (code, not design) | `claude/fix/select-form-reset` |
| `tokens` | Variables, effect styles or brands from Figma | `claude/tokens/theme-3` |
| `tooling` | CI, tests, the visual check, scripts, Storybook setup | `claude/tooling/storybook-previews` |
| `docs` | Documentation only | `claude/docs/branch-naming` |

The kind shows up where people review work: in the [preview list](previews.md) (`claude/component/tag-input` → `…/design-system/claude-component-tag-input/`), so design knows which previews are new components to check against Figma, and in the pull request list.

One change per branch. If a component needs a tooling change first (e.g. a new option in the visual check), put it in the component branch when it is small and only that component uses it; otherwise open a `tooling` branch and stack the component on it.
