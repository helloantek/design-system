import { RiClaudeFill, RiGeminiFill, RiMailLine } from '@remixicon/react';
import { Badge, ReviewCenter, ReviewCenterDone, ReviewCenterItem, ReviewCenterQueueItem } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 pattern "Review Center" (6116:2050) to code with its sample content, 860 px wide (420 when done).
const QUEUE = [
  ['Pay INV-2207 from Acme Logistics', 'Invoice · Finance agent', 'now', <RiGeminiFill />],
  ['Split customers.name in two', 'Migration · Coder', '14m', <RiClaudeFill />],
  ['Rotate the Stripe API keys', 'Plan · Ops agent', '11m', <RiClaudeFill />],
  ['Refund order #4821', 'Refund · Support agent', '9m', <RiClaudeFill />],
  ['Tag 14 tickets as Billing', 'Triage · Support agent', '6m', <RiGeminiFill />],
  ['Post release notes to #announce', 'Slack message · Release agent', '2m', <RiClaudeFill />],
] as const;

const center = (rejecting: boolean) => (
  <ReviewCenter
    reviewed={26}
    total={33}
    meta="oldest 14m"
    lastDecision={rejecting ? undefined : 'Approved with edits · Split customers.name'}
    onUndo={() => {}}
    filters={[
      { label: 'All', count: 7 },
      { label: 'High risk', count: 1 },
      { label: 'Unsure', count: 3 },
    ]}
    queue={QUEUE.map(([title, meta, time, icon], i) => (
      <ReviewCenterQueueItem key={title} icon={icon} title={title} meta={meta} time={time} selected={i === 0} />
    ))}
  >
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
      reasons={['Incorrect', 'Too risky', 'Not allowed', 'Other…']}
      defaultRejecting={rejecting}
      onApprove={() => {}}
      onReject={() => {}}
      onEdit={() => {}}
      onSkip={() => {}}
    />
  </ReviewCenter>
);

export const renderReviewCenter: Renderer = (p) => {
  if (p.State === 'All reviewed') {
    return (
      <div id="target" style={{ width: 420, padding: 8, background: 'var(--ds-background)' }}>
        <ReviewCenterDone description="29 approved · 3 rejected · 1 skipped" onUndo={() => {}} />
      </div>
    );
  }
  return (
    <div id="target" style={{ width: 860, padding: 8, background: 'var(--ds-background)' }}>
      {center(p.State === 'Reject')}
    </div>
  );
};
