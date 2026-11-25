import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState, type CSSProperties } from 'react';
import { Bubble } from '../Bubble';
import { ThinkingLoader, type ThinkingLoaderStatus } from './ThinkingLoader';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6126-2130';

const meta = {
  title: 'Patterns/Thinking Loader',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Thinking Loader** ([open in Figma](${FIGMA_URL})): the small pill an AI reply shows before its first word. A spinner and a label that rolls through what it is doing (\`children\`, read out as it changes), then a check with how long it thought (\`status="done"\`). When it takes long it says so, with the time and Stop (\`status="slow"\`, \`elapsed\`, \`onStop\`); stopped, a clock (\`status="stopped"\`).

**When to use:** filling the short wait before an AI reply's first word, saying what it is doing and how long it thought.
**When not to use:** people need to follow the steps and sources (use Thinking State), or the reply starts streaming at once: no loader at all.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const column: CSSProperties = { display: 'grid', gap: 10, justifyItems: 'start' };
const PHASES = ['Reading 4 files…', 'Searching the docs…', 'Writing the answer…'];

/** Figma "In chat": under the question, where the answer will start. The label rolls through the phases, then it is done. */
export const InChat: StoryObj = {
  render: function Render() {
    const [step, setStep] = useState(0);
    useEffect(() => {
      if (step > PHASES.length - 1) return;
      const timer = setTimeout(() => setStep((s) => s + 1), 1500);
      return () => clearTimeout(timer);
    }, [step]);
    const done = step >= PHASES.length;
    return (
      <div style={{ ...column, width: 'min(420px, calc(100vw - 32px))' }}>
        <Bubble variant="muted" align="end" style={{ justifySelf: 'end' }}>
          Which CRM fits a 10-person sales team best?
        </Bubble>
        <ThinkingLoader status={done ? 'done' : 'thinking'}>{done ? 'Thought for 5 s' : PHASES[step]}</ThinkingLoader>
      </div>
    );
  },
};

/** Figma "Phases": the label rolls through what it does. */
export const Phases: StoryObj = {
  render: () => (
    <div style={column}>
      {PHASES.map((phase) => (
        <ThinkingLoader key={phase}>{phase}</ThinkingLoader>
      ))}
    </div>
  ),
};

/** Figma "Done, taking long with Stop, stopped". Stop ends it. */
export const Ends: StoryObj = {
  render: function Render() {
    const [status, setStatus] = useState<ThinkingLoaderStatus>('slow');
    return (
      <div style={column}>
        <ThinkingLoader status="done">Thought for 10 s</ThinkingLoader>
        <ThinkingLoader status={status} elapsed="0:48" onStop={() => setStatus('stopped')}>
          {status === 'stopped' ? 'Stopped after 48 s' : undefined}
        </ThinkingLoader>
        <ThinkingLoader status="stopped">Stopped after 52 s</ThinkingLoader>
      </div>
    );
  },
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ ...column, background: 'var(--ds-background)', padding: 24 }}>
          <ThinkingLoader>Reading 4 files…</ThinkingLoader>
          <ThinkingLoader status="done">Thought for 10 s</ThinkingLoader>
          <ThinkingLoader status="slow" elapsed="0:48" onStop={() => {}} />
          <ThinkingLoader status="stopped">Stopped after 52 s</ThinkingLoader>
        </div>
      ))}
    </div>
  ),
};
