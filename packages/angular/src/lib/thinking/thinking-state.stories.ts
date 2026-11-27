import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsThinkingNote, DsThinkingSource, DsThinkingSources, DsThinkingState, DsThinkingStep, DsThinkingStepIcon } from './thinking-state';
import { riDriveFillHidden, riFileSearchLineHidden, riGlobalLineHidden, riNotionFillHidden, riPencilLineHidden, riSlackFillHidden, riSparkling2FillHidden } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6127-2219';

const meta = {
  title: 'Patterns/Thinking State',
  decorators: [moduleMetadata({ imports: [DsThinkingState, DsThinkingStep, DsThinkingStepIcon, DsThinkingSources, DsThinkingSource, DsThinkingNote] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Thinking State** ([open in Figma](${FIGMA_URL})) for Angular: \`<div dsThinkingState>\` with \`<li dsThinkingStep>\` steps, the same markup and \`ds-thinking-state\` classes as the React ThinkingState. Each step with its icon (\`dsThinkingStepIcon\`) and a live \`time\` (a spinner while it runs), the sources it searched (\`<ul dsThinkingSources>\` of \`<a dsThinkingSource>\` chips, \`[more]\`), a source it could not reach in amber (\`<p dsThinkingNote>\`). When the answer starts it folds (\`status="done"\`) into "Thought for 14 s · 6 sources", which opens back (\`[(open)]\`).`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(480px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'style="width: min(480px, -32px + 100vw);"';
const icon = (svg: string) => svg.replace('<svg ', '<svg dsThinkingStepIcon ');
const sources = `<ul dsThinkingSources [more]="3">
  <li><a dsThinkingSource href="#notion">${riNotionFillHidden}Notion – Refund policy</a></li>
  <li><a dsThinkingSource href="#slack">${riSlackFillHidden}Slack – #support</a></li>
  <li><a dsThinkingSource href="#drive">${riDriveFillHidden}Drive – orders-2026.csv</a></li>
</ul>`;
const thought = `<li dsThinkingStep label="Thought about the question" time="2 s">${icon(riSparkling2FillHidden)}</li>`;
const searched = `<li dsThinkingStep label="Searched 6 sources" time="4 s">${icon(riGlobalLineHidden)}${sources}</li>`;
const read = `<li dsThinkingStep label="Read the refund policy" detail="3 matches" time="3 s">${icon(riFileSearchLineHidden)}</li>`;
const wrote = `<li dsThinkingStep label="Wrote the answer" time="5 s">${icon(riPencilLineHidden)}</li>`;
const note = `<p dsThinkingNote>Couldn’t open GitHub – went on without it</p>`;

/** Figma "Searching": the sources appear as it finds them. */
export const Searching: StoryObj = {
  render: () => ({
    template: `<div ${WIDTH}><div dsThinkingState>${thought}<li dsThinkingStep status="running" label="Searching" time="0:04">${sources}</li></div></div>`,
  }),
};

/** Figma "Reading and writing": a source it could not reach is said in amber. */
export const ReadingAndWriting: StoryObj = {
  render: () => ({
    template: `<div ${WIDTH}><div dsThinkingState>${thought}<li dsThinkingStep label="Searched 6 sources" time="4 s">${icon(riGlobalLineHidden)}${sources}${note}</li>${read}<li dsThinkingStep status="running" label="Writing the answer" time="0:01"></li></div></div>`,
  }),
};

/** Figma "Done": folds to one line when the answer starts; a click opens it again, every step with its time. */
export const Done: StoryObj = {
  render: () => ({
    template: `<div ${WIDTH}><div dsThinkingState status="done" title="Thought for 14 s" summary="6 sources · 4 steps">${thought}${searched}${read}${wrote}</div></div>`,
  }),
};

/** Figma "Opened again": every step with its time. */
export const Opened: StoryObj = {
  render: () => ({
    template: `<div ${WIDTH}><div dsThinkingState status="done" [open]="true" title="Thought for 14 s" summary="6 sources · 4 steps">${thought}${searched}${read}${wrote}</div></div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'] },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 24px; align-content: start;">
          <div dsThinkingState>${thought}<li dsThinkingStep label="Searched 6 sources" time="4 s">${icon(riGlobalLineHidden)}${sources}${note}</li><li dsThinkingStep status="running" label="Writing the answer" time="0:01"></li></div>
          <div dsThinkingState status="done" title="Thought for 14 s" summary="6 sources · 4 steps">${thought}</div>
        </div>
      }
    </div>`,
  }),
};
