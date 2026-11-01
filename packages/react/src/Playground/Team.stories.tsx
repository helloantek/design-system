import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type ReactNode } from 'react';
import { RiDeleteBinLine, RiFileCopyLine, RiContractUpDownLine, RiFilter3Line, RiLinkM, RiMailLine, RiMoreLine, RiRefreshLine, RiSearchLine, RiSettings3Line, RiShieldUserLine, RiUserAddLine } from '@remixicon/react';
import { Alert } from '../Alert';
import { AspectRatio } from '../AspectRatio';
import { aspectRatioPhoto } from '../AspectRatio/AspectRatio.fixtures';
import { AlertDialog, AlertDialogAction, AlertDialogCancel } from '../AlertDialog';
import { Avatar, AvatarGroup } from '../Avatar';
import { Badge, type BadgeColor } from '../Badge';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Card, CardContent, CardFooter, CardHeader } from '../Card';
import { ContextMenu } from '../ContextMenu';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from '../DropdownMenu';
import { Empty } from '../Empty';
import { Dialog, DialogClose } from '../Dialog';
import { Drawer, DrawerClose } from '../Drawer';
import { Field, FieldGroup } from '../Field';
import { HoverCard } from '../HoverCard';
import { Input, InputAction, InputDropdown } from '../Input';
import { Kbd, KbdGroup } from '../Kbd';
import { Marker } from '../Marker';
import { Popover, PopoverActions, PopoverClose } from '../Popover';
import { Progress, ProgressCircle } from '../Progress';
import { Separator } from '../Separator';
import { Sheet, SheetClose } from '../Sheet';
import { Spinner } from '../Spinner';
import { Switch } from '../Switch';
import { Toaster, toast } from '../Sonner';
import { Toggle } from '../Toggle';
import { ToggleGroup, ToggleGroupItem } from '../ToggleGroup';
import { Tooltip } from '../Tooltip';

// A team settings page built only from design-system components: the components that are not form fields, used
// together (menus from buttons, rows and an input, a confirmation dialog, toasts, tooltips). Not a component; nothing
// here ships.

type Role = 'Owner' | 'Admin' | 'Member';
type Member = { id: string; name: string; email: string; role: Role; pending?: boolean };

const initialMembers: Member[] = [
  { id: 'mira', name: 'Mira Okafor', email: 'mira@orbit.dev', role: 'Owner' },
  { id: 'jonas', name: 'Jonas Lindqvist', email: 'jonas@orbit.dev', role: 'Admin' },
  { id: 'priya', name: 'Priya Raman', email: 'priya@orbit.dev', role: 'Member' },
  { id: 'tomas', name: 'Tomás Herrera', email: 'tomas@orbit.dev', role: 'Member', pending: true },
  { id: 'aiko', name: 'Aiko Tanaka', email: 'aiko@orbit.dev', role: 'Member', pending: true },
];

const roleColor: Record<Role, BadgeColor> = { Owner: 'violet', Admin: 'blue', Member: 'neutral' };

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('');

type View = 'all' | 'active' | 'pending';

const meta = {
  title: 'Playground/Team',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A team settings page made of Card, Avatar, Avatar Group, Badge, Button Group, Separator, Spinner, Kbd, Progress, Progress circle, Aspect Ratio, Empty (search for someone who is not there), Input with Input Group Dropdown, Dropdown Menu, Context Menu (right-click a member), Tooltip, Alert, Alert Dialog, Dialog (team settings), Sheet (the activity log), Drawer (add seats), Hover Card (the workspace owner), Toggle (compact list), Toggle Group (sort by), Popover (the invite link), Marker and toasts, for trying components together before they are merged. Use the toolbar to switch brand and colour scheme.',
      },
    },
  },
} satisfies Meta;

export default meta;

