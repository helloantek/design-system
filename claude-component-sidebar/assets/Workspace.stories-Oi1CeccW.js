import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-Dp1OFmqs.js";import{n as r,t as ee}from"./Button-DkY45Jrq.js";import{$ as i,B as a,J as o,K as s,S as te,Y as c,_t as ne,et as l,it as u,lt as d,o as f,st as p}from"./react-BJaW-SEY.js";import{n as m,t as h}from"./Avatar-Ct8Kpl_S.js";import{n as g,t as _}from"./Badge-cJ1k0X6d.js";import{i as v,r as y,t as re}from"./Breadcrumb-BDTc3ipy.js";import{r as ie,t as ae}from"./Kbd-D8j87MGZ.js";import{a as oe,i as b,l as se,n as ce,o as x,s as S}from"./Command-BhS-n12o.js";import{n as C,t as w}from"./Pagination-L498ry9r.js";import{i as T,n as E,r as D}from"./Sonner-aiQNFoHV.js";import{a as O,c as k,n as A,o as j,r as M,s as N,t as P}from"./Table--FI-3wnj.js";import{a as F,c as I,i as L,l as R,n as z,o as B,r as V,s as H,t as U,u as W}from"./Sidebar-CwWWSJUX.js";var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{G=n(),l(),m(),g(),v(),r(),se(),ie(),C(),W(),D(),k(),K=t(),q={title:`Playground/Workspace`,parameters:{layout:`padded`,docs:{description:{component:`A workspace app shell made of Sidebar (collapsible to the icon rail with the panel button, a projects group with sub pages, the workspace switcher in the footer), Breadcrumb, Command (a palette of pages, from the search item or ⌘K), Table (the members, in the card layout) and Pagination, with Avatar, Badge, Button, Kbd and toasts, for trying the navigation components together before they are merged. Make the window narrow to see the sidebar start collapsed and open over the page. Use the toolbar to switch brand and colour scheme.`}}}},J=[{name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`},{name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`},{name:`Lena Fischer`,email:`lena@orbit.dev`,role:`Member`},{name:`Omar Haddad`,email:`omar@orbit.dev`,role:`Member`}],Y=[`Home`,`Inbox`,`Reports`,`Members`,`Settings`],X={display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:32,height:32,borderRadius:8,background:`var(--ds-sidebar-primary)`,color:`var(--ds-sidebar-primary-foreground)`},Z={render:function(){let[e,t]=(0,G.useState)(`Members`),[n,r]=(0,G.useState)(!1),[l,m]=(0,G.useState)(1),g=J.slice((l-1)*4,l*4),v=e=>{t(e),r(!1)};return(0,K.jsxs)(`div`,{onKeyDown:e=>{e.key===`k`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),r(!0))},children:[(0,K.jsxs)(H,{style:{height:560,border:`1px solid var(--ds-border)`,borderRadius:16,overflow:`hidden`,background:`var(--ds-background)`},children:[(0,K.jsxs)(U,{"aria-label":`Orbit`,children:[(0,K.jsx)(F,{plain:!0,children:(0,K.jsx)(L,{children:(0,K.jsx)(I,{label:`Search`,icon:(0,K.jsx)(d,{}),badge:(0,K.jsx)(ae,{size:`sm`,children:`⌘K`}),onClick:()=>r(!0)})})}),(0,K.jsxs)(z,{children:[(0,K.jsxs)(L,{children:[(0,K.jsx)(I,{label:`Home`,icon:(0,K.jsx)(u,{}),active:e===`Home`,onClick:()=>v(`Home`)}),(0,K.jsx)(I,{label:`Inbox`,icon:(0,K.jsx)(c,{}),badge:`3`,active:e===`Inbox`,onClick:()=>v(`Inbox`)}),(0,K.jsx)(I,{label:`Reports`,icon:(0,K.jsx)(s,{}),active:e===`Reports`,onClick:()=>v(`Reports`)})]}),(0,K.jsxs)(L,{label:`Projects`,labelSize:`sm`,action:(0,K.jsx)(ee,{variant:`ghost`,size:`xs`,icon:(0,K.jsx)(p,{}),"aria-label":`New project`,onClick:()=>T(`New project`,{description:`A real product would open the project form.`})}),children:[(0,K.jsxs)(I,{label:`Orbit app`,icon:(0,K.jsx)(i,{}),defaultOpen:!0,children:[(0,K.jsx)(I,{label:`Roadmap`,icon:(0,K.jsx)(f,{}),onClick:()=>T(`Roadmap`)}),(0,K.jsx)(I,{label:`Release notes`,icon:(0,K.jsx)(f,{}),onClick:()=>T(`Release notes`)})]}),(0,K.jsx)(I,{label:`Marketing site`,icon:(0,K.jsx)(i,{}),onClick:()=>T(`Marketing site`)})]}),(0,K.jsxs)(L,{label:`Team`,labelSize:`sm`,children:[(0,K.jsx)(I,{label:`Members`,icon:(0,K.jsx)(a,{}),active:e===`Members`,onClick:()=>v(`Members`)}),(0,K.jsx)(I,{label:`Settings`,icon:(0,K.jsx)(te,{}),active:e===`Settings`,onClick:()=>v(`Settings`)})]})]}),(0,K.jsx)(V,{children:(0,K.jsx)(L,{children:(0,K.jsx)(I,{size:`lg`,label:`Orbit`,description:`Team plan · 7 members`,icon:(0,K.jsx)(`span`,{style:X,children:(0,K.jsx)(ne,{size:16})}),endIcon:(0,K.jsx)(o,{}),onClick:()=>T(`Switch workspace`,{description:`A real product would list your workspaces.`})})})})]}),(0,K.jsxs)(B,{as:`div`,children:[(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:`10px 12px`,borderBottom:`1px solid var(--ds-border)`},children:[(0,K.jsx)(R,{}),(0,K.jsxs)(re,{"aria-label":`Location`,children:[(0,K.jsx)(y,{href:`#orbit`,children:`Orbit`}),(0,K.jsx)(y,{current:!0,children:e})]})]}),(0,K.jsx)(`div`,{style:{padding:16,display:`grid`,gap:16,fontFamily:`var(--ds-font-sans)`},children:e===`Members`?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(P,{variant:`card`,"aria-label":`Members`,children:[(0,K.jsx)(j,{children:(0,K.jsxs)(N,{children:[(0,K.jsx)(O,{children:`Name`}),(0,K.jsx)(O,{children:`Role`})]})}),(0,K.jsx)(A,{children:g.map(e=>(0,K.jsxs)(N,{children:[(0,K.jsx)(M,{children:(0,K.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,K.jsx)(h,{size:`xs`,initials:e.name[0]}),(0,K.jsxs)(`span`,{style:{display:`grid`},children:[(0,K.jsx)(`span`,{children:e.name}),(0,K.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontSize:12,lineHeight:`16px`},children:e.email})]})]})}),(0,K.jsx)(M,{children:(0,K.jsx)(_,{border:e.role!==`Member`,children:e.role})})]},e.email))})]}),(0,K.jsx)(w,{page:l,pageCount:Math.ceil(J.length/4),onPageChange:m,"aria-label":`Members pages`})]}):(0,K.jsxs)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`,fontSize:14},children:[e,` is a placeholder page in this playground; open Members to see the table.`]})})]})]}),(0,K.jsxs)(ce,{open:n,onOpenChange:r,label:`Go to`,children:[(0,K.jsx)(oe,{placeholder:`Go to a page or a member…`}),(0,K.jsxs)(S,{children:[(0,K.jsx)(b,{heading:`Pages`,children:Y.map(e=>(0,K.jsx)(x,{onSelect:()=>v(e),children:e},e))}),(0,K.jsx)(b,{heading:`Members`,children:J.map(e=>(0,K.jsx)(x,{icon:(0,K.jsx)(h,{size:`xs`,initials:e.name[0]}),shortcut:e.role,keywords:[e.email],onSelect:()=>v(`Members`),children:e.name},e.email))})]})]}),(0,K.jsx)(E,{})]})}},Q=[`App`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
                </> : <p style={{
              margin: 0,
              color: 'var(--ds-muted-foreground)',
              fontSize: 14
            }}>{page} is a placeholder page in this playground; open Members to see the table.</p>}
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as App,Q as __namedExportsOrder,q as default};