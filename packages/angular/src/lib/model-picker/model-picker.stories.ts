import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsButton } from '../button/button';
import { DsIcon } from '../slots/slots';
import { DsAIChatComposer, DsComposerLeading, DsComposerModel } from '../ai-chat-composer/ai-chat-composer';
import { DsModelPicker, DsModelPickerIcon, type ModelPickerModel } from './model-picker';
import { riAddLineIcon, riClaudeFill, riGeminiFill } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6128-2365';

const meta = {
  title: 'Patterns/Model Picker',
  decorators: [moduleMetadata({ imports: [DsModelPicker, DsModelPickerIcon, DsAIChatComposer, DsComposerLeading, DsComposerModel, DsButton, DsIcon] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Model Picker** ([open in Figma](${FIGMA_URL})) for Angular: \`<ds-model-picker>\` with the same markup and \`ds-model-picker\` classes as the React ModelPicker. Each model with its logo (an \`<ng-template dsModelPickerIcon="value">\`) and what it is for (\`models\`: \`label\`, \`description\`); pointing at one (mouse or arrow keys) shows its \`speed\`, \`quality\` and \`cost\` (1–5); extended thinking (\`thinkable\`, \`[(thinking)]\`) with its effort (\`[(effort)]\`, \`efforts\`); and what the choice means at the bottom (\`note\`). \`[(value)]\`, \`[(open)]\`, \`align\`.`,
      },
    },
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

const MODELS: ModelPickerModel[] = [
  { value: 'haiku', label: 'Haiku 4.5', description: 'Quick answers, everyday tasks', speed: 5, quality: 3, cost: 1, note: 'First word in ~1 s · $1 per 1M tokens' },
  { value: 'sonnet', label: 'Sonnet 4.5', description: 'Most work: writing, code, analysis', speed: 3, quality: 4, cost: 3, note: 'First word in ~4 s · $3 per 1M tokens' },
  { value: 'opus', label: 'Opus 4.1', description: 'Hard problems, long documents', speed: 1, quality: 5, cost: 5, note: 'First word in ~2 s · $15 per 1M tokens' },
  { value: 'gemini', label: 'Gemini 2.5 Pro', description: 'Very long files and video', speed: 3, quality: 4, cost: 3, note: 'First word in ~3 s · $2.50 per 1M tokens' },
];
const icons = ['haiku', 'sonnet', 'opus'].map((v) => `<ng-template dsModelPickerIcon="${v}">${riClaudeFill}</ng-template>`).join('') + `<ng-template dsModelPickerIcon="gemini">${riGeminiFill}</ng-template>`;

const plus = `<button dsButton dsComposerLeading variant="ghost" size="sm" aria-label="Add files or tools">${riAddLineIcon}</button>`;
// min(420px, calc(100vw - 32px)) and room for the menu, written as the CSSOM serialises React's inline style.
const FRAME = 'style="width: min(420px, -32px + 100vw); padding-bottom: 420px;"';

/** Figma "In the composer" and "Open": click the model to choose another; point at one to see its speed, quality and cost. */
export const InTheComposer: StoryObj = {
  render: () => ({
    props: { models: MODELS, value: 'sonnet', thinking: false },
    template: `<div ${FRAME}><div dsAIChatComposer layout="column" placeholder="Ask anything…">${plus}<ds-model-picker dsComposerModel [models]="models" [(value)]="value" thinkable [(thinking)]="thinking">${icons}</ds-model-picker></div></div>`,
  }),
};

/** Figma "Extended thinking on": the effort opens, the trigger and the price say so. */
export const ExtendedThinking: StoryObj = {
  render: () => ({
    props: { models: MODELS },
    template: `<div ${FRAME}><div dsAIChatComposer layout="column" placeholder="Ask anything…">${plus}<ds-model-picker dsComposerModel [models]="models" value="sonnet" thinkable [thinking]="true" [open]="true">${icons}</ds-model-picker></div></div>`,
  }),
};

/** On its own, out of the composer: the same menu, with the thinking switch. */
export const Alone: StoryObj = {
  render: () => ({
    props: { models: MODELS, value: 'sonnet' },
    template: `<div style="padding-bottom: 420px;"><ds-model-picker [models]="models" [(value)]="value" thinkable>${icons}</ds-model-picker></div>`,
  }),
};

/** Without the thinking switch, for models that have none; the menu opens at the trigger's start. */
export const ModelsOnly: StoryObj = {
  render: () => ({
    props: { models: MODELS.map(({ speed, quality, cost, ...rest }) => rest) },
    template: `<div style="padding-bottom: 300px;"><ds-model-picker [models]="models" value="haiku" align="start" [open]="true">${icons}</ds-model-picker></div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], models: MODELS },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px 24px 440px;">
          <div dsAIChatComposer layout="column" placeholder="Ask anything…">${plus}<ds-model-picker dsComposerModel [models]="models" value="sonnet" thinkable [thinking]="true" [open]="true">${icons}</ds-model-picker></div>
        </div>
      }
    </div>`,
  }),
};
