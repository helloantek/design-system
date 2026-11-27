import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { signal } from '@angular/core';
import { DsPromptLibrary, type PromptTemplate } from './prompt-library';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6132-2927';

const meta = {
  title: 'Patterns/Prompt Library',
  decorators: [moduleMetadata({ imports: [DsPromptLibrary] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Prompt Library** ([open in Figma](${FIGMA_URL})) for Angular: \`<section dsPromptLibrary>\` with the same markup and \`ds-prompt-library\` classes as the React PromptLibrary. Saved prompt \`templates\` with variables (\`{name}\` in their \`text\`): pick one (\`[(selected)]\`; search by name or category, \`[(query)]\`), type into the gaps (\`[(values)]\`), and watch the prompt assemble with its token count (\`countTokens\`). Use prompt (\`(use)\`, also ⌘↵) turns on once every gap is filled; Copy (\`(copy)\`); New prompt when nothing matches (\`newable\`, \`(newPrompt)\`).`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(760px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'style="width: min(760px, -32px + 100vw);"';
const TEMPLATES: PromptTemplate[] = [
  { id: 'complaint', name: 'Reply to a complaint', category: 'Support', categoryColor: 'violet', text: 'Write a {tone} reply to {customer} who is upset about {problem}. Keep it under 120 words.' },
  { id: 'call', name: 'Summarise a call', category: 'Notes', categoryColor: 'teal', text: 'Summarise the call with {who} in {count} bullet points, then list the next steps.' },
  { id: 'release', name: 'Write release notes', category: 'Product', categoryColor: 'pink', text: 'Write release notes for {version} from these changes: {changes}. Group them by area.' },
  { id: 'cold', name: 'Draft a cold email', category: 'Sales', categoryColor: 'cyan', text: 'Draft a short cold email to {company} about {offer}, in a {tone} tone.' },
];

/** Pick a template, fill its gaps; Use prompt (or ⌘↵) turns on once all are filled. */
export const Library: StoryObj = {
  render: () => {
    const note = signal('');
    return {
      props: { templates: TEMPLATES, note },
      template: `<div style="display: grid; gap: 12px;">
        <section dsPromptLibrary ${WIDTH} [templates]="templates" [values]="{ tone: 'friendly' }" newable (copy)="note.set('Copied.')" (use)="note.set('Used: ' + $event.prompt)" (newPrompt)="note.set('New prompt: ' + $event)"></section>
        <p aria-live="polite" style="margin: 0px; min-height: 20px; color: var(--ds-muted-foreground); font: 13px/20px var(--ds-font-sans);">{{ note() }}</p>
      </div>`,
    };
  },
};

/** Figma "Ready": every gap filled, Use prompt is on. */
export const Ready: StoryObj = {
  render: () => ({
    props: { templates: TEMPLATES },
    template: `<section dsPromptLibrary ${WIDTH} [templates]="templates" [values]="{ tone: 'friendly', customer: 'Ana Silva', problem: 'a late refund' }"></section>`,
  }),
};

/** Figma "Search: one match". */
export const Search: StoryObj = {
  render: () => ({ props: { templates: TEMPLATES }, template: `<section dsPromptLibrary ${WIDTH} [templates]="templates" query="reply" [values]="{ tone: 'friendly' }"></section>` }),
};

/** Figma "Search: nothing matches": New prompt. */
export const NothingMatches: StoryObj = {
  render: () => ({ props: { templates: TEMPLATES }, template: `<section dsPromptLibrary ${WIDTH} [templates]="templates" query="xyz" [values]="{ tone: 'friendly' }" newable></section>` }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], templates: TEMPLATES },
    template: `<div style="display: grid;">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px;">
          <section dsPromptLibrary aria-label="Prompt library ({{ scheme }})" style="max-width: 760px;" [templates]="templates" [values]="{ tone: 'friendly', customer: 'Ana Silva' }"></section>
        </div>
      }
    </div>`,
  }),
};
