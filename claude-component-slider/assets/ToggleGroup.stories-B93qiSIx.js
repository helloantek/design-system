import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-B4-cDREj.js";import{n as r,r as i,t as a}from"./ToggleGroup-Dw48dKXb.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{o=n(),i(),s=t(),c={title:`Components/Toggle Group`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Toggle Group** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=128-1073)): Toggles in a group, `type` `single` (one on at most) or `multiple`, with `value` / `defaultValue` / `onValueChange`. Figma Variant → `variant`, Spacing → `spacing` (2 = 8 px · 1 = 4 px · 0 = joined), Orientation → `orientation`; `size` sets every item. Items are `ToggleGroupItem`s (`value`, a label or an `icon` with `aria-label`, `disabled`). The group is a named `role="group"` of `<button aria-pressed>`s with one Tab stop; the arrow keys, Home and End move between the items.'}}}},l=e=>(0,s.jsx)(`svg`,{viewBox:`0 0 24 24`,width:16,height:16,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),u={bold:l((0,s.jsx)(`path`,{d:`M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8`})),italic:l((0,s.jsx)(`path`,{d:`M19 4h-9M14 20H5M15 4 9 20`})),underline:l((0,s.jsx)(`path`,{d:`M6 4v6a6 6 0 0 0 12 0V4M4 20h16`})),alignLeft:l((0,s.jsx)(`path`,{d:`M15 12H3M17 18H3M21 6H3`})),alignCenter:l((0,s.jsx)(`path`,{d:`M17 12H7M19 18H5M21 6H3`})),alignRight:l((0,s.jsx)(`path`,{d:`M21 12H9M21 18H7M21 6H3`})),grid:l((0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`rect`,{width:`7`,height:`7`,x:`3`,y:`3`,rx:`1`}),(0,s.jsx)(`rect`,{width:`7`,height:`7`,x:`14`,y:`3`,rx:`1`}),(0,s.jsx)(`rect`,{width:`7`,height:`7`,x:`14`,y:`14`,rx:`1`}),(0,s.jsx)(`rect`,{width:`7`,height:`7`,x:`3`,y:`14`,rx:`1`})]})),list:l((0,s.jsx)(`path`,{d:`M3 12h.01M3 18h.01M3 6h.01M8 12h13M8 18h13M8 6h13`}))},d={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,color:`var(--ds-muted-foreground)`},f={args:{type:`single`,variant:`outline`,spacing:2,orientation:`horizontal`,size:`default`,disabled:!1},argTypes:{type:{control:`inline-radio`,options:[`single`,`multiple`]},variant:{name:`Variant`,control:`inline-radio`,options:[`default`,`outline`]},spacing:{name:`Spacing`,control:`inline-radio`,options:[2,1,0]},orientation:{name:`Orientation`,control:`inline-radio`,options:[`horizontal`,`vertical`]},size:{control:`inline-radio`,options:[`sm`,`default`,`lg`]}},render:({type:e,...t})=>e===`single`?(0,s.jsxs)(a,{type:`single`,defaultValue:`ios`,"aria-label":`Platform`,...t,children:[(0,s.jsx)(r,{value:`web`,children:`Web`}),(0,s.jsx)(r,{value:`ios`,children:`iOS`}),(0,s.jsx)(r,{value:`android`,children:`Android`})]},`single`):(0,s.jsxs)(a,{type:`multiple`,defaultValue:[`ios`],"aria-label":`Platforms`,...t,children:[(0,s.jsx)(r,{value:`web`,children:`Web`}),(0,s.jsx)(r,{value:`ios`,children:`iOS`}),(0,s.jsx)(r,{value:`android`,children:`Android`})]},`multiple`)},p={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`},children:[(0,s.jsxs)(a,{type:`multiple`,variant:`outline`,"aria-label":`Text formatting`,defaultValue:[`bold`],children:[(0,s.jsx)(r,{value:`bold`,icon:u.bold,"aria-label":`Bold`}),(0,s.jsx)(r,{value:`italic`,icon:u.italic,"aria-label":`Italic`}),(0,s.jsx)(r,{value:`underline`,icon:u.underline,"aria-label":`Underline`})]}),(0,s.jsxs)(a,{type:`single`,variant:`outline`,"aria-label":`Alignment`,defaultValue:`left`,children:[(0,s.jsx)(r,{value:`left`,icon:u.alignLeft,"aria-label":`Align left`}),(0,s.jsx)(r,{value:`center`,icon:u.alignCenter,"aria-label":`Align center`}),(0,s.jsx)(r,{value:`right`,icon:u.alignRight,"aria-label":`Align right`})]})]})},m={render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[`default`,`outline`].map(e=>(0,s.jsxs)(a,{type:`single`,variant:e,defaultValue:`ios`,"aria-label":`Platform (${e})`,children:[(0,s.jsx)(r,{value:`web`,children:`Web`}),(0,s.jsx)(r,{value:`ios`,children:`iOS`}),(0,s.jsx)(r,{value:`android`,children:`Android`})]},e))})},h={render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[`sm`,`default`,`lg`].map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,s.jsxs)(a,{type:`single`,variant:`outline`,size:e,defaultValue:`week`,"aria-label":`Range (${e})`,children:[(0,s.jsx)(r,{value:`week`,children:`Week`}),(0,s.jsx)(r,{value:`month`,children:`Month`}),(0,s.jsx)(r,{value:`year`,children:`Year`})]}),(0,s.jsxs)(a,{type:`single`,variant:`outline`,size:e,defaultValue:`grid`,"aria-label":`View (${e})`,children:[(0,s.jsx)(r,{value:`grid`,icon:u.grid,"aria-label":`Grid`}),(0,s.jsx)(r,{value:`list`,icon:u.list,"aria-label":`List`})]})]},e))})},g={render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[2,1,0].map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,s.jsxs)(`span`,{style:{...d,width:72},children:[`Spacing `,e]}),(0,s.jsxs)(a,{type:`single`,variant:`outline`,spacing:e,defaultValue:`month`,"aria-label":`Range, spacing ${e}`,children:[(0,s.jsx)(r,{value:`week`,children:`Week`}),(0,s.jsx)(r,{value:`month`,children:`Month`}),(0,s.jsx)(r,{value:`year`,children:`Year`})]})]},e))})},_={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`start`},children:[(0,s.jsxs)(a,{type:`single`,variant:`outline`,disabled:!0,defaultValue:`css`,"aria-label":`Format`,children:[(0,s.jsx)(r,{value:`css`,children:`CSS`}),(0,s.jsx)(r,{value:`json`,children:`JSON`}),(0,s.jsx)(r,{value:`swift`,children:`Swift`})]}),(0,s.jsxs)(a,{type:`single`,variant:`outline`,defaultValue:`ios`,"aria-label":`Target`,children:[(0,s.jsx)(r,{value:`web`,children:`Web`}),(0,s.jsx)(r,{value:`ios`,children:`iOS`}),(0,s.jsx)(r,{value:`android`,children:`Android`}),(0,s.jsx)(r,{value:`linux`,disabled:!0,children:`Linux`})]})]})},v={render:()=>(0,s.jsxs)(a,{type:`single`,variant:`outline`,spacing:0,orientation:`vertical`,defaultValue:`tablet`,"aria-label":`Device`,style:{width:160},children:[(0,s.jsx)(r,{value:`mobile`,children:`Mobile`}),(0,s.jsx)(r,{value:`tablet`,children:`Tablet`}),(0,s.jsx)(r,{value:`desktop`,children:`Desktop`})]})},y=[`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`,`Su`],b={render:function(){let[e,t]=(0,o.useState)(`500`),[n,i]=(0,o.useState)([`Mo`,`We`,`Fr`]);return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:16,justifyItems:`start`},children:[(0,s.jsx)(a,{type:`single`,variant:`outline`,value:e,onValueChange:e=>e&&t(e),"aria-label":`Font weight`,children:[[`400`,`Normal`],[`500`,`Medium`],[`700`,`Bold`]].map(([e,t])=>(0,s.jsxs)(r,{value:e,children:[(0,s.jsx)(`span`,{"aria-hidden":!0,style:{fontWeight:Number(e)},children:`Aa`}),` `,(0,s.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontWeight:400},children:t})]},e))}),(0,s.jsx)(a,{type:`multiple`,variant:`outline`,spacing:1,value:n,onValueChange:i,"aria-label":`Repeat on`,children:y.map(e=>(0,s.jsx)(r,{value:e,children:e},e))}),(0,s.jsxs)(`span`,{style:d,children:[`Repeats on `,n.length?y.filter(e=>n.includes(e)).join(`, `):`no days`]})]})}},x={parameters:{layout:`fullscreen`},render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,s.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:12,justifyItems:`start`},children:[(0,s.jsxs)(a,{type:`single`,defaultValue:`ios`,"aria-label":`Platform ${e}`,children:[(0,s.jsx)(r,{value:`web`,children:`Web`}),(0,s.jsx)(r,{value:`ios`,children:`iOS`}),(0,s.jsx)(r,{value:`android`,children:`Android`})]}),(0,s.jsxs)(a,{type:`single`,variant:`outline`,spacing:0,defaultValue:`month`,"aria-label":`Range ${e}`,children:[(0,s.jsx)(r,{value:`week`,children:`Week`}),(0,s.jsx)(r,{value:`month`,children:`Month`}),(0,s.jsx)(r,{value:`year`,children:`Year`})]})]},e))})},S=[`Playground`,`Formatting`,`Variants`,`Sizes`,`Spacing`,`Disabled`,`Orientation`,`Custom`,`Themes`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    variant: 'outline',
    spacing: 2,
    orientation: 'horizontal',
    size: 'default',
    disabled: false
  },
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['single', 'multiple']
    },
    variant: {
      name: 'Variant',
      control: 'inline-radio',
      options: ['default', 'outline']
    },
    spacing: {
      name: 'Spacing',
      control: 'inline-radio',
      options: [2, 1, 0]
    },
    orientation: {
      name: 'Orientation',
      control: 'inline-radio',
      options: ['horizontal', 'vertical']
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'default', 'lg']
    }
  },
  render: ({
    type,
    ...args
  }) => type === 'single' ? <ToggleGroup key="single" type="single" defaultValue="ios" aria-label="Platform" {...args}>
        <ToggleGroupItem value="web">Web</ToggleGroupItem>
        <ToggleGroupItem value="ios">iOS</ToggleGroupItem>
        <ToggleGroupItem value="android">Android</ToggleGroupItem>
      </ToggleGroup> : <ToggleGroup key="multiple" type="multiple" defaultValue={['ios']} aria-label="Platforms" {...args}>
        <ToggleGroupItem value="web">Web</ToggleGroupItem>
        <ToggleGroupItem value="ios">iOS</ToggleGroupItem>
        <ToggleGroupItem value="android">Android</ToggleGroupItem>
      </ToggleGroup>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>
      <ToggleGroup type="multiple" variant="outline" aria-label="Text formatting" defaultValue={['bold']}>
        <ToggleGroupItem value="bold" icon={icons.bold} aria-label="Bold" />
        <ToggleGroupItem value="italic" icon={icons.italic} aria-label="Italic" />
        <ToggleGroupItem value="underline" icon={icons.underline} aria-label="Underline" />
      </ToggleGroup>
      <ToggleGroup type="single" variant="outline" aria-label="Alignment" defaultValue="left">
        <ToggleGroupItem value="left" icon={icons.alignLeft} aria-label="Align left" />
        <ToggleGroupItem value="center" icon={icons.alignCenter} aria-label="Align center" />
        <ToggleGroupItem value="right" icon={icons.alignRight} aria-label="Align right" />
      </ToggleGroup>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Figma demo "Toggle Group": text formatting (multiple) and alignment (single), icon only.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    justifyItems: 'start'
  }}>
      {(['default', 'outline'] as const).map(variant => <ToggleGroup key={variant} type="single" variant={variant} defaultValue="ios" aria-label={\`Platform (\${variant})\`}>
          <ToggleGroupItem value="web">Web</ToggleGroupItem>
          <ToggleGroupItem value="ios">iOS</ToggleGroupItem>
          <ToggleGroupItem value="android">Android</ToggleGroupItem>
        </ToggleGroup>)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Figma demo "Variants": Default and Outline.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    justifyItems: 'start'
  }}>
      {(['sm', 'default', 'lg'] as const).map(size => <div key={size} style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
          <ToggleGroup type="single" variant="outline" size={size} defaultValue="week" aria-label={\`Range (\${size})\`}>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
            <ToggleGroupItem value="year">Year</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" variant="outline" size={size} defaultValue="grid" aria-label={\`View (\${size})\`}>
            <ToggleGroupItem value="grid" icon={icons.grid} aria-label="Grid" />
            <ToggleGroupItem value="list" icon={icons.list} aria-label="List" />
          </ToggleGroup>
        </div>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Figma demo "Sizes": sm, default and lg, with labels and icons.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    justifyItems: 'start'
  }}>
      {([2, 1, 0] as const).map(spacing => <div key={spacing} style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
          <span style={{
        ...muted,
        width: 72
      }}>Spacing {spacing}</span>
          <ToggleGroup type="single" variant="outline" spacing={spacing} defaultValue="month" aria-label={\`Range, spacing \${spacing}\`}>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
            <ToggleGroupItem value="year">Year</ToggleGroupItem>
          </ToggleGroup>
        </div>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Figma demo "Spacing": 2 (8 px), 1 (4 px) and 0 (joined).`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    justifyItems: 'start'
  }}>
      <ToggleGroup type="single" variant="outline" disabled defaultValue="css" aria-label="Format">
        <ToggleGroupItem value="css">CSS</ToggleGroupItem>
        <ToggleGroupItem value="json">JSON</ToggleGroupItem>
        <ToggleGroupItem value="swift">Swift</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" variant="outline" defaultValue="ios" aria-label="Target">
        <ToggleGroupItem value="web">Web</ToggleGroupItem>
        <ToggleGroupItem value="ios">iOS</ToggleGroupItem>
        <ToggleGroupItem value="android">Android</ToggleGroupItem>
        <ToggleGroupItem value="linux" disabled>
          Linux
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Figma demo "Disabled": the whole group, or one item.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" variant="outline" spacing={0} orientation="vertical" defaultValue="tablet" aria-label="Device" style={{
    width: 160
  }}>
      <ToggleGroupItem value="mobile">Mobile</ToggleGroupItem>
      <ToggleGroupItem value="tablet">Tablet</ToggleGroupItem>
      <ToggleGroupItem value="desktop">Desktop</ToggleGroupItem>
    </ToggleGroup>
}`,...v.parameters?.docs?.source},description:{story:`Figma demo "Orientation": a joined vertical group.`,...v.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [weight, setWeight] = useState('500');
    const [picked, setPicked] = useState(['Mo', 'We', 'Fr']);
    return <div style={{
      display: 'grid',
      gap: 16,
      justifyItems: 'start'
    }}>
        <ToggleGroup type="single" variant="outline" value={weight} onValueChange={v => v && setWeight(v)} aria-label="Font weight">
          {[['400', 'Normal'], ['500', 'Medium'], ['700', 'Bold']].map(([value, label]) => <ToggleGroupItem key={value} value={value}>
              <span aria-hidden style={{
            fontWeight: Number(value)
          }}>
                Aa
              </span>{' '}
              <span style={{
            color: 'var(--ds-muted-foreground)',
            fontWeight: 400
          }}>{label}</span>
            </ToggleGroupItem>)}
        </ToggleGroup>
        <ToggleGroup type="multiple" variant="outline" spacing={1} value={picked} onValueChange={setPicked} aria-label="Repeat on">
          {days.map(d => <ToggleGroupItem key={d} value={d}>
              {d}
            </ToggleGroupItem>)}
        </ToggleGroup>
        <span style={muted}>Repeats on {picked.length ? days.filter(d => picked.includes(d)).join(', ') : 'no days'}</span>
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:`Figma demo "Custom": font weights shown in their weight, and days of the week as a multiple choice.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      justifyItems: 'start'
    }}>
          <ToggleGroup type="single" defaultValue="ios" aria-label={\`Platform \${scheme}\`}>
            <ToggleGroupItem value="web">Web</ToggleGroupItem>
            <ToggleGroupItem value="ios">iOS</ToggleGroupItem>
            <ToggleGroupItem value="android">Android</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" variant="outline" spacing={0} defaultValue="month" aria-label={\`Range \${scheme}\`}>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
            <ToggleGroupItem value="year">Year</ToggleGroupItem>
          </ToggleGroup>
        </div>)}
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...x.parameters?.docs?.description}}}})))()}C();export{b as Custom,_ as Disabled,p as Formatting,v as Orientation,f as Playground,h as Sizes,g as Spacing,x as Themes,m as Variants,S as __namedExportsOrder,c as default};