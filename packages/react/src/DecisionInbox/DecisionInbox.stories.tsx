import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import { DecisionInbox, DecisionInboxAnswered, DecisionInboxItem } from './DecisionInbox';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6114-1780';

const meta = {
  title: 'Patterns/Decision Inbox',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Decision Inbox** ([open in Figma](${FIGMA_URL})): the open decisions that wait on you, each with two quick answers – what to decide, why now, and the agent that asks (\`DecisionInboxItem\`). An answered one confirms in place with Undo, then folds away (\`DecisionInboxAnswered\`, \`dismissAfter\`); with nothing open it says so (\`count={0}\`); it folds to one line in a sidebar (\`folded\`).

**When to use:** several agents each wait on a quick decision and people want to clear them in one place, one or two clicks each.
**When not to use:** a decision needs context, previews or a diff to judge (use Review Center), or there is only ever one at a time (use Decision Card).`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(420px, calc(100vw - 32px))' };

interface Decision {
  key: string;
  question: string;
  context: string;
  answers: [string, string];
  done: [string, string];
}

const DECISIONS: Decision[] = [
  {
    key: 'refund',
    question: 'Send the refund of €48 to Ana Silva?',
    context: 'Over the €40 limit agents may refund alone · Support agent',
    answers: ['Send', 'Hold'],
    done: ['Sent · €48 to Ana Silva', 'Support agent goes on with the ticket'],
  },
  {
    key: 'onboarding',
    question: 'Roll out the new onboarding to everyone?',
    context: 'Test won with +8% activation · 2 weeks of data · Growth agent',
    answers: ['Roll out', 'Keep testing'],
    done: ['Rolled out · the new onboarding', 'Growth agent switches everyone over'],
  },
  {
    key: 'figma',
    question: 'Renew Figma for the design team?',
    context: '12 seats · $1,800 a year · renews in 5 days · Finance agent',
    answers: ['Renew', 'Change seats'],
    done: ['Renewed · Figma, 12 seats', 'Finance agent pays the invoice'],
  },
];

/** Figma "Open": one click answers each. Answer one: it confirms in place with Undo and folds away after 5 s. */
export const Open: StoryObj = {
  render: function Render() {
    const [answered, setAnswered] = useState<Record<string, 'now' | 'gone'>>({});
    const open = DECISIONS.filter((d) => !answered[d.key]);
    const answer = (key: string) => setAnswered((a) => ({ ...a, [key]: 'now' }));
    const undo = (key: string) =>
      setAnswered((a) => {
        const { [key]: _, ...rest } = a;
        return rest;
      });
    if (open.length === 0 && DECISIONS.every((d) => answered[d.key] === 'gone')) {
      return (
        <div style={WIDTH}>
          <DecisionInbox count={0} emptyDescription="3 decided today · the agents go on by themselves" />
        </div>
      );
    }
    return (
      <div style={WIDTH}>
        <DecisionInbox count={open.length}>
          {DECISIONS.map((d) =>
            answered[d.key] === 'gone' ? null : answered[d.key] === 'now' ? (
              <DecisionInboxAnswered
                key={d.key}
                title={d.done[0]}
                description={d.done[1]}
                onUndo={() => undo(d.key)}
                dismissAfter={5000}
                onDismiss={() => setAnswered((a) => ({ ...a, [d.key]: 'gone' }))}
              />
            ) : (
              <DecisionInboxItem key={d.key} question={d.question} context={d.context} answers={d.answers.map((label) => ({ label, onSelect: () => answer(d.key) }))} />
            ),
          )}
        </DecisionInbox>
      </div>
    );
  },
};

/** Figma "Just answered": confirms in place with Undo, then folds away. */
export const JustAnswered: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <DecisionInbox count={2}>
        <DecisionInboxAnswered title="Sent · €48 to Ana Silva" description="Support agent goes on with the ticket" onUndo={() => {}} />
        {DECISIONS.slice(1).map((d) => (
          <DecisionInboxItem key={d.key} question={d.question} context={d.context} answers={d.answers.map((label) => ({ label }))} />
        ))}
      </DecisionInbox>
    </div>
  ),
};

/** Figma "Folded": one line in a sidebar; a click opens the inbox. */
export const Folded: StoryObj = {
  render: function Render() {
    const [folded, setFolded] = useState(true);
    return (
      <div style={WIDTH}>
        <DecisionInbox count={3} folded={folded} onOpen={() => setFolded(false)} meta="· oldest 2 h ago">
          {DECISIONS.map((d) => (
            <DecisionInboxItem key={d.key} question={d.question} context={d.context} answers={d.answers.map((label) => ({ label }))} />
          ))}
        </DecisionInbox>
      </div>
    );
  },
};

/** Figma "Nothing open". */
export const NothingOpen: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <DecisionInbox count={0} emptyDescription="3 decided today · the agents go on by themselves" />
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
          <DecisionInbox count={2} aria-label={`Decision Inbox (${scheme})`}>
            <DecisionInboxAnswered title="Sent · €48 to Ana Silva" description="Support agent goes on with the ticket" onUndo={() => {}} />
            {DECISIONS.slice(1).map((d) => (
              <DecisionInboxItem key={d.key} question={d.question} context={d.context} answers={d.answers.map((label) => ({ label }))} />
            ))}
          </DecisionInbox>
          <DecisionInbox count={3} folded meta="· oldest 2 h ago" aria-label={`Decision Inbox, folded (${scheme})`} />
          <DecisionInbox count={0} emptyDescription="3 decided today" aria-label={`Decision Inbox, nothing open (${scheme})`} />
        </div>
      ))}
    </div>
  ),
};
