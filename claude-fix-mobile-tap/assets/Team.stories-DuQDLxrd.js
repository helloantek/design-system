import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-D2O-UKMk.js";import{n as r,t as i}from"./Button-CjospKDQ.js";import{n as ee,o as a,t as te}from"./Field-BPQ1f4oo.js";import{i as o,n as ne,r as re,t as s}from"./Input-JKfMtldv.js";import{r as c,t as ie}from"./Switch-bbSmeUxo.js";import{a as l,i as u,n as d,r as f,t as ae}from"./Accordion-5GoI6Uea.js";import{n as p,t as oe}from"./Alert-DIjr3Ki7.js";import{i as m,n as se,r as ce,t as le}from"./AlertDialog-DpizEaMc.js";import{i as h,n as g,r as ue,t as de}from"./AspectRatio.fixtures-CyVp9U9X.js";import{C as fe,S as pe,T as me,_ as he,a as ge,c as _e,g as ve,o as ye,p as be,r as xe,t as Se,v as Ce,y as _}from"./react-DwZOsWU8.js";import{n as v,t as y}from"./Avatar-DIH-e7p6.js";import{n as b,t as we}from"./AvatarGroup-DsW7oEHl.js";import{n as x,t as S}from"./Badge-ZBqeUFTm.js";import{c as Te,d as Ee,h as C,i as De,l as Oe,n as ke,o as w,t as T}from"./DropdownMenu-WHbx61P-.js";import{r as E,t as Ae}from"./ButtonGroup-DsYaY6Kr.js";import{n as D,t as je}from"./Toggle-bft4QW1j.js";import{n as O,r as k,t as Me}from"./ToggleGroup-EsnnfPJf.js";import{n as A,t as Ne}from"./Calendar-B8tTNq7v.js";import{i as j,n as M,o as N,r as Pe,t as P}from"./Card-B5NN7tDI.js";import{i as F,n as Fe,r as Ie,t as Le}from"./Collapsible-BRk7_bR7.js";import{n as I,t as Re}from"./ContextMenu-BIGOoP_f.js";import{n as L,t as ze}from"./Separator-DGANWSj5.js";import{n as Be,r as R,t as Ve}from"./Dialog-CRf52gu9.js";import{n as He,r as z,t as Ue}from"./Drawer-Da9rh0tx.js";import{n as B,t as We}from"./Empty-BTwKsZE7.js";import{n as V,t as Ge}from"./HoverCard-Cjpl5ieO.js";import{n as H,t as Ke}from"./Tooltip-DyAOpxbj.js";import{n as qe,r as U,t as Je}from"./Kbd-B52JxzvV.js";import{n as W,t as G}from"./Marker-CkrJgUlz.js";import{i as K,n as Ye,r as q}from"./Sonner-ImDGSCCo.js";import{i as J,n as Xe,r as Ze,t as Qe}from"./Popover-DNk167W0.js";import{n as $e,r as et,t as tt}from"./Progress-CYfKURw9.js";import{n as nt,r as rt,t as it}from"./Sheet-DCp1-yih.js";import{n as Y,t as at}from"./Spinner-DeTudhYE.js";import{a as ot,i as st,n as ct,r as lt,t as ut}from"./Tabs-Cz3QLhpx.js";var X,Z,dt,ft,Q,pt,$,mt;function ht(){return(ht=e((()=>{X=n(),_(),p(),h(),g(),l(),m(),v(),b(),x(),r(),A(),F(),E(),N(),I(),C(),B(),R(),z(),a(),V(),o(),U(),W(),J(),et(),L(),rt(),Y(),c(),q(),ot(),D(),k(),H(),Z=t(),dt=[{id:`mira`,name:`Mira Okafor`,email:`mira@orbit.dev`,role:`Owner`},{id:`jonas`,name:`Jonas Lindqvist`,email:`jonas@orbit.dev`,role:`Admin`},{id:`priya`,name:`Priya Raman`,email:`priya@orbit.dev`,role:`Member`},{id:`tomas`,name:`Tomás Herrera`,email:`tomas@orbit.dev`,role:`Member`,pending:!0},{id:`aiko`,name:`Aiko Tanaka`,email:`aiko@orbit.dev`,role:`Member`,pending:!0}],ft={Owner:`violet`,Admin:`blue`,Member:`neutral`},Q=e=>e.split(` `).map(e=>e[0]).join(``),pt={title:`Playground/Team`,parameters:{layout:`padded`,docs:{description:{component:`A team settings page made of Card, Avatar, Avatar Group, Badge, Button Group, Separator, Spinner, Kbd, Progress, Progress circle, Aspect Ratio, Empty (search for someone who is not there), Input with Input Group Dropdown, Dropdown Menu, Context Menu (right-click a member), Tooltip, Alert, Alert Dialog, Dialog (team settings), Sheet (the activity log), Drawer (add seats), Hover Card (the workspace owner), Toggle (compact list), Toggle Group (sort by), Tabs (seats and storage usage), Popover (the invite link), Calendar (the offsite date, in a Popover), Collapsible (recent activity), Accordion (workspace questions), Marker and toasts, for trying components together before they are merged. Use the toolbar to switch brand and colour scheme.`}}}},$={render:function(){let[e,t]=(0,X.useState)(dt),[n,r]=(0,X.useState)(`all`),[a,o]=(0,X.useState)(``),[c,l]=(0,X.useState)(`Name`),[p,m]=(0,X.useState)(!0),[h,g]=(0,X.useState)(!1),[_,v]=(0,X.useState)(!1),[b,x]=(0,X.useState)(`joined`),[C,E]=(0,X.useState)(`Orbit`),[D,k]=(0,X.useState)(!1),[A,N]=(0,X.useState)(10),[F,I]=(0,X.useState)(new Date(2026,4,14)),[L,R]=(0,X.useState)(5),[z,B]=(0,X.useState)(null),[V,H]=(0,X.useState)([`Mira created the workspace`,`Jonas joined as Admin`]),U=e=>H(t=>[...t,e]),W=e.filter(e=>e.pending),q=[`Owner`,`Admin`,`Member`],J=e.filter(e=>(n===`all`||n===`pending`==!!e.pending)&&(c===`Name`?e.name:e.email).toLowerCase().includes(a.trim().toLowerCase())).sort((e,t)=>b===`joined`?0:(b===`role`?q.indexOf(e.role)-q.indexOf(t.role):0)||e.name.localeCompare(t.name)),et=(e,n)=>{t(t=>t.map(t=>t.id===e.id?{...t,role:n}:t)),U(`${e.name} is now ${n}`),K.success(`${e.name} is now ${n}`)},rt=e=>K.info(`Invite sent again to ${e.email}`),Y=e=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Te,{label:`Role`,value:e.role,onValueChange:t=>et(e,t),children:[`Admin`,`Member`].map(t=>(0,Z.jsx)(Oe,{value:t,disabled:e.role===`Owner`,children:t},t))}),(0,Z.jsx)(Ee,{}),e.pending&&(0,Z.jsx)(w,{icon:(0,Z.jsx)(ve,{}),onClick:()=>rt(e),children:`Resend invite`}),(0,Z.jsx)(w,{icon:(0,Z.jsx)(pe,{}),onClick:()=>K(`Email to ${e.email}`,{description:`Your mail app opens in a real product.`}),children:`Send email`}),(0,Z.jsx)(w,{type:`destructive`,icon:(0,Z.jsx)(ye,{}),disabled:e.role===`Owner`,onClick:()=>B(e),children:`Remove from team`})]});return(0,Z.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 560px) 280px`,gap:16,alignItems:`start`,fontFamily:`var(--ds-font-sans)`},children:[(0,Z.jsxs)(P,{as:`section`,"aria-label":`Team members`,children:[(0,Z.jsx)(j,{title:`${C} members`,description:`Invite people and choose what they can do.`,action:(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,Z.jsx)(Ve,{trigger:(0,Z.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,Z.jsx)(_e,{}),"aria-label":`Team settings`}),open:D,onOpenChange:k,title:`Team settings`,description:`The name shows in invites and on the team's page.`,footer:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Be,{children:(0,Z.jsx)(i,{variant:`outline`,children:`Cancel`})}),(0,Z.jsx)(i,{type:`submit`,form:`team-settings`,children:`Save`})]}),children:(0,Z.jsx)(`form`,{id:`team-settings`,onSubmit:e=>{e.preventDefault();let t=String(new FormData(e.currentTarget).get(`team`)??``).trim()||C;E(t),K.success(`Team renamed to ${t}`),k(!1)},children:(0,Z.jsxs)(ee,{children:[(0,Z.jsx)(te,{label:`Team name`,children:(0,Z.jsx)(s,{name:`team`,defaultValue:C})}),(0,Z.jsx)(ie,{name:`invites`,label:`Members can invite people`,caption:`Otherwise only Admins send invites.`,defaultChecked:!0})]})})}),(0,Z.jsxs)(Qe,{align:`end`,trigger:(0,Z.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,Z.jsx)(Ce,{}),"aria-label":`Invite link`}),title:`Invite link`,description:`Anyone with the link joins as a Member.`,children:[(0,Z.jsx)(s,{"aria-label":`Link`,readOnly:!0,defaultValue:`https://sort.team/join/acme-7f3k`,action:(0,Z.jsx)(ne,{"aria-label":`Copy invite link`,onClick:()=>K.success(`Invite link copied`),children:(0,Z.jsx)(xe,{})})}),(0,Z.jsx)(Xe,{children:(0,Z.jsx)(Ze,{children:(0,Z.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>K.info(`A new invite link was created`),children:`Reset link`})})})]}),(0,Z.jsx)(T,{align:`end`,trigger:(0,Z.jsx)(i,{variant:`outline`,size:`sm`,leadingIcon:(0,Z.jsx)(be,{}),children:`Invite`}),children:(0,Z.jsxs)(De,{label:`Invite as`,children:[(0,Z.jsx)(w,{icon:(0,Z.jsx)(he,{}),onClick:()=>K.success(`Invite link for Admins copied`),children:`Admin`}),(0,Z.jsx)(w,{icon:(0,Z.jsx)(be,{}),onClick:()=>K.success(`Invite link for Members copied`),children:`Member`})]})})]})}),(0,Z.jsx)(M,{children:(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[W.length>0&&(0,Z.jsx)(oe,{title:`${W.length} ${W.length===1?`invite is`:`invites are`} waiting`,description:`People join when they accept the email invite.`,action:(0,Z.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>K.info(`${W.length} invites sent again`),children:`Resend all`})}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`},children:[(0,Z.jsx)(Ae,{"aria-label":`Show`,children:[`all`,`active`,`pending`].map(e=>(0,Z.jsx)(i,{variant:n===e?`secondary`:`outline`,size:`sm`,"aria-pressed":n===e,onClick:()=>r(e),children:e[0].toUpperCase()+e.slice(1)},e))}),(0,Z.jsx)(`div`,{style:{flex:1,minWidth:200},children:(0,Z.jsx)(s,{"aria-label":`Search members`,placeholder:`Search`,value:a,onChange:e=>o(e.currentTarget.value),leadIcon:(0,Z.jsx)(me,{}),action:(0,Z.jsx)(T,{align:`end`,trigger:(0,Z.jsx)(re,{"aria-label":`Search in: ${c}`,children:c}),children:[`Name`,`Email`].map(e=>(0,Z.jsx)(w,{onClick:()=>l(e),children:e},e))})})}),(0,Z.jsx)(T,{align:`end`,trigger:(0,Z.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,Z.jsx)(Se,{}),"aria-label":`View options`}),children:(0,Z.jsx)(ke,{checked:p,onCheckedChange:m,children:`Show roles`})}),(0,Z.jsx)(je,{size:`sm`,icon:(0,Z.jsx)(ge,{}),"aria-label":`Compact list`,pressed:h,onPressedChange:g}),(0,Z.jsxs)(Me,{type:`single`,size:`sm`,variant:`outline`,spacing:0,"aria-label":`Sort by`,value:b,onValueChange:e=>e&&x(e),children:[(0,Z.jsx)(O,{value:`joined`,children:`Joined`}),(0,Z.jsx)(O,{value:`name`,children:`Name`}),(0,Z.jsx)(O,{value:`role`,children:`Role`})]})]}),(0,Z.jsx)(`ul`,{"aria-label":`Members`,style:{display:`grid`,gap:4,margin:0,padding:0,listStyle:`none`},children:J.map(e=>(0,Z.jsx)(`li`,{children:(0,Z.jsx)(Re,{"aria-label":`${e.name} actions`,trigger:(0,Z.jsxs)(`div`,{tabIndex:0,style:{display:`flex`,alignItems:`center`,gap:12,padding:h?`2px 8px`:8,borderRadius:8,outlineOffset:2},children:[(0,Z.jsx)(y,{size:`sm`,initials:Q(e.name),name:e.name}),(0,Z.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,Z.jsx)(`div`,{style:{color:`var(--ds-foreground)`,fontSize:14,fontWeight:500},children:e.name}),!h&&(0,Z.jsx)(`div`,{style:{color:`var(--ds-muted-foreground)`,fontSize:13},children:e.email})]}),e.pending&&(0,Z.jsx)(S,{size:`sm`,color:`orange`,dot:!0,children:`Pending`}),p&&(0,Z.jsx)(S,{size:`sm`,color:ft[e.role],children:e.role}),(0,Z.jsx)(T,{align:`end`,trigger:(0,Z.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,Z.jsx)(fe,{}),"aria-label":`More actions for ${e.name}`}),children:Y(e)})]}),children:Y(e)})},e.id))}),J.length===0&&(0,Z.jsx)(We,{icon:(0,Z.jsx)(me,{}),title:`No members match`,titleAs:`p`,description:`Try another name or email, or show everyone.`,actions:(0,Z.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>{o(``),r(`all`)},children:`Show everyone`})})]})}),(0,Z.jsxs)(Pe,{justify:`between`,muted:!0,children:[(0,Z.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`var(--ds-muted-foreground)`,fontSize:13},children:[(0,Z.jsx)(we,{size:`sm`,max:3,children:e.map(e=>(0,Z.jsx)(y,{initials:Q(e.name),name:e.name},e.id))}),e.length,` of `,A,` seats used`,(0,Z.jsx)(ze,{orientation:`vertical`,style:{height:16}}),W.length,` pending`]}),(0,Z.jsx)(Ke,{content:(0,Z.jsxs)(Z.Fragment,{children:[`Right-click a member, or press`,` `,(0,Z.jsxs)(qe,{children:[(0,Z.jsx)(Je,{variant:`inverted`,size:`sm`,children:`Shift`}),(0,Z.jsx)(Je,{variant:`inverted`,size:`sm`,children:`F10`})]}),` `,`on it, for the same actions`]}),children:(0,Z.jsx)(i,{variant:`ghost`,size:`sm`,children:`Tips`})})]})]}),(0,Z.jsxs)(P,{as:`section`,size:`sm`,"aria-label":`Activity`,children:[(0,Z.jsx)(j,{title:`Activity`,action:(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,Z.jsx)(at,{size:`sm`,variant:`gradient`,label:`Syncing activity`}),(0,Z.jsxs)(it,{trigger:(0,Z.jsx)(i,{variant:`ghost`,size:`sm`,children:`View all`}),title:`Activity log`,description:`Everything that happened in ${C}.`,footer:(0,Z.jsx)(nt,{children:(0,Z.jsx)(i,{variant:`outline`,children:`Done`})}),children:[(0,Z.jsx)(G,{variant:`separator`,children:`Today`}),V.map((e,t)=>(0,Z.jsx)(G,{children:e},t)),(0,Z.jsx)(G,{variant:`separator`,children:`Earlier`}),(0,Z.jsx)(G,{children:`Mira created the team page`}),(0,Z.jsx)(G,{children:`Seats raised from 5 to 10`})]})]})}),(0,Z.jsx)(M,{children:(0,Z.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,Z.jsx)(ue,{ratio:`21:9`,rounded:!0,children:(0,Z.jsx)(`img`,{src:de,alt:`The team at the last offsite`})}),(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:12,fontSize:14,color:`var(--ds-muted-foreground)`},children:[`Next offsite`,(0,Z.jsx)(Qe,{align:`end`,"aria-label":`Pick the offsite date`,trigger:(0,Z.jsx)(i,{variant:`outline`,size:`sm`,"aria-label":`Next offsite: ${F.toLocaleDateString(`en-US`,{month:`long`,day:`numeric`,year:`numeric`})}`,children:F.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`})}),children:(0,Z.jsx)(Ne,{variant:`flat`,"aria-label":`Offsite date`,selected:F,onSelect:e=>{I(e),K.success(`Offsite moved to ${e.toLocaleDateString(`en-US`,{month:`long`,day:`numeric`})}`)},disabled:e=>e.getDay()===0||e.getDay()===6})})]}),(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,fontSize:14,color:`var(--ds-muted-foreground)`},children:[(0,Z.jsx)($e,{value:72,size:`40px`,thickness:12,"aria-label":`Profiles complete`}),`72 % of profiles are complete`]}),(0,Z.jsxs)(Le,{open:_,onOpenChange:v,children:[(0,Z.jsx)(Ie,{children:_?`Hide recent activity`:`Show recent activity`}),(0,Z.jsx)(Fe,{children:V.slice(-3).map((e,t)=>(0,Z.jsx)(G,{children:e},t))})]}),(0,Z.jsxs)(ut,{defaultValue:`seats`,variant:`line`,children:[(0,Z.jsxs)(lt,{"aria-label":`Usage`,children:[(0,Z.jsx)(st,{value:`seats`,count:e.length,children:`Seats`}),(0,Z.jsx)(st,{value:`storage`,children:`Storage`})]}),(0,Z.jsx)(ct,{value:`seats`,children:(0,Z.jsx)(tt,{label:`Seats`,value:e.length,max:A,valueLabel:`${e.length} of ${A}`})}),(0,Z.jsx)(ct,{value:`storage`,children:(0,Z.jsx)(tt,{label:`Storage`,value:38,max:100,valueLabel:`38 of 100 GB`})})]}),(0,Z.jsx)(Ue,{trigger:(0,Z.jsx)(i,{variant:`outline`,size:`sm`,children:`Add seats`}),width:`384px`,title:`Add seats`,description:`€12 per seat a month, billed with your plan.`,footer:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(He,{children:(0,Z.jsxs)(i,{onClick:()=>{N(e=>e+L),K.success(`${L} seats added`)},children:[`Add `,L,` seats`]})}),(0,Z.jsx)(He,{children:(0,Z.jsx)(i,{variant:`outline`,children:`Cancel`})})]}),children:(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:24},children:[(0,Z.jsx)(i,{variant:`outline`,"aria-label":`Fewer seats`,disabled:L<=1,onClick:()=>R(e=>e-1),icon:(0,Z.jsx)(`span`,{"aria-hidden":!0,children:`−`})}),(0,Z.jsx)(`span`,{"aria-live":`polite`,style:{fontSize:32,lineHeight:`40px`,fontWeight:600,color:`var(--ds-foreground)`},children:L}),(0,Z.jsx)(i,{variant:`outline`,"aria-label":`More seats`,onClick:()=>R(e=>e+1),icon:(0,Z.jsx)(`span`,{"aria-hidden":!0,children:`+`})})]})}),(0,Z.jsxs)(`p`,{style:{margin:0,fontSize:14,color:`var(--ds-muted-foreground)`},children:[`Workspace owner:`,` `,(0,Z.jsxs)(Ge,{align:`start`,trigger:(0,Z.jsx)(`a`,{href:`#mira`,style:{color:`var(--ds-foreground)`,fontWeight:500,textDecoration:`underline`,textUnderlineOffset:3},children:`Mira Okafor`}),children:[(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,Z.jsx)(y,{size:`lg`,initials:`MO`}),(0,Z.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,Z.jsx)(`span`,{style:{fontWeight:500},children:`Mira Okafor`}),(0,Z.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`},children:`Owner · mira@orbit.dev`})]})]}),(0,Z.jsx)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`},children:`Created the workspace and manages billing. Ask her to change the plan.`})]})]}),(0,Z.jsx)(G,{variant:`separator`,children:`Today`}),V.map((e,t)=>(0,Z.jsx)(G,{children:e},t)),(0,Z.jsx)(G,{loading:!0,children:`Syncing with the directory…`})]})})]}),(0,Z.jsxs)(ae,{"aria-label":`Workspace questions`,defaultValue:`seats`,children:[(0,Z.jsxs)(f,{value:`seats`,children:[(0,Z.jsx)(u,{children:`How are seats billed?`}),(0,Z.jsx)(d,{children:(0,Z.jsxs)(`p`,{children:[`Each seat is €12 a month, billed with your plan. You have `,A,` seats; removing a member frees theirs at once.`]})})]}),(0,Z.jsxs)(f,{value:`roles`,children:[(0,Z.jsx)(u,{children:`What can each role do?`}),(0,Z.jsx)(d,{children:(0,Z.jsx)(`p`,{children:`Owners manage billing, Admins invite and remove people, Members work in shared notes, and Guests see only what is shared with them.`})})]}),(0,Z.jsxs)(f,{value:`leave`,children:[(0,Z.jsx)(u,{children:`What happens when someone leaves?`}),(0,Z.jsx)(d,{children:(0,Z.jsxs)(`p`,{children:[`Their notes stay in `,C,`. Ownership moves to the person who removed them.`]})})]})]}),(0,Z.jsxs)(le,{open:z!==null,onOpenChange:e=>!e&&B(null),variant:`destructive`,size:`sm`,title:`Remove ${z?.name??``}?`,description:`They lose access to the workspace at once. You can invite them again later.`,children:[(0,Z.jsx)(ce,{children:`Cancel`}),(0,Z.jsx)(se,{variant:`destructive`,onClick:()=>{z&&(t(e=>e.filter(e=>e.id!==z.id)),U(`${z.name} was removed`),K(`${z.name} was removed`,{action:{label:`Undo`,onClick:()=>t(e=>[...e,z])}}))},children:`Remove`})]}),(0,Z.jsx)(Ye,{})]})}},mt=[`Members`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}ht();export{$ as Members,mt as __namedExportsOrder,pt as default};