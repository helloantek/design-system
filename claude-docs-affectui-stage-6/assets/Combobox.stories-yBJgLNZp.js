import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t}from"./iframe-HDi6PoFA.js";import{n,t as r}from"./Button-CMnTTyYZ.js";import{n as i,t as a}from"./Avatar-Bd66yas2.js";import{n as o,t as s}from"./Combobox-C9_g4stp.js";var c,l,u,d,f,p,m,box,h,g,_,v,y,b,x,S,C,w,T,E;function init_Combobox_stories(){return(init_Combobox_stories=e((()=>{i(),n(),o(),c=t(),l={title:`Components/Combobox`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Combobox** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=111-2)): `size` (`default` · `lg` · `xl`), `placeholder`, `leadIcon`, `leadMedia`, `multiple` (Figma Chips), `error` and `disabled`, with the Select's options, groups and separators, and `emptyMessage` (Figma Combobox Empty). Typing filters the list; arrows move, Enter picks, Escape closes; with `multiple`, Backspace removes the last chip."}}},decorators:[e=>(0,c.jsx)(`div`,{style:{minHeight:320},children:(0,c.jsx)(e,{})})]},u=[`Astro`,`SvelteKit`,`Nuxt.js`,`Next.js`,`React`,`Remix`].map(e=>({value:e.toLowerCase().replace(/\W/g,``),label:e})),d=[{label:`Americas`,options:[[`ny`,`(GMT-5) New York`],[`la`,`(GMT-8) Los Angeles`],[`chi`,`(GMT-6) Chicago`],[`tor`,`(GMT-5) Toronto`],[`sp`,`(GMT-3) São Paulo`]].map(([e,t])=>({value:e,label:t}))},{type:`separator`},{label:`Europe`,options:[[`lon`,`(GMT+0) London`],[`par`,`(GMT+1) Paris`],[`ber`,`(GMT+1) Berlin`]].map(([e,t])=>({value:e,label:t}))}],f=[{label:`Americas`,options:[[`ny`,`New York`,`GMT-5 United States`],[`la`,`Los Angeles`,`GMT-8 United States`],[`chi`,`Chicago`,`GMT-6 United States`],[`tor`,`Toronto`,`GMT-5 United States`],[`sp`,`São Paulo`,`GMT-3 Brazil`]].map(([e,t,n])=>({value:e,label:t,description:n}))},{type:`separator`},{label:`Europe`,options:[[`lon`,`London`,`GMT+0 United Kingdom`],[`par`,`Paris`,`GMT+1 France`],[`ber`,`Berlin`,`GMT+1 Germany`]].map(([e,t,n])=>({value:e,label:t,description:n}))}],p=[`Mira Okafor`,`Jonas Lindqvist`,`Priya Raman`,`Tomás Herrera`,`Aiko Tanaka`].map(e=>({value:e.split(` `)[0].toLowerCase(),label:e})),m=(0,c.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.875,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:[(0,c.jsx)(`path`,{d:`m21 21-4.34-4.34`}),(0,c.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`})]}),box=e=>(0,c.jsx)(`div`,{style:{width:280},children:e}),h={args:{variant:`default`,size:`default`,multiple:!1,leadIcon:!1,invalid:!1,disabled:!1,placeholder:`Select a framework`},argTypes:{variant:{name:`Style`,control:`inline-radio`,options:[`default`,`shadow`,`soft`],description:`As Input and Select`},size:{name:`Size`,control:`inline-radio`,options:[`default`,`lg`,`xl`]},multiple:{name:`Chips (multiple)`},leadIcon:{name:`Leading icon`},invalid:{name:`Invalid`},disabled:{name:`Disabled`},placeholder:{name:`Placeholder`}},render:({variant:e,size:t,multiple:n,leadIcon:r,invalid:i,disabled:a,placeholder:o})=>box(n?(0,c.jsx)(s,{multiple:!0,label:`Frameworks`,options:u,variant:e,size:t,leadIcon:r?m:void 0,error:i?`Pick at least one framework.`:void 0,disabled:a,placeholder:o},`multiple`):(0,c.jsx)(s,{label:`Framework`,options:u,variant:e,size:t,leadIcon:r?m:void 0,error:i?`Pick a framework.`:void 0,disabled:a,placeholder:o},`single`))},g={render:()=>(0,c.jsxs)(`form`,{style:{display:`grid`,gap:16,width:360},onSubmit:e=>e.preventDefault(),children:[(0,c.jsxs)(`div`,{style:{display:`grid`,gap:4},children:[(0,c.jsx)(`strong`,{style:{fontWeight:500,fontSize:16},children:`Transfer ownership`}),(0,c.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontSize:14},children:`The new owner can manage billing and members.`})]}),(0,c.jsx)(s,{label:`New owner`,name:`owner`,options:p,leadIcon:m,placeholder:`Search teammates`,caption:`You keep editor access after the transfer.`}),(0,c.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,c.jsx)(r,{variant:`outline`,children:`Cancel`}),(0,c.jsx)(r,{type:`submit`,children:`Transfer`})]})]})},_={render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gap:12,width:280},children:[`default`,`lg`,`xl`].map((e,t)=>(0,c.jsx)(s,{"aria-label":`Teammate (${e})`,size:e,options:p,defaultValue:p[t].value},e))})},v={render:()=>box((0,c.jsx)(s,{"aria-label":`Framework`,options:u,defaultValue:`nextjs`,placeholder:`Select a framework`}))},y={render:()=>box((0,c.jsx)(s,{multiple:!0,"aria-label":`Frameworks`,options:u,defaultValue:[`sveltekit`,`nextjs`],placeholder:`Select frameworks`}))},b={render:()=>box((0,c.jsx)(s,{"aria-label":`Timezone`,options:d,placeholder:`Select a timezone`}))},x={render:()=>box((0,c.jsx)(s,{"aria-label":`City`,options:f,placeholder:`Select a city`}))},S={render:()=>box((0,c.jsx)(s,{"aria-label":`Assignee`,options:p,defaultValue:`mira`,leadMedia:(0,c.jsx)(a,{size:`xs`,initials:`MO`})}))},C={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 280px)`,gap:16},children:[(0,c.jsx)(s,{"aria-label":`Placeholder`,options:u,placeholder:`Select…`}),(0,c.jsx)(s,{"aria-label":`Filled`,options:u,defaultValue:`nextjs`}),(0,c.jsx)(s,{"aria-label":`Disabled placeholder`,options:u,placeholder:`Select…`,disabled:!0}),(0,c.jsx)(s,{"aria-label":`Disabled filled`,options:u,defaultValue:`nextjs`,disabled:!0}),(0,c.jsx)(s,{"aria-label":`Invalid placeholder`,options:u,placeholder:`Select…`,error:`Pick a framework.`}),(0,c.jsx)(s,{"aria-label":`Invalid filled`,options:u,defaultValue:`nextjs`,error:`Next.js is not available on this plan.`})]})},w={parameters:{layout:`fullscreen`},render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,c.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:12,alignContent:`start`,minHeight:360},children:[(0,c.jsx)(s,{"aria-label":`Framework ${e}`,options:u,defaultValue:`nextjs`}),(0,c.jsx)(s,{multiple:!0,"aria-label":`Frameworks ${e}`,options:u,defaultValue:[`sveltekit`,`nextjs`]}),(0,c.jsx)(s,{"aria-label":`Timezone ${e}`,options:d,placeholder:`Select a timezone`,leadIcon:m,defaultOpen:!0})]},e))})},T={render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 240px)`,gap:16},children:[`default`,`shadow`,`soft`].map(e=>(0,c.jsx)(s,{variant:e,label:e,caption:`Caption text`,options:u,placeholder:`Select a framework`},e))})},E=[`Playground`,`InAForm`,`Sizes`,`SingleSelection`,`MultipleSelection`,`Groups`,`WithDescription`,`LeadingSlot`,`States`,`Themes`,`Styles`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    multiple: false,
    leadIcon: false,
    invalid: false,
    disabled: false,
    placeholder: 'Select a framework'
  },
  argTypes: {
    variant: {
      name: 'Style',
      control: 'inline-radio',
      options: ['default', 'shadow', 'soft'],
      description: 'As Input and Select'
    },
    size: {
      name: 'Size',
      control: 'inline-radio',
      options: ['default', 'lg', 'xl']
    },
    multiple: {
      name: 'Chips (multiple)'
    },
    leadIcon: {
      name: 'Leading icon'
    },
    invalid: {
      name: 'Invalid'
    },
    disabled: {
      name: 'Disabled'
    },
    placeholder: {
      name: 'Placeholder'
    }
  },
  render: ({
    variant,
    size,
    multiple,
    leadIcon,
    invalid,
    disabled,
    placeholder
  }) => box(multiple ? <Combobox key="multiple" multiple label="Frameworks" options={frameworks} variant={variant} size={size} leadIcon={leadIcon ? searchIcon : undefined} error={invalid ? 'Pick at least one framework.' : undefined} disabled={disabled} placeholder={placeholder} /> : <Combobox key="single" label="Framework" options={frameworks} variant={variant} size={size} leadIcon={leadIcon ? searchIcon : undefined} error={invalid ? 'Pick a framework.' : undefined} disabled={disabled} placeholder={placeholder} />)
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <form style={{
    display: 'grid',
    gap: 16,
    width: 360
  }} onSubmit={event => event.preventDefault()}>
      <div style={{
      display: 'grid',
      gap: 4
    }}>
        <strong style={{
        fontWeight: 500,
        fontSize: 16
      }}>Transfer ownership</strong>
        <span style={{
        color: 'var(--ds-muted-foreground)',
        fontSize: 14
      }}>The new owner can manage billing and members.</span>
      </div>
      <Combobox label="New owner" name="owner" options={people} leadIcon={searchIcon} placeholder="Search teammates" caption="You keep editor access after the transfer." />
      <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }}>
        <Button variant="outline">Cancel</Button>
        <Button type="submit">Transfer</Button>
      </div>
    </form>
}`,...g.parameters?.docs?.source},description:{story:`Figma demo "Combobox": in a form, with a label and a caption.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    width: 280
  }}>
      {(['default', 'lg', 'xl'] as const).map((size, i) => <Combobox key={size} aria-label={\`Teammate (\${size})\`} size={size} options={people} defaultValue={people[i].value} />)}
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Figma demo "Sizes": default, lg and xl.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => box(<Combobox aria-label="Framework" options={frameworks} defaultValue="nextjs" placeholder="Select a framework" />)
}`,...v.parameters?.docs?.source},description:{story:`Figma demo "Single selection": the list opens on click, typing or ↓; the selected option has a check mark.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => box(<Combobox multiple aria-label="Frameworks" options={frameworks} defaultValue={['sveltekit', 'nextjs']} placeholder="Select frameworks" />)
}`,...y.parameters?.docs?.source},description:{story:`Figma demo "Multiple selection": values are chips; × or Backspace removes them.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => box(<Combobox aria-label="Timezone" options={timezones} placeholder="Select a timezone" />)
}`,...b.parameters?.docs?.source},description:{story:`Figma demo "Groups": Select Labels and a separator; empty groups go as you type.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => box(<Combobox aria-label="City" options={cities} placeholder="Select a city" />)
}`,...x.parameters?.docs?.source},description:{story:`Figma demo "With description": options on two lines.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => box(<Combobox aria-label="Assignee" options={people} defaultValue="mira" leadMedia={<Avatar size="xs" initials="MO" />} />)
}`,...S.parameters?.docs?.source},description:{story:`Figma "Leading slot": the selected person's avatar before the text.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 280px)',
    gap: 16
  }}>
      <Combobox aria-label="Placeholder" options={frameworks} placeholder="Select…" />
      <Combobox aria-label="Filled" options={frameworks} defaultValue="nextjs" />
      <Combobox aria-label="Disabled placeholder" options={frameworks} placeholder="Select…" disabled />
      <Combobox aria-label="Disabled filled" options={frameworks} defaultValue="nextjs" disabled />
      <Combobox aria-label="Invalid placeholder" options={frameworks} placeholder="Select…" error="Pick a framework." />
      <Combobox aria-label="Invalid filled" options={frameworks} defaultValue="nextjs" error="Next.js is not available on this plan." />
    </div>
}`,...C.parameters?.docs?.source},description:{story:`Figma State: Default, Focus (click it), Disabled and Invalid, with Placeholder and Filled.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
      gap: 12,
      alignContent: 'start',
      minHeight: 360
    }}>
          <Combobox aria-label={\`Framework \${scheme}\`} options={frameworks} defaultValue="nextjs" />
          <Combobox multiple aria-label={\`Frameworks \${scheme}\`} options={frameworks} defaultValue={['sveltekit', 'nextjs']} />
          <Combobox aria-label={\`Timezone \${scheme}\`} options={timezones} placeholder="Select a timezone" leadIcon={searchIcon} defaultOpen />
        </div>)}
    </div>
}`,...w.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 240px)',
    gap: 16
  }}>
      {(['default', 'shadow', 'soft'] as const).map(variant => <Combobox key={variant} variant={variant} label={variant} caption="Caption text" options={frameworks} placeholder="Select a framework" />)}
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Style, as Input and Select: default (the Sort UI 2.0 field), shadow (+ Shadow/xs) and soft (borderless, tinted).`,...T.parameters?.docs?.description}}}})))()}init_Combobox_stories();export{b as Groups,g as InAForm,S as LeadingSlot,y as MultipleSelection,h as Playground,v as SingleSelection,_ as Sizes,C as States,T as Styles,w as Themes,x as WithDescription,E as __namedExportsOrder,l as default};