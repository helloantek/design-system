import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D4LWtXSw.js";import{n,t as r}from"./Button-DAloysgt.js";import{$ as i,Ot as a,a as o,c as s,r as c,ut as l,y as u}from"./react-DkOz5Atw.js";import{n as d,t as f}from"./Avatar-DTt1FYRJ.js";import{n as p,t as m}from"./Badge-CxhO34HC.js";import{r as h,t as g}from"./Bubble-C7MHUInK.js";import{n as _,r as v,t as y}from"./Carousel-CX3oLTVI.js";import{i as b,n as x,r as S,t as C}from"./Message-B-pjebm9.js";var w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{l(),d(),p(),h(),n(),v(),b(),w=t(),T={title:`Components/Message`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Message** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=348-2)): one sender's bubbles with their avatar beside the last bubble, a header (`sender`, `badge`) and a `footer` (time, receipts, actions). `align` (`start` · `end`); `MessageGroup` stacks a sender's messages 8 px apart with the `avatar` on the last one; `MessageTyping` is the \"is typing…\" line."}}}},E=e=>({width:`min(448px, calc(100vw - 32px))`,display:`flex`,flexDirection:`column`,gap:e}),D=(e,t,n)=>(0,w.jsx)(f,{initials:e,name:t,style:{"--avatar-fill":`var(--ds-palette-${n}-solid)`,"--avatar-ink":`var(--ds-primary-foreground)`}}),O=D(`J`,`Jonas Lindqvist`,`orange`),k=D(`M`,`Mira Okafor`,`lime`),A=D(`O`,`Olivia Miller`,`orange`),j={args:{align:`start`,avatar:!0,header:!0,footer:!0},argTypes:{align:{name:`Align`,control:`inline-radio`,options:[`start`,`end`]},avatar:{name:`Avatar`,control:`boolean`},header:{name:`Header`,control:`boolean`},footer:{name:`Footer`,control:`boolean`}},render:({align:e,avatar:t,header:n,footer:r})=>(0,w.jsx)(`div`,{style:E(0),children:(0,w.jsx)(C,{align:e,avatar:t?e===`end`?k:O:void 0,sender:n?e===`end`?`Mira Okafor`:`Jonas Lindqvist`:void 0,footer:r?e===`end`?`9:05 AM · Seen by Jonas and Priya`:`Today, 9:02 AM`:void 0,children:(0,w.jsx)(g,{variant:e===`end`?`default`:`muted`,children:e===`end`?`Great. Is Billing blocked on the sticky-header variant, or on capacity?`:`Biggest jump was Data Table — Checkout replaced their last three local tables. Only Billing is still on the legacy grid.`})})})},M={render:()=>(0,w.jsxs)(`div`,{style:E(16),role:`log`,"aria-label":`Payments thread`,children:[(0,w.jsxs)(x,{avatar:O,children:[(0,w.jsx)(C,{sender:`Jonas Lindqvist`,badge:(0,w.jsx)(m,{shape:`pill`,children:`Payments`}),children:(0,w.jsx)(g,{variant:`muted`,children:`Weekly checkout digest is in: 84% of payments now go through the new checkout, up from 79% last week.`})}),(0,w.jsx)(C,{footer:`Today, 9:02 AM`,children:(0,w.jsx)(g,{variant:`muted`,children:`Biggest jump was the mobile app — it retired its last three legacy payment screens. Only invoices still use the old flow.`})})]}),(0,w.jsx)(C,{align:`end`,avatar:k,footer:`9:05 AM · Seen by Jonas and Olivia`,children:(0,w.jsx)(g,{children:`Great. Are invoices blocked on the saved-cards feature, or on capacity?`})}),(0,w.jsx)(C,{avatar:A,sender:`Olivia Miller`,badge:(0,w.jsx)(m,{shape:`pill`,children:`Billing squad`}),footer:`9:11 AM`,children:(0,w.jsx)(g,{children:`Capacity. Saved cards shipped in checkout 3.1 and work for us — the switch is scoped for the Oct 6 sprint.`})}),(0,w.jsx)(S,{children:`Olivia is typing…`})]})},N={render:()=>(0,w.jsxs)(`div`,{style:E(16),children:[(0,w.jsx)(C,{footer:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`span`,{style:{display:`flex`},children:[(0,w.jsx)(r,{variant:`ghost`,size:`xs`,icon:(0,w.jsx)(o,{}),"aria-label":`Copy`}),(0,w.jsx)(r,{variant:`ghost`,size:`xs`,icon:(0,w.jsx)(u,{}),"aria-label":`Share`}),(0,w.jsx)(r,{variant:`ghost`,size:`xs`,icon:(0,w.jsx)(c,{}),"aria-label":`Pin`})]}),(0,w.jsx)(`span`,{style:{marginInlineStart:2},children:`Just now`})]}),children:(0,w.jsx)(g,{variant:`muted`,children:`Did the new pricing page go live with this morning's deploy?`})}),(0,w.jsx)(C,{align:`end`,footer:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`span`,{role:`alert`,style:{color:`var(--ds-destructive-foreground)`},children:`Failed to send`}),(0,w.jsx)(r,{variant:`ghost`,size:`xs`,icon:(0,w.jsx)(i,{}),"aria-label":`Retry`})]}),children:(0,w.jsx)(g,{children:`Yes, it shipped together with the annual plans and the new FAQ.`})})]})},P=`radial-gradient(120% 90% at 30% 40%, #9a9a9a, #1f1f1f 70%)`,F={render:()=>(0,w.jsxs)(`div`,{style:E(16),children:[(0,w.jsxs)(x,{align:`end`,avatar:k,children:[(0,w.jsx)(C,{children:(0,w.jsx)(`div`,{style:{width:320,borderRadius:20,overflow:`hidden`},children:(0,w.jsx)(y,{"aria-label":`Onboarding screens`,controls:`overlay`,indicators:!0,gap:0,children:[0,1,2,3].map(e=>(0,w.jsx)(_,{role:`img`,"aria-label":`Screen ${e+1}`,style:{height:213,background:P}},e))})})}),(0,w.jsx)(C,{children:(0,w.jsx)(g,{children:`Here's the new onboarding screen from today's build.`})})]}),(0,w.jsxs)(x,{avatar:O,children:[(0,w.jsx)(C,{children:(0,w.jsx)(g,{variant:`muted`,children:`Looks great. I wrote up the copy for the acme audit, too.`})}),(0,w.jsx)(C,{footer:`Today, 9:02 AM`,children:(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,width:240,boxSizing:`border-box`,padding:`8px 12px`,borderRadius:12,background:`var(--ds-popover)`,boxShadow:`0 0 0 1px var(--ds-border)`,fontFamily:`var(--ds-font-sans)`},children:[(0,w.jsx)(s,{size:28,color:`var(--ds-palette-orange-solid)`,"aria-hidden":!0}),(0,w.jsxs)(`span`,{style:{display:`grid`,flex:1,minWidth:0},children:[(0,w.jsx)(`span`,{style:{fontSize:14,lineHeight:`20px`,color:`var(--ds-foreground)`},children:`acme-audit.pdf`}),(0,w.jsx)(`span`,{style:{fontSize:12,lineHeight:`16px`,color:`var(--ds-muted-foreground)`},children:`2.1 MB`})]}),(0,w.jsx)(r,{variant:`ghost`,size:`xs`,icon:(0,w.jsx)(a,{}),"aria-label":`Download acme-audit.pdf`})]})})]}),(0,w.jsx)(C,{align:`end`,avatar:k,children:(0,w.jsx)(g,{children:`Thanks! I'll add it to the build before it goes out to beta testers.`})})]})},I={parameters:{layout:`fullscreen`},render:()=>(0,w.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`},children:[`light`,`dark`].map(e=>(0,w.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`flex`,flexDirection:`column`,gap:16},children:[(0,w.jsx)(C,{avatar:O,sender:`Jonas Lindqvist`,badge:(0,w.jsx)(m,{shape:`pill`,children:`Payments`}),footer:`Today, 9:02 AM`,children:(0,w.jsx)(g,{variant:`muted`,children:`Checkout is at 84 % this week.`})}),(0,w.jsx)(C,{align:`end`,avatar:k,footer:`Seen`,children:(0,w.jsx)(g,{children:`Nice, ship the rest on Monday.`})}),(0,w.jsx)(S,{children:`Jonas is typing…`})]},e))})},L=[`Playground`,`Demo`,`Actions`,`Attachment`,`Themes`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'start',
    avatar: true,
    header: true,
    footer: true
  },
  argTypes: {
    align: {
      name: 'Align',
      control: 'inline-radio',
      options: ['start', 'end']
    },
    avatar: {
      name: 'Avatar',
      control: 'boolean'
    },
    header: {
      name: 'Header',
      control: 'boolean'
    },
    footer: {
      name: 'Footer',
      control: 'boolean'
    }
  },
  render: ({
    align,
    avatar,
    header,
    footer
  }) => <div style={column(0)}>
      <Message align={align} avatar={avatar ? align === 'end' ? mira : jonas : undefined} sender={header ? align === 'end' ? 'Mira Okafor' : 'Jonas Lindqvist' : undefined} footer={footer ? align === 'end' ? '9:05 AM · Seen by Jonas and Priya' : 'Today, 9:02 AM' : undefined}>
        <Bubble variant={align === 'end' ? 'default' : 'muted'}>
          {align === 'end' ? 'Great. Is Billing blocked on the sticky-header variant, or on capacity?' : 'Biggest jump was Data Table — Checkout replaced their last three local tables. Only Billing is still on the legacy grid.'}
        </Bubble>
      </Message>
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column(16)} role="log" aria-label="Payments thread">
      <MessageGroup avatar={jonas}>
        <Message sender="Jonas Lindqvist" badge={<Badge shape="pill">Payments</Badge>}>
          <Bubble variant="muted">Weekly checkout digest is in: 84% of payments now go through the new checkout, up from 79% last week.</Bubble>
        </Message>
        <Message footer="Today, 9:02 AM">
          <Bubble variant="muted">Biggest jump was the mobile app — it retired its last three legacy payment screens. Only invoices still use the old flow.</Bubble>
        </Message>
      </MessageGroup>
      <Message align="end" avatar={mira} footer="9:05 AM · Seen by Jonas and Olivia">
        <Bubble>Great. Are invoices blocked on the saved-cards feature, or on capacity?</Bubble>
      </Message>
      <Message avatar={olivia} sender="Olivia Miller" badge={<Badge shape="pill">Billing squad</Badge>} footer="9:11 AM">
        <Bubble>Capacity. Saved cards shipped in checkout 3.1 and work for us — the switch is scoped for the Oct 6 sprint.</Bubble>
      </Message>
      <MessageTyping>Olivia is typing…</MessageTyping>
    </div>
}`,...M.parameters?.docs?.source},description:{story:`Figma demo "Message": a team thread with senders, team badges, grouped messages, receipts and a typing line.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column(16)}>
      <Message footer={<>
            <span style={{
        display: 'flex'
      }}>
              <Button variant="ghost" size="xs" icon={<RiFileCopyLine />} aria-label="Copy" />
              <Button variant="ghost" size="xs" icon={<RiShareForwardLine />} aria-label="Share" />
              <Button variant="ghost" size="xs" icon={<RiPushpinLine />} aria-label="Pin" />
            </span>
            <span style={{
        marginInlineStart: 2
      }}>Just now</span>
          </>}>
        <Bubble variant="muted">Did the new pricing page go live with this morning's deploy?</Bubble>
      </Message>
      <Message align="end" footer={<>
            <span role="alert" style={{
        color: 'var(--ds-destructive-foreground)'
      }}>
              Failed to send
            </span>
            <Button variant="ghost" size="xs" icon={<RiRefreshLine />} aria-label="Retry" />
          </>}>
        <Bubble>Yes, it shipped together with the annual plans and the new FAQ.</Bubble>
      </Message>
    </div>
}`,...N.parameters?.docs?.source},description:{story:`Figma demo "Actions": copy, share and pin under a message, and a send error with a retry.`,...N.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column(16)}>
      <MessageGroup align="end" avatar={mira}>
        <Message>
          <div style={{
          width: 320,
          borderRadius: 20,
          overflow: 'hidden'
        }}>
            <Carousel aria-label="Onboarding screens" controls="overlay" indicators gap={0}>
              {[0, 1, 2, 3].map(i => <CarouselSlide key={i} role="img" aria-label={\`Screen \${i + 1}\`} style={{
              height: 213,
              background: shot
            }} />)}
            </Carousel>
          </div>
        </Message>
        <Message>
          <Bubble>Here's the new onboarding screen from today's build.</Bubble>
        </Message>
      </MessageGroup>
      <MessageGroup avatar={jonas}>
        <Message>
          <Bubble variant="muted">Looks great. I wrote up the copy for the acme audit, too.</Bubble>
        </Message>
        <Message footer="Today, 9:02 AM">
          {/* A file card until Attachment (later in stage 6) provides one. */}
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          width: 240,
          boxSizing: 'border-box',
          padding: '8px 12px',
          borderRadius: 12,
          background: 'var(--ds-popover)',
          boxShadow: '0 0 0 1px var(--ds-border)',
          fontFamily: 'var(--ds-font-sans)'
        }}>
            <RiFilePdf2Fill size={28} color="var(--ds-palette-orange-solid)" aria-hidden />
            <span style={{
            display: 'grid',
            flex: 1,
            minWidth: 0
          }}>
              <span style={{
              fontSize: 14,
              lineHeight: '20px',
              color: 'var(--ds-foreground)'
            }}>acme-audit.pdf</span>
              <span style={{
              fontSize: 12,
              lineHeight: '16px',
              color: 'var(--ds-muted-foreground)'
            }}>2.1 MB</span>
            </span>
            <Button variant="ghost" size="xs" icon={<RiDownloadLine />} aria-label="Download acme-audit.pdf" />
          </div>
        </Message>
      </MessageGroup>
      <Message align="end" avatar={mira}>
        <Bubble>Thanks! I'll add it to the build before it goes out to beta testers.</Bubble>
      </Message>
    </div>
}`,...F.parameters?.docs?.source},description:{story:`Figma demo "Attachment": a picture in a carousel and a file sent with a message.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
          <Message avatar={jonas} sender="Jonas Lindqvist" badge={<Badge shape="pill">Payments</Badge>} footer="Today, 9:02 AM">
            <Bubble variant="muted">Checkout is at 84 % this week.</Bubble>
          </Message>
          <Message align="end" avatar={mira} footer="Seen">
            <Bubble>Nice, ship the rest on Monday.</Bubble>
          </Message>
          <MessageTyping>Jonas is typing…</MessageTyping>
        </div>)}
    </div>
}`,...I.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...I.parameters?.docs?.description}}}})))()}R();export{N as Actions,F as Attachment,M as Demo,j as Playground,I as Themes,L as __namedExportsOrder,T as default};