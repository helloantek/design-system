import { cloneElement, useEffect, useId, useRef, useState, type FocusEvent, type HTMLAttributes, type KeyboardEvent, type ReactElement, type ReactNode, type Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-tooltip*); this component renders the markup and the WAI-ARIA
// tooltip behaviour (https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/): the trigger is described by the tooltip,
// which shows on hover (after a short delay) or keyboard focus, stays while the pointer is over it, and Escape hides it.

/** Figma "Side": where the tooltip sits around its trigger. */
export type TooltipSide = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** Figma "Label": short help for the trigger. It describes the trigger, so the trigger still needs its own name. */
  content: ReactNode;
  /** The element the tooltip describes; it must take focus (a Button, a link…) and accept the handlers. */
  children: ReactElement<HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> }>;
  /** Figma Side (default `top`). */
  side?: TooltipSide;
  /** Figma "Leading slot": a 16 px icon before the label, using `currentColor`. */
  icon?: ReactNode;
  /** Figma "Trailing slot" with a Kbd Group: the keys of the trigger's shortcut, e.g. `['⌘', 'K']`. */
  shortcut?: string[];
  /** Milliseconds the pointer rests on the trigger before the tooltip shows (keyboard focus shows it at once). */
  delay?: number;
  /** Open state (controlled), e.g. for documentation. */
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Class for the tooltip (Figma "Tooltip"). */
  className?: string;
}

/** Figma "Tooltip". */
export function Tooltip({ content, children, side = 'top', icon, shortcut, delay = 500, open: openProp, defaultOpen = false, onOpenChange, className }: TooltipProps) {
  const id = useId();
  const [uncontrolled, setUncontrolled] = useState(defaultOpen);
  const open = openProp ?? uncontrolled;
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const setOpen = (next: boolean) => {
    clearTimeout(timer.current);
    if (next === open) return;
    if (openProp === undefined) setUncontrolled(next);
    onOpenChange?.(next);
  };
  useEffect(() => () => clearTimeout(timer.current), []);

  // Escape hides it wherever focus is, as the pointer may be resting on the trigger without focusing it.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  const { onFocus, onBlur, onKeyDown } = children.props;
  const describedBy = [children.props['aria-describedby'], id].filter(Boolean).join(' ');

  return (
    <span
      className="ds-tooltip-anchor"
      onMouseEnter={() => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setOpen(true), delay);
      }}
      onMouseLeave={() => setOpen(false)}
    >
      {cloneElement(children, {
        'aria-describedby': describedBy,
        onFocus: (event: FocusEvent<HTMLElement>) => {
          onFocus?.(event);
          // Keyboard focus only: a click also focuses the button, and the tooltip would then cover the next step.
          if (event.currentTarget.matches(':focus-visible')) setOpen(true);
        },
        onBlur: (event: FocusEvent<HTMLElement>) => {
          onBlur?.(event);
          setOpen(false);
        },
        onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
          onKeyDown?.(event);
          // Escape on the trigger hides only the tooltip, not e.g. a dialog around it.
          if (event.key === 'Escape' && open) {
            event.stopPropagation();
            setOpen(false);
          }
        },
      })}
      <span id={id} role="tooltip" className={['ds-tooltip', `ds-tooltip--${side}`, className].filter(Boolean).join(' ')} hidden={!open}>
        {icon && (
          <span className="ds-tooltip__icon" aria-hidden>
            {icon}
          </span>
        )}
        <span className="ds-tooltip__text">{content}</span>
        {shortcut && shortcut.length > 0 && (
          <span className="ds-tooltip__keys">
            {shortcut.map((key, i) => (
              <kbd key={i} className="ds-tooltip__kbd">
                {key}
              </kbd>
            ))}
          </span>
        )}
      </span>
    </span>
  );
}
