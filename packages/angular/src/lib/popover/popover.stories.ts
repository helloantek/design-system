import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsButton } from '../button/button';
import { DsCheckbox } from '../checkbox/checkbox';
import { DsLeadingIcon } from '../slots/slots';
import { DsSwitch } from '../switch/switch';
import { DsPopover, DsPopoverActions, DsPopoverClose, DsPopoverTrigger } from './popover';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=151-2';

const meta = {
  title: 'Components/Popover',
  decorators: [moduleMetadata({ imports: [DsPopover, DsPopoverTrigger, DsPopoverClose, DsPopoverActions, DsButton, DsLeadingIcon, DsCheckbox, DsSwitch] })],
  parameters: {
    docs: {
      description: {
        component: `Sort UI 2.0 **Popover** ([open in Figma](${FIGMA_URL})) for Angular: \`<div dsPopover>\` renders the same markup and \`ds-popover\` classes as the React Popover. Its trigger is marked \`dsPopoverTrigger\` (\`aria-expanded\`, \`aria-controls\`); the rest is the panel's body, under the header (\`title\`, \`description\`). It opens on \`side\` with \`align\`, \`[(open)]\`. The panel is a \`role="dialog"\` named by its title; focus moves into it, Escape closes it and focus goes back to the trigger, a click outside or focus leaving it closes it. \`dsPopoverClose\` makes a button inside close it; \`dsPopoverActions\` lines up the buttons.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const filter =
  '<svg dsLeadingIcon viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>';

/** Figma demo "Filters": checkboxes and a switch; Reset and the results button. */
export const Filters: StoryObj = {
  render: () => ({
    template: `<div style="min-height: 320px;">
      <div dsPopover title="Filters" align="start">
        <button dsButton variant="outline" dsPopoverTrigger>${filter}Filters</button>
        <div style="display: grid; gap: 12px;">
          <ds-checkbox label="Free cancellation" [checked]="true" />
          <ds-checkbox label="Breakfast included" />
          <ds-checkbox label="Pets allowed" />
        </div>
        <div class="ds-separator" role="none"></div>
        <ds-switch label="Only superhosts" [checked]="true" />
        <div dsPopoverActions style="justify-content: space-between;">
          <button dsButton variant="ghost" size="sm">Reset</button>
          <button dsButton size="sm" dsPopoverClose>Show 128 stays</button>
        </div>
      </div>
    </div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'] },
    template: `<div style="display: grid; grid-template-columns: repeat(2, 1fr);">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; min-height: 240px;">
          <div dsPopover title="Share this playlist" description="Anyone with the link can listen along." align="start" [open]="true">
            <button dsButton variant="outline" dsPopoverTrigger>Share</button>
            <div dsPopoverActions>
              <button dsButton variant="outline" size="sm">Copy link</button>
              <button dsButton variant="ghost" size="sm">Invite</button>
            </div>
          </div>
        </div>
      }
    </div>`,
  }),
};
