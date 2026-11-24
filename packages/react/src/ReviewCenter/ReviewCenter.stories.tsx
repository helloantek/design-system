import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiClaudeFill, RiGeminiFill, RiMailLine } from '@remixicon/react';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { Badge } from '../Badge';
import { ReviewCenter, ReviewCenterDone, ReviewCenterItem, ReviewCenterQueueItem } from './ReviewCenter';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6116-2050';

const meta = {
  title: 'Patterns/Review Center',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Review Center** ([open in Figma](${FIGMA_URL})): one place to review what the agents want to do. Progress and the last decision with Undo (Z) on top; the queue by risk on the left (\`ReviewCenterQueueItem\`, with \`filters\`); the item to decide on the right (\`ReviewCenterItem\`), with why, the fields that matter (the unusual one marked: \`changed\`, \`note\`), its attachments, and single-key actions in the buttons – Skip (S), Reject (R), Edit (E), Approve (A). Reject asks why, with a number per reason (\`reasons\`, Esc cancels). When the queue is empty, \`ReviewCenterDone\`.

**When to use:** a full-page place to review a queue of agent proposals by risk, with the context, why and what changes for the item in focus.
**When not to use:** decisions are quick yes/no answers (use Decision Inbox), or the review happens inline in a chat (use Approval Card).`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(860px, calc(100vw - 32px))' };
const FILTERS = [
  { label: 'All', count: 7 },
  { label: 'High risk', count: 1 },
  { label: 'Unsure', count: 3 },
];
const REASONS = ['Incorrect', 'Too risky', 'Not allowed', 'Other…'];

interface Proposal {
  title: string;
  meta: string;
  time: string;
  icon: ReactNode;
  model?: string;
}

const QUEUE: Proposal[] = [
  { title: 'Pay INV-2207 from Acme Logistics', meta: 'Invoice · Finance agent', time: 'now', icon: <RiGeminiFill />, model: 'Gemini Pro' },
  { title: 'Split customers.name in two', meta: 'Migration · Coder', time: '14m', icon: <RiClaudeFill />, model: 'Claude' },
  { title: 'Rotate the Stripe API keys', meta: 'Plan · Ops agent', time: '11m', icon: <RiClaudeFill />, model: 'Claude' },
  { title: 'Refund order #4821', meta: 'Refund · Support agent', time: '9m', icon: <RiClaudeFill />, model: 'Claude' },
  { title: 'Tag 14 tickets as Billing', meta: 'Triage · Support agent', time: '6m', icon: <RiGeminiFill />, model: 'Gemini Flash' },
  { title: 'Post release notes to #announce', meta: 'Slack message · Release agent', time: '2m', icon: <RiClaudeFill />, model: 'Claude' },
];

function Invoice(props: { onApprove?: () => void; onReject?: (reason?: number) => void; onEdit?: () => void; onSkip?: () => void; defaultRejecting?: boolean }) {
  return (
    <ReviewCenterItem
      agent="Finance agent"
      agentIcon={<RiGeminiFill />}
      model="Gemini Pro"
      risk={
        <Badge variant="tint" color="red">
          High risk
        </Badge>
      }
      title="Pay INV-2207 from Acme Logistics"
      why="Amount and line items match PO-118. The bank details differ from the last six payments to Acme."
      fields={[
        { label: 'Amount', value: '$12,480.00' },
        { label: 'Due', value: 'Oct 24' },
        { label: 'IBAN', value: 'DE89 •••• 3000', changed: true, note: 'New since the last payment' },
      ]}
      attachments={[{ label: 'INV-2207.pdf' }, { label: 'PO-118' }, { label: 'Vendor email', icon: <RiMailLine aria-hidden /> }]}
      reasons={REASONS}
      onApprove={() => {}}
      onReject={() => {}}
      onEdit={() => {}}
      onSkip={() => {}}
      {...props}
    />
  );
}

function Generic({ proposal, ...props }: { proposal: Proposal; onApprove: () => void; onReject: () => void; onSkip: () => void; onEdit: () => void }) {
  const [kind, agent] = proposal.meta.split(' · ');
  return (
    <ReviewCenterItem
      agent={agent}
      agentIcon={proposal.icon}
      model={proposal.model}
      title={proposal.title}
      why={`${kind} proposed by the ${agent.toLowerCase()} ${proposal.time === 'now' ? 'just now' : `${proposal.time} ago`}.`}
      reasons={REASONS}
      {...props}
    />
  );
}

/** Figma "Reviewing": the queue on the left, the item to decide on the right. Try A, R (then 1–4), S, E and Z. */
export const Reviewing: StoryObj = {
  render: function Render() {
    const [left, setLeft] = useState(QUEUE);
    const [selected, setSelected] = useState(0);
    const [filter, setFilter] = useState(0);
    const [history, setHistory] = useState<{ proposal: Proposal; index: number; text: string }[]>([
      { proposal: { title: 'Split customers.name', meta: '', time: '', icon: null }, index: -1, text: 'Approved with edits · Split customers.name' },
    ]);
    const reviewed = 26 + history.length - 1;
    const decide = (text: string) => {
      const proposal = left[selected];
      setHistory((h) => [...h, { proposal, index: selected, text: `${text} · ${proposal.title}` }]);
      setLeft((l) => l.filter((_, i) => i !== selected));
      setSelected((s) => Math.min(s, left.length - 2));
    };
    const undo = () => {
      const last = history[history.length - 1];
      if (!last || last.index < 0) return;
      setHistory((h) => h.slice(0, -1));
      setLeft((l) => [...l.slice(0, last.index), last.proposal, ...l.slice(last.index)]);
      setSelected(last.index);
    };
    const skip = () => setSelected((s) => (s + 1) % left.length);
    const last = history[history.length - 1];
    if (left.length === 0) {
      return (
        <div style={{ width: 'min(420px, calc(100vw - 32px))' }}>
          <ReviewCenterDone description={`${reviewed} reviewed`} onUndo={undo} />
        </div>
      );
    }
    const current = left[selected];
    const handlers = {
      onApprove: () => decide('Approved'),
      onReject: (reason?: number) => decide(`Rejected${reason !== undefined ? ` (${REASONS[reason].replace('…', '')})` : ''}`),
      onEdit: () => decide('Approved with edits'),
      onSkip: skip,
    };
    return (
      <div style={WIDTH}>
        <ReviewCenter
          reviewed={reviewed}
          total={33}
          meta="oldest 14m"
          lastDecision={last?.text}
          onUndo={last && last.index >= 0 ? undo : undefined}
          filters={FILTERS}
          filter={filter}
          onFilterChange={setFilter}
          queue={left.map((p, i) => (
            <ReviewCenterQueueItem key={p.title} icon={p.icon} title={p.title} meta={p.meta} time={p.time} selected={i === selected} onClick={() => setSelected(i)} />
          ))}
        >
          {current.title === QUEUE[0].title ? <Invoice key={current.title} {...handlers} /> : <Generic key={current.title} proposal={current} {...handlers} />}
        </ReviewCenter>
      </div>
    );
  },
};

const staticQueue = QUEUE.map((p, i) => <ReviewCenterQueueItem key={p.title} icon={p.icon} title={p.title} meta={p.meta} time={p.time} selected={i === 0} />);

/** Figma "Reject": pick why with 1–4; Esc cancels. */
export const Reject: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ReviewCenter reviewed={26} total={33} meta="oldest 14m" filters={FILTERS} queue={staticQueue}>
        <Invoice defaultRejecting />
      </ReviewCenter>
    </div>
  ),
};

/** Figma "All reviewed". */
export const AllReviewed: StoryObj = {
  render: () => (
    <div style={{ width: 'min(420px, calc(100vw - 32px))' }}>
      <ReviewCenterDone description="29 approved · 3 rejected · 1 skipped" onUndo={() => {}} />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. Narrow, the queue goes above the item. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, alignContent: 'start' }}>
          <ReviewCenter aria-label={`Review center (${scheme})`} reviewed={26} total={33} meta="oldest 14m" lastDecision="Approved with edits · Split customers.name" onUndo={() => {}} filters={FILTERS} queue={staticQueue.slice(0, 3)}>
            <Invoice />
          </ReviewCenter>
          <ReviewCenterDone aria-label={`All reviewed (${scheme})`} description="29 approved · 3 rejected · 1 skipped" onUndo={() => {}} />
        </div>
      ))}
    </div>
  ),
};
