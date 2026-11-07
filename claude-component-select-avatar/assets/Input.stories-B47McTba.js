import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,n,r}from"./iframe-CstJk0Ua.js";import{l as i,m as a,t as o}from"./react-AjRyaesz.js";import{n as s,r as c,t as l}from"./Input-paymyvkk.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{i(),t(),c(),u=n(),d=`https://www.figma.com/design/4tiBR2hKd4yvQehtKhM9OY?node-id=3780-4518`,f=[`default`,`shadow`,`soft`],p=[`lg`,`sm`],m={title:`Components/Input`,parameters:{docs:{description:{component:`Implements the Figma component set **Input** ([open in Figma](${d})) for Figma Variant = Default, Shortcut, Add-on, Inline add-on and Tail button. Figma "Style" → \`variant\`, "Size" → \`size\`; Active is \`:focus-within\`, Failed is \`error\`, Disabled is \`disabled\`. Styles come from \`@helloantek/ds-css\`, so the same classes work outside React. Dropdown, Tags, Quantity and Lead button (file) variants are separate components (see the README).`}}},decorators:[e=>(0,u.jsx)(`div`,{style:{width:320},children:e()})]},h={args:{label:`Label`,caption:`Caption text`,error:``,placeholder:`mail@domain.com`,variant:`default`,size:`lg`,disabled:!1,leadIcon:!0,tailIcon:!0,shortcut:``,prefix:``,suffix:``,addons:!1,action:``},argTypes:{variant:{control:`inline-radio`,options:f},size:{control:`inline-radio`,options:p},addons:{description:`Show prefix/suffix as joined segments (Add-on) instead of inline (Inline add-on)`}},render:({leadIcon:e,tailIcon:t,error:n,shortcut:r,prefix:i,suffix:c,addons:d,action:f,...p})=>(0,u.jsx)(l,{...p,error:n||void 0,leadIcon:e?(0,u.jsx)(o,{}):void 0,tailIcon:t?(0,u.jsx)(a,{}):void 0,shortcut:r||void 0,prefix:!d&&i?i:void 0,suffix:!d&&c?c:void 0,addonBefore:d&&i?i:void 0,addonAfter:d&&c?c:void 0,action:f?(0,u.jsx)(s,{children:f}):void 0})},g={Default:{placeholder:`mail@domain.com`,leadIcon:(0,u.jsx)(o,{}),tailIcon:(0,u.jsx)(a,{})},Shortcut:{placeholder:`Search`,leadIcon:(0,u.jsx)(o,{}),shortcut:`/`},"Add-on":{placeholder:`domain`,tailIcon:(0,u.jsx)(a,{}),addonBefore:`https://`,addonAfter:`.com`},"Inline add-on":{placeholder:`domain`,tailIcon:(0,u.jsx)(a,{}),prefix:`https://`,suffix:`.com`},"Tail button":{placeholder:`mail@domain.com`,leadIcon:(0,u.jsx)(o,{}),tailIcon:(0,u.jsx)(a,{}),action:(0,u.jsx)(s,{children:`Send`})}},_=e=>({display:`grid`,gridTemplateColumns:`repeat(${e}, 280px)`,gap:24,fontFamily:`var(--ds-font-family-body)`,fontSize:12,color:`var(--ds-text-muted)`}),v={decorators:[e=>(0,u.jsx)(`div`,{style:{width:`auto`},children:e()})],render:()=>(0,u.jsxs)(`div`,{style:_(4),children:[(0,u.jsx)(`span`,{children:`Placeholder`}),(0,u.jsx)(`span`,{children:`Filled`}),(0,u.jsx)(`span`,{children:`Failed`}),(0,u.jsx)(`span`,{children:`Disabled`}),Object.entries(g).map(([e,t])=>(0,u.jsxs)(`div`,{style:{display:`contents`},children:[(0,u.jsx)(l,{...t,label:e,caption:`Caption text`}),(0,u.jsx)(l,{...t,label:e,caption:`Caption text`,defaultValue:e===`Shortcut`?`design system`:`apple`}),(0,u.jsx)(l,{...t,label:e,error:`Error message`}),(0,u.jsx)(l,{...t,label:e,caption:`Caption text`,disabled:!0})]},e))]})},y={decorators:[e=>(0,u.jsx)(`div`,{style:{width:`auto`},children:e()})],render:()=>(0,u.jsx)(`div`,{style:_(3),children:f.map(e=>(0,u.jsx)(l,{variant:e,label:e,caption:`Caption text`,...g.Default},e))})},b={decorators:[e=>(0,u.jsx)(`div`,{style:{width:`auto`},children:e()})],render:()=>(0,u.jsx)(`div`,{style:_(2),children:p.map(e=>(0,u.jsx)(l,{size:e,label:e,caption:`Caption text`,...g[`Tail button`]},e))})},x={parameters:{layout:`fullscreen`},decorators:[e=>(0,u.jsx)(`div`,{style:{width:`auto`},children:e()})],render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:Object.keys(r).flatMap(e=>[`light`,`dark`].map(t=>(0,u.jsxs)(`div`,{"data-ds-brand":e,"data-ds-scheme":t,style:{background:`var(--ds-bg-default)`,padding:24,display:`grid`,gap:16},children:[(0,u.jsxs)(`div`,{style:{fontFamily:`var(--ds-font-family-body)`,fontSize:12,color:`var(--ds-text-muted)`},children:[e,` · `,t]}),f.map(e=>(0,u.jsx)(l,{variant:e,label:e,caption:`Caption text`,...g.Default},e)),(0,u.jsx)(l,{label:`Failed`,error:`Error message`,...g[`Tail button`]})]},`${e}-${t}`)))})},S=[`Playground`,`AllVariants`,`Styles`,`Sizes`,`Brands`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    caption: 'Caption text',
    error: '',
    placeholder: 'mail@domain.com',
    variant: 'default',
    size: 'lg',
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
      <span>Failed</span>
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
}`,...v.parameters?.docs?.source},description:{story:`Every supported Figma Variant in its static states. Focus an input to see Active.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
  render: () => <div style={grid(2)}>
      {sizes.map(size => <Input key={size} size={size} label={size} caption="Caption text" {...kinds['Tail button']} />)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      {Object.keys(brands).flatMap(brand => (['light', 'dark'] as const).map(scheme => <div key={\`\${brand}-\${scheme}\`} data-ds-brand={brand} data-ds-scheme={scheme} style={{
      background: 'var(--ds-bg-default)',
      padding: 24,
      display: 'grid',
      gap: 16
    }}>
            <div style={{
        fontFamily: 'var(--ds-font-family-body)',
        fontSize: 12,
        color: 'var(--ds-text-muted)'
      }}>
              {brand} · {scheme}
            </div>
            {variants.map(variant => <Input key={variant} variant={variant} label={variant} caption="Caption text" {...kinds.Default} />)}
            <Input label="Failed" error="Error message" {...kinds['Tail button']} />
          </div>))}
    </div>
}`,...x.parameters?.docs?.source},description:{story:`The same inputs under every brand and colour scheme, driven only by tokens.`,...x.parameters?.docs?.description}}}})))()}C();export{v as AllVariants,x as Brands,h as Playground,b as Sizes,y as Styles,S as __namedExportsOrder,m as default};