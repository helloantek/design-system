import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
  DsApprovalGate,
  DsApprovalGateIcon,
  DsApprovalGateRisk,
  DsApprovalGates,
  DsApprovalGatesDecided,
  DsApprovalGatesDecidedItem,
  DsApprovalGatesDone,
  DsApprovalGatesStopped,
} from './approval-gates';
import { DsBadge } from '../badge/badge';
import { riClaudeFill } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6112-1728';

const meta = {
  title: 'Patterns/Approval Gates',
  decorators: [
    moduleMetadata({
      imports: [DsApprovalGates, DsApprovalGate, DsApprovalGateIcon, DsApprovalGateRisk, DsApprovalGatesDecided, DsApprovalGatesDecidedItem, DsApprovalGatesDone, DsApprovalGatesStopped, DsBadge],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Approval Gates** ([open in Figma](${FIGMA_URL})) for Angular: \`<section dsApprovalGates>\` with the same markup and \`ds-gates\` classes as the React ApprovalGates. The summary sums up what waits on you, what is decided and where the run is. \`<div dsApprovalGate>\` is the gate to decide now – who asks (an icon marked \`dsApprovalGateIcon\`, a badge marked \`dsApprovalGateRisk\`), what and why, the arguments – with the next gates peeking out under it (\`behind\`): Approve (A), Reject (R), or Change it first (\`changeable\`, \`(approveWithChanges)\`). Decided gates go into \`dsApprovalGatesDecided\`; \`dsApprovalGatesStopped\` and \`dsApprovalGatesDone\` end the run.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(540px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'style="width: min(540px, -32px + 100vw);"';
const ARGS = 'npm publish --tag latest\npackage: @acme/ui@2.4.0';
const gate = (attrs: string) => `<div dsApprovalGate agent="Release agent" meta="Step 4 of 7 · asks because it cannot be undone" title="Publish 2.4.0 to npm"
    why="All tests passed and the changelog is ready. Publishing makes 2.4.0 the latest version for everyone." [args]="ARGS" [behind]="2" changeable ${attrs}>
    ${riClaudeFill.replace('<svg ', '<svg dsApprovalGateIcon ')}<span dsBadge dsApprovalGateRisk variant="tint" color="amber">Medium risk</span>
  </div>`;

/** Figma "The run waits": the gate to decide now on top, two more behind it, and what is decided. Try A, R or Change it. */
export const Waiting: StoryObj = {
  render: () => ({
    props: { ARGS, outcome: null as string | null },
    template: `<div ${WIDTH}>
      <section dsApprovalGates run="Launch the new pricing page" [waiting]="outcome ? 2 : 3" [decided]="outcome ? 3 : 2" [total]="5" [progress]="outcome ? 'Paused at step 5' : 'Paused at step 4'">
        @if (!outcome) {
          ${gate(`(approve)="outcome = 'Approved'" (reject)="outcome = 'Rejected'" (approveWithChanges)="outcome = 'Approved with changes'"`)}
        }
        <div dsApprovalGatesDecided>
          @if (outcome) {
            <li dsApprovalGatesDecidedItem title="Publish 2.4.0 to npm" [outcome]="outcome === 'Rejected' ? 'rejected' : 'approved'" [outcomeLabel]="outcome" agent="Release agent" time="just now" reason="You decided it here."></li>
          }
          <li dsApprovalGatesDecidedItem title="Tag v2.4.0" outcome="approved" agent="Release agent" time="12:01" reason="Tags the release commit; nothing is published yet."></li>
          <li dsApprovalGatesDecidedItem title="Skip the e2e tests" outcome="rejected" agent="Release agent" time="11:58" reason="Rejected: the e2e tests run on every release."></li>
        </div>
      </section>
    </div>`,
  }),
};

/** Figma "Change it first": the arguments become a field; what changed shows next to Approve with changes. */
export const ChangeItFirst: StoryObj = {
  render: () => ({
    props: { ARGS, DRAFT: 'npm publish --tag next\npackage: @acme/ui@2.4.0' },
    template: `<div ${WIDTH}>
      <section dsApprovalGates run="Launch the new pricing page" [waiting]="3" [decided]="2" [total]="5" progress="Paused at step 4">
        ${gate(`[editing]="true" [draft]="DRAFT"`)}
      </section>
    </div>`,
  }),
};

/** Figma "Rejected": the run stops; nothing behind that gate runs. The newest decision is open. */
export const Rejected: StoryObj = {
  render: () => ({
    template: `<div ${WIDTH}>
      <section dsApprovalGates run="Launch the new pricing page" status="stopped" [waiting]="0" [decided]="4" [total]="4" progress="Stopped at “Start a browser agent”">
        <div dsApprovalGatesStopped description="“Start a browser agent” was rejected – nothing after it runs"></div>
        <div dsApprovalGatesDecided>
          <li dsApprovalGatesDecidedItem title="Start a browser agent" outcome="stopped" agent="Researcher" time="just now" [open]="true"
            reason="Signs up for competitor trials on its own. Rejected: read public pages only, no sign-ups."></li>
          <li dsApprovalGatesDecidedItem title="Email 1,284 trial users" outcome="approved" outcomeLabel="Approved with changes" agent="Growth agent" time="2m"
            reason="Sent to the 1,284 users on the trial list, with the new subject line."></li>
          <li dsApprovalGatesDecidedItem title="Change prices in pricing.ts" outcome="approved" agent="Coder" time="6m" reason="Team €12 and Business €24 a person a month."></li>
        </div>
      </section>
    </div>`,
  }),
};

/** Figma "All decided": the run goes on, the gates fold away. */
export const AllDecided: StoryObj = {
  render: () => ({
    template: `<div ${WIDTH}>
      <section dsApprovalGates run="Launch the new pricing page" status="running" [waiting]="0" [decided]="5" [total]="5" progress="Step 6 of 7">
        <div dsApprovalGatesDone title="All 5 gates decided" description="4 approved · 1 rejected · the run resumed at 12:04"></div>
      </section>
    </div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], ARGS },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 16px; align-content: start;">
          <section dsApprovalGates [run]="'Launch the new pricing page (' + scheme + ')'" [waiting]="3" [decided]="2" [total]="5" progress="Paused at step 4">
            ${gate('')}
            <div dsApprovalGatesDecided>
              <li dsApprovalGatesDecidedItem title="Skip the e2e tests" outcome="rejected" agent="Release agent" time="11:58" reason="Rejected: the e2e tests run on every release."></li>
            </div>
          </section>
        </div>
      }
    </div>`,
  }),
};
