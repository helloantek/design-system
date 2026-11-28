import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsBubble, DsBubbleGroup, DsBubbleReactions } from './bubble';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=343-2';

const meta = {
  title: 'Components/Bubble',
  decorators: [moduleMetadata({ imports: [DsBubble, DsBubbleGroup, DsBubbleReactions] })],
  parameters: {
    docs: {
      description: {
        component: `Sort UI 2.0 **Bubble** and **Bubble Reactions** ([open in Figma](${FIGMA_URL})) for Angular: \`<div dsBubble>\` and \`<div dsBubbleGroup>\` render the same markup and \`ds-bubble\` classes as the React Bubble. \`variant\`, \`align\` (or the group's), reactions marked \`dsBubbleReactions\` on a corner (\`reactionsPlacement\`), \`collapsible\` with Show more; the group stacks one sender's bubbles with an optional \`footer\`.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// The React stories' inline styles, written as the CSSOM serialises them.
const column = (gap: number) => `style="width: min(448px, -32px + 100vw); display: flex; flex-direction: column; gap: ${gap}px;"`;

/** Figma demo "Variants": Default, Muted, Destructive and Ghost. */
export const Variants: StoryObj = {
  render: () => ({
    template: `<div ${column(24)}>
      <div dsBubbleGroup align="end"><div dsBubble>Your order is on its way and should arrive before 6 PM today.</div></div>
      <div dsBubbleGroup><div dsBubble variant="muted">Sure, I have added a note for the courier to leave it at reception.</div></div>
      <div dsBubbleGroup align="end"><div dsBubble variant="destructive">The payment for your last order failed. Update your card to retry.</div></div>
      <div dsBubbleGroup><div dsBubble variant="ghost">Here is a summary of your order: two items ship from our Berlin warehouse today and the third arrives separately on Thursday. You can track both parcels from the Orders page, and we will email you when each one is out for delivery.</div></div>
    </div>`,
  }),
};

/** Figma demo "Alignment": theirs at the start, yours at the end. */
export const Alignment: StoryObj = {
  render: () => ({
    template: `<div ${column(24)}>
      <div dsBubbleGroup><div dsBubble variant="muted">Did the new pricing page go live with this morning's deploy?</div></div>
      <div dsBubbleGroup align="end"><div dsBubble>Yes, it shipped together with the annual plans and the new FAQ.</div></div>
    </div>`,
  }),
};

/** Figma demo "Long message": the first eight lines, then "Show more". */
export const LongMessage: StoryObj = {
  render: () => ({
    template: `<div ${column(24)}>
      <div dsBubbleGroup><div dsBubble variant="muted">Can you sum up what changed in the 2.4 release for our customers?</div></div>
      <div dsBubbleGroup align="end"><div dsBubble collapsible>Version 2.4 brings a faster checkout, saved payment methods and a redesigned order history. We fixed the sync issue that duplicated items in carts on slow connections, trimmed the app size by 18% and added offline access to your last 50 orders. Push notifications now group by order, so a busy day no longer floods your lock screen. The full changelog lists everything else, including new accessibility settings, dark mode refinements and support for the latest OS versions on both platforms.</div></div>
    </div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'] },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          <div dsBubbleGroup><div dsBubble variant="muted" reactions="👍">Is the deploy done?</div></div>
          <div dsBubbleGroup align="end" footer="Read"><div dsBubble>Yes, all green.</div><div dsBubble variant="destructive">One migration needs a retry.</div></div>
          <div dsBubble variant="ghost">A ghost bubble is plain text across the width, for long answers.</div>
        </div>
      }
    </div>`,
  }),
};
