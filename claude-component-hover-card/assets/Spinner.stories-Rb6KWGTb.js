import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BGJ9go0F.js";import{n,t as r}from"./Button-DjBdDn14.js";import{n as i,t as a}from"./Spinner-BXHTcd8g.js";var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),o=t(),s={title:`Components/Spinner`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Spinner** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=259-3)): `variant` (`default` · `gradient`) and `size` (`sm` 12 · `default` 16 · `lg` 20 · `xl` 24 px). Default draws the arc in the current text colour, so it follows buttons and muted text. It is a `role="status"` named "Loading" (`label` changes it); `decorative` hides it when the text next to it already says what is happening. With reduced motion it turns slowly.'}}}},c={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,letterSpacing:`-0.005em`},l={...c,color:`var(--ds-muted-foreground)`},u={...c,color:`var(--ds-foreground)`},d={args:{variant:`default`,size:`default`,label:`Loading`,decorative:!1},argTypes:{variant:{name:`Variant`,control:`inline-radio`,options:[`default`,`gradient`]},size:{name:`Size`,control:`inline-radio`,options:[`sm`,`default`,`lg`,`xl`]},label:{name:`Label`,description:`What screen readers hear`},decorative:{name:`Decorative`,description:`Hidden from screen readers`}},render:e=>(0,o.jsx)(`span`,{style:{color:`var(--ds-foreground)`},children:(0,o.jsx)(a,{...e})})},f={render:()=>(0,o.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 48px)`,alignItems:`center`,justifyItems:`center`,gap:24,color:`var(--ds-foreground)`},children:[`default`,`gradient`].flatMap(e=>[`sm`,`default`,`lg`,`xl`].map(t=>(0,o.jsx)(a,{variant:e,size:t,label:`Loading (${e}, ${t})`},`${e}-${t}`)))})},p={render:()=>(0,o.jsxs)(`div`,{role:`status`,style:{display:`flex`,alignItems:`flex-start`,gap:14,boxSizing:`border-box`,width:384,padding:`12px 14px`,borderRadius:16,background:`var(--ds-fill-1)`},children:[(0,o.jsx)(`span`,{style:{display:`flex`,paddingTop:2,color:`var(--ds-foreground)`},children:(0,o.jsx)(a,{decorative:!0})}),(0,o.jsxs)(`div`,{style:{flex:1,display:`grid`,gap:4},children:[(0,o.jsx)(`span`,{style:{...u,fontWeight:500},children:`Processing payment…`}),(0,o.jsx)(`span`,{style:l,children:`Visa ending in 4242`})]}),(0,o.jsx)(`span`,{style:{...u,fontWeight:500,alignSelf:`center`},children:`$129.00`})]})},m={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,o.jsx)(r,{disabled:!0,leadingIcon:(0,o.jsx)(a,{decorative:!0}),children:`Please wait`}),(0,o.jsx)(r,{variant:`outline`,disabled:!0,leadingIcon:(0,o.jsx)(a,{decorative:!0}),children:`Saving…`}),(0,o.jsx)(r,{variant:`secondary`,disabled:!0,leadingIcon:(0,o.jsx)(a,{decorative:!0}),children:`Uploading 3 photos`})]})},h={render:()=>(0,o.jsxs)(`div`,{role:`status`,style:{display:`grid`,justifyItems:`center`,gap:16,boxSizing:`border-box`,width:384,padding:24,textAlign:`center`},children:[(0,o.jsx)(`span`,{style:{display:`grid`,placeItems:`center`,width:32,height:32,borderRadius:8,background:`var(--ds-fill-2)`,color:`var(--ds-foreground)`},children:(0,o.jsx)(a,{decorative:!0})}),(0,o.jsxs)(`div`,{style:{display:`grid`,gap:4},children:[(0,o.jsx)(`span`,{style:{...u,fontSize:16,lineHeight:`24px`,fontWeight:500},children:`Syncing your library`}),(0,o.jsx)(`span`,{style:l,children:`This can take a minute. Keep listening while we bring your playlists up to date.`})]}),(0,o.jsx)(r,{variant:`outline`,size:`sm`,children:`Cancel`})]})},g={parameters:{layout:`fullscreen`},render:()=>(0,o.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,o.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,color:`var(--ds-foreground)`,padding:24,display:`flex`,gap:24,alignItems:`center`},children:[(0,o.jsx)(a,{size:`lg`,label:`Loading (${e})`}),(0,o.jsx)(a,{variant:`gradient`,size:`lg`,label:`Loading (${e}, gradient)`}),(0,o.jsx)(r,{disabled:!0,leadingIcon:(0,o.jsx)(a,{decorative:!0}),children:`Please wait`})]},e))})},_=[`Playground`,`VariantsAndSizes`,`InARow`,`InButtons`,`EmptyState`,`Themes`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    label: 'Loading',
    decorative: false
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: 'inline-radio',
      options: ['default', 'gradient']
    },
    size: {
      name: 'Size',
      control: 'inline-radio',
      options: ['sm', 'default', 'lg', 'xl']
    },
    label: {
      name: 'Label',
      description: 'What screen readers hear'
    },
    decorative: {
      name: 'Decorative',
      description: 'Hidden from screen readers'
    }
  },
  render: args => <span style={{
    color: 'var(--ds-foreground)'
  }}>
      <Spinner {...args} />
    </span>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 48px)',
    alignItems: 'center',
    justifyItems: 'center',
    gap: 24,
    color: 'var(--ds-foreground)'
  }}>
      {(['default', 'gradient'] as const).flatMap(variant => (['sm', 'default', 'lg', 'xl'] as const).map(size => <Spinner key={\`\${variant}-\${size}\`} variant={variant} size={size} label={\`Loading (\${variant}, \${size})\`} />))}
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Figma Variant × Size.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div role="status" style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 14,
    boxSizing: 'border-box',
    width: 384,
    padding: '12px 14px',
    borderRadius: 16,
    background: 'var(--ds-fill-1)'
  }}>
      <span style={{
      display: 'flex',
      paddingTop: 2,
      color: 'var(--ds-foreground)'
    }}>
        <Spinner decorative />
      </span>
      <div style={{
      flex: 1,
      display: 'grid',
      gap: 4
    }}>
        <span style={{
        ...strong,
        fontWeight: 500
      }}>Processing payment…</span>
        <span style={muted}>Visa ending in 4242</span>
      </div>
      <span style={{
      ...strong,
      fontWeight: 500,
      alignSelf: 'center'
    }}>$129.00</span>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Figma demo "Spinner": a payment in progress; the row's text says what is happening, so the spinner is decorative.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Button disabled leadingIcon={<Spinner decorative />}>
        Please wait
      </Button>
      <Button variant="outline" disabled leadingIcon={<Spinner decorative />}>
        Saving…
      </Button>
      <Button variant="secondary" disabled leadingIcon={<Spinner decorative />}>
        Uploading 3 photos
      </Button>
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Figma demo "In buttons": a disabled button shows the spinner in its label colour while it works.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div role="status" style={{
    display: 'grid',
    justifyItems: 'center',
    gap: 16,
    boxSizing: 'border-box',
    width: 384,
    padding: 24,
    textAlign: 'center'
  }}>
      <span style={{
      display: 'grid',
      placeItems: 'center',
      width: 32,
      height: 32,
      borderRadius: 8,
      background: 'var(--ds-fill-2)',
      color: 'var(--ds-foreground)'
    }}>
        <Spinner decorative />
      </span>
      <div style={{
      display: 'grid',
      gap: 4
    }}>
        <span style={{
        ...strong,
        fontSize: 16,
        lineHeight: '24px',
        fontWeight: 500
      }}>Syncing your library</span>
        <span style={muted}>This can take a minute. Keep listening while we bring your playlists up to date.</span>
      </div>
      <Button variant="outline" size="sm">
        Cancel
      </Button>
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Figma demo "Empty state": a sync in progress, with a way out.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      color: 'var(--ds-foreground)',
      padding: 24,
      display: 'flex',
      gap: 24,
      alignItems: 'center'
    }}>
          <Spinner size="lg" label={\`Loading (\${scheme})\`} />
          <Spinner variant="gradient" size="lg" label={\`Loading (\${scheme}, gradient)\`} />
          <Button disabled leadingIcon={<Spinner decorative />}>
            Please wait
          </Button>
        </div>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...g.parameters?.docs?.description}}}})))()}v();export{h as EmptyState,p as InARow,m as InButtons,d as Playground,g as Themes,f as VariantsAndSizes,_ as __namedExportsOrder,s as default};