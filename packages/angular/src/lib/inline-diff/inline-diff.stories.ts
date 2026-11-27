import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsInlineDiff, type InlineDiffSegment } from './inline-diff';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6130-2467';

const meta = {
  title: 'Patterns/Inline Diff',
  decorators: [moduleMetadata({ imports: [DsInlineDiff] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Inline Diff** ([open in Figma](${FIGMA_URL})) for Angular: \`<section dsInlineDiff>\` with the same markup and \`ds-inline-diff\` classes as the React InlineDiff. \`segments\` of words and edits (\`{ id, removed, added }\`); the focused edit carries Accept (Y) and Reject (N); ‹ › and Tab move between edits; Reject all and Accept all close it out, then Undo steps back. \`[(decisions)]\` by edit id.`,
      },
    },
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

// min(520px, calc(100vw - 32px)) and 40 px on top, written as the CSSOM serialises React's inline style.
const WIDTH = 'style="width: min(520px, -32px + 100vw); padding-top: 40px;"';
const SEGMENTS: InlineDiffSegment[] = [
  'Hi everyone, ',
  { id: 'intro', removed: 'we are very excited to announce that' },
  ' the new dashboard is live. It loads ',
  { id: 'speed', removed: 'a lot faster than before', added: 'twice as fast' },
  ' and you can export any report to CSV ',
  { id: 'csv', removed: 'with just a single', added: 'in one' },
  ' click.',
];
const diff = (decisions: string) => `<section dsInlineDiff [segments]="segments" label="Suggested by AI · Make it shorter" [decisions]="${decisions}"></section>`;

/** Figma "Reviewing": the focused edit is darker and carries Accept Y / Reject N. Try Y, N, Tab and the buttons. */
export const Reviewing: StoryObj = {
  render: () => ({ props: { segments: SEGMENTS }, template: `<div ${WIDTH}>${diff('{}')}</div>` }),
};

/** Figma "One accepted": the words join the text, the next edit gets focus. */
export const OneAccepted: StoryObj = {
  render: () => ({ props: { segments: SEGMENTS }, template: `<div ${WIDTH}>${diff("{ intro: 'accepted' }")}</div>` }),
};

/** Figma "All decided": plain text again, with Undo. */
export const AllDecided: StoryObj = {
  render: () => ({ props: { segments: SEGMENTS }, template: `<div ${WIDTH}>${diff("{ intro: 'accepted', speed: 'accepted', csv: 'accepted' }")}</div>` }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], segments: SEGMENTS },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 64px 24px 24px;">${diff('{}')}</div>
      }
    </div>`,
  }),
};
