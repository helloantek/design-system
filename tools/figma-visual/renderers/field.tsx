import { Badge, Field, FieldGroup, FieldLabel, FieldSeparator, FieldSet, Input, Radio } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Field page to code with the Figma sample texts, 320 px wide on the page background.
const frame = (children: React.ReactNode) => (
  <div id="target" style={{ width: 320, background: 'var(--ds-background)' }}>
    {children}
  </div>
);

export const renderField: Renderer = (p) =>
  frame(
    <Field label="Label" description="Description" error={p.State === 'Invalid' ? 'This field is required.' : undefined} disabled={p.State === 'Disabled'}>
      <Input placeholder="Placeholder" />
    </Field>,
  );

export const renderFieldLabel: Renderer = () =>
  frame(
    <FieldLabel
      required
      helper="(Optional)"
      addon={
        <Badge shape="pill" border>
          Badge
        </Badge>
      }
    >
      Legend
    </FieldLabel>,
  );

export const renderFieldSeparator: Renderer = (p) => frame(<FieldSeparator>{p.Content === 'Text' ? 'or' : undefined}</FieldSeparator>);

export const renderFieldSet: Renderer = () =>
  frame(
    <FieldSet legend="Legend" description="Description">
      <Radio name="frequency" value="weekly" label="Weekly" />
      <Radio name="frequency" value="biweekly" label="Every two weeks" defaultChecked />
      <Radio name="frequency" value="demand" label="On demand" />
    </FieldSet>,
  );

export const renderFieldGroup: Renderer = () =>
  frame(
    <FieldGroup>
      <Field label="Label" description="Description">
        <Input placeholder="Placeholder" />
      </Field>
      <Field label="Label" description="Description">
        <Input placeholder="Placeholder" />
      </Field>
    </FieldGroup>,
  );
