import { renderAlert } from './alert';
import { renderAccordion } from './accordion';
import { renderAIChatComposer, renderAIChatComposerToken } from './ai-chat-composer';
import { renderAITrace, renderAITraceContent } from './ai-trace';
import { renderAlertDialog } from './alert-dialog';
import { renderAspectRatio } from './aspect-ratio';
import { renderApprovalCard } from './approval-card';
import { renderApprovalGates } from './approval-gates';
import { renderAutonomyDial } from './autonomy-dial';
import { renderDecisionInbox } from './decision-inbox';
import { renderReviewCenter } from './review-center';
import { renderAttachment } from './attachment';
import { renderAvatar, renderAvatarGroup, renderStatusBadge } from './avatar';
import { renderBadge } from './badge';
import { renderBadgeTint } from './badge-tint';
import { renderBreadcrumb } from './breadcrumb';
import { renderButton } from './button';
import { renderButtonGroup, renderButtonGroupItem } from './button-group';
import { renderCalendar, renderCalendarDay, renderCalendarNavigation } from './calendar';
import { renderCard } from './card';
import { renderCheckbox, renderCheckboxCard, renderCheckboxField } from './checkbox';
import { renderCombobox } from './combobox';
import { renderContextMenu } from './context-menu';
import { renderContextWindow } from './context-window';
import { renderDatePicker } from './date-picker';
import { renderDecisionCard } from './decision-card';
import { renderCollapsible } from './collapsible';
import { renderDialog } from './dialog';
import { renderDiff, renderDiffLine } from './diff';
import { renderDrawer } from './drawer';
import { renderDropdownMenu } from './dropdown-menu';
import { renderEmpty } from './empty';
import { renderField, renderFieldGroup, renderFieldLabel, renderFieldSeparator, renderFieldSet } from './field';
import { renderFileIcon } from './file-icon';
import { renderHoverCard } from './hover-card';
import { renderInput } from './input';
import { renderItem } from './item';
import { renderMessage } from './message';
import { renderMessageActions } from './message-actions';
import { renderMessageScroller } from './message-scroller';
import { renderModelPicker } from './model-picker';
import { renderBubble } from './bubble';
import { renderCarousel } from './carousel';
import { renderChart } from './chart';
import { renderUsageBar } from './usage-bar';
import { renderSidebar } from './sidebar';
import { renderCommand } from './command';
import { renderMenubar } from './menubar';
import { renderNavigationMenu } from './navigation-menu';
import { renderTable } from './table';
import { renderInputGroupDropdown } from './input-group-dropdown';
import { renderInputOTP, renderOTPSlot } from './input-otp';
import { renderKbd, renderKbdGroup } from './kbd';
import { renderMarker } from './marker';
import { renderPagination } from './pagination';
import { renderPermissionRequest } from './permission-request';
import { renderPopover } from './popover';
import { renderProgress, renderProgressCircle } from './progress';
import { renderRadio, renderRadioCard } from './radio';
import { renderSelect, renderSelectItem } from './select';
import { renderSeparator } from './separator';
import { renderSheet } from './sheet';
import { renderSlider, renderSliderThumb, renderSliderVariants } from './slider';
import { renderSonner } from './sonner';
import { renderSpinner } from './spinner';
import { renderStepper } from './stepper';
import { renderSwitch } from './switch';
import { renderTabsList, renderTabsTrigger } from './tabs';
import { renderTextarea } from './textarea';
import { renderThinkingLoader } from './thinking-loader';
import { renderThinkingState } from './thinking-state';
import { renderToggle } from './toggle';
import { renderToolCall } from './tool-call';
import { renderToggleGroup } from './toggle-group';
import { renderTooltip } from './tooltip';
import type { Renderer } from './types';

// One renderer per component folder in ../references.
export const renderers: Record<string, Renderer> = {
  accordion: renderAccordion,
  'ai-chat-composer': renderAIChatComposer,
  'ai-chat-composer-column': renderAIChatComposer,
  'ai-chat-composer-token': renderAIChatComposerToken,
  'ai-trace': renderAITrace,
  'ai-trace-content': renderAITraceContent,
  alert: renderAlert,
  'alert-dialog': renderAlertDialog,
  'aspect-ratio': renderAspectRatio,
  'approval-card': renderApprovalCard,
  'approval-gates': renderApprovalGates,
  'autonomy-dial': renderAutonomyDial,
  'decision-inbox': renderDecisionInbox,
  'review-center': renderReviewCenter,
  attachment: renderAttachment,
  'attachment-card': renderAttachment,
  avatar: renderAvatar,
  'avatar-group': renderAvatarGroup,
  badge: renderBadge,
  'badge-tint': renderBadgeTint,
  breadcrumb: renderBreadcrumb,
  button: renderButton,
  'button-group': renderButtonGroup,
  'button-group-item': renderButtonGroupItem,
  calendar: renderCalendar,
  'calendar-day': renderCalendarDay,
  'calendar-navigation': renderCalendarNavigation,
  card: renderCard,
  checkbox: renderCheckbox,
  'checkbox-card': renderCheckboxCard,
  'checkbox-field': renderCheckboxField,
  combobox: renderCombobox,
  command: renderCommand,
  'context-menu': renderContextMenu,
  'context-window': renderContextWindow,
  'date-picker': renderDatePicker,
  'decision-card': renderDecisionCard,
  collapsible: renderCollapsible,
  dialog: renderDialog,
  diff: renderDiff,
  'diff-line': renderDiffLine,
  drawer: renderDrawer,
  'dropdown-menu': renderDropdownMenu,
  empty: renderEmpty,
  field: renderField,
  'field-group': renderFieldGroup,
  'field-label': renderFieldLabel,
  'field-separator': renderFieldSeparator,
  'field-set': renderFieldSet,
  'file-icon': renderFileIcon,
  'hover-card': renderHoverCard,
  input: renderInput,
  'input-group-dropdown': renderInputGroupDropdown,
  'input-otp': renderInputOTP,
  item: renderItem,
  message: renderMessage,
  'message-actions': renderMessageActions,
  'message-scroller': renderMessageScroller,
  'model-picker': renderModelPicker,
  bubble: renderBubble,
  carousel: renderCarousel,
  chart: renderChart,
  menubar: renderMenubar,
  'navigation-menu': renderNavigationMenu,
  'otp-slot': renderOTPSlot,
  kbd: renderKbd,
  'kbd-group': renderKbdGroup,
  marker: renderMarker,
  pagination: renderPagination,
  'permission-request': renderPermissionRequest,
  popover: renderPopover,
  progress: renderProgress,
  'progress-circle': renderProgressCircle,
  radio: renderRadio,
  'radio-card': renderRadioCard,
  select: renderSelect,
  'select-item': renderSelectItem,
  separator: renderSeparator,
  sheet: renderSheet,
  sidebar: renderSidebar,
  slider: renderSlider,
  'slider-thumb': renderSliderThumb,
  'slider-variants': renderSliderVariants,
  sonner: renderSonner,
  spinner: renderSpinner,
  stepper: renderStepper,
  'status-badge': renderStatusBadge,
  switch: renderSwitch,
  table: renderTable,
  'tabs-list': renderTabsList,
  'tabs-trigger': renderTabsTrigger,
  textarea: renderTextarea,
  'thinking-loader': renderThinkingLoader,
  'thinking-state': renderThinkingState,
  toggle: renderToggle,
  'toggle-group': renderToggleGroup,
  'tool-call': renderToolCall,
  tooltip: renderTooltip,
  'usage-bar': renderUsageBar,
};
