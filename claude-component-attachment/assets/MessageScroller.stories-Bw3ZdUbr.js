import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BlME8T6_.js";import{n as r,t as i}from"./Button-BCjorVPb.js";import{Q as a,gt as o,lt as s,ot as c,yt as ee}from"./react-Dly_6gI9.js";import{i as te,n as l,o as ne,r as re,t as ie}from"./Card-HAbiMSiK.js";import{n as ae,t as oe}from"./Avatar-C7dGrvrf.js";import{h as se,o as u,t as ce}from"./DropdownMenu-MtZIAWrO.js";import{r as le,t as d}from"./Bubble-B4twKecg.js";import{n as f,r as ue,t as p}from"./ToggleGroup-CFAiOp5J.js";import{n as de,t as fe}from"./Empty-BizcGhkj.js";import{n as pe,t as me}from"./Select-B3IlUGNj.js";import{n as he,t as m}from"./Marker-CYB_oU8U.js";import{i as ge,t as h}from"./Message-B7lAuuAl.js";import{n as _e,t as g}from"./Slider-ClrZFtxD.js";import{n as _,r as ve,t as v}from"./MessageScroller-bJr5gT80.js";function y({turn:e}){return e.role===`marker`?(0,w.jsx)(m,{variant:`separator`,children:e.text}):e.role===`user`?(0,w.jsx)(h,{align:`end`,sender:e.sender,children:(0,w.jsx)(d,{variant:`muted`,children:e.text})}):(0,w.jsx)(h,{sender:e.sender,children:e.text.split(`

