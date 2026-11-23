import { RiGitBranchLine, RiMailLine } from '@remixicon/react';
import { ApprovalCard, ApprovalCardDetails, ApprovalCardPreview, ApprovalCardRecipients, ApprovalCardSummary, type ApprovalCardState } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 pattern "Approval Card" (6090:1725) to code with its sample content, 420 px wide.
export const renderApprovalCard: Renderer = (p) => {
  const state = p.State.toLowerCase() as ApprovalCardState | 'pending' | 'high risk';
  let card;
  if (state === 'approved' || state === 'denied' || state === 'expired') {
    const outcome = { approved: 'By you at 9:02 · sending to 412 people', denied: 'By you at 12:04', expired: 'Nobody answered in 1:00' }[state];
    const title = state === 'approved' ? 'Send the October newsletter' : 'Delete 3 stale branches';
    card = <ApprovalCard state={state} title={title} outcome={outcome} onUndo={state === 'approved' ? () => {} : undefined} />;
  } else if (state === 'high risk') {
    card = (
      <ApprovalCard icon={<RiGitBranchLine />} title="Delete 3 stale branches" description="git push --delete · Repo agent" risk="high" countdown="Denies itself in 0:45" onApprove={() => {}} onDeny={() => {}}>
        <ApprovalCardSummary>All three were merged more than 90 days ago and no open pull request uses them.</ApprovalCardSummary>
        <ApprovalCardPreview>{'origin/feature/old-nav\norigin/fix/login-timeout\norigin/spike/charts-v1'}</ApprovalCardPreview>
      </ApprovalCard>
    );
  } else {
    card = (
      <ApprovalCard icon={<RiMailLine />} title="Send the October newsletter" description="Newsletter · Marketing agent" risk="medium" state={state === 'approving' ? 'approving' : 'pending'} alwaysAllow={false} onApprove={() => {}} onDeny={() => {}}>
        <ApprovalCardRecipients people={[{ name: 'Ana' }, { name: 'Jonas' }, { name: 'Mia' }, { name: 'Tomás' }]} total={412} />
        <ApprovalCardDetails
          items={[
            ['Subject', 'What’s new in October'],
            ['Sends', 'Today, 9:00'],
          ]}
        />
      </ApprovalCard>
    );
  }
  return (
    <div id="target" style={{ width: 420, padding: 8, background: 'var(--ds-background)' }}>
      {card}
    </div>
  );
};
