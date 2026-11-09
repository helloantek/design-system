import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsDialog, DsDialogClose, DsDialogFooter, DsDialogTrigger } from './dialog';
import { DsButton } from '../button/button';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=182-2';

const meta = {
  title: 'Components/Dialog',
  decorators: [moduleMetadata({ imports: [DsDialog, DsDialogTrigger, DsDialogFooter, DsDialogClose, DsButton] })],
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Dialog** ([open in Figma](${FIGMA_URL})) for Angular: \`<ds-dialog>\` with the same markup and \`ds-dialog\` classes as the React Dialog. The header (\`title\`, \`description\`, Figma "Close button" → \`closeButton\`), any content, and the footer in \`<ng-container dsDialogFooter>\`. \`dsDialogTrigger\` marks the element that opens it (or use \`[(open)]\`); \`dsDialogClose\` makes a footer button close it. A native modal \`<dialog>\`: focus moves inside and stays there, the page behind is inert and does not scroll, Escape, the Close button or a click on the backdrop closes it, and focus goes back to the trigger. 448 px wide (\`width\` changes it); \`footerVariant="muted"\` gives the "Sticky footer" demo's fill.`,
      },
    },
  },
} satisfies Meta;

export default meta;

type PlaygroundArgs = { title: string; description: string; closeButton: boolean; footer: boolean; footerVariant: 'default' | 'muted'; width: string };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { title: 'Dialog title', description: 'Dialog description — what this dialog does and what happens next.', closeButton: true, footer: true, footerVariant: 'default', width: '448px' },
  argTypes: {
    closeButton: { name: 'Close button' },
    footer: { name: 'Footer' },
    footerVariant: { control: 'inline-radio', options: ['default', 'muted'] },
  },
  render: (args) => ({
    props: args,
    template: `<ds-dialog [title]="title || undefined" [description]="description || undefined" [aria-label]="title ? undefined : 'Dialog'" [closeButton]="closeButton" [footerVariant]="footerVariant" [width]="width">
      <button dsButton dsDialogTrigger variant="outline">Open dialog</button>
      <p style="margin: 0px;">Dialog content — fields, a list, a preview; the popup grows with it and scrolls past the viewport.</p>
      @if (footer) {
        <ng-container dsDialogFooter>
          <button dsButton dsDialogClose variant="outline">Cancel</button>
          <button dsButton dsDialogClose>Continue</button>
        </ng-container>
      }
    </ds-dialog>`,
  }),
};
