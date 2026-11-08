import { useId, useLayoutEffect, useRef, useState, type ChangeEvent, type CSSProperties, type HTMLAttributes, type KeyboardEvent, type ReactNode, type Ref } from 'react';
import { RiArrowUpLine, RiCloseLine, RiCollapseDiagonalLine, RiExpandDiagonalLine, RiStopLine, RiVoiceprintLine } from '@remixicon/react';
import { Button } from '../Button';
import { Spinner } from '../Spinner';

// Styles live in @helloantek/ds-css (classes ds-ai-composer*); this component renders the markup, sizes the prompt to
// its text, highlights /commands and switches from a row to a column when the text no longer fits on one line.

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(' ');

/** Figma "Layout": one line (`row`), a text area above the actions (`column`), or `auto` (row until the text wraps). */
export type AIChatComposerLayout = 'auto' | 'row' | 'column';
/** Figma "State": typing, dictating (`recording`) or turning speech into text (`transcribing`). */
export type AIChatComposerState = 'default' | 'recording' | 'transcribing';

/** Figma's sample waveform: quiet at the edges, voiced in the middle (levels 0–1). */
const SAMPLE_LEVELS = [
  ...Array(28).fill(0),
  1 / 7,
  ...[3, 3, 3, 6, 7, 6, 4, 4, 4, 6, 4, 7, 4, 4, 4, 4].map((h) => h / 7),
  1 / 7,
  ...Array(19).fill(0),
];

export interface AIChatComposerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSubmit' | 'defaultValue'> {
  ref?: Ref<HTMLDivElement>;
  /** The prompt (controlled). */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Called with the prompt on Enter (Shift+Enter adds a line) or the send button. */
  onSubmit?: (value: string) => void;
  /** Figma Bar "Placeholder" (default "Ask about anything…"). */
  placeholder?: string;
  /** Names the prompt for assistive technology (default "Message"). */
  inputLabel?: string;
  /** Figma Layout (default `auto`). */
  layout?: AIChatComposerLayout;
  /** Figma State (default `default`). */
  state?: AIChatComposerState;
  /** Figma "header" (Header=True): attachments above the text; it turns the composer into a column. */
  header?: ReactNode;
  /** The leading button, usually a ghost sm `+` that opens a menu (Figma "Add files or photos", tools…). */
  leading?: ReactNode;
  /** Figma Bar Type=Badges: tool badges after the leading button; they turn the composer into a column. */
  badges?: ReactNode;
  /** The model picker, usually a ghost sm button such as "Opus 5.5 High" with a chevron. */
  model?: ReactNode;
  /** Figma "Dictate" (default true): the dictate button; `onDictate` starts recording. */
  dictate?: boolean;
  onDictate?: () => void;
  /** Recording: the cancel and stop buttons. */
  onCancelRecording?: () => void;
  onStopRecording?: () => void;
  /** Recording: the waveform's levels, 0–1 (default: Figma's sample). */
  levels?: number[];
  /** Transcribing: the status line (default "Transcribing…"). */
  transcribingLabel?: ReactNode;
  /** Figma Maximize: `auto` (default) shows the expand button once the text needs scrolling; `false` never. */
  maximize?: 'auto' | boolean;
  /** Tints /commands in the prompt (Figma "AI Chat Composer Token"). Default `/\/[\w.-]+/g` at a word start; `false` turns it off. */
  tokens?: RegExp | false;
  /** Disables sending (by default it is disabled while the prompt is empty and there is no header). */
  submitDisabled?: boolean;
  disabled?: boolean;
  sendLabel?: string;
  dictateLabel?: string;
  cancelRecordingLabel?: string;
  stopRecordingLabel?: string;
  expandLabel?: string;
  collapseLabel?: string;
  /** The prompt's textarea. */
  inputRef?: Ref<HTMLTextAreaElement>;
}

const TOKENS = /(?<=^|\s)\/[\w.-]+/g;

function highlight(text: string, pattern: RegExp | false): ReactNode {
  if (!pattern || !text) return text;
  const re = new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g');
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    if (!m[0]) continue;
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    out.push(
      <mark key={i} className="ds-ai-composer-token">
        {m[0]}
      </mark>,
    );
    last = i + m[0].length;
  }
  out.push(text.slice(last));
  return out;
}

