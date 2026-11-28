import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-CLLICzob.js";import{Ct as r,Pt as i,Rt as a,bt as o,ft as s}from"./react-C0dN6ceU.js";import{n as ee,t as c}from"./Button-sDdqxasC.js";import{n as te,t as ne}from"./Select-Bx5ReCky.js";import{n as re,t as l}from"./Avatar-OPZD4oiv.js";import{h as u,o as d,t as f}from"./DropdownMenu-Ki78lzLg.js";import{r as p,t as m}from"./AIChatComposer-CCTwniTG.js";import{i as h,n as g,o as _,r as v,t as ie}from"./Card-CtH0BQcZ.js";import{r as ae,t as y}from"./Bubble-DYXO6w1A.js";import{n as b,r as oe,t as x}from"./ToggleGroup-Cq-7rOyU.js";import{n as se,t as ce}from"./Empty-DF1LYn5-.js";import{n as S,t as C}from"./Marker-DTkQmwkF.js";import{i as w,t as T}from"./Message-CeiOQcHa.js";import{n as E,t as D}from"./Slider-D3aygraZ.js";import{n as O,r as le,t as k}from"./MessageScroller-CiujlGzO.js";function TurnView({turn:e}){return e.role===`marker`?(0,j.jsx)(C,{variant:`separator`,children:e.text}):e.role===`user`?(0,j.jsx)(T,{align:`end`,sender:e.sender,children:(0,j.jsx)(y,{variant:`muted`,children:e.text})}):(0,j.jsx)(T,{sender:e.sender,children:e.text.split(`

