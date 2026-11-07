import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DRlbVK03.js";import{n,t as r}from"./Button-CkfjvTAk.js";import{o as i,t as a,u as o}from"./react-BDUiJqIW.js";import{n as s,r as c,t as l}from"./Input-Dv60L4rh.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{i(),n(),c(),u=t(),d=`https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=82-50`,f=[`default`,`shadow`,`soft`],p=[`xl`,`lg`,`default`],m={title:`Components/Input`,parameters:{docs:{description:{component:`Implements the Sort UI 2.0 component sets **Input** ([open in Figma](${d})), **Input Group** (icons, inline text, Kbd and the button slot) and **Field** (label, description, error). \`size\` is Figma Size: \`xl\` (40 px), \`lg\` (36 px), \`default\` (32 px), the same heights as Button's sizes of the same name. Focus is \`:focus-within\`, Invalid is \`error\`, Disabled is \`disabled\`. Sort UI 2.0 has a single input style: \`default\` is it, \`shadow\` adds Shadow/xs and \`soft\` is a borderless tinted field. Styles come from \`@helloantek/ds-css\`, so the same classes work outside React.`}}},decorators:[e=>(0,u.jsx)(`div`,{style:{width:320},children:e()})]},h={args:{label:`Label`,caption:`Caption text`,error:``,placeholder:`mail@domain.com`,variant:`default`,size:`default`,disabled:!1,leadIcon:!0,tailIcon:!0,shortcut:``,prefix:``,suffix:``,addons:!1,action:``},argTypes:{variant:{control:`inline-radio`,options:f},size:{control:`inline-radio`,options:p},addons:{description:`Show prefix/suffix as joined segments (Add-on) instead of inline (Inline add-on)`}},render:({leadIcon:e,tailIcon:t,error:n,shortcut:r,prefix:i,suffix:c,addons:d,action:f,...p})=>(0,u.jsx)(l,{...p,error:n||void 0,leadIcon:e?(0,u.jsx)(a,{}):void 0,tailIcon:t?(0,u.jsx)(o,{}):void 0,shortcut:r||void 0,prefix:!d&&i?i:void 0,suffix:!d&&c?c:void 0,addonBefore:d&&i?i:void 0,addonAfter:d&&c?c:void 0,action:f?(0,u.jsx)(s,{children:f}):void 0})},g={Default:{placeholder:`mail@domain.com`,leadIcon:(0,u.jsx)(a,{}),tailIcon:(0,u.jsx)(o,{})},Shortcut:{placeholder:`Search`,leadIcon:(0,u.jsx)(a,{}),shortcut:`/`},"Add-on":{placeholder:`domain`,tailIcon:(0,u.jsx)(o,{}),addonBefore:`https://`,addonAfter:`.com`},"Inline add-on":{placeholder:`domain`,tailIcon:(0,u.jsx)(o,{}),prefix:`https://`,suffix:`.com`},"Tail button":{placeholder:`mail@domain.com`,leadIcon:(0,u.jsx)(a,{}),tailIcon:(0,u.jsx)(o,{}),action:(0,u.jsx)(s,{children:`Send`})}},_=e=>({display:`grid`,gridTemplateColumns:`repeat(${e}, 280px)`,gap:24,fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`}),v={decorators:[e=>(0,u.jsx)(`div`,{style:{width:`auto`},children:e()})],render:()=>(0,u.jsxs)(`div`,{style:_(4),children:[(0,u.jsx)(`span`,{children:`Placeholder`}),(0,u.jsx)(`span`,{children:`Filled`}),(0,u.jsx)(`span`,{children:`Invalid`}),(0,u.jsx)(`span`,{children:`Disabled`}),Object.entries(g).map(([e,t])=>(0,u.jsxs)(`div`,{style:{display:`contents`},children:[(0,u.jsx)(l,{...t,label:e,caption:`Caption text`}),(0,u.jsx)(l,{...t,label:e,caption:`Caption text`,defaultValue:e===`Shortcut`?`design system`:`apple`}),(0,u.jsx)(l,{...t,label:e,error:`Error message`}),(0,u.jsx)(l,{...t,label:e,caption:`Caption text`,disabled:!0})]},e))]})},y={decorators:[e=>(0,u.jsx)(`div`,{style:{width:`auto`},children:e()})],render:()=>(0,u.jsx)(`div`,{style:_(3),children:f.map(e=>(0,u.jsx)(l,{variant:e,label:e,caption:`Caption text`,...g.Default},e))})},b={decorators:[e=>(0,u.jsx)(`div`,{style:{width:`auto`},children:e()})],render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gap:16},children:p.map(e=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`flex-end`,width:400},children:[(0,u.jsx)(l,{size:e,label:e,placeholder:`mail@domain.com`,leadIcon:(0,u.jsx)(a,{})}),(0,u.jsx)(r,{size:e,children:`Subscribe`})]},e))})},x={parameters:{layout:`fullscreen`},decorators:[e=>(0,u.jsx)(`div`,{style:{width:`auto`},children:e()})],render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,u.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16},children:[(0,u.jsx)(`div`,{style:{fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},children:e===`light`?`Light`:`Dark`}),f.map(e=>(0,u.jsx)(l,{variant:e,label:e,caption:`Caption text`,...g.Default},e)),(0,u.jsx)(l,{label:`Invalid`,error:`Error message`,defaultValue:`hey@sortui`,...g[`Tail button`]}),(0,u.jsx)(l,{label:`Disabled`,caption:`Caption text`,disabled:!0,...g.Shortcut})]},e))})},S=[`Playground`,`AllVariants`,`Styles`,`Sizes`,`Themes`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    caption: 'Caption text',
    error: '',
    placeholder: 'mail@domain.com',
    variant: 'default',
    size: 'default',
    disabled: false,
    leadIcon: true,
    tailIcon: true,
    shortcut: '',
    prefix: '',
    suffix: '',
    addons: false,
    action: ''
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: variants
    },
    size: {
      control: 'inline-radio',
      options: sizes
    },
    addons: {
      description: 'Show prefix/suffix as joined segments (Add-on) instead of inline (Inline add-on)'
    }
  },
  render: ({
    leadIcon,
    tailIcon,
    error,
    shortcut,
    prefix,
    suffix,
    addons,
    action,
    ...props
  }) => <Input {...props} error={error || undefined} leadIcon={leadIcon ? <RiAtLine /> : undefined} tailIcon={tailIcon ? <RiInformationFill /> : undefined} shortcut={shortcut || undefined} prefix={!addons && prefix ? prefix : undefined} suffix={!addons && suffix ? suffix : undefined} addonBefore={addons && prefix ? prefix : undefined} addonAfter={addons && suffix ? suffix : undefined} action={action ? <InputAction>{action}</InputAction> : undefined} />
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 'auto'
  }}>{Story()}</div>],
  render: () => <div style={grid(4)}>
      <span>Placeholder</span>
      <span>Filled</span>
      <span>Invalid</span>
      <span>Disabled</span>
      {Object.entries(kinds).map(([name, props]) => <div key={name} style={{
      display: 'contents'
    }}>
          <Input {...props} label={name} caption="Caption text" />
          <Input {...props} label={name} caption="Caption text" defaultValue={name === 'Shortcut' ? 'design system' : 'apple'} />
          <Input {...props} label={name} error="Error message" />
          <Input {...props} label={name} caption="Caption text" disabled />
        </div>)}
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Every slot combination in the static states. Focus an input to see Focus.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 'auto'
  }}>{Story()}</div>],
  render: () => <div style={grid(3)}>
      {variants.map(variant => <Input key={variant} variant={variant} label={variant} caption="Caption text" {...kinds.Default} />)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 'auto'
  }}>{Story()}</div>],
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>
      {sizes.map(size => <div key={size} style={{
      display: 'flex',
      gap: 8,
      alignItems: 'flex-end',
      width: 400
    }}>
          <Input size={size} label={size} placeholder="mail@domain.com" leadIcon={<RiAtLine />} />
          <Button size={size}>Subscribe</Button>
        </div>)}
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Figma Size: 40, 36 and 32 px, next to the Button of the same size.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [Story => <div style={{
    width: 'auto'
  }}>{Story()}</div>],
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24,
      display: 'grid',
      gap: 16
    }}>
          <div style={{
        fontFamily: 'var(--ds-font-sans)',
        fontSize: 12,
        color: 'var(--ds-muted-foreground)'
      }}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          {variants.map(variant => <Input key={variant} variant={variant} label={variant} caption="Caption text" {...kinds.Default} />)}
          <Input label="Invalid" error="Error message" defaultValue="hey@sortui" {...kinds['Tail button']} />
          <Input label="Disabled" caption="Caption text" disabled {...kinds.Shortcut} />
        </div>)}
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...x.parameters?.docs?.description}}}})))()}C();export{v as AllVariants,h as Playground,b as Sizes,y as Styles,x as Themes,S as __namedExportsOrder,m as default};