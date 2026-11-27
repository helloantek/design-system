import { RiArrowDownSLine, RiArrowRightLine, RiArrowRightSLine, RiArrowUpDownLine, RiCloseLine, RiFileTextLine } from '@remixicon/react';
import { useId, useState, type CSSProperties, type HTMLAttributes, type ReactNode, type Ref } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Spinner } from '../Spinner';
import { contextCells, formatTokens } from '@helloantek/ds-core';

// Styles live in @helloantek/ds-css (classes ds-context-window*); this component only renders the markup.

/** One thing in a part that can be taken out of the context, e.g. a file. */
export interface ContextWindowItem {
  id: string;
  label: ReactNode;
  tokens: number;
  /** Default: a file icon. */
  icon?: ReactNode;
}

/** One part of what fills the context: the system prompt, tools, files, the conversation, memory… */
export interface ContextWindowPart {
  id: string;
  label: ReactNode;
  tokens: number;
  /** Its colour in the grid and the swatch (any CSS colour). Default: the next of foreground, muted foreground, blue, light blue, green. */
  color?: string;
  /** What is in it, to remove from (`onRemoveItem`); the part opens into this list. */
  items?: ContextWindowItem[];
  /** Compact: squeezes this part (the conversation) into a summary. */
  onCompact?: () => void;
  /** While it is being compacted. */
  compacting?: boolean;
}

export interface ContextWindowLabels {
  title: string;
  /** "of 200K tokens". */
  of: (total: string) => string;
  /** "63.6K left". */
  left: (left: string) => string;
  /** After the tokens left when nearly full. */
  nearlyFull: string;
  newChat: string;
  compact: string;
  compacting: string;
  /** The remove button of an item: "Remove refund-policy.md". */
  remove: (label: string) => string;
  /** The list's name. */
  parts: string;
}

const LABELS: ContextWindowLabels = {
  title: 'Context window',
  of: (total) => `of ${total} tokens`,
  left: (left) => `${left} left`,
  nearlyFull: 'it will start forgetting soon',
  newChat: 'New chat',
  compact: 'Compact',
  compacting: 'Compacting…',
  remove: (label) => `Remove ${label}`,
  parts: 'What fills the context',
};

const COLORS = ['var(--ds-foreground)', 'var(--ds-muted-foreground)', 'var(--ds-palette-blue-solid)', 'var(--ds-palette-blue-tint-strong)', 'var(--ds-palette-green-solid)'];

// The maths is ds-core's, shared with the other adapters; re-exported here as before.
export { contextCells, formatTokens };

export interface ContextWindowProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  ref?: Ref<HTMLElement>;
  /** The size of the window in tokens, e.g. 200000. */
  total: number;
  /** What fills it, in order. */
  parts: ContextWindowPart[];
  /** The model, as a Badge in the header, e.g. "sonnet-4-5". */
  model?: ReactNode;
  /** The model's logo in that Badge. */
  modelIcon?: ReactNode;
  /** From this share of the window used (0–1) it turns amber and New chat comes first. Default 0.85. */
  warnAt?: number;
  /** New chat, at the bottom. */
  onNewChat?: () => void;
  /** Called with the part and the item to remove. */
  onRemoveItem?: (partId: string, itemId: string) => void;
  /** The cells of the grid, each one an equal slice of the window. Default 200. */
  cells?: number;
  /** How token counts are written. Default `formatTokens`: "136.4K". */
  format?: (tokens: number) => string;
  /** Texts, for other languages. */
  labels?: Partial<ContextWindowLabels>;
}

/**
 * What fills the model's context: how much is used of how much, a grid where every cell is a slice of the window
 * coloured by what fills it, and each part with its size. A part with items (files) opens into a list to remove
 * from; Compact squeezes the conversation into a summary; close to full it turns amber and offers a new chat.
 */
