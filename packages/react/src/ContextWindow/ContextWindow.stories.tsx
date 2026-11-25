import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiClaudeFill } from '@remixicon/react';
import { useEffect, useState, type CSSProperties } from 'react';
import { ContextWindow, type ContextWindowItem, type ContextWindowPart } from './ContextWindow';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6128-2518';

const meta = {
  title: 'Patterns/Context Window',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Context Window** ([open in Figma](${FIGMA_URL})): what fills the model's context. How much is used of how much (\`total\`), a grid where every cell is a slice of the window coloured by what fills it, and each part with its size (\`parts\`). A part with \`items\` (files) opens into a list to remove from (\`onRemoveItem\`); \`onCompact\` squeezes the conversation into a summary (\`compacting\` while it runs); from \`warnAt\` (85 %) it turns amber and New chat (\`onNewChat\`) comes first.

**When to use:** showing how full the model's context is and what fills it, so people know when to start fresh or drop files.
**When not to use:** people need to see which single file or tool result takes the space (use Context Map), or the context limit is never close.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(380px, calc(100vw - 32px))' };
const FILES: ContextWindowItem[] = [
  { id: 'refund', label: 'refund-policy.md', tokens: 18_200 },
  { id: 'orders', label: 'orders-2026.csv', tokens: 41_600 },
  { id: 'guide', label: 'support-guide.pdf', tokens: 9_100 },
];
const sum = (items: ContextWindowItem[]) => items.reduce((total, item) => total + item.tokens, 0);
const parts = (files: ContextWindowItem[], conversation: number, compact?: Partial<ContextWindowPart>): ContextWindowPart[] => [
  { id: 'system', label: 'System prompt', tokens: 4_200 },
  { id: 'tools', label: 'Tools', tokens: 12_800 },
  { id: 'files', label: 'Files', tokens: sum(files), items: files },
  { id: 'conversation', label: 'Conversation', tokens: conversation, onCompact: () => {}, ...compact },
  { id: 'memory', label: 'Memory', tokens: 3_900 },
];
const common = { total: 200_000, model: 'sonnet-4-5', modelIcon: <RiClaudeFill />, onNewChat: () => {} };

/** Figma "In use": every part with its size. Open Files and remove one to free its room; Compact squeezes the conversation. */
export const InUse: StoryObj = {
  render: function Render() {
    const [files, setFiles] = useState(FILES);
    const [conversation, setConversation] = useState(46_600);
    const [compacting, setCompacting] = useState(false);
    useEffect(() => {
      if (!compacting) return;
      const done = setTimeout(() => {
        setConversation(8_400);
        setCompacting(false);
      }, 2000);
      return () => clearTimeout(done);
    }, [compacting]);
    return (
      <div style={WIDTH}>
        <ContextWindow {...common} parts={parts(files, conversation, { compacting, onCompact: () => setCompacting(true) })} onRemoveItem={(_, id) => setFiles((f) => f.filter((file) => file.id !== id))} />
      </div>
    );
  },
};

/** Figma "Nearly full": amber, and New chat comes first. */
export const NearlyFull: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ContextWindow {...common} parts={parts(FILES.slice(1, 2).map((f) => ({ ...f, tokens: 46_100 })), 108_600)} />
    </div>
  ),
};

/** Figma "Compacting": the old turns become a summary. */
export const Compacting: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ContextWindow {...common} parts={parts(FILES.slice(1, 2).map((f) => ({ ...f, tokens: 46_100 })), 22_100, { compacting: true })} />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, alignContent: 'start' }}>
          <ContextWindow {...common} aria-label={`Context window (${scheme})`} parts={parts(FILES, 46_600)} />
          <ContextWindow {...common} aria-label={`Context window, nearly full (${scheme})`} parts={parts(FILES.slice(1, 2).map((f) => ({ ...f, tokens: 46_100 })), 108_600)} />
        </div>
      ))}
    </div>
  ),
};
