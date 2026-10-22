import { renderButton } from './button';
import { renderInput } from './input';
import { renderSelect } from './select';
import { renderSelectMenuItem } from './select-menu-item';
import type { Renderer } from './types';

// One renderer per component folder in ../references.
export const renderers: Record<string, Renderer> = {
  button: renderButton,
  input: renderInput,
  select: renderSelect,
  'select-menu-item': renderSelectMenuItem,
};
