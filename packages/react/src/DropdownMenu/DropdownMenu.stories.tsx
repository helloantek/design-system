import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { Avatar } from '../Avatar';
import { avatarImage } from '../Avatar/Avatar.fixtures';
import { Button } from '../Button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuUserProfile,
  type DropdownMenuItemType,
  type DropdownMenuLabelSize,
} from './DropdownMenu';
import { SquareDashed, chevronDown, icons } from './DropdownMenu.fixtures';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=148-2';

// Open menus pop out of the story's box; leave room for them.
const room =
  (height: number): Decorator =>
  (Story) => (
    <div style={{ minHeight: height }}>
      <Story />
    </div>
  );

const trigger = (label = 'Open') => (
  <Button variant="outline" trailingIcon={chevronDown}>
    {label}
  </Button>
);

const meta = {
  title: 'Components/Dropdown Menu',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 page **Dropdown Menu** ([open in Figma](${FIGMA_URL})): Dropdown Menu Trigger and Content (\`DropdownMenu\`, or \`DropdownMenuContent\` on its own), Item (\`DropdownMenuItem\` type \`item\` · \`destructive\`; \`DropdownMenuCheckboxItem\` and \`DropdownMenuRadioItem\` type \`checkbox\` · \`menubar\`; \`DropdownMenuSub\` for Type=Sub trigger), Label (\`DropdownMenuLabel\`, or a \`DropdownMenuGroup\` \`label\`; size \`xs\` · \`sm\`), Separator and User Profile (size \`lg\` · \`default\`). Every item takes \`inset\` and \`disabled\`; State=Focus is the item under the pointer or the keyboard. Keyboard: Enter, Space or the arrows open the menu; arrows, Home/End and letters move; Enter or Space picks; → and ← open and close submenus; Escape closes.`,
      },
    },
  },
} satisfies Meta;

export default meta;

type PlaygroundArgs = {
  type: DropdownMenuItemType;
  icon: boolean;
  shortcut: boolean;
  inset: boolean;
  disabled: boolean;
  align: 'start' | 'end';
  labelSize: DropdownMenuLabelSize;
};

/** The first item follows the controls. */
export const Playground: StoryObj<PlaygroundArgs> = {
  args: { type: 'item', icon: true, shortcut: true, inset: false, disabled: false, align: 'start', labelSize: 'xs' },
  argTypes: {
    type: { name: 'Type', control: 'inline-radio', options: ['item', 'destructive'] },
    icon: { name: 'Leading slot' },
    shortcut: { name: 'Shortcut' },
    inset: { name: 'Inset' },
    disabled: { name: 'State=Disabled' },
    align: { control: 'inline-radio', options: ['start', 'end'] },
    labelSize: { name: 'Label size', control: 'inline-radio', options: ['xs', 'sm'] },
  },
  decorators: [room(280)],
  render: ({ type, icon, shortcut, inset, disabled, align, labelSize }) => (
    <DropdownMenu trigger={trigger()} align={align} defaultOpen>
      <DropdownMenuGroup label="My Account" labelSize={labelSize} labelInset={inset}>
        <DropdownMenuItem type={type} icon={icon ? <SquareDashed /> : undefined} shortcut={shortcut ? '⌘K' : undefined} inset={inset} disabled={disabled}>
          Item
        </DropdownMenuItem>
        <DropdownMenuItem icon={icons.card}>Billing</DropdownMenuItem>
        <DropdownMenuItem icon={icons.settings}>Settings</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem type="destructive" icon={icons.logOut}>
        Sign out
      </DropdownMenuItem>
    </DropdownMenu>
  ),
};

const types = ['Item', 'Destructive', 'Checkbox', 'Menubar checkbox', 'Sub trigger'] as const;
const states = ['Default', 'Focus', 'Disabled'] as const;

function MatrixItem({ type, state, inset }: { type: (typeof types)[number]; state: (typeof states)[number]; inset: boolean }) {
  const common = { icon: <SquareDashed />, inset, disabled: state === 'Disabled', 'data-highlighted': state === 'Focus' || undefined };
  if (type === 'Checkbox' || type === 'Menubar checkbox')
    return (
      <DropdownMenuCheckboxItem {...common} type={type === 'Checkbox' ? 'checkbox' : 'menubar'} shortcut="⌘K" defaultChecked>
        Item
      </DropdownMenuCheckboxItem>
    );
  if (type === 'Sub trigger')
    return (
      <DropdownMenuSub {...common} label="Item">
        <DropdownMenuItem>Sub item</DropdownMenuItem>
      </DropdownMenuSub>
    );
  return (
    <DropdownMenuItem {...common} type={type === 'Destructive' ? 'destructive' : 'item'} shortcut="⌘K">
      Item
    </DropdownMenuItem>
  );
}

const caption: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 12, color: 'var(--ds-muted-foreground)' };

