// @helloantek/ds-angular: Angular 22 components for @helloantek/ds (ADR 0002). Styles come from @helloantek/ds-css.
export { DsIcon, DsImage, DsLeadingIcon, DsTrailingIcon } from './lib/slots/slots';
export { DsButton, type ButtonSize, type ButtonVariant } from './lib/button/button';
export { DsBadge, type BadgeColor, type BadgeShape, type BadgeSize, type BadgeVariant } from './lib/badge/badge';
export { DsCheckbox, DsCheckboxGroup } from './lib/checkbox/checkbox';
export { DsInput, DsInputAction, DsPrefix, DsSuffix, type InputSize, type InputVariant } from './lib/input/input';
export { DsTooltip, type TooltipSide } from './lib/tooltip/tooltip';
export { DsDialog, DsDialogClose, DsDialogFooter, DsDialogTrigger } from './lib/dialog/dialog';
export { DsSelect, type SelectCaption, type SelectGroup, type SelectIndicator, type SelectItem, type SelectOption, type SelectSeparator, type SelectSize, type SelectVariant } from './lib/select/select';
export { DsKbd, DsKbdGroup, type KbdSize, type KbdVariant } from './lib/kbd/kbd';
export { DsSpinner, type SpinnerSize, type SpinnerVariant } from './lib/spinner/spinner';
export { DsToggle, type ToggleSize, type ToggleVariant } from './lib/toggle/toggle';
export { DsToggleGroup, type ToggleGroupOrientation, type ToggleGroupSpacing } from './lib/toggle-group/toggle-group';
export { DsAvatar, DsAvatarGroup, type AvatarShape, type AvatarSize } from './lib/avatar/avatar';
export {
  DsApprovalCard,
  DsApprovalCardContent,
  DsApprovalCardDetails,
  DsApprovalCardIconMarker,
  DsApprovalCardPreview,
  DsApprovalCardRecipients,
  DsApprovalCardSummary,
  type ApprovalCardRisk,
  type ApprovalCardState,
} from './lib/approval-card/approval-card';
export { DsToolCall, DsToolCallGroup, DsToolCallIcon, type ToolCallStatus } from './lib/tool-call/tool-call';
export {
  DsPermissionFiles,
  DsPermissionIcon,
  DsPermissionRequest,
  DsPermissionScope,
  DsPermissionToolIcon,
  type PermissionDuration,
  type PermissionRequestState,
} from './lib/permission-request/permission-request';
export { DsDecisionCard, type DecisionAnswer, type DecisionOption, type DecisionTile } from './lib/decision-card/decision-card';
export {
  DsApprovalGate,
  DsApprovalGateIcon,
  DsApprovalGateRisk,
  DsApprovalGates,
  DsApprovalGatesDecided,
  DsApprovalGatesDecidedItem,
  DsApprovalGatesDone,
  DsApprovalGatesStopped,
  type ApprovalGateOutcome,
  type ApprovalGatesStatus,
} from './lib/approval-gates/approval-gates';
export { DsDecisionInbox, DsDecisionInboxAnswered, DsDecisionInboxItem } from './lib/decision-inbox/decision-inbox';
export {
  DsReviewCenter,
  DsReviewCenterDone,
  DsReviewCenterItem,
  DsReviewCenterMark,
  DsReviewCenterQueueItem,
  DsReviewCenterRisk,
  type ReviewCenterAction,
  type ReviewCenterAttachment,
  type ReviewCenterField,
  type ReviewCenterFilter,
} from './lib/review-center/review-center';
export { DsAutonomyDial, DsAutonomyIcon, runsOnItsOwn, type AutonomyAction, type AutonomyLevel, type AutonomyRisk, type AutonomyTool } from './lib/autonomy-dial/autonomy-dial';
export { DsStepper, DsStepperItem, type StepperItemState, type StepperOrientation, type StepperStep, type StepperVariant } from './lib/stepper/stepper';
export { DsThinkingLoader, type ThinkingLoaderStatus } from './lib/thinking/thinking-loader';
export { DsThinkingNote, DsThinkingSource, DsThinkingSources, DsThinkingState, DsThinkingStep, DsThinkingStepIcon } from './lib/thinking/thinking-state';
export { DsPopover, DsPopoverActions, DsPopoverClose, DsPopoverTrigger, type PopoverAlign, type PopoverSide } from './lib/popover/popover';
export { DsSwitch, type SwitchSize } from './lib/switch/switch';
export { DsMessageActions, MESSAGE_FEEDBACK_REASONS, type MessageActionsLabels, type MessageRating } from './lib/message-actions/message-actions';
export { DsModelPicker, DsModelPickerIcon, type ModelPickerEffort, type ModelPickerLabels, type ModelPickerModel } from './lib/model-picker/model-picker';
export { DsContextWindow, DsContextWindowModelIcon, type ContextWindowItem, type ContextWindowLabels, type ContextWindowPart } from './lib/context-window/context-window';
export {
  DsAIAnswer,
  DsAIAnswerActions,
  DsAIAnswerCaret,
  DsAIAnswerCitation,
  DsAIAnswerPoint,
  DsAIAnswerPoints,
  DsAIAnswerSourceIcon,
  type AIAnswerLabels,
  type AIAnswerSource,
  type AIAnswerStatus,
} from './lib/ai-answer/ai-answer';
export { DsCitedAnswer, DsCitedAnswerIcon, type CitedAnswerLabels, type CitedAnswerPart, type CitedAnswerQuotePart, type CitedAnswerSource } from './lib/cited-answer/cited-answer';
export { DsInlineDiff, type InlineDiffDecision, type InlineDiffEdit, type InlineDiffLabels, type InlineDiffSegment } from './lib/inline-diff/inline-diff';
export { DsPromptLibrary, estimateTokens, fillPrompt, promptGaps, promptParts, type PromptLibraryLabels, type PromptTemplate, type PromptValues } from './lib/prompt-library/prompt-library';
export { DsMemoryPanel, DsMemoryPanelIcon, type Memory, type MemoryPanelLabels } from './lib/memory-panel/memory-panel';
export { DsBubble, DsBubbleGroup, DsBubbleReactions, type BubbleReactionsPlacement, type BubbleVariant } from './lib/bubble/bubble';
export {
  DsAIChatComposer,
  DsAIChatComposerToken,
  DsComposerBadges,
  DsComposerHeader,
  DsComposerLeading,
  DsComposerModel,
  type AIChatComposerLayout,
  type AIChatComposerState,
} from './lib/ai-chat-composer/ai-chat-composer';
