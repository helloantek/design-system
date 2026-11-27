import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import { PromptLibrary, type PromptTemplate } from './PromptLibrary';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6132-2927';

const meta = {
  title: 'Patterns/Prompt Library',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Prompt Library** ([open in Figma](${FIGMA_URL})): saved prompt \`templates\` with variables (\`{name}\` in their \`text\`). Pick one from the list (search by name or category), type straight into the gaps in its sentence (\`values\`), and watch the prompt assemble below with its token count (\`countTokens\`). Use prompt (\`onUse\`, also ⌘↵) turns on once every gap is filled; Copy (\`onCopy\`) copies it as it stands. When nothing matches the search, New prompt (\`onNew\`).

**When to use:** reusing saved prompts with gaps to fill in, picked from a searchable list by category.
**When not to use:** each prompt is one-off, or there are only two or three templates: offer them as suggestions in the composer instead.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(760px, calc(100vw - 32px))' };

const TEMPLATES: PromptTemplate[] = [
  { id: 'complaint', name: 'Reply to a complaint', category: 'Support', categoryColor: 'violet', text: 'Write a {tone} reply to {customer} who is upset about {problem}. Keep it under 120 words.' },
  { id: 'call', name: 'Summarise a call', category: 'Notes', categoryColor: 'teal', text: 'Summarise the call with {who} in {count} bullet points, then list the next steps.' },
  { id: 'release', name: 'Write release notes', category: 'Product', categoryColor: 'pink', text: 'Write release notes for {version} from these changes: {changes}. Group them by area.' },
  { id: 'cold', name: 'Draft a cold email', category: 'Sales', categoryColor: 'cyan', text: 'Draft a short cold email to {company} about {offer}, in a {tone} tone.' },
];

/** Pick a template, fill its gaps; Use prompt (or ⌘↵) turns on once all are filled. */
export const Library: StoryObj = {
  render: function Render() {
    const [note, setNote] = useState('');
    return (
      <div style={{ display: 'grid', gap: 12 }}>
        <PromptLibrary
          templates={TEMPLATES}
          defaultValues={{ tone: 'friendly' }}
          onCopy={() => setNote('Copied.')}
          onUse={(prompt) => setNote(`Used: ${prompt}`)}
          onNew={(query) => setNote(`New prompt: ${query}`)}
          style={WIDTH}
        />
        <p aria-live="polite" style={{ margin: 0, minHeight: 20, color: 'var(--ds-muted-foreground)', font: '13px/20px var(--ds-font-sans)' }}>
          {note}
        </p>
      </div>
    );
  },
};

/** Figma "Ready": every gap filled, Use prompt is on. */
export const Ready: StoryObj = {
  render: () => <PromptLibrary templates={TEMPLATES} defaultValues={{ tone: 'friendly', customer: 'Ana Silva', problem: 'a late refund' }} onCopy={() => {}} onUse={() => {}} style={WIDTH} />,
};

/** Figma "Search: one match". */
export const Search: StoryObj = {
  render: () => <PromptLibrary templates={TEMPLATES} defaultQuery="reply" defaultValues={{ tone: 'friendly' }} onCopy={() => {}} onUse={() => {}} style={WIDTH} />,
};

/** Figma "Search: nothing matches": New prompt. */
export const NothingMatches: StoryObj = {
  render: () => <PromptLibrary templates={TEMPLATES} defaultQuery="xyz" defaultValues={{ tone: 'friendly' }} onCopy={() => {}} onUse={() => {}} onNew={() => {}} style={WIDTH} />,
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24 }}>
          <PromptLibrary aria-label={`Prompt library (${scheme})`} templates={TEMPLATES} defaultValues={{ tone: 'friendly', customer: 'Ana Silva' }} onCopy={() => {}} onUse={() => {}} style={{ maxWidth: 760 }} />
        </div>
      ))}
    </div>
  ),
};
