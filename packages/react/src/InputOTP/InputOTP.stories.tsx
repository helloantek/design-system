import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { Button } from '../Button';
import { Card, CardContent, CardFooter, CardHeader } from '../Card';
import { Field } from '../Field';
import { InputOTP, type InputOTPLayout } from './InputOTP';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=113-2';

const meta = {
  title: 'Components/Input OTP',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Input OTP** and **OTP Slot** ([open in Figma](${FIGMA_URL})): a one-time code of \`length\` characters (6 by default) with \`value\` / \`defaultValue\` / \`onValueChange\` and \`onComplete\` once every slot is filled. Figma Layout → \`layout\` (\`groups\` with \`groups\` 1–3, or \`cells\`), Separator → \`separator\`, State=Invalid → \`invalid\` (or a Field's error), Disabled → \`disabled\`. \`pattern\` keeps digits (default), letters and digits, or a RegExp. One real \`<input autocomplete="one-time-code">\` lies invisible over the slots, so typing, Backspace, paste and the phone's code autofill all work and screen readers meet one text field; name it with a Field label or \`aria-label\`.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', color: 'var(--ds-foreground)', margin: 0 };
const muted: CSSProperties = { ...text, color: 'var(--ds-muted-foreground)' };
const centred: CSSProperties = { display: 'grid', justifyItems: 'center', gap: 16, textAlign: 'center' };

type PlaygroundArgs = { layout: InputOTPLayout; groups: number; separator: boolean; length: number; invalid: boolean; disabled: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { layout: 'groups', groups: 1, separator: true, length: 6, invalid: false, disabled: false },
  argTypes: {
    layout: { name: 'Layout', control: 'inline-radio', options: ['groups', 'cells'] },
    groups: { control: { type: 'number', min: 1, max: 3 } },
    separator: { name: 'Separator' },
    invalid: { name: 'State: Invalid' },
    disabled: { name: 'State: Disabled' },
  },
  render: (args) => <InputOTP aria-label="Verification code" {...args} />,
};

/** Figma demo "Input OTP": wide cells in a card; Verify waits for all six digits. */
export const VerifyEmail: StoryObj = {
  render: function Render() {
    const [code, setCode] = useState('');
    const [verified, setVerified] = useState(false);
    return (
      <Card style={{ width: 360, maxWidth: '100%' }}>
        <CardHeader title="Verify your email" description="Enter the 6-digit code we sent to your inbox." />
        <CardContent>
          <InputOTP aria-label="Verification code" layout="cells" fullWidth value={code} onValueChange={setCode} style={{ '--otp-slot-height': '48px' } as CSSProperties} />
        </CardContent>
        <CardFooter>
          <Button style={{ width: '100%' }} disabled={code.length < 6} onClick={() => setVerified(true)}>
            {verified ? 'Verified' : 'Verify'}
          </Button>
        </CardFooter>
      </Card>
    );
  },
};

const identity = (children: ReactNode) => (
  <div style={centred}>
    <div>
      <p style={{ ...text, fontSize: 16, lineHeight: '24px', fontWeight: 500 }}>Verify your identity</p>
      <p style={muted}>
        We’ve sent an email with your code to
        <br />
        hey@example.com
      </p>
    </div>
    {children}
  </div>
);

/** Figma demo "Cells": each slot in its own box; Continue submits once the code is complete. */
export const Cells: StoryObj = {
  render: function Render() {
    const [code, setCode] = useState('');
    return identity(
      <>
        <InputOTP aria-label="Verification code" layout="cells" value={code} onValueChange={setCode} />
        <Button disabled={code.length < 6}>Continue</Button>
      </>,
    );
  },
};

/** Figma demo "Digits only": one joined group; letters are dropped as you type or paste. */
export const DigitsOnly: StoryObj = {
  render: function Render() {
    const [code, setCode] = useState('');
    return identity(
      <>
        <InputOTP aria-label="Verification code" value={code} onValueChange={setCode} />
        <Button disabled={code.length < 6}>Continue</Button>
      </>,
    );
  },
};

/** Figma demo "Separator": two groups of three with a minus between them. */
export const Separator: StoryObj = {
  render: function Render() {
    const [code, setCode] = useState('');
    return identity(
      <>
        <InputOTP aria-label="Verification code" groups={2} value={code} onValueChange={setCode} />
        <Button disabled={code.length < 6}>Continue</Button>
      </>,
    );
  },
};

/** Figma Layout: Single group, Two groups, Three groups and Cells. */
export const Layouts: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
      <InputOTP aria-label="Single group" defaultValue="42" />
      <InputOTP aria-label="Two groups" groups={2} defaultValue="42" />
      <InputOTP aria-label="Three groups" groups={3} defaultValue="42" />
      <InputOTP aria-label="Cells" layout="cells" defaultValue="42" />
    </div>
  ),
};

/** In a Field: the label names it and a wrong code turns it invalid with the Field's error. */
export const WithField: StoryObj = {
  render: function Render() {
    const [code, setCode] = useState('');
    const wrong = code.length === 6 && code !== '123456';
    return (
      <div style={{ width: 320 }}>
        <Field label="Recovery code" description="Try 123456." error={wrong ? 'That code is not right. Check the email and try again.' : undefined}>
          <InputOTP groups={2} value={code} onValueChange={setCode} name="code" />
        </Field>
      </div>
    );
  },
};

/** pattern="alphanumeric": letters and digits, for codes such as backup keys. */
export const Alphanumeric: StoryObj = {
  render: () => <InputOTP aria-label="Backup key" length={8} groups={2} pattern="alphanumeric" defaultValue="AB12" />,
};

/** Figma State: Default, Invalid, Disabled. */
export const States: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
      <InputOTP aria-label="Default" defaultValue="42" />
      <InputOTP aria-label="Invalid" defaultValue="429173" invalid />
      <InputOTP aria-label="Disabled" disabled />
    </div>
  ),
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, justifyItems: 'start' }}>
          <InputOTP aria-label={`Code (${scheme})`} groups={2} defaultValue="42" />
          <InputOTP aria-label={`Cells (${scheme})`} layout="cells" defaultValue="42" />
          <InputOTP aria-label={`Invalid (${scheme})`} defaultValue="429173" invalid />
        </div>
      ))}
    </div>
  ),
};
