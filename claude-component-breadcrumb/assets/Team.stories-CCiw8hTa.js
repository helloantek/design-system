import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-Xf_6A3Ov.js";import{n as r,t as i}from"./Button-nbstrhv5.js";import{n as ee,o as a,t as te}from"./Field-DLyzptME.js";import{i as o,n as ne,r as re,t as s}from"./Input-St-9ckzj.js";import{r as c,t as ie}from"./Switch-BsFTeO0x.js";import{a as ae,i as l,n as u,r as d,t as oe}from"./Accordion-DpI83-P4.js";import{n as f,t as se}from"./Alert-DhdD19Oo.js";import{i as ce,n as le,r as ue,t as de}from"./AlertDialog-DHwHH6FJ.js";import{i as p,n as fe,r as pe,t as me}from"./AspectRatio.fixtures-V3poERia.js";import{C as he,S as ge,T as _e,_ as ve,a as ye,c as be,g as xe,o as Se,p as Ce,r as we,t as Te,v as Ee,y as m}from"./react-Luli-tjY.js";import{n as h,t as g}from"./Avatar-DMQc-Jby.js";import{n as _,t as De}from"./AvatarGroup-ji-XiUqd.js";import{n as Oe,t as v}from"./Badge-BLBRkA8g.js";import{c as ke,d as Ae,h as y,i as je,l as Me,n as Ne,o as b,t as x}from"./DropdownMenu-KT0CSwIT.js";import{i as S,r as C,t as Pe}from"./Breadcrumb-CA_Y4A3f.js";import{r as w,t as Fe}from"./ButtonGroup-DUJcBw3r.js";import{n as T,t as Ie}from"./Toggle-DmkT9acP.js";import{n as E,r as D,t as Le}from"./ToggleGroup-BAdEs14I.js";import{n as O,t as Re}from"./Calendar-SWDKq0qq.js";import{i as k,n as A,o as j,r as ze,t as M}from"./Card-579U6ir1.js";import{i as N,n as Be,r as Ve,t as He}from"./Collapsible-Uxv1Hz_W.js";import{n as P,t as Ue}from"./ContextMenu-QVI2v1mg.js";import{n as F,t as We}from"./Separator-BezM8ZwC.js";import{n as Ge,r as I,t as Ke}from"./Dialog-D7qTnDJp.js";import{n as qe,r as L,t as Je}from"./Drawer-CjA2VcMb.js";import{n as R,t as Ye}from"./Empty-gLQZ6Gri.js";import{n as z,t as Xe}from"./HoverCard-CXgzT7x0.js";import{n as B,t as Ze}from"./Tooltip-Dp1pMX7C.js";import{n as Qe,r as V,t as H}from"./Kbd-RVF13SG5.js";import{n as U,t as W}from"./Marker-DkoodDvT.js";import{i as G,n as $e,r as K}from"./Sonner-Uz3LpVTG.js";import{i as q,n as et,r as tt,t as nt}from"./Popover-C_y6el0L.js";import{n as rt,r as it,t as at}from"./Progress-DskWs6mJ.js";import{n as ot,r as J,t as st}from"./Sheet-CIrmXgmg.js";import{n as ct,t as lt}from"./Spinner-D_gfH3Lc.js";import{a as ut,i as dt,n as ft,r as pt,t as mt}from"./Tabs-CgbZZRIb.js";var Y,X,ht,Z,Q,gt,$,_t;function vt(){return(vt=e((()=>{Y=n(),m(),f(),p(),fe(),ae(),ce(),h(),_(),Oe(),S(),r(),O(),N(),w(),j(),P(),y(),R(),I(),L(),a(),z(),o(),V(),U(),q(),it(),F(),J(),ct(),c(),K(),ut(),T(),D(),B(),X=t(),ht=[{id:`mira`,name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{id:`jonas`,name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{id:`priya`,name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{id:`tomas`,name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`,pending:!0},{id:`aiko`,name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`,pending:!0}],Z={Owner:`violet`,Admin:`blue`,Member:`neutral`},Q=e=>e.split(` `).map(e=>e[0]).join(``),gt={title:`Playground/Team`,parameters:{layout:`padded`,docs:{description:{component:`A team settings page made of Breadcrumb (switch team), Card, Avatar, Avatar Group, Badge, Button Group, Separator, Spinner, Kbd, Progress, Progress circle, Aspect Ratio, Empty (search for someone who is not there), Input with Input Group Dropdown, Dropdown Menu, Context Menu (right-click a member), Tooltip, Alert, Alert Dialog, Dialog (team settings), Sheet (the activity log), Drawer (add seats), Hover Card (the workspace owner), Toggle (compact list), Toggle Group (sort by), Tabs (seats and storage usage), Popover (the invite link), Calendar (the offsite date, in a Popover), Collapsible (recent activity), Accordion (workspace questions), Marker and toasts, for trying components together before they are merged. Use the toolbar to switch brand and colour scheme.`}}}},$={render:function(){let[e,t]=(0,Y.useState)(ht),[n,r]=(0,Y.useState)(`all`),[a,o]=(0,Y.useState)(``),[c,ae]=(0,Y.useState)(`Name`),[f,ce]=(0,Y.useState)(!0),[p,fe]=(0,Y.useState)(!1),[m,h]=(0,Y.useState)(!1),[_,Oe]=(0,Y.useState)(`joined`),[y,S]=(0,Y.useState)(`Orbit`),[w,T]=(0,Y.useState)(!1),[D,O]=(0,Y.useState)(10),[j,N]=(0,Y.useState)(new Date(2026,4,14)),[P,F]=(0,Y.useState)(5),[I,L]=(0,Y.useState)(null),[R,z]=(0,Y.useState)([`Mira created the workspace`,`Jonas joined as Admin`]),B=e=>z(t=>[...t,e]),V=e.filter(e=>e.pending),U=[`Owner`,`Admin`,`Member`],K=e.filter(e=>(n===`all`||n===`pending`==!!e.pending)&&(c===`Name`?e.name:e.email).toLowerCase().includes(a.trim().toLowerCase())).sort((e,t)=>_===`joined`?0:(_===`role`?U.indexOf(e.role)-U.indexOf(t.role):0)||e.name.localeCompare(t.name)),q=(e,n)=>{t(t=>t.map(t=>t.id===e.id?{...t,role:n}:t)),B(`${e.name} is now ${n}`),G.success(`${e.name} is now ${n}`)},it=e=>G.info(`Invite sent again to ${e.email}`),J=e=>(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(ke,{label:`Role`,value:e.role,onValueChange:t=>q(e,t),children:[`Admin`,`Member`].map(t=>(0,X.jsx)(Me,{value:t,disabled:e.role===`Owner`,children:t},t))}),(0,X.jsx)(Ae,{}),e.pending&&(0,X.jsx)(b,{icon:(0,X.jsx)(xe,{}),onClick:()=>it(e),children:`Resend invite`}),(0,X.jsx)(b,{icon:(0,X.jsx)(ge,{}),onClick:()=>G(`Email to ${e.email}`,{description:`Your mail app opens in a real product.`}),children:`Send email`}),(0,X.jsx)(b,{type:`destructive`,icon:(0,X.jsx)(Se,{}),disabled:e.role===`Owner`,onClick:()=>L(e),children:`Remove from team`})]});return(0,X.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 560px) 280px`,gap:16,alignItems:`start`,fontFamily:`var(--ds-font-sans)`},children:[(0,X.jsxs)(Pe,{style:{gridColumn:`1 / -1`},children:[(0,X.jsx)(C,{href:`#workspace`,children:`Workspace`}),(0,X.jsx)(C,{menuLabel:`Switch team`,menu:[`Orbit`,`Design guild`,`Platform`].map(e=>(0,X.jsx)(b,{onClick:()=>G(`Switched to ${e}`,{description:`A real product would open that team.`}),children:e},e)),children:y}),(0,X.jsx)(C,{current:!0,children:`Members`})]}),(0,X.jsxs)(M,{as:`section`,"aria-label":`Team members`,children:[(0,X.jsx)(k,{title:`${y} members`,description:`Invite people and choose what they can do.`,action:(0,X.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,X.jsx)(Ke,{trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,X.jsx)(be,{}),"aria-label":`Team settings`}),open:w,onOpenChange:T,title:`Team settings`,description:`The name shows in invites and on the team's page.`,footer:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Ge,{children:(0,X.jsx)(i,{variant:`outline`,children:`Cancel`})}),(0,X.jsx)(i,{type:`submit`,form:`team-settings`,children:`Save`})]}),children:(0,X.jsx)(`form`,{id:`team-settings`,onSubmit:e=>{e.preventDefault();let t=String(new FormData(e.currentTarget).get(`team`)??``).trim()||y;S(t),G.success(`Team renamed to ${t}`),T(!1)},children:(0,X.jsxs)(ee,{children:[(0,X.jsx)(te,{label:`Team name`,children:(0,X.jsx)(s,{name:`team`,defaultValue:y})}),(0,X.jsx)(ie,{name:`invites`,label:`Members can invite people`,caption:`Otherwise only Admins send invites.`,defaultChecked:!0})]})})}),(0,X.jsxs)(nt,{align:`end`,trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,X.jsx)(Ee,{}),"aria-label":`Invite link`}),title:`Invite link`,description:`Anyone with the link joins as a Member.`,children:[(0,X.jsx)(s,{"aria-label":`Link`,readOnly:!0,defaultValue:`https://sort.team/join/acme-7f3k`,action:(0,X.jsx)(ne,{"aria-label":`Copy invite link`,onClick:()=>G.success(`Invite link copied`),children:(0,X.jsx)(we,{})})}),(0,X.jsx)(et,{children:(0,X.jsx)(tt,{children:(0,X.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>G.info(`A new invite link was created`),children:`Reset link`})})})]}),(0,X.jsx)(x,{align:`end`,trigger:(0,X.jsx)(i,{variant:`outline`,size:`sm`,leadingIcon:(0,X.jsx)(Ce,{}),children:`Invite`}),children:(0,X.jsxs)(je,{label:`Invite as`,children:[(0,X.jsx)(b,{icon:(0,X.jsx)(ve,{}),onClick:()=>G.success(`Invite link for Admins copied`),children:`Admin`}),(0,X.jsx)(b,{icon:(0,X.jsx)(Ce,{}),onClick:()=>G.success(`Invite link for Members copied`),children:`Member`})]})})]})}),(0,X.jsx)(A,{children:(0,X.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[V.length>0&&(0,X.jsx)(se,{title:`${V.length} ${V.length===1?`invite is`:`invites are`} waiting`,description:`People join when they accept the email invite.`,action:(0,X.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>G.info(`${V.length} invites sent again`),children:`Resend all`})}),(0,X.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`},children:[(0,X.jsx)(Fe,{"aria-label":`Show`,children:[`all`,`active`,`pending`].map(e=>(0,X.jsx)(i,{variant:n===e?`secondary`:`outline`,size:`sm`,"aria-pressed":n===e,onClick:()=>r(e),children:e[0].toUpperCase()+e.slice(1)},e))}),(0,X.jsx)(`div`,{style:{flex:1,minWidth:200},children:(0,X.jsx)(s,{"aria-label":`Search members`,placeholder:`Search`,value:a,onChange:e=>o(e.currentTarget.value),leadIcon:(0,X.jsx)(_e,{}),action:(0,X.jsx)(x,{align:`end`,trigger:(0,X.jsx)(re,{"aria-label":`Search in: ${c}`,children:c}),children:[`Name`,`Email`].map(e=>(0,X.jsx)(b,{onClick:()=>ae(e),children:e},e))})})}),(0,X.jsx)(x,{align:`end`,trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,X.jsx)(Te,{}),"aria-label":`View options`}),children:(0,X.jsx)(Ne,{checked:f,onCheckedChange:ce,children:`Show roles`})}),(0,X.jsx)(Ie,{size:`sm`,icon:(0,X.jsx)(ye,{}),"aria-label":`Compact list`,pressed:p,onPressedChange:fe}),(0,X.jsxs)(Le,{type:`single`,size:`sm`,variant:`outline`,spacing:0,"aria-label":`Sort by`,value:_,onValueChange:e=>e&&Oe(e),children:[(0,X.jsx)(E,{value:`joined`,children:`Joined`}),(0,X.jsx)(E,{value:`name`,children:`Name`}),(0,X.jsx)(E,{value:`role`,children:`Role`})]})]}),(0,X.jsx)(`ul`,{"aria-label":`Members`,style:{display:`grid`,gap:4,margin:0,padding:0,listStyle:`none`},children:K.map(e=>(0,X.jsx)(`li`,{children:(0,X.jsx)(Ue,{"aria-label":`${e.name} actions`,trigger:(0,X.jsxs)(`div`,{tabIndex:0,style:{display:`flex`,alignItems:`center`,gap:12,padding:p?`2px 8px`:8,borderRadius:8,outlineOffset:2},children:[(0,X.jsx)(g,{size:`sm`,initials:Q(e.name),name:e.name}),(0,X.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,X.jsx)(`div`,{style:{color:`var(--ds-foreground)`,fontSize:14,fontWeight:500},children:e.name}),!p&&(0,X.jsx)(`div`,{style:{color:`var(--ds-muted-foreground)`,fontSize:13},children:e.email})]}),e.pending&&(0,X.jsx)(v,{size:`sm`,color:`orange`,dot:!0,children:`Pending`}),f&&(0,X.jsx)(v,{size:`sm`,color:Z[e.role],children:e.role}),(0,X.jsx)(x,{align:`end`,trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,X.jsx)(he,{}),"aria-label":`More actions for ${e.name}`}),children:J(e)})]}),children:J(e)})},e.id))}),K.length===0&&(0,X.jsx)(Ye,{icon:(0,X.jsx)(_e,{}),title:`No members match`,titleAs:`p`,description:`Try another name or email, or show everyone.`,actions:(0,X.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>{o(``),r(`all`)},children:`Show everyone`})})]})}),(0,X.jsxs)(ze,{justify:`between`,muted:!0,children:[(0,X.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`var(--ds-muted-foreground)`,fontSize:13},children:[(0,X.jsx)(De,{size:`sm`,max:3,children:e.map(e=>(0,X.jsx)(g,{initials:Q(e.name),name:e.name},e.id))}),e.length,` of `,D,` seats used`,(0,X.jsx)(We,{orientation:`vertical`,style:{height:16}}),V.length,` pending`]}),(0,X.jsx)(Ze,{content:(0,X.jsxs)(X.Fragment,{children:[`Right-click a member, or press`,` `,(0,X.jsxs)(Qe,{children:[(0,X.jsx)(H,{variant:`inverted`,size:`sm`,children:`Shift`}),(0,X.jsx)(H,{variant:`inverted`,size:`sm`,children:`F10`})]}),` `,`on it, for the same actions`]}),children:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,children:`Tips`})})]})]}),(0,X.jsxs)(M,{as:`section`,size:`sm`,"aria-label":`Activity`,children:[(0,X.jsx)(k,{title:`Activity`,action:(0,X.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,X.jsx)(lt,{size:`sm`,variant:`gradient`,label:`Syncing activity`}),(0,X.jsxs)(st,{trigger:(0,X.jsx)(i,{variant:`ghost`,size:`sm`,children:`View all`}),title:`Activity log`,description:`Everything that happened in ${y}.`,footer:(0,X.jsx)(ot,{children:(0,X.jsx)(i,{variant:`outline`,children:`Done`})}),children:[(0,X.jsx)(W,{variant:`separator`,children:`Today`}),R.map((e,t)=>(0,X.jsx)(W,{children:e},t)),(0,X.jsx)(W,{variant:`separator`,children:`Earlier`}),(0,X.jsx)(W,{children:`Mira created the team page`}),(0,X.jsx)(W,{children:`Seats raised from 5 to 10`})]})]})}),(0,X.jsx)(A,{children:(0,X.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,X.jsx)(pe,{ratio:`21:9`,rounded:!0,children:(0,X.jsx)(`img`,{src:me,alt:`The team at the last offsite`})}),(0,X.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:12,fontSize:14,color:`var(--ds-muted-foreground)`},children:[`Next offsite`,(0,X.jsx)(nt,{align:`end`,"aria-label":`Pick the offsite date`,trigger:(0,X.jsx)(i,{variant:`outline`,size:`sm`,"aria-label":`Next offsite: ${j.toLocaleDateString(`en-US`,{month:`long`,day:`numeric`,year:`numeric`})}`,children:j.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`})}),children:(0,X.jsx)(Re,{variant:`flat`,"aria-label":`Offsite date`,selected:j,onSelect:e=>{N(e),G.success(`Offsite moved to ${e.toLocaleDateString(`en-US`,{month:`long`,day:`numeric`})}`)},disabled:e=>e.getDay()===0||e.getDay()===6})})]}),(0,X.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,fontSize:14,color:`var(--ds-muted-foreground)`},children:[(0,X.jsx)(rt,{value:72,size:`40px`,thickness:12,"aria-label":`Profiles complete`}),`72 % of profiles are complete`]}),(0,X.jsxs)(He,{open:m,onOpenChange:h,children:[(0,X.jsx)(Ve,{children:m?`Hide recent activity`:`Show recent activity`}),(0,X.jsx)(Be,{children:R.slice(-3).map((e,t)=>(0,X.jsx)(W,{children:e},t))})]}),(0,X.jsxs)(mt,{defaultValue:`seats`,variant:`line`,children:[(0,X.jsxs)(pt,{"aria-label":`Usage`,children:[(0,X.jsx)(dt,{value:`seats`,count:e.length,children:`Seats`}),(0,X.jsx)(dt,{value:`storage`,children:`Storage`})]}),(0,X.jsx)(ft,{value:`seats`,children:(0,X.jsx)(at,{label:`Seats`,value:e.length,max:D,valueLabel:`${e.length} of ${D}`})}),(0,X.jsx)(ft,{value:`storage`,children:(0,X.jsx)(at,{label:`Storage`,value:38,max:100,valueLabel:`38 of 100 GB`})})]}),(0,X.jsx)(Je,{trigger:(0,X.jsx)(i,{variant:`outline`,size:`sm`,children:`Add seats`}),width:`384px`,title:`Add seats`,description:`€12 per seat a month, billed with your plan.`,footer:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(qe,{children:(0,X.jsxs)(i,{onClick:()=>{O(e=>e+P),G.success(`${P} seats added`)},children:[`Add `,P,` seats`]})}),(0,X.jsx)(qe,{children:(0,X.jsx)(i,{variant:`outline`,children:`Cancel`})})]}),children:(0,X.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:24},children:[(0,X.jsx)(i,{variant:`outline`,"aria-label":`Fewer seats`,disabled:P<=1,onClick:()=>F(e=>e-1),icon:(0,X.jsx)(`span`,{"aria-hidden":!0,children:`−`})}),(0,X.jsx)(`span`,{"aria-live":`polite`,style:{fontSize:32,lineHeight:`40px`,fontWeight:600,color:`var(--ds-foreground)`},children:P}),(0,X.jsx)(i,{variant:`outline`,"aria-label":`More seats`,onClick:()=>F(e=>e+1),icon:(0,X.jsx)(`span`,{"aria-hidden":!0,children:`+`})})]})}),(0,X.jsxs)(`p`,{style:{margin:0,fontSize:14,color:`var(--ds-muted-foreground)`},children:[`Workspace owner:`,` `,(0,X.jsxs)(Xe,{align:`start`,trigger:(0,X.jsx)(`a`,{href:`#mira`,style:{color:`var(--ds-foreground)`,fontWeight:500,textDecoration:`underline`,textUnderlineOffset:3},children:`Mira Okafor`}),children:[(0,X.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,X.jsx)(g,{size:`lg`,initials:`MO`}),(0,X.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,X.jsx)(`span`,{style:{fontWeight:500},children:`Mira Okafor`}),(0,X.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`},children:`Owner · mira@orbit.dev`})]})]}),(0,X.jsx)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`},children:`Created the workspace and manages billing. Ask her to change the plan.`})]})]}),(0,X.jsx)(W,{variant:`separator`,children:`Today`}),R.map((e,t)=>(0,X.jsx)(W,{children:e},t)),(0,X.jsx)(W,{loading:!0,children:`Syncing with the directory…`})]})})]}),(0,X.jsxs)(oe,{"aria-label":`Workspace questions`,defaultValue:`seats`,children:[(0,X.jsxs)(d,{value:`seats`,children:[(0,X.jsx)(l,{children:`How are seats billed?`}),(0,X.jsx)(u,{children:(0,X.jsxs)(`p`,{children:[`Each seat is €12 a month, billed with your plan. You have `,D,` seats; removing a member frees theirs at once.`]})})]}),(0,X.jsxs)(d,{value:`roles`,children:[(0,X.jsx)(l,{children:`What can each role do?`}),(0,X.jsx)(u,{children:(0,X.jsx)(`p`,{children:`Owners manage billing, Admins invite and remove people, Members work in shared notes, and Guests see only what is shared with them.`})})]}),(0,X.jsxs)(d,{value:`leave`,children:[(0,X.jsx)(l,{children:`What happens when someone leaves?`}),(0,X.jsx)(u,{children:(0,X.jsxs)(`p`,{children:[`Their notes stay in `,y,`. Ownership moves to the person who removed them.`]})})]})]}),(0,X.jsxs)(de,{open:I!==null,onOpenChange:e=>!e&&L(null),variant:`destructive`,size:`sm`,title:`Remove ${I?.name??``}?`,description:`They lose access to the workspace at once. You can invite them again later.`,children:[(0,X.jsx)(ue,{children:`Cancel`}),(0,X.jsx)(le,{variant:`destructive`,onClick:()=>{I&&(t(e=>e.filter(e=>e.id!==I.id)),B(`${I.name} was removed`),G(`${I.name} was removed`,{action:{label:`Undo`,onClick:()=>t(e=>[...e,I])}}))},children:`Remove`})]}),(0,X.jsx)($e,{})]})}},_t=[`Members`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
        <Breadcrumb style={{
        gridColumn: '1 / -1'
      }}>
          <BreadcrumbItem href="#workspace">Workspace</BreadcrumbItem>
          <BreadcrumbItem menuLabel="Switch team" menu={['Orbit', 'Design guild', 'Platform'].map(t => <DropdownMenuItem key={t} onClick={() => toast(\`Switched to \${t}\`, {
          description: 'A real product would open that team.'
        })}>{t}</DropdownMenuItem>)}>
            {teamName}
          </BreadcrumbItem>
          <BreadcrumbItem current>Members</BreadcrumbItem>
        </Breadcrumb>
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

        <Accordion aria-label="Workspace questions" defaultValue="seats">
          <AccordionItem value="seats">
            <AccordionTrigger>How are seats billed?</AccordionTrigger>
            <AccordionContent>
              <p>Each seat is €12 a month, billed with your plan. You have {seats} seats; removing a member frees theirs at once.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="roles">
            <AccordionTrigger>What can each role do?</AccordionTrigger>
            <AccordionContent>
              <p>Owners manage billing, Admins invite and remove people, Members work in shared notes, and Guests see only what is shared with them.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="leave">
            <AccordionTrigger>What happens when someone leaves?</AccordionTrigger>
            <AccordionContent>
              <p>Their notes stay in {teamName}. Ownership moves to the person who removed them.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

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
}`,...$.parameters?.docs?.source}}}})))()}vt();export{$ as Members,_t as __namedExportsOrder,gt as default};