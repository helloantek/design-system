import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,n,r}from"./iframe-4hjhlfNb.js";import{f as i,l as a}from"./react-CzZUAz9f.js";import{n as o,t as s}from"./Button-_7MrqvzW.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{a(),t(),o(),c=n(),l=`https://www.figma.com/design/4tiBR2hKd4yvQehtKhM9OY?node-id=28-22033`,u=[`primary`,`secondary`,`dashed`,`soft`,`ghost`,`ghost-muted`,`destructive`],d=[`lg`,`md`,`sm`,`xs`,`2xs`],f=[`rounded`,`pill`],p=()=>(0,c.jsx)(i,{}),m={title:`Components/Button`,parameters:{docs:{description:{component:`Implements the Figma component set **Button** ([open in Figma](${l})). Figma "Style" → \`variant\`, "Size" → \`size\`, "Shape" → \`shape\`, "Variant=Icon only" → \`icon\` + \`aria-label\`. Styles come from \`@helloantek/ds-css\`, so the same classes work outside React. Hover, Press and Focus are real CSS states (\`:hover\`, \`:active\`, \`:focus-visible\`), Disabled is the native \`disabled\` attribute and Loading is the \`loading\` prop.`}}}},h={args:{label:`Button`,variant:`primary`,size:`md`,shape:`rounded`,loading:!1,disabled:!1,leadIcon:!0,tailIcon:!0,badge:`/`},argTypes:{variant:{control:`select`,options:u},size:{control:`inline-radio`,options:d},shape:{control:`inline-radio`,options:f}},render:({label:e,leadIcon:t,tailIcon:n,badge:r,...i})=>(0,c.jsx)(s,{...i,leadIcon:t?(0,c.jsx)(p,{}):void 0,tailIcon:n?(0,c.jsx)(p,{}):void 0,badge:r||void 0,children:e})},g={args:{variant:`primary`,size:`md`,shape:`rounded`,loading:!1,disabled:!1},argTypes:h.argTypes,render:e=>(0,c.jsx)(s,{...e,icon:(0,c.jsx)(p,{}),"aria-label":`Confirm`})},_=e=>({display:`grid`,gridTemplateColumns:`repeat(${e}, max-content)`,gap:16,alignItems:`center`,fontFamily:`var(--ds-font-family-body)`,fontSize:12,color:`var(--ds-text-muted)`}),v={render:()=>(0,c.jsxs)(`div`,{style:_(5),children:[(0,c.jsx)(`span`,{}),(0,c.jsx)(`span`,{children:`Default`}),(0,c.jsx)(`span`,{children:`Loading`}),(0,c.jsx)(`span`,{children:`Disabled`}),(0,c.jsx)(`span`,{children:`Icon only`}),u.map(e=>(0,c.jsxs)(`div`,{style:{display:`contents`},children:[(0,c.jsx)(`span`,{children:e}),(0,c.jsx)(s,{variant:e,leadIcon:(0,c.jsx)(p,{}),tailIcon:(0,c.jsx)(p,{}),badge:`/`,children:`Button`}),(0,c.jsx)(s,{variant:e,leadIcon:(0,c.jsx)(p,{}),tailIcon:(0,c.jsx)(p,{}),badge:`/`,loading:!0,children:`Button`}),(0,c.jsx)(s,{variant:e,leadIcon:(0,c.jsx)(p,{}),tailIcon:(0,c.jsx)(p,{}),badge:`/`,disabled:!0,children:`Button`}),(0,c.jsx)(s,{variant:e,icon:(0,c.jsx)(p,{}),"aria-label":`Confirm`})]},e))]})},y={render:()=>(0,c.jsx)(`div`,{style:_(3),children:d.map(e=>(0,c.jsxs)(`div`,{style:{display:`contents`},children:[(0,c.jsx)(`span`,{children:e}),(0,c.jsx)(s,{size:e,leadIcon:(0,c.jsx)(p,{}),tailIcon:(0,c.jsx)(p,{}),badge:`/`,children:`Button`}),(0,c.jsx)(s,{size:e,icon:(0,c.jsx)(p,{}),"aria-label":`Confirm`})]},e))})},b={render:()=>(0,c.jsx)(`div`,{style:_(2),children:f.map(e=>(0,c.jsx)(s,{shape:e,variant:`secondary`,leadIcon:(0,c.jsx)(p,{}),badge:`/`,children:e},e))})},x={parameters:{layout:`fullscreen`},render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:Object.keys(r).flatMap(e=>[`light`,`dark`].map(t=>(0,c.jsxs)(`div`,{"data-ds-brand":e,"data-ds-scheme":t,style:{background:`var(--ds-bg-default)`,padding:24},children:[(0,c.jsxs)(`div`,{style:{..._(4),marginBottom:12},children:[e,` · `,t]}),(0,c.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:u.map(e=>(0,c.jsx)(s,{variant:e,leadIcon:(0,c.jsx)(p,{}),children:e},e))})]},`${e}-${t}`)))})},S=[`Playground`,`IconOnly`,`AllVariants`,`Sizes`,`Shapes`,`Brands`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
    shape: 'rounded',
    loading: false,
    disabled: false,
    leadIcon: true,
    tailIcon: true,
    badge: '/'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: variants
    },
    size: {
      control: 'inline-radio',
      options: sizes
    },
    shape: {
      control: 'inline-radio',
      options: shapes
    }
  },
  render: ({
    label,
    leadIcon,
    tailIcon,
    badge,
    ...props
  }) => <Button {...props} leadIcon={leadIcon ? <Icon /> : undefined} tailIcon={tailIcon ? <Icon /> : undefined} badge={badge || undefined}>
      {label}
    </Button>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    shape: 'rounded',
    loading: false,
    disabled: false
  },
  argTypes: Playground.argTypes,
  render: props => <Button {...props} icon={<Icon />} aria-label="Confirm" />
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid(5)}>
      <span />
      <span>Default</span>
      <span>Loading</span>
      <span>Disabled</span>
      <span>Icon only</span>
      {variants.map(variant => <div key={variant} style={{
      display: 'contents'
    }}>
          <span>{variant}</span>
          <Button variant={variant} leadIcon={<Icon />} tailIcon={<Icon />} badge="/">
            Button
          </Button>
          <Button variant={variant} leadIcon={<Icon />} tailIcon={<Icon />} badge="/" loading>
            Button
          </Button>
          <Button variant={variant} leadIcon={<Icon />} tailIcon={<Icon />} badge="/" disabled>
            Button
          </Button>
          <Button variant={variant} icon={<Icon />} aria-label="Confirm" />
        </div>)}
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Every Figma Style in its static states. Hover and press the buttons to see the interactive states.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid(3)}>
      {sizes.map(size => <div key={size} style={{
      display: 'contents'
    }}>
          <span>{size}</span>
          <Button size={size} leadIcon={<Icon />} tailIcon={<Icon />} badge="/">
            Button
          </Button>
          <Button size={size} icon={<Icon />} aria-label="Confirm" />
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid(2)}>
      {shapes.map(shape => <Button key={shape} shape={shape} variant="secondary" leadIcon={<Icon />} badge="/">
          {shape}
        </Button>)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {Object.keys(brands).flatMap(brand => (['light', 'dark'] as const).map(scheme => <div key={\`\${brand}-\${scheme}\`} data-ds-brand={brand} data-ds-scheme={scheme} style={{
      background: 'var(--ds-bg-default)',
      padding: 24
    }}>
            <div style={{
        ...grid(4),
        marginBottom: 12
      }}>
              {brand} · {scheme}
            </div>
            <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }}>
              {variants.map(variant => <Button key={variant} variant={variant} leadIcon={<Icon />}>
                  {variant}
                </Button>)}
            </div>
          </div>))}
    </div>
}`,...x.parameters?.docs?.source},description:{story:`The same buttons under every brand and colour scheme, driven only by tokens.`,...x.parameters?.docs?.description}}}})))()}C();export{v as AllVariants,x as Brands,g as IconOnly,h as Playground,b as Shapes,y as Sizes,S as __namedExportsOrder,m as default};