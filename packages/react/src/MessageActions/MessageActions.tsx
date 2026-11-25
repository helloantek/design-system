import { RiArrowLeftSLine, RiArrowRightSLine, RiCheckLine, RiFileCopyLine, RiPauseLine, RiRefreshLine, RiThumbDownLine, RiThumbUpLine, RiVolumeUpLine } from '@remixicon/react';
import { useEffect, useRef, useState, type HTMLAttributes, type MouseEvent, type ReactNode, type Ref } from 'react';
import { Button } from '../Button';
import { Popover, PopoverClose } from '../Popover';
import { Toggle } from '../Toggle';

// Styles live in @helloantek/ds-css (classes ds-message-actions*); this component only renders the markup.

/** How the reader rated the answer. */
export type MessageRating = 'up' | 'down' | null;

export interface MessageActionsLabels {
  group: string;
  copy: string;
  copied: string;
  regenerate: string;
  previous: string;
  next: string;
  /** "2 / 3". */
  version: (current: number, total: number) => string;
  /** Read by screen readers for the version: "Version 2 of 3". */
  versionName: (current: number, total: number) => string;
  good: string;
  bad: string;
  whatWasWrong: string;
  readAloud: string;
}

const LABELS: MessageActionsLabels = {
  group: 'Message actions',
  copy: 'Copy',
  copied: 'Copied',
  regenerate: 'Regenerate',
  previous: 'Previous version',
  next: 'Next version',
  version: (current, total) => `${current} / ${total}`,
  versionName: (current, total) => `Version ${current} of ${total}`,
  good: 'Good response',
  bad: 'Bad response',
  whatWasWrong: 'What was wrong?',
  readAloud: 'Read aloud',
};

/** The reasons thumbs down offers by default. */
export const MESSAGE_FEEDBACK_REASONS = ['Not true', 'Not helpful', 'Too long', 'Other…'];

export interface MessageActionsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  ref?: Ref<HTMLDivElement>;
  /** The text Copy puts on the clipboard. */
  copyText?: string;
  /** Called on Copy (after `copyText` is written, if given). The icon is a green check for 2 s either way. */
  onCopy?: () => void;
  /** Regenerate. Without it there is no Regenerate. */
  onRegenerate?: () => void;
  /** With more than one version: ‹ 2 / 3 › between them (1-based). */
  version?: number;
  versions?: number;
  onVersionChange?: (version: number) => void;
  /** Thumbs up or down; leave out for uncontrolled. Pressing the pressed one again takes the rating back. */
  rating?: MessageRating;
  defaultRating?: MessageRating;
  onRatingChange?: (rating: MessageRating) => void;
  /** Thumbs down asks what was wrong with these; `[]` asks nothing. */
  reasons?: string[];
  onReason?: (reason: string) => void;
  /** Read aloud. Without it there is no Read aloud. */
  onReadAloudChange?: (reading: boolean) => void;
  /** While it reads: a wave, `readTime` and Pause. */
  reading?: boolean;
  /** How far it has read: "0:07". */
  readTime?: ReactNode;
  /** Other actions at the end (Ghost Buttons, size sm, icon only). */
  children?: ReactNode;
  /** Texts, for other languages. */
  labels?: Partial<MessageActionsLabels>;
}

/**
 * The quiet bar under an AI message: Copy, Regenerate (with ‹ 2 / 3 › between versions), thumbs up and down, Read
 * aloud. Copy turns into a check for 2 s; thumbs down asks what was wrong; reading aloud shows a wave and Pause.
 */
export function MessageActions({
  copyText,
  onCopy,
  onRegenerate,
  version,
  versions,
  onVersionChange,
  rating: ratingProp,
  defaultRating = null,
  onRatingChange,
  reasons = MESSAGE_FEEDBACK_REASONS,
  onReason,
  onReadAloudChange,
  reading = false,
  readTime,
  children,
  labels = {},
  className,
  ...rest
}: MessageActionsProps) {
  const t = { ...LABELS, ...labels };
  const [uncontrolled, setUncontrolled] = useState<MessageRating>(defaultRating);
  const rating = ratingProp === undefined ? uncontrolled : ratingProp;
  const [asking, setAsking] = useState(false);
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const rate = (next: MessageRating) => {
    if (ratingProp === undefined) setUncontrolled(next);
    onRatingChange?.(next);
    setAsking(next === 'down' && reasons.length > 0);
  };

  const copy = () => {
    // The check shows at once: the clipboard can answer late, never (no permission yet) or with a refusal.
    if (copyText !== undefined) navigator.clipboard?.writeText(copyText).catch(() => {});
    onCopy?.();
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  const showVersions = version !== undefined && versions !== undefined && versions > 1;
  const down = (
    <Toggle
      size="sm"
      icon={<RiThumbDownLine />}
      aria-label={t.bad}
      pressed={rating === 'down'}
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        // The rating and the Popover follow the rating, not each click.
        event.preventDefault();
        rate(rating === 'down' ? null : 'down');
      }}
    />
  );

  return (
    <div {...rest} role="group" aria-label={rest['aria-label'] ?? t.group} className={['ds-message-actions', className].filter(Boolean).join(' ')}>
      <Button variant="ghost" size="sm" icon={copied ? <RiCheckLine /> : <RiFileCopyLine />} aria-label={copied ? t.copied : t.copy} className={copied ? 'ds-message-actions__copied' : undefined} onClick={copy} />
      {onRegenerate && <Button variant="ghost" size="sm" icon={<RiRefreshLine />} aria-label={t.regenerate} onClick={onRegenerate} />}
      {showVersions && (
        <span className="ds-message-actions__versions" role="group" aria-label={t.versionName(version, versions)}>
          <Button variant="ghost" size="sm" icon={<RiArrowLeftSLine />} aria-label={t.previous} disabled={version <= 1} onClick={() => onVersionChange?.(version - 1)} />
          <span className="ds-message-actions__version" aria-hidden>
            {t.version(version, versions)}
          </span>
          <Button variant="ghost" size="sm" icon={<RiArrowRightSLine />} aria-label={t.next} disabled={version >= versions} onClick={() => onVersionChange?.(version + 1)} />
        </span>
      )}
      <Toggle size="sm" icon={<RiThumbUpLine />} aria-label={t.good} pressed={rating === 'up'} onPressedChange={(on) => rate(on ? 'up' : null)} />
      {reasons.length > 0 ? (
        <Popover trigger={down} title={t.whatWasWrong} align="start" open={asking} onOpenChange={(open) => !open && setAsking(false)}>
          <div className="ds-message-actions__reasons">
            {reasons.map((reason) => (
              <PopoverClose key={reason}>
                <Button variant="outline" size="sm" onClick={() => onReason?.(reason)}>
                  {reason}
                </Button>
              </PopoverClose>
            ))}
          </div>
        </Popover>
      ) : (
        down
      )}
      {onReadAloudChange && (
        <>
          <Toggle
            size="sm"
            icon={reading ? <RiPauseLine /> : <RiVolumeUpLine />}
            aria-label={t.readAloud}
            pressed={reading}
            className={reading ? 'ds-message-actions__reading' : undefined}
            onPressedChange={onReadAloudChange}
          />
          {reading && (
            <>
              <span className="ds-message-actions__wave" aria-hidden>
                {Array.from({ length: 8 }, (_, i) => (
                  <span key={i} />
                ))}
              </span>
              {readTime !== undefined && <span className="ds-message-actions__time">{readTime}</span>}
            </>
          )}
        </>
      )}
      {children}
      <span className="ds-message-actions__status" role="status">
        {copied ? t.copied : ''}
      </span>
    </div>
  );
}
