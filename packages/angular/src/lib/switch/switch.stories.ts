import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsSwitch } from './switch';

const meta = {
  title: 'Components/Switch',
  decorators: [moduleMetadata({ imports: [DsSwitch] })],
  parameters: {
    docs: {
      description: {
        component: `Sort UI 2.0 **Switch** for Angular: \`<ds-switch>\` renders the same markup and \`ds-switch\` classes as the React Switch – a native checkbox with \`role="switch"\`, in a horizontal Field when it has a \`label\` (\`caption\`, \`error\`, \`control\`, \`card\`). \`[(checked)]\`, Reactive Forms, ngModel and Signal Forms. Without \`label\`, give \`aria-label\` or \`aria-labelledby\`.`,
      },
    },
  },
} satisfies Meta;

export default meta;

/** Figma demo "With description", with a disabled switch. */
export const WithDescription: StoryObj = {
  render: () => ({
    template: `<div style="display: grid; gap: 24px; width: 400px;">
      <ds-switch label="User onboarding emails" caption="Welcome new users with a guide to getting started" [checked]="true" />
      <ds-switch label="Subscription renewal emails" caption="Send customers email receipts for subscription payments" />
      <ds-switch label="Product update notifications" caption="Inform users about the latest features and improvements" disabled />
    </div>`,
  }),
};

/** Figma demo "Sizes": default and sm. */
export const Sizes: StoryObj = {
  render: () => ({
    template: `<div style="display: grid; gap: 24px; width: 400px;">
      <ds-switch label="Autoplay" caption="Keep playing similar tracks when your queue ends." [checked]="true" />
      <ds-switch size="sm" label="Crossfade" caption="Blend the end of one track into the start of the next." [checked]="true" />
    </div>`,
  }),
};

/** Figma demo "Invalid": \`error\` replaces the description and marks the switch. */
export const Invalid: StoryObj = {
  render: () => ({
    template: `<div style="width: 400px;"><ds-switch label="Two-factor authentication" error="Required for admins — turn it on to keep the role." /></div>`,
  }),
};
