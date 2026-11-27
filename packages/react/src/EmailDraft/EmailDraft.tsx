import { RiArrowGoBackLine, RiCheckLine, RiCloseLine, RiCommandLine, RiCornerDownLeftLine, RiDeleteBinLine, RiClipboardLine, RiPencilLine, RiRobotLine } from '@remixicon/react';
import { useEffect, useId, useRef, useState, type HTMLAttributes, type KeyboardEvent, type ReactNode, type Ref } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Kbd, KbdGroup } from '../Kbd';
import { Select, type SelectOption } from '../Select';
import { Spinner } from '../Spinner';
import { ToggleGroup, ToggleGroupItem } from '../ToggleGroup';

// Styles live in @helloantek/ds-css (classes ds-email-draft*); this component renders the markup.

/** Where the draft is: to review, sent (Undo for a few seconds) or discarded (Restore). */
export type EmailDraftOutcome = 'draft' | 'sent' | 'discarded';

export interface EmailDraftTone {
  value: string;
  label: string;
}

export interface EmailDraftLabels {
  to: string;
  tone: string;
  edit: string;
  send: string;
  discard: string;
  undo: string;
  restore: string;
  ready: string;
  rewriting: string;
  discarded: string;
  /** "Remove INV-3021.pdf". */
  remove: (name: string) => string;
  /** "Sent to Mira Holt". */
  sent: (recipient: string) => string;
  /** "Undo for 5 s". */
  undoFor: (seconds: number) => string;
}

const LABELS: EmailDraftLabels = {
  to: 'To',
  tone: 'Tone',
  edit: 'Edit the text',
  send: 'Send email',
  discard: 'Discard',
  undo: 'Undo',
  restore: 'Restore',
  ready: 'Ready for review',
  rewriting: 'Rewriting',
  discarded: 'Draft discarded',
  remove: (name) => `Remove ${name}`,
  sent: (recipient) => `Sent to ${recipient}`,
  undoFor: (seconds) => `Undo for ${seconds} s`,
};

const DEFAULT_TONES: EmailDraftTone[] = [
  { value: 'friendly', label: 'Friendly' },
  { value: 'short', label: 'Short' },
  { value: 'formal', label: 'Formal' },
];

export interface EmailDraftProps extends Omit<HTMLAttributes<HTMLElement>, 'title' | 'children'> {
  ref?: Ref<HTMLElement>;
  /** What it is about: "INV-3021". */
  title: ReactNode;
  /** A badge after the title, e.g. `<Badge variant="tint" color="amber">Overdue 12 days</Badge>`. */
  status?: ReactNode;
  /** Under the title: "Brightline Studio". */
  subtitle?: ReactNode;
  /** On the right: "€2,400". */
  amount?: ReactNode;
  /** Who it can go to: `label` is the name, `description` the address. */
  recipients: SelectOption[];
  recipient?: string;
  defaultRecipient?: string;
  onRecipientChange?: (value: string) => void;
  /** The attached file's name; with `onRemoveAttachment` it gets a remove button. */
  attachment?: string;
  onRemoveAttachment?: () => void;
  /** The text as it reads, links and all. Leave out to show `text`. */
  children?: ReactNode;
  /** The text to edit in place; the Edit button shows when there is one. */
  text?: string;
  defaultText?: string;
  onTextChange?: (text: string) => void;
  editing?: boolean;
  defaultEditing?: boolean;
  onEditingChange?: (editing: boolean) => void;
  /** Tones to switch between; Friendly, Short and Formal by default. */
  tones?: EmailDraftTone[];
  tone?: string;
  defaultTone?: string;
  onToneChange?: (tone: string) => void;
  /** While the agent rewrites it: what it does, "Rewriting it shorter…". The text dims until it lands. */
  rewriting?: ReactNode;
  /** Who wrote it: "Billing agent". */
  agent?: ReactNode;
  agentIcon?: ReactNode;
  /** In the folded line under "Sent to …": "Invoice reminder". */
  subject?: ReactNode;
  /** Under "Draft discarded": "The billing agent will not send it". */
  discardedNote?: ReactNode;
  /** Sent, discarded or not yet; leave out for uncontrolled. */
  outcome?: EmailDraftOutcome;
  defaultOutcome?: EmailDraftOutcome;
  onOutcomeChange?: (outcome: EmailDraftOutcome) => void;
  onSend?: () => void;
  onDiscard?: () => void;
  /** Undo was pressed in time: the draft is back. */
  onUndo?: () => void;
  onRestore?: () => void;
  /** How long Undo stays, in seconds. */
  undoSeconds?: number;
  /** Undo ran out: the email goes for good. */
  onUndoExpire?: () => void;
  labels?: Partial<EmailDraftLabels>;
}

