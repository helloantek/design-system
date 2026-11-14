import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-CEPbjgPm.js";import{Ct as r,Lt as i,ht as a,jt as o,zt as s}from"./react-B_-L1QTZ.js";import{n as c,t as l}from"./Badge-CEXh9NLl.js";import{n as ee,t as u}from"./Button-G1r8qACU.js";import{n as d,t as f}from"./Avatar-jFUm9zqq.js";import{d as p,h as te,o as m,t as h}from"./DropdownMenu-BBI-pKUV.js";import{i as g,t as _}from"./Input-CxFCmDs4.js";import{i as ne,t as v}from"./Checkbox-DyOOsbwG.js";import{n as re,t as ie}from"./Empty-D6IS3f_f.js";import{n as ae,t as oe}from"./Select-Ds7JKrAd.js";import{a as y,c as se,i as b,n as x,o as S,r as C,s as w,t as T}from"./Table-DBfQ5-mb.js";var E,D,O,k,A,j,M,N,P,more,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;function init_Table_stories(){return(init_Table_stories=e((()=>{E=n(),r(),d(),c(),ee(),ne(),te(),re(),g(),ae(),se(),D=t(),O={title:`Components/Table`,parameters:{layout:`centered`,docs:{description:{component:'Implements the Sort UI 2.0 **Table**, **Table Row** and **Table Cell** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=221-2)): a native `<table>` with header (`TableHeader` / `TableHead`, 40 px, Medium), body (`TableBody` / `TableRow` / `TableCell`, 36 px) and footer rows (`TableFooter`, the fill-1 band), 1 px lines between rows, a muted `caption`. Cells take `align="right"` for numbers and `fit` for a column of checkboxes or chevrons. Rows show Hover (fill-1) under the pointer and `selected` (fill-2). `TableHead sort` makes the header a sort button with `aria-sort`. `variant="card"` is the layout most demos use: the header on the muted fill and the body in a bordered box. The table scrolls sideways when it is wider than its container.'}}}},k={width:560,maxWidth:`100%`},A={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,letterSpacing:`-0.005em`,margin:0},j={color:`var(--ds-muted-foreground)`},M={position:`absolute`,width:1,height:1,overflow:`hidden`,clipPath:`inset(50%)`,whiteSpace:`nowrap`},N={display:`flex`,alignItems:`center`,gap:8},P=[{name:`Button`,instances:412,coverage:`96%`},{name:`Dialog`,instances:164,coverage:`78%`},{name:`Table`,instances:97,coverage:`61%`}],more=(e,t=!1)=>(0,D.jsxs)(h,{align:`end`,trigger:(0,D.jsx)(u,{variant:t?`outline`:`ghost`,size:t?`default`:`xs`,icon:(0,D.jsx)(o,{}),"aria-label":e}),children:[(0,D.jsx)(m,{children:`Edit`}),(0,D.jsx)(m,{children:`Duplicate`}),(0,D.jsx)(p,{}),(0,D.jsx)(m,{type:`destructive`,children:`Delete`})]}),F={args:{variant:`default`,caption:`Web adoption, Aug 13 – Sep 12 · library usage vs. detached copies.`,footer:!0,selected:!1},render:e=>(0,D.jsx)(`div`,{style:{width:496,maxWidth:`100%`},children:(0,D.jsxs)(T,{variant:e.variant,caption:e.caption||void 0,children:[(0,D.jsx)(S,{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(y,{children:`Component`}),(0,D.jsx)(y,{align:`right`,children:`Instances`}),(0,D.jsx)(y,{align:`right`,children:`Coverage`})]})}),(0,D.jsx)(x,{children:P.map((t,n)=>(0,D.jsxs)(w,{selected:e.selected&&n===1,children:[(0,D.jsx)(C,{children:t.name}),(0,D.jsx)(C,{align:`right`,children:t.instances}),(0,D.jsx)(C,{align:`right`,children:t.coverage})]},t.name))}),e.footer&&(0,D.jsx)(b,{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(C,{children:`Total`}),(0,D.jsx)(C,{align:`right`,children:`673`}),(0,D.jsx)(C,{align:`right`,children:`78%`})]})})]})})},I={render:()=>(0,D.jsx)(`div`,{style:{width:496,maxWidth:`100%`},children:(0,D.jsxs)(T,{caption:`Web adoption, Aug 13 – Sep 12 · library usage vs. detached copies.`,children:[(0,D.jsx)(S,{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(y,{children:`Header`}),(0,D.jsx)(y,{align:`right`,children:`Instances`}),(0,D.jsx)(y,{align:`right`,children:`Coverage`})]})}),(0,D.jsx)(x,{children:P.map(e=>(0,D.jsxs)(w,{children:[(0,D.jsx)(C,{children:e.name}),(0,D.jsx)(C,{align:`right`,children:e.instances}),(0,D.jsx)(C,{align:`right`,children:e.coverage})]},e.name))}),(0,D.jsx)(b,{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(C,{children:`Total`}),(0,D.jsx)(C,{align:`right`,children:`673`}),(0,D.jsx)(C,{align:`right`,children:`78%`})]})})]})})},L={render:()=>(0,D.jsx)(`div`,{style:{width:448,maxWidth:`100%`},children:(0,D.jsxs)(T,{"aria-label":`Row states`,children:[(0,D.jsx)(S,{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(y,{children:`State`}),(0,D.jsx)(y,{align:`right`,children:`Instances`}),(0,D.jsx)(y,{align:`right`,children:`Coverage`})]})}),(0,D.jsxs)(x,{children:[(0,D.jsxs)(w,{children:[(0,D.jsx)(C,{children:`Default`}),(0,D.jsx)(C,{align:`right`,children:`412`}),(0,D.jsx)(C,{align:`right`,children:`96%`})]}),(0,D.jsxs)(w,{children:[(0,D.jsx)(C,{children:`Hover (point at a row)`}),(0,D.jsx)(C,{align:`right`,children:`164`}),(0,D.jsx)(C,{align:`right`,children:`78%`})]}),(0,D.jsxs)(w,{selected:!0,children:[(0,D.jsx)(C,{children:`Selected`}),(0,D.jsx)(C,{align:`right`,children:`97`}),(0,D.jsx)(C,{align:`right`,children:`61%`})]})]})]})})},R=[{name:`Ada Lovelace`,email:`ada@example.com`,role:`Owner`},{name:`Jonas Lindqvist`,email:`jonas@example.com`,role:`Admin`},{name:`Mira Okafor`,email:`mira@example.com`,role:`Editor`},{name:`Priya Raman`,email:`priya@example.com`,role:`Editor`},{name:`Tomás Herrera`,email:`tomas@example.com`,role:`Viewer`},{name:`Aiko Tanaka`,email:`aiko@example.com`,role:`Viewer`}],z={render:function Render(){let[e,t]=(0,E.useState)([`Mira Okafor`]),n=e.length===R.length,toggle=(e,n)=>t(t=>n?[...t,e]:t.filter(t=>t!==e));return(0,D.jsx)(`div`,{style:k,children:(0,D.jsxs)(T,{variant:`card`,"aria-label":`Members`,children:[(0,D.jsx)(S,{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(y,{fit:!0,children:(0,D.jsx)(v,{"aria-label":`Select all`,checked:n,indeterminate:e.length>0&&!n,onCheckedChange:e=>t(e?R.map(e=>e.name):[])})}),(0,D.jsx)(y,{children:`Name`}),(0,D.jsx)(y,{children:`Email`}),(0,D.jsx)(y,{children:`Role`}),(0,D.jsx)(y,{children:(0,D.jsx)(`span`,{style:M,children:`Actions`})})]})}),(0,D.jsx)(x,{children:R.map(t=>(0,D.jsxs)(w,{selected:e.includes(t.name),children:[(0,D.jsx)(C,{fit:!0,children:(0,D.jsx)(v,{"aria-label":`Select ${t.name}`,checked:e.includes(t.name),onCheckedChange:e=>toggle(t.name,e)})}),(0,D.jsx)(C,{children:(0,D.jsxs)(`span`,{style:N,children:[(0,D.jsx)(f,{size:`xs`,initials:t.name[0]}),t.name]})}),(0,D.jsx)(C,{children:t.email}),(0,D.jsx)(C,{children:t.role}),(0,D.jsx)(C,{align:`right`,children:more(`More for ${t.name}`)})]},t.name))})]})})}},B=[{project:`marketing-site`,env:`Production`,when:`2 min ago`},{project:`api-gateway`,env:`Preview`,when:`18 min ago`,title:`Retry rate-limited requests with backoff`,body:`Requests that hit a 429 now back off exponentially and respect Retry-After, so bursts from the mobile app stop tripping the limiter.`,branch:`feat/retry-backoff`,duration:`1m 42s`,region:`Frankfurt`},{project:`dashboard`,env:`Production`,when:`1 h ago`},{project:`docs`,env:`Preview`,when:`3 h ago`},{project:`billing-worker`,env:`Production`,when:`Yesterday`},{project:`image-cdn`,env:`Production`,when:`Sep 20`}],V={render:function Render(){let[e,t]=(0,E.useState)(`api-gateway`),n={...A,fontSize:12,lineHeight:`16px`,...j};return(0,D.jsx)(`div`,{style:k,children:(0,D.jsx)(T,{variant:`card`,"aria-label":`Deployments`,children:(0,D.jsx)(x,{children:B.map(r=>{let i=e===r.project;return(0,D.jsxs)(E.Fragment,{children:[(0,D.jsxs)(w,{children:[(0,D.jsx)(C,{fit:!0,style:{paddingBlock:6},children:(0,D.jsx)(u,{variant:`ghost`,size:`xs`,icon:i?(0,D.jsx)(a,{}):(0,D.jsx)(s,{}),"aria-label":`Details of ${r.project}`,"aria-expanded":i,"aria-controls":`details-${r.project}`,onClick:()=>t(i?null:r.project)})}),(0,D.jsx)(C,{children:r.project}),(0,D.jsx)(C,{children:r.env}),(0,D.jsx)(C,{children:r.when})]}),i&&(0,D.jsxs)(w,{id:`details-${r.project}`,selected:!0,children:[(0,D.jsx)(C,{}),(0,D.jsx)(C,{colSpan:3,wrap:!0,style:{padding:12},children:(0,D.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,D.jsxs)(`div`,{style:{display:`grid`,gap:4},children:[(0,D.jsx)(`p`,{style:{...A,fontWeight:500},children:r.title??`${r.project} deployed`}),(0,D.jsx)(`p`,{style:n,children:r.body??`No release notes for this deployment.`})]}),(0,D.jsx)(`hr`,{style:{margin:0,border:0,borderTop:`1px solid var(--ds-border)`}}),(0,D.jsx)(`dl`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:12,margin:0},children:[[`Branch`,r.branch??`main`],[`Duration`,r.duration??`58s`],[`Region`,r.region??`Frankfurt`]].map(([e,t])=>(0,D.jsxs)(`div`,{style:{display:`grid`,gap:4},children:[(0,D.jsx)(`dt`,{style:{...A,fontWeight:500},children:e}),(0,D.jsx)(`dd`,{style:{...n,margin:0},children:t})]},e))})]})})]})]},r.project)})})})})}},H=[{initials:`RY`,name:`Reiko Yamada`,email:`reiko@yamada.studio`,plan:`Pro`,price:`$29.00`},{initials:`SH`,name:`Samuel Hart`,email:`sam@hart.io`,plan:`Team`,price:`$96.00`},{initials:`LF`,name:`Lena Fischer`,email:`lena@fischer.dev`,plan:`Free`,price:`$0.00`},{initials:`OH`,name:`Omar Haddad`,email:`omar@haddad.co`,plan:`Pro`,price:`$29.00`},{initials:`ID`,name:`Inês Duarte`,email:`ines@duarte.design`,plan:`Team`,price:`$144.00`}],U={render:()=>(0,D.jsx)(`div`,{style:k,children:(0,D.jsx)(T,{variant:`card`,"aria-label":`Customers`,children:(0,D.jsx)(x,{children:H.map(e=>(0,D.jsxs)(w,{children:[(0,D.jsx)(C,{children:(0,D.jsxs)(`span`,{style:{...N,gap:10},children:[(0,D.jsx)(f,{size:`sm`,initials:e.initials}),(0,D.jsxs)(`span`,{style:{display:`grid`},children:[(0,D.jsx)(`span`,{children:e.name}),(0,D.jsx)(`span`,{style:{...j,fontSize:12,lineHeight:`16px`},children:e.email})]})]})}),(0,D.jsx)(C,{children:(0,D.jsx)(l,{children:e.plan})}),(0,D.jsx)(C,{align:`right`,children:e.price}),(0,D.jsx)(C,{align:`right`,children:more(`More for ${e.name}`)})]},e.email))})})})},W={render:function Render(){let[e,t]=(0,E.useState)({Design:`8`,Engineering:`24`,Marketing:`6`,Support:`12`,Sales:`10`,Finance:`4`}),n={Design:`Mira Okafor`,Engineering:`Jonas Lindqvist`,Marketing:`Priya Raman`,Support:`Tomás Herrera`,Sales:`Aiko Tanaka`,Finance:`Ada Lovelace`};return(0,D.jsx)(`div`,{style:k,children:(0,D.jsxs)(T,{variant:`card`,"aria-label":`Teams`,children:[(0,D.jsx)(S,{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(y,{children:`Team`}),(0,D.jsx)(y,{children:`Admin`}),(0,D.jsx)(y,{children:`Seats`}),(0,D.jsx)(y,{children:(0,D.jsx)(`span`,{style:M,children:`Actions`})})]})}),(0,D.jsx)(x,{children:Object.keys(e).map(r=>(0,D.jsxs)(w,{children:[(0,D.jsx)(C,{children:r}),(0,D.jsx)(C,{children:n[r]}),(0,D.jsx)(C,{style:{width:104},children:(0,D.jsx)(_,{"aria-label":`Seats for ${r}`,inputMode:`numeric`,value:e[r],onChange:n=>t({...e,[r]:n.target.value})})}),(0,D.jsx)(C,{align:`right`,children:more(`More for ${r}`)})]},r))})]})})}},G=[{id:`INV-2041`,status:`Paid`,method:`Card ·· 4242`,amount:`$48.00`},{id:`INV-2042`,status:`Paid`,method:`Wallet`,amount:`$48.00`},{id:`INV-2043`,status:`Pending`,method:`Bank transfer`,amount:`$120.00`},{id:`INV-2044`,status:`Paid`,method:`Card ·· 4242`,amount:`$48.00`},{id:`INV-2045`,status:`Overdue`,method:`Bank transfer`,amount:`$96.00`}],K={render:()=>(0,D.jsx)(`div`,{style:k,children:(0,D.jsxs)(T,{caption:`Invoices for the Team plan, January – May 2026.`,children:[(0,D.jsx)(S,{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(y,{children:`Invoice`}),(0,D.jsx)(y,{children:`Status`}),(0,D.jsx)(y,{children:`Method`}),(0,D.jsx)(y,{align:`right`,children:`Amount`})]})}),(0,D.jsx)(x,{children:G.map(e=>(0,D.jsxs)(w,{children:[(0,D.jsx)(C,{style:{fontWeight:500},children:e.id}),(0,D.jsx)(C,{children:e.status}),(0,D.jsx)(C,{children:e.method}),(0,D.jsx)(C,{align:`right`,children:e.amount})]},e.id))}),(0,D.jsx)(b,{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(C,{colSpan:3,children:`Total`}),(0,D.jsx)(C,{align:`right`,children:`$360.00`})]})})]})})},q=[{name:`Q4 roadmap.pdf`,owner:`Mira Okafor`,size:24e5,sizeLabel:`2.4 MB`,modified:5,modifiedLabel:`Today, 09:12`},{name:`Brand guidelines.fig`,owner:`Jonas Lindqvist`,size:181e5,sizeLabel:`18.1 MB`,modified:4,modifiedLabel:`Yesterday`},{name:`Onboarding flow.mp4`,owner:`Priya Raman`,size:146e6,sizeLabel:`146 MB`,modified:3,modifiedLabel:`Oct 1`},{name:`Pricing research.xlsx`,owner:`Tomás Herrera`,size:64e4,sizeLabel:`640 KB`,modified:2,modifiedLabel:`Sep 28`},{name:`Release notes.md`,owner:`Aiko Tanaka`,size:12e3,sizeLabel:`12 KB`,modified:1,modifiedLabel:`Sep 24`}],J={render:function Render(){let[e,t]=(0,E.useState)({key:`modified`,dir:`descending`}),sortOf=t=>e.key===t?e.dir:`none`,press=e=>t(t=>({key:e,dir:t.key===e&&t.dir===`ascending`?`descending`:`ascending`})),n=[...q].sort((t,n)=>{let r=e.key===`name`?t.name.localeCompare(n.name):t[e.key]-n[e.key];return e.dir===`ascending`?r:-r});return(0,D.jsx)(`div`,{style:k,children:(0,D.jsxs)(T,{variant:`card`,"aria-label":`Files`,children:[(0,D.jsx)(S,{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(y,{sort:sortOf(`name`),onSort:()=>press(`name`),children:`Name`}),(0,D.jsx)(y,{children:`Owner`}),(0,D.jsx)(y,{align:`right`,sort:sortOf(`size`),onSort:()=>press(`size`),children:`Size`}),(0,D.jsx)(y,{sort:sortOf(`modified`),onSort:()=>press(`modified`),children:`Modified`})]})}),(0,D.jsx)(x,{children:n.map(e=>(0,D.jsxs)(w,{children:[(0,D.jsx)(C,{children:e.name}),(0,D.jsx)(C,{children:e.owner}),(0,D.jsx)(C,{align:`right`,children:e.sizeLabel}),(0,D.jsx)(C,{children:e.modifiedLabel})]},e.name))})]})})}},Y={render:function Render(){let[e,t]=(0,E.useState)(`checkout-v3`);return(0,D.jsxs)(`div`,{style:{...k,display:`grid`,gap:16},children:[(0,D.jsx)(`div`,{style:{width:280,maxWidth:`100%`},children:(0,D.jsx)(_,{"aria-label":`Search deployments`,leadIcon:(0,D.jsx)(i,{}),value:e,onChange:e=>t(e.target.value)})}),(0,D.jsxs)(T,{variant:`card`,"aria-label":`Deployments`,children:[(0,D.jsx)(S,{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(y,{children:`Deployment`}),(0,D.jsx)(y,{children:`Status`}),(0,D.jsx)(y,{children:`Branch`}),(0,D.jsx)(y,{align:`right`,children:`Updated`})]})}),(0,D.jsx)(x,{children:(0,D.jsx)(w,{children:(0,D.jsx)(C,{colSpan:4,wrap:!0,children:(0,D.jsx)(ie,{titleAs:`p`,title:e?`No results for “${e}”`:`No deployments yet`,description:e?`Try another branch name or clear the search.`:`Deployments show here after the first push.`,actions:e?(0,D.jsx)(u,{variant:`outline`,size:`sm`,onClick:()=>t(``),children:`Clear search`}):void 0})})})})]})]})}},X=[{id:`#3012`,customer:`Mira Okafor`,status:`Paid`,total:`$129.00`},{id:`#3011`,customer:`Jonas Lindqvist`,status:`Refunded`,total:`$48.00`},{id:`#3010`,customer:`Priya Raman`,status:`Paid`,total:`$312.50`},{id:`#3009`,customer:`Tomás Herrera`,status:`Pending`,total:`$76.00`},{id:`#3008`,customer:`Aiko Tanaka`,status:`Paid`,total:`$54.90`}],Z={render:function Render(){let[e,t]=(0,E.useState)([`#3012`,`#3010`]),[n,r]=(0,E.useState)(`all`),[a,o]=(0,E.useState)(1),s=X.filter(e=>n===`all`||e.status.toLowerCase()===n),c=s.length>0&&s.every(t=>e.includes(t.id)),l=s.some(t=>e.includes(t.id));return(0,D.jsxs)(`div`,{style:{...k,display:`grid`,gap:16},children:[(0,D.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,D.jsx)(`div`,{style:{flex:`0 1 240px`},children:(0,D.jsx)(_,{"aria-label":`Search orders`,placeholder:`Search orders…`,leadIcon:(0,D.jsx)(i,{})})}),(0,D.jsx)(`span`,{style:{flex:1}}),(0,D.jsx)(oe,{"aria-label":`Status`,style:{width:120},value:n,onValueChange:r,options:[{value:`all`,label:`Status`},{value:`paid`,label:`Paid`},{value:`pending`,label:`Pending`},{value:`refunded`,label:`Refunded`}]}),more(`More order actions`,!0)]}),(0,D.jsxs)(T,{variant:`card`,"aria-label":`Orders`,children:[(0,D.jsx)(S,{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(y,{fit:!0,children:(0,D.jsx)(v,{"aria-label":`Select all orders`,checked:c,indeterminate:l&&!c,onCheckedChange:e=>t(e?s.map(e=>e.id):[])})}),(0,D.jsx)(y,{children:`Order`}),(0,D.jsx)(y,{children:`Customer`}),(0,D.jsx)(y,{children:`Status`}),(0,D.jsx)(y,{align:`right`,children:`Total`})]})}),(0,D.jsx)(x,{children:s.map(n=>(0,D.jsxs)(w,{selected:e.includes(n.id),children:[(0,D.jsx)(C,{fit:!0,children:(0,D.jsx)(v,{"aria-label":`Select order ${n.id}`,checked:e.includes(n.id),onCheckedChange:e=>t(t=>e?[...t,n.id]:t.filter(e=>e!==n.id))})}),(0,D.jsx)(C,{style:{fontWeight:500},children:n.id}),(0,D.jsx)(C,{children:n.customer}),(0,D.jsx)(C,{children:n.status}),(0,D.jsx)(C,{align:`right`,children:n.total})]},n.id))})]}),(0,D.jsxs)(`nav`,{"aria-label":`Orders pages`,style:{display:`flex`,alignItems:`center`,gap:8,flexWrap:`wrap`},children:[(0,D.jsxs)(`p`,{style:{...A,...j,flex:1},"aria-live":`polite`,children:[e.length,` of 48 orders selected.`]}),(0,D.jsxs)(`p`,{style:{...A,...j},children:[`Page `,a,` of 10`]}),(0,D.jsx)(u,{variant:`outline`,size:`sm`,disabled:a<=1,onClick:()=>o(a-1),children:`Previous`}),(0,D.jsx)(u,{variant:`outline`,size:`sm`,disabled:a>=10,onClick:()=>o(a+1),children:`Next`})]})]})}},Q={parameters:{layout:`fullscreen`},render:()=>(0,D.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,D.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:24},children:[`default`,`card`].map(t=>(0,D.jsxs)(T,{variant:t,"aria-label":`Usage, ${t} (${e})`,children:[(0,D.jsx)(S,{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(y,{children:`Component`}),(0,D.jsx)(y,{align:`right`,children:`Instances`})]})}),(0,D.jsx)(x,{children:P.map((e,t)=>(0,D.jsxs)(w,{selected:t===1,children:[(0,D.jsx)(C,{children:e.name}),(0,D.jsx)(C,{align:`right`,children:e.instances})]},e.name))}),t==="default"&&(0,D.jsx)(b,{children:(0,D.jsxs)(w,{children:[(0,D.jsx)(C,{children:`Total`}),(0,D.jsx)(C,{align:`right`,children:`673`})]})})]},t))},e))})},$=[`Playground`,`Default`,`States`,`Selection`,`ExpandableRows`,`AvatarsAndBadges`,`EditableCells`,`FooterAndCaption`,`Sorting`,`EmptyState`,`ToolbarAndPagination`,`Themes`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    caption: 'Web adoption, Aug 13 – Sep 12 · library usage vs. detached copies.',
    footer: true,
    selected: false
  },
  render: args => <div style={{
    width: 496,
    maxWidth: '100%'
  }}>
      <Table variant={args.variant} caption={args.caption || undefined}>
        <TableHeader>
          <TableRow>
            <TableHead>Component</TableHead>
            <TableHead align="right">Instances</TableHead>
            <TableHead align="right">Coverage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usage.map((u, i) => <TableRow key={u.name} selected={args.selected && i === 1}>
              <TableCell>{u.name}</TableCell>
              <TableCell align="right">{u.instances}</TableCell>
              <TableCell align="right">{u.coverage}</TableCell>
            </TableRow>)}
        </TableBody>
        {args.footer && <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell align="right">673</TableCell>
              <TableCell align="right">78%</TableCell>
            </TableRow>
          </TableFooter>}
      </Table>
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 496,
    maxWidth: '100%'
  }}>
      <Table caption="Web adoption, Aug 13 – Sep 12 · library usage vs. detached copies.">
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
            <TableHead align="right">Instances</TableHead>
            <TableHead align="right">Coverage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usage.map(u => <TableRow key={u.name}>
              <TableCell>{u.name}</TableCell>
              <TableCell align="right">{u.instances}</TableCell>
              <TableCell align="right">{u.coverage}</TableCell>
            </TableRow>)}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell align="right">673</TableCell>
            <TableCell align="right">78%</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
}`,...I.parameters?.docs?.source},description:{story:`Figma component "Table": header, three rows, footer and caption.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 448,
    maxWidth: '100%'
  }}>
      <Table aria-label="Row states">
        <TableHeader>
          <TableRow>
            <TableHead>State</TableHead>
            <TableHead align="right">Instances</TableHead>
            <TableHead align="right">Coverage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Default</TableCell>
            <TableCell align="right">412</TableCell>
            <TableCell align="right">96%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Hover (point at a row)</TableCell>
            <TableCell align="right">164</TableCell>
            <TableCell align="right">78%</TableCell>
          </TableRow>
          <TableRow selected>
            <TableCell>Selected</TableCell>
            <TableCell align="right">97</TableCell>
            <TableCell align="right">61%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
}`,...L.parameters?.docs?.source},description:{story:`Figma Table Row Type=Body, State=Default / Hover / Selected (hover shown by the pointer).`,...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [picked, setPicked] = useState<string[]>(['Mira Okafor']);
    const all = picked.length === people.length;
    const toggle = (name: string, on: boolean) => setPicked(list => on ? [...list, name] : list.filter(n => n !== name));
    return <div style={width}>
        <Table variant="card" aria-label="Members">
          <TableHeader>
            <TableRow>
              <TableHead fit>
                <Checkbox aria-label="Select all" checked={all} indeterminate={picked.length > 0 && !all} onCheckedChange={on => setPicked(on ? people.map(p => p.name) : [])} />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>
                <span style={srOnly}>Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {people.map(p => <TableRow key={p.name} selected={picked.includes(p.name)}>
                <TableCell fit>
                  <Checkbox aria-label={\`Select \${p.name}\`} checked={picked.includes(p.name)} onCheckedChange={on => toggle(p.name, on)} />
                </TableCell>
                <TableCell>
                  <span style={row}>
                    <Avatar size="xs" initials={p.name[0]} />
                    {p.name}
                  </span>
                </TableCell>
                <TableCell>{p.email}</TableCell>
                <TableCell>{p.role}</TableCell>
                <TableCell align="right">{more(\`More for \${p.name}\`)}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </div>;
  }
}`,...z.parameters?.docs?.source},description:{story:`Figma demo "Table": the card layout with a checkbox column; checked rows are selected.`,...z.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState<string | null>('api-gateway');
    const small: CSSProperties = {
      ...text,
      fontSize: 12,
      lineHeight: '16px',
      ...muted
    };
    return <div style={width}>
        <Table variant="card" aria-label="Deployments">
          <TableBody>
            {deployments.map(d => {
            const expanded = open === d.project;
            return <Fragment key={d.project}>
                  <TableRow>
                    <TableCell fit style={{
                  paddingBlock: 6
                }}>
                      <Button variant="ghost" size="xs" icon={expanded ? <RiArrowDownSLine /> : <RiArrowRightSLine />} aria-label={\`Details of \${d.project}\`} aria-expanded={expanded} aria-controls={\`details-\${d.project}\`} onClick={() => setOpen(expanded ? null : d.project)} />
                    </TableCell>
                    <TableCell>{d.project}</TableCell>
                    <TableCell>{d.env}</TableCell>
                    <TableCell>{d.when}</TableCell>
                  </TableRow>
                  {expanded && <TableRow id={\`details-\${d.project}\`} selected>
                      <TableCell />
                      <TableCell colSpan={3} wrap style={{
                  padding: 12
                }}>
                        <div style={{
                    display: 'grid',
                    gap: 12
                  }}>
                          <div style={{
                      display: 'grid',
                      gap: 4
                    }}>
                            <p style={{
                        ...text,
                        fontWeight: 500
                      }}>{d.title ?? \`\${d.project} deployed\`}</p>
                            <p style={small}>{d.body ?? 'No release notes for this deployment.'}</p>
                          </div>
                          <hr style={{
                      margin: 0,
                      border: 0,
                      borderTop: '1px solid var(--ds-border)'
                    }} />
                          <dl style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: 12,
                      margin: 0
                    }}>
                            {[['Branch', d.branch ?? 'main'], ['Duration', d.duration ?? '58s'], ['Region', d.region ?? 'Frankfurt']].map(([k, v]) => <div key={k} style={{
                        display: 'grid',
                        gap: 4
                      }}>
                                <dt style={{
                          ...text,
                          fontWeight: 500
                        }}>{k}</dt>
                                <dd style={{
                          ...small,
                          margin: 0
                        }}>{v}</dd>
                              </div>)}
                          </dl>
                        </div>
                      </TableCell>
                    </TableRow>}
                </Fragment>;
          })}
          </TableBody>
        </Table>
      </div>;
  }
}`,...V.parameters?.docs?.source},description:{story:`Figma demo "Expandable rows": a chevron button opens a details row (fill-2) under its row.`,...V.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div style={width}>
      <Table variant="card" aria-label="Customers">
        <TableBody>
          {customers.map(c => <TableRow key={c.email}>
              <TableCell>
                <span style={{
              ...row,
              gap: 10
            }}>
                  <Avatar size="sm" initials={c.initials} />
                  <span style={{
                display: 'grid'
              }}>
                    <span>{c.name}</span>
                    <span style={{
                  ...muted,
                  fontSize: 12,
                  lineHeight: '16px'
                }}>{c.email}</span>
                  </span>
                </span>
              </TableCell>
              <TableCell>
                <Badge>{c.plan}</Badge>
              </TableCell>
              <TableCell align="right">{c.price}</TableCell>
              <TableCell align="right">{more(\`More for \${c.name}\`)}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>
}`,...U.parameters?.docs?.source},description:{story:`Figma demo "Avatars and badges": a two-line person cell, a plan Badge, a price aligned right and a menu.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [seats, setSeats] = useState<Record<string, string>>({
      Design: '8',
      Engineering: '24',
      Marketing: '6',
      Support: '12',
      Sales: '10',
      Finance: '4'
    });
    const admins: Record<string, string> = {
      Design: 'Mira Okafor',
      Engineering: 'Jonas Lindqvist',
      Marketing: 'Priya Raman',
      Support: 'Tomás Herrera',
      Sales: 'Aiko Tanaka',
      Finance: 'Ada Lovelace'
    };
    return <div style={width}>
        <Table variant="card" aria-label="Teams">
          <TableHeader>
            <TableRow>
              <TableHead>Team</TableHead>
              <TableHead>Admin</TableHead>
              <TableHead>Seats</TableHead>
              <TableHead>
                <span style={srOnly}>Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.keys(seats).map(team => <TableRow key={team}>
                <TableCell>{team}</TableCell>
                <TableCell>{admins[team]}</TableCell>
                <TableCell style={{
              width: 104
            }}>
                  <Input aria-label={\`Seats for \${team}\`} inputMode="numeric" value={seats[team]} onChange={e => setSeats({
                ...seats,
                [team]: e.target.value
              })} />
                </TableCell>
                <TableCell align="right">{more(\`More for \${team}\`)}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </div>;
  }
}`,...W.parameters?.docs?.source},description:{story:`Figma demo "Editable cells": an Input in each Seats cell.`,...W.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div style={width}>
      <Table caption="Invoices for the Team plan, January – May 2026.">
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead align="right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map(inv => <TableRow key={inv.id}>
              <TableCell style={{
            fontWeight: 500
          }}>{inv.id}</TableCell>
              <TableCell>{inv.status}</TableCell>
              <TableCell>{inv.method}</TableCell>
              <TableCell align="right">{inv.amount}</TableCell>
            </TableRow>)}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell align="right">$360.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
}`,...K.parameters?.docs?.source},description:{story:`Figma demo "Footer and caption": the default layout with a total row and a caption.`,...K.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [sort, setSort] = useState<{
      key: SortKey;
      dir: Exclude<TableSort, 'none'>;
    }>({
      key: 'modified',
      dir: 'descending'
    });
    const sortOf = (key: SortKey): TableSort => sort.key === key ? sort.dir : 'none';
    const press = (key: SortKey) => setSort(s => ({
      key,
      dir: s.key === key && s.dir === 'ascending' ? 'descending' : 'ascending'
    }));
    const shown = [...files].sort((a, b) => {
      const by = sort.key === 'name' ? a.name.localeCompare(b.name) : a[sort.key] - b[sort.key];
      return sort.dir === 'ascending' ? by : -by;
    });
    return <div style={width}>
        <Table variant="card" aria-label="Files">
          <TableHeader>
            <TableRow>
              <TableHead sort={sortOf('name')} onSort={() => press('name')}>
                Name
              </TableHead>
              <TableHead>Owner</TableHead>
              <TableHead align="right" sort={sortOf('size')} onSort={() => press('size')}>
                Size
              </TableHead>
              <TableHead sort={sortOf('modified')} onSort={() => press('modified')}>
                Modified
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shown.map(f => <TableRow key={f.name}>
                <TableCell>{f.name}</TableCell>
                <TableCell>{f.owner}</TableCell>
                <TableCell align="right">{f.sizeLabel}</TableCell>
                <TableCell>{f.modifiedLabel}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </div>;
  }
}`,...J.parameters?.docs?.source},description:{story:'Figma demo "Sorting": headers as sort buttons; the sorted column shows an arrow and `aria-sort`.',...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [query, setQuery] = useState('checkout-v3');
    return <div style={{
      ...width,
      display: 'grid',
      gap: 16
    }}>
        <div style={{
        width: 280,
        maxWidth: '100%'
      }}>
          <Input aria-label="Search deployments" leadIcon={<RiSearchLine />} value={query} onChange={e => setQuery(e.target.value)} />
        </div>
        <Table variant="card" aria-label="Deployments">
          <TableHeader>
            <TableRow>
              <TableHead>Deployment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Branch</TableHead>
              <TableHead align="right">Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={4} wrap>
                <Empty titleAs="p" title={query ? \`No results for “\${query}”\` : 'No deployments yet'} description={query ? 'Try another branch name or clear the search.' : 'Deployments show here after the first push.'} actions={query ? <Button variant="outline" size="sm" onClick={() => setQuery('')}>
                        Clear search
                      </Button> : undefined} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>;
  }
}`,...Y.parameters?.docs?.source},description:{story:`Figma demo "Empty state": a search with no matches; an Empty spans the body.`,...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [picked, setPicked] = useState<string[]>(['#3012', '#3010']);
    const [status, setStatus] = useState('all');
    const [page, setPage] = useState(1);
    const shown = orders.filter(o => status === 'all' || o.status.toLowerCase() === status);
    const all = shown.length > 0 && shown.every(o => picked.includes(o.id));
    const some = shown.some(o => picked.includes(o.id));
    return <div style={{
      ...width,
      display: 'grid',
      gap: 16
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
          <div style={{
          flex: '0 1 240px'
        }}>
            <Input aria-label="Search orders" placeholder="Search orders…" leadIcon={<RiSearchLine />} />
          </div>
          <span style={{
          flex: 1
        }} />
          <Select aria-label="Status" style={{
          width: 120
        }} value={status} onValueChange={setStatus} options={[{
          value: 'all',
          label: 'Status'
        }, {
          value: 'paid',
          label: 'Paid'
        }, {
          value: 'pending',
          label: 'Pending'
        }, {
          value: 'refunded',
          label: 'Refunded'
        }]} />
          {more('More order actions', true)}
        </div>
        <Table variant="card" aria-label="Orders">
          <TableHeader>
            <TableRow>
              <TableHead fit>
                <Checkbox aria-label="Select all orders" checked={all} indeterminate={some && !all} onCheckedChange={on => setPicked(on ? shown.map(o => o.id) : [])} />
              </TableHead>
              <TableHead>Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead align="right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shown.map(o => <TableRow key={o.id} selected={picked.includes(o.id)}>
                <TableCell fit>
                  <Checkbox aria-label={\`Select order \${o.id}\`} checked={picked.includes(o.id)} onCheckedChange={on => setPicked(list => on ? [...list, o.id] : list.filter(id => id !== o.id))} />
                </TableCell>
                <TableCell style={{
              fontWeight: 500
            }}>{o.id}</TableCell>
                <TableCell>{o.customer}</TableCell>
                <TableCell>{o.status}</TableCell>
                <TableCell align="right">{o.total}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
        <nav aria-label="Orders pages" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <p style={{
          ...text,
          ...muted,
          flex: 1
        }} aria-live="polite">
            {picked.length} of 48 orders selected.
          </p>
          <p style={{
          ...text,
          ...muted
        }}>Page {page} of 10</p>
          <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage(page - 1)}>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled={page >= 10} onClick={() => setPage(page + 1)}>
            Next
          </Button>
        </nav>
      </div>;
  }
}`,...Z.parameters?.docs?.source},description:{story:`Figma demo "Toolbar and pagination": search, a status filter and a menu above; the selection count and paging under.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24,
      display: 'grid',
      gap: 24
    }}>
          {(['default', 'card'] as const).map(variant => <Table key={variant} variant={variant} aria-label={\`Usage, \${variant} (\${scheme})\`}>
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead align="right">Instances</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usage.map((u, i) => <TableRow key={u.name} selected={i === 1}>
                    <TableCell>{u.name}</TableCell>
                    <TableCell align="right">{u.instances}</TableCell>
                  </TableRow>)}
              </TableBody>
              {variant === 'default' && <TableFooter>
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell align="right">673</TableCell>
                  </TableRow>
                </TableFooter>}
            </Table>)}
        </div>)}
    </div>
}`,...Q.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...Q.parameters?.docs?.description}}}})))()}init_Table_stories();export{U as AvatarsAndBadges,I as Default,W as EditableCells,Y as EmptyState,V as ExpandableRows,K as FooterAndCaption,F as Playground,z as Selection,J as Sorting,L as States,Q as Themes,Z as ToolbarAndPagination,$ as __namedExportsOrder,O as default};