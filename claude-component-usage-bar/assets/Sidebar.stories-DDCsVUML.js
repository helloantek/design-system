import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-DkPbH1Ss.js";import{n as r,t as i}from"./Button-CRwWwJiN.js";import{$ as a,B as ee,J as o,K as te,L as s,O as c,Q as l,R as ne,S as re,T as ie,U as ae,Y as u,Z as oe,_t as se,a as ce,bt as le,et as ue,g as de,h as fe,it as d,lt as f,o as pe,ot as p,p as m,q as me,st as h,tt as he,x as ge,y as _e}from"./react-B_Q3VT6L.js";import{n as ve,t as g}from"./Avatar-DzVKWXAb.js";import{d as _,h as ye,o as v,t as be}from"./DropdownMenu-DIOza0Gs.js";import{i as xe,r as y,t as b}from"./Breadcrumb-Beccdbkr.js";import{r as Se,t as Ce}from"./Dialog-BcY-IrfP.js";import{a as x,c as S,i as C,l as we,n as w,o as T,r as E,s as D,t as O,u as Te}from"./Sidebar-D5EUQV-v.js";var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{k=n(),ue(),ve(),xe(),r(),Se(),ye(),Te(),A=t(),j={title:`Components/Sidebar`,parameters:{layout:`padded`,docs:{description:{component:'Implements the Sort UI 2.0 **Sidebar** (Type=Default / Floating), **Sidebar Group**, **Sidebar Group Label**, **Sidebar Menu Item**, **Sidebar Menu Button** (Size=Default / sm / lg; State=hover / active / focus; Collapsed) and **Sidebar Menu Sub Item** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=265-3)). `SidebarLayout` holds a `Sidebar` and a `SidebarInset`; `SidebarTrigger` collapses the sidebar to a 48 px icon rail (labels stay for assistive technology and show as tooltips). `SidebarGroup` takes a `label` (`collapsible` makes it a button that opens and closes the group) and an `action`; `SidebarMenuItem` takes `icon`, `href`, `active` (`aria-current="page"`), `size`, `badge`, `action` and sub items as children (a button with `aria-expanded` that opens them, animated). Narrow screens start with the rail; the open sidebar lies over the dimmed content there.'}}}},M={height:480,maxWidth:720,border:`1px solid var(--ds-border)`,borderRadius:16,overflow:`hidden`,background:`var(--ds-background)`},N={display:`flex`,alignItems:`center`,gap:12,padding:`10px 12px`,borderBottom:`1px solid var(--ds-border)`},P=(0,A.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:8,padding:12},children:[140,140,200,140,140].map((e,t)=>(0,A.jsx)(`div`,{style:{height:e,borderRadius:12,background:`var(--ds-fill-1)`,gridColumn:t===2?`1 / -1`:void 0}},t))}),F=(0,A.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:32,height:32,borderRadius:8,background:`var(--ds-sidebar-primary)`,color:`var(--ds-sidebar-primary-foreground)`},children:(0,A.jsx)(se,{size:16})}),I=(e,t=`Breadcrumb`)=>(0,A.jsxs)(T,{as:`div`,children:[(0,A.jsxs)(`div`,{style:N,children:[(0,A.jsx)(we,{}),(0,A.jsxs)(b,{"aria-label":t,children:[(0,A.jsx)(y,{href:`#`,children:e[0]}),(0,A.jsx)(y,{current:!0,children:e[1]})]})]}),P]}),L=(0,A.jsx)(C,{children:(0,A.jsx)(S,{label:`Shiryoku`,icon:(0,A.jsx)(g,{size:`xs`,shape:`square`,initials:`S`}),endIcon:(0,A.jsx)(me,{})})}),R=(e=`Home`)=>(0,A.jsx)(C,{children:[[`Search`,(0,A.jsx)(f,{},`i`)],[`Home`,(0,A.jsx)(d,{},`i`)],[`Inbox`,(0,A.jsx)(u,{},`i`)],[`Calendar`,(0,A.jsx)(c,{},`i`)]].map(([t,n])=>(0,A.jsx)(S,{label:t,icon:n,href:`#${t.toLowerCase()}`,active:t===e,badge:t===`Inbox`?`16`:void 0},t))}),z=(0,A.jsxs)(C,{label:`Workspace`,labelSize:`sm`,children:[(0,A.jsx)(S,{label:`Projects`,icon:(0,A.jsx)(ce,{}),href:`#projects`}),(0,A.jsx)(S,{label:`Documents`,icon:(0,A.jsx)(pe,{}),href:`#documents`}),(0,A.jsx)(S,{label:`Reports`,icon:(0,A.jsx)(te,{}),href:`#reports`}),(0,A.jsx)(S,{label:`Team`,icon:(0,A.jsx)(ee,{}),href:`#team`})]}),B=(0,A.jsx)(C,{label:`Favorites`,labelSize:`sm`,children:[`Website redesign`,`Mobile app`,`Q3 campaign`].map(e=>(0,A.jsx)(S,{label:e,icon:(0,A.jsx)(a,{}),href:`#${e}`},e))}),V=(0,A.jsx)(C,{children:(0,A.jsx)(S,{size:`lg`,label:`ACME Inc.`,description:`@acmeinc`,icon:F,endIcon:(0,A.jsx)(o,{})})}),H={args:{variant:`default`,collapsed:!1},render:e=>(0,A.jsxs)(D,{defaultCollapsed:e.collapsed,style:M,children:[(0,A.jsxs)(O,{variant:e.variant,"aria-label":`Workspace`,children:[(0,A.jsx)(x,{plain:!0,children:L}),(0,A.jsxs)(w,{children:[R(),z,B]}),(0,A.jsx)(E,{children:V})]}),I([`Workspace`,`Projects`])]},String(e.collapsed))},U={render:()=>(0,A.jsx)(`div`,{style:{display:`grid`,gap:24},children:[!1,!0].map(e=>(0,A.jsxs)(D,{defaultCollapsed:e,style:M,children:[(0,A.jsxs)(O,{"aria-label":e?`Workspace (collapsed)`:`Workspace`,children:[(0,A.jsx)(x,{plain:!0,children:L}),(0,A.jsxs)(w,{children:[R(),z,B]}),(0,A.jsx)(E,{children:V})]}),I([`Workspace`,`Projects`],e?`Breadcrumb (collapsed)`:`Breadcrumb`)]},String(e)))})},W={render:()=>(0,A.jsx)(`div`,{style:{display:`grid`,gap:24},children:[!1,!0].map(e=>(0,A.jsxs)(D,{defaultCollapsed:e,style:M,children:[(0,A.jsxs)(O,{variant:`floating`,"aria-label":e?`Workspace (collapsed)`:`Workspace`,children:[(0,A.jsx)(x,{plain:!0,children:V}),(0,A.jsxs)(w,{children:[R(),z,B]})]}),I([`Workspace`,`Projects`],e?`Breadcrumb (collapsed)`:`Breadcrumb`)]},String(e)))})},G=e=>(0,A.jsxs)(be,{align:`end`,trigger:(0,A.jsx)(i,{variant:`ghost`,size:`xs`,icon:(0,A.jsx)(p,{}),"aria-label":`Actions for ${e}`}),children:[(0,A.jsx)(v,{icon:(0,A.jsx)(ne,{}),children:`Rename`}),(0,A.jsx)(v,{icon:(0,A.jsx)(l,{}),children:`Share`}),(0,A.jsx)(_,{}),(0,A.jsx)(v,{type:`destructive`,icon:(0,A.jsx)(de,{}),children:`Delete`})]}),K={render:()=>(0,A.jsxs)(D,{style:M,children:[(0,A.jsxs)(O,{"aria-label":`Projects`,children:[(0,A.jsx)(x,{plain:!0,children:L}),(0,A.jsxs)(w,{children:[(0,A.jsxs)(C,{children:[(0,A.jsx)(S,{label:`Search`,icon:(0,A.jsx)(f,{}),href:`#search`}),(0,A.jsx)(S,{label:`Home`,icon:(0,A.jsx)(d,{}),href:`#home`}),(0,A.jsx)(S,{label:`Inbox`,icon:(0,A.jsx)(u,{}),href:`#inbox`})]}),(0,A.jsx)(C,{label:`Projects`,labelSize:`sm`,action:(0,A.jsx)(i,{variant:`ghost`,size:`xs`,icon:(0,A.jsx)(h,{}),"aria-label":`New project`}),children:[`Website redesign`,`Mobile app`,`Q3 campaign`,`Onboarding flow`].map((e,t)=>(0,A.jsx)(S,{label:e,icon:(0,A.jsx)(a,{}),href:`#${t}`,active:t===0,action:G(e)},e))})]}),(0,A.jsx)(E,{plain:!0,children:(0,A.jsxs)(C,{children:[(0,A.jsx)(S,{label:`New project`,icon:(0,A.jsx)(h,{})}),(0,A.jsx)(S,{label:`Settings`,icon:(0,A.jsx)(ge,{}),href:`#settings`})]})})]}),I([`Projects`,`Website redesign`])]})},q={render:()=>(0,A.jsxs)(D,{style:{...M,height:640},children:[(0,A.jsxs)(O,{"aria-label":`Library`,children:[(0,A.jsx)(x,{children:(0,A.jsx)(C,{children:(0,A.jsx)(S,{size:`lg`,label:`Shiryoku`,description:`Personal workspace`,icon:F,endIcon:(0,A.jsx)(o,{})})})}),(0,A.jsxs)(w,{children:[(0,A.jsxs)(C,{label:`Library`,children:[(0,A.jsx)(S,{label:`Getting started`,icon:(0,A.jsx)(a,{}),href:`#start`}),(0,A.jsxs)(S,{label:`Components`,icon:(0,A.jsx)(a,{}),defaultOpen:!0,children:[(0,A.jsxs)(S,{label:`Forms`,icon:(0,A.jsx)(a,{}),defaultOpen:!0,children:[(0,A.jsx)(S,{label:`Input`,href:`#input`,active:!0}),(0,A.jsx)(S,{label:`Select`,href:`#select`})]}),(0,A.jsx)(S,{label:`Overlays`,icon:(0,A.jsx)(a,{}),href:`#overlays`}),(0,A.jsx)(S,{label:`Navigation`,icon:(0,A.jsx)(a,{}),href:`#navigation`})]}),(0,A.jsx)(S,{label:`Tokens`,icon:(0,A.jsx)(a,{}),href:`#tokens`})]}),(0,A.jsxs)(C,{label:`Archive`,collapsible:!0,defaultOpen:!1,children:[(0,A.jsx)(S,{label:`2025`,icon:(0,A.jsx)(a,{}),href:`#2025`}),(0,A.jsx)(S,{label:`2024`,icon:(0,A.jsx)(a,{}),href:`#2024`})]})]}),(0,A.jsx)(E,{children:(0,A.jsx)(C,{children:(0,A.jsx)(S,{size:`lg`,label:`Shiryoku`,description:`shiryoku@acme.dev`,icon:(0,A.jsx)(g,{size:`sm`,initials:`S`}),endIcon:(0,A.jsx)(o,{})})})})]}),I([`Library`,`Input`])]})},J={render:()=>(0,A.jsx)(`div`,{style:{width:260,background:`var(--ds-sidebar)`,padding:8,borderRadius:12},children:(0,A.jsxs)(C,{label:`Group label`,action:(0,A.jsx)(i,{variant:`ghost`,size:`xs`,icon:(0,A.jsx)(h,{}),"aria-label":`Add`}),children:[(0,A.jsx)(S,{label:`Default`,icon:(0,A.jsx)(a,{}),href:`#a`,badge:`16`}),(0,A.jsx)(S,{label:`Active (current page)`,icon:(0,A.jsx)(a,{}),href:`#b`,active:!0,badge:`16`}),(0,A.jsx)(S,{label:`Small`,size:`sm`,icon:(0,A.jsx)(a,{}),href:`#c`}),(0,A.jsx)(S,{label:`Large`,size:`lg`,description:`Item description`,icon:F,endIcon:(0,A.jsx)(o,{})}),(0,A.jsx)(S,{label:`Disabled`,icon:(0,A.jsx)(a,{}),disabled:!0})]})})},Y=[[`Notifications`,(0,A.jsx)(le,{},`i`)],[`Navigation`,(0,A.jsx)(s,{},`i`)],[`Appearance`,(0,A.jsx)(ie,{},`i`)],[`Messages & media`,(0,A.jsx)(m,{},`i`)],[`Language & region`,(0,A.jsx)(ae,{},`i`)],[`Accessibility`,(0,A.jsx)(fe,{},`i`)],[`Audio & video`,(0,A.jsx)(_e,{},`i`)],[`Connected accounts`,(0,A.jsx)(oe,{},`i`)],[`Privacy & visibility`,(0,A.jsx)(he,{},`i`)],[`Advanced`,(0,A.jsx)(re,{},`i`)]],X={render:function(){let[e,t]=(0,k.useState)(`Notifications`);return(0,A.jsx)(Ce,{trigger:(0,A.jsx)(i,{variant:`outline`,children:`Settings`}),title:`Settings`,width:`720px`,children:(0,A.jsxs)(D,{defaultCollapsed:!1,style:{height:420,margin:`0 -16px -16px`,borderTop:`1px solid var(--ds-border)`},children:[(0,A.jsx)(O,{"aria-label":`Settings sections`,children:(0,A.jsx)(w,{children:(0,A.jsx)(C,{children:Y.map(([n,r])=>(0,A.jsx)(S,{label:n,icon:r,active:e===n,onClick:()=>t(n)},n))})})}),(0,A.jsxs)(T,{as:`div`,children:[(0,A.jsx)(`div`,{style:{...N,borderBottom:0},children:(0,A.jsxs)(b,{children:[(0,A.jsx)(y,{href:`#`,children:`Settings`}),(0,A.jsx)(y,{current:!0,children:e})]})}),(0,A.jsxs)(`div`,{style:{display:`grid`,gap:8,padding:`0 12px 12px`},children:[(0,A.jsx)(`div`,{style:{height:140,borderRadius:12,background:`var(--ds-fill-1)`}}),(0,A.jsx)(`div`,{style:{height:140,borderRadius:12,background:`var(--ds-fill-1)`}})]})]})]})})}},Z={parameters:{layout:`fullscreen`},render:()=>(0,A.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,A.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24},children:(0,A.jsxs)(D,{defaultCollapsed:!1,style:{...M,height:420},children:[(0,A.jsxs)(O,{"aria-label":`Workspace (${e})`,children:[(0,A.jsx)(x,{plain:!0,children:L}),(0,A.jsxs)(w,{children:[R(),z]}),(0,A.jsx)(E,{children:V})]}),(0,A.jsx)(T,{as:`div`,children:P})]})},e))})},Q=[`Playground`,`Default`,`Floating`,`MenuActions`,`SubMenus`,`Items`,`InADialog`,`Themes`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    collapsed: false
  },
  render: args => <SidebarLayout key={String(args.collapsed)} defaultCollapsed={args.collapsed} style={frame}>
      <Sidebar variant={args.variant} aria-label="Workspace">
        <SidebarHeader plain>{userItem}</SidebarHeader>
        <SidebarContent>
          {mainItems()}
          {workspace}
          {favorites}
        </SidebarContent>
        <SidebarFooter>{company}</SidebarFooter>
      </Sidebar>
      {inset(['Workspace', 'Projects'])}
    </SidebarLayout>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      {[false, true].map(collapsed => <SidebarLayout key={String(collapsed)} defaultCollapsed={collapsed} style={frame}>
          <Sidebar aria-label={collapsed ? 'Workspace (collapsed)' : 'Workspace'}>
            <SidebarHeader plain>{userItem}</SidebarHeader>
            <SidebarContent>
              {mainItems()}
              {workspace}
              {favorites}
            </SidebarContent>
            <SidebarFooter>{company}</SidebarFooter>
          </Sidebar>
          {inset(['Workspace', 'Projects'], collapsed ? 'Breadcrumb (collapsed)' : 'Breadcrumb')}
        </SidebarLayout>)}
    </div>
}`,...U.parameters?.docs?.source},description:{story:`Figma demo "Sidebar": expanded, and collapsed to the icon rail (press the panel button to switch).`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      {[false, true].map(collapsed => <SidebarLayout key={String(collapsed)} defaultCollapsed={collapsed} style={frame}>
          <Sidebar variant="floating" aria-label={collapsed ? 'Workspace (collapsed)' : 'Workspace'}>
            <SidebarHeader plain>{company}</SidebarHeader>
            <SidebarContent>
              {mainItems()}
              {workspace}
              {favorites}
            </SidebarContent>
          </Sidebar>
          {inset(['Workspace', 'Projects'], collapsed ? 'Breadcrumb (collapsed)' : 'Breadcrumb')}
        </SidebarLayout>)}
    </div>
}`,...W.parameters?.docs?.source},description:{story:`Figma demo "Floating": Type=Floating, a rounded card 8 px in.`,...W.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarLayout style={frame}>
      <Sidebar aria-label="Projects">
        <SidebarHeader plain>{userItem}</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenuItem label="Search" icon={<RiSearchLine />} href="#search" />
            <SidebarMenuItem label="Home" icon={<RiHome5Line />} href="#home" />
            <SidebarMenuItem label="Inbox" icon={<RiInboxLine />} href="#inbox" />
          </SidebarGroup>
          <SidebarGroup label="Projects" labelSize="sm" action={<Button variant="ghost" size="xs" icon={<RiAddLine />} aria-label="New project" />}>
            {['Website redesign', 'Mobile app', 'Q3 campaign', 'Onboarding flow'].map((p, i) => <SidebarMenuItem key={p} label={p} icon={<RiFolderLine />} href={\`#\${i}\`} active={i === 0} action={projectActions(p)} />)}
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter plain>
          <SidebarGroup>
            <SidebarMenuItem label="New project" icon={<RiAddLine />} />
            <SidebarMenuItem label="Settings" icon={<RiEqualizerLine />} href="#settings" />
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
      {inset(['Projects', 'Website redesign'])}
    </SidebarLayout>
}`,...K.parameters?.docs?.source},description:{story:`Figma demo "Menu actions": each project has a menu of actions; the footer holds plain items.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarLayout style={{
    ...frame,
    height: 640
  }}>
      <Sidebar aria-label="Library">
        <SidebarHeader>
          <SidebarGroup>
            <SidebarMenuItem size="lg" label="Shiryoku" description="Personal workspace" icon={logo} endIcon={<RiExpandUpDownLine />} />
          </SidebarGroup>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup label="Library">
            <SidebarMenuItem label="Getting started" icon={<RiFolderLine />} href="#start" />
            <SidebarMenuItem label="Components" icon={<RiFolderLine />} defaultOpen>
              <SidebarMenuItem label="Forms" icon={<RiFolderLine />} defaultOpen>
                <SidebarMenuItem label="Input" href="#input" active />
                <SidebarMenuItem label="Select" href="#select" />
              </SidebarMenuItem>
              <SidebarMenuItem label="Overlays" icon={<RiFolderLine />} href="#overlays" />
              <SidebarMenuItem label="Navigation" icon={<RiFolderLine />} href="#navigation" />
            </SidebarMenuItem>
            <SidebarMenuItem label="Tokens" icon={<RiFolderLine />} href="#tokens" />
          </SidebarGroup>
          <SidebarGroup label="Archive" collapsible defaultOpen={false}>
            <SidebarMenuItem label="2025" icon={<RiFolderLine />} href="#2025" />
            <SidebarMenuItem label="2024" icon={<RiFolderLine />} href="#2024" />
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarGroup>
            <SidebarMenuItem size="lg" label="Shiryoku" description="shiryoku@acme.dev" icon={<Avatar size="sm" initials="S" />} endIcon={<RiExpandUpDownLine />} />
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
      {inset(['Library', 'Input'])}
    </SidebarLayout>
}`,...q.parameters?.docs?.source},description:{story:`Figma Sidebar component: groups with nested sub menus (two levels) and a collapsible group.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 260,
    background: 'var(--ds-sidebar)',
    padding: 8,
    borderRadius: 12
  }}>
      <SidebarGroup label="Group label" action={<Button variant="ghost" size="xs" icon={<RiAddLine />} aria-label="Add" />}>
        <SidebarMenuItem label="Default" icon={<RiFolderLine />} href="#a" badge="16" />
        <SidebarMenuItem label="Active (current page)" icon={<RiFolderLine />} href="#b" active badge="16" />
        <SidebarMenuItem label="Small" size="sm" icon={<RiFolderLine />} href="#c" />
        <SidebarMenuItem label="Large" size="lg" description="Item description" icon={logo} endIcon={<RiExpandUpDownLine />} />
        <SidebarMenuItem label="Disabled" icon={<RiFolderLine />} disabled />
      </SidebarGroup>
    </div>
}`,...J.parameters?.docs?.source},description:{story:`Figma Sidebar Menu Button: Size=Default / sm / lg, State=active, with a badge, and disabled.`,...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [section, setSection] = useState('Notifications');
    return <Dialog trigger={<Button variant="outline">Settings</Button>} title="Settings" width="720px">
        <SidebarLayout defaultCollapsed={false} style={{
        height: 420,
        margin: '0 -16px -16px',
        borderTop: '1px solid var(--ds-border)'
      }}>
          <Sidebar aria-label="Settings sections">
            <SidebarContent>
              <SidebarGroup>
                {settings.map(([name, icon]) => <SidebarMenuItem key={name} label={name} icon={icon} active={section === name} onClick={() => setSection(name)} />)}
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset as="div">
            <div style={{
            ...header,
            borderBottom: 0
          }}>
              <Breadcrumb>
                <BreadcrumbItem href="#">Settings</BreadcrumbItem>
                <BreadcrumbItem current>{section}</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div style={{
            display: 'grid',
            gap: 8,
            padding: '0 12px 12px'
          }}>
              <div style={{
              height: 140,
              borderRadius: 12,
              background: 'var(--ds-fill-1)'
            }} />
              <div style={{
              height: 140,
              borderRadius: 12,
              background: 'var(--ds-fill-1)'
            }} />
            </div>
          </SidebarInset>
        </SidebarLayout>
      </Dialog>;
  }
}`,...X.parameters?.docs?.source},description:{story:`Figma demo "In a dialog": a settings window with its sections in a sidebar.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24
    }}>
          <SidebarLayout defaultCollapsed={false} style={{
        ...frame,
        height: 420
      }}>
            <Sidebar aria-label={\`Workspace (\${scheme})\`}>
              <SidebarHeader plain>{userItem}</SidebarHeader>
              <SidebarContent>
                {mainItems()}
                {workspace}
              </SidebarContent>
              <SidebarFooter>{company}</SidebarFooter>
            </Sidebar>
            <SidebarInset as="div">{tiles}</SidebarInset>
          </SidebarLayout>
        </div>)}
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...Z.parameters?.docs?.description}}}})))()}$();export{U as Default,W as Floating,X as InADialog,J as Items,K as MenuActions,H as Playground,q as SubMenus,Z as Themes,Q as __namedExportsOrder,j as default};