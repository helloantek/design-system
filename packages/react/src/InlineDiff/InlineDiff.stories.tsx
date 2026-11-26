import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import { InlineDiff, type InlineDiffSegment } from './InlineDiff';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6130-2467';

const meta = {
  title: 'Patterns/Inline Diff',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Inline Diff** ([open in Figma](${FIGMA_URL})): AI edits to prose, shown in place (\`segments\`: words and \`{ id, removed, added }\` edits). Struck words in red, new words in green. The focused edit is darker and carries a small popover, Accept (Y) or Reject (N); ‹ › and Tab move between edits; Reject all and Accept all close it out, and decided edits leave plain text with Undo (\`decisions\` / \`onDecisionsChange\`).

**When to use:** the AI suggests edits to text people wrote, and they accept or reject each change in place.
**When not to use:** the edits are to code across files (use Diff), or the AI writes new text from scratch (use Writing Assistant).`,
      },
    },
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(520px, calc(100vw - 32px))', paddingTop: 40 };
const SEGMENTS: InlineDiffSegment[] = [
  'Hi everyone, ',
  { id: 'intro', removed: 'we are very excited to announce that' },
  ' the new dashboard is live. It loads ',
  { id: 'speed', removed: 'a lot faster than before', added: 'twice as fast' },
  ' and you can export any report to CSV ',
  { id: 'csv', removed: 'with just a single', added: 'in one' },
  ' click.',
];

/** Figma "Reviewing": the focused edit is darker and carries Accept Y / Reject N. Try Y, N, Tab and the buttons. */
export const Reviewing: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <InlineDiff segments={SEGMENTS} label="Suggested by AI · Make it shorter" />
    </div>
  ),
};

/** Figma "One accepted": the words join the text, the next edit gets focus. */
export const OneAccepted: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <InlineDiff segments={SEGMENTS} label="Suggested by AI · Make it shorter" defaultDecisions={{ intro: 'accepted' }} />
    </div>
  ),
};

/** Figma "All decided": plain text again, with Undo. */
export const AllDecided: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <InlineDiff segments={SEGMENTS} label="Suggested by AI · Make it shorter" defaultDecisions={{ intro: 'accepted', speed: 'accepted', csv: 'accepted' }} />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: '64px 24px 24px' }}>
          <InlineDiff segments={SEGMENTS} label="Suggested by AI · Make it shorter" />
        </div>
      ))}
    </div>
  ),
};
