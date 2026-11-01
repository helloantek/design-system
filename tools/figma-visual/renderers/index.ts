import { renderAlert } from './alert';
import { renderAlertDialog } from './alert-dialog';
import { renderAspectRatio } from './aspect-ratio';
import { renderAvatar, renderAvatarGroup, renderStatusBadge } from './avatar';
import { renderBadge } from './badge';
import { renderButton } from './button';
import { renderButtonGroup, renderButtonGroupItem } from './button-group';
import { renderCard } from './card';
import { renderCheckbox, renderCheckboxCard, renderCheckboxField } from './checkbox';
import { renderCombobox } from './combobox';
import { renderContextMenu } from './context-menu';
import { renderDialog } from './dialog';
import { renderDrawer } from './drawer';
import { renderDropdownMenu } from './dropdown-menu';
import { renderEmpty } from './empty';
import { renderField, renderFieldGroup, renderFieldLabel, renderFieldSeparator, renderFieldSet } from './field';
import { renderHoverCard } from './hover-card';
import { renderInput } from './input';
import { renderInputGroupDropdown } from './input-group-dropdown';
import { renderKbd, renderKbdGroup } from './kbd';
import { renderMarker } from './marker';
import { renderPopover } from './popover';
import { renderProgress, renderProgressCircle } from './progress';
import { renderRadio, renderRadioCard } from './radio';
import { renderSelect, renderSelectItem } from './select';
import { renderSeparator } from './separator';
import { renderSheet } from './sheet';
import { renderSlider, renderSliderThumb } from './slider';
import { renderSonner } from './sonner';
import { renderSpinner } from './spinner';
import { renderSwitch } from './switch';
import { renderTabsList, renderTabsTrigger } from './tabs';
import { renderTextarea } from './textarea';
import { renderToggle } from './toggle';
import { renderToggleGroup } from './toggle-group';
import { renderTooltip } from './tooltip';
import type { Renderer } from './types';

// One renderer per component folder in ../references.
export const renderers: Record<string, Renderer> = {
  alert: renderAlert,
  'alert-dialog': renderAlertDialog,
  'aspect-ratio': renderAspectRatio,
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
  combobox: renderCombobox,
  'context-menu': renderContextMenu,
  dialog: renderDialog,
  drawer: renderDrawer,
  'dropdown-menu': renderDropdownMenu,
  empty: renderEmpty,
  field: renderField,
  'field-group': renderFieldGroup,
  'field-label': renderFieldLabel,
  'field-separator': renderFieldSeparator,
  'field-set': renderFieldSet,
  'hover-card': renderHoverCard,
  input: renderInput,
  'input-group-dropdown': renderInputGroupDropdown,
  kbd: renderKbd,
  'kbd-group': renderKbdGroup,
  marker: renderMarker,
  popover: renderPopover,
  progress: renderProgress,
  'progress-circle': renderProgressCircle,
  radio: renderRadio,
  'radio-card': renderRadioCard,
  select: renderSelect,
  'select-item': renderSelectItem,
  separator: renderSeparator,
  sheet: renderSheet,
  slider: renderSlider,
  'slider-thumb': renderSliderThumb,
  sonner: renderSonner,
  spinner: renderSpinner,
  'status-badge': renderStatusBadge,
  switch: renderSwitch,
  'tabs-list': renderTabsList,
  'tabs-trigger': renderTabsTrigger,
  textarea: renderTextarea,
  toggle: renderToggle,
  'toggle-group': renderToggleGroup,
  tooltip: renderTooltip,
};
