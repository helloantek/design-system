import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsAvatar } from './avatar';
import { DsIcon } from '../slots/slots';
import { avatarImage } from '../fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=174-6534';

const meta = {
  title: 'Components/Avatar',
  decorators: [moduleMetadata({ imports: [DsAvatar, DsIcon] })],
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Avatar** and **Avatar Group** ([open in Figma](${FIGMA_URL})) for Angular: \`<span dsAvatar>\` and \`<span dsAvatarGroup>\` with the same markup and \`ds-avatar\` classes as the React Avatar. The variant follows the content: \`src\` → image, \`initials\` → fallback, neither → icon (a person, or an icon marked \`dsIcon\`); a picture that fails to load falls back. \`size\`, \`shape\`, \`ring\`; \`name\` is the accessible name. The group gives its avatars its size and the ring, and shows "+N" when \`total\` is more than the avatars given.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const plus = `<svg dsIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.875" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M12 5v14"></path></svg>`;

/** Every Figma variant, size and shape. */
export const Variants: StoryObj = {
  render: () => ({
    props: { avatarImage, sizes: ['xs', 'sm', 'default', 'lg', 'xl'], shapes: ['round', 'square'], variants: ['image', 'fallback', 'icon'] },
    template: `<div style="display: grid; grid-template-columns: 140px repeat(5, auto); gap: 16px; place-items: center; font-family: var(--ds-font-sans); font-size: 12px; color: var(--ds-muted-foreground);">
      <span></span>
      @for (s of sizes; track s) { <span>{{ s }}</span> }
      @for (shape of shapes; track shape) {
        @for (variant of variants; track variant) {
          <div style="display: contents;">
            <span style="justify-self: start;">{{ variant }} · {{ shape }}</span>
            @for (size of sizes; track size) {
              @if (variant === 'image') { <span dsAvatar [size]="size" [shape]="shape" [src]="avatarImage"></span> }
              @else if (variant === 'fallback') { <span dsAvatar [size]="size" [shape]="shape" initials="SH"></span> }
              @else { <span dsAvatar [size]="size" [shape]="shape">${plus}</span> }
            }
          </div>
        }
      }
    </div>`,
  }),
};
