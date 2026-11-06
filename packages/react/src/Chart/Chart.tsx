import { useId, useState, type CSSProperties, type HTMLAttributes, type KeyboardEvent, type PointerEvent, type ReactNode, type Ref } from 'react';

// Styles live in @helloantek/ds-css (classes ds-chart*); these components compute the geometry and render the markup.

const cx = (...names: (string | false | undefined | null)[]) => names.filter(Boolean).join(' ');

/** The chart colours in the order the Figma demos use them (pink, orange, teal, …). */
const PALETTE = [7, 3, 5, 6, 1, 2, 4, 8, 9, 10];
/** Colour of the series at `index` when it has none of its own. */
export const chartColor = (index: number) => `var(--ds-chart-${PALETTE[index % PALETTE.length]})`;

/** One series of a cartesian chart: a numeric field of every row. */
export interface ChartSeries {
  /** The field of each row holding the series' values. */
  key: string;
  /** Its name in the tooltip, legend and data table. */
  label: string;
  /** Any CSS colour; defaults to the chart colours in turn (`var(--ds-chart-7)`, `var(--ds-chart-3)`, …). */
  color?: string;
}

/** A row of chart data: the category (`index` field) and one number per series. */
export type ChartRow = Record<string, string | number>;

const defaultFormat = (value: number) => value.toLocaleString('en-US');

/** The smallest "round" number (1, 2, 2.5 or 5 × 10ⁿ) at or above `value`. */
export function niceMax(value: number) {
  if (value <= 0) return 1;
  const power = 10 ** Math.floor(Math.log10(value));
  const step = [1, 2, 2.5, 5, 10].find((s) => s * power >= value - 1e-9) ?? 10;
  return step * power;
}

const clampPct = (v: number) => Math.min(100, Math.max(0, v));

/* ----------------------------------------------------------------------------------------------------------------
 * Parts
 * -------------------------------------------------------------------------------------------------------------- */

/** Figma "Swatch" Variant. */
export type ChartSwatchVariant = 'default' | 'line' | 'line-horizontal' | 'dashed' | 'dashed-horizontal';

export interface ChartSwatchProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  /** Figma Variant (default a 10 px square). */
  variant?: ChartSwatchVariant;
  /** Any CSS colour. */
  color?: string;
}

/** Figma "Swatch": the colour key of a series. Decorative: hidden from screen readers. */
export function ChartSwatch({ variant = 'default', color, className, style, ...rest }: ChartSwatchProps) {
  return (
    <span
      aria-hidden
      {...rest}
      className={cx('ds-chart-swatch', variant !== 'default' && `ds-chart-swatch--${variant}`, className)}
      style={{ ...(color !== undefined && { '--chart-color': color }), ...style } as CSSProperties}
    />
  );
}

/** One row of a chart tooltip. */
export interface ChartTooltipItem {
  label: ReactNode;
  value: ReactNode;
  color?: string;
  swatch?: ChartSwatchVariant;
}

export interface ChartTooltipProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** Figma "Label": what the tooltip is about, e.g. "July". */
  label?: ReactNode;
  /** One row per series: a swatch, its name and its value. */
  items: ChartTooltipItem[];
  /** Figma "Description": a note under a line. */
  description?: ReactNode;
}

/** Figma "Chart Tooltip": the values at a point of a chart. The charts render it on hover; it also works on its own. */
export function ChartTooltip({ label, items, description, className, ...rest }: ChartTooltipProps) {
  return (
    <div {...rest} className={cx('ds-chart-tooltip', className)}>
      {label !== undefined && <p className="ds-chart-tooltip__label">{label}</p>}
      <ul className="ds-chart-tooltip__rows">
        {items.map((item, i) => (
          <li key={i} className="ds-chart-tooltip__row">
            <ChartSwatch variant={item.swatch} color={item.color ?? chartColor(i)} />
            <span className="ds-chart-tooltip__name">{item.label}</span>
            <span className="ds-chart-tooltip__value">{item.value}</span>
          </li>
        ))}
      </ul>
      {description !== undefined && <p className="ds-chart-tooltip__description">{description}</p>}
    </div>
  );
}

