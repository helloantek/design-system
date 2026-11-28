import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-DmGxFmVQ.js";import{n as r,t as i}from"./Button-CmClKByn.js";import{n as a,t as o}from"./Avatar-CKgQwk4Y.js";import{i as s,t as c}from"./Input-DM_vOhEp.js";import{i as l,n as u,o as d,t as f}from"./Card-BlatkR4L.js";import{n as p,t as m}from"./Avatar.fixtures-8M8kT8xK.js";import{i as h,n as g,r as _,t as v}from"./Collapsible-BbVpPtcA.js";function Replies(){return(0,b.jsx)(b.Fragment,{children:E.map(e=>(0,b.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,b.jsx)(o,{size:`sm`,src:e.src,initials:e.initials,name:e.name,style:e.src?void 0:{background:`var(--ds-palette-orange-solid)`,color:`var(--ds-primary-foreground)`}}),(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,minWidth:0},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,b.jsx)(`span`,{style:w,children:e.name}),(0,b.jsx)(`span`,{style:T,children:e.time})]}),(0,b.jsx)(`p`,{style:C,children:e.text})]})]},e.name))})}function OrderItem({name:e,detail:t,price:n}){return(0,b.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:`8px 12px`,borderRadius:`var(--ds-radius-md)`,boxShadow:`inset 0 0 0 1px var(--ds-border)`},children:[(0,b.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,b.jsx)(`div`,{style:w,children:e}),(0,b.jsx)(`div`,{style:T,children:t})]}),(0,b.jsx)(`span`,{style:w,children:n})]})}function Leg({legs:e}){return(0,b.jsx)(`ol`,{style:{listStyle:`none`,margin:0,padding:0,display:`flex`,flexDirection:`column`,gap:12},children:e.map((e,t)=>(0,b.jsxs)(`li`,{style:{display:`flex`,gap:8,position:`relative`},children:[(0,b.jsxs)(`span`,{"aria-hidden":!0,style:{width:20,display:`flex`,justifyContent:`center`,paddingTop:4},children:[(0,b.jsx)(`span`,{style:{width:8,height:8,borderRadius:`50%`,boxShadow:`0 0 0 2px ${e.dot}`,marginTop:2}}),t===0&&(0,b.jsx)(`span`,{style:{position:`absolute`,left:9.5,top:18,bottom:-12,width:1,background:`var(--ds-border)`}})]}),(0,b.jsxs)(`div`,{style:{width:80},children:[(0,b.jsx)(`div`,{style:w,children:e.time}),(0,b.jsx)(`div`,{style:T,children:e.date})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{style:w,children:e.city}),(0,b.jsx)(`div`,{style:T,children:e.code})]})]},e.time))})}var y,b,x,icon,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function init_Collapsible_stories(){return(init_Collapsible_stories=e((()=>{y=n(),a(),p(),r(),d(),s(),h(),b=t(),x={title:`Components/Collapsible`,parameters:{layout:`padded`,docs:{description:{component:"Implements the Sort UI 2.0 **Collapsible** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=297-90)): Figma State → `open` / `defaultOpen` / `onOpenChange`, the **trigger** slot → `CollapsibleTrigger` (the Figma sample: a 14/20 Medium label with a chevron; or any button with `asChild`), the **content** slot → `CollapsibleContent`, 16 px below. The trigger is a button with `aria-expanded` and `aria-controls`; Enter or Space toggles it; closed content is `hidden`. `disabled` stops the trigger."}}}},icon=e=>(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,width:16,height:16,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),S={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,letterSpacing:`-0.005em`,margin:0},C={...S,color:`var(--ds-muted-foreground)`},w={...S,color:`var(--ds-foreground)`,fontWeight:500},T={...C,fontSize:12,lineHeight:`16px`},E=[{name:`Hana Mizuno`,time:`Yesterday`,text:`Booked the cabin with the hot tub. Check-in is after 4 PM, so let’s hike first.`,src:m},{name:`Pablo Reyes`,time:`2 days ago`,text:`I can drive four of us from Oakland. Leaving at 7 AM to beat traffic on I-80.`,initials:`P`}],D={args:{defaultOpen:!1,disabled:!1},render:({defaultOpen:e,disabled:t})=>(0,b.jsx)(`div`,{style:{width:448,maxWidth:`100%`},children:(0,b.jsxs)(v,{defaultOpen:e,disabled:t,children:[(0,b.jsx)(_,{children:`Replies`}),(0,b.jsx)(g,{children:(0,b.jsx)(Replies,{})})]},String(e))})},O={render:()=>(0,b.jsx)(`div`,{style:{width:448,maxWidth:`100%`,display:`grid`,gap:40},children:[!1,!0].map(e=>(0,b.jsxs)(v,{defaultOpen:e,children:[(0,b.jsx)(_,{children:e?`Hide replies`:`Show replies`}),(0,b.jsx)(g,{children:(0,b.jsx)(Replies,{})})]},String(e)))})},k={render:function Render(){let[e,t]=(0,y.useState)(!0);return(0,b.jsxs)(f,{style:{width:448,maxWidth:`100%`},children:[(0,b.jsx)(l,{title:`Weekend at Lake Tahoe`,description:`Cabin for six near Tahoe City, Friday to Sunday. Split four ways, it’s $310 each.`}),(0,b.jsx)(u,{children:(0,b.jsxs)(v,{open:e,onOpenChange:t,children:[(0,b.jsx)(_,{children:e?`Hide replies`:`Show replies`}),(0,b.jsx)(g,{children:(0,b.jsx)(Replies,{})})]})})]})}},A={render:function Render(){let[e,t]=(0,y.useState)(!0);return(0,b.jsxs)(f,{style:{width:448,maxWidth:`100%`},children:[(0,b.jsx)(l,{title:`Radius`,description:`Set the corner radius of the element.`}),(0,b.jsx)(u,{children:(0,b.jsxs)(v,{open:e,onOpenChange:t,style:{flexDirection:`row`,alignItems:`flex-start`,gap:8},children:[(0,b.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[!e&&(0,b.jsx)(c,{"aria-label":`Radius, all corners`,defaultValue:`0`}),(0,b.jsx)(g,{style:{display:e?`grid`:void 0,gridTemplateColumns:`1fr 1fr`,gap:8},children:[`Top left`,`Top right`,`Bottom left`,`Bottom right`].map(e=>(0,b.jsx)(c,{"aria-label":`Radius, ${e.toLowerCase()}`,defaultValue:`0`},e))})]}),(0,b.jsx)(_,{asChild:!0,children:(0,b.jsx)(i,{variant:`outline`,"aria-label":e?`One radius for all corners`:`A radius for each corner`,icon:icon(e?(0,b.jsx)(`path`,{d:`M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3`}):(0,b.jsx)(`path`,{d:`M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3`}))})})]})})]})}},j=[{name:`Linen overshirt`,detail:`Sand · M`,price:`$68.00`},{name:`Merino crew socks`,detail:`Charcoal · 2 pairs`,price:`$24.00`},{name:`Canvas tote`,detail:`Natural`,price:`$36.00`}],M={render:function Render(){let[e,t]=(0,y.useState)(!0),n={listStyle:`none`,margin:0,padding:0,display:`flex`,flexDirection:`column`,gap:12};return(0,b.jsxs)(v,{open:e,onOpenChange:t,style:{width:448,maxWidth:`100%`,"--collapsible-gap":`12px`},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:8},children:[(0,b.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,b.jsx)(`h3`,{style:{...w,fontWeight:500},children:`Order #4821`}),(0,b.jsx)(`p`,{style:{...C,fontSize:12,lineHeight:`16px`},children:`Placed Sep 28 · 3 items · $128.00`})]}),(0,b.jsx)(_,{asChild:!0,children:(0,b.jsx)(i,{variant:`ghost`,"aria-label":e?`Show fewer items`:`Show all items`,icon:icon(e?(0,b.jsx)(`path`,{d:`m7 20 5-5 5 5M7 4l5 5 5-5`}):(0,b.jsx)(`path`,{d:`m7 15 5 5 5-5M7 9l5-5 5 5`}))})})]}),(0,b.jsx)(`ul`,{style:n,children:(0,b.jsx)(OrderItem,{...j[0]})}),(0,b.jsx)(g,{style:{gap:12},children:(0,b.jsx)(`ul`,{style:n,children:j.slice(1).map(e=>(0,b.jsx)(OrderItem,{...e},e.name))})})]})}},N=[[{time:`16:05`,date:`Thu, Oct 15`,city:`San Francisco`,code:`SFO`,dot:`var(--ds-palette-green-solid)`},{time:`11:55`,date:`Fri, Oct 16`,city:`Frankfurt`,code:`FRA`,dot:`var(--ds-palette-blue-solid)`}],[{time:`13:40`,date:`Fri, Oct 16`,city:`Frankfurt`,code:`FRA`,dot:`var(--ds-palette-green-solid)`},{time:`17:45`,date:`Fri, Oct 16`,city:`Athens`,code:`ATH`,dot:`var(--ds-palette-blue-solid)`}]],P={render:function Render(){let[e,t]=(0,y.useState)(!0);return(0,b.jsx)(f,{style:{width:448,maxWidth:`100%`},children:(0,b.jsx)(u,{children:(0,b.jsxs)(v,{open:e,onOpenChange:t,children:[(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:8},children:[(0,b.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,b.jsxs)(`h3`,{"aria-label":`SFO to ATH`,style:{...w,fontSize:16,lineHeight:`24px`,display:`flex`,alignItems:`center`,gap:8},children:[`SFO `,icon((0,b.jsx)(`path`,{d:`M5 12h14m-7-7 7 7-7 7`})),` ATH`]}),(0,b.jsx)(`p`,{style:C,children:`Thu, Oct 15 · 1 stop · 15h 40m`})]}),(0,b.jsx)(_,{asChild:!0,children:(0,b.jsx)(i,{variant:`outline`,size:`sm`,children:e?`Hide details`:`Show details`})})]}),(0,b.jsxs)(g,{children:[(0,b.jsx)(Leg,{legs:N[0]}),(0,b.jsx)(`p`,{style:{...C,fontSize:12,lineHeight:`16px`,textAlign:`center`,padding:10,borderRadius:`var(--ds-radius-md)`,background:`var(--ds-muted)`},children:`Layover in Frankfurt · 1h 45m`}),(0,b.jsx)(Leg,{legs:N[1]})]})]})})})}},F={render:()=>(0,b.jsxs)(v,{disabled:!0,style:{width:448,maxWidth:`100%`},children:[(0,b.jsx)(_,{children:`Show replies`}),(0,b.jsx)(g,{children:(0,b.jsx)(Replies,{})})]})},I={parameters:{layout:`fullscreen`},render:()=>(0,b.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,b.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24},children:(0,b.jsxs)(v,{defaultOpen:!0,children:[(0,b.jsxs)(_,{children:[`Hide replies (`,e,`)`]}),(0,b.jsx)(g,{children:(0,b.jsx)(Replies,{})})]})},e))})},L=[`Playground`,`States`,`Default`,`SettingsPanel`,`OrderSummary`,`FlightDetails`,`Disabled`,`Themes`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`Figma State=Closed and State=Open, with the trigger's label following the state.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Figma demo "Collapsible": replies inside a Card.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`Figma demo "Settings panel": one radius for all corners, or an Outline icon button that opens one per corner.`,...A.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`Figma demo "Order summary": a Ghost icon button in the header; the first item stays visible.`,...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`Figma demo "Flight details": an Outline sm button that says what it does.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible disabled style={{
    width: 448,
    maxWidth: '100%'
  }}>
      <CollapsibleTrigger>Show replies</CollapsibleTrigger>
      <CollapsibleContent>
        <Replies />
      </CollapsibleContent>
    </Collapsible>
}`,...F.parameters?.docs?.source},description:{story:"`disabled`: the trigger does nothing.",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...I.parameters?.docs?.description}}}})))()}init_Collapsible_stories();export{k as Default,F as Disabled,P as FlightDetails,M as OrderSummary,D as Playground,A as SettingsPanel,O as States,I as Themes,L as __namedExportsOrder,x as default};