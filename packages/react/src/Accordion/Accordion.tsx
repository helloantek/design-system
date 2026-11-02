import { createContext, useContext, useId, useState, type ButtonHTMLAttributes, type HTMLAttributes, type KeyboardEvent, type ReactNode } from 'react';

// Styles live in @helloantek/ds-css (classes ds-accordion*). WAI-ARIA accordion: each header is a heading holding a
// button with aria-expanded / aria-controls; its panel is a role="region" labelled by the button. Up / Down, Home and
// End move between the headers.

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

/** `card` is the Figma "Accordion" component; `flush` and `separated` are its "Accordion" and "Separated items" demos. */
export type AccordionVariant = 'card' | 'flush' | 'separated';

interface AccordionContext {
  isOpen: (value: string) => boolean;
  toggle: (value: string) => void;
  headingLevel: 2 | 3 | 4 | 5 | 6;
  base: string;
}

interface ItemContext {
  value: string;
  open: boolean;
  disabled: boolean;
  triggerId: string;
  contentId: string;
}

const Context = createContext<AccordionContext | null>(null);
const Item = createContext<ItemContext | null>(null);

function useAccordion(component: string) {
  const ctx = useContext(Context);
  if (!ctx) throw new Error(`${component} must be inside Accordion`);
  return ctx;
}

function useItem(component: string) {
  const ctx = useContext(Item);
  if (!ctx) throw new Error(`${component} must be inside AccordionItem`);
  return ctx;
}

interface AccordionBaseProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'> {
  /** Default `card` (the Figma component). */
  variant?: AccordionVariant;
  /** The level of the heading around each trigger (default 3). */
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
}

export interface AccordionSingleProps extends AccordionBaseProps {
  /** One item open at a time (default). */
  type?: 'single';
  /** The open item's value, '' for none (controlled). */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** The open item closes when its trigger is pressed again (default true). */
  collapsible?: boolean;
}

export interface AccordionMultipleProps extends AccordionBaseProps {
  /** Any number of items open. */
  type: 'multiple';
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  collapsible?: never;
}

export type AccordionProps = AccordionSingleProps | AccordionMultipleProps;

/** A list of AccordionItems: Sort UI 2.0 "Accordion". */
export function Accordion(props: AccordionProps) {
  const { type, value: valueProp, defaultValue, onValueChange, collapsible, variant = 'card', headingLevel = 3, className, children, onKeyDown, ...rest } = props;
  const multiple = type === 'multiple';
  const [uncontrolled, setUncontrolled] = useState<string | string[]>(defaultValue ?? (multiple ? [] : ''));
  const value = valueProp ?? uncontrolled;
  const base = useId();

  const isOpen = (v: string) => (Array.isArray(value) ? value.includes(v) : value === v);
  const toggle = (v: string) => {
    let next: string | string[];
    if (Array.isArray(value)) next = value.includes(v) ? value.filter((x) => x !== v) : [...value, v];
    else if (value === v) {
      if (collapsible === false) return;
      next = '';
    } else next = v;
    if (valueProp === undefined) setUncontrolled(next);
    (onValueChange as ((v: string | string[]) => void) | undefined)?.(next);
  };

  // Up / Down (wrapping), Home and End move focus between the enabled triggers of this accordion.
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    const target = event.target as HTMLElement;
    if (event.defaultPrevented || !target.matches('.ds-accordion__trigger')) return;
    const triggers = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('.ds-accordion__trigger')).filter(
      (el) => !el.disabled && el.closest('.ds-accordion') === event.currentTarget,
    );
    const i = triggers.indexOf(target as HTMLButtonElement);
    const to = { ArrowDown: (i + 1) % triggers.length, ArrowUp: (i - 1 + triggers.length) % triggers.length, Home: 0, End: triggers.length - 1 }[event.key];
    if (to === undefined || i < 0) return;
    event.preventDefault();
    triggers[to].focus();
  };

  return (
    <Context.Provider value={{ isOpen, toggle, headingLevel, base }}>
      <div {...rest} className={cx('ds-accordion', variant !== 'card' && `ds-accordion--${variant}`, className)} onKeyDown={handleKeyDown}>
        {children}
      </div>
    </Context.Provider>
  );
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Names the item in `value`. */
  value: string;
  /** Figma State=Disabled. */
  disabled?: boolean;
  /** Figma Divider: the line under the item (default true; the last item never has one). */
  divider?: boolean;
  children: ReactNode;
}

/** One header and its panel: Figma "Accordion Item". */
export function AccordionItem({ value, disabled = false, divider = true, className, children, ...rest }: AccordionItemProps) {
  const { isOpen, base } = useAccordion('AccordionItem');
  const open = isOpen(value);
  const safe = value.replace(/[^\w-]/g, '_');
  return (
    <Item.Provider value={{ value, open, disabled, triggerId: `${base}-${safe}-trigger`, contentId: `${base}-${safe}-content` }}>
      <div {...rest} className={cx('ds-accordion__item', !divider && 'ds-accordion__item--no-divider', className)} data-state={open ? 'open' : 'closed'}>
        {children}
      </div>
    </Item.Provider>
  );
}

// Figma "chevron-down" at 17.33 px: the 16 px icon scaled 13/12, its 1.25 px stroke kept.
const chevron = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.154} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 6l4 4 4-4" />
  </svg>
);

export interface AccordionTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** An icon before the title ("With icons" demo). */
  icon?: ReactNode;
  children: ReactNode;
}

/** The item's header button, inside a heading. */
export function AccordionTrigger({ icon, className, onClick, children, ...rest }: AccordionTriggerProps) {
  const { toggle, headingLevel } = useAccordion('AccordionTrigger');
  const { value, open, disabled, triggerId, contentId } = useItem('AccordionTrigger');
  const Heading = `h${headingLevel}` as const;
  return (
    <Heading className="ds-accordion__heading">
      <button
        type="button"
        id={triggerId}
        aria-expanded={open}
        aria-controls={contentId}
        disabled={disabled}
        {...rest}
        className={cx('ds-accordion__trigger', className)}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) toggle(value);
        }}
      >
        <span className="ds-accordion__title">
          {icon}
          {children}
        </span>
        <span className="ds-accordion__chevron">{chevron}</span>
      </button>
    </Heading>
  );
}

/** The item's panel: a region labelled by its trigger. It animates its height open and closed, and is hidden
 * (visibility) once collapsed, so closed content leaves the tab order and the accessibility tree. */
export function AccordionContent({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const { open, triggerId, contentId } = useItem('AccordionContent');
  return (
    <div id={contentId} role="region" aria-labelledby={triggerId} className="ds-accordion__panel" data-state={open ? 'open' : 'closed'}>
      <div className="ds-accordion__clip">
        <div {...rest} className={cx('ds-accordion__content', className)}>
          {children}
        </div>
      </div>
    </div>
  );
}
