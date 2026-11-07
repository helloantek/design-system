import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BJAPwkbv.js";import{n as r,t as i}from"./Button-nfZlII-o.js";import{n as a,t as ee}from"./Alert-B_0Jm-LF.js";import{i as o,n as s,r as te,t as ne}from"./AlertDialog-B0-B1QkH.js";import{i as c,n as l,r as re,t as u}from"./AspectRatio.fixtures-ByJHAEvF.js";import{C as d,_ as f,a as ie,b as ae,d as p,g as oe,h as se,m as ce,r as le,t as m,x as ue}from"./react-DvOFCZzI.js";import{n as h,t as g}from"./Avatar-B2zDHJkV.js";import{n as _,t as v}from"./AvatarGroup-BAqasgBM.js";import{n as y,t as b}from"./Badge-CtDahisG.js";import{c as de,d as x,h as S,i as C,l as w,n as fe,o as T,t as E}from"./DropdownMenu-By9v9DQ8.js";import{i as D,n as pe,r as me,t as O}from"./Input-3au2N6N-.js";import{r as k,t as A}from"./ButtonGroup-DePpk02N.js";import{i as j,n as M,o as N,r as P,t as F}from"./Card-Cm-diZeO.js";import{n as I,t as L}from"./ContextMenu-S7u9IG1D.js";import{n as R,t as z}from"./Empty-D-iEOcq8.js";import{n as B,t as he}from"./Tooltip-BT1qaavK.js";import{n as ge,r as V,t as H}from"./Kbd-Ct5WsbOB.js";import{n as _e,t as U}from"./Marker-BCNXyQdb.js";import{i as W,n as ve,r as ye}from"./Sonner-CILzFBm1.js";import{i as be,n as xe,r as Se,t as Ce}from"./Popover-CMkSINjE.js";import{n as we,r as Te,t as Ee}from"./Progress-Bv-HbOBM.js";import{n as De,t as Oe}from"./Separator-BSV1oTP9.js";import{n as ke,t as Ae}from"./Spinner-DGggFnwi.js";var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{G=n(),f(),a(),c(),l(),o(),h(),_(),y(),r(),k(),N(),I(),S(),R(),D(),V(),_e(),be(),Te(),De(),ke(),ye(),B(),K=t(),q=[{id:`mira`,name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{id:`jonas`,name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{id:`priya`,name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{id:`tomas`,name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`,pending:!0},{id:`aiko`,name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`,pending:!0}],J={Owner:`violet`,Admin:`blue`,Member:`neutral`},Y=e=>e.split(` `).map(e=>e[0]).join(``),X={title:`Playground/Team`,parameters:{layout:`padded`,docs:{description:{component:`A team settings page made of Card, Avatar, Avatar Group, Badge, Button Group, Separator, Spinner, Kbd, Progress, Progress circle, Aspect Ratio, Empty (search for someone who is not there), Input with Input Group Dropdown, Dropdown Menu, Context Menu (right-click a member), Tooltip, Alert, Alert Dialog, Popover (the invite link), Marker and toasts, for trying components together before they are merged. Use the toolbar to switch brand and colour scheme.`}}}},Z={render:function(){let[e,t]=(0,G.useState)(q),[n,r]=(0,G.useState)(`all`),[a,o]=(0,G.useState)(``),[c,l]=(0,G.useState)(`Name`),[f,h]=(0,G.useState)(!0),[_,y]=(0,G.useState)(null),[S,D]=(0,G.useState)([`Mira created the workspace`,`Jonas joined as Admin`]),k=e=>D(t=>[...t,e]),N=e.filter(e=>e.pending),I=e.filter(e=>(n===`all`||n===`pending`==!!e.pending)&&(c===`Name`?e.name:e.email).toLowerCase().includes(a.trim().toLowerCase())),R=(e,n)=>{t(t=>t.map(t=>t.id===e.id?{...t,role:n}:t)),k(`${e.name} is now ${n}`),W.success(`${e.name} is now ${n}`)},B=e=>W.info(`Invite sent again to ${e.email}`),V=e=>(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(de,{label:`Role`,value:e.role,onValueChange:t=>R(e,t),children:[`Admin`,`Member`].map(t=>(0,K.jsx)(w,{value:t,disabled:e.role===`Owner`,children:t},t))}),(0,K.jsx)(x,{}),e.pending&&(0,K.jsx)(T,{icon:(0,K.jsx)(ce,{}),onClick:()=>B(e),children:`Resend invite`}),(0,K.jsx)(T,{icon:(0,K.jsx)(ae,{}),onClick:()=>W(`Email to ${e.email}`,{description:`Your mail app opens in a real product.`}),children:`Send email`}),(0,K.jsx)(T,{type:`destructive`,icon:(0,K.jsx)(ie,{}),disabled:e.role===`Owner`,onClick:()=>y(e),children:`Remove from team`})]});return(0,K.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 560px) 280px`,gap:16,alignItems:`start`,fontFamily:`var(--ds-font-sans)`},children:[(0,K.jsxs)(F,{as:`section`,"aria-label":`Team members`,children:[(0,K.jsx)(j,{title:`Team members`,description:`Invite people and choose what they can do.`,action:(0,K.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,K.jsxs)(Ce,{align:`end`,trigger:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,K.jsx)(oe,{}),"aria-label":`Invite link`}),title:`Invite link`,description:`Anyone with the link joins as a Member.`,children:[(0,K.jsx)(O,{"aria-label":`Link`,readOnly:!0,defaultValue:`https://sort.team/join/acme-7f3k`,action:(0,K.jsx)(pe,{"aria-label":`Copy invite link`,onClick:()=>W.success(`Invite link copied`),children:(0,K.jsx)(le,{})})}),(0,K.jsx)(xe,{children:(0,K.jsx)(Se,{children:(0,K.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>W.info(`A new invite link was created`),children:`Reset link`})})})]}),(0,K.jsx)(E,{align:`end`,trigger:(0,K.jsx)(i,{variant:`outline`,size:`sm`,leadingIcon:(0,K.jsx)(p,{}),children:`Invite`}),children:(0,K.jsxs)(C,{label:`Invite as`,children:[(0,K.jsx)(T,{icon:(0,K.jsx)(se,{}),onClick:()=>W.success(`Invite link for Admins copied`),children:`Admin`}),(0,K.jsx)(T,{icon:(0,K.jsx)(p,{}),onClick:()=>W.success(`Invite link for Members copied`),children:`Member`})]})})]})}),(0,K.jsx)(M,{children:(0,K.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[N.length>0&&(0,K.jsx)(ee,{title:`${N.length} ${N.length===1?`invite is`:`invites are`} waiting`,description:`People join when they accept the email invite.`,action:(0,K.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>W.info(`${N.length} invites sent again`),children:`Resend all`})}),(0,K.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`},children:[(0,K.jsx)(A,{"aria-label":`Show`,children:[`all`,`active`,`pending`].map(e=>(0,K.jsx)(i,{variant:n===e?`secondary`:`outline`,size:`sm`,"aria-pressed":n===e,onClick:()=>r(e),children:e[0].toUpperCase()+e.slice(1)},e))}),(0,K.jsx)(`div`,{style:{flex:1,minWidth:200},children:(0,K.jsx)(O,{"aria-label":`Search members`,placeholder:`Search`,value:a,onChange:e=>o(e.currentTarget.value),leadIcon:(0,K.jsx)(d,{}),action:(0,K.jsx)(E,{align:`end`,trigger:(0,K.jsx)(me,{"aria-label":`Search in: ${c}`,children:c}),children:[`Name`,`Email`].map(e=>(0,K.jsx)(T,{onClick:()=>l(e),children:e},e))})})}),(0,K.jsx)(E,{align:`end`,trigger:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,K.jsx)(m,{}),"aria-label":`View options`}),children:(0,K.jsx)(fe,{checked:f,onCheckedChange:h,children:`Show roles`})})]}),(0,K.jsx)(`ul`,{"aria-label":`Members`,style:{display:`grid`,gap:4,margin:0,padding:0,listStyle:`none`},children:I.map(e=>(0,K.jsx)(`li`,{children:(0,K.jsx)(L,{"aria-label":`${e.name} actions`,trigger:(0,K.jsxs)(`div`,{tabIndex:0,style:{display:`flex`,alignItems:`center`,gap:12,padding:8,borderRadius:8,outlineOffset:2},children:[(0,K.jsx)(g,{size:`sm`,initials:Y(e.name),name:e.name}),(0,K.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,K.jsx)(`div`,{style:{color:`var(--ds-foreground)`,fontSize:14,fontWeight:500},children:e.name}),(0,K.jsx)(`div`,{style:{color:`var(--ds-muted-foreground)`,fontSize:13},children:e.email})]}),e.pending&&(0,K.jsx)(b,{size:`sm`,color:`orange`,dot:!0,children:`Pending`}),f&&(0,K.jsx)(b,{size:`sm`,color:J[e.role],children:e.role}),(0,K.jsx)(E,{align:`end`,trigger:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,K.jsx)(ue,{}),"aria-label":`More actions for ${e.name}`}),children:V(e)})]}),children:V(e)})},e.id))}),I.length===0&&(0,K.jsx)(z,{icon:(0,K.jsx)(d,{}),title:`No members match`,titleAs:`p`,description:`Try another name or email, or show everyone.`,actions:(0,K.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>{o(``),r(`all`)},children:`Show everyone`})})]})}),(0,K.jsxs)(P,{justify:`between`,muted:!0,children:[(0,K.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`var(--ds-muted-foreground)`,fontSize:13},children:[(0,K.jsx)(v,{size:`sm`,max:3,children:e.map(e=>(0,K.jsx)(g,{initials:Y(e.name),name:e.name},e.id))}),e.length,` of 10 seats used`,(0,K.jsx)(Oe,{orientation:`vertical`,style:{height:16}}),N.length,` pending`]}),(0,K.jsx)(he,{content:(0,K.jsxs)(K.Fragment,{children:[`Right-click a member, or press`,` `,(0,K.jsxs)(ge,{children:[(0,K.jsx)(H,{variant:`inverted`,size:`sm`,children:`Shift`}),(0,K.jsx)(H,{variant:`inverted`,size:`sm`,children:`F10`})]}),` `,`on it, for the same actions`]}),children:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,children:`Tips`})})]})]}),(0,K.jsxs)(F,{as:`section`,size:`sm`,"aria-label":`Activity`,children:[(0,K.jsx)(j,{title:`Activity`,action:(0,K.jsx)(Ae,{size:`sm`,variant:`gradient`,label:`Syncing activity`})}),(0,K.jsx)(M,{children:(0,K.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,K.jsx)(re,{ratio:`21:9`,rounded:!0,children:(0,K.jsx)(`img`,{src:u,alt:`The team at the last offsite`})}),(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,fontSize:14,color:`var(--ds-muted-foreground)`},children:[(0,K.jsx)(we,{value:72,size:`40px`,thickness:12,"aria-label":`Profiles complete`}),`72 % of profiles are complete`]}),(0,K.jsx)(Ee,{label:`Seats`,value:e.length,max:10,valueLabel:`${e.length} of 10`}),(0,K.jsx)(U,{variant:`separator`,children:`Today`}),S.map((e,t)=>(0,K.jsx)(U,{children:e},t)),(0,K.jsx)(U,{loading:!0,children:`Syncing with the directory…`})]})})]}),(0,K.jsxs)(ne,{open:_!==null,onOpenChange:e=>!e&&y(null),variant:`destructive`,size:`sm`,title:`Remove ${_?.name??``}?`,description:`They lose access to the workspace at once. You can invite them again later.`,children:[(0,K.jsx)(te,{children:`Cancel`}),(0,K.jsx)(s,{variant:`destructive`,onClick:()=>{_&&(t(e=>e.filter(e=>e.id!==_.id)),k(`${_.name} was removed`),W(`${_.name} was removed`,{action:{label:`Undo`,onClick:()=>t(e=>[...e,_])}}))},children:`Remove`})]}),(0,K.jsx)(ve,{})]})}},Q=[`Members`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
          <CardHeader title="Team members" description="Invite people and choose what they can do." action={<div style={{
          display: 'flex',
          gap: 8
        }}>
                <Popover align="end" trigger={<Button variant="ghost" size="sm" icon={<RiLinkM />} aria-label="Invite link" />} title="Invite link" description="Anyone with the link joins as a Member.">
                  <Input aria-label="Link" readOnly defaultValue="https://sort.team/join/acme-7f3k" action={<InputAction aria-label="Copy invite link" onClick={() => toast.success('Invite link copied')}>
                        <RiFileCopyLine />
                      </InputAction>} />
                  <PopoverActions>
                    <PopoverClose>
                      <Button variant="outline" size="sm" onClick={() => toast.info('A new invite link was created')}>
                        Reset link
                      </Button>
                    </PopoverClose>
                  </PopoverActions>
                </Popover>
                <DropdownMenu align="end" trigger={<Button variant="outline" size="sm" leadingIcon={<RiUserAddLine />}>
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
                </DropdownMenu>
              </div>} />
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