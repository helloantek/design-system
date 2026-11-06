import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import { Bubble, BubbleGroup, type BubbleVariant } from './Bubble';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=343-2';

const meta = {
  title: 'Components/Bubble',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Bubble** and **Bubble Reactions** ([open in Figma](${FIGMA_URL})): a chat message up to 320 px wide. \`variant\` (\`default\` · \`muted\` · \`ghost\` · \`destructive\`), \`align\` (or the \`BubbleGroup\`'s), \`reactions\` in a pill on a corner (\`reactionsPlacement\`), and \`collapsible\` for long text with a "Show more" toggle. \`BubbleGroup\` stacks one sender's bubbles 8 px apart with an optional \`footer\`.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const width = (px: number): CSSProperties => ({ width: `min(${px}px, calc(100vw - 32px))` });
const column = (gap: number): CSSProperties => ({ ...width(448), display: 'flex', flexDirection: 'column', gap });

type PlaygroundArgs = { variant: BubbleVariant; align: 'start' | 'end'; text: string; reactions: string };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { variant: 'default', align: 'start', text: 'This bubble is aligned to the start. This is the default alignment.', reactions: '' },
  argTypes: {
    variant: { name: 'Variant', control: 'inline-radio', options: ['default', 'muted', 'ghost', 'destructive'] },
    align: { name: 'Align', control: 'inline-radio', options: ['start', 'end'] },
    text: { name: 'Text' },
    reactions: { name: 'Reactions', description: 'Empty hides them' },
  },
  render: ({ variant, align, text, reactions }) => (
    <div style={column(0)}>
      <BubbleGroup align={align}>
        <Bubble variant={variant} reactions={reactions || undefined}>
          {text}
        </Bubble>
      </BubbleGroup>
    </div>
  ),
};

/** Figma demo "Bubble": a conversation in groups, theirs muted at the start and yours on the card at the end, with reactions and a read receipt. */
export const Demo: StoryObj = {
  render: () => (
    <div style={column(32)} role="log" aria-label="Release chat">
      <BubbleGroup>
        <Bubble variant="muted">Morning! Is the 2.4 build ready?</Bubble>
        <Bubble variant="muted" reactions={<span aria-label="Heart eyes">😍</span>}>
          QA signed off on the new checkout, so we can ship today if it is.
        </Bubble>
      </BubbleGroup>
      <BubbleGroup align="end">
        <Bubble>Almost, it is uploading now</Bubble>
        <Bubble>The Android build should reach the store in about ten minutes.</Bubble>
        <Bubble>iOS already passed review overnight, so both versions can go live together. I will post the release notes in the launch channel as soon as they are out.</Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble variant="muted" reactions={<span aria-label="Lightning">⚡</span>}>
          Perfect, ship it!
        </Bubble>
      </BubbleGroup>
      <BubbleGroup align="end" footer="Sent 9:51 AM · Read by Mira">
        <Bubble>Rolling out now</Bubble>
      </BubbleGroup>
    </div>
  ),
};

/** Figma demo "Variants": Default, Muted, Destructive and Ghost. */
export const Variants: StoryObj = {
  render: () => (
    <div style={column(24)}>
      <BubbleGroup align="end">
        <Bubble>Your order is on its way and should arrive before 6 PM today.</Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble variant="muted">Sure, I have added a note for the courier to leave it at reception.</Bubble>
      </BubbleGroup>
      <BubbleGroup align="end">
        <Bubble variant="destructive">The payment for your last order failed. Update your card to retry.</Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble variant="ghost">
          Here is a summary of your order: two items ship from our Berlin warehouse today and the third arrives separately on Thursday. You can track both parcels from the Orders page, and we will email you when each one is out for delivery.
        </Bubble>
      </BubbleGroup>
    </div>
  ),
};

/** Figma demo "Alignment": theirs at the start, yours at the end. */
export const Alignment: StoryObj = {
  render: () => (
    <div style={column(24)}>
      <BubbleGroup>
        <Bubble variant="muted">Did the new pricing page go live with this morning's deploy?</Bubble>
      </BubbleGroup>
      <BubbleGroup align="end">
        <Bubble>Yes, it shipped together with the annual plans and the new FAQ.</Bubble>
      </BubbleGroup>
    </div>
  ),
};

/** Figma demo "Reactions": on the bottom or top corner, several with a count, or a short reply. */
export const Reactions: StoryObj = {
  render: () => (
    <div style={column(32)}>
      <BubbleGroup>
        <Bubble variant="muted" reactions="🎉">
          We just passed 10,000 active users, two weeks earlier than planned!
        </Bubble>
      </BubbleGroup>
      <BubbleGroup align="end">
        <Bubble reactions="🚀">Amazing work! Let's celebrate at Friday's all-hands with the whole team.</Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble
          variant="muted"
          reactionsPlacement="top-start"
          reactions={
            <>
              <span>😍🙏</span>
              <span>+2</span>
            </>
          }
        >
          The new onboarding flow cut drop-off during sign-up by almost half.
        </Bubble>
      </BubbleGroup>
      <BubbleGroup align="end">
        <Bubble reactionsPlacement="top-start" reactions="👍">
          Let's share these numbers in next week's investor update.
        </Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble variant="destructive" reactions="Yes run it">
          Are you sure I can run this command?
        </Bubble>
      </BubbleGroup>
    </div>
  ),
};

/** Figma demo "Long message": the first eight lines, then "Show more". */
export const LongMessage: StoryObj = {
  render: () => (
    <div style={column(24)}>
      <BubbleGroup>
        <Bubble variant="muted">Can you sum up what changed in the 2.4 release for our customers?</Bubble>
      </BubbleGroup>
      <BubbleGroup align="end">
        <Bubble collapsible>
          Version 2.4 brings a faster checkout, saved payment methods and a redesigned order history. We fixed the sync issue that duplicated items in carts on slow connections, trimmed the app size by 18% and added offline access to your last 50 orders. Push notifications now group by order, so a busy day no longer floods your lock screen. The full changelog lists everything else, including new accessibility settings, dark mode refinements and support for the latest OS versions on both platforms.
        </Bubble>
      </BubbleGroup>
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <BubbleGroup>
            <Bubble variant="muted" reactions="👍">
              Is the deploy done?
            </Bubble>
          </BubbleGroup>
          <BubbleGroup align="end" footer="Read">
            <Bubble>Yes, all green.</Bubble>
            <Bubble variant="destructive">One migration needs a retry.</Bubble>
          </BubbleGroup>
          <Bubble variant="ghost">A ghost bubble is plain text across the width, for long answers.</Bubble>
        </div>
      ))}
    </div>
  ),
};
