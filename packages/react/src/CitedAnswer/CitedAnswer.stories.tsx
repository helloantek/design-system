import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiGlobalLine, RiNotionFill, RiSlackFill } from '@remixicon/react';
import type { CSSProperties } from 'react';
import { CitedAnswer, type CitedAnswerPart, type CitedAnswerSource } from './CitedAnswer';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6127-2541';

const meta = {
  title: 'Patterns/Cited Answer',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Cited Answer** ([open in Figma](${FIGMA_URL})): an answer wired to its sources. Each claim in \`paragraphs\` (\`{ text, cite }\`) ends in a numbered citation; point at one (or its source) and its sentences and source light up while the rest fades; click a citation or a source for the passage it quotes (\`quote\`, \`open\` / \`onOpenChange\`), and Follow up (\`onFollowUp\`).

**When to use:** people need to check claims one by one against the exact sentence of a source: legal, medical, research or support answers.
**When not to use:** a short answer with a few sources (use AI Answer), or there are no sources to point to.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(460px, calc(100vw - 32px))' };
const SOURCES: CitedAnswerSource[] = [
  {
    name: 'Help center',
    icon: <RiGlobalLine />,
    title: 'Refunds and returns',
    quote: (
      <>
        Card refunds usually reach your account <strong>within 5–10 working days</strong>, depending on your bank.
      </>
    ),
  },
  { name: 'Refund policy', icon: <RiNotionFill />, title: 'Timelines', quote: <>Refunds approved before 16:00 <strong>leave the same evening</strong>; gift orders are refunded as <strong>store credit</strong>.</> },
  { name: '#support', icon: <RiSlackFill />, title: 'Bank delays', quote: <>Some online banks <strong>add two more days</strong> before the money shows.</> },
];
const PARAGRAPHS: CitedAnswerPart[][] = [
  [{ text: 'Card refunds usually reach your account within 5–10 working days,', cite: 1 }, ' depending on your bank. ', { text: 'Refunds approved before 16:00 leave the same evening.', cite: 2 }],
  [{ text: 'Gift orders come back as store credit instead.', cite: 2 }, ' ', { text: 'Some online banks add two more days.', cite: 3 }],
];

/** Figma "At rest": every claim ends in its citation. Point at a citation or a source; click one for its passage. */
export const AtRest: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <CitedAnswer sources={SOURCES} paragraphs={PARAGRAPHS} meta="3 sources · 12 pages read" onFollowUp={() => {}} />
    </div>
  ),
};

/** Figma "Clicked": the passage the source quotes opens under the answer. */
export const PassageOpen: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <CitedAnswer sources={SOURCES} paragraphs={PARAGRAPHS} meta="3 sources · 12 pages read" defaultOpen={1} onFollowUp={() => {}} />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24 }}>
          <CitedAnswer sources={SOURCES} paragraphs={PARAGRAPHS} meta="3 sources · 12 pages read" defaultOpen={2} onFollowUp={() => {}} />
        </div>
      ))}
    </div>
  ),
};
