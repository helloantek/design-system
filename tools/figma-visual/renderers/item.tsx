import { Item, ItemMedia } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Sort UI 2.0 Item (228:2830): Variant × State at Size=default, and every variant at sm / xs, with Figma's sample
// (square-dashed media, "Placeholder label", "Lorem Ipsum is simply dummy text.", an Outline sm "Button"). The rows
// are links so State=Hover and Focus come from real input; the action is drawn as a Button (a <button> cannot sit
// inside a link). Item Media (227:65) Icon and Image on their own.
const squareDashed = (
  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ width: 17.3, height: 17.3, flexShrink: 0 }}>
    <path d="M3.6 2.16a1.44 1.44 0 0 0-1.44 1.44m11.54-1.44a1.44 1.44 0 0 1 1.44 1.44m0 10.1a1.44 1.44 0 0 1-1.44 1.44m-10.1 0a1.44 1.44 0 0 1-1.44-1.44m4.33-11.54h.72m-.72 12.98h.72m2.88-12.98h.72m-.72 12.98h.72M2.16 6.49v.72m12.98-.72v.72M2.16 10.09v.72m12.98-.72v.72" />
  </svg>
);

export const renderItem: Renderer = (p) => {
  if (p.Part === 'media') {
    return (
      <div style={{ padding: 24, background: 'var(--ds-background)' }}>
        <ItemMedia id="target" variant={p.Variant === 'Image' ? 'image' : 'icon'}>
          {squareDashed}
        </ItemMedia>
      </div>
    );
  }
  return (
    <div style={{ padding: 24, background: 'var(--ds-background)' }}>
      <div style={{ width: 448 }}>
        <Item
          id="target"
          href="#item"
          variant={p.Variant.toLowerCase() as 'default' | 'outline' | 'muted'}
          size={p.Size as 'default' | 'sm' | 'xs'}
          media={<ItemMedia>{squareDashed}</ItemMedia>}
          title="Placeholder label"
          description="Lorem Ipsum is simply dummy text."
          actions={
            <span className="ds-button ds-button--outline ds-button--size-sm">
              <span className="ds-button__label">Button</span>
            </span>
          }
        />
      </div>
    </div>
  );
};
