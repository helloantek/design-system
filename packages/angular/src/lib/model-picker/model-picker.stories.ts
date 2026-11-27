import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsModelPicker, DsModelPickerIcon, type ModelPickerModel } from './model-picker';
import { riClaudeFill, riGeminiFill } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6128-2365';

const meta = {
  title: 'Patterns/Model Picker',
  decorators: [moduleMetadata({ imports: [DsModelPicker, DsModelPickerIcon] })],
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
