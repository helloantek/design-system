import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, DropdownMenuItem } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Sort UI 2.0 Breadcrumb (page 259:2). Items (type=link / active / dropdown, state=default / hover) and separators
// (Type=Chevron / Slash / Dot) are compared on their own element (manifest "target"); the Breadcrumb component holds
// link, ellipsis, link, active with chevrons; the "Dropdown" and "Separators" demos are drawn whole.
const trail = (separator: 'chevron' | 'slash' | 'dot', label?: string) => (
  <Breadcrumb key={separator} separator={separator} aria-label={label}>
    <BreadcrumbItem href="#home">Home</BreadcrumbItem>
    <BreadcrumbItem href="#projects">Projects</BreadcrumbItem>
    <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
  </Breadcrumb>
);

export const renderBreadcrumb: Renderer = (p) => {
  let body;
  if (p.Part === 'item') {
    body = (
      <Breadcrumb>
        {p.type === 'active' ? (
          <BreadcrumbItem current>Breadcrumb</BreadcrumbItem>
        ) : p.type === 'dropdown' ? (
          <BreadcrumbItem menu={<DropdownMenuItem>Breadcrumb</DropdownMenuItem>}>Breadcrumb</BreadcrumbItem>
        ) : (
          <BreadcrumbItem href="#b">Breadcrumb</BreadcrumbItem>
        )}
      </Breadcrumb>
    );
  } else if (p.Part === 'separator') {
    body = (
      <Breadcrumb separator={p.Type.toLowerCase() as 'chevron' | 'slash' | 'dot'}>
        <BreadcrumbItem href="#a">A</BreadcrumbItem>
        <BreadcrumbItem current>B</BreadcrumbItem>
      </Breadcrumb>
    );
  } else if (p.Part === 'breadcrumb') {
    body = (
      <Breadcrumb>
        <BreadcrumbItem href="#a">Breadcrumb</BreadcrumbItem>
        <BreadcrumbEllipsis>
          <DropdownMenuItem>More</DropdownMenuItem>
        </BreadcrumbEllipsis>
        <BreadcrumbItem href="#b">Breadcrumb</BreadcrumbItem>
        <BreadcrumbItem current>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    );
  } else if (p.Part === 'dropdown') {
    body = (
      <Breadcrumb>
        <BreadcrumbItem href="#home">Home</BreadcrumbItem>
        <BreadcrumbItem menu={<DropdownMenuItem>Projects</DropdownMenuItem>}>Projects</BreadcrumbItem>
        <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
      </Breadcrumb>
    );
  } else {
    body = <div style={{ display: 'grid', gap: 24, justifyItems: 'start' }}>{(['chevron', 'slash', 'dot'] as const).map((s) => trail(s, s))}</div>;
  }
  return (
    <div style={{ padding: 24, background: 'var(--ds-background)' }}>
      <div id="target" style={{ display: 'inline-block' }}>
        {body}
      </div>
    </div>
  );
};
