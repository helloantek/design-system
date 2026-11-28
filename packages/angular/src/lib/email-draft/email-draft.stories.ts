import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { signal } from '@angular/core';
import { DsBadge } from '../badge/badge';
import { DsEmailDraft, DsEmailDraftAgentIcon, DsEmailDraftStatus, type EmailDraftOutcome } from './email-draft';
import type { SelectOption } from '../select/select';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6130-2704';

const meta = {
  title: 'Patterns/Email Draft',
  decorators: [moduleMetadata({ imports: [DsEmailDraft, DsEmailDraftStatus, DsEmailDraftAgentIcon, DsBadge] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Email Draft** ([open in Figma](${FIGMA_URL})) for Angular: \`<section dsEmailDraft>\` with the same markup and \`ds-email-draft\` classes as the React EmailDraft. What it is about (\`title\`, a badge marked \`dsEmailDraftStatus\`, \`subtitle\`, \`amount\`), who it goes to (\`recipients\`, \`[(recipient)]\`), the \`attachment\` (\`removable\`), the text as content or \`[(text)]\` to edit in place (\`[(editing)]\`, Escape leaves the field), its tone (\`[(tone)]\`), \`rewriting\`. Send (⌘↵) or Discard; \`[(outcome)]\` folds it to one line with Undo for \`undoSeconds\` (\`(undoExpire)\`), or with Restore.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(520px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'style="width: min(520px, -32px + 100vw);"';
const RECIPIENTS: SelectOption[] = [
  { value: 'mira', label: 'Mira Holt', description: 'mira@brightline.co' },
  { value: 'accounts', label: 'Accounts team', description: 'billing@brightline.co' },
  { value: 'jonas', label: 'Jonas Weber', description: 'jonas@brightline.co' },
];
const TEXT: Record<string, string> = {
  friendly: 'Hi Mira, a reminder that invoice INV-3021 for €2,400 was due on 3 November. If it has already gone out, please ignore this. You can see the invoice here: View invoice',
  short: 'Hi Mira, invoice INV-3021 (€2,400) was due on 3 November. View invoice',
  formal:
    'Dear Ms Holt, our records show that invoice INV-3021 for €2,400 was due for payment on 3 November. We would be grateful if you could arrange payment at your earliest convenience. View invoice',
};
const BODY: Record<string, string> = {
  friendly: 'Hi Mira, a reminder that invoice INV-3021 for €2,400 was due on 3 November. If it has already gone out, please ignore this. You can see the invoice here: <a href="#invoice">View invoice</a>',
  short: 'Hi Mira, invoice INV-3021 (€2,400) was due on 3 November. <a href="#invoice">View invoice</a>',
  formal:
    'Dear Ms Holt, our records show that invoice INV-3021 for €2,400 was due for payment on 3 November. We would be grateful if you could arrange payment at your earliest convenience. <a href="#invoice">View invoice</a>',
};
const REWRITING: Record<string, string> = { friendly: 'Rewriting it friendlier…', short: 'Rewriting it shorter…', formal: 'Rewriting it more formally…' };
const status = '<span dsBadge dsEmailDraftStatus variant="tint" color="amber">Overdue 12 days</span>';
const common = (extra: string) =>
  `<section dsEmailDraft ${WIDTH} title="INV-3021" subtitle="Brightline Studio" amount="€2,400" [recipients]="recipients" attachment="INV-3021.pdf" removable agent="Billing agent" subject="Invoice reminder" discardedNote="The billing agent will not send it" ${extra}>${status}`;

/**
 * Check it, then send it: switch the recipient, take the attachment off, edit the text (the pencil), switch the tone
 * (the agent rewrites it), then Send (⌘↵) or Discard. Sent, it folds with Undo for 5 s; discarded, with Restore.
 */
export const Review: StoryObj = {
  render: () => {
    const tone = signal('friendly');
    const rewriting = signal<string | undefined>(undefined);
    const text = signal(TEXT['friendly']);
    const edited = signal(false);
    const attachment = signal(true);
    const outcome = signal<EmailDraftOutcome>('draft');
    const note = signal('');
    return {
      props: {
        recipients: RECIPIENTS,
        tone,
        rewriting,
        text,
        edited,
        attachment,
        outcome,
        note,
        setTone: (next: string) => {
          tone.set(next);
          rewriting.set(REWRITING[next]);
          setTimeout(() => {
            rewriting.set(undefined);
            text.set(TEXT[next]);
            edited.set(false);
          }, 1200);
        },
        setText: (next: string | undefined) => {
          text.set(next ?? '');
          edited.set(true);
        },
      },
      template: `<div style="display: grid; gap: 12px;">
        <section dsEmailDraft ${WIDTH} title="INV-3021" subtitle="Brightline Studio" amount="€2,400" [recipients]="recipients" [attachment]="attachment() ? 'INV-3021.pdf' : undefined" removable (removeAttachment)="attachment.set(false)" agent="Billing agent" subject="Invoice reminder" discardedNote="The billing agent will not send it" [text]="text()" (textChange)="setText($event)" [tone]="tone()" (toneChange)="setTone($event)" [rewriting]="rewriting()" [outcome]="outcome()" (outcomeChange)="outcome.set($event)" (undoExpire)="note.set('Sent for good.')" (undo)="note.set('')">${status}@if (edited()) {{{ text() }}} @else {@switch (tone()) {@case ('short') {${BODY['short']}} @case ('formal') {${BODY['formal']}} @default {${BODY['friendly']}}}}</section>
        <p aria-live="polite" style="margin: 0px; min-height: 20px; color: var(--ds-muted-foreground); font: 13px/20px var(--ds-font-sans);">{{ note() }}</p>
      </div>`,
    };
  },
};

/** Figma "Shorter": the agent rewrites it; the text dims until the new one lands. */
export const Rewriting: StoryObj = {
  render: () => ({ props: { recipients: RECIPIENTS, text: TEXT['short'] }, template: `${common('tone="short" rewriting="Rewriting it shorter…" [text]="text"')}${BODY['short']}</section>` }),
};

/** Figma "Editing the text in place". */
export const Editing: StoryObj = {
  render: () => ({
    props: { recipients: RECIPIENTS, text: 'Hi Mira, a quick reminder that invoice INV-3021 for €2,400 was due on 3 November – no rush if it is already on its way. View invoice' },
    template: `${common('[editing]="true" [text]="text"')}</section>`,
  }),
};

/** Figma "After": sent, with Undo for a few seconds; discarded, with Restore. */
export const After: StoryObj = {
  render: () => ({
    props: { recipients: RECIPIENTS },
    template: `<div style="display: grid; gap: 12px;">${common('outcome="sent"')}${BODY['friendly']}</section>${common('outcome="discarded"')}${BODY['friendly']}</section></div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], recipients: RECIPIENTS, text: TEXT['friendly'] },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 16px; align-content: start;">
          <section dsEmailDraft aria-label="Email draft ({{ scheme }})" title="INV-3021" subtitle="Brightline Studio" amount="€2,400" [recipients]="recipients" attachment="INV-3021.pdf" removable agent="Billing agent" subject="Invoice reminder" discardedNote="The billing agent will not send it" [text]="text">${status}${BODY['friendly']}</section>
          <section dsEmailDraft aria-label="Email draft, sent ({{ scheme }})" title="INV-3021" subtitle="Brightline Studio" amount="€2,400" [recipients]="recipients" attachment="INV-3021.pdf" removable agent="Billing agent" subject="Invoice reminder" discardedNote="The billing agent will not send it" outcome="sent">${status}</section>
        </div>
      }
    </div>`,
  }),
};
