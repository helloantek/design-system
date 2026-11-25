import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsDecisionInbox, DsDecisionInboxAnswered, DsDecisionInboxItem } from './decision-inbox';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6114-1780';

const meta = {
  title: 'Patterns/Decision Inbox',
  decorators: [moduleMetadata({ imports: [DsDecisionInbox, DsDecisionInboxItem, DsDecisionInboxAnswered] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Decision Inbox** ([open in Figma](${FIGMA_URL})) for Angular: \`<section dsDecisionInbox>\` with the same markup and \`ds-inbox\` classes as the React DecisionInbox. \`<li dsDecisionInboxItem>\` is one open decision with its quick answers (\`(answer)\` with the index); \`<li dsDecisionInboxAnswered>\` confirms in place with Undo (\`undoable\`, \`(undo)\`; focus moves to it) and folds away after \`dismissAfter\` (\`(dismiss)\`). \`[count]="0"\` says nothing is open; \`folded\` makes it one line for a sidebar (\`(open)\`).`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(420px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'style="width: min(420px, -32px + 100vw);"';
const DECISIONS = [
  { key: 'refund', question: 'Send the refund of €48 to Ana Silva?', context: 'Over the €40 limit agents may refund alone · Support agent', answers: ['Send', 'Hold'], done: ['Sent · €48 to Ana Silva', 'Support agent goes on with the ticket'] },
  { key: 'onboarding', question: 'Roll out the new onboarding to everyone?', context: 'Test won with +8% activation · 2 weeks of data · Growth agent', answers: ['Roll out', 'Keep testing'], done: ['Rolled out · the new onboarding', 'Growth agent switches everyone over'] },
  { key: 'figma', question: 'Renew Figma for the design team?', context: '12 seats · $1,800 a year · renews in 5 days · Finance agent', answers: ['Renew', 'Change seats'], done: ['Renewed · Figma, 12 seats', 'Finance agent pays the invoice'] },
];
const items = `@for (d of decisions; track d.key) {
  <li dsDecisionInboxItem [question]="d.question" [context]="d.context" [answers]="d.answers"></li>
}`;

/** Figma "Open": one click answers each. Answer one: it confirms in place with Undo and folds away after 5 s. */
export const Open: StoryObj = {
  render: () => ({
    props: {
      decisions: DECISIONS,
      answered: {} as Record<string, 'now' | 'gone'>,
      open(answered: Record<string, string>) {
        return DECISIONS.filter((d) => !answered[d.key]).length;
      },
      allGone(answered: Record<string, string>) {
        return DECISIONS.every((d) => answered[d.key] === 'gone');
      },
      set(answered: Record<string, string>, key: string, value: string | null) {
        const next = { ...answered };
        if (value === null) delete next[key];
        else next[key] = value;
        return next;
      },
    },
    template: `<div ${WIDTH}>
      @if (allGone(answered)) {
        <section dsDecisionInbox [count]="0" emptyDescription="3 decided today · the agents go on by themselves"></section>
      } @else {
        <section dsDecisionInbox [count]="open(answered)">
          @for (d of decisions; track d.key) {
            @if (answered[d.key] === 'now') {
              <li dsDecisionInboxAnswered [title]="d.done[0]" [description]="d.done[1]" undoable [dismissAfter]="5000"
                (undo)="answered = set(answered, d.key, null)" (dismiss)="answered = set(answered, d.key, 'gone')"></li>
            } @else if (answered[d.key] !== 'gone') {
              <li dsDecisionInboxItem [question]="d.question" [context]="d.context" [answers]="d.answers" (answer)="answered = set(answered, d.key, 'now')"></li>
            }
          }
        </section>
      }
    </div>`,
  }),
};

/** Figma "Just answered": confirms in place with Undo, then folds away. */
export const JustAnswered: StoryObj = {
  render: () => ({
    props: { decisions: DECISIONS.slice(1) },
    template: `<div ${WIDTH}>
      <section dsDecisionInbox [count]="2">
        <li dsDecisionInboxAnswered title="Sent · €48 to Ana Silva" description="Support agent goes on with the ticket" undoable></li>
        ${items}
      </section>
    </div>`,
  }),
};

/** Figma "Folded": one line in a sidebar; a click opens the inbox. */
export const Folded: StoryObj = {
  render: () => ({
    props: { decisions: DECISIONS, folded: true },
    template: `<div ${WIDTH}>
      <section dsDecisionInbox [count]="3" [folded]="folded" (open)="folded = false" meta="· oldest 2 h ago">${items}</section>
    </div>`,
  }),
};

/** Figma "Nothing open". */
export const NothingOpen: StoryObj = {
  render: () => ({
    template: `<div ${WIDTH}><section dsDecisionInbox [count]="0" emptyDescription="3 decided today · the agents go on by themselves"></section></div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], decisions: DECISIONS.slice(1) },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 16px; align-content: start;">
          <section dsDecisionInbox [count]="2" [aria-label]="'Decision Inbox (' + scheme + ')'">
            <li dsDecisionInboxAnswered title="Sent · €48 to Ana Silva" description="Support agent goes on with the ticket" undoable></li>
            ${items}
          </section>
          <section dsDecisionInbox [count]="3" folded meta="· oldest 2 h ago" [aria-label]="'Decision Inbox, folded (' + scheme + ')'"></section>
          <section dsDecisionInbox [count]="0" emptyDescription="3 decided today" [aria-label]="'Decision Inbox, nothing open (' + scheme + ')'"></section>
        </div>
      }
    </div>`,
  }),
};
