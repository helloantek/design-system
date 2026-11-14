import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BJAPwkbv.js";import{n,t as r}from"./Button-nfZlII-o.js";import{i,n as a,r as o,t as s}from"./Sonner-CILzFBm1.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),o(),c=t(),l={title:`Components/Sonner`,parameters:{layout:`fullscreen`,docs:{description:{component:"Implements the Sort UI 2.0 **Sonner** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=325-2)): toasts, short notifications that close on their own. Mount `<Toaster />` once and call `toast('Title', { description, action, cancel })`, `toast.success` · `info` · `warning` · `error` · `loading`, `toast.promise` or `toast.dismiss`. Toasts are read out by screen readers (a polite live region), wait while the pointer is over them or focus is inside, and Alt+T moves focus to them. `Toast` draws one toast on its own (Figma Type, Title, Description, actions, Close)."}}},decorators:[e=>(0,c.jsx)(`div`,{style:{minHeight:`100vh`,padding:24,boxSizing:`border-box`,background:`var(--ds-background)`},children:(0,c.jsx)(e,{})})]},u={args:{type:`default`,title:`Table booked for 4`,description:`Friday, Oct 3 at 7:30 PM · Café Lumière`,action:!0,cancel:!1,closeButton:!1,stacked:!1,position:`bottom-right`,duration:4e3},argTypes:{type:{name:`Type`,control:`select`,options:[`default`,`success`,`info`,`warning`,`error`,`loading`]},title:{name:`Title`},description:{name:`Description`},action:{name:`Action`},cancel:{name:`Cancel`},closeButton:{name:`Close`},stacked:{name:`Stacked (not in Figma)`},position:{control:`select`,options:[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`]},duration:{control:{type:`number`,step:1e3}}},render:({type:e,title:t,description:n,action:o,cancel:s,closeButton:l,stacked:u,position:d,duration:f})=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{variant:`outline`,onClick:()=>i(t,{type:e,description:n||void 0,action:o?{label:`Undo`}:void 0,cancel:s?{label:`Decline`}:void 0}),children:`Show toast`}),(0,c.jsx)(a,{position:d,duration:f,closeButton:l,stacked:u})]})},d={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:24,justifyItems:`start`},children:[(0,c.jsx)(s,{title:`Draft saved to core/semantic 2.4`,description:`Consumers on 2.x pick it up on their next sync.`}),[`success`,`info`,`warning`,`error`,`loading`].map(e=>(0,c.jsx)(s,{type:e,title:`Draft saved to core/semantic 2.4`,description:`Consumers on 2.x pick it up on their next sync.`},e))]})},f={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:48,justifyItems:`start`},children:[(0,c.jsx)(s,{title:`Table booked for 4`,description:`Friday, Oct 3 at 7:30 PM · Café Lumière`,actions:(0,c.jsx)(r,{size:`xs`,children:`Undo`})}),(0,c.jsxs)(`div`,{style:{display:`grid`,gap:14},children:[(0,c.jsx)(s,{type:`success`,title:`Your order is on its way`}),(0,c.jsx)(s,{type:`info`,title:`Your driver is 3 minutes away`}),(0,c.jsx)(s,{type:`warning`,title:`Your storage is almost full`}),(0,c.jsx)(s,{type:`error`,title:`We couldn't send your message`})]}),(0,c.jsx)(s,{title:`Maya invited you to a trip`,description:`Weekend in Porto`,actions:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{size:`xs`,variant:`secondary`,children:`Decline`}),(0,c.jsx)(r,{size:`xs`,children:`Join`})]})}),(0,c.jsxs)(`div`,{style:{display:`grid`,gap:14},children:[(0,c.jsx)(s,{type:`loading`,title:`Uploading 12 photos…`,description:`This will only take a moment.`}),(0,c.jsx)(s,{type:`success`,title:`12 photos uploaded`,description:`Added to your album Porto weekend.`})]}),(0,c.jsx)(s,{type:`info`,title:`Your driver is 3 minutes away`,onClose:()=>{}})]})},p=e=>new Promise(t=>setTimeout(t,e)),m={render:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,c.jsx)(r,{variant:`outline`,onClick:()=>i(`Table booked for 4`,{description:`Friday, Oct 3 at 7:30 PM · Café Lumière`,action:{label:`Undo`,onClick:()=>i(`Booking cancelled`)}}),children:`Default`}),(0,c.jsx)(r,{variant:`outline`,onClick:()=>i.success(`Your order is on its way`),children:`Success`}),(0,c.jsx)(r,{variant:`outline`,onClick:()=>i.info(`Your driver is 3 minutes away`),children:`Info`}),(0,c.jsx)(r,{variant:`outline`,onClick:()=>i.warning(`Your storage is almost full`),children:`Warning`}),(0,c.jsx)(r,{variant:`outline`,onClick:()=>i.error(`We couldn't send your message`,{action:{label:`Retry`}}),children:`Error`}),(0,c.jsx)(r,{variant:`outline`,onClick:()=>i(`Maya invited you to a trip`,{description:`Weekend in Porto`,cancel:{label:`Decline`},action:{label:`Join`,onClick:()=>i.success(`You've joined Weekend in Porto`)}}),children:`Action and cancel`}),(0,c.jsx)(r,{variant:`outline`,onClick:()=>i.promise(p(2e3),{loading:`Uploading 12 photos…`,success:`12 photos uploaded`,error:`Upload failed`}),children:`Promise`}),(0,c.jsx)(r,{variant:`ghost`,onClick:()=>i.dismiss(),children:`Dismiss all`})]}),(0,c.jsx)(a,{})]})},h={render:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,c.jsx)(r,{variant:`outline`,onClick:()=>i.success(`Your order is on its way`,{description:`Arriving Friday between 9 and 11 AM.`}),children:`Success`}),(0,c.jsx)(r,{variant:`outline`,onClick:()=>i.info(`Your driver is 3 minutes away`),children:`Info`}),(0,c.jsx)(r,{variant:`outline`,onClick:()=>i(`Maya invited you to a trip`,{description:`Weekend in Porto`,cancel:{label:`Decline`},action:{label:`Join`}}),children:`Action and cancel`}),(0,c.jsx)(r,{variant:`outline`,onClick:()=>{i.success(`Your order is on its way`,{description:`Arriving Friday between 9 and 11 AM.`,duration:2e4}),i.warning(`Your storage is almost full`,{duration:2e4}),i(`Maya invited you to a trip`,{description:`Weekend in Porto`,cancel:{label:`Decline`},action:{label:`Join`},duration:2e4})},children:`Show three`})]}),(0,c.jsx)(a,{stacked:!0})]})},g={render:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{variant:`outline`,onClick:()=>i.info(`Your driver is 3 minutes away`,{description:`Look for a blue Škoda Octavia.`}),children:`Show toast`}),(0,c.jsx)(a,{closeButton:!0,position:`top-center`})]})},_={decorators:[e=>(0,c.jsx)(e,{})],render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,c.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:14,justifyItems:`start`},children:[(0,c.jsx)(s,{title:e===`light`?`Light`:`Dark`,description:`Friday, Oct 3 at 7:30 PM · Café Lumière`,actions:(0,c.jsx)(r,{size:`xs`,children:`Undo`})}),(0,c.jsx)(s,{type:`success`,title:`Your order is on its way`,onClose:()=>{}}),(0,c.jsx)(s,{type:`warning`,title:`Your storage is almost full`}),(0,c.jsx)(s,{type:`error`,title:`We couldn't send your message`}),(0,c.jsx)(s,{type:`loading`,title:`Uploading 12 photos…`,description:`This will only take a moment.`})]},e))})},v=[`Playground`,`Types`,`Demos`,`Toasts`,`Stacked`,`WithCloseButton`,`Themes`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    title: 'Table booked for 4',
    description: 'Friday, Oct 3 at 7:30 PM · Café Lumière',
    action: true,
    cancel: false,
    closeButton: false,
    stacked: false,
    position: 'bottom-right',
    duration: 4000
  },
  argTypes: {
    type: {
      name: 'Type',
      control: 'select',
      options: ['default', 'success', 'info', 'warning', 'error', 'loading']
    },
    title: {
      name: 'Title'
    },
    description: {
      name: 'Description'
    },
    action: {
      name: 'Action'
    },
    cancel: {
      name: 'Cancel'
    },
    closeButton: {
      name: 'Close'
    },
    stacked: {
      name: 'Stacked (not in Figma)'
    },
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right']
    },
    duration: {
      control: {
        type: 'number',
        step: 1000
      }
    }
  },
  render: ({
    type,
    title,
    description,
    action,
    cancel,
    closeButton,
    stacked,
    position,
    duration
  }) => <>
      <Button variant="outline" onClick={() => toast(title, {
      type,
      description: description || undefined,
      action: action ? {
        label: 'Undo'
      } : undefined,
      cancel: cancel ? {
        label: 'Decline'
      } : undefined
    })}>
        Show toast
      </Button>
      <Toaster position={position} duration={duration} closeButton={closeButton} stacked={stacked} />
    </>
}`,...u.parameters?.docs?.source},description:{story:`Press the button to show a toast with these settings.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24,
    justifyItems: 'start'
  }}>
      <Toast title="Draft saved to core/semantic 2.4" description="Consumers on 2.x pick it up on their next sync." />
      {(['success', 'info', 'warning', 'error', 'loading'] as const).map(type => <Toast key={type} type={type} title="Draft saved to core/semantic 2.4" description="Consumers on 2.x pick it up on their next sync." />)}
    </div>
}`,...d.parameters?.docs?.source},description:{story:'Figma "Sonner": every Type, drawn with `Toast` (no timing).',...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 48,
    justifyItems: 'start'
  }}>
      <Toast title="Table booked for 4" description="Friday, Oct 3 at 7:30 PM · Café Lumière" actions={<Button size="xs">Undo</Button>} />
      <div style={{
      display: 'grid',
      gap: 14
    }}>
        <Toast type="success" title="Your order is on its way" />
        <Toast type="info" title="Your driver is 3 minutes away" />
        <Toast type="warning" title="Your storage is almost full" />
        <Toast type="error" title="We couldn't send your message" />
      </div>
      <Toast title="Maya invited you to a trip" description="Weekend in Porto" actions={<>
            <Button size="xs" variant="secondary">
              Decline
            </Button>
            <Button size="xs">Join</Button>
          </>} />
      <div style={{
      display: 'grid',
      gap: 14
    }}>
        <Toast type="loading" title="Uploading 12 photos…" description="This will only take a moment." />
        <Toast type="success" title="12 photos uploaded" description="Added to your album Porto weekend." />
      </div>
      <Toast type="info" title="Your driver is 3 minutes away" onClose={() => {}} />
    </div>
}`,...f.parameters?.docs?.source},description:{story:"Figma demos, drawn with `Toast`: an action; types stacked 14 px apart; action and cancel; loading then success; Close.",...f.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }}>
        <Button variant="outline" onClick={() => toast('Table booked for 4', {
        description: 'Friday, Oct 3 at 7:30 PM · Café Lumière',
        action: {
          label: 'Undo',
          onClick: () => toast('Booking cancelled')
        }
      })}>
          Default
        </Button>
        <Button variant="outline" onClick={() => toast.success('Your order is on its way')}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.info('Your driver is 3 minutes away')}>
          Info
        </Button>
        <Button variant="outline" onClick={() => toast.warning('Your storage is almost full')}>
          Warning
        </Button>
        <Button variant="outline" onClick={() => toast.error("We couldn't send your message", {
        action: {
          label: 'Retry'
        }
      })}>
          Error
        </Button>
        <Button variant="outline" onClick={() => toast('Maya invited you to a trip', {
        description: 'Weekend in Porto',
        cancel: {
          label: 'Decline'
        },
        action: {
          label: 'Join',
          onClick: () => toast.success("You've joined Weekend in Porto")
        }
      })}>
          Action and cancel
        </Button>
        <Button variant="outline" onClick={() => toast.promise(wait(2000), {
        loading: 'Uploading 12 photos…',
        success: '12 photos uploaded',
        error: 'Upload failed'
      })}>
          Promise
        </Button>
        <Button variant="ghost" onClick={() => toast.dismiss()}>
          Dismiss all
        </Button>
      </div>
      <Toaster />
    </>
}`,...m.parameters?.docs?.source},description:{story:"The Toaster at work: each button calls `toast` like an app would.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }}>
        <Button variant="outline" onClick={() => toast.success('Your order is on its way', {
        description: 'Arriving Friday between 9 and 11 AM.'
      })}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.info('Your driver is 3 minutes away')}>
          Info
        </Button>
        <Button variant="outline" onClick={() => toast('Maya invited you to a trip', {
        description: 'Weekend in Porto',
        cancel: {
          label: 'Decline'
        },
        action: {
          label: 'Join'
        }
      })}>
          Action and cancel
        </Button>
        <Button variant="outline" onClick={() => {
        toast.success('Your order is on its way', {
          description: 'Arriving Friday between 9 and 11 AM.',
          duration: 20000
        });
        toast.warning('Your storage is almost full', {
          duration: 20000
        });
        toast('Maya invited you to a trip', {
          description: 'Weekend in Porto',
          cancel: {
            label: 'Decline'
          },
          action: {
            label: 'Join'
          },
          duration: 20000
        });
      }}>
          Show three
        </Button>
      </div>
      <Toaster stacked />
    </>
}`,...h.parameters?.docs?.source},description:{story:"Not in Figma: `stacked` piles the toasts up, the newest in front and the older ones peeking out behind it. Hover or\nfocus (Alt+T, Tab) spreads them into the list.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Button variant="outline" onClick={() => toast.info('Your driver is 3 minutes away', {
      description: 'Look for a blue Škoda Octavia.'
    })}>
        Show toast
      </Button>
      <Toaster closeButton position="top-center" />
    </>
}`,...g.parameters?.docs?.source},description:{story:'`closeButton` on the Toaster puts the Figma "Close" button on every toast.',...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Story />],
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24,
      display: 'grid',
      gap: 14,
      justifyItems: 'start'
    }}>
          <Toast title={scheme === 'light' ? 'Light' : 'Dark'} description="Friday, Oct 3 at 7:30 PM · Café Lumière" actions={<Button size="xs">Undo</Button>} />
          <Toast type="success" title="Your order is on its way" onClose={() => {}} />
          <Toast type="warning" title="Your storage is almost full" />
          <Toast type="error" title="We couldn't send your message" />
          <Toast type="loading" title="Uploading 12 photos…" description="This will only take a moment." />
        </div>)}
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,..._.parameters?.docs?.description}}}})))()}y();export{f as Demos,u as Playground,h as Stacked,_ as Themes,m as Toasts,d as Types,g as WithCloseButton,v as __namedExportsOrder,l as default};