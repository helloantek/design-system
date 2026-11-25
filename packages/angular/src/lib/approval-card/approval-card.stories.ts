import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsApprovalCard, DsApprovalCardDetails, DsApprovalCardIconMarker, DsApprovalCardPreview, DsApprovalCardRecipients, DsApprovalCardSummary } from './approval-card';
import { riGitBranchLine, riMailLine } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6090-1725';

const meta = {
  title: 'Patterns/Approval Card',
  decorators: [moduleMetadata({ imports: [DsApprovalCard, DsApprovalCardDetails, DsApprovalCardSummary, DsApprovalCardPreview, DsApprovalCardRecipients, DsApprovalCardIconMarker] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Approval Card** ([open in Figma](${FIGMA_URL})) for Angular: \`<article dsApprovalCard>\` with the same markup and \`ds-approval-card\` classes as the React ApprovalCard. The header says what the agent will do and for whom (\`title\`, \`description\`, an icon marked \`dsApprovalCardIcon\`, \`risk\`); the body holds \`dsApprovalCardRecipients\`, \`dsApprovalCardDetails\`, \`dsApprovalCardSummary\`, \`dsApprovalCardPreview\` (or content marked \`dsApprovalCardContent\`); the footer has \`[(alwaysAllow)]\` (or \`countdown\`) and Deny / Approve (\`(deny)\`, \`(approve)\`). Esc denies and Enter approves while focus is in the card. \`state\`: \`pending\`, \`approving\`, then \`approved\`, \`denied\` or \`expired\`, which fold it to one line with an optional Undo (\`undoable\`, \`(undo)\`).`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(420px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const width = (more = '') => `style="width: min(420px, -32px + 100vw);${more}"`;
const mail = riMailLine.replace('<svg ', '<svg dsApprovalCardIcon ');
const branch = riGitBranchLine.replace('<svg ', '<svg dsApprovalCardIcon ');
const newsletter = `<div dsApprovalCardRecipients [people]="[{ name: 'Ana' }, { name: 'Jonas' }, { name: 'Mia' }, { name: 'Tomás' }]" [total]="412"></div>
  <dl dsApprovalCardDetails [items]="[['Subject', 'What’s new in October'], ['Sends', 'Today, 9:00']]"></dl>`;
const branches = `<p dsApprovalCardSummary>All three were merged more than 90 days ago and no open pull request uses them.</p>
  <pre dsApprovalCardPreview>{{ branchList }}</pre>`;
const branchList = 'origin/feature/old-nav\norigin/fix/login-timeout\norigin/spike/charts-v1';

/** Figma "High risk": a preview of what changes, and a countdown (the app counts; at 0 it denies itself). */
export const HighRisk: StoryObj = {
  render: () => {
    const props = { branchList, left: 45, state: 'pending', clock: (left: number) => `Denies itself in 0:${String(left).padStart(2, '0')}` };
    return {
      props,
      template: `<div ${width()}>
        <article dsApprovalCard title="Delete 3 stale branches" description="git push --delete · Repo agent" risk="high" [state]="state" [countdown]="clock(left)"
          [outcome]="state === 'expired' ? 'Nobody answered in 0:45' : 'By you just now'" [undoable]="true"
          (approve)="state = 'approved'" (deny)="state = 'denied'" (undo)="left = 45; state = 'pending'">
          ${branch}${branches}
        </article>
      </div>`,
    };
  },
};

/** Figma "Approving": the button holds a spinner until the action is done; the card is busy. */
export const Approving: StoryObj = {
  render: () => ({
    template: `<div ${width()}>
      <article dsApprovalCard title="Send the October newsletter" description="Newsletter · Marketing agent" risk="medium" state="approving" [alwaysAllow]="false">
        ${mail}${newsletter}
      </article>
    </div>`,
  }),
};

/** Figma "Decided": one line each – approved (with Undo), denied, or denied by itself. */
export const Decided: StoryObj = {
  render: () => ({
    template: `<div ${width(' display: grid; gap: 12px;')}>
      <article dsApprovalCard state="approved" title="Send the October newsletter" outcome="By you at 9:02 · sending to 412 people" [undoable]="true"></article>
      <article dsApprovalCard state="denied" title="Delete 3 stale branches" outcome="By you at 12:04"></article>
      <article dsApprovalCard state="expired" title="Delete 3 stale branches" outcome="Nobody answered in 1:00"></article>
    </div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], branchList },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 16px; align-content: start;">
          <article dsApprovalCard title="Delete 3 stale branches" description="git push --delete · Repo agent" risk="high" countdown="Denies itself in 0:45">
            ${branch}${branches}
          </article>
          <article dsApprovalCard state="approved" title="Send the October newsletter" outcome="By you at 9:02" [undoable]="true"></article>
          <article dsApprovalCard state="expired" title="Delete 3 stale branches" outcome="Nobody answered in 1:00"></article>
        </div>
      }
    </div>`,
  }),
};
