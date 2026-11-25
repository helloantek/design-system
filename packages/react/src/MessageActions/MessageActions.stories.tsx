import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiClaudeFill } from '@remixicon/react';
import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { Bubble } from '../Bubble';
import { MessageActions, type MessageRating } from './MessageActions';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6126-2162';

const meta = {
  title: 'Patterns/Message Actions',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Message Actions** ([open in Figma](${FIGMA_URL})): the quiet bar under an AI message. Copy (\`copyText\`, \`onCopy\`; the icon is a green check for 2 s), Regenerate (\`onRegenerate\`) with ‹ 2 / 3 › between the versions (\`version\`, \`versions\`, \`onVersionChange\`), thumbs up and down (\`rating\`; down asks what was wrong in a Popover: \`reasons\`, \`onReason\`), Read aloud (\`onReadAloudChange\`; while \`reading\`, a wave, \`readTime\` and Pause). Ghost Buttons and Toggles, size sm, in the muted colour; a pressed one is in the text colour.

**When to use:** the quiet actions under every finished AI message: copy, regenerate, rate, read aloud.
**When not to use:** the message is still streaming, or it is not from the AI. Don't add actions that change the conversation's data here (use a menu).`,
      },
    },
  },
} satisfies Meta;

export default meta;

const QUESTION = 'Summarize the 2.4 release notes in one sentence.';
const ANSWERS = [
  'Shared workspaces arrive in 2.4, sync is twice as fast, and exports on Windows work again.',
  '2.4 brings shared workspaces, sync that is twice as fast, and working exports on Windows.',
  'In 2.4: shared workspaces, twice-as-fast sync, and fixed exports on Windows.',
];

const card: CSSProperties = {
  width: 'min(420px, calc(100vw - 32px))',
  borderRadius: 'var(--ds-radius-xl)',
  background: 'var(--ds-card)',
  boxShadow: '0 0 0 1px var(--ds-border), var(--ds-surface-card)',
  color: 'var(--ds-foreground)',
  fontFamily: 'var(--ds-font-sans)',
  fontSize: 'var(--ds-text-sm)',
  lineHeight: 'var(--ds-text-sm--line-height)',
};

/** The Figma "Message" frame around the bar: the question, the model, the answer, and the bar under a line. */
function AnswerCard({ answer, children }: { answer: ReactNode; children: ReactNode }) {
  return (
    <div style={card}>
      <div style={{ display: 'grid', gap: 10, padding: '12px 16px 10px' }}>
        <Bubble variant="muted" align="end" style={{ justifySelf: 'end' }}>
          {QUESTION}
        </Bubble>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--ds-muted-foreground)', fontSize: 'var(--ds-text-xs)' }}>
          <RiClaudeFill size={12} aria-hidden /> Sonnet 4.5
        </div>
        <p style={{ margin: 0 }}>{answer}</p>
      </div>
      <div style={{ padding: '6px 16px', borderTop: '1px solid var(--ds-border)' }}>{children}</div>
    </div>
  );
}

/** Figma "In a message": under the answer, at rest. Every action works: Regenerate adds a version, Read aloud reads. */
export const InAMessage: StoryObj = {
  render: function Render() {
    const [versions, setVersions] = useState(1);
    const [version, setVersion] = useState(1);
    const [reading, setReading] = useState(false);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
      if (!reading) return;
      const tick = setInterval(() => setSeconds((s) => s + 1), 1000);
      return () => clearInterval(tick);
    }, [reading]);
    const answer = ANSWERS[(version - 1) % ANSWERS.length];
    return (
      <AnswerCard answer={answer}>
        <MessageActions
          copyText={answer}
          onRegenerate={() => {
            setVersions((n) => n + 1);
            setVersion(versions + 1);
          }}
          version={version}
          versions={versions}
          onVersionChange={setVersion}
          onReadAloudChange={setReading}
          reading={reading}
          readTime={`0:${String(seconds).padStart(2, '0')}`}
        />
      </AnswerCard>
    );
  },
};

/** Figma "Regenerated": ‹ 2 / 3 › to switch between the versions. */
export const Versions: StoryObj = {
  render: function Render() {
    const [version, setVersion] = useState(2);
    return (
      <AnswerCard answer={ANSWERS[version - 1]}>
        <MessageActions copyText={ANSWERS[version - 1]} onRegenerate={() => {}} version={version} versions={3} onVersionChange={setVersion} onReadAloudChange={() => {}} />
      </AnswerCard>
    );
  },
};

/** Figma "Thumbs down": it asks what was wrong. Pressing it again takes the rating back. */
export const ThumbsDown: StoryObj = {
  render: function Render() {
    const [rating, setRating] = useState<MessageRating>(null);
    const [reason, setReason] = useState<string>();
    return (
      <div style={{ display: 'grid', gap: 12, paddingBottom: 140 }}>
        <AnswerCard answer={ANSWERS[0]}>
          <MessageActions
            copyText={ANSWERS[0]}
            onRegenerate={() => {}}
            rating={rating}
            onRatingChange={(next) => {
              setRating(next);
              setReason(undefined);
            }}
            onReason={setReason}
            onReadAloudChange={() => {}}
          />
        </AnswerCard>
        <p style={{ margin: 0, color: 'var(--ds-muted-foreground)', fontFamily: 'var(--ds-font-sans)', fontSize: 'var(--ds-text-xs)' }}>
          Rating: {rating ?? 'none'}
          {reason ? ` · ${reason}` : ''}
        </p>
      </div>
    );
  },
};

/** Figma "Bar states": rated up, and reading aloud with a wave and Pause. Copy turns into a check for 2 s. */
export const BarStates: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <MessageActions copyText={ANSWERS[0]} onRegenerate={() => {}} defaultRating="up" onReadAloudChange={() => {}} />
      <MessageActions copyText={ANSWERS[0]} onRegenerate={() => {}} onReadAloudChange={() => {}} reading readTime="0:07" />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, alignContent: 'start' }}>
          <AnswerCard answer={ANSWERS[1]}>
            <MessageActions copyText={ANSWERS[1]} onRegenerate={() => {}} version={2} versions={3} onReadAloudChange={() => {}} />
          </AnswerCard>
          <MessageActions copyText={ANSWERS[0]} onRegenerate={() => {}} defaultRating="up" onReadAloudChange={() => {}} reading readTime="0:07" />
        </div>
      ))}
    </div>
  ),
};
