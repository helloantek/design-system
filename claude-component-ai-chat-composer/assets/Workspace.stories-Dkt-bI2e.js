import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-B3R0uEzk.js";import{A as r,Ct as ee,Ft as i,Rt as te,Z as ne,c as a,ct as re,it as ie,mt as o,pt as s,st as c,vt as ae,xt as l}from"./react-DI2k7QrC.js";import{r as u,t as d}from"./Attachment-BaewtigR.js";import{n as f,t as p}from"./Badge-iCqQaurj.js";import{n as oe,t as m}from"./Button-C0yN_uGv.js";import{n as h,t as g}from"./Avatar-W3no4zkw.js";import{r as se,t as ce}from"./AIChatComposer-BtVCFz0y.js";import{i as le,r as _,t as ue}from"./Breadcrumb-D5AcNF2O.js";import{r as de,t as v}from"./Bubble-Cf82ucFa.js";import{n as fe,r as pe,t as me}from"./Carousel-9DnEV2E5.js";import{l as he,n as ge,r as y,s as _e}from"./Chart-DdCRre9R.js";import{r as ve,t as ye}from"./Kbd-QUSFX2Wi.js";import{a as be,i as b,l as xe,n as Se,o as x,s as Ce}from"./Command-LGeDh9Ys.js";import{n as we,t as S}from"./Marker-C-qybGnj.js";import{i as Te,n as Ee,r as De,t as C}from"./Message-B0gLPvr5.js";import{n as w,r as T,t as E}from"./MessageScroller-B-Bt_1nU.js";import{n as D,t as Oe}from"./Pagination-DIpNsRvk.js";import{i as O,n as ke,r as Ae}from"./Sonner-DtxO9RzL.js";import{a as k,c as je,n as Me,o as Ne,r as A,s as j,t as Pe}from"./Table-F-QGkh3b.js";import{a as Fe,c as M,i as N,l as Ie,n as Le,o as Re,r as ze,s as Be,t as Ve,u as He}from"./Sidebar-YYGcbXOy.js";import{i as P,n as Ue,o as We,r as F,t as Ge}from"./UsageBar-BzC3SojF.js";function Ke(){let[e,t]=(0,I.useState)([]),[n,r]=(0,I.useState)(``);return(0,L.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:480},children:[(0,L.jsxs)(E,{"aria-label":`Conversation with Priya`,defaultScrollPosition:`end`,animation:`slide`,anchorOffset:96,style:{height:380,"--message-scroller-surface":`var(--ds-background)`},children:[(0,L.jsx)(w,{children:(0,L.jsx)(S,{variant:`separator`,children:`Yesterday`})}),(0,L.jsx)(w,{children:(0,L.jsx)(C,{avatar:V,sender:`Priya Raman`,footer:`4:12 PM`,children:(0,L.jsx)(v,{variant:`muted`,children:`The onboarding numbers are in: 61% finish the first project, up from 48%.`})})}),(0,L.jsx)(w,{children:(0,L.jsx)(C,{align:`end`,avatar:H,footer:`4:15 PM`,children:(0,L.jsx)(v,{children:`Great jump. Let’s go through it in the design review.`})})}),(0,L.jsx)(w,{children:(0,L.jsx)(S,{variant:`separator`,children:`Today`})}),(0,L.jsx)(w,{children:(0,L.jsxs)(Ee,{avatar:V,children:[(0,L.jsx)(C,{sender:`Priya Raman`,badge:(0,L.jsx)(p,{shape:`pill`,children:`Design`}),children:(0,L.jsx)(v,{variant:`muted`,children:`Can we move the design review to Thursday?`})}),(0,L.jsx)(C,{footer:`10:21 AM`,children:(0,L.jsx)(v,{variant:`muted`,reactions:`🙏`,children:`Two people are out on Wednesday.`})})]})}),(0,L.jsx)(w,{children:(0,L.jsx)(C,{align:`end`,avatar:H,footer:`10:24 AM · Read by Priya`,children:(0,L.jsx)(v,{children:`Sure, Thursday at 2 PM works. I will update the invite.`})})}),(0,L.jsx)(w,{children:(0,L.jsxs)(C,{avatar:V,footer:`10:26 AM`,children:[(0,L.jsx)(v,{variant:`muted`,collapsible:3,children:`Thanks! I will also bring the notes from last week, the open questions on the onboarding flow, the numbers from the pricing test and a first draft of the release plan for 2.5, so we can go through everything in one go instead of booking another slot next week.`}),(0,L.jsx)(d,{title:`release-plan-2.5.pdf`,description:`1.2 MB`,actions:(0,L.jsx)(m,{variant:`ghost`,size:`xs`,icon:(0,L.jsx)(i,{}),"aria-label":`Download release-plan-2.5.pdf`,onClick:()=>O(`Downloading release-plan-2.5.pdf`)})})]})}),e.map((e,t)=>(0,L.jsx)(w,{scrollAnchor:!0,children:(0,L.jsx)(C,{align:`end`,avatar:H,footer:`Just now`,children:(0,L.jsx)(v,{children:e})})},t))]}),(0,L.jsx)(De,{children:`Priya is typing…`}),(0,L.jsx)(ce,{value:n,onValueChange:r,onSubmit:e=>{t(t=>[...t,e.trim()]),r(``)},placeholder:`Reply to Priya…`,inputLabel:`Reply to Priya`,leading:(0,L.jsx)(m,{variant:`ghost`,size:`sm`,icon:(0,L.jsx)(l,{}),"aria-label":`Attach a file`,onClick:()=>O(`Attachments are not part of this demo`)}),onDictate:()=>r(t=>(t?`${t} `:``)+U[e.length%U.length])})]})}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{I=n(),o(),se(),u(),h(),f(),le(),de(),pe(),he(),oe(),xe(),ve(),we(),Te(),T(),D(),He(),Ae(),je(),We(),L=t(),R={title:`Playground/Workspace`,parameters:{layout:`padded`,docs:{description:{component:`A workspace app shell made of Sidebar (collapsible to the icon rail with the panel button, a projects group with sub pages, the workspace switcher in the footer), Breadcrumb, Command (a palette of pages, from the search item or ⌘K), Table (the members, in the card layout) and Pagination, Usage Bar (storage by project on Reports, with tooltips), Chart (Reports: weekly activity as stacked bars with a tooltip, members by role as a donut), Carousel (What’s new on Home, with indicators), Bubble, Message, Message Scroller and Attachment (a conversation on Inbox: avatars, the sender with a badge, grouped messages, reactions, a read receipt, Show more, a shared file and a typing line, scrolling with a fade and a jump-to-latest button; AI Chat Composer sends a reply, typed or dictated, which settles near the top), with Avatar, Badge, Button, Kbd and toasts, for trying the navigation components together before they are merged. Make the window narrow to see the sidebar start collapsed and open over the page. Use the toolbar to switch brand and colour scheme.`}}}},z=[{name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`},{name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`},{name:`Lena Fischer`,email:`lena@orbit.dev`,role:`Member`},{name:`Omar Haddad`,email:`omar@orbit.dev`,role:`Member`}],B=(e,t,n)=>(0,L.jsx)(g,{initials:e,name:t,style:{"--avatar-fill":`var(--ds-palette-${n}-solid)`,"--avatar-ink":`var(--ds-primary-foreground)`}}),V=B(`P`,`Priya Raman`,`lime`),H=B(`T`,`You`,`orange`),U=[`Perfect, see you Thursday.`,`Can you share the pricing numbers before the review?`,`I moved the invite to 2 PM and added the notes doc.`],W=[`Home`,`Inbox`,`Reports`,`Members`,`Settings`],G=[{title:`Command palette`,body:`Press ⌘K anywhere to jump to a page or a member.`,hue:`blue`},{title:`Storage reports`,body:`See which projects use your space on the Reports page.`,hue:`green`},{title:`Weekly activity`,body:`Edits and comments per day, with a tooltip on every bar.`,hue:`fuchsia`}],K=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`].map((e,t)=>({day:e,edits:[42,58,71,64,49,12,8][t],comments:[18,26,30,22,25,4,3][t]})),q=[{key:`edits`,label:`Edits`,color:`var(--ds-chart-7)`},{key:`comments`,label:`Comments`,color:`var(--ds-chart-3)`}],J=[{label:`Owner`,value:1,color:`var(--ds-chart-7)`},{label:`Admin`,value:1,color:`var(--ds-chart-3)`},{label:`Member`,value:5,color:`var(--ds-chart-5)`}],Y=[{name:`Orbit app`,gb:38,color:`var(--ds-chart-2)`},{name:`Marketing site`,gb:17,color:`var(--ds-chart-1)`},{name:`Archive`,gb:21,color:void 0}],X={display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:32,height:32,borderRadius:8,background:`var(--ds-sidebar-primary)`,color:`var(--ds-sidebar-primary-foreground)`},Z={render:function(){let[e,t]=(0,I.useState)(`Members`),[n,i]=(0,I.useState)(!1),[o,u]=(0,I.useState)(1),d=z.slice((o-1)*4,o*4),f=e=>{t(e),i(!1)};return(0,L.jsxs)(`div`,{onKeyDown:e=>{e.key===`k`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),i(!0))},children:[(0,L.jsxs)(Be,{style:{height:560,border:`1px solid var(--ds-border)`,borderRadius:16,overflow:`hidden`,background:`var(--ds-background)`},children:[(0,L.jsxs)(Ve,{"aria-label":`Orbit`,children:[(0,L.jsx)(Fe,{plain:!0,children:(0,L.jsx)(N,{children:(0,L.jsx)(M,{label:`Search`,icon:(0,L.jsx)(ee,{}),badge:(0,L.jsx)(ye,{size:`sm`,children:`⌘K`}),onClick:()=>i(!0)})})}),(0,L.jsxs)(Le,{children:[(0,L.jsxs)(N,{children:[(0,L.jsx)(M,{label:`Home`,icon:(0,L.jsx)(ae,{}),active:e===`Home`,onClick:()=>f(`Home`)}),(0,L.jsx)(M,{label:`Inbox`,icon:(0,L.jsx)(re,{}),badge:`3`,active:e===`Inbox`,onClick:()=>f(`Inbox`)}),(0,L.jsx)(M,{label:`Reports`,icon:(0,L.jsx)(ie,{}),active:e===`Reports`,onClick:()=>f(`Reports`)})]}),(0,L.jsxs)(N,{label:`Projects`,labelSize:`sm`,action:(0,L.jsx)(m,{variant:`ghost`,size:`xs`,icon:(0,L.jsx)(l,{}),"aria-label":`New project`,onClick:()=>O(`New project`,{description:`A real product would open the project form.`})}),children:[(0,L.jsxs)(M,{label:`Orbit app`,icon:(0,L.jsx)(s,{}),defaultOpen:!0,children:[(0,L.jsx)(M,{label:`Roadmap`,icon:(0,L.jsx)(a,{}),onClick:()=>O(`Roadmap`)}),(0,L.jsx)(M,{label:`Release notes`,icon:(0,L.jsx)(a,{}),onClick:()=>O(`Release notes`)})]}),(0,L.jsx)(M,{label:`Marketing site`,icon:(0,L.jsx)(s,{}),onClick:()=>O(`Marketing site`)})]}),(0,L.jsxs)(N,{label:`Team`,labelSize:`sm`,children:[(0,L.jsx)(M,{label:`Members`,icon:(0,L.jsx)(ne,{}),active:e===`Members`,onClick:()=>f(`Members`)}),(0,L.jsx)(M,{label:`Settings`,icon:(0,L.jsx)(r,{}),active:e===`Settings`,onClick:()=>f(`Settings`)})]})]}),(0,L.jsx)(ze,{children:(0,L.jsx)(N,{children:(0,L.jsx)(M,{size:`lg`,label:`Orbit`,description:`Team plan · 7 members`,icon:(0,L.jsx)(`span`,{style:X,children:(0,L.jsx)(te,{size:16})}),endIcon:(0,L.jsx)(c,{}),onClick:()=>O(`Switch workspace`,{description:`A real product would list your workspaces.`})})})})]}),(0,L.jsxs)(Re,{as:`div`,children:[(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:`10px 12px`,borderBottom:`1px solid var(--ds-border)`},children:[(0,L.jsx)(Ie,{}),(0,L.jsxs)(ue,{"aria-label":`Location`,children:[(0,L.jsx)(_,{href:`#orbit`,children:`Orbit`}),(0,L.jsx)(_,{current:!0,children:e})]})]}),(0,L.jsx)(`div`,{style:{padding:16,display:`grid`,gap:16,fontFamily:`var(--ds-font-sans)`},children:e===`Members`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(Pe,{variant:`card`,"aria-label":`Members`,children:[(0,L.jsx)(Ne,{children:(0,L.jsxs)(j,{children:[(0,L.jsx)(k,{children:`Name`}),(0,L.jsx)(k,{children:`Role`})]})}),(0,L.jsx)(Me,{children:d.map(e=>(0,L.jsxs)(j,{children:[(0,L.jsx)(A,{children:(0,L.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,L.jsx)(g,{size:`xs`,initials:e.name[0]}),(0,L.jsxs)(`span`,{style:{display:`grid`},children:[(0,L.jsx)(`span`,{children:e.name}),(0,L.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontSize:12,lineHeight:`16px`},children:e.email})]})]})}),(0,L.jsx)(A,{children:(0,L.jsx)(p,{border:e.role!==`Member`,children:e.role})})]},e.email))})]}),(0,L.jsx)(Oe,{page:o,pageCount:Math.ceil(z.length/4),onPageChange:u,"aria-label":`Members pages`})]}):e===`Inbox`?(0,L.jsx)(Ke,{}):e===`Home`?(0,L.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:480},children:[(0,L.jsx)(`span`,{style:{fontSize:14,lineHeight:`20px`,fontWeight:500,color:`var(--ds-foreground)`},children:`What's new`}),(0,L.jsx)(me,{"aria-label":`What's new`,indicators:!0,children:G.map(e=>(0,L.jsxs)(fe,{style:{display:`grid`,alignContent:`end`,gap:4,minHeight:140,padding:20,borderRadius:16,background:`var(--ds-palette-${e.hue}-tint)`,color:`var(--ds-palette-${e.hue}-text)`},children:[(0,L.jsx)(`span`,{style:{fontSize:16,lineHeight:`24px`,fontWeight:600},children:e.title}),(0,L.jsx)(`span`,{style:{fontSize:14,lineHeight:`20px`},children:e.body})]},e.title))})]}):e===`Reports`?(0,L.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:480},children:[(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12,fontSize:14,lineHeight:`20px`},children:[(0,L.jsx)(`span`,{id:`storage-title`,style:{fontWeight:500,color:`var(--ds-foreground)`},children:`Storage`}),(0,L.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`},children:`76 of 100 GB used · 4 GB syncing`})]}),(0,L.jsxs)(Ge,{"aria-labelledby":`storage-title`,axis:[`0 GB`,`25 GB`,`50 GB`,`75 GB`,`100 GB`],children:[Y.map(e=>(0,L.jsx)(P,{value:e.gb,color:e.color,label:`${e.name}, ${e.gb} GB`,tooltip:`${e.name} · ${e.gb} GB`},e.name)),(0,L.jsx)(P,{value:4,variant:`striped`,label:`Syncing, 4 GB`,tooltip:`Syncing · 4 GB`}),(0,L.jsx)(P,{value:20,variant:`primary`,label:`Free, 20 GB`})]}),(0,L.jsxs)(Ue,{"aria-label":`Storage by project`,children:[Y.map(e=>(0,L.jsx)(F,{color:e.color,children:e.name},e.name)),(0,L.jsx)(F,{variant:`striped`,children:`Syncing`}),(0,L.jsx)(F,{variant:`primary`,children:`Free`})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12,fontSize:14,lineHeight:`20px`,marginTop:16},children:[(0,L.jsx)(`span`,{id:`activity-title`,style:{fontWeight:500,color:`var(--ds-foreground)`},children:`Activity this week`}),(0,L.jsx)(y,{"aria-label":`Activity series`,items:q})]}),(0,L.jsx)(ge,{"aria-labelledby":`activity-title`,data:K,index:`day`,series:q,stacked:!0,height:160,grid:4}),(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:24,marginTop:16},children:[(0,L.jsx)(_e,{"aria-label":`Members by role`,variant:`donut`,data:J,size:120,value:`7`,caption:`Members`}),(0,L.jsx)(y,{variant:`totals`,"aria-label":`Members by role`,style:{flex:1},items:J.map(e=>({label:e.label,color:e.color,value:e.value}))})]})]}):(0,L.jsxs)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`,fontSize:14},children:[e,` is a placeholder page in this playground; open Home, Members or Reports to see more.`]})})]})]}),(0,L.jsxs)(Se,{open:n,onOpenChange:i,label:`Go to`,children:[(0,L.jsx)(be,{placeholder:`Go to a page or a member…`}),(0,L.jsxs)(Ce,{children:[(0,L.jsx)(b,{heading:`Pages`,children:W.map(e=>(0,L.jsx)(x,{onSelect:()=>f(e),children:e},e))}),(0,L.jsx)(b,{heading:`Members`,children:z.map(e=>(0,L.jsx)(x,{icon:(0,L.jsx)(g,{size:`xs`,initials:e.name[0]}),shortcut:e.role,keywords:[e.email],onSelect:()=>f(`Members`),children:e.name},e.email))})]})]}),(0,L.jsx)(ke,{})]})}},Q=[`App`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
                </> : page === 'Inbox' ? <InboxThread /> : page === 'Home' ? <div style={{
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as App,Q as __namedExportsOrder,R as default};