import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsReviewCenter, DsReviewCenterDone, DsReviewCenterItem, DsReviewCenterMark, DsReviewCenterQueueItem, DsReviewCenterRisk, type ReviewCenterAttachment, type ReviewCenterField } from './review-center';
import { DsBadge } from '../badge/badge';
import { riClaudeFill, riGeminiFill } from '../internal/remix';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6116-2050';

const meta = {
  title: 'Patterns/Review Center',
  decorators: [moduleMetadata({ imports: [DsReviewCenter, DsReviewCenterQueueItem, DsReviewCenterItem, DsReviewCenterDone, DsReviewCenterMark, DsReviewCenterRisk, DsBadge] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Review Center** ([open in Figma](${FIGMA_URL})) for Angular: \`<section dsReviewCenter>\` with the same markup and \`ds-review\` classes as the React ReviewCenter. Progress and the last decision with Undo (Z; \`undoable\`, \`(undo)\`) on top; the queue on the left (\`<li dsReviewCenterQueueItem>\`, \`(choose)\`, with \`filters\` and \`[(filter)]\`); the item to decide on the right (\`<article dsReviewCenterItem>\`): who asks (a mark marked \`dsReviewCenterMark\`, a badge marked \`dsReviewCenterRisk\`), why, \`fields\` (\`changed\`, \`note\`), \`attachments\`, and Skip (S), Reject (R), Edit (E), Approve (A). With \`reasons\`, Reject asks why with a number per reason; Esc cancels. When the queue is empty, \`<section dsReviewCenterDone>\`.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(860px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'style="width: min(860px, -32px + 100vw);"';
const NARROW = 'style="width: min(420px, -32px + 100vw);"';
const FILTERS = [
  { label: 'All', count: 7 },
  { label: 'High risk', count: 1 },
  { label: 'Unsure', count: 3 },
];
const REASONS = ['Incorrect', 'Too risky', 'Not allowed', 'Other…'];
const QUEUE = [
  { title: 'Pay INV-2207 from Acme Logistics', meta: 'Invoice · Finance agent', time: 'now', gemini: true, model: 'Gemini Pro' },
  { title: 'Split customers.name in two', meta: 'Migration · Coder', time: '14m', gemini: false, model: 'Claude' },
  { title: 'Rotate the Stripe API keys', meta: 'Plan · Ops agent', time: '11m', gemini: false, model: 'Claude' },
  { title: 'Refund order #4821', meta: 'Refund · Support agent', time: '9m', gemini: false, model: 'Claude' },
  { title: 'Tag 14 tickets as Billing', meta: 'Triage · Support agent', time: '6m', gemini: true, model: 'Gemini Flash' },
  { title: 'Post release notes to #announce', meta: 'Slack message · Release agent', time: '2m', gemini: false, model: 'Claude' },
];
type Proposal = (typeof QUEUE)[number];
const FIELDS: ReviewCenterField[] = [
  { label: 'Amount', value: '$12,480.00' },
  { label: 'Due', value: 'Oct 24' },
  { label: 'IBAN', value: 'DE89 •••• 3000', changed: true, note: 'New since the last payment' },
];
const ATTACHMENTS: ReviewCenterAttachment[] = [{ label: 'INV-2207.pdf' }, { label: 'PO-118' }, { label: 'Vendor email', icon: 'mail' }];
const mark = (gemini: boolean | string) => `@if (${gemini}) { ${riGeminiFill.replace('<svg ', '<svg dsReviewCenterMark ')} } @else { ${riClaudeFill.replace('<svg ', '<svg dsReviewCenterMark ')} }`;
const queue = (items: string, selected: string) => `@for (p of ${items}; track p.title; let i = $index) {
  <li dsReviewCenterQueueItem [title]="p.title" [meta]="p.meta" [time]="p.time" [selected]="${selected}" (choose)="selected = i">${mark('p.gemini')}</li>
}`;
const invoice = (attrs: string) => `<article dsReviewCenterItem agent="Finance agent" model="Gemini Pro" title="Pay INV-2207 from Acme Logistics"
    why="Amount and line items match PO-118. The bank details differ from the last six payments to Acme." [fields]="FIELDS" [attachments]="ATTACHMENTS" [reasons]="REASONS" ${attrs}>
    ${riGeminiFill.replace('<svg ', '<svg dsReviewCenterMark ')}<span dsBadge dsReviewCenterRisk variant="tint" color="red">High risk</span>
  </article>`;

/** Figma "Reviewing": the queue on the left, the item to decide on the right. Try A, R (then 1–4), S, E and Z. */
export const Reviewing: StoryObj = {
  render: () => ({
    props: {
      FILTERS,
      FIELDS,
      ATTACHMENTS,
      REASONS,
      left: [...QUEUE],
      selected: 0,
      filter: 0,
      history: [{ proposal: null as Proposal | null, index: -1, text: 'Approved with edits · Split customers.name' }],
      reviewed(this: { history: unknown[] }) {
        return 26 + this.history.length - 1;
      },
      last(this: { history: { index: number; text: string }[] }) {
        return this.history[this.history.length - 1];
      },
      decide(this: { left: Proposal[]; selected: number; history: unknown[] }, text: string) {
        const proposal = this.left[this.selected];
        this.history = [...this.history, { proposal, index: this.selected, text: `${text} · ${proposal.title}` }];
        this.left = this.left.filter((_, i) => i !== this.selected);
        this.selected = Math.min(this.selected, this.left.length - 1);
      },
      rejectWith(this: { decide: (text: string) => void }, reason?: number) {
        this.decide(`Rejected${reason !== undefined ? ` (${REASONS[reason].replace('…', '')})` : ''}`);
      },
      undo(this: { left: Proposal[]; selected: number; history: { proposal: Proposal; index: number }[] }) {
        const last = this.history[this.history.length - 1];
        if (!last || last.index < 0) return;
        this.history = this.history.slice(0, -1);
        this.left = [...this.left.slice(0, last.index), last.proposal, ...this.left.slice(last.index)];
        this.selected = last.index;
      },
      skip(this: { left: Proposal[]; selected: number }) {
        this.selected = (this.selected + 1) % this.left.length;
      },
      kind: (p: Proposal) => p.meta.split(' · ')[0],
      agentOf: (p: Proposal) => p.meta.split(' · ')[1],
      whyOf: (p: Proposal) => {
        const [kind, agent] = p.meta.split(' · ');
        return `${kind} proposed by the ${agent.toLowerCase()} ${p.time === 'now' ? 'just now' : `${p.time} ago`}.`;
      },
    },
    template: `@if (left.length === 0) {
      <div ${NARROW}><section dsReviewCenterDone [description]="reviewed() + ' reviewed'" undoable (undo)="undo()"></section></div>
    } @else {
      <div ${WIDTH}>
        <section dsReviewCenter [reviewed]="reviewed()" [total]="33" meta="oldest 14m" [lastDecision]="last().text" [undoable]="last().index >= 0" (undo)="undo()" [filters]="FILTERS" [(filter)]="filter">
          ${queue('left', 'i === selected')}
          @for (current of [left[selected]]; track current.title) {
            @if (current.title === 'Pay INV-2207 from Acme Logistics') {
              ${invoice(`(approve)="decide('Approved')" (reject)="rejectWith($event)" (edit)="decide('Approved with edits')" (skip)="skip()"`)}
            } @else {
              <article dsReviewCenterItem [agent]="agentOf(current)" [model]="current.model" [title]="current.title" [why]="whyOf(current)" [reasons]="REASONS"
                (approve)="decide('Approved')" (reject)="rejectWith($event)" (edit)="decide('Approved with edits')" (skip)="skip()">${mark('current.gemini')}</article>
            }
          }
        </section>
      </div>
    }`,
  }),
};

/** Figma "Reject": pick why with 1–4; Esc cancels. */
export const Reject: StoryObj = {
  render: () => ({
    props: { FILTERS, FIELDS, ATTACHMENTS, REASONS, QUEUE, selected: 0 },
    template: `<div ${WIDTH}>
      <section dsReviewCenter [reviewed]="26" [total]="33" meta="oldest 14m" [filters]="FILTERS">
        ${queue('QUEUE', 'i === 0')}
        ${invoice('[rejecting]="true"')}
      </section>
    </div>`,
  }),
};

/** Figma "All reviewed". */
export const AllReviewed: StoryObj = {
  render: () => ({
    template: `<div ${NARROW}><section dsReviewCenterDone description="29 approved · 3 rejected · 1 skipped" undoable></section></div>`,
  }),
};

/** Light and Dark, driven only by tokens. Narrow, the queue goes above the item. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], FILTERS, FIELDS, ATTACHMENTS, REASONS, three: QUEUE.slice(0, 3), selected: 0 },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 16px; align-content: start;">
          <section dsReviewCenter [aria-label]="'Review center (' + scheme + ')'" [reviewed]="26" [total]="33" meta="oldest 14m" lastDecision="Approved with edits · Split customers.name" undoable [filters]="FILTERS">
            ${queue('three', 'i === 0')}
            ${invoice('')}
          </section>
          <section dsReviewCenterDone [aria-label]="'All reviewed (' + scheme + ')'" description="29 approved · 3 rejected · 1 skipped" undoable></section>
        </div>
      }
    </div>`,
  }),
};
