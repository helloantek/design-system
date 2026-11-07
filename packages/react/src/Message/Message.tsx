import { Children, createContext, isValidElement, useContext, type HTMLAttributes, type ReactNode, type Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-message*); these components only render the markup.

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(' ');

/** Figma "Align": start (theirs) or end (yours). */
export type MessageAlign = 'start' | 'end';

interface GroupSlot {
  align: MessageAlign;
  avatar?: ReactNode;
  last: boolean;
}
const Group = createContext<GroupSlot | null>(null);

export interface MessageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  ref?: Ref<HTMLDivElement>;
  /** Figma "bubbles": `Bubble`s, an attachment, a carousel… */
  children: ReactNode;
  /** Figma Align (default `start`, or the group's). */
  align?: MessageAlign;
  /** Figma "Avatar": the sender's `Avatar`, beside the last bubble. In a `MessageGroup` the group's avatar is used. */
  avatar?: ReactNode;
  /** Keep the avatar column empty (an earlier message of a group). */
  avatarSpace?: boolean;
  /** Figma "header": the sender's name (12/16 Medium). */
  sender?: ReactNode;
  /** A badge after the sender (the demos' team, e.g. "Payments"). */
  badge?: ReactNode;
  /** A custom header instead of `sender` and `badge`. */
  header?: ReactNode;
  /** Figma "footer" (Footer=True): the time, receipts, actions or a send error. */
  footer?: ReactNode;
}

/** Figma "Message": one sender's bubbles with their avatar, header and footer. */
export function Message({ children, align: alignProp, avatar: avatarProp, avatarSpace, sender, badge, header, footer, className, ...rest }: MessageProps) {
  const group = useContext(Group);
  const align = alignProp ?? group?.align ?? 'start';
  const avatar = group ? (group.last ? (avatarProp ?? group.avatar) : undefined) : avatarProp;
  const hasAvatarColumn = avatar !== undefined || avatarSpace || (group !== null && group.avatar !== undefined);
  const head = header ?? (sender !== undefined || badge !== undefined ? (
    <>
      {sender !== undefined && <span className="ds-message__sender">{sender}</span>}
      {badge}
    </>
  ) : undefined);
  return (
    <div {...rest} className={cx('ds-message', align === 'end' && 'ds-message--end', !hasAvatarColumn && 'ds-message--no-avatar', className)}>
      {head !== undefined && <div className="ds-message__header">{head}</div>}
      <div className="ds-message__avatar">{avatar}</div>
      <div className="ds-message__bubbles">{children}</div>
      {footer !== undefined && <div className="ds-message__footer">{footer}</div>}
    </div>
  );
}

export interface MessageGroupProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** `start` (default) or `end`, for every message in the group. */
  align?: MessageAlign;
  /** The sender's avatar, shown beside the last message; earlier ones keep its column empty. */
  avatar?: ReactNode;
  /** `Message`s from one sender. */
  children: ReactNode;
}

/** A run of messages from one sender, 8 px apart, with the avatar on the last one (the demos' "Message Group"). */
export function MessageGroup({ align = 'start', avatar, className, children, ...rest }: MessageGroupProps) {
  const items = Children.toArray(children).filter(isValidElement);
  return (
    <div {...rest} className={cx('ds-message-group', className)}>
      {items.map((child, i) => (
        <Group.Provider key={child.key ?? i} value={{ align, avatar, last: i === items.length - 1 }}>
          {child}
        </Group.Provider>
      ))}
    </div>
  );
}

export interface MessageTypingProps extends HTMLAttributes<HTMLParagraphElement> {
  ref?: Ref<HTMLParagraphElement>;
  /** E.g. "Olivia is typing…". */
  children: ReactNode;
}

/** The demos' typing line: a 12/16 Medium muted status with a light sweeping across it (still with reduced motion). */
export function MessageTyping({ className, ...rest }: MessageTypingProps) {
  return <p role="status" {...rest} className={cx('ds-message-typing', className)} />;
}
