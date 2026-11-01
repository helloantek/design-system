import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-CitC0AlY.js";import{n as r,t as i}from"./Button-DhQh-TQf.js";import{S as a,b as o,f as s,g as c,n as l,r as u,s as d,u as f,w as p,x as m}from"./react-CyeVTJmC.js";import{h,o as g,t as _}from"./DropdownMenu-DjQjvniJ.js";import{i as v,n as y,r as b,t as x}from"./Input-DgkudSv0.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{S=n(),c(),r(),h(),v(),C=t(),w=`https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=82-50`,T=[`default`,`shadow`,`soft`],E=[`xl`,`lg`,`default`],D={title:`Components/Input`,parameters:{docs:{description:{component:`Implements the Sort UI 2.0 component sets **Input** ([open in Figma](${w})), **Input Group** (icons, inline text, Kbd and the button slot) and **Field** (label, description, error). \`size\` is Figma Size: \`xl\` (40 px), \`lg\` (36 px), \`default\` (32 px), the same heights as Button's sizes of the same name. Focus is \`:focus-within\`, Invalid is \`error\`, Disabled is \`disabled\`. Sort UI 2.0 has a single input style: \`default\` is it, \`shadow\` adds Shadow/xs and \`soft\` is a borderless tinted field. Styles come from \`@helloantek/ds-css\`, so the same classes work outside React.`}}},decorators:[e=>(0,C.jsx)(`div`,{style:{width:320},children:e()})]},O={args:{label:`Label`,caption:`Caption text`,error:``,placeholder:`mail@domain.com`,variant:`default`,size:`default`,disabled:!1,leadIcon:!0,tailIcon:!0,shortcut:``,prefix:``,suffix:``,addons:!1,action:``},argTypes:{variant:{control:`inline-radio`,options:T},size:{control:`inline-radio`,options:E},addons:{description:`Show prefix/suffix as joined segments (Add-on) instead of inline (Inline add-on)`}},render:({leadIcon:e,tailIcon:t,error:n,shortcut:r,prefix:i,suffix:a,addons:o,action:s,...c})=>(0,C.jsx)(x,{...c,error:n||void 0,leadIcon:e?(0,C.jsx)(l,{}):void 0,tailIcon:t?(0,C.jsx)(p,{}):void 0,shortcut:r||void 0,prefix:!o&&i?i:void 0,suffix:!o&&a?a:void 0,addonBefore:o&&i?i:void 0,addonAfter:o&&a?a:void 0,action:s?(0,C.jsx)(y,{children:s}):void 0})},k={Default:{placeholder:`mail@domain.com`,leadIcon:(0,C.jsx)(l,{}),tailIcon:(0,C.jsx)(p,{})},Shortcut:{placeholder:`Search`,leadIcon:(0,C.jsx)(l,{}),shortcut:`/`},"Add-on":{placeholder:`domain`,tailIcon:(0,C.jsx)(p,{}),addonBefore:`https://`,addonAfter:`.com`},"Inline add-on":{placeholder:`domain`,tailIcon:(0,C.jsx)(p,{}),prefix:`https://`,suffix:`.com`},"Tail button":{placeholder:`mail@domain.com`,leadIcon:(0,C.jsx)(l,{}),tailIcon:(0,C.jsx)(p,{}),action:(0,C.jsx)(y,{children:`Send`})}},A=e=>({display:`grid`,gridTemplateColumns:`repeat(${e}, 280px)`,gap:24,fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`}),j={decorators:[e=>(0,C.jsx)(`div`,{style:{width:`auto`},children:e()})],render:()=>(0,C.jsxs)(`div`,{style:A(4),children:[(0,C.jsx)(`span`,{children:`Placeholder`}),(0,C.jsx)(`span`,{children:`Filled`}),(0,C.jsx)(`span`,{children:`Invalid`}),(0,C.jsx)(`span`,{children:`Disabled`}),Object.entries(k).map(([e,t])=>(0,C.jsxs)(`div`,{style:{display:`contents`},children:[(0,C.jsx)(x,{...t,label:e,caption:`Caption text`}),(0,C.jsx)(x,{...t,label:e,caption:`Caption text`,defaultValue:e===`Shortcut`?`design system`:`apple`}),(0,C.jsx)(x,{...t,label:e,error:`Error message`}),(0,C.jsx)(x,{...t,label:e,caption:`Caption text`,disabled:!0})]},e))]})},M={decorators:[e=>(0,C.jsx)(`div`,{style:{width:`auto`},children:e()})],render:()=>(0,C.jsx)(`div`,{style:A(3),children:T.map(e=>(0,C.jsx)(x,{variant:e,label:e,caption:`Caption text`,...k.Default},e))})},N={decorators:[e=>(0,C.jsx)(`div`,{style:{width:`auto`},children:e()})],render:()=>(0,C.jsx)(`div`,{style:{display:`grid`,gap:16},children:E.map(e=>(0,C.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`flex-end`,width:400},children:[(0,C.jsx)(x,{size:e,label:e,placeholder:`mail@domain.com`,leadIcon:(0,C.jsx)(l,{})}),(0,C.jsx)(i,{size:e,children:`Subscribe`})]},e))})},P={parameters:{layout:`fullscreen`},decorators:[e=>(0,C.jsx)(`div`,{style:{width:`auto`},children:e()})],render:()=>(0,C.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,C.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16},children:[(0,C.jsx)(`div`,{style:{fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},children:e===`light`?`Light`:`Dark`}),T.map(e=>(0,C.jsx)(x,{variant:e,label:e,caption:`Caption text`,...k.Default},e)),(0,C.jsx)(x,{label:`Invalid`,error:`Error message`,defaultValue:`hey@sortui`,...k[`Tail button`]}),(0,C.jsx)(x,{label:`Disabled`,caption:`Caption text`,disabled:!0,...k.Shortcut})]},e))})},F={render:function(){let[e,t]=(0,S.useState)(`Search in...`),[n,r]=(0,S.useState)(`USD`),[i,s]=(0,S.useState)(`Messages`);return(0,C.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,C.jsx)(x,{"aria-label":`File name`,placeholder:`Enter file name`,action:(0,C.jsxs)(_,{align:`end`,"aria-label":`File actions`,trigger:(0,C.jsx)(y,{variant:`ghost`,"aria-label":`More file actions`,children:(0,C.jsx)(o,{})}),children:[(0,C.jsx)(g,{children:`Rename`}),(0,C.jsx)(g,{children:`Duplicate`})]})}),(0,C.jsx)(x,{"aria-label":`Search query`,placeholder:`Enter search query`,action:(0,C.jsx)(_,{align:`end`,trigger:(0,C.jsx)(b,{"aria-label":`Search scope: ${e}`,children:e}),children:[`Documentation`,`Blog posts`,`Changelog`].map(e=>(0,C.jsx)(g,{onClick:()=>t(e),children:e},e))})}),(0,C.jsx)(x,{"aria-label":`Amount`,prefix:`$`,placeholder:`0.00`,action:(0,C.jsx)(_,{align:`end`,trigger:(0,C.jsx)(b,{"aria-label":`Currency: ${n}`,children:n}),children:[`USD`,`EUR`,`PLN`].map(e=>(0,C.jsx)(g,{onClick:()=>r(e),children:e},e))})}),(0,C.jsx)(x,{"aria-label":`Search`,placeholder:`Search...`,leadIcon:(0,C.jsx)(a,{}),action:(0,C.jsx)(_,{align:`end`,trigger:(0,C.jsx)(b,{"aria-label":`Search in: ${i}`,children:i}),children:[`Messages`,`Files`,`People`].map(e=>(0,C.jsx)(g,{onClick:()=>s(e),children:e},e))})})]})}},I={render:function(){let[e,t]=(0,S.useState)(0);return(0,C.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,C.jsx)(x,{"aria-label":`Search`,placeholder:`Search`,leadIcon:(0,C.jsx)(a,{}),action:(0,C.jsx)(y,{children:`Search`})}),(0,C.jsx)(x,{"aria-label":`Search (ghost)`,placeholder:`Search`,leadIcon:(0,C.jsx)(a,{}),action:(0,C.jsx)(y,{variant:`ghost`,children:`Search`})}),(0,C.jsx)(x,{"aria-label":`Profile link`,readOnly:!0,defaultValue:`https://example.com/u/shiryoku`,action:(0,C.jsx)(y,{variant:`ghost`,"aria-label":`Copy link`,onClick:()=>navigator.clipboard?.writeText(`https://example.com/u/shiryoku`),children:(0,C.jsx)(u,{})})}),(0,C.jsx)(x,{"aria-label":`Quantity`,inputMode:`numeric`,value:e,onChange:e=>t(Number(e.target.value)||0),style:{textAlign:`center`},prefix:(0,C.jsx)(y,{variant:`ghost`,"aria-label":`Decrease`,onClick:()=>t(e=>e-1),children:(0,C.jsx)(f,{})}),suffix:(0,C.jsx)(y,{variant:`ghost`,"aria-label":`Increase`,onClick:()=>t(e=>e+1),children:(0,C.jsx)(m,{})})})]})}},L={decorators:[e=>(0,C.jsx)(`div`,{style:{width:380},children:e()})],render:()=>(0,C.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,C.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:16},children:[(0,C.jsx)(x,{"aria-label":`Invoice number`,prefix:`INV-`,defaultValue:`2048`}),(0,C.jsx)(x,{"aria-label":`Payment terms`,suffix:`days`,defaultValue:`30`})]}),(0,C.jsx)(x,{blockStart:`Client`,defaultValue:`Northlight Studio`}),(0,C.jsx)(x,{"aria-label":`Project`,defaultValue:`Design and build of the new site`,blockEnd:`Shown on the invoice PDF`})]})},R={decorators:[e=>(0,C.jsx)(`div`,{style:{width:380},children:e()})],render:()=>(0,C.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,C.jsx)(x,{"aria-label":`Website`,addonBefore:`https://`,placeholder:`example`,addonAfter:`.com`}),(0,C.jsx)(x,{blockStart:`Release notes`,blockDivider:!0,placeholder:`What changed in 2.5.0?`})]})},z={render:function(){let[e,t]=(0,S.useState)(`Shiryoku`);return(0,C.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,C.jsx)(x,{"aria-label":`Workspace`,defaultValue:`Shiryoku`,loading:!0}),(0,C.jsx)(x,{"aria-label":`Team URL`,prefix:`example.com/`,defaultValue:`design-team`,suffix:`Checking`,loading:`end`}),(0,C.jsx)(x,{label:`Display name`,caption:`Shown on your profile and comments.`,leadIcon:(0,C.jsx)(s,{}),maxLength:24,value:e,onChange:e=>t(e.target.value),suffix:`${e.length}/24`,action:e?(0,C.jsx)(y,{variant:`ghost`,"aria-label":`Clear`,onClick:()=>t(``),children:(0,C.jsx)(d,{})}):void 0})]})}},B=[`Playground`,`AllVariants`,`Styles`,`Sizes`,`Themes`,`InputGroupDropdown`,`InputGroupButtons`,`InputGroupAlignment`,`InputGroupDividers`,`InputGroupStatus`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`Every slot combination in the static states. Focus an input to see Focus.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 'auto'
  }}>{Story()}</div>],
  render: () => <div style={grid(3)}>
      {variants.map(variant => <Input key={variant} variant={variant} label={variant} caption="Caption text" {...kinds.Default} />)}
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`Figma Size: 40, 36 and 32 px, next to the Button of the same size.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function InputGroupDropdown() {
    const [scope, setScope] = useState('Search in...');
    const [currency, setCurrency] = useState('USD');
    const [where, setWhere] = useState('Messages');
    return <div style={{
      display: 'grid',
      gap: 12
    }}>
        <Input aria-label="File name" placeholder="Enter file name" action={<DropdownMenu align="end" aria-label="File actions" trigger={<InputAction variant="ghost" aria-label="More file actions"><RiMoreLine /></InputAction>}>
              <DropdownMenuItem>Rename</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
            </DropdownMenu>} />
        <Input aria-label="Search query" placeholder="Enter search query" action={<DropdownMenu align="end" trigger={<InputDropdown aria-label={\`Search scope: \${scope}\`}>{scope}</InputDropdown>}>
              {['Documentation', 'Blog posts', 'Changelog'].map(label => <DropdownMenuItem key={label} onClick={() => setScope(label)}>
                  {label}
                </DropdownMenuItem>)}
            </DropdownMenu>} />
        <Input aria-label="Amount" prefix="$" placeholder="0.00" action={<DropdownMenu align="end" trigger={<InputDropdown aria-label={\`Currency: \${currency}\`}>{currency}</InputDropdown>}>
              {['USD', 'EUR', 'PLN'].map(label => <DropdownMenuItem key={label} onClick={() => setCurrency(label)}>
                  {label}
                </DropdownMenuItem>)}
            </DropdownMenu>} />
        <Input aria-label="Search" placeholder="Search..." leadIcon={<RiSearchLine />} action={<DropdownMenu align="end" trigger={<InputDropdown aria-label={\`Search in: \${where}\`}>{where}</InputDropdown>}>
              {['Messages', 'Files', 'People'].map(label => <DropdownMenuItem key={label} onClick={() => setWhere(label)}>
                  {label}
                </DropdownMenuItem>)}
            </DropdownMenu>} />
      </div>;
  }
}`,...F.parameters?.docs?.source},description:{story:`Figma Input Group "Dropdown" demo: an Input Group Dropdown (in a DropdownMenu) in the T slot.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function InputGroupButtons() {
    const [count, setCount] = useState(0);
    return <div style={{
      display: 'grid',
      gap: 12
    }}>
        <Input aria-label="Search" placeholder="Search" leadIcon={<RiSearchLine />} action={<InputAction>Search</InputAction>} />
        <Input aria-label="Search (ghost)" placeholder="Search" leadIcon={<RiSearchLine />} action={<InputAction variant="ghost">Search</InputAction>} />
        <Input aria-label="Profile link" readOnly defaultValue="https://example.com/u/shiryoku" action={<InputAction variant="ghost" aria-label="Copy link" onClick={() => navigator.clipboard?.writeText('https://example.com/u/shiryoku')}>
              <RiFileCopyLine />
            </InputAction>} />
        <Input aria-label="Quantity" inputMode="numeric" value={count} onChange={event => setCount(Number(event.target.value) || 0)} style={{
        textAlign: 'center'
      }} prefix={<InputAction variant="ghost" aria-label="Decrease" onClick={() => setCount(c => c - 1)}>
              <RiSubtractLine />
            </InputAction>} suffix={<InputAction variant="ghost" aria-label="Increase" onClick={() => setCount(c => c + 1)}>
              <RiAddLine />
            </InputAction>} />
      </div>;
  }
}`,...I.parameters?.docs?.source},description:{story:`Figma Input Group "Button" demo: Outline and Ghost xs buttons, an icon button and a stepper.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 380
  }}>{Story()}</div>],
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }}>
        <Input aria-label="Invoice number" prefix="INV-" defaultValue="2048" />
        <Input aria-label="Payment terms" suffix="days" defaultValue="30" />
      </div>
      <Input blockStart="Client" defaultValue="Northlight Studio" />
      <Input aria-label="Project" defaultValue="Design and build of the new site" blockEnd="Shown on the invoice PDF" />
    </div>
}`,...L.parameters?.docs?.source},description:{story:`Figma Input Group "Alignment" demo: inline text, and Block start / Block end rows in the same box.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 380
  }}>{Story()}</div>],
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <Input aria-label="Website" addonBefore="https://" placeholder="example" addonAfter=".com" />
      <Input blockStart="Release notes" blockDivider placeholder="What changed in 2.5.0?" />
    </div>
}`,...R.parameters?.docs?.source},description:{story:`Figma Input Group "Dividers" demo: add-ons and a Block end split off by lines.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function InputGroupStatus() {
    const [name, setName] = useState('Shiryoku');
    return <div style={{
      display: 'grid',
      gap: 16
    }}>
        <Input aria-label="Workspace" defaultValue="Shiryoku" loading />
        <Input aria-label="Team URL" prefix="example.com/" defaultValue="design-team" suffix="Checking" loading="end" />
        <Input label="Display name" caption="Shown on your profile and comments." leadIcon={<RiUserLine />} maxLength={24} value={name} onChange={event => setName(event.target.value)} suffix={\`\${name.length}/24\`} action={name ? <InputAction variant="ghost" aria-label="Clear" onClick={() => setName('')}>
                <RiCloseLine />
              </InputAction> : undefined} />
      </div>;
  }
}`,...z.parameters?.docs?.source},description:{story:`Figma Input Group "Loading" and "Character count" demos.`,...z.parameters?.docs?.description}}}})))()}V();export{j as AllVariants,L as InputGroupAlignment,I as InputGroupButtons,R as InputGroupDividers,F as InputGroupDropdown,z as InputGroupStatus,O as Playground,N as Sizes,M as Styles,P as Themes,B as __namedExportsOrder,D as default};