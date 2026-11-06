import { Bubble, type BubbleVariant } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Sort UI 2.0 Bubble (344:5505) with Figma's sample text in a 320 px column on the page background; Bubble Reactions
// (343:3) as the pill alone ("😍🙏" in Figma's 26 px slot), out of its corner position.
const text = 'This bubble is aligned to the start. This is the default alignment.';

export const renderBubble: Renderer = (p) => {
  if (p.Part === 'Reactions') {
    return (
      <div id="target" style={{ display: 'inline-flex', padding: 8, background: 'var(--ds-background)' }}>
        <div className="ds-bubble__reactions" style={{ position: 'static', translate: 'none' }}>
          {/* Emoji widths follow the system emoji font, so the slot takes Figma's 26 px (13 px emoji, as the component samples them). */}
          <span style={{ display: 'inline-block', width: 26, fontSize: 13, textAlign: 'center' }}>😍🙏</span>
        </div>
      </div>
    );
  }
  return (
    <div id="target" style={{ display: 'flex', flexDirection: 'column', width: 320, background: 'var(--ds-background)' }}>
      <Bubble variant={(p.Variant ?? 'Default').toLowerCase() as BubbleVariant}>{text}</Bubble>
    </div>
  );
};
