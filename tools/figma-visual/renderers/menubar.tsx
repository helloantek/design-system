import { DropdownMenuItem, DropdownMenuSeparator, Menubar, MenubarMenu } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Sort UI 2.0 Menubar (161:1175). Menubar Trigger (162:8): a bar with one menu "Menu" (State=Open opens it; Hover comes
// from real input). Menubar (162:9): Figma's sample "Tokens" (open, its menu below the bar), "View" and "Publish".
// The label text is marked for the spec check's "Label".
const label = (text: string) => <span data-label="">{text}</span>;

export const renderMenubar: Renderer = (p) => {
  if (p.Part === 'Trigger') {
    return (
      <div style={{ padding: 24, background: 'var(--ds-background)' }}>
        <Menubar aria-label="Sample" defaultValue={p.State === 'Open' ? 'menu' : undefined} style={{ boxShadow: 'none', padding: 0 }}>
          <MenubarMenu value="menu" label={label('Menu')}>
            <DropdownMenuItem>Item</DropdownMenuItem>
          </MenubarMenu>
        </Menubar>
      </div>
    );
  }
  return (
    <div style={{ padding: 24, background: 'var(--ds-background)' }}>
      <Menubar aria-label="Sample" defaultValue="tokens">
        <MenubarMenu value="tokens" label={label('Tokens')}>
          <DropdownMenuItem shortcut="⌘N">New token</DropdownMenuItem>
          <DropdownMenuItem>Export</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem type="destructive" shortcut="⌘K">
            Delete token
          </DropdownMenuItem>
        </MenubarMenu>
        <MenubarMenu label="View">
          <DropdownMenuItem>Grid</DropdownMenuItem>
        </MenubarMenu>
        <MenubarMenu label="Publish">
          <DropdownMenuItem>Now</DropdownMenuItem>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
