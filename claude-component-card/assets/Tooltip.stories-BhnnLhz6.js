import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BYZC1Rh4.js";import{n as r,t as i}from"./Button-CkTk0Dyx.js";function a({content:e,children:t,side:n=`top`,icon:r,shortcut:i,delay:a=500,open:c,defaultOpen:l=!1,onOpenChange:u,className:d}){let f=(0,o.useId)(),[p,m]=(0,o.useState)(l),h=c??p,g=(0,o.useRef)(void 0),_=e=>{clearTimeout(g.current),e!==h&&(c===void 0&&m(e),u?.(e))};(0,o.useEffect)(()=>()=>clearTimeout(g.current),[]),(0,o.useEffect)(()=>{if(!h)return;let e=e=>{e.key===`Escape`&&_(!1)};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)});let{onFocus:v,onBlur:y,onKeyDown:b}=t.props,x=[t.props[`aria-describedby`],f].filter(Boolean).join(` `);return(0,s.jsxs)(`span`,{className:`ds-tooltip-anchor`,onMouseEnter:()=>{clearTimeout(g.current),g.current=setTimeout(()=>_(!0),a)},onMouseLeave:()=>_(!1),children:[(0,o.cloneElement)(t,{"aria-describedby":x,onFocus:e=>{v?.(e),e.currentTarget.matches(`:focus-visible`)&&_(!0)},onBlur:e=>{y?.(e),_(!1)},onKeyDown:e=>{b?.(e),e.key===`Escape`&&h&&(e.stopPropagation(),_(!1))}}),(0,s.jsxs)(`span`,{id:f,role:`tooltip`,className:[`ds-tooltip`,`ds-tooltip--${n}`,d].filter(Boolean).join(` `),hidden:!h,children:[r&&(0,s.jsx)(`span`,{className:`ds-tooltip__icon`,"aria-hidden":!0,children:r}),(0,s.jsx)(`span`,{className:`ds-tooltip__text`,children:e}),i&&i.length>0&&(0,s.jsx)(`span`,{className:`ds-tooltip__keys`,children:i.map((e,t)=>(0,s.jsx)(`kbd`,{className:`ds-tooltip__kbd`,children:e},t))})]})]})}var o,s;function c(){return(c=e((()=>{o=n(),s=t(),a.__docgenInfo={description:`Figma "Tooltip".`,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`ReactNode`},description:`Figma "Label": short help for the trigger. It describes the trigger, so the trigger still needs its own name.`},children:{required:!0,tsType:{name:`ReactElement`,elements:[{name:`intersection`,raw:`HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> }`,elements:[{name:`HTMLAttributes`,elements:[{name:`HTMLElement`}],raw:`HTMLAttributes<HTMLElement>`},{name:`signature`,type:`object`,raw:`{ ref?: Ref<HTMLElement> }`,signature:{properties:[{key:`ref`,value:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`,required:!1}}]}}]}],raw:`ReactElement<HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> }>`},description:`The element the tooltip describes; it must take focus (a Button, a link…) and accept the handlers.`},side:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:"Figma Side (default `top`).",defaultValue:{value:`'top'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:'Figma "Leading slot": a 16 px icon before the label, using `currentColor`.'},shortcut:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Figma "Trailing slot" with a Kbd Group: the keys of the trigger's shortcut, e.g. \`['⌘', 'K']\`.`},delay:{required:!1,tsType:{name:`number`},description:`Milliseconds the pointer rests on the trigger before the tooltip shows (keyboard focus shows it at once).`,defaultValue:{value:`500`,computed:!1}},open:{required:!1,tsType:{name:`boolean`},description:`Open state (controlled), e.g. for documentation.`},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:`Class for the tooltip (Figma "Tooltip").`}}}})))()}var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),c(),l=t(),u={title:`Components/Tooltip`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Tooltip** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=166-2)): `side` (`top` · `bottom` · `left` · `right`), a Leading slot (`icon`) and a Trailing slot with a Kbd Group (`shortcut`). It describes its trigger (`aria-describedby`), shows on hover after `delay` ms or at once on keyboard focus, stays while the pointer is over it, and Escape hides it. The trigger keeps its own name; a tooltip is help, not a label."}}}},d=e=>(0,l.jsx)(`div`,{style:{display:`grid`,placeItems:`center`,minHeight:160,padding:`48px 160px`},children:(0,l.jsx)(e,{})}),f={decorators:[d],args:{content:`Refund this payment`,side:`top`,shortcut:!1,delay:500},argTypes:{content:{name:`Label`},side:{name:`Side`,control:`inline-radio`,options:[`top`,`bottom`,`left`,`right`]},shortcut:{name:`Trailing slot (Kbd Group)`},delay:{name:`Delay (ms)`,control:{type:`number`,min:0,step:100}}},render:({content:e,side:t,shortcut:n,delay:r})=>(0,l.jsx)(a,{content:e,side:t,shortcut:n?[`⌘`,`K`]:void 0,delay:r,children:(0,l.jsx)(i,{variant:`outline`,children:`Refund`})})},p={fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},m={render:()=>(0,l.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 240px)`,gap:64,padding:48,justifyItems:`center`},children:[`top`,`bottom`,`left`,`right`].map(e=>(0,l.jsxs)(`div`,{style:{display:`grid`,gap:48,justifyItems:`center`},children:[(0,l.jsxs)(`span`,{style:p,children:[`Side=`,e]}),(0,l.jsx)(a,{content:`Tooltip text`,side:e,open:!0,children:(0,l.jsx)(i,{variant:`outline`,children:`Trigger`})})]},e))})},h={decorators:[d],render:()=>(0,l.jsx)(a,{content:`Refund this payment`,children:(0,l.jsx)(i,{variant:`outline`,children:`Refund`})})},g={decorators:[d],render:()=>(0,l.jsx)(`div`,{style:{display:`flex`,gap:24},children:[`left`,`top`,`bottom`,`right`].map(e=>(0,l.jsx)(a,{content:`Copy payment link`,side:e,open:!0,children:(0,l.jsx)(i,{variant:`outline`,children:e[0].toUpperCase()+e.slice(1)})},e))})},_={decorators:[d],render:()=>(0,l.jsx)(a,{content:`Included at no additional charge for businesses on standard payments pricing`,open:!0,children:(0,l.jsx)(i,{variant:`outline`,children:`Fraud screening`})})},v={decorators:[d],render:()=>(0,l.jsx)(a,{content:`Search payments`,shortcut:[`⌘`,`K`],open:!0,children:(0,l.jsx)(i,{variant:`outline`,"aria-keyshortcuts":`Meta+K`,children:`Search`})})},y={parameters:{layout:`fullscreen`},render:()=>(0,l.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,l.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:`56px 24px`,display:`flex`,gap:120,justifyContent:`center`},children:[(0,l.jsx)(a,{content:e===`light`?`Refund this payment`:`Copy payment link`,open:!0,children:(0,l.jsx)(i,{variant:`outline`,children:e===`light`?`Light`:`Dark`})}),(0,l.jsx)(a,{content:`Search payments`,shortcut:[`⌘`,`K`],side:`bottom`,open:!0,children:(0,l.jsx)(i,{variant:`outline`,children:`Search`})})]},e))})},b=[`Playground`,`Variants`,`Default`,`Side`,`LongLabel`,`WithKeyboardShortcut`,`Themes`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Figma "Tooltip": every Side, shown open.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [room],
  render: () => <Tooltip content="Refund this payment">
      <Button variant="outline">Refund</Button>
    </Tooltip>
}`,...h.parameters?.docs?.source},description:{story:`Figma demo "Tooltip": hover or Tab to the button.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [room],
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>
      {(['left', 'top', 'bottom', 'right'] as const).map(side => <Tooltip key={side} content="Copy payment link" side={side} open>
          <Button variant="outline">{side[0].toUpperCase() + side.slice(1)}</Button>
        </Tooltip>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Figma demo "Side".`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  decorators: [room],
  render: () => <Tooltip content="Included at no additional charge for businesses on standard payments pricing" open>
      <Button variant="outline">Fraud screening</Button>
    </Tooltip>
}`,..._.parameters?.docs?.source},description:{story:`Figma demo "Long label": the text wraps at 320 px.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [room],
  render: () => <Tooltip content="Search payments" shortcut={['⌘', 'K']} open>
      <Button variant="outline" aria-keyshortcuts="Meta+K">
        Search
      </Button>
    </Tooltip>
}`,...v.parameters?.docs?.source},description:{story:`Figma demo "With keyboard shortcut": a Kbd Group in the Trailing slot.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...y.parameters?.docs?.description}}}})))()}x();export{h as Default,_ as LongLabel,f as Playground,g as Side,y as Themes,m as Variants,v as WithKeyboardShortcut,b as __namedExportsOrder,u as default};