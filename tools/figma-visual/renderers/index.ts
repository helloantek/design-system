import { renderAvatar, renderAvatarGroup, renderStatusBadge } from './avatar';
import { renderBadge } from './badge';
import { renderButton } from './button';
import { renderCheckbox, renderCheckboxCard, renderCheckboxField } from './checkbox';
import { renderDropdownMenu } from './dropdown-menu';
import { renderInput } from './input';
import { renderSelect, renderSelectItem } from './select';
import type { Renderer } from './types';

// One renderer per component folder in ../references.
export const renderers: Record<string, Renderer> = {
  avatar: renderAvatar,
  'avatar-group': renderAvatarGroup,
  badge: renderBadge,
  button: renderButton,
  checkbox: renderCheckbox,
  'checkbox-card': renderCheckboxCard,
  'checkbox-field': renderCheckboxField,
  'dropdown-menu': renderDropdownMenu,
  input: renderInput,
  select: renderSelect,
  'select-item': renderSelectItem,
  'status-badge': renderStatusBadge,
};
