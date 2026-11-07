import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-D3dyT97Z.js";import{n as r,t as i}from"./Button-B-BuCCvh.js";function a({type:e=`default`,title:t,description:n,icon:r,actions:i,onClose:a,closeLabel:o=`Close notification`,as:s=`div`,className:c,...l}){let u=r===void 0?e==="default"?null:p[e]:r;return(0,d.jsxs)(s,{...l,className:h(`ds-toast`,e!=="default"&&`ds-toast--${e}`,c),children:[a&&(0,d.jsx)(`button`,{type:`button`,className:`ds-toast__close`,"aria-label":o,onClick:a,children:m}),u&&(0,d.jsx)(`span`,{className:`ds-toast__icon`,"aria-hidden":!0,children:u}),(0,d.jsxs)(`div`,{className:`ds-toast__content`,children:[(0,d.jsx)(`div`,{className:`ds-toast__title`,children:t}),n!==void 0&&(0,d.jsx)(`div`,{className:`ds-toast__description`,children:n})]}),i&&(0,d.jsx)(`div`,{className:`ds-toast__actions`,children:i})]})}function o(e,t={}){let n=t.id??++_,r=g.find(e=>e.id===n),i={...t,id:n,title:e,type:t.type??`default`,closing:!1,version:++v};return S(r?g.map(e=>e.id===n?i:e):[...g,i]),n}function s(e,t){let n=g.find(t=>t.id===e);n&&!n.closing&&((t===`auto`?n.onAutoClose:n.onDismiss)?.(e),S(g.map(t=>t.id===e?{...t,closing:!0}:t)),setTimeout(()=>S(g.filter(t=>!(t.id===e&&t.closing))),C))}function c({position:e=`bottom-right`,duration:t=4e3,closeButton:n=!1,visibleToasts:r=3,label:i=`Notifications`,className:a}){let o=(0,u.useSyncExternalStore)(b,x,x).slice(-r),s=(0,u.useRef)(null),c=(0,u.useRef)(null),[f,p]=(0,u.useState)(!1),[m,g]=(0,u.useState)(!1),[_,v]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{let e=e=>{e.altKey&&e.code===`KeyT`&&s.current&&(e.preventDefault(),s.current.contains(document.activeElement)||(c.current=document.activeElement),s.current.focus())},t=()=>v(document.hidden);return document.addEventListener(`keydown`,e),document.addEventListener(`visibilitychange`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`visibilitychange`,t)}},[]),(0,d.jsx)(`section`,{ref:s,className:h(`ds-toaster`,`ds-toaster--${e}`,a),"aria-label":i,"aria-keyshortcuts":`Alt+T`,tabIndex:-1,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),onFocus:()=>g(!0),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||g(!1)},onKeyDown:e=>{e.key===`Escape`&&c.current&&(c.current.focus(),c.current=null)},children:(0,d.jsx)(`ol`,{className:`ds-toaster__list`,"aria-live":`polite`,children:o.map(e=>(0,d.jsx)(l,{record:e,duration:t,closeButton:n,paused:f||m||_,region:s},e.id))})})}function l({record:e,duration:t,closeButton:n,paused:r,region:o}){let c=(0,u.useRef)(null),l=(0,u.useRef)(0);(0,u.useEffect)(()=>{l.current=e.duration??(e.type===`loading`?1/0:t)},[e.version,e.duration,e.type,t]),(0,u.useEffect)(()=>{if(r||e.closing||!Number.isFinite(l.current))return;let t=Date.now(),n=setTimeout(()=>s(e.id,`auto`),l.current);return()=>{clearTimeout(n),l.current-=Date.now()-t}},[r,e.closing,e.version,e.id]),(0,u.useEffect)(()=>{e.closing&&c.current?.contains(document.activeElement)&&o.current?.focus()},[e.closing,o]);let f=(t,n)=>t&&(0,d.jsx)(i,{size:`xs`,variant:n,onClick:n=>{t.onClick?.(n),n.defaultPrevented||s(e.id,`dismiss`)},children:t.label}),p=(e.cancel||e.action)&&(0,d.jsxs)(d.Fragment,{children:[f(e.cancel,`secondary`),f(e.action,`default`)]});return(0,d.jsx)(a,{ref:c,as:`li`,type:e.type,title:e.title,description:e.description,icon:e.icon,actions:p,onClose:e.closeButton??n?()=>s(e.id,`dismiss`):void 0,"data-state":e.closing?`closed`:`open`})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{u=n(),r(),d=t(),f=(e,t=16)=>(0,d.jsx)(`svg`,{viewBox:`0 0 24 24`,width:t,height:t,fill:`none`,stroke:`currentColor`,strokeWidth:30/t,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),p={success:f((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,d.jsx)(`path`,{d:`m9 12 2 2 4-4`})]})),info:f((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,d.jsx)(`path`,{d:`M12 16v-4M12 8h.01`})]})),warning:f((0,d.jsx)(`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3ZM12 9v4M12 17h.01`})),error:f((0,d.jsx)(`path`,{d:`M2.59 16.73A2 2 0 0 1 2 15.31V8.69a2 2 0 0 1 .59-1.42l4.68-4.68A2 2 0 0 1 8.69 2h6.62a2 2 0 0 1 1.42.59l4.68 4.68A2 2 0 0 1 22 8.69v6.62a2 2 0 0 1-.59 1.42l-4.68 4.68a2 2 0 0 1-1.42.59H8.69a2 2 0 0 1-1.42-.59zM15 9l-6 6M9 9l6 6`})),loading:f((0,d.jsx)(`path`,{d:`M21 12a9 9 0 1 1-6.22-8.56`}))},m=f((0,d.jsx)(`path`,{d:`M18 6 6 18M6 6l12 12`}),12),h=(...e)=>e.filter(Boolean).join(` `)||void 0,g=[],_=0,v=0,y=new Set,b=e=>(y.add(e),()=>y.delete(e)),x=()=>g,S=e=>{g=e,y.forEach(e=>e())},C=200,w=Object.assign((e,t)=>o(e,t),{success:(e,t)=>o(e,{...t,type:`success`}),info:(e,t)=>o(e,{...t,type:`info`}),warning:(e,t)=>o(e,{...t,type:`warning`}),error:(e,t)=>o(e,{...t,type:`error`}),loading:(e,t)=>o(e,{...t,type:`loading`}),promise(e,t,n){let r=o(t.loading,{...n,type:`loading`}),i=(e,t)=>typeof e==`function`?e(t):e;return(typeof e==`function`?e():e).then(e=>o(i(t.success,e),{...n,id:r,type:`success`}),e=>o(i(t.error,e),{...n,id:r,type:`error`})),r},dismiss(e){for(let t of g)(e===void 0||t.id===e)&&s(t.id,`dismiss`)}}),a.__docgenInfo={description:'Figma "Sonner": one toast, without timing. Use `toast()` and `<Toaster>` to show notifications.',methods:[],displayName:`Toast`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`},description:``},type:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'info' | 'warning' | 'error' | 'loading'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'loading'`}]},description:"Figma Type: the icon and its colour. `default` has no icon.",defaultValue:{value:`'default'`,computed:!1}},title:{required:!0,tsType:{name:`ReactNode`},description:`Figma "Title" (14/20 medium).`},description:{required:!1,tsType:{name:`ReactNode`},description:`Figma "Description" (14/20 muted).`},icon:{required:!1,tsType:{name:`ReactNode`},description:"Replaces the type's icon (16 px, `currentColor`); `null` hides it."},actions:{required:!1,tsType:{name:`ReactNode`},description:`Figma "actions" slot: xs buttons, e.g. a Secondary cancel and a Default action.`},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Figma "Close": shows the round close button on the top-left corner, which calls this.`},closeLabel:{required:!1,tsType:{name:`string`},description:`The close button's accessible name.`,defaultValue:{value:`'Close notification'`,computed:!1}},as:{required:!1,tsType:{name:`union`,raw:`'div' | 'li'`,elements:[{name:`literal`,value:`'div'`},{name:`literal`,value:`'li'`}]},description:"`li` inside a Toaster's list; `div` on its own.",defaultValue:{value:`'div'`,computed:!1}}},composes:[`Omit`]},c.__docgenInfo={description:"The fixed region that shows `toast()` notifications. Mount it once, near the root of the app.",methods:[],displayName:`Toaster`,props:{position:{required:!1,tsType:{name:`union`,raw:`'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'`,elements:[{name:`literal`,value:`'top-left'`},{name:`literal`,value:`'top-center'`},{name:`literal`,value:`'top-right'`},{name:`literal`,value:`'bottom-left'`},{name:`literal`,value:`'bottom-center'`},{name:`literal`,value:`'bottom-right'`}]},description:"The viewport corner (default `bottom-right`); the newest toast is nearest the edge.",defaultValue:{value:`'bottom-right'`,computed:!1}},duration:{required:!1,tsType:{name:`number`},description:`Milliseconds a toast stays (default 4000).`,defaultValue:{value:`4000`,computed:!1}},closeButton:{required:!1,tsType:{name:`boolean`},description:`Shows the close button on every toast.`,defaultValue:{value:`false`,computed:!1}},visibleToasts:{required:!1,tsType:{name:`number`},description:`How many toasts show at once (default 3); the others wait their turn.`,defaultValue:{value:`3`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`The region's accessible name.`,defaultValue:{value:`'Notifications'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{r(),T(),E=t(),D={title:`Components/Sonner`,parameters:{layout:`fullscreen`,docs:{description:{component:"Implements the Sort UI 2.0 **Sonner** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=325-2)): toasts, short notifications that close on their own. Mount `<Toaster />` once and call `toast('Title', { description, action, cancel })`, `toast.success` · `info` · `warning` · `error` · `loading`, `toast.promise` or `toast.dismiss`. Toasts are read out by screen readers (a polite live region), wait while the pointer is over them or focus is inside, and Alt+T moves focus to them. `Toast` draws one toast on its own (Figma Type, Title, Description, actions, Close)."}}},decorators:[e=>(0,E.jsx)(`div`,{style:{minHeight:`100vh`,padding:24,boxSizing:`border-box`,background:`var(--ds-background)`},children:(0,E.jsx)(e,{})})]},O={args:{type:`default`,title:`Table booked for 4`,description:`Friday, Oct 3 at 7:30 PM · Café Lumière`,action:!0,cancel:!1,closeButton:!1,position:`bottom-right`,duration:4e3},argTypes:{type:{name:`Type`,control:`select`,options:[`default`,`success`,`info`,`warning`,`error`,`loading`]},title:{name:`Title`},description:{name:`Description`},action:{name:`Action`},cancel:{name:`Cancel`},closeButton:{name:`Close`},position:{control:`select`,options:[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`]},duration:{control:{type:`number`,step:1e3}}},render:({type:e,title:t,description:n,action:r,cancel:a,closeButton:o,position:s,duration:l})=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i,{variant:`outline`,onClick:()=>w(t,{type:e,description:n||void 0,action:r?{label:`Undo`}:void 0,cancel:a?{label:`Decline`}:void 0}),children:`Show toast`}),(0,E.jsx)(c,{position:s,duration:l,closeButton:o})]})},k={render:()=>(0,E.jsxs)(`div`,{style:{display:`grid`,gap:24,justifyItems:`start`},children:[(0,E.jsx)(a,{title:`Draft saved to core/semantic 2.4`,description:`Consumers on 2.x pick it up on their next sync.`}),[`success`,`info`,`warning`,`error`,`loading`].map(e=>(0,E.jsx)(a,{type:e,title:`Draft saved to core/semantic 2.4`,description:`Consumers on 2.x pick it up on their next sync.`},e))]})},A={render:()=>(0,E.jsxs)(`div`,{style:{display:`grid`,gap:48,justifyItems:`start`},children:[(0,E.jsx)(a,{title:`Table booked for 4`,description:`Friday, Oct 3 at 7:30 PM · Café Lumière`,actions:(0,E.jsx)(i,{size:`xs`,children:`Undo`})}),(0,E.jsxs)(`div`,{style:{display:`grid`,gap:14},children:[(0,E.jsx)(a,{type:`success`,title:`Your order is on its way`}),(0,E.jsx)(a,{type:`info`,title:`Your driver is 3 minutes away`}),(0,E.jsx)(a,{type:`warning`,title:`Your storage is almost full`}),(0,E.jsx)(a,{type:`error`,title:`We couldn't send your message`})]}),(0,E.jsx)(a,{title:`Maya invited you to a trip`,description:`Weekend in Porto`,actions:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i,{size:`xs`,variant:`secondary`,children:`Decline`}),(0,E.jsx)(i,{size:`xs`,children:`Join`})]})}),(0,E.jsxs)(`div`,{style:{display:`grid`,gap:14},children:[(0,E.jsx)(a,{type:`loading`,title:`Uploading 12 photos…`,description:`This will only take a moment.`}),(0,E.jsx)(a,{type:`success`,title:`12 photos uploaded`,description:`Added to your album Porto weekend.`})]}),(0,E.jsx)(a,{type:`info`,title:`Your driver is 3 minutes away`,onClose:()=>{}})]})},j=e=>new Promise(t=>setTimeout(t,e)),M={render:()=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,E.jsx)(i,{variant:`outline`,onClick:()=>w(`Table booked for 4`,{description:`Friday, Oct 3 at 7:30 PM · Café Lumière`,action:{label:`Undo`,onClick:()=>w(`Booking cancelled`)}}),children:`Default`}),(0,E.jsx)(i,{variant:`outline`,onClick:()=>w.success(`Your order is on its way`),children:`Success`}),(0,E.jsx)(i,{variant:`outline`,onClick:()=>w.info(`Your driver is 3 minutes away`),children:`Info`}),(0,E.jsx)(i,{variant:`outline`,onClick:()=>w.warning(`Your storage is almost full`),children:`Warning`}),(0,E.jsx)(i,{variant:`outline`,onClick:()=>w.error(`We couldn't send your message`,{action:{label:`Retry`}}),children:`Error`}),(0,E.jsx)(i,{variant:`outline`,onClick:()=>w(`Maya invited you to a trip`,{description:`Weekend in Porto`,cancel:{label:`Decline`},action:{label:`Join`,onClick:()=>w.success(`You've joined Weekend in Porto`)}}),children:`Action and cancel`}),(0,E.jsx)(i,{variant:`outline`,onClick:()=>w.promise(j(2e3),{loading:`Uploading 12 photos…`,success:`12 photos uploaded`,error:`Upload failed`}),children:`Promise`}),(0,E.jsx)(i,{variant:`ghost`,onClick:()=>w.dismiss(),children:`Dismiss all`})]}),(0,E.jsx)(c,{})]})},N={render:()=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i,{variant:`outline`,onClick:()=>w.info(`Your driver is 3 minutes away`,{description:`Look for a blue Škoda Octavia.`}),children:`Show toast`}),(0,E.jsx)(c,{closeButton:!0,position:`top-center`})]})},P={decorators:[e=>(0,E.jsx)(e,{})],render:()=>(0,E.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,E.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:14,justifyItems:`start`},children:[(0,E.jsx)(a,{title:e===`light`?`Light`:`Dark`,description:`Friday, Oct 3 at 7:30 PM · Café Lumière`,actions:(0,E.jsx)(i,{size:`xs`,children:`Undo`})}),(0,E.jsx)(a,{type:`success`,title:`Your order is on its way`,onClose:()=>{}}),(0,E.jsx)(a,{type:`warning`,title:`Your storage is almost full`}),(0,E.jsx)(a,{type:`error`,title:`We couldn't send your message`}),(0,E.jsx)(a,{type:`loading`,title:`Uploading 12 photos…`,description:`This will only take a moment.`})]},e))})},F=[`Playground`,`Types`,`Demos`,`Toasts`,`WithCloseButton`,`Themes`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    title: 'Table booked for 4',
    description: 'Friday, Oct 3 at 7:30 PM · Café Lumière',
    action: true,
    cancel: false,
    closeButton: false,
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
      <Toaster position={position} duration={duration} closeButton={closeButton} />
    </>
}`,...O.parameters?.docs?.source},description:{story:`Press the button to show a toast with these settings.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24,
    justifyItems: 'start'
  }}>
      <Toast title="Draft saved to core/semantic 2.4" description="Consumers on 2.x pick it up on their next sync." />
      {(['success', 'info', 'warning', 'error', 'loading'] as const).map(type => <Toast key={type} type={type} title="Draft saved to core/semantic 2.4" description="Consumers on 2.x pick it up on their next sync." />)}
    </div>
}`,...k.parameters?.docs?.source},description:{story:'Figma "Sonner": every Type, drawn with `Toast` (no timing).',...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"Figma demos, drawn with `Toast`: an action; types stacked 14 px apart; action and cancel; loading then success; Close.",...A.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"The Toaster at work: each button calls `toast` like an app would.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Button variant="outline" onClick={() => toast.info('Your driver is 3 minutes away', {
      description: 'Look for a blue Škoda Octavia.'
    })}>
        Show toast
      </Button>
      <Toaster closeButton position="top-center" />
    </>
}`,...N.parameters?.docs?.source},description:{story:'`closeButton` on the Toaster puts the Figma "Close" button on every toast.',...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...P.parameters?.docs?.description}}}})))()}I();export{A as Demos,O as Playground,P as Themes,M as Toasts,k as Types,N as WithCloseButton,F as __namedExportsOrder,D as default};