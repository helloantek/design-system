import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t}from"./iframe-Diau3x_I.js";import{n,t as r}from"./Button-hgGEFKG0.js";var i,SquareDashed;function init_Button_fixtures(){return(init_Button_fixtures=e((()=>{i=t(),SquareDashed=()=>(0,i.jsx)(`svg`,{viewBox:`0 0 18 18`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,i.jsx)(`path`,{d:`M3.60446 2.1626C3.22205 2.1626 2.85531 2.31451 2.58491 2.58491C2.31451 2.85531 2.1626 3.22205 2.1626 3.60446M13.6975 2.1626C14.0799 2.1626 14.4466 2.31451 14.717 2.58491C14.9874 2.85531 15.1393 3.22205 15.1393 3.60446M15.1393 13.6975C15.1393 14.0799 14.9874 14.4466 14.717 14.717C14.4466 14.9874 14.0799 15.1393 13.6975 15.1393M3.60446 15.1393C3.22205 15.1393 2.85531 14.9874 2.58491 14.717C2.31451 14.4466 2.1626 14.0799 2.1626 13.6975M6.48818 2.1626H7.20911M6.48818 15.1393H7.20911M10.0928 2.1626H10.8138M10.0928 15.1393H10.8138M2.1626 6.48818V7.20911M15.1393 6.48818V7.20911M2.1626 10.0928V10.8138M15.1393 10.0928V10.8138`})}),SquareDashed.__docgenInfo={description:``,methods:[],displayName:`SquareDashed`}})))()}var a,o,s,c,Icon,l,u,d,grid,f,p,m,h;function init_Button_stories(){return(init_Button_stories=e((()=>{n(),init_Button_fixtures(),a=t(),o=`https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=40-2125`,s=[`default`,`outline`,`secondary`,`ghost`,`destructive`],c=[`xl`,`lg`,`default`,`sm`,`xs`],Icon=()=>(0,a.jsx)(SquareDashed,{}),l={title:`Components/Button`,parameters:{docs:{description:{component:`Implements the Sort UI 2.0 component set **Button** ([open in Figma](${o})): every Variant, Size, State and Icon only. Figma "Leading Icon" / "Trailing Icon" / "Badge" → \`leadingIcon\`, \`trailingIcon\`, \`badge\`; Icon only → \`icon\` + \`aria-label\`. Hover and Focus are real CSS states (\`:hover\`, \`:focus-visible\`), Disabled is the native \`disabled\` attribute. Styles come from \`@helloantek/ds-css\`, so the same classes work outside React.`}}}},u={args:{label:`Button`,variant:`default`,size:`default`,disabled:!1,leadingIcon:!0,trailingIcon:!0,badge:`2`},argTypes:{label:{name:`Label`},variant:{name:`Variant`,control:`select`,options:s},size:{name:`Size`,control:`inline-radio`,options:c},disabled:{description:`Figma State=Disabled`},leadingIcon:{name:`Leading Icon`},trailingIcon:{name:`Trailing Icon`},badge:{name:`Badge`,description:`Empty hides it`}},render:({label:e,leadingIcon:t,trailingIcon:n,badge:i,...o})=>(0,a.jsx)(r,{...o,leadingIcon:t?(0,a.jsx)(Icon,{}):void 0,trailingIcon:n?(0,a.jsx)(Icon,{}):void 0,badge:i||void 0,children:e})},d={args:{variant:`default`,size:`default`,disabled:!1},argTypes:{variant:u.argTypes.variant,size:u.argTypes.size},render:e=>(0,a.jsx)(r,{...e,icon:(0,a.jsx)(Icon,{}),"aria-label":`Button`})},grid=e=>({display:`grid`,gridTemplateColumns:`repeat(${e}, max-content)`,gap:16,alignItems:`center`,fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`}),f={render:()=>(0,a.jsxs)(`div`,{style:grid(4),children:[(0,a.jsx)(`span`,{}),(0,a.jsx)(`span`,{children:`Default`}),(0,a.jsx)(`span`,{children:`Disabled`}),(0,a.jsx)(`span`,{children:`Icon only`}),s.map(e=>(0,a.jsxs)(`div`,{style:{display:`contents`},children:[(0,a.jsx)(`span`,{children:e}),(0,a.jsx)(r,{variant:e,leadingIcon:(0,a.jsx)(Icon,{}),trailingIcon:(0,a.jsx)(Icon,{}),badge:`2`,children:`Button`}),(0,a.jsx)(r,{variant:e,leadingIcon:(0,a.jsx)(Icon,{}),trailingIcon:(0,a.jsx)(Icon,{}),badge:`2`,disabled:!0,children:`Button`}),(0,a.jsx)(r,{variant:e,icon:(0,a.jsx)(Icon,{}),"aria-label":`Button`})]},e))]})},p={render:()=>(0,a.jsx)(`div`,{style:grid(3),children:c.map(e=>(0,a.jsxs)(`div`,{style:{display:`contents`},children:[(0,a.jsx)(`span`,{children:e}),(0,a.jsx)(r,{size:e,leadingIcon:(0,a.jsx)(Icon,{}),trailingIcon:(0,a.jsx)(Icon,{}),badge:`2`,children:`Button`}),(0,a.jsx)(r,{size:e,icon:(0,a.jsx)(Icon,{}),"aria-label":`Button`})]},e))})},m={parameters:{layout:`fullscreen`},render:()=>(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,a.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:12},children:[(0,a.jsx)(`div`,{style:grid(1),children:e===`light`?`Light`:`Dark`}),[!1,!0].map(e=>(0,a.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:s.map(t=>(0,a.jsx)(r,{variant:t,leadingIcon:(0,a.jsx)(Icon,{}),badge:`2`,disabled:e,children:t},t))},String(e)))]},e))})},h=[`Playground`,`IconOnly`,`AllVariants`,`Sizes`,`Themes`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'default',
    size: 'default',
    disabled: false,
    leadingIcon: true,
    trailingIcon: true,
    badge: '2'
  },
  argTypes: {
    label: {
      name: 'Label'
    },
    variant: {
      name: 'Variant',
      control: 'select',
      options: variants
    },
    size: {
      name: 'Size',
      control: 'inline-radio',
      options: sizes
    },
    disabled: {
      description: 'Figma State=Disabled'
    },
    leadingIcon: {
      name: 'Leading Icon'
    },
    trailingIcon: {
      name: 'Trailing Icon'
    },
    badge: {
      name: 'Badge',
      description: 'Empty hides it'
    }
  },
  render: ({
    label,
    leadingIcon,
    trailingIcon,
    badge,
    ...props
  }) => <Button {...props} leadingIcon={leadingIcon ? <Icon /> : undefined} trailingIcon={trailingIcon ? <Icon /> : undefined} badge={badge || undefined}>
      {label}
    </Button>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    disabled: false
  },
  argTypes: {
    variant: Playground.argTypes!.variant,
    size: Playground.argTypes!.size
  },
  render: props => <Button {...props} icon={<Icon />} aria-label="Button" />
}`,...d.parameters?.docs?.source},description:{story:"Figma Icon only=True: a square button; `aria-label` names it.",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid(4)}>
      <span />
      <span>Default</span>
      <span>Disabled</span>
      <span>Icon only</span>
      {variants.map(variant => <div key={variant} style={{
      display: 'contents'
    }}>
          <span>{variant}</span>
          <Button variant={variant} leadingIcon={<Icon />} trailingIcon={<Icon />} badge="2">
            Button
          </Button>
          <Button variant={variant} leadingIcon={<Icon />} trailingIcon={<Icon />} badge="2" disabled>
            Button
          </Button>
          <Button variant={variant} icon={<Icon />} aria-label="Button" />
        </div>)}
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Every Figma Variant in its static states. Hover the buttons, or Tab to them, to see Hover and Focus.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid(3)}>
      {sizes.map(size => <div key={size} style={{
      display: 'contents'
    }}>
          <span>{size}</span>
          <Button size={size} leadingIcon={<Icon />} trailingIcon={<Icon />} badge="2">
            Button
          </Button>
          <Button size={size} icon={<Icon />} aria-label="Button" />
        </div>)}
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Figma Size: 40, 36, 32, 28 and 24 px tall.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      display: 'grid',
      gap: 12
    }}>
          <div style={grid(1)}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          {[false, true].map(disabled => <div key={String(disabled)} style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }}>
              {variants.map(variant => <Button key={variant} variant={variant} leadingIcon={<Icon />} badge="2" disabled={disabled}>
                  {variant}
                </Button>)}
            </div>)}
        </div>)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...m.parameters?.docs?.description}}}})))()}init_Button_stories();export{f as AllVariants,d as IconOnly,u as Playground,p as Sizes,m as Themes,h as __namedExportsOrder,l as default};