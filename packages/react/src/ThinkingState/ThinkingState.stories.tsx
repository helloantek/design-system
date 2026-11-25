import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiDriveFill, RiFileSearchLine, RiGlobalLine, RiNotionFill, RiPencilLine, RiSlackFill, RiSparkling2Fill } from '@remixicon/react';
import { useEffect, useState, type CSSProperties } from 'react';
import { ThinkingNote, ThinkingSources, ThinkingState, ThinkingStep, type ThinkingSource } from './ThinkingState';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6127-2219';

const meta = {
  title: 'Patterns/Thinking State',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Thinking State** ([open in Figma](${FIGMA_URL})): the AI at work, step by step, right where the answer will appear. Each \`ThinkingStep\` with its icon and a live \`time\` (a spinner while it runs), the sources it searched as chips with their logos (\`ThinkingSources\`), a source it could not reach in amber (\`ThinkingNote\`). When the answer starts it folds (\`status="done"\`) into "Thought for 14 s · 6 sources", which opens back into the steps.

**When to use:** showing an AI's research or reasoning steps live where the answer will appear, with the sources it reads.
**When not to use:** the wait is a few seconds with nothing worth following (use Thinking Loader), or the steps are actions in your systems (use Agent Trail).`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(480px, calc(100vw - 32px))' };
const SOURCES: ThinkingSource[] = [
  { label: 'Notion – Refund policy', icon: <RiNotionFill aria-hidden />, href: '#notion' },
  { label: 'Slack – #support', icon: <RiSlackFill aria-hidden />, href: '#slack' },
  { label: 'Drive – orders-2026.csv', icon: <RiDriveFill aria-hidden />, href: '#drive' },
];

const thought = <ThinkingStep icon={<RiSparkling2Fill aria-hidden />} label="Thought about the question" time="2 s" />;
const searched = (
  <ThinkingStep icon={<RiGlobalLine aria-hidden />} label="Searched 6 sources" time="4 s">
    <ThinkingSources sources={SOURCES} more={3} />
  </ThinkingStep>
);
const read = <ThinkingStep icon={<RiFileSearchLine aria-hidden />} label="Read the refund policy" detail="3 matches" time="3 s" />;

/** Figma "Searching": the sources appear as it finds them. */
export const Searching: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ThinkingState>
        {thought}
        <ThinkingStep status="running" label="Searching" time="0:04">
          <ThinkingSources sources={SOURCES} more={3} />
        </ThinkingStep>
      </ThinkingState>
    </div>
  ),
};

/** Figma "Reading and writing": a source it could not reach is said in amber. */
export const ReadingAndWriting: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ThinkingState>
        {thought}
        <ThinkingStep icon={<RiGlobalLine aria-hidden />} label="Searched 6 sources" time="4 s">
          <ThinkingSources sources={SOURCES} more={3} />
          <ThinkingNote>Couldn’t open GitHub – went on without it</ThinkingNote>
        </ThinkingStep>
        {read}
        <ThinkingStep status="running" label="Writing the answer" time="0:01" />
      </ThinkingState>
    </div>
  ),
};

/** Figma "Done": folds to one line when the answer starts; a click opens it again, every step with its time. */
export const Done: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ThinkingState status="done" title="Thought for 14 s" summary="6 sources · 4 steps">
        {thought}
        {searched}
        {read}
        <ThinkingStep icon={<RiPencilLine aria-hidden />} label="Wrote the answer" time="5 s" />
      </ThinkingState>
    </div>
  ),
};

/** Figma "Opened again": every step with its time. */
export const Opened: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ThinkingState status="done" defaultOpen title="Thought for 14 s" summary="6 sources · 4 steps">
        {thought}
        {searched}
        {read}
        <ThinkingStep icon={<RiPencilLine aria-hidden />} label="Wrote the answer" time="5 s" />
      </ThinkingState>
    </div>
  ),
};

/** Live: the steps arrive one by one, the running one with a spinner and a ticking time; then it folds. */
export const Live: StoryObj = {
  render: function Render() {
    const [step, setStep] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
      if (step >= 3) return;
      const tick = setInterval(() => setSeconds((s) => s + 1), 1000);
      const next = setTimeout(() => {
        setStep((s) => s + 1);
        setSeconds(0);
      }, 2500);
      return () => {
        clearInterval(tick);
        clearTimeout(next);
      };
    }, [step]);
    const clock = `0:${String(seconds).padStart(2, '0')}`;
    return (
      <div style={WIDTH}>
        <ThinkingState status={step >= 3 ? 'done' : 'working'} title="Thought for 8 s" summary="6 sources · 3 steps">
          {step === 0 ? <ThinkingStep status="running" label="Thinking about the question" time={clock} /> : thought}
          {step === 1 && (
            <ThinkingStep status="running" label="Searching" time={clock}>
              <ThinkingSources sources={SOURCES.slice(0, 2)} />
            </ThinkingStep>
          )}
          {step > 1 && searched}
          {step === 2 && <ThinkingStep status="running" label="Reading the refund policy" time={clock} />}
          {step > 2 && read}
        </ThinkingState>
      </div>
    );
  },
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 24, alignContent: 'start' }}>
          <ThinkingState>
            {thought}
            <ThinkingStep icon={<RiGlobalLine aria-hidden />} label="Searched 6 sources" time="4 s">
              <ThinkingSources sources={SOURCES} more={3} />
              <ThinkingNote>Couldn’t open GitHub – went on without it</ThinkingNote>
            </ThinkingStep>
            <ThinkingStep status="running" label="Writing the answer" time="0:01" />
          </ThinkingState>
          <ThinkingState status="done" title="Thought for 14 s" summary="6 sources · 4 steps">
            {thought}
          </ThinkingState>
        </div>
      ))}
    </div>
  ),
};
