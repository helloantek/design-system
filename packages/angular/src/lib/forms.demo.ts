import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormField, email, form, required } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { DsCheckbox } from './checkbox/checkbox';
import { DsInput } from './input/input';

// For the story Input → "Forms (Angular)" (not part of the package build): the same Input and Checkbox bound with
// Signal Forms, Reactive Forms and ngModel, with the values shown under each column.

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
export class FormsDemo {
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

