import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { signal } from '@angular/core';
import { DsBubble } from '../bubble/bubble';
import { DsThinkingLoader } from './thinking-loader';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6126-2130';

const meta = {
  title: 'Patterns/Thinking Loader',
  decorators: [moduleMetadata({ imports: [DsThinkingLoader, DsBubble] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Thinking Loader** ([open in Figma](${FIGMA_URL})) for Angular: \`<div dsThinkingLoader>\` with the same markup and \`ds-thinking\` classes as the React ThinkingLoader. A spinner and what it is doing (the content, read out as it changes), then a check with how long it thought (\`status="done"\`). When it takes long it says so, with \`elapsed\` and Stop (\`status="slow"\`, \`(stop)\`); stopped, a clock (\`status="stopped"\`).`,
      },
    },
  },
} satisfies Meta;

export default meta;

// The React stories' inline styles, written as the CSSOM serialises them.
const COLUMN = 'display: grid; gap: 10px; justify-items: start;';
const PHASES = ['Reading 4 files…', 'Searching the docs…', 'Writing the answer…'];

/** Figma "In chat": under the question, where the answer will start. The label rolls through the phases, then it is done. */
export const InChat: StoryObj = {
  render: () => {
    const step = signal(0);
    const next = () => {
      if (step() > PHASES.length - 1) return;
      setTimeout(() => {
        step.update((s) => s + 1);
        next();
      }, 1500);
    };
    next();
    return {
      props: { step, phases: PHASES },
      template: `<div style="${COLUMN} width: min(420px, -32px + 100vw);">
        <div dsBubble variant="muted" align="end" style="justify-self: end;">Which CRM fits a 10-person sales team best?</div>
        @if (step() >= phases.length) {
          <div dsThinkingLoader status="done">Thought for 5 s</div>
        } @else {
          <div dsThinkingLoader>{{ phases[step()] }}</div>
        }
      </div>`,
    };
  },
};

/** Figma "Phases": the label rolls through what it does. */
export const Phases: StoryObj = {
  render: () => ({
    props: { phases: PHASES },
    template: `<div style="${COLUMN}">
      @for (phase of phases; track phase) {
        <div dsThinkingLoader>{{ phase }}</div>
      }
    </div>`,
  }),
};

/** Figma "Done, taking long with Stop, stopped". Stop ends it. */
export const Ends: StoryObj = {
  render: () => ({
    props: { status: 'slow' },
    template: `<div style="${COLUMN}">
      <div dsThinkingLoader status="done">Thought for 10 s</div>
      @if (status === 'stopped') {
        <div dsThinkingLoader status="stopped">Stopped after 48 s</div>
      } @else {
        <div dsThinkingLoader status="slow" elapsed="0:48" (stop)="status = 'stopped'"></div>
      }
      <div dsThinkingLoader status="stopped">Stopped after 52 s</div>
    </div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'] },
    template: `<div style="display: grid; grid-template-columns: repeat(2, 1fr);">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="${COLUMN} background: var(--ds-background); padding: 24px;">
          <div dsThinkingLoader>Reading 4 files…</div>
          <div dsThinkingLoader status="done">Thought for 10 s</div>
          <div dsThinkingLoader status="slow" elapsed="0:48"></div>
          <div dsThinkingLoader status="stopped">Stopped after 52 s</div>
        </div>
      }
    </div>`,
  }),
};
