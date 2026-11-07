import { useCallback, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState, type HTMLAttributes, type ReactNode, type Ref } from 'react';
import { Button } from '../Button';

// Styles live in @helloantek/ds-css (classes ds-message-scroller*); this component renders the markup and keeps the
// transcript where the reader expects it: at the live edge while they follow it, with a new anchored turn near the top
// edge, and in place when earlier messages load above.

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(' ');

/** Where a transcript opens: the first message, the live edge, or the last anchored turn (the "Opening Position" demo). */
export type MessageScrollerPosition = 'start' | 'end' | 'last-anchor';
/** How turns added at the end come in (the "Animation" demo). */
export type MessageScrollerAnimation = 'none' | 'fade' | 'slide' | 'scale';

export interface MessageScrollerState {
  /** Nothing above: the reader can only scroll down. */
  atStart: boolean;
  /** Nothing below: the reader is at the live edge. */
  atEnd: boolean;
}

export interface MessageScrollerScrollOptions {
  /** `smooth` (default, instant with reduced motion) or `instant`. */
  behavior?: 'smooth' | 'instant';
}

/** Commands for driving the transcript from outside (the "Commands" demo), through `controlRef`. */
export interface MessageScrollerHandle {
  scrollToStart(options?: MessageScrollerScrollOptions): void;
  scrollToEnd(options?: MessageScrollerScrollOptions): void;
  /** Brings the item with this `id` to the top edge (less `anchorOffset`). Returns false when there is none. */
  scrollToItem(id: string, options?: MessageScrollerScrollOptions): boolean;
}

export interface MessageScrollerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  ref?: Ref<HTMLDivElement>;
  /** Figma "content": `MessageScrollerItem`s (or any elements) holding Messages, Markers… */
  children?: ReactNode;
  /** Names the log (required for assistive technology). */
  'aria-label'?: string;
  /** Figma "Fade" (default true): a 40 px fade over the bottom edge while there is more below. */
  fade?: boolean;
  /** Figma "Button end" (default true): a button that jumps to the live edge while the reader is above it. */
  scrollToEndButton?: boolean;
  /** Figma "Button start" (default false): a button that jumps to the first message while the reader is below it. */
  scrollToStartButton?: boolean;
  /** Follow the live edge as messages arrive or stream while the reader is at it (default true). */
  autoScroll?: boolean;
  /** Where the transcript opens (default `end`). */
  defaultScrollPosition?: MessageScrollerPosition;
  /** Pixels of the previous reply kept in view above an anchored turn (default 0; the demo's slider goes to 128). */
  anchorOffset?: number;
  /** How turns added at the end come in (default `none`; still with reduced motion). */
  animation?: MessageScrollerAnimation;
  /** Called when the reader reaches or leaves either end. */
  onScrollStateChange?: (state: MessageScrollerState) => void;
  /** Called with the `id` of the anchored turn at the top edge as the reader scrolls (the "Transcript Outline" demo). */
  onAnchorChange?: (id: string | null) => void;
  /** Receives the commands (`scrollToStart`, `scrollToEnd`, `scrollToItem`). */
  controlRef?: Ref<MessageScrollerHandle>;
  /** The end button's name (default "Scroll to latest message"). */
  scrollToEndLabel?: string;
  /** The start button's name (default "Scroll to first message"). */
  scrollToStartLabel?: string;
}

const ANCHOR = '[data-scroll-anchor]';
const EDGE = 2;

const ArrowDown = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13 16.17l5.36-5.36 1.41 1.42L12 20l-7.78-7.78 1.42-1.41L11 16.17V4h2v12.17z" />
  </svg>
);
const ArrowUp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13 7.83V20h-2V7.83l-5.36 5.36-1.42-1.41L12 4l7.78 7.78-1.42 1.41L13 7.83z" />
  </svg>
);

