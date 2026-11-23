import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiGitBranchLine, RiMailLine, RiSparkling2Fill } from '@remixicon/react';
import { useEffect, useState, type CSSProperties } from 'react';
import { Avatar, AvatarGroup } from '../Avatar';
import { Bubble } from '../Bubble';
import { ApprovalCard, ApprovalCardDetails, ApprovalCardPreview, ApprovalCardSummary, type ApprovalCardRisk, type ApprovalCardState } from './ApprovalCard';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6090-1725';

const meta = {
  title: 'Patterns/Approval Card',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Approval Card** ([open in Figma](${FIGMA_URL})): an agent asks before it acts. The header says what it will do and for whom, with a risk badge; the body holds the details (\`ApprovalCardDetails\`, \`ApprovalCardSummary\`, \`ApprovalCardPreview\`); the footer has "Always allow this action" (or a countdown) and Deny / Approve. Esc denies and Enter approves while focus is in the card. \`state\`: \`pending\`, \`approving\` (the button holds a spinner), then \`approved\`, \`denied\` or \`expired\`, which fold it to one line with an optional Undo.

**When to use:** an agent is about to take one action with an effect outside the chat (sending, paying, deleting, deploying) and needs a yes or no first.
**When not to use:** the agent needs a lasting right rather than one action (use Permission Request), asks an open question (use Decision Card), or the action is harmless and reversible: just do it and offer Undo.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(420px, calc(100vw - 32px))' };
const recipients: CSSProperties = { display: 'flex', alignItems: 'center', gap: 8 };
const muted: CSSProperties = { color: 'var(--ds-muted-foreground)' };

/** The newsletter's body: who gets it, then the subject and when it goes out. */
function Newsletter() {
  return (
    <>
      <div style={recipients}>
        <AvatarGroup size="xs">
          {['A', 'J', 'M', 'T'].map((i) => (
            <Avatar key={i} initials={i} name={i} />
          ))}
        </AvatarGroup>
        <span>Ana, Jonas, Mia, Tomás</span>
        <span style={muted}>+408 more</span>
      </div>
      <ApprovalCardDetails
        items={[
          ['Subject', 'What’s new in October'],
          ['Sends', 'Today, 9:00'],
        ]}
      />
    </>
  );
}

function Branches() {
  return (
    <>
      <ApprovalCardSummary>All three were merged more than 90 days ago and no open pull request uses them.</ApprovalCardSummary>
      <ApprovalCardPreview>{'origin/feature/old-nav\norigin/fix/login-timeout\norigin/spike/charts-v1'}</ApprovalCardPreview>
    </>
  );
}

type PlaygroundArgs = { state: ApprovalCardState; risk: ApprovalCardRisk | 'none'; alwaysAllow: boolean; countdown: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { state: 'pending', risk: 'medium', alwaysAllow: false, countdown: false },
  argTypes: {
    state: { name: 'State', control: 'inline-radio', options: ['pending', 'approving', 'approved', 'denied', 'expired'] },
    risk: { name: 'Risk', control: 'inline-radio', options: ['none', 'low', 'medium', 'high'] },
    alwaysAllow: { name: 'Always allow' },
    countdown: { name: 'Countdown', description: 'Replaces "Always allow" with "Denies itself in …"' },
  },
  render: function Render({ state, risk, alwaysAllow, countdown }) {
    const [allow, setAllow] = useState(alwaysAllow);
    useEffect(() => setAllow(alwaysAllow), [alwaysAllow]);
    return (
      <div style={WIDTH}>
        <ApprovalCard
          icon={<RiMailLine />}
          title="Send the October newsletter"
          description="Newsletter · Marketing agent"
          risk={risk === 'none' ? undefined : risk}
          state={state}
          alwaysAllow={allow}
          onAlwaysAllowChange={setAllow}
          countdown={countdown ? 'Denies itself in 0:45' : undefined}
          outcome={state === 'approved' ? 'By you at 9:02 · sending to 412 people' : state === 'expired' ? 'Nobody answered in 1:00' : 'By you at 12:04'}
          onUndo={state === 'approved' ? () => {} : undefined}
          onApprove={() => {}}
          onDeny={() => {}}
        >
          <Newsletter />
        </ApprovalCard>
      </div>
    );
  },
};

/** Figma "In chat": right under the agent's message. Approve runs for a moment, then the card folds; Undo brings it back. */
export const InChat: StoryObj = {
  render: function Render() {
    const [state, setState] = useState<ApprovalCardState>('pending');
    const [allow, setAllow] = useState(false);
    const approve = () => {
      setState('approving');
      setTimeout(() => setState('approved'), 1200);
    };
    return (
      <div style={{ ...WIDTH, display: 'grid', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Avatar size="sm" icon={<RiSparkling2Fill />} name="Marketing agent" />
          <Bubble variant="muted">I drafted the October newsletter. Ready to send?</Bubble>
        </div>
        <ApprovalCard
          icon={<RiMailLine />}
          title="Send the October newsletter"
          description="Newsletter · Marketing agent"
          risk="medium"
          state={state}
          alwaysAllow={allow}
          onAlwaysAllowChange={setAllow}
          onApprove={approve}
          onDeny={() => setState('denied')}
          outcome={state === 'approved' ? 'By you at 9:02 · sending to 412 people' : 'By you at 9:02'}
          onUndo={() => setState('pending')}
        >
          <Newsletter />
        </ApprovalCard>
      </div>
    );
  },
};

/** Figma "High risk": a preview of what changes, and a countdown; at 0 it denies itself. */
export const HighRisk: StoryObj = {
  render: function Render() {
    const [left, setLeft] = useState(45);
    const [state, setState] = useState<ApprovalCardState>('pending');
    useEffect(() => {
      if (state !== 'pending') return;
      if (left === 0) {
        setState('expired');
        return;
      }
      const t = setTimeout(() => setLeft((s) => s - 1), 1000);
      return () => clearTimeout(t);
    }, [left, state]);
    return (
      <div style={WIDTH}>
        <ApprovalCard
          icon={<RiGitBranchLine />}
          title="Delete 3 stale branches"
          description="git push --delete · Repo agent"
          risk="high"
          state={state}
          countdown={`Denies itself in 0:${String(left).padStart(2, '0')}`}
          onApprove={() => setState('approved')}
          onDeny={() => setState('denied')}
          outcome={state === 'expired' ? 'Nobody answered in 0:45' : 'By you just now'}
          onUndo={() => {
            setLeft(45);
            setState('pending');
          }}
        >
          <Branches />
        </ApprovalCard>
      </div>
    );
  },
};

/** Figma "Approving": the button holds a spinner until the action is done; the card is busy. */
export const Approving: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ApprovalCard icon={<RiMailLine />} title="Send the October newsletter" description="Newsletter · Marketing agent" risk="medium" state="approving" alwaysAllow={false} onApprove={() => {}} onDeny={() => {}}>
        <Newsletter />
      </ApprovalCard>
    </div>
  ),
};

/** Figma "Decided": one line each – approved (with Undo), denied, or denied by itself. */
export const Decided: StoryObj = {
  render: () => (
    <div style={{ ...WIDTH, display: 'grid', gap: 12 }}>
      <ApprovalCard state="approved" title="Send the October newsletter" outcome="By you at 9:02 · sending to 412 people" onUndo={() => {}} />
      <ApprovalCard state="denied" title="Delete 3 stale branches" outcome="By you at 12:04" />
      <ApprovalCard state="expired" title="Delete 3 stale branches" outcome="Nobody answered in 1:00" />
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
          <ApprovalCard icon={<RiGitBranchLine />} title="Delete 3 stale branches" description="git push --delete · Repo agent" risk="high" countdown="Denies itself in 0:45" onApprove={() => {}} onDeny={() => {}}>
            <Branches />
          </ApprovalCard>
          <ApprovalCard state="approved" title="Send the October newsletter" outcome="By you at 9:02" onUndo={() => {}} />
          <ApprovalCard state="expired" title="Delete 3 stale branches" outcome="Nobody answered in 1:00" />
        </div>
      ))}
    </div>
  ),
};
