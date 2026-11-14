import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-B0xAhTFV.js";import{n as r,t as i}from"./Button-BNEDxZ_5.js";import{i as a,t as o}from"./Input-DKGV2tSW.js";import{r as s,t as c}from"./Switch-D8Qn0P5N.js";import{i as l,n as u,o as d,r as f,t as p}from"./Card-DweoSJPB.js";import{o as m,t as h}from"./Field-DQHMYjkZ.js";import{a as g,i as _,n as v,r as y,t as b}from"./Tabs-BPvQrT-4.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{x=n(),r(),d(),m(),a(),s(),g(),S=t(),C={title:`Components/Tabs`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Tabs Trigger** and **Tabs List** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=197-2)): `Tabs` holds the selected `value` (`defaultValue` / `onValueChange`), Figma Variant (`default` · `secondary` · `line`; `line` with `orientation="vertical"` is Figma "Line Vertical"), `size` (`default` · `lg`) and `orientation`. `TabsList` is the `role="tablist"` (`fullWidth` stretches it); each `TabsTrigger` takes a `value`, a label and optional `icon` and `count`, plus `eyebrow` (Figma Layout=Eyebrow) or `description` (Layout=Icon top). `TabsContent` is the `role="tabpanel"` with the same `value`. The list is one Tab stop: arrow keys (Left/Right, or Up/Down when vertical), Home and End move between tabs and select them; disabled tabs are skipped.'}}}},w=e=>(0,S.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),T={square:w((0,S.jsx)(`path`,{d:`M5 3a2 2 0 0 0-2 2M19 3a2 2 0 0 1 2 2M21 19a2 2 0 0 1-2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h1M14 3h1M14 21h1M3 9v1M21 9v1M3 14v1M21 14v1`})),eye:w((0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`path`,{d:`M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0`}),(0,S.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]})),code:w((0,S.jsx)(`path`,{d:`m16 18 6-6-6-6M8 6l-6 6 6 6`})),history:w((0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`}),(0,S.jsx)(`path`,{d:`M3 3v5h5M12 7v5l4 2`})]})),dollar:w((0,S.jsx)(`path`,{d:`M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6`})),bag:w((0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`path`,{d:`M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z`}),(0,S.jsx)(`path`,{d:`M3 6h18M16 10a4 4 0 0 1-8 0`})]})),undo:w((0,S.jsx)(`path`,{d:`M9 14 4 9l5-5M4 9h10.5a5.5 5.5 0 0 1 0 11H11`}))},E={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,color:`var(--ds-foreground)`},D={...E,margin:0,color:`var(--ds-muted-foreground)`},O={display:`flex`,justifyContent:`space-between`,gap:12},k={args:{variant:`default`,size:`default`,orientation:`horizontal`,icon:!1,count:!1,fullWidth:!1},argTypes:{variant:{name:`Variant`,control:`inline-radio`,options:[`default`,`secondary`,`line`]},size:{name:`Size`,control:`inline-radio`,options:[`default`,`lg`]},orientation:{name:`Orientation`,control:`inline-radio`,options:[`horizontal`,`vertical`]},icon:{name:`Icon`},count:{name:`Count`}},render:({variant:e,size:t,orientation:n,icon:r,count:i,fullWidth:a})=>(0,S.jsxs)(b,{defaultValue:`overview`,variant:e,size:t,orientation:n,style:{width:`min(480px, 100%)`},children:[(0,S.jsx)(y,{"aria-label":`Project`,fullWidth:a,children:[`Overview`,`Activity`,`Settings`].map((e,t)=>(0,S.jsx)(_,{value:e.toLowerCase(),icon:r?T.square:void 0,count:i?[12,4,void 0][t]:void 0,children:e},e))}),[`overview`,`activity`,`settings`].map(e=>(0,S.jsx)(v,{value:e,children:(0,S.jsxs)(`p`,{style:D,children:[`The `,e,` panel.`]})},e))]})},A={render:()=>(0,S.jsxs)(b,{defaultValue:`overview`,style:{width:`min(420px, 100%)`},children:[(0,S.jsxs)(y,{"aria-label":`Order`,children:[(0,S.jsx)(_,{value:`overview`,children:`Overview`}),(0,S.jsx)(_,{value:`tracking`,children:`Tracking`}),(0,S.jsx)(_,{value:`invoice`,children:`Invoice`}),(0,S.jsx)(_,{value:`address`,children:`Address`})]}),(0,S.jsx)(v,{value:`overview`,children:(0,S.jsxs)(p,{children:[(0,S.jsx)(l,{title:`Order #4821`,description:`Placed on 12 March · 3 items`}),(0,S.jsxs)(u,{style:{...E,display:`grid`,gap:8},children:[(0,S.jsxs)(`div`,{style:O,children:[(0,S.jsx)(`span`,{style:D,children:`Subtotal`}),(0,S.jsx)(`span`,{children:`$182.00`})]}),(0,S.jsxs)(`div`,{style:O,children:[(0,S.jsx)(`span`,{style:D,children:`Shipping`}),(0,S.jsx)(`span`,{children:`$8.00`})]}),(0,S.jsxs)(`div`,{style:{...O,fontWeight:500},children:[(0,S.jsx)(`span`,{children:`Total`}),(0,S.jsx)(`span`,{children:`$190.00`})]})]})]})}),(0,S.jsx)(v,{value:`tracking`,children:(0,S.jsxs)(p,{children:[(0,S.jsx)(l,{title:`In transit`,description:`Arrives Friday, 15 March`}),(0,S.jsx)(u,{children:(0,S.jsx)(`p`,{style:D,children:`Left the Lisbon depot this morning.`})})]})}),(0,S.jsx)(v,{value:`invoice`,children:(0,S.jsxs)(p,{children:[(0,S.jsx)(l,{title:`Invoice INV-4821`,description:`Paid with Visa •••• 4242`}),(0,S.jsx)(f,{justify:`start`,children:(0,S.jsx)(i,{size:`sm`,variant:`outline`,children:`Download PDF`})})]})}),(0,S.jsx)(v,{value:`address`,children:(0,S.jsxs)(p,{children:[(0,S.jsx)(l,{title:`Shipping address`}),(0,S.jsx)(u,{children:(0,S.jsxs)(`p`,{style:{...E,margin:0},children:[`Rua Augusta 120`,(0,S.jsx)(`br`,{}),`1100-053 Lisbon, Portugal`]})})]})})]})},j={render:()=>(0,S.jsx)(`div`,{style:{display:`grid`,gap:24},children:[`default`,`secondary`,`line`].map(e=>(0,S.jsx)(b,{defaultValue:`all`,variant:e,children:(0,S.jsxs)(y,{"aria-label":`Filter (${e})`,children:[(0,S.jsx)(_,{value:`all`,children:`All`}),(0,S.jsx)(_,{value:`open`,children:`Open`}),(0,S.jsx)(_,{value:`closed`,children:`Closed`})]})},e))})},M={render:()=>(0,S.jsxs)(b,{defaultValue:`revenue`,variant:`secondary`,children:[(0,S.jsxs)(y,{"aria-label":`Metric`,children:[(0,S.jsx)(_,{value:`revenue`,eyebrow:`Revenue`,icon:T.dollar,children:`$12,480`}),(0,S.jsx)(_,{value:`orders`,eyebrow:`Orders`,icon:T.bag,children:`342`}),(0,S.jsx)(_,{value:`refunds`,eyebrow:`Refunds`,icon:T.undo,children:`$310`})]}),[`revenue`,`orders`,`refunds`].map(e=>(0,S.jsx)(v,{value:e,children:(0,S.jsxs)(`p`,{style:D,children:[`Last 30 days of `,e,`, by day.`]})},e))]})},N={render:()=>(0,S.jsx)(b,{defaultValue:`leads`,variant:`line`,children:(0,S.jsx)(y,{"aria-label":`Pipeline stage`,children:[[`leads`,`Leads`,48],[`qualified`,`Qualified`,21],[`proposal`,`Proposal`,9],[`won`,`Won`,4]].map(([e,t,n],r)=>(0,S.jsx)(_,{value:String(e),eyebrow:`Stage ${r+1}`,count:n,children:t},e))})})},P=[`Profile`,`Account`,`Appearance`,`Notifications`,`Billing`,`Security`],F={render:()=>(0,S.jsxs)(b,{defaultValue:`notifications`,orientation:`vertical`,variant:`line`,style:{width:`min(560px, 100%)`},children:[(0,S.jsx)(y,{"aria-label":`Settings`,style:{width:160},children:P.map(e=>(0,S.jsx)(_,{value:e.toLowerCase(),children:e},e))}),P.map(e=>(0,S.jsxs)(v,{value:e.toLowerCase(),style:{display:`grid`,gap:12},children:[(0,S.jsx)(`span`,{style:{...E,fontWeight:500},children:e}),e===`Notifications`?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(c,{label:`Email digests`,caption:`A summary every Monday.`,defaultChecked:!0}),(0,S.jsx)(c,{label:`Mentions`,caption:`When someone mentions you.`,defaultChecked:!0})]}):(0,S.jsxs)(`p`,{style:D,children:[`Manage your `,e.toLowerCase(),` settings.`]})]},e))]})},I={render:()=>(0,S.jsx)(`div`,{style:{display:`grid`,gap:16,justifyItems:`start`},children:[`default`,`lg`].map(e=>(0,S.jsx)(b,{defaultValue:`week`,size:e,children:(0,S.jsx)(y,{"aria-label":`Range (${e})`,children:[`Day`,`Week`,`Month`,`Year`].map(e=>(0,S.jsx)(_,{value:e.toLowerCase(),children:e},e))})},e))})},L={render:()=>(0,S.jsx)(b,{defaultValue:`inbox`,children:(0,S.jsxs)(y,{"aria-label":`Mailbox`,children:[(0,S.jsx)(_,{value:`inbox`,count:12,children:`Inbox`}),(0,S.jsx)(_,{value:`assigned`,count:4,children:`Assigned`}),(0,S.jsx)(_,{value:`mentions`,count:2,children:`Mentions`}),(0,S.jsx)(_,{value:`done`,children:`Done`})]})})},R={render:()=>(0,S.jsx)(b,{defaultValue:`preview`,variant:`secondary`,children:(0,S.jsxs)(y,{"aria-label":`View`,children:[(0,S.jsx)(_,{value:`preview`,icon:T.eye,children:`Preview`}),(0,S.jsx)(_,{value:`code`,icon:T.code,children:`Code`}),(0,S.jsx)(_,{value:`history`,icon:T.history,children:`History`})]})})},z={render:()=>(0,S.jsx)(b,{defaultValue:`preview`,variant:`secondary`,children:(0,S.jsxs)(y,{"aria-label":`View`,children:[(0,S.jsx)(_,{value:`preview`,icon:T.eye,description:`See the page`,children:`Preview`}),(0,S.jsx)(_,{value:`code`,icon:T.code,description:`Edit the source`,children:`Code`}),(0,S.jsx)(_,{value:`history`,icon:T.history,description:`Past versions`,children:`History`})]})})},B={render:()=>(0,S.jsx)(b,{defaultValue:`overview`,children:(0,S.jsxs)(y,{"aria-label":`Report`,children:[(0,S.jsx)(_,{value:`overview`,children:`Overview`}),(0,S.jsx)(_,{value:`activity`,children:`Activity`}),(0,S.jsx)(_,{value:`analytics`,disabled:!0,children:`Analytics`}),(0,S.jsx)(_,{value:`settings`,children:`Settings`})]})})},V={render:function(){let[e,t]=(0,x.useState)(`sign-in`);return(0,S.jsx)(p,{style:{width:380,maxWidth:`100%`},children:(0,S.jsx)(u,{children:(0,S.jsxs)(b,{value:e,onValueChange:t,style:{width:`100%`},children:[(0,S.jsxs)(y,{"aria-label":`Account`,fullWidth:!0,children:[(0,S.jsx)(_,{value:`sign-in`,children:`Sign in`}),(0,S.jsx)(_,{value:`create`,children:`Create account`})]}),(0,S.jsxs)(v,{value:`sign-in`,style:{display:`grid`,gap:12,paddingTop:8},children:[(0,S.jsx)(h,{label:`Email`,children:(0,S.jsx)(o,{type:`email`,name:`email`,placeholder:`you@example.com`})}),(0,S.jsx)(h,{label:`Password`,children:(0,S.jsx)(o,{type:`password`,name:`password`})}),(0,S.jsx)(i,{children:`Sign in`})]}),(0,S.jsxs)(v,{value:`create`,style:{display:`grid`,gap:12,paddingTop:8},children:[(0,S.jsx)(h,{label:`Name`,children:(0,S.jsx)(o,{name:`name`})}),(0,S.jsx)(h,{label:`Work email`,children:(0,S.jsx)(o,{type:`email`,name:`new-email`,placeholder:`you@example.com`})}),(0,S.jsx)(i,{children:`Create account`})]})]})})})}},H={parameters:{layout:`fullscreen`},render:()=>(0,S.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,S.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,justifyItems:`start`},children:[`default`,`secondary`,`line`].map(t=>(0,S.jsx)(b,{defaultValue:`a`,variant:t,children:(0,S.jsxs)(y,{"aria-label":`${t} (${e})`,children:[(0,S.jsx)(_,{value:`a`,count:3,children:`Active`}),(0,S.jsx)(_,{value:`b`,children:`Other`}),(0,S.jsx)(_,{value:`c`,disabled:!0,children:`Disabled`})]})},t))},e))})},U=[`Playground`,`Order`,`Variants`,`MetricTabs`,`Stacked`,`Vertical`,`Sizes`,`WithCounts`,`WithIcons`,`IconTop`,`Disabled`,`FullWidth`,`Themes`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    orientation: 'horizontal',
    icon: false,
    count: false,
    fullWidth: false
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: 'inline-radio',
      options: ['default', 'secondary', 'line']
    },
    size: {
      name: 'Size',
      control: 'inline-radio',
      options: ['default', 'lg']
    },
    orientation: {
      name: 'Orientation',
      control: 'inline-radio',
      options: ['horizontal', 'vertical']
    },
    icon: {
      name: 'Icon'
    },
    count: {
      name: 'Count'
    }
  },
  render: ({
    variant,
    size,
    orientation,
    icon: showIcon,
    count,
    fullWidth
  }) => <Tabs defaultValue="overview" variant={variant} size={size} orientation={orientation} style={{
    width: 'min(480px, 100%)'
  }}>
      <TabsList aria-label="Project" fullWidth={fullWidth}>
        {['Overview', 'Activity', 'Settings'].map((label, i) => <TabsTrigger key={label} value={label.toLowerCase()} icon={showIcon ? icons.square : undefined} count={count ? [12, 4, undefined][i] : undefined}>
            {label}
          </TabsTrigger>)}
      </TabsList>
      {['overview', 'activity', 'settings'].map(v => <TabsContent key={v} value={v}>
          <p style={muted}>The {v} panel.</p>
        </TabsContent>)}
    </Tabs>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview" style={{
    width: 'min(420px, 100%)'
  }}>
      <TabsList aria-label="Order">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="tracking">Tracking</TabsTrigger>
        <TabsTrigger value="invoice">Invoice</TabsTrigger>
        <TabsTrigger value="address">Address</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader title="Order #4821" description="Placed on 12 March · 3 items" />
          <CardContent style={{
          ...text,
          display: 'grid',
          gap: 8
        }}>
            <div style={row}>
              <span style={muted}>Subtotal</span>
              <span>$182.00</span>
            </div>
            <div style={row}>
              <span style={muted}>Shipping</span>
              <span>$8.00</span>
            </div>
            <div style={{
            ...row,
            fontWeight: 500
          }}>
              <span>Total</span>
              <span>$190.00</span>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tracking">
        <Card>
          <CardHeader title="In transit" description="Arrives Friday, 15 March" />
          <CardContent>
            <p style={muted}>Left the Lisbon depot this morning.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="invoice">
        <Card>
          <CardHeader title="Invoice INV-4821" description="Paid with Visa •••• 4242" />
          <CardFooter justify="start">
            <Button size="sm" variant="outline">
              Download PDF
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="address">
        <Card>
          <CardHeader title="Shipping address" />
          <CardContent>
            <p style={{
            ...text,
            margin: 0
          }}>
              Rua Augusta 120
              <br />
              1100-053 Lisbon, Portugal
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
}`,...A.parameters?.docs?.source},description:{story:`Figma demo "Tabs": an order with Overview, Tracking, Invoice and Address panels.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      {(['default', 'secondary', 'line'] as const).map(variant => <Tabs key={variant} defaultValue="all" variant={variant}>
          <TabsList aria-label={\`Filter (\${variant})\`}>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>
        </Tabs>)}
    </div>
}`,...j.parameters?.docs?.source},description:{story:`Figma demos "Secondary" and "Line": the other two Variants.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="revenue" variant="secondary">
      <TabsList aria-label="Metric">
        <TabsTrigger value="revenue" eyebrow="Revenue" icon={icons.dollar}>
          $12,480
        </TabsTrigger>
        <TabsTrigger value="orders" eyebrow="Orders" icon={icons.bag}>
          342
        </TabsTrigger>
        <TabsTrigger value="refunds" eyebrow="Refunds" icon={icons.undo}>
          $310
        </TabsTrigger>
      </TabsList>
      {['revenue', 'orders', 'refunds'].map(v => <TabsContent key={v} value={v}>
          <p style={muted}>Last 30 days of {v}, by day.</p>
        </TabsContent>)}
    </Tabs>
}`,...M.parameters?.docs?.source},description:{story:`Figma demo "Metric tabs": Layout=Eyebrow, the metric's name above its value.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="leads" variant="line">
      <TabsList aria-label="Pipeline stage">
        {[['leads', 'Leads', 48], ['qualified', 'Qualified', 21], ['proposal', 'Proposal', 9], ['won', 'Won', 4]].map(([v, label, n], i) => <TabsTrigger key={v} value={String(v)} eyebrow={\`Stage \${i + 1}\`} count={n}>
            {label}
          </TabsTrigger>)}
      </TabsList>
    </Tabs>
}`,...N.parameters?.docs?.source},description:{story:`Figma demo "Stacked": a pipeline, each stage's name above its tab with a count.`,...N.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="notifications" orientation="vertical" variant="line" style={{
    width: 'min(560px, 100%)'
  }}>
      <TabsList aria-label="Settings" style={{
      width: 160
    }}>
        {settings.map(s => <TabsTrigger key={s} value={s.toLowerCase()}>
            {s}
          </TabsTrigger>)}
      </TabsList>
      {settings.map(s => <TabsContent key={s} value={s.toLowerCase()} style={{
      display: 'grid',
      gap: 12
    }}>
          <span style={{
        ...text,
        fontWeight: 500
      }}>{s}</span>
          {s === 'Notifications' ? <>
              <Switch label="Email digests" caption="A summary every Monday." defaultChecked />
              <Switch label="Mentions" caption="When someone mentions you." defaultChecked />
            </> : <p style={muted}>Manage your {s.toLowerCase()} settings.</p>}
        </TabsContent>)}
    </Tabs>
}`,...F.parameters?.docs?.source},description:{story:`Figma demo "Vertical": settings sections in a vertical list beside the panel.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    justifyItems: 'start'
  }}>
      {(['default', 'lg'] as const).map(size => <Tabs key={size} defaultValue="week" size={size}>
          <TabsList aria-label={\`Range (\${size})\`}>
            {['Day', 'Week', 'Month', 'Year'].map(r => <TabsTrigger key={r} value={r.toLowerCase()}>
                {r}
              </TabsTrigger>)}
          </TabsList>
        </Tabs>)}
    </div>
}`,...I.parameters?.docs?.source},description:{story:`Figma demo "Sizes": Size=Default and lg.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="inbox">
      <TabsList aria-label="Mailbox">
        <TabsTrigger value="inbox" count={12}>
          Inbox
        </TabsTrigger>
        <TabsTrigger value="assigned" count={4}>
          Assigned
        </TabsTrigger>
        <TabsTrigger value="mentions" count={2}>
          Mentions
        </TabsTrigger>
        <TabsTrigger value="done">Done</TabsTrigger>
      </TabsList>
    </Tabs>
}`,...L.parameters?.docs?.source},description:{story:`Figma demo "With counts": Figma "Count" after the label.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="preview" variant="secondary">
      <TabsList aria-label="View">
        <TabsTrigger value="preview" icon={icons.eye}>
          Preview
        </TabsTrigger>
        <TabsTrigger value="code" icon={icons.code}>
          Code
        </TabsTrigger>
        <TabsTrigger value="history" icon={icons.history}>
          History
        </TabsTrigger>
      </TabsList>
    </Tabs>
}`,...R.parameters?.docs?.source},description:{story:`Figma demo "With icons": Figma "Icon" before the label.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="preview" variant="secondary">
      <TabsList aria-label="View">
        <TabsTrigger value="preview" icon={icons.eye} description="See the page">
          Preview
        </TabsTrigger>
        <TabsTrigger value="code" icon={icons.code} description="Edit the source">
          Code
        </TabsTrigger>
        <TabsTrigger value="history" icon={icons.history} description="Past versions">
          History
        </TabsTrigger>
      </TabsList>
    </Tabs>
}`,...z.parameters?.docs?.source},description:{story:`Figma Layout=Icon top: the icon above the label and a description.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview">
      <TabsList aria-label="Report">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="analytics" disabled>
          Analytics
        </TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
}`,...B.parameters?.docs?.source},description:{story:`Figma demo "Disabled": a tab that cannot be chosen yet; the arrow keys skip it.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [mode, setMode] = useState('sign-in');
    return <Card style={{
      width: 380,
      maxWidth: '100%'
    }}>
        <CardContent>
          <Tabs value={mode} onValueChange={setMode} style={{
          width: '100%'
        }}>
            <TabsList aria-label="Account" fullWidth>
              <TabsTrigger value="sign-in">Sign in</TabsTrigger>
              <TabsTrigger value="create">Create account</TabsTrigger>
            </TabsList>
            <TabsContent value="sign-in" style={{
            display: 'grid',
            gap: 12,
            paddingTop: 8
          }}>
              <Field label="Email">
                <Input type="email" name="email" placeholder="you@example.com" />
              </Field>
              <Field label="Password">
                <Input type="password" name="password" />
              </Field>
              <Button>Sign in</Button>
            </TabsContent>
            <TabsContent value="create" style={{
            display: 'grid',
            gap: 12,
            paddingTop: 8
          }}>
              <Field label="Name">
                <Input name="name" />
              </Field>
              <Field label="Work email">
                <Input type="email" name="new-email" placeholder="you@example.com" />
              </Field>
              <Button>Create account</Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>;
  }
}`,...V.parameters?.docs?.source},description:{story:`Figma demo "Full width": a sign-in form whose tabs share the card's width.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
      gap: 16,
      justifyItems: 'start'
    }}>
          {(['default', 'secondary', 'line'] as const).map(variant => <Tabs key={variant} defaultValue="a" variant={variant}>
              <TabsList aria-label={\`\${variant} (\${scheme})\`}>
                <TabsTrigger value="a" count={3}>
                  Active
                </TabsTrigger>
                <TabsTrigger value="b">Other</TabsTrigger>
                <TabsTrigger value="c" disabled>
                  Disabled
                </TabsTrigger>
              </TabsList>
            </Tabs>)}
        </div>)}
    </div>
}`,...H.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...H.parameters?.docs?.description}}}})))()}W();export{B as Disabled,V as FullWidth,z as IconTop,M as MetricTabs,A as Order,k as Playground,I as Sizes,N as Stacked,H as Themes,j as Variants,F as Vertical,L as WithCounts,R as WithIcons,U as __namedExportsOrder,C as default};