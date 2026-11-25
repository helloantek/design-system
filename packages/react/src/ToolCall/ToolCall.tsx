import { RiArrowDownSLine, RiArrowRightSLine, RiCheckLine, RiCloseLine, RiFileCopyLine, RiRefreshLine } from '@remixicon/react';
import { Children, useEffect, useId, useRef, useState, type HTMLAttributes, type ReactNode, type Ref } from 'react';
import { Button } from '../Button';
import { Spinner } from '../Spinner';

// Styles live in @helloantek/ds-css (classes ds-tool-call*); these components only render the markup.

/** Where the call stands. */
export type ToolCallStatus = 'running' | 'done' | 'error';

/** Copies text and says so for a moment (the icon turns into a check and the name into "Copied"). */
function CopyButton({ text, label, copiedLabel, children }: { text: string; label: string; copiedLabel: string; children?: ReactNode }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      // The clipboard can be blocked (an insecure page, a denied permission); the button then does nothing.
    }
  };
  const icon = copied ? <RiCheckLine /> : <RiFileCopyLine />;
  return children ? (
    <Button variant="ghost" size="xs" leadingIcon={icon} onClick={copy}>
      {copied ? copiedLabel : children}
    </Button>
  ) : (
    <Button variant="ghost" size="xs" icon={icon} aria-label={copied ? copiedLabel : label} onClick={copy} />
  );
}

export interface ToolCallProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** The tool's name, shown in Mono: "search_web". */
  name: string;
  /** What it does or did: "Searching the web for “CRM pricing…”", "12 open deals · €184k". Cut with an ellipsis. */
  summary?: ReactNode;
  /** A 16 px icon for the tool. */
  icon?: ReactNode;
  /** Defaults to `done`. */
  status?: ToolCallStatus;
  /** How long it has run or took: "1.4 s". */
  duration?: ReactNode;
  /** The arguments (usually JSON), with Copy. */
  args?: string;
  /** The result, with Copy; while running, "Waiting for the result…". */
  result?: string;
  /** The error, in red, with Retry (if `onRetry`) and Copy error. */
  error?: string;
  onRetry?: () => void;
  /** Open state (controlled); a failed call starts open. */
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Texts, for other languages. */
  labels?: Partial<{ arguments: string; result: string; error: string; waiting: string; retry: string; copy: string; copyError: string; copied: string; running: string; done: string; failed: string }>;
}

