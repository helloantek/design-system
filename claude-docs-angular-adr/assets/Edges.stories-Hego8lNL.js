import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t}from"./iframe-CEPbjgPm.js";import{n,t as r}from"./Button-G1r8qACU.js";import{f as i,h as a,o,t as s}from"./DropdownMenu-BBI-pKUV.js";import{n as c,t as l}from"./Combobox-Cc9mlSVd.js";import{i as u,t as d}from"./Popover-BbLfmSfh.js";import{n as f,t as p}from"./DatePicker-BjUrzSMy.js";import{n as m,t as h}from"./Select-Ds7JKrAd.js";import{n as g,t as _}from"./HoverCard-GHO16sPU.js";import{n as v,t as y}from"./Tooltip-BZaT8lfA.js";var b,x,S,corner,C,w;function init_Edges_stories(){return(init_Edges_stories=e((()=>{n(),c(),f(),a(),g(),u(),m(),v(),b=t(),x={title:`Playground/Popups near the edge`,tags:[`!autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Popups opened next to the edges of the window: each one flips to the side with room (a menu at the bottom opens upwards, a submenu at the right edge opens on the left, a tooltip on the right edge shows on the left) and shifts along its side so it stays 8 px inside the window. Select and Combobox lists also get shorter, and scroll, when neither side has room for them. Resize the window or scroll to see them follow.`}}}},S=[`Apple`,`Banana`,`Blueberry`,`Cherry`,`Grape`,`Kiwi`,`Lemon`,`Mango`,`Orange`,`Peach`,`Pear`,`Plum`].map(e=>({value:e.toLowerCase(),label:e})),corner=(e,t)=>(0,b.jsx)(`div`,{style:{position:`absolute`,display:`flex`,gap:8,...e},children:t}),C={render:()=>(0,b.jsxs)(`div`,{style:{position:`relative`,height:`100vh`,minHeight:480,overflow:`hidden`,background:`var(--ds-background)`,fontFamily:`var(--ds-font-sans)`},children:[corner({top:16,right:16},(0,b.jsx)(d,{trigger:(0,b.jsx)(r,{variant:`outline`,children:`Popover`}),title:`Popover at the top right`,description:`Centred on its trigger, it shifts left to stay inside the window.`,children:(0,b.jsx)(`p`,{style:{margin:0},children:`Its content.`})})),corner({top:`45%`,right:16},(0,b.jsx)(y,{content:`On the left: no room on the right`,side:`right`,children:(0,b.jsx)(r,{variant:`outline`,children:`Tooltip`})})),corner({bottom:16,left:16,width:200,display:`grid`},(0,b.jsx)(h,{"aria-label":`Fruit at the bottom left`,placeholder:`Fruit`,options:S})),corner({bottom:16,left:232,width:200,display:`grid`},(0,b.jsx)(l,{"aria-label":`Fruit to search`,placeholder:`Search a fruit`,options:S})),corner({bottom:16,left:448},(0,b.jsx)(p,{"aria-label":`Date at the bottom`,today:new Date(2026,10,8)})),corner({bottom:16,right:16},(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_,{trigger:(0,b.jsx)(`a`,{href:`#card`,children:`@orbit`}),children:`The Orbit team: a card that opens upwards near the bottom.`}),(0,b.jsxs)(s,{trigger:(0,b.jsx)(r,{variant:`outline`,children:`Menu`}),align:`end`,children:[(0,b.jsx)(o,{children:`Profile`}),(0,b.jsx)(o,{children:`Billing`}),(0,b.jsxs)(i,{label:`More`,children:[(0,b.jsx)(o,{children:`Opens on the left`}),(0,b.jsx)(o,{children:`Near the right edge`})]})]})]}))]})},w=[`Corners`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    height: '100vh',
    minHeight: 480,
    overflow: 'hidden',
    background: 'var(--ds-background)',
    fontFamily: 'var(--ds-font-sans)'
  }}>
      {corner({
      top: 16,
      right: 16
    }, <Popover trigger={<Button variant="outline">Popover</Button>} title="Popover at the top right" description="Centred on its trigger, it shifts left to stay inside the window.">
          <p style={{
        margin: 0
      }}>Its content.</p>
        </Popover>)}
      {corner({
      top: '45%',
      right: 16
    }, <Tooltip content="On the left: no room on the right" side="right">
          <Button variant="outline">Tooltip</Button>
        </Tooltip>)}
      {corner({
      bottom: 16,
      left: 16,
      width: 200,
      display: 'grid'
    }, <Select aria-label="Fruit at the bottom left" placeholder="Fruit" options={fruits} />)}
      {corner({
      bottom: 16,
      left: 232,
      width: 200,
      display: 'grid'
    }, <Combobox aria-label="Fruit to search" placeholder="Search a fruit" options={fruits} />)}
      {corner({
      bottom: 16,
      left: 448
    }, <DatePicker aria-label="Date at the bottom" today={new Date(2026, 10, 8)} />)}
      {corner({
      bottom: 16,
      right: 16
    }, <>
          <HoverCard trigger={<a href="#card">@orbit</a>}>The Orbit team: a card that opens upwards near the bottom.</HoverCard>
          <DropdownMenu trigger={<Button variant="outline">Menu</Button>} align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSub label="More">
              <DropdownMenuItem>Opens on the left</DropdownMenuItem>
              <DropdownMenuItem>Near the right edge</DropdownMenuItem>
            </DropdownMenuSub>
          </DropdownMenu>
        </>)}
    </div>
}`,...C.parameters?.docs?.source},description:{story:`Triggers in the corners and along the edges of the window.`,...C.parameters?.docs?.description}}}})))()}init_Edges_stories();export{C as Corners,w as __namedExportsOrder,x as default};