function useControllable<T>(value: T | undefined, initial: T, onChange?: (value: T) => void) {
  const [own, setOwn] = useState(initial);
  const current = value === undefined ? own : value;
  const set = (next: T) => {
    if (value === undefined) setOwn(next);
    onChange?.(next);
  };
  return [current, set] as const;
}

/**
 * An email an agent wrote, for you to check before it goes: what it is about, who it goes to, the attachment, the
 * text to edit in place and its tone to switch. Send (⌘↵) or Discard; once sent it folds to one line with Undo for a
 * few seconds, a discarded draft to one with Restore.
 */
export function EmailDraft({
  title,
  status,
  subtitle,
  amount,
  recipients,
  recipient: recipientProp,
  defaultRecipient,
  onRecipientChange,
  attachment,
  onRemoveAttachment,
  children,
  text: textProp,
  defaultText,
  onTextChange,
  editing: editingProp,
  defaultEditing = false,
  onEditingChange,
  tones = DEFAULT_TONES,
  tone: toneProp,
  defaultTone,
  onToneChange,
  rewriting,
  agent,
  agentIcon = <RiRobotLine aria-hidden />,
  subject,
  discardedNote,
  outcome: outcomeProp,
  defaultOutcome = 'draft',
  onOutcomeChange,
  onSend,
  onDiscard,
  onUndo,
  onRestore,
  undoSeconds = 5,
  onUndoExpire,
  labels = {},
  className,
  onKeyDown,
  ...rest
}: EmailDraftProps) {
  const t = { ...LABELS, ...labels };
  const id = useId();
  const titleId = `${id}-title`;
  const toId = `${id}-to`;
  const [recipient, setRecipient] = useControllable(recipientProp, defaultRecipient ?? recipients[0]?.value ?? '', onRecipientChange);
  const [text, setText] = useControllable(textProp, defaultText ?? '', onTextChange);
  const [editing, setEditing] = useControllable(editingProp, defaultEditing, onEditingChange);
  const [tone, setTone] = useControllable(toneProp, defaultTone ?? tones[0]?.value ?? '', onToneChange);
  const [outcome, setOutcome] = useControllable(outcomeProp, defaultOutcome, onOutcomeChange);
  const [left, setLeft] = useState(undoSeconds);
  const canEdit = textProp !== undefined || defaultText !== undefined;
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const actionRef = useRef<HTMLButtonElement>(null);
  const sendRef = useRef<HTMLButtonElement>(null);
  const moved = useRef(false);
  const expire = useRef(onUndoExpire);
  expire.current = onUndoExpire;

  // Undo counts down once sent; when it runs out the email is gone for good.
  useEffect(() => {
    if (outcome !== 'sent') return;
    setLeft(undoSeconds);
    let n = undoSeconds;
    const timer = setInterval(() => {
      n -= 1;
      setLeft(n);
      if (n <= 0) {
        clearInterval(timer);
        expire.current?.();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [outcome, undoSeconds]);

  // Focus follows the card as it folds and unfolds, so the keyboard is never left on a button that is gone.
  useEffect(() => {
    if (!moved.current) return;
    moved.current = false;
    (outcome === 'draft' ? sendRef : actionRef).current?.focus();
  }, [outcome]);

  useEffect(() => {
    if (editing && document.activeElement !== editorRef.current) editorRef.current?.focus();
  }, [editing]);

  const go = (next: EmailDraftOutcome, callback?: () => void) => {
    moved.current = true;
    if (next !== 'draft') setEditing(false);
    setOutcome(next);
    callback?.();
  };

  const name = recipients.find((option) => option.value === recipient)?.label ?? '';

  if (outcome !== 'draft') {
    const sent = outcome === 'sent';
    const canUndo = sent && left > 0;
    return (
      <section {...rest} className={['ds-email-draft', 'ds-email-draft--done', className].filter(Boolean).join(' ')} aria-labelledby={rest['aria-label'] === undefined ? titleId : undefined} onKeyDown={onKeyDown}>
        <div className="ds-email-draft__line" role="status">
          <span className={`ds-email-draft__mark ds-email-draft__mark--${sent ? 'sent' : 'discarded'}`} aria-hidden>
            {sent ? <RiCheckLine /> : <RiDeleteBinLine />}
          </span>
          <span className="ds-email-draft__summary">
            <span className="ds-email-draft__title" id={titleId}>
              {sent ? t.sent(name) : t.discarded}
            </span>
            {sent
              ? (subject !== undefined || canUndo) && (
                  <span className="ds-email-draft__subtitle">
                    {subject}
                    {subject !== undefined && canUndo && ' · '}
                    {canUndo && t.undoFor(left)}
                  </span>
                )
              : discardedNote !== undefined && <span className="ds-email-draft__subtitle">{discardedNote}</span>}
          </span>
          {canUndo && (
            <Button ref={actionRef} variant="outline" size="xs" leadingIcon={<RiArrowGoBackLine />} onClick={() => go('draft', onUndo)}>
              {t.undo}
            </Button>
          )}
          {!sent && (
            <Button ref={actionRef} variant="ghost" size="xs" onClick={() => go('draft', onRestore)}>
              {t.restore}
            </Button>
          )}
        </div>
      </section>
    );
  }

  const send = () => go('sent', onSend);

  const onCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    // ⌘↵ (Ctrl+↵ elsewhere) sends from anywhere in the card.
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey) && !event.altKey && !event.shiftKey) {
      event.preventDefault();
      send();
    }
  };

  return (
    <section
      {...rest}
      className={['ds-email-draft', rewriting !== undefined && 'ds-email-draft--rewriting', editing && 'ds-email-draft--editing', className].filter(Boolean).join(' ')}
      aria-labelledby={rest['aria-label'] === undefined ? titleId : undefined}
      onKeyDown={onCardKeyDown}
    >
      <header className="ds-email-draft__header">
        <span className="ds-email-draft__about">
          <span className="ds-email-draft__heading">
            <h3 className="ds-email-draft__title" id={titleId}>
              {title}
            </h3>
            {status}
          </span>
          {subtitle !== undefined && <span className="ds-email-draft__subtitle">{subtitle}</span>}
        </span>
        {amount !== undefined && <span className="ds-email-draft__amount">{amount}</span>}
      </header>
      <div className="ds-email-draft__to">
        <span className="ds-email-draft__to-label" id={toId}>
          {t.to}
        </span>
        <span className="ds-email-draft__recipient">
          <Select size="sm" options={recipients} value={recipient} onValueChange={setRecipient} aria-labelledby={toId} />
        </span>
        {attachment !== undefined && (
          <span className="ds-email-draft__attachment">
            <RiClipboardLine aria-hidden />
            {attachment}
            {onRemoveAttachment && (
              <button type="button" className="ds-email-draft__remove" aria-label={t.remove(attachment)} onClick={onRemoveAttachment}>
                <RiCloseLine aria-hidden />
              </button>
            )}
          </span>
        )}
      </div>
      <div className="ds-email-draft__body" aria-busy={rewriting !== undefined || undefined}>
        {rewriting !== undefined && (
          <p className="ds-email-draft__rewriting" role="status">
            <Spinner size="sm" decorative />
            {rewriting}
          </p>
        )}
        {editing ? (
          <textarea
            ref={editorRef}
            className="ds-email-draft__editor"
            aria-label={t.edit}
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyDown={(event) => {
              // Escape leaves the field and goes back to the text as it reads.
              if (event.key === 'Escape') {
                event.preventDefault();
                setEditing(false);
              }
            }}
          />
        ) : (
          <div className="ds-email-draft__text">{children ?? text}</div>
        )}
        <div className="ds-email-draft__tone">
          <ToggleGroup type="single" spacing={2} aria-label={t.tone} value={tone} onValueChange={(value) => value && setTone(value)}>
            {tones.map((option) => (
              <ToggleGroupItem key={option.value} value={option.value}>
                {option.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          {canEdit && <Button variant="ghost" size="xs" icon={<RiPencilLine />} aria-label={t.edit} aria-pressed={editing} onClick={() => setEditing(!editing)} />}
        </div>
      </div>
      <footer className="ds-email-draft__footer">
        {agent !== undefined && (
          <>
            {agentIcon}
            <span className="ds-email-draft__agent">{agent}</span>
          </>
        )}
        <Badge variant="tint" color={rewriting !== undefined ? 'blue' : 'green'}>
          {rewriting !== undefined ? t.rewriting : t.ready}
        </Badge>
        <Button className="ds-email-draft__discard" variant="ghost" size="sm" onClick={() => go('discarded', onDiscard)}>
          {t.discard}
        </Button>
        <Button
          ref={sendRef}
          size="sm"
          aria-keyshortcuts="Meta+Enter Control+Enter"
          trailingIcon={
            <KbdGroup>
              <Kbd size="sm" variant="inverted" icon={<RiCommandLine />} label="Command" />
              <Kbd size="sm" variant="inverted" icon={<RiCornerDownLeftLine />} label="Enter" />
            </KbdGroup>
          }
          onClick={send}
        >
          {t.send}
        </Button>
      </footer>
    </section>
  );
}
