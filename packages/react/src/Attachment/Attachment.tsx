import type { HTMLAttributes, HTMLAttributeAnchorTarget, ReactNode, Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-attachment*); these components only render the markup.

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(' ');

/** Figma "Type": a row (`file`, `file-sm`), a square card (`card`) or a picture (`image`). */
export type AttachmentType = 'file' | 'file-sm' | 'card' | 'image';
/** Figma "State" (Hover comes from the pointer). */
export type AttachmentState = 'done' | 'uploading' | 'error';

export interface AttachmentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  ref?: Ref<HTMLDivElement>;
  /** Figma Type (default `file`). */
  type?: AttachmentType;
  /** Figma State (default `done`). */
  state?: AttachmentState;
  /** Figma "Title": the file name, cut with an ellipsis. */
  title: ReactNode;
  /** Figma "Size": the second line once uploaded (a size, a link's address). Not shown in `file-sm`. */
  description?: ReactNode;
  /** Figma "Error": the message when `state="error"`. */
  error?: ReactNode;
  /** The second line while uploading (default "Uploading…"). */
  uploadingLabel?: ReactNode;
  /** Figma "Type label" (`card`), e.g. "PDF" or a link's host. */
  typeLabel?: ReactNode;
  /** Figma "Icon" (`file`, `file-sm`): a file icon, 32 px (20 px in `file-sm`). */
  icon?: ReactNode;
  /** The picture (`image`), shown once uploaded. It is decorative: the title names the file. */
  src?: string;
  /** Opens the file or link: the title becomes a link that covers the attachment. */
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  /** Figma "actions": ghost xs icon buttons (download, remove, retry), each with an `aria-label`. */
  actions?: ReactNode;
}

/** A plain document, used when no `icon` is given. */
const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 1.5h8.3L19.5 6.6v14.4a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 21V3A1.5 1.5 0 0 1 6 1.5Z" fill="var(--ds-fill-3)" />
    <path d="M14.3 1.5v5.1h5.2" fill="var(--ds-fill-2)" />
  </svg>
);

/** Figma "Attachment": a file added to a message or a composer. */
export function Attachment({ type = 'file', state = 'done', title, description, error, uploadingLabel = 'Uploading…', typeLabel, icon, src, href, target, actions, className, style, ...rest }: AttachmentProps) {
  const row = type === 'file' || type === 'file-sm';
  const picture = type === 'image' && state === 'done' && src;
  const second = state === 'error' ? error : state === 'uploading' ? uploadingLabel : description;
  return (
    <div
      {...rest}
      className={cx('ds-attachment', `ds-attachment--${type}`, picture && 'ds-attachment--picture', state !== 'done' && `ds-attachment--${state}`, className)}
      style={picture ? { backgroundImage: `url("${src}")`, ...style } : style}
      aria-busy={state === 'uploading' || undefined}
    >
      {row && <span className="ds-attachment__media">{icon ?? <FileIcon />}</span>}
      {type === 'card' && typeLabel !== undefined && <span className="ds-attachment__type">{typeLabel}</span>}
      <span className="ds-attachment__body">
        {href ? (
          <a className="ds-attachment__title" href={href} target={target} rel={target === '_blank' ? 'noreferrer' : undefined}>
            {title}
          </a>
        ) : (
          <span className="ds-attachment__title">{title}</span>
        )}
        {type !== 'file-sm' && second !== undefined && <span className="ds-attachment__description">{second}</span>}
      </span>
      {actions !== undefined && <span className="ds-attachment__actions">{actions}</span>}
    </div>
  );
}

export interface AttachmentGroupProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** `row` (default; scrolls sideways when it overflows) or `column`. */
  direction?: 'row' | 'column';
  /** Name the group, e.g. "Attachments". */
  'aria-label'?: string;
  children: ReactNode;
}

/** Attachments side by side or stacked, 8 px apart (the "Group" demo). */
export function AttachmentGroup({ direction = 'row', className, ...rest }: AttachmentGroupProps) {
  return <div role="group" {...rest} className={cx('ds-attachment-group', direction === 'column' && 'ds-attachment-group--column', className)} />;
}
