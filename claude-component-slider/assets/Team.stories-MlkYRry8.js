import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-B0xAhTFV.js";import{n as r,t as i}from"./Button-BNEDxZ_5.js";import{n as a,t as ee}from"./Alert-BwW60mXP.js";import{i as o,n as te,r as ne,t as re}from"./AlertDialog-CHpybQpC.js";import{i as s,n as c,r as ie,t as ae}from"./AspectRatio.fixtures-BQhwBXh0.js";import{C as oe,S as se,T as l,_ as ce,a as le,c as ue,g as de,o as fe,p as u,r as pe,t as me,v as he,y as d}from"./react-BiARavYV.js";import{n as f,t as p}from"./Avatar-Rd0K_rF2.js";import{n as m,t as ge}from"./AvatarGroup-yAf1O9vW.js";import{n as _e,t as ve}from"./Badge-DIviuGNo.js";import{c as ye,d as be,h,i as xe,l as Se,n as Ce,o as g,t as _}from"./DropdownMenu-BTI4ojdE.js";import{i as v,n as we,r as Te,t as y}from"./Input-DKGV2tSW.js";import{r as b,t as Ee}from"./ButtonGroup--yObe6jY.js";import{r as x,t as De}from"./Switch-D8Qn0P5N.js";import{i as S,n as C,o as w,r as Oe,t as T}from"./Card-DweoSJPB.js";import{n as E,t as ke}from"./ContextMenu-KX6-T369.js";import{n as Ae,o as D,t as je}from"./Field-DQHMYjkZ.js";import{n as O,t as Me}from"./Separator-D-pfouIF.js";import{n as Ne,r as k,t as Pe}from"./Dialog-B5p9hqFX.js";import{n as A,r as j,t as Fe}from"./Drawer-VIWZ6FsB.js";import{n as M,t as Ie}from"./Empty-d0oQJ1mk.js";import{n as N,t as Le}from"./HoverCard-Z7DnMd7p.js";import{n as P,t as Re}from"./Tooltip-KMUALoT1.js";import{n as ze,r as F,t as I}from"./Kbd-DghEiOvn.js";import{n as L,t as R}from"./Marker-CZCjuq4g.js";import{i as z,n as Be,r as B}from"./Sonner-CYcUj1Ms.js";import{i as V,n as Ve,r as He,t as Ue}from"./Popover-BJGXYXfT.js";import{n as We,r as H,t as U}from"./Progress-BJfxA66x.js";import{n as Ge,r as W,t as Ke}from"./Sheet-BnJFFXDd.js";import{n as G,t as qe}from"./Spinner-DszN5mLx.js";import{a as K,i as q,n as Je,r as Ye,t as Xe}from"./Tabs-BPvQrT-4.js";import{n as Ze,t as Qe}from"./Toggle-BarvHp22.js";import{n as J,r as $e,t as et}from"./ToggleGroup-BzU9p7rv.js";var Y,X,tt,nt,Z,rt,Q,it;function $(){return($=e((()=>{Y=n(),d(),a(),s(),c(),o(),f(),m(),_e(),r(),b(),w(),E(),h(),M(),k(),j(),D(),N(),v(),F(),L(),V(),H(),O(),W(),G(),x(),B(),K(),Ze(),$e(),P(),X=t(),tt=[{id:`mira`,name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{id:`jonas`,name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{id:`priya`,name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{id:`tomas`,name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`,pending:!0},{id:`aiko`,name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`,pending:!0}],nt={Owner:`violet`,Admin:`blue`,Member:`neutral`},Z=e=>e.split(` `).map(e=>e[0]).join(``),rt={title:`Playground/Team`,parameters:{layout:`padded`,docs:{description:{component:`A team settings page made of Card, Avatar, Avatar Group, Badge, Button Group, Separator, Spinner, Kbd, Progress, Progress circle, Aspect Ratio, Empty (search for someone who is not there), Input with Input Group Dropdown, Dropdown Menu, Context Menu (right-click a member), Tooltip, Alert, Alert Dialog, Dialog (team settings), Sheet (the activity log), Drawer (add seats), Hover Card (the workspace owner), Toggle (compact list), Toggle Group (sort by), Tabs (seats and storage usage), Popover (the invite link), Marker and toasts, for trying components together before they are merged. Use the toolbar to switch brand and colour scheme.`}}}},Q={render:function(){let[e,t]=(0,Y.useState)(tt),[n,r]=(0,Y.useState)(`all`),[a,o]=(0,Y.useState)(``),[s,c]=(0,Y.useState)(`Name`),[d,f]=(0,Y.useState)(!0),[m,_e]=(0,Y.useState)(!1),[h,v]=(0,Y.useState)(`joined`),[b,x]=(0,Y.useState)(`Orbit`),[w,E]=(0,Y.useState)(!1),[D,O]=(0,Y.useState)(10),[k,j]=(0,Y.useState)(5),[M,N]=(0,Y.useState)(null),[P,F]=(0,Y.useState)([`Mira created the workspace`,`Jonas joined as Admin`]),L=e=>F(t=>[...t,e]),B=e.filter(e=>e.pending),V=[`Owner`,`Admin`,`Member`],H=e.filter(e=>(n===`all`||n===`pending`==!!e.pending)&&(s===`Name`?e.name:e.email).toLowerCase().includes(a.trim().toLowerCase())).sort((e,t)=>h===`joined`?0:(h===`role`?V.indexOf(e.role)-V.indexOf(t.role):0)||e.name.localeCompare(t.name)),W=(e,n)=>{t(t=>t.map(t=>t.id===e.id?{...t,role:n}:t)),L(`${e.name} is now ${n}`),z.success(`${e.name} is now ${n}`)},G=e=>z.info(`Invite sent again to ${e.email}`),K=e=>(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(ye,{label:`Role`,value:e.role,onValueChange:t=>W(e,t),children:[`Admin`,`Member`].map(t=>(0,X.jsx)(Se,{value:t,disabled:e.role===`Owner`,children:t},t))}),(0,X.jsx)(be,{}),e.pending&&(0,X.jsx)(g,{icon:(0,X.jsx)(de,{}),onClick:()=>G(e),children:`Resend invite`}),(0,X.jsx)(g,{icon:(0,X.jsx)(se,{}),onClick:()=>z(`Email to ${e.email}`,{description:`Your mail app opens in a real product.`}),children:`Send email`}),(0,X.jsx)(g,{type:`destructive`,icon:(0,X.jsx)(fe,{}),disabled:e.role===`Owner`,onClick:()=>N(e),children:`Remove from team`})]});return(0,X.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 560px) 280px`,gap:16,alignItems:`start`,fontFamily:`var(--ds-font-sans)`},children:[(0,X.jsxs)(T,{as:`section`,"aria-label":`Team members`,children:[(0,X.jsx)(S,{title:`${b} members`,description:`Invite people and choose what they can do.`,action:(0,X.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,X.jsx)(Pe,{trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,X.jsx)(ue,{}),"aria-label":`Team settings`}),open:w,onOpenChange:E,title:`Team settings`,description:`The name shows in invites and on the team's page.`,footer:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Ne,{children:(0,X.jsx)(i,{variant:`outline`,children:`Cancel`})}),(0,X.jsx)(i,{type:`submit`,form:`team-settings`,children:`Save`})]}),children:(0,X.jsx)(`form`,{id:`team-settings`,onSubmit:e=>{e.preventDefault();let t=String(new FormData(e.currentTarget).get(`team`)??``).trim()||b;x(t),z.success(`Team renamed to ${t}`),E(!1)},children:(0,X.jsxs)(Ae,{children:[(0,X.jsx)(je,{label:`Team name`,children:(0,X.jsx)(y,{name:`team`,defaultValue:b})}),(0,X.jsx)(De,{name:`invites`,label:`Members can invite people`,caption:`Otherwise only Admins send invites.`,defaultChecked:!0})]})})}),(0,X.jsxs)(Ue,{align:`end`,trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,X.jsx)(he,{}),"aria-label":`Invite link`}),title:`Invite link`,description:`Anyone with the link joins as a Member.`,children:[(0,X.jsx)(y,{"aria-label":`Link`,readOnly:!0,defaultValue:`https://sort.team/join/acme-7f3k`,action:(0,X.jsx)(we,{"aria-label":`Copy invite link`,onClick:()=>z.success(`Invite link copied`),children:(0,X.jsx)(pe,{})})}),(0,X.jsx)(Ve,{children:(0,X.jsx)(He,{children:(0,X.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>z.info(`A new invite link was created`),children:`Reset link`})})})]}),(0,X.jsx)(_,{align:`end`,trigger:(0,X.jsx)(i,{variant:`outline`,size:`sm`,leadingIcon:(0,X.jsx)(u,{}),children:`Invite`}),children:(0,X.jsxs)(xe,{label:`Invite as`,children:[(0,X.jsx)(g,{icon:(0,X.jsx)(ce,{}),onClick:()=>z.success(`Invite link for Admins copied`),children:`Admin`}),(0,X.jsx)(g,{icon:(0,X.jsx)(u,{}),onClick:()=>z.success(`Invite link for Members copied`),children:`Member`})]})})]})}),(0,X.jsx)(C,{children:(0,X.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[B.length>0&&(0,X.jsx)(ee,{title:`${B.length} ${B.length===1?`invite is`:`invites are`} waiting`,description:`People join when they accept the email invite.`,action:(0,X.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>z.info(`${B.length} invites sent again`),children:`Resend all`})}),(0,X.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`},children:[(0,X.jsx)(Ee,{"aria-label":`Show`,children:[`all`,`active`,`pending`].map(e=>(0,X.jsx)(i,{variant:n===e?`secondary`:`outline`,size:`sm`,"aria-pressed":n===e,onClick:()=>r(e),children:e[0].toUpperCase()+e.slice(1)},e))}),(0,X.jsx)(`div`,{style:{flex:1,minWidth:200},children:(0,X.jsx)(y,{"aria-label":`Search members`,placeholder:`Search`,value:a,onChange:e=>o(e.currentTarget.value),leadIcon:(0,X.jsx)(l,{}),action:(0,X.jsx)(_,{align:`end`,trigger:(0,X.jsx)(Te,{"aria-label":`Search in: ${s}`,children:s}),children:[`Name`,`Email`].map(e=>(0,X.jsx)(g,{onClick:()=>c(e),children:e},e))})})}),(0,X.jsx)(_,{align:`end`,trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,X.jsx)(me,{}),"aria-label":`View options`}),children:(0,X.jsx)(Ce,{checked:d,onCheckedChange:f,children:`Show roles`})}),(0,X.jsx)(Qe,{size:`sm`,icon:(0,X.jsx)(le,{}),"aria-label":`Compact list`,pressed:m,onPressedChange:_e}),(0,X.jsxs)(et,{type:`single`,size:`sm`,variant:`outline`,spacing:0,"aria-label":`Sort by`,value:h,onValueChange:e=>e&&v(e),children:[(0,X.jsx)(J,{value:`joined`,children:`Joined`}),(0,X.jsx)(J,{value:`name`,children:`Name`}),(0,X.jsx)(J,{value:`role`,children:`Role`})]})]}),(0,X.jsx)(`ul`,{"aria-label":`Members`,style:{display:`grid`,gap:4,margin:0,padding:0,listStyle:`none`},children:H.map(e=>(0,X.jsx)(`li`,{children:(0,X.jsx)(ke,{"aria-label":`${e.name} actions`,trigger:(0,X.jsxs)(`div`,{tabIndex:0,style:{display:`flex`,alignItems:`center`,gap:12,padding:m?`2px 8px`:8,borderRadius:8,outlineOffset:2},children:[(0,X.jsx)(p,{size:`sm`,initials:Z(e.name),name:e.name}),(0,X.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,X.jsx)(`div`,{style:{color:`var(--ds-foreground)`,fontSize:14,fontWeight:500},children:e.name}),!m&&(0,X.jsx)(`div`,{style:{color:`var(--ds-muted-foreground)`,fontSize:13},children:e.email})]}),e.pending&&(0,X.jsx)(ve,{size:`sm`,color:`orange`,dot:!0,children:`Pending`}),d&&(0,X.jsx)(ve,{size:`sm`,color:nt[e.role],children:e.role}),(0,X.jsx)(_,{align:`end`,trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,X.jsx)(oe,{}),"aria-label":`More actions for ${e.name}`}),children:K(e)})]}),children:K(e)})},e.id))}),H.length===0&&(0,X.jsx)(Ie,{icon:(0,X.jsx)(l,{}),title:`No members match`,titleAs:`p`,description:`Try another name or email, or show everyone.`,actions:(0,X.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>{o(``),r(`all`)},children:`Show everyone`})})]})}),(0,X.jsxs)(Oe,{justify:`between`,muted:!0,children:[(0,X.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`var(--ds-muted-foreground)`,fontSize:13},children:[(0,X.jsx)(ge,{size:`sm`,max:3,children:e.map(e=>(0,X.jsx)(p,{initials:Z(e.name),name:e.name},e.id))}),e.length,` of `,D,` seats used`,(0,X.jsx)(Me,{orientation:`vertical`,style:{height:16}}),B.length,` pending`]}),(0,X.jsx)(Re,{content:(0,X.jsxs)(X.Fragment,{children:[`Right-click a member, or press`,` `,(0,X.jsxs)(ze,{children:[(0,X.jsx)(I,{variant:`inverted`,size:`sm`,children:`Shift`}),(0,X.jsx)(I,{variant:`inverted`,size:`sm`,children:`F10`})]}),` `,`on it, for the same actions`]}),children:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,children:`Tips`})})]})]}),(0,X.jsxs)(T,{as:`section`,size:`sm`,"aria-label":`Activity`,children:[(0,X.jsx)(S,{title:`Activity`,action:(0,X.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,X.jsx)(qe,{size:`sm`,variant:`gradient`,label:`Syncing activity`}),(0,X.jsxs)(Ke,{trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,children:`View all`}),title:`Activity log`,description:`Everything that happened in ${b}.`,footer:(0,X.jsx)(Ge,{children:(0,X.jsx)(i,{variant:`outline`,children:`Done`})}),children:[(0,X.jsx)(R,{variant:`separator`,children:`Today`}),P.map((e,t)=>(0,X.jsx)(R,{children:e},t)),(0,X.jsx)(R,{variant:`separator`,children:`Earlier`}),(0,X.jsx)(R,{children:`Mira created the team page`}),(0,X.jsx)(R,{children:`Seats raised from 5 to 10`})]})]})}),(0,X.jsx)(C,{children:(0,X.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,X.jsx)(ie,{ratio:`21:9`,rounded:!0,children:(0,X.jsx)(`img`,{src:ae,alt:`The team at the last offsite`})}),(0,X.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,fontSize:14,color:`var(--ds-muted-foreground)`},children:[(0,X.jsx)(We,{value:72,size:`40px`,thickness:12,"aria-label":`Profiles complete`}),`72 % of profiles are complete`]}),(0,X.jsxs)(Xe,{defaultValue:`seats`,variant:`line`,children:[(0,X.jsxs)(Ye,{"aria-label":`Usage`,children:[(0,X.jsx)(q,{value:`seats`,count:e.length,children:`Seats`}),(0,X.jsx)(q,{value:`storage`,children:`Storage`})]}),(0,X.jsx)(Je,{value:`seats`,children:(0,X.jsx)(U,{label:`Seats`,value:e.length,max:D,valueLabel:`${e.length} of ${D}`})}),(0,X.jsx)(Je,{value:`storage`,children:(0,X.jsx)(U,{label:`Storage`,value:38,max:100,valueLabel:`38 of 100 GB`})})]}),(0,X.jsx)(Fe,{trigger:(0,X.jsx)(i,{variant:`outline`,size:`sm`,children:`Add seats`}),width:`384px`,title:`Add seats`,description:`€12 per seat a month, billed with your plan.`,footer:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(A,{children:(0,X.jsxs)(i,{onClick:()=>{O(e=>e+k),z.success(`${k} seats added`)},children:[`Add `,k,` seats`]})}),(0,X.jsx)(A,{children:(0,X.jsx)(i,{variant:`outline`,children:`Cancel`})})]}),children:(0,X.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:24},children:[(0,X.jsx)(i,{variant:`outline`,"aria-label":`Fewer seats`,disabled:k<=1,onClick:()=>j(e=>e-1),icon:(0,X.jsx)(`span`,{"aria-hidden":!0,children:`−`})}),(0,X.jsx)(`span`,{"aria-live":`polite`,style:{fontSize:32,lineHeight:`40px`,fontWeight:600,color:`var(--ds-foreground)`},children:k}),(0,X.jsx)(i,{variant:`outline`,"aria-label":`More seats`,onClick:()=>j(e=>e+1),icon:(0,X.jsx)(`span`,{"aria-hidden":!0,children:`+`})})]})}),(0,X.jsxs)(`p`,{style:{margin:0,fontSize:14,color:`var(--ds-muted-foreground)`},children:[`Workspace owner:`,` `,(0,X.jsxs)(Le,{align:`start`,trigger:(0,X.jsx)(`a`,{href:`#mira`,style:{color:`var(--ds-foreground)`,fontWeight:500,textDecoration:`underline`,textUnderlineOffset:3},children:`Mira Okafor`}),children:[(0,X.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,X.jsx)(p,{size:`lg`,initials:`MO`}),(0,X.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,X.jsx)(`span`,{style:{fontWeight:500},children:`Mira Okafor`}),(0,X.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`},children:`Owner · mira@orbit.dev`})]})]}),(0,X.jsx)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`},children:`Created the workspace and manages billing. Ask her to change the plan.`})]})]}),(0,X.jsx)(R,{variant:`separator`,children:`Today`}),P.map((e,t)=>(0,X.jsx)(R,{children:e},t)),(0,X.jsx)(R,{loading:!0,children:`Syncing with the directory…`})]})})]}),(0,X.jsxs)(re,{open:M!==null,onOpenChange:e=>!e&&N(null),variant:`destructive`,size:`sm`,title:`Remove ${M?.name??``}?`,description:`They lose access to the workspace at once. You can invite them again later.`,children:[(0,X.jsx)(ne,{children:`Cancel`}),(0,X.jsx)(te,{variant:`destructive`,onClick:()=>{M&&(t(e=>e.filter(e=>e.id!==M.id)),L(`${M.name} was removed`),z(`${M.name} was removed`,{action:{label:`Undo`,onClick:()=>t(e=>[...e,M])}}))},children:`Remove`})]}),(0,X.jsx)(Be,{})]})}},it=[`Members`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
              <Tabs defaultValue="seats" variant="line">
                <TabsList aria-label="Usage">
                  <TabsTrigger value="seats" count={members.length}>
                    Seats
                  </TabsTrigger>
                  <TabsTrigger value="storage">Storage</TabsTrigger>
                </TabsList>
                <TabsContent value="seats">
                  <Progress label="Seats" value={members.length} max={seats} valueLabel={\`\${members.length} of \${seats}\`} />
                </TabsContent>
                <TabsContent value="storage">
                  <Progress label="Storage" value={38} max={100} valueLabel="38 of 100 GB" />
                </TabsContent>
              </Tabs>
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
}`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Members,it as __namedExportsOrder,rt as default};