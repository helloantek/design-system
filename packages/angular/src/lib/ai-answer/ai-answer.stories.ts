import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { signal } from '@angular/core';
import { DsMessageActions } from '../message-actions/message-actions';
import { DsAIAnswer, DsAIAnswerActions, DsAIAnswerCaret, DsAIAnswerCitation, DsAIAnswerPoint, DsAIAnswerPoints, DsAIAnswerSourceIcon, type AIAnswerSource } from './ai-answer';
import { riGlobalLine, riNotionFill, riSlackFill } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6127-2351';

const meta = {
  title: 'Patterns/AI Answer',
  decorators: [moduleMetadata({ imports: [DsAIAnswer, DsAIAnswerActions, DsAIAnswerCaret, DsAIAnswerCitation, DsAIAnswerPoint, DsAIAnswerPoints, DsAIAnswerSourceIcon, DsMessageActions] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **AI Answer** ([open in Figma](${FIGMA_URL})) for Angular: \`<article dsAIAnswer>\` with the same markup and \`ds-ai-answer\` classes as the React AIAnswer. The \`question\`, the \`sources\` as small numbered cards (logos as \`<ng-template dsAIAnswerSourceIcon="Notion">\`; \`moreSources\`, \`moreOpens\`; \`searching\` while they load), the answer as content (\`ul[dsAIAnswerPoints]\` of \`li[dsAIAnswerPoint]\`, \`span[dsAIAnswerCitation]\`, \`span[dsAIAnswerCaret]\`), \`related\` questions, and the footer: actions marked \`dsAIAnswerActions\`, \`meta\`, Stop (\`stoppable\`) or Continue (\`continuable\`).`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(560px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'style="width: min(560px, -32px + 100vw);"';
const QUESTION = 'How long does a refund to a card take?';
const SOURCES: AIAnswerSource[] = [
  { name: 'Notion', title: 'Refund policy – timelines', href: '#notion' },
  { name: 'Help center', title: 'Refunds and returns', href: '#help' },
  { name: 'Slack', title: '#support – bank delays', href: '#slack' },
];
const RELATED = ['What if the card has expired?', 'Can I get store credit instead?'];
const icons = `<ng-template dsAIAnswerSourceIcon="Notion">${riNotionFill}</ng-template><ng-template dsAIAnswerSourceIcon="Help center">${riGlobalLine}</ng-template><ng-template dsAIAnswerSourceIcon="Slack">${riSlackFill}</ng-template>`;
const actions = `<div dsMessageActions dsAIAnswerActions copyText="5–10 working days after we send it, depending on the bank." regenerable></div>`;
const lead = `<p><strong>5–10 working days</strong> after we send it, depending on the bank. <span dsAIAnswerCitation>Notion +1</span></p>`;

/** Figma "Answered": sources, the answer with citations, related questions, how long it took. */
export const Answered: StoryObj = {
  render: () => ({
    props: { sources: SOURCES, related: RELATED },
    template: `<div ${WIDTH}><article dsAIAnswer question="${QUESTION}" [sources]="sources" [moreSources]="3" moreOpens [related]="related" meta="Answered in 3.4 s">${icons}${lead}
      <ul dsAIAnswerPoints>
        <li dsAIAnswerPoint lead="Sent the same day:" cite="Help center">refunds approved before 16:00 leave that evening.</li>
        <li dsAIAnswerPoint lead="Gift orders:" cite="Notion">the money comes back as store credit, not to the card.</li>
        <li dsAIAnswerPoint lead="Slow banks:" cite="Slack">some online banks take two more days.</li>
      </ul>${actions}</article></div>`,
  }),
};

const WORDS = 'after we send it, depending on the bank.'.split(' ');

/** Figma "Streaming": the words arrive, the caret marks the end, the sources still load; Stop stops it. */
export const Streaming: StoryObj = {
  render: () => {
    const count = signal(0);
    const stopped = signal(false);
    let timer: ReturnType<typeof setTimeout> | undefined;
    const tick = (delay = 400) => {
      clearTimeout(timer);
      if (stopped() || count() >= WORDS.length) return;
      timer = setTimeout(() => {
        count.update((c) => c + 1);
        tick();
      }, delay);
    };
    // The story is built before it is shown: the first word waits a little longer, so it starts with none, as React's.
    tick(800);
    const status = () => (stopped() ? 'stopped' : count() >= WORDS.length ? 'done' : 'streaming');
    return {
      props: {
        count,
        status,
        sources: SOURCES,
        words: WORDS,
        stop: () => {
          stopped.set(true);
          clearTimeout(timer);
        },
        go: () => {
          stopped.set(false);
          tick();
        },
      },
      template: `<div ${WIDTH}><article dsAIAnswer question="${QUESTION}" [sources]="count() > 3 ? sources : []" [searching]="count() > 3 ? 0 : 3" [status]="status()" meta="Answered in 3.4 s" stoppable continuable (stop)="stop()" (continue)="go()">${icons}<p><strong>5–10 working days</strong> {{ words.slice(0, count()).join(' ') }}@if (status() === 'streaming') {<span dsAIAnswerCaret></span>}</p>${actions}</article></div>`,
    };
  },
};

/** Figma "Stopped early": it says so, Continue. */
export const StoppedEarly: StoryObj = {
  render: () => ({
    props: { sources: SOURCES },
    template: `<div ${WIDTH}><article dsAIAnswer question="${QUESTION}" [sources]="sources" [moreSources]="3" status="stopped" continuable>${icons}${lead}
      <ul dsAIAnswerPoints><li dsAIAnswerPoint lead="Sent the same day:">refunds approved before</li></ul>${actions}</article></div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], sources: SOURCES, related: RELATED },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px;">
          <article dsAIAnswer question="${QUESTION}" [sources]="sources" [moreSources]="3" [related]="related" meta="Answered in 3.4 s">${icons}${lead}
            <ul dsAIAnswerPoints><li dsAIAnswerPoint lead="Gift orders:" cite="Notion">the money comes back as store credit, not to the card.</li></ul>${actions}</article>
        </div>
      }
    </div>`,
  }),
};
