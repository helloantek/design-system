import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsCitedAnswer, DsCitedAnswerIcon, type CitedAnswerPart, type CitedAnswerSource } from './cited-answer';
import { riGlobalLine, riNotionFill, riSlackFill } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6127-2541';

const meta = {
  title: 'Patterns/Cited Answer',
  decorators: [moduleMetadata({ imports: [DsCitedAnswer, DsCitedAnswerIcon] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Cited Answer** ([open in Figma](${FIGMA_URL})) for Angular: \`<article dsCitedAnswer>\` with the same markup and \`ds-cited-answer\` classes as the React CitedAnswer. \`paragraphs\` of plain words and claims (\`{ text, cite }\`) that end in a numbered citation of one of the \`sources\` (logos as \`<ng-template dsCitedAnswerIcon="name">\`; a \`quote\` with the words it uses as \`{ strong }\`). Point at a citation or a source and its sentences light up; click one for the passage (\`[(open)]\`); Follow up (\`followable\`, \`(followUp)\`).`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(460px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'style="width: min(460px, -32px + 100vw);"';
const SOURCES: CitedAnswerSource[] = [
  { name: 'Help center', title: 'Refunds and returns', quote: ['Card refunds usually reach your account ', { strong: 'within 5–10 working days' }, ', depending on your bank.'] },
  { name: 'Refund policy', title: 'Timelines', quote: ['Refunds approved before 16:00 ', { strong: 'leave the same evening' }, '; gift orders are refunded as ', { strong: 'store credit' }, '.'] },
  { name: '#support', title: 'Bank delays', quote: ['Some online banks ', { strong: 'add two more days' }, ' before the money shows.'] },
];
const PARAGRAPHS: CitedAnswerPart[][] = [
  [{ text: 'Card refunds usually reach your account within 5–10 working days,', cite: 1 }, ' depending on your bank. ', { text: 'Refunds approved before 16:00 leave the same evening.', cite: 2 }],
  [{ text: 'Gift orders come back as store credit instead.', cite: 2 }, ' ', { text: 'Some online banks add two more days.', cite: 3 }],
];
const icons = `<ng-template dsCitedAnswerIcon="Help center">${riGlobalLine}</ng-template><ng-template dsCitedAnswerIcon="Refund policy">${riNotionFill}</ng-template><ng-template dsCitedAnswerIcon="#support">${riSlackFill}</ng-template>`;
const answer = (open: number | null) => `<article dsCitedAnswer [sources]="sources" [paragraphs]="paragraphs" meta="3 sources · 12 pages read" [open]="${open}" followable>${icons}</article>`;

/** Figma "At rest": every claim ends in its citation. Point at a citation or a source; click one for its passage. */
export const AtRest: StoryObj = {
  render: () => ({ props: { sources: SOURCES, paragraphs: PARAGRAPHS }, template: `<div ${WIDTH}>${answer(null)}</div>` }),
};

/** Figma "Clicked": the passage the source quotes opens under the answer. */
export const PassageOpen: StoryObj = {
  render: () => ({ props: { sources: SOURCES, paragraphs: PARAGRAPHS }, template: `<div ${WIDTH}>${answer(1)}</div>` }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], sources: SOURCES, paragraphs: PARAGRAPHS },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px;">${answer(2)}</div>
      }
    </div>`,
  }),
};
