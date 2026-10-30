import { createContext, useContext } from 'react';

/** What a Field tells the control inside it: the ids to wire and its state. */
export interface FieldState {
  /** The control's id; the Field's `<label for>` points at it. */
  id: string;
  /** The label's id, for controls a `<label for>` cannot name (a `role="combobox"` element). */
  labelId: string;
  /** The description or error id, for `aria-describedby`. */
  describedBy?: string;
  invalid: boolean;
  disabled: boolean;
  required: boolean;
}

export const FieldContext = createContext<FieldState | null>(null);

/**
 * The surrounding Field's ids and state, or null outside one. Input, Select, Combobox and Textarea read it; a custom
 * control can too: `const field = useField();` then `id={field?.id}`, `aria-describedby={field?.describedBy}`…
 */
export function useField() {
  return useContext(FieldContext);
}
