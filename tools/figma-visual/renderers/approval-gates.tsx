import { RiClaudeFill } from '@remixicon/react';
import { ApprovalGate, ApprovalGates, ApprovalGatesDecided, ApprovalGatesDecidedItem, ApprovalGatesDone, ApprovalGatesStopped, Badge } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 pattern "Approval Gates" (6112:1728) to code with its sample content, 540 px wide.
const gate = (editing: boolean) => (
  <ApprovalGate
    agent="Release agent"
    agentIcon={<RiClaudeFill />}
    meta="Step 4 of 7 · asks because it cannot be undone"
    risk={
      <Badge variant="tint" color="amber">
        Medium risk
      </Badge>
    }
    title="Publish 2.4.0 to npm"
    why="All tests passed and the changelog is ready. Publishing makes 2.4.0 the latest version for everyone."
    args={'npm publish --tag latest\npackage: @acme/ui@2.4.0'}
    behind={2}
    onApprove={() => {}}
    onReject={() => {}}
    onApproveWithChanges={() => {}}
    defaultEditing={editing}
    defaultDraft={editing ? 'npm publish --tag next\npackage: @acme/ui@2.4.0' : undefined}
  />
);

export const renderApprovalGates: Renderer = (p) => {
  let el;
  switch (p.State) {
    case 'Change it':
      el = (
        <ApprovalGates run="Launch the new pricing page" waiting={3} decided={2} total={5} progress="Paused at step 4">
          {gate(true)}
        </ApprovalGates>
      );
      break;
    case 'Rejected':
      el = (
        <ApprovalGates run="Launch the new pricing page" status="stopped" waiting={0} decided={4} total={4} progress="Stopped at “Start a browser agent”">
          <ApprovalGatesStopped description="“Start a browser agent” was rejected – nothing after it runs" />
          <ApprovalGatesDecided>
            <ApprovalGatesDecidedItem title="Start a browser agent" outcome="stopped" agent="Researcher" time="just now" defaultOpen reason="Signs up for competitor trials on its own. Rejected: read public pages only, no sign-ups." />
            <ApprovalGatesDecidedItem title="Email 1,284 trial users" outcome="approved" outcomeLabel="Approved with changes" agent="Growth agent" time="2m" reason="Sent with the new subject line." />
            <ApprovalGatesDecidedItem title="Change prices in pricing.ts" outcome="approved" agent="Coder" time="6m" reason="Team €12 and Business €24." />
          </ApprovalGatesDecided>
        </ApprovalGates>
      );
      break;
    case 'All decided':
      el = (
        <ApprovalGates run="Launch the new pricing page" status="running" waiting={0} decided={5} total={5} progress="Step 6 of 7">
          <ApprovalGatesDone title="All 5 gates decided" description="4 approved · 1 rejected · the run resumed at 12:04" />
        </ApprovalGates>
      );
      break;
    default:
      el = (
        <ApprovalGates run="Launch the new pricing page" waiting={3} decided={2} total={5} progress="Paused at step 4">
          {gate(false)}
          <ApprovalGatesDecided>
            <ApprovalGatesDecidedItem title="Tag v2.4.0" outcome="approved" agent="Release agent" time="12:01" reason="Tags the release commit." />
            <ApprovalGatesDecidedItem title="Skip the e2e tests" outcome="rejected" agent="Release agent" time="11:58" reason="The e2e tests run on every release." />
          </ApprovalGatesDecided>
        </ApprovalGates>
      );
  }
  return (
    <div id="target" style={{ width: 540, padding: 8, background: 'var(--ds-background)' }}>
      {el}
    </div>
  );
};