`).map((e,t)=>(0,j.jsx)(y,{variant:`ghost`,children:e},t))})}function useChat(e=[]){let[t,n]=(0,A.useState)(e),[r,i]=(0,A.useState)(0),a=(0,A.useRef)(void 0),o=(0,A.useRef)(0),id=e=>`${e}-${++o.current}`;(0,A.useEffect)(()=>()=>clearInterval(a.current),[]);let stream=(e,t)=>{let r=id(`reply`),i=e.split(/(?<= )/),o=0;n(e=>[...e,{id:r,role:`assistant`,text:``,sender:t}]),clearInterval(a.current),a.current=setInterval(()=>{o=Math.min(i.length,o+2),n(e=>e.map(e=>e.id===r?{...e,text:i.slice(0,o).join(``)}:e)),o>=i.length&&clearInterval(a.current)},50)},send=()=>{let{user:e,reply:t}=F[r%F.length];i(e=>e+1),n(t=>[...t,{id:id(`user`),role:`user`,text:e}]),setTimeout(()=>stream(t),400)},reset=()=>{clearInterval(a.current),n(e),i(0)};return{list:t,setList:n,send,reset,nextPrompt:F[r%F.length].user,id}}function ChatCard({title:e,description:t,action:n,children:r,footer:i,note:a}){return(0,j.jsxs)(`div`,{style:{display:`grid`,justifyItems:`center`,gap:12,width:`min(384px, calc(100vw - 32px))`},children:[(0,j.jsxs)(ie,{style:{width:`100%`,boxSizing:`border-box`},children:[(0,j.jsx)(h,{title:e,description:t,action:n}),(0,j.jsx)(g,{children:r}),i&&(0,j.jsx)(v,{justify:`between`,children:i})]}),(0,j.jsx)(`p`,{style:{margin:0,textAlign:`center`,color:`var(--ds-muted-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:12,lineHeight:`16px`},children:a})]})}function Composer({prompt:e,onSend:t,children:n}){return(0,j.jsx)(m,{style:{width:`100%`},value:e,onSubmit:t,dictate:!1,leading:(0,j.jsx)(c,{variant:`ghost`,size:`sm`,icon:(0,j.jsx)(i,{}),"aria-label":`Add an attachment`}),badges:n})}var A,j,M,person,N,P,F,I,turns,ResetButton,SendButton,emptyState,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,statusText,Z,Q,$;function init_MessageScroller_stories(){return(init_MessageScroller_stories=e((()=>{A=n(),r(),p(),re(),ae(),ee(),_(),u(),se(),S(),w(),te(),E(),oe(),le(),j=t(),M={title:`Components/Message Scroller`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Message Scroller** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=359-2)): a chat transcript in a fixed height with a `fade` over the bottom edge and buttons to the end (`scrollToEndButton`) and the start (`scrollToStartButton`). It follows the live edge (`autoScroll`), settles a new turn marked `scrollAnchor` near the top edge with `anchorOffset` px of the previous reply in view, keeps the reader's place when earlier messages load, opens at `defaultScrollPosition` and animates new turns (`animation`). `controlRef` drives it from outside; `onScrollStateChange` and `onAnchorChange` report where the reader is. The demos' composer is a stand-in until AI Chat Composer ships."}}}},person=(e,t)=>(0,j.jsx)(l,{initials:e,name:t,style:{"--avatar-fill":`var(--ds-palette-orange-solid)`,"--avatar-ink":`var(--ds-primary-foreground)`}}),N=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(O,{children:(0,j.jsx)(C,{variant:`separator`,children:`Today · 92% adopted, 4 screens left`})}),(0,j.jsx)(O,{children:(0,j.jsx)(T,{avatar:person(`TH`,`Tomás Herrera`),sender:`Tomás Herrera`,children:(0,j.jsx)(y,{variant:`muted`,children:`Settings is done. One catch: FieldGroup had a hard-coded 24px between fields, so it now reads space.6.`})})}),(0,j.jsx)(O,{children:(0,j.jsx)(T,{avatar:person(`MO`,`Mira Okafor`),sender:`Mira Okafor`,children:(0,j.jsx)(y,{variant:`muted`,children:`The last four are in Reports. Who can take them before Friday's 4.2 release cut?`})})}),(0,j.jsx)(O,{scrollAnchor:!0,children:(0,j.jsx)(T,{align:`end`,children:(0,j.jsx)(y,{children:`Reports is mine. I'll post here once the PR is up.`})})}),(0,j.jsx)(O,{children:(0,j.jsx)(T,{avatar:person(`MO`,`Mira Okafor`),sender:`Mira Okafor`,children:(0,j.jsx)(y,{variant:`muted`,children:`Yes. Confirmed. The curve points to a microorganism harvesting stellar energy and breeding near carbon dioxide. If @rocky agrees, this is the clue we need.`})})})]}),P={args:{fade:!0,scrollToEndButton:!0,scrollToStartButton:!1,defaultScrollPosition:`start`},argTypes:{fade:{name:`Fade`,control:`boolean`},scrollToEndButton:{name:`Button end`,control:`boolean`},scrollToStartButton:{name:`Button start`,control:`boolean`},defaultScrollPosition:{name:`Opening position`,control:`inline-radio`,options:[`start`,`end`,`last-anchor`]}},render:e=>(0,j.jsx)(`div`,{style:{width:`min(448px, calc(100vw - 32px))`,background:`var(--ds-card)`},children:(0,j.jsx)(k,{...e,"aria-label":`Design system thread`,style:{height:440},children:N},e.defaultScrollPosition)})},F=[{user:`We're shipping offline mode for our notes app next week, and I'm worried about sync conflicts. What happens when two devices edit the same note while offline?`,reply:`That's the classic sync conflict. Give every edit a timestamp and a device ID, then merge changes paragraph by paragraph when the devices reconnect — most edits touch different parts of a note, so they combine cleanly.

When two devices change the same paragraph, keep both versions and show a small conflict badge on the note. Nothing is overwritten silently, and the writer decides which version wins.`},{user:`How do we test that before launch?`,reply:`Script it. Put two test devices in airplane mode, edit the same note on both, then reconnect them in different orders.

Cover three cases: different paragraphs, the same paragraph, and one device deleting the note while the other edits it. The last one is where most apps lose data.`},{user:`And if a user ignores the conflict badge?`,reply:`Then both versions stay. The badge is quiet on purpose: it never blocks writing, and the older version moves to the note history after 30 days, so nothing piles up.`}],I=F.flatMap(({user:e,reply:t},n)=>[{id:`saved-user-${n}`,role:`user`,text:e},{id:`saved-reply-${n}`,role:`assistant`,text:t}]),turns=(e,t=e=>e.role===`user`)=>e.map(e=>(0,j.jsx)(O,{id:e.id,scrollAnchor:t(e),children:(0,j.jsx)(TurnView,{turn:e})},e.id)),ResetButton=({onClick:e})=>(0,j.jsx)(c,{variant:`outline`,size:`sm`,icon:(0,j.jsx)(s,{}),"aria-label":`Reset the conversation`,onClick:e}),SendButton=({onClick:e,disabled:t})=>(0,j.jsx)(c,{size:`sm`,icon:(0,j.jsx)(o,{}),"aria-label":`Send`,onClick:e,disabled:t}),emptyState=(e,t)=>(0,j.jsx)(ce,{icon:(0,j.jsx)(a,{}),title:e,description:t,style:{height:`100%`}}),L=340,R={render:function Render(){let e=useChat();return(0,j.jsx)(ChatCard,{title:`New Chat`,description:`How can I help you today?`,action:(0,j.jsx)(ResetButton,{onClick:e.reset}),note:`Demo is read only. Press send to send messages.`,footer:(0,j.jsx)(Composer,{prompt:e.nextPrompt,onSend:e.send}),children:(0,j.jsx)(k,{"aria-label":`New chat`,style:{height:L},children:e.list.length?turns(e.list):(0,j.jsx)(O,{style:{height:L},children:emptyState(`Morning, Shiryoku!`,`What are we working on today? Press send to start a new conversation`)})})})}},z={render:function Render(){let e=useChat(),[t,n]=(0,A.useState)(`user`);return(0,j.jsx)(ChatCard,{title:`Anchoring Turns`,description:`Choose which role settles near the top edge.`,action:(0,j.jsx)(ResetButton,{onClick:e.reset}),note:`Toggle the anchor role, then send messages to compare where turns settle.`,footer:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(x,{type:`single`,"aria-label":`Anchor role`,value:t,onValueChange:e=>e&&n(e),children:[(0,j.jsx)(b,{value:`user`,children:`User`}),(0,j.jsx)(b,{value:`assistant`,children:`Assistant`})]}),(0,j.jsx)(SendButton,{onClick:e.send})]}),children:(0,j.jsx)(k,{"aria-label":`Anchored conversation`,style:{height:L},children:e.list.length?turns(e.list,e=>e.role===t):(0,j.jsx)(O,{style:{height:L},children:emptyState(`No anchored messages yet`,`Send the first message to see the selected role anchor.`)})})})}},B=[{id:`g1`,role:`user`,text:`@mary, the astrophage line keeps matching Venus energy output. Can you check my math?`},{id:`g2`,role:`assistant`,sender:`Mary (Agent)`,text:`Yes. Confirmed. The curve points to a microorganism harvesting stellar energy and breeding near carbon dioxide. If @rocky agrees, this is the clue we need.`},{id:`g3`,role:`user`,text:`ping @rocky`}],V={render:function Render(){let e=useChat(B),t=e.list.some(e=>e.role===`marker`),addRocky=()=>{e.setList(t=>[...t,{id:e.id(`marker`),role:`marker`,text:`Rocky joined the chat`}]),setTimeout(()=>e.setList(t=>[...t,{id:e.id(`rocky`),role:`assistant`,sender:`Rocky`,text:`Amaze! Math is good. Astrophage eats light, makes more astrophage. Is bad for star. We fix together, question?`}]),600)};return(0,j.jsx)(ChatCard,{title:`Group Chat`,description:`A group chat with several participants and an assistant. The Marker is marked as a turn.`,action:(0,j.jsx)(ResetButton,{onClick:e.reset}),note:`When a user joins, a marker is created. scrollAnchor on the marker marks it as the next turn.`,footer:(0,j.jsxs)(`div`,{style:{display:`grid`,gap:8,width:`100%`,textAlign:`center`},children:[(0,j.jsx)(c,{variant:`secondary`,onClick:addRocky,disabled:t,children:`Add Rocky`}),(0,j.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:12,lineHeight:`16px`},children:`This will create a marker and make it the anchor`})]}),children:(0,j.jsx)(k,{"aria-label":`Group chat`,style:{height:L},children:turns(e.list,e=>e.role===`marker`)})})}},H={render:function Render(){let e=useChat(I.slice(0,2)),[t,n]=(0,A.useState)(64);return(0,j.jsx)(ChatCard,{title:`Keeping Context Visible`,description:`New turns keep part of the previous reply in view.`,action:(0,j.jsx)(ResetButton,{onClick:e.reset}),note:`Adjust the slider and send. Observe the previous message peek.`,footer:(0,j.jsxs)(Composer,{prompt:e.nextPrompt,onSend:e.send,children:[(0,j.jsxs)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:12,minWidth:40},children:[t,`px`]}),(0,j.jsx)(`span`,{style:{width:80},children:(0,j.jsx)(D,{"aria-label":`Peek`,min:0,max:128,step:8,value:t,onValueChange:e=>n(e)})})]}),children:(0,j.jsx)(k,{"aria-label":`Conversation with context`,anchorOffset:t,style:{height:L},children:turns(e.list)})})}},U={render:function Render(){let e=useChat();return(0,j.jsx)(ChatCard,{title:`Streaming Messages`,description:`Auto-scroll follows the live edge of the conversation.`,action:(0,j.jsx)(ResetButton,{onClick:e.reset}),note:`Streaming is simulated. autoScroll is enabled.`,footer:(0,j.jsx)(Composer,{prompt:e.nextPrompt,onSend:e.send}),children:(0,j.jsx)(k,{"aria-label":`Streaming conversation`,style:{height:L},children:e.list.length?turns(e.list,()=>!1):(0,j.jsx)(O,{style:{height:L},children:emptyState(`Ready to Stream`,`Press send to stream a scripted conversation.`)})})})}},W={render:function Render(){let[e,t]=(0,A.useState)(`last-anchor`);return(0,j.jsx)(ChatCard,{title:`Opening Position`,description:`Choose where a saved transcript opens.`,note:`Toggle the defaultScrollPosition to see where the transcript starts when you open the thread.`,footer:(0,j.jsxs)(x,{type:`single`,variant:`outline`,"aria-label":`Opening position`,value:e,onValueChange:e=>e&&t(e),style:{width:`100%`},children:[(0,j.jsx)(b,{value:`start`,children:`start`}),(0,j.jsx)(b,{value:`end`,children:`end`}),(0,j.jsx)(b,{value:`last-anchor`,children:`last-anchor`})]}),children:(0,j.jsx)(k,{"aria-label":`Saved thread`,defaultScrollPosition:e,style:{height:L},children:turns(I)},e)})}},G=[{id:`e1`,role:`user`,text:`Checkout errors went up after this morning’s deploy. What changed?`},{id:`e2`,role:`assistant`,text:`Only the export queue worker changed. The deploy moved large CSV jobs onto the shared retry policy, which made each failed attempt hold a worker slot longer than before.

The app deploy did not include checkout, pricing, or billing API changes.`}],K=[{id:`l1`,role:`user`,text:`Do we need to roll back?`},{id:`l2`,role:`assistant`,text:`Not yet. Queue depth is recovering after we reduced retry concurrency, and the oldest pending job is now under five minutes old.

Keep rollback ready if the queue starts climbing again, but the current trend points toward recovery.`},{id:`l3`,role:`user`,text:`Okay. Post an update in the incident channel.`},{id:`l4`,role:`assistant`,text:`Posted: queue recovering, no rollback for now, next check in 30 minutes.`},{id:`l5`,role:`user`,text:`What should the follow-up ticket say?`},{id:`l6`,role:`assistant`,text:`Give large CSV exports their own retry policy with a lower concurrency cap, and add a queue-depth alert at 500 pending jobs so the next spike pages someone before customers notice.`}],q={render:function Render(){let[e,t]=(0,A.useState)(K),n=e.length>K.length;return(0,j.jsx)(ChatCard,{title:`Load History`,description:`Prepended messages keep your place.`,action:(0,j.jsx)(ResetButton,{onClick:()=>t(K)}),note:`Click Load History to load the entire conversation.`,footer:(0,j.jsxs)(`div`,{style:{display:`grid`,gap:8,width:`100%`,textAlign:`center`},children:[(0,j.jsx)(c,{variant:`secondary`,onClick:()=>t([...G,...K]),disabled:n,children:`Load History`}),(0,j.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:12,lineHeight:`16px`},children:`Restore earlier messages while keeping your place.`})]}),children:(0,j.jsx)(k,{"aria-label":`Incident thread`,defaultScrollPosition:`start`,style:{height:L},children:turns(e)})})}},J={render:function Render(){let e=useChat(),[t,n]=(0,A.useState)(`slide`);return(0,j.jsx)(ChatCard,{title:`Animation`,description:`Choose how user messages are animated when they are added to the conversation.`,action:(0,j.jsx)(ResetButton,{onClick:e.reset}),note:`Select an animation then click send to see it in action.`,footer:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(ne,{"aria-label":`Animation`,size:`sm`,value:t,onValueChange:e=>n(e),options:[`none`,`fade`,`slide`,`scale`].map(e=>({value:e,label:e[0].toUpperCase()+e.slice(1)}))}),(0,j.jsx)(SendButton,{onClick:e.send})]}),children:(0,j.jsx)(k,{"aria-label":`Animated conversation`,animation:t,style:{height:L},children:e.list.length?turns(e.list):(0,j.jsx)(O,{style:{height:L},children:emptyState(`No Messages Yet`,`Click the button below to send the first message.`)})})})}},Y={render:function Render(){let e=(0,A.useRef)(null);return(0,j.jsx)(ChatCard,{title:`Commands`,description:`Drive the transcript from outside.`,action:(0,j.jsxs)(f,{align:`end`,"aria-label":`Jump to`,trigger:(0,j.jsx)(c,{variant:`secondary`,size:`sm`,children:`Jump to…`}),children:[(0,j.jsx)(d,{onClick:()=>e.current?.scrollToStart(),children:`First message`}),F.map((t,n)=>(0,j.jsx)(d,{onClick:()=>e.current?.scrollToItem(`saved-user-${n}`),children:`Question ${n+1}`},n)),(0,j.jsx)(d,{onClick:()=>e.current?.scrollToEnd(),children:`Latest message`})]}),note:`Use the controls to jump to any message in the conversation.`,children:(0,j.jsx)(k,{controlRef:e,"aria-label":`Conversation`,style:{height:L},children:turns(I)})})}},X={render:function Render(){let e=(0,A.useRef)(null),[t,n]=(0,A.useState)(null),r=I.filter(e=>e.role===`user`);return(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,j.jsx)(ChatCard,{title:`Transcript Outline`,description:`Track the current anchored turn.`,note:`Open the outline to jump between anchored turns as you read.`,children:(0,j.jsx)(k,{controlRef:e,onAnchorChange:n,"aria-label":`Incident handoff`,defaultScrollPosition:`start`,style:{height:L},children:turns(I)})}),(0,j.jsx)(`nav`,{"aria-label":`Outline`,style:{display:`grid`,gap:2},children:r.map((n,r)=>(0,j.jsx)(`button`,{type:`button`,"aria-label":`Question ${r+1}: ${n.text}`,"aria-current":t===n.id?`true`:void 0,onClick:()=>e.current?.scrollToItem(n.id),style:{width:20,height:8,padding:0,border:0,background:`none`,cursor:`pointer`,display:`grid`,alignItems:`center`},children:(0,j.jsx)(`span`,{style:{display:`block`,height:t===n.id?2:1,background:t===n.id?`var(--ds-foreground)`:`var(--ds-muted-foreground)`,borderRadius:1}})},n.id))})]})}},statusText=({atStart:e,atEnd:t})=>e&&t?`Everything is in view.`:e?`You are at the top. You can only scroll down.`:t?`You are at the latest message. You can only scroll up.`:`You can scroll up and down.`,Z={render:function Render(){let[e,t]=(0,A.useState)({atStart:!0,atEnd:!1});return(0,j.jsx)(ChatCard,{title:`Scroll Status`,description:`Where the reader can scroll to from the current position.`,note:`Scroll the transcript to see the footer update.`,footer:(0,j.jsx)(`p`,{role:`status`,style:{margin:0,width:`100%`,textAlign:`center`,color:`var(--ds-muted-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:13,lineHeight:`20px`},children:statusText(e)}),children:(0,j.jsx)(k,{"aria-label":`Training plan`,defaultScrollPosition:`start`,scrollToStartButton:!0,onScrollStateChange:t,style:{height:L},children:turns(I)})})}},Q={parameters:{layout:`fullscreen`},render:()=>(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`},children:[`light`,`dark`].map(e=>(0,j.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-card)`,padding:24},children:(0,j.jsx)(k,{"aria-label":`Thread, ${e}`,defaultScrollPosition:`start`,scrollToStartButton:!0,style:{height:360},children:N})},e))})},$=[`Playground`,`Demo`,`AnchoringTurns`,`GroupChat`,`KeepingContextVisible`,`FollowingTheLiveEdge`,`OpeningSavedThreads`,`LoadingEarlierMessages`,`AnimatingNewMessages`,`JumpingToMessages`,`TrackingTheReadersPosition`,`ReadingScrollState`,`Themes`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`Figma demo "Message Scroller": a new chat; send posts a question that settles at the top and streams the reply.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`Figma demo "Anchoring Turns": choose whether the user's or the assistant's turn settles near the top edge.`,...z.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`Figma demo "Group Chat": when someone joins, a Marker is added and anchored as the next turn.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:'Figma demo "Keeping Context Visible": `anchorOffset` keeps part of the previous reply above a new turn.',...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`Figma demo "Following the Live Edge": replies stream in and auto-scroll follows them while the reader is at the end.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:'Figma demo "Opening Saved Threads": `defaultScrollPosition` opens a saved transcript at the start, the end or the last anchored turn.',...W.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Figma demo "Loading Earlier Messages": messages added above keep the reader's place.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Figma demo "Animating New Messages": choose how new turns come in.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:'Figma demo "Jumping to Messages": `controlRef` drives the transcript from outside.',...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:'Figma demo "Tracking the Reader\'s Position": `onAnchorChange` drives an outline of the anchored turns.',...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:'Figma demo "Reading Scroll State": `onScrollStateChange` reports where the reader can scroll to.',...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...Q.parameters?.docs?.description}}}})))()}init_MessageScroller_stories();export{z as AnchoringTurns,J as AnimatingNewMessages,R as Demo,U as FollowingTheLiveEdge,V as GroupChat,Y as JumpingToMessages,H as KeepingContextVisible,q as LoadingEarlierMessages,W as OpeningSavedThreads,P as Playground,Z as ReadingScrollState,Q as Themes,X as TrackingTheReadersPosition,$ as __namedExportsOrder,M as default};