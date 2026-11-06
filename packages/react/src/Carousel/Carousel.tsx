import { Children, isValidElement, useEffect, useId, useRef, useState, type CSSProperties, type HTMLAttributes, type KeyboardEvent, type PointerEvent, type ReactNode, type Ref } from 'react';
import { Button } from '../Button';
import { toneUnder, type CarouselTone } from './tone';

// Styles live in @helloantek/ds-css (classes ds-carousel*); this component only renders the markup and moves the track.

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(' ');

const chevron = (d: string) => (
  <svg viewBox="0 0 16 16" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={d} />
  </svg>
);
const icons = {
  left: chevron('M10 4 6 8l4 4'),
  right: chevron('m6 4 4 4-4 4'),
  up: chevron('m4 10 4-4 4 4'),
  down: chevron('m4 6 4 4 4-4'),
};

/** Figma "Orientation". */
export type CarouselOrientation = 'horizontal' | 'vertical';

export interface CarouselProps extends Omit<HTMLAttributes<HTMLElement>, 'children' | 'onChange'> {
  ref?: Ref<HTMLElement>;
  /** The slides (`CarouselSlide`, or any elements). */
  children: ReactNode;
  /** Figma Orientation (default `horizontal`). */
  orientation?: CarouselOrientation;
  /** Slides in view at once (the "Multiple items" demo shows 3); the carousel steps one slide at a time. */
  perView?: number;
  /** Space between slides in px (default 16). */
  gap?: number;
  /** Height of each slide in px, vertical only (default 192). */
  slideSize?: number;
  /** The first slide in view (controlled). */
  index?: number;
  /** The first slide in view at first. */
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
  /**
   * Where Previous and Next go: `outside` (default, Figma's outline buttons beside or above and below the viewport),
   * `overlay` (round translucent buttons over its bottom corners, the "Image Carousel" demo) or `none` (drive it with
   * `index`, as in the "In a card" demo). `overlay` is for full-bleed media: the controls cover the bottom 52 px of
   * the slides, so keep text out of it.
   */
  controls?: 'outside' | 'overlay' | 'none';
  /** Show a dot per position under the carousel (or in the overlay); the dots move to their slide. */
  indicators?: boolean;
  /** Name of a slide for screen readers (default "1 of 3"). */
  slideLabel?: (index: number, count: number) => string;
  /**
   * Look of the overlay controls: `auto` (default) reads what lies under each control (a slide's `tone`, the pixels
   * of an image, its background colour or gradient) and takes a light control on dark content, a dark one on light
   * content; `light` or `dark` fixes it.
   */
  controlsTone?: 'auto' | CarouselTone;
}

type Tones = { previous: CarouselTone; next: CarouselTone; indicators: CarouselTone };
const flip = (under: CarouselTone | null): CarouselTone => (under === 'dark' ? 'light' : 'dark');

/**
 * Figma "Carousel": slides shown one (or `perView`) at a time. A region named by `aria-label`; each slide is a group
 * named "n of total" and slides out of view are hidden from screen readers and the Tab order. Previous / Next, the
 * indicators, the arrow keys on the focused viewport and a swipe move it.
 */