`).map((e,t)=>(0,w.jsx)(d,{variant:`ghost`,children:e},t))})}function b(e=[]){let[t,n]=(0,C.useState)(e),[r,i]=(0,C.useState)(0),a=(0,C.useRef)(void 0),o=(0,C.useRef)(0),s=e=>`${e}-${++o.current}`;(0,C.useEffect)(()=>()=>clearInterval(a.current),[]);let c=(e,t)=>{let r=s(`reply`),i=e.split(/(?<= )/),o=0;n(e=>[...e,{id:r,role:`assistant`,text:``,sender:t}]),clearInterval(a.current),a.current=setInterval(()=>{o=Math.min(i.length,o+2),n(e=>e.map(e=>e.id===r?{...e,text:i.slice(0,o).join(``)}:e)),o>=i.length&&clearInterval(a.current)},50)};return{list:t,setList:n,send:()=>{let{user:e,reply:t}=k[r%k.length];i(e=>e+1),n(t=>[...t,{id:s(`user`),role:`user`,text:e}]),setTimeout(()=>c(t),400)},reset:()=>{clearInterval(a.current),n(e),i(0)},nextPrompt:k[r%k.length].user,id:s}}function x({title:e,description:t,action:n,children:r,footer:i,note:a}){return(0,w.jsxs)(`div`,{style:{display:`grid`,justifyItems:`center`,gap:12,width:`min(384px, calc(100vw - 32px))`},children:[(0,w.jsxs)(ie,{style:{width:`100%`,boxSizing:`border-box`},children:[(0,w.jsx)(te,{title:e,description:t,action:n}),(0,w.jsx)(l,{children:r}),i&&(0,w.jsx)(re,{justify:`between`,children:i})]}),(0,w.jsx)(`p`,{style:{margin:0,textAlign:`center`,color:`var(--ds-muted-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:12,lineHeight:`16px`},children:a})]})}function S({prompt:e,onSend:t,children:n}){return(0,w.jsxs)(`div`,{style:{display:`grid`,gap:8,width:`100%`,padding:8,boxSizing:`border-box`,borderRadius:16,background:`var(--ds-fill-2)`,fontFamily:`var(--ds-font-sans)`},children:[(0,w.jsx)(`span`,{style:{display:`-webkit-box`,overflow:`hidden`,WebkitBoxOrient:`vertical`,WebkitLineClamp:2,color:`var(--ds-foreground)`,fontSize:13,lineHeight:`20px`},children:e}),(0,w.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,w.jsx)(i,{variant:`outline`,size:`xs`,icon:(0,w.jsx)(o,{}),"aria-label":`Add an attachment`}),n,(0,w.jsx)(`span`,{style:{flex:1}}),(0,w.jsx)(N,{onClick:t})]})]})}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{C=n(),s(),ae(),le(),r(),ne(),se(),de(),he(),ge(),pe(),_e(),ue(),ve(),w=t(),T={title:`Components/Message Scroller`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Message Scroller** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=359-2)): a chat transcript in a fixed height with a `fade` over the bottom edge and buttons to the end (`scrollToEndButton`) and the start (`scrollToStartButton`). It follows the live edge (`autoScroll`), settles a new turn marked `scrollAnchor` near the top edge with `anchorOffset` px of the previous reply in view, keeps the reader's place when earlier messages load, opens at `defaultScrollPosition` and animates new turns (`animation`). `controlRef` drives it from outside; `onScrollStateChange` and `onAnchorChange` report where the reader is. The demos' composer is a stand-in until AI Chat Composer ships."}}}},E=(e,t)=>(0,w.jsx)(oe,{initials:e,name:t,style:{"--avatar-fill":`var(--ds-palette-orange-solid)`,"--avatar-ink":`var(--ds-primary-foreground)`}}),D=(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{children:(0,w.jsx)(m,{variant:`separator`,children:`Today · 92% adopted, 4 screens left`})}),(0,w.jsx)(_,{children:(0,w.jsx)(h,{avatar:E(`TH`,`Tomás Herrera`),sender:`Tomás Herrera`,children:(0,w.jsx)(d,{variant:`muted`,children:`Settings is done. One catch: FieldGroup had a hard-coded 24px between fields, so it now reads space.6.`})})}),(0,w.jsx)(_,{children:(0,w.jsx)(h,{avatar:E(`MO`,`Mira Okafor`),sender:`Mira Okafor`,children:(0,w.jsx)(d,{variant:`muted`,children:`The last four are in Reports. Who can take them before Friday's 4.2 release cut?`})})}),(0,w.jsx)(_,{scrollAnchor:!0,children:(0,w.jsx)(h,{align:`end`,children:(0,w.jsx)(d,{children:`Reports is mine. I'll post here once the PR is up.`})})}),(0,w.jsx)(_,{children:(0,w.jsx)(h,{avatar:E(`MO`,`Mira Okafor`),sender:`Mira Okafor`,children:(0,w.jsx)(d,{variant:`muted`,children:`Yes. Confirmed. The curve points to a microorganism harvesting stellar energy and breeding near carbon dioxide. If @rocky agrees, this is the clue we need.`})})})]}),O={args:{fade:!0,scrollToEndButton:!0,scrollToStartButton:!1,defaultScrollPosition:`start`},argTypes:{fade:{name:`Fade`,control:`boolean`},scrollToEndButton:{name:`Button end`,control:`boolean`},scrollToStartButton:{name:`Button start`,control:`boolean`},defaultScrollPosition:{name:`Opening position`,control:`inline-radio`,options:[`start`,`end`,`last-anchor`]}},render:e=>(0,w.jsx)(`div`,{style:{width:`min(448px, calc(100vw - 32px))`,background:`var(--ds-card)`},children:(0,w.jsx)(v,{...e,"aria-label":`Design system thread`,style:{height:440},children:D},e.defaultScrollPosition)})},k=[{user:`We're shipping offline mode for our notes app next week, and I'm worried about sync conflicts. What happens when two devices edit the same note while offline?`,reply:`That's the classic sync conflict. Give every edit a timestamp and a device ID, then merge changes paragraph by paragraph when the devices reconnect — most edits touch different parts of a note, so they combine cleanly.

When two devices change the same paragraph, keep both versions and show a small conflict badge on the note. Nothing is overwritten silently, and the writer decides which version wins.`},{user:`How do we test that before launch?`,reply:`Script it. Put two test devices in airplane mode, edit the same note on both, then reconnect them in different orders.

