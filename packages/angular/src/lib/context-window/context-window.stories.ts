import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { signal } from '@angular/core';
import { DsContextWindow, DsContextWindowModelIcon, type ContextWindowItem, type ContextWindowPart } from './context-window';
import { riClaudeFill } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6128-2518';

const meta = {
  title: 'Patterns/Context Window',
  decorators: [moduleMetadata({ imports: [DsContextWindow, DsContextWindowModelIcon] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Context Window** ([open in Figma](${FIGMA_URL})) for Angular: \`<section dsContextWindow>\` with the same markup and \`ds-context-window\` classes as the React ContextWindow. How much of the window (\`total\`) the \`parts\` use, a grid where every cell is a slice of the window, each part with its size; a part with \`items\` opens into a list to remove from (\`removable\`, \`(removeItem)\`); Compact (\`compactable\` parts, \`(compact)\`, \`compacting\`); close to full (\`warnAt\`) it turns amber and New chat comes first (\`newChattable\`, \`(newChat)\`). The model's Badge takes a logo marked \`dsContextWindowModelIcon\`.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(380px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'style="width: min(380px, -32px + 100vw);"';
const FILES: ContextWindowItem[] = [
  { id: 'refund', label: 'refund-policy.md', tokens: 18_200 },
  { id: 'orders', label: 'orders-2026.csv', tokens: 41_600 },
  { id: 'guide', label: 'support-guide.pdf', tokens: 9_100 },
];
const sum = (items: ContextWindowItem[]) => items.reduce((total, item) => total + item.tokens, 0);
const parts = (files: ContextWindowItem[], conversation: number, compacting = false): ContextWindowPart[] => [
  { id: 'system', label: 'System prompt', tokens: 4_200 },
  { id: 'tools', label: 'Tools', tokens: 12_800 },
  { id: 'files', label: 'Files', tokens: sum(files), items: files },
  { id: 'conversation', label: 'Conversation', tokens: conversation, compactable: true, compacting },
  { id: 'memory', label: 'Memory', tokens: 3_900 },
];
const NEARLY = FILES.slice(1, 2).map((f) => ({ ...f, tokens: 46_100 }));
const logo = riClaudeFill.replace('<svg ', '<svg dsContextWindowModelIcon ');
const card = (attrs: string) => `<section dsContextWindow [total]="200000" model="sonnet-4-5" newChattable ${attrs}>${logo}</section>`;

/** Figma "In use": every part with its size. Open Files and remove one to free its room; Compact squeezes the conversation. */
export const InUse: StoryObj = {
  render: () => {
    const files = signal(FILES);
    const conversation = signal(46_600);
    const compacting = signal(false);
    return {
      props: {
        files,
        conversation,
        compacting,
        parts,
        remove: (id: string) => files.update((f) => f.filter((file) => file.id !== id)),
        compact: () => {
          compacting.set(true);
          setTimeout(() => {
            conversation.set(8_400);
            compacting.set(false);
          }, 2000);
        },
      },
      template: `<div ${WIDTH}>${card('[parts]="parts(files(), conversation(), compacting())" removable (removeItem)="remove($event.itemId)" (compact)="compact()"')}</div>`,
    };
  },
};

/** Figma "Nearly full": amber, and New chat comes first. */
export const NearlyFull: StoryObj = {
  render: () => ({ props: { parts: parts(NEARLY, 108_600) }, template: `<div ${WIDTH}>${card('[parts]="parts"')}</div>` }),
};

/** Figma "Compacting": the old turns become a summary. */
export const Compacting: StoryObj = {
  render: () => ({ props: { parts: parts(NEARLY, 22_100, true) }, template: `<div ${WIDTH}>${card('[parts]="parts"')}</div>` }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], inUse: parts(FILES, 46_600), nearly: parts(NEARLY, 108_600) },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 16px; align-content: start;">
          ${card(`[parts]="inUse" aria-label="Context window ({{ scheme }})"`)}
          ${card(`[parts]="nearly" aria-label="Context window, nearly full ({{ scheme }})"`)}
        </div>
      }
    </div>`,
  }),
};
