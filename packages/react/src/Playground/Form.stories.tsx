import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type FormEvent } from 'react';
import { RiAtLine, RiUser3Line } from '@remixicon/react';
import { Button } from '../Button';
import { Input, type InputSize, type InputVariant } from '../Input';
import { Select, type SelectItem } from '../Select';

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

const meta = {
  title: 'Playground/Form',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A sign-up form made of Input, Select and Button, for trying components together before they are merged. Submit to see the validation and the submitted form data. Use the toolbar to switch brand and colour scheme.',
      },
    },
  },
} satisfies Meta;

export default meta;

type Args = { variant: InputVariant; size: InputSize; disabled: boolean };
type Errors = Partial<Record<'name' | 'email' | 'role', string>>;

export const SignUp: StoryObj<Args> = {
  args: { variant: 'default', size: 'lg', disabled: false },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'shadow', 'soft'] },
    size: { control: 'inline-radio', options: ['xl', 'lg', 'default'], description: 'Figma Size, shared by Input, Select and Button' },
  },
  render: function Render({ variant, size, disabled }) {
    const [errors, setErrors] = useState<Errors>({});
    const [submitted, setSubmitted] = useState<Record<string, FormDataEntryValue | FormDataEntryValue[]> | null>(null);
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
      setErrors(next);
      setSubmitted(Object.keys(next).length ? null : data);
    };

    return (
      <form onSubmit={onSubmit} noValidate style={{ display: 'grid', gap: 20, width: 360, fontFamily: 'var(--ds-font-family-body)' }}>
        <Input {...field} name="name" label="Name" placeholder="Jane Doe" leadIcon={<RiUser3Line />} error={errors.name} />
        <Input {...field} name="email" type="email" label="Email" placeholder="mail@domain.com" leadIcon={<RiAtLine />} caption="We never share it" error={errors.email} />
        <Select {...field} name="role" label="Role" placeholder="Select a role" options={roles} error={errors.role} />
        <Select {...field} name="teams" label="Teams" placeholder="Select teams" options={teams} multiple caption="Pick all that apply" />
        <Select {...field} name="plan" label="Plan" placeholder="Select a plan" options={plans} defaultValue="free" caption="You can change it later" />
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <Button type="reset" variant="ghost" size={size} disabled={disabled} onClick={() => {
              setErrors({});
              setSubmitted(null);
            }}>
            Reset
          </Button>
          <Button type="submit" size={size} disabled={disabled}>
            Create account
          </Button>
        </div>
        {submitted && (
          <pre data-testid="submitted" style={{ margin: 0, padding: 12, borderRadius: 4, background: 'var(--ds-bg-input-soft)', color: 'var(--ds-text-default)', fontSize: 12 }}>
            {JSON.stringify(submitted, null, 2)}
          </pre>
        )}
      </form>
    );
  },
};
