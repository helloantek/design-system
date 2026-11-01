import { useId, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react';

// Styles live in @helloantek/ds-css (classes ds-slider*). WAI-ARIA slider: each thumb is a role="slider" with its own
// Tab stop. Arrow keys move by `step`, Page Up / Page Down by ten steps, Home and End to the ends; a click or a drag
// on the track moves the nearest thumb. With two values (Figma Range=True) the thumbs cannot cross.

/** Figma Orientation. */
export type SliderOrientation = 'horizontal' | 'vertical';
/**
 * Not a Figma property: the demos' looks. `default` (the component), `block` (a 24 px track with 20 × 24 thumbs:
 * "Autoscaling range", "Claude Effort Slider", "Color picker"), `scrubber` (a 32 px bar with the label and value
 * inside: "Scrubber"). Block and scrubber are horizontal only.
 */
export type SliderVariant = 'default' | 'block' | 'scrubber';
/** A step dot under the track (block); `emphasis` draws a bar instead (e.g. the recommended value). */
export type SliderMark = number | { value: number; emphasis?: boolean };

type Value = number | [number, number];

export interface SliderProps<V extends Value = Value> {
  /** The value (controlled): a number, or `[from, to]` for a range (Figma Range=True). */
  value?: V;
  /** The value at first (uncontrolled); default `min`. */
  defaultValue?: V;
  /** Called on every change while dragging or pressing keys. */
  onValueChange?: (value: V) => void;
  /** Called once the pointer is released or a key changes the value. */
  onValueCommit?: (value: V) => void;
  /** Default 0. */
  min?: number;
  /** Default 100. */
  max?: number;
  /** Default 1. */
  step?: number;
  /** Figma Orientation (default `horizontal`): vertical sliders run bottom to top. */
  orientation?: SliderOrientation;
  /** Figma State=Disabled. */
  disabled?: boolean;
  /** The look (default `default`); see SliderVariant. */
  variant?: SliderVariant;
  /** Step dots in a block slider: `true` for every step, or the values to mark. */
  marks?: boolean | SliderMark[];
  /** A colour dot in each thumb (the "Color picker" demo), any CSS colour. */
  thumbDot?: string;
  /** A label above the slider (the demos' "Field"); it names the thumbs. Or name them with `aria-label`. */
  label?: ReactNode;
  /** Shown at the end of the label row, e.g. `"80 ms"`; also what screen readers say for the value. */
  valueText?: ReactNode;
  /** What screen readers say for one thumb's value (default the number). */
  getAriaValueText?: (value: number, index: number) => string;
  /** Names the thumbs when there is no `label`; give two for a range (e.g. `['Minimum', 'Maximum']`). */
  'aria-label'?: string | [string, string];
  /** Submits the value with a form (a range submits two fields with this name). */
  name?: string;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** Figma "Slider": a track with one thumb, or two for a range. */
export function Slider<V extends Value = Value>({
  value: valueProp,
  defaultValue,
  onValueChange,
  onValueCommit,
  min = 0,
  max = 100,
  step = 1,
  orientation = 'horizontal',
  disabled = false,
  variant = 'default',
  marks,
  thumbDot,
  label,
  valueText,
  getAriaValueText,
  'aria-label': ariaLabel,
  name,
  className,
  style,
  id,
}: SliderProps<V>) {
  const [uncontrolled, setUncontrolled] = useState<Value>(defaultValue ?? min);
  const current = (valueProp ?? uncontrolled) as Value;
  const values = Array.isArray(current) ? current : [current];
  const range = Array.isArray(current);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<number | null>(null);
  const autoId = useId();
  const labelId = `${id ?? autoId}-label`;
  const scrubber = variant === 'scrubber';
  const vertical = orientation === 'vertical' && variant === 'default';
  // A scrubber shows its label and value inside the bar, not above it.
  const header = label !== undefined && !scrubber;

  const snap = (v: number) => {
    const snapped = Math.round((v - min) / step) * step + min;
    // Avoid 0.30000000000000004 from float steps.
    const decimals = (String(step).split('.')[1] ?? '').length;
    return clamp(Number(snapped.toFixed(decimals)), min, max);
  };
  const toValue = (list: number[]) => (range ? [list[0], list[1]] : list[0]) as V;

  const setAt = (index: number, raw: number) => {
    const next = [...values];
    const lo = index === 1 ? values[0] : min;
    const hi = index === 0 && range ? values[1] : max;
    next[index] = clamp(snap(raw), lo, hi);
    if (next[index] === values[index]) return null;
    if (valueProp === undefined) setUncontrolled(toValue(next));
    onValueChange?.(toValue(next));
    return next;
  };

  const fraction = (v: number) => (max === min ? 0 : (v - min) / (max - min));

  // Where the pointer is on the track, as a value. A thumb's centre sits half a thumb in from each end.
  const valueFromPointer = (event: PointerEvent) => {
    const track = trackRef.current;
    if (!track) return min;
    const rect = track.getBoundingClientRect();
    // The thumb's length along the track (16 px, 20 px in a block slider, 14 px in a scrubber).
    const thumbRect = track.querySelector('.ds-slider__thumb')?.getBoundingClientRect();
    const size = thumbRect ? (vertical ? thumbRect.height : thumbRect.width) : 16;
    const length = (vertical ? rect.height : rect.width) - size;
    const rtl = !vertical && getComputedStyle(track).direction === 'rtl';
    let pos = vertical ? rect.bottom - event.clientY : rtl ? rect.right - event.clientX : event.clientX - rect.left;
    pos -= size / 2;
    return min + clamp(length > 0 ? pos / length : 0, 0, 1) * (max - min);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (disabled || event.button !== 0) return;
    const v = valueFromPointer(event);
    // The nearest thumb moves; between two equal thumbs, the one on the side of the click.
    let index = 0;
    if (range) {
      const d0 = Math.abs(v - values[0]);
      const d1 = Math.abs(v - values[1]);
      index = d1 < d0 || (d1 === d0 && v > values[1]) ? 1 : 0;
    }
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(index);
    setAt(index, v);
    trackRef.current?.querySelectorAll<HTMLElement>('[role="slider"]')[index]?.focus();
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragging === null) return;
    setAt(dragging, valueFromPointer(event));
  };

  const endDrag = () => {
    if (dragging === null) return;
    setDragging(null);
    onValueCommit?.(toValue(values));
  };

  const onKeyDown = (index: number) => (event: KeyboardEvent<HTMLSpanElement>) => {
    if (disabled) return;
    const big = step * 10;
    const rtl = !vertical && getComputedStyle(event.currentTarget).direction === 'rtl';
    const deltas: Record<string, number> = {
      ArrowRight: rtl ? -step : step,
      ArrowUp: step,
      ArrowLeft: rtl ? step : -step,
      ArrowDown: -step,
      PageUp: big,
      PageDown: -big,
    };
    let target: number | undefined;
    if (event.key in deltas) target = values[index] + deltas[event.key];
    else if (event.key === 'Home') target = min;
    else if (event.key === 'End') target = max;
    if (target === undefined) return;
    event.preventDefault();
    const next = setAt(index, target);
    if (next) onValueCommit?.(toValue(next));
  };

  const names = Array.isArray(ariaLabel) ? ariaLabel : ariaLabel ? [ariaLabel, ariaLabel] : range ? ['Minimum', 'Maximum'] : [undefined, undefined];

  const markList: { value: number; emphasis?: boolean }[] =
    variant === 'block' && marks
      ? (marks === true ? Array.from({ length: Math.floor((max - min) / step) + 1 }, (_, i) => min + i * step) : marks).map((m) => (typeof m === 'number' ? { value: m } : m))
      : [];

  const slider = (
    <div
      id={header ? undefined : id}
      className={cx('ds-slider', vertical && 'ds-slider--vertical', variant !== 'default' && `ds-slider--${variant}`, disabled && 'ds-slider--disabled', !header && className)}
      style={
        {
          ...(header ? undefined : style),
          '--slider-start': range ? fraction(values[0]) : 0,
          '--slider-end': fraction(values[values.length - 1]),
        } as CSSProperties
      }
    >
      <div className="ds-slider__track" ref={trackRef} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={endDrag} onPointerCancel={endDrag} onLostPointerCapture={endDrag}>
        {markList.length > 0 && (
          <div className="ds-slider__marks" aria-hidden>
            {markList.map((m) => (
              <span key={m.value} className={cx('ds-slider__mark', m.emphasis && 'ds-slider__mark--emphasis')} style={{ '--slider-at': fraction(m.value) } as CSSProperties} />
            ))}
          </div>
        )}
        <div className="ds-slider__range" />
        {scrubber && (label !== undefined || valueText !== undefined) && (
          <div className="ds-slider__inside" aria-hidden={label === undefined || undefined}>
            <span id={labelId}>{label}</span>
            <span aria-hidden>{valueText}</span>
          </div>
        )}
        {values.map((v, i) => (
          <span
            key={i}
            role="slider"
            tabIndex={disabled ? undefined : 0}
            className="ds-slider__thumb"
            style={{ '--slider-at': fraction(v) } as CSSProperties}
            aria-valuemin={i === 1 ? values[0] : min}
            aria-valuemax={i === 0 && range ? values[1] : max}
            aria-valuenow={v}
            aria-valuetext={getAriaValueText?.(v, i) ?? (!range && typeof valueText === 'string' ? valueText : undefined)}
            aria-orientation={orientation}
            aria-disabled={disabled || undefined}
            aria-label={label !== undefined && range ? names[i] : label === undefined ? names[i] : undefined}
            aria-labelledby={label !== undefined ? (range ? `${labelId} ${id ?? autoId}-thumb-${i}` : labelId) : undefined}
            id={`${id ?? autoId}-thumb-${i}`}
            data-dragging={dragging === i ? '' : undefined}
            onKeyDown={onKeyDown(i)}
          >
            {thumbDot !== undefined && <span className="ds-slider__dot" style={{ backgroundColor: thumbDot }} aria-hidden />}
          </span>
        ))}
      </div>
      {name !== undefined && values.map((v, i) => <input key={i} type="hidden" name={name} value={v} disabled={disabled} />)}
    </div>
  );

  if (!header) return slider;
  return (
    <div id={id} className={cx('ds-slider-field', disabled && 'ds-slider-field--disabled', className)} style={style}>
      <div className="ds-slider-field__header">
        <span id={labelId} className="ds-slider-field__label">
          {label}
        </span>
        {valueText !== undefined && (
          <output className="ds-slider-field__value" aria-hidden>
            {valueText}
          </output>
        )}
      </div>
      {slider}
    </div>
  );
}
