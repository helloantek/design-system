import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-tfjbDNbD.js";import{n as r,t as i}from"./Button-jPgBWd44.js";import{n as ee,o as a,t as te}from"./Field-7HrMHRSX.js";import{i as o,n as ne,r as re,t as s}from"./Input-BPjFEhOr.js";import{r as c,t as ie}from"./Switch-BBNjCGwF.js";import{a as ae,i as l,n as u,r as d,t as oe}from"./Accordion-CLvUb5oi.js";import{n as f,t as se}from"./Alert-CpY69b9t.js";import{i as p,n as ce,r as le,t as ue}from"./AlertDialog-BX3LBauh.js";import{i as m,n as de,r as fe,t as pe}from"./AspectRatio.fixtures-D3xWa83h.js";import{C as me,S as he,T as ge,_ as _e,a as ve,c as ye,g as be,o as xe,p as Se,r as Ce,t as we,v as Te,y as h}from"./react-BT5Ex4-Q.js";import{n as Ee,t as g}from"./Avatar-C3XRGPt8.js";import{n as _,t as De}from"./AvatarGroup-CfYzknRe.js";import{n as v,t as y}from"./Badge-BWIjFXiv.js";import{c as Oe,d as ke,h as b,i as Ae,l as je,n as Me,o as x,t as S}from"./DropdownMenu-nrxVG76z.js";import{i as C,r as w,t as Ne}from"./Breadcrumb-D1lwyolU.js";import{r as T,t as Pe}from"./ButtonGroup-BD_uoe_g.js";import{n as E,t as Fe}from"./Toggle-jcECgQqQ.js";import{n as D,r as O,t as Ie}from"./ToggleGroup-CbY_2NRA.js";import{n as k,t as Le}from"./Calendar-DxDHqfiY.js";import{i as A,n as j,o as M,r as Re,t as N}from"./Card-CsasyApK.js";import{i as ze,n as Be,r as Ve,t as He}from"./Collapsible-BeBvPAu4.js";import{n as P,t as Ue}from"./ContextMenu-DjOQ8URk.js";import{n as We,t as Ge}from"./Separator-kSn-g98V.js";import{n as Ke,r as F,t as qe}from"./Dialog-D68CyK1n.js";import{n as Je,r as I,t as Ye}from"./Drawer-dhuFHyIb.js";import{n as L,t as Xe}from"./Empty-Iho1flj_.js";import{n as R,t as Ze}from"./HoverCard-CrOQN8T5.js";import{n as z,t as Qe}from"./Tooltip-LaKLina6.js";import{n as $e,r as et,t as tt}from"./Kbd-BE37KsbW.js";import{n as B,t as V}from"./Marker-CIccnC8U.js";import{n as H,t as nt}from"./Pagination-DKnNxaSY.js";import{i as U,n as rt,r as W}from"./Sonner-DsByitmM.js";import{i as G,n as it,r as at,t as ot}from"./Popover-CUUZnYDh.js";import{n as st,r as ct,t as lt}from"./Progress-H_sA5S-t.js";import{n as ut,r as dt,t as ft}from"./Sheet-CstLL2XZ.js";import{n as K,t as pt}from"./Spinner-B7YkhAUD.js";import{a as mt,i as ht,n as gt,r as _t,t as vt}from"./Tabs-C-OHKmVs.js";var q,J,Y,yt,bt,X,Z,Q,xt;function $(){return($=e((()=>{q=n(),h(),f(),m(),de(),ae(),p(),Ee(),_(),v(),C(),r(),k(),ze(),T(),M(),P(),b(),L(),F(),I(),a(),R(),o(),et(),B(),H(),G(),ct(),We(),dt(),K(),c(),W(),mt(),E(),O(),z(),J=t(),Y=[`Mira created the team page`,`Seats raised from 5 to 10`,`Priya joined as Member`,`Jonas turned on two-step sign-in`,`Mira connected the calendar`,`The Orbit workspace moved to the Pro plan`,`Jonas invited Tomás`,`Seats raised from 3 to 5`,`Mira uploaded the team photo`],yt=[{id:`mira`,name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{id:`jonas`,name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{id:`priya`,name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{id:`tomas`,name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`,pending:!0},{id:`aiko`,name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`,pending:!0}],bt={Owner:`violet`,Admin:`blue`,Member:`neutral`},X=e=>e.split(` `).map(e=>e[0]).join(``),Z={title:`Playground/Team`,parameters:{layout:`padded`,docs:{description:{component:`A team settings page made of Breadcrumb (switch team), Card, Avatar, Avatar Group, Badge, Button Group, Separator, Spinner, Kbd, Progress, Progress circle, Aspect Ratio, Empty (search for someone who is not there), Input with Input Group Dropdown, Dropdown Menu, Context Menu (right-click a member), Tooltip, Alert, Alert Dialog, Dialog (team settings), Sheet (the activity log, with Pagination), Drawer (add seats), Hover Card (the workspace owner), Toggle (compact list), Toggle Group (sort by), Tabs (seats and storage usage), Popover (the invite link), Calendar (the offsite date, in a Popover), Collapsible (recent activity), Accordion (workspace questions), Marker and toasts, for trying components together before they are merged. Use the toolbar to switch brand and colour scheme.`}}}},Q={render:function(){let[e,t]=(0,q.useState)(yt),[n,r]=(0,q.useState)(`all`),[a,o]=(0,q.useState)(``),[c,ae]=(0,q.useState)(`Name`),[f,p]=(0,q.useState)(!0),[m,de]=(0,q.useState)(!1),[h,Ee]=(0,q.useState)(!1),[_,v]=(0,q.useState)(1),[b,C]=(0,q.useState)(`joined`),[T,E]=(0,q.useState)(`Orbit`),[O,k]=(0,q.useState)(!1),[M,ze]=(0,q.useState)(10),[P,We]=(0,q.useState)(new Date(2026,4,14)),[F,I]=(0,q.useState)(5),[L,R]=(0,q.useState)(null),[z,et]=(0,q.useState)([`Mira created the workspace`,`Jonas joined as Admin`]),B=e=>et(t=>[...t,e]),H=e.filter(e=>e.pending),W=[`Owner`,`Admin`,`Member`],G=e.filter(e=>(n===`all`||n===`pending`==!!e.pending)&&(c===`Name`?e.name:e.email).toLowerCase().includes(a.trim().toLowerCase())).sort((e,t)=>b===`joined`?0:(b===`role`?W.indexOf(e.role)-W.indexOf(t.role):0)||e.name.localeCompare(t.name)),ct=(e,n)=>{t(t=>t.map(t=>t.id===e.id?{...t,role:n}:t)),B(`${e.name} is now ${n}`),U.success(`${e.name} is now ${n}`)},dt=e=>U.info(`Invite sent again to ${e.email}`),K=e=>(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Oe,{label:`Role`,value:e.role,onValueChange:t=>ct(e,t),children:[`Admin`,`Member`].map(t=>(0,J.jsx)(je,{value:t,disabled:e.role===`Owner`,children:t},t))}),(0,J.jsx)(ke,{}),e.pending&&(0,J.jsx)(x,{icon:(0,J.jsx)(be,{}),onClick:()=>dt(e),children:`Resend invite`}),(0,J.jsx)(x,{icon:(0,J.jsx)(he,{}),onClick:()=>U(`Email to ${e.email}`,{description:`Your mail app opens in a real product.`}),children:`Send email`}),(0,J.jsx)(x,{type:`destructive`,icon:(0,J.jsx)(xe,{}),disabled:e.role===`Owner`,onClick:()=>R(e),children:`Remove from team`})]});return(0,J.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 560px) 280px`,gap:16,alignItems:`start`,fontFamily:`var(--ds-font-sans)`},children:[(0,J.jsxs)(Ne,{style:{gridColumn:`1 / -1`},children:[(0,J.jsx)(w,{href:`#workspace`,children:`Workspace`}),(0,J.jsx)(w,{menuLabel:`Switch team`,menu:[`Orbit`,`Design guild`,`Platform`].map(e=>(0,J.jsx)(x,{onClick:()=>U(`Switched to ${e}`,{description:`A real product would open that team.`}),children:e},e)),children:T}),(0,J.jsx)(w,{current:!0,children:`Members`})]}),(0,J.jsxs)(N,{as:`section`,"aria-label":`Team members`,children:[(0,J.jsx)(A,{title:`${T} members`,description:`Invite people and choose what they can do.`,action:(0,J.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,J.jsx)(qe,{trigger:(0,J.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,J.jsx)(ye,{}),"aria-label":`Team settings`}),open:O,onOpenChange:k,title:`Team settings`,description:`The name shows in invites and on the team's page.`,footer:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ke,{children:(0,J.jsx)(i,{variant:`outline`,children:`Cancel`})}),(0,J.jsx)(i,{type:`submit`,form:`team-settings`,children:`Save`})]}),children:(0,J.jsx)(`form`,{id:`team-settings`,onSubmit:e=>{e.preventDefault();let t=String(new FormData(e.currentTarget).get(`team`)??``).trim()||T;E(t),U.success(`Team renamed to ${t}`),k(!1)},children:(0,J.jsxs)(ee,{children:[(0,J.jsx)(te,{label:`Team name`,children:(0,J.jsx)(s,{name:`team`,defaultValue:T})}),(0,J.jsx)(ie,{name:`invites`,label:`Members can invite people`,caption:`Otherwise only Admins send invites.`,defaultChecked:!0})]})})}),(0,J.jsxs)(ot,{align:`end`,trigger:(0,J.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,J.jsx)(Te,{}),"aria-label":`Invite link`}),title:`Invite link`,description:`Anyone with the link joins as a Member.`,children:[(0,J.jsx)(s,{"aria-label":`Link`,readOnly:!0,defaultValue:`https://sort.team/join/acme-7f3k`,action:(0,J.jsx)(ne,{"aria-label":`Copy invite link`,onClick:()=>U.success(`Invite link copied`),children:(0,J.jsx)(Ce,{})})}),(0,J.jsx)(it,{children:(0,J.jsx)(at,{children:(0,J.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>U.info(`A new invite link was created`),children:`Reset link`})})})]}),(0,J.jsx)(S,{align:`end`,trigger:(0,J.jsx)(i,{variant:`outline`,size:`sm`,leadingIcon:(0,J.jsx)(Se,{}),children:`Invite`}),children:(0,J.jsxs)(Ae,{label:`Invite as`,children:[(0,J.jsx)(x,{icon:(0,J.jsx)(_e,{}),onClick:()=>U.success(`Invite link for Admins copied`),children:`Admin`}),(0,J.jsx)(x,{icon:(0,J.jsx)(Se,{}),onClick:()=>U.success(`Invite link for Members copied`),children:`Member`})]})})]})}),(0,J.jsx)(j,{children:(0,J.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[H.length>0&&(0,J.jsx)(se,{title:`${H.length} ${H.length===1?`invite is`:`invites are`} waiting`,description:`People join when they accept the email invite.`,action:(0,J.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>U.info(`${H.length} invites sent again`),children:`Resend all`})}),(0,J.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`},children:[(0,J.jsx)(Pe,{"aria-label":`Show`,children:[`all`,`active`,`pending`].map(e=>(0,J.jsx)(i,{variant:n===e?`secondary`:`outline`,size:`sm`,"aria-pressed":n===e,onClick:()=>r(e),children:e[0].toUpperCase()+e.slice(1)},e))}),(0,J.jsx)(`div`,{style:{flex:1,minWidth:200},children:(0,J.jsx)(s,{"aria-label":`Search members`,placeholder:`Search`,value:a,onChange:e=>o(e.currentTarget.value),leadIcon:(0,J.jsx)(ge,{}),action:(0,J.jsx)(S,{align:`end`,trigger:(0,J.jsx)(re,{"aria-label":`Search in: ${c}`,children:c}),children:[`Name`,`Email`].map(e=>(0,J.jsx)(x,{onClick:()=>ae(e),children:e},e))})})}),(0,J.jsx)(S,{align:`end`,trigger:(0,J.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,J.jsx)(we,{}),"aria-label":`View options`}),children:(0,J.jsx)(Me,{checked:f,onCheckedChange:p,children:`Show roles`})}),(0,J.jsx)(Fe,{size:`sm`,icon:(0,J.jsx)(ve,{}),"aria-label":`Compact list`,pressed:m,onPressedChange:de}),(0,J.jsxs)(Ie,{type:`single`,size:`sm`,variant:`outline`,spacing:0,"aria-label":`Sort by`,value:b,onValueChange:e=>e&&C(e),children:[(0,J.jsx)(D,{value:`joined`,children:`Joined`}),(0,J.jsx)(D,{value:`name`,children:`Name`}),(0,J.jsx)(D,{value:`role`,children:`Role`})]})]}),(0,J.jsx)(`ul`,{"aria-label":`Members`,style:{display:`grid`,gap:4,margin:0,padding:0,listStyle:`none`},children:G.map(e=>(0,J.jsx)(`li`,{children:(0,J.jsx)(Ue,{"aria-label":`${e.name} actions`,trigger:(0,J.jsxs)(`div`,{tabIndex:0,style:{display:`flex`,alignItems:`center`,gap:12,padding:m?`2px 8px`:8,borderRadius:8,outlineOffset:2},children:[(0,J.jsx)(g,{size:`sm`,initials:X(e.name),name:e.name}),(0,J.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,J.jsx)(`div`,{style:{color:`var(--ds-foreground)`,fontSize:14,fontWeight:500},children:e.name}),!m&&(0,J.jsx)(`div`,{style:{color:`var(--ds-muted-foreground)`,fontSize:13},children:e.email})]}),e.pending&&(0,J.jsx)(y,{size:`sm`,color:`orange`,dot:!0,children:`Pending`}),f&&(0,J.jsx)(y,{size:`sm`,color:bt[e.role],children:e.role}),(0,J.jsx)(S,{align:`end`,trigger:(0,J.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,J.jsx)(me,{}),"aria-label":`More actions for ${e.name}`}),children:K(e)})]}),children:K(e)})},e.id))}),G.length===0&&(0,J.jsx)(Xe,{icon:(0,J.jsx)(ge,{}),title:`No members match`,titleAs:`p`,description:`Try another name or email, or show everyone.`,actions:(0,J.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>{o(``),r(`all`)},children:`Show everyone`})})]})}),(0,J.jsxs)(Re,{justify:`between`,muted:!0,children:[(0,J.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`var(--ds-muted-foreground)`,fontSize:13},children:[(0,J.jsx)(De,{size:`sm`,max:3,children:e.map(e=>(0,J.jsx)(g,{initials:X(e.name),name:e.name},e.id))}),e.length,` of `,M,` seats used`,(0,J.jsx)(Ge,{orientation:`vertical`,style:{height:16}}),H.length,` pending`]}),(0,J.jsx)(Qe,{content:(0,J.jsxs)(J.Fragment,{children:[`Right-click a member, or press`,` `,(0,J.jsxs)($e,{children:[(0,J.jsx)(tt,{variant:`inverted`,size:`sm`,children:`Shift`}),(0,J.jsx)(tt,{variant:`inverted`,size:`sm`,children:`F10`})]}),` `,`on it, for the same actions`]}),children:(0,J.jsx)(i,{variant:`ghost`,size:`sm`,children:`Tips`})})]})]}),(0,J.jsxs)(N,{as:`section`,size:`sm`,"aria-label":`Activity`,children:[(0,J.jsx)(A,{title:`Activity`,action:(0,J.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,J.jsx)(pt,{size:`sm`,variant:`gradient`,label:`Syncing activity`}),(0,J.jsxs)(ft,{trigger:(0,J.jsx)(i,{variant:`ghost`,size:`sm`,children:`View all`}),title:`Activity log`,description:`Everything that happened in ${T}.`,footer:(0,J.jsx)(ut,{children:(0,J.jsx)(i,{variant:`outline`,children:`Done`})}),children:[_===1?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(V,{variant:`separator`,children:`Today`}),z.map((e,t)=>(0,J.jsx)(V,{children:e},t))]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(V,{variant:`separator`,children:`Earlier`}),Y.slice((_-2)*4,(_-1)*4).map(e=>(0,J.jsx)(V,{children:e},e))]}),(0,J.jsx)(nt,{page:_,pageCount:1+Math.ceil(Y.length/4),onPageChange:v,"aria-label":`Activity log pages`,style:{marginTop:`auto`}})]})]})}),(0,J.jsx)(j,{children:(0,J.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,J.jsx)(fe,{ratio:`21:9`,rounded:!0,children:(0,J.jsx)(`img`,{src:pe,alt:`The team at the last offsite`})}),(0,J.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:12,fontSize:14,color:`var(--ds-muted-foreground)`},children:[`Next offsite`,(0,J.jsx)(ot,{align:`end`,"aria-label":`Pick the offsite date`,trigger:(0,J.jsx)(i,{variant:`outline`,size:`sm`,"aria-label":`Next offsite: ${P.toLocaleDateString(`en-US`,{month:`long`,day:`numeric`,year:`numeric`})}`,children:P.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`})}),children:(0,J.jsx)(Le,{variant:`flat`,"aria-label":`Offsite date`,selected:P,onSelect:e=>{We(e),U.success(`Offsite moved to ${e.toLocaleDateString(`en-US`,{month:`long`,day:`numeric`})}`)},disabled:e=>e.getDay()===0||e.getDay()===6})})]}),(0,J.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,fontSize:14,color:`var(--ds-muted-foreground)`},children:[(0,J.jsx)(st,{value:72,size:`40px`,thickness:12,"aria-label":`Profiles complete`}),`72 % of profiles are complete`]}),(0,J.jsxs)(He,{open:h,onOpenChange:Ee,children:[(0,J.jsx)(Ve,{children:h?`Hide recent activity`:`Show recent activity`}),(0,J.jsx)(Be,{children:z.slice(-3).map((e,t)=>(0,J.jsx)(V,{children:e},t))})]}),(0,J.jsxs)(vt,{defaultValue:`seats`,variant:`line`,children:[(0,J.jsxs)(_t,{"aria-label":`Usage`,children:[(0,J.jsx)(ht,{value:`seats`,count:e.length,children:`Seats`}),(0,J.jsx)(ht,{value:`storage`,children:`Storage`})]}),(0,J.jsx)(gt,{value:`seats`,children:(0,J.jsx)(lt,{label:`Seats`,value:e.length,max:M,valueLabel:`${e.length} of ${M}`})}),(0,J.jsx)(gt,{value:`storage`,children:(0,J.jsx)(lt,{label:`Storage`,value:38,max:100,valueLabel:`38 of 100 GB`})})]}),(0,J.jsx)(Ye,{trigger:(0,J.jsx)(i,{variant:`outline`,size:`sm`,children:`Add seats`}),width:`384px`,title:`Add seats`,description:`€12 per seat a month, billed with your plan.`,footer:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Je,{children:(0,J.jsxs)(i,{onClick:()=>{ze(e=>e+F),U.success(`${F} seats added`)},children:[`Add `,F,` seats`]})}),(0,J.jsx)(Je,{children:(0,J.jsx)(i,{variant:`outline`,children:`Cancel`})})]}),children:(0,J.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:24},children:[(0,J.jsx)(i,{variant:`outline`,"aria-label":`Fewer seats`,disabled:F<=1,onClick:()=>I(e=>e-1),icon:(0,J.jsx)(`span`,{"aria-hidden":!0,children:`−`})}),(0,J.jsx)(`span`,{"aria-live":`polite`,style:{fontSize:32,lineHeight:`40px`,fontWeight:600,color:`var(--ds-foreground)`},children:F}),(0,J.jsx)(i,{variant:`outline`,"aria-label":`More seats`,onClick:()=>I(e=>e+1),icon:(0,J.jsx)(`span`,{"aria-hidden":!0,children:`+`})})]})}),(0,J.jsxs)(`p`,{style:{margin:0,fontSize:14,color:`var(--ds-muted-foreground)`},children:[`Workspace owner:`,` `,(0,J.jsxs)(Ze,{align:`start`,trigger:(0,J.jsx)(`a`,{href:`#mira`,style:{color:`var(--ds-foreground)`,fontWeight:500,textDecoration:`underline`,textUnderlineOffset:3},children:`Mira Okafor`}),children:[(0,J.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,J.jsx)(g,{size:`lg`,initials:`MO`}),(0,J.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,J.jsx)(`span`,{style:{fontWeight:500},children:`Mira Okafor`}),(0,J.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`},children:`Owner · mira@orbit.dev`})]})]}),(0,J.jsx)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`},children:`Created the workspace and manages billing. Ask her to change the plan.`})]})]}),(0,J.jsx)(V,{variant:`separator`,children:`Today`}),z.map((e,t)=>(0,J.jsx)(V,{children:e},t)),(0,J.jsx)(V,{loading:!0,children:`Syncing with the directory…`})]})})]}),(0,J.jsxs)(oe,{"aria-label":`Workspace questions`,defaultValue:`seats`,children:[(0,J.jsxs)(d,{value:`seats`,children:[(0,J.jsx)(l,{children:`How are seats billed?`}),(0,J.jsx)(u,{children:(0,J.jsxs)(`p`,{children:[`Each seat is €12 a month, billed with your plan. You have `,M,` seats; removing a member frees theirs at once.`]})})]}),(0,J.jsxs)(d,{value:`roles`,children:[(0,J.jsx)(l,{children:`What can each role do?`}),(0,J.jsx)(u,{children:(0,J.jsx)(`p`,{children:`Owners manage billing, Admins invite and remove people, Members work in shared notes, and Guests see only what is shared with them.`})})]}),(0,J.jsxs)(d,{value:`leave`,children:[(0,J.jsx)(l,{children:`What happens when someone leaves?`}),(0,J.jsx)(u,{children:(0,J.jsxs)(`p`,{children:[`Their notes stay in `,T,`. Ownership moves to the person who removed them.`]})})]})]}),(0,J.jsxs)(ue,{open:L!==null,onOpenChange:e=>!e&&R(null),variant:`destructive`,size:`sm`,title:`Remove ${L?.name??``}?`,description:`They lose access to the workspace at once. You can invite them again later.`,children:[(0,J.jsx)(le,{children:`Cancel`}),(0,J.jsx)(ce,{variant:`destructive`,onClick:()=>{L&&(t(e=>e.filter(e=>e.id!==L.id)),B(`${L.name} was removed`),U(`${L.name} was removed`,{action:{label:`Undo`,onClick:()=>t(e=>[...e,L])}}))},children:`Remove`})]}),(0,J.jsx)(rt,{})]})}},xt=[`Members`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [members, setMembers] = useState(initialMembers);
    const [view, setView] = useState<View>('all');
    const [query, setQuery] = useState('');
    const [searchIn, setSearchIn] = useState<'Name' | 'Email'>('Name');
    const [showRoles, setShowRoles] = useState(true);
    const [compact, setCompact] = useState(false);
    const [recentOpen, setRecentOpen] = useState(false);
    const [logPage, setLogPage] = useState(1);
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
                  {logPage === 1 ? <>
                      <Marker variant="separator">Today</Marker>
                      {activity.map((line, i) => <Marker key={i}>{line}</Marker>)}
                    </> : <>
                      <Marker variant="separator">Earlier</Marker>
                      {olderActivity.slice((logPage - 2) * 4, (logPage - 1) * 4).map(line => <Marker key={line}>{line}</Marker>)}
                    </>}
                  <Pagination page={logPage} pageCount={1 + Math.ceil(olderActivity.length / 4)} onPageChange={setLogPage} aria-label="Activity log pages" style={{
              marginTop: 'auto'
            }} />
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
}`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Members,xt as __namedExportsOrder,Z as default};