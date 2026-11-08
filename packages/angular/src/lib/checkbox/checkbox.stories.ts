import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsCheckbox, DsCheckboxGroup } from './checkbox';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=121-2';
const caption = 'font-family: var(--ds-font-sans); font-size: 12px; color: var(--ds-muted-foreground)';
const states = ['Default', 'Focus', 'Disabled', 'Invalid'];

const meta = {
  title: 'Components/Checkbox',
  decorators: [moduleMetadata({ imports: [DsCheckbox, DsCheckboxGroup] })],
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Checkbox** ([open in Figma](${FIGMA_URL})) for Angular: \`<ds-checkbox>\` renders the React Checkbox's markup on a native \`<input type="checkbox">\`, with **Field** Orientation=Horizontal for \`label\`, \`caption\` and \`error\` (\`control\`: \`start\` · \`end\`; \`card\` for Figma's choice cards) and **Field Group** for \`<fieldset dsCheckboxGroup>\`. Figma Checked = \`[(checked)]\`; it works with Signal Forms (\`[formField]\`), Reactive Forms and \`ngModel\`. State: Focus = keyboard focus, Disabled = \`disabled\`, Invalid = \`invalid\` or \`error\`. \`indeterminate\` draws the minus of Figma's demos. Without \`label\`, \`aria-label\` is required.`,
      },
    },
  },
} satisfies Meta;

export default meta;

type PlaygroundArgs = { checked: boolean; indeterminate: boolean; state: 'Default' | 'Invalid' | 'Disabled'; label: string; caption: string; error: string; control: 'start' | 'end' };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { checked: true, indeterminate: false, state: 'Default', label: 'Subscription renewal emails', caption: 'Send customers email receipts for subscription payments', error: 'This field is required.', control: 'start' },
  argTypes: {
    checked: { name: 'Checked' },
    indeterminate: { description: 'Not a Figma variant: the minus of the demos' },
    state: { name: 'State', control: 'inline-radio', options: ['Default', 'Invalid', 'Disabled'], description: 'Focus: press Tab' },
    label: { name: 'Field Label', description: 'Empty: a bare checkbox (aria-label)' },
    caption: { name: 'Description' },
    error: { name: 'Error', if: { arg: 'state', eq: 'Invalid' } },
    control: { name: 'Control', control: 'inline-radio', options: ['start', 'end'] },
  },
  render: (args) => ({
    props: args,
    template: `@if (label) {
      <div style="width: 360px">
        <ds-checkbox [(checked)]="checked" [(indeterminate)]="indeterminate" [disabled]="state === 'Disabled'" [label]="label" [caption]="caption || undefined" [error]="state === 'Invalid' ? error : undefined" [control]="control" />
      </div>
    } @else {
      <ds-checkbox [(checked)]="checked" [(indeterminate)]="indeterminate" [disabled]="state === 'Disabled'" [invalid]="state === 'Invalid'" aria-label="Checkbox" />
    }`,
  }),
};

/** Figma "Checkbox": Checked × State, plus indeterminate. State=Focus is keyboard focus: press Tab to see it. */
export const Variants: StoryObj = {
  render: () => ({
    props: { states, rows: ['Checked=False', 'Checked=True', 'indeterminate'] },
    template: `<div style="display: grid; grid-template-columns: 120px repeat(4, 64px); gap: 16px; place-items: center">
      <span></span>
      @for (s of states; track s) { <span style="${caption}">{{ s }}</span> }
      @for (row of rows; track row) {
        <div style="display: contents">
          <span style="${caption}; justify-self: start">{{ row }}</span>
          @for (s of states; track s) {
            <ds-checkbox [aria-label]="row + ', ' + s" [checked]="row === 'Checked=True'" [indeterminate]="row === 'indeterminate'" [disabled]="s === 'Disabled'" [invalid]="s === 'Invalid'" />
          }
        </div>
      }
    </div>`,
  }),
};

/** Figma "Field" Orientation=Horizontal: Control (start, end) × State (Default, Invalid, Disabled). */
export const Field: StoryObj = {
  render: () => ({
    props: { controls: ['start', 'end'] },
    template: `<div style="display: grid; grid-template-columns: repeat(2, 320px); gap: 32px">
      @for (control of controls; track control) {
        <div style="display: grid; gap: 24px; align-content: start">
          <span style="${caption}">Control={{ control === 'start' ? 'Start' : 'End' }}</span>
          <ds-checkbox [control]="control" label="Label" caption="Description" />
          <ds-checkbox [control]="control" label="Label" caption="Description" error="This field is required." />
          <ds-checkbox [control]="control" label="Label" caption="Description" disabled />
        </div>
      }
    </div>`,
  }),
};

