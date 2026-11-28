import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-K62VYoil.js";import{n as r,t as i}from"./Button-CsmfaU6J.js";import{i as a,t as o}from"./Input-D0hVzaZ6.js";import{n as s,t as c}from"./Avatar-mPRaNMEJ.js";import{n as l,t as u}from"./Avatar.fixtures-BW_JbX3l.js";import{i as d,n as f,o as p,t as m}from"./Card-D-MvLqBR.js";import{i as h,n as g,r as _,t as v}from"./Collapsible-BRBSgL7w.js";function y(){return(0,C.jsx)(C.Fragment,{children:A.map(e=>(0,C.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,C.jsx)(c,{size:`sm`,src:e.src,initials:e.initials,name:e.name,style:e.src?void 0:{background:`var(--ds-palette-orange-solid)`,color:`var(--ds-primary-foreground)`}}),(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,minWidth:0},children:[(0,C.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,C.jsx)(`span`,{style:O,children:e.name}),(0,C.jsx)(`span`,{style:k,children:e.time})]}),(0,C.jsx)(`p`,{style:D,children:e.text})]})]},e.name))})}function b({name:e,detail:t,price:n}){return(0,C.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:`8px 12px`,borderRadius:`var(--ds-radius-md)`,boxShadow:`inset 0 0 0 1px var(--ds-border)`},children:[(0,C.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,C.jsx)(`div`,{style:O,children:e}),(0,C.jsx)(`div`,{style:k,children:t})]}),(0,C.jsx)(`span`,{style:O,children:n})]})}function x({legs:e}){return(0,C.jsx)(`ol`,{style:{listStyle:`none`,margin:0,padding:0,display:`flex`,flexDirection:`column`,gap:12},children:e.map((e,t)=>(0,C.jsxs)(`li`,{style:{display:`flex`,gap:8,position:`relative`},children:[(0,C.jsxs)(`span`,{"aria-hidden":!0,style:{width:20,display:`flex`,justifyContent:`center`,paddingTop:4},children:[(0,C.jsx)(`span`,{style:{width:8,height:8,borderRadius:`50%`,boxShadow:`0 0 0 2px ${e.dot}`,marginTop:2}}),t===0&&(0,C.jsx)(`span`,{style:{position:`absolute`,left:9.5,top:18,bottom:-12,width:1,background:`var(--ds-border)`}})]}),(0,C.jsxs)(`div`,{style:{width:80},children:[(0,C.jsx)(`div`,{style:O,children:e.time}),(0,C.jsx)(`div`,{style:k,children:e.date})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{style:O,children:e.city}),(0,C.jsx)(`div`,{style:k,children:e.code})]})]},e.time))})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{S=n(),s(),l(),r(),p(),a(),h(),C=t(),w={title:`Components/Collapsible`,parameters:{layout:`padded`,docs:{description:{component:"Implements the Sort UI 2.0 **Collapsible** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=297-90)): Figma State → `open` / `defaultOpen` / `onOpenChange`, the **trigger** slot → `CollapsibleTrigger` (the Figma sample: a 14/20 Medium label with a chevron; or any button with `asChild`), the **content** slot → `CollapsibleContent`, 16 px below. The trigger is a button with `aria-expanded` and `aria-controls`; Enter or Space toggles it; closed content is `hidden`. `disabled` stops the trigger."}}}},T=e=>(0,C.jsx)(`svg`,{viewBox:`0 0 24 24`,width:16,height:16,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),E={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,letterSpacing:`-0.005em`,margin:0},D={...E,color:`var(--ds-muted-foreground)`},O={...E,color:`var(--ds-foreground)`,fontWeight:500},k={...D,fontSize:12,lineHeight:`16px`},A=[{name:`Hana Mizuno`,time:`Yesterday`,text:`Booked the cabin with the hot tub. Check-in is after 4 PM, so let’s hike first.`,src:u},{name:`Pablo Reyes`,time:`2 days ago`,text:`I can drive four of us from Oakland. Leaving at 7 AM to beat traffic on I-80.`,initials:`P`}],j={args:{defaultOpen:!1,disabled:!1},render:({defaultOpen:e,disabled:t})=>(0,C.jsx)(`div`,{style:{width:448,maxWidth:`100%`},children:(0,C.jsxs)(v,{defaultOpen:e,disabled:t,children:[(0,C.jsx)(_,{children:`Replies`}),(0,C.jsx)(g,{children:(0,C.jsx)(y,{})})]},String(e))})},M={render:()=>(0,C.jsx)(`div`,{style:{width:448,maxWidth:`100%`,display:`grid`,gap:40},children:[!1,!0].map(e=>(0,C.jsxs)(v,{defaultOpen:e,children:[(0,C.jsx)(_,{children:e?`Hide replies`:`Show replies`}),(0,C.jsx)(g,{children:(0,C.jsx)(y,{})})]},String(e)))})},N={render:function(){let[e,t]=(0,S.useState)(!0);return(0,C.jsxs)(m,{style:{width:448,maxWidth:`100%`},children:[(0,C.jsx)(d,{title:`Weekend at Lake Tahoe`,description:`Cabin for six near Tahoe City, Friday to Sunday. Split four ways, it’s $310 each.`}),(0,C.jsx)(f,{children:(0,C.jsxs)(v,{open:e,onOpenChange:t,children:[(0,C.jsx)(_,{children:e?`Hide replies`:`Show replies`}),(0,C.jsx)(g,{children:(0,C.jsx)(y,{})})]})})]})}},P={render:function(){let[e,t]=(0,S.useState)(!0);return(0,C.jsxs)(m,{style:{width:448,maxWidth:`100%`},children:[(0,C.jsx)(d,{title:`Radius`,description:`Set the corner radius of the element.`}),(0,C.jsx)(f,{children:(0,C.jsxs)(v,{open:e,onOpenChange:t,style:{flexDirection:`row`,alignItems:`flex-start`,gap:8},children:[(0,C.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[!e&&(0,C.jsx)(o,{"aria-label":`Radius, all corners`,defaultValue:`0`}),(0,C.jsx)(g,{style:{display:e?`grid`:void 0,gridTemplateColumns:`1fr 1fr`,gap:8},children:[`Top left`,`Top right`,`Bottom left`,`Bottom right`].map(e=>(0,C.jsx)(o,{"aria-label":`Radius, ${e.toLowerCase()}`,defaultValue:`0`},e))})]}),(0,C.jsx)(_,{asChild:!0,children:(0,C.jsx)(i,{variant:`outline`,"aria-label":e?`One radius for all corners`:`A radius for each corner`,icon:T(e?(0,C.jsx)(`path`,{d:`M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3`}):(0,C.jsx)(`path`,{d:`M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3`}))})})]})})]})}},F=[{name:`Linen overshirt`,detail:`Sand · M`,price:`$68.00`},{name:`Merino crew socks`,detail:`Charcoal · 2 pairs`,price:`$24.00`},{name:`Canvas tote`,detail:`Natural`,price:`$36.00`}],I={render:function(){let[e,t]=(0,S.useState)(!0),n={listStyle:`none`,margin:0,padding:0,display:`flex`,flexDirection:`column`,gap:12};return(0,C.jsxs)(v,{open:e,onOpenChange:t,style:{width:448,maxWidth:`100%`,"--collapsible-gap":`12px`},children:[(0,C.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:8},children:[(0,C.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,C.jsx)(`h3`,{style:{...O,fontWeight:500},children:`Order #4821`}),(0,C.jsx)(`p`,{style:{...D,fontSize:12,lineHeight:`16px`},children:`Placed Sep 28 · 3 items · $128.00`})]}),(0,C.jsx)(_,{asChild:!0,children:(0,C.jsx)(i,{variant:`ghost`,"aria-label":e?`Show fewer items`:`Show all items`,icon:T(e?(0,C.jsx)(`path`,{d:`m7 20 5-5 5 5M7 4l5 5 5-5`}):(0,C.jsx)(`path`,{d:`m7 15 5 5 5-5M7 9l5-5 5 5`}))})})]}),(0,C.jsx)(`ul`,{style:n,children:(0,C.jsx)(b,{...F[0]})}),(0,C.jsx)(g,{style:{gap:12},children:(0,C.jsx)(`ul`,{style:n,children:F.slice(1).map(e=>(0,C.jsx)(b,{...e},e.name))})})]})}},L=[[{time:`16:05`,date:`Thu, Oct 15`,city:`San Francisco`,code:`SFO`,dot:`var(--ds-palette-green-solid)`},{time:`11:55`,date:`Fri, Oct 16`,city:`Frankfurt`,code:`FRA`,dot:`var(--ds-palette-blue-solid)`}],[{time:`13:40`,date:`Fri, Oct 16`,city:`Frankfurt`,code:`FRA`,dot:`var(--ds-palette-green-solid)`},{time:`17:45`,date:`Fri, Oct 16`,city:`Athens`,code:`ATH`,dot:`var(--ds-palette-blue-solid)`}]],R={render:function(){let[e,t]=(0,S.useState)(!0);return(0,C.jsx)(m,{style:{width:448,maxWidth:`100%`},children:(0,C.jsx)(f,{children:(0,C.jsxs)(v,{open:e,onOpenChange:t,children:[(0,C.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:8},children:[(0,C.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,C.jsxs)(`h3`,{"aria-label":`SFO to ATH`,style:{...O,fontSize:16,lineHeight:`24px`,display:`flex`,alignItems:`center`,gap:8},children:[`SFO `,T((0,C.jsx)(`path`,{d:`M5 12h14m-7-7 7 7-7 7`})),` ATH`]}),(0,C.jsx)(`p`,{style:D,children:`Thu, Oct 15 · 1 stop · 15h 40m`})]}),(0,C.jsx)(_,{asChild:!0,children:(0,C.jsx)(i,{variant:`outline`,size:`sm`,children:e?`Hide details`:`Show details`})})]}),(0,C.jsxs)(g,{children:[(0,C.jsx)(x,{legs:L[0]}),(0,C.jsx)(`p`,{style:{...D,fontSize:12,lineHeight:`16px`,textAlign:`center`,padding:10,borderRadius:`var(--ds-radius-md)`,background:`var(--ds-muted)`},children:`Layover in Frankfurt · 1h 45m`}),(0,C.jsx)(x,{legs:L[1]})]})]})})})}},z={render:()=>(0,C.jsxs)(v,{disabled:!0,style:{width:448,maxWidth:`100%`},children:[(0,C.jsx)(_,{children:`Show replies`}),(0,C.jsx)(g,{children:(0,C.jsx)(y,{})})]})},B={parameters:{layout:`fullscreen`},render:()=>(0,C.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,C.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24},children:(0,C.jsxs)(v,{defaultOpen:!0,children:[(0,C.jsxs)(_,{children:[`Hide replies (`,e,`)`]}),(0,C.jsx)(g,{children:(0,C.jsx)(y,{})})]})},e))})},V=[`Playground`,`States`,`Default`,`SettingsPanel`,`OrderSummary`,`FlightDetails`,`Disabled`,`Themes`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: false,
    disabled: false
  },
  render: ({
    defaultOpen,
    disabled
  }) => <div style={{
    width: 448,
    maxWidth: '100%'
  }}>
      <Collapsible key={String(defaultOpen)} defaultOpen={defaultOpen} disabled={disabled}>
        <CollapsibleTrigger>Replies</CollapsibleTrigger>
        <CollapsibleContent>
          <Replies />
        </CollapsibleContent>
      </Collapsible>
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 448,
    maxWidth: '100%',
    display: 'grid',
    gap: 40
  }}>
      {[false, true].map(open => <Collapsible key={String(open)} defaultOpen={open}>
          <CollapsibleTrigger>{open ? 'Hide replies' : 'Show replies'}</CollapsibleTrigger>
          <CollapsibleContent>
            <Replies />
          </CollapsibleContent>
        </Collapsible>)}
    </div>
}`,...M.parameters?.docs?.source},description:{story:`Figma State=Closed and State=Open, with the trigger's label following the state.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <Card style={{
      width: 448,
      maxWidth: '100%'
    }}>
        <CardHeader title="Weekend at Lake Tahoe" description="Cabin for six near Tahoe City, Friday to Sunday. Split four ways, it’s $310 each." />
        <CardContent>
          <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleTrigger>{open ? 'Hide replies' : 'Show replies'}</CollapsibleTrigger>
            <CollapsibleContent>
              <Replies />
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>;
  }
}`,...N.parameters?.docs?.source},description:{story:`Figma demo "Collapsible": replies inside a Card.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    const corners = ['Top left', 'Top right', 'Bottom left', 'Bottom right'];
    return <Card style={{
      width: 448,
      maxWidth: '100%'
    }}>
        <CardHeader title="Radius" description="Set the corner radius of the element." />
        <CardContent>
          <Collapsible open={open} onOpenChange={setOpen} style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 8
        }}>
            <div style={{
            flex: 1,
            minWidth: 0
          }}>
              {!open && <Input aria-label="Radius, all corners" defaultValue="0" />}
              <CollapsibleContent style={{
              display: open ? 'grid' : undefined,
              gridTemplateColumns: '1fr 1fr',
              gap: 8
            }}>
                {corners.map(c => <Input key={c} aria-label={\`Radius, \${c.toLowerCase()}\`} defaultValue="0" />)}
              </CollapsibleContent>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="outline" aria-label={open ? 'One radius for all corners' : 'A radius for each corner'} icon={open ? icon(<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />) : icon(<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />)} />
            </CollapsibleTrigger>
          </Collapsible>
        </CardContent>
      </Card>;
  }
}`,...P.parameters?.docs?.source},description:{story:`Figma demo "Settings panel": one radius for all corners, or an Outline icon button that opens one per corner.`,...P.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    const list: CSSProperties = {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    };
    return <Collapsible open={open} onOpenChange={setOpen} style={{
      width: 448,
      maxWidth: '100%',
      '--collapsible-gap': '12px'
    } as CSSProperties}>
        <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 8
      }}>
          <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
            <h3 style={{
            ...strong,
            fontWeight: 500
          }}>Order #4821</h3>
            <p style={{
            ...muted,
            fontSize: 12,
            lineHeight: '16px'
          }}>Placed Sep 28 · 3 items · $128.00</p>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" aria-label={open ? 'Show fewer items' : 'Show all items'} icon={open ? icon(<path d="m7 20 5-5 5 5M7 4l5 5 5-5" />) : icon(<path d="m7 15 5 5 5-5M7 9l5-5 5 5" />)} />
          </CollapsibleTrigger>
        </div>
        <ul style={list}>
          <OrderItem {...orderItems[0]} />
        </ul>
        <CollapsibleContent style={{
        gap: 12
      }}>
          <ul style={list}>
            {orderItems.slice(1).map(item => <OrderItem key={item.name} {...item} />)}
          </ul>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...I.parameters?.docs?.source},description:{story:`Figma demo "Order summary": a Ghost icon button in the header; the first item stays visible.`,...I.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(true);
    return <Card style={{
      width: 448,
      maxWidth: '100%'
    }}>
        <CardContent>
          <Collapsible open={open} onOpenChange={setOpen}>
            <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8
          }}>
              <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            }}>
                <h3 aria-label="SFO to ATH" style={{
                ...strong,
                fontSize: 16,
                lineHeight: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}>
                  SFO {icon(<path d="M5 12h14m-7-7 7 7-7 7" />)} ATH
                </h3>
                <p style={muted}>Thu, Oct 15 · 1 stop · 15h 40m</p>
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm">
                  {open ? 'Hide details' : 'Show details'}
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <Leg legs={stops[0]} />
              <p style={{
              ...muted,
              fontSize: 12,
              lineHeight: '16px',
              textAlign: 'center',
              padding: 10,
              borderRadius: 'var(--ds-radius-md)',
              background: 'var(--ds-muted)'
            }}>Layover in Frankfurt · 1h 45m</p>
              <Leg legs={stops[1]} />
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>;
  }
}`,...R.parameters?.docs?.source},description:{story:`Figma demo "Flight details": an Outline sm button that says what it does.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible disabled style={{
    width: 448,
    maxWidth: '100%'
  }}>
      <CollapsibleTrigger>Show replies</CollapsibleTrigger>
      <CollapsibleContent>
        <Replies />
      </CollapsibleContent>
    </Collapsible>
}`,...z.parameters?.docs?.source},description:{story:"`disabled`: the trigger does nothing.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24
    }}>
          <Collapsible defaultOpen>
            <CollapsibleTrigger>Hide replies ({scheme})</CollapsibleTrigger>
            <CollapsibleContent>
              <Replies />
            </CollapsibleContent>
          </Collapsible>
        </div>)}
    </div>
}`,...B.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...B.parameters?.docs?.description}}}})))()}H();export{N as Default,z as Disabled,R as FlightDetails,I as OrderSummary,j as Playground,P as SettingsPanel,M as States,B as Themes,V as __namedExportsOrder,w as default};