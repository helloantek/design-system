import { renderAvatar, renderStatusBadge } from './avatar';
import { renderBadge } from './badge';
import { renderButton } from './button';
import { renderInput } from './input';
import { renderSelect, renderSelectItem } from './select';
import type { Renderer } from './types';

// One renderer per component folder in ../references.
export const renderers: Record<string, Renderer> = {
  avatar: renderAvatar,
  badge: renderBadge,
  button: renderButton,
  input: renderInput,
  select: renderSelect,
  'select-item': renderSelectItem,
  'status-badge': renderStatusBadge,
};
