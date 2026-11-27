import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiAddLine, RiArrowDownSLine } from '@remixicon/react';
import { useEffect, useState, type CSSProperties } from 'react';
import { AIChatComposer } from '../AIChatComposer';
import { Button } from '../Button';
import { WritingAssistant, type WritingAssistantStatus } from './WritingAssistant';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6132-2642';

const meta = {
  title: 'Patterns/Writing Assistant',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Writing Assistant** ([open in Figma](${FIGMA_URL})): an AI panel for writing next to your text. The text you selected (\`selection\`), \`suggestions\` to start from, and a \`composer\` you can also dictate into (AIChatComposer, \`layout="column"\` in the narrow panel). The reply (\`reply\`, \`status="streaming"\`) streams in with Stop, then lands (\`status="ready"\`) with Replace (also Enter), Insert below and Copy.

**When to use:** an AI panel next to a document that helps write, rewrite or continue the selected text.
**When not to use:** the AI only proposes changes to existing text (use Inline Diff), or people are chatting rather than writing a document.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(400px, calc(100vw - 32px))' };
const SELECTION = 'Your refund has been processed and should appear within 5–10 business days.';
const SUGGESTIONS = ['Make it shorter', 'Fix the grammar', 'Sound more friendly', 'Translate to Polish'];
const REPLY = 'Good news – your refund is on its way and should reach your card within 5–10 working days. Thanks for bearing with us!';
const plus = <Button variant="ghost" size="sm" icon={<RiAddLine />} aria-label="Add files or tools" />;
const model = (
  <Button variant="ghost" size="sm" trailingIcon={<RiArrowDownSLine />}>
    Opus 5.5 High
  </Button>
);
const composer = <AIChatComposer layout="column" placeholder="Ask about anything…" leading={plus} model={model} />;

/** Pick a suggestion: the reply streams in with Stop, then lands with Replace (or Enter), Insert below and Copy. */
export const Writing: StoryObj = {
  render: function Render() {
    const [ask, setAsk] = useState<string>();
    const [status, setStatus] = useState<WritingAssistantStatus>('idle');
    const [words, setWords] = useState(0);
    const [done, setDone] = useState<string>();
    const all = REPLY.split(' ');
    useEffect(() => {
      if (status !== 'streaming') return;
      if (words >= all.length) {
        setStatus('ready');
        return;
      }
      const next = setTimeout(() => setWords((w) => w + 1), 60);
      return () => clearTimeout(next);
    }, [status, words, all.length]);
    const start = (what: string) => {
      setAsk(what);
      setWords(0);
      setDone(undefined);
      setStatus('streaming');
    };
    return (
      <div style={{ ...WIDTH, display: 'grid', gap: 12 }}>
        <WritingAssistant
          selection={SELECTION}
          suggestions={SUGGESTIONS}
          onSuggestion={start}
          ask={ask}
          reply={all.slice(0, words).join(' ')}
          status={status}
          onStop={() => setStatus('ready')}
          onReplace={() => setDone('Replaced the selection.')}
          onInsertBelow={() => setDone('Inserted below the selection.')}
          onCopy={() => setDone('Copied.')}
          onClose={() => setStatus('idle')}
          composer={<AIChatComposer layout="column" placeholder="Ask about anything…" leading={plus} model={model} onSubmit={start} />}
        />
        {done && <p style={{ margin: 0, color: 'var(--ds-muted-foreground)', fontFamily: 'var(--ds-font-sans)', fontSize: 'var(--ds-text-xs)' }}>{done}</p>}
      </div>
    );
  },
};

/** Figma "Replying": the answer streams in, Stop is at hand. */
export const Replying: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <WritingAssistant selection={SELECTION} ask="Sound more friendly" reply="Good news – your refund is on its way and" status="streaming" onStop={() => {}} onClose={() => {}} composer={composer} />
    </div>
  ),
};

/** Figma "Reply ready": Replace, Insert below or Copy. */
export const ReplyReady: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <WritingAssistant selection={SELECTION} ask="Sound more friendly" reply={REPLY} status="ready" onReplace={() => {}} onInsertBelow={() => {}} onCopy={() => {}} onClose={() => {}} composer={composer} />
    </div>
  ),
};

/** Figma "Dictating the next ask": the composer records. */
export const Dictating: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <WritingAssistant selection={SELECTION} suggestions={SUGGESTIONS} onClose={() => {}} composer={<AIChatComposer state="recording" leading={plus} model={model} />} />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, alignContent: 'start' }}>
          <WritingAssistant aria-label={`Writing assistant (${scheme})`} selection={SELECTION} suggestions={SUGGESTIONS} onClose={() => {}} composer={<AIChatComposer layout="column" inputLabel={`Message (${scheme})`} placeholder="Ask about anything…" leading={plus} model={model} />} />
          <WritingAssistant aria-label={`Writing assistant, reply (${scheme})`} ask="Sound more friendly" reply={REPLY} status="ready" onReplace={() => {}} onInsertBelow={() => {}} onCopy={() => {}} onClose={() => {}} />
        </div>
      ))}
    </div>
  ),
};
