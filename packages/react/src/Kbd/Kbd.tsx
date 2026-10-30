import type { HTMLAttributes, ReactNode, Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-kbd*); this component only renders the markup.

/** Figma "Variant": a muted key, or a light key for dark surfaces such as a Tooltip. */
export type KbdVariant = 'default' | 'inverted';

/** Figma "Size": 20 or 16 px. */
export type KbdSize = 'default' | 'sm';

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  ref?: Ref<HTMLElement>;
  /** Figma Variant. */
  variant?: KbdVariant;
  /** Figma Size. */
  size?: KbdSize;
  /** Figma "Icon": a 12 px icon in the key colour, before the key text (or alone). */
  icon?: ReactNode;
  /**
   * What screen readers say for a symbol, e.g. "Command" for ⌘ or "Enter" for ↵. The symbol is then hidden from
   * them; plain keys ("K", "Space") need no label.
   */
  label?: string;
  /** Figma "Key": the key's text. */
  children?: ReactNode;
}

/** Figma "Kbd": one keyboard key. */
export function Kbd({ variant = 'default', size = 'default', icon, label, className, children, ...rest }: KbdProps) {
  return (
    <kbd {...rest} className={['ds-kbd', variant === 'inverted' && 'ds-kbd--inverted', size === 'sm' && 'ds-kbd--sm', className].filter(Boolean).join(' ')}>
      {label === undefined ? (
        <>
          {icon}
          {children}
        </>
      ) : (
        <>
          <span aria-hidden style={{ display: 'contents' }}>
            {icon}
            {children}
          </span>
          <span className="ds-kbd__label">{label}</span>
        </>
      )}
    </kbd>
  );
}

export interface KbdGroupProps extends HTMLAttributes<HTMLElement> {
  ref?: Ref<HTMLElement>;
  /** Figma "keys": the `Kbd`s of one shortcut. */
  children: ReactNode;
}

/** Figma "Kbd Group": the keys of one shortcut, 2 px apart (a `<kbd>` of `<kbd>`s, as HTML marks a key combination). */
export function KbdGroup({ className, children, ...rest }: KbdGroupProps) {
  return (
    <kbd {...rest} className={['ds-kbd-group', className].filter(Boolean).join(' ')}>
      {children}
    </kbd>
  );
}
