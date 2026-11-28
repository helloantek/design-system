import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-D6ZlyF_G.js";import{n as r,t as i}from"./Button-BE_h3tcM.js";import{E as ee,G as te,Tt as a,Z as o,at as s,et as c,ht as ne,ot as l,pt as re,s as u,tt as d,ut as f}from"./react-D2VUvMEk.js";import{n as p,t as m}from"./Avatar-1oMIFBJY.js";import{n as h,t as g}from"./Badge-Cud6h92r.js";import{i as _,r as v,t as ie}from"./Breadcrumb-Ns3eMXBp.js";import{n as ae,r as oe,t as se}from"./Carousel-C_E7F0DD.js";import{l as ce,n as le,r as y,s as ue}from"./Chart-BBcoJ2DB.js";import{r as de,t as fe}from"./Kbd-Cc56dtTv.js";import{a as pe,i as b,l as me,n as he,o as x,s as ge}from"./Command-ehK2nNii.js";import{n as S,t as C}from"./Pagination-DXeGvme9.js";import{i as w,n as T,r as E}from"./Sonner-B8BEhGor.js";import{a as D,c as O,n as k,o as A,r as j,s as M,t as N}from"./Table-DHMcC4BR.js";import{a as P,c as F,i as I,l as L,n as _e,o as ve,r as ye,s as be,t as xe,u as Se}from"./Sidebar-Wl7VwY3n.js";import{i as R,n as Ce,o as we,r as z,t as Te}from"./UsageBar-DXhtuWO2.js";var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{B=n(),l(),p(),h(),_(),oe(),ce(),r(),me(),de(),S(),Se(),E(),O(),we(),V=t(),H={title:`Playground/Workspace`,parameters:{layout:`padded`,docs:{description:{component:`A workspace app shell made of Sidebar (collapsible to the icon rail with the panel button, a projects group with sub pages, the workspace switcher in the footer), Breadcrumb, Command (a palette of pages, from the search item or ⌘K), Table (the members, in the card layout) and Pagination, Usage Bar (storage by project on Reports, with tooltips), Chart (Reports: weekly activity as stacked bars with a tooltip, members by role as a donut), Carousel (What’s new on Home, with indicators), with Avatar, Badge, Button, Kbd and toasts, for trying the navigation components together before they are merged. Make the window narrow to see the sidebar start collapsed and open over the page. Use the toolbar to switch brand and colour scheme.`}}}},U=[{name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`},{name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`},{name:`Lena Fischer`,email:`lena@orbit.dev`,role:`Member`},{name:`Omar Haddad`,email:`omar@orbit.dev`,role:`Member`}],W=[`Home`,`Inbox`,`Reports`,`Members`,`Settings`],G=[{title:`Command palette`,body:`Press ⌘K anywhere to jump to a page or a member.`,hue:`blue`},{title:`Storage reports`,body:`See which projects use your space on the Reports page.`,hue:`green`},{title:`Weekly activity`,body:`Edits and comments per day, with a tooltip on every bar.`,hue:`fuchsia`}],K=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`].map((e,t)=>({day:e,edits:[42,58,71,64,49,12,8][t],comments:[18,26,30,22,25,4,3][t]})),q=[{key:`edits`,label:`Edits`,color:`var(--ds-chart-7)`},{key:`comments`,label:`Comments`,color:`var(--ds-chart-3)`}],J=[{label:`Owner`,value:1,color:`var(--ds-chart-7)`},{label:`Admin`,value:1,color:`var(--ds-chart-3)`},{label:`Member`,value:5,color:`var(--ds-chart-5)`}],Y=[{name:`Orbit app`,gb:38,color:`var(--ds-chart-2)`},{name:`Marketing site`,gb:17,color:`var(--ds-chart-1)`},{name:`Archive`,gb:21,color:void 0}],X={display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:32,height:32,borderRadius:8,background:`var(--ds-sidebar-primary)`,color:`var(--ds-sidebar-primary-foreground)`},Z={render:function(){let[e,t]=(0,B.useState)(`Members`),[n,r]=(0,B.useState)(!1),[l,p]=(0,B.useState)(1),h=U.slice((l-1)*4,l*4),_=e=>{t(e),r(!1)};return(0,V.jsxs)(`div`,{onKeyDown:e=>{e.key===`k`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),r(!0))},children:[(0,V.jsxs)(be,{style:{height:560,border:`1px solid var(--ds-border)`,borderRadius:16,overflow:`hidden`,background:`var(--ds-background)`},children:[(0,V.jsxs)(xe,{"aria-label":`Orbit`,children:[(0,V.jsx)(P,{plain:!0,children:(0,V.jsx)(I,{children:(0,V.jsx)(F,{label:`Search`,icon:(0,V.jsx)(ne,{}),badge:(0,V.jsx)(fe,{size:`sm`,children:`⌘K`}),onClick:()=>r(!0)})})}),(0,V.jsxs)(_e,{children:[(0,V.jsxs)(I,{children:[(0,V.jsx)(F,{label:`Home`,icon:(0,V.jsx)(f,{}),active:e===`Home`,onClick:()=>_(`Home`)}),(0,V.jsx)(F,{label:`Inbox`,icon:(0,V.jsx)(d,{}),badge:`3`,active:e===`Inbox`,onClick:()=>_(`Inbox`)}),(0,V.jsx)(F,{label:`Reports`,icon:(0,V.jsx)(o,{}),active:e===`Reports`,onClick:()=>_(`Reports`)})]}),(0,V.jsxs)(I,{label:`Projects`,labelSize:`sm`,action:(0,V.jsx)(i,{variant:`ghost`,size:`xs`,icon:(0,V.jsx)(re,{}),"aria-label":`New project`,onClick:()=>w(`New project`,{description:`A real product would open the project form.`})}),children:[(0,V.jsxs)(F,{label:`Orbit app`,icon:(0,V.jsx)(s,{}),defaultOpen:!0,children:[(0,V.jsx)(F,{label:`Roadmap`,icon:(0,V.jsx)(u,{}),onClick:()=>w(`Roadmap`)}),(0,V.jsx)(F,{label:`Release notes`,icon:(0,V.jsx)(u,{}),onClick:()=>w(`Release notes`)})]}),(0,V.jsx)(F,{label:`Marketing site`,icon:(0,V.jsx)(s,{}),onClick:()=>w(`Marketing site`)})]}),(0,V.jsxs)(I,{label:`Team`,labelSize:`sm`,children:[(0,V.jsx)(F,{label:`Members`,icon:(0,V.jsx)(te,{}),active:e===`Members`,onClick:()=>_(`Members`)}),(0,V.jsx)(F,{label:`Settings`,icon:(0,V.jsx)(ee,{}),active:e===`Settings`,onClick:()=>_(`Settings`)})]})]}),(0,V.jsx)(ye,{children:(0,V.jsx)(I,{children:(0,V.jsx)(F,{size:`lg`,label:`Orbit`,description:`Team plan · 7 members`,icon:(0,V.jsx)(`span`,{style:X,children:(0,V.jsx)(a,{size:16})}),endIcon:(0,V.jsx)(c,{}),onClick:()=>w(`Switch workspace`,{description:`A real product would list your workspaces.`})})})})]}),(0,V.jsxs)(ve,{as:`div`,children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:`10px 12px`,borderBottom:`1px solid var(--ds-border)`},children:[(0,V.jsx)(L,{}),(0,V.jsxs)(ie,{"aria-label":`Location`,children:[(0,V.jsx)(v,{href:`#orbit`,children:`Orbit`}),(0,V.jsx)(v,{current:!0,children:e})]})]}),(0,V.jsx)(`div`,{style:{padding:16,display:`grid`,gap:16,fontFamily:`var(--ds-font-sans)`},children:e===`Members`?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(N,{variant:`card`,"aria-label":`Members`,children:[(0,V.jsx)(A,{children:(0,V.jsxs)(M,{children:[(0,V.jsx)(D,{children:`Name`}),(0,V.jsx)(D,{children:`Role`})]})}),(0,V.jsx)(k,{children:h.map(e=>(0,V.jsxs)(M,{children:[(0,V.jsx)(j,{children:(0,V.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,V.jsx)(m,{size:`xs`,initials:e.name[0]}),(0,V.jsxs)(`span`,{style:{display:`grid`},children:[(0,V.jsx)(`span`,{children:e.name}),(0,V.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontSize:12,lineHeight:`16px`},children:e.email})]})]})}),(0,V.jsx)(j,{children:(0,V.jsx)(g,{border:e.role!==`Member`,children:e.role})})]},e.email))})]}),(0,V.jsx)(C,{page:l,pageCount:Math.ceil(U.length/4),onPageChange:p,"aria-label":`Members pages`})]}):e===`Home`?(0,V.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:480},children:[(0,V.jsx)(`span`,{style:{fontSize:14,lineHeight:`20px`,fontWeight:500,color:`var(--ds-foreground)`},children:`What's new`}),(0,V.jsx)(se,{"aria-label":`What's new`,indicators:!0,children:G.map(e=>(0,V.jsxs)(ae,{style:{display:`grid`,alignContent:`end`,gap:4,minHeight:140,padding:20,borderRadius:16,background:`var(--ds-palette-${e.hue}-tint)`,color:`var(--ds-palette-${e.hue}-text)`},children:[(0,V.jsx)(`span`,{style:{fontSize:16,lineHeight:`24px`,fontWeight:600},children:e.title}),(0,V.jsx)(`span`,{style:{fontSize:14,lineHeight:`20px`},children:e.body})]},e.title))})]}):e===`Reports`?(0,V.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:480},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12,fontSize:14,lineHeight:`20px`},children:[(0,V.jsx)(`span`,{id:`storage-title`,style:{fontWeight:500,color:`var(--ds-foreground)`},children:`Storage`}),(0,V.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`},children:`76 of 100 GB used · 4 GB syncing`})]}),(0,V.jsxs)(Te,{"aria-labelledby":`storage-title`,axis:[`0 GB`,`25 GB`,`50 GB`,`75 GB`,`100 GB`],children:[Y.map(e=>(0,V.jsx)(R,{value:e.gb,color:e.color,label:`${e.name}, ${e.gb} GB`,tooltip:`${e.name} · ${e.gb} GB`},e.name)),(0,V.jsx)(R,{value:4,variant:`striped`,label:`Syncing, 4 GB`,tooltip:`Syncing · 4 GB`}),(0,V.jsx)(R,{value:20,variant:`primary`,label:`Free, 20 GB`})]}),(0,V.jsxs)(Ce,{"aria-label":`Storage by project`,children:[Y.map(e=>(0,V.jsx)(z,{color:e.color,children:e.name},e.name)),(0,V.jsx)(z,{variant:`striped`,children:`Syncing`}),(0,V.jsx)(z,{variant:`primary`,children:`Free`})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12,fontSize:14,lineHeight:`20px`,marginTop:16},children:[(0,V.jsx)(`span`,{id:`activity-title`,style:{fontWeight:500,color:`var(--ds-foreground)`},children:`Activity this week`}),(0,V.jsx)(y,{"aria-label":`Activity series`,items:q})]}),(0,V.jsx)(le,{"aria-labelledby":`activity-title`,data:K,index:`day`,series:q,stacked:!0,height:160,grid:4}),(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:24,marginTop:16},children:[(0,V.jsx)(ue,{"aria-label":`Members by role`,variant:`donut`,data:J,size:120,value:`7`,caption:`Members`}),(0,V.jsx)(y,{variant:`totals`,"aria-label":`Members by role`,style:{flex:1},items:J.map(e=>({label:e.label,color:e.color,value:e.value}))})]})]}):(0,V.jsxs)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`,fontSize:14},children:[e,` is a placeholder page in this playground; open Home, Members or Reports to see more.`]})})]})]}),(0,V.jsxs)(he,{open:n,onOpenChange:r,label:`Go to`,children:[(0,V.jsx)(pe,{placeholder:`Go to a page or a member…`}),(0,V.jsxs)(ge,{children:[(0,V.jsx)(b,{heading:`Pages`,children:W.map(e=>(0,V.jsx)(x,{onSelect:()=>_(e),children:e},e))}),(0,V.jsx)(b,{heading:`Members`,children:U.map(e=>(0,V.jsx)(x,{icon:(0,V.jsx)(m,{size:`xs`,initials:e.name[0]}),shortcut:e.role,keywords:[e.email],onSelect:()=>_(`Members`),children:e.name},e.email))})]})]}),(0,V.jsx)(T,{})]})}},Q=[`App`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
                </> : page === 'Home' ? <div style={{
              display: 'grid',
              gap: 12,
              maxWidth: 480
            }}>
                  <span style={{
                fontSize: 14,
                lineHeight: '20px',
                fontWeight: 500,
                color: 'var(--ds-foreground)'
              }}>What's new</span>
                  <Carousel aria-label="What's new" indicators>
                    {news.map(n => <CarouselSlide key={n.title} style={{
                  display: 'grid',
                  alignContent: 'end',
                  gap: 4,
                  minHeight: 140,
                  padding: 20,
                  borderRadius: 16,
                  background: \`var(--ds-palette-\${n.hue}-tint)\`,
                  color: \`var(--ds-palette-\${n.hue}-text)\`
                }}>
                        <span style={{
                    fontSize: 16,
                    lineHeight: '24px',
                    fontWeight: 600
                  }}>{n.title}</span>
                        <span style={{
                    fontSize: 14,
                    lineHeight: '20px'
                  }}>{n.body}</span>
                      </CarouselSlide>)}
                  </Carousel>
                </div> : page === 'Reports' ? <div style={{
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
            }}>{page} is a placeholder page in this playground; open Home, Members or Reports to see more.</p>}
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as App,Q as __namedExportsOrder,H as default};