import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiGlobalLine, RiNotionFill, RiSlackFill } from '@remixicon/react';
import { useEffect, useState, type CSSProperties } from 'react';
import { MessageActions } from '../MessageActions';
import { AIAnswer, AIAnswerCaret, AIAnswerCitation, AIAnswerPoint, AIAnswerPoints, type AIAnswerSource } from './AIAnswer';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6127-2351';

const meta = {
  title: 'Patterns/AI Answer',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **AI Answer** ([open in Figma](${FIGMA_URL})): an answer with its sources. The \`question\`, the \`sources\` it used as small cards with their numbers (\`moreSources\` for "+3 more", \`searching\` while they load), the answer (\`children\`) with its key words in bold and an \`AIAnswerCitation\` after each claim (\`AIAnswerPoints\` / \`AIAnswerPoint\`), \`related\` questions to go on with, and the \`actions\` (Message Actions) with how long it took (\`meta\`). It streams in word by word (\`status="streaming"\`, \`AIAnswerCaret\`, Stop); stopped early, it says so and offers Continue.

**When to use:** an answer built from sources, with the sources shown up front as cards and short citations after each claim.
**When not to use:** each claim must be checkable against its exact passage (use Cited Answer), or the answer uses no sources: a plain message is enough.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(560px, calc(100vw - 32px))' };
const QUESTION = 'How long does a refund to a card take?';
const SOURCES: AIAnswerSource[] = [
  { name: 'Notion', title: 'Refund policy – timelines', icon: <RiNotionFill />, href: '#notion' },
  { name: 'Help center', title: 'Refunds and returns', icon: <RiGlobalLine />, href: '#help' },
  { name: 'Slack', title: '#support – bank delays', icon: <RiSlackFill />, href: '#slack' },
];
const RELATED = ['What if the card has expired?', 'Can I get store credit instead?'];
const LEAD = (
  <>
    <strong>5–10 working days</strong> after we send it, depending on the bank.
  </>
);
const actions = <MessageActions copyText="5–10 working days after we send it, depending on the bank." onRegenerate={() => {}} />;

/** Figma "Answered": sources, the answer with citations, related questions, how long it took. */
export const Answered: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <AIAnswer question={QUESTION} sources={SOURCES} moreSources={3} onMoreSources={() => {}} related={RELATED} onRelated={() => {}} actions={actions} meta="Answered in 3.4 s">
        <p>
          {LEAD} <AIAnswerCitation>Notion +1</AIAnswerCitation>
        </p>
        <AIAnswerPoints>
          <AIAnswerPoint lead="Sent the same day:" cite="Help center">
            refunds approved before 16:00 leave that evening.
          </AIAnswerPoint>
          <AIAnswerPoint lead="Gift orders:" cite="Notion">
            the money comes back as store credit, not to the card.
          </AIAnswerPoint>
          <AIAnswerPoint lead="Slow banks:" cite="Slack">
            some online banks take two more days.
          </AIAnswerPoint>
        </AIAnswerPoints>
      </AIAnswer>
    </div>
  ),
};

const WORDS = 'after we send it, depending on the bank.'.split(' ');

/** Figma "Streaming": the words arrive, the caret marks the end, the sources still load; Stop stops it. */
export const Streaming: StoryObj = {
  render: function Render() {
    const [count, setCount] = useState(0);
    const [stopped, setStopped] = useState(false);
    useEffect(() => {
      if (stopped || count >= WORDS.length) return;
      const next = setTimeout(() => setCount((c) => c + 1), 400);
      return () => clearTimeout(next);
    }, [count, stopped]);
    const done = count >= WORDS.length;
    const status = stopped ? 'stopped' : done ? 'done' : 'streaming';
    return (
      <div style={WIDTH}>
        <AIAnswer
          question={QUESTION}
          sources={count > 3 ? SOURCES : []}
          searching={count > 3 ? 0 : 3}
          status={status}
          actions={actions}
          meta="Answered in 3.4 s"
          onStop={() => setStopped(true)}
          onContinue={() => setStopped(false)}
        >
          <p>
            <strong>5–10 working days</strong> {WORDS.slice(0, count).join(' ')}
            {status === 'streaming' && <AIAnswerCaret />}
          </p>
        </AIAnswer>
      </div>
    );
  },
};

/** Figma "Stopped early": it says so, Continue. */
export const StoppedEarly: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <AIAnswer question={QUESTION} sources={SOURCES} moreSources={3} status="stopped" actions={actions} onContinue={() => {}}>
        <p>
          {LEAD} <AIAnswerCitation>Notion +1</AIAnswerCitation>
        </p>
        <AIAnswerPoints>
          <AIAnswerPoint lead="Sent the same day:">refunds approved before</AIAnswerPoint>
        </AIAnswerPoints>
      </AIAnswer>
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24 }}>
          <AIAnswer question={QUESTION} sources={SOURCES} moreSources={3} related={RELATED} actions={actions} meta="Answered in 3.4 s">
            <p>
              {LEAD} <AIAnswerCitation>Notion +1</AIAnswerCitation>
            </p>
            <AIAnswerPoints>
              <AIAnswerPoint lead="Gift orders:" cite="Notion">
                the money comes back as store credit, not to the card.
              </AIAnswerPoint>
            </AIAnswerPoints>
          </AIAnswer>
        </div>
      ))}
    </div>
  ),
};
