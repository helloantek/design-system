import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B_4MHl6h.js";import{n,t as r}from"./Button-DQqWUwDM.js";import{n as i,t as a}from"./Tooltip-DuQFmTpM.js";var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),o=t(),s={title:`Components/Tooltip`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Tooltip** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=166-2)): `side` (`top` · `bottom` · `left` · `right`), a Leading slot (`icon`) and a Trailing slot with a Kbd Group (`shortcut`). It describes its trigger (`aria-describedby`), shows on hover after `delay` ms or at once on keyboard focus, stays while the pointer is over it, and Escape hides it. The trigger keeps its own name; a tooltip is help, not a label."}}}},c=e=>(0,o.jsx)(`div`,{style:{display:`grid`,placeItems:`center`,minHeight:160,padding:`48px 160px`},children:(0,o.jsx)(e,{})}),l={decorators:[c],args:{content:`Refund this payment`,side:`top`,shortcut:!1,delay:500},argTypes:{content:{name:`Label`},side:{name:`Side`,control:`inline-radio`,options:[`top`,`bottom`,`left`,`right`]},shortcut:{name:`Trailing slot (Kbd Group)`},delay:{name:`Delay (ms)`,control:{type:`number`,min:0,step:100}}},render:({content:e,side:t,shortcut:n,delay:i})=>(0,o.jsx)(a,{content:e,side:t,shortcut:n?[`⌘`,`K`]:void 0,delay:i,children:(0,o.jsx)(r,{variant:`outline`,children:`Refund`})})},u={fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},d={render:()=>(0,o.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 240px)`,gap:64,padding:48,justifyItems:`center`},children:[`top`,`bottom`,`left`,`right`].map(e=>(0,o.jsxs)(`div`,{style:{display:`grid`,gap:48,justifyItems:`center`},children:[(0,o.jsxs)(`span`,{style:u,children:[`Side=`,e]}),(0,o.jsx)(a,{content:`Tooltip text`,side:e,open:!0,children:(0,o.jsx)(r,{variant:`outline`,children:`Trigger`})})]},e))})},f={decorators:[c],render:()=>(0,o.jsx)(a,{content:`Refund this payment`,children:(0,o.jsx)(r,{variant:`outline`,children:`Refund`})})},p={decorators:[c],render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:24},children:[`left`,`top`,`bottom`,`right`].map(e=>(0,o.jsx)(a,{content:`Copy payment link`,side:e,open:!0,children:(0,o.jsx)(r,{variant:`outline`,children:e[0].toUpperCase()+e.slice(1)})},e))})},m={decorators:[c],render:()=>(0,o.jsx)(a,{content:`Included at no additional charge for businesses on standard payments pricing`,open:!0,children:(0,o.jsx)(r,{variant:`outline`,children:`Fraud screening`})})},h={decorators:[c],render:()=>(0,o.jsx)(a,{content:`Search payments`,shortcut:[`⌘`,`K`],open:!0,children:(0,o.jsx)(r,{variant:`outline`,"aria-keyshortcuts":`Meta+K`,children:`Search`})})},g={parameters:{layout:`fullscreen`},render:()=>(0,o.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,o.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:`56px 24px`,display:`flex`,gap:120,justifyContent:`center`},children:[(0,o.jsx)(a,{content:e===`light`?`Refund this payment`:`Copy payment link`,open:!0,children:(0,o.jsx)(r,{variant:`outline`,children:e===`light`?`Light`:`Dark`})}),(0,o.jsx)(a,{content:`Search payments`,shortcut:[`⌘`,`K`],side:`bottom`,open:!0,children:(0,o.jsx)(r,{variant:`outline`,children:`Search`})})]},e))})},_=[`Playground`,`Variants`,`Default`,`Side`,`LongLabel`,`WithKeyboardShortcut`,`Themes`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [room],
  args: {
    content: 'Refund this payment',
    side: 'top',
    shortcut: false,
    delay: 500
  },
  argTypes: {
    content: {
      name: 'Label'
    },
    side: {
      name: 'Side',
      control: 'inline-radio',
      options: ['top', 'bottom', 'left', 'right']
    },
    shortcut: {
      name: 'Trailing slot (Kbd Group)'
    },
    delay: {
      name: 'Delay (ms)',
      control: {
        type: 'number',
        min: 0,
        step: 100
      }
    }
  },
  render: ({
    content,
    side,
    shortcut,
    delay
  }) => <Tooltip content={content} side={side} shortcut={shortcut ? ['⌘', 'K'] : undefined} delay={delay}>
      <Button variant="outline">Refund</Button>
    </Tooltip>
}`,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 240px)',
    gap: 64,
    padding: 48,
    justifyItems: 'center'
  }}>
      {(['top', 'bottom', 'left', 'right'] as const).map(side => <div key={side} style={{
      display: 'grid',
      gap: 48,
      justifyItems: 'center'
    }}>
          <span style={caption}>Side={side}</span>
          <Tooltip content="Tooltip text" side={side} open>
            <Button variant="outline">Trigger</Button>
          </Tooltip>
        </div>)}
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Figma "Tooltip": every Side, shown open.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  decorators: [room],
  render: () => <Tooltip content="Refund this payment">
      <Button variant="outline">Refund</Button>
    </Tooltip>
}`,...f.parameters?.docs?.source},description:{story:`Figma demo "Tooltip": hover or Tab to the button.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [room],
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>
      {(['left', 'top', 'bottom', 'right'] as const).map(side => <Tooltip key={side} content="Copy payment link" side={side} open>
          <Button variant="outline">{side[0].toUpperCase() + side.slice(1)}</Button>
        </Tooltip>)}
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Figma demo "Side".`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [room],
  render: () => <Tooltip content="Included at no additional charge for businesses on standard payments pricing" open>
      <Button variant="outline">Fraud screening</Button>
    </Tooltip>
}`,...m.parameters?.docs?.source},description:{story:`Figma demo "Long label": the text wraps at 320 px.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [room],
  render: () => <Tooltip content="Search payments" shortcut={['⌘', 'K']} open>
      <Button variant="outline" aria-keyshortcuts="Meta+K">
        Search
      </Button>
    </Tooltip>
}`,...h.parameters?.docs?.source},description:{story:`Figma demo "With keyboard shortcut": a Kbd Group in the Trailing slot.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: '56px 24px',
      display: 'flex',
      gap: 120,
      justifyContent: 'center'
    }}>
          <Tooltip content={scheme === 'light' ? 'Refund this payment' : 'Copy payment link'} open>
            <Button variant="outline">{scheme === 'light' ? 'Light' : 'Dark'}</Button>
          </Tooltip>
          <Tooltip content="Search payments" shortcut={['⌘', 'K']} side="bottom" open>
            <Button variant="outline">Search</Button>
          </Tooltip>
        </div>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...g.parameters?.docs?.description}}}})))()}v();export{f as Default,m as LongLabel,l as Playground,p as Side,g as Themes,d as Variants,h as WithKeyboardShortcut,_ as __namedExportsOrder,s as default};