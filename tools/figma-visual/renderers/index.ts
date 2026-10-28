import { renderAvatar, renderAvatarGroup, renderStatusBadge } from './avatar';
import { renderBadge } from './badge';
import { renderButton } from './button';
import { renderButtonGroup, renderButtonGroupItem } from './button-group';
import { renderCard } from './card';
import { renderCheckbox, renderCheckboxCard, renderCheckboxField } from './checkbox';
import { renderContextMenu } from './context-menu';
import { renderDropdownMenu } from './dropdown-menu';
import { renderInput } from './input';
import { renderRadio, renderRadioCard } from './radio';
import { renderSelect, renderSelectItem } from './select';
import { renderSwitch } from './switch';
import { renderTextarea } from './textarea';
import { renderTooltip } from './tooltip';
import type { Renderer } from './types';

// One renderer per component folder in ../references.
export const renderers: Record<string, Renderer> = {
  avatar: renderAvatar,
  'avatar-group': renderAvatarGroup,
  badge: renderBadge,
  button: renderButton,
  'button-group': renderButtonGroup,
  'button-group-item': renderButtonGroupItem,
  card: renderCard,
  checkbox: renderCheckbox,
  'checkbox-card': renderCheckboxCard,
  'checkbox-field': renderCheckboxField,
  'context-menu': renderContextMenu,
  'dropdown-menu': renderDropdownMenu,
  input: renderInput,
  radio: renderRadio,
  'radio-card': renderRadioCard,
  select: renderSelect,
  'select-item': renderSelectItem,
  'status-badge': renderStatusBadge,
  switch: renderSwitch,
  textarea: renderTextarea,
  tooltip: renderTooltip,
};