const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Figma "Message Scroller": a chat transcript in a fixed height that keeps the reader's place. */
export function MessageScroller({
  children,
  className,
  fade = true,
  scrollToEndButton = true,
  scrollToStartButton = false,
  autoScroll = true,
  defaultScrollPosition = 'end',
  anchorOffset = 0,
  animation = 'none',
  onScrollStateChange,
  onAnchorChange,
  controlRef,
  scrollToEndLabel = 'Scroll to latest message',
  scrollToStartLabel = 'Scroll to first message',
  'aria-label': ariaLabel,
  ...rest
}: MessageScrollerProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState<MessageScrollerState>({ atStart: true, atEnd: true });

  // Kept in refs so the observers set up once read the current props.
  const props = useRef({ autoScroll, anchorOffset, onScrollStateChange, onAnchorChange });
  props.current = { autoScroll, anchorOffset, onScrollStateChange, onAnchorChange };

  const live = useRef({
    stick: defaultScrollPosition === 'end', // following the live edge
    seeking: false, // a smooth scroll to the end is under way
    pinned: null as HTMLElement | null, // the anchored turn held near the top edge
    pinTop: 0,
    pinning: false, // a smooth scroll to the anchored turn is under way
    ref: null as HTMLElement | null, // the first visible item, to keep in place
    refTop: 0,
    anchors: new Set<Element>(),
    anchorId: undefined as string | null | undefined,
    edge: { atStart: true, atEnd: true },
  });

  // Where an element sits in the scrolled content, from layout offsets: unlike its bounding box, this ignores the
  // transform of an entering animation, so a turn settles where it will be once the animation ends.
  const topOf = (el: Element) => {
    const viewport = viewportRef.current!;
    let top = 0;
    let node: HTMLElement | null = el as HTMLElement;
    while (node && node !== viewport.offsetParent && viewport.contains(node)) {
      top += node.offsetTop;
      node = node.offsetParent as HTMLElement | null;
    }
    return top - viewport.offsetTop;
  };

  const behaviorOf = (options?: MessageScrollerScrollOptions): ScrollBehavior => (options?.behavior === 'instant' || reducedMotion() ? 'instant' : 'smooth');

  /** Room below an anchored turn, so it can reach the top edge before its reply fills the view. */
  const sizeSpacer = useCallback(() => {
    const viewport = viewportRef.current;
    const content = contentRef.current;
    const spacer = spacerRef.current;
    if (!viewport || !content || !spacer) return;
    const pinned = live.current.pinned;
    let height = 0;
    if (pinned?.isConnected) {
      const contentBottom = topOf(content) + content.offsetHeight;
      height = Math.max(0, viewport.clientHeight - props.current.anchorOffset - (contentBottom - topOf(pinned)));
    }
    spacer.style.height = `${height}px`;
  }, []);

  /** Notes the edges, the first visible item and the anchored turn at the top, after any scroll or change. */
  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;
    const state = live.current;
    const atStart = viewport.scrollTop <= EDGE;
    const atEnd = viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight <= EDGE;
    if (atStart !== state.edge.atStart || atEnd !== state.edge.atEnd) {
      state.edge = { atStart, atEnd };
      setEdge(state.edge);
      props.current.onScrollStateChange?.(state.edge);
    }
    const scrollTop = viewport.scrollTop;
    state.ref = null;
    for (const item of Array.from(content.children) as HTMLElement[]) {
      const top = topOf(item);
      if (top + item.offsetHeight > scrollTop) {
        state.ref = item;
        state.refTop = top - scrollTop;
        break;
      }
    }
    if (props.current.onAnchorChange) {
      const line = scrollTop + props.current.anchorOffset + EDGE;
      let current: Element | null = null;
      for (const anchor of Array.from(content.querySelectorAll(ANCHOR))) {
        if (topOf(anchor) <= line) current = anchor;
        else break;
      }
      current ??= content.querySelector(ANCHOR);
      const id = current?.id || null;
      if (id !== state.anchorId) {
        state.anchorId = id;
        props.current.onAnchorChange(id);
      }
    }
  }, []);

  const scrollTo = useCallback(
    (top: number, behavior: ScrollBehavior) => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      viewport.scrollTo({ top, behavior });
      if (behavior === 'instant') measure();
    },
    [measure],
  );

  const scrollToEnd = useCallback(
    (options?: MessageScrollerScrollOptions) => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      live.current.stick = true;
      live.current.pinned = null;
      live.current.pinning = false;
      sizeSpacer();
      const behavior = behaviorOf(options);
      live.current.seeking = behavior === 'smooth';
      scrollTo(viewport.scrollHeight, behavior);
    },
    [scrollTo, sizeSpacer],
  );

  const scrollToStart = useCallback(
    (options?: MessageScrollerScrollOptions) => {
      live.current.stick = false;
      live.current.seeking = false;
      scrollTo(0, behaviorOf(options));
    },
    [scrollTo],
  );

  const scrollToItem = useCallback(
    (id: string, options?: MessageScrollerScrollOptions) => {
      const content = contentRef.current;
      if (!content) return false;
      const item = Array.from(content.querySelectorAll<HTMLElement>('[id]')).find((el) => el.id === id);
      if (!item) return false;
      live.current.stick = false;
      live.current.seeking = false;
      scrollTo(topOf(item) - props.current.anchorOffset, behaviorOf(options));
      return true;
    },
    [scrollTo],
  );

  useImperativeHandle(controlRef, () => ({ scrollToStart, scrollToEnd, scrollToItem }), [scrollToStart, scrollToEnd, scrollToItem]);

  // Open where asked, before the first paint.
  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;
    live.current.anchors = new Set(content.querySelectorAll(ANCHOR));
    if (defaultScrollPosition === 'end') viewport.scrollTop = viewport.scrollHeight;
    else if (defaultScrollPosition === 'last-anchor') {
      const anchors = content.querySelectorAll(ANCHOR);
      const last = anchors[anchors.length - 1];
      viewport.scrollTop = last ? topOf(last) - anchorOffset : viewport.scrollHeight;
    }
    live.current.stick = viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight <= EDGE;
    measure();
    // Only on mount: the opening position does not move an open transcript.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React to new, removed and resized messages.
  useEffect(() => {
    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;

    const reconcile = () => {
      const state = live.current;
      // A new anchored turn in the last item settles near the top edge.
      const anchors = new Set(content.querySelectorAll(ANCHOR));
      let fresh: HTMLElement | null = null;
      for (const anchor of anchors) if (!state.anchors.has(anchor)) fresh = anchor as HTMLElement;
      state.anchors = anchors;
      const last = content.lastElementChild;
      if (fresh && last && (last === fresh || last.contains(fresh))) {
        state.pinned = fresh;
        state.stick = false;
        state.seeking = false;
        sizeSpacer();
        state.pinTop = topOf(fresh) - props.current.anchorOffset;
        const behavior: ScrollBehavior = reducedMotion() ? 'instant' : 'smooth';
        state.pinning = behavior === 'smooth';
        if (state.pinning) setTimeout(() => (state.pinning = false), 1000);
        viewport.scrollTo({ top: state.pinTop, behavior });
        measure();
        return;
      }
      sizeSpacer();
      if (state.stick && props.current.autoScroll && !state.pinned) {
        viewport.scrollTop = viewport.scrollHeight;
      } else if (state.ref?.isConnected && !state.pinned) {
        // Keep the first visible message where it was (earlier messages loaded above it).
        const delta = topOf(state.ref) - viewport.scrollTop - state.refTop;
        if (Math.abs(delta) > 0.5) viewport.scrollTop += delta;
      }
      measure();
    };

    const mutations = new MutationObserver((records) => {
      const added: Element[] = [];
      for (const record of records) for (const node of Array.from(record.addedNodes)) if (node instanceof Element && node.parentElement === content) added.push(node);
      // Turns added at the end come in with the animation.
      for (const node of added) {
        let next = node.nextElementSibling;
        while (next && added.includes(next)) next = next.nextElementSibling;
        if (!next && node.classList.contains('ds-message-scroller__item')) {
          node.setAttribute('data-entering', '');
          node.addEventListener('animationend', () => node.removeAttribute('data-entering'), { once: true });
          // Without an animation nothing ends it.
          setTimeout(() => node.removeAttribute('data-entering'), 600);
        }
      }
      reconcile();
    });
    mutations.observe(content, { childList: true, subtree: true, characterData: true });

    const resize = new ResizeObserver(() => reconcile());
    resize.observe(content);
    resize.observe(viewport);

    const onScroll = () => {
      const state = live.current;
      const atEnd = viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight <= EDGE;
      if (!state.seeking) state.stick = atEnd;
      else if (atEnd) state.seeking = false;
      // Scrolling away from an anchored turn lets go of it.
      if (state.pinned && !state.pinning && Math.abs(viewport.scrollTop - state.pinTop) > EDGE) state.pinned = null;
      measure();
    };
    // The reader takes over from a smooth scroll in progress.
    const takeOver = () => {
      live.current.seeking = false;
      live.current.pinning = false;
    };
    viewport.addEventListener('scroll', onScroll, { passive: true });
    viewport.addEventListener('scrollend', takeOver);
    viewport.addEventListener('wheel', takeOver, { passive: true });
    viewport.addEventListener('touchstart', takeOver, { passive: true });
    viewport.addEventListener('keydown', takeOver);
    return () => {
      mutations.disconnect();
      resize.disconnect();
      viewport.removeEventListener('scroll', onScroll);
      viewport.removeEventListener('scrollend', takeOver);
      viewport.removeEventListener('wheel', takeOver);
      viewport.removeEventListener('touchstart', takeOver);
      viewport.removeEventListener('keydown', takeOver);
    };
  }, [measure, sizeSpacer]);

  // A new peek size re-sizes the room under the anchored turn.
  useEffect(() => {
    sizeSpacer();
  }, [anchorOffset, sizeSpacer]);

  // The buttons disappear once used, so focus moves to the log rather than being lost.
  const jump = (to: 'start' | 'end') => {
    viewportRef.current?.focus({ preventScroll: true });
    if (to === 'end') scrollToEnd();
    else scrollToStart();
  };

  return (
    <div {...rest} className={cx('ds-message-scroller', className)} data-at-start={edge.atStart ? '' : undefined} data-at-end={edge.atEnd ? '' : undefined} data-animation={animation === 'none' ? undefined : animation}>
      <div ref={viewportRef} className="ds-message-scroller__viewport" role="log" aria-label={ariaLabel} tabIndex={0}>
        <div ref={contentRef} className="ds-message-scroller__content">
          {children}
        </div>
        <div ref={spacerRef} className="ds-message-scroller__spacer" aria-hidden />
      </div>
      {fade && <div className="ds-message-scroller__fade" aria-hidden />}
      {scrollToStartButton && <Button className="ds-message-scroller__to-start" variant="outline" size="sm" icon={<ArrowUp />} aria-label={scrollToStartLabel} hidden={edge.atStart} onClick={() => jump('start')} />}
      {scrollToEndButton && <Button className="ds-message-scroller__to-end" variant="outline" size="sm" icon={<ArrowDown />} aria-label={scrollToEndLabel} hidden={edge.atEnd} onClick={() => jump('end')} />}
    </div>
  );
}

export interface MessageScrollerItemProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** Marks a turn (a user's message, a Marker) that settles near the top edge when it is added at the end. */
  scrollAnchor?: boolean;
  children?: ReactNode;
}

/** One turn in the transcript; give it an `id` to jump to it or follow it in an outline. */
export function MessageScrollerItem({ scrollAnchor = false, className, ...rest }: MessageScrollerItemProps) {
  return <div {...rest} className={cx('ds-message-scroller__item', className)} data-scroll-anchor={scrollAnchor ? '' : undefined} />;
}
