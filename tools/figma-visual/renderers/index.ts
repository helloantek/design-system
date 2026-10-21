import { renderButton } from './button';
import type { Renderer } from './types';

// One renderer per component folder in ../references.
export const renderers: Record<string, Renderer> = {
  button: renderButton,
};
