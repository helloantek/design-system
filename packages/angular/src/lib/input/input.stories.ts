import type { Meta, StoryObj } from '@storybook/angular';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { DsInput, DsInputAction, DsPrefix, DsSuffix, type InputSize, type InputVariant } from './input';
import { DsButton } from '../button/button';
import { DsLeadingIcon, DsTrailingIcon } from '../slots/slots';
import { remix } from '../fixtures';
import { FormsDemo } from '../forms.demo';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=82-50';
const variants: InputVariant[] = ['default', 'shadow', 'soft'];
const sizes: InputSize[] = ['xl', 'lg', 'default'];
const at = remix('at', 'dsLeadingIcon');
const info = remix('informationFill', 'dsTrailingIcon');
const grid = (columns: number) =>
  `display: grid; grid-template-columns: repeat(${columns}, 280px); gap: 24px; font-family: var(--ds-font-sans); font-size: 12px; color: var(--ds-muted-foreground)`;
const width = (px: number | 'auto') => componentWrapperDecorator((story) => `<div style="width: ${px === 'auto' ? 'auto' : `${px}px`}">${story}</div>`);

// The rows of AllVariants and Themes (Figma Input Group kinds): the inputs and what goes inside them.
const kinds: Record<string, { attrs: string; inner: string }> = {
  Default: { attrs: 'placeholder="mail@domain.com"', inner: at + info },
  Shortcut: { attrs: 'placeholder="Search" shortcut="/"', inner: at },
  'Add-on': { attrs: 'placeholder="domain" addonBefore="https://" addonAfter=".com"', inner: info },
  'Inline add-on': { attrs: 'placeholder="domain" prefix="https://" suffix=".com"', inner: info },
  'Tail button': { attrs: 'placeholder="mail@domain.com"', inner: at + info + '<button dsInputAction>Send</button>' },
};

const meta = {
  title: 'Components/Input',
  decorators: [moduleMetadata({ imports: [DsInput, DsInputAction, DsPrefix, DsSuffix, DsLeadingIcon, DsTrailingIcon, DsButton] }), width(320)],
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 component sets **Input** ([open in Figma](${FIGMA_URL})), **Input Group** and **Field** for Angular: \`<ds-input>\` renders the React Input's markup. The value is \`[(value)]\`; it works with Signal Forms (\`[formField]\`), Reactive Forms and \`ngModel\`. \`size\` is Figma Size (\`xl\` 40 px, \`lg\` 36 px, \`default\` 32 px); icons are projected with \`dsLeadingIcon\` / \`dsTrailingIcon\`, the T-slot button is \`<button dsInputAction>\`, richer affixes \`[dsPrefix]\` / \`[dsSuffix]\`. Focus is \`:focus-within\`, Invalid is \`error\`, Disabled is \`disabled\`.`,
      },
    },
  },
} satisfies Meta;

export default meta;

type PlaygroundArgs = { label: string; caption: string; error: string; placeholder: string; variant: InputVariant; size: InputSize; disabled: boolean; leadIcon: boolean; tailIcon: boolean; shortcut: string; prefix: string; suffix: string; addons: boolean; action: string };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { label: 'Label', caption: 'Caption text', error: '', placeholder: 'mail@domain.com', variant: 'default', size: 'default', disabled: false, leadIcon: true, tailIcon: true, shortcut: '', prefix: '', suffix: '', addons: false, action: '' },
  argTypes: {
    variant: { control: 'inline-radio', options: variants },
    size: { control: 'inline-radio', options: sizes },
    addons: { description: 'Show prefix/suffix as joined segments (Add-on) instead of inline (Inline add-on)' },
  },
  render: (args) => ({
    props: args,
    template: `<ds-input [label]="label" [caption]="caption" [error]="error || undefined" [placeholder]="placeholder" [variant]="variant" [size]="size" [disabled]="disabled"
        [shortcut]="shortcut || undefined" [prefix]="!addons && prefix ? prefix : undefined" [suffix]="!addons && suffix ? suffix : undefined"
        [addonBefore]="addons && prefix ? prefix : undefined" [addonAfter]="addons && suffix ? suffix : undefined">
      @if (leadIcon) { ${at} } @if (tailIcon) { ${info} } @if (action) { <button dsInputAction>{{ action }}</button> }
    </ds-input>`,
  }),
};

/** Every slot combination in the static states. Focus an input to see Focus. */
export const AllVariants: StoryObj = {
  decorators: [width('auto')],
  render: () => ({
    template: `<div style="${grid(4)}">
      <span>Placeholder</span><span>Filled</span><span>Invalid</span><span>Disabled</span>
      ${Object.entries(kinds)
        .map(
          ([name, { attrs, inner }]) => `<div style="display: contents">
        <ds-input ${attrs} label="${name}" caption="Caption text">${inner}</ds-input>
        <ds-input ${attrs} label="${name}" caption="Caption text" value="${name === 'Shortcut' ? 'design system' : 'apple'}">${inner}</ds-input>
        <ds-input ${attrs} label="${name}" error="Error message">${inner}</ds-input>
        <ds-input ${attrs} label="${name}" caption="Caption text" disabled>${inner}</ds-input>
      </div>`,
        )
        .join('')}
    </div>`,
  }),
};

