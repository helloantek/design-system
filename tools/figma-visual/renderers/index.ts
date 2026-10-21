import { renderButton } from './button';
import { renderInput } from './input';
import type { Renderer } from './types';

// One renderer per component folder in ../references.
export const renderers: Record<string, Renderer> = {
  button: renderButton,
  input: renderInput,
};
