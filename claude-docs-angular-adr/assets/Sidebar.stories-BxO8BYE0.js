import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-hNUR_eGY.js";import{A as r,B as i,Ct as ee,D as te,L as ne,Lt as a,M as o,P as re,Pt as s,St as c,_t as l,at as ie,c as ae,gt as u,ht as d,jt as f,kt as p,lt as m,nn as h,nt as g,on as _,pt as oe,tt as se,u as ce,w as le,wt as ue,x as de,xt as fe,yt as pe}from"./react-1mLXTT6G.js";import{n as me,t as v}from"./Button-Dp7j3ZOj.js";import{n as he,t as y}from"./Avatar-Qmm5c1Bg.js";import{d as ge,h as _e,o as b,t as ve}from"./DropdownMenu-VyDULbzi.js";import{i as x,r as S,t as C}from"./Breadcrumb-mHy9PekA.js";import{r as ye,t as be}from"./Dialog-A0MstQp_.js";import{a as w,c as T,i as E,l as D,n as O,o as k,r as A,s as j,t as M,u as xe}from"./Sidebar-QJZaVBQM.js";var N,P,F,I,L,R,z,inset,B,mainItems,V,H,U,W,G,K,projectActions,q,J,Y,X,Z,Q,$;function init_Sidebar_stories(){return(init_Sidebar_stories=e((()=>{N=n(),ee(),he(),x(),me(),ye(),_e(),xe(),P=t(),F={title:`Components/Sidebar`,parameters:{layout:`padded`,docs:{description:{component:'Implements the Sort UI 2.0 **Sidebar** (Type=Default / Floating), **Sidebar Group**, **Sidebar Group Label**, **Sidebar Menu Item**, **Sidebar Menu Button** (Size=Default / sm / lg; State=hover / active / focus; Collapsed) and **Sidebar Menu Sub Item** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=265-3)). `SidebarLayout` holds a `Sidebar` and a `SidebarInset`; `SidebarTrigger` collapses the sidebar to a 48 px icon rail (labels stay for assistive technology and show as tooltips). `SidebarGroup` takes a `label` (`collapsible` makes it a button that opens and closes the group) and an `action`; `SidebarMenuItem` takes `icon`, `href`, `active` (`aria-current="page"`), `size`, `badge`, `action` and sub items as children (a button with `aria-expanded` that opens them, animated). Narrow screens start with the rail; the open sidebar lies over the dimmed content there.'}}}},I={height:480,maxWidth:720,border:`1px solid var(--ds-border)`,borderRadius:16,overflow:`hidden`,background:`var(--ds-background)`},L={display:`flex`,alignItems:`center`,gap:12,padding:`10px 12px`,borderBottom:`1px solid var(--ds-border)`},R=(0,P.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:8,padding:12},children:[140,140,200,140,140].map((e,t)=>(0,P.jsx)(`div`,{style:{height:e,borderRadius:12,background:`var(--ds-fill-1)`,gridColumn:t===2?`1 / -1`:void 0}},t))}),z=(0,P.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:32,height:32,borderRadius:8,background:`var(--ds-sidebar-primary)`,color:`var(--ds-sidebar-primary-foreground)`},children:(0,P.jsx)(h,{size:16})}),inset=(e,t=`Breadcrumb`)=>(0,P.jsxs)(k,{as:`div`,children:[(0,P.jsxs)(`div`,{style:L,children:[(0,P.jsx)(D,{}),(0,P.jsxs)(C,{"aria-label":t,children:[(0,P.jsx)(S,{href:`#`,children:e[0]}),(0,P.jsx)(S,{current:!0,children:e[1]})]})]}),R]}),B=(0,P.jsx)(E,{children:(0,P.jsx)(T,{label:`Shiryoku`,icon:(0,P.jsx)(y,{size:`xs`,shape:`square`,initials:`S`}),endIcon:(0,P.jsx)(d,{})})}),mainItems=(e=`Home`)=>(0,P.jsx)(E,{children:[[`Search`,(0,P.jsx)(a,{},`i`)],[`Home`,(0,P.jsx)(p,{},`i`)],[`Inbox`,(0,P.jsx)(l,{},`i`)],[`Calendar`,(0,P.jsx)(i,{},`i`)]].map(([t,n])=>(0,P.jsx)(T,{label:t,icon:n,href:`#${t.toLowerCase()}`,active:t===e,badge:t===`Inbox`?`16`:void 0},t))}),V=(0,P.jsxs)(E,{label:`Workspace`,labelSize:`sm`,children:[(0,P.jsx)(T,{label:`Projects`,icon:(0,P.jsx)(ae,{}),href:`#projects`}),(0,P.jsx)(T,{label:`Documents`,icon:(0,P.jsx)(ce,{}),href:`#documents`}),(0,P.jsx)(T,{label:`Reports`,icon:(0,P.jsx)(oe,{}),href:`#reports`}),(0,P.jsx)(T,{label:`Team`,icon:(0,P.jsx)(ie,{}),href:`#team`})]}),H=(0,P.jsx)(E,{label:`Favorites`,labelSize:`sm`,children:[`Website redesign`,`Mobile app`,`Q3 campaign`].map(e=>(0,P.jsx)(T,{label:e,icon:(0,P.jsx)(c,{}),href:`#${e}`},e))}),U=(0,P.jsx)(E,{children:(0,P.jsx)(T,{size:`lg`,label:`ACME Inc.`,description:`@acmeinc`,icon:z,endIcon:(0,P.jsx)(u,{})})}),W={args:{variant:`default`,collapsed:!1},render:e=>(0,P.jsxs)(j,{defaultCollapsed:e.collapsed,style:I,children:[(0,P.jsxs)(M,{variant:e.variant,"aria-label":`Workspace`,children:[(0,P.jsx)(w,{plain:!0,children:B}),(0,P.jsxs)(O,{children:[mainItems(),V,H]}),(0,P.jsx)(A,{children:U})]}),inset([`Workspace`,`Projects`])]},String(e.collapsed))},G={render:()=>(0,P.jsx)(`div`,{style:{display:`grid`,gap:24},children:[!1,!0].map(e=>(0,P.jsxs)(j,{defaultCollapsed:e,style:I,children:[(0,P.jsxs)(M,{"aria-label":e?`Workspace (collapsed)`:`Workspace`,children:[(0,P.jsx)(w,{plain:!0,children:B}),(0,P.jsxs)(O,{children:[mainItems(),V,H]}),(0,P.jsx)(A,{children:U})]}),inset([`Workspace`,`Projects`],e?`Breadcrumb (collapsed)`:`Breadcrumb`)]},String(e)))})},K={render:()=>(0,P.jsx)(`div`,{style:{display:`grid`,gap:24},children:[!1,!0].map(e=>(0,P.jsxs)(j,{defaultCollapsed:e,style:I,children:[(0,P.jsxs)(M,{variant:`floating`,"aria-label":e?`Workspace (collapsed)`:`Workspace`,children:[(0,P.jsx)(w,{plain:!0,children:U}),(0,P.jsxs)(O,{children:[mainItems(),V,H]})]}),inset([`Workspace`,`Projects`],e?`Breadcrumb (collapsed)`:`Breadcrumb`)]},String(e)))})},projectActions=e=>(0,P.jsxs)(ve,{align:`end`,trigger:(0,P.jsx)(v,{variant:`ghost`,size:`xs`,icon:(0,P.jsx)(f,{}),"aria-label":`Actions for ${e}`}),children:[(0,P.jsx)(b,{icon:(0,P.jsx)(g,{}),children:`Rename`}),(0,P.jsx)(b,{icon:(0,P.jsx)(fe,{}),children:`Share`}),(0,P.jsx)(ge,{}),(0,P.jsx)(b,{type:`destructive`,icon:(0,P.jsx)(te,{}),children:`Delete`})]}),q={render:()=>(0,P.jsxs)(j,{style:I,children:[(0,P.jsxs)(M,{"aria-label":`Projects`,children:[(0,P.jsx)(w,{plain:!0,children:B}),(0,P.jsxs)(O,{children:[(0,P.jsxs)(E,{children:[(0,P.jsx)(T,{label:`Search`,icon:(0,P.jsx)(a,{}),href:`#search`}),(0,P.jsx)(T,{label:`Home`,icon:(0,P.jsx)(p,{}),href:`#home`}),(0,P.jsx)(T,{label:`Inbox`,icon:(0,P.jsx)(l,{}),href:`#inbox`})]}),(0,P.jsx)(E,{label:`Projects`,labelSize:`sm`,action:(0,P.jsx)(v,{variant:`ghost`,size:`xs`,icon:(0,P.jsx)(s,{}),"aria-label":`New project`}),children:[`Website redesign`,`Mobile app`,`Q3 campaign`,`Onboarding flow`].map((e,t)=>(0,P.jsx)(T,{label:e,icon:(0,P.jsx)(c,{}),href:`#${t}`,active:t===0,action:projectActions(e)},e))})]}),(0,P.jsx)(A,{plain:!0,children:(0,P.jsxs)(E,{children:[(0,P.jsx)(T,{label:`New project`,icon:(0,P.jsx)(s,{})}),(0,P.jsx)(T,{label:`Settings`,icon:(0,P.jsx)(o,{}),href:`#settings`})]})})]}),inset([`Projects`,`Website redesign`])]})},J={render:()=>(0,P.jsxs)(j,{style:{...I,height:640},children:[(0,P.jsxs)(M,{"aria-label":`Library`,children:[(0,P.jsx)(w,{children:(0,P.jsx)(E,{children:(0,P.jsx)(T,{size:`lg`,label:`Shiryoku`,description:`Personal workspace`,icon:z,endIcon:(0,P.jsx)(u,{})})})}),(0,P.jsxs)(O,{children:[(0,P.jsxs)(E,{label:`Library`,children:[(0,P.jsx)(T,{label:`Getting started`,icon:(0,P.jsx)(c,{}),href:`#start`}),(0,P.jsxs)(T,{label:`Components`,icon:(0,P.jsx)(c,{}),defaultOpen:!0,children:[(0,P.jsxs)(T,{label:`Forms`,icon:(0,P.jsx)(c,{}),defaultOpen:!0,children:[(0,P.jsx)(T,{label:`Input`,href:`#input`,active:!0}),(0,P.jsx)(T,{label:`Select`,href:`#select`})]}),(0,P.jsx)(T,{label:`Overlays`,icon:(0,P.jsx)(c,{}),href:`#overlays`}),(0,P.jsx)(T,{label:`Navigation`,icon:(0,P.jsx)(c,{}),href:`#navigation`})]}),(0,P.jsx)(T,{label:`Tokens`,icon:(0,P.jsx)(c,{}),href:`#tokens`})]}),(0,P.jsxs)(E,{label:`Archive`,collapsible:!0,defaultOpen:!1,children:[(0,P.jsx)(T,{label:`2025`,icon:(0,P.jsx)(c,{}),href:`#2025`}),(0,P.jsx)(T,{label:`2024`,icon:(0,P.jsx)(c,{}),href:`#2024`})]})]}),(0,P.jsx)(A,{children:(0,P.jsx)(E,{children:(0,P.jsx)(T,{size:`lg`,label:`Shiryoku`,description:`shiryoku@acme.dev`,icon:(0,P.jsx)(y,{size:`sm`,initials:`S`}),endIcon:(0,P.jsx)(u,{})})})})]}),inset([`Library`,`Input`])]})},Y={render:()=>(0,P.jsx)(`div`,{style:{width:260,background:`var(--ds-sidebar)`,padding:8,borderRadius:12},children:(0,P.jsxs)(E,{label:`Group label`,action:(0,P.jsx)(v,{variant:`ghost`,size:`xs`,icon:(0,P.jsx)(s,{}),"aria-label":`Add`}),children:[(0,P.jsx)(T,{label:`Default`,icon:(0,P.jsx)(c,{}),href:`#a`,badge:`16`}),(0,P.jsx)(T,{label:`Active (current page)`,icon:(0,P.jsx)(c,{}),href:`#b`,active:!0,badge:`16`}),(0,P.jsx)(T,{label:`Small`,size:`sm`,icon:(0,P.jsx)(c,{}),href:`#c`}),(0,P.jsx)(T,{label:`Large`,size:`lg`,description:`Item description`,icon:z,endIcon:(0,P.jsx)(u,{})}),(0,P.jsx)(T,{label:`Disabled`,icon:(0,P.jsx)(c,{}),disabled:!0})]})})},X=[[`Notifications`,(0,P.jsx)(_,{},`i`)],[`Navigation`,(0,P.jsx)(se,{},`i`)],[`Appearance`,(0,P.jsx)(ne,{},`i`)],[`Messages & media`,(0,P.jsx)(de,{},`i`)],[`Language & region`,(0,P.jsx)(m,{},`i`)],[`Accessibility`,(0,P.jsx)(le,{},`i`)],[`Audio & video`,(0,P.jsx)(r,{},`i`)],[`Connected accounts`,(0,P.jsx)(pe,{},`i`)],[`Privacy & visibility`,(0,P.jsx)(ue,{},`i`)],[`Advanced`,(0,P.jsx)(re,{},`i`)]],Z={render:function Render(){let[e,t]=(0,N.useState)(`Notifications`);return(0,P.jsx)(be,{trigger:(0,P.jsx)(v,{variant:`outline`,children:`Settings`}),title:`Settings`,width:`720px`,children:(0,P.jsxs)(j,{defaultCollapsed:!1,style:{height:420,margin:`0 -16px -16px`,borderTop:`1px solid var(--ds-border)`},children:[(0,P.jsx)(M,{"aria-label":`Settings sections`,children:(0,P.jsx)(O,{children:(0,P.jsx)(E,{children:X.map(([n,r])=>(0,P.jsx)(T,{label:n,icon:r,active:e===n,onClick:()=>t(n)},n))})})}),(0,P.jsxs)(k,{as:`div`,children:[(0,P.jsx)(`div`,{style:{...L,borderBottom:0},children:(0,P.jsxs)(C,{children:[(0,P.jsx)(S,{href:`#`,children:`Settings`}),(0,P.jsx)(S,{current:!0,children:e})]})}),(0,P.jsxs)(`div`,{style:{display:`grid`,gap:8,padding:`0 12px 12px`},children:[(0,P.jsx)(`div`,{style:{height:140,borderRadius:12,background:`var(--ds-fill-1)`}}),(0,P.jsx)(`div`,{style:{height:140,borderRadius:12,background:`var(--ds-fill-1)`}})]})]})]})})}},Q={parameters:{layout:`fullscreen`},render:()=>(0,P.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,P.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24},children:(0,P.jsxs)(j,{defaultCollapsed:!1,style:{...I,height:420},children:[(0,P.jsxs)(M,{"aria-label":`Workspace (${e})`,children:[(0,P.jsx)(w,{plain:!0,children:B}),(0,P.jsxs)(O,{children:[mainItems(),V]}),(0,P.jsx)(A,{children:U})]}),(0,P.jsx)(k,{as:`div`,children:R})]})},e))})},$=[`Playground`,`Default`,`Floating`,`MenuActions`,`SubMenus`,`Items`,`InADialog`,`Themes`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Figma demo "Sidebar": expanded, and collapsed to the icon rail (press the panel button to switch).`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Figma demo "Floating": Type=Floating, a rounded card 8 px in.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Figma demo "Menu actions": each project has a menu of actions; the footer holds plain items.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Figma Sidebar component: groups with nested sub menus (two levels) and a collapsible group.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Figma Sidebar Menu Button: Size=Default / sm / lg, State=active, with a badge, and disabled.`,...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Figma demo "In a dialog": a settings window with its sections in a sidebar.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...Q.parameters?.docs?.description}}}})))()}init_Sidebar_stories();export{G as Default,K as Floating,Z as InADialog,Y as Items,q as MenuActions,W as Playground,J as SubMenus,Q as Themes,$ as __namedExportsOrder,F as default};