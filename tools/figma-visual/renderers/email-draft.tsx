import { Badge, EmailDraft, type EmailDraftProps } from '@helloantek/ds-react';
import type { Renderer } from './types';

const common: EmailDraftProps = {
  title: 'INV-3021',
  status: (
    <Badge variant="tint" color="amber">
      Overdue 12 days
    </Badge>
  ),
  subtitle: 'Brightline Studio',
  amount: '€2,400',
  recipients: [
    { value: 'mira', label: 'Mira Holt', description: 'mira@brightline.co' },
    { value: 'accounts', label: 'Accounts team', description: 'billing@brightline.co' },
  ],
  attachment: 'INV-3021.pdf',
  onRemoveAttachment: () => {},
  agent: 'Billing agent',
  subject: 'Invoice reminder',
  discardedNote: 'The billing agent will not send it',
  style: { width: 520 },
};

// Maps the Sort UI 2.0 pattern "Email Draft" (6130:2704) to code: to review, rewriting, editing, sent and discarded.
export const renderEmailDraft: Renderer = (p) => {
  let el;
  switch (p.State) {
    case 'Rewriting':
      el = (
        <EmailDraft {...common} defaultTone="short" rewriting="Rewriting it shorter…" defaultText="x">
          Hi Mira, invoice INV-3021 (€2,400) was due on 3 November. <a href="#invoice">View invoice</a>
        </EmailDraft>
      );
      break;
    case 'Editing':
      el = (
        <EmailDraft
          {...common}
          defaultEditing
          defaultText="Hi Mira, a quick reminder that invoice INV-3021 for €2,400 was due on 3 November – no rush if it is already on its way. View invoice"
        />
      );
      break;
    case 'Sent':
      el = <EmailDraft {...common} defaultOutcome="sent" />;
      break;
    case 'Discarded':
      el = <EmailDraft {...common} defaultOutcome="discarded" />;
      break;
    default:
      el = (
        <EmailDraft {...common} defaultText="x">
          Hi Mira, a reminder that invoice INV-3021 for €2,400 was due on 3 November. If it has already gone out, please ignore this. You can see the invoice here:{' '}
          <a href="#invoice">View invoice</a>
        </EmailDraft>
      );
  }
  return (
    <div id="target" style={{ display: 'inline-block', padding: 8, background: 'var(--ds-background)' }}>
      {el}
    </div>
  );
};
