import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsAutonomyDial, DsAutonomyIcon, type AutonomyAction } from './autonomy-dial';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6115-1920';

const meta = {
  title: 'Patterns/Autonomy Dial',
  decorators: [moduleMetadata({ imports: [DsAutonomyDial, DsAutonomyIcon] })],
  parameters: {
    docs: {
      description: {
        component: `The Sort UI 2.0 pattern **Autonomy Dial** ([open in Figma](${FIGMA_URL})) for Angular: \`<section dsAutonomyDial>\` with the same markup and \`ds-autonomy\` classes as the React AutonomyDial. Three stops (\`[(value)]\`: \`ask\`, \`risky\`, \`auto\`) and every action split between "Runs on its own" and "Asks you first", each with its \`tool\` and \`risk\`; \`locked\` actions always ask, and their lock says why in a Tooltip. \`runsOnItsOwn(action, level)\` gives the same split.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// min(420px, calc(100vw - 32px)), written as the CSSOM serialises React's inline style.
const WIDTH = 'style="width: min(420px, -32px + 100vw);"';
const ACTIONS: AutonomyAction[] = [
  { label: 'Read the help center', tool: 'notion' },
  { label: 'Tag and sort tickets', tool: 'database' },
  { label: 'Draft replies', tool: 'mail' },
  { label: 'Send replies', tool: 'mail', risk: 'risky' },
  { label: 'Update customer records', tool: 'database', risk: 'risky' },
  { label: 'Give refunds', tool: 'google', risk: 'destructive', locked: 'Locked by your admin: refunds always ask, whatever the dial says.' },
  { label: 'Delete customer data', tool: 'drive', risk: 'destructive', locked: 'Locked by your admin: deleting data always asks, whatever the dial says.' },
];

/** Figma "If risky": everyday work runs on its own, risky actions ask. Move the dial. */
export const IfRisky: StoryObj = {
  render: () => ({
    props: { ACTIONS, level: 'risky' },
    template: `<div ${WIDTH}><section dsAutonomyDial agent="Support agent" [actions]="ACTIONS" [(value)]="level"></section></div>`,
  }),
};

/** Figma "Always ask": everything waits for you. */
export const AlwaysAsk: StoryObj = {
  render: () => ({
    props: { ACTIONS },
    template: `<div ${WIDTH}><section dsAutonomyDial agent="Support agent" [actions]="ACTIONS" value="ask"></section></div>`,
  }),
};

/** Figma "Full auto": all but the locked actions move over; a lock says why on hover or focus. */
export const FullAuto: StoryObj = {
  render: () => ({
    props: { ACTIONS },
    template: `<div ${WIDTH}><section dsAutonomyDial agent="Support agent" [actions]="ACTIONS" value="auto"></section></div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], ACTIONS },
    template: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px;">
          <section dsAutonomyDial [aria-label]="'Support agent (' + scheme + ')'" agent="Support agent" [actions]="ACTIONS" value="risky"></section>
        </div>
      }
    </div>`,
  }),
};