export function ContextWindow({
  total,
  parts,
  model,
  modelIcon,
  warnAt = 0.85,
  onNewChat,
  onRemoveItem,
  cells = 200,
  format = formatTokens,
  labels = {},
  className,
  ...rest
}: ContextWindowProps) {
  const t = { ...LABELS, ...labels };
  const id = useId();
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const used = parts.reduce((sum, part) => sum + part.tokens, 0);
  const left = Math.max(0, total - used);
  const share = total > 0 ? used / total : 0;
  const full = share >= warnAt;
  const colorOf = (part: ContextWindowPart, index: number) => part.color ?? COLORS[index % COLORS.length];
  const counts = contextCells(
    parts.map((part) => part.tokens),
    total,
    cells,
  );

  return (
    <section {...rest} aria-labelledby={rest['aria-label'] === undefined ? (rest['aria-labelledby'] ?? `${id}-title`) : undefined} className={['ds-context-window', full && 'ds-context-window--full', className].filter(Boolean).join(' ')}>
      <header className="ds-context-window__header">
        <h3 id={`${id}-title`} className="ds-context-window__title">
          {t.title}
        </h3>
        {model !== undefined && (
          <Badge variant="tint" icon={modelIcon}>
            {model}
          </Badge>
        )}
      </header>
      <p className="ds-context-window__used">
        <span className="ds-context-window__amount">{format(used)}</span>
        <span className="ds-context-window__of">{t.of(format(total))}</span>
        <Badge variant="tint" color={full ? 'amber' : 'neutral'} className="ds-context-window__share">
          {`${Math.round(share * 100)}%`}
        </Badge>
      </p>
      <div className="ds-context-window__grid" aria-hidden>
        {counts.flatMap((count, index) =>
          Array.from({ length: count }, (_, k) => (
            <span key={`${index}-${k}`} className={index < parts.length ? 'ds-context-window__cell' : 'ds-context-window__cell ds-context-window__cell--free'} style={index < parts.length ? ({ '--context-color': colorOf(parts[index], index) } as CSSProperties) : undefined} />
          )),
        )}
      </div>
      <ul className="ds-context-window__parts" aria-label={t.parts}>
        {parts.map((part, index) => {
          const hasItems = part.items !== undefined && part.items.length > 0;
          const isOpen = hasItems && !!open[part.id];
          const listId = `${id}-${part.id}-items`;
          return (
            <li key={part.id} className="ds-context-window__part" style={{ '--context-color': colorOf(part, index) } as CSSProperties}>
              <div className="ds-context-window__row">
                <span className="ds-context-window__swatch" aria-hidden />
                {hasItems ? (
                  <button type="button" className="ds-context-window__toggle" aria-expanded={isOpen} aria-controls={listId} onClick={() => setOpen((o) => ({ ...o, [part.id]: !isOpen }))}>
                    <span className="ds-context-window__label">{part.label}</span>
                    {isOpen ? <RiArrowDownSLine aria-hidden /> : <RiArrowRightSLine aria-hidden />}
                  </button>
                ) : (
                  <span className="ds-context-window__label">{part.label}</span>
                )}
                {part.compacting ? (
                  <span className="ds-context-window__compacting" role="status">
                    <Spinner size="sm" decorative />
                    {t.compacting}
                  </span>
                ) : (
                  part.onCompact && (
                    <Button variant="ghost" size="xs" leadingIcon={<RiArrowUpDownLine />} onClick={part.onCompact}>
                      {t.compact}
                    </Button>
                  )
                )}
                <span className="ds-context-window__size">{format(part.tokens)}</span>
              </div>
              {hasItems && (
                <ul id={listId} className="ds-context-window__items" hidden={!isOpen}>
                  {part.items!.map((item) => (
                    <li key={item.id} className="ds-context-window__item">
                      <span className="ds-context-window__item-icon" aria-hidden>
                        {item.icon ?? <RiFileTextLine />}
                      </span>
                      <span className="ds-context-window__item-label">{item.label}</span>
                      <span className="ds-context-window__item-size">{format(item.tokens)}</span>
                      {onRemoveItem && (
                        <Button variant="ghost" size="xs" icon={<RiCloseLine />} aria-label={t.remove(typeof item.label === 'string' ? item.label : item.id)} onClick={() => onRemoveItem(part.id, item.id)} />
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <footer className="ds-context-window__footer">
        <span className="ds-context-window__left">
          {t.left(format(left))}
          {full ? ` · ${t.nearlyFull}` : ''}
        </span>
        {onNewChat && (
          <Button variant={full ? 'default' : 'outline'} size="xs" trailingIcon={<RiArrowRightLine />} onClick={onNewChat}>
            {t.newChat}
          </Button>
        )}
      </footer>
    </section>
  );
}
