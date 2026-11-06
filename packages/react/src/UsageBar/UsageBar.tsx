import { type CSSProperties, type HTMLAttributes, type LiHTMLAttributes, type ReactNode, type Ref } from 'react';
import { Tooltip, type TooltipProps } from '../Tooltip';

// Styles live in @helloantek/ds-css (classes ds-usage-bar*); these components only render the markup.

/** Figma "Variant" of a segment and of a legend item. */
export type UsageBarVariant = 'default' | 'muted' | 'primary' | 'dashed' | 'striped';

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(' ');

export interface UsageBarProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** The segments (`UsageBarSegment`). */
  children: ReactNode;
  /**
   * Figma "axis": the tick values under the bar, spread evenly from the start to the end (the first hangs right of
   * its tick, the last left, the rest are centred). Pass `UsageBarTick` elements instead for other alignments.
   */
  axis?: ReactNode[];
}

/** Figma "Usage Bar": how a whole splits into parts, as segments in one bar. Name it with `aria-label` or `aria-labelledby`. */
export function UsageBar({ children, axis, className, ...rest }: UsageBarProps) {
  return (
    <div role="group" {...rest} className={cx('ds-usage-bar', className)}>
      <div className="ds-usage-bar__track">{children}</div>
      {axis && axis.length > 0 && (
        <div className="ds-usage-bar__axis" aria-hidden>
          {axis.map((tick, i) =>
            isTick(tick) ? (
              tick
            ) : (
              <UsageBarTick key={i} align={i === 0 ? 'start' : i === axis.length - 1 ? 'end' : 'center'}>
                {tick}
              </UsageBarTick>
            ),
          )}
        </div>
      )}
    </div>
  );
}

const isTick = (node: ReactNode) => typeof node === 'object' && node !== null && 'type' in node && node.type === UsageBarTick;

export interface UsageBarSegmentProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children' | 'color'> {
  ref?: Ref<HTMLSpanElement>;
  /** Its share: segments split the bar in proportion to their values. */
  value: number;
  /** Figma Variant. */
  variant?: UsageBarVariant;
  /** Figma State=Active: highlighted (also shown on hover and keyboard focus when the segment is focusable). */
  active?: boolean;
  /** Fill of a Default segment, any CSS colour (the demos use `var(--ds-chart-1)` … `var(--ds-chart-9)`). */
  color?: string;
  /** What the segment stands for, read by screen readers, e.g. "Photos, 42 GB". Without it the segment is hidden from them. */
  label?: string;
  /** Text shown in a tooltip over the segment on hover and keyboard focus; makes the segment focusable. */
  tooltip?: ReactNode;
  /** Other Tooltip props (open, delay, side…). */
  tooltipProps?: Omit<TooltipProps, 'content' | 'children'>;
}

/** Figma "Usage Bar Segment": one part of the bar. */
export function UsageBarSegment({ value, variant = 'default', active, color, label, tooltip, tooltipProps, className, style, tabIndex, ...rest }: UsageBarSegmentProps) {
  const share = { '--usage-bar-value': Math.max(0, value) } as CSSProperties;
  const segment = (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      tabIndex={tabIndex ?? (tooltip !== undefined ? 0 : undefined)}
      {...rest}
      className={cx('ds-usage-bar__segment', variant !== 'default' && `ds-usage-bar__segment--${variant}`, active && 'ds-usage-bar__segment--active', className)}
      style={{ ...(tooltip === undefined && share), ...(color !== undefined && { '--usage-bar-color': color }), ...style } as CSSProperties}
    />
  );
  if (tooltip === undefined) return segment;
  return (
    <span className="ds-usage-bar__cell" style={share}>
      <Tooltip content={tooltip} {...tooltipProps}>
        {segment}
      </Tooltip>
    </span>
  );
}

/** Figma "Align" of a tick: where its value hangs from the tick line. */
export type UsageBarTickAlign = 'start' | 'center' | 'end';

export interface UsageBarTickProps extends HTMLAttributes<HTMLSpanElement> {
  ref?: Ref<HTMLSpanElement>;
  /** Figma Align (default centre). */
  align?: UsageBarTickAlign;
  /** Figma "Value". */
  children: ReactNode;
}

/** Figma "Usage Bar Tick": a line on the axis over its value. */
export function UsageBarTick({ align = 'center', children, className, ...rest }: UsageBarTickProps) {
  return (
    <span {...rest} className={cx('ds-usage-bar-tick', align !== 'center' && `ds-usage-bar-tick--${align}`, className)}>
      <span className="ds-usage-bar-tick__label">{children}</span>
    </span>
  );
}

export interface UsageBarLegendProps extends HTMLAttributes<HTMLUListElement> {
  ref?: Ref<HTMLUListElement>;
  /** Lay the items out in this many equal columns (the demos' lists with values) instead of one wrapping row. */
  columns?: number;
  children: ReactNode;
}

/** The legend of a usage bar: `UsageBarLegendItem`s in a row, or in columns. */
export function UsageBarLegend({ columns, className, style, ...rest }: UsageBarLegendProps) {
  return (
    <ul
      {...rest}
      className={cx('ds-usage-bar-legend', columns !== undefined && 'ds-usage-bar-legend--columns', className)}
      style={{ ...(columns !== undefined && { '--usage-bar-legend-columns': columns }), ...style } as CSSProperties}
    />
  );
}

export interface UsageBarLegendItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'color' | 'value'> {
  ref?: Ref<HTMLLIElement>;
  /** Figma Variant, matching its segment. */
  variant?: UsageBarVariant;
  /** Swatch colour of a Default item, matching its segment's `color`. */
  color?: string;
  /** Figma "Label". */
  children: ReactNode;
  /** An amount at the end of the item, e.g. "$1,200". */
  value?: ReactNode;
}

/** Figma "Usage Bar Legend Item": a swatch and what it stands for. */
export function UsageBarLegendItem({ variant = 'default', color, value, children, className, style, ...rest }: UsageBarLegendItemProps) {
  return (
    <li
      {...rest}
      className={cx('ds-usage-bar-legend__item', variant !== 'default' && `ds-usage-bar-legend__item--${variant}`, className)}
      style={{ ...(color !== undefined && { '--usage-bar-color': color }), ...style } as CSSProperties}
    >
      <span className="ds-usage-bar-legend__swatch" aria-hidden />
      <span className="ds-usage-bar-legend__label">{children}</span>
      {value !== undefined && <span className="ds-usage-bar-legend__value">{value}</span>}
    </li>
  );
}
