import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-CRU8aC5i.js";import{n as r,t as ee}from"./Button-0C1Ejvx3.js";import{J as te,Ot as ne,ct as i,et as re,gt as ie,it as a,k as ae,l as o,lt as s,pt as oe,rt as se,vt as ce}from"./react-BcIinrex.js";import{n as c,t as l}from"./Avatar-Db4wy378.js";import{n as u,t as d}from"./Badge-BLtNDJTI.js";import{i as f,r as p,t as le}from"./Breadcrumb-BejCY6Qp.js";import{r as ue,t as m}from"./Bubble-DC6uhGpn.js";import{n as de,r as fe,t as pe}from"./Carousel-D-HKUVgO.js";import{l as h,n as g,r as _,s as me}from"./Chart-BS29I8RZ.js";import{r as he,t as ge}from"./Kbd--oO7DFeW.js";import{a as _e,i as v,l as ve,n as ye,o as y,s as be}from"./Command-C17VWSrm.js";import{i as xe,n as Se,r as Ce,t as b}from"./Message-CoOzkExO.js";import{n as x,t as S}from"./Pagination-CqdNhin9.js";import{i as C,n as w,r as T}from"./Sonner-BZdGILJR.js";import{a as E,c as D,n as O,o as k,r as A,s as j,t as we}from"./Table-13yn_sap.js";import{a as Te,c as M,i as N,l as P,n as Ee,o as De,r as Oe,s as ke,t as Ae,u as je}from"./Sidebar-B4KzuVti.js";import{i as F,n as Me,o as Ne,r as I,t as Pe}from"./UsageBar-BOOqMmAN.js";var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{L=n(),s(),c(),u(),f(),ue(),fe(),h(),r(),ve(),he(),xe(),x(),je(),T(),D(),Ne(),R=t(),z={title:`Playground/Workspace`,parameters:{layout:`padded`,docs:{description:{component:`A workspace app shell made of Sidebar (collapsible to the icon rail with the panel button, a projects group with sub pages, the workspace switcher in the footer), Breadcrumb, Command (a palette of pages, from the search item or ⌘K), Table (the members, in the card layout) and Pagination, Usage Bar (storage by project on Reports, with tooltips), Chart (Reports: weekly activity as stacked bars with a tooltip, members by role as a donut), Carousel (What’s new on Home, with indicators), Bubble and Message (a conversation on Inbox: avatars, the sender with a badge, grouped messages, reactions, a read receipt, Show more and a typing line), with Avatar, Badge, Button, Kbd and toasts, for trying the navigation components together before they are merged. Make the window narrow to see the sidebar start collapsed and open over the page. Use the toolbar to switch brand and colour scheme.`}}}},B=[{name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`},{name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`},{name:`Lena Fischer`,email:`lena@orbit.dev`,role:`Member`},{name:`Omar Haddad`,email:`omar@orbit.dev`,role:`Member`}],V=(e,t,n)=>(0,R.jsx)(l,{initials:e,name:t,style:{"--avatar-fill":`var(--ds-palette-${n}-solid)`,"--avatar-ink":`var(--ds-primary-foreground)`}}),H=V(`P`,`Priya Raman`,`lime`),U=V(`T`,`You`,`orange`),W=[`Home`,`Inbox`,`Reports`,`Members`,`Settings`],G=[{title:`Command palette`,body:`Press ⌘K anywhere to jump to a page or a member.`,hue:`blue`},{title:`Storage reports`,body:`See which projects use your space on the Reports page.`,hue:`green`},{title:`Weekly activity`,body:`Edits and comments per day, with a tooltip on every bar.`,hue:`fuchsia`}],K=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`].map((e,t)=>({day:e,edits:[42,58,71,64,49,12,8][t],comments:[18,26,30,22,25,4,3][t]})),q=[{key:`edits`,label:`Edits`,color:`var(--ds-chart-7)`},{key:`comments`,label:`Comments`,color:`var(--ds-chart-3)`}],J=[{label:`Owner`,value:1,color:`var(--ds-chart-7)`},{label:`Admin`,value:1,color:`var(--ds-chart-3)`},{label:`Member`,value:5,color:`var(--ds-chart-5)`}],Y=[{name:`Orbit app`,gb:38,color:`var(--ds-chart-2)`},{name:`Marketing site`,gb:17,color:`var(--ds-chart-1)`},{name:`Archive`,gb:21,color:void 0}],X={display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:32,height:32,borderRadius:8,background:`var(--ds-sidebar-primary)`,color:`var(--ds-sidebar-primary-foreground)`},Z={render:function(){let[e,t]=(0,L.useState)(`Members`),[n,r]=(0,L.useState)(!1),[s,c]=(0,L.useState)(1),u=B.slice((s-1)*4,s*4),f=e=>{t(e),r(!1)};return(0,R.jsxs)(`div`,{onKeyDown:e=>{e.key===`k`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),r(!0))},children:[(0,R.jsxs)(ke,{style:{height:560,border:`1px solid var(--ds-border)`,borderRadius:16,overflow:`hidden`,background:`var(--ds-background)`},children:[(0,R.jsxs)(Ae,{"aria-label":`Orbit`,children:[(0,R.jsx)(Te,{plain:!0,children:(0,R.jsx)(N,{children:(0,R.jsx)(M,{label:`Search`,icon:(0,R.jsx)(ce,{}),badge:(0,R.jsx)(ge,{size:`sm`,children:`⌘K`}),onClick:()=>r(!0)})})}),(0,R.jsxs)(Ee,{children:[(0,R.jsxs)(N,{children:[(0,R.jsx)(M,{label:`Home`,icon:(0,R.jsx)(oe,{}),active:e===`Home`,onClick:()=>f(`Home`)}),(0,R.jsx)(M,{label:`Inbox`,icon:(0,R.jsx)(a,{}),badge:`3`,active:e===`Inbox`,onClick:()=>f(`Inbox`)}),(0,R.jsx)(M,{label:`Reports`,icon:(0,R.jsx)(re,{}),active:e===`Reports`,onClick:()=>f(`Reports`)})]}),(0,R.jsxs)(N,{label:`Projects`,labelSize:`sm`,action:(0,R.jsx)(ee,{variant:`ghost`,size:`xs`,icon:(0,R.jsx)(ie,{}),"aria-label":`New project`,onClick:()=>C(`New project`,{description:`A real product would open the project form.`})}),children:[(0,R.jsxs)(M,{label:`Orbit app`,icon:(0,R.jsx)(i,{}),defaultOpen:!0,children:[(0,R.jsx)(M,{label:`Roadmap`,icon:(0,R.jsx)(o,{}),onClick:()=>C(`Roadmap`)}),(0,R.jsx)(M,{label:`Release notes`,icon:(0,R.jsx)(o,{}),onClick:()=>C(`Release notes`)})]}),(0,R.jsx)(M,{label:`Marketing site`,icon:(0,R.jsx)(i,{}),onClick:()=>C(`Marketing site`)})]}),(0,R.jsxs)(N,{label:`Team`,labelSize:`sm`,children:[(0,R.jsx)(M,{label:`Members`,icon:(0,R.jsx)(te,{}),active:e===`Members`,onClick:()=>f(`Members`)}),(0,R.jsx)(M,{label:`Settings`,icon:(0,R.jsx)(ae,{}),active:e===`Settings`,onClick:()=>f(`Settings`)})]})]}),(0,R.jsx)(Oe,{children:(0,R.jsx)(N,{children:(0,R.jsx)(M,{size:`lg`,label:`Orbit`,description:`Team plan · 7 members`,icon:(0,R.jsx)(`span`,{style:X,children:(0,R.jsx)(ne,{size:16})}),endIcon:(0,R.jsx)(se,{}),onClick:()=>C(`Switch workspace`,{description:`A real product would list your workspaces.`})})})})]}),(0,R.jsxs)(De,{as:`div`,children:[(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:`10px 12px`,borderBottom:`1px solid var(--ds-border)`},children:[(0,R.jsx)(P,{}),(0,R.jsxs)(le,{"aria-label":`Location`,children:[(0,R.jsx)(p,{href:`#orbit`,children:`Orbit`}),(0,R.jsx)(p,{current:!0,children:e})]})]}),(0,R.jsx)(`div`,{style:{padding:16,display:`grid`,gap:16,fontFamily:`var(--ds-font-sans)`},children:e===`Members`?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(we,{variant:`card`,"aria-label":`Members`,children:[(0,R.jsx)(k,{children:(0,R.jsxs)(j,{children:[(0,R.jsx)(E,{children:`Name`}),(0,R.jsx)(E,{children:`Role`})]})}),(0,R.jsx)(O,{children:u.map(e=>(0,R.jsxs)(j,{children:[(0,R.jsx)(A,{children:(0,R.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,R.jsx)(l,{size:`xs`,initials:e.name[0]}),(0,R.jsxs)(`span`,{style:{display:`grid`},children:[(0,R.jsx)(`span`,{children:e.name}),(0,R.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontSize:12,lineHeight:`16px`},children:e.email})]})]})}),(0,R.jsx)(A,{children:(0,R.jsx)(d,{border:e.role!==`Member`,children:e.role})})]},e.email))})]}),(0,R.jsx)(S,{page:s,pageCount:Math.ceil(B.length/4),onPageChange:c,"aria-label":`Members pages`})]}):e===`Inbox`?(0,R.jsxs)(`div`,{role:`log`,"aria-label":`Conversation with Priya`,style:{display:`flex`,flexDirection:`column`,gap:16,maxWidth:480},children:[(0,R.jsxs)(Se,{avatar:H,children:[(0,R.jsx)(b,{sender:`Priya Raman`,badge:(0,R.jsx)(d,{shape:`pill`,children:`Design`}),children:(0,R.jsx)(m,{variant:`muted`,children:`Can we move the design review to Thursday?`})}),(0,R.jsx)(b,{footer:`10:21 AM`,children:(0,R.jsx)(m,{variant:`muted`,reactions:`🙏`,children:`Two people are out on Wednesday.`})})]}),(0,R.jsx)(b,{align:`end`,avatar:U,footer:`10:24 AM · Read by Priya`,children:(0,R.jsx)(m,{children:`Sure, Thursday at 2 PM works. I will update the invite.`})}),(0,R.jsx)(b,{avatar:H,footer:`10:26 AM`,children:(0,R.jsx)(m,{variant:`muted`,collapsible:3,children:`Thanks! I will also bring the notes from last week, the open questions on the onboarding flow, the numbers from the pricing test and a first draft of the release plan for 2.5, so we can go through everything in one go instead of booking another slot next week.`})}),(0,R.jsx)(Ce,{children:`Priya is typing…`})]}):e===`Home`?(0,R.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:480},children:[(0,R.jsx)(`span`,{style:{fontSize:14,lineHeight:`20px`,fontWeight:500,color:`var(--ds-foreground)`},children:`What's new`}),(0,R.jsx)(pe,{"aria-label":`What's new`,indicators:!0,children:G.map(e=>(0,R.jsxs)(de,{style:{display:`grid`,alignContent:`end`,gap:4,minHeight:140,padding:20,borderRadius:16,background:`var(--ds-palette-${e.hue}-tint)`,color:`var(--ds-palette-${e.hue}-text)`},children:[(0,R.jsx)(`span`,{style:{fontSize:16,lineHeight:`24px`,fontWeight:600},children:e.title}),(0,R.jsx)(`span`,{style:{fontSize:14,lineHeight:`20px`},children:e.body})]},e.title))})]}):e===`Reports`?(0,R.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:480},children:[(0,R.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12,fontSize:14,lineHeight:`20px`},children:[(0,R.jsx)(`span`,{id:`storage-title`,style:{fontWeight:500,color:`var(--ds-foreground)`},children:`Storage`}),(0,R.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`},children:`76 of 100 GB used · 4 GB syncing`})]}),(0,R.jsxs)(Pe,{"aria-labelledby":`storage-title`,axis:[`0 GB`,`25 GB`,`50 GB`,`75 GB`,`100 GB`],children:[Y.map(e=>(0,R.jsx)(F,{value:e.gb,color:e.color,label:`${e.name}, ${e.gb} GB`,tooltip:`${e.name} · ${e.gb} GB`},e.name)),(0,R.jsx)(F,{value:4,variant:`striped`,label:`Syncing, 4 GB`,tooltip:`Syncing · 4 GB`}),(0,R.jsx)(F,{value:20,variant:`primary`,label:`Free, 20 GB`})]}),(0,R.jsxs)(Me,{"aria-label":`Storage by project`,children:[Y.map(e=>(0,R.jsx)(I,{color:e.color,children:e.name},e.name)),(0,R.jsx)(I,{variant:`striped`,children:`Syncing`}),(0,R.jsx)(I,{variant:`primary`,children:`Free`})]}),(0,R.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12,fontSize:14,lineHeight:`20px`,marginTop:16},children:[(0,R.jsx)(`span`,{id:`activity-title`,style:{fontWeight:500,color:`var(--ds-foreground)`},children:`Activity this week`}),(0,R.jsx)(_,{"aria-label":`Activity series`,items:q})]}),(0,R.jsx)(g,{"aria-labelledby":`activity-title`,data:K,index:`day`,series:q,stacked:!0,height:160,grid:4}),(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:24,marginTop:16},children:[(0,R.jsx)(me,{"aria-label":`Members by role`,variant:`donut`,data:J,size:120,value:`7`,caption:`Members`}),(0,R.jsx)(_,{variant:`totals`,"aria-label":`Members by role`,style:{flex:1},items:J.map(e=>({label:e.label,color:e.color,value:e.value}))})]})]}):(0,R.jsxs)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`,fontSize:14},children:[e,` is a placeholder page in this playground; open Home, Members or Reports to see more.`]})})]})]}),(0,R.jsxs)(ye,{open:n,onOpenChange:r,label:`Go to`,children:[(0,R.jsx)(_e,{placeholder:`Go to a page or a member…`}),(0,R.jsxs)(be,{children:[(0,R.jsx)(v,{heading:`Pages`,children:W.map(e=>(0,R.jsx)(y,{onSelect:()=>f(e),children:e},e))}),(0,R.jsx)(v,{heading:`Members`,children:B.map(e=>(0,R.jsx)(y,{icon:(0,R.jsx)(l,{size:`xs`,initials:e.name[0]}),shortcut:e.role,keywords:[e.email],onSelect:()=>f(`Members`),children:e.name},e.email))})]})]}),(0,R.jsx)(w,{})]})}},Q=[`App`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
                </> : page === 'Inbox' ? <div role="log" aria-label="Conversation with Priya" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              maxWidth: 480
            }}>
                  <MessageGroup avatar={priya}>
                    <Message sender="Priya Raman" badge={<Badge shape="pill">Design</Badge>}>
                      <Bubble variant="muted">Can we move the design review to Thursday?</Bubble>
                    </Message>
                    <Message footer="10:21 AM">
                      <Bubble variant="muted" reactions="🙏">
                        Two people are out on Wednesday.
                      </Bubble>
                    </Message>
                  </MessageGroup>
                  <Message align="end" avatar={me} footer="10:24 AM · Read by Priya">
                    <Bubble>Sure, Thursday at 2 PM works. I will update the invite.</Bubble>
                  </Message>
                  <Message avatar={priya} footer="10:26 AM">
                    <Bubble variant="muted" collapsible={3}>
                      Thanks! I will also bring the notes from last week, the open questions on the onboarding flow, the numbers from the pricing test and a first draft of the release plan for 2.5, so we can go through everything in one go instead of booking another slot next week.
                    </Bubble>
                  </Message>
                  <MessageTyping>Priya is typing…</MessageTyping>
                </div> : page === 'Home' ? <div style={{
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as App,Q as __namedExportsOrder,z as default};