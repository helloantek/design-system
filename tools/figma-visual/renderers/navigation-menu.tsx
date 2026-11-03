import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Sort UI 2.0 Navigation Menu (208:3) with Figma's sample label "Library". Navigation Menu Trigger (211:32): Type=Trigger
// is a trigger with a panel (Active = open, so the panel shows under it), Type=Link a top-level link (Active = the
// current page). Navigation Menu Link (211:42): a 276 px panel link "Link" (Active = the current page). Hover and Focus
// come from real input. The label text is marked for the spec check's "Label".
const label = (text: string) => <span data-label="">{text}</span>;

export const renderNavigationMenu: Renderer = (p) => {
  if (p.Part === 'Link') {
    return (
      <div style={{ padding: 24, background: 'var(--ds-background)' }}>
        <div style={{ width: 276 }}>
          <NavigationMenuLink id="target" href="#link" title={label('Link')} active={p.State === 'Active'} />
        </div>
      </div>
    );
  }
  const disabled = p.State === 'Disabled';
  return (
    <div style={{ padding: 24, background: 'var(--ds-background)' }}>
      <NavigationMenu aria-label="Sample" defaultValue={p.State === 'Active' ? 'library' : undefined}>
        {p.Type === 'Trigger' ? (
          <NavigationMenuItem value="library" id="item" label={label('Library')} disabled={disabled}>
            <NavigationMenuLink href="#hosting" title="Hosting" />
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem id="item" href="#library" label={label('Library')} active={p.State === 'Active'} disabled={disabled} />
        )}
      </NavigationMenu>
    </div>
  );
};