/** One tool call: a line that opens to its arguments and result. */
export function ToolCall({
  name,
  summary,
  icon,
  status = 'done',
  duration,
  args,
  result,
  error,
  onRetry,
  open: openProp,
  defaultOpen,
  onOpenChange,
  labels = {},
  className,
  ...rest
}: ToolCallProps) {
  const [own, setOwn] = useState(defaultOpen ?? status === 'error');
  const open = openProp ?? own;
  const toggle = () => {
    if (openProp === undefined) setOwn(!open);
    onOpenChange?.(!open);
  };
  const id = useId();
  const t = { arguments: 'Arguments', result: 'Result', error: 'Error', waiting: 'Waiting for the result…', retry: 'Retry', copy: 'Copy', copyError: 'Copy error', copied: 'Copied', running: 'running', done: 'done', failed: 'failed', ...labels };
  const statusText = status === 'running' ? t.running : status === 'error' ? t.failed : t.done;
  const Chevron = open ? RiArrowDownSLine : RiArrowRightSLine;

  return (
    <div {...rest} className={['ds-tool-call', status === 'error' && 'ds-tool-call--error', open && 'ds-tool-call--open', className].filter(Boolean).join(' ')}>
      <button type="button" className="ds-tool-call__trigger" aria-expanded={open} aria-controls={`${id}-details`} onClick={toggle}>
        {icon && (
          <span className="ds-tool-call__icon" aria-hidden>
            {icon}
          </span>
        )}
        <code className="ds-tool-call__name">{name}</code>
        {summary !== undefined && <span className="ds-tool-call__summary">{summary}</span>}
        {summary === undefined && <span className="ds-tool-call__summary" />}
        <span className={`ds-tool-call__status ds-tool-call__status--${status}`} role="img" aria-label={statusText}>
          {status === 'running' ? <Spinner size="sm" decorative /> : status === 'error' ? <RiCloseLine aria-hidden /> : <RiCheckLine aria-hidden />}
        </span>
        {duration !== undefined && <span className="ds-tool-call__time">{duration}</span>}
        <span className="ds-tool-call__chevron" aria-hidden>
          <Chevron />
        </span>
      </button>
      <div className="ds-tool-call__details" id={`${id}-details`} hidden={!open}>
        {args !== undefined && (
          <div role="group" className="ds-tool-call__section" aria-labelledby={`${id}-args`}>
            <div className="ds-tool-call__label">
              <h4 id={`${id}-args`}>{t.arguments}</h4>
              <CopyButton text={args} label={`${t.copy} ${t.arguments.toLowerCase()}`} copiedLabel={t.copied} />
            </div>
            <pre className="ds-tool-call__code">{args}</pre>
          </div>
        )}
        {error !== undefined ? (
          <>
            <div role="group" className="ds-tool-call__section" aria-labelledby={`${id}-error`}>
              <div className="ds-tool-call__label">
                <h4 id={`${id}-error`}>{t.error}</h4>
              </div>
              <pre className="ds-tool-call__code ds-tool-call__code--error">{error}</pre>
            </div>
            <div className="ds-tool-call__actions">
              {onRetry && (
                <Button variant="outline" size="xs" leadingIcon={<RiRefreshLine />} onClick={onRetry}>
                  {t.retry}
                </Button>
              )}
              <CopyButton text={error} label={t.copyError} copiedLabel={t.copied}>
                {t.copyError}
              </CopyButton>
            </div>
          </>
        ) : (
          (result !== undefined || status === 'running') && (
            <div role="group" className="ds-tool-call__section" aria-labelledby={`${id}-result`}>
              <div className="ds-tool-call__label">
                <h4 id={`${id}-result`}>{t.result}</h4>
                {result !== undefined && <CopyButton text={result} label={`${t.copy} ${t.result.toLowerCase()}`} copiedLabel={t.copied} />}
              </div>
              {result !== undefined ? (
                <pre className="ds-tool-call__code">{result}</pre>
              ) : (
                <div className="ds-tool-call__code ds-tool-call__waiting" role="status">
                  <Spinner size="sm" decorative />
                  {t.waiting}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export interface ToolCallGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  ref?: Ref<HTMLDivElement>;
  /** `ToolCall`s of one turn, as direct children (the header counts them). */
  children: ReactNode;
  /** `running` shows a plain line ("Using tools…") over the calls as cards; `done` and `error` a card that sums them up. */
  status?: ToolCallStatus;
  /** How long they took together: "2.4 s". */
  duration?: ReactNode;
  /** How many failed; shown as "· 1 failed". */
  failed?: number;
  /** The current tool's icon, on the running line. */
  icon?: ReactNode;
  /** Open state (controlled). A finished group starts folded to one line ("Used 4 tools"). */
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Texts, for other languages. */
  labels?: Partial<{ running: string; calls: (n: number) => string; used: (n: number) => string; failed: (n: number) => string }>;
}

/** The tool calls of one turn: while running a line over the calls; then a card that sums them up and folds. */
export function ToolCallGroup({ children, status = 'done', duration, failed = 0, icon, open: openProp, defaultOpen, onOpenChange, labels = {}, className, ...rest }: ToolCallGroupProps) {
  const count = Children.toArray(children).length;
  const running = status === 'running';
  const [own, setOwn] = useState(defaultOpen ?? running);
  const open = openProp ?? own;
  const toggle = () => {
    if (openProp === undefined) setOwn(!open);
    onOpenChange?.(!open);
  };
  const id = useId();
  const t = {
    running: 'Using tools…',
    calls: (n: number) => `${n} tool ${n === 1 ? 'call' : 'calls'}`,
    used: (n: number) => `Used ${n} ${n === 1 ? 'tool' : 'tools'}`,
    failed: (n: number) => `${n} failed`,
    ...labels,
  };
  const meta = [duration, failed > 0 && t.failed(failed)].filter((x) => x !== undefined && x !== false && x !== null);
  const Chevron = open ? RiArrowDownSLine : RiArrowRightSLine;

  return (
    <div {...rest} className={['ds-tool-call-group', open && 'ds-tool-call-group--open', running && 'ds-tool-call-group--running', className].filter(Boolean).join(' ')}>
      <button type="button" className="ds-tool-call-group__trigger" aria-expanded={open} aria-controls={`${id}-calls`} onClick={toggle}>
        {running && icon && (
          <span className="ds-tool-call__icon" aria-hidden>
            {icon}
          </span>
        )}
        {!running && !open && (
          <span className={`ds-tool-call__status ds-tool-call__status--${failed > 0 ? 'error' : 'done'}`} aria-hidden>
            {failed > 0 ? <RiCloseLine /> : <RiCheckLine />}
          </span>
        )}
        <span className="ds-tool-call-group__title">{running ? t.running : open ? t.calls(count) : t.used(count)}</span>
        {meta.length > 0 && (
          <span className="ds-tool-call-group__meta">
            {meta.map((m, i) => (
              <span key={i}>· {m} </span>
            ))}
          </span>
        )}
        {meta.length === 0 && <span className="ds-tool-call-group__meta" />}
        <span className="ds-tool-call__chevron" aria-hidden>
          <Chevron />
        </span>
      </button>
      <div className="ds-tool-call-group__calls" id={`${id}-calls`} hidden={!open}>
        {children}
      </div>
    </div>
  );
}