/** Figma "AI Chat Composer": the prompt box of an AI chat. */
export function AIChatComposer({
  value: valueProp,
  defaultValue = '',
  onValueChange,
  onSubmit,
  placeholder = 'Ask about anything…',
  inputLabel = 'Message',
  layout = 'auto',
  state = 'default',
  header,
  leading,
  badges,
  model,
  dictate = true,
  onDictate,
  onCancelRecording,
  onStopRecording,
  levels = SAMPLE_LEVELS,
  transcribingLabel = 'Transcribing…',
  maximize = 'auto',
  tokens = TOKENS,
  submitDisabled,
  disabled = false,
  sendLabel = 'Send',
  dictateLabel = 'Dictate',
  cancelRecordingLabel = 'Cancel recording',
  stopRecordingLabel = 'Stop recording',
  expandLabel = 'Expand',
  collapseLabel = 'Collapse',
  inputRef,
  className,
  ...rest
}: AIChatComposerProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = valueProp ?? uncontrolled;
  const textarea = useRef<HTMLTextAreaElement | null>(null);
  const backdrop = useRef<HTMLDivElement>(null);
  const [wraps, setWraps] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const statusId = useId();

  const column = layout === 'column' || (layout === 'auto' && (header != null || badges != null || value.includes('\n') || wraps));
  const recording = state === 'recording';
  const transcribing = state === 'transcribing';
  const canSubmit = !disabled && !(submitDisabled ?? (value.trim() === '' && header == null));

  // Size the prompt to its text (up to 8 lines, 24 expanded) and notice when a row's text wraps.
  useLayoutEffect(() => {
    const el = textarea.current;
    if (!el) return;
    el.style.height = 'auto';
    const line = parseFloat(getComputedStyle(el).lineHeight) || 20;
    if (!column && el.scrollHeight > line * 1.5) setWraps(true);
    if (value === '') setWraps(false);
    el.style.height = `${el.scrollHeight}px`;
    setOverflows(el.scrollHeight > el.clientHeight + 1);
    if (backdrop.current) backdrop.current.scrollTop = el.scrollTop;
  }, [value, column, expanded]);

  const setValue = (next: string) => {
    if (valueProp === undefined) setUncontrolled(next);
    onValueChange?.(next);
  };

  const submit = () => {
    if (!canSubmit) return;
    onSubmit?.(value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      submit();
    }
  };

  const setTextarea = (el: HTMLTextAreaElement | null) => {
    textarea.current = el;
    if (typeof inputRef === 'function') inputRef(el);
    else if (inputRef) (inputRef as { current: HTMLTextAreaElement | null }).current = el;
  };

  const showExpand = column && maximize !== false && (maximize === true || overflows || expanded);
  const sendButton = <Button size="sm" icon={<RiArrowUpLine />} aria-label={sendLabel} disabled={!canSubmit} onClick={submit} />;

  return (
    <div
      {...rest}
      className={cx('ds-ai-composer', column && 'ds-ai-composer--column', state !== 'default' && `ds-ai-composer--${state}`, expanded && 'ds-ai-composer--expanded', className)}
      aria-disabled={disabled || undefined}
    >
      {column && header != null && <div className="ds-ai-composer__header">{header}</div>}
      <div className="ds-ai-composer__field">
        <div ref={backdrop} className="ds-ai-composer__backdrop" aria-hidden>
          {highlight(value, tokens)}
          {/* A trailing newline needs a character after it to take its line. */}
          {value.endsWith('\n') ? ' ' : null}
        </div>
        <textarea
          ref={setTextarea}
          className="ds-ai-composer__input"
          rows={1}
          value={value}
          placeholder={placeholder}
          aria-label={inputLabel}
          disabled={disabled}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          onScroll={(e) => {
            if (backdrop.current) backdrop.current.scrollTop = e.currentTarget.scrollTop;
          }}
        />
      </div>
      {showExpand && (
        <span className="ds-ai-composer__expand">
          <Button
            variant="ghost"
            size="sm"
            icon={expanded ? <RiCollapseDiagonalLine /> : <RiExpandDiagonalLine />}
            aria-label={expanded ? collapseLabel : expandLabel}
            aria-pressed={expanded}
            onClick={() => setExpanded((x) => !x)}
          />
        </span>
      )}
      <span className="ds-ai-composer__leading">
        {recording || transcribing ? <Button variant="secondary" size="sm" icon={<RiCloseLine />} aria-label={cancelRecordingLabel} onClick={onCancelRecording} /> : leading}
      </span>
      {recording && (
        <span className="ds-ai-composer__waveform" aria-hidden>
          {levels.map((level, i) => (
            <i key={i} style={{ '--level': Math.max(0, Math.min(1, level)) } as CSSProperties} data-voiced={level > 0.2 ? '' : undefined} />
          ))}
        </span>
      )}
      {transcribing && (
        <span className="ds-ai-composer__status" id={statusId} role="status">
          {transcribingLabel}
        </span>
      )}
      {!recording && !transcribing && badges != null && <span className="ds-ai-composer__badges">{badges}</span>}
      <span className="ds-ai-composer__trailing">
        {recording ? (
          <Button variant="secondary" size="sm" icon={<RiStopLine />} aria-label={stopRecordingLabel} onClick={onStopRecording} />
        ) : transcribing ? (
          <span className="ds-ai-composer__busy">
            <Spinner size="sm" decorative />
          </span>
        ) : (
          <>
            {model}
            {dictate && <Button variant="ghost" size="sm" icon={<RiVoiceprintLine />} aria-label={dictateLabel} onClick={onDictate} disabled={disabled} />}
          </>
        )}
        {sendButton}
      </span>
    </div>
  );
}

/** Figma "AI Chat Composer Token": a /command, e.g. in a sent message. */
export function AIChatComposerToken({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return <mark {...rest} className={cx('ds-ai-composer-token', className)} />;
}
