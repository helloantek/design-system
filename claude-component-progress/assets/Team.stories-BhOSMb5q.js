import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-DlYzGY-9.js";import{n as r,t as i}from"./Button-m4AM0iJQ.js";import{n as a,t as o}from"./Alert-QMJmu39H.js";import{i as s,n as ee,r as te,t as c}from"./AlertDialog-DhnhpEfs.js";import{S as l,a as u,b as d,d as f,g as p,h as ne,m as re,t as ie,y as ae}from"./react-C-kGSEFF.js";import{n as m,t as h}from"./Avatar-UqWDzzW1.js";import{n as g,t as oe}from"./AvatarGroup-C4od7fJj.js";import{n as _,t as v}from"./Badge-eFcTWDr-.js";import{c as y,d as se,h as b,i as ce,l as le,n as x,o as S,t as C}from"./DropdownMenu-nLhuJLv8.js";import{i as w,r as T,t as ue}from"./Input-BNjPHmUv.js";import{r as E,t as de}from"./ButtonGroup-C8lMRTcM.js";import{i as D,n as O,o as k,r as A,t as j}from"./Card-UsC7hcF7.js";import{n as M,t as N}from"./ContextMenu-CqgM1MB0.js";import{n as P,t as F}from"./Empty-BdJtD2Ke.js";import{n as I,t as L}from"./Tooltip-C9WOkHXO.js";import{n as R,r as z,t as B}from"./Kbd-Bqnt803g.js";import{n as V,t as H}from"./Marker-CDx_lZ7r.js";import{i as U,n as fe,r as W}from"./Sonner-CXRpxGdp.js";import{r as pe,t as me}from"./Progress-DbGCJibN.js";import{n as he,t as ge}from"./Separator-D4VnL6Bx.js";import{n as _e,t as ve}from"./Spinner-hleH_ce7.js";var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{G=n(),p(),a(),s(),m(),g(),_(),r(),E(),k(),M(),b(),P(),w(),z(),V(),pe(),he(),_e(),W(),I(),K=t(),q=[{id:`mira`,name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{id:`jonas`,name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{id:`priya`,name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{id:`tomas`,name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`,pending:!0},{id:`aiko`,name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`,pending:!0}],J={Owner:`violet`,Admin:`blue`,Member:`neutral`},Y=e=>e.split(` `).map(e=>e[0]).join(``),X={title:`Playground/Team`,parameters:{layout:`padded`,docs:{description:{component:`A team settings page made of Card, Avatar, Avatar Group, Badge, Button Group, Separator, Spinner, Kbd, Progress, Empty (search for someone who is not there), Input with Input Group Dropdown, Dropdown Menu, Context Menu (right-click a member), Tooltip, Alert, Alert Dialog, Marker and toasts, for trying components together before they are merged. Use the toolbar to switch brand and colour scheme.`}}}},Z={render:function(){let[e,t]=(0,G.useState)(q),[n,r]=(0,G.useState)(`all`),[a,s]=(0,G.useState)(``),[p,m]=(0,G.useState)(`Name`),[g,_]=(0,G.useState)(!0),[b,w]=(0,G.useState)(null),[E,k]=(0,G.useState)([`Mira created the workspace`,`Jonas joined as Admin`]),M=e=>k(t=>[...t,e]),P=e.filter(e=>e.pending),I=e.filter(e=>(n===`all`||n===`pending`==!!e.pending)&&(p===`Name`?e.name:e.email).toLowerCase().includes(a.trim().toLowerCase())),z=(e,n)=>{t(t=>t.map(t=>t.id===e.id?{...t,role:n}:t)),M(`${e.name} is now ${n}`),U.success(`${e.name} is now ${n}`)},V=e=>U.info(`Invite sent again to ${e.email}`),W=e=>(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(y,{label:`Role`,value:e.role,onValueChange:t=>z(e,t),children:[`Admin`,`Member`].map(t=>(0,K.jsx)(le,{value:t,disabled:e.role===`Owner`,children:t},t))}),(0,K.jsx)(se,{}),e.pending&&(0,K.jsx)(S,{icon:(0,K.jsx)(re,{}),onClick:()=>V(e),children:`Resend invite`}),(0,K.jsx)(S,{icon:(0,K.jsx)(ae,{}),onClick:()=>U(`Email to ${e.email}`,{description:`Your mail app opens in a real product.`}),children:`Send email`}),(0,K.jsx)(S,{type:`destructive`,icon:(0,K.jsx)(u,{}),disabled:e.role===`Owner`,onClick:()=>w(e),children:`Remove from team`})]});return(0,K.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 560px) 280px`,gap:16,alignItems:`start`,fontFamily:`var(--ds-font-sans)`},children:[(0,K.jsxs)(j,{as:`section`,"aria-label":`Team members`,children:[(0,K.jsx)(D,{title:`Team members`,description:`Invite people and choose what they can do.`,action:(0,K.jsx)(C,{align:`end`,trigger:(0,K.jsx)(i,{variant:`outline`,size:`sm`,leadingIcon:(0,K.jsx)(f,{}),children:`Invite`}),children:(0,K.jsxs)(ce,{label:`Invite as`,children:[(0,K.jsx)(S,{icon:(0,K.jsx)(ne,{}),onClick:()=>U.success(`Invite link for Admins copied`),children:`Admin`}),(0,K.jsx)(S,{icon:(0,K.jsx)(f,{}),onClick:()=>U.success(`Invite link for Members copied`),children:`Member`})]})})}),(0,K.jsx)(O,{children:(0,K.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[P.length>0&&(0,K.jsx)(o,{title:`${P.length} ${P.length===1?`invite is`:`invites are`} waiting`,description:`People join when they accept the email invite.`,action:(0,K.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>U.info(`${P.length} invites sent again`),children:`Resend all`})}),(0,K.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`},children:[(0,K.jsx)(de,{"aria-label":`Show`,children:[`all`,`active`,`pending`].map(e=>(0,K.jsx)(i,{variant:n===e?`secondary`:`outline`,size:`sm`,"aria-pressed":n===e,onClick:()=>r(e),children:e[0].toUpperCase()+e.slice(1)},e))}),(0,K.jsx)(`div`,{style:{flex:1,minWidth:200},children:(0,K.jsx)(ue,{"aria-label":`Search members`,placeholder:`Search`,value:a,onChange:e=>s(e.currentTarget.value),leadIcon:(0,K.jsx)(l,{}),action:(0,K.jsx)(C,{align:`end`,trigger:(0,K.jsx)(T,{"aria-label":`Search in: ${p}`,children:p}),children:[`Name`,`Email`].map(e=>(0,K.jsx)(S,{onClick:()=>m(e),children:e},e))})})}),(0,K.jsx)(C,{align:`end`,trigger:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,K.jsx)(ie,{}),"aria-label":`View options`}),children:(0,K.jsx)(x,{checked:g,onCheckedChange:_,children:`Show roles`})})]}),(0,K.jsx)(`ul`,{"aria-label":`Members`,style:{display:`grid`,gap:4,margin:0,padding:0,listStyle:`none`},children:I.map(e=>(0,K.jsx)(`li`,{children:(0,K.jsx)(N,{"aria-label":`${e.name} actions`,trigger:(0,K.jsxs)(`div`,{tabIndex:0,style:{display:`flex`,alignItems:`center`,gap:12,padding:8,borderRadius:8,outlineOffset:2},children:[(0,K.jsx)(h,{size:`sm`,initials:Y(e.name),name:e.name}),(0,K.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,K.jsx)(`div`,{style:{color:`var(--ds-foreground)`,fontSize:14,fontWeight:500},children:e.name}),(0,K.jsx)(`div`,{style:{color:`var(--ds-muted-foreground)`,fontSize:13},children:e.email})]}),e.pending&&(0,K.jsx)(v,{size:`sm`,color:`orange`,dot:!0,children:`Pending`}),g&&(0,K.jsx)(v,{size:`sm`,color:J[e.role],children:e.role}),(0,K.jsx)(C,{align:`end`,trigger:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,K.jsx)(d,{}),"aria-label":`More actions for ${e.name}`}),children:W(e)})]}),children:W(e)})},e.id))}),I.length===0&&(0,K.jsx)(F,{icon:(0,K.jsx)(l,{}),title:`No members match`,titleAs:`p`,description:`Try another name or email, or show everyone.`,actions:(0,K.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>{s(``),r(`all`)},children:`Show everyone`})})]})}),(0,K.jsxs)(A,{justify:`between`,muted:!0,children:[(0,K.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`var(--ds-muted-foreground)`,fontSize:13},children:[(0,K.jsx)(oe,{size:`sm`,max:3,children:e.map(e=>(0,K.jsx)(h,{initials:Y(e.name),name:e.name},e.id))}),e.length,` of 10 seats used`,(0,K.jsx)(ge,{orientation:`vertical`,style:{height:16}}),P.length,` pending`]}),(0,K.jsx)(L,{content:(0,K.jsxs)(K.Fragment,{children:[`Right-click a member, or press`,` `,(0,K.jsxs)(R,{children:[(0,K.jsx)(B,{variant:`inverted`,size:`sm`,children:`Shift`}),(0,K.jsx)(B,{variant:`inverted`,size:`sm`,children:`F10`})]}),` `,`on it, for the same actions`]}),children:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,children:`Tips`})})]})]}),(0,K.jsxs)(j,{as:`section`,size:`sm`,"aria-label":`Activity`,children:[(0,K.jsx)(D,{title:`Activity`,action:(0,K.jsx)(ve,{size:`sm`,variant:`gradient`,label:`Syncing activity`})}),(0,K.jsx)(O,{children:(0,K.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,K.jsx)(me,{label:`Seats`,value:e.length,max:10,valueLabel:`${e.length} of 10`}),(0,K.jsx)(H,{variant:`separator`,children:`Today`}),E.map((e,t)=>(0,K.jsx)(H,{children:e},t)),(0,K.jsx)(H,{loading:!0,children:`Syncing with the directory…`})]})})]}),(0,K.jsxs)(c,{open:b!==null,onOpenChange:e=>!e&&w(null),variant:`destructive`,size:`sm`,title:`Remove ${b?.name??``}?`,description:`They lose access to the workspace at once. You can invite them again later.`,children:[(0,K.jsx)(te,{children:`Cancel`}),(0,K.jsx)(ee,{variant:`destructive`,onClick:()=>{b&&(t(e=>e.filter(e=>e.id!==b.id)),M(`${b.name} was removed`),U(`${b.name} was removed`,{action:{label:`Undo`,onClick:()=>t(e=>[...e,b])}}))},children:`Remove`})]}),(0,K.jsx)(fe,{})]})}},Q=[`Members`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
              {shown.length === 0 && <Empty icon={<RiSearchLine />} title="No members match" titleAs="p" description="Try another name or email, or show everyone." actions={<Button variant="outline" size="sm" onClick={() => {
              setQuery('');
              setView('all');
            }}>
                      Show everyone
                    </Button>} />}
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
            <Tooltip content={<>
                  Right-click a member, or press{' '}
                  <KbdGroup>
                    <Kbd variant="inverted" size="sm">
                      Shift
                    </Kbd>
                    <Kbd variant="inverted" size="sm">
                      F10
                    </Kbd>
                  </KbdGroup>{' '}
                  on it, for the same actions
                </>}>
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
              <Progress label="Seats" value={members.length} max={10} valueLabel={\`\${members.length} of 10\`} />
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