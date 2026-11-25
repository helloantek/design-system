import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiAddLine, RiArrowDownSLine, RiSparkling2Fill } from '@remixicon/react';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { AIChatComposer } from '../AIChatComposer';
import { Button } from '../Button';
import { DecisionCard, type DecisionAnswer, type DecisionCardProps } from './DecisionCard';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6111-1606';

const meta = {
  title: 'Patterns/Decision Card',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Decision Card** ([open in Figma](${FIGMA_URL})): an agent's question, asked right above the chat composer. Numbered \`options\` with one \`recommended\` (Approve / Decline for an approval, with \`details\` of what goes out), preview \`tiles\` for a pick, and a last row for your own words. A click or the answer's number answers (\`onAnswer\`); in the last row Enter or Send does. Several questions share one card with a pager (\`page\`, \`pageCount\`); Later folds it to one line (\`folded\`, with Answer to open it again).

**When to use:** an agent is blocked on a question only the person can answer, with a few clear options and one it recommends, asked right where they type.
**When not to use:** the question needs no options (let the agent ask in chat), several decisions wait across agents (use Decision Inbox), or the options branch into consequences (use Decision Tree).`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(480px, calc(100vw - 32px))', display: 'grid', gap: 8 };

function Composer() {
  return (
    <AIChatComposer
      placeholder="Ask about anything…"
      leading={<Button variant="ghost" size="sm" icon={<RiAddLine />} aria-label="Add files or tools" />}
      model={
        <Button variant="ghost" size="sm" trailingIcon={<RiArrowDownSLine />}>
          Opus 5.5 High
        </Button>
      }
    />
  );
}

const plans: DecisionCardProps['options'] = [
  { label: 'Starter', description: 'Free, up to 3 people' },
  { label: 'Team', description: '€12 per person a month, with SSO', recommended: true },
  { label: 'Enterprise', description: 'Talk to sales first' },
];

function Above({ children }: { children: ReactNode }) {
  return (
    <div style={WIDTH}>
      {children}
      <Composer />
    </div>
  );
}

const describe = (a: DecisionAnswer, labels: string[]) => ('text' in a ? `“${a.text}”` : labels[a.index]);

export const Playground: StoryObj<{ kind: 'options' | 'approval' | 'pick'; pager: boolean; other: boolean }> = {
  args: { kind: 'options', pager: true, other: true },
  argTypes: {
    kind: { name: 'Kind', control: 'inline-radio', options: ['options', 'approval', 'pick'] },
    pager: { name: 'Pager (2 questions)' },
    other: { name: 'Your own words' },
  },
  render: function Render({ kind, pager, other }) {
    const [answer, setAnswer] = useState<string | null>(null);
    const props: DecisionCardProps =
      kind === 'approval'
        ? {
            context: 'Weekly update',
            question: 'Send the weekly update to Northwind?',
            details: [
              ['To', 'Dana Reyes, Northwind'],
              ['Subject', 'Week 45: ingest is live, dashboard in review'],
              ['Body', 'Ingest runs on staging and took Tuesday’s spike without losing a row.'],
            ],
            options: [{ label: 'Approve', recommended: true }, { label: 'Decline' }],
          }
        : kind === 'pick'
          ? {
              context: 'Launch post',
              question: 'Which header image for the launch post?',
              tiles: [{ label: 'Photo, team at work' }, { label: 'Product screenshot', recommended: true }, { label: 'Illustration' }],
              otherPlaceholder: 'Describe another one…',
            }
          : { context: 'Onboarding', question: 'Which plan should the new team start on?', options: plans };
    return (
      <Above>
        <DecisionCard {...props} allowOther={other} page={1} pageCount={pager ? 2 : 1} onPageChange={() => {}} onLater={() => {}} onAnswer={(a) => setAnswer(JSON.stringify(a))} />
        {answer && <p style={{ margin: 0, color: 'var(--ds-muted-foreground)' }}>onAnswer {answer}</p>}
      </Above>
    );
  },
};

/** Figma "An approval": what goes out, then 1 Approve · 2 Decline · 3 your own words. Answering hands back to the agent. */
export const Approval: StoryObj = {
  render: function Render() {
    const [reply, setReply] = useState<string | null>(null);
    return (
      <Above>
        {reply ? (
          <p role="status" style={{ display: 'flex', alignItems: 'center', gap: 8, margin: 0, color: 'var(--ds-muted-foreground)' }}>
            <RiSparkling2Fill size={14} aria-hidden /> {reply}
          </p>
        ) : (
          <DecisionCard
            context="Weekly update"
            question="Send the weekly update to Northwind?"
            details={[
              ['To', 'Dana Reyes, Northwind'],
              ['Subject', 'Week 45: ingest is live, dashboard in review'],
              ['Body', 'Ingest runs on staging and took Tuesday’s spike without losing a row.'],
            ]}
            options={[{ label: 'Approve', recommended: true }, { label: 'Decline' }]}
            page={1}
            pageCount={2}
            onPageChange={() => {}}
            onLater={() => {}}
            onAnswer={(a) => setReply('text' in a ? `Got it – ${a.text}` : a.index === 0 ? 'Approved – sending the weekly update now.' : 'Declined – I won’t send it.')}
          />
        )}
      </Above>
    );
  },
};

/** Figma "Options": numbered, one Recommended; two questions share the card, Later folds it, Answer opens it again. */
export const Options: StoryObj = {
  render: function Render() {
    const questions = [
      { context: 'Onboarding', question: 'Which plan should the new team start on?', options: plans },
      { context: 'Onboarding', question: 'Who should own billing?', options: [{ label: 'Ana Silva', recommended: true }, { label: 'Jonas Weber' }] },
    ];
    const [page, setPage] = useState(1);
    const [folded, setFolded] = useState(false);
    const [answers, setAnswers] = useState<string[]>([]);
    const q = questions[page - 1];
    return (
      <Above>
        <DecisionCard
          key={page}
          {...q}
          page={page}
          pageCount={questions.length}
          onPageChange={setPage}
          folded={folded}
          onLater={() => setFolded(true)}
          onOpen={() => setFolded(false)}
          onAnswer={(a) => setAnswers((list) => [...list, describe(a, q.options.map((o) => String(o.label)))])}
        />
        {answers.length > 0 && <p style={{ margin: 0, color: 'var(--ds-muted-foreground)' }}>Answered: {answers.join(', ')}</p>}
      </Above>
    );
  },
};

/** Figma "A pick": preview tiles with their numbers, and a last row to describe another one. */
export const Pick: StoryObj = {
  render: () => (
    <Above>
      <DecisionCard
        context="Launch post"
        question="Which header image for the launch post?"
        tiles={[{ label: 'Photo, team at work' }, { label: 'Product screenshot', recommended: true }, { label: 'Illustration' }]}
        otherPlaceholder="Describe another one…"
        onLater={() => {}}
        onAnswer={() => {}}
      />
    </Above>
  ),
};

/** Figma "Later": one line above the composer until you answer. */
export const Later: StoryObj = {
  render: () => (
    <Above>
      <DecisionCard folded question="Which plan should the new team start on?" pageCount={2} onOpen={() => {}} />
    </Above>
  ),
};

/** The card on its own (no composer): two questions with the pager, numbers answer, Later folds it and Answer opens it. */
export const Questions: StoryObj = {
  render: function Render() {
    const questions = [
      { context: 'Onboarding', question: 'Which plan should the new team start on?', options: plans },
      { context: 'Onboarding', question: 'Who should own billing?', options: [{ label: 'Ana Silva', recommended: true }, { label: 'Jonas Weber' }] },
    ];
    const [page, setPage] = useState(1);
    const [folded, setFolded] = useState(false);
    const [answer, setAnswer] = useState('');
    const q = questions[page - 1];
    return (
      <div style={WIDTH}>
        <DecisionCard
          key={page}
          {...q}
          page={page}
          pageCount={questions.length}
          onPageChange={setPage}
          folded={folded}
          onLater={() => setFolded(true)}
          onOpen={() => setFolded(false)}
          onAnswer={(a) => setAnswer(describe(a, q.options.map((o) => String(o.label))))}
        />
        <p role="status" style={{ margin: 0, color: 'var(--ds-muted-foreground)' }}>
          {answer && `Answered: ${answer}`}
        </p>
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
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, alignContent: 'start' }}>
          <DecisionCard context="Onboarding" question={`Which plan should the new team start on? (${scheme})`} options={plans} page={1} pageCount={2} onPageChange={() => {}} onLater={() => {}} />
          <DecisionCard context="Launch post" question={`Which header image? (${scheme})`} tiles={[{ label: 'Photo' }, { label: 'Screenshot', recommended: true }, { label: 'Illustration' }]} />
          <DecisionCard folded question={`Which plan should the new team start on? (${scheme})`} pageCount={2} onOpen={() => {}} />
        </div>
      ))}
    </div>
  ),
};
