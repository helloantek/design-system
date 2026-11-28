import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BKQFhA74.js";import{n as r,t as i}from"./Button-C3GGHr1v.js";import{n as a,t as ee}from"./Alert-9kHQrL77.js";import{i as o,n as te,r as ne,t as re}from"./AlertDialog-DlJ2Fo08.js";import{i as s,n as c,r as l,t as ie}from"./AspectRatio.fixtures-DYRq8MH1.js";import{S as ae,_ as oe,a as se,f as u,g as ce,h as le,r as ue,s as de,t as fe,v as d,w as f,x as pe}from"./react-CFBxjmCm.js";import{n as p,t as m}from"./Avatar-CvhtczkV.js";import{n as h,t as me}from"./AvatarGroup-BNMWY66k.js";import{n as g,t as _}from"./Badge-DkHVTOaI.js";import{c as he,d as ge,h as v,i as _e,l as ve,n as ye,o as y,t as b}from"./DropdownMenu-CXQkyCeh.js";import{i as x,n as be,r as xe,t as S}from"./Input-De4D1a_o.js";import{r as C,t as Se}from"./ButtonGroup-D8Z_FiQZ.js";import{r as w,t as Ce}from"./Switch-WpFczbCd.js";import{i as T,n as E,o as D,r as we,t as O}from"./Card-D2IskQ-t.js";import{n as k,t as Te}from"./ContextMenu-BAny_JQ7.js";import{n as Ee,o as A,t as De}from"./Field-CTpBFkwD.js";import{n as j,t as Oe}from"./Separator-BW50H8yT.js";import{n as ke,r as M,t as Ae}from"./Dialog-CwnoQsf9.js";import{n as N,r as P,t as je}from"./Drawer-DBv9oeVX.js";import{n as F,t as Me}from"./Empty-BJ_VOtzs.js";import{n as I,t as Ne}from"./Tooltip-ChUcoequ.js";import{n as Pe,r as L,t as R}from"./Kbd-BIXF6343.js";import{n as z,t as B}from"./Marker-DDJdD-G-.js";import{i as V,n as Fe,r as H}from"./Sonner-CdRioTAg.js";import{i as U,n as Ie,r as Le,t as Re}from"./Popover-Cost3NeB.js";import{n as ze,r as Be,t as Ve}from"./Progress-BSewH0bw.js";import{n as He,r as Ue,t as W}from"./Sheet-BnLWksQQ.js";import{n as We,t as Ge}from"./Spinner-D6lhdMkM.js";var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{G=n(),d(),a(),s(),c(),o(),p(),h(),g(),r(),C(),D(),k(),v(),F(),M(),P(),A(),x(),L(),z(),U(),Be(),j(),Ue(),We(),w(),H(),I(),K=t(),q=[{id:`mira`,name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{id:`jonas`,name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{id:`priya`,name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{id:`tomas`,name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`,pending:!0},{id:`aiko`,name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`,pending:!0}],J={Owner:`violet`,Admin:`blue`,Member:`neutral`},Y=e=>e.split(` `).map(e=>e[0]).join(``),X={title:`Playground/Team`,parameters:{layout:`padded`,docs:{description:{component:`A team settings page made of Card, Avatar, Avatar Group, Badge, Button Group, Separator, Spinner, Kbd, Progress, Progress circle, Aspect Ratio, Empty (search for someone who is not there), Input with Input Group Dropdown, Dropdown Menu, Context Menu (right-click a member), Tooltip, Alert, Alert Dialog, Dialog (team settings), Sheet (the activity log), Drawer (add seats), Popover (the invite link), Marker and toasts, for trying components together before they are merged. Use the toolbar to switch brand and colour scheme.`}}}},Z={render:function(){let[e,t]=(0,G.useState)(q),[n,r]=(0,G.useState)(`all`),[a,o]=(0,G.useState)(``),[s,c]=(0,G.useState)(`Name`),[d,p]=(0,G.useState)(!0),[h,g]=(0,G.useState)(`Orbit`),[v,x]=(0,G.useState)(!1),[C,w]=(0,G.useState)(10),[D,k]=(0,G.useState)(5),[A,j]=(0,G.useState)(null),[M,P]=(0,G.useState)([`Mira created the workspace`,`Jonas joined as Admin`]),F=e=>P(t=>[...t,e]),I=e.filter(e=>e.pending),L=e.filter(e=>(n===`all`||n===`pending`==!!e.pending)&&(s===`Name`?e.name:e.email).toLowerCase().includes(a.trim().toLowerCase())),z=(e,n)=>{t(t=>t.map(t=>t.id===e.id?{...t,role:n}:t)),F(`${e.name} is now ${n}`),V.success(`${e.name} is now ${n}`)},H=e=>V.info(`Invite sent again to ${e.email}`),U=e=>(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(he,{label:`Role`,value:e.role,onValueChange:t=>z(e,t),children:[`Admin`,`Member`].map(t=>(0,K.jsx)(ve,{value:t,disabled:e.role===`Owner`,children:t},t))}),(0,K.jsx)(ge,{}),e.pending&&(0,K.jsx)(y,{icon:(0,K.jsx)(le,{}),onClick:()=>H(e),children:`Resend invite`}),(0,K.jsx)(y,{icon:(0,K.jsx)(pe,{}),onClick:()=>V(`Email to ${e.email}`,{description:`Your mail app opens in a real product.`}),children:`Send email`}),(0,K.jsx)(y,{type:`destructive`,icon:(0,K.jsx)(se,{}),disabled:e.role===`Owner`,onClick:()=>j(e),children:`Remove from team`})]});return(0,K.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 560px) 280px`,gap:16,alignItems:`start`,fontFamily:`var(--ds-font-sans)`},children:[(0,K.jsxs)(O,{as:`section`,"aria-label":`Team members`,children:[(0,K.jsx)(T,{title:`${h} members`,description:`Invite people and choose what they can do.`,action:(0,K.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,K.jsx)(Ae,{trigger:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,K.jsx)(de,{}),"aria-label":`Team settings`}),open:v,onOpenChange:x,title:`Team settings`,description:`The name shows in invites and on the team's page.`,footer:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(ke,{children:(0,K.jsx)(i,{variant:`outline`,children:`Cancel`})}),(0,K.jsx)(i,{type:`submit`,form:`team-settings`,children:`Save`})]}),children:(0,K.jsx)(`form`,{id:`team-settings`,onSubmit:e=>{e.preventDefault();let t=String(new FormData(e.currentTarget).get(`team`)??``).trim()||h;g(t),V.success(`Team renamed to ${t}`),x(!1)},children:(0,K.jsxs)(Ee,{children:[(0,K.jsx)(De,{label:`Team name`,children:(0,K.jsx)(S,{name:`team`,defaultValue:h})}),(0,K.jsx)(Ce,{name:`invites`,label:`Members can invite people`,caption:`Otherwise only Admins send invites.`,defaultChecked:!0})]})})}),(0,K.jsxs)(Re,{align:`end`,trigger:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,K.jsx)(oe,{}),"aria-label":`Invite link`}),title:`Invite link`,description:`Anyone with the link joins as a Member.`,children:[(0,K.jsx)(S,{"aria-label":`Link`,readOnly:!0,defaultValue:`https://sort.team/join/acme-7f3k`,action:(0,K.jsx)(be,{"aria-label":`Copy invite link`,onClick:()=>V.success(`Invite link copied`),children:(0,K.jsx)(ue,{})})}),(0,K.jsx)(Ie,{children:(0,K.jsx)(Le,{children:(0,K.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>V.info(`A new invite link was created`),children:`Reset link`})})})]}),(0,K.jsx)(b,{align:`end`,trigger:(0,K.jsx)(i,{variant:`outline`,size:`sm`,leadingIcon:(0,K.jsx)(u,{}),children:`Invite`}),children:(0,K.jsxs)(_e,{label:`Invite as`,children:[(0,K.jsx)(y,{icon:(0,K.jsx)(ce,{}),onClick:()=>V.success(`Invite link for Admins copied`),children:`Admin`}),(0,K.jsx)(y,{icon:(0,K.jsx)(u,{}),onClick:()=>V.success(`Invite link for Members copied`),children:`Member`})]})})]})}),(0,K.jsx)(E,{children:(0,K.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[I.length>0&&(0,K.jsx)(ee,{title:`${I.length} ${I.length===1?`invite is`:`invites are`} waiting`,description:`People join when they accept the email invite.`,action:(0,K.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>V.info(`${I.length} invites sent again`),children:`Resend all`})}),(0,K.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`},children:[(0,K.jsx)(Se,{"aria-label":`Show`,children:[`all`,`active`,`pending`].map(e=>(0,K.jsx)(i,{variant:n===e?`secondary`:`outline`,size:`sm`,"aria-pressed":n===e,onClick:()=>r(e),children:e[0].toUpperCase()+e.slice(1)},e))}),(0,K.jsx)(`div`,{style:{flex:1,minWidth:200},children:(0,K.jsx)(S,{"aria-label":`Search members`,placeholder:`Search`,value:a,onChange:e=>o(e.currentTarget.value),leadIcon:(0,K.jsx)(f,{}),action:(0,K.jsx)(b,{align:`end`,trigger:(0,K.jsx)(xe,{"aria-label":`Search in: ${s}`,children:s}),children:[`Name`,`Email`].map(e=>(0,K.jsx)(y,{onClick:()=>c(e),children:e},e))})})}),(0,K.jsx)(b,{align:`end`,trigger:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,K.jsx)(fe,{}),"aria-label":`View options`}),children:(0,K.jsx)(ye,{checked:d,onCheckedChange:p,children:`Show roles`})})]}),(0,K.jsx)(`ul`,{"aria-label":`Members`,style:{display:`grid`,gap:4,margin:0,padding:0,listStyle:`none`},children:L.map(e=>(0,K.jsx)(`li`,{children:(0,K.jsx)(Te,{"aria-label":`${e.name} actions`,trigger:(0,K.jsxs)(`div`,{tabIndex:0,style:{display:`flex`,alignItems:`center`,gap:12,padding:8,borderRadius:8,outlineOffset:2},children:[(0,K.jsx)(m,{size:`sm`,initials:Y(e.name),name:e.name}),(0,K.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,K.jsx)(`div`,{style:{color:`var(--ds-foreground)`,fontSize:14,fontWeight:500},children:e.name}),(0,K.jsx)(`div`,{style:{color:`var(--ds-muted-foreground)`,fontSize:13},children:e.email})]}),e.pending&&(0,K.jsx)(_,{size:`sm`,color:`orange`,dot:!0,children:`Pending`}),d&&(0,K.jsx)(_,{size:`sm`,color:J[e.role],children:e.role}),(0,K.jsx)(b,{align:`end`,trigger:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,K.jsx)(ae,{}),"aria-label":`More actions for ${e.name}`}),children:U(e)})]}),children:U(e)})},e.id))}),L.length===0&&(0,K.jsx)(Me,{icon:(0,K.jsx)(f,{}),title:`No members match`,titleAs:`p`,description:`Try another name or email, or show everyone.`,actions:(0,K.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>{o(``),r(`all`)},children:`Show everyone`})})]})}),(0,K.jsxs)(we,{justify:`between`,muted:!0,children:[(0,K.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`var(--ds-muted-foreground)`,fontSize:13},children:[(0,K.jsx)(me,{size:`sm`,max:3,children:e.map(e=>(0,K.jsx)(m,{initials:Y(e.name),name:e.name},e.id))}),e.length,` of `,C,` seats used`,(0,K.jsx)(Oe,{orientation:`vertical`,style:{height:16}}),I.length,` pending`]}),(0,K.jsx)(Ne,{content:(0,K.jsxs)(K.Fragment,{children:[`Right-click a member, or press`,` `,(0,K.jsxs)(Pe,{children:[(0,K.jsx)(R,{variant:`inverted`,size:`sm`,children:`Shift`}),(0,K.jsx)(R,{variant:`inverted`,size:`sm`,children:`F10`})]}),` `,`on it, for the same actions`]}),children:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,children:`Tips`})})]})]}),(0,K.jsxs)(O,{as:`section`,size:`sm`,"aria-label":`Activity`,children:[(0,K.jsx)(T,{title:`Activity`,action:(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,K.jsx)(Ge,{size:`sm`,variant:`gradient`,label:`Syncing activity`}),(0,K.jsxs)(W,{trigger:(0,K.jsx)(i,{variant:`ghost`,size:`sm`,children:`View all`}),title:`Activity log`,description:`Everything that happened in ${h}.`,footer:(0,K.jsx)(He,{children:(0,K.jsx)(i,{variant:`outline`,children:`Done`})}),children:[(0,K.jsx)(B,{variant:`separator`,children:`Today`}),M.map((e,t)=>(0,K.jsx)(B,{children:e},t)),(0,K.jsx)(B,{variant:`separator`,children:`Earlier`}),(0,K.jsx)(B,{children:`Mira created the team page`}),(0,K.jsx)(B,{children:`Seats raised from 5 to 10`})]})]})}),(0,K.jsx)(E,{children:(0,K.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,K.jsx)(l,{ratio:`21:9`,rounded:!0,children:(0,K.jsx)(`img`,{src:ie,alt:`The team at the last offsite`})}),(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,fontSize:14,color:`var(--ds-muted-foreground)`},children:[(0,K.jsx)(ze,{value:72,size:`40px`,thickness:12,"aria-label":`Profiles complete`}),`72 % of profiles are complete`]}),(0,K.jsx)(Ve,{label:`Seats`,value:e.length,max:C,valueLabel:`${e.length} of ${C}`}),(0,K.jsx)(je,{trigger:(0,K.jsx)(i,{variant:`outline`,size:`sm`,children:`Add seats`}),width:`384px`,title:`Add seats`,description:`€12 per seat a month, billed with your plan.`,footer:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(N,{children:(0,K.jsxs)(i,{onClick:()=>{w(e=>e+D),V.success(`${D} seats added`)},children:[`Add `,D,` seats`]})}),(0,K.jsx)(N,{children:(0,K.jsx)(i,{variant:`outline`,children:`Cancel`})})]}),children:(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:24},children:[(0,K.jsx)(i,{variant:`outline`,"aria-label":`Fewer seats`,disabled:D<=1,onClick:()=>k(e=>e-1),icon:(0,K.jsx)(`span`,{"aria-hidden":!0,children:`−`})}),(0,K.jsx)(`span`,{"aria-live":`polite`,style:{fontSize:32,lineHeight:`40px`,fontWeight:600,color:`var(--ds-foreground)`},children:D}),(0,K.jsx)(i,{variant:`outline`,"aria-label":`More seats`,onClick:()=>k(e=>e+1),icon:(0,K.jsx)(`span`,{"aria-hidden":!0,children:`+`})})]})}),(0,K.jsx)(B,{variant:`separator`,children:`Today`}),M.map((e,t)=>(0,K.jsx)(B,{children:e},t)),(0,K.jsx)(B,{loading:!0,children:`Syncing with the directory…`})]})})]}),(0,K.jsxs)(re,{open:A!==null,onOpenChange:e=>!e&&j(null),variant:`destructive`,size:`sm`,title:`Remove ${A?.name??``}?`,description:`They lose access to the workspace at once. You can invite them again later.`,children:[(0,K.jsx)(ne,{children:`Cancel`}),(0,K.jsx)(te,{variant:`destructive`,onClick:()=>{A&&(t(e=>e.filter(e=>e.id!==A.id)),F(`${A.name} was removed`),V(`${A.name} was removed`,{action:{label:`Undo`,onClick:()=>t(e=>[...e,A])}}))},children:`Remove`})]}),(0,K.jsx)(Fe,{})]})}},Q=[`Members`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [members, setMembers] = useState(initialMembers);
    const [view, setView] = useState<View>('all');
    const [query, setQuery] = useState('');
    const [searchIn, setSearchIn] = useState<'Name' | 'Email'>('Name');
    const [showRoles, setShowRoles] = useState(true);
    const [teamName, setTeamName] = useState('Orbit');
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [seats, setSeats] = useState(10);
    const [extraSeats, setExtraSeats] = useState(5);
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
          <CardHeader title={\`\${teamName} members\`} description="Invite people and choose what they can do." action={<div style={{
          display: 'flex',
          gap: 8
        }}>
                <Dialog trigger={<Button variant="ghost" size="sm" icon={<RiSettings3Line />} aria-label="Team settings" />} open={settingsOpen} onOpenChange={setSettingsOpen} title="Team settings" description="The name shows in invites and on the team's page." footer={<>
                      <DialogClose>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button type="submit" form="team-settings">
                        Save
                      </Button>
                    </>}>
                  <form id="team-settings" onSubmit={event => {
              event.preventDefault();
              const name = String(new FormData(event.currentTarget).get('team') ?? '').trim() || teamName;
              setTeamName(name);
              toast.success(\`Team renamed to \${name}\`);
              setSettingsOpen(false);
            }}>
                    <FieldGroup>
                      <Field label="Team name">
                        <Input name="team" defaultValue={teamName} />
                      </Field>
                      <Switch name="invites" label="Members can invite people" caption="Otherwise only Admins send invites." defaultChecked />
                    </FieldGroup>
                  </form>
                </Dialog>
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
              {members.length} of {seats} seats used
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
          <CardHeader title="Activity" action={<div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }}>
                <Spinner size="sm" variant="gradient" label="Syncing activity" />
                <Sheet trigger={<Button variant="ghost" size="sm">
                      View all
                    </Button>} title="Activity log" description={\`Everything that happened in \${teamName}.\`} footer={<SheetClose>
                      <Button variant="outline">Done</Button>
                    </SheetClose>}>
                  <Marker variant="separator">Today</Marker>
                  {activity.map((line, i) => <Marker key={i}>{line}</Marker>)}
                  <Marker variant="separator">Earlier</Marker>
                  <Marker>Mira created the team page</Marker>
                  <Marker>Seats raised from 5 to 10</Marker>
                </Sheet>
              </div>} />
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
              <Progress label="Seats" value={members.length} max={seats} valueLabel={\`\${members.length} of \${seats}\`} />
              <Drawer trigger={<Button variant="outline" size="sm">
                    Add seats
                  </Button>} width="384px" title="Add seats" description="€12 per seat a month, billed with your plan." footer={<>
                    <DrawerClose>
                      <Button onClick={() => {
                  setSeats(n => n + extraSeats);
                  toast.success(\`\${extraSeats} seats added\`);
                }}>
                        Add {extraSeats} seats
                      </Button>
                    </DrawerClose>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </>}>
                <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 24
              }}>
                  <Button variant="outline" aria-label="Fewer seats" disabled={extraSeats <= 1} onClick={() => setExtraSeats(n => n - 1)} icon={<span aria-hidden>−</span>} />
                  <span aria-live="polite" style={{
                  fontSize: 32,
                  lineHeight: '40px',
                  fontWeight: 600,
                  color: 'var(--ds-foreground)'
                }}>
                    {extraSeats}
                  </span>
                  <Button variant="outline" aria-label="More seats" onClick={() => setExtraSeats(n => n + 1)} icon={<span aria-hidden>+</span>} />
                </div>
              </Drawer>
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