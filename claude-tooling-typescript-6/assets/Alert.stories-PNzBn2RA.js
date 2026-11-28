import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-Dn36BRHu.js";import{n as r,t as i}from"./Button-CLmPt_Gx.js";import{n as a,t as o}from"./Alert-7nJlgmwA.js";var s,c,l,u,icon,d,f,p,m,h,g,_,v,y,b,x;function init_Alert_stories(){return(init_Alert_stories=e((()=>{s=n(),r(),a(),c=t(),l={title:`Components/Alert`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Alert** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=219-2)): `variant` (`default` · `destructive`) with `title`, `description`, `icon` and an `action` slot. It is a live region — `status` by default, `alert` when destructive — so an alert added while the page is open is read out; `role={undefined}` turns that off."}}}},u=17.3,icon=e=>(0,c.jsx)(`svg`,{viewBox:`0 0 24 24`,width:u,height:u,fill:`none`,stroke:`currentColor`,strokeWidth:30/u,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),d={circleCheck:icon((0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,c.jsx)(`path`,{d:`m9 12 2 2 4-4`})]})),circleAlert:icon((0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,c.jsx)(`path`,{d:`M12 8v4M12 16h.01`})]})),info:icon((0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,c.jsx)(`path`,{d:`M12 16v-4M12 8h.01`})]})),wifiOff:icon((0,c.jsx)(`path`,{d:`M12 20h.01M8.5 16.43a5 5 0 0 1 7 0M2 8.82a15 15 0 0 1 4.18-2.64M19 12.86a10 10 0 0 0-2-1.52M22 8.82a15 15 0 0 0-11.29-3.76M5 12.86a10 10 0 0 1 5.17-2.69M2 2l20 20`}))},f={args:{variant:`default`,title:`Booking confirmed`,description:`Your stay at Casa is booked for Sep 18 – 21.`,icon:!0,action:!0},argTypes:{variant:{name:`Variant`,control:`inline-radio`,options:[`default`,`destructive`]},title:{name:`Title`},description:{name:`Description`},icon:{name:`Icon`},action:{name:`Action`}},render:({variant:e,title:t,description:n,icon:r,action:a})=>(0,c.jsx)(o,{variant:e,style:{width:448},title:t,description:n||void 0,icon:r?e===`destructive`?d.circleAlert:d.circleCheck:void 0,action:a?(0,c.jsx)(i,{variant:e===`destructive`?`ghost`:`outline`,size:`sm`,children:e===`destructive`?`Retry`:`View`}):void 0})},p={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:40},children:[(0,c.jsx)(o,{style:{width:448},icon:d.circleAlert,title:`Booking confirmed`,description:`Your stay at Casa is booked for Sep 18 – 21.`,action:(0,c.jsx)(i,{variant:`outline`,size:`sm`,children:`View`})}),(0,c.jsx)(o,{variant:`destructive`,style:{width:448},icon:d.circleAlert,title:`Booking confirmed`,description:`Your stay at Casa is booked for Sep 18 – 21.`,action:(0,c.jsx)(i,{variant:`ghost`,size:`sm`,children:`Retry`})})]})},m={render:()=>(0,c.jsx)(o,{style:{width:448},icon:d.circleCheck,title:`Booking confirmed`,description:`Your stay at Casa Azul is booked for Sep 18 – 21. We've sent the details to maya@example.com.`})},h={render:()=>(0,c.jsx)(o,{variant:`destructive`,style:{width:448},icon:d.circleAlert,title:`Payment failed`,description:`Your card ending in 4242 was declined. Update your payment method to keep Premium.`,action:(0,c.jsx)(i,{variant:`outline`,size:`sm`,children:`Retry`})})},g={render:()=>(0,c.jsx)(o,{style:{width:448},icon:d.info,title:`Your free trial ends in 3 days`,description:`Upgrade to keep offline downloads and ad-free listening.`,action:(0,c.jsx)(i,{size:`sm`,children:`Upgrade`})})},_={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:12,width:448},children:[(0,c.jsx)(o,{icon:d.circleCheck,title:`Your changes have been saved.`}),(0,c.jsx)(o,{icon:d.wifiOff,title:`You're offline. We'll sync when you reconnect.`})]})},v={render:()=>(0,c.jsxs)(o,{variant:`destructive`,style:{width:448},icon:d.circleAlert,title:`Unable to process your payment`,children:[(0,c.jsx)(`p`,{children:`Please check the following and try again:`}),(0,c.jsxs)(`ul`,{children:[(0,c.jsx)(`li`,{children:`Your card details are correct`}),(0,c.jsx)(`li`,{children:`Your card has enough funds`}),(0,c.jsx)(`li`,{children:`Your billing address matches`})]})]})},y={render:function Live(){let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:16,width:448,justifyItems:`start`},children:[(0,c.jsx)(i,{onClick:()=>t(!0),disabled:e,children:`Save changes`}),e&&(0,c.jsx)(o,{style:{width:`100%`},icon:d.circleCheck,title:`Your changes have been saved.`,action:(0,c.jsx)(i,{variant:`ghost`,size:`sm`,onClick:()=>t(!1),children:`Dismiss`})})]})}},b={parameters:{layout:`fullscreen`},render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,c.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,justifyItems:`start`},children:[(0,c.jsx)(o,{style:{width:400},icon:d.circleCheck,title:e===`light`?`Light`:`Dark`,description:`Your stay at Casa is booked for Sep 18 – 21.`,action:(0,c.jsx)(i,{variant:`outline`,size:`sm`,children:`View`})}),(0,c.jsx)(o,{variant:`destructive`,style:{width:400},icon:d.circleAlert,title:`Payment failed`,description:`Your card ending in 4242 was declined.`,action:(0,c.jsx)(i,{variant:`ghost`,size:`sm`,children:`Retry`})})]},e))})},x=[`Playground`,`Variants`,`Basic`,`Destructive`,`WithAction`,`TitleOnly`,`WithList`,`Live`,`Themes`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    title: 'Booking confirmed',
    description: 'Your stay at Casa is booked for Sep 18 – 21.',
    icon: true,
    action: true
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: 'inline-radio',
      options: ['default', 'destructive']
    },
    title: {
      name: 'Title'
    },
    description: {
      name: 'Description'
    },
    icon: {
      name: 'Icon'
    },
    action: {
      name: 'Action'
    }
  },
  render: ({
    variant,
    title,
    description,
    icon: withIcon,
    action
  }) => <Alert variant={variant} style={{
    width: 448
  }} title={title} description={description || undefined} icon={withIcon ? variant === 'destructive' ? icons.circleAlert : icons.circleCheck : undefined} action={action ? <Button variant={variant === 'destructive' ? 'ghost' : 'outline'} size="sm">{variant === 'destructive' ? 'Retry' : 'View'}</Button> : undefined} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 40
  }}>
      <Alert style={{
      width: 448
    }} icon={icons.circleAlert} title="Booking confirmed" description="Your stay at Casa is booked for Sep 18 – 21." action={<Button variant="outline" size="sm">View</Button>} />
      <Alert variant="destructive" style={{
      width: 448
    }} icon={icons.circleAlert} title="Booking confirmed" description="Your stay at Casa is booked for Sep 18 – 21." action={<Button variant="ghost" size="sm">Retry</Button>} />
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Figma "Alert": Variant Default and Destructive, as in the component set.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Alert style={{
    width: 448
  }} icon={icons.circleCheck} title="Booking confirmed" description="Your stay at Casa Azul is booked for Sep 18 – 21. We've sent the details to maya@example.com." />
}`,...m.parameters?.docs?.source},description:{story:`Figma demo "Alert".`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" style={{
    width: 448
  }} icon={icons.circleAlert} title="Payment failed" description="Your card ending in 4242 was declined. Update your payment method to keep Premium." action={<Button variant="outline" size="sm">Retry</Button>} />
}`,...h.parameters?.docs?.source},description:{story:`Figma demo "Destructive": with a ghost action.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Alert style={{
    width: 448
  }} icon={icons.info} title="Your free trial ends in 3 days" description="Upgrade to keep offline downloads and ad-free listening." action={<Button size="sm">Upgrade</Button>} />
}`,...g.parameters?.docs?.source},description:{story:`Figma demo "With action": a primary small button.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    width: 448
  }}>
      <Alert icon={icons.circleCheck} title="Your changes have been saved." />
      <Alert icon={icons.wifiOff} title="You're offline. We'll sync when you reconnect." />
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Figma demo "Title only": 48 px tall, stacked 12 px apart.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" style={{
    width: 448
  }} icon={icons.circleAlert} title="Unable to process your payment">
      <p>Please check the following and try again:</p>
      <ul>
        <li>Your card details are correct</li>
        <li>Your card has enough funds</li>
        <li>Your billing address matches</li>
      </ul>
    </Alert>
}`,...v.parameters?.docs?.source},description:{story:`Figma demo "With list": a list in the description.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Live() {
    const [saved, setSaved] = useState(false);
    return <div style={{
      display: 'grid',
      gap: 16,
      width: 448,
      justifyItems: 'start'
    }}>
        <Button onClick={() => setSaved(true)} disabled={saved}>
          Save changes
        </Button>
        {saved && <Alert style={{
        width: '100%'
      }} icon={icons.circleCheck} title="Your changes have been saved." action={<Button variant="ghost" size="sm" onClick={() => setSaved(false)}>Dismiss</Button>} />}
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:"A live region: the alert appears after an action and screen readers read it out (role `status`).",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
          <Alert style={{
        width: 400
      }} icon={icons.circleCheck} title={scheme === 'light' ? 'Light' : 'Dark'} description="Your stay at Casa is booked for Sep 18 – 21." action={<Button variant="outline" size="sm">View</Button>} />
          <Alert variant="destructive" style={{
        width: 400
      }} icon={icons.circleAlert} title="Payment failed" description="Your card ending in 4242 was declined." action={<Button variant="ghost" size="sm">Retry</Button>} />
        </div>)}
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...b.parameters?.docs?.description}}}})))()}init_Alert_stories();export{m as Basic,h as Destructive,y as Live,f as Playground,b as Themes,_ as TitleOnly,p as Variants,g as WithAction,v as WithList,x as __namedExportsOrder,l as default};