import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-DkPbH1Ss.js";import{n as r,t as ee}from"./Button-CRwWwJiN.js";import{$ as i,B as a,J as o,K as s,S as c,Y as l,_t as te,et as u,it as ne,lt as d,o as f,st as p}from"./react-B_Q3VT6L.js";import{n as m,t as h}from"./Avatar-DzVKWXAb.js";import{n as g,t as _}from"./Badge-BbYyc4W6.js";import{i as v,r as y,t as re}from"./Breadcrumb-Beccdbkr.js";import{r as ie,t as ae}from"./Kbd-CydINBgf.js";import{a as oe,i as b,l as se,n as ce,o as x,s as le}from"./Command-CKQM1klJ.js";import{n as ue,t as S}from"./Pagination-gg4-rbTa.js";import{i as C,n as w,r as T}from"./Sonner-C9RW1A4i.js";import{a as E,c as D,n as O,o as k,r as A,s as j,t as M}from"./Table-BNue6JP7.js";import{a as N,c as P,i as F,l as I,n as L,o as de,r as R,s as z,t as B,u as V}from"./Sidebar-D5EUQV-v.js";import{i as H,n as fe,o as pe,r as U,t as me}from"./UsageBar-rSUPZbeX.js";var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{W=n(),u(),m(),g(),v(),r(),se(),ie(),ue(),V(),T(),D(),pe(),G=t(),K={title:`Playground/Workspace`,parameters:{layout:`padded`,docs:{description:{component:`A workspace app shell made of Sidebar (collapsible to the icon rail with the panel button, a projects group with sub pages, the workspace switcher in the footer), Breadcrumb, Command (a palette of pages, from the search item or ⌘K), Table (the members, in the card layout) and Pagination, Usage Bar (storage by project on Reports, with tooltips), with Avatar, Badge, Button, Kbd and toasts, for trying the navigation components together before they are merged. Make the window narrow to see the sidebar start collapsed and open over the page. Use the toolbar to switch brand and colour scheme.`}}}},q=[{name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`},{name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`},{name:`Lena Fischer`,email:`lena@orbit.dev`,role:`Member`},{name:`Omar Haddad`,email:`omar@orbit.dev`,role:`Member`}],J=[`Home`,`Inbox`,`Reports`,`Members`,`Settings`],Y=[{name:`Orbit app`,gb:38,color:`var(--ds-chart-2)`},{name:`Marketing site`,gb:17,color:`var(--ds-chart-1)`},{name:`Archive`,gb:21,color:void 0}],X={display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:32,height:32,borderRadius:8,background:`var(--ds-sidebar-primary)`,color:`var(--ds-sidebar-primary-foreground)`},Z={render:function(){let[e,t]=(0,W.useState)(`Members`),[n,r]=(0,W.useState)(!1),[u,m]=(0,W.useState)(1),g=q.slice((u-1)*4,u*4),v=e=>{t(e),r(!1)};return(0,G.jsxs)(`div`,{onKeyDown:e=>{e.key===`k`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),r(!0))},children:[(0,G.jsxs)(z,{style:{height:560,border:`1px solid var(--ds-border)`,borderRadius:16,overflow:`hidden`,background:`var(--ds-background)`},children:[(0,G.jsxs)(B,{"aria-label":`Orbit`,children:[(0,G.jsx)(N,{plain:!0,children:(0,G.jsx)(F,{children:(0,G.jsx)(P,{label:`Search`,icon:(0,G.jsx)(d,{}),badge:(0,G.jsx)(ae,{size:`sm`,children:`⌘K`}),onClick:()=>r(!0)})})}),(0,G.jsxs)(L,{children:[(0,G.jsxs)(F,{children:[(0,G.jsx)(P,{label:`Home`,icon:(0,G.jsx)(ne,{}),active:e===`Home`,onClick:()=>v(`Home`)}),(0,G.jsx)(P,{label:`Inbox`,icon:(0,G.jsx)(l,{}),badge:`3`,active:e===`Inbox`,onClick:()=>v(`Inbox`)}),(0,G.jsx)(P,{label:`Reports`,icon:(0,G.jsx)(s,{}),active:e===`Reports`,onClick:()=>v(`Reports`)})]}),(0,G.jsxs)(F,{label:`Projects`,labelSize:`sm`,action:(0,G.jsx)(ee,{variant:`ghost`,size:`xs`,icon:(0,G.jsx)(p,{}),"aria-label":`New project`,onClick:()=>C(`New project`,{description:`A real product would open the project form.`})}),children:[(0,G.jsxs)(P,{label:`Orbit app`,icon:(0,G.jsx)(i,{}),defaultOpen:!0,children:[(0,G.jsx)(P,{label:`Roadmap`,icon:(0,G.jsx)(f,{}),onClick:()=>C(`Roadmap`)}),(0,G.jsx)(P,{label:`Release notes`,icon:(0,G.jsx)(f,{}),onClick:()=>C(`Release notes`)})]}),(0,G.jsx)(P,{label:`Marketing site`,icon:(0,G.jsx)(i,{}),onClick:()=>C(`Marketing site`)})]}),(0,G.jsxs)(F,{label:`Team`,labelSize:`sm`,children:[(0,G.jsx)(P,{label:`Members`,icon:(0,G.jsx)(a,{}),active:e===`Members`,onClick:()=>v(`Members`)}),(0,G.jsx)(P,{label:`Settings`,icon:(0,G.jsx)(c,{}),active:e===`Settings`,onClick:()=>v(`Settings`)})]})]}),(0,G.jsx)(R,{children:(0,G.jsx)(F,{children:(0,G.jsx)(P,{size:`lg`,label:`Orbit`,description:`Team plan · 7 members`,icon:(0,G.jsx)(`span`,{style:X,children:(0,G.jsx)(te,{size:16})}),endIcon:(0,G.jsx)(o,{}),onClick:()=>C(`Switch workspace`,{description:`A real product would list your workspaces.`})})})})]}),(0,G.jsxs)(de,{as:`div`,children:[(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:`10px 12px`,borderBottom:`1px solid var(--ds-border)`},children:[(0,G.jsx)(I,{}),(0,G.jsxs)(re,{"aria-label":`Location`,children:[(0,G.jsx)(y,{href:`#orbit`,children:`Orbit`}),(0,G.jsx)(y,{current:!0,children:e})]})]}),(0,G.jsx)(`div`,{style:{padding:16,display:`grid`,gap:16,fontFamily:`var(--ds-font-sans)`},children:e===`Members`?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(M,{variant:`card`,"aria-label":`Members`,children:[(0,G.jsx)(k,{children:(0,G.jsxs)(j,{children:[(0,G.jsx)(E,{children:`Name`}),(0,G.jsx)(E,{children:`Role`})]})}),(0,G.jsx)(O,{children:g.map(e=>(0,G.jsxs)(j,{children:[(0,G.jsx)(A,{children:(0,G.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,G.jsx)(h,{size:`xs`,initials:e.name[0]}),(0,G.jsxs)(`span`,{style:{display:`grid`},children:[(0,G.jsx)(`span`,{children:e.name}),(0,G.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontSize:12,lineHeight:`16px`},children:e.email})]})]})}),(0,G.jsx)(A,{children:(0,G.jsx)(_,{border:e.role!==`Member`,children:e.role})})]},e.email))})]}),(0,G.jsx)(S,{page:u,pageCount:Math.ceil(q.length/4),onPageChange:m,"aria-label":`Members pages`})]}):e===`Reports`?(0,G.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:480},children:[(0,G.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12,fontSize:14,lineHeight:`20px`},children:[(0,G.jsx)(`span`,{id:`storage-title`,style:{fontWeight:500,color:`var(--ds-foreground)`},children:`Storage`}),(0,G.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`},children:`76 of 100 GB used · 4 GB syncing`})]}),(0,G.jsxs)(me,{"aria-labelledby":`storage-title`,axis:[`0 GB`,`25 GB`,`50 GB`,`75 GB`,`100 GB`],children:[Y.map(e=>(0,G.jsx)(H,{value:e.gb,color:e.color,label:`${e.name}, ${e.gb} GB`,tooltip:`${e.name} · ${e.gb} GB`},e.name)),(0,G.jsx)(H,{value:4,variant:`striped`,label:`Syncing, 4 GB`,tooltip:`Syncing · 4 GB`}),(0,G.jsx)(H,{value:20,variant:`primary`,label:`Free, 20 GB`})]}),(0,G.jsxs)(fe,{"aria-label":`Storage by project`,children:[Y.map(e=>(0,G.jsx)(U,{color:e.color,children:e.name},e.name)),(0,G.jsx)(U,{variant:`striped`,children:`Syncing`}),(0,G.jsx)(U,{variant:`primary`,children:`Free`})]})]}):(0,G.jsxs)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`,fontSize:14},children:[e,` is a placeholder page in this playground; open Members or Reports to see more.`]})})]})]}),(0,G.jsxs)(ce,{open:n,onOpenChange:r,label:`Go to`,children:[(0,G.jsx)(oe,{placeholder:`Go to a page or a member…`}),(0,G.jsxs)(le,{children:[(0,G.jsx)(b,{heading:`Pages`,children:J.map(e=>(0,G.jsx)(x,{onSelect:()=>v(e),children:e},e))}),(0,G.jsx)(b,{heading:`Members`,children:q.map(e=>(0,G.jsx)(x,{icon:(0,G.jsx)(h,{size:`xs`,initials:e.name[0]}),shortcut:e.role,keywords:[e.email],onSelect:()=>v(`Members`),children:e.name},e.email))})]})]}),(0,G.jsx)(w,{})]})}},Q=[`App`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [page, setPage] = useState('Members');
    const [palette, setPalette] = useState(false);
    const [tablePage, setTablePage] = useState(1);
    const perPage = 4;
    const shown = people.slice((tablePage - 1) * perPage, tablePage * perPage);
    const go = (name: string) => {
      setPage(name);
      setPalette(false);
    };
    return <div onKeyDown={event => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setPalette(true);
      }
    }}>
        <SidebarLayout style={{
        height: 560,
        border: '1px solid var(--ds-border)',
        borderRadius: 16,
        overflow: 'hidden',
        background: 'var(--ds-background)'
      }}>
          <Sidebar aria-label="Orbit">
            <SidebarHeader plain>
              <SidebarGroup>
                <SidebarMenuItem label="Search" icon={<RiSearchLine />} badge={<Kbd size="sm">⌘K</Kbd>} onClick={() => setPalette(true)} />
              </SidebarGroup>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarMenuItem label="Home" icon={<RiHome5Line />} active={page === 'Home'} onClick={() => go('Home')} />
                <SidebarMenuItem label="Inbox" icon={<RiInboxLine />} badge="3" active={page === 'Inbox'} onClick={() => go('Inbox')} />
                <SidebarMenuItem label="Reports" icon={<RiBarChartLine />} active={page === 'Reports'} onClick={() => go('Reports')} />
              </SidebarGroup>
              <SidebarGroup label="Projects" labelSize="sm" action={<Button variant="ghost" size="xs" icon={<RiAddLine />} aria-label="New project" onClick={() => toast('New project', {
              description: 'A real product would open the project form.'
            })} />}>
                <SidebarMenuItem label="Orbit app" icon={<RiFolderLine />} defaultOpen>
                  <SidebarMenuItem label="Roadmap" icon={<RiFileTextLine />} onClick={() => toast('Roadmap')} />
                  <SidebarMenuItem label="Release notes" icon={<RiFileTextLine />} onClick={() => toast('Release notes')} />
                </SidebarMenuItem>
                <SidebarMenuItem label="Marketing site" icon={<RiFolderLine />} onClick={() => toast('Marketing site')} />
              </SidebarGroup>
              <SidebarGroup label="Team" labelSize="sm">
                <SidebarMenuItem label="Members" icon={<RiTeamLine />} active={page === 'Members'} onClick={() => go('Members')} />
                <SidebarMenuItem label="Settings" icon={<RiSettings3Line />} active={page === 'Settings'} onClick={() => go('Settings')} />
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarGroup>
                <SidebarMenuItem size="lg" label="Orbit" description="Team plan · 7 members" icon={<span style={logo}>
                      <RiStackLine size={16} />
                    </span>} endIcon={<RiExpandUpDownLine />} onClick={() => toast('Switch workspace', {
                description: 'A real product would list your workspaces.'
              })} />
              </SidebarGroup>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset as="div">
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 12px',
            borderBottom: '1px solid var(--ds-border)'
          }}>
              <SidebarTrigger />
              <Breadcrumb aria-label="Location">
                <BreadcrumbItem href="#orbit">Orbit</BreadcrumbItem>
                <BreadcrumbItem current>{page}</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div style={{
            padding: 16,
            display: 'grid',
            gap: 16,
            fontFamily: 'var(--ds-font-sans)'
          }}>
              {page === 'Members' ? <>
                  <Table variant="card" aria-label="Members">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {shown.map(m => <TableRow key={m.email}>
                          <TableCell>
                            <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8
                      }}>
                              <Avatar size="xs" initials={m.name[0]} />
                              <span style={{
                          display: 'grid'
                        }}>
                                <span>{m.name}</span>
                                <span style={{
                            color: 'var(--ds-muted-foreground)',
                            fontSize: 12,
                            lineHeight: '16px'
                          }}>{m.email}</span>
                              </span>
                            </span>
                          </TableCell>
                          <TableCell>
                            <Badge border={m.role !== 'Member'}>{m.role}</Badge>
                          </TableCell>
                        </TableRow>)}
                    </TableBody>
                  </Table>
                  <Pagination page={tablePage} pageCount={Math.ceil(people.length / perPage)} onPageChange={setTablePage} aria-label="Members pages" />
                </> : page === 'Reports' ? <div style={{
              display: 'grid',
              gap: 12,
              maxWidth: 480
            }}>
                  <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 12,
                fontSize: 14,
                lineHeight: '20px'
              }}>
                    <span id="storage-title" style={{
                  fontWeight: 500,
                  color: 'var(--ds-foreground)'
                }}>
                      Storage
                    </span>
                    <span style={{
                  color: 'var(--ds-muted-foreground)'
                }}>76 of 100 GB used · 4 GB syncing</span>
                  </div>
                  <UsageBar aria-labelledby="storage-title" axis={['0 GB', '25 GB', '50 GB', '75 GB', '100 GB']}>
                    {storage.map(s => <UsageBarSegment key={s.name} value={s.gb} color={s.color} label={\`\${s.name}, \${s.gb} GB\`} tooltip={\`\${s.name} · \${s.gb} GB\`} />)}
                    <UsageBarSegment value={4} variant="striped" label="Syncing, 4 GB" tooltip="Syncing · 4 GB" />
                    <UsageBarSegment value={20} variant="primary" label="Free, 20 GB" />
                  </UsageBar>
                  <UsageBarLegend aria-label="Storage by project">
                    {storage.map(s => <UsageBarLegendItem key={s.name} color={s.color}>
                        {s.name}
                      </UsageBarLegendItem>)}
                    <UsageBarLegendItem variant="striped">Syncing</UsageBarLegendItem>
                    <UsageBarLegendItem variant="primary">Free</UsageBarLegendItem>
                  </UsageBarLegend>
                </div> : <p style={{
              margin: 0,
              color: 'var(--ds-muted-foreground)',
              fontSize: 14
            }}>{page} is a placeholder page in this playground; open Members or Reports to see more.</p>}
            </div>
          </SidebarInset>
        </SidebarLayout>
        <CommandDialog open={palette} onOpenChange={setPalette} label="Go to">
          <CommandInput placeholder="Go to a page or a member…" />
          <CommandList>
            <CommandGroup heading="Pages">
              {pages.map(p => <CommandItem key={p} onSelect={() => go(p)}>
                  {p}
                </CommandItem>)}
            </CommandGroup>
            <CommandGroup heading="Members">
              {people.map(m => <CommandItem key={m.email} icon={<Avatar size="xs" initials={m.name[0]} />} shortcut={m.role} keywords={[m.email]} onSelect={() => go('Members')}>
                  {m.name}
                </CommandItem>)}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        <Toaster />
      </div>;
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as App,Q as __namedExportsOrder,K as default};