import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BsDq8Vx-.js";import{n as r,t as i}from"./Button-B-Mwxkqi.js";import{n as a,t as o}from"./Toggle-6FYxM8gy.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{s=n(),r(),a(),c=t(),l={title:`Components/Toggle`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Toggle** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=126-1117)): a button that is on or off — `variant` (`default` · `outline`), `size` (`sm` · `default` · `lg`), Figma Pressed → `pressed` / `defaultPressed` / `onPressedChange`, `leadingIcon`, `trailingIcon`, and `icon` for a square icon-only toggle (Figma "Show Label" off; give it an `aria-label`). It is a `<button aria-pressed>`: Space and Enter flip it, and screen readers say "pressed" or "not pressed". Use Switch for a setting that takes effect at once, Toggle Group for a set of options.'}}}},u=e=>(0,c.jsx)(`svg`,{viewBox:`0 0 24 24`,width:16,height:16,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),d={monitor:u((0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`rect`,{width:`20`,height:`14`,x:`2`,y:`3`,rx:`2`}),(0,c.jsx)(`path`,{d:`M8 21h8M12 17v4`})]})),phone:u((0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`}),(0,c.jsx)(`path`,{d:`M12 18h.01`})]})),ban:u((0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,c.jsx)(`path`,{d:`m4.9 4.9 14.2 14.2`})]})),loader:u((0,c.jsx)(`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`})),bookmark:u((0,c.jsx)(`path`,{d:`m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z`})),bold:u((0,c.jsx)(`path`,{d:`M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8`}))},f={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,color:`var(--ds-foreground)`},p={...f,color:`var(--ds-muted-foreground)`},m={args:{variant:`default`,size:`default`,label:`Toggle`,showLabel:!0,leadingIcon:!1,disabled:!1},argTypes:{variant:{name:`Variant`,control:`inline-radio`,options:[`default`,`outline`]},size:{name:`Size`,control:`inline-radio`,options:[`sm`,`default`,`lg`]},label:{name:`Label`},showLabel:{name:`Show Label`},leadingIcon:{name:`Leading Icon`}},render:({variant:e,size:t,label:n,showLabel:r,leadingIcon:i,disabled:a})=>r?(0,c.jsx)(o,{variant:e,size:t,disabled:a,leadingIcon:i?d.bookmark:void 0,children:n}):(0,c.jsx)(o,{variant:e,size:t,disabled:a,icon:d.bookmark,"aria-label":n||`Toggle`})},h={render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, max-content)`,gap:12,alignItems:`center`},children:[`default`,`outline`].map(e=>(0,c.jsxs)(`div`,{style:{display:`contents`},children:[(0,c.jsx)(o,{variant:e,children:`Off`}),(0,c.jsx)(o,{variant:e,defaultPressed:!0,children:`On`}),(0,c.jsx)(o,{variant:e,disabled:!0,children:`Disabled`})]},e))})},g={render:function(){let[e,t]=(0,s.useState)(`desktop`),[n,r]=(0,s.useState)(!1),[a,l]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:16,width:`min(420px, 100%)`},children:[(0,c.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:12},children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:{...f,fontWeight:500},children:`Product page`}),(0,c.jsx)(`div`,{style:p,children:`Store preview · Autumn collection`})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:4},children:[(0,c.jsx)(o,{icon:d.monitor,"aria-label":`Desktop preview`,pressed:e===`desktop`,onPressedChange:()=>t(`desktop`)}),(0,c.jsx)(o,{icon:d.phone,"aria-label":`Mobile preview`,pressed:e===`mobile`,onPressedChange:()=>t(`mobile`)})]})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,c.jsx)(o,{leadingIcon:d.ban,pressed:n,onPressedChange:r,children:`Sold out`}),(0,c.jsx)(o,{leadingIcon:d.loader,pressed:a,onPressedChange:l,children:`Loading`})]}),(0,c.jsxs)(`div`,{style:{display:`grid`,placeItems:`center`,gap:8,padding:24,borderRadius:12,background:`var(--ds-muted)`,width:e===`mobile`?220:`auto`,justifySelf:`center`},children:[(0,c.jsx)(i,{disabled:n||a,children:a?`Adding…`:n?`Sold out`:`Add to cart`}),(0,c.jsxs)(`span`,{style:p,children:[`Buy button · `,n?`Sold out`:`In stock`]})]})]})}},_=[`Art`,`Work`,`Drawings`,`Shopping`,`Tech`,`Creative Writing`],v=[`Eyeshadow`,`Soft Life`,`WorkMade`,`Spectrum`,`Connecting`,`Motion`],y={render:function(){let[e,t]=(0,s.useState)(new Set([`Art`,`Drawings`,`Shopping`,`Soft Life`,`WorkMade`])),n=e=>t(t=>new Set(t.has(e)?[...t].filter(t=>t!==e):[...t,e])),r=(t,r,i)=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,c.jsx)(`span`,{style:p,children:t}),(0,c.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:r.map(t=>(0,c.jsx)(o,{variant:i,pressed:e.has(t),onPressedChange:()=>n(t),children:t},t))})]});return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:20,maxWidth:480},children:[r(`Filter by Tags`,_,`default`),r(`Clusters`,v,`outline`)]})}},b={render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gap:12},children:[[`sm`,`Small`],[`default`,`Default`],[`lg`,`Large`]].map(([e,t])=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,c.jsx)(o,{variant:`outline`,size:e,icon:d.bold,"aria-label":`Bold, ${t.toLowerCase()}`}),(0,c.jsx)(o,{variant:`outline`,size:e,children:t})]},e))})},x={parameters:{layout:`fullscreen`},render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,c.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,c.jsx)(o,{children:`Off`}),(0,c.jsx)(o,{defaultPressed:!0,children:`On`}),(0,c.jsx)(o,{variant:`outline`,children:`Off`}),(0,c.jsx)(o,{variant:`outline`,defaultPressed:!0,children:`On`}),(0,c.jsx)(o,{icon:d.bold,"aria-label":`Bold`,defaultPressed:!0})]},e))})},S=[`Playground`,`States`,`ProductPage`,`Variants`,`Sizes`,`Themes`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    label: 'Toggle',
    showLabel: true,
    leadingIcon: false,
    disabled: false
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: 'inline-radio',
      options: ['default', 'outline']
    },
    size: {
      name: 'Size',
      control: 'inline-radio',
      options: ['sm', 'default', 'lg']
    },
    label: {
      name: 'Label'
    },
    showLabel: {
      name: 'Show Label'
    },
    leadingIcon: {
      name: 'Leading Icon'
    }
  },
  render: ({
    variant,
    size,
    label,
    showLabel,
    leadingIcon,
    disabled
  }) => showLabel ? <Toggle variant={variant} size={size} disabled={disabled} leadingIcon={leadingIcon ? icons.bookmark : undefined}>
        {label}
      </Toggle> : <Toggle variant={variant} size={size} disabled={disabled} icon={icons.bookmark} aria-label={label || 'Toggle'} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, max-content)',
    gap: 12,
    alignItems: 'center'
  }}>
      {(['default', 'outline'] as const).map(variant => <div key={variant} style={{
      display: 'contents'
    }}>
          <Toggle variant={variant}>Off</Toggle>
          <Toggle variant={variant} defaultPressed>
            On
          </Toggle>
          <Toggle variant={variant} disabled>
            Disabled
          </Toggle>
        </div>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Figma Variant × Pressed, and Disabled.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [view, setView] = useState<'desktop' | 'mobile'>('desktop');
    const [soldOut, setSoldOut] = useState(false);
    const [loading, setLoading] = useState(false);
    return <div style={{
      display: 'grid',
      gap: 16,
      width: 'min(420px, 100%)'
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12
      }}>
          <div>
            <div style={{
            ...text,
            fontWeight: 500
          }}>Product page</div>
            <div style={muted}>Store preview · Autumn collection</div>
          </div>
          <div style={{
          display: 'flex',
          gap: 4
        }}>
            <Toggle icon={icons.monitor} aria-label="Desktop preview" pressed={view === 'desktop'} onPressedChange={() => setView('desktop')} />
            <Toggle icon={icons.phone} aria-label="Mobile preview" pressed={view === 'mobile'} onPressedChange={() => setView('mobile')} />
          </div>
        </div>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Toggle leadingIcon={icons.ban} pressed={soldOut} onPressedChange={setSoldOut}>
            Sold out
          </Toggle>
          <Toggle leadingIcon={icons.loader} pressed={loading} onPressedChange={setLoading}>
            Loading
          </Toggle>
        </div>
        <div style={{
        display: 'grid',
        placeItems: 'center',
        gap: 8,
        padding: 24,
        borderRadius: 12,
        background: 'var(--ds-muted)',
        width: view === 'mobile' ? 220 : 'auto',
        justifySelf: 'center'
      }}>
          <Button disabled={soldOut || loading}>{loading ? 'Adding…' : soldOut ? 'Sold out' : 'Add to cart'}</Button>
          <span style={muted}>Buy button · {soldOut ? 'Sold out' : 'In stock'}</span>
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Figma demo "Toggle": a store preview with a view switch (icon only) and preview states with icons.`,...g.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [on, setOn] = useState(new Set(['Art', 'Drawings', 'Shopping', 'Soft Life', 'WorkMade']));
    const flip = (tag: string) => setOn(s => new Set(s.has(tag) ? [...s].filter(t => t !== tag) : [...s, tag]));
    const row = (title: string, list: string[], variant: ToggleVariant) => <div style={{
      display: 'grid',
      gap: 8
    }}>
        <span style={muted}>{title}</span>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }}>
          {list.map(t => <Toggle key={t} variant={variant} pressed={on.has(t)} onPressedChange={() => flip(t)}>
              {t}
            </Toggle>)}
        </div>
      </div>;
    return <div style={{
      display: 'grid',
      gap: 20,
      maxWidth: 480
    }}>
        {row('Filter by Tags', tags, 'default')}
        {row('Clusters', clusters, 'outline')}
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:`Figma demo "Variants": tag filters as Default toggles and clusters as Outline toggles.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      {([['sm', 'Small'], ['default', 'Default'], ['lg', 'Large']] as const).map(([size, label]) => <div key={size} style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
          <Toggle variant="outline" size={size} icon={icons.bold} aria-label={\`Bold, \${label.toLowerCase()}\`} />
          <Toggle variant="outline" size={size}>
            {label}
          </Toggle>
        </div>)}
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Figma demo "Sizes": sm, default and lg, icon only and with a label.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      gap: 8,
      flexWrap: 'wrap'
    }}>
          <Toggle>Off</Toggle>
          <Toggle defaultPressed>On</Toggle>
          <Toggle variant="outline">Off</Toggle>
          <Toggle variant="outline" defaultPressed>
            On
          </Toggle>
          <Toggle icon={icons.bold} aria-label="Bold" defaultPressed />
        </div>)}
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...x.parameters?.docs?.description}}}})))()}C();export{m as Playground,g as ProductPage,b as Sizes,h as States,x as Themes,y as Variants,S as __namedExportsOrder,l as default};