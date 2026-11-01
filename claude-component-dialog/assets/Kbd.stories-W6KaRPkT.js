import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D0w2wAz3.js";import{n,t as r}from"./Button-C_XYNASa.js";import{v as i,w as a}from"./react-BYXj50ny.js";import{i as o,t as s}from"./Input-CoFZcIao.js";import{n as c,t as l}from"./Tooltip-DLHZfSgF.js";import{n as u,r as d,t as f}from"./Kbd-d1UMNYjI.js";var p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{i(),n(),o(),c(),d(),p=t(),m={title:`Components/Kbd`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Kbd** and **Kbd Group** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=251-2)): `variant` (`default` · `inverted` for dark surfaces), `size` (`default` 20 · `sm` 16 px), `icon` and the key text. `KbdGroup` puts the keys of one shortcut 2 px apart. A symbol can carry a spoken `label` (\"Command\" for ⌘). Input's `shortcut` and Tooltip's `shortcut` draw the same keys."}}}},h={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,letterSpacing:`-0.005em`},g={...h,color:`var(--ds-muted-foreground)`},_=(e,t=12)=>(0,p.jsx)(`svg`,{viewBox:`0 0 24 24`,width:t,height:t,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),v={enter:_((0,p.jsx)(`path`,{d:`M9 10 4 15l5 5M20 4v7a4 4 0 0 1-4 4H4`})),arrowUp:_((0,p.jsx)(`path`,{d:`m5 12 7-7 7 7M12 19V5`})),shuffle:_((0,p.jsx)(`path`,{d:`m18 14 4 4-4 4M18 2l4 4-4 4M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22M2 6h1.972a4 4 0 0 1 3.6 2.2M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45`}),16),previous:_((0,p.jsx)(`path`,{d:`M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432zM3 20V4`}),16),pause:_((0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`}),(0,p.jsx)(`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`})]}),16),next:_((0,p.jsx)(`path`,{d:`M21 4v16M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z`}),16),repeat:_((0,p.jsx)(`path`,{d:`m17 2 4 4-4 4M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v1a4 4 0 0 1-4 4H3`}),16)},y={args:{variant:`default`,size:`default`,keyText:`⌘`,icon:!1},argTypes:{variant:{name:`Variant`,control:`inline-radio`,options:[`default`,`inverted`]},size:{name:`Size`,control:`inline-radio`,options:[`default`,`sm`]},keyText:{name:`Key`},icon:{name:`Icon`}},render:({variant:e,size:t,keyText:n,icon:r})=>(0,p.jsx)(`div`,{style:{display:`inline-flex`,padding:12,borderRadius:8,background:e===`inverted`?`var(--ds-foreground)`:void 0},children:(0,p.jsx)(f,{variant:e,size:t,icon:r?v.enter:void 0,children:n})})},b={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,p.jsx)(f,{children:`⌘`}),(0,p.jsx)(f,{size:`sm`,children:`⌘`})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,padding:8,borderRadius:8,background:`var(--ds-foreground)`},children:[(0,p.jsx)(f,{variant:`inverted`,children:`⌘`}),(0,p.jsx)(f,{variant:`inverted`,size:`sm`,children:`⌘`})]}),(0,p.jsxs)(u,{children:[(0,p.jsx)(f,{children:`⌘`}),(0,p.jsx)(f,{children:`K`})]}),(0,p.jsx)(f,{icon:v.enter,label:`Enter`}),(0,p.jsxs)(u,{children:[(0,p.jsx)(f,{icon:v.arrowUp,label:`Shift`}),(0,p.jsx)(f,{children:`Tab`})]})]})},x={render:()=>{let e=[[`Play or pause`,(0,p.jsx)(f,{children:`Space`},`space`)],[`Next track`,(0,p.jsxs)(u,{children:[(0,p.jsx)(f,{label:`Command`,children:`⌘`}),(0,p.jsx)(f,{label:`Right arrow`,children:`→`})]},`next`)],[`Previous track`,(0,p.jsxs)(u,{children:[(0,p.jsx)(f,{label:`Command`,children:`⌘`}),(0,p.jsx)(f,{label:`Left arrow`,children:`←`})]},`previous`)],[`Like the song`,(0,p.jsx)(f,{children:`L`},`like`)],[`Search`,(0,p.jsxs)(u,{children:[(0,p.jsx)(f,{label:`Command`,children:`⌘`}),(0,p.jsx)(f,{children:`K`})]},`search`)]];return(0,p.jsxs)(`div`,{style:{display:`grid`,gap:12,width:320},children:[(0,p.jsx)(`span`,{style:{...h,color:`var(--ds-foreground)`,fontWeight:500},children:`Keyboard shortcuts`}),(0,p.jsx)(`dl`,{style:{display:`grid`,gap:12,margin:0},children:e.map(([e,t])=>(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,p.jsx)(`dt`,{style:g,children:e}),(0,p.jsx)(`dd`,{style:{margin:0,display:`flex`},children:t})]},e))})]})}},S={render:()=>(0,p.jsxs)(`div`,{style:{display:`grid`,gap:16,width:320},children:[(0,p.jsx)(s,{"aria-label":`Search`,placeholder:`Search songs, artists, podcasts`,leadIcon:(0,p.jsx)(a,{}),"aria-keyshortcuts":`Meta+K`,suffix:(0,p.jsxs)(u,{"aria-hidden":!0,children:[(0,p.jsx)(f,{children:`⌘`}),(0,p.jsx)(f,{children:`K`})]})}),(0,p.jsx)(s,{"aria-label":`Message`,placeholder:`Write a message`,shortcut:`↵`})]})},C={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,paddingTop:48},children:[(0,p.jsx)(r,{variant:`ghost`,icon:v.shuffle,"aria-label":`Shuffle`}),(0,p.jsx)(r,{variant:`ghost`,icon:v.previous,"aria-label":`Previous`}),(0,p.jsx)(l,{content:`Pause`,shortcut:[`Space`],open:!0,children:(0,p.jsx)(r,{icon:v.pause,"aria-label":`Pause`})}),(0,p.jsx)(r,{variant:`ghost`,icon:v.next,"aria-label":`Next`}),(0,p.jsx)(r,{variant:`ghost`,icon:v.repeat,"aria-label":`Repeat`})]})},w={parameters:{layout:`fullscreen`},render:()=>(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,p.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`flex`,gap:16,alignItems:`center`},children:[(0,p.jsxs)(u,{children:[(0,p.jsx)(f,{children:`⌘`}),(0,p.jsx)(f,{children:`K`})]}),(0,p.jsx)(f,{size:`sm`,children:`Esc`}),(0,p.jsx)(`span`,{style:{display:`inline-flex`,gap:2,padding:6,borderRadius:6,background:`var(--ds-foreground)`},children:(0,p.jsx)(f,{variant:`inverted`,size:`sm`,children:`Space`})})]},e))})},T=[`Playground`,`VariantsAndSizes`,`Shortcuts`,`InAnInput`,`InATooltip`,`Themes`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    keyText: '⌘',
    icon: false
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: 'inline-radio',
      options: ['default', 'inverted']
    },
    size: {
      name: 'Size',
      control: 'inline-radio',
      options: ['default', 'sm']
    },
    keyText: {
      name: 'Key'
    },
    icon: {
      name: 'Icon'
    }
  },
  render: ({
    variant,
    size,
    keyText,
    icon: withIcon
  }) => <div style={{
    display: 'inline-flex',
    padding: 12,
    borderRadius: 8,
    background: variant === 'inverted' ? 'var(--ds-foreground)' : undefined
  }}>
      <Kbd variant={variant} size={size} icon={withIcon ? icons.enter : undefined}>
        {keyText}
      </Kbd>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
        <Kbd>⌘</Kbd>
        <Kbd size="sm">⌘</Kbd>
      </div>
      <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      padding: 8,
      borderRadius: 8,
      background: 'var(--ds-foreground)'
    }}>
        <Kbd variant="inverted">⌘</Kbd>
        <Kbd variant="inverted" size="sm">
          ⌘
        </Kbd>
      </div>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <Kbd icon={icons.enter} label="Enter" />
      <KbdGroup>
        <Kbd icon={icons.arrowUp} label="Shift" />
        <Kbd>Tab</Kbd>
      </KbdGroup>
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Figma Variant × Size; Inverted on the Tooltip's dark surface, where it is used.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rows: [string, ReactNode][] = [['Play or pause', <Kbd key="space">Space</Kbd>], ['Next track', <KbdGroup key="next">
          <Kbd label="Command">⌘</Kbd>
          <Kbd label="Right arrow">→</Kbd>
        </KbdGroup>], ['Previous track', <KbdGroup key="previous">
          <Kbd label="Command">⌘</Kbd>
          <Kbd label="Left arrow">←</Kbd>
        </KbdGroup>], ['Like the song', <Kbd key="like">L</Kbd>], ['Search', <KbdGroup key="search">
          <Kbd label="Command">⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>]];
    return <div style={{
      display: 'grid',
      gap: 12,
      width: 320
    }}>
        <span style={{
        ...text,
        color: 'var(--ds-foreground)',
        fontWeight: 500
      }}>Keyboard shortcuts</span>
        <dl style={{
        display: 'grid',
        gap: 12,
        margin: 0
      }}>
          {rows.map(([action, keys]) => <div key={action} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
              <dt style={muted}>{action}</dt>
              <dd style={{
            margin: 0,
            display: 'flex'
          }}>{keys}</dd>
            </div>)}
        </dl>
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:`Figma demo "Kbd": a list of shortcuts; symbols carry spoken names.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    width: 320
  }}>
      <Input aria-label="Search" placeholder="Search songs, artists, podcasts" leadIcon={<RiSearchLine />} aria-keyshortcuts="Meta+K" suffix={<KbdGroup aria-hidden>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>} />
      <Input aria-label="Message" placeholder="Write a message" shortcut="↵" />
    </div>
}`,...S.parameters?.docs?.source},description:{story:'Figma demo "In an input": Input\'s `shortcut` draws a key and sets `aria-keyshortcuts`; a Kbd Group goes in `suffix`.',...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    paddingTop: 48
  }}>
      <Button variant="ghost" icon={icons.shuffle} aria-label="Shuffle" />
      <Button variant="ghost" icon={icons.previous} aria-label="Previous" />
      <Tooltip content="Pause" shortcut={['Space']} open>
        <Button icon={icons.pause} aria-label="Pause" />
      </Tooltip>
      <Button variant="ghost" icon={icons.next} aria-label="Next" />
      <Button variant="ghost" icon={icons.repeat} aria-label="Repeat" />
    </div>
}`,...C.parameters?.docs?.source},description:{story:'Figma demo "In a tooltip": Tooltip\'s `shortcut` draws Inverted sm keys.',...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }}>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
          <Kbd size="sm">Esc</Kbd>
          <span style={{
        display: 'inline-flex',
        gap: 2,
        padding: 6,
        borderRadius: 6,
        background: 'var(--ds-foreground)'
      }}>
            <Kbd variant="inverted" size="sm">
              Space
            </Kbd>
          </span>
        </div>)}
    </div>
}`,...w.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...w.parameters?.docs?.description}}}})))()}E();export{C as InATooltip,S as InAnInput,y as Playground,x as Shortcuts,w as Themes,b as VariantsAndSizes,T as __namedExportsOrder,m as default};