Cover three cases: different paragraphs, the same paragraph, and one device deleting the note while the other edits it. The last one is where most apps lose data.`},{user:`And if a user ignores the conflict badge?`,reply:`Then both versions stay. The badge is quiet on purpose: it never blocks writing, and the older version moves to the note history after 30 days, so nothing piles up.`}],A=k.flatMap(({user:e,reply:t},n)=>[{id:`saved-user-${n}`,role:`user`,text:e},{id:`saved-reply-${n}`,role:`assistant`,text:t}]),j=(e,t=e=>e.role===`user`)=>e.map(e=>(0,w.jsx)(_,{id:e.id,scrollAnchor:t(e),children:(0,w.jsx)(y,{turn:e})},e.id)),M=({onClick:e})=>(0,w.jsx)(i,{variant:`outline`,size:`sm`,icon:(0,w.jsx)(a,{}),"aria-label":`Reset the conversation`,onClick:e}),N=({onClick:e,disabled:t})=>(0,w.jsx)(i,{size:`sm`,icon:(0,w.jsx)(c,{}),"aria-label":`Send`,onClick:e,disabled:t}),P=(e,t)=>(0,w.jsx)(fe,{icon:(0,w.jsx)(ee,{}),title:e,description:t,style:{height:`100%`}}),F=340,I={render:function(){let e=b();return(0,w.jsx)(x,{title:`New Chat`,description:`How can I help you today?`,action:(0,w.jsx)(M,{onClick:e.reset}),note:`Demo is read only. Press send to send messages.`,footer:(0,w.jsx)(S,{prompt:e.nextPrompt,onSend:e.send}),children:(0,w.jsx)(v,{"aria-label":`New chat`,style:{height:F},children:e.list.length?j(e.list):(0,w.jsx)(_,{style:{height:F},children:P(`Morning, Shiryoku!`,`What are we working on today? Press send to start a new conversation`)})})})}},L={render:function(){let e=b(),[t,n]=(0,C.useState)(`user`);return(0,w.jsx)(x,{title:`Anchoring Turns`,description:`Choose which role settles near the top edge.`,action:(0,w.jsx)(M,{onClick:e.reset}),note:`Toggle the anchor role, then send messages to compare where turns settle.`,footer:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(p,{type:`single`,"aria-label":`Anchor role`,value:t,onValueChange:e=>e&&n(e),children:[(0,w.jsx)(f,{value:`user`,children:`User`}),(0,w.jsx)(f,{value:`assistant`,children:`Assistant`})]}),(0,w.jsx)(N,{onClick:e.send})]}),children:(0,w.jsx)(v,{"aria-label":`Anchored conversation`,style:{height:F},children:e.list.length?j(e.list,e=>e.role===t):(0,w.jsx)(_,{style:{height:F},children:P(`No anchored messages yet`,`Send the first message to see the selected role anchor.`)})})})}},R=[{id:`g1`,role:`user`,text:`@mary, the astrophage line keeps matching Venus energy output. Can you check my math?`},{id:`g2`,role:`assistant`,sender:`Mary (Agent)`,text:`Yes. Confirmed. The curve points to a microorganism harvesting stellar energy and breeding near carbon dioxide. If @rocky agrees, this is the clue we need.`},{id:`g3`,role:`user`,text:`ping @rocky`}],z={render:function(){let e=b(R),t=e.list.some(e=>e.role===`marker`);return(0,w.jsx)(x,{title:`Group Chat`,description:`A group chat with several participants and an assistant. The Marker is marked as a turn.`,action:(0,w.jsx)(M,{onClick:e.reset}),note:`When a user joins, a marker is created. scrollAnchor on the marker marks it as the next turn.`,footer:(0,w.jsxs)(`div`,{style:{display:`grid`,gap:8,width:`100%`,textAlign:`center`},children:[(0,w.jsx)(i,{variant:`secondary`,onClick:()=>{e.setList(t=>[...t,{id:e.id(`marker`),role:`marker`,text:`Rocky joined the chat`}]),setTimeout(()=>e.setList(t=>[...t,{id:e.id(`rocky`),role:`assistant`,sender:`Rocky`,text:`Amaze! Math is good. Astrophage eats light, makes more astrophage. Is bad for star. We fix together, question?`}]),600)},disabled:t,children:`Add Rocky`}),(0,w.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:12,lineHeight:`16px`},children:`This will create a marker and make it the anchor`})]}),children:(0,w.jsx)(v,{"aria-label":`Group chat`,style:{height:F},children:j(e.list,e=>e.role===`marker`)})})}},B={render:function(){let e=b(A.slice(0,2)),[t,n]=(0,C.useState)(64);return(0,w.jsx)(x,{title:`Keeping Context Visible`,description:`New turns keep part of the previous reply in view.`,action:(0,w.jsx)(M,{onClick:e.reset}),note:`Adjust the slider and send. Observe the previous message peek.`,footer:(0,w.jsxs)(S,{prompt:e.nextPrompt,onSend:e.send,children:[(0,w.jsxs)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:12,minWidth:40},children:[t,`px`]}),(0,w.jsx)(`span`,{style:{width:80},children:(0,w.jsx)(g,{"aria-label":`Peek`,min:0,max:128,step:8,value:t,onValueChange:e=>n(e)})})]}),children:(0,w.jsx)(v,{"aria-label":`Conversation with context`,anchorOffset:t,style:{height:F},children:j(e.list)})})}},V={render:function(){let e=b();return(0,w.jsx)(x,{title:`Streaming Messages`,description:`Auto-scroll follows the live edge of the conversation.`,action:(0,w.jsx)(M,{onClick:e.reset}),note:`Streaming is simulated. autoScroll is enabled.`,footer:(0,w.jsx)(S,{prompt:e.nextPrompt,onSend:e.send}),children:(0,w.jsx)(v,{"aria-label":`Streaming conversation`,style:{height:F},children:e.list.length?j(e.list,()=>!1):(0,w.jsx)(_,{style:{height:F},children:P(`Ready to Stream`,`Press send to stream a scripted conversation.`)})})})}},H={render:function(){let[e,t]=(0,C.useState)(`last-anchor`);return(0,w.jsx)(x,{title:`Opening Position`,description:`Choose where a saved transcript opens.`,note:`Toggle the defaultScrollPosition to see where the transcript starts when you open the thread.`,footer:(0,w.jsxs)(p,{type:`single`,variant:`outline`,"aria-label":`Opening position`,value:e,onValueChange:e=>e&&t(e),style:{width:`100%`},children:[(0,w.jsx)(f,{value:`start`,children:`start`}),(0,w.jsx)(f,{value:`end`,children:`end`}),(0,w.jsx)(f,{value:`last-anchor`,children:`last-anchor`})]}),children:(0,w.jsx)(v,{"aria-label":`Saved thread`,defaultScrollPosition:e,style:{height:F},children:j(A)},e)})}},U=[{id:`e1`,role:`user`,text:`Checkout errors went up after this morning’s deploy. What changed?`},{id:`e2`,role:`assistant`,text:`Only the export queue worker changed. The deploy moved large CSV jobs onto the shared retry policy, which made each failed attempt hold a worker slot longer than before.

