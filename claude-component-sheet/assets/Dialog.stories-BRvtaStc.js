import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-DeQ_nHsj.js";import{n as r,t as i}from"./Button-DFiPKFCe.js";import{i as a,n as o,t as s}from"./Input-GdaJDmFC.js";import{r as c,t as l}from"./Switch-2fNKE0D_.js";import{n as u,o as d,t as f}from"./Field-BlxxqkyO.js";import{n as p,t as m}from"./Select-0Jy-yljW.js";import{n as h,t as g}from"./Separator-DYDUSmMV.js";import{n as _,r as v,t as y}from"./Dialog-DtS4CEQH.js";var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{b=n(),r(),d(),a(),p(),h(),c(),v(),x=t(),S={title:`Components/Dialog`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Dialog** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=182-2)): a modal window with the header (`title`, `description`, Figma "Close button" → `closeButton`), any content (children) and the `footer`. A native modal `<dialog>`: focus moves inside and stays there, the page behind is inert and does not scroll, Escape, the Close button or a click on the backdrop closes it, and focus goes back to the trigger. `DialogClose` makes a footer button close it. It is 448 px wide (`width` changes it) and never taller than the viewport: the content scrolls, the header and footer stay; `footerVariant="muted"` gives the "Sticky footer" demo\'s fill.'}}}},C=(e,t=16)=>(0,x.jsx)(`svg`,{viewBox:`0 0 24 24`,width:t,height:t,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),w={copy:C((0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`}),(0,x.jsx)(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})),check:C((0,x.jsx)(`path`,{d:`M20 6 9 17l-5-5`})),x:C((0,x.jsx)(`path`,{d:`M18 6 6 18M6 6l12 12`})),activity:C((0,x.jsx)(`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`}),32)},T={margin:0,color:`var(--ds-muted-foreground)`},E={margin:0,fontWeight:500},D={args:{title:`Dialog title`,description:`Dialog description — what this dialog does and what happens next.`,closeButton:!0,footer:!0,footerVariant:`default`,width:`448px`},argTypes:{closeButton:{name:`Close button`},footer:{name:`Footer`},footerVariant:{control:`inline-radio`,options:[`default`,`muted`]}},render:({title:e,description:t,closeButton:n,footer:r,footerVariant:a,width:o})=>(0,x.jsx)(y,{trigger:(0,x.jsx)(i,{variant:`outline`,children:`Open dialog`}),title:e||void 0,description:t||void 0,"aria-label":e?void 0:`Dialog`,closeButton:n,footerVariant:a,width:o,footer:r?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_,{children:(0,x.jsx)(i,{variant:`outline`,children:`Cancel`})}),(0,x.jsx)(_,{children:(0,x.jsx)(i,{children:`Continue`})})]}):void 0,children:(0,x.jsx)(`p`,{style:{margin:0},children:`Dialog content — fields, a list, a preview; the popup grows with it and scrolls past the viewport.`})})},O=[[`1. Your account`,`You're responsible for keeping your password safe and for everything that happens under your account.`],[`2. Bookings and payments`,`Prices include taxes unless stated otherwise. You'll always see the total before you confirm a booking.`],[`3. Cancellations`,`Free cancellation applies up to 48 hours before check-in. After that, the first night is non-refundable.`],[`4. Reviews`,`Reviews must describe a real stay. We may remove content that is abusive, fake or off-topic.`],[`5. Changes to these terms`,`We'll email you at least 30 days before any change takes effect.`]],k=()=>(0,x.jsx)(x.Fragment,{children:O.map(([e,t])=>(0,x.jsxs)(`div`,{style:{display:`grid`,gap:4},children:[(0,x.jsx)(`p`,{style:E,children:e}),(0,x.jsx)(`p`,{style:T,children:t})]},e))}),A=[`General`,`Notifications`,`Personalization`,`Data controls`,`Connected apps`,`Security`,`Subscription`],j=[`System`,`Light`,`Dark`].map(e=>({value:e.toLowerCase(),label:e})),M=[`Auto-detect`,`English`,`Polski`,`Español`].map(e=>({value:e.toLowerCase(),label:e})),N=[[`Essential`,`Keep you signed in and remember your cart.`,!0],[`Analytics`,`Help us improve by sharing anonymous usage data.`,!1],[`Personalized offers`,`Show deals based on the trips you browse.`,!1]],P={render:function(){let[e,t]=(0,b.useState)(``),[n,r]=(0,b.useState)(!1),[a,c]=(0,b.useState)(`General`),[d,p]=(0,b.useState)(),[h,v]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{style:{display:`grid`,gap:16,justifyItems:`start`},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,x.jsx)(y,{trigger:(0,x.jsx)(i,{variant:`outline`,children:`Edit profile`}),title:`Edit profile`,description:`Make changes to your profile here. Click save when you're done.`,footer:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_,{children:(0,x.jsx)(i,{variant:`outline`,children:`Cancel`})}),(0,x.jsx)(_,{children:(0,x.jsx)(i,{onClick:()=>t(`Profile saved`),children:`Save changes`})})]}),children:(0,x.jsxs)(u,{children:[(0,x.jsx)(f,{label:`Name`,children:(0,x.jsx)(s,{defaultValue:`Maya Chen`})}),(0,x.jsx)(f,{label:`Username`,children:(0,x.jsx)(s,{defaultValue:`@maya.travels`})})]})}),(0,x.jsx)(y,{trigger:(0,x.jsx)(i,{variant:`outline`,children:`Share link`}),title:`Share link`,description:`Anyone who has this link will be able to view this album.`,children:(0,x.jsx)(s,{"aria-label":`Album link`,readOnly:!0,defaultValue:`photos.app/a/porto-weekend`,action:(0,x.jsx)(o,{"aria-label":n?`Copied`:`Copy link`,onClick:()=>r(!0),children:n?w.check:w.copy})})}),(0,x.jsx)(y,{trigger:(0,x.jsx)(i,{variant:`outline`,children:`Settings`}),title:`Settings`,width:`600px`,bodyPadding:`flush`,children:(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`176px 1fr`,minHeight:360},children:[(0,x.jsx)(`nav`,{"aria-label":`Settings sections`,style:{display:`grid`,alignContent:`start`,gap:2,padding:`0 12px 24px 24px`},children:A.map(e=>(0,x.jsx)(i,{variant:e===a?`secondary`:`ghost`,size:`sm`,"aria-current":e===a?`page`:void 0,onClick:()=>c(e),style:{justifyContent:`flex-start`},children:e},e))}),(0,x.jsxs)(`div`,{style:{display:`grid`,alignContent:`start`,gap:16,padding:`0 24px 24px 12px`},children:[(0,x.jsx)(`p`,{style:E,children:a}),(0,x.jsx)(f,{label:`Theme`,orientation:`horizontal`,children:(0,x.jsx)(m,{options:j,defaultValue:`system`})}),(0,x.jsx)(g,{}),(0,x.jsx)(l,{label:`Show word count`,defaultChecked:!0}),(0,x.jsx)(l,{label:`Spell check`,defaultChecked:!0}),(0,x.jsx)(g,{}),(0,x.jsx)(f,{label:`Language`,orientation:`horizontal`,children:(0,x.jsx)(m,{options:M,defaultValue:`auto-detect`})})]})]})}),(0,x.jsxs)(y,{trigger:(0,x.jsx)(i,{variant:`outline`,children:`Welcome`}),"aria-label":`Welcome to Beacon`,closeButton:!1,bodyPadding:`flush`,footer:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_,{children:(0,x.jsx)(i,{variant:`outline`,children:`Learn more`})}),(0,x.jsx)(_,{children:(0,x.jsx)(i,{onClick:()=>t(`Onboarding started`),children:`Get started`})})]}),children:[(0,x.jsx)(`div`,{style:{display:`grid`,placeItems:`center`,height:160,background:`var(--ds-muted)`,color:`var(--ds-foreground)`},children:w.activity}),(0,x.jsxs)(`div`,{style:{display:`grid`,gap:12,padding:`24px 24px 0`},children:[(0,x.jsx)(`h2`,{style:{margin:0,fontSize:20,lineHeight:`28px`,fontWeight:600},children:`Welcome to Beacon`}),(0,x.jsx)(`p`,{style:T,children:`Get notified about your sites with calmer, smarter monitoring.`}),(0,x.jsxs)(`ul`,{style:{display:`grid`,gap:8,margin:0,paddingLeft:20},children:[(0,x.jsx)(`li`,{children:`Uptime checks every 30 seconds`}),(0,x.jsx)(`li`,{children:`Incident alerts and on-call schedules`}),(0,x.jsx)(`li`,{children:`A public status page`})]})]})]}),(0,x.jsx)(y,{trigger:(0,x.jsx)(i,{variant:`outline`,children:`Sticky footer`}),title:`Terms of service`,description:`Please read and accept to continue booking.`,footerVariant:`muted`,style:{maxHeight:420},footer:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_,{children:(0,x.jsx)(i,{variant:`outline`,onClick:()=>t(`Terms declined`),children:`Decline`})}),(0,x.jsx)(_,{children:(0,x.jsx)(i,{onClick:()=>t(`Terms accepted`),children:`Accept`})})]}),children:(0,x.jsx)(k,{})}),(0,x.jsx)(y,{trigger:(0,x.jsx)(i,{variant:`outline`,children:`Scrollable content`}),title:`Terms of service`,description:`Please read these before you continue booking.`,style:{maxHeight:340},children:(0,x.jsx)(k,{})}),(0,x.jsx)(y,{trigger:(0,x.jsx)(i,{variant:`outline`,children:`In a form`}),open:h,onOpenChange:e=>{v(e),e||p(void 0)},title:`Add a payment card`,description:`Your card details are encrypted and stored securely.`,footer:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_,{children:(0,x.jsx)(i,{variant:`outline`,children:`Cancel`})}),(0,x.jsx)(i,{type:`submit`,form:`add-card`,children:`Add card`})]}),children:(0,x.jsx)(`form`,{id:`add-card`,onSubmit:e=>{e.preventDefault();let n=String(new FormData(e.currentTarget).get(`card`)??``).replace(/\s/g,``);if(!/^\d{16}$/.test(n))return p(`Enter the 16 digits on the front of the card.`);p(void 0),v(!1),t(`Card ending ${n.slice(-4)} added`)},noValidate:!0,children:(0,x.jsxs)(u,{children:[(0,x.jsx)(f,{label:`Name on card`,children:(0,x.jsx)(s,{name:`name`,defaultValue:`Maya Chen`,autoComplete:`cc-name`})}),(0,x.jsx)(f,{label:`Card number`,error:d,children:(0,x.jsx)(s,{name:`card`,placeholder:`4242 4242 4242 4242`,inputMode:`numeric`,autoComplete:`cc-number`})}),(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:12},children:[(0,x.jsx)(f,{label:`Expiry date`,children:(0,x.jsx)(s,{name:`expiry`,placeholder:`MM / YY`,autoComplete:`cc-exp`})}),(0,x.jsx)(f,{label:`CVC`,children:(0,x.jsx)(s,{name:`cvc`,placeholder:`123`,inputMode:`numeric`,autoComplete:`cc-csc`})})]})]})})}),(0,x.jsx)(y,{trigger:(0,x.jsx)(i,{variant:`outline`,children:`No close button`}),title:`We value your privacy`,description:`Choose which cookies we can use. You can change this anytime in Settings.`,closeButton:!1,footer:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_,{children:(0,x.jsx)(i,{variant:`outline`,onClick:()=>t(`Cookie choices saved`),children:`Save choices`})}),(0,x.jsx)(_,{children:(0,x.jsx)(i,{onClick:()=>t(`All cookies accepted`),children:`Accept all`})})]}),children:N.map(([e,t,n])=>(0,x.jsx)(l,{label:e,caption:t,defaultChecked:n,disabled:n},e))})]}),(0,x.jsx)(`p`,{role:`status`,style:{margin:0,minHeight:20,fontFamily:`var(--ds-font-sans)`,fontSize:14,color:`var(--ds-muted-foreground)`},children:e})]})}},F=({closeButton:e=!0,muted:t=!1})=>(0,x.jsxs)(`div`,{className:`ds-dialog`,role:`dialog`,"aria-label":`Dialog title`,style:{display:`flex`},children:[(0,x.jsxs)(`div`,{className:`ds-dialog__header`,children:[(0,x.jsxs)(`div`,{className:`ds-dialog__heading`,children:[(0,x.jsx)(`h2`,{className:`ds-dialog__title`,children:`Dialog title`}),(0,x.jsx)(`p`,{className:`ds-dialog__description`,children:`Dialog description — what this dialog does and what happens next.`})]}),e&&(0,x.jsx)(i,{variant:`ghost`,size:`sm`,icon:w.x,"aria-label":`Close`,className:`ds-dialog__close`})]}),(0,x.jsx)(`div`,{className:`ds-dialog__body`,children:(0,x.jsx)(`p`,{style:{margin:0},children:`Dialog content — fields, a list, a preview; the popup grows with it and scrolls past the viewport.`})}),(0,x.jsxs)(`div`,{className:t?`ds-dialog__footer ds-dialog__footer--muted`:`ds-dialog__footer`,children:[(0,x.jsx)(i,{variant:`outline`,children:`Cancel`}),(0,x.jsx)(i,{children:`Continue`})]})]}),I={render:()=>(0,x.jsxs)(`div`,{style:{display:`grid`,gap:24,justifyItems:`start`},children:[(0,x.jsx)(F,{}),(0,x.jsx)(F,{closeButton:!1}),(0,x.jsx)(F,{muted:!0})]})},L={parameters:{layout:`fullscreen`},render:()=>(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,x.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24},children:(0,x.jsx)(F,{muted:!0})},e))})},R=[`Playground`,`Demos`,`Anatomy`,`Themes`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Dialog title',
    description: 'Dialog description — what this dialog does and what happens next.',
    closeButton: true,
    footer: true,
    footerVariant: 'default',
    width: '448px'
  },
  argTypes: {
    closeButton: {
      name: 'Close button'
    },
    footer: {
      name: 'Footer'
    },
    footerVariant: {
      control: 'inline-radio',
      options: ['default', 'muted']
    }
  },
  render: ({
    title,
    description,
    closeButton,
    footer,
    footerVariant,
    width
  }) => <Dialog trigger={<Button variant="outline">Open dialog</Button>} title={title || undefined} description={description || undefined} aria-label={title ? undefined : 'Dialog'} closeButton={closeButton} footerVariant={footerVariant} width={width} footer={footer ? <>
            <DialogClose>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose>
              <Button>Continue</Button>
            </DialogClose>
          </> : undefined}>
      <p style={{
      margin: 0
    }}>Dialog content — fields, a list, a preview; the popup grows with it and scrolls past the viewport.</p>
    </Dialog>
}`,...D.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function Demos() {
    const [result, setResult] = useState('');
    const [copied, setCopied] = useState(false);
    const [section, setSection] = useState('General');
    const [cardError, setCardError] = useState<string>();
    const [cardOpen, setCardOpen] = useState(false);
    const addCard = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const number = String(new FormData(event.currentTarget).get('card') ?? '').replace(/\\s/g, '');
      if (!/^\\d{16}$/.test(number)) return setCardError('Enter the 16 digits on the front of the card.');
      setCardError(undefined);
      setCardOpen(false);
      setResult(\`Card ending \${number.slice(-4)} added\`);
    };
    return <div style={{
      display: 'grid',
      gap: 16,
      justifyItems: 'start'
    }}>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }}>
          <Dialog trigger={<Button variant="outline">Edit profile</Button>} title="Edit profile" description="Make changes to your profile here. Click save when you're done." footer={<>
                <DialogClose>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <DialogClose>
                  <Button onClick={() => setResult('Profile saved')}>Save changes</Button>
                </DialogClose>
              </>}>
            <FieldGroup>
              <Field label="Name">
                <Input defaultValue="Maya Chen" />
              </Field>
              <Field label="Username">
                <Input defaultValue="@maya.travels" />
              </Field>
            </FieldGroup>
          </Dialog>

          <Dialog trigger={<Button variant="outline">Share link</Button>} title="Share link" description="Anyone who has this link will be able to view this album.">
            <Input aria-label="Album link" readOnly defaultValue="photos.app/a/porto-weekend" action={<InputAction aria-label={copied ? 'Copied' : 'Copy link'} onClick={() => setCopied(true)}>
                  {copied ? icons.check : icons.copy}
                </InputAction>} />
          </Dialog>

          <Dialog trigger={<Button variant="outline">Settings</Button>} title="Settings" width="600px" bodyPadding="flush">
            <div style={{
            display: 'grid',
            gridTemplateColumns: '176px 1fr',
            minHeight: 360
          }}>
              <nav aria-label="Settings sections" style={{
              display: 'grid',
              alignContent: 'start',
              gap: 2,
              padding: '0 12px 24px 24px'
            }}>
                {settingsNav.map(item => <Button key={item} variant={item === section ? 'secondary' : 'ghost'} size="sm" aria-current={item === section ? 'page' : undefined} onClick={() => setSection(item)} style={{
                justifyContent: 'flex-start'
              }}>
                    {item}
                  </Button>)}
              </nav>
              <div style={{
              display: 'grid',
              alignContent: 'start',
              gap: 16,
              padding: '0 24px 24px 12px'
            }}>
                <p style={strong}>{section}</p>
                <Field label="Theme" orientation="horizontal">
                  <Select options={themes} defaultValue="system" />
                </Field>
                <Separator />
                <Switch label="Show word count" defaultChecked />
                <Switch label="Spell check" defaultChecked />
                <Separator />
                <Field label="Language" orientation="horizontal">
                  <Select options={languages} defaultValue="auto-detect" />
                </Field>
              </div>
            </div>
          </Dialog>

          <Dialog trigger={<Button variant="outline">Welcome</Button>} aria-label="Welcome to Beacon" closeButton={false} bodyPadding="flush" footer={<>
                <DialogClose>
                  <Button variant="outline">Learn more</Button>
                </DialogClose>
                <DialogClose>
                  <Button onClick={() => setResult('Onboarding started')}>Get started</Button>
                </DialogClose>
              </>}>
            <div style={{
            display: 'grid',
            placeItems: 'center',
            height: 160,
            background: 'var(--ds-muted)',
            color: 'var(--ds-foreground)'
          }}>{icons.activity}</div>
            <div style={{
            display: 'grid',
            gap: 12,
            padding: '24px 24px 0'
          }}>
              <h2 style={{
              margin: 0,
              fontSize: 20,
              lineHeight: '28px',
              fontWeight: 600
            }}>Welcome to Beacon</h2>
              <p style={muted}>Get notified about your sites with calmer, smarter monitoring.</p>
              <ul style={{
              display: 'grid',
              gap: 8,
              margin: 0,
              paddingLeft: 20
            }}>
                <li>Uptime checks every 30 seconds</li>
                <li>Incident alerts and on-call schedules</li>
                <li>A public status page</li>
              </ul>
            </div>
          </Dialog>

          <Dialog trigger={<Button variant="outline">Sticky footer</Button>} title="Terms of service" description="Please read and accept to continue booking." footerVariant="muted" style={{
          maxHeight: 420
        }} footer={<>
                <DialogClose>
                  <Button variant="outline" onClick={() => setResult('Terms declined')}>
                    Decline
                  </Button>
                </DialogClose>
                <DialogClose>
                  <Button onClick={() => setResult('Terms accepted')}>Accept</Button>
                </DialogClose>
              </>}>
            <Terms />
          </Dialog>

          <Dialog trigger={<Button variant="outline">Scrollable content</Button>} title="Terms of service" description="Please read these before you continue booking." style={{
          maxHeight: 340
        }}>
            <Terms />
          </Dialog>

          <Dialog trigger={<Button variant="outline">In a form</Button>} open={cardOpen} onOpenChange={open => {
          setCardOpen(open);
          if (!open) setCardError(undefined);
        }} title="Add a payment card" description="Your card details are encrypted and stored securely." footer={<>
                <DialogClose>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" form="add-card">
                  Add card
                </Button>
              </>}>
            <form id="add-card" onSubmit={addCard} noValidate>
              <FieldGroup>
                <Field label="Name on card">
                  <Input name="name" defaultValue="Maya Chen" autoComplete="cc-name" />
                </Field>
                <Field label="Card number" error={cardError}>
                  <Input name="card" placeholder="4242 4242 4242 4242" inputMode="numeric" autoComplete="cc-number" />
                </Field>
                <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12
              }}>
                  <Field label="Expiry date">
                    <Input name="expiry" placeholder="MM / YY" autoComplete="cc-exp" />
                  </Field>
                  <Field label="CVC">
                    <Input name="cvc" placeholder="123" inputMode="numeric" autoComplete="cc-csc" />
                  </Field>
                </div>
              </FieldGroup>
            </form>
          </Dialog>

          <Dialog trigger={<Button variant="outline">No close button</Button>} title="We value your privacy" description="Choose which cookies we can use. You can change this anytime in Settings." closeButton={false} footer={<>
                <DialogClose>
                  <Button variant="outline" onClick={() => setResult('Cookie choices saved')}>
                    Save choices
                  </Button>
                </DialogClose>
                <DialogClose>
                  <Button onClick={() => setResult('All cookies accepted')}>Accept all</Button>
                </DialogClose>
              </>}>
            {cookies.map(([label, caption, locked]) => <Switch key={label} label={label} caption={caption} defaultChecked={locked} disabled={locked} />)}
          </Dialog>
        </div>
        <p role="status" style={{
        margin: 0,
        minHeight: 20,
        fontFamily: 'var(--ds-font-sans)',
        fontSize: 14,
        color: 'var(--ds-muted-foreground)'
      }}>
          {result}
        </p>
      </div>;
  }
}`,...P.parameters?.docs?.source},description:{story:`The Figma demos: each button opens one. What a dialog did shows below.`,...P.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24,
    justifyItems: 'start'
  }}>
      <Still />
      <Still closeButton={false} />
      <Still muted />
    </div>
}`,...I.parameters?.docs?.source},description:{story:`Figma "Close button" on and off, and the muted footer, drawn in the page.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24
    }}>
          <Still muted />
        </div>)}
    </div>
}`,...L.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...L.parameters?.docs?.description}}}})))()}z();export{I as Anatomy,P as Demos,D as Playground,L as Themes,R as __namedExportsOrder,S as default};