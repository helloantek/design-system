import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsDecisionCard, type DecisionAnswer, type DecisionOption } from './decision-card';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6111-1606';

const meta = {
  title: 'Patterns/Decision Card',
  decorators: [moduleMetadata({ imports: [DsDecisionCard] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Decision Card** ([open in Figma](${FIGMA_URL})) for Angular: \`<section dsDecisionCard>\` with the same markup and \`ds-decision\` classes as the React DecisionCard. Numbered \`options\` with one \`recommended\` (Approve / Decline for an approval, with \`details\`), preview \`tiles\` for a pick, and a last row for your own words. A click or the answer's number answers (\`(answer)\`); in the last row Enter or Send does. Several questions share one card with a pager (\`page\`, \`pageCount\`, \`(pageChange)\`); Later (\`laterable\`, \`(later)\`) folds it to one line (\`folded\`, Answer emits \`(open)\`).`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(480px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'width: min(480px, -32px + 100vw); display: grid; gap: 8px;';
const plans: DecisionOption[] = [
  { label: 'Starter', description: 'Free, up to 3 people' },
  { label: 'Team', description: '€12 per person a month, with SSO', recommended: true },
  { label: 'Enterprise', description: 'Talk to sales first' },
];
const questions = [
  { context: 'Onboarding', question: 'Which plan should the new team start on?', options: plans },
  { context: 'Onboarding', question: 'Who should own billing?', options: [{ label: 'Ana Silva', recommended: true }, { label: 'Jonas Weber' }] as DecisionOption[] },
];

/** The card on its own (no composer): two questions with the pager, numbers answer, Later folds it and Answer opens it. */
export const Questions: StoryObj = {
  render: () => ({
    props: {
      questions,
      page: 1,
      folded: false,
      answer: '',
      describe: (a: DecisionAnswer, options: DecisionOption[]) => ('text' in a ? `“${a.text}”` : options[a.index].label),
    },
    template: `<div style="${WIDTH}">
      @for (q of [questions[page - 1]]; track page) {
        <section dsDecisionCard [context]="q.context" [question]="q.question" [options]="q.options" [page]="page" [pageCount]="questions.length"
          (pageChange)="page = $event" [folded]="folded" laterable (later)="folded = true" (open)="folded = false"
          (answer)="answer = describe($event, q.options)"></section>
      }
      <p role="status" style="margin: 0px; color: var(--ds-muted-foreground);">{{ answer ? 'Answered: ' + answer : '' }}</p>
    </div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], plans, tiles: [{ label: 'Photo' }, { label: 'Screenshot', recommended: true }, { label: 'Illustration' }] },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 16px; align-content: start;">
          <section dsDecisionCard context="Onboarding" [question]="'Which plan should the new team start on? (' + scheme + ')'" [options]="plans" [page]="1" [pageCount]="2" laterable></section>
          <section dsDecisionCard context="Launch post" [question]="'Which header image? (' + scheme + ')'" [tiles]="tiles"></section>
          <section dsDecisionCard folded [question]="'Which plan should the new team start on? (' + scheme + ')'" [pageCount]="2"></section>
        </div>
      }
    </div>`,
  }),
};
