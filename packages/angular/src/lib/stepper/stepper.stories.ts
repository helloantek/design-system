import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsStepper, DsStepperItem } from './stepper';
import { DsButton } from '../button/button';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6714-1290';

const meta = {
  title: 'Components/Stepper',
  decorators: [moduleMetadata({ imports: [DsStepper, DsStepperItem, DsButton] })],
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Stepper**, **Stepper Item** and **Stepper Indicator** ([open in Figma](${FIGMA_URL})) for Angular: \`<ol dsStepper>\` with the same markup and \`ds-stepper\` classes as the React Stepper. \`orientation\` (horizontal · vertical), \`variant\` (Figma "Style": \`indicator\` · \`bar\`, horizontal only), and either \`steps\` with \`current\` or \`<li dsStepperItem>\` children: \`state\` (upcoming · current · complete · error), \`label\`, \`caption\`, \`number\` (defaults to its place). The current step has \`aria-current="step"\`, and done or failed steps say so to screen readers (\`statusLabel\`).`,
      },
    },
  },
} satisfies Meta;

export default meta;

const STEPS = [
  { label: 'Account', caption: 'Email and password' },
  { label: 'Workspace', caption: 'Name and address' },
  { label: 'Team', caption: 'Invite people' },
  { label: 'Billing', caption: 'Plan and card' },
  { label: 'Done', caption: 'Start working' },
];

/** Figma Stepper Item: every State in each Orientation and Style (one step on its own, with its line). */
export const States: StoryObj = {
  render: () => ({
    props: {
      rows: [
        ['horizontal', 'indicator'],
        ['vertical', 'indicator'],
        ['horizontal', 'bar'],
      ],
      states: ['upcoming', 'current', 'complete', 'error'],
    },
    template: `<div style="display: grid; gap: 32px;">
      @for (row of rows; track $index) {
        <div style="display: flex; gap: 24px; flex-wrap: wrap;">
          @for (state of states; track state) {
            <div [style.width.px]="row[0] === 'vertical' ? 240 : 160">
              <ol dsStepper [attr.aria-label]="state + ' ' + row[0] + ' ' + row[1]" [orientation]="$any(row[0])" [variant]="$any(row[1])">
                <li dsStepperItem [state]="$any(state)" label="Label" caption="Caption" [showLine]="true"></li>
              </ol>
            </div>
          }
        </div>
      }
    </div>`,
  }),
};

/** Figma Stepper: Horizontal and Vertical with 3, 4 and 5 steps, and Style=Bar. */
export const Steps: StoryObj = {
  render: () => ({
    props: { counts: [3, 4, 5], STEPS },
    template: `<div style="display: grid; gap: 40px;">
      @for (n of counts; track n) {
        <div [style.width.px]="n * 150"><ol dsStepper [attr.aria-label]="n + ' steps'" [current]="1" [steps]="STEPS.slice(0, n)"></ol></div>
      }
      @for (n of counts; track n) {
        <div [style.width.px]="n * 150"><ol dsStepper [attr.aria-label]="n + ' steps, bar'" variant="bar" [current]="1" [steps]="STEPS.slice(0, n)"></ol></div>
      }
      <div style="display: flex; gap: 40px; flex-wrap: wrap;">
        @for (n of counts; track n) {
          <div style="width: 280px;"><ol dsStepper [attr.aria-label]="n + ' steps, vertical'" orientation="vertical" [current]="1" [steps]="STEPS.slice(0, n)"></ol></div>
        }
      </div>
    </div>`,
  }),
};

/** A step that failed: the cross, the label in destructive, and a caption that says why. */
export const WithError: StoryObj = {
  render: () => ({
    template: `<div style="width: 600px;">
      <ol dsStepper aria-label="Import">
        <li dsStepperItem state="complete" label="Upload" caption="contacts.csv"></li>
        <li dsStepperItem state="error" label="Check columns" caption="2 columns have no name"></li>
        <li dsStepperItem label="Match fields" caption="Map to contacts"></li>
        <li dsStepperItem label="Import" caption="Add 1,204 contacts"></li>
      </ol>
    </div>`,
  }),
};

/** A form that moves through the steps with Back and Next. */
export const InAForm: StoryObj = {
  render: () => ({
    props: { current: 0, steps: STEPS.slice(0, 4) },
    template: `<div style="display: grid; gap: 24px; width: 600px;">
      <ol dsStepper aria-label="Create a workspace" [current]="current" [steps]="steps"></ol>
      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button dsButton variant="outline" [disabled]="current === 0" (click)="current = current - 1">Back</button>
        <button dsButton [disabled]="current === steps.length" (click)="current = current + 1">{{ current >= steps.length - 1 ? 'Finish' : 'Next' }}</button>
      </div>
    </div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'], three: STEPS.slice(0, 3) },
    template: `<div style="display: grid; grid-template-columns: repeat(2, 1fr);">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 32px;">
          <ol dsStepper [attr.aria-label]="'Setup (' + scheme + ')'">
            <li dsStepperItem state="complete" label="Account" caption="Email"></li>
            <li dsStepperItem state="current" label="Workspace" caption="Name"></li>
            <li dsStepperItem state="error" label="Team" caption="Invite"></li>
            <li dsStepperItem label="Billing" caption="Card"></li>
          </ol>
          <ol dsStepper [attr.aria-label]="'Setup, bar (' + scheme + ')'" variant="bar" [current]="1" [steps]="three"></ol>
        </div>
      }
    </div>`,
  }),
};
