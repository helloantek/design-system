import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CYeCrKZN.js";import{Ct as n,S as r,Yt as i,a,ft as o,r as s}from"./react-CeP5cQpq.js";import{r as c,t as l}from"./Attachment-bWst8c4h.js";import{n as u,t as d}from"./Badge-ChPrgBLh.js";import{n as f,t as p}from"./Button-DqAdndRR.js";import{n as m,t as h}from"./Avatar-Die6xFz_.js";import{r as g,t as _}from"./Bubble-DBTFSbL5.js";import{n as v,r as y,t as b}from"./Carousel-Dsmoha0S.js";import{i as x,n as S,r as C,t as w}from"./Message-2RY4PYaE.js";var T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{n(),c(),m(),u(),g(),f(),y(),x(),T=t(),E={title:`Components/Message`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Message** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=348-2)): one sender's bubbles with their avatar beside the last bubble, a header (`sender`, `badge`) and a `footer` (time, receipts, actions). `align` (`start` · `end`); `MessageGroup` stacks a sender's messages 8 px apart with the `avatar` on the last one; `MessageTyping` is the \"is typing…\" line."}}}},D=e=>({width:`min(448px, calc(100vw - 32px))`,display:`flex`,flexDirection:`column`,gap:e}),O=(e,t,n)=>(0,T.jsx)(h,{initials:e,name:t,style:{"--avatar-fill":`var(--ds-palette-${n}-solid)`,"--avatar-ink":`var(--ds-primary-foreground)`}}),k=O(`J`,`Jonas Lindqvist`,`orange`),A=O(`M`,`Mira Okafor`,`lime`),j=O(`O`,`Olivia Miller`,`orange`),M={args:{align:`start`,avatar:!0,header:!0,footer:!0},argTypes:{align:{name:`Align`,control:`inline-radio`,options:[`start`,`end`]},avatar:{name:`Avatar`,control:`boolean`},header:{name:`Header`,control:`boolean`},footer:{name:`Footer`,control:`boolean`}},render:({align:e,avatar:t,header:n,footer:r})=>(0,T.jsx)(`div`,{style:D(0),children:(0,T.jsx)(w,{align:e,avatar:t?e===`end`?A:k:void 0,sender:n?e===`end`?`Mira Okafor`:`Jonas Lindqvist`:void 0,footer:r?e===`end`?`9:05 AM · Seen by Jonas and Priya`:`Today, 9:02 AM`:void 0,children:(0,T.jsx)(_,{variant:e===`end`?`default`:`muted`,children:e===`end`?`Great. Is Billing blocked on the sticky-header variant, or on capacity?`:`Biggest jump was Data Table — Checkout replaced their last three local tables. Only Billing is still on the legacy grid.`})})})},N={render:()=>(0,T.jsxs)(`div`,{style:D(16),role:`log`,"aria-label":`Payments thread`,children:[(0,T.jsxs)(S,{avatar:k,children:[(0,T.jsx)(w,{sender:`Jonas Lindqvist`,badge:(0,T.jsx)(d,{shape:`pill`,children:`Payments`}),children:(0,T.jsx)(_,{variant:`muted`,children:`Weekly checkout digest is in: 84% of payments now go through the new checkout, up from 79% last week.`})}),(0,T.jsx)(w,{footer:`Today, 9:02 AM`,children:(0,T.jsx)(_,{variant:`muted`,children:`Biggest jump was the mobile app — it retired its last three legacy payment screens. Only invoices still use the old flow.`})})]}),(0,T.jsx)(w,{align:`end`,avatar:A,footer:`9:05 AM · Seen by Jonas and Olivia`,children:(0,T.jsx)(_,{children:`Great. Are invoices blocked on the saved-cards feature, or on capacity?`})}),(0,T.jsx)(w,{avatar:j,sender:`Olivia Miller`,badge:(0,T.jsx)(d,{shape:`pill`,children:`Billing squad`}),footer:`9:11 AM`,children:(0,T.jsx)(_,{children:`Capacity. Saved cards shipped in checkout 3.1 and work for us — the switch is scoped for the Oct 6 sprint.`})}),(0,T.jsx)(C,{children:`Olivia is typing…`})]})},P={render:()=>(0,T.jsxs)(`div`,{style:D(16),children:[(0,T.jsx)(w,{footer:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(`span`,{style:{display:`flex`},children:[(0,T.jsx)(p,{variant:`ghost`,size:`xs`,icon:(0,T.jsx)(a,{}),"aria-label":`Copy`}),(0,T.jsx)(p,{variant:`ghost`,size:`xs`,icon:(0,T.jsx)(r,{}),"aria-label":`Share`}),(0,T.jsx)(p,{variant:`ghost`,size:`xs`,icon:(0,T.jsx)(s,{}),"aria-label":`Pin`})]}),(0,T.jsx)(`span`,{style:{marginInlineStart:2},children:`Just now`})]}),children:(0,T.jsx)(_,{variant:`muted`,children:`Did the new pricing page go live with this morning's deploy?`})}),(0,T.jsx)(w,{align:`end`,footer:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`span`,{role:`alert`,style:{color:`var(--ds-destructive-foreground)`},children:`Failed to send`}),(0,T.jsx)(p,{variant:`ghost`,size:`xs`,icon:(0,T.jsx)(o,{}),"aria-label":`Retry`})]}),children:(0,T.jsx)(_,{children:`Yes, it shipped together with the annual plans and the new FAQ.`})})]})},F=`radial-gradient(120% 90% at 30% 40%, #9a9a9a, #1f1f1f 70%)`,I={render:()=>(0,T.jsxs)(`div`,{style:D(16),children:[(0,T.jsxs)(S,{align:`end`,avatar:A,children:[(0,T.jsx)(w,{children:(0,T.jsx)(`div`,{style:{width:320,borderRadius:20,overflow:`hidden`},children:(0,T.jsx)(b,{"aria-label":`Onboarding screens`,controls:`overlay`,indicators:!0,gap:0,children:[0,1,2,3].map(e=>(0,T.jsx)(v,{role:`img`,"aria-label":`Screen ${e+1}`,style:{height:213,background:F}},e))})})}),(0,T.jsx)(w,{children:(0,T.jsx)(_,{children:`Here's the new onboarding screen from today's build.`})})]}),(0,T.jsxs)(S,{avatar:k,children:[(0,T.jsx)(w,{children:(0,T.jsx)(_,{variant:`muted`,children:`Looks great. I wrote up the copy for the acme audit, too.`})}),(0,T.jsx)(w,{footer:`Today, 9:02 AM`,children:(0,T.jsx)(l,{title:`acme-audit.pdf`,description:`2.1 MB`,actions:(0,T.jsx)(p,{variant:`ghost`,size:`xs`,icon:(0,T.jsx)(i,{}),"aria-label":`Download acme-audit.pdf`})})})]}),(0,T.jsx)(w,{align:`end`,avatar:A,children:(0,T.jsx)(_,{children:`Thanks! I'll add it to the build before it goes out to beta testers.`})})]})},L={parameters:{layout:`fullscreen`},render:()=>(0,T.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`},children:[`light`,`dark`].map(e=>(0,T.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`flex`,flexDirection:`column`,gap:16},children:[(0,T.jsx)(w,{avatar:k,sender:`Jonas Lindqvist`,badge:(0,T.jsx)(d,{shape:`pill`,children:`Payments`}),footer:`Today, 9:02 AM`,children:(0,T.jsx)(_,{variant:`muted`,children:`Checkout is at 84 % this week.`})}),(0,T.jsx)(w,{align:`end`,avatar:A,footer:`Seen`,children:(0,T.jsx)(_,{children:`Nice, ship the rest on Monday.`})}),(0,T.jsx)(C,{children:`Jonas is typing…`})]},e))})},R=[`Playground`,`Demo`,`Actions`,`Attachment`,`Themes`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`Figma demo "Message": a team thread with senders, team badges, grouped messages, receipts and a typing line.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`Figma demo "Actions": copy, share and pin under a message, and a send error with a retry.`,...P.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
          <FileAttachment title="acme-audit.pdf" description="2.1 MB" actions={<Button variant="ghost" size="xs" icon={<RiDownloadLine />} aria-label="Download acme-audit.pdf" />} />
        </Message>
      </MessageGroup>
      <Message align="end" avatar={mira}>
        <Bubble>Thanks! I'll add it to the build before it goes out to beta testers.</Bubble>
      </Message>
    </div>
}`,...I.parameters?.docs?.source},description:{story:`Figma demo "Attachment": a picture in a carousel and a file (Attachment) sent with a message.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...L.parameters?.docs?.description}}}})))()}z();export{P as Actions,I as Attachment,N as Demo,M as Playground,L as Themes,R as __namedExportsOrder,E as default};