/** Figma "Dropdown Menu Item": every Type × State × Inset (Focus drawn with `data-highlighted`). */
export const Items: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 232px)', gap: 24, alignItems: 'start' }}>
      {[false, true].map((inset) => (
        <div key={String(inset)} style={{ display: 'grid', gap: 8 }}>
          <span style={caption}>Inset={inset ? 'True' : 'False'}</span>
          <DropdownMenuContent aria-label={`Items, inset ${inset}`} style={{ width: 224 }}>
            {types.map((type, i) => (
              <DropdownMenuGroup key={type} label={type}>
                {states.map((state) => (
                  <MatrixItem key={state} type={type} state={state} inset={inset} />
                ))}
                {i < types.length - 1 && <DropdownMenuSeparator />}
              </DropdownMenuGroup>
            ))}
          </DropdownMenuContent>
        </div>
      ))}
    </div>
  ),
};

/** Figma "Dropdown Menu Label" (Size × Inset), "Dropdown Menu Separator" and "Dropdown Menu User Profile" (Size × State). */
export const LabelsAndProfile: StoryObj = {
  name: 'Labels, Separator and User Profile',
  render: () => (
    <DropdownMenuContent aria-label="Parts" style={{ width: 224 }}>
      <DropdownMenuLabel>Group (xs)</DropdownMenuLabel>
      <DropdownMenuLabel inset>Group (xs, inset)</DropdownMenuLabel>
      <DropdownMenuLabel size="sm">Group (sm)</DropdownMenuLabel>
      <DropdownMenuLabel size="sm" inset>
        Group (sm, inset)
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuUserProfile name="Shiryoku" handle="@mx.shiryoku" src={avatarImage} />
      <DropdownMenuUserProfile name="Shiryoku" handle="@mx.shiryoku" src={avatarImage} data-highlighted />
      <DropdownMenuUserProfile size="default" name="Shiryoku" src={avatarImage} />
      <DropdownMenuUserProfile size="default" name="Shiryoku" src={avatarImage} data-highlighted />
    </DropdownMenuContent>
  ),
};

/** Figma demo "Dropdown Menu": a workspace switcher. */
export const Workspace: StoryObj = {
  decorators: [room(300)],
  render: () => (
    <DropdownMenu trigger={trigger('Shiryoku')} defaultOpen>
      <DropdownMenuRadioGroup label="Workspace" defaultValue="shiryoku">
        <DropdownMenuRadioItem value="shiryoku" icon={<Avatar size="xs" shape="square" src={avatarImage} />}>
          Shiryoku
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="orbit" icon={<Avatar size="xs" shape="square" initials="O" />}>
          Orbit Labs
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup label="Manage">
        <DropdownMenuItem icon={icons.userPlus}>Invite members</DropdownMenuItem>
        <DropdownMenuItem icon={icons.settings}>Workspace settings</DropdownMenuItem>
        <DropdownMenuSub icon={icons.users} label="Switch account">
          <DropdownMenuItem>sam@shiryoku.dev</DropdownMenuItem>
          <DropdownMenuItem>sam@orbit.dev</DropdownMenuItem>
        </DropdownMenuSub>
        <DropdownMenuItem icon={icons.logOut}>Sign out</DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenu>
  ),
};

/** Figma demo "Default", with a disabled item. */
export const Default: StoryObj = {
  decorators: [room(280)],
  render: () => (
    <DropdownMenu trigger={trigger()} defaultOpen>
      <DropdownMenuGroup label="My Account">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Changelog</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuItem disabled>API</DropdownMenuItem>
    </DropdownMenu>
  ),
};

/** Figma demo "With shortcuts". */
export const WithShortcuts: StoryObj = {
  decorators: [room(200)],
  render: () => (
    <DropdownMenu trigger={trigger()} defaultOpen>
      <DropdownMenuGroup label="My Account">
        <DropdownMenuItem shortcut="⌘P">Profile</DropdownMenuItem>
        <DropdownMenuItem shortcut="⌘B">Billing</DropdownMenuItem>
        <DropdownMenuItem shortcut="⌘S">Settings</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem shortcut="⌘Q">Logout</DropdownMenuItem>
    </DropdownMenu>
  ),
};