The app deploy did not include checkout, pricing, or billing API changes.`}],W=[{id:`l1`,role:`user`,text:`Do we need to roll back?`},{id:`l2`,role:`assistant`,text:`Not yet. Queue depth is recovering after we reduced retry concurrency, and the oldest pending job is now under five minutes old.

Keep rollback ready if the queue starts climbing again, but the current trend points toward recovery.`},{id:`l3`,role:`user`,text:`Okay. Post an update in the incident channel.`},{id:`l4`,role:`assistant`,text:`Posted: queue recovering, no rollback for now, next check in 30 minutes.`},{id:`l5`,role:`user`,text:`What should the follow-up ticket say?`},{id:`l6`,role:`assistant`,text:`Give large CSV exports their own retry policy with a lower concurrency cap, and add a queue-depth alert at 500 pending jobs so the next spike pages someone before customers notice.`}],G={render:function(){let[e,t]=(0,C.useState)(W),n=e.length>W.length;return(0,w.jsx)(x,{title:`Load History`,description:`Prepended messages keep your place.`,action:(0,w.jsx)(M,{onClick:()=>t(W)}),note:`Click Load History to load the entire conversation.`,footer:(0,w.jsxs)(`div`,{style:{display:`grid`,gap:8,width:`100%`,textAlign:`center`},children:[(0,w.jsx)(i,{variant:`secondary`,onClick:()=>t([...U,...W]),disabled:n,children:`Load History`}),(0,w.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:12,lineHeight:`16px`},children:`Restore earlier messages while keeping your place.`})]}),children:(0,w.jsx)(v,{"aria-label":`Incident thread`,defaultScrollPosition:`start`,style:{height:F},children:j(e)})})}},K={render:function(){let e=b(),[t,n]=(0,C.useState)(`slide`);return(0,w.jsx)(x,{title:`Animation`,description:`Choose how user messages are animated when they are added to the conversation.`,action:(0,w.jsx)(M,{onClick:e.reset}),note:`Select an animation then click send to see it in action.`,footer:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(me,{"aria-label":`Animation`,size:`sm`,value:t,onValueChange:e=>n(e),options:[`none`,`fade`,`slide`,`scale`].map(e=>({value:e,label:e[0].toUpperCase()+e.slice(1)}))}),(0,w.jsx)(N,{onClick:e.send})]}),children:(0,w.jsx)(v,{"aria-label":`Animated conversation`,animation:t,style:{height:F},children:e.list.length?j(e.list):(0,w.jsx)(_,{style:{height:F},children:P(`No Messages Yet`,`Click the button below to send the first message.`)})})})}},q={render:function(){let e=(0,C.useRef)(null);return(0,w.jsx)(x,{title:`Commands`,description:`Drive the transcript from outside.`,action:(0,w.jsxs)(ce,{align:`end`,"aria-label":`Jump to`,trigger:(0,w.jsx)(i,{variant:`secondary`,size:`sm`,children:`Jump to…`}),children:[(0,w.jsx)(u,{onClick:()=>e.current?.scrollToStart(),children:`First message`}),k.map((t,n)=>(0,w.jsx)(u,{onClick:()=>e.current?.scrollToItem(`saved-user-${n}`),children:`Question ${n+1}`},n)),(0,w.jsx)(u,{onClick:()=>e.current?.scrollToEnd(),children:`Latest message`})]}),note:`Use the controls to jump to any message in the conversation.`,children:(0,w.jsx)(v,{controlRef:e,"aria-label":`Conversation`,style:{height:F},children:j(A)})})}},J={render:function(){let e=(0,C.useRef)(null),[t,n]=(0,C.useState)(null),r=A.filter(e=>e.role===`user`);return(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,w.jsx)(x,{title:`Transcript Outline`,description:`Track the current anchored turn.`,note:`Open the outline to jump between anchored turns as you read.`,children:(0,w.jsx)(v,{controlRef:e,onAnchorChange:n,"aria-label":`Incident handoff`,defaultScrollPosition:`start`,style:{height:F},children:j(A)})}),(0,w.jsx)(`nav`,{"aria-label":`Outline`,style:{display:`grid`,gap:2},children:r.map((n,r)=>(0,w.jsx)(`button`,{type:`button`,"aria-label":`Question ${r+1}: ${n.text}`,"aria-current":t===n.id?`true`:void 0,onClick:()=>e.current?.scrollToItem(n.id),style:{width:20,height:8,padding:0,border:0,background:`none`,cursor:`pointer`,display:`grid`,alignItems:`center`},children:(0,w.jsx)(`span`,{style:{display:`block`,height:t===n.id?2:1,background:t===n.id?`var(--ds-foreground)`:`var(--ds-muted-foreground)`,borderRadius:1}})},n.id))})]})}},Y=({atStart:e,atEnd:t})=>e&&t?`Everything is in view.`:e?`You are at the top. You can only scroll down.`:t?`You are at the latest message. You can only scroll up.`:`You can scroll up and down.`,X={render:function(){let[e,t]=(0,C.useState)({atStart:!0,atEnd:!1});return(0,w.jsx)(x,{title:`Scroll Status`,description:`Where the reader can scroll to from the current position.`,note:`Scroll the transcript to see the footer update.`,footer:(0,w.jsx)(`p`,{role:`status`,style:{margin:0,width:`100%`,textAlign:`center`,color:`var(--ds-muted-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:13,lineHeight:`20px`},children:Y(e)}),children:(0,w.jsx)(v,{"aria-label":`Training plan`,defaultScrollPosition:`start`,scrollToStartButton:!0,onScrollStateChange:t,style:{height:F},children:j(A)})})}},Z={parameters:{layout:`fullscreen`},render:()=>(0,w.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`},children:[`light`,`dark`].map(e=>(0,w.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-card)`,padding:24},children:(0,w.jsx)(v,{"aria-label":`Thread, ${e}`,defaultScrollPosition:`start`,scrollToStartButton:!0,style:{height:360},children:D})},e))})},Q=[`Playground`,`Demo`,`AnchoringTurns`,`GroupChat`,`KeepingContextVisible`,`FollowingTheLiveEdge`,`OpeningSavedThreads`,`LoadingEarlierMessages`,`AnimatingNewMessages`,`JumpingToMessages`,`TrackingTheReadersPosition`,`ReadingScrollState`,`Themes`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    fade: true,
    scrollToEndButton: true,
    scrollToStartButton: false,
    defaultScrollPosition: 'start'
  },
  argTypes: {
    fade: {
      name: 'Fade',
      control: 'boolean'
    },
    scrollToEndButton: {
      name: 'Button end',
      control: 'boolean'
    },
    scrollToStartButton: {
      name: 'Button start',
      control: 'boolean'
    },
    defaultScrollPosition: {
      name: 'Opening position',
      control: 'inline-radio',
      options: ['start', 'end', 'last-anchor']
    }
  },
  render: args => <div style={{
    width: 'min(448px, calc(100vw - 32px))',
    background: 'var(--ds-card)'
  }}>
      <MessageScroller key={args.defaultScrollPosition} {...args} aria-label="Design system thread" style={{
      height: 440
    }}>
        {thread}
      </MessageScroller>
    </div>
}`,...O.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const chat = useChat();
    return <ChatCard title="New Chat" description="How can I help you today?" action={<ResetButton onClick={chat.reset} />} note="Demo is read only. Press send to send messages." footer={<Composer prompt={chat.nextPrompt} onSend={chat.send} />}>
        <MessageScroller aria-label="New chat" style={{
        height: scrollerHeight
      }}>
          {chat.list.length ? turns(chat.list) : <MessageScrollerItem style={{
          height: scrollerHeight
        }}>{emptyState('Morning, Shiryoku!', 'What are we working on today? Press send to start a new conversation')}</MessageScrollerItem>}
        </MessageScroller>
      </ChatCard>;
  }
}`,...I.parameters?.docs?.source},description:{story:`Figma demo "Message Scroller": a new chat; send posts a question that settles at the top and streams the reply.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const chat = useChat();
    const [role, setRole] = useState('user');
    return <ChatCard title="Anchoring Turns" description="Choose which role settles near the top edge." action={<ResetButton onClick={chat.reset} />} note="Toggle the anchor role, then send messages to compare where turns settle." footer={<>
            <ToggleGroup type="single" aria-label="Anchor role" value={role} onValueChange={v => v && setRole(v)}>
              <ToggleGroupItem value="user">User</ToggleGroupItem>
              <ToggleGroupItem value="assistant">Assistant</ToggleGroupItem>
            </ToggleGroup>
            <SendButton onClick={chat.send} />
          </>}>
        <MessageScroller aria-label="Anchored conversation" style={{
        height: scrollerHeight
      }}>
          {chat.list.length ? turns(chat.list, t => t.role === role) : <MessageScrollerItem style={{
          height: scrollerHeight
        }}>{emptyState('No anchored messages yet', 'Send the first message to see the selected role anchor.')}</MessageScrollerItem>}
        </MessageScroller>
      </ChatCard>;
  }
}`,...L.parameters?.docs?.source},description:{story:`Figma demo "Anchoring Turns": choose whether the user's or the assistant's turn settles near the top edge.`,...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const chat = useChat(groupChat);
    const joined = chat.list.some(t => t.role === 'marker');
    const addRocky = () => {
      chat.setList(l => [...l, {
        id: chat.id('marker'),
        role: 'marker',
        text: 'Rocky joined the chat'
      }]);
      setTimeout(() => chat.setList(l => [...l, {
        id: chat.id('rocky'),
        role: 'assistant',
        sender: 'Rocky',
        text: 'Amaze! Math is good. Astrophage eats light, makes more astrophage. Is bad for star. We fix together, question?'
      }]), 600);
    };
    return <ChatCard title="Group Chat" description="A group chat with several participants and an assistant. The Marker is marked as a turn." action={<ResetButton onClick={chat.reset} />} note="When a user joins, a marker is created. scrollAnchor on the marker marks it as the next turn." footer={<div style={{
      display: 'grid',
      gap: 8,
      width: '100%',
      textAlign: 'center'
    }}>
            <Button variant="secondary" onClick={addRocky} disabled={joined}>
              Add Rocky
            </Button>
            <span style={{
        color: 'var(--ds-muted-foreground)',
        fontFamily: 'var(--ds-font-sans)',
        fontSize: 12,
        lineHeight: '16px'
      }}>This will create a marker and make it the anchor</span>
          </div>}>
        <MessageScroller aria-label="Group chat" style={{
        height: scrollerHeight
      }}>
          {turns(chat.list, t => t.role === 'marker')}
        </MessageScroller>
      </ChatCard>;
  }
}`,...z.parameters?.docs?.source},description:{story:`Figma demo "Group Chat": when someone joins, a Marker is added and anchored as the next turn.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const chat = useChat(history.slice(0, 2));
    const [peek, setPeek] = useState(64);
    return <ChatCard title="Keeping Context Visible" description="New turns keep part of the previous reply in view." action={<ResetButton onClick={chat.reset} />} note="Adjust the slider and send. Observe the previous message peek." footer={<Composer prompt={chat.nextPrompt} onSend={chat.send}>
            <span style={{
        color: 'var(--ds-muted-foreground)',
        fontFamily: 'var(--ds-font-sans)',
        fontSize: 12,
        minWidth: 40
      }}>{peek}px</span>
            <span style={{
        width: 80
      }}>
              <Slider aria-label="Peek" min={0} max={128} step={8} value={peek} onValueChange={v => setPeek(v as number)} />
            </span>
          </Composer>}>
        <MessageScroller aria-label="Conversation with context" anchorOffset={peek} style={{
        height: scrollerHeight
      }}>
          {turns(chat.list)}
        </MessageScroller>
      </ChatCard>;
  }
}`,...B.parameters?.docs?.source},description:{story:'Figma demo "Keeping Context Visible": `anchorOffset` keeps part of the previous reply above a new turn.',...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const chat = useChat();
    return <ChatCard title="Streaming Messages" description="Auto-scroll follows the live edge of the conversation." action={<ResetButton onClick={chat.reset} />} note="Streaming is simulated. autoScroll is enabled." footer={<Composer prompt={chat.nextPrompt} onSend={chat.send} />}>
        <MessageScroller aria-label="Streaming conversation" style={{
        height: scrollerHeight
      }}>
          {chat.list.length ? turns(chat.list, () => false) : <MessageScrollerItem style={{
          height: scrollerHeight
        }}>{emptyState('Ready to Stream', 'Press send to stream a scripted conversation.')}</MessageScrollerItem>}
        </MessageScroller>
      </ChatCard>;
  }
}`,...V.parameters?.docs?.source},description:{story:`Figma demo "Following the Live Edge": replies stream in and auto-scroll follows them while the reader is at the end.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [position, setPosition] = useState<MessageScrollerPosition>('last-anchor');
    return <ChatCard title="Opening Position" description="Choose where a saved transcript opens." note="Toggle the defaultScrollPosition to see where the transcript starts when you open the thread." footer={<ToggleGroup type="single" variant="outline" aria-label="Opening position" value={position} onValueChange={v => v && setPosition(v as MessageScrollerPosition)} style={{
      width: '100%'
    }}>
            <ToggleGroupItem value="start">start</ToggleGroupItem>
            <ToggleGroupItem value="end">end</ToggleGroupItem>
            <ToggleGroupItem value="last-anchor">last-anchor</ToggleGroupItem>
          </ToggleGroup>}>
        <MessageScroller key={position} aria-label="Saved thread" defaultScrollPosition={position} style={{
        height: scrollerHeight
      }}>
          {turns(history)}
        </MessageScroller>
      </ChatCard>;
  }
}`,...H.parameters?.docs?.source},description:{story:'Figma demo "Opening Saved Threads": `defaultScrollPosition` opens a saved transcript at the start, the end or the last anchored turn.',...H.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [list, setList] = useState(latest);
    const loaded = list.length > latest.length;
    return <ChatCard title="Load History" description="Prepended messages keep your place." action={<ResetButton onClick={() => setList(latest)} />} note="Click Load History to load the entire conversation." footer={<div style={{
      display: 'grid',
      gap: 8,
      width: '100%',
      textAlign: 'center'
    }}>
            <Button variant="secondary" onClick={() => setList([...earlier, ...latest])} disabled={loaded}>
              Load History
            </Button>
            <span style={{
        color: 'var(--ds-muted-foreground)',
        fontFamily: 'var(--ds-font-sans)',
        fontSize: 12,
        lineHeight: '16px'
      }}>Restore earlier messages while keeping your place.</span>
          </div>}>
        <MessageScroller aria-label="Incident thread" defaultScrollPosition="start" style={{
        height: scrollerHeight
      }}>
          {turns(list)}
        </MessageScroller>
      </ChatCard>;
  }
}`,...G.parameters?.docs?.source},description:{story:`Figma demo "Loading Earlier Messages": messages added above keep the reader's place.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const chat = useChat();
    const [animation, setAnimation] = useState<MessageScrollerAnimation>('slide');
    return <ChatCard title="Animation" description="Choose how user messages are animated when they are added to the conversation." action={<ResetButton onClick={chat.reset} />} note="Select an animation then click send to see it in action." footer={<>
            <Select aria-label="Animation" size="sm" value={animation} onValueChange={v => setAnimation(v as MessageScrollerAnimation)} options={['none', 'fade', 'slide', 'scale'].map(value => ({
        value,
        label: value[0].toUpperCase() + value.slice(1)
      }))} />
            <SendButton onClick={chat.send} />
          </>}>
        <MessageScroller aria-label="Animated conversation" animation={animation} style={{
        height: scrollerHeight
      }}>
          {chat.list.length ? turns(chat.list) : <MessageScrollerItem style={{
          height: scrollerHeight
        }}>{emptyState('No Messages Yet', 'Click the button below to send the first message.')}</MessageScrollerItem>}
        </MessageScroller>
      </ChatCard>;
  }
}`,...K.parameters?.docs?.source},description:{story:`Figma demo "Animating New Messages": choose how new turns come in.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const scroller = useRef<MessageScrollerHandle>(null);
    return <ChatCard title="Commands" description="Drive the transcript from outside." action={<DropdownMenu align="end" aria-label="Jump to" trigger={<Button variant="secondary" size="sm">Jump to…</Button>}>
            <DropdownMenuItem onClick={() => scroller.current?.scrollToStart()}>First message</DropdownMenuItem>
            {script.map((_, i) => <DropdownMenuItem key={i} onClick={() => scroller.current?.scrollToItem(\`saved-user-\${i}\`)}>
                {\`Question \${i + 1}\`}
              </DropdownMenuItem>)}
            <DropdownMenuItem onClick={() => scroller.current?.scrollToEnd()}>Latest message</DropdownMenuItem>
          </DropdownMenu>} note="Use the controls to jump to any message in the conversation.">
        <MessageScroller controlRef={scroller} aria-label="Conversation" style={{
        height: scrollerHeight
      }}>
          {turns(history)}
        </MessageScroller>
      </ChatCard>;
  }
}`,...q.parameters?.docs?.source},description:{story:'Figma demo "Jumping to Messages": `controlRef` drives the transcript from outside.',...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const scroller = useRef<MessageScrollerHandle>(null);
    const [current, setCurrent] = useState<string | null>(null);
    const questions = history.filter(t => t.role === 'user');
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
        <ChatCard title="Transcript Outline" description="Track the current anchored turn." note="Open the outline to jump between anchored turns as you read.">
          <MessageScroller controlRef={scroller} onAnchorChange={setCurrent} aria-label="Incident handoff" defaultScrollPosition="start" style={{
          height: scrollerHeight
        }}>
            {turns(history)}
          </MessageScroller>
        </ChatCard>
        <nav aria-label="Outline" style={{
        display: 'grid',
        gap: 2
      }}>
          {questions.map((q, i) => <button key={q.id} type="button" aria-label={\`Question \${i + 1}: \${q.text}\`} aria-current={current === q.id ? 'true' : undefined} onClick={() => scroller.current?.scrollToItem(q.id)} style={{
          width: 20,
          height: 8,
          padding: 0,
          border: 0,
          background: 'none',
          cursor: 'pointer',
          display: 'grid',
          alignItems: 'center'
        }}>
              <span style={{
            display: 'block',
            height: current === q.id ? 2 : 1,
            background: current === q.id ? 'var(--ds-foreground)' : 'var(--ds-muted-foreground)',
            borderRadius: 1
          }} />
            </button>)}
        </nav>
      </div>;
  }
}`,...J.parameters?.docs?.source},description:{story:'Figma demo "Tracking the Reader\'s Position": `onAnchorChange` drives an outline of the anchored turns.',...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [state, setState] = useState<MessageScrollerState>({
      atStart: true,
      atEnd: false
    });
    return <ChatCard title="Scroll Status" description="Where the reader can scroll to from the current position." note="Scroll the transcript to see the footer update." footer={<p role="status" style={{
      margin: 0,
      width: '100%',
      textAlign: 'center',
      color: 'var(--ds-muted-foreground)',
      fontFamily: 'var(--ds-font-sans)',
      fontSize: 13,
      lineHeight: '20px'
    }}>
            {statusText(state)}
          </p>}>
        <MessageScroller aria-label="Training plan" defaultScrollPosition="start" scrollToStartButton onScrollStateChange={setState} style={{
        height: scrollerHeight
      }}>
          {turns(history)}
        </MessageScroller>
      </ChatCard>;
  }
}`,...X.parameters?.docs?.source},description:{story:'Figma demo "Reading Scroll State": `onScrollStateChange` reports where the reader can scroll to.',...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-card)',
      padding: 24
    }}>
          <MessageScroller aria-label={\`Thread, \${scheme}\`} defaultScrollPosition="start" scrollToStartButton style={{
        height: 360
      }}>
            {thread}
          </MessageScroller>
        </div>)}
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...Z.parameters?.docs?.description}}}})))()}$();export{L as AnchoringTurns,K as AnimatingNewMessages,I as Demo,V as FollowingTheLiveEdge,z as GroupChat,q as JumpingToMessages,B as KeepingContextVisible,G as LoadingEarlierMessages,H as OpeningSavedThreads,O as Playground,X as ReadingScrollState,Z as Themes,J as TrackingTheReadersPosition,Q as __namedExportsOrder,T as default};