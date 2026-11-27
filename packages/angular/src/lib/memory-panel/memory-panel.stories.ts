import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsMemoryPanel, DsMemoryPanelIcon, type Memory } from './memory-panel';
import { riFigmaFillHidden, riSlackFillHidden } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6132-3066';

const meta = {
  title: 'Patterns/Memory Panel',
  decorators: [moduleMetadata({ imports: [DsMemoryPanel, DsMemoryPanelIcon] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Memory Panel** ([open in Figma](${FIGMA_URL})) for Angular: \`<section dsMemoryPanel>\` with the same markup and \`ds-memory-panel\` classes as the React MemoryPanel. A switch to use memory at all (\`[(enabled)]\`), categories with counts (\`[(category)]\`), and every memory (\`[(memories)]\`: \`text\`, \`category\`, \`source\`, \`paused\`; a source mark as \`<ng-template dsMemoryPanelIcon="id">\`). Point at one (or Tab to it) to edit it in place, pause it or forget it, with Undo (\`(forget)\`, \`(restore)\`); New memory adds one. The list scrolls past \`listMaxHeight\`.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(430px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'style="width: min(430px, -32px + 100vw);"';
const COUNTED: Memory[] = [
  { id: 'ts', category: 'Preferences', text: 'Prefers TypeScript examples over plain JavaScript', source: 'From chat · Oct 12' },
  { id: 'short', category: 'Preferences', text: 'Likes short answers first, details only when asked', source: 'You added · Oct 2', paused: true },
  { id: 'inter', category: 'Preferences', text: 'Designs with Inter and a 4 px spacing grid', source: 'From Figma · Oct 7' },
  { id: 'role', category: 'Work', text: 'Product designer and front-end developer at a small studio', source: 'From chat · Sep 28' },
  { id: 'ships', category: 'Work', text: 'Ships every second Thursday', source: 'From Slack · Sep 30' },
  { id: 'hours', category: 'Work', text: 'Works 9–5 Berlin time', source: 'From chat · Sep 12' },
  { id: 'ds', category: 'Projects', text: 'Builds a multi-brand design system', source: 'From chat · Oct 1' },
  { id: 'app', category: 'Projects', text: 'Is shipping a visual memory app', source: 'From chat · Oct 9' },
];
const icons = `<ng-template dsMemoryPanelIcon="inter">${riFigmaFillHidden}</ng-template><ng-template dsMemoryPanelIcon="ships">${riSlackFillHidden}</ng-template>`;

/** Point at a memory to edit, pause or forget it; forget one and Undo it; add one; switch memory off. */
export const Panel: StoryObj = {
  render: () => ({ props: { memories: COUNTED }, template: `<section dsMemoryPanel ${WIDTH} [memories]="memories" [listMaxHeight]="378">${icons}</section>` }),
};

/** One category at a time. */
export const Category: StoryObj = {
  render: () => ({ props: { memories: COUNTED }, template: `<section dsMemoryPanel ${WIDTH} [memories]="memories" category="Work">${icons}</section>` }),
};

/** Figma "Memory off": what it knows stays, nothing new is learned. */
export const Off: StoryObj = {
  render: () => ({ props: { memories: COUNTED }, template: `<section dsMemoryPanel ${WIDTH} [memories]="memories" [enabled]="false" [listMaxHeight]="358">${icons}</section>` }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], memories: COUNTED },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px;">
          <section dsMemoryPanel aria-label="Memory ({{ scheme }})" style="max-width: 430px;" [memories]="memories" [listMaxHeight]="378">${icons}</section>
        </div>
      }
    </div>`,
  }),
};