/** Figma demo "Submenus": hover or → opens a submenu (4 px right of its menu), ← or Escape closes it. */
export const Submenus: StoryObj = {
  parameters: { layout: 'padded' },
  decorators: [room(300)],
  render: () => (
    <DropdownMenu trigger={trigger('Menu')} defaultOpen>
      <DropdownMenuItem>Paste here</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem shortcut="⌘/">Show/Hide UI</DropdownMenuItem>
      <DropdownMenuItem shortcut="⇧C">Show/Hide comments</DropdownMenuItem>
      <DropdownMenuSub label="Widgets">
        <DropdownMenuSub label="Development">
          <DropdownMenuItem>New widget</DropdownMenuItem>
          <DropdownMenuItem>Import widget from manifest</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Show/Hide console</DropdownMenuItem>
          <DropdownMenuItem>Use developer VM</DropdownMenuItem>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Manage widgets</DropdownMenuItem>
        <DropdownMenuItem>Select all widgets</DropdownMenuItem>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
      <DropdownMenuItem shortcut="/">Cursor chat</DropdownMenuItem>
      <DropdownMenuItem shortcut="⌘K">Actions…</DropdownMenuItem>
      <DropdownMenuSub label="Plugins">
        <DropdownMenuItem>Manage plugins</DropdownMenuItem>
      </DropdownMenuSub>
    </DropdownMenu>
  ),
};

const accountItems = (
  <>
    <DropdownMenuItem icon={icons.user}>Profile</DropdownMenuItem>
    <DropdownMenuItem icon={icons.card}>Billing</DropdownMenuItem>
    <DropdownMenuItem icon={icons.settings}>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem icon={icons.help}>Support</DropdownMenuItem>
  </>
);

/** Figma demo "With icons", plus a destructive item. */
export const WithIcons: StoryObj = {
  decorators: [room(220)],
  render: () => (
    <DropdownMenu trigger={trigger()} defaultOpen>
      {accountItems}
      <DropdownMenuItem type="destructive" icon={icons.trash}>
        Delete account
      </DropdownMenuItem>
    </DropdownMenu>
  ),
};

/** Figma demo "User profile". */
export const UserProfile: StoryObj = {
  decorators: [room(240)],
  render: () => (
    <DropdownMenu trigger={trigger('Account')} defaultOpen>
      <DropdownMenuUserProfile name="Shiryoku" handle="@mx.shiryoku" src={avatarImage} />
      <DropdownMenuSeparator />
      {accountItems}
    </DropdownMenu>
  ),
};

/** Figma demo "Checkboxes": checking keeps the menu open. */
export const Checkboxes: StoryObj = {
  decorators: [room(160)],
  render: function Render() {
    const [sms, setSms] = useState(true);
    return (
      <DropdownMenu trigger={trigger('Notifications')} defaultOpen>
        <DropdownMenuGroup label="Notification Preferences">
          <DropdownMenuCheckboxItem icon={icons.mail}>Email</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem icon={icons.message} checked={sms} onCheckedChange={setSms}>
            SMS
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem icon={icons.bell}>Push</DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem type="menubar" defaultChecked>
          Menubar checkbox
        </DropdownMenuCheckboxItem>
      </DropdownMenu>
    );
  },
};

/** Figma demo "Radio": one choice, drawn with the check mark. */
export const Radio: StoryObj = {
  decorators: [room(200)],
  render: () => (
    <DropdownMenu trigger={trigger('Panel')} defaultOpen>
      <DropdownMenuRadioGroup label="Panel Position" defaultValue="bottom">
        <DropdownMenuRadioItem value="top" icon={icons.panelTop}>
          Top
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="bottom" icon={icons.panelBottom}>
          Bottom
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="left" icon={icons.panelLeft}>
          Left
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="right" icon={icons.panelRight}>
          Right
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenu>
  ),
};

/** `align="end"` lines the menu up with the trigger's right edge, e.g. for an icon button at the end of a toolbar. */
export const AlignEnd: StoryObj = {
  decorators: [room(200)],
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'flex-end', width: 320 }}>
      <DropdownMenu trigger={<Button variant="outline" icon={icons.settings} aria-label="Settings" />} align="end" defaultOpen>
        {accountItems}
      </DropdownMenu>
    </div>
  ),
};

function Scheme({ scheme, children }: { scheme: 'light' | 'dark'; children: ReactNode }) {
  return (
    <div data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 16, alignContent: 'start' }}>
      <div style={caption}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
      {children}
    </div>
  );
}

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <Scheme key={scheme} scheme={scheme}>
          <DropdownMenuContent aria-label={`Account (${scheme})`} style={{ width: 224 }}>
            <DropdownMenuUserProfile name="Shiryoku" handle="@mx.shiryoku" src={avatarImage} />
            <DropdownMenuSeparator />
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem icon={icons.user} shortcut="⌘P" data-highlighted>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem icon={icons.card} shortcut="⌘B">
              Billing
            </DropdownMenuItem>
            <DropdownMenuCheckboxItem icon={icons.bell} defaultChecked>
              Notifications
            </DropdownMenuCheckboxItem>
            <DropdownMenuSub icon={icons.settings} label="Settings">
              <DropdownMenuItem>General</DropdownMenuItem>
            </DropdownMenuSub>
            <DropdownMenuItem icon={icons.help} disabled>
              Support
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem type="destructive" icon={icons.logOut} data-highlighted>
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </Scheme>
      ))}
    </div>
  ),
};