/** One entry of a chart legend. */
export interface ChartLegendItem {
  label: ReactNode;
  color?: string;
  /** A total under the name (`variant="totals"`) or after it. */
  value?: ReactNode;
  swatch?: ChartSwatchVariant;
}

export interface ChartLegendProps extends HTMLAttributes<HTMLUListElement> {
  ref?: Ref<HTMLUListElement>;
  items: ChartLegendItem[];
  /** `inline` (default): 12/16 items in a row, for a chart header. `totals`: a card of columns with a total under each name. */
  variant?: 'inline' | 'totals';
  /** Columns of the `totals` card (default: one per item). */
  columns?: number;
}

/** The colour key of a chart, as in the Figma demos' headers ("Delivery", "Pickup") and "Totals" cards. */
export function ChartLegend({ items, variant = 'inline', columns, className, style, ...rest }: ChartLegendProps) {
  return (
    <ul
      {...rest}
      className={cx('ds-chart-legend', variant === 'totals' && 'ds-chart-legend--totals', className)}
      style={{ ...(variant === 'totals' && { '--chart-legend-columns': columns ?? items.length }), ...style } as CSSProperties}
    >
      {items.map((item, i) => (
        <li key={i} className="ds-chart-legend__item">
          <span className="ds-chart-legend__label">
            <ChartSwatch variant={item.swatch} color={item.color ?? chartColor(i)} />
            {item.label}
          </span>
          {item.value !== undefined && <span className="ds-chart-legend__value">{item.value}</span>}
        </li>
      ))}
    </ul>
  );
}

export interface ChartGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Intervals between the lines (default 6, so 7 lines). */
  lines?: number;
  /** Vertical lines (a horizontal bar chart's value grid). */
  vertical?: boolean;
}

/** Figma "Chart Grid": evenly spread 1 px lines of foreground at 5 %. */
export function ChartGrid({ lines = 6, vertical, className, ...rest }: ChartGridProps) {
  return (
    <div aria-hidden {...rest} className={cx('ds-chart__grid', vertical && 'ds-chart__grid--vertical', className)}>
      {Array.from({ length: lines + 1 }, (_, i) => (
        <span key={i} className="ds-chart__grid-line" />
      ))}
    </div>
  );
}

export interface ChartAxisProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma Axis: `x` under the plot, one tick per band; `y` beside it. */
  axis?: 'x' | 'y';
  /** The tick labels. */
  ticks: ReactNode[];
}

