import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BMrT3JZa.js";import{n as r,t as i}from"./Button-Dq0_RqAt.js";import{n as a,t as o}from"./Alert-BxJAJakE.js";import{i as s,n as c,r as l,t as u}from"./AlertDialog-B4wKMGUj.js";import{S as d,a as f,b as p,d as m,g as h,h as ee,m as te,t as ne,y as re}from"./react-KRSfzNpH.js";import{n as g,t as _}from"./Avatar-CortS-5Z.js";import{n as v,t as y}from"./AvatarGroup-B4XBVwBT.js";import{n as b,t as x}from"./Badge-CtCTq6Af.js";import{c as ie,d as ae,h as S,i as oe,l as se,n as C,o as w,t as T}from"./DropdownMenu-aXE4TvWR.js";import{i as E,r as D,t as ce}from"./Input-CRDiCgTm.js";import{r as O,t as le}from"./ButtonGroup-B7LxjzII.js";import{i as k,n as A,o as j,r as M,t as N}from"./Card-qtzgDGRp.js";import{n as P,t as F}from"./ContextMenu-gB3gB7L-.js";import{n as I,t as L}from"./Marker-DihdfLrq.js";import{i as R,n as z,r as B}from"./Sonner-CzsAHn46.js";import{n as V,t as H}from"./Tooltip-BIHBATKA.js";import{n as U,t as ue}from"./Separator-Bk-gWpul.js";import{n as W,t as de}from"./Spinner-hO6I19aQ.js";var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{G=n(),h(),a(),s(),g(),v(),b(),r(),O(),j(),P(),S(),E(),I(),U(),W(),B(),V(),K=t(),q=[{id:`mira`,name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{id:`jonas`,name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{id:`priya`,name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{id:`tomas`,name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`,pending:!0},{id:`aiko`,name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`,pending:!0}],J={Owner:`violet`,Admin:`blue`,Member:`neutral`},Y=e=>e.split(` `).map(e=>e[0]).join(``),X={title:`Playground/Team`,parameters:{layout:`padded`,docs:{description:{component:`A team settings page made of Card, Avatar, Avatar Group, Badge, Button Group, Separator, Spinner, Input with Input Group Dropdown, Dropdown Menu, Context Menu (right-click a member), Tooltip, Alert, Alert Dialog, Marker and toasts, for trying components together before they are merged. Use the toolbar to switch brand and colour scheme.`}}}},Z={render:function(){let[e,t]=(0,G.useState)(q),[n,r]=(0,G.useState)(`all`),[a,s]=(0,G.useState)(``),[h,g]=(0,G.useState)(`Name`),[v,b]=(0,G.useState)(!0),[S,E]=(0,G.useState)(null),[O,j]=(0,G.useState)([`Mira created the workspace`,`Jonas joined as Admin`]),P=e=>j(t=>[...t,e]),I=e.filter(e=>e.pending),B=e.filter(e=>(n===`all`||n===`pending`==!!e.pending)&&(h===`Name`?e.name:e.email).toLowerCase().includes(a.trim().toLowerCase())),V=(e,n)=>{t(t=>t.map(t=>t.id===e.id?{...t,role:n}:t)),P(`${e.name} is now ${n}`),R.success(`${e.name} is now ${n}`)},U=e=>R.info(`Invite sent again to ${e.email}`),W=e=>(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(ie,{label:`Role`,value:e.role,onValueChange:t=>V(e,t),children:[`Admin`,`Member`].map(t=>(0,K.jsx)(se,{value:t,disabled:e.role===`Owner`,children:t},t))}),(0,K.jsx)(ae,{}),e.pending&&(0,K.jsx)(w,{icon:(0,K.jsx)(te,{}),onClick:()=>U(e),children:`Resend invite`}),(0,K.jsx)(w,{icon:(0,K.jsx)(re,{}),onClick:()=>R(`Email to ${e.email}`,{description:`Your mail app opens in a real product.`}),children:`Send email`}),(0,K.jsx)(w,{type:`destructive`,icon:(0,K.jsx)(f,{}),disabled:e.role===`Owner`,onClick:()=>E(e),children:`Remove from team`})]});return(0,K.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 560px) 280px`,gap:16,alignItems:`start`,fontFamily:`var(--ds-font-sans)`},children:[(0,K.jsxs)(N,{as:`section`,"aria-label":`Team members`,children:[(0,K.jsx)(k,{title:`Team members`,description:`Invite people and choose what they can do.`,action:(0,K.jsx)(T,{align:`end`,trigger:(0,K.jsx)(i,{variant:`outline`,size:`sm`,leadingIcon:(0,K.jsx)(m,{}),children:`Invite`}),children:(0,K.jsxs)(oe,{label:`Invite as`,children:[(0,K.jsx)(w,{icon:(0,K.jsx)(ee,{}),onClick:()=>R.success(`Invite link for Admins copied`),children:`Admin`}),(0,K.jsx)(w,{icon:(0,K.jsx)(m,{}),onClick:()=>R.success(`Invite link for Members copied`),children:`Member`})]})})}),(0,K.jsx)(A,{children:(0,K.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[I.length>0&&(0,K.jsx)(o,{title:`${I.length} ${I.length===1?`invite is`:`invites are`} waiting`,description:`People join when they accept the email invite.`,action:(0,K.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>R.info(`${I.length} invites sent again`),children:`Resend all`})}),(0,K.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`},children:[(0,K.jsx)(le,{"aria-label":`Show`,children:[`all`,`active`,`pending`].map(e=>(0,K.jsx)(i,{variant:n===e?`secondary`:`outline`,size:`sm`,"aria-pressed":n===e,onClick:()=>r(e),children:e[0].toUpperCase()+e.slice(1)},e))}),(0,K.jsx)(`div`,{style:{flex:1,minWidth:200},children:(0,K.jsx)(ce,{"aria-label":`Search members`,placeholder:`Search`,value:a,onChange:e=>s(e.currentTarget.value),leadIcon:(0,K.jsx)(d,{}),action:(0,K.jsx)(T,{align:`end`,trigger:(0,K.jsx)(D,{"aria-label":`Search in: ${h}`,children:h}),children:[`Name`,`Email`].map(e=>(0,K.jsx)(w,{onClick:()=>g(e),children:e},e))})})}),(0,K.jsx)(T,{align:`end`,trigger:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,K.jsx)(ne,{}),"aria-label":`View options`}),children:(0,K.jsx)(C,{checked:v,onCheckedChange:b,children:`Show roles`})})]}),(0,K.jsx)(`ul`,{"aria-label":`Members`,style:{display:`grid`,gap:4,margin:0,padding:0,listStyle:`none`},children:B.map(e=>(0,K.jsx)(`li`,{children:(0,K.jsx)(F,{"aria-label":`${e.name} actions`,trigger:(0,K.jsxs)(`div`,{tabIndex:0,style:{display:`flex`,alignItems:`center`,gap:12,padding:8,borderRadius:8,outlineOffset:2},children:[(0,K.jsx)(_,{size:`sm`,initials:Y(e.name),name:e.name}),(0,K.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,K.jsx)(`div`,{style:{color:`var(--ds-foreground)`,fontSize:14,fontWeight:500},children:e.name}),(0,K.jsx)(`div`,{style:{color:`var(--ds-muted-foreground)`,fontSize:13},children:e.email})]}),e.pending&&(0,K.jsx)(x,{size:`sm`,color:`orange`,dot:!0,children:`Pending`}),v&&(0,K.jsx)(x,{size:`sm`,color:J[e.role],children:e.role}),(0,K.jsx)(T,{align:`end`,trigger:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,K.jsx)(p,{}),"aria-label":`More actions for ${e.name}`}),children:W(e)})]}),children:W(e)})},e.id))}),B.length===0&&(0,K.jsx)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`,fontSize:14,textAlign:`center`},children:`No members match.`})]})}),(0,K.jsxs)(M,{justify:`between`,muted:!0,children:[(0,K.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`var(--ds-muted-foreground)`,fontSize:13},children:[(0,K.jsx)(y,{size:`sm`,max:3,children:e.map(e=>(0,K.jsx)(_,{initials:Y(e.name),name:e.name},e.id))}),e.length,` of 10 seats used`,(0,K.jsx)(ue,{orientation:`vertical`,style:{height:16}}),I.length,` pending`]}),(0,K.jsx)(H,{content:`Right-click a member, or press Shift+F10 on it, for the same actions`,children:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,children:`Tips`})})]})]}),(0,K.jsxs)(N,{as:`section`,size:`sm`,"aria-label":`Activity`,children:[(0,K.jsx)(k,{title:`Activity`,action:(0,K.jsx)(de,{size:`sm`,variant:`gradient`,label:`Syncing activity`})}),(0,K.jsx)(A,{children:(0,K.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,K.jsx)(L,{variant:`separator`,children:`Today`}),O.map((e,t)=>(0,K.jsx)(L,{children:e},t)),(0,K.jsx)(L,{loading:!0,children:`Syncing with the directory…`})]})})]}),(0,K.jsxs)(u,{open:S!==null,onOpenChange:e=>!e&&E(null),variant:`destructive`,size:`sm`,title:`Remove ${S?.name??``}?`,description:`They lose access to the workspace at once. You can invite them again later.`,children:[(0,K.jsx)(l,{children:`Cancel`}),(0,K.jsx)(c,{variant:`destructive`,onClick:()=>{S&&(t(e=>e.filter(e=>e.id!==S.id)),P(`${S.name} was removed`),R(`${S.name} was removed`,{action:{label:`Undo`,onClick:()=>t(e=>[...e,S])}}))},children:`Remove`})]}),(0,K.jsx)(z,{})]})}},Q=[`Members`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [members, setMembers] = useState(initialMembers);
    const [view, setView] = useState<View>('all');
    const [query, setQuery] = useState('');
    const [searchIn, setSearchIn] = useState<'Name' | 'Email'>('Name');
    const [showRoles, setShowRoles] = useState(true);
    const [removing, setRemoving] = useState<Member | null>(null);
    const [activity, setActivity] = useState<ReactNode[]>(['Mira created the workspace', 'Jonas joined as Admin']);
    const log = (line: string) => setActivity(lines => [...lines, line]);
    const pending = members.filter(m => m.pending);
    const shown = members.filter(m => (view === 'all' || view === 'pending' === Boolean(m.pending)) && (searchIn === 'Name' ? m.name : m.email).toLowerCase().includes(query.trim().toLowerCase()));
    const setRole = (member: Member, role: Role) => {
      setMembers(list => list.map(m => m.id === member.id ? {
        ...m,
        role
      } : m));
      log(\`\${member.name} is now \${role}\`);
      toast.success(\`\${member.name} is now \${role}\`);
    };
    const resend = (member: Member) => toast.info(\`Invite sent again to \${member.email}\`);

    // The same actions in the row's "More" menu and in its context menu.
    const actions = (member: Member) => <>
        <DropdownMenuRadioGroup label="Role" value={member.role} onValueChange={role => setRole(member, role as Role)}>
          {(['Admin', 'Member'] as const).map(role => <DropdownMenuRadioItem key={role} value={role} disabled={member.role === 'Owner'}>
              {role}
            </DropdownMenuRadioItem>)}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        {member.pending && <DropdownMenuItem icon={<RiRefreshLine />} onClick={() => resend(member)}>
            Resend invite
          </DropdownMenuItem>}
        <DropdownMenuItem icon={<RiMailLine />} onClick={() => toast(\`Email to \${member.email}\`, {
        description: 'Your mail app opens in a real product.'
      })}>
          Send email
        </DropdownMenuItem>
        <DropdownMenuItem type="destructive" icon={<RiDeleteBinLine />} disabled={member.role === 'Owner'} onClick={() => setRemoving(member)}>
          Remove from team
        </DropdownMenuItem>
      </>;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 560px) 280px',
      gap: 16,
      alignItems: 'start',
      fontFamily: 'var(--ds-font-sans)'
    }}>
        <Card as="section" aria-label="Team members">
          <CardHeader title="Team members" description="Invite people and choose what they can do." action={<DropdownMenu align="end" trigger={<Button variant="outline" size="sm" leadingIcon={<RiUserAddLine />}>
                    Invite
                  </Button>}>
                <DropdownMenuGroup label="Invite as">
                  <DropdownMenuItem icon={<RiShieldUserLine />} onClick={() => toast.success('Invite link for Admins copied')}>
                    Admin
                  </DropdownMenuItem>
                  <DropdownMenuItem icon={<RiUserAddLine />} onClick={() => toast.success('Invite link for Members copied')}>
                    Member
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenu>} />
          <CardContent>
            <div style={{
            display: 'grid',
            gap: 16
          }}>
              {pending.length > 0 && <Alert title={\`\${pending.length} \${pending.length === 1 ? 'invite is' : 'invites are'} waiting\`} description="People join when they accept the email invite." action={<Button variant="outline" size="sm" onClick={() => toast.info(\`\${pending.length} invites sent again\`)}>
                      Resend all
                    </Button>} />}
              <div style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
                <ButtonGroup aria-label="Show">
                  {(['all', 'active', 'pending'] as const).map(v => <Button key={v} variant={view === v ? 'secondary' : 'outline'} size="sm" aria-pressed={view === v} onClick={() => setView(v)}>
                      {v[0].toUpperCase() + v.slice(1)}
                    </Button>)}
                </ButtonGroup>
                <div style={{
                flex: 1,
                minWidth: 200
              }}>
                  <Input aria-label="Search members" placeholder="Search" value={query} onChange={event => setQuery(event.currentTarget.value)} leadIcon={<RiSearchLine />} action={<DropdownMenu align="end" trigger={<InputDropdown aria-label={\`Search in: \${searchIn}\`}>{searchIn}</InputDropdown>}>
                        {(['Name', 'Email'] as const).map(label => <DropdownMenuItem key={label} onClick={() => setSearchIn(label)}>
                            {label}
                          </DropdownMenuItem>)}
                      </DropdownMenu>} />
                </div>
                <DropdownMenu align="end" trigger={<Button variant="ghost" size="sm" icon={<RiFilter3Line />} aria-label="View options" />}>
                  <DropdownMenuCheckboxItem checked={showRoles} onCheckedChange={setShowRoles}>
                    Show roles
                  </DropdownMenuCheckboxItem>
                </DropdownMenu>
              </div>
              <ul aria-label="Members" style={{
              display: 'grid',
              gap: 4,
              margin: 0,
              padding: 0,
              listStyle: 'none'
            }}>
                {shown.map(member => <li key={member.id}>
                    <ContextMenu aria-label={\`\${member.name} actions\`} trigger={<div tabIndex={0} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: 8,
                  borderRadius: 8,
                  outlineOffset: 2
                }}>
                          <Avatar size="sm" initials={initials(member.name)} name={member.name} />
                          <div style={{
                    flex: 1,
                    minWidth: 0
                  }}>
                            <div style={{
                      color: 'var(--ds-foreground)',
                      fontSize: 14,
                      fontWeight: 500
                    }}>{member.name}</div>
                            <div style={{
                      color: 'var(--ds-muted-foreground)',
                      fontSize: 13
                    }}>{member.email}</div>
                          </div>
                          {member.pending && <Badge size="sm" color="orange" dot>
                              Pending
                            </Badge>}
                          {showRoles && <Badge size="sm" color={roleColor[member.role]}>
                              {member.role}
                            </Badge>}
                          <DropdownMenu align="end" trigger={<Button variant="ghost" size="sm" icon={<RiMoreLine />} aria-label={\`More actions for \${member.name}\`} />}>
                            {actions(member)}
                          </DropdownMenu>
                        </div>}>
                      {actions(member)}
                    </ContextMenu>
                  </li>)}
              </ul>
              {shown.length === 0 && <p style={{
              margin: 0,
              color: 'var(--ds-muted-foreground)',
              fontSize: 14,
              textAlign: 'center'
            }}>No members match.</p>}
            </div>
          </CardContent>
          <CardFooter justify="between" muted>
            <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: 'var(--ds-muted-foreground)',
            fontSize: 13
          }}>
              <AvatarGroup size="sm" max={3}>
                {members.map(m => <Avatar key={m.id} initials={initials(m.name)} name={m.name} />)}
              </AvatarGroup>
              {members.length} of 10 seats used
              <Separator orientation="vertical" style={{
              height: 16
            }} />
              {pending.length} pending
            </span>
            <Tooltip content="Right-click a member, or press Shift+F10 on it, for the same actions">
              <Button variant="ghost" size="sm">
                Tips
              </Button>
            </Tooltip>
          </CardFooter>
        </Card>

        <Card as="section" size="sm" aria-label="Activity">
          <CardHeader title="Activity" action={<Spinner size="sm" variant="gradient" label="Syncing activity" />} />
          <CardContent>
            <div style={{
            display: 'grid',
            gap: 12
          }}>
              <Marker variant="separator">Today</Marker>
              {activity.map((line, i) => <Marker key={i}>{line}</Marker>)}
              <Marker loading>Syncing with the directory…</Marker>
            </div>
          </CardContent>
        </Card>

        <AlertDialog open={removing !== null} onOpenChange={open => !open && setRemoving(null)} variant="destructive" size="sm" title={\`Remove \${removing?.name ?? ''}?\`} description="They lose access to the workspace at once. You can invite them again later.">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={() => {
          if (!removing) return;
          setMembers(list => list.filter(m => m.id !== removing.id));
          log(\`\${removing.name} was removed\`);
          toast(\`\${removing.name} was removed\`, {
            action: {
              label: 'Undo',
              onClick: () => setMembers(list => [...list, removing])
            }
          });
        }}>
            Remove
          </AlertDialogAction>
        </AlertDialog>
        <Toaster />
      </div>;
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Members,Q as __namedExportsOrder,X as default};