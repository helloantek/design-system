import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Card, CardContent, CardFooter, CardHeader } from '../Card';
import { Checkbox } from '../Checkbox';
import { Input } from '../Input';
import { Radio, RadioGroup } from '../Radio';
import { Select, type SelectItem } from '../Select';
import { Switch } from '../Switch';
import { Textarea } from '../Textarea';
import { Field, FieldGroup, FieldLabel, FieldSeparator, FieldSet, type FieldOrientation } from './Field';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=132-3';

const meta = {
  title: 'Components/Field',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Field** page ([open in Figma](${FIGMA_URL})): \`Field\` (Orientation, Control, State, Field Label with Required, Helper and label-addon, Description, Error), \`FieldGroup\`, \`FieldSet\` (Field Label Variant=Legend) and \`FieldSeparator\`. A Field wires its label, description and error to the control: Input, Select, Combobox and Textarea take them from the Field, a native element gets them as attributes, and a custom control reads them with \`useField()\`. Checkbox, Radio and Switch draw their own horizontal Field and Choice Card (\`label\`, \`caption\`, \`card\`).`,
      },
    },
  },
} satisfies Meta;

export default meta;

const regions: SelectItem[] = ['Frankfurt', 'London', 'Virginia', 'Tokyo'].map((label) => ({ value: label.toLowerCase(), label }));
const frameworks: SelectItem[] = ['Next.js', 'Remix', 'Astro', 'SvelteKit'].map((label) => ({ value: label.toLowerCase().replace(/\W/g, ''), label }));

type PlaygroundArgs = { orientation: FieldOrientation; state: 'default' | 'invalid' | 'disabled'; description: boolean; required: boolean; helper: boolean; addon: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { orientation: 'vertical', state: 'default', description: true, required: false, helper: false, addon: false },
  argTypes: {
    orientation: { name: 'Orientation', control: 'inline-radio', options: ['vertical', 'horizontal', 'responsive'] },
    state: { name: 'State', control: 'inline-radio', options: ['default', 'invalid', 'disabled'] },
    description: { name: 'Show Description' },
    required: { name: 'Required' },
    helper: { name: 'Helper' },
    addon: { name: 'Trail addon' },
  },
  render: ({ orientation, state, description, required, helper, addon }) => (
    <div style={{ width: 360 }}>
      <Field
        label="Label"
        orientation={orientation}
        description={description ? 'Description' : undefined}
        error={state === 'invalid' ? 'This field is required.' : undefined}
        disabled={state === 'disabled'}
        required={required}
        helper={helper ? '(Optional)' : undefined}
        labelAddon={addon ? <Badge variant="soft">Badge</Badge> : undefined}
      >
        <Input placeholder="Placeholder" />
      </Field>
    </div>
  ),
};

/** Figma Field State: Default, Invalid and Disabled (Orientation=Vertical, with an Input). */
export const States: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 240px)', gap: 24, alignItems: 'start' }}>
      <Field label="Label" description="Description">
        <Input placeholder="Placeholder" />
      </Field>
      <Field label="Label" description="Description" error="This field is required.">
        <Input placeholder="Placeholder" />
      </Field>
      <Field label="Label" description="Description" disabled>
        <Input placeholder="Placeholder" />
      </Field>
    </div>
  ),
};

/** Figma "Field Label": Variant=Label with Required, Helper and a trail add-on; Variant=Legend is the Field Set's name. */
export const Labels: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, width: 320 }}>
      <FieldLabel htmlFor="labels-email" required helper="(Optional)" addon={<Badge variant="soft">Beta</Badge>}>
        Email
      </FieldLabel>
      <Field label="Display name" required helper="(shown on your profile)">
        <Input placeholder="Ada" />
      </Field>
      <Field label="Bio" labelAddon={<Badge variant="soft">New</Badge>} description="A sentence or two.">
        <Textarea placeholder="What do you do?" />
      </Field>
    </div>
  ),
};

/** Figma demo "Field": a form in a Card; two fields side by side; a Switch's own horizontal Field. */
export const NewProject: StoryObj = {
  render: () => (
    <Card as="section" aria-label="New project" style={{ width: 356 }}>
      <CardHeader title="New project" description="Deploy a repository from your Git provider." />
      <CardContent>
        <FieldGroup>
          <Field label="Project name" description="Lowercase letters, numbers and dashes.">
            <Input defaultValue="launch-site" />
          </Field>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Field label="Region">
              <Select options={regions} defaultValue="frankfurt" />
            </Field>
            <Field label="Framework">
              <Select options={frameworks} defaultValue="nextjs" />
            </Field>
          </div>
          <Switch label="Preview deployments" caption="Every pull request gets its own link to review." defaultChecked />
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">Create project</Button>
      </CardFooter>
    </Card>
  ),
};