export const Styles: StoryObj = {
  decorators: [width('auto')],
  render: () => ({
    props: { variants },
    template: `<div style="${grid(3)}">
      @for (variant of variants; track variant) {
        <ds-input [variant]="variant" [label]="variant" caption="Caption text" ${kinds['Default'].attrs}>${kinds['Default'].inner}</ds-input>
      }
    </div>`,
  }),
};

/** Figma Size: 40, 36 and 32 px, next to the Button of the same size. */
export const Sizes: StoryObj = {
  decorators: [width('auto')],
  render: () => ({
    props: { sizes },
    template: `<div style="display: grid; gap: 16px">
      @for (size of sizes; track size) {
        <div style="display: flex; gap: 8px; align-items: flex-end; width: 400px">
          <ds-input [size]="size" [label]="size" placeholder="mail@domain.com">${at}</ds-input>
          <button dsButton [size]="size">Subscribe</button>
        </div>
      }
    </div>`,
  }),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  decorators: [width('auto')],
  render: () => ({
    props: { variants, schemes: ['light', 'dark'] },
    template: `<div style="display: grid; grid-template-columns: repeat(2, 1fr)">
      @for (scheme of schemes; track scheme) {
        <div data-ds-brand="theme-1" [attr.data-ds-scheme]="scheme" style="background: var(--ds-background); padding: 24px; display: grid; gap: 16px">
          <div style="font-family: var(--ds-font-sans); font-size: 12px; color: var(--ds-muted-foreground)">{{ scheme === 'light' ? 'Light' : 'Dark' }}</div>
          @for (variant of variants; track variant) {
            <ds-input [variant]="variant" [label]="variant" caption="Caption text" ${kinds['Default'].attrs}>${kinds['Default'].inner}</ds-input>
          }
          <ds-input label="Invalid" error="Error message" value="hey@sortui" ${kinds['Tail button'].attrs}>${kinds['Tail button'].inner}</ds-input>
          <ds-input label="Disabled" caption="Caption text" disabled ${kinds['Shortcut'].attrs}>${kinds['Shortcut'].inner}</ds-input>
        </div>
      }
    </div>`,
  }),
};

/** Figma Input Group "Alignment" demo: inline text, and Block start / Block end rows in the same box. */
export const InputGroupAlignment: StoryObj = {
  decorators: [width(380)],
  render: () => ({
    template: `<div style="display: grid; gap: 12px">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px">
        <ds-input aria-label="Invoice number" prefix="INV-" value="2048" />
        <ds-input aria-label="Payment terms" suffix="days" value="30" />
      </div>
      <ds-input blockStart="Client" value="Northlight Studio" />
      <ds-input aria-label="Project" value="Design and build of the new site" blockEnd="Shown on the invoice PDF" />
    </div>`,
  }),
};

/** Figma Input Group "Dividers" demo: add-ons and a Block end split off by lines. */
export const InputGroupDividers: StoryObj = {
  decorators: [width(380)],
  render: () => ({
    template: `<div style="display: grid; gap: 12px">
      <ds-input aria-label="Website" addonBefore="https://" placeholder="example" addonAfter=".com" />
      <ds-input blockStart="Release notes" blockDivider placeholder="What changed in 2.5.0?" />
    </div>`,
  }),
};

/** Figma Input Group "Loading" and "Character count" demos. */
export const InputGroupStatus: StoryObj = {
  render: () => ({
    props: { name: 'Shiryoku' },
    template: `<div style="display: grid; gap: 16px">
      <ds-input aria-label="Workspace" value="Shiryoku" loading />
      <ds-input aria-label="Team URL" prefix="example.com/" value="design-team" suffix="Checking" loading="end" />
      <ds-input label="Display name" caption="Shown on your profile and comments." [maxlength]="24" [(value)]="name" [suffix]="name.length + '/24'">
        ${remix('user', 'dsLeadingIcon')}
        @if (name) { <button dsInputAction variant="ghost" aria-label="Clear" (click)="name = ''">${remix('close')}</button> }
      </ds-input>
    </div>`,
  }),
};

/**
 * Angular only: Input and Checkbox bound with Signal Forms (\`[formField]\`), Reactive Forms (\`formControlName\`) and
 * \`ngModel\`; type or tick and the values follow. The React Storybook has a stand-in with this id; both are tagged
 * "angular-only", so the parity check renders this one without comparing it and tests the bindings instead.
 */
export const FormsAngular: StoryObj = {
  name: 'Forms (Angular)',
  tags: ['angular-only', '!autodocs'],
  decorators: [width('auto')],
  render: () => ({ moduleMetadata: { imports: [FormsDemo] }, template: '<ds-forms-demo />' }),
};