export const Members: StoryObj = {
  render: function Render() {
    const [members, setMembers] = useState(initialMembers);
    const [view, setView] = useState<View>('all');
    const [query, setQuery] = useState('');
    const [searchIn, setSearchIn] = useState<'Name' | 'Email'>('Name');
    const [showRoles, setShowRoles] = useState(true);
    const [compact, setCompact] = useState(false);
    const [sortBy, setSortBy] = useState<'joined' | 'name' | 'role'>('joined');
    const [teamName, setTeamName] = useState('Orbit');
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [seats, setSeats] = useState(10);
    const [extraSeats, setExtraSeats] = useState(5);
    const [removing, setRemoving] = useState<Member | null>(null);
    const [activity, setActivity] = useState<ReactNode[]>(['Mira created the workspace', 'Jonas joined as Admin']);

    const log = (line: string) => setActivity((lines) => [...lines, line]);
    const pending = members.filter((m) => m.pending);
    const roleOrder: Role[] = ['Owner', 'Admin', 'Member'];
    const shown = members
      .filter((m) => (view === 'all' || (view === 'pending') === Boolean(m.pending)) && (searchIn === 'Name' ? m.name : m.email).toLowerCase().includes(query.trim().toLowerCase()))
      .sort((a, b) => (sortBy === 'joined' ? 0 : (sortBy === 'role' ? roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role) : 0) || a.name.localeCompare(b.name)));

    const setRole = (member: Member, role: Role) => {
      setMembers((list) => list.map((m) => (m.id === member.id ? { ...m, role } : m)));
      log(`${member.name} is now ${role}`);
      toast.success(`${member.name} is now ${role}`);
    };
    const resend = (member: Member) => toast.info(`Invite sent again to ${member.email}`);

    // The same actions in the row's "More" menu and in its context menu.
    const actions = (member: Member) => (
      <>
        <DropdownMenuRadioGroup label="Role" value={member.role} onValueChange={(role) => setRole(member, role as Role)}>
          {(['Admin', 'Member'] as const).map((role) => (
            <DropdownMenuRadioItem key={role} value={role} disabled={member.role === 'Owner'}>
              {role}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        {member.pending && (
          <DropdownMenuItem icon={<RiRefreshLine />} onClick={() => resend(member)}>
            Resend invite
          </DropdownMenuItem>
        )}
        <DropdownMenuItem icon={<RiMailLine />} onClick={() => toast(`Email to ${member.email}`, { description: 'Your mail app opens in a real product.' })}>
          Send email
        </DropdownMenuItem>
        <DropdownMenuItem type="destructive" icon={<RiDeleteBinLine />} disabled={member.role === 'Owner'} onClick={() => setRemoving(member)}>
          Remove from team
        </DropdownMenuItem>
      </>
    );

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 560px) 280px', gap: 16, alignItems: 'start', fontFamily: 'var(--ds-font-sans)' }}>
        <Card as="section" aria-label="Team members">
          <CardHeader
            title={`${teamName} members`}
            description="Invite people and choose what they can do."
            action={
              <div style={{ display: 'flex', gap: 8 }}>
                <Dialog
                  trigger={<Button variant="ghost" size="sm" icon={<RiSettings3Line />} aria-label="Team settings" />}
                  open={settingsOpen}
                  onOpenChange={setSettingsOpen}
                  title="Team settings"
                  description="The name shows in invites and on the team's page."
                  footer={
                    <>
                      <DialogClose>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button type="submit" form="team-settings">
                        Save
                      </Button>
                    </>
                  }
                >
                  <form
                    id="team-settings"
                    onSubmit={(event) => {
                      event.preventDefault();
                      const name = String(new FormData(event.currentTarget).get('team') ?? '').trim() || teamName;
                      setTeamName(name);
                      toast.success(`Team renamed to ${name}`);
                      setSettingsOpen(false);
                    }}
                  >
                    <FieldGroup>
                      <Field label="Team name">
                        <Input name="team" defaultValue={teamName} />
                      </Field>
                      <Switch name="invites" label="Members can invite people" caption="Otherwise only Admins send invites." defaultChecked />
                    </FieldGroup>
                  </form>
                </Dialog>
                <Popover
                  align="end"
                  trigger={<Button variant="ghost" size="sm" icon={<RiLinkM />} aria-label="Invite link" />}
                  title="Invite link"
                  description="Anyone with the link joins as a Member."
                >
                  <Input
                    aria-label="Link"
                    readOnly
                    defaultValue="https://sort.team/join/acme-7f3k"
                    action={
                      <InputAction aria-label="Copy invite link" onClick={() => toast.success('Invite link copied')}>
                        <RiFileCopyLine />
                      </InputAction>
                    }
                  />
                  <PopoverActions>
                    <PopoverClose>
                      <Button variant="outline" size="sm" onClick={() => toast.info('A new invite link was created')}>
                        Reset link
                      </Button>
                    </PopoverClose>
                  </PopoverActions>
                </Popover>
                <DropdownMenu
                  align="end"
                  trigger={
                    <Button variant="outline" size="sm" leadingIcon={<RiUserAddLine />}>
                      Invite
                    </Button>
                  }
                >
                  <DropdownMenuGroup label="Invite as">
                    <DropdownMenuItem icon={<RiShieldUserLine />} onClick={() => toast.success('Invite link for Admins copied')}>
                      Admin
                    </DropdownMenuItem>
                    <DropdownMenuItem icon={<RiUserAddLine />} onClick={() => toast.success('Invite link for Members copied')}>
                      Member
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenu>
              </div>
            }
          />
          <CardContent>
            <div style={{ display: 'grid', gap: 16 }}>
              {pending.length > 0 && (
                <Alert
                  title={`${pending.length} ${pending.length === 1 ? 'invite is' : 'invites are'} waiting`}
                  description="People join when they accept the email invite."
                  action={
                    <Button variant="outline" size="sm" onClick={() => toast.info(`${pending.length} invites sent again`)}>
                      Resend all
                    </Button>
                  }
                />
              )}
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <ButtonGroup aria-label="Show">
                  {(['all', 'active', 'pending'] as const).map((v) => (
                    <Button key={v} variant={view === v ? 'secondary' : 'outline'} size="sm" aria-pressed={view === v} onClick={() => setView(v)}>
                      {v[0].toUpperCase() + v.slice(1)}
                    </Button>
                  ))}
                </ButtonGroup>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <Input
                    aria-label="Search members"
                    placeholder="Search"
                    value={query}
                    onChange={(event) => setQuery(event.currentTarget.value)}
                    leadIcon={<RiSearchLine />}
                    action={
                      <DropdownMenu align="end" trigger={<InputDropdown aria-label={`Search in: ${searchIn}`}>{searchIn}</InputDropdown>}>
                        {(['Name', 'Email'] as const).map((label) => (
                          <DropdownMenuItem key={label} onClick={() => setSearchIn(label)}>
                            {label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenu>
                    }
                  />
                </div>
                <DropdownMenu
                  align="end"
                  trigger={
                    <Button variant="ghost" size="sm" icon={<RiFilter3Line />} aria-label="View options" />
                  }
                >
                  <DropdownMenuCheckboxItem checked={showRoles} onCheckedChange={setShowRoles}>
                    Show roles
                  </DropdownMenuCheckboxItem>
                </DropdownMenu>
                <Toggle size="sm" icon={<RiContractUpDownLine />} aria-label="Compact list" pressed={compact} onPressedChange={setCompact} />
                <ToggleGroup type="single" size="sm" variant="outline" spacing={0} aria-label="Sort by" value={sortBy} onValueChange={(v) => v && setSortBy(v as 'joined' | 'name' | 'role')}>
                  <ToggleGroupItem value="joined">Joined</ToggleGroupItem>
                  <ToggleGroupItem value="name">Name</ToggleGroupItem>
                  <ToggleGroupItem value="role">Role</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <ul aria-label="Members" style={{ display: 'grid', gap: 4, margin: 0, padding: 0, listStyle: 'none' }}>
                {shown.map((member) => (
                  <li key={member.id}>
                    <ContextMenu
                      aria-label={`${member.name} actions`}
                      trigger={
                        <div tabIndex={0} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: compact ? '2px 8px' : 8, borderRadius: 8, outlineOffset: 2 }}>
                          <Avatar size="sm" initials={initials(member.name)} name={member.name} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ color: 'var(--ds-foreground)', fontSize: 14, fontWeight: 500 }}>{member.name}</div>
                            {!compact && <div style={{ color: 'var(--ds-muted-foreground)', fontSize: 13 }}>{member.email}</div>}
                          </div>
                          {member.pending && (
                            <Badge size="sm" color="orange" dot>
                              Pending
                            </Badge>
                          )}
                          {showRoles && (
                            <Badge size="sm" color={roleColor[member.role]}>
                              {member.role}
                            </Badge>
                          )}
                          <DropdownMenu align="end" trigger={<Button variant="ghost" size="sm" icon={<RiMoreLine />} aria-label={`More actions for ${member.name}`} />}>
                            {actions(member)}
                          </DropdownMenu>
                        </div>
                      }
                    >
                      {actions(member)}
                    </ContextMenu>
                  </li>
                ))}
              </ul>
              {shown.length === 0 && (
                <Empty
                  icon={<RiSearchLine />}
                  title="No members match"
                  titleAs="p"
                  description="Try another name or email, or show everyone."
                  actions={
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setQuery('');
                        setView('all');
                      }}
                    >
                      Show everyone
                    </Button>
                  }
                />
              )}
            </div>
          </CardContent>
          <CardFooter justify="between" muted>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ds-muted-foreground)', fontSize: 13 }}>
              <AvatarGroup size="sm" max={3}>
                {members.map((m) => (
                  <Avatar key={m.id} initials={initials(m.name)} name={m.name} />
                ))}
              </AvatarGroup>
              {members.length} of {seats} seats used
              <Separator orientation="vertical" style={{ height: 16 }} />
              {pending.length} pending
            </span>
            <Tooltip
              content={
                <>
                  Right-click a member, or press{' '}
                  <KbdGroup>
                    <Kbd variant="inverted" size="sm">
                      Shift
                    </Kbd>
                    <Kbd variant="inverted" size="sm">
                      F10
                    </Kbd>
                  </KbdGroup>{' '}
                  on it, for the same actions
                </>
              }
            >
              <Button variant="ghost" size="sm">
                Tips
              </Button>
            </Tooltip>
          </CardFooter>
        </Card>

        <Card as="section" size="sm" aria-label="Activity">
          <CardHeader
            title="Activity"
            action={
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Spinner size="sm" variant="gradient" label="Syncing activity" />
                <Sheet
                  trigger={
                    <Button variant="ghost" size="sm">
                      View all
                    </Button>
                  }
                  title="Activity log"
                  description={`Everything that happened in ${teamName}.`}
                  footer={
                    <SheetClose>
                      <Button variant="outline">Done</Button>
                    </SheetClose>
                  }
                >
                  <Marker variant="separator">Today</Marker>
                  {activity.map((line, i) => (
                    <Marker key={i}>{line}</Marker>
                  ))}
                  <Marker variant="separator">Earlier</Marker>
                  <Marker>Mira created the team page</Marker>
                  <Marker>Seats raised from 5 to 10</Marker>
                </Sheet>
              </div>
            }
          />
          <CardContent>
            <div style={{ display: 'grid', gap: 12 }}>
              <AspectRatio ratio="21:9" rounded>
                <img src={aspectRatioPhoto} alt="The team at the last offsite" />
              </AspectRatio>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'var(--ds-muted-foreground)' }}>
                <ProgressCircle value={72} size="40px" thickness={12} aria-label="Profiles complete" />
                72 % of profiles are complete
              </div>
              <Progress label="Seats" value={members.length} max={seats} valueLabel={`${members.length} of ${seats}`} />
              <Drawer
                trigger={
                  <Button variant="outline" size="sm">
                    Add seats
                  </Button>
                }
                width="384px"
                title="Add seats"
                description="€12 per seat a month, billed with your plan."
                footer={
                  <>
                    <DrawerClose>
                      <Button
                        onClick={() => {
                          setSeats((n) => n + extraSeats);
                          toast.success(`${extraSeats} seats added`);
                        }}
                      >
                        Add {extraSeats} seats
                      </Button>
                    </DrawerClose>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </>
                }
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
                  <Button variant="outline" aria-label="Fewer seats" disabled={extraSeats <= 1} onClick={() => setExtraSeats((n) => n - 1)} icon={<span aria-hidden>−</span>} />
                  <span aria-live="polite" style={{ fontSize: 32, lineHeight: '40px', fontWeight: 600, color: 'var(--ds-foreground)' }}>
                    {extraSeats}
                  </span>
                  <Button variant="outline" aria-label="More seats" onClick={() => setExtraSeats((n) => n + 1)} icon={<span aria-hidden>+</span>} />
                </div>
              </Drawer>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--ds-muted-foreground)' }}>
                Workspace owner:{' '}
                <HoverCard
                  align="start"
                  trigger={
                    <a href="#mira" style={{ color: 'var(--ds-foreground)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                      Mira Okafor
                    </a>
                  }
                >
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <Avatar size="lg" initials="MO" />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontWeight: 500 }}>Mira Okafor</span>
                      <span style={{ color: 'var(--ds-muted-foreground)' }}>Owner · mira@orbit.dev</span>
                    </div>
                  </div>
                  <p style={{ margin: 0, color: 'var(--ds-muted-foreground)' }}>Created the workspace and manages billing. Ask her to change the plan.</p>
                </HoverCard>
              </p>
              <Marker variant="separator">Today</Marker>
              {activity.map((line, i) => (
                <Marker key={i}>{line}</Marker>
              ))}
              <Marker loading>Syncing with the directory…</Marker>
            </div>
          </CardContent>
        </Card>

        <AlertDialog
          open={removing !== null}
          onOpenChange={(open) => !open && setRemoving(null)}
          variant="destructive"
          size="sm"
          title={`Remove ${removing?.name ?? ''}?`}
          description="They lose access to the workspace at once. You can invite them again later."
        >
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={() => {
              if (!removing) return;
              setMembers((list) => list.filter((m) => m.id !== removing.id));
              log(`${removing.name} was removed`);
              toast(`${removing.name} was removed`, { action: { label: 'Undo', onClick: () => setMembers((list) => [...list, removing]) } });
            }}
          >
            Remove
          </AlertDialogAction>
        </AlertDialog>
        <Toaster />
      </div>
    );
  },
};
