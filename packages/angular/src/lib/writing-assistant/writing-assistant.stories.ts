import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { signal } from '@angular/core';
import { DsButton } from '../button/button';
import { DsIcon, DsTrailingIcon } from '../slots/slots';
import { DsAIChatComposer, DsComposerLeading, DsComposerModel } from '../ai-chat-composer/ai-chat-composer';
import { DsWritingAssistant, DsWritingAssistantComposer, type WritingAssistantStatus } from './writing-assistant';
import { riAddLineIcon, riArrowDownSLineTrail } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6132-2642';

const meta = {
  title: 'Patterns/Writing Assistant',
  decorators: [moduleMetadata({ imports: [DsWritingAssistant, DsWritingAssistantComposer, DsAIChatComposer, DsComposerLeading, DsComposerModel, DsButton, DsIcon, DsTrailingIcon] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Writing Assistant** ([open in Figma](${FIGMA_URL})) for Angular: \`<section dsWritingAssistant>\` with the same markup and \`ds-writing-assistant\` classes as the React WritingAssistant. The text you selected (\`selection\`), \`suggestions\` to start from (\`(suggestion)\`), and a composer marked \`dsWritingAssistantComposer\`. The reply (\`reply\`, \`status="streaming"\`) streams in with Stop (\`stoppable\`), then lands (\`status="ready"\`) with Replace (\`replaceable\`, also Enter), Insert below (\`insertable\`) and Copy (\`copyable\`); \`closable\`.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(400px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'width: min(400px, -32px + 100vw);';
const SELECTION = 'Your refund has been processed and should appear within 5–10 business days.';
const SUGGESTIONS = ['Make it shorter', 'Fix the grammar', 'Sound more friendly', 'Translate to Polish'];
const REPLY = 'Good news – your refund is on its way and should reach your card within 5–10 working days. Thanks for bearing with us!';
const plus = `<button dsButton dsComposerLeading variant="ghost" size="sm" aria-label="Add files or tools">${riAddLineIcon}</button>`;
const model = `<button dsButton dsComposerModel variant="ghost" size="sm">Opus 5.5 High${riArrowDownSLineTrail}</button>`;
const composer = (attrs = 'layout="column" placeholder="Ask about anything…"') => `<div dsAIChatComposer dsWritingAssistantComposer ${attrs}>${plus}${model}</div>`;

/** Pick a suggestion: the reply streams in with Stop, then lands with Replace (or Enter), Insert below and Copy. */
export const Writing: StoryObj = {
  render: () => {
    const all = REPLY.split(' ');
    const ask = signal<string | undefined>(undefined);
    const status = signal<WritingAssistantStatus>('idle');
    const words = signal(0);
    const done = signal<string | undefined>(undefined);
    let timer: ReturnType<typeof setTimeout> | undefined;
    const tick = () => {
      clearTimeout(timer);
      if (status() !== 'streaming') return;
      if (words() >= all.length) return status.set('ready');
      timer = setTimeout(() => {
        words.update((w) => w + 1);
        tick();
      }, 60);
    };
    const start = (what: string) => {
      ask.set(what);
      words.set(0);
      done.set(undefined);
      status.set('streaming');
      tick();
    };
    return {
      props: { ask, status, words, done, all, start, selection: SELECTION, suggestions: SUGGESTIONS, stop: () => { clearTimeout(timer); status.set('ready'); } },
      template: `<div style="${WIDTH} display: grid; gap: 12px;">
        <section dsWritingAssistant [selection]="selection" [suggestions]="suggestions" (suggestion)="start($event)" [ask]="ask()" [reply]="all.slice(0, words()).join(' ')" [status]="status()" stoppable (stop)="stop()" replaceable (replace)="done.set('Replaced the selection.')" insertable (insertBelow)="done.set('Inserted below the selection.')" copyable (copy)="done.set('Copied.')" closable (close)="status.set('idle')">
          ${composer('layout="column" placeholder="Ask about anything…" (submit)="start($event)"')}
        </section>
        @if (done()) {
          <p style="margin: 0px; color: var(--ds-muted-foreground); font-family: var(--ds-font-sans); font-size: var(--ds-text-xs);">{{ done() }}</p>
        }
      </div>`,
    };
  },
};

/** Figma "Replying": the answer streams in, Stop is at hand. */
export const Replying: StoryObj = {
  render: () => ({
    props: { selection: SELECTION },
    template: `<div style="${WIDTH}"><section dsWritingAssistant [selection]="selection" ask="Sound more friendly" reply="Good news – your refund is on its way and" status="streaming" stoppable closable>${composer()}</section></div>`,
  }),
};

/** Figma "Reply ready": Replace, Insert below or Copy. */
export const ReplyReady: StoryObj = {
  render: () => ({
    props: { selection: SELECTION, reply: REPLY },
    template: `<div style="${WIDTH}"><section dsWritingAssistant [selection]="selection" ask="Sound more friendly" [reply]="reply" status="ready" replaceable insertable copyable closable>${composer()}</section></div>`,
  }),
};

/** Figma "Dictating the next ask": the composer records. */
export const Dictating: StoryObj = {
  render: () => ({
    props: { selection: SELECTION, suggestions: SUGGESTIONS },
    template: `<div style="${WIDTH}"><section dsWritingAssistant [selection]="selection" [suggestions]="suggestions" closable>${composer('state="recording"')}</section></div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], selection: SELECTION, suggestions: SUGGESTIONS, reply: REPLY },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 16px; align-content: start;">
          <section dsWritingAssistant aria-label="Writing assistant ({{ scheme }})" [selection]="selection" [suggestions]="suggestions" closable>${composer('layout="column" inputLabel="Message ({{ scheme }})" placeholder="Ask about anything…"')}</section>
          <section dsWritingAssistant aria-label="Writing assistant, reply ({{ scheme }})" ask="Sound more friendly" [reply]="reply" status="ready" replaceable insertable copyable closable></section>
        </div>
      }
    </div>`,
  }),
};
