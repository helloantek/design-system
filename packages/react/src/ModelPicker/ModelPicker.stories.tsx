import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiAddLine, RiClaudeFill, RiGeminiFill } from '@remixicon/react';
import { useState } from 'react';
import { AIChatComposer } from '../AIChatComposer';
import { Button } from '../Button';
import { ModelPicker, type ModelPickerModel } from './ModelPicker';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6128-2365';

const meta = {
  title: 'Patterns/Model Picker',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Model Picker** ([open in Figma](${FIGMA_URL})): the model menu of an AI chat, opened from the composer (AIChatComposer's \`model\` slot). Each model with its logo and what it is for (\`models\`: \`label\`, \`description\`, \`icon\`); pointing at one (mouse or arrow keys) shows its \`speed\`, \`quality\` and \`cost\` (1–5); extended thinking (\`thinking\`) with its effort (\`effort\`, \`efforts\`); and what the choice means at the bottom (\`note\`, "+ thinking" when on). The trigger says "· Thinking" when it is on.

**When to use:** letting people choose the model for the next message, with what each is for and its speed, quality and cost.
**When not to use:** the product picks the model itself, or there is only one model: hide the picker rather than show a single option.`,
      },
    },
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

const MODELS: ModelPickerModel[] = [
  { value: 'haiku', label: 'Haiku 4.5', description: 'Quick answers, everyday tasks', icon: <RiClaudeFill />, speed: 5, quality: 3, cost: 1, note: 'First word in ~1 s · $1 per 1M tokens' },
  { value: 'sonnet', label: 'Sonnet 4.5', description: 'Most work: writing, code, analysis', icon: <RiClaudeFill />, speed: 3, quality: 4, cost: 3, note: 'First word in ~4 s · $3 per 1M tokens' },
  { value: 'opus', label: 'Opus 4.1', description: 'Hard problems, long documents', icon: <RiClaudeFill />, speed: 1, quality: 5, cost: 5, note: 'First word in ~2 s · $15 per 1M tokens' },
  { value: 'gemini', label: 'Gemini 2.5 Pro', description: 'Very long files and video', icon: <RiGeminiFill />, speed: 3, quality: 4, cost: 3, note: 'First word in ~3 s · $2.50 per 1M tokens' },
];

const plus = <Button variant="ghost" size="sm" icon={<RiAddLine />} aria-label="Add files or tools" />;
const frame = { width: 'min(420px, calc(100vw - 32px))', paddingBottom: 420 };

/** Figma "In the composer" and "Open": click the model to choose another; point at one to see its speed, quality and cost. */
export const InTheComposer: StoryObj = {
  render: function Render() {
    const [model, setModel] = useState('sonnet');
    const [thinking, setThinking] = useState(false);
    return (
      <div style={frame}>
        <AIChatComposer
          layout="column"
          placeholder="Ask anything…"
          leading={plus}
          model={<ModelPicker models={MODELS} value={model} onValueChange={setModel} thinking={thinking} onThinkingChange={setThinking} />}
        />
      </div>
    );
  },
};

/** Figma "Extended thinking on": the effort opens, the trigger and the price say so. */
export const ExtendedThinking: StoryObj = {
  render: () => (
    <div style={frame}>
      <AIChatComposer layout="column" placeholder="Ask anything…" leading={plus} model={<ModelPicker models={MODELS} defaultValue="sonnet" defaultThinking defaultOpen />} />
    </div>
  ),
};

/** On its own, out of the composer: the same menu, with the thinking switch. */
export const Alone: StoryObj = {
  render: () => (
    <div style={{ paddingBottom: 420 }}>
      <ModelPicker models={MODELS} defaultValue="sonnet" defaultThinking={false} />
    </div>
  ),
};

/** Without the thinking switch, for models that have none; the menu opens at the trigger's start. */
export const ModelsOnly: StoryObj = {
  render: () => (
    <div style={{ paddingBottom: 300 }}>
      <ModelPicker models={MODELS.map(({ speed, quality, cost, ...rest }) => rest)} defaultValue="haiku" align="start" defaultOpen />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, paddingBottom: 440 }}>
          <AIChatComposer layout="column" placeholder="Ask anything…" leading={plus} model={<ModelPicker models={MODELS} defaultValue="sonnet" defaultThinking defaultOpen />} />
        </div>
      ))}
    </div>
  ),
};
