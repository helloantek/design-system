import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-z_rppDT4.js";import{n as r,t as i}from"./Button-Db5gk9j5.js";function a({variant:e=`default`,title:t,description:n,icon:r,action:i,className:a,children:c,...l}){let u=`role`in l?l.role:e===`destructive`?`alert`:`status`;return(0,o.jsxs)(`div`,{...l,role:u,className:s(`ds-alert`,e===`destructive`&&`ds-alert--destructive`,a),children:[r&&(0,o.jsx)(`span`,{className:`ds-alert__icon`,"aria-hidden":!0,children:r}),(0,o.jsxs)(`div`,{className:`ds-alert__body`,children:[(0,o.jsx)(`div`,{className:`ds-alert__title`,children:t}),(n!==void 0||c!==void 0)&&(0,o.jsxs)(`div`,{className:`ds-alert__description`,children:[n,c]})]}),i&&(0,o.jsx)(`div`,{className:`ds-alert__action`,children:i})]})}var o,s;function c(){return(c=e((()=>{o=t(),s=(...e)=>e.filter(Boolean).join(` `)||void 0,a.__docgenInfo={description:`Figma "Alert": a callout with an icon, a title, a description and an optional action.`,methods:[],displayName:`Alert`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'destructive'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'destructive'`}]},description:"Figma Variant: `destructive` draws the title, icon and description red.",defaultValue:{value:`'default'`,computed:!1}},title:{required:!0,tsType:{name:`ReactNode`},description:`Figma "Title" (14/20 medium).`},description:{required:!1,tsType:{name:`ReactNode`},description:'Figma "Description" (14/20 muted); text, or `<p>`s and a `<ul>`. `children` works too.'},icon:{required:!1,tsType:{name:`ReactNode`},description:'Figma "icon": a 16 px icon using `currentColor`; it is decorative, so the title must carry the meaning.'},action:{required:!1,tsType:{name:`ReactNode`},description:'Figma "action" slot: small buttons at the end, e.g. `<Button size="sm" variant="outline">`.'},role:{required:!1,tsType:{name:`AriaRole`},description:"Live region role, so an alert added while the page is open is read out: `status` (polite) by default and\n`alert` (assertive) for `destructive`. Pass another role to change it, or `role={undefined}` for none (an alert\nthat is part of the page from the start needs no live region)."}},composes:[`Omit`]}})))()}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{l=n(),r(),c(),u=t(),d={title:`Components/Alert`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Alert** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=219-2)): `variant` (`default` · `destructive`) with `title`, `description`, `icon` and an `action` slot. It is a live region — `status` by default, `alert` when destructive — so an alert added while the page is open is read out; `role={undefined}` turns that off."}}}},f=17.3,p=e=>(0,u.jsx)(`svg`,{viewBox:`0 0 24 24`,width:f,height:f,fill:`none`,stroke:`currentColor`,strokeWidth:30/f,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),m={circleCheck:p((0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,u.jsx)(`path`,{d:`m9 12 2 2 4-4`})]})),circleAlert:p((0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,u.jsx)(`path`,{d:`M12 8v4M12 16h.01`})]})),info:p((0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,u.jsx)(`path`,{d:`M12 16v-4M12 8h.01`})]})),wifiOff:p((0,u.jsx)(`path`,{d:`M12 20h.01M8.5 16.43a5 5 0 0 1 7 0M2 8.82a15 15 0 0 1 4.18-2.64M19 12.86a10 10 0 0 0-2-1.52M22 8.82a15 15 0 0 0-11.29-3.76M5 12.86a10 10 0 0 1 5.17-2.69M2 2l20 20`}))},h={args:{variant:`default`,title:`Booking confirmed`,description:`Your stay at Casa is booked for Sep 18 – 21.`,icon:!0,action:!0},argTypes:{variant:{name:`Variant`,control:`inline-radio`,options:[`default`,`destructive`]},title:{name:`Title`},description:{name:`Description`},icon:{name:`Icon`},action:{name:`Action`}},render:({variant:e,title:t,description:n,icon:r,action:o})=>(0,u.jsx)(a,{variant:e,style:{width:448},title:t,description:n||void 0,icon:r?e===`destructive`?m.circleAlert:m.circleCheck:void 0,action:o?(0,u.jsx)(i,{variant:e===`destructive`?`ghost`:`outline`,size:`sm`,children:e===`destructive`?`Retry`:`View`}):void 0})},g={render:()=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:40},children:[(0,u.jsx)(a,{style:{width:448},icon:m.circleAlert,title:`Booking confirmed`,description:`Your stay at Casa is booked for Sep 18 – 21.`,action:(0,u.jsx)(i,{variant:`outline`,size:`sm`,children:`View`})}),(0,u.jsx)(a,{variant:`destructive`,style:{width:448},icon:m.circleAlert,title:`Booking confirmed`,description:`Your stay at Casa is booked for Sep 18 – 21.`,action:(0,u.jsx)(i,{variant:`ghost`,size:`sm`,children:`Retry`})})]})},_={render:()=>(0,u.jsx)(a,{style:{width:448},icon:m.circleCheck,title:`Booking confirmed`,description:`Your stay at Casa Azul is booked for Sep 18 – 21. We've sent the details to maya@example.com.`})},v={render:()=>(0,u.jsx)(a,{variant:`destructive`,style:{width:448},icon:m.circleAlert,title:`Payment failed`,description:`Your card ending in 4242 was declined. Update your payment method to keep Premium.`,action:(0,u.jsx)(i,{variant:`outline`,size:`sm`,children:`Retry`})})},y={render:()=>(0,u.jsx)(a,{style:{width:448},icon:m.info,title:`Your free trial ends in 3 days`,description:`Upgrade to keep offline downloads and ad-free listening.`,action:(0,u.jsx)(i,{size:`sm`,children:`Upgrade`})})},b={render:()=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,width:448},children:[(0,u.jsx)(a,{icon:m.circleCheck,title:`Your changes have been saved.`}),(0,u.jsx)(a,{icon:m.wifiOff,title:`You're offline. We'll sync when you reconnect.`})]})},x={render:()=>(0,u.jsxs)(a,{variant:`destructive`,style:{width:448},icon:m.circleAlert,title:`Unable to process your payment`,children:[(0,u.jsx)(`p`,{children:`Please check the following and try again:`}),(0,u.jsxs)(`ul`,{children:[(0,u.jsx)(`li`,{children:`Your card details are correct`}),(0,u.jsx)(`li`,{children:`Your card has enough funds`}),(0,u.jsx)(`li`,{children:`Your billing address matches`})]})]})},S={render:function(){let[e,t]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:16,width:448,justifyItems:`start`},children:[(0,u.jsx)(i,{onClick:()=>t(!0),disabled:e,children:`Save changes`}),e&&(0,u.jsx)(a,{style:{width:`100%`},icon:m.circleCheck,title:`Your changes have been saved.`,action:(0,u.jsx)(i,{variant:`ghost`,size:`sm`,onClick:()=>t(!1),children:`Dismiss`})})]})}},C={parameters:{layout:`fullscreen`},render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,u.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,justifyItems:`start`},children:[(0,u.jsx)(a,{style:{width:400},icon:m.circleCheck,title:e===`light`?`Light`:`Dark`,description:`Your stay at Casa is booked for Sep 18 – 21.`,action:(0,u.jsx)(i,{variant:`outline`,size:`sm`,children:`View`})}),(0,u.jsx)(a,{variant:`destructive`,style:{width:400},icon:m.circleAlert,title:`Payment failed`,description:`Your card ending in 4242 was declined.`,action:(0,u.jsx)(i,{variant:`ghost`,size:`sm`,children:`Retry`})})]},e))})},w=[`Playground`,`Variants`,`Basic`,`Destructive`,`WithAction`,`TitleOnly`,`WithList`,`Live`,`Themes`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Figma "Alert": Variant Default and Destructive, as in the component set.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Alert style={{
    width: 448
  }} icon={icons.circleCheck} title="Booking confirmed" description="Your stay at Casa Azul is booked for Sep 18 – 21. We've sent the details to maya@example.com." />
}`,..._.parameters?.docs?.source},description:{story:`Figma demo "Alert".`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" style={{
    width: 448
  }} icon={icons.circleAlert} title="Payment failed" description="Your card ending in 4242 was declined. Update your payment method to keep Premium." action={<Button variant="outline" size="sm">Retry</Button>} />
}`,...v.parameters?.docs?.source},description:{story:`Figma demo "Destructive": with a ghost action.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Alert style={{
    width: 448
  }} icon={icons.info} title="Your free trial ends in 3 days" description="Upgrade to keep offline downloads and ad-free listening." action={<Button size="sm">Upgrade</Button>} />
}`,...y.parameters?.docs?.source},description:{story:`Figma demo "With action": a primary small button.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    width: 448
  }}>
      <Alert icon={icons.circleCheck} title="Your changes have been saved." />
      <Alert icon={icons.wifiOff} title="You're offline. We'll sync when you reconnect." />
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Figma demo "Title only": 48 px tall, stacked 12 px apart.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Figma demo "With list": a list in the description.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"A live region: the alert appears after an action and screen readers read it out (role `status`).",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...C.parameters?.docs?.description}}}})))()}T();export{_ as Basic,v as Destructive,S as Live,h as Playground,C as Themes,b as TitleOnly,g as Variants,y as WithAction,x as WithList,w as __namedExportsOrder,d as default};