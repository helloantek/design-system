import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsMessageActions } from './message-actions';
import { riClaudeFill } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6126-2162';

const meta = {
  title: 'Patterns/Message Actions',
  decorators: [moduleMetadata({ imports: [DsMessageActions] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Message Actions** ([open in Figma](${FIGMA_URL})) for Angular: \`<div dsMessageActions>\` with the same markup and \`ds-message-actions\` classes as the React MessageActions. Copy (\`copyText\`, \`(copy)\`; a green check for 2 s), Regenerate (\`regenerable\`, \`(regenerate)\`) with ‹ 2 / 3 › between the versions (\`version\`, \`versions\`, \`(versionChange)\`), thumbs up and down (\`[(rating)]\`; down asks what was wrong in a Popover: \`reasons\`, \`(reason)\`), Read aloud (\`readAloud\`, \`[(reading)]\`, \`readTime\`).`,
      },
    },
  },
} satisfies Meta;

export default meta;

const QUESTION = 'Summarize the 2.4 release notes in one sentence.';
const ANSWERS = [
  'Shared workspaces arrive in 2.4, sync is twice as fast, and exports on Windows work again.',
  '2.4 brings shared workspaces, sync that is twice as fast, and working exports on Windows.',
  'In 2.4: shared workspaces, twice-as-fast sync, and fixed exports on Windows.',
];
// The React stories' "Message" frame around the bar (a muted Bubble with the question, the model, the answer), written
// out as React renders it, with its inline styles as the CSSOM serialises them.
const claude = riClaudeFill.replace('width="24" height="24"', 'width="12" height="12"').replace('<svg ', '<svg aria-hidden="true" ');
const card = (answer: string, bar: string, id = 'id="question"') => `<div style="width: min(420px, -32px + 100vw); border-radius: var(--ds-radius-xl); background: var(--ds-card); box-shadow: 0 0 0 1px var(--ds-border), var(--ds-surface-card); color: var(--ds-foreground); font-family: var(--ds-font-sans); font-size: var(--ds-text-sm); line-height: var(--ds-text-sm--line-height);">
  <div style="display: grid; gap: 10px; padding: 12px 16px 10px;">
    <div class="ds-bubble ds-bubble--muted ds-bubble--end" style="justify-self: end;"><div class="ds-bubble__content"><div ${id} class="ds-bubble__text">${QUESTION}</div></div></div>
    <div style="display: flex; align-items: center; gap: 6px; color: var(--ds-muted-foreground); font-size: var(--ds-text-xs);">${claude} Sonnet 4.5</div>
    <p style="margin: 0px;">${answer}</p>
  </div>
  <div style="padding: 6px 16px; border-top: 1px solid var(--ds-border);">${bar}</div>
</div>`;

/** Figma "In a message": under the answer, at rest. Every action works: Regenerate adds a version, Read aloud reads. */
export const InAMessage: StoryObj = {
  render: () => ({
    props: { answers: ANSWERS, version: 1, versions: 1, reading: false },
    template: card(
      '{{ answers[(version - 1) % answers.length] }}',
      `<div dsMessageActions [copyText]="answers[(version - 1) % answers.length]" regenerable (regenerate)="versions = versions + 1; version = versions" [version]="version" [versions]="versions" (versionChange)="version = $event" readAloud [(reading)]="reading" readTime="0:00"></div>`,
    ),
  }),
};

/** Figma "Regenerated": ‹ 2 / 3 › to switch between the versions. */
export const Versions: StoryObj = {
  render: () => ({
    props: { answers: ANSWERS, version: 2 },
    template: card('{{ answers[version - 1] }}', `<div dsMessageActions [copyText]="answers[version - 1]" regenerable [version]="version" [versions]="3" (versionChange)="version = $event" readAloud></div>`),
  }),
};

/** Figma "Thumbs down": it asks what was wrong. Pressing it again takes the rating back. */
export const ThumbsDown: StoryObj = {
  render: () => ({
    props: { answer: ANSWERS[0], rating: null, reason: undefined },
    template: `<div style="display: grid; gap: 12px; padding-bottom: 140px;">
      ${card(ANSWERS[0], `<div dsMessageActions [copyText]="answer" regenerable [rating]="rating" (ratingChange)="rating = $event; reason = undefined" (reason)="reason = $event" readAloud></div>`)}
      <p style="margin: 0px; color: var(--ds-muted-foreground); font-family: var(--ds-font-sans); font-size: var(--ds-text-xs);">Rating: {{ rating ?? 'none' }}{{ reason ? ' · ' + reason : '' }}</p>
    </div>`,
  }),
};

/** Figma "Bar states": rated up, and reading aloud with a wave and Pause. Copy turns into a check for 2 s. */
export const BarStates: StoryObj = {
  render: () => ({
    props: { answer: ANSWERS[0] },
    template: `<div style="display: grid; gap: 16px;">
      <div dsMessageActions [copyText]="answer" regenerable rating="up" readAloud></div>
      <div dsMessageActions [copyText]="answer" regenerable readAloud [reading]="true" readTime="0:07"></div>
    </div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], answers: ANSWERS },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 16px; align-content: start;">
          ${card(ANSWERS[1], `<div dsMessageActions [copyText]="answers[1]" regenerable [version]="2" [versions]="3" readAloud></div>`, `[id]="'question-' + scheme"`)}
          <div dsMessageActions [copyText]="answers[0]" regenerable rating="up" readAloud [reading]="true" readTime="0:07"></div>
        </div>
      }
    </div>`,
  }),
};
