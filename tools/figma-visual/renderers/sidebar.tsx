import { Sidebar, SidebarContent, SidebarGroup, SidebarLayout, SidebarMenuItem } from '@helloantek/ds-react';
import type { ReactNode } from 'react';
import type { Renderer } from './types';

// Sort UI 2.0 Sidebar (265:3) with Figma's sample content. Sidebar Menu Button (662:36838): a folder icon, "Menu Item",
// a "16" badge and the collapsible chevron (an item with a closed sub menu); Size=lg: a 32 px sidebar-primary
// picture, "Shiryoku" over "Item Description" and the up-down icon; Collapsed=True: the icon in the collapsed rail.
// Sidebar Group Label (670:38406): "Group Label", collapsible (closed). Sidebar Menu Sub Item Level 2 (670:41781): a sub
// menu holding one "Menu Item". Hover and focus come from real input.
const icon = (d: ReactNode) => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {d}
  </svg>
);
const folder = icon(<path d="M13.33 13.33A1.33 1.33 0 0 0 14.67 12V5.33A1.33 1.33 0 0 0 13.33 4H8.07a1.33 1.33 0 0 1-1.11-.6l-.54-.8A1.33 1.33 0 0 0 5.31 2H2.67a1.33 1.33 0 0 0-1.34 1.33V12a1.33 1.33 0 0 0 1.34 1.33Z" />);
const upDown = icon(<path d="m4.67 10 3.33 3.33L11.33 10M4.67 6 8 2.67 11.33 6" />);
const media = (
  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 8, background: 'var(--ds-sidebar-primary)', color: 'var(--ds-sidebar-primary-foreground)' }}>
    {icon(<><circle cx="8" cy="6" r="2" /><path d="M5 12a3 3 0 0 1 6 0" /></>)}
  </span>
);
const frame = (width: number, children: ReactNode) => (
  <div style={{ padding: 24, background: 'var(--ds-background)' }}>
    <div style={{ width }}>{children}</div>
  </div>
);

export const renderSidebar: Renderer = (p) => {
  if (p.Part === 'GroupLabel') {
    return frame(
      280,
      <SidebarGroup label="Group Label" labelSize={p.Size === 'sm' ? 'sm' : 'default'} collapsible defaultOpen={false}>
        <SidebarMenuItem label="Menu Item" href="#item" />
      </SidebarGroup>,
    );
  }
  if (p.Part === 'SubItem') {
    return frame(
      300,
      <SidebarGroup>
        <SidebarMenuItem label="Parent" defaultOpen>
          <SidebarMenuItem label="Menu Item" icon={folder} href="#item" />
        </SidebarMenuItem>
      </SidebarGroup>,
    );
  }
  if (p.Collapsed === 'True') {
    return frame(
      80,
      <SidebarLayout defaultCollapsed>
        <Sidebar aria-label="Sample">
          <SidebarContent style={{ padding: 0 }}>
            <SidebarGroup>
              <SidebarMenuItem label="Menu Item" icon={folder} href="#item" />
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarLayout>,
    );
  }
  if (p.Size === 'lg') {
    return frame(
      280,
      <SidebarGroup>
        <SidebarMenuItem size="lg" label="Shiryoku" description="Item Description" icon={media} endIcon={upDown} />
      </SidebarGroup>,
    );
  }
  return frame(
    280,
    <SidebarGroup>
      <SidebarMenuItem label="Menu Item" icon={folder} badge="16" size={p.Size === 'sm' ? 'sm' : 'default'} active={p.State === 'Active'}>
        <SidebarMenuItem label="Sub item" href="#sub" />
      </SidebarMenuItem>
    </SidebarGroup>,
  );
};
