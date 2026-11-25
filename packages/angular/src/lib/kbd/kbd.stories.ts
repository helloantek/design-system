import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsKbd, DsKbdGroup } from './kbd';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=251-2';

const meta = {
  title: 'Components/Kbd',
  decorators: [moduleMetadata({ imports: [DsKbd, DsKbdGroup] })],
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Kbd** and **Kbd Group** ([open in Figma](${FIGMA_URL})) for Angular: \`<kbd dsKbd>\` and \`<kbd dsKbdGroup>\` with the same markup and \`ds-kbd\` classes as the React Kbd. \`variant\` (\`default\` · \`inverted\` for dark surfaces), \`size\` (\`default\` 20 · \`sm\` 16 px), an icon and the key text as content; a symbol can carry a spoken \`label\` ("Command" for ⌘).`,
      },
    },
  },
} satisfies Meta;

export default meta;

const svg = (d: string) =>
  `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"></path></svg>`;
const enter = svg('M9 10 4 15l5 5M20 4v7a4 4 0 0 1-4 4H4');
const arrowUp = svg('m5 12 7-7 7 7M12 19V5');

/** Figma Variant × Size; Inverted on the Tooltip's dark surface, where it is used. */
export const VariantsAndSizes: StoryObj = {
  render: () => ({
    template: `<div style="display: flex; gap: 24px; align-items: center;">
      <div style="display: flex; gap: 8px; align-items: center;">
        <kbd dsKbd>⌘</kbd>
        <kbd dsKbd size="sm">⌘</kbd>
      </div>
      <div style="display: flex; gap: 8px; align-items: center; padding: 8px; border-radius: 8px; background: var(--ds-foreground);">
        <kbd dsKbd variant="inverted">⌘</kbd>
        <kbd dsKbd variant="inverted" size="sm">⌘</kbd>
      </div>
      <kbd dsKbdGroup><kbd dsKbd>⌘</kbd><kbd dsKbd>K</kbd></kbd>
      <kbd dsKbd label="Enter">${enter}</kbd>
      <kbd dsKbdGroup><kbd dsKbd label="Shift">${arrowUp}</kbd><kbd dsKbd>Tab</kbd></kbd>
    </div>`,
  }),
};
