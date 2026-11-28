import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-DW5xI3D9.js";import{n as r,t as i}from"./Button-dI9MQVE0.js";import{n as a,t as ee}from"./Alert-DV5XshJS.js";import{i as o,n as te,r as ne,t as re}from"./AlertDialog-CdtuOy3z.js";import{i as s,n as c,r as ie,t as ae}from"./AspectRatio.fixtures-D5gDA6u6.js";import{C as oe,S as se,T as l,_ as ce,a as le,c as ue,g as de,o as fe,p as u,r as pe,t as me,v as he,y as d}from"./react-CRkXcodK.js";import{n as f,t as p}from"./Avatar-X_3Ctgnz.js";import{n as m,t as ge}from"./AvatarGroup-D5u69t4D.js";import{n as h,t as g}from"./Badge-BkZihm9O.js";import{c as _e,d as ve,h as _,i as ye,l as be,n as xe,o as v,t as y}from"./DropdownMenu-Bxj-F28L.js";import{i as Se,n as Ce,r as we,t as b}from"./Input-BYo3Uy1j.js";import{r as x,t as Te}from"./ButtonGroup-DJ2FgMdN.js";import{r as S,t as Ee}from"./Switch-CcTtJ44V.js";import{i as C,n as w,o as T,r as De,t as E}from"./Card-BWngVI8y.js";import{n as D,t as Oe}from"./ContextMenu-OoNn9s8D.js";import{n as ke,o as O,t as Ae}from"./Field-ntm_yfKO.js";import{n as k,t as je}from"./Separator-BB7Wios3.js";import{n as Me,r as A,t as Ne}from"./Dialog-BfjiIoCw.js";import{n as j,r as M,t as Pe}from"./Drawer-BlOCUZew.js";import{n as N,t as Fe}from"./Empty-C1B6f9Dj.js";import{n as P,t as Ie}from"./HoverCard-CyCjln_G.js";import{n as F,t as Le}from"./Tooltip-CJSbpg9v.js";import{n as Re,r as I,t as L}from"./Kbd-BbNgO103.js";import{n as R,t as z}from"./Marker-E_5U03tg.js";import{i as B,n as ze,r as V}from"./Sonner-BonqM6Lc.js";import{i as H,n as Be,r as Ve,t as He}from"./Popover-BxUyGLmZ.js";import{n as Ue,r as U,t as We}from"./Progress-S6h1HHpW.js";import{n as Ge,r as W,t as Ke}from"./Sheet-MzngYrp8.js";import{n as G,t as qe}from"./Spinner-CT8nCV7r.js";import{n as K,t as Je}from"./Toggle-DtjxHUaa.js";import{n as q,r as Ye,t as Xe}from"./ToggleGroup-CLnPvHgP.js";var J,Y,X,Z,Q,Ze,$,Qe;function $e(){return($e=e((()=>{J=n(),d(),a(),s(),c(),o(),f(),m(),h(),r(),x(),T(),D(),_(),N(),A(),M(),O(),P(),Se(),I(),R(),H(),U(),k(),W(),G(),S(),V(),K(),Ye(),F(),Y=t(),X=[{id:`mira`,name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{id:`jonas`,name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{id:`priya`,name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{id:`tomas`,name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`,pending:!0},{id:`aiko`,name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`,pending:!0}],Z={Owner:`violet`,Admin:`blue`,Member:`neutral`},Q=e=>e.split(` `).map(e=>e[0]).join(``),Ze={title:`Playground/Team`,parameters:{layout:`padded`,docs:{description:{component:`A team settings page made of Card, Avatar, Avatar Group, Badge, Button Group, Separator, Spinner, Kbd, Progress, Progress circle, Aspect Ratio, Empty (search for someone who is not there), Input with Input Group Dropdown, Dropdown Menu, Context Menu (right-click a member), Tooltip, Alert, Alert Dialog, Dialog (team settings), Sheet (the activity log), Drawer (add seats), Hover Card (the workspace owner), Toggle (compact list), Toggle Group (sort by), Popover (the invite link), Marker and toasts, for trying components together before they are merged. Use the toolbar to switch brand and colour scheme.`}}}},$={render:function(){let[e,t]=(0,J.useState)(X),[n,r]=(0,J.useState)(`all`),[a,o]=(0,J.useState)(``),[s,c]=(0,J.useState)(`Name`),[d,f]=(0,J.useState)(!0),[m,h]=(0,J.useState)(!1),[_,Se]=(0,J.useState)(`joined`),[x,S]=(0,J.useState)(`Orbit`),[T,D]=(0,J.useState)(!1),[O,k]=(0,J.useState)(10),[A,M]=(0,J.useState)(5),[N,P]=(0,J.useState)(null),[F,I]=(0,J.useState)([`Mira created the workspace`,`Jonas joined as Admin`]),R=e=>I(t=>[...t,e]),V=e.filter(e=>e.pending),H=[`Owner`,`Admin`,`Member`],U=e.filter(e=>(n===`all`||n===`pending`==!!e.pending)&&(s===`Name`?e.name:e.email).toLowerCase().includes(a.trim().toLowerCase())).sort((e,t)=>_===`joined`?0:(_===`role`?H.indexOf(e.role)-H.indexOf(t.role):0)||e.name.localeCompare(t.name)),W=(e,n)=>{t(t=>t.map(t=>t.id===e.id?{...t,role:n}:t)),R(`${e.name} is now ${n}`),B.success(`${e.name} is now ${n}`)},G=e=>B.info(`Invite sent again to ${e.email}`),K=e=>(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(_e,{label:`Role`,value:e.role,onValueChange:t=>W(e,t),children:[`Admin`,`Member`].map(t=>(0,Y.jsx)(be,{value:t,disabled:e.role===`Owner`,children:t},t))}),(0,Y.jsx)(ve,{}),e.pending&&(0,Y.jsx)(v,{icon:(0,Y.jsx)(de,{}),onClick:()=>G(e),children:`Resend invite`}),(0,Y.jsx)(v,{icon:(0,Y.jsx)(se,{}),onClick:()=>B(`Email to ${e.email}`,{description:`Your mail app opens in a real product.`}),children:`Send email`}),(0,Y.jsx)(v,{type:`destructive`,icon:(0,Y.jsx)(fe,{}),disabled:e.role===`Owner`,onClick:()=>P(e),children:`Remove from team`})]});return(0,Y.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 560px) 280px`,gap:16,alignItems:`start`,fontFamily:`var(--ds-font-sans)`},children:[(0,Y.jsxs)(E,{as:`section`,"aria-label":`Team members`,children:[(0,Y.jsx)(C,{title:`${x} members`,description:`Invite people and choose what they can do.`,action:(0,Y.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,Y.jsx)(Ne,{trigger:(0,Y.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,Y.jsx)(ue,{}),"aria-label":`Team settings`}),open:T,onOpenChange:D,title:`Team settings`,description:`The name shows in invites and on the team's page.`,footer:(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Me,{children:(0,Y.jsx)(i,{variant:`outline`,children:`Cancel`})}),(0,Y.jsx)(i,{type:`submit`,form:`team-settings`,children:`Save`})]}),children:(0,Y.jsx)(`form`,{id:`team-settings`,onSubmit:e=>{e.preventDefault();let t=String(new FormData(e.currentTarget).get(`team`)??``).trim()||x;S(t),B.success(`Team renamed to ${t}`),D(!1)},children:(0,Y.jsxs)(ke,{children:[(0,Y.jsx)(Ae,{label:`Team name`,children:(0,Y.jsx)(b,{name:`team`,defaultValue:x})}),(0,Y.jsx)(Ee,{name:`invites`,label:`Members can invite people`,caption:`Otherwise only Admins send invites.`,defaultChecked:!0})]})})}),(0,Y.jsxs)(He,{align:`end`,trigger:(0,Y.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,Y.jsx)(he,{}),"aria-label":`Invite link`}),title:`Invite link`,description:`Anyone with the link joins as a Member.`,children:[(0,Y.jsx)(b,{"aria-label":`Link`,readOnly:!0,defaultValue:`https://sort.team/join/acme-7f3k`,action:(0,Y.jsx)(Ce,{"aria-label":`Copy invite link`,onClick:()=>B.success(`Invite link copied`),children:(0,Y.jsx)(pe,{})})}),(0,Y.jsx)(Be,{children:(0,Y.jsx)(Ve,{children:(0,Y.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>B.info(`A new invite link was created`),children:`Reset link`})})})]}),(0,Y.jsx)(y,{align:`end`,trigger:(0,Y.jsx)(i,{variant:`outline`,size:`sm`,leadingIcon:(0,Y.jsx)(u,{}),children:`Invite`}),children:(0,Y.jsxs)(ye,{label:`Invite as`,children:[(0,Y.jsx)(v,{icon:(0,Y.jsx)(ce,{}),onClick:()=>B.success(`Invite link for Admins copied`),children:`Admin`}),(0,Y.jsx)(v,{icon:(0,Y.jsx)(u,{}),onClick:()=>B.success(`Invite link for Members copied`),children:`Member`})]})})]})}),(0,Y.jsx)(w,{children:(0,Y.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[V.length>0&&(0,Y.jsx)(ee,{title:`${V.length} ${V.length===1?`invite is`:`invites are`} waiting`,description:`People join when they accept the email invite.`,action:(0,Y.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>B.info(`${V.length} invites sent again`),children:`Resend all`})}),(0,Y.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`},children:[(0,Y.jsx)(Te,{"aria-label":`Show`,children:[`all`,`active`,`pending`].map(e=>(0,Y.jsx)(i,{variant:n===e?`secondary`:`outline`,size:`sm`,"aria-pressed":n===e,onClick:()=>r(e),children:e[0].toUpperCase()+e.slice(1)},e))}),(0,Y.jsx)(`div`,{style:{flex:1,minWidth:200},children:(0,Y.jsx)(b,{"aria-label":`Search members`,placeholder:`Search`,value:a,onChange:e=>o(e.currentTarget.value),leadIcon:(0,Y.jsx)(l,{}),action:(0,Y.jsx)(y,{align:`end`,trigger:(0,Y.jsx)(we,{"aria-label":`Search in: ${s}`,children:s}),children:[`Name`,`Email`].map(e=>(0,Y.jsx)(v,{onClick:()=>c(e),children:e},e))})})}),(0,Y.jsx)(y,{align:`end`,trigger:(0,Y.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,Y.jsx)(me,{}),"aria-label":`View options`}),children:(0,Y.jsx)(xe,{checked:d,onCheckedChange:f,children:`Show roles`})}),(0,Y.jsx)(Je,{size:`sm`,icon:(0,Y.jsx)(le,{}),"aria-label":`Compact list`,pressed:m,onPressedChange:h}),(0,Y.jsxs)(Xe,{type:`single`,size:`sm`,variant:`outline`,spacing:0,"aria-label":`Sort by`,value:_,onValueChange:e=>e&&Se(e),children:[(0,Y.jsx)(q,{value:`joined`,children:`Joined`}),(0,Y.jsx)(q,{value:`name`,children:`Name`}),(0,Y.jsx)(q,{value:`role`,children:`Role`})]})]}),(0,Y.jsx)(`ul`,{"aria-label":`Members`,style:{display:`grid`,gap:4,margin:0,padding:0,listStyle:`none`},children:U.map(e=>(0,Y.jsx)(`li`,{children:(0,Y.jsx)(Oe,{"aria-label":`${e.name} actions`,trigger:(0,Y.jsxs)(`div`,{tabIndex:0,style:{display:`flex`,alignItems:`center`,gap:12,padding:m?`2px 8px`:8,borderRadius:8,outlineOffset:2},children:[(0,Y.jsx)(p,{size:`sm`,initials:Q(e.name),name:e.name}),(0,Y.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,Y.jsx)(`div`,{style:{color:`var(--ds-foreground)`,fontSize:14,fontWeight:500},children:e.name}),!m&&(0,Y.jsx)(`div`,{style:{color:`var(--ds-muted-foreground)`,fontSize:13},children:e.email})]}),e.pending&&(0,Y.jsx)(g,{size:`sm`,color:`orange`,dot:!0,children:`Pending`}),d&&(0,Y.jsx)(g,{size:`sm`,color:Z[e.role],children:e.role}),(0,Y.jsx)(y,{align:`end`,trigger:(0,Y.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,Y.jsx)(oe,{}),"aria-label":`More actions for ${e.name}`}),children:K(e)})]}),children:K(e)})},e.id))}),U.length===0&&(0,Y.jsx)(Fe,{icon:(0,Y.jsx)(l,{}),title:`No members match`,titleAs:`p`,description:`Try another name or email, or show everyone.`,actions:(0,Y.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>{o(``),r(`all`)},children:`Show everyone`})})]})}),(0,Y.jsxs)(De,{justify:`between`,muted:!0,children:[(0,Y.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`var(--ds-muted-foreground)`,fontSize:13},children:[(0,Y.jsx)(ge,{size:`sm`,max:3,children:e.map(e=>(0,Y.jsx)(p,{initials:Q(e.name),name:e.name},e.id))}),e.length,` of `,O,` seats used`,(0,Y.jsx)(je,{orientation:`vertical`,style:{height:16}}),V.length,` pending`]}),(0,Y.jsx)(Le,{content:(0,Y.jsxs)(Y.Fragment,{children:[`Right-click a member, or press`,` `,(0,Y.jsxs)(Re,{children:[(0,Y.jsx)(L,{variant:`inverted`,size:`sm`,children:`Shift`}),(0,Y.jsx)(L,{variant:`inverted`,size:`sm`,children:`F10`})]}),` `,`on it, for the same actions`]}),children:(0,Y.jsx)(i,{variant:`ghost`,size:`sm`,children:`Tips`})})]})]}),(0,Y.jsxs)(E,{as:`section`,size:`sm`,"aria-label":`Activity`,children:[(0,Y.jsx)(C,{title:`Activity`,action:(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,Y.jsx)(qe,{size:`sm`,variant:`gradient`,label:`Syncing activity`}),(0,Y.jsxs)(Ke,{trigger:(0,Y.jsx)(i,{variant:`ghost`,size:`sm`,children:`View all`}),title:`Activity log`,description:`Everything that happened in ${x}.`,footer:(0,Y.jsx)(Ge,{children:(0,Y.jsx)(i,{variant:`outline`,children:`Done`})}),children:[(0,Y.jsx)(z,{variant:`separator`,children:`Today`}),F.map((e,t)=>(0,Y.jsx)(z,{children:e},t)),(0,Y.jsx)(z,{variant:`separator`,children:`Earlier`}),(0,Y.jsx)(z,{children:`Mira created the team page`}),(0,Y.jsx)(z,{children:`Seats raised from 5 to 10`})]})]})}),(0,Y.jsx)(w,{children:(0,Y.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Y.jsx)(ie,{ratio:`21:9`,rounded:!0,children:(0,Y.jsx)(`img`,{src:ae,alt:`The team at the last offsite`})}),(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,fontSize:14,color:`var(--ds-muted-foreground)`},children:[(0,Y.jsx)(Ue,{value:72,size:`40px`,thickness:12,"aria-label":`Profiles complete`}),`72 % of profiles are complete`]}),(0,Y.jsx)(We,{label:`Seats`,value:e.length,max:O,valueLabel:`${e.length} of ${O}`}),(0,Y.jsx)(Pe,{trigger:(0,Y.jsx)(i,{variant:`outline`,size:`sm`,children:`Add seats`}),width:`384px`,title:`Add seats`,description:`€12 per seat a month, billed with your plan.`,footer:(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(j,{children:(0,Y.jsxs)(i,{onClick:()=>{k(e=>e+A),B.success(`${A} seats added`)},children:[`Add `,A,` seats`]})}),(0,Y.jsx)(j,{children:(0,Y.jsx)(i,{variant:`outline`,children:`Cancel`})})]}),children:(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:24},children:[(0,Y.jsx)(i,{variant:`outline`,"aria-label":`Fewer seats`,disabled:A<=1,onClick:()=>M(e=>e-1),icon:(0,Y.jsx)(`span`,{"aria-hidden":!0,children:`−`})}),(0,Y.jsx)(`span`,{"aria-live":`polite`,style:{fontSize:32,lineHeight:`40px`,fontWeight:600,color:`var(--ds-foreground)`},children:A}),(0,Y.jsx)(i,{variant:`outline`,"aria-label":`More seats`,onClick:()=>M(e=>e+1),icon:(0,Y.jsx)(`span`,{"aria-hidden":!0,children:`+`})})]})}),(0,Y.jsxs)(`p`,{style:{margin:0,fontSize:14,color:`var(--ds-muted-foreground)`},children:[`Workspace owner:`,` `,(0,Y.jsxs)(Ie,{align:`start`,trigger:(0,Y.jsx)(`a`,{href:`#mira`,style:{color:`var(--ds-foreground)`,fontWeight:500,textDecoration:`underline`,textUnderlineOffset:3},children:`Mira Okafor`}),children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,Y.jsx)(p,{size:`lg`,initials:`MO`}),(0,Y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,Y.jsx)(`span`,{style:{fontWeight:500},children:`Mira Okafor`}),(0,Y.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`},children:`Owner · mira@orbit.dev`})]})]}),(0,Y.jsx)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`},children:`Created the workspace and manages billing. Ask her to change the plan.`})]})]}),(0,Y.jsx)(z,{variant:`separator`,children:`Today`}),F.map((e,t)=>(0,Y.jsx)(z,{children:e},t)),(0,Y.jsx)(z,{loading:!0,children:`Syncing with the directory…`})]})})]}),(0,Y.jsxs)(re,{open:N!==null,onOpenChange:e=>!e&&P(null),variant:`destructive`,size:`sm`,title:`Remove ${N?.name??``}?`,description:`They lose access to the workspace at once. You can invite them again later.`,children:[(0,Y.jsx)(ne,{children:`Cancel`}),(0,Y.jsx)(te,{variant:`destructive`,onClick:()=>{N&&(t(e=>e.filter(e=>e.id!==N.id)),R(`${N.name} was removed`),B(`${N.name} was removed`,{action:{label:`Undo`,onClick:()=>t(e=>[...e,N])}}))},children:`Remove`})]}),(0,Y.jsx)(ze,{})]})}},Qe=[`Members`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [members, setMembers] = useState(initialMembers);
    const [view, setView] = useState<View>('all');
    const [query, setQuery] = useState('');
    const [searchIn, setSearchIn] = useState<'Name' | 'Email'>('Name');
    const [showRoles, setShowRoles] = useState(true);
    const [compact, setCompact] = useState(false);
    const [sortBy, setSortBy] = useState<'joined' | 'name' | 'role'>('joined');
    const [teamName, setTeamName] = useState('Orbit');
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [seats, setSeats] = useState(10);
    const [extraSeats, setExtraSeats] = useState(5);
    const [removing, setRemoving] = useState<Member | null>(null);
    const [activity, setActivity] = useState<ReactNode[]>(['Mira created the workspace', 'Jonas joined as Admin']);
    const log = (line: string) => setActivity(lines => [...lines, line]);
    const pending = members.filter(m => m.pending);
    const roleOrder: Role[] = ['Owner', 'Admin', 'Member'];
    const shown = members.filter(m => (view === 'all' || view === 'pending' === Boolean(m.pending)) && (searchIn === 'Name' ? m.name : m.email).toLowerCase().includes(query.trim().toLowerCase())).sort((a, b) => sortBy === 'joined' ? 0 : (sortBy === 'role' ? roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role) : 0) || a.name.localeCompare(b.name));
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
                <Toggle size="sm" icon={<RiContractUpDownLine />} aria-label="Compact list" pressed={compact} onPressedChange={setCompact} />
                <ToggleGroup type="single" size="sm" variant="outline" spacing={0} aria-label="Sort by" value={sortBy} onValueChange={v => v && setSortBy(v as 'joined' | 'name' | 'role')}>
                  <ToggleGroupItem value="joined">Joined</ToggleGroupItem>
                  <ToggleGroupItem value="name">Name</ToggleGroupItem>
                  <ToggleGroupItem value="role">Role</ToggleGroupItem>
                </ToggleGroup>
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
                  padding: compact ? '2px 8px' : 8,
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
                            {!compact && <div style={{
                      color: 'var(--ds-muted-foreground)',
                      fontSize: 13
                    }}>{member.email}</div>}
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
              <p style={{
              margin: 0,
              fontSize: 14,
              color: 'var(--ds-muted-foreground)'
            }}>
                Workspace owner:{' '}
                <HoverCard align="start" trigger={<a href="#mira" style={{
                color: 'var(--ds-foreground)',
                fontWeight: 500,
                textDecoration: 'underline',
                textUnderlineOffset: 3
              }}>
                      Mira Okafor
                    </a>}>
                  <div style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'center'
                }}>
                    <Avatar size="lg" initials="MO" />
                    <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                      <span style={{
                      fontWeight: 500
                    }}>Mira Okafor</span>
                      <span style={{
                      color: 'var(--ds-muted-foreground)'
                    }}>Owner · mira@orbit.dev</span>
                    </div>
                  </div>
                  <p style={{
                  margin: 0,
                  color: 'var(--ds-muted-foreground)'
                }}>Created the workspace and manages billing. Ask her to change the plan.</p>
                </HoverCard>
              </p>
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
}`,...$.parameters?.docs?.source}}}})))()}$e();export{$ as Members,Qe as __namedExportsOrder,Ze as default};