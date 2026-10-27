import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuUserProfile,
  type DropdownMenuLabelSize,
  type DropdownMenuUserProfileSize,
} from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Dropdown Menu components to code, with the sample texts of the Figma file. Every part is
// rendered in a 224 px menu (216 px inside its 4 px padding). State=Focus: the item is made tabbable, so the Tab
// that check.mjs presses gives it real focus; User Profile State=Hover comes from the pointer.

// The Figma item's placeholder icon (square-dashed), as exported from the file.
const icon = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3.333 2A1.333 1.333 0 0 0 2 3.333M12.667 2A1.333 1.333 0 0 1 14 3.333M14 12.667A1.333 1.333 0 0 1 12.667 14M3.333 14A1.333 1.333 0 0 1 2 12.667M6 2h.667M6 14h.667M9.333 2H10M9.333 14H10M2 6v.667M14 6v.667M2 9.333V10M14 9.333V10" />
  </svg>
);
const avatar = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect width="1" height="1" fill="#9be15d"/></svg>');

function Item(p: Record<string, string>) {
  const common = { icon, inset: p.Inset === 'True', disabled: p.State === 'Disabled', tabIndex: p.State === 'Focus' ? 0 : -1 };
  switch (p.Type) {
    case 'Item':
    case 'Destructive':
      return (
        <DropdownMenuItem {...common} type={p.Type === 'Destructive' ? 'destructive' : 'item'} shortcut="⌘K">
          Item
        </DropdownMenuItem>
      );
    case 'Checkbox':
    case 'Menubar checkbox':
      return (
        <DropdownMenuCheckboxItem {...common} type={p.Type === 'Checkbox' ? 'checkbox' : 'menubar'} shortcut="⌘K" defaultChecked>
          Item
        </DropdownMenuCheckboxItem>
      );
    case 'Sub trigger':
      return (
        <DropdownMenuSub {...common} label="Item">
          <DropdownMenuItem>Sub item</DropdownMenuItem>
        </DropdownMenuSub>
      );
  }
  throw new Error(`Dropdown Menu Item type "${p.Type}" is not implemented`);
}

function Part(p: Record<string, string>) {
  switch (p.Kind) {
    case 'Item':
      return <Item {...p} />;
    case 'Label':
      return (
        <DropdownMenuLabel size={p.Size as DropdownMenuLabelSize} inset={p.Inset === 'True'}>
          Group
        </DropdownMenuLabel>
      );
    case 'Separator':
      return <DropdownMenuSeparator />;
    case 'User Profile':
      return <DropdownMenuUserProfile size={p.Size as DropdownMenuUserProfileSize} name="Shiryoku" handle="@mx.shiryoku" src={avatar} />;
  }
  throw new Error(`Dropdown Menu kind "${p.Kind}" is not implemented`);
}

export const renderDropdownMenu: Renderer = (p) => (
  <div id="target" style={{ padding: 8 }}>
    <DropdownMenuContent aria-label="Menu" style={{ width: 224 }}>
      {p.Kind === 'Content' ? (
        Array.from({ length: 6 }, (_, i) => (
          <DropdownMenuItem key={i} icon={icon} shortcut="⌘K">
            Item
          </DropdownMenuItem>
        ))
      ) : (
        <Part {...p} />
      )}
    </DropdownMenuContent>
  </div>
);
