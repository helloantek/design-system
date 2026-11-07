import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-D2yus7lO.js";import{n as r,t as i}from"./Button-CNNIEAiE.js";import{n as a,t as ee}from"./Alert-W_LKZa35.js";import{i as o,n as te,r as ne,t as re}from"./AlertDialog-BXRLAe5z.js";import{i as s,n as c,r as ie,t as ae}from"./AspectRatio.fixtures-DhoS5kXd.js";import{C as oe,S as se,T as ce,_ as le,a as ue,c as de,g as fe,o as pe,p as me,r as he,t as ge,v as _e,y as l}from"./react-BpFzvgsn.js";import{n as u,t as d}from"./Avatar-Cx77qhoQ.js";import{n as f,t as ve}from"./AvatarGroup-C7bPUa_n.js";import{n as p,t as m}from"./Badge-DmCDwq2N.js";import{c as ye,d as be,h,i as xe,l as Se,n as Ce,o as g,t as _}from"./DropdownMenu-CgJzli20.js";import{i as v,n as we,r as Te,t as y}from"./Input-CnVqyErO.js";import{r as b,t as Ee}from"./ButtonGroup-DOk5Ceo4.js";import{n as x,t as De}from"./Toggle-WBnLgDBI.js";import{n as S,r as C,t as Oe}from"./ToggleGroup-D0WwlDf2.js";import{n as w,t as ke}from"./Calendar-DzHr0jOe.js";import{r as T,t as Ae}from"./Switch-Cd7luz2M.js";import{i as E,n as D,o as O,r as je,t as k}from"./Card-Do9aXs38.js";import{i as A,n as Me,r as Ne,t as Pe}from"./Collapsible-BVHd7m6G.js";import{n as j,t as Fe}from"./ContextMenu-CRU7MGZK.js";import{n as Ie,o as M,t as Le}from"./Field-Dko_235-.js";import{n as N,t as Re}from"./Separator-D8271IKX.js";import{n as ze,r as P,t as Be}from"./Dialog-D43paZAB.js";import{n as F,r as I,t as Ve}from"./Drawer-DwBI1fv4.js";import{n as L,t as He}from"./Empty-M73anj9b.js";import{n as R,t as Ue}from"./HoverCard-CbNE8hhJ.js";import{n as z,t as We}from"./Tooltip-ys9OKwvK.js";import{n as Ge,r as B,t as V}from"./Kbd-CUTHYqGu.js";import{n as H,t as U}from"./Marker-DYs_S2Ob.js";import{i as W,n as Ke,r as G}from"./Sonner-BVG7XcND.js";import{i as K,n as qe,r as Je,t as Ye}from"./Popover-DEkPmodr.js";import{n as Xe,r as q,t as Ze}from"./Progress-epP5_Tc1.js";import{n as Qe,r as $e,t as et}from"./Sheet-DMq7u2q5.js";import{n as tt,t as nt}from"./Spinner-Cw-iJ7-b.js";import{a as J,i as rt,n as it,r as at,t as ot}from"./Tabs-CvqxuwWI.js";var Y,X,st,ct,Z,lt,Q,ut;function $(){return($=e((()=>{Y=n(),l(),a(),s(),c(),o(),u(),f(),p(),r(),w(),A(),b(),O(),j(),h(),L(),P(),I(),M(),R(),v(),B(),H(),K(),q(),N(),$e(),tt(),T(),G(),J(),x(),C(),z(),X=t(),st=[{id:`mira`,name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{id:`jonas`,name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{id:`priya`,name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{id:`tomas`,name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`,pending:!0},{id:`aiko`,name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`,pending:!0}],ct={Owner:`violet`,Admin:`blue`,Member:`neutral`},Z=e=>e.split(` `).map(e=>e[0]).join(``),lt={title:`Playground/Team`,parameters:{layout:`padded`,docs:{description:{component:`A team settings page made of Card, Avatar, Avatar Group, Badge, Button Group, Separator, Spinner, Kbd, Progress, Progress circle, Aspect Ratio, Empty (search for someone who is not there), Input with Input Group Dropdown, Dropdown Menu, Context Menu (right-click a member), Tooltip, Alert, Alert Dialog, Dialog (team settings), Sheet (the activity log), Drawer (add seats), Hover Card (the workspace owner), Toggle (compact list), Toggle Group (sort by), Tabs (seats and storage usage), Popover (the invite link), Calendar (the offsite date, in a Popover), Collapsible (recent activity), Marker and toasts, for trying components together before they are merged. Use the toolbar to switch brand and colour scheme.`}}}},Q={render:function(){let[e,t]=(0,Y.useState)(st),[n,r]=(0,Y.useState)(`all`),[a,o]=(0,Y.useState)(``),[s,c]=(0,Y.useState)(`Name`),[l,u]=(0,Y.useState)(!0),[f,p]=(0,Y.useState)(!1),[h,v]=(0,Y.useState)(!1),[b,x]=(0,Y.useState)(`joined`),[C,w]=(0,Y.useState)(`Orbit`),[T,O]=(0,Y.useState)(!1),[A,j]=(0,Y.useState)(10),[M,N]=(0,Y.useState)(new Date(2026,4,14)),[P,I]=(0,Y.useState)(5),[L,R]=(0,Y.useState)(null),[z,B]=(0,Y.useState)([`Mira created the workspace`,`Jonas joined as Admin`]),H=e=>B(t=>[...t,e]),G=e.filter(e=>e.pending),K=[`Owner`,`Admin`,`Member`],q=e.filter(e=>(n===`all`||n===`pending`==!!e.pending)&&(s===`Name`?e.name:e.email).toLowerCase().includes(a.trim().toLowerCase())).sort((e,t)=>b===`joined`?0:(b===`role`?K.indexOf(e.role)-K.indexOf(t.role):0)||e.name.localeCompare(t.name)),$e=(e,n)=>{t(t=>t.map(t=>t.id===e.id?{...t,role:n}:t)),H(`${e.name} is now ${n}`),W.success(`${e.name} is now ${n}`)},tt=e=>W.info(`Invite sent again to ${e.email}`),J=e=>(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(ye,{label:`Role`,value:e.role,onValueChange:t=>$e(e,t),children:[`Admin`,`Member`].map(t=>(0,X.jsx)(Se,{value:t,disabled:e.role===`Owner`,children:t},t))}),(0,X.jsx)(be,{}),e.pending&&(0,X.jsx)(g,{icon:(0,X.jsx)(fe,{}),onClick:()=>tt(e),children:`Resend invite`}),(0,X.jsx)(g,{icon:(0,X.jsx)(se,{}),onClick:()=>W(`Email to ${e.email}`,{description:`Your mail app opens in a real product.`}),children:`Send email`}),(0,X.jsx)(g,{type:`destructive`,icon:(0,X.jsx)(pe,{}),disabled:e.role===`Owner`,onClick:()=>R(e),children:`Remove from team`})]});return(0,X.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 560px) 280px`,gap:16,alignItems:`start`,fontFamily:`var(--ds-font-sans)`},children:[(0,X.jsxs)(k,{as:`section`,"aria-label":`Team members`,children:[(0,X.jsx)(E,{title:`${C} members`,description:`Invite people and choose what they can do.`,action:(0,X.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,X.jsx)(Be,{trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,X.jsx)(de,{}),"aria-label":`Team settings`}),open:T,onOpenChange:O,title:`Team settings`,description:`The name shows in invites and on the team's page.`,footer:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(ze,{children:(0,X.jsx)(i,{variant:`outline`,children:`Cancel`})}),(0,X.jsx)(i,{type:`submit`,form:`team-settings`,children:`Save`})]}),children:(0,X.jsx)(`form`,{id:`team-settings`,onSubmit:e=>{e.preventDefault();let t=String(new FormData(e.currentTarget).get(`team`)??``).trim()||C;w(t),W.success(`Team renamed to ${t}`),O(!1)},children:(0,X.jsxs)(Ie,{children:[(0,X.jsx)(Le,{label:`Team name`,children:(0,X.jsx)(y,{name:`team`,defaultValue:C})}),(0,X.jsx)(Ae,{name:`invites`,label:`Members can invite people`,caption:`Otherwise only Admins send invites.`,defaultChecked:!0})]})})}),(0,X.jsxs)(Ye,{align:`end`,trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,X.jsx)(_e,{}),"aria-label":`Invite link`}),title:`Invite link`,description:`Anyone with the link joins as a Member.`,children:[(0,X.jsx)(y,{"aria-label":`Link`,readOnly:!0,defaultValue:`https://sort.team/join/acme-7f3k`,action:(0,X.jsx)(we,{"aria-label":`Copy invite link`,onClick:()=>W.success(`Invite link copied`),children:(0,X.jsx)(he,{})})}),(0,X.jsx)(qe,{children:(0,X.jsx)(Je,{children:(0,X.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>W.info(`A new invite link was created`),children:`Reset link`})})})]}),(0,X.jsx)(_,{align:`end`,trigger:(0,X.jsx)(i,{variant:`outline`,size:`sm`,leadingIcon:(0,X.jsx)(me,{}),children:`Invite`}),children:(0,X.jsxs)(xe,{label:`Invite as`,children:[(0,X.jsx)(g,{icon:(0,X.jsx)(le,{}),onClick:()=>W.success(`Invite link for Admins copied`),children:`Admin`}),(0,X.jsx)(g,{icon:(0,X.jsx)(me,{}),onClick:()=>W.success(`Invite link for Members copied`),children:`Member`})]})})]})}),(0,X.jsx)(D,{children:(0,X.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[G.length>0&&(0,X.jsx)(ee,{title:`${G.length} ${G.length===1?`invite is`:`invites are`} waiting`,description:`People join when they accept the email invite.`,action:(0,X.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>W.info(`${G.length} invites sent again`),children:`Resend all`})}),(0,X.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`},children:[(0,X.jsx)(Ee,{"aria-label":`Show`,children:[`all`,`active`,`pending`].map(e=>(0,X.jsx)(i,{variant:n===e?`secondary`:`outline`,size:`sm`,"aria-pressed":n===e,onClick:()=>r(e),children:e[0].toUpperCase()+e.slice(1)},e))}),(0,X.jsx)(`div`,{style:{flex:1,minWidth:200},children:(0,X.jsx)(y,{"aria-label":`Search members`,placeholder:`Search`,value:a,onChange:e=>o(e.currentTarget.value),leadIcon:(0,X.jsx)(ce,{}),action:(0,X.jsx)(_,{align:`end`,trigger:(0,X.jsx)(Te,{"aria-label":`Search in: ${s}`,children:s}),children:[`Name`,`Email`].map(e=>(0,X.jsx)(g,{onClick:()=>c(e),children:e},e))})})}),(0,X.jsx)(_,{align:`end`,trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,X.jsx)(ge,{}),"aria-label":`View options`}),children:(0,X.jsx)(Ce,{checked:l,onCheckedChange:u,children:`Show roles`})}),(0,X.jsx)(De,{size:`sm`,icon:(0,X.jsx)(ue,{}),"aria-label":`Compact list`,pressed:f,onPressedChange:p}),(0,X.jsxs)(Oe,{type:`single`,size:`sm`,variant:`outline`,spacing:0,"aria-label":`Sort by`,value:b,onValueChange:e=>e&&x(e),children:[(0,X.jsx)(S,{value:`joined`,children:`Joined`}),(0,X.jsx)(S,{value:`name`,children:`Name`}),(0,X.jsx)(S,{value:`role`,children:`Role`})]})]}),(0,X.jsx)(`ul`,{"aria-label":`Members`,style:{display:`grid`,gap:4,margin:0,padding:0,listStyle:`none`},children:q.map(e=>(0,X.jsx)(`li`,{children:(0,X.jsx)(Fe,{"aria-label":`${e.name} actions`,trigger:(0,X.jsxs)(`div`,{tabIndex:0,style:{display:`flex`,alignItems:`center`,gap:12,padding:f?`2px 8px`:8,borderRadius:8,outlineOffset:2},children:[(0,X.jsx)(d,{size:`sm`,initials:Z(e.name),name:e.name}),(0,X.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,X.jsx)(`div`,{style:{color:`var(--ds-foreground)`,fontSize:14,fontWeight:500},children:e.name}),!f&&(0,X.jsx)(`div`,{style:{color:`var(--ds-muted-foreground)`,fontSize:13},children:e.email})]}),e.pending&&(0,X.jsx)(m,{size:`sm`,color:`orange`,dot:!0,children:`Pending`}),l&&(0,X.jsx)(m,{size:`sm`,color:ct[e.role],children:e.role}),(0,X.jsx)(_,{align:`end`,trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,X.jsx)(oe,{}),"aria-label":`More actions for ${e.name}`}),children:J(e)})]}),children:J(e)})},e.id))}),q.length===0&&(0,X.jsx)(He,{icon:(0,X.jsx)(ce,{}),title:`No members match`,titleAs:`p`,description:`Try another name or email, or show everyone.`,actions:(0,X.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>{o(``),r(`all`)},children:`Show everyone`})})]})}),(0,X.jsxs)(je,{justify:`between`,muted:!0,children:[(0,X.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`var(--ds-muted-foreground)`,fontSize:13},children:[(0,X.jsx)(ve,{size:`sm`,max:3,children:e.map(e=>(0,X.jsx)(d,{initials:Z(e.name),name:e.name},e.id))}),e.length,` of `,A,` seats used`,(0,X.jsx)(Re,{orientation:`vertical`,style:{height:16}}),G.length,` pending`]}),(0,X.jsx)(We,{content:(0,X.jsxs)(X.Fragment,{children:[`Right-click a member, or press`,` `,(0,X.jsxs)(Ge,{children:[(0,X.jsx)(V,{variant:`inverted`,size:`sm`,children:`Shift`}),(0,X.jsx)(V,{variant:`inverted`,size:`sm`,children:`F10`})]}),` `,`on it, for the same actions`]}),children:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,children:`Tips`})})]})]}),(0,X.jsxs)(k,{as:`section`,size:`sm`,"aria-label":`Activity`,children:[(0,X.jsx)(E,{title:`Activity`,action:(0,X.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,X.jsx)(nt,{size:`sm`,variant:`gradient`,label:`Syncing activity`}),(0,X.jsxs)(et,{trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,children:`View all`}),title:`Activity log`,description:`Everything that happened in ${C}.`,footer:(0,X.jsx)(Qe,{children:(0,X.jsx)(i,{variant:`outline`,children:`Done`})}),children:[(0,X.jsx)(U,{variant:`separator`,children:`Today`}),z.map((e,t)=>(0,X.jsx)(U,{children:e},t)),(0,X.jsx)(U,{variant:`separator`,children:`Earlier`}),(0,X.jsx)(U,{children:`Mira created the team page`}),(0,X.jsx)(U,{children:`Seats raised from 5 to 10`})]})]})}),(0,X.jsx)(D,{children:(0,X.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,X.jsx)(ie,{ratio:`21:9`,rounded:!0,children:(0,X.jsx)(`img`,{src:ae,alt:`The team at the last offsite`})}),(0,X.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:12,fontSize:14,color:`var(--ds-muted-foreground)`},children:[`Next offsite`,(0,X.jsx)(Ye,{align:`end`,"aria-label":`Pick the offsite date`,trigger:(0,X.jsx)(i,{variant:`outline`,size:`sm`,"aria-label":`Next offsite: ${M.toLocaleDateString(`en-US`,{month:`long`,day:`numeric`,year:`numeric`})}`,children:M.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`})}),children:(0,X.jsx)(ke,{variant:`flat`,"aria-label":`Offsite date`,selected:M,onSelect:e=>{N(e),W.success(`Offsite moved to ${e.toLocaleDateString(`en-US`,{month:`long`,day:`numeric`})}`)},disabled:e=>e.getDay()===0||e.getDay()===6})})]}),(0,X.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,fontSize:14,color:`var(--ds-muted-foreground)`},children:[(0,X.jsx)(Xe,{value:72,size:`40px`,thickness:12,"aria-label":`Profiles complete`}),`72 % of profiles are complete`]}),(0,X.jsxs)(Pe,{open:h,onOpenChange:v,children:[(0,X.jsx)(Ne,{children:h?`Hide recent activity`:`Show recent activity`}),(0,X.jsx)(Me,{children:z.slice(-3).map((e,t)=>(0,X.jsx)(U,{children:e},t))})]}),(0,X.jsxs)(ot,{defaultValue:`seats`,variant:`line`,children:[(0,X.jsxs)(at,{"aria-label":`Usage`,children:[(0,X.jsx)(rt,{value:`seats`,count:e.length,children:`Seats`}),(0,X.jsx)(rt,{value:`storage`,children:`Storage`})]}),(0,X.jsx)(it,{value:`seats`,children:(0,X.jsx)(Ze,{label:`Seats`,value:e.length,max:A,valueLabel:`${e.length} of ${A}`})}),(0,X.jsx)(it,{value:`storage`,children:(0,X.jsx)(Ze,{label:`Storage`,value:38,max:100,valueLabel:`38 of 100 GB`})})]}),(0,X.jsx)(Ve,{trigger:(0,X.jsx)(i,{variant:`outline`,size:`sm`,children:`Add seats`}),width:`384px`,title:`Add seats`,description:`€12 per seat a month, billed with your plan.`,footer:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(F,{children:(0,X.jsxs)(i,{onClick:()=>{j(e=>e+P),W.success(`${P} seats added`)},children:[`Add `,P,` seats`]})}),(0,X.jsx)(F,{children:(0,X.jsx)(i,{variant:`outline`,children:`Cancel`})})]}),children:(0,X.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:24},children:[(0,X.jsx)(i,{variant:`outline`,"aria-label":`Fewer seats`,disabled:P<=1,onClick:()=>I(e=>e-1),icon:(0,X.jsx)(`span`,{"aria-hidden":!0,children:`−`})}),(0,X.jsx)(`span`,{"aria-live":`polite`,style:{fontSize:32,lineHeight:`40px`,fontWeight:600,color:`var(--ds-foreground)`},children:P}),(0,X.jsx)(i,{variant:`outline`,"aria-label":`More seats`,onClick:()=>I(e=>e+1),icon:(0,X.jsx)(`span`,{"aria-hidden":!0,children:`+`})})]})}),(0,X.jsxs)(`p`,{style:{margin:0,fontSize:14,color:`var(--ds-muted-foreground)`},children:[`Workspace owner:`,` `,(0,X.jsxs)(Ue,{align:`start`,trigger:(0,X.jsx)(`a`,{href:`#mira`,style:{color:`var(--ds-foreground)`,fontWeight:500,textDecoration:`underline`,textUnderlineOffset:3},children:`Mira Okafor`}),children:[(0,X.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,X.jsx)(d,{size:`lg`,initials:`MO`}),(0,X.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,X.jsx)(`span`,{style:{fontWeight:500},children:`Mira Okafor`}),(0,X.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`},children:`Owner · mira@orbit.dev`})]})]}),(0,X.jsx)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`},children:`Created the workspace and manages billing. Ask her to change the plan.`})]})]}),(0,X.jsx)(U,{variant:`separator`,children:`Today`}),z.map((e,t)=>(0,X.jsx)(U,{children:e},t)),(0,X.jsx)(U,{loading:!0,children:`Syncing with the directory…`})]})})]}),(0,X.jsxs)(re,{open:L!==null,onOpenChange:e=>!e&&R(null),variant:`destructive`,size:`sm`,title:`Remove ${L?.name??``}?`,description:`They lose access to the workspace at once. You can invite them again later.`,children:[(0,X.jsx)(ne,{children:`Cancel`}),(0,X.jsx)(te,{variant:`destructive`,onClick:()=>{L&&(t(e=>e.filter(e=>e.id!==L.id)),H(`${L.name} was removed`),W(`${L.name} was removed`,{action:{label:`Undo`,onClick:()=>t(e=>[...e,L])}}))},children:`Remove`})]}),(0,X.jsx)(Ke,{})]})}},ut=[`Members`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [members, setMembers] = useState(initialMembers);
    const [view, setView] = useState<View>('all');
    const [query, setQuery] = useState('');
    const [searchIn, setSearchIn] = useState<'Name' | 'Email'>('Name');
    const [showRoles, setShowRoles] = useState(true);
    const [compact, setCompact] = useState(false);
    const [recentOpen, setRecentOpen] = useState(false);
    const [sortBy, setSortBy] = useState<'joined' | 'name' | 'role'>('joined');
    const [teamName, setTeamName] = useState('Orbit');
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [seats, setSeats] = useState(10);
    const [offsite, setOffsite] = useState(new Date(2026, 4, 14));
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
              justifyContent: 'space-between',
              gap: 12,
              fontSize: 14,
              color: 'var(--ds-muted-foreground)'
            }}>
                Next offsite
                <Popover align="end" aria-label="Pick the offsite date" trigger={<Button variant="outline" size="sm" aria-label={\`Next offsite: \${offsite.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}\`}>
                      {offsite.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
                    </Button>}>
                  <Calendar variant="flat" aria-label="Offsite date" selected={offsite} onSelect={d => {
                  setOffsite(d);
                  toast.success(\`Offsite moved to \${d.toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric'
                  })}\`);
                }} disabled={d => d.getDay() === 0 || d.getDay() === 6} />
                </Popover>
              </div>
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
              <Collapsible open={recentOpen} onOpenChange={setRecentOpen}>
                <CollapsibleTrigger>{recentOpen ? 'Hide recent activity' : 'Show recent activity'}</CollapsibleTrigger>
                <CollapsibleContent>
                  {activity.slice(-3).map((line, i) => <Marker key={i}>{line}</Marker>)}
                </CollapsibleContent>
              </Collapsible>
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
}`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Members,ut as __namedExportsOrder,lt as default};