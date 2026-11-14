import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-CEPbjgPm.js";import{n as r,t as i}from"./Button-G1r8qACU.js";import{o as a,t as o}from"./Field-Nh9CgWIt.js";import{i as s,t as c}from"./Input-CxFCmDs4.js";import{r as l,t as u}from"./Switch-B0estdbV.js";import{a as d,i as f,n as p,r as m,t as h}from"./Accordion-nnT_mPaG.js";function Items({items:e=b}){return(0,_.jsx)(_.Fragment,{children:e.map(e=>(0,_.jsxs)(m,{value:e.value,disabled:e.disabled,children:[(0,_.jsx)(f,{children:e.title}),(0,_.jsx)(p,{children:(0,_.jsx)(`p`,{children:e.body})})]},e.value))})}var g,_,v,y,icon,b,x,S,C,w,T,E,D,O,k,A;function init_Accordion_stories(){return(init_Accordion_stories=e((()=>{g=n(),r(),a(),s(),l(),d(),_=t(),v={title:`Components/Accordion`,parameters:{layout:`padded`,docs:{description:{component:'Implements the Sort UI 2.0 **Accordion** and **Accordion Item** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=200-27)): Accordion Item State → `value` / `defaultValue` / `onValueChange` on the Accordion (Open) and `disabled` on the item, Divider → `divider`, the **trigger** slot → `AccordionTrigger` (with an optional `icon`), the **content** slot → `AccordionContent`. `type` is `single` (one open item; `collapsible={false}` keeps one open) or `multiple`. `variant`: `card` (the Figma component), `flush` ("Accordion" demo) or `separated` ("Separated items" demo). Each trigger is a button with `aria-expanded` inside a heading (`headingLevel`); each panel is a region labelled by it. Up / Down, Home and End move between the triggers.'}}}},y={width:448,maxWidth:`100%`},icon=e=>(0,_.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),b=[{value:`accessible`,title:`Is it accessible?`,body:`Yes. It adheres to the WAI-ARIA design pattern: the trigger is a button, the panel is a region, and the keyboard moves between items.`},{value:`styled`,title:`Is it styled?`,body:`Yes. It comes with styles that match the other components, built only on design tokens.`},{value:`library`,title:`Why did a song disappear from my library?`,body:`The artist or label removed it from the catalogue. Songs you downloaded stay until your next sync.`}],x={args:{variant:`card`,type:`single`,collapsible:!0},argTypes:{variant:{control:`inline-radio`,options:[`card`,`flush`,`separated`]},type:{control:`inline-radio`,options:[`single`,`multiple`]}},render:({variant:e,type:t,collapsible:n})=>t===`multiple`?(0,_.jsx)(h,{type:`multiple`,variant:e,defaultValue:[`accessible`],style:y,children:(0,_.jsx)(Items,{})},`multiple`):(0,_.jsx)(h,{variant:e,collapsible:n,defaultValue:`accessible`,style:y,children:(0,_.jsx)(Items,{})},`single`)},S={render:()=>(0,_.jsxs)(h,{type:`multiple`,defaultValue:[`open`],variant:`flush`,style:y,children:[(0,_.jsxs)(m,{value:`closed`,children:[(0,_.jsx)(f,{children:`Closed`}),(0,_.jsx)(p,{children:(0,_.jsx)(`p`,{children:b[0].body})})]}),(0,_.jsxs)(m,{value:`open`,children:[(0,_.jsx)(f,{children:`Open`}),(0,_.jsx)(p,{children:(0,_.jsx)(`p`,{children:b[0].body})})]}),(0,_.jsxs)(m,{value:`disabled`,disabled:!0,children:[(0,_.jsx)(f,{children:`Disabled`}),(0,_.jsx)(p,{children:(0,_.jsx)(`p`,{children:b[0].body})})]})]})},C={render:()=>(0,_.jsx)(h,{variant:`flush`,defaultValue:`free`,style:y,children:(0,_.jsx)(Items,{items:[{value:`free`,title:`What’s included in the free plan?`,body:`Unlimited notes on two devices, 5 GB of cloud storage and full-text search. Upgrade to Pro whenever you need more devices or version history.`},{value:`cancel`,title:`Can I cancel anytime?`,body:`Yes. Your plan stays active until the end of the billing period, then your account moves to the free plan.`},{value:`export`,title:`How do I export my notes?`,body:`Open Settings › Data and choose Export. You get a ZIP of Markdown files with their attachments.`}]})})},w={render:()=>(0,_.jsx)(h,{defaultValue:`arrive`,style:y,children:(0,_.jsx)(Items,{items:[{value:`arrive`,title:`When will my order arrive?`,body:`Most orders ship within 24 hours and arrive in 2–4 business days. You’ll get a tracking link by email as soon as the parcel leaves our warehouse.`},{value:`address`,title:`Can I change my delivery address?`,body:`You can change it until the order ships, from the order page or by replying to the confirmation email.`},{value:`returns`,title:`How do returns work?`,body:`Start a return within 30 days from your order page. Print the label, drop the parcel off, and we refund you once it arrives.`}]})})},T={render:()=>(0,_.jsx)(h,{defaultValue:`password`,style:y,children:[{value:`password`,title:`How do I reset my password?`,body:`Choose Forgot password on the sign-in screen and we’ll email you a reset link. It works once and expires after 30 minutes.`,icon:icon((0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`path`,{d:`M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`}),(0,_.jsx)(`circle`,{cx:`16.5`,cy:`7.5`,r:`.5`,fill:`currentColor`})]}))},{value:`two-step`,title:`Should I turn on two-step sign-in?`,body:`Yes. A code from your phone keeps your account safe even if someone learns your password.`,icon:icon((0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`}),(0,_.jsx)(`path`,{d:`m9 12 2 2 4-4`})]}))},{value:`devices`,title:`Can I sign out of other devices?`,body:`Open Settings › Security and choose Sign out everywhere. This device stays signed in.`,icon:icon((0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`path`,{d:`M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8`}),(0,_.jsx)(`path`,{d:`M10 19v-3.96 3.15M7 19h5`}),(0,_.jsx)(`rect`,{width:`6`,height:`10`,x:`16`,y:`12`,rx:`2`})]}))}].map(e=>(0,_.jsxs)(m,{value:e.value,children:[(0,_.jsx)(f,{icon:e.icon,children:e.title}),(0,_.jsx)(p,{children:(0,_.jsx)(`p`,{children:e.body})})]},e.value))})},E={render:()=>(0,_.jsx)(h,{variant:`separated`,defaultValue:`offline`,style:y,children:(0,_.jsx)(Items,{items:[{value:`offline`,title:`How do offline downloads work?`,body:`Tap the download arrow on any playlist or album. Tracks save over Wi-Fi by default and stay available for 30 days without a connection.`},{value:`share`,title:`Can I share a playlist with friends?`,body:`Yes. Open the playlist, choose Share, and send the link. Friends can listen without an account.`},b[2]]})})},D={render:function Render(){let[e,t]=(0,g.useState)(`trial`);return(0,_.jsxs)(h,{value:e,onValueChange:t,style:y,children:[(0,_.jsxs)(m,{value:`trial`,children:[(0,_.jsx)(f,{children:`Your trial ends in 3 days`}),(0,_.jsxs)(p,{children:[(0,_.jsx)(`p`,{children:`Choose a plan before May 30 to keep sync and version history. Nothing is deleted if you decide to stay on the free plan.`}),(0,_.jsx)(i,{variant:`outline`,size:`sm`,style:{alignSelf:`flex-start`},onClick:()=>t(`team`),children:`Next: Invite your team`})]})]}),(0,_.jsxs)(m,{value:`team`,children:[(0,_.jsx)(f,{children:`Invite your team`}),(0,_.jsxs)(p,{children:[(0,_.jsx)(`p`,{children:`Send invites by email or share a link. People join as Members; you can change roles later.`}),(0,_.jsx)(i,{variant:`outline`,size:`sm`,style:{alignSelf:`flex-start`},onClick:()=>t(`calendar`),children:`Next: Connect your calendar`})]})]}),(0,_.jsxs)(m,{value:`calendar`,children:[(0,_.jsx)(f,{children:`Connect your calendar`}),(0,_.jsx)(p,{children:(0,_.jsx)(`p`,{children:`Link Google or Outlook to see meetings next to your notes.`})})]})]})}},O={render:()=>(0,_.jsxs)(h,{type:`multiple`,defaultValue:[`profile`],style:y,children:[(0,_.jsxs)(m,{value:`profile`,children:[(0,_.jsx)(f,{children:`Profile`}),(0,_.jsxs)(p,{children:[(0,_.jsx)(o,{label:`Display name`,description:`Shown on your shared notes and comments.`,children:(0,_.jsx)(c,{defaultValue:`Mira Okafor`})}),(0,_.jsx)(u,{label:`Show my email to collaborators`})]})]}),(0,_.jsxs)(m,{value:`notifications`,children:[(0,_.jsx)(f,{children:`Notifications`}),(0,_.jsxs)(p,{children:[(0,_.jsx)(u,{label:`Email me when someone comments`,defaultChecked:!0}),(0,_.jsx)(u,{label:`Weekly summary`})]})]}),(0,_.jsxs)(m,{value:`privacy`,children:[(0,_.jsx)(f,{children:`Privacy`}),(0,_.jsx)(p,{children:(0,_.jsx)(u,{label:`Let search engines find my public notes`})})]})]})},k={parameters:{layout:`fullscreen`},render:()=>(0,_.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,_.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:24},children:[`card`,`separated`].map(t=>(0,_.jsx)(h,{variant:t,defaultValue:`accessible`,children:(0,_.jsx)(Items,{items:b.map(n=>({...n,title:`${n.title} (${t}, ${e})`}))})},t))},e))})},A=[`Playground`,`States`,`Flush`,`Card`,`WithIcons`,`SeparatedItems`,`Controlled`,`WithFormFields`,`Themes`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    type: 'single',
    collapsible: true
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['card', 'flush', 'separated']
    },
    type: {
      control: 'inline-radio',
      options: ['single', 'multiple']
    }
  },
  render: ({
    variant,
    type,
    collapsible
  }) => type === 'multiple' ? <Accordion key="multiple" type="multiple" variant={variant} defaultValue={['accessible']} style={box}>
        <Items />
      </Accordion> : <Accordion key="single" variant={variant} collapsible={collapsible} defaultValue="accessible" style={box}>
        <Items />
      </Accordion>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" defaultValue={['open']} variant="flush" style={box}>
      <AccordionItem value="closed">
        <AccordionTrigger>Closed</AccordionTrigger>
        <AccordionContent>
          <p>{sample[0].body}</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="open">
        <AccordionTrigger>Open</AccordionTrigger>
        <AccordionContent>
          <p>{sample[0].body}</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="disabled" disabled>
        <AccordionTrigger>Disabled</AccordionTrigger>
        <AccordionContent>
          <p>{sample[0].body}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...S.parameters?.docs?.source},description:{story:`Figma Accordion Item State=Closed, Open and Disabled.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion variant="flush" defaultValue="free" style={box}>
      <Items items={[{
      value: 'free',
      title: 'What’s included in the free plan?',
      body: 'Unlimited notes on two devices, 5 GB of cloud storage and full-text search. Upgrade to Pro whenever you need more devices or version history.'
    }, {
      value: 'cancel',
      title: 'Can I cancel anytime?',
      body: 'Yes. Your plan stays active until the end of the billing period, then your account moves to the free plan.'
    }, {
      value: 'export',
      title: 'How do I export my notes?',
      body: 'Open Settings › Data and choose Export. You get a ZIP of Markdown files with their attachments.'
    }]} />
    </Accordion>
}`,...C.parameters?.docs?.source},description:{story:'Figma demo "Accordion": `variant="flush"`, no surface.',...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion defaultValue="arrive" style={box}>
      <Items items={[{
      value: 'arrive',
      title: 'When will my order arrive?',
      body: 'Most orders ship within 24 hours and arrive in 2–4 business days. You’ll get a tracking link by email as soon as the parcel leaves our warehouse.'
    }, {
      value: 'address',
      title: 'Can I change my delivery address?',
      body: 'You can change it until the order ships, from the order page or by replying to the confirmation email.'
    }, {
      value: 'returns',
      title: 'How do returns work?',
      body: 'Start a return within 30 days from your order page. Print the label, drop the parcel off, and we refund you once it arrives.'
    }]} />
    </Accordion>
}`,...w.parameters?.docs?.source},description:{story:`Figma demo "Card": the Accordion component itself.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion defaultValue="password" style={box}>
      {[{
      value: 'password',
      title: 'How do I reset my password?',
      body: 'Choose Forgot password on the sign-in screen and we’ll email you a reset link. It works once and expires after 30 minutes.',
      icon: icon(<><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" /><circle cx="16.5" cy="7.5" r=".5" fill="currentColor" /></>)
    }, {
      value: 'two-step',
      title: 'Should I turn on two-step sign-in?',
      body: 'Yes. A code from your phone keeps your account safe even if someone learns your password.',
      icon: icon(<><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>)
    }, {
      value: 'devices',
      title: 'Can I sign out of other devices?',
      body: 'Open Settings › Security and choose Sign out everywhere. This device stays signed in.',
      icon: icon(<><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" /><path d="M10 19v-3.96 3.15M7 19h5" /><rect width="6" height="10" x="16" y="12" rx="2" /></>)
    }].map(item => <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger icon={item.icon}>{item.title}</AccordionTrigger>
          <AccordionContent>
            <p>{item.body}</p>
          </AccordionContent>
        </AccordionItem>)}
    </Accordion>
}`,...T.parameters?.docs?.source},description:{story:`Figma demo "With icons": an icon before each title.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion variant="separated" defaultValue="offline" style={box}>
      <Items items={[{
      value: 'offline',
      title: 'How do offline downloads work?',
      body: 'Tap the download arrow on any playlist or album. Tracks save over Wi-Fi by default and stay available for 30 days without a connection.'
    }, {
      value: 'share',
      title: 'Can I share a playlist with friends?',
      body: 'Yes. Open the playlist, choose Share, and send the link. Friends can listen without an account.'
    }, sample[2]]} />
    </Accordion>
}`,...E.parameters?.docs?.source},description:{story:'Figma demo "Separated items": `variant="separated"`, muted boxes 8 px apart.',...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState('trial');
    return <Accordion value={open} onValueChange={setOpen} style={box}>
        <AccordionItem value="trial">
          <AccordionTrigger>Your trial ends in 3 days</AccordionTrigger>
          <AccordionContent>
            <p>Choose a plan before May 30 to keep sync and version history. Nothing is deleted if you decide to stay on the free plan.</p>
            <Button variant="outline" size="sm" style={{
            alignSelf: 'flex-start'
          }} onClick={() => setOpen('team')}>
              Next: Invite your team
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="team">
          <AccordionTrigger>Invite your team</AccordionTrigger>
          <AccordionContent>
            <p>Send invites by email or share a link. People join as Members; you can change roles later.</p>
            <Button variant="outline" size="sm" style={{
            alignSelf: 'flex-start'
          }} onClick={() => setOpen('calendar')}>
              Next: Connect your calendar
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="calendar">
          <AccordionTrigger>Connect your calendar</AccordionTrigger>
          <AccordionContent>
            <p>Link Google or Outlook to see meetings next to your notes.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>;
  }
}`,...D.parameters?.docs?.source},description:{story:'Figma demo "Controlled": `value` and `onValueChange`; a button in a panel opens the next step.',...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" defaultValue={['profile']} style={box}>
      <AccordionItem value="profile">
        <AccordionTrigger>Profile</AccordionTrigger>
        <AccordionContent>
          <Field label="Display name" description="Shown on your shared notes and comments.">
            <Input defaultValue="Mira Okafor" />
          </Field>
          <Switch label="Show my email to collaborators" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="notifications">
        <AccordionTrigger>Notifications</AccordionTrigger>
        <AccordionContent>
          <Switch label="Email me when someone comments" defaultChecked />
          <Switch label="Weekly summary" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="privacy">
        <AccordionTrigger>Privacy</AccordionTrigger>
        <AccordionContent>
          <Switch label="Let search engines find my public notes" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...O.parameters?.docs?.source},description:{story:`Figma demo "With form fields": settings groups, several open at once.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
          {(['card', 'separated'] as const).map(variant => <Accordion key={variant} variant={variant} defaultValue="accessible">
              <Items items={sample.map(item => ({
          ...item,
          title: \`\${item.title} (\${variant}, \${scheme})\`
        }))} />
            </Accordion>)}
        </div>)}
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...k.parameters?.docs?.description}}}})))()}init_Accordion_stories();export{w as Card,D as Controlled,C as Flush,x as Playground,E as SeparatedItems,S as States,k as Themes,O as WithFormFields,T as WithIcons,A as __namedExportsOrder,v as default};