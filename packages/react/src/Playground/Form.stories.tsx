import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type FormEvent } from 'react';
import { RiAtLine, RiQuestionLine, RiSearchLine, RiUser3Line } from '@remixicon/react';
import { Alert } from '../Alert';
import { Button } from '../Button';
import { Card, CardContent, CardFooter, CardHeader } from '../Card';
import { Checkbox } from '../Checkbox';
import { Combobox } from '../Combobox';
import { Field, FieldGroup, FieldSeparator, FieldSet } from '../Field';
import { Input, type InputSize, type InputVariant } from '../Input';
import { Radio, RadioGroup } from '../Radio';
import { Select, type SelectItem } from '../Select';
import { Slider } from '../Slider';
import { Toaster, toast } from '../Sonner';
import { Switch } from '../Switch';
import { Textarea } from '../Textarea';
import { Tooltip } from '../Tooltip';

// A real form built only from design-system components: try them together (tab order, validation, submission,
// brands and schemes from the toolbar) before a component is merged. Not a component; nothing here ships.

const roles: SelectItem[] = [
  { value: 'designer', label: 'Designer' },
  { value: 'engineer', label: 'Engineer' },
  { value: 'pm', label: 'Product manager' },
];

const teams: SelectItem[] = [
  { value: 'web', label: 'Web' },
  { value: 'ios', label: 'iOS' },
  { value: 'android', label: 'Android' },
  { value: 'design', label: 'Design' },
];

const plans: SelectItem[] = [
  {
    label: 'Plans',
    options: [
      { value: 'free', label: 'Free', caption: '€0' },
      { value: 'pro', label: 'Pro', caption: '€12', badge: 'Popular' },
      { value: 'enterprise', label: 'Enterprise', caption: 'Contact us', disabled: true },
    ],
  },
  { type: 'separator' },
  { value: 'trial', label: 'Start a 14-day trial' },
];

const timezones: SelectItem[] = [
  ['lisbon', '(GMT+0) Lisbon'],
  ['warsaw', '(GMT+1) Warsaw'],
  ['new-york', '(GMT-5) New York'],
  ['tokyo', '(GMT+9) Tokyo'],
].map(([value, label]) => ({ value, label }));

const meta = {
  title: 'Playground/Form',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A sign-up form in a Card, made of Input, Select, Combobox, Textarea, Radio, Switch, Slider, Checkbox, Field (Field, Field Group, Field Set, Field Separator), Tooltip, Alert, Button and a toast, for trying components together before they are merged. Submit to see the validation and the submitted form data. Use the toolbar to switch brand and colour scheme.',
      },
    },
  },
} satisfies Meta;

export default meta;

type Args = { variant: InputVariant; size: InputSize; disabled: boolean };
type Errors = Partial<Record<'name' | 'email' | 'role' | 'terms', string>>;

export const SignUp: StoryObj<Args> = {
  args: { variant: 'default', size: 'lg', disabled: false },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'shadow', 'soft'] },
    size: { control: 'inline-radio', options: ['xl', 'lg', 'default'], description: 'Figma Size, shared by Input, Select, Combobox and Button' },
  },
  render: function Render({ variant, size, disabled }) {
    const [errors, setErrors] = useState<Errors>({});
    const [submitted, setSubmitted] = useState<Record<string, FormDataEntryValue | FormDataEntryValue[]> | null>(null);
    const [reminder, setReminder] = useState(15);
    const field = { variant, size, disabled };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      // A multiple Select submits one entry per value.
      const data: Record<string, FormDataEntryValue | FormDataEntryValue[]> = { ...Object.fromEntries(form), teams: form.getAll('teams') };
      const next: Errors = {};
      if (!String(data.name ?? '').trim()) next.name = 'Enter your name';
      if (!/^\S+@\S+\.\S+$/.test(String(data.email ?? ''))) next.email = 'Enter a valid email address';
      if (!data.role) next.role = 'Choose a role';
      if (!data.terms) next.terms = 'Accept the terms to continue';
      setErrors(next);
      const ok = !Object.keys(next).length;
      setSubmitted(ok ? data : null);
      if (ok) toast.success('Account created', { description: `Welcome, ${data.name}` });
    };
    const errorCount = Object.keys(errors).length;

    return (
      <Card as="section" aria-label="Create an account" style={{ width: 420 }}>
        <CardHeader
          title="Create an account"
          description="It takes a minute; you can change everything later."
          action={
            <Tooltip content="All fields except Name, Email, Role and the terms are optional">
              <Button variant="ghost" size="sm" icon={<RiQuestionLine />} aria-label="Help" />
            </Tooltip>
          }
        />
        <CardContent>
          <form id="sign-up" onSubmit={onSubmit} noValidate>
            <FieldGroup>
            {errorCount > 0 && <Alert variant="destructive" title={`Fix ${errorCount} ${errorCount === 1 ? 'field' : 'fields'} to continue`} />}
            <Input {...field} name="name" label="Name" placeholder="Jane Doe" leadIcon={<RiUser3Line />} error={errors.name} />
            <Input {...field} name="email" type="email" label="Email" placeholder="mail@domain.com" leadIcon={<RiAtLine />} caption="We never share it" error={errors.email} />
            <Select {...field} name="role" label="Role" placeholder="Select a role" options={roles} error={errors.role} />
            <Select {...field} name="teams" label="Teams" placeholder="Select teams" options={teams} multiple caption="Pick all that apply" />
            <Field label="Timezone" description="Reminders follow it" disabled={disabled}>
              <Combobox variant={variant} size={size} name="timezone" placeholder="Search timezones" options={timezones} leadIcon={<RiSearchLine />} />
            </Field>
            <FieldSeparator>Subscription</FieldSeparator>
            <Select {...field} name="plan" label="Plan" placeholder="Select a plan" options={plans} defaultValue="free" caption="You can change it later" />
            <RadioGroup name="billing" label="Billing" defaultValue="monthly" columns={2} disabled={disabled}>
              <Radio value="monthly" label="Monthly" />
              <Radio value="yearly" label="Yearly" caption="2 months free" />
            </RadioGroup>
            <Textarea variant={variant} disabled={disabled} name="bio" label="About you" placeholder="What do you work on?" showCount limit={160} />
            <FieldSet legend="Notifications" description="You can change these any time.">
              <Switch name="updates" label="Product updates" caption="One email a month" disabled={disabled} />
              <Slider name="reminder" label="Remind me before events" valueText={`${reminder} min`} value={reminder} onValueChange={setReminder} min={5} max={60} step={5} disabled={disabled} />
            </FieldSet>
            <Checkbox name="terms" label="I accept the terms of service" error={errors.terms} disabled={disabled} />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="reset" form="sign-up" variant="ghost" size={size} disabled={disabled} onClick={() => {
              setErrors({});
              setSubmitted(null);
              setReminder(15);
            }}>
            Reset
          </Button>
          <Button type="submit" form="sign-up" size={size} disabled={disabled}>
            Create account
          </Button>
        </CardFooter>
        {submitted && (
          <CardContent>
            <pre data-testid="submitted" style={{ margin: 0, padding: 12, borderRadius: 4, background: 'var(--ds-fill-1)', color: 'var(--ds-foreground)', fontSize: 12 }}>
              {JSON.stringify(submitted, null, 2)}
            </pre>
          </CardContent>
        )}
        <Toaster />
      </Card>
    );
  },
};
