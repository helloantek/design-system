import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BKImGdH5.js";import{n as r,t as ee}from"./Button-CLzvoSv8.js";import{$ as i,B as te,J as a,K as o,S as s,Y as c,et as l,it as ne,lt as re,o as u,st as d,vt as f}from"./react-CxbclVC4.js";import{n as p,t as m}from"./Avatar-CCuf-9uu.js";import{n as h,t as g}from"./Badge-hkXGRSDR.js";import{i as _,r as v,t as ie}from"./Breadcrumb-B-Nu4OHq.js";import{l as ae,n as oe,r as y,s as se}from"./Chart-CC3Uga1G.js";import{r as ce,t as le}from"./Kbd-BmBkQfb1.js";import{a as ue,i as b,l as de,n as fe,o as x,s as pe}from"./Command-GhR7LUH0.js";import{n as me,t as S}from"./Pagination-DCUQzkri.js";import{i as C,n as w,r as T}from"./Sonner-Bgukys52.js";import{a as E,c as D,n as O,o as k,r as A,s as j,t as M}from"./Table-DY-wBqu-.js";import{a as N,c as P,i as F,l as I,n as L,o as he,r as R,s as ge,t as _e,u as ve}from"./Sidebar-Bsdthl3H.js";import{i as z,n as ye,o as be,r as B,t as xe}from"./UsageBar-x59zx0Ke.js";var V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{V=n(),l(),p(),h(),_(),ae(),r(),de(),ce(),me(),ve(),T(),D(),be(),H=t(),U={title:`Playground/Workspace`,parameters:{layout:`padded`,docs:{description:{component:`A workspace app shell made of Sidebar (collapsible to the icon rail with the panel button, a projects group with sub pages, the workspace switcher in the footer), Breadcrumb, Command (a palette of pages, from the search item or ⌘K), Table (the members, in the card layout) and Pagination, Usage Bar (storage by project on Reports, with tooltips), Chart (Reports: weekly activity as stacked bars with a tooltip, members by role as a donut), with Avatar, Badge, Button, Kbd and toasts, for trying the navigation components together before they are merged. Make the window narrow to see the sidebar start collapsed and open over the page. Use the toolbar to switch brand and colour scheme.`}}}},W=[{name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`},{name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`},{name:`Lena Fischer`,email:`lena@orbit.dev`,role:`Member`},{name:`Omar Haddad`,email:`omar@orbit.dev`,role:`Member`}],G=[`Home`,`Inbox`,`Reports`,`Members`,`Settings`],K=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`].map((e,t)=>({day:e,edits:[42,58,71,64,49,12,8][t],comments:[18,26,30,22,25,4,3][t]})),q=[{key:`edits`,label:`Edits`,color:`var(--ds-chart-7)`},{key:`comments`,label:`Comments`,color:`var(--ds-chart-3)`}],J=[{label:`Owner`,value:1,color:`var(--ds-chart-7)`},{label:`Admin`,value:1,color:`var(--ds-chart-3)`},{label:`Member`,value:5,color:`var(--ds-chart-5)`}],Y=[{name:`Orbit app`,gb:38,color:`var(--ds-chart-2)`},{name:`Marketing site`,gb:17,color:`var(--ds-chart-1)`},{name:`Archive`,gb:21,color:void 0}],X={display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:32,height:32,borderRadius:8,background:`var(--ds-sidebar-primary)`,color:`var(--ds-sidebar-primary-foreground)`},Z={render:function(){let[e,t]=(0,V.useState)(`Members`),[n,r]=(0,V.useState)(!1),[l,p]=(0,V.useState)(1),h=W.slice((l-1)*4,l*4),_=e=>{t(e),r(!1)};return(0,H.jsxs)(`div`,{onKeyDown:e=>{e.key===`k`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),r(!0))},children:[(0,H.jsxs)(ge,{style:{height:560,border:`1px solid var(--ds-border)`,borderRadius:16,overflow:`hidden`,background:`var(--ds-background)`},children:[(0,H.jsxs)(_e,{"aria-label":`Orbit`,children:[(0,H.jsx)(N,{plain:!0,children:(0,H.jsx)(F,{children:(0,H.jsx)(P,{label:`Search`,icon:(0,H.jsx)(re,{}),badge:(0,H.jsx)(le,{size:`sm`,children:`⌘K`}),onClick:()=>r(!0)})})}),(0,H.jsxs)(L,{children:[(0,H.jsxs)(F,{children:[(0,H.jsx)(P,{label:`Home`,icon:(0,H.jsx)(ne,{}),active:e===`Home`,onClick:()=>_(`Home`)}),(0,H.jsx)(P,{label:`Inbox`,icon:(0,H.jsx)(c,{}),badge:`3`,active:e===`Inbox`,onClick:()=>_(`Inbox`)}),(0,H.jsx)(P,{label:`Reports`,icon:(0,H.jsx)(o,{}),active:e===`Reports`,onClick:()=>_(`Reports`)})]}),(0,H.jsxs)(F,{label:`Projects`,labelSize:`sm`,action:(0,H.jsx)(ee,{variant:`ghost`,size:`xs`,icon:(0,H.jsx)(d,{}),"aria-label":`New project`,onClick:()=>C(`New project`,{description:`A real product would open the project form.`})}),children:[(0,H.jsxs)(P,{label:`Orbit app`,icon:(0,H.jsx)(i,{}),defaultOpen:!0,children:[(0,H.jsx)(P,{label:`Roadmap`,icon:(0,H.jsx)(u,{}),onClick:()=>C(`Roadmap`)}),(0,H.jsx)(P,{label:`Release notes`,icon:(0,H.jsx)(u,{}),onClick:()=>C(`Release notes`)})]}),(0,H.jsx)(P,{label:`Marketing site`,icon:(0,H.jsx)(i,{}),onClick:()=>C(`Marketing site`)})]}),(0,H.jsxs)(F,{label:`Team`,labelSize:`sm`,children:[(0,H.jsx)(P,{label:`Members`,icon:(0,H.jsx)(te,{}),active:e===`Members`,onClick:()=>_(`Members`)}),(0,H.jsx)(P,{label:`Settings`,icon:(0,H.jsx)(s,{}),active:e===`Settings`,onClick:()=>_(`Settings`)})]})]}),(0,H.jsx)(R,{children:(0,H.jsx)(F,{children:(0,H.jsx)(P,{size:`lg`,label:`Orbit`,description:`Team plan · 7 members`,icon:(0,H.jsx)(`span`,{style:X,children:(0,H.jsx)(f,{size:16})}),endIcon:(0,H.jsx)(a,{}),onClick:()=>C(`Switch workspace`,{description:`A real product would list your workspaces.`})})})})]}),(0,H.jsxs)(he,{as:`div`,children:[(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:`10px 12px`,borderBottom:`1px solid var(--ds-border)`},children:[(0,H.jsx)(I,{}),(0,H.jsxs)(ie,{"aria-label":`Location`,children:[(0,H.jsx)(v,{href:`#orbit`,children:`Orbit`}),(0,H.jsx)(v,{current:!0,children:e})]})]}),(0,H.jsx)(`div`,{style:{padding:16,display:`grid`,gap:16,fontFamily:`var(--ds-font-sans)`},children:e===`Members`?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(M,{variant:`card`,"aria-label":`Members`,children:[(0,H.jsx)(k,{children:(0,H.jsxs)(j,{children:[(0,H.jsx)(E,{children:`Name`}),(0,H.jsx)(E,{children:`Role`})]})}),(0,H.jsx)(O,{children:h.map(e=>(0,H.jsxs)(j,{children:[(0,H.jsx)(A,{children:(0,H.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,H.jsx)(m,{size:`xs`,initials:e.name[0]}),(0,H.jsxs)(`span`,{style:{display:`grid`},children:[(0,H.jsx)(`span`,{children:e.name}),(0,H.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontSize:12,lineHeight:`16px`},children:e.email})]})]})}),(0,H.jsx)(A,{children:(0,H.jsx)(g,{border:e.role!==`Member`,children:e.role})})]},e.email))})]}),(0,H.jsx)(S,{page:l,pageCount:Math.ceil(W.length/4),onPageChange:p,"aria-label":`Members pages`})]}):e===`Reports`?(0,H.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:480},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12,fontSize:14,lineHeight:`20px`},children:[(0,H.jsx)(`span`,{id:`storage-title`,style:{fontWeight:500,color:`var(--ds-foreground)`},children:`Storage`}),(0,H.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`},children:`76 of 100 GB used · 4 GB syncing`})]}),(0,H.jsxs)(xe,{"aria-labelledby":`storage-title`,axis:[`0 GB`,`25 GB`,`50 GB`,`75 GB`,`100 GB`],children:[Y.map(e=>(0,H.jsx)(z,{value:e.gb,color:e.color,label:`${e.name}, ${e.gb} GB`,tooltip:`${e.name} · ${e.gb} GB`},e.name)),(0,H.jsx)(z,{value:4,variant:`striped`,label:`Syncing, 4 GB`,tooltip:`Syncing · 4 GB`}),(0,H.jsx)(z,{value:20,variant:`primary`,label:`Free, 20 GB`})]}),(0,H.jsxs)(ye,{"aria-label":`Storage by project`,children:[Y.map(e=>(0,H.jsx)(B,{color:e.color,children:e.name},e.name)),(0,H.jsx)(B,{variant:`striped`,children:`Syncing`}),(0,H.jsx)(B,{variant:`primary`,children:`Free`})]}),(0,H.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12,fontSize:14,lineHeight:`20px`,marginTop:16},children:[(0,H.jsx)(`span`,{id:`activity-title`,style:{fontWeight:500,color:`var(--ds-foreground)`},children:`Activity this week`}),(0,H.jsx)(y,{"aria-label":`Activity series`,items:q})]}),(0,H.jsx)(oe,{"aria-labelledby":`activity-title`,data:K,index:`day`,series:q,stacked:!0,height:160,grid:4}),(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:24,marginTop:16},children:[(0,H.jsx)(se,{"aria-label":`Members by role`,variant:`donut`,data:J,size:120,value:`7`,caption:`Members`}),(0,H.jsx)(y,{variant:`totals`,"aria-label":`Members by role`,style:{flex:1},items:J.map(e=>({label:e.label,color:e.color,value:e.value}))})]})]}):(0,H.jsxs)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`,fontSize:14},children:[e,` is a placeholder page in this playground; open Members or Reports to see more.`]})})]})]}),(0,H.jsxs)(fe,{open:n,onOpenChange:r,label:`Go to`,children:[(0,H.jsx)(ue,{placeholder:`Go to a page or a member…`}),(0,H.jsxs)(pe,{children:[(0,H.jsx)(b,{heading:`Pages`,children:G.map(e=>(0,H.jsx)(x,{onSelect:()=>_(e),children:e},e))}),(0,H.jsx)(b,{heading:`Members`,children:W.map(e=>(0,H.jsx)(x,{icon:(0,H.jsx)(m,{size:`xs`,initials:e.name[0]}),shortcut:e.role,keywords:[e.email],onSelect:()=>_(`Members`),children:e.name},e.email))})]})]}),(0,H.jsx)(w,{})]})}},Q=[`App`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
                  <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 12,
                fontSize: 14,
                lineHeight: '20px',
                marginTop: 16
              }}>
                    <span id="activity-title" style={{
                  fontWeight: 500,
                  color: 'var(--ds-foreground)'
                }}>
                      Activity this week
                    </span>
                    <ChartLegend aria-label="Activity series" items={activitySeries} />
                  </div>
                  <BarChart aria-labelledby="activity-title" data={activity} index="day" series={activitySeries} stacked height={160} grid={4} />
                  <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                marginTop: 16
              }}>
                    <PieChart aria-label="Members by role" variant="donut" data={roles} size={120} value="7" caption="Members" />
                    <ChartLegend variant="totals" aria-label="Members by role" style={{
                  flex: 1
                }} items={roles.map(r => ({
                  label: r.label,
                  color: r.color,
                  value: r.value
                }))} />
                  </div>
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as App,Q as __namedExportsOrder,U as default};