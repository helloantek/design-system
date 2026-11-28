import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{h as t,i as n,n as r,r as i}from"./iframe-F2eZZEpt.js";import{a,l as o,r as s,s as c}from"./react-qOKCMIJg.js";import{n as l,t as u}from"./Select-BVpkjlrg.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{d=t(),c(),n(),l(),f=r(),p=`https://www.figma.com/design/4tiBR2hKd4yvQehtKhM9OY?node-id=3817-74026`,m=[`default`,`shadow`,`soft`],h=[`lg`,`sm`],g=[`Alex Jhonson`,`Simon Alt`,`Emma Thompson`,`Michael Davis`,`Kate Roberts`,`Ryan Parker`,`Lily Chen`].map(e=>({value:e.toLowerCase().replace(` `,`-`),label:e})),_=[{label:`Regions`,caption:`3`,options:[{value:`eu`,label:`Europe`,icon:(0,f.jsx)(a,{}),caption:`EU`,badge:`Default`},{value:`us`,label:`North America`,icon:(0,f.jsx)(a,{}),caption:`US`},{value:`apac`,label:`Asia Pacific`,icon:(0,f.jsx)(a,{}),caption:`APAC`,disabled:!0}]},{type:`separator`},{value:`global`,label:`Global`,icon:(0,f.jsx)(a,{})}],v={title:`Components/Select`,parameters:{docs:{description:{component:`Implements the Figma component sets **Select Input**, **Select Menu** and **Select Menu Items** ([open in Figma](${p})) for Select Input Variant = Default and menu items of Type = Default, Label and Divider. Figma "Style" → \`variant\`, "Size" → \`size\`; Active is the focused trigger, Failed is \`error\`, Destructive (drawn as a disabled field in Figma) is \`disabled\`. Keyboard: arrows, Home/End, PageUp/PageDown, Enter/Space, Escape, Tab and type-ahead, as in the WAI-ARIA select-only combobox. Multi-select, Tags, Avatar and Country Flag variants, the menu search and the menu footer button are in the backlog.`}}}},y=[e=>(0,f.jsx)(`div`,{style:{width:320,paddingBottom:320},children:e()})],b={args:{label:`Label`,caption:`Caption text`,error:``,placeholder:`Select a user`,variant:`default`,size:`lg`,disabled:!1,leadIcon:!0,tailIcon:!0,groups:!1,multiple:!1},decorators:y,argTypes:{variant:{control:`inline-radio`,options:m},size:{control:`inline-radio`,options:h},groups:{description:`Show a group label, captions, a badge, a disabled option and a divider`},multiple:{description:`Figma Variant=Multi-select: pick several options`}},render:function({leadIcon:e,tailIcon:t,error:n,groups:r,multiple:i,...a}){let[c,l]=(0,d.useState)(null),[p,m]=(0,d.useState)([]),h={...a,options:r?_:g,error:n||void 0,leadIcon:e?(0,f.jsx)(s,{}):void 0,tailIcon:t?(0,f.jsx)(o,{}):void 0};return i?(0,f.jsx)(u,{...h,multiple:!0,value:p,onValueChange:m}):(0,f.jsx)(u,{...h,value:c,onValueChange:l})}},x=e=>({display:`grid`,gridTemplateColumns:`repeat(${e}, 280px)`,gap:24,fontFamily:`var(--ds-font-family-body)`,fontSize:12,color:`var(--ds-text-muted)`}),S={options:g,placeholder:`Select a user`,leadIcon:(0,f.jsx)(s,{}),tailIcon:(0,f.jsx)(o,{})},C={render:()=>(0,f.jsxs)(`div`,{style:x(4),children:[(0,f.jsx)(`span`,{children:`Placeholder`}),(0,f.jsx)(`span`,{children:`Filled`}),(0,f.jsx)(`span`,{children:`Failed`}),(0,f.jsx)(`span`,{children:`Destructive (disabled)`}),m.map(e=>(0,f.jsxs)(`div`,{style:{display:`contents`},children:[(0,f.jsx)(u,{...S,variant:e,label:e,caption:`Caption text`}),(0,f.jsx)(u,{...S,variant:e,label:e,caption:`Caption text`,defaultValue:`simon-alt`}),(0,f.jsx)(u,{...S,variant:e,label:e,error:`Error message`}),(0,f.jsx)(u,{...S,variant:e,label:e,caption:`Caption text`,disabled:!0})]},e))]})},w={render:()=>(0,f.jsx)(`div`,{style:x(2),children:h.map(e=>(0,f.jsx)(u,{...S,size:e,label:e,caption:`Caption text`},e))})},T={decorators:y,render:()=>(0,f.jsx)(u,{...S,label:`Reviewers`,caption:`Pick everyone who should approve`,multiple:!0,defaultValue:[`simon-alt`,`michael-davis`,`ryan-parker`]})},E={decorators:y,render:()=>(0,f.jsx)(u,{options:_,label:`Region`,placeholder:`Select a region`,defaultValue:`eu`,defaultOpen:!0})},D={parameters:{layout:`fullscreen`},render:()=>(0,f.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 368px)`},children:Object.keys(i).flatMap(e=>[`light`,`dark`].map(t=>(0,f.jsxs)(`div`,{"data-ds-brand":e,"data-ds-scheme":t,style:{background:`var(--ds-bg-default)`,padding:24,display:`grid`,gap:16,alignContent:`start`,minHeight:600},children:[(0,f.jsxs)(`div`,{style:{fontFamily:`var(--ds-font-family-body)`,fontSize:12,color:`var(--ds-text-muted)`},children:[e,` · `,t]}),m.map(e=>(0,f.jsx)(u,{...S,variant:e,label:e,defaultValue:`simon-alt`},e)),(0,f.jsx)(u,{options:_,label:`Open`,defaultValue:`eu`,defaultOpen:!0})]},`${e}-${t}`)))})},O=[`Playground`,`AllStates`,`Sizes`,`MultiSelect`,`Menu`,`Brands`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    caption: 'Caption text',
    error: '',
    placeholder: 'Select a user',
    variant: 'default',
    size: 'lg',
    disabled: false,
    leadIcon: true,
    tailIcon: true,
    groups: false,
    multiple: false
  },
  decorators: single,
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: variants
    },
    size: {
      control: 'inline-radio',
      options: sizes
    },
    groups: {
      description: 'Show a group label, captions, a badge, a disabled option and a divider'
    },
    multiple: {
      description: 'Figma Variant=Multi-select: pick several options'
    }
  },
  render: function Render({
    leadIcon,
    tailIcon,
    error,
    groups,
    multiple,
    ...props
  }) {
    const [value, setValue] = useState<string | null>(null);
    const [values, setValues] = useState<string[]>([]);
    const common = {
      ...props,
      options: groups ? rich : users,
      error: error || undefined,
      leadIcon: leadIcon ? <RiUser3Line /> : undefined,
      tailIcon: tailIcon ? <RiInformationFill /> : undefined
    };
    return multiple ? <Select {...common} multiple value={values} onValueChange={setValues} /> : <Select {...common} value={value} onValueChange={setValue} />;
  }
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid(4)}>
      <span>Placeholder</span>
      <span>Filled</span>
      <span>Failed</span>
      <span>Destructive (disabled)</span>
      {variants.map(variant => <div key={variant} style={{
      display: 'contents'
    }}>
          <Select {...field} variant={variant} label={variant} caption="Caption text" />
          <Select {...field} variant={variant} label={variant} caption="Caption text" defaultValue="simon-alt" />
          <Select {...field} variant={variant} label={variant} error="Error message" />
          <Select {...field} variant={variant} label={variant} caption="Caption text" disabled />
        </div>)}
    </div>
}`,...C.parameters?.docs?.source},description:{story:`Every Figma Style in the static states. Focus a select to see Active.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid(2)}>
      {sizes.map(size => <Select key={size} {...field} size={size} label={size} caption="Caption text" />)}
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  decorators: single,
  render: () => <Select {...field} label="Reviewers" caption="Pick everyone who should approve" multiple defaultValue={['simon-alt', 'michael-davis', 'ryan-parker']} />
}`,...T.parameters?.docs?.source},description:{story:`Figma Variant=Multi-select: options toggle, the menu stays open and the trigger lists the selected labels.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  decorators: single,
  render: () => <Select options={rich} label="Region" placeholder="Select a region" defaultValue="eu" defaultOpen />
}`,...E.parameters?.docs?.source},description:{story:`The open menu with every implemented item type: group label, options with icon, caption and badge, a disabled option, a divider.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 368px)'
  }}>
      {Object.keys(brands).flatMap(brand => (['light', 'dark'] as const).map(scheme => <div key={\`\${brand}-\${scheme}\`} data-ds-brand={brand} data-ds-scheme={scheme} style={{
      background: 'var(--ds-bg-default)',
      padding: 24,
      display: 'grid',
      gap: 16,
      alignContent: 'start',
      minHeight: 600
    }}>
            <div style={{
        fontFamily: 'var(--ds-font-family-body)',
        fontSize: 12,
        color: 'var(--ds-text-muted)'
      }}>
              {brand} · {scheme}
            </div>
            {variants.map(variant => <Select key={variant} {...field} variant={variant} label={variant} defaultValue="simon-alt" />)}
            <Select options={rich} label="Open" defaultValue="eu" defaultOpen />
          </div>))}
    </div>
}`,...D.parameters?.docs?.source},description:{story:`The same selects under every brand and colour scheme, driven only by tokens.`,...D.parameters?.docs?.description}}}})))()}k();export{C as AllStates,D as Brands,E as Menu,T as MultiSelect,b as Playground,w as Sizes,O as __namedExportsOrder,v as default};