export function Carousel({
  children,
  orientation = 'horizontal',
  perView = 1,
  gap,
  slideSize,
  index: indexProp,
  defaultIndex = 0,
  onIndexChange,
  controls = 'outside',
  indicators = false,
  slideLabel = (i, n) => `${i + 1} of ${n}`,
  controlsTone = 'auto',
  className,
  style,
  ...rest
}: CarouselProps) {
  const trackId = useId();
  const slides = Children.toArray(children).filter(isValidElement);
  const count = slides.length;
  const last = Math.max(0, count - perView);
  const [own, setOwn] = useState(defaultIndex);
  const index = Math.min(last, Math.max(0, indexProp ?? own));
  const go = (next: number) => {
    const clamped = Math.min(last, Math.max(0, next));
    if (clamped === index) return;
    if (indexProp === undefined) setOwn(clamped);
    onIndexChange?.(clamped);
  };
  const vertical = orientation === 'vertical';
  const swipe = useRef<number | null>(null);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = vertical ? { ArrowUp: -1, ArrowDown: 1 } : { ArrowLeft: -1, ArrowRight: 1 };
    if (event.key in keys) go(index + keys[event.key]);
    else if (event.key === 'Home') go(0);
    else if (event.key === 'End') go(last);
    else return;
    event.preventDefault();
  };
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') swipe.current = vertical ? event.clientY : event.clientX;
  };
  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (swipe.current === null) return;
    const delta = (vertical ? event.clientY : event.clientX) - swipe.current;
    swipe.current = null;
    if (Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1));
  };

  const overlay = controls === 'overlay';
  const trackRef = useRef<HTMLDivElement>(null);
  const controlRefs = { previous: useRef<HTMLButtonElement>(null), next: useRef<HTMLButtonElement>(null), indicators: useRef<HTMLDivElement>(null) };
  const [tones, setTones] = useState<Tones>({ previous: 'dark', next: 'dark', indicators: 'dark' });

  // Overlay controls follow what lies under them: re-read after the track has moved, on resize and when an image loads.
  useEffect(() => {
    const track = trackRef.current;
    if (!overlay || controlsTone !== 'auto' || !track) return;
    const update = () => {
      const read = (el: Element | null) => (el ? flip(toneUnder(el, track)) : 'dark');
      const next: Tones = { previous: read(controlRefs.previous.current), next: read(controlRefs.next.current), indicators: read(controlRefs.indicators.current) };
      setTones((prev) => (prev.previous === next.previous && prev.next === next.next && prev.indicators === next.indicators ? prev : next));
    };
    update();
    const timer = setTimeout(update, 350);
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(update);
    observer?.observe(track);
    track.addEventListener('transitionend', update);
    track.addEventListener('load', update, true);
    return () => {
      clearTimeout(timer);
      observer?.disconnect();
      track.removeEventListener('transitionend', update);
      track.removeEventListener('load', update, true);
    };
  }, [overlay, controlsTone, index, perView, count]);
  const toneFor = (part: keyof Tones) => (controlsTone === 'auto' ? tones[part] : controlsTone);

  const button = (direction: 'previous' | 'next') => {
    const disabled = direction === 'previous' ? index === 0 : index >= last;
    const label = direction === 'previous' ? 'Previous slide' : 'Next slide';
    const icon = direction === 'previous' ? (vertical ? icons.up : icons.left) : vertical ? icons.down : icons.right;
    const onClick = () => go(index + (direction === 'previous' ? -1 : 1));
    return overlay ? (
      <button ref={controlRefs[direction]} type="button" className={cx('ds-carousel__control', `ds-carousel__${direction}`, toneFor(direction) === 'light' && 'ds-carousel__control--light')} aria-label={label} aria-controls={trackId} disabled={disabled} onClick={onClick}>
        {icon}
      </button>
    ) : (
      <Button variant="outline" size="sm" icon={icon} aria-label={label} aria-controls={trackId} disabled={disabled} onClick={onClick} className={`ds-carousel__${direction}`} />
    );
  };

  const dots = indicators && last > 0 && (
    <div ref={controlRefs.indicators} className={cx('ds-carousel__indicators', overlay && perView === 1 && toneFor('indicators') === 'light' && 'ds-carousel__indicators--light')}>
      {Array.from({ length: last + 1 }, (_, i) => (
        <button key={i} type="button" className="ds-carousel__indicator" aria-label={`Slide ${i + 1} of ${last + 1}`} aria-current={i === index ? 'true' : undefined} aria-controls={trackId} onClick={() => go(i)} />
      ))}
    </div>
  );

  const vars = {
    '--carousel-index': index,
    '--carousel-per-view': perView,
    ...(gap !== undefined && { '--carousel-gap': `${gap}px` }),
    ...(slideSize !== undefined && { '--carousel-slide-size': `${slideSize}px` }),
  } as CSSProperties;

  return (
    <section
      aria-roledescription="carousel"
      {...rest}
      className={cx('ds-carousel', vertical && 'ds-carousel--vertical', overlay && 'ds-carousel--overlay', className)}
      style={{ ...vars, ...style }}
    >
      <div className="ds-carousel__body">
        {controls !== 'none' && button('previous')}
        <div className="ds-carousel__viewport" tabIndex={0} onKeyDown={onKeyDown} onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerCancel={() => (swipe.current = null)}>
          <div ref={trackRef} className="ds-carousel__track" id={trackId} aria-live="polite">
            {slides.map((slide, i) => {
              const hidden = i < index || i >= index + perView;
              return (
                <div key={slide.key ?? i} className="ds-carousel__slide" role="group" aria-roledescription="slide" aria-label={slideLabel(i, count)} aria-hidden={hidden || undefined} inert={hidden || undefined}>
                  {slide}
                </div>
              );
            })}
          </div>
        </div>
        {controls !== 'none' && button('next')}
        {overlay && perView === 1 && dots}
      </div>
      {!(overlay && perView === 1) && dots}
    </section>
  );
}

export interface CarouselSlideProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** Whether the slide is light or dark, for overlay controls; without it the carousel reads the slide's pixels or colours. */
  tone?: CarouselTone;
}

/** The content of one slide; the carousel wraps it in the slide group. Fills the slide's box. */
export function CarouselSlide({ tone, className, style, ...rest }: CarouselSlideProps) {
  return <div data-tone={tone} {...rest} className={className} style={{ height: '100%', boxSizing: 'border-box', ...style }} />;
}