/** Figma demo "Orientation": vertical, horizontal (the controls' own Fields) and responsive, divided by Field Separators. */
export const Orientation: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, width: 440 }}>
      <FieldSet legend="Vertical">
        <Field label="Playlist name" description="Shown to anyone you share the link with.">
          <Input defaultValue="Late night focus" />
        </Field>
      </FieldSet>
      <FieldSeparator />
      <FieldSet legend="Horizontal">
        <Switch label="Autoplay similar tracks" caption="Keeps the music going when the playlist ends." defaultChecked />
        <Checkbox label="Hide explicit tracks" />
      </FieldSet>
      <FieldSeparator />
      <FieldSet legend="Responsive">
        <Field label="Crossfade" description="Seconds of overlap between two tracks." orientation="responsive">
          <Input defaultValue="6 seconds" style={{ width: 128 }} />
        </Field>
      </FieldSet>
    </div>
  ),
};

/** Figma demo "Disabled": a disabled Field fades its label; the controls are disabled with it. */
export const Disabled: StoryObj = {
  render: () => (
    <FieldGroup style={{ width: 360 }}>
      <Field label="Plan" description="Managed by the account owner; ask them to change it." disabled>
        <Input defaultValue="Family · 6 accounts" />
      </Field>
      <Switch label="Offline downloads" caption="Included with every Family plan." defaultChecked disabled />
      <Checkbox label="Email me the monthly listening recap" disabled />
    </FieldGroup>
  ),
};

/** Figma demo "Validation": the error goes under the description and turns the label and the control red. */
export const Validation: StoryObj = {
  render: function Render() {
    const [value, setValue] = useState('ada lovelace!');
    const error = /\s/.test(value) ? "Spaces aren't allowed." : /[^\w.]/.test(value) ? 'Only letters, numbers, dots and underscores.' : undefined;
    return (
      <div style={{ width: 360 }}>
        <Field label="Username" error={error} description="Use letters, numbers, dots and underscores only." required>
          <Input value={value} onChange={(event) => setValue(event.currentTarget.value)} />
        </Field>
      </div>
    );
  },
};

/** Figma demo "Fieldset": a Field Set's 16 px legend and description over radios (`RadioGroup` with the Field Set look). */
export const Fieldset: StoryObj = {
  render: () => (
    <div style={{ width: 360 }}>
      <RadioGroup className="ds-fieldset--set" label="Backup frequency" caption="How often new photos are copied to the cloud." defaultValue="daily">
        <Radio value="hourly" label="Every hour" caption="Best for phones that are online all day." />
        <Radio value="daily" label="Once a day" caption="Runs overnight while the phone is charging." />
        <Radio value="wifi" label="Only on Wi-Fi" caption="Waits for Wi-Fi, then uploads everything at once." />
      </RadioGroup>
    </div>
  ),
};

/** Figma demo "Choice cards": the controls' `card` (Figma "Choice Card") in a Field Set. */
export const ChoiceCards: StoryObj = {
  render: () => (
    <div style={{ width: 360 }}>
      <RadioGroup className="ds-fieldset--set" label="Storage plan" caption="Change or cancel at any time; billed monthly." defaultValue="standard">
        <Radio card control="end" value="basic" label="Basic" caption="100 GB for photos and documents." />
        <Radio card control="end" value="standard" label="Standard" caption="2 TB with room for videos and a full phone backup." />
        <Radio card control="end" value="premium" label="Premium" caption="10 TB shared with up to five family members." />
      </RadioGroup>
    </div>
  ),
};

/** Figma "Field Separator": Content=None and Content=Text, e.g. between sign-in methods. */
export const Separator: StoryObj = {
  render: () => (
    <FieldGroup style={{ width: 320 }}>
      <Button variant="outline">Continue with Google</Button>
      <FieldSeparator>or</FieldSeparator>
      <Field label="Email">
        <Input type="email" placeholder="ada@example.com" />
      </Field>
      <FieldSeparator />
      <Button>Continue</Button>
    </FieldGroup>
  ),
};

/** A date in a Field: the design system's Input with `type="date"` (the calendar icon and the date format come from the browser until Date Picker). */
export const DateInput: StoryObj = {
  render: () => (
    <div style={{ width: 320 }}>
      <Field label="Birthday" description="We send a song on the day.">
        <Input type="date" />
      </Field>
    </div>
  ),
};

/**
 * Any element works: a plain `<select>` gets the id, the description and the state as attributes. The Field styles only
 * its label, description and error, so the element keeps the browser's own look; use Select for the design system's.
 */
export const NativeElement: StoryObj = {
  render: () => (
    <div style={{ width: 320 }}>
      <Field label="Audio quality" description="A plain <select>, drawn by the browser.">
        <select defaultValue="high">
          <option value="normal">Normal</option>
          <option value="high">High</option>
          <option value="lossless">Lossless</option>
        </select>
      </Field>
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24 }}>
          <FieldSet legend="Profile" description="How others see you.">
            <Field label="Name" required>
              <Input defaultValue="Ada Lovelace" />
            </Field>
            <FieldSeparator>or</FieldSeparator>
            <Field label="Handle" error="That handle is taken.">
              <Input defaultValue="ada" />
            </Field>
          </FieldSet>
        </div>
      ))}
    </div>
  ),
};
