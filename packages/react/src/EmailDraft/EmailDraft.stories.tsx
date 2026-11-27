import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { Badge } from '../Badge';
import { EmailDraft, type EmailDraftOutcome, type EmailDraftProps } from './EmailDraft';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6130-2704';

const meta = {
  title: 'Patterns/Email Draft',
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Email Draft** ([open in Figma](${FIGMA_URL})): an email an agent wrote, for you to check before it goes. What it is about (\`title\`, \`status\`, \`subtitle\`, \`amount\`), who it goes to (\`recipients\`, a Select), the \`attachment\`, the text to edit in place (\`text\`, the pencil; Escape leaves the field) and its tone to switch (\`tones\`). While the agent rewrites it, \`rewriting\` says what it does and the text dims. Send (⌘↵ anywhere in the card) or Discard; once sent it folds to one line with Undo for \`undoSeconds\`, a discarded draft to one with Restore.

**When to use:** an agent prepared an email (a reminder, a reply, a follow-up) that a person approves before it goes.
**When not to use:** a person writes the email themselves (use a form or an editor), or the agent sends without review (show what it sent in its trace).`,
      },
    },
  },
} satisfies Meta;

export default meta;

const WIDTH: CSSProperties = { width: 'min(520px, calc(100vw - 32px))' };

const RECIPIENTS = [
  { value: 'mira', label: 'Mira Holt', description: 'mira@brightline.co' },
  { value: 'accounts', label: 'Accounts team', description: 'billing@brightline.co' },
  { value: 'jonas', label: 'Jonas Weber', description: 'jonas@brightline.co' },
];

const VERSIONS: Record<string, { text: string; body: ReactNode }> = {
  friendly: {
    text: 'Hi Mira, a reminder that invoice INV-3021 for €2,400 was due on 3 November. If it has already gone out, please ignore this. You can see the invoice here: View invoice',
    body: (
      <>
        Hi Mira, a reminder that invoice INV-3021 for €2,400 was due on 3 November. If it has already gone out, please ignore this. You can see the invoice here:{' '}
        <a href="#invoice">View invoice</a>
      </>
    ),
  },
  short: {
    text: 'Hi Mira, invoice INV-3021 (€2,400) was due on 3 November. View invoice',
    body: (
      <>
        Hi Mira, invoice INV-3021 (€2,400) was due on 3 November. <a href="#invoice">View invoice</a>
      </>
    ),
  },
  formal: {
    text: 'Dear Ms Holt, our records show that invoice INV-3021 for €2,400 was due for payment on 3 November. We would be grateful if you could arrange payment at your earliest convenience. View invoice',
    body: (
      <>
        Dear Ms Holt, our records show that invoice INV-3021 for €2,400 was due for payment on 3 November. We would be grateful if you could arrange payment at your earliest convenience.{' '}
        <a href="#invoice">View invoice</a>
      </>
    ),
  },
};

const REWRITING: Record<string, string> = { friendly: 'Rewriting it friendlier…', short: 'Rewriting it shorter…', formal: 'Rewriting it more formally…' };

const common: Omit<EmailDraftProps, 'recipients'> & { recipients: EmailDraftProps['recipients'] } = {
  title: 'INV-3021',
  status: (
    <Badge variant="tint" color="amber">
      Overdue 12 days
    </Badge>
  ),
  subtitle: 'Brightline Studio',
  amount: '€2,400',
  recipients: RECIPIENTS,
  attachment: 'INV-3021.pdf',
  onRemoveAttachment: () => {},
  agent: 'Billing agent',
  subject: 'Invoice reminder',
  discardedNote: 'The billing agent will not send it',
  style: WIDTH,
};

/**
 * Check it, then send it: switch the recipient, take the attachment off, edit the text (the pencil), switch the tone
 * (the agent rewrites it), then Send (⌘↵) or Discard. Sent, it folds with Undo for 5 s; discarded, with Restore.
 */
export const Review: StoryObj = {
  render: function Render() {
    const [tone, setTone] = useState('friendly');
    const [rewriting, setRewriting] = useState<string>();
    const [text, setText] = useState(VERSIONS.friendly.text);
    const [edited, setEdited] = useState(false);
    const [attachment, setAttachment] = useState(true);
    const [outcome, setOutcome] = useState<EmailDraftOutcome>('draft');
    const [note, setNote] = useState('');
    useEffect(() => {
      if (!rewriting) return;
      const timer = setTimeout(() => {
        setRewriting(undefined);
        setText(VERSIONS[tone].text);
        setEdited(false);
      }, 1200);
      return () => clearTimeout(timer);
    }, [rewriting, tone]);
    return (
      <div style={{ display: 'grid', gap: 12 }}>
        <EmailDraft
          {...common}
          attachment={attachment ? 'INV-3021.pdf' : undefined}
          onRemoveAttachment={() => setAttachment(false)}
          text={text}
          onTextChange={(next) => {
            setText(next);
            setEdited(true);
          }}
          tone={tone}
          onToneChange={(next) => {
            setTone(next);
            setRewriting(REWRITING[next]);
          }}
          rewriting={rewriting}
          outcome={outcome}
          onOutcomeChange={setOutcome}
          onUndoExpire={() => setNote('Sent for good.')}
          onUndo={() => setNote('')}
        >
          {edited ? text : VERSIONS[tone].body}
        </EmailDraft>
        <p aria-live="polite" style={{ margin: 0, minHeight: 20, color: 'var(--ds-muted-foreground)', font: '13px/20px var(--ds-font-sans)' }}>
          {note}
        </p>
      </div>
    );
  },
};

/** Figma "Shorter": the agent rewrites it; the text dims until the new one lands. */
export const Rewriting: StoryObj = {
  render: () => (
    <EmailDraft {...common} defaultTone="short" rewriting="Rewriting it shorter…" defaultText={VERSIONS.short.text}>
      {VERSIONS.short.body}
    </EmailDraft>
  ),
};

/** Figma "Editing the text in place". */
export const Editing: StoryObj = {
  render: () => (
    <EmailDraft
      {...common}
      defaultEditing
      defaultText="Hi Mira, a quick reminder that invoice INV-3021 for €2,400 was due on 3 November – no rush if it is already on its way. View invoice"
    />
  ),
};

/** Figma "After": sent, with Undo for a few seconds; discarded, with Restore. */
export const After: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <EmailDraft {...common} defaultOutcome="sent">
        {VERSIONS.friendly.body}
      </EmailDraft>
      <EmailDraft {...common} defaultOutcome="discarded">
        {VERSIONS.friendly.body}
      </EmailDraft>
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, alignContent: 'start' }}>
          <EmailDraft {...common} style={undefined} aria-label={`Email draft (${scheme})`} defaultText={VERSIONS.friendly.text}>
            {VERSIONS.friendly.body}
          </EmailDraft>
          <EmailDraft {...common} style={undefined} aria-label={`Email draft, sent (${scheme})`} defaultOutcome="sent" />
        </div>
      ))}
    </div>
  ),
};