/** Figma "Chart Axis": category labels, one per band (the charts render it; it also works on its own). */
export function ChartAxis({ axis = 'x', ticks, className, ...rest }: ChartAxisProps) {
  return (
    <div aria-hidden {...rest} className={cx('ds-chart__axis', axis === 'x' ? 'ds-chart__axis--x' : 'ds-chart__axis--y ds-chart__axis--categories', className)}>
      {ticks.map((tick, i) => (
        <span key={i} className="ds-chart__tick">
          {tick}
        </span>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------------------------------------------------------
 * Cartesian charts
 * -------------------------------------------------------------------------------------------------------------- */

/** A dashed line at a value (Figma "Chart Reference Line"). */
export interface ChartReference {
  value: number;
  label?: ReactNode;
}

/** A value axis beside the plot. */
export interface ChartValueAxis {
  /** `start` (left) or `end` (right, as in the listening-time demo). */
  side?: 'start' | 'end';
  /** The values to label, e.g. `[0, 240]`. */
  ticks: number[];
  /** Text of a tick (defaults to `formatValue`). */
  format?: (value: number) => ReactNode;
}

interface CartesianProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  ref?: Ref<HTMLElement>;
  /** The rows, one per category or point. */
  data: ChartRow[];
  /** The field of each row naming its category, shown on the axis and in the tooltip. */
  index: string;
  /** The numeric fields to draw. */
  series: ChartSeries[];
  /** Plot height in px (default 256, as in the demos). */
  height?: number;
  /** The value at the top of the plot (default: a round number above the largest value). */
  max?: number;
  /** Intervals between grid lines (default 6); `0` hides the grid. */
  grid?: number;
  /** Dashed lines at given values. */
  references?: ChartReference[];
  /** A value axis beside the plot. */
  yAxis?: ChartValueAxis;
  /** Text of a value in the tooltip and table (default `1,234`). */
  formatValue?: (value: number, series: ChartSeries) => string;
  /** The tooltip heading for a row (default its `index` field). */
  tooltipLabel?: (row: ChartRow, index: number) => ReactNode;
  /** Show the values of the hovered or focused category in a tooltip (default true). */
  tooltip?: boolean;
  /** The highlighted category (controlled). */
  activeIndex?: number | null;
  /** The category highlighted at first. */
  defaultActiveIndex?: number | null;
  onActiveIndexChange?: (index: number | null) => void;
}

const num = (row: ChartRow, key: string) => {
  const v = row[key];
  return typeof v === 'number' ? v : Number(v) || 0;
};

function useActive(count: number, value: number | null | undefined, defaultValue: number | null | undefined, onChange?: (index: number | null) => void) {
  const [own, setOwn] = useState<number | null>(defaultValue ?? null);
  const active = value !== undefined ? value : own;
  const set = (next: number | null) => {
    const clamped = next === null ? null : Math.max(0, Math.min(count - 1, next));
    if (clamped === active) return;
    if (value === undefined) setOwn(clamped);
    onChange?.(clamped);
  };
  return [active !== null && active < count ? active : null, set] as const;
}

/** Keyboard and pointer handling of a plot: arrows move between categories, Escape clears. */
function plotHandlers(count: number, active: number | null, setActive: (i: number | null) => void, indexAt: (fraction: number) => number, vertical: boolean) {
  return {
    onPointerMove: (event: PointerEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const fraction = vertical ? (event.clientY - rect.top) / rect.height : (event.clientX - rect.left) / rect.width;
      setActive(indexAt(Math.min(1, Math.max(0, fraction))));
    },
    onPointerLeave: () => setActive(null),
    onBlur: () => setActive(null),
    onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => {
      const next: Record<string, number> = vertical ? { ArrowDown: 1, ArrowUp: -1 } : { ArrowRight: 1, ArrowLeft: -1 };
      const step = next[event.key];
      if (step) setActive(active === null ? (step > 0 ? 0 : count - 1) : active + step);
      else if (event.key === 'Home') setActive(0);
      else if (event.key === 'End') setActive(count - 1);
      else if (event.key === 'Escape' && active !== null) setActive(null);
      else return;
      event.preventDefault();
    },
  };
}

function ValueAxis({ axis, max, format }: { axis: ChartValueAxis; max: number; format: (v: number) => ReactNode }) {
  const side = axis.side ?? 'start';
  return (
    <div aria-hidden className={cx('ds-chart__axis ds-chart__axis--y ds-chart__axis--values', `ds-chart__axis--${side}`)}>
      {axis.ticks.map((value) => {
        const pct = clampPct((value / max) * 100);
        return (
          <span key={value} className={cx('ds-chart__tick', pct >= 100 && 'ds-chart__tick--top', pct <= 0 && 'ds-chart__tick--bottom')} style={{ '--chart-value': pct } as CSSProperties}>
            {(axis.format ?? format)(value)}
          </span>
        );
      })}
    </div>
  );
}

function References({ references, max, min = 0 }: { references?: ChartReference[]; max: number; min?: number }) {
  return (
    <>
      {references?.map((ref, i) => (
        <div key={i} aria-hidden className="ds-chart__reference" style={{ '--chart-value': clampPct(((ref.value - min) / (max - min)) * 100) } as CSSProperties}>
          {ref.label !== undefined && <span className="ds-chart__reference-label">{ref.label}</span>}
        </div>
      ))}
    </>
  );
}

function DataTable({ caption, data, index, series, format }: { caption?: string; data: ChartRow[]; index: string; series: ChartSeries[]; format: (v: number, s: ChartSeries) => string }) {
  return (
    <table className="ds-chart__table">
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr>
          <th scope="col">{index}</th>
          {series.map((s) => (
            <th key={s.key} scope="col">
              {s.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <th scope="row">{String(row[index])}</th>
            {series.map((s) => (
              <td key={s.key}>{format(num(row, s.key), s)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

interface FrameProps extends CartesianProps {
  className?: string;
  modifier?: string;
  plot: ReactNode;
  overlay: ReactNode;
  axis: ReactNode;
  categories?: ReactNode;
  maxValue: number;
  handlers: ReturnType<typeof plotHandlers> | null;
  active: number | null;
  tooltipId: string;
}

function Frame({ className, modifier, style, height, data, index, series, yAxis, max: _max, maxValue, formatValue, grid = 6, references, plot, overlay, axis, categories, handlers, active, tooltipId, 'aria-label': ariaLabel, 'aria-labelledby': labelledBy, ...rest }: FrameProps) {
  const format = formatValue ?? ((v: number) => defaultFormat(v));
  const vertical = modifier === 'horizontal';
  return (
    <figure {...omitChartProps(rest)} className={cx('ds-chart', modifier && `ds-chart--${modifier}`, className)} style={{ ...(height !== undefined && { '--chart-height': `${height}px` }), ...style } as CSSProperties}>
      <div className="ds-chart__body">
        {categories}
        {yAxis && (yAxis.side ?? 'start') === 'start' && <ValueAxis axis={yAxis} max={maxValue} format={defaultFormat} />}
        <div
          className="ds-chart__plot"
          role="group"
          aria-label={ariaLabel}
          aria-labelledby={labelledBy}
          aria-describedby={active !== null ? tooltipId : undefined}
          tabIndex={handlers ? 0 : undefined}
          {...handlers}
        >
          {grid > 0 && <ChartGrid lines={grid} vertical={vertical} />}
          {plot}
          <References references={references} max={maxValue} />
          {overlay}
        </div>
        {yAxis && yAxis.side === 'end' && <ValueAxis axis={yAxis} max={maxValue} format={defaultFormat} />}
      </div>
      {axis}
      <DataTable caption={ariaLabel} data={data} index={index} series={series} format={format} />
    </figure>
  );
}

// Props consumed by the charts, not passed on to the <figure>.
function omitChartProps<T extends Record<string, unknown>>(rest: T) {
  const out: Record<string, unknown> = { ...rest };
  for (const key of ['tooltipLabel', 'tooltip', 'activeIndex', 'defaultActiveIndex', 'onActiveIndexChange', 'stacked', 'layout', 'variant', 'labels', 'ticks', 'curve', 'dots', 'area', 'min']) delete out[key];
  return out as HTMLAttributes<HTMLElement>;
}

function Tooltip({ id, x, y, flip, label, items }: { id: string; x: number; y: number; flip: boolean; label: ReactNode; items: ChartTooltipItem[] }) {
  return (
    <ChartTooltip
      id={id}
      role="status"
      label={label}
      items={items}
      className={cx('ds-chart__tooltip', flip && 'ds-chart__tooltip--flip')}
      style={{ '--chart-x': x, '--chart-y': y } as CSSProperties}
    />
  );
}

export interface BarChartProps extends CartesianProps {
  /** Figma Orientation: `vertical` (default) columns, or `horizontal` bars with the categories on the left. */
  layout?: 'vertical' | 'horizontal';
  /** Figma Vaiant: `default` blocks, or `capped` (muted with a 2 px cap in the series colour). */
  variant?: 'default' | 'capped';
  /** Stack the series in one bar per category instead of side by side. */
  stacked?: boolean;
  /** Show each bar's value over it (the "Label" sample). */
  labels?: boolean;
}

/** A bar chart (Figma "Bar Chart" samples and the Revenue, listening-time, Orders, Sign-ups and destinations demos). */
export function BarChart(props: BarChartProps) {
  const { data, index, series: seriesProp, max, layout = 'vertical', variant = 'default', stacked, labels, tooltip = true, tooltipLabel, formatValue, activeIndex, defaultActiveIndex, onActiveIndexChange } = props;
  const tooltipId = useId();
  const series = seriesProp.map((s, i) => ({ ...s, color: s.color ?? chartColor(i) }));
  const horizontal = layout === 'horizontal';
  const totals = data.map((row) => (stacked ? series.reduce((sum, s) => sum + num(row, s.key), 0) : Math.max(0, ...series.map((s) => num(row, s.key)))));
  const maxValue = max ?? niceMax(Math.max(0, ...totals));
  const [active, setActive] = useActive(data.length, activeIndex, defaultActiveIndex, onActiveIndexChange);
  const format = formatValue ?? ((v: number) => defaultFormat(v));
  const handlers = tooltip ? plotHandlers(data.length, active, setActive, (f) => Math.min(data.length - 1, Math.floor(f * data.length)), horizontal) : null;

  const bands = (
    <div className="ds-chart__bands" aria-hidden>
      {data.map((row, i) => (
        <div key={i} className={cx('ds-chart__band', active === i && 'ds-chart__band--active')}>
          {stacked ? (
            <span className={cx('ds-chart__bar ds-chart__bar--stacked')} style={{ '--chart-value': clampPct((totals[i] / maxValue) * 100) } as CSSProperties}>
              {series.map((s) => (
                <span key={s.key} className="ds-chart__segment" style={{ '--chart-share': totals[i] ? (num(row, s.key) / totals[i]) * 100 : 0, '--chart-color': s.color } as CSSProperties} />
              ))}
            </span>
          ) : (
            series.map((s) => (
              <span key={s.key} className={cx('ds-chart__bar', variant === 'capped' && 'ds-chart__bar--capped')} style={{ '--chart-value': clampPct((num(row, s.key) / maxValue) * 100), '--chart-color': s.color } as CSSProperties}>
                {labels && <span className="ds-chart__bar-label">{format(num(row, s.key), s)}</span>}
              </span>
            ))
          )}
        </div>
      ))}
    </div>
  );

  let overlay: ReactNode = null;
  if (tooltip && active !== null) {
    const row = data[active];
    const center = ((active + 0.5) / data.length) * 100;
    const end = (totals[active] / maxValue) * 100;
    const x = horizontal ? clampPct(end) : center;
    const y = horizontal ? center : 100 - clampPct(end);
    overlay = <Tooltip id={tooltipId} x={x} y={y} flip={x > 60} label={tooltipLabel ? tooltipLabel(row, active) : String(row[index])} items={series.map((s) => ({ label: s.label, value: format(num(row, s.key), s), color: s.color }))} />;
  }

  const ticks = data.map((row) => String(row[index]));
  return (
    <Frame
      {...props}
      series={series}
      modifier={horizontal ? 'horizontal' : undefined}
      maxValue={maxValue}
      plot={bands}
      overlay={overlay}
      handlers={handlers}
      active={active}
      tooltipId={tooltipId}
      categories={horizontal ? <ChartAxis axis="y" ticks={ticks} /> : undefined}
      axis={horizontal ? null : <ChartAxis ticks={ticks} />}
    />
  );
}

/* Paths in a 100 × 100 box stretched over the plot. */
type Point = [number, number];

function linearPath(points: Point[]) {
  return points.map(([x, y], i) => `${i ? 'L' : 'M'}${x},${y}`).join('');
}

// Monotone cubic interpolation in x (Fritsch–Carlson): smooth, without overshooting the data.
function monotonePath(points: Point[]) {
  const n = points.length;
  if (n < 3) return linearPath(points);
  const slopes = points.slice(0, -1).map(([x, y], i) => (points[i + 1][1] - y) / (points[i + 1][0] - x));
  const tangents = points.map((_, i) => (i === 0 ? slopes[0] : i === n - 1 ? slopes[n - 2] : slopes[i - 1] * slopes[i] <= 0 ? 0 : (slopes[i - 1] + slopes[i]) / 2));
  for (let i = 0; i < n - 1; i++) {
    if (slopes[i] === 0) {
      tangents[i] = tangents[i + 1] = 0;
      continue;
    }
    const a = tangents[i] / slopes[i];
    const b = tangents[i + 1] / slopes[i];
    const h = a * a + b * b;
    if (h > 9) {
      const t = 3 / Math.sqrt(h);
      tangents[i] = t * a * slopes[i];
      tangents[i + 1] = t * b * slopes[i];
    }
  }
  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < n - 1; i++) {
    const [x0, y0] = points[i];
    const [x1, y1] = points[i + 1];
    const dx = (x1 - x0) / 3;
    d += `C${x0 + dx},${y0 + tangents[i] * dx},${x1 - dx},${y1 - tangents[i + 1] * dx},${x1},${y1}`;
  }
  return d;
}

// Steps between the band centres, from the start of the plot to its end.
function stepPath(points: Point[]) {
  let d = `M0,${points[0][1]}`;
  points.forEach(([x, y], i) => {
    if (i > 0) d += `V${y}`;
    const next = points[i + 1];
    d += `H${next ? (x + next[0]) / 2 : 100}`;
  });
  return d;
}

export interface LineChartProps extends CartesianProps {
  /** `monotone` (default, smooth), `linear` or `step`. */
  curve?: 'monotone' | 'linear' | 'step';
  /** Mark every point with a dot (the "Dots" sample). */
  dots?: boolean;
  /** Fill under each line with its colour fading out (an area chart). */
  area?: boolean;
  /** The value at the bottom of the plot (default 0). */
  min?: number;
  /** Axis labels, spread one per band (default: each row's `index` field, when there are 12 rows or fewer). */
  ticks?: ReactNode[];
}

/** A line chart (Figma "Line Chart" samples and the Active users and Sessions demos); `area` makes an area chart. */
export function LineChart(props: LineChartProps) {
  const { data, index, series: seriesProp, max, min = 0, curve = 'monotone', dots, area, ticks, tooltip = true, tooltipLabel, formatValue, activeIndex, defaultActiveIndex, onActiveIndexChange } = props;
  const tooltipId = useId();
  const gradientId = useId();
  const series = seriesProp.map((s, i) => ({ ...s, color: s.color ?? chartColor(i) }));
  const n = data.length;
  const maxValue = max ?? niceMax(Math.max(0, ...data.flatMap((row) => series.map((s) => num(row, s.key)))));
  const [active, setActive] = useActive(n, activeIndex, defaultActiveIndex, onActiveIndexChange);
  const format = formatValue ?? ((v: number) => defaultFormat(v));
  const xAt = (i: number) => (curve === 'step' ? ((i + 0.5) / n) * 100 : n > 1 ? (i / (n - 1)) * 100 : 50);
  const yAt = (v: number) => 100 - clampPct(((v - min) / (maxValue - min)) * 100);
  const indexAt = (f: number) => (curve === 'step' ? Math.min(n - 1, Math.floor(f * n)) : Math.round(f * (n - 1)));
  const handlers = tooltip ? plotHandlers(n, active, setActive, indexAt, false) : null;
  const path = curve === 'step' ? stepPath : curve === 'linear' ? linearPath : monotonePath;

  const lines = (
    <svg className="ds-chart__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      {series.map((s, si) => {
        const points = data.map((row, i) => [xAt(i), yAt(num(row, s.key))] as Point);
        if (!points.length) return null;
        const d = path(points);
        const first = curve === 'step' ? 0 : points[0][0];
        const last = curve === 'step' ? 100 : points[points.length - 1][0];
        return (
          <g key={s.key} style={{ '--chart-color': s.color } as CSSProperties}>
            {area && (
              <>
                <defs>
                  <linearGradient id={`${gradientId}-${si}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" className="ds-chart__area-stop ds-chart__area-stop--top" />
                    <stop offset="1" className="ds-chart__area-stop ds-chart__area-stop--bottom" />
                  </linearGradient>
                </defs>
                <path d={`${d}L${last},100L${first},100Z`} fill={`url(#${gradientId}-${si})`} />
              </>
            )}
            <path className="ds-chart__line" d={d} vectorEffect="non-scaling-stroke" />
          </g>
        );
      })}
    </svg>
  );

  const pointDots = dots
    ? series.flatMap((s) => data.map((row, i) => <span key={`${s.key}-${i}`} aria-hidden className="ds-chart__dot" style={{ '--chart-x': xAt(i), '--chart-y': yAt(num(row, s.key)), '--chart-color': s.color } as CSSProperties} />))
    : null;

  let overlay: ReactNode = null;
  if (active !== null) {
    const row = data[active];
    const x = xAt(active);
    const ys = series.map((s) => yAt(num(row, s.key)));
    overlay = (
      <>
        <span aria-hidden className="ds-chart__cursor" style={{ '--chart-x': x } as CSSProperties} />
        {series.map((s, i) => (
          <span key={s.key} aria-hidden className="ds-chart__dot" style={{ '--chart-x': x, '--chart-y': ys[i], '--chart-color': s.color } as CSSProperties} />
        ))}
        <Tooltip id={tooltipId} x={x} y={Math.min(...ys)} flip={x > 60} label={tooltipLabel ? tooltipLabel(row, active) : String(row[index])} items={series.map((s) => ({ label: s.label, value: format(num(row, s.key), s), color: s.color }))} />
      </>
    );
  }

  const axisTicks = ticks ?? (n <= 12 ? data.map((row) => String(row[index])) : undefined);
  return (
    <Frame
      {...props}
      series={series}
      maxValue={maxValue}
      plot={
        <>
          {lines}
          {pointDots}
        </>
      }
      overlay={overlay}
      handlers={handlers}
      active={active}
      tooltipId={tooltipId}
      axis={axisTicks ? <ChartAxis ticks={axisTicks} /> : null}
    />
  );
}

export type AreaChartProps = Omit<LineChartProps, 'area'>;

/** An area chart (Figma "Area Chart" samples and the Deploys demo): a line chart filled under each line. */
export function AreaChart(props: AreaChartProps) {
  return <LineChart {...props} area />;
}

/* ----------------------------------------------------------------------------------------------------------------
 * Pie and radial charts
 * -------------------------------------------------------------------------------------------------------------- */

/** One slice, ring or arc. */
export interface ChartDatum {
  label: string;
  value: number;
  /** Any CSS colour; defaults to the chart colours in turn. */
  color?: string;
}

interface RoundProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  ref?: Ref<HTMLElement>;
  data: ChartDatum[];
  /** Diameter in px (default 180). */
  size?: number;
  /** Figma "Center label" Value, e.g. "925". */
  value?: ReactNode;
  /** Figma "Center label" Caption, e.g. "Visitors". */
  caption?: ReactNode;
  /** Text of a value in the data table (default `1,234`). */
  formatValue?: (value: number) => string;
}

function RoundFrame({ modifier, size, value, caption, data, formatValue, children, viewBox, className, style, 'aria-label': ariaLabel, ...rest }: RoundProps & { modifier?: string; viewBox: string; children: ReactNode }) {
  const format = formatValue ?? defaultFormat;
  return (
    <figure {...rest} className={cx('ds-chart-pie', modifier && `ds-chart-pie--${modifier}`, className)} style={{ ...(size !== undefined && { '--chart-size': `${size}px` }), ...style } as CSSProperties}>
      <svg className="ds-chart-pie__svg" viewBox={viewBox} role="img" aria-label={ariaLabel}>
        {children}
      </svg>
      {(value !== undefined || caption !== undefined) && (
        <div className="ds-chart-pie__center" aria-hidden>
          {value !== undefined && <span className="ds-chart-pie__value">{value}</span>}
          {caption !== undefined && <span className="ds-chart-pie__caption">{caption}</span>}
        </div>
      )}
      <table className="ds-chart__table">
        {ariaLabel && <caption>{ariaLabel}</caption>}
        <tbody>
          {data.map((d) => (
            <tr key={d.label}>
              <th scope="row">{d.label}</th>
              <td>{format(d.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

// A circle whose stroke draws `length` % of its circumference from `start` %, clockwise from 3 o'clock.
function Arc({ r, width, start = 0, length, color, track }: { r: number; width: number; start?: number; length: number; color?: string; track?: boolean }) {
  return (
    <circle
      className={track ? 'ds-chart-pie__track' : 'ds-chart-pie__slice'}
      cx={0}
      cy={0}
      r={r}
      pathLength={100}
      strokeWidth={width}
      strokeDasharray={length >= 100 ? undefined : `${length} ${100 - length}`}
      strokeDashoffset={-start}
      style={color ? ({ '--chart-color': color } as CSSProperties) : undefined}
    />
  );
}

export interface PieChartProps extends RoundProps {
  /** `pie` (default) or `donut` (a ring 10 % of the diameter thick, room for a value in the middle). */
  variant?: 'pie' | 'donut';
}

/** Figma "Pie Chart" samples (Default, Donut, Donut with Label): slices clockwise from 12 o'clock. Name it with `aria-label`. */
export function PieChart({ variant = 'pie', data, ...rest }: PieChartProps) {
  const total = data.reduce((sum, d) => sum + Math.max(0, d.value), 0) || 1;
  const inner = variant === 'donut' ? 0.8 : 0;
  const width = 50 * (1 - inner);
  const r = 50 - width / 2;
  let start = 0;
  return (
    <RoundFrame {...rest} data={data} modifier={variant} viewBox="-50 -50 100 100">
      <g transform="rotate(-90)">
        {data.map((d, i) => {
          const length = (Math.max(0, d.value) / total) * 100;
          const arc = <Arc key={d.label} r={r} width={width} start={start} length={length} color={d.color ?? chartColor(i)} />;
          start += length;
          return arc;
        })}
      </g>
    </RoundFrame>
  );
}

export interface RadialChartProps extends RoundProps {
  /**
   * `rings` (default, Figma "Simple"): one ring per datum, each filled to `value` of `max`, counter-clockwise from
   * 3 o'clock. `half` ("Stacked"): the data side by side over a half ring. `progress` ("Text", the Daily goal demo):
   * one thick ring filled clockwise from 12 o'clock.
   */
  variant?: 'rings' | 'half' | 'progress';
  /** The value of a full ring (default: 100 for `rings` and `progress`, the total for `half`). */
  max?: number;
}

/** Figma "Radial Chart" samples and the screen-time and Daily goal demos. Name it with `aria-label`. */
export function RadialChart({ variant = 'rings', data, max, ...rest }: RadialChartProps) {
  if (variant === 'progress') {
    const d = data[0] ?? { label: '', value: 0 };
    const width = 50 * (1 - 0.6887);
    const r = 50 - width / 2;
    const length = clampPct((d.value / (max ?? 100)) * 100);
    return (
      <RoundFrame {...rest} data={data} modifier="progress" viewBox="-50 -50 100 100">
        <Arc r={r} width={width} length={100} track />
        <g transform="rotate(-90)">
          <Arc r={r} width={width} length={length} color={d.color ?? chartColor(0)} />
        </g>
      </RoundFrame>
    );
  }
  if (variant === 'half') {
    const total = max ?? (data.reduce((sum, d) => sum + Math.max(0, d.value), 0) || 1);
    const width = 50 * 0.3;
    const r = 50 - width / 2;
    let start = 0;
    return (
      <RoundFrame {...rest} data={data} modifier="half" viewBox="-50 -50 100 50">
        <g transform="rotate(180)">
          <Arc r={r} width={width} length={50} track />
          {data.map((d, i) => {
            const length = (Math.max(0, d.value) / total) * 50;
            const arc = <Arc key={d.label} r={r} width={width} start={start} length={length} color={d.color ?? chartColor(i)} />;
            start += length;
            return arc;
          })}
        </g>
      </RoundFrame>
    );
  }
  // Rings from the outside in, each 60 % of the step between them: with many rings the innermost ring's outer edge
  // sits at a third of the radius (Figma's six and seven rings); with few, the step stays at most 2/9 of the size.
  const n = data.length;
  const step = n > 1 ? Math.min(200 / 9, (50 - 50 / 3) / (n - 1)) : 200 / 9;
  const width = step * 0.6;
  return (
    <RoundFrame {...rest} data={data} modifier="rings" viewBox="-50 -50 100 100">
      {data.map((d, i) => {
        const r = 50 - i * step - width / 2;
        return (
          <g key={d.label}>
            <Arc r={r} width={width} length={100} track />
            <g transform="scale(1 -1)">
              <Arc r={r} width={width} length={clampPct((d.value / (max ?? 100)) * 100)} color={d.color ?? chartColor(i)} />
            </g>
          </g>
        );
      })}
    </RoundFrame>
  );
}
