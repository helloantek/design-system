import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import { MemoryPanel } from './MemoryPanel';
import { COUNTED } from './MemoryPanel.fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6132-3066';

const meta = {
  title: 'Patterns/Memory Panel',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Memory Panel** ([open in Figma](${FIGMA_URL})): what the assistant remembers about you. A switch to use memory at all (\`enabled\`), categories with counts (\`category\`), and every memory (\`memories\`) with where it came from and when (\`source\`, \`sourceIcon\`). Point at one (or Tab to it) to edit it in place (Enter saves, Escape cancels), pause it or forget it; forgetting leaves a line with Undo. Add one yourself with New memory. Off, it keeps what it knows but learns nothing new. The list scrolls past \`listMaxHeight\`.

**When to use:** letting people see, edit, pause and delete what the assistant remembers about them, and turn memory off.
**When not to use:** showing what is in the current conversation's context (use Context Window). Never hide memory: if the product remembers, this panel is required.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(430px, calc(100vw - 32px))' };

/** Point at a memory to edit, pause or forget it; forget one and Undo it; add one; switch memory off. */
export const Panel: StoryObj = {
  render: () => <MemoryPanel defaultMemories={COUNTED} listMaxHeight={378} style={WIDTH} />,
};

/** One category at a time. */
export const Category: StoryObj = {
  render: () => <MemoryPanel defaultMemories={COUNTED} defaultCategory="Work" style={WIDTH} />,
};

/** Figma "Memory off": what it knows stays, nothing new is learned. */
export const Off: StoryObj = {
  render: () => <MemoryPanel defaultMemories={COUNTED} defaultEnabled={false} listMaxHeight={358} style={WIDTH} />,
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24 }}>
          <MemoryPanel aria-label={`Memory (${scheme})`} defaultMemories={COUNTED} listMaxHeight={378} style={{ maxWidth: 430 }} />
        </div>
      ))}
    </div>
  ),
};
