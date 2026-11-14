import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-DeQ_nHsj.js";import{n as r,t as i}from"./Button-DFiPKFCe.js";import{i as a,n as o,r as s,t as c}from"./AlertDialog-D_iw8wDF.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{l=n(),r(),a(),u=t(),d={title:`Components/Alert Dialog`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Alert Dialog** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=187-2)): `size` (`default` · `sm`), `media`, `title`, `description` and the footer (`AlertDialogCancel`, `AlertDialogAction`). A native modal `<dialog>` with `role="alertdialog"`: focus starts on Cancel and stays inside, the page behind is inert and does not scroll, Escape closes it and focus goes back to the trigger. A click on the backdrop does not close it.'}}}},f=e=>(0,u.jsx)(`svg`,{viewBox:`0 0 24 24`,width:20,height:20,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),p={trash:f((0,u.jsx)(`path`,{d:`M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6`})),mapPin:f((0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`path`,{d:`M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0`}),(0,u.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]})),scanFace:f((0,u.jsx)(`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01`}))},m={args:{size:`default`,destructive:!0,media:!0,title:`Delete your account?`,description:`This permanently deletes your profile, playlists and listening history. You can't undo this.`},argTypes:{size:{name:`Size`,control:`inline-radio`,options:[`default`,`sm`]},destructive:{name:`Destructive`},media:{name:`Media`},title:{name:`Title`},description:{name:`Description`}},render:({size:e,destructive:t,media:n,title:r,description:a})=>(0,u.jsxs)(c,{trigger:(0,u.jsx)(i,{variant:`outline`,children:`Open dialog`}),size:e,variant:t?`destructive`:`default`,media:n?p.trash:void 0,title:r,description:a||void 0,children:[(0,u.jsx)(s,{children:`Cancel`}),(0,u.jsx)(o,{variant:t?`destructive`:`default`,children:t?`Delete account`:`Continue`})]})},h={render:function(){let[e,t]=(0,l.useState)(``);return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:16,justifyItems:`start`},children:[(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,u.jsxs)(c,{trigger:(0,u.jsx)(i,{variant:`outline`,children:`Log out`}),title:`Log out of all devices?`,description:`You'll need to sign in again on your phone, tablet and TV.`,children:[(0,u.jsx)(s,{children:`Cancel`}),(0,u.jsx)(o,{onClick:()=>t(`Logged out`),children:`Log out`})]}),(0,u.jsxs)(c,{trigger:(0,u.jsx)(i,{variant:`outline`,children:`Small`}),size:`sm`,title:`Allow notifications?`,description:`Get notified when your order ships or your driver arrives.`,children:[(0,u.jsx)(s,{children:`Don't allow`}),(0,u.jsx)(o,{onClick:()=>t(`Notifications allowed`),children:`Allow`})]}),(0,u.jsxs)(c,{trigger:(0,u.jsx)(i,{variant:`outline`,children:`Media`}),media:p.mapPin,title:`Share your location?`,description:`Couriers use it to find you faster. You can turn this off anytime in Settings.`,children:[(0,u.jsx)(s,{children:`Not now`}),(0,u.jsx)(o,{onClick:()=>t(`Location shared`),children:`Share location`})]}),(0,u.jsxs)(c,{trigger:(0,u.jsx)(i,{variant:`outline`,children:`Small with media`}),size:`sm`,media:p.scanFace,title:`Turn on Face ID?`,description:`Sign in and pay with just a glance.`,children:[(0,u.jsx)(s,{children:`Not now`}),(0,u.jsx)(o,{onClick:()=>t(`Face ID on`),children:`Turn on`})]}),(0,u.jsxs)(c,{trigger:(0,u.jsx)(i,{variant:`destructive`,children:`Delete account`}),variant:`destructive`,media:p.trash,title:`Delete your account?`,description:`This permanently deletes your profile, playlists and listening history. You can't undo this.`,children:[(0,u.jsx)(s,{children:`Cancel`}),(0,u.jsx)(o,{variant:`destructive`,onClick:()=>t(`Account deleted`),children:`Delete account`})]})]}),(0,u.jsx)(`p`,{role:`status`,style:{margin:0,color:`var(--ds-muted-foreground)`},children:e})]})}},g={render:function(){let[e,t]=(0,l.useState)(!1),[n,r]=(0,l.useState)(!1);return(0,u.jsxs)(c,{trigger:(0,u.jsx)(i,{variant:`outline`,children:`Archive project`}),open:e,onOpenChange:t,title:`Archive Porto weekend?`,description:`Everyone loses access until you restore it.`,children:[(0,u.jsx)(s,{disabled:n,children:`Cancel`}),(0,u.jsx)(o,{disabled:n,onClick:e=>{e.preventDefault(),r(!0),setTimeout(()=>{r(!1),t(!1)},1e3)},children:n?`Archiving…`:`Archive`})]})}},_=({size:e=`default`,destructive:t,media:n,title:r,description:a,cancel:o,action:s})=>(0,u.jsxs)(`div`,{className:[`ds-alert-dialog`,e===`sm`&&`ds-alert-dialog--sm`,t&&`ds-alert-dialog--destructive`].filter(Boolean).join(` `),children:[(0,u.jsxs)(`div`,{className:`ds-alert-dialog__header`,children:[n&&(0,u.jsx)(`span`,{className:`ds-alert-dialog__media`,children:n}),(0,u.jsxs)(`div`,{className:`ds-alert-dialog__heading`,children:[(0,u.jsx)(`p`,{className:`ds-alert-dialog__title`,children:r}),(0,u.jsx)(`p`,{className:`ds-alert-dialog__description`,children:a})]})]}),(0,u.jsxs)(`div`,{className:`ds-alert-dialog__footer`,children:[(0,u.jsx)(i,{variant:`outline`,children:o}),s]})]}),v={parameters:{layout:`fullscreen`},render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,u.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:32,display:`grid`,gap:32,justifyItems:`start`},children:[(0,u.jsx)(_,{destructive:!0,media:p.trash,title:`Delete your account?`,description:`This permanently deletes your profile, playlists and listening history. You can't undo this.`,cancel:`Cancel`,action:(0,u.jsx)(i,{variant:`destructive`,children:`Delete account`})}),(0,u.jsx)(_,{size:`sm`,media:p.scanFace,title:`Turn on Face ID?`,description:`Sign in and pay with just a glance.`,cancel:`Not now`,action:(0,u.jsx)(i,{children:`Turn on`})})]},e))})},y=[`Playground`,`Demos`,`Async`,`Sizes`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`The Figma demos: each button opens one. The action says what it did below.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"The action keeps the dialog open while it works (`event.preventDefault()`), then closes it.",...g.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Figma "Alert Dialog": Size default and sm, as open dialogs, with Light and Dark.`,...v.parameters?.docs?.description}}}})))()}b();export{g as Async,h as Demos,m as Playground,v as Sizes,y as __namedExportsOrder,d as default};