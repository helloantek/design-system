import type { Meta, StoryObj } from '@storybook/react-vite';
import { RiClaudeFill } from '@remixicon/react';
import { useState, type CSSProperties } from 'react';
import { Badge } from '../Badge';
import { ApprovalGate, ApprovalGates, ApprovalGatesDecided, ApprovalGatesDecidedItem, ApprovalGatesDone, ApprovalGatesStopped } from './ApprovalGates';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6112-1728';

const meta = {
  title: 'Patterns/Approval Gates',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Approval Gates** ([open in Figma](${FIGMA_URL})): the approvals of one agent run as a stack. \`ApprovalGates\` sums up what waits on you, what is decided and where the run is. \`ApprovalGate\` is the gate to decide now – who asks, exactly what and why, and the arguments it will run with – with the next gates peeking out under it (\`behind\`): Approve (A), Reject (R), or Change it first (\`onApproveWithChanges\`), which makes the arguments a field. Decided gates go into \`ApprovalGatesDecided\`; a rejected gate stops the run (\`ApprovalGatesStopped\`); when all are decided, \`ApprovalGatesDone\`.

**When to use:** one agent run stops at several approvals in a row and people need to see what is decided, what waits now and what comes next.
**When not to use:** there is a single approval (use Approval Card), or the approvals come from many unrelated runs (use Decision Inbox or Review Center).`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(540px, calc(100vw - 32px))' };
const ARGS = 'npm publish --tag latest\npackage: @acme/ui@2.4.0';

function Gate(props: { onApprove?: () => void; onReject?: () => void; onApproveWithChanges?: (args: string) => void; behind?: number; defaultEditing?: boolean; defaultDraft?: string }) {
  return (
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
      args={ARGS}
      behind={2}
      onApprove={() => {}}
      onReject={() => {}}
      onApproveWithChanges={() => {}}
      {...props}
    />
  );
}

/** Figma "The run waits": the gate to decide now on top, two more behind it, and what is decided. Try A, R or Change it. */
export const Waiting: StoryObj = {
  render: function Render() {
    const [outcome, setOutcome] = useState<string | null>(null);
    return (
      <div style={WIDTH}>
        <ApprovalGates run="Launch the new pricing page" waiting={outcome ? 2 : 3} decided={outcome ? 3 : 2} total={5} progress={outcome ? 'Paused at step 5' : 'Paused at step 4'}>
          {!outcome && <Gate onApprove={() => setOutcome('Approved')} onReject={() => setOutcome('Rejected')} onApproveWithChanges={() => setOutcome('Approved with changes')} />}
          <ApprovalGatesDecided>
            {outcome && <ApprovalGatesDecidedItem title="Publish 2.4.0 to npm" outcome={outcome === 'Rejected' ? 'rejected' : 'approved'} outcomeLabel={outcome} agent="Release agent" time="just now" reason="You decided it here." />}
            <ApprovalGatesDecidedItem title="Tag v2.4.0" outcome="approved" agent="Release agent" time="12:01" reason="Tags the release commit; nothing is published yet." />
            <ApprovalGatesDecidedItem title="Skip the e2e tests" outcome="rejected" agent="Release agent" time="11:58" reason="Rejected: the e2e tests run on every release." />
          </ApprovalGatesDecided>
        </ApprovalGates>
      </div>
    );
  },
};

/** Figma "Change it first": the arguments become a field; what changed shows next to Approve with changes. */
export const ChangeItFirst: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ApprovalGates run="Launch the new pricing page" waiting={3} decided={2} total={5} progress="Paused at step 4">
        <Gate defaultEditing defaultDraft={'npm publish --tag next\npackage: @acme/ui@2.4.0'} />
      </ApprovalGates>
    </div>
  ),
};

/** Figma "Rejected"": the run stops; nothing behind that gate runs. The newest decision is open. */
export const Rejected: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ApprovalGates run="Launch the new pricing page" status="stopped" waiting={0} decided={4} total={4} progress="Stopped at “Start a browser agent”">
        <ApprovalGatesStopped description="“Start a browser agent” was rejected – nothing after it runs" />
        <ApprovalGatesDecided>
          <ApprovalGatesDecidedItem
            title="Start a browser agent"
            outcome="stopped"
            agent="Researcher"
            time="just now"
            defaultOpen
            reason="Signs up for competitor trials on its own. Rejected: read public pages only, no sign-ups."
          />
          <ApprovalGatesDecidedItem title="Email 1,284 trial users" outcome="approved" outcomeLabel="Approved with changes" agent="Growth agent" time="2m" reason="Sent to the 1,284 users on the trial list, with the new subject line." />
          <ApprovalGatesDecidedItem title="Change prices in pricing.ts" outcome="approved" agent="Coder" time="6m" reason="Team €12 and Business €24 a person a month." />
        </ApprovalGatesDecided>
      </ApprovalGates>
    </div>
  ),
};

/** Figma "All decided": the run goes on, the gates fold away. */
export const AllDecided: StoryObj = {
  render: () => (
    <div style={WIDTH}>
      <ApprovalGates run="Launch the new pricing page" status="running" waiting={0} decided={5} total={5} progress="Step 6 of 7">
        <ApprovalGatesDone title="All 5 gates decided" description="4 approved · 1 rejected · the run resumed at 12:04" />
      </ApprovalGates>
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
          <ApprovalGates run={`Launch the new pricing page (${scheme})`} waiting={3} decided={2} total={5} progress="Paused at step 4">
            <Gate />
            <ApprovalGatesDecided>
              <ApprovalGatesDecidedItem title="Skip the e2e tests" outcome="rejected" agent="Release agent" time="11:58" reason="Rejected: the e2e tests run on every release." />
            </ApprovalGatesDecided>
          </ApprovalGates>
        </div>
      ))}
    </div>
  ),
};
