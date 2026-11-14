import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-CuuctXxA.js";import{n as r,t as i}from"./Button-DJRSIp7t.js";function a({trigger:e,open:t,defaultOpen:n=!1,onOpenChange:r,size:i=`default`,variant:a=`default`,media:o,title:s,titleAs:f=`h2`,description:p,children:m,className:h,onClose:g,..._}){let[v,y]=(0,c.useState)(n),b=t??v,x=(0,c.useRef)(null),S=(0,c.useRef)(null),C=(0,c.useId)(),w=(0,c.useId)(),T=e=>{t===void 0&&y(e),r?.(e)};return(0,c.useEffect)(()=>{let e=x.current;e&&(b&&!e.open?(S.current=document.activeElement,e.showModal(),e.querySelector(`[data-alert-dialog-cancel]`)?.focus()):!b&&e.open&&e.close())},[b]),(0,l.jsxs)(l.Fragment,{children:[e&&(0,c.cloneElement)(e,{"aria-haspopup":`dialog`,onClick:t=>{e.props.onClick?.(t),t.defaultPrevented||T(!0)}}),(0,l.jsx)(`dialog`,{..._,ref:x,role:`alertdialog`,"aria-modal":`true`,"aria-labelledby":C,"aria-describedby":p===void 0?void 0:w,className:u(`ds-alert-dialog`,i===`sm`&&`ds-alert-dialog--sm`,a===`destructive`&&`ds-alert-dialog--destructive`,h),onClose:e=>{g?.(e),b&&T(!1),S.current?.focus(),S.current=null},children:(0,l.jsxs)(d.Provider,{value:()=>T(!1),children:[(0,l.jsxs)(`div`,{className:`ds-alert-dialog__header`,children:[o&&(0,l.jsx)(`span`,{className:`ds-alert-dialog__media`,"aria-hidden":!0,children:o}),(0,l.jsxs)(`div`,{className:`ds-alert-dialog__heading`,children:[(0,l.jsx)(f,{id:C,className:`ds-alert-dialog__title`,children:s}),p!==void 0&&(0,l.jsx)(`p`,{id:w,className:`ds-alert-dialog__description`,children:p})]})]}),m&&(0,l.jsx)(`div`,{className:`ds-alert-dialog__footer`,children:m})]})})]})}function o({variant:e=`outline`,onClick:t,...n}){let r=(0,c.useContext)(d);return(0,l.jsx)(i,{...n,variant:e,"data-alert-dialog-cancel":``,onClick:e=>{t?.(e),r()}})}function s({variant:e=`default`,onClick:t,...n}){let r=(0,c.useContext)(d);return(0,l.jsx)(i,{...n,variant:e,onClick:e=>{t?.(e),e.defaultPrevented||r()}})}var c,l,u,d;function f(){return(f=e((()=>{c=n(),r(),l=t(),u=(...e)=>e.filter(Boolean).join(` `)||void 0,d=(0,c.createContext)(()=>{}),a.__docgenInfo={description:`Figma "Alert Dialog": a modal that asks to confirm an action.`,methods:[],displayName:`AlertDialog`,props:{trigger:{required:!1,tsType:{name:`ReactElement`,elements:[{name:`signature`,type:`object`,raw:`{ onClick?: (event: MouseEvent<HTMLElement>) => void }`,signature:{properties:[{key:`onClick`,value:{name:`signature`,type:`function`,raw:`(event: MouseEvent<HTMLElement>) => void`,signature:{arguments:[{type:{name:`MouseEvent`,elements:[{name:`HTMLElement`}],raw:`MouseEvent<HTMLElement>`},name:`event`}],return:{name:`void`}},required:!1}}]}}],raw:`ReactElement<{ onClick?: (event: MouseEvent<HTMLElement>) => void }>`},description:"The element that opens it, e.g. a Button; it gets the click handler. Or control it with `open`."},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},size:{required:!1,tsType:{name:`union`,raw:`'default' | 'sm'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'sm'`}]},description:`Figma Size.`,defaultValue:{value:`'default'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'destructive'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'destructive'`}]},description:'`destructive` tints the media red (the "Destructive" demo); pair it with a destructive action.',defaultValue:{value:`'default'`,computed:!1}},media:{required:!1,tsType:{name:`ReactNode`},description:'Figma "Media": a 20 px icon (`currentColor`) shown on a 48 px tile; decorative.'},title:{required:!0,tsType:{name:`ReactNode`},description:`Figma "Title" (16/24 medium); it names the dialog.`},titleAs:{required:!1,tsType:{name:`union`,raw:`'h2' | 'h3' | 'p'`,elements:[{name:`literal`,value:`'h2'`},{name:`literal`,value:`'h3'`},{name:`literal`,value:`'p'`}]},description:"The title's element (`h2` by default).",defaultValue:{value:`'h2'`,computed:!1}},description:{required:!1,tsType:{name:`ReactNode`},description:`Figma "Description" (14/20 muted); it describes the dialog.`},children:{required:!1,tsType:{name:`ReactNode`},description:'Figma "footer": an `AlertDialogCancel` and an `AlertDialogAction`, in that order.'}},composes:[`Omit`]},o.__docgenInfo={description:`The safe answer: an Outline button that closes the dialog; it has focus when the dialog opens.`,methods:[],displayName:`AlertDialogCancel`,props:{variant:{defaultValue:{value:`'outline'`,computed:!1},required:!1}}},s.__docgenInfo={description:'The action: a Default button (or `variant="destructive"`); it closes the dialog unless `onClick` calls `event.preventDefault()`.',methods:[],displayName:`AlertDialogAction`,props:{variant:{defaultValue:{value:`'default'`,computed:!1},required:!1}}}})))()}var p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{p=n(),r(),f(),m=t(),h={title:`Components/Alert Dialog`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Alert Dialog** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=187-2)): `size` (`default` · `sm`), `media`, `title`, `description` and the footer (`AlertDialogCancel`, `AlertDialogAction`). A native modal `<dialog>` with `role="alertdialog"`: focus starts on Cancel and stays inside, the page behind is inert and does not scroll, Escape closes it and focus goes back to the trigger. A click on the backdrop does not close it.'}}}},g=e=>(0,m.jsx)(`svg`,{viewBox:`0 0 24 24`,width:20,height:20,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),_={trash:g((0,m.jsx)(`path`,{d:`M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6`})),mapPin:g((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`path`,{d:`M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0`}),(0,m.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]})),scanFace:g((0,m.jsx)(`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01`}))},v={args:{size:`default`,destructive:!0,media:!0,title:`Delete your account?`,description:`This permanently deletes your profile, playlists and listening history. You can't undo this.`},argTypes:{size:{name:`Size`,control:`inline-radio`,options:[`default`,`sm`]},destructive:{name:`Destructive`},media:{name:`Media`},title:{name:`Title`},description:{name:`Description`}},render:({size:e,destructive:t,media:n,title:r,description:c})=>(0,m.jsxs)(a,{trigger:(0,m.jsx)(i,{variant:`outline`,children:`Open dialog`}),size:e,variant:t?`destructive`:`default`,media:n?_.trash:void 0,title:r,description:c||void 0,children:[(0,m.jsx)(o,{children:`Cancel`}),(0,m.jsx)(s,{variant:t?`destructive`:`default`,children:t?`Delete account`:`Continue`})]})},y={render:function(){let[e,t]=(0,p.useState)(``);return(0,m.jsxs)(`div`,{style:{display:`grid`,gap:16,justifyItems:`start`},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,m.jsxs)(a,{trigger:(0,m.jsx)(i,{variant:`outline`,children:`Log out`}),title:`Log out of all devices?`,description:`You'll need to sign in again on your phone, tablet and TV.`,children:[(0,m.jsx)(o,{children:`Cancel`}),(0,m.jsx)(s,{onClick:()=>t(`Logged out`),children:`Log out`})]}),(0,m.jsxs)(a,{trigger:(0,m.jsx)(i,{variant:`outline`,children:`Small`}),size:`sm`,title:`Allow notifications?`,description:`Get notified when your order ships or your driver arrives.`,children:[(0,m.jsx)(o,{children:`Don't allow`}),(0,m.jsx)(s,{onClick:()=>t(`Notifications allowed`),children:`Allow`})]}),(0,m.jsxs)(a,{trigger:(0,m.jsx)(i,{variant:`outline`,children:`Media`}),media:_.mapPin,title:`Share your location?`,description:`Couriers use it to find you faster. You can turn this off anytime in Settings.`,children:[(0,m.jsx)(o,{children:`Not now`}),(0,m.jsx)(s,{onClick:()=>t(`Location shared`),children:`Share location`})]}),(0,m.jsxs)(a,{trigger:(0,m.jsx)(i,{variant:`outline`,children:`Small with media`}),size:`sm`,media:_.scanFace,title:`Turn on Face ID?`,description:`Sign in and pay with just a glance.`,children:[(0,m.jsx)(o,{children:`Not now`}),(0,m.jsx)(s,{onClick:()=>t(`Face ID on`),children:`Turn on`})]}),(0,m.jsxs)(a,{trigger:(0,m.jsx)(i,{variant:`destructive`,children:`Delete account`}),variant:`destructive`,media:_.trash,title:`Delete your account?`,description:`This permanently deletes your profile, playlists and listening history. You can't undo this.`,children:[(0,m.jsx)(o,{children:`Cancel`}),(0,m.jsx)(s,{variant:`destructive`,onClick:()=>t(`Account deleted`),children:`Delete account`})]})]}),(0,m.jsx)(`p`,{role:`status`,style:{margin:0,color:`var(--ds-muted-foreground)`},children:e})]})}},b={render:function(){let[e,t]=(0,p.useState)(!1),[n,r]=(0,p.useState)(!1);return(0,m.jsxs)(a,{trigger:(0,m.jsx)(i,{variant:`outline`,children:`Archive project`}),open:e,onOpenChange:t,title:`Archive Porto weekend?`,description:`Everyone loses access until you restore it.`,children:[(0,m.jsx)(o,{disabled:n,children:`Cancel`}),(0,m.jsx)(s,{disabled:n,onClick:e=>{e.preventDefault(),r(!0),setTimeout(()=>{r(!1),t(!1)},1e3)},children:n?`Archiving…`:`Archive`})]})}},x=({size:e=`default`,destructive:t,media:n,title:r,description:a,cancel:o,action:s})=>(0,m.jsxs)(`div`,{className:[`ds-alert-dialog`,e===`sm`&&`ds-alert-dialog--sm`,t&&`ds-alert-dialog--destructive`].filter(Boolean).join(` `),children:[(0,m.jsxs)(`div`,{className:`ds-alert-dialog__header`,children:[n&&(0,m.jsx)(`span`,{className:`ds-alert-dialog__media`,children:n}),(0,m.jsxs)(`div`,{className:`ds-alert-dialog__heading`,children:[(0,m.jsx)(`p`,{className:`ds-alert-dialog__title`,children:r}),(0,m.jsx)(`p`,{className:`ds-alert-dialog__description`,children:a})]})]}),(0,m.jsxs)(`div`,{className:`ds-alert-dialog__footer`,children:[(0,m.jsx)(i,{variant:`outline`,children:o}),s]})]}),S={parameters:{layout:`fullscreen`},render:()=>(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,m.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:32,display:`grid`,gap:32,justifyItems:`start`},children:[(0,m.jsx)(x,{destructive:!0,media:_.trash,title:`Delete your account?`,description:`This permanently deletes your profile, playlists and listening history. You can't undo this.`,cancel:`Cancel`,action:(0,m.jsx)(i,{variant:`destructive`,children:`Delete account`})}),(0,m.jsx)(x,{size:`sm`,media:_.scanFace,title:`Turn on Face ID?`,description:`Sign in and pay with just a glance.`,cancel:`Not now`,action:(0,m.jsx)(i,{children:`Turn on`})})]},e))})},C=[`Playground`,`Demos`,`Async`,`Sizes`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'default',
    destructive: true,
    media: true,
    title: 'Delete your account?',
    description: "This permanently deletes your profile, playlists and listening history. You can't undo this."
  },
  argTypes: {
    size: {
      name: 'Size',
      control: 'inline-radio',
      options: ['default', 'sm']
    },
    destructive: {
      name: 'Destructive'
    },
    media: {
      name: 'Media'
    },
    title: {
      name: 'Title'
    },
    description: {
      name: 'Description'
    }
  },
  render: ({
    size,
    destructive,
    media,
    title,
    description
  }) => <AlertDialog trigger={<Button variant="outline">Open dialog</Button>} size={size} variant={destructive ? 'destructive' : 'default'} media={media ? icons.trash : undefined} title={title} description={description || undefined}>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant={destructive ? 'destructive' : 'default'}>{destructive ? 'Delete account' : 'Continue'}</AlertDialogAction>
    </AlertDialog>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Demos() {
    const [result, setResult] = useState('');
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
          <AlertDialog trigger={<Button variant="outline">Log out</Button>} title="Log out of all devices?" description="You'll need to sign in again on your phone, tablet and TV.">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => setResult('Logged out')}>Log out</AlertDialogAction>
          </AlertDialog>
          <AlertDialog trigger={<Button variant="outline">Small</Button>} size="sm" title="Allow notifications?" description="Get notified when your order ships or your driver arrives.">
            <AlertDialogCancel>Don't allow</AlertDialogCancel>
            <AlertDialogAction onClick={() => setResult('Notifications allowed')}>Allow</AlertDialogAction>
          </AlertDialog>
          <AlertDialog trigger={<Button variant="outline">Media</Button>} media={icons.mapPin} title="Share your location?" description="Couriers use it to find you faster. You can turn this off anytime in Settings.">
            <AlertDialogCancel>Not now</AlertDialogCancel>
            <AlertDialogAction onClick={() => setResult('Location shared')}>Share location</AlertDialogAction>
          </AlertDialog>
          <AlertDialog trigger={<Button variant="outline">Small with media</Button>} size="sm" media={icons.scanFace} title="Turn on Face ID?" description="Sign in and pay with just a glance.">
            <AlertDialogCancel>Not now</AlertDialogCancel>
            <AlertDialogAction onClick={() => setResult('Face ID on')}>Turn on</AlertDialogAction>
          </AlertDialog>
          <AlertDialog trigger={<Button variant="destructive">Delete account</Button>} variant="destructive" media={icons.trash} title="Delete your account?" description="This permanently deletes your profile, playlists and listening history. You can't undo this.">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive" onClick={() => setResult('Account deleted')}>
              Delete account
            </AlertDialogAction>
          </AlertDialog>
        </div>
        <p role="status" style={{
        margin: 0,
        color: 'var(--ds-muted-foreground)'
      }}>
          {result}
        </p>
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:`The Figma demos: each button opens one. The action says what it did below.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Async() {
    const [open, setOpen] = useState(false);
    const [busy, setBusy] = useState(false);
    return <AlertDialog trigger={<Button variant="outline">Archive project</Button>} open={open} onOpenChange={setOpen} title="Archive Porto weekend?" description="Everyone loses access until you restore it.">
        <AlertDialogCancel disabled={busy}>Cancel</AlertDialogCancel>
        <AlertDialogAction disabled={busy} onClick={event => {
        event.preventDefault();
        setBusy(true);
        setTimeout(() => {
          setBusy(false);
          setOpen(false);
        }, 1000);
      }}>
          {busy ? 'Archiving…' : 'Archive'}
        </AlertDialogAction>
      </AlertDialog>;
  }
}`,...b.parameters?.docs?.source},description:{story:"The action keeps the dialog open while it works (`event.preventDefault()`), then closes it.",...b.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 32,
      display: 'grid',
      gap: 32,
      justifyItems: 'start'
    }}>
          <Panel destructive media={icons.trash} title="Delete your account?" description="This permanently deletes your profile, playlists and listening history. You can't undo this." cancel="Cancel" action={<Button variant="destructive">Delete account</Button>} />
          <Panel size="sm" media={icons.scanFace} title="Turn on Face ID?" description="Sign in and pay with just a glance." cancel="Not now" action={<Button>Turn on</Button>} />
        </div>)}
    </div>
}`,...S.parameters?.docs?.source},description:{story:`Figma "Alert Dialog": Size default and sm, as open dialogs, with Light and Dark.`,...S.parameters?.docs?.description}}}})))()}w();export{b as Async,y as Demos,v as Playground,S as Sizes,C as __namedExportsOrder,h as default};