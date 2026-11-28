import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-DW5xI3D9.js";import{n as r,t as i}from"./Button-dI9MQVE0.js";import{n as a,t as o}from"./Badge-BkZihm9O.js";import{i as s,n as c,t as l}from"./Input-BYo3Uy1j.js";import{r as u,t as d}from"./Checkbox-I4w8RetH.js";import{r as f,t as p}from"./Switch-CcTtJ44V.js";import{n as m,o as h,t as g}from"./Field-ntm_yfKO.js";import{n as _,t as v}from"./Select-BMB2h_8e.js";import{n as y,t as b}from"./Separator-BB7Wios3.js";import{i as x,n as S,r as C,t as w}from"./Popover-BxUyGLmZ.js";var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{T=n(),a(),r(),u(),h(),s(),_(),y(),f(),x(),E=t(),D={title:`Components/Popover`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Popover** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=151-2)): a 288 px non-modal panel with the header (`title`, `description`) and any content (fields, lists, `PopoverActions`). It opens from its `trigger` (`aria-expanded`, `aria-controls`) on `side` (`bottom` · `top` · `left` · `right`) with `align` (`center` · `start` · `end`). The panel is a `role="dialog"` named by its title; focus moves into it, Escape closes it and focus goes back to the trigger, a click outside or focus leaving it closes it. `PopoverClose` makes a button inside close it.'}}}},O=(e,t)=>(0,E.jsx)(`div`,{style:{minHeight:320,...t},children:e}),k=e=>(0,E.jsx)(`svg`,{viewBox:`0 0 24 24`,width:16,height:16,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),A={share:k((0,E.jsx)(`path`,{d:`M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13`})),copy:k((0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`}),(0,E.jsx)(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})),bell:k((0,E.jsx)(`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`})),filter:k((0,E.jsx)(`path`,{d:`M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z`})),trendingDown:k((0,E.jsx)(`path`,{d:`M16 17h6v-6M22 17l-8.5-8.5-5 5L2 7`}))},j={args:{title:`Title`,description:`Description`,side:`bottom`,align:`center`,actions:!0},argTypes:{side:{control:`inline-radio`,options:[`bottom`,`top`,`left`,`right`]},align:{control:`inline-radio`,options:[`center`,`start`,`end`]},actions:{name:`Actions`}},render:({title:e,description:t,side:n,align:r,actions:a})=>O((0,E.jsxs)(w,{trigger:(0,E.jsx)(i,{variant:`outline`,children:`Open popover`}),title:e||void 0,description:t||void 0,side:n,align:r,defaultOpen:!0,children:[(0,E.jsx)(`p`,{style:{margin:0},children:`Popover body — any content goes here: fields, lists, actions.`}),a&&(0,E.jsxs)(S,{children:[(0,E.jsx)(i,{variant:`outline`,size:`sm`,children:`Copy variable`}),(0,E.jsx)(i,{variant:`ghost`,size:`sm`,children:`View usages`})]})]}),{display:`grid`,placeItems:`center`,minHeight:480})},M={render:function(){let[e,t]=(0,T.useState)(!1);return O((0,E.jsxs)(w,{trigger:(0,E.jsx)(i,{variant:`outline`,leadingIcon:A.share,children:`Share`}),title:`Share this playlist`,description:`Anyone with the link can listen along.`,align:`start`,children:[(0,E.jsx)(l,{"aria-label":`Playlist link`,readOnly:!0,defaultValue:`https://sort.fm/p/late-night-focus`,action:(0,E.jsx)(c,{onClick:()=>t(!0),"aria-label":`Copy link`,children:e?`Copied`:A.copy})}),(0,E.jsx)(p,{label:`Let listeners add songs`})]}))}},N=[{value:`below`,label:`Drops below`},{value:`above`,label:`Rises above`}],P={render:()=>O((0,E.jsxs)(w,{trigger:(0,E.jsx)(i,{variant:`outline`,leadingIcon:A.trendingDown,children:`Price alert`}),title:`Price alert`,description:`We email you when the fare changes.`,align:`start`,children:[(0,E.jsxs)(m,{children:[(0,E.jsx)(g,{label:`When the price`,children:(0,E.jsx)(v,{options:N,defaultValue:`below`})}),(0,E.jsx)(g,{label:`Amount`,children:(0,E.jsx)(l,{defaultValue:`240`,prefix:`€`,inputMode:`numeric`})})]}),(0,E.jsxs)(S,{children:[(0,E.jsx)(C,{children:(0,E.jsx)(i,{size:`sm`,children:`Save alert`})}),(0,E.jsx)(C,{children:(0,E.jsx)(i,{variant:`ghost`,size:`sm`,children:`Cancel`})})]})]}))},F=[{who:`Maya`,what:`added 3 songs to Late night focus`,when:`2 min ago`,unread:!0},{who:`Theo`,what:`started following you`,when:`1 h ago`,unread:!0},{who:`Sort`,what:`Your weekly mix is ready`,when:`Yesterday`,unread:!1}],I={render:()=>O((0,E.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,width:360},children:(0,E.jsxs)(w,{trigger:(0,E.jsx)(i,{variant:`ghost`,icon:A.bell,"aria-label":`Notifications`}),title:`Notifications`,align:`end`,width:`320px`,children:[(0,E.jsx)(`ul`,{style:{display:`grid`,gap:12,margin:0,padding:0,listStyle:`none`},children:F.map(e=>(0,E.jsxs)(`li`,{style:{display:`grid`,gap:2},children:[(0,E.jsxs)(`span`,{children:[(0,E.jsx)(`strong`,{style:{fontWeight:500},children:e.who}),` `,e.what]}),(0,E.jsxs)(`span`,{style:{display:`flex`,gap:8,alignItems:`center`,color:`var(--ds-muted-foreground)`},children:[e.when,` `,e.unread&&(0,E.jsx)(o,{variant:`soft`,children:`New`})]})]},e.who))}),(0,E.jsx)(b,{}),(0,E.jsx)(S,{children:(0,E.jsx)(i,{variant:`ghost`,size:`sm`,children:`Mark all as read`})})]})}))},L={render:()=>O((0,E.jsxs)(w,{trigger:(0,E.jsx)(i,{variant:`outline`,leadingIcon:A.filter,children:`Filters`}),title:`Filters`,align:`start`,children:[(0,E.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,E.jsx)(d,{label:`Free cancellation`,defaultChecked:!0}),(0,E.jsx)(d,{label:`Breakfast included`}),(0,E.jsx)(d,{label:`Pets allowed`})]}),(0,E.jsx)(b,{}),(0,E.jsx)(p,{label:`Only superhosts`,defaultChecked:!0}),(0,E.jsxs)(S,{style:{justifyContent:`space-between`},children:[(0,E.jsx)(i,{variant:`ghost`,size:`sm`,children:`Reset`}),(0,E.jsx)(C,{children:(0,E.jsx)(i,{size:`sm`,children:`Show 128 stays`})})]})]}))},R={render:()=>(0,E.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, max-content)`,gap:`200px 320px`,padding:`200px 320px`,width:`max-content`},children:[`top`,`bottom`,`left`,`right`].map(e=>(0,E.jsx)(w,{trigger:(0,E.jsx)(i,{variant:`outline`,children:e}),title:`Side ${e}`,description:`4 px from the trigger.`,side:e,width:`200px`,defaultOpen:!0},e))})},z={parameters:{layout:`fullscreen`},render:()=>(0,E.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,E.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,minHeight:240},children:(0,E.jsx)(w,{trigger:(0,E.jsx)(i,{variant:`outline`,children:`Share`}),title:`Share this playlist`,description:`Anyone with the link can listen along.`,align:`start`,defaultOpen:!0,children:(0,E.jsxs)(S,{children:[(0,E.jsx)(i,{variant:`outline`,size:`sm`,children:`Copy link`}),(0,E.jsx)(i,{variant:`ghost`,size:`sm`,children:`Invite`})]})})},e))})},B=[`Playground`,`SharePlaylist`,`WithForm`,`Notifications`,`Filters`,`Placement`,`Themes`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    description: 'Description',
    side: 'bottom',
    align: 'center',
    actions: true
  },
  argTypes: {
    side: {
      control: 'inline-radio',
      options: ['bottom', 'top', 'left', 'right']
    },
    align: {
      control: 'inline-radio',
      options: ['center', 'start', 'end']
    },
    actions: {
      name: 'Actions'
    }
  },
  render: ({
    title,
    description,
    side,
    align,
    actions
  }) => stage(<Popover trigger={<Button variant="outline">Open popover</Button>} title={title || undefined} description={description || undefined} side={side} align={align} defaultOpen>
        <p style={{
      margin: 0
    }}>Popover body — any content goes here: fields, lists, actions.</p>
        {actions && <PopoverActions>
            <Button variant="outline" size="sm">
              Copy variable
            </Button>
            <Button variant="ghost" size="sm">
              View usages
            </Button>
          </PopoverActions>}
      </Popover>, {
    display: 'grid',
    placeItems: 'center',
    minHeight: 480
  })
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [copied, setCopied] = useState(false);
    return stage(<Popover trigger={<Button variant="outline" leadingIcon={icons.share}>Share</Button>} title="Share this playlist" description="Anyone with the link can listen along." align="start">
        <Input aria-label="Playlist link" readOnly defaultValue="https://sort.fm/p/late-night-focus" action={<InputAction onClick={() => setCopied(true)} aria-label="Copy link">
              {copied ? 'Copied' : icons.copy}
            </InputAction>} />
        <Switch label="Let listeners add songs" />
      </Popover>);
  }
}`,...M.parameters?.docs?.source},description:{story:`Figma demo "Popover": share a playlist by link.`,...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => stage(<Popover trigger={<Button variant="outline" leadingIcon={icons.trendingDown}>Price alert</Button>} title="Price alert" description="We email you when the fare changes." align="start">
        <FieldGroup>
          <Field label="When the price">
            <Select options={conditions} defaultValue="below" />
          </Field>
          <Field label="Amount">
            <Input defaultValue="240" prefix="€" inputMode="numeric" />
          </Field>
        </FieldGroup>
        <PopoverActions>
          <PopoverClose>
            <Button size="sm">Save alert</Button>
          </PopoverClose>
          <PopoverClose>
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
          </PopoverClose>
        </PopoverActions>
      </Popover>)
}`,...P.parameters?.docs?.source},description:{story:'Figma demo "With form": a price alert set up in the panel; Save closes it with `PopoverClose`.',...P.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => stage(<div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    width: 360
  }}>
        <Popover trigger={<Button variant="ghost" icon={icons.bell} aria-label="Notifications" />} title="Notifications" align="end" width="320px">
          <ul style={{
        display: 'grid',
        gap: 12,
        margin: 0,
        padding: 0,
        listStyle: 'none'
      }}>
            {notifications.map(n => <li key={n.who} style={{
          display: 'grid',
          gap: 2
        }}>
                <span>
                  <strong style={{
              fontWeight: 500
            }}>{n.who}</strong> {n.what}
                </span>
                <span style={{
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            color: 'var(--ds-muted-foreground)'
          }}>
                  {n.when} {n.unread && <Badge variant="soft">New</Badge>}
                </span>
              </li>)}
          </ul>
          <Separator />
          <PopoverActions>
            <Button variant="ghost" size="sm">
              Mark all as read
            </Button>
          </PopoverActions>
        </Popover>
      </div>)
}`,...I.parameters?.docs?.source},description:{story:`Figma demo "Notifications": a list in the panel, opened from an icon button, aligned to its end.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => stage(<Popover trigger={<Button variant="outline" leadingIcon={icons.filter}>Filters</Button>} title="Filters" align="start">
        <div style={{
      display: 'grid',
      gap: 12
    }}>
          <Checkbox label="Free cancellation" defaultChecked />
          <Checkbox label="Breakfast included" />
          <Checkbox label="Pets allowed" />
        </div>
        <Separator />
        <Switch label="Only superhosts" defaultChecked />
        <PopoverActions style={{
      justifyContent: 'space-between'
    }}>
          <Button variant="ghost" size="sm">
            Reset
          </Button>
          <PopoverClose>
            <Button size="sm">Show 128 stays</Button>
          </PopoverClose>
        </PopoverActions>
      </Popover>)
}`,...L.parameters?.docs?.source},description:{story:`Figma demo "Filters": checkboxes and a switch; Reset and the results button.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, max-content)',
    gap: '200px 320px',
    padding: '200px 320px',
    width: 'max-content'
  }}>
      {(['top', 'bottom', 'left', 'right'] as const).map(side => <Popover key={side} trigger={<Button variant="outline">{side}</Button>} title={\`Side \${side}\`} description="4 px from the trigger." side={side} width="200px" defaultOpen />)}
    </div>
}`,...R.parameters?.docs?.source},description:{story:'Figma demo "Placement": the four `side`s, centred on the trigger (`align` lines the panel up with its start or end).',...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
      minHeight: 240
    }}>
          <Popover trigger={<Button variant="outline">Share</Button>} title="Share this playlist" description="Anyone with the link can listen along." align="start" defaultOpen>
            <PopoverActions>
              <Button variant="outline" size="sm">
                Copy link
              </Button>
              <Button variant="ghost" size="sm">
                Invite
              </Button>
            </PopoverActions>
          </Popover>
        </div>)}
    </div>
}`,...z.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...z.parameters?.docs?.description}}}})))()}V();export{L as Filters,I as Notifications,R as Placement,j as Playground,M as SharePlaylist,z as Themes,P as WithForm,B as __namedExportsOrder,D as default};