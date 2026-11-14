import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-C9k6yJQN.js";import{n as r,t as i}from"./Button-B918dKyt.js";import{n as a,t as ee}from"./Alert-Bks6LJ99.js";import{i as o,n as te,r as ne,t as re}from"./AlertDialog-SkCoyG-m.js";import{i as s,n as c,r as ie,t as ae}from"./AspectRatio.fixtures-CmmM3Gr1.js";import{S as l,a as u,b as oe,d,g as f,h as se,m as ce,t as le,y as ue}from"./react-Gu-zTQyD.js";import{n as p,t as m}from"./Avatar-CowUlfPs.js";import{n as h,t as g}from"./AvatarGroup-C9r2XVHf.js";import{n as _,t as v}from"./Badge-A0XpkQ8S.js";import{c as y,d as b,h as x,i as S,l as C,n as de,o as w,t as T}from"./DropdownMenu-BTOLDDMe.js";import{i as E,r as fe,t as pe}from"./Input-DKDwxfGo.js";import{r as D,t as me}from"./ButtonGroup-Bd_1WPDX.js";import{i as O,n as k,o as A,r as j,t as M}from"./Card-4QNiWRkt.js";import{n as N,t as P}from"./ContextMenu-C2P6wd0d.js";import{n as F,t as I}from"./Empty-COTYiFNA.js";import{n as L,t as R}from"./Tooltip-DiE43fu9.js";import{n as z,r as B,t as V}from"./Kbd-DKt6FW25.js";import{n as he,t as H}from"./Marker-BAXx3WpB.js";import{i as U,n as ge,r as _e}from"./Sonner-ZJHYiC1R.js";import{n as ve,r as ye,t as be}from"./Progress-Ca239aaZ.js";import{n as xe,t as W}from"./Separator-D5jX3Os2.js";import{n as Se,t as Ce}from"./Spinner-DdzEZDnD.js";var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{G=n(),f(),a(),s(),c(),o(),p(),h(),_(),r(),D(),A(),N(),x(),F(),E(),B(),he(),ye(),xe(),Se(),_e(),L(),K=t(),q=[{id:`mira`,name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{id:`jonas`,name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{id:`priya`,name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{id:`tomas`,name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`,pending:!0},{id:`aiko`,name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`,pending:!0}],J={Owner:`violet`,Admin:`blue`,Member:`neutral`},Y=e=>e.split(` `).map(e=>e[0]).join(``),X={title:`Playground/Team`,parameters:{layout:`padded`,docs:{description:{component:`A team settings page made of Card, Avatar, Avatar Group, Badge, Button Group, Separator, Spinner, Kbd, Progress, Progress circle, Aspect Ratio, Empty (search for someone who is not there), Input with Input Group Dropdown, Dropdown Menu, Context Menu (right-click a member), Tooltip, Alert, Alert Dialog, Marker and toasts, for trying components together before they are merged. Use the toolbar to switch brand and colour scheme.`}}}},Z={render:function(){let[e,t]=(0,G.useState)(q),[n,r]=(0,G.useState)(`all`),[a,o]=(0,G.useState)(``),[s,c]=(0,G.useState)(`Name`),[f,p]=(0,G.useState)(!0),[h,_]=(0,G.useState)(null),[x,E]=(0,G.useState)([`Mira created the workspace`,`Jonas joined as Admin`]),D=e=>E(t=>[...t,e]),A=e.filter(e=>e.pending),N=e.filter(e=>(n===`all`||n===`pending`==!!e.pending)&&(s===`Name`?e.name:e.email).toLowerCase().includes(a.trim().toLowerCase())),F=(e,n)=>{t(t=>t.map(t=>t.id===e.id?{...t,role:n}:t)),D(`${e.name} is now ${n}`),U.success(`${e.name} is now ${n}`)},L=e=>U.info(`Invite sent again to ${e.email}`),B=e=>(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(y,{label:`Role`,value:e.role,onValueChange:t=>F(e,t),children:[`Admin`,`Member`].map(t=>(0,K.jsx)(C,{value:t,disabled:e.role===`Owner`,children:t},t))}),(0,K.jsx)(b,{}),e.pending&&(0,K.jsx)(w,{icon:(0,K.jsx)(ce,{}),onClick:()=>L(e),children:`Resend invite`}),(0,K.jsx)(w,{icon:(0,K.jsx)(ue,{}),onClick:()=>U(`Email to ${e.email}`,{description:`Your mail app opens in a real product.`}),children:`Send email`}),(0,K.jsx)(w,{type:`destructive`,icon:(0,K.jsx)(u,{}),disabled:e.role===`Owner`,onClick:()=>_(e),children:`Remove from team`})]});return(0,K.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 560px) 280px`,gap:16,alignItems:`start`,fontFamily:`var(--ds-font-sans)`},children:[(0,K.jsxs)(M,{as:`section`,"aria-label":`Team members`,children:[(0,K.jsx)(O,{title:`Team members`,description:`Invite people and choose what they can do.`,action:(0,K.jsx)(T,{align:`end`,trigger:(0,K.jsx)(i,{variant:`outline`,size:`sm`,leadingIcon:(0,K.jsx)(d,{}),children:`Invite`}),children:(0,K.jsxs)(S,{label:`Invite as`,children:[(0,K.jsx)(w,{icon:(0,K.jsx)(se,{}),onClick:()=>U.success(`Invite link for Admins copied`),children:`Admin`}),(0,K.jsx)(w,{icon:(0,K.jsx)(d,{}),onClick:()=>U.success(`Invite link for Members copied`),children:`Member`})]})})}),(0,K.jsx)(k,{children:(0,K.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[A.length>0&&(0,K.jsx)(ee,{title:`${A.length} ${A.length===1?`invite is`:`invites are`} waiting`,description:`People join when they accept the email invite.`,action:(0,K.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>U.info(`${A.length} invites sent again`),children:`Resend all`})}),(0,K.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`},children:[(0,K.jsx)(me,{"aria-label":`Show`,children:[`all`,`active`,`pending`].map(e=>(0,K.jsx)(i,{variant:n===e?`secondary`:`outline`,size:`sm`,"aria-pressed":n===e,onClick:()=>r(e),children:e[0].toUpperCase()+e.slice(1)},e))}),(0,K.jsx)(`div`,{style:{flex:1,minWidth:200},children:(0,K.jsx)(pe,{"aria-label":`Search members`,placeholder:`Search`,value:a,onChange:e=>o(e.currentTarget.value),leadIcon:(0,K.jsx)(l,{}),action:(0,K.jsx)(T,{align:`end`,trigger:(0,K.jsx)(fe,{"aria-label":`Search in: ${s}`,children:s}),children:[`Name`,`Email`].map(e=>(0,K.jsx)(w,{onClick:()=>c(e),children:e},e))})})}),(0,K.jsx)(T,{align:`end`,trigger:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,K.jsx)(le,{}),"aria-label":`View options`}),children:(0,K.jsx)(de,{checked:f,onCheckedChange:p,children:`Show roles`})})]}),(0,K.jsx)(`ul`,{"aria-label":`Members`,style:{display:`grid`,gap:4,margin:0,padding:0,listStyle:`none`},children:N.map(e=>(0,K.jsx)(`li`,{children:(0,K.jsx)(P,{"aria-label":`${e.name} actions`,trigger:(0,K.jsxs)(`div`,{tabIndex:0,style:{display:`flex`,alignItems:`center`,gap:12,padding:8,borderRadius:8,outlineOffset:2},children:[(0,K.jsx)(m,{size:`sm`,initials:Y(e.name),name:e.name}),(0,K.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,K.jsx)(`div`,{style:{color:`var(--ds-foreground)`,fontSize:14,fontWeight:500},children:e.name}),(0,K.jsx)(`div`,{style:{color:`var(--ds-muted-foreground)`,fontSize:13},children:e.email})]}),e.pending&&(0,K.jsx)(v,{size:`sm`,color:`orange`,dot:!0,children:`Pending`}),f&&(0,K.jsx)(v,{size:`sm`,color:J[e.role],children:e.role}),(0,K.jsx)(T,{align:`end`,trigger:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,K.jsx)(oe,{}),"aria-label":`More actions for ${e.name}`}),children:B(e)})]}),children:B(e)})},e.id))}),N.length===0&&(0,K.jsx)(I,{icon:(0,K.jsx)(l,{}),title:`No members match`,titleAs:`p`,description:`Try another name or email, or show everyone.`,actions:(0,K.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>{o(``),r(`all`)},children:`Show everyone`})})]})}),(0,K.jsxs)(j,{justify:`between`,muted:!0,children:[(0,K.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`var(--ds-muted-foreground)`,fontSize:13},children:[(0,K.jsx)(g,{size:`sm`,max:3,children:e.map(e=>(0,K.jsx)(m,{initials:Y(e.name),name:e.name},e.id))}),e.length,` of 10 seats used`,(0,K.jsx)(W,{orientation:`vertical`,style:{height:16}}),A.length,` pending`]}),(0,K.jsx)(R,{content:(0,K.jsxs)(K.Fragment,{children:[`Right-click a member, or press`,` `,(0,K.jsxs)(z,{children:[(0,K.jsx)(V,{variant:`inverted`,size:`sm`,children:`Shift`}),(0,K.jsx)(V,{variant:`inverted`,size:`sm`,children:`F10`})]}),` `,`on it, for the same actions`]}),children:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,children:`Tips`})})]})]}),(0,K.jsxs)(M,{as:`section`,size:`sm`,"aria-label":`Activity`,children:[(0,K.jsx)(O,{title:`Activity`,action:(0,K.jsx)(Ce,{size:`sm`,variant:`gradient`,label:`Syncing activity`})}),(0,K.jsx)(k,{children:(0,K.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,K.jsx)(ie,{ratio:`21:9`,rounded:!0,children:(0,K.jsx)(`img`,{src:ae,alt:`The team at the last offsite`})}),(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,fontSize:14,color:`var(--ds-muted-foreground)`},children:[(0,K.jsx)(ve,{value:72,size:`40px`,thickness:12,"aria-label":`Profiles complete`}),`72 % of profiles are complete`]}),(0,K.jsx)(be,{label:`Seats`,value:e.length,max:10,valueLabel:`${e.length} of 10`}),(0,K.jsx)(H,{variant:`separator`,children:`Today`}),x.map((e,t)=>(0,K.jsx)(H,{children:e},t)),(0,K.jsx)(H,{loading:!0,children:`Syncing with the directory…`})]})})]}),(0,K.jsxs)(re,{open:h!==null,onOpenChange:e=>!e&&_(null),variant:`destructive`,size:`sm`,title:`Remove ${h?.name??``}?`,description:`They lose access to the workspace at once. You can invite them again later.`,children:[(0,K.jsx)(ne,{children:`Cancel`}),(0,K.jsx)(te,{variant:`destructive`,onClick:()=>{h&&(t(e=>e.filter(e=>e.id!==h.id)),D(`${h.name} was removed`),U(`${h.name} was removed`,{action:{label:`Undo`,onClick:()=>t(e=>[...e,h])}}))},children:`Remove`})]}),(0,K.jsx)(ge,{})]})}},Q=[`Members`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
              <AspectRatio ratio="21:9" rounded>
                <img src={aspectRatioPhoto} alt="The team at the last offsite" />
              </AspectRatio>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 14,
              color: 'var(--ds-muted-foreground)'
            }}>
                <ProgressCircle value={72} size="40px" thickness={12} aria-label="Profiles complete" />
                72 % of profiles are complete
              </div>
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