/** Figma demo "Checkbox": fields with descriptions, 20 px apart. */
export const WithDescriptions: StoryObj = {
  render: () => ({
    template: `<div style="display: grid; gap: 20px; width: 440px">
      <ds-checkbox label="User onboarding emails" caption="Welcome new users with a guide to getting started" />
      <ds-checkbox label="Subscription renewal emails" caption="Send customers email receipts for subscription payments" [checked]="true" />
      <ds-checkbox label="Product update notifications" caption="Inform users about the latest features and improvements" disabled />
    </div>`,
  }),
};

/** Figma demo "Checkbox group": a fieldset with a legend and description. */
export const Group: StoryObj = {
  render: () => ({
    template: `<div style="width: 440px">
      <fieldset dsCheckboxGroup label="Import from Tunely" caption="Choose what to bring over to your new library.">
        <ds-checkbox label="Playlists" />
        <ds-checkbox label="Liked songs" [checked]="true" />
        <ds-checkbox label="Followed artists" />
        <ds-checkbox label="Podcast subscriptions" />
        <ds-checkbox label="Listening history" />
      </fieldset>
    </div>`,
  }),
};

const channels = ['Direct messages', 'Mentions', 'Comments on your posts'];

/** Figma demo "Nested": the parent is indeterminate while some children are checked; clicking it sets them all. */
export const Nested: StoryObj = {
  render: () => ({
    props: {
      channels,
      on: ['Mentions'],
      all(this: { on: string[] }) {
        return this.on.length === channels.length;
      },
      toggleAll(this: { on: string[]; all(): boolean }) {
        this.on = this.all() ? [] : [...channels];
      },
      set(this: { on: string[] }, c: string, v: boolean) {
        this.on = v ? [...this.on, c] : this.on.filter((x) => x !== c);
      },
    },
    template: `<div style="width: 408px">
      <fieldset dsCheckboxGroup label="Deliver to">
        <ds-checkbox label="Push notifications" caption="Alerts on your phone and desktop." [checked]="all()" [indeterminate]="on.length > 0 && !all()" (checkedChange)="toggleAll()" aria-controls="push-channels" />
        <div id="push-channels" style="display: grid; gap: 12px; padding-left: 24px">
          @for (c of channels; track c) {
            <ds-checkbox [label]="c" [checked]="on.includes(c)" (checkedChange)="set(c, $event)" />
          }
        </div>
        <ds-checkbox label="SMS alerts" caption="Available once a phone number is verified." disabled />
      </fieldset>
    </div>`,
  }),
};

/** Figma demo "Choice cards": \`card\` puts the field in a bordered card, filled when checked; the whole card is clickable. */
export const ChoiceCards: StoryObj = {
  render: () => ({
    template: `<div style="display: grid; gap: 8px; width: 448px">
      <ds-checkbox card label="Extra storage" caption="Another 200 GB for photos and backups." />
      <ds-checkbox card label="Family sharing" caption="Share the plan with up to five people." [checked]="true" />
      <ds-checkbox card label="Priority support" caption="Answers within an hour, day or night." />
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 16px">
        <ds-checkbox card label="Email receipts" caption="A copy of every invoice in your inbox." />
        <ds-checkbox card label="Usage alerts" caption="A heads-up at 80% of your storage." [checked]="true" />
      </div>
    </div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => ({
    props: { schemes: ['light', 'dark'] },
    template: `<div style="display: grid; grid-template-columns: repeat(2, 1fr)">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 16px; align-content: start">
          <div style="${caption}">{{ scheme === 'light' ? 'Light' : 'Dark' }}</div>
          <div style="display: flex; gap: 16px">
            <ds-checkbox [aria-label]="'Unchecked (' + scheme + ')'" />
            <ds-checkbox [aria-label]="'Checked (' + scheme + ')'" [checked]="true" />
            <ds-checkbox [aria-label]="'Indeterminate (' + scheme + ')'" [indeterminate]="true" />
            <ds-checkbox [aria-label]="'Invalid (' + scheme + ')'" invalid />
            <ds-checkbox [aria-label]="'Disabled (' + scheme + ')'" [checked]="true" disabled />
          </div>
          <ds-checkbox label="Subscription renewal emails" caption="Send customers email receipts for subscription payments" [checked]="true" />
          <ds-checkbox label="Accept the terms" error="This field is required." />
          <ds-checkbox card label="Family sharing" caption="Share the plan with up to five people." [checked]="true" />
        </div>
      }
    </div>`,
  }),
};
