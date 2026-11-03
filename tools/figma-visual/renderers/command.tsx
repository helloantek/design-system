import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, Empty } from '@helloantek/ds-react';
import type { ReactNode } from 'react';
import type { Renderer } from './types';

// Sort UI 2.0 Command (208:2) with Figma's sample content. Command Item (209:26): "Item" with the square-dashed
// leading icon in a 368 px list (State=Selected is the item the list selects first, so Default follows another
// item). Command Group Heading (575:8221) "Group". Command (575:8007) Variant=Default: Suggestions (Calendar, Search
// Emoji, Calculator disabled), a separator and Settings (Profile P, Billing B, Settings /); Variant=Empty: the Empty
// state. Heading text is marked for the spec check's "Heading".
const icon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.73} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {d}
  </svg>
);
const squareDashed = icon(
  <path d="M5 3a2 2 0 0 0-2 2m16-2a2 2 0 0 1 2 2m0 14a2 2 0 0 1-2 2M5 21a2 2 0 0 1-2-2M9 3h1m-1 18h1m4-18h1m-1 18h1M3 9v1m18-1v1M3 14v1m18-1v1" />,
);
const icons = {
  calendar: icon(<><path d="M8 2v4m8-4v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></>),
  smile: icon(<><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></>),
  calculator: icon(<><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M8 6h8M16 14v4M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" /></>),
  user: icon(<><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>),
  card: icon(<><rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 10h20" /></>),
  settings: icon(<path d="M20 7h-9M14 17H5M17 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />),
  search: icon(<><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>),
};
const heading = (text: string) => <span data-heading="">{text}</span>;
const frame = (children: ReactNode) => <div style={{ padding: 24, background: 'var(--ds-background)' }}>{children}</div>;

export const renderCommand: Renderer = (p) => {
  if (p.Part === 'Item') {
    return frame(
      <div style={{ width: 368 }}>
        <Command label="Sample" plain>
          <CommandList style={{ padding: 0 }}>
            {p.State === 'Default' && <CommandItem icon={squareDashed}>First</CommandItem>}
            <CommandItem id="target" icon={squareDashed} disabled={p.State === 'Disabled'}>
              Item
            </CommandItem>
          </CommandList>
        </Command>
      </div>,
    );
  }
  if (p.Part === 'Heading') {
    return frame(
      <div style={{ width: 368 }}>
        <Command label="Sample" plain>
          <CommandList style={{ padding: 0 }}>
            <CommandGroup heading={heading('Group')}>
              <CommandItem>Item</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>,
    );
  }
  if (p.Variant === 'Empty') {
    return frame(
      <Command label="Sample">
        <CommandInput placeholder="Placeholder" />
        <CommandList>
          <CommandEmpty>
            <Empty titleAs="p" icon={icons.search} title="No results found." description="You haven't created any commands yet. Get started by creating your first command." />
          </CommandEmpty>
        </CommandList>
      </Command>,
    );
  }
  return frame(
    <Command label="Sample">
      <CommandInput placeholder="Placeholder" />
      <CommandList>
        <CommandGroup heading={heading('Suggestions')}>
          <CommandItem icon={icons.calendar}>Calendar</CommandItem>
          <CommandItem icon={icons.smile}>Search Emoji</CommandItem>
          <CommandItem icon={icons.calculator} disabled>
            Calculator
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={heading('Settings')}>
          <CommandItem icon={icons.user} shortcut="P">
            Profile
          </CommandItem>
          <CommandItem icon={icons.card} shortcut="B">
            Billing
          </CommandItem>
          <CommandItem icon={icons.settings} shortcut="/">
            Settings
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>,
  );
};
