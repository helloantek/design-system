import type { Meta, StoryObj } from '@storybook/angular';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormField, email, form, required } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { DsCheckbox } from './checkbox/checkbox';
import { DsInput } from './input/input';

// Angular only: the same fields bound three ways. There is no React story with this id (tag "angular-only"), so the
// parity check renders it without comparing it; tools/adapter-parity.mjs tests that the values flow both ways.

@Component({
  selector: 'ds-forms-demo',
  imports: [DsInput, DsCheckbox, FormField, ReactiveFormsModule, FormsModule, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="display: grid; grid-template-columns: repeat(3, 280px); gap: 32px; font-family: var(--ds-font-sans); font-size: 12px; color: var(--ds-muted-foreground)">
      <section data-form="signal" style="display: grid; gap: 16px; align-content: start">
        <span>Signal Forms ([formField])</span>
        <ds-input label="Email (signal)" placeholder="mail@domain.com" [formField]="signalForm.email" />
        <ds-checkbox label="Newsletter (signal)" [formField]="signalForm.newsletter" />
        <output>{{ model() | json }}</output>
        <span>Email valid: {{ signalForm.email().valid() }}</span>
      </section>
      <section data-form="reactive" style="display: grid; gap: 16px; align-content: start">
        <span>Reactive Forms (formControlName)</span>
        <div [formGroup]="reactive" style="display: grid; gap: 16px">
          <ds-input label="Email (reactive)" placeholder="mail@domain.com" formControlName="email" />
          <ds-checkbox label="Newsletter (reactive)" formControlName="newsletter" />
        </div>
        <output>{{ reactiveValue() | json }}</output>
        <button type="button" (click)="toggleDisabled()">{{ reactive.disabled ? 'Enable' : 'Disable' }} the reactive form</button>
      </section>
      <section data-form="ngmodel" style="display: grid; gap: 16px; align-content: start">
        <span>ngModel</span>
        <ds-input label="Email (ngModel)" placeholder="mail@domain.com" [(ngModel)]="plainEmail" />
        <ds-checkbox label="Newsletter (ngModel)" [(ngModel)]="plainNewsletter" />
        <output>{{ { email: plainEmail(), newsletter: plainNewsletter() } | json }}</output>
      </section>
    </div>
  `,
})
class FormsDemo {
  protected readonly model = signal({ email: 'ada@example.com', newsletter: true });
  protected readonly signalForm = form(this.model, (p) => {
    required(p.email);
    email(p.email);
  });
  protected readonly reactive = new FormGroup({ email: new FormControl('grace@example.com'), newsletter: new FormControl(false) });
  protected readonly reactiveValue = signal(this.reactive.getRawValue());
  protected readonly plainEmail = signal('alan@example.com');
  protected readonly plainNewsletter = signal(true);

  constructor() {
    this.reactive.valueChanges.subscribe(() => this.reactiveValue.set(this.reactive.getRawValue()));
  }

  protected toggleDisabled() {
    if (this.reactive.disabled) this.reactive.enable();
    else this.reactive.disable();
  }
}

const meta = {
  title: 'Angular/Forms',
  tags: ['angular-only', '!autodocs'],
  parameters: {
    docs: { description: { component: 'Input and Checkbox bound with Signal Forms (`[formField]`), Reactive Forms (`formControlName`) and `ngModel`. Type or tick, and the value under each column follows; the reactive form can be disabled.' } },
  },
} satisfies Meta;

export default meta;

/** The same Input and Checkbox bound three ways; the values show under each column. */
export const Bindings: StoryObj = {
  render: () => ({ moduleMetadata: { imports: [FormsDemo] }, template: '<ds-forms-demo />' }),
};
