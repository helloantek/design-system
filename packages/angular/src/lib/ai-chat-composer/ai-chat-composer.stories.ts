import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { signal } from '@angular/core';
import { DsBadge } from '../badge/badge';
import { DsButton } from '../button/button';
import { DsIcon, DsTrailingIcon } from '../slots/slots';
import { DsAIChatComposer, DsAIChatComposerToken, DsComposerBadges, DsComposerHeader, DsComposerLeading, DsComposerModel, type AIChatComposerState } from './ai-chat-composer';
import { riAddLineIcon, riArrowDownSLineTrail, riGlobalLineIcon, riSearchEyeLineIcon } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=1623-141714';

const meta = {
  title: 'Components/AI Chat Composer',
  decorators: [moduleMetadata({ imports: [DsAIChatComposer, DsAIChatComposerToken, DsComposerBadges, DsComposerHeader, DsComposerLeading, DsComposerModel, DsBadge, DsButton, DsIcon, DsTrailingIcon] })],
  parameters: {
    docs: {
      description: {
        component: `Sort UI 2.0 **AI Chat Composer** ([open in Figma](${FIGMA_URL})) for Angular: \`<div dsAIChatComposer>\` renders the same markup and \`ds-ai-composer\` classes as the React AIChatComposer. \`layout\` × \`state\`; content marked \`dsComposerLeading\` (the + menu), \`dsComposerBadges\` (tools), \`dsComposerModel\` (the model picker) and \`dsComposerHeader\` (attachments). The prompt grows to 8 lines (24 maximized), Enter sends (\`(submit)\`), Shift+Enter adds a line, /commands are tinted; \`[(value)]\`. \`<mark dsAIChatComposerToken>\` draws a /command elsewhere.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(448px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'width: min(448px, -32px + 100vw);';
const plus = `<button dsButton dsComposerLeading variant="ghost" size="sm" aria-label="Add files or tools">${riAddLineIcon}</button>`;
const model = `<button dsButton dsComposerModel variant="ghost" size="sm">Opus 5.5 High${riArrowDownSLineTrail}</button>`;
const LONG = [
  'Draft the release notes for version 4.2 of the mobile app.',
  '',
  'Highlights: offline mode for saved trips, a new map style, faster sync on slow networks.',
  'Fixes: the share sheet no longer closes on rotation; push notifications respect quiet hours.',
  'Tone: friendly and short, one line per change, no marketing language.',
  'Audience: people who already use the app every week.',
  'Format: a title, three highlights, then the fixes as a list.',
  'Also suggest a one-line summary for the store listing.',
  'Keep it under 120 words.',
].join('\n');

export const Demo: StoryObj = {
  render: () => {
    const tools = signal(['search', 'research']);
    const drop = (tool: string) => tools.update((t) => t.filter((x) => x !== tool));
    return {
      props: { tools, drop },
      template: `<div style="display: grid; gap: 24px; ${WIDTH}">
        <div dsAIChatComposer>${plus}${model}</div>
        <div dsAIChatComposer layout="column" value="Use /release-notes to draft the notes for version 4.2 of the mobile app.">${plus}${model}</div>
        <div dsAIChatComposer layout="column" state="recording">${plus}${model}</div>
        <div dsAIChatComposer>${plus}${model}
          @if (tools().includes('search')) {
            <span dsBadge dsComposerBadges size="lg" color="blue" removable (remove)="drop('search')">${riGlobalLineIcon}Web search</span>
          }
          @if (tools().includes('research')) {
            <span dsBadge dsComposerBadges size="lg" color="blue" removable (remove)="drop('research')">${riSearchEyeLineIcon}Research</span>
          }
        </div>
      </div>`,
    };
  },
};

/** Figma demo "Long text": past 8 lines the prompt scrolls and the expand button appears; expanded it grows to 24. */
export const LongText: StoryObj = {
  render: () => ({ props: { long: LONG }, template: `<div dsAIChatComposer style="${WIDTH}" [value]="long">${plus}${model}</div>` }),
};

export const Dictation: StoryObj = {
  render: () => {
    const state = signal<AIChatComposerState>('default');
    const value = signal('');
    const levels = signal<number[]>(Array(48).fill(0));
    let tick: ReturnType<typeof setInterval> | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    return {
      props: {
        state,
        value,
        levels,
        dictate: () => {
          levels.set(Array(48).fill(0));
          state.set('recording');
          clearInterval(tick);
          tick = setInterval(() => levels.update((l) => [...l.slice(1), Math.random() < 0.3 ? 0 : Math.random()]), 120);
        },
        cancel: () => {
          clearInterval(tick);
          clearTimeout(timer);
          state.set('default');
        },
        stop: () => {
          clearInterval(tick);
          state.set('transcribing');
          timer = setTimeout(() => {
            value.update((v) => (v ? `${v} ` : '') + 'Summarize the vendor review for the team.');
            state.set('default');
          }, 1500);
        },
      },
      template: `<div dsAIChatComposer style="${WIDTH}" [state]="state()" [value]="value()" (valueChange)="value.set($event)" (submit)="value.set('')" [levels]="levels()" (dictate)="dictate()" (cancelRecording)="cancel()" (stopRecording)="stop()">${plus}${model}</div>`,
    };
  },
};

/** Figma "AI Chat Composer Token": a /command in a sent message. */
export const Token: StoryObj = {
  render: () => ({
    template: `<p style="margin: 0px; color: var(--ds-foreground); font-family: var(--ds-font-sans); font-size: 13px; line-height: 20px;">Use <mark dsAIChatComposerToken>/release-notes</mark> to draft the notes for version 4.2.</p>`,
  }),
};
