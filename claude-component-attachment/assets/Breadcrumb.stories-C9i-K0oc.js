import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-oCEgxKoN.js";import{h as n,o as r}from"./DropdownMenu-CEtPZ-zN.js";import{i,n as a,r as o,t as s}from"./Breadcrumb-DD-Nw0Hz.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),i(),c=t(),l={title:`Components/Breadcrumb`,parameters:{layout:`centered`,docs:{description:{component:'Implements the Sort UI 2.0 **Breadcrumb**, **Breadcrumb Item**, **Breadcrumb Separator** and **Breadcrumb Ellipsis** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=259-2)): Breadcrumb Item type → `BreadcrumbItem` with `href` (link), `current` (active) or `menu` (dropdown), Icon → `icon`; Separator Type → `separator` on the Breadcrumb (`chevron` · `slash` · `dot`); Ellipsis → `BreadcrumbEllipsis` with menu items for the steps left out. It is a `nav` landmark with an ordered list; separators are hidden from assistive technology and the current page has `aria-current="page"`. `asChild` renders your router\'s link.'}}}},u=e=>(0,c.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.73,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),d=u((0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`}),(0,c.jsx)(`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`})]})),f=u((0,c.jsx)(`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`})),p={args:{separator:`chevron`,icons:!1,collapsed:!1,dropdown:!1},argTypes:{separator:{control:`inline-radio`,options:[`chevron`,`slash`,`dot`]}},render:({separator:e,icons:t,collapsed:n,dropdown:i})=>(0,c.jsx)(`div`,{style:{minHeight:160},children:(0,c.jsxs)(s,{separator:e,children:[(0,c.jsx)(o,{href:`#home`,icon:t?d:void 0,children:`Home`}),n&&(0,c.jsxs)(a,{children:[(0,c.jsx)(r,{children:`Documents`}),(0,c.jsx)(r,{children:`Themes`})]}),i?(0,c.jsx)(o,{icon:t?f:void 0,menu:[`Projects`,`Archive`,`Shared with me`].map(e=>(0,c.jsx)(r,{children:e},e)),children:`Projects`}):(0,c.jsx)(o,{href:`#projects`,icon:t?f:void 0,children:`Projects`}),(0,c.jsx)(o,{current:!0,children:`Onboarding flow`})]})})},m={render:()=>(0,c.jsxs)(s,{children:[(0,c.jsx)(o,{href:`#home`,children:`Home`}),(0,c.jsx)(o,{href:`#projects`,children:`Projects`}),(0,c.jsx)(o,{current:!0,children:`Onboarding flow`})]})},h={render:()=>(0,c.jsx)(`div`,{style:{minHeight:180},children:(0,c.jsxs)(s,{children:[(0,c.jsx)(o,{href:`#home`,children:`Home`}),(0,c.jsxs)(a,{children:[(0,c.jsx)(r,{children:`Documents`}),(0,c.jsx)(r,{children:`Themes`}),(0,c.jsx)(r,{children:`Repositories`})]}),(0,c.jsx)(o,{href:`#projects`,children:`Projects`}),(0,c.jsx)(o,{current:!0,children:`Onboarding flow`})]})})},g={render:()=>(0,c.jsx)(`div`,{style:{minHeight:180},children:(0,c.jsxs)(s,{children:[(0,c.jsx)(o,{href:`#home`,children:`Home`}),(0,c.jsx)(o,{menuLabel:`Switch section`,menu:[`Projects`,`Archive`,`Shared with me`].map(e=>(0,c.jsx)(r,{children:e},e)),children:`Projects`}),(0,c.jsx)(o,{current:!0,children:`Onboarding flow`})]})})},_={render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gap:24},children:[`chevron`,`slash`,`dot`].map(e=>(0,c.jsxs)(s,{separator:e,"aria-label":`Breadcrumb (${e})`,children:[(0,c.jsx)(o,{href:`#home`,children:`Home`}),(0,c.jsx)(o,{href:`#projects`,children:`Projects`}),(0,c.jsx)(o,{current:!0,children:`Onboarding flow`})]},e))})},v={render:()=>(0,c.jsxs)(s,{children:[(0,c.jsx)(o,{href:`#home`,icon:d,children:`Home`}),(0,c.jsx)(o,{href:`#projects`,icon:f,children:`Projects`}),(0,c.jsx)(o,{current:!0,children:`Onboarding flow`})]})},y={render:()=>(0,c.jsx)(`div`,{style:{width:280},children:(0,c.jsxs)(s,{children:[(0,c.jsx)(o,{href:`#home`,children:`Home`}),(0,c.jsx)(o,{href:`#workspace`,children:`Orbit workspace`}),(0,c.jsx)(o,{href:`#projects`,children:`Projects`}),(0,c.jsx)(o,{href:`#q3`,children:`Q3 launch`}),(0,c.jsx)(o,{current:!0,children:`Onboarding flow`})]})})},b={parameters:{layout:`fullscreen`},render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,c.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16},children:[`chevron`,`slash`,`dot`].map(t=>(0,c.jsxs)(s,{separator:t,"aria-label":`Breadcrumb (${t}, ${e})`,children:[(0,c.jsx)(o,{href:`#home`,icon:d,children:`Home`}),(0,c.jsx)(o,{href:`#projects`,children:`Projects`}),(0,c.jsx)(o,{current:!0,children:`Onboarding flow`})]},t))},e))})},x=[`Playground`,`Default`,`Collapsed`,`Dropdown`,`Separators`,`WithIcons`,`LongTrail`,`Themes`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    separator: 'chevron',
    icons: false,
    collapsed: false,
    dropdown: false
  },
  argTypes: {
    separator: {
      control: 'inline-radio',
      options: ['chevron', 'slash', 'dot']
    }
  },
  render: ({
    separator,
    icons,
    collapsed,
    dropdown
  }) => <div style={{
    minHeight: 160
  }}>
      <Breadcrumb separator={separator}>
        <BreadcrumbItem href="#home" icon={icons ? house : undefined}>
          Home
        </BreadcrumbItem>
        {collapsed && <BreadcrumbEllipsis>
            <DropdownMenuItem>Documents</DropdownMenuItem>
            <DropdownMenuItem>Themes</DropdownMenuItem>
          </BreadcrumbEllipsis>}
        {dropdown ? <BreadcrumbItem icon={icons ? folder : undefined} menu={['Projects', 'Archive', 'Shared with me'].map(p => <DropdownMenuItem key={p}>{p}</DropdownMenuItem>)}>
            Projects
          </BreadcrumbItem> : <BreadcrumbItem href="#projects" icon={icons ? folder : undefined}>
            Projects
          </BreadcrumbItem>}
        <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
      </Breadcrumb>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbItem href="#home">Home</BreadcrumbItem>
      <BreadcrumbItem href="#projects">Projects</BreadcrumbItem>
      <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
    </Breadcrumb>
}`,...m.parameters?.docs?.source},description:{story:`Figma demo "Breadcrumb".`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    minHeight: 180
  }}>
      <Breadcrumb>
        <BreadcrumbItem href="#home">Home</BreadcrumbItem>
        <BreadcrumbEllipsis>
          <DropdownMenuItem>Documents</DropdownMenuItem>
          <DropdownMenuItem>Themes</DropdownMenuItem>
          <DropdownMenuItem>Repositories</DropdownMenuItem>
        </BreadcrumbEllipsis>
        <BreadcrumbItem href="#projects">Projects</BreadcrumbItem>
        <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
      </Breadcrumb>
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Figma demo "Collapsed": the Ellipsis opens a menu of the steps left out.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    minHeight: 180
  }}>
      <Breadcrumb>
        <BreadcrumbItem href="#home">Home</BreadcrumbItem>
        <BreadcrumbItem menuLabel="Switch section" menu={['Projects', 'Archive', 'Shared with me'].map(p => <DropdownMenuItem key={p}>{p}</DropdownMenuItem>)}>
          Projects
        </BreadcrumbItem>
        <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
      </Breadcrumb>
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Figma demo "Dropdown": Breadcrumb Item type=dropdown opens the step's siblings.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      {(['chevron', 'slash', 'dot'] as const).map(separator => <Breadcrumb key={separator} separator={separator} aria-label={\`Breadcrumb (\${separator})\`}>
          <BreadcrumbItem href="#home">Home</BreadcrumbItem>
          <BreadcrumbItem href="#projects">Projects</BreadcrumbItem>
          <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
        </Breadcrumb>)}
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Figma demo "Separators": Breadcrumb Separator Type=Chevron, Slash and Dot.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbItem href="#home" icon={house}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#projects" icon={folder}>
        Projects
      </BreadcrumbItem>
      <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
    </Breadcrumb>
}`,...v.parameters?.docs?.source},description:{story:`Figma Breadcrumb Item Icon: an icon before the label.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 280
  }}>
      <Breadcrumb>
        <BreadcrumbItem href="#home">Home</BreadcrumbItem>
        <BreadcrumbItem href="#workspace">Orbit workspace</BreadcrumbItem>
        <BreadcrumbItem href="#projects">Projects</BreadcrumbItem>
        <BreadcrumbItem href="#q3">Q3 launch</BreadcrumbItem>
        <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
      </Breadcrumb>
    </div>
}`,...y.parameters?.docs?.source},description:{story:`Long trails wrap onto the next line instead of overflowing.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24,
      display: 'grid',
      gap: 16
    }}>
          {(['chevron', 'slash', 'dot'] as const).map(separator => <Breadcrumb key={separator} separator={separator} aria-label={\`Breadcrumb (\${separator}, \${scheme})\`}>
              <BreadcrumbItem href="#home" icon={house}>
                Home
              </BreadcrumbItem>
              <BreadcrumbItem href="#projects">Projects</BreadcrumbItem>
              <BreadcrumbItem current>Onboarding flow</BreadcrumbItem>
            </Breadcrumb>)}
        </div>)}
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...b.parameters?.docs?.description}}}})))()}S();export{h as Collapsed,m as Default,g as Dropdown,y as LongTrail,p as Playground,_ as Separators,b as Themes,v as WithIcons,x as __namedExportsOrder,l as default};