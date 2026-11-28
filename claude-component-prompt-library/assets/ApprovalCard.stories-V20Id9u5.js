import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-BzEjYkTW.js";import{B as r,It as i,Ut as a,ft as o,in as s,kt as c,p as l,tt as u,y as d}from"./react-PEgvXV6W.js";import{n as f,t as p}from"./Button-CbgSH4Zp.js";import{n as m,t as h}from"./Badge-D3784j42.js";import{n as g,t as _}from"./Avatar-B0NNcRLd.js";import{n as v,t as y}from"./AvatarGroup-Bx3VOYY1.js";import{n as b,t as x}from"./Spinner-dWhiUXmI.js";import{i as S,t as C}from"./Checkbox-Bexsg9Ta.js";import{r as w,t as T}from"./Bubble-02vToD3-.js";import{r as E,t as D}from"./Kbd-BbRxgRm7.js";function ApprovalCard({title:e,description:t,icon:n,risk:i,riskLabel:a,children:l,state:u=`pending`,onApprove:f,onDeny:m,alwaysAllow:g,onAlwaysAllowChange:_,countdown:v,outcome:y,onUndo:b,labels:S={},className:w,onKeyDown:T,...E}){let N=`${(0,O.useId)()}-title`,P=u===`approving`;if(u===`approved`||u===`denied`||u===`expired`)return(0,k.jsx)(`article`,{...E,"aria-labelledby":N,className:[`ds-approval-card`,`ds-approval-card--decided`,w].filter(Boolean).join(` `),children:(0,k.jsxs)(`div`,{className:`ds-approval-card__decided`,role:`status`,children:[(0,k.jsx)(`span`,{className:`ds-approval-card__status ds-approval-card__status--${u}`,"aria-hidden":!0,children:u===`approved`?(0,k.jsx)(s,{}):u===`denied`?(0,k.jsx)(r,{}):(0,k.jsx)(c,{})}),(0,k.jsxs)(`div`,{className:`ds-approval-card__heading`,children:[(0,k.jsxs)(`p`,{className:`ds-approval-card__title`,id:N,children:[S[u]??M[u],` · `,e]}),y!==void 0&&(0,k.jsx)(`p`,{className:`ds-approval-card__description`,children:y})]}),b&&(0,k.jsx)(p,{variant:`ghost`,size:`xs`,leadingIcon:(0,k.jsx)(o,{}),onClick:b,children:S.undo??`Undo`})]})});let handleKeyDown=e=>{if(T?.(e),e.defaultPrevented||P)return;let t=e.target;e.key===`Escape`&&m?(e.preventDefault(),m()):e.key===`Enter`&&f&&!t.closest(`button, a, input:not([type="checkbox"]), textarea, select, [contenteditable="true"]`)&&(e.preventDefault(),f())};return(0,k.jsxs)(`article`,{...E,"aria-labelledby":N,"aria-busy":P||void 0,tabIndex:-1,onKeyDown:handleKeyDown,className:[`ds-approval-card`,w].filter(Boolean).join(` `),children:[(0,k.jsxs)(`div`,{className:`ds-approval-card__header`,children:[n&&(0,k.jsx)(`span`,{className:`ds-approval-card__icon`,"aria-hidden":!0,children:n}),(0,k.jsxs)(`div`,{className:`ds-approval-card__heading`,children:[(0,k.jsx)(`h3`,{className:`ds-approval-card__title`,id:N,children:e}),t!==void 0&&(0,k.jsx)(`p`,{className:`ds-approval-card__description`,children:t})]}),i&&(0,k.jsx)(h,{variant:`tint`,color:A[i],children:a??j[i]})]}),l!=null&&(0,k.jsx)(`div`,{className:`ds-approval-card__body`,children:l}),(0,k.jsxs)(`div`,{className:`ds-approval-card__footer`,children:[v===void 0?g!==void 0&&(0,k.jsx)(C,{className:`ds-approval-card__always`,label:S.alwaysAllow??`Always allow this action`,checked:g,onCheckedChange:_}):(0,k.jsxs)(`span`,{className:`ds-approval-card__countdown`,role:`timer`,children:[(0,k.jsx)(c,{"aria-hidden":!0}),v]}),(0,k.jsxs)(`div`,{className:`ds-approval-card__actions`,children:[(0,k.jsx)(p,{variant:`ghost`,size:`sm`,trailingIcon:(0,k.jsx)(D,{size:`sm`,children:`Esc`}),"aria-keyshortcuts":`Escape`,onClick:P?void 0:m,children:S.deny??`Deny`}),(0,k.jsx)(p,{size:`sm`,trailingIcon:P?(0,k.jsx)(x,{size:`sm`,decorative:!0}):(0,k.jsx)(D,{size:`sm`,variant:`inverted`,icon:(0,k.jsx)(d,{}),label:`Enter`}),"aria-keyshortcuts":`Enter`,onClick:P?void 0:f,children:P?S.approving??`Approving`:S.approve??`Approve`})]})]})]})}function ApprovalCardDetails({items:e,className:t,...n}){return(0,k.jsx)(`dl`,{...n,className:[`ds-approval-card__details`,t].filter(Boolean).join(` `),children:e.map(([e,t],n)=>(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`dt`,{children:e}),(0,k.jsx)(`dd`,{children:t})]},n))})}function ApprovalCardSummary({className:e,...t}){return(0,k.jsx)(`p`,{...t,className:[`ds-approval-card__summary`,e].filter(Boolean).join(` `)})}function ApprovalCardPreview({className:e,...t}){return(0,k.jsx)(`pre`,{...t,className:[`ds-approval-card__preview`,e].filter(Boolean).join(` `)})}function ApprovalCardRecipients({people:e,total:t,moreLabel:n=e=>`+${e} more`,className:r,...i}){let a=(t??e.length)-e.length;return(0,k.jsxs)(`div`,{...i,className:[`ds-approval-card__recipients`,r].filter(Boolean).join(` `),children:[(0,k.jsx)(y,{size:`xs`,"aria-hidden":!0,children:e.slice(0,4).map(e=>(0,k.jsx)(_,{name:e.name,src:e.src,initials:e.name.charAt(0)},e.name))}),(0,k.jsx)(`span`,{children:e.map(e=>e.name).join(`, `)}),a>0&&(0,k.jsx)(`span`,{className:`ds-approval-card__more`,children:n(a)})]})}var O,k,A,j,M;function init_ApprovalCard(){return(init_ApprovalCard=e((()=>{i(),O=n(),g(),v(),m(),f(),S(),E(),b(),k=t(),A={low:`green`,medium:`amber`,high:`red`},j={low:`Low risk`,medium:`Medium risk`,high:`High risk`},M={approved:`Approved`,denied:`Denied`,expired:`Denied itself`},ApprovalCard.__docgenInfo={description:`An agent asks before it acts: Deny (Esc) or Approve (Enter, ↵), then one line with the outcome.`,methods:[],displayName:`ApprovalCard`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`},description:``},title:{required:!0,tsType:{name:`ReactNode`},description:`What the agent will do, e.g. "Send the October newsletter".`},description:{required:!1,tsType:{name:`ReactNode`},description:`Where and who: "Newsletter · Marketing agent".`},icon:{required:!1,tsType:{name:`ReactNode`},description:`A 16 px icon for the kind of action, shown in a tile.`},risk:{required:!1,tsType:{name:`union`,raw:`'low' | 'medium' | 'high'`,elements:[{name:`literal`,value:`'low'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'high'`}]},description:`The risk badge; leave it out for none.`},riskLabel:{required:!1,tsType:{name:`ReactNode`},description:`The badge text; defaults to "Low risk", "Medium risk" or "High risk".`},children:{required:!1,tsType:{name:`ReactNode`},description:"The details: `ApprovalCardDetails`, `ApprovalCardSummary`, `ApprovalCardPreview` or your own content."},state:{required:!1,tsType:{name:`union`,raw:`'pending' | 'approving' | 'approved' | 'denied' | 'expired'`,elements:[{name:`literal`,value:`'pending'`},{name:`literal`,value:`'approving'`},{name:`literal`,value:`'approved'`},{name:`literal`,value:`'denied'`},{name:`literal`,value:`'expired'`}]},description:"Defaults to `pending`.",defaultValue:{value:`'pending'`,computed:!1}},onApprove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onDeny:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},alwaysAllow:{required:!1,tsType:{name:`boolean`},description:`Shows "Always allow this action" when given.`},onAlwaysAllowChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},countdown:{required:!1,tsType:{name:`ReactNode`},description:`Replaces "Always allow this action" with a countdown, e.g. "Denies itself in 0:45". The app counts.`},outcome:{required:!1,tsType:{name:`ReactNode`},description:`Once decided, the second line: "By you at 9:02 · sending to 412 people".`},onUndo:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Shows Undo on the decided line.`},labels:{required:!1,tsType:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{ approve: string; approving: string; deny: string; alwaysAllow: string; undo: string; approved: string; denied: string; expired: string }`,signature:{properties:[{key:`approve`,value:{name:`string`,required:!0}},{key:`approving`,value:{name:`string`,required:!0}},{key:`deny`,value:{name:`string`,required:!0}},{key:`alwaysAllow`,value:{name:`string`,required:!0}},{key:`undo`,value:{name:`string`,required:!0}},{key:`approved`,value:{name:`string`,required:!0}},{key:`denied`,value:{name:`string`,required:!0}},{key:`expired`,value:{name:`string`,required:!0}}]}}],raw:`Partial<{ approve: string; approving: string; deny: string; alwaysAllow: string; undo: string; approved: string; denied: string; expired: string }>`},description:`Labels, for other languages.`,defaultValue:{value:`{}`,computed:!1}}},composes:[`Omit`]},ApprovalCardDetails.__docgenInfo={description:`The facts of the action as name–value rows.`,methods:[],displayName:`ApprovalCardDetails`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDListElement`}],raw:`Ref<HTMLDListElement>`},description:``},items:{required:!0,tsType:{name:`Array`,elements:[{name:`tuple`,raw:`[ReactNode, ReactNode]`,elements:[{name:`ReactNode`},{name:`ReactNode`}]}],raw:`[ReactNode, ReactNode][]`},description:"Name → value rows, e.g. `[['Subject', 'What’s new in October'], ['Sends', 'Today, 9:00']]`."}},composes:[`HTMLAttributes`]},ApprovalCardSummary.__docgenInfo={description:`A sentence about the action.`,methods:[],displayName:`ApprovalCardSummary`},ApprovalCardPreview.__docgenInfo={description:`What will change, in a monospace box (a command, files, a diff).`,methods:[],displayName:`ApprovalCardPreview`},ApprovalCardRecipients.__docgenInfo={description:`Who the action reaches: overlapping avatars, the first names and "+N more".`,methods:[],displayName:`ApprovalCardRecipients`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:``},people:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ name: string; src?: string }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`src`,value:{name:`string`,required:!1}}]}}],raw:`{ name: string; src?: string }[]`},description:"The first people, by name (up to four get an avatar); `src` for a picture, otherwise the first letter."},total:{required:!1,tsType:{name:`number`},description:`Everyone the action reaches; the rest show as "+N more".`},moreLabel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(count: number) => ReactNode`,signature:{arguments:[{type:{name:`number`},name:`count`}],return:{name:`ReactNode`}}},description:`The "+N more" text, for other languages.`,defaultValue:{value:"(n) => `+${n} more`",computed:!1}}},composes:[`HTMLAttributes`]}})))()}function Newsletter(){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ApprovalCardRecipients,{people:[{name:`Ana`},{name:`Jonas`},{name:`Mia`},{name:`Tomás`}],total:412}),(0,P.jsx)(ApprovalCardDetails,{items:[[`Subject`,`What’s new in October`],[`Sends`,`Today, 9:00`]]})]})}function Branches(){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ApprovalCardSummary,{children:`All three were merged more than 90 days ago and no open pull request uses them.`}),(0,P.jsx)(ApprovalCardPreview,{children:`origin/feature/old-nav
origin/fix/login-timeout
origin/spike/charts-v1`})]})}var N,P,F,I,L,R,z,B,V,H,U;function init_ApprovalCard_stories(){return(init_ApprovalCard_stories=e((()=>{i(),N=n(),g(),w(),init_ApprovalCard(),P=t(),F={title:`Patterns/Approval Card`,parameters:{docs:{description:{component:'The Sort UI 2.0 pattern **Approval Card** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6090-1725)): an agent asks before it acts. The header says what it will do and for whom, with a risk badge; the body holds the details (`ApprovalCardRecipients`, `ApprovalCardDetails`, `ApprovalCardSummary`, `ApprovalCardPreview`); the footer has "Always allow this action" (or a countdown) and Deny / Approve. Esc denies and Enter approves while focus is in the card. `state`: `pending`, `approving` (the button holds a spinner), then `approved`, `denied` or `expired`, which fold it to one line with an optional Undo.\n\n**When to use:** an agent is about to take one action with an effect outside the chat (sending, paying, deleting, deploying) and needs a yes or no first.\n**When not to use:** the agent needs a lasting right rather than one action (use Permission Request), asks an open question (use Decision Card), or the action is harmless and reversible: just do it and offer Undo.'}}}},I={width:`min(420px, calc(100vw - 32px))`},L={args:{state:`pending`,risk:`medium`,alwaysAllow:!1,countdown:!1},argTypes:{state:{name:`State`,control:`inline-radio`,options:[`pending`,`approving`,`approved`,`denied`,`expired`]},risk:{name:`Risk`,control:`inline-radio`,options:[`none`,`low`,`medium`,`high`]},alwaysAllow:{name:`Always allow`},countdown:{name:`Countdown`,description:`Replaces "Always allow" with "Denies itself in …"`}},render:function Render({state:e,risk:t,alwaysAllow:n,countdown:r}){let[i,o]=(0,N.useState)(n);return(0,N.useEffect)(()=>o(n),[n]),(0,P.jsx)(`div`,{style:I,children:(0,P.jsx)(ApprovalCard,{icon:(0,P.jsx)(a,{}),title:`Send the October newsletter`,description:`Newsletter · Marketing agent`,risk:t===`none`?void 0:t,state:e,alwaysAllow:i,onAlwaysAllowChange:o,countdown:r?`Denies itself in 0:45`:void 0,outcome:e===`approved`?`By you at 9:02 · sending to 412 people`:e===`expired`?`Nobody answered in 1:00`:`By you at 12:04`,onUndo:e===`approved`?()=>{}:void 0,onApprove:()=>{},onDeny:()=>{},children:(0,P.jsx)(Newsletter,{})})})}},R={render:function Render(){let[e,t]=(0,N.useState)(`pending`),[n,r]=(0,N.useState)(!1),approve=()=>{t(`approving`),setTimeout(()=>t(`approved`),1200)};return(0,P.jsxs)(`div`,{style:{...I,display:`grid`,gap:10},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,P.jsx)(_,{size:`sm`,icon:(0,P.jsx)(l,{}),name:`Marketing agent`}),(0,P.jsx)(T,{variant:`muted`,children:`I drafted the October newsletter. Ready to send?`})]}),(0,P.jsx)(ApprovalCard,{icon:(0,P.jsx)(a,{}),title:`Send the October newsletter`,description:`Newsletter · Marketing agent`,risk:`medium`,state:e,alwaysAllow:n,onAlwaysAllowChange:r,onApprove:approve,onDeny:()=>t(`denied`),outcome:e===`approved`?`By you at 9:02 · sending to 412 people`:`By you at 9:02`,onUndo:()=>t(`pending`),children:(0,P.jsx)(Newsletter,{})})]})}},z={render:function Render(){let[e,t]=(0,N.useState)(45),[n,r]=(0,N.useState)(`pending`);return(0,N.useEffect)(()=>{if(n!==`pending`)return;if(e===0){r(`expired`);return}let i=setTimeout(()=>t(e=>e-1),1e3);return()=>clearTimeout(i)},[e,n]),(0,P.jsx)(`div`,{style:I,children:(0,P.jsx)(ApprovalCard,{icon:(0,P.jsx)(u,{}),title:`Delete 3 stale branches`,description:`git push --delete · Repo agent`,risk:`high`,state:n,countdown:`Denies itself in 0:${String(e).padStart(2,`0`)}`,onApprove:()=>r(`approved`),onDeny:()=>r(`denied`),outcome:n===`expired`?`Nobody answered in 0:45`:`By you just now`,onUndo:()=>{t(45),r(`pending`)},children:(0,P.jsx)(Branches,{})})})}},B={render:()=>(0,P.jsx)(`div`,{style:I,children:(0,P.jsx)(ApprovalCard,{icon:(0,P.jsx)(a,{}),title:`Send the October newsletter`,description:`Newsletter · Marketing agent`,risk:`medium`,state:`approving`,alwaysAllow:!1,onApprove:()=>{},onDeny:()=>{},children:(0,P.jsx)(Newsletter,{})})})},V={render:()=>(0,P.jsxs)(`div`,{style:{...I,display:`grid`,gap:12},children:[(0,P.jsx)(ApprovalCard,{state:`approved`,title:`Send the October newsletter`,outcome:`By you at 9:02 · sending to 412 people`,onUndo:()=>{}}),(0,P.jsx)(ApprovalCard,{state:`denied`,title:`Delete 3 stale branches`,outcome:`By you at 12:04`}),(0,P.jsx)(ApprovalCard,{state:`expired`,title:`Delete 3 stale branches`,outcome:`Nobody answered in 1:00`})]})},H={parameters:{layout:`fullscreen`},render:()=>(0,P.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(340px, 1fr))`},children:[`light`,`dark`].map(e=>(0,P.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,alignContent:`start`},children:[(0,P.jsx)(ApprovalCard,{icon:(0,P.jsx)(u,{}),title:`Delete 3 stale branches`,description:`git push --delete · Repo agent`,risk:`high`,countdown:`Denies itself in 0:45`,onApprove:()=>{},onDeny:()=>{},children:(0,P.jsx)(Branches,{})}),(0,P.jsx)(ApprovalCard,{state:`approved`,title:`Send the October newsletter`,outcome:`By you at 9:02`,onUndo:()=>{}}),(0,P.jsx)(ApprovalCard,{state:`expired`,title:`Delete 3 stale branches`,outcome:`Nobody answered in 1:00`})]},e))})},U=[`Playground`,`InChat`,`HighRisk`,`Approving`,`Decided`,`Themes`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'pending',
    risk: 'medium',
    alwaysAllow: false,
    countdown: false
  },
  argTypes: {
    state: {
      name: 'State',
      control: 'inline-radio',
      options: ['pending', 'approving', 'approved', 'denied', 'expired']
    },
    risk: {
      name: 'Risk',
      control: 'inline-radio',
      options: ['none', 'low', 'medium', 'high']
    },
    alwaysAllow: {
      name: 'Always allow'
    },
    countdown: {
      name: 'Countdown',
      description: 'Replaces "Always allow" with "Denies itself in …"'
    }
  },
  render: function Render({
    state,
    risk,
    alwaysAllow,
    countdown
  }) {
    const [allow, setAllow] = useState(alwaysAllow);
    useEffect(() => setAllow(alwaysAllow), [alwaysAllow]);
    return <div style={WIDTH}>
        <ApprovalCard icon={<RiMailLine />} title="Send the October newsletter" description="Newsletter · Marketing agent" risk={risk === 'none' ? undefined : risk} state={state} alwaysAllow={allow} onAlwaysAllowChange={setAllow} countdown={countdown ? 'Denies itself in 0:45' : undefined} outcome={state === 'approved' ? 'By you at 9:02 · sending to 412 people' : state === 'expired' ? 'Nobody answered in 1:00' : 'By you at 12:04'} onUndo={state === 'approved' ? () => {} : undefined} onApprove={() => {}} onDeny={() => {}}>
          <Newsletter />
        </ApprovalCard>
      </div>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [state, setState] = useState<ApprovalCardState>('pending');
    const [allow, setAllow] = useState(false);
    const approve = () => {
      setState('approving');
      setTimeout(() => setState('approved'), 1200);
    };
    return <div style={{
      ...WIDTH,
      display: 'grid',
      gap: 10
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
          <Avatar size="sm" icon={<RiSparkling2Fill />} name="Marketing agent" />
          <Bubble variant="muted">I drafted the October newsletter. Ready to send?</Bubble>
        </div>
        <ApprovalCard icon={<RiMailLine />} title="Send the October newsletter" description="Newsletter · Marketing agent" risk="medium" state={state} alwaysAllow={allow} onAlwaysAllowChange={setAllow} onApprove={approve} onDeny={() => setState('denied')} outcome={state === 'approved' ? 'By you at 9:02 · sending to 412 people' : 'By you at 9:02'} onUndo={() => setState('pending')}>
          <Newsletter />
        </ApprovalCard>
      </div>;
  }
}`,...R.parameters?.docs?.source},description:{story:`Figma "In chat": right under the agent's message. Approve runs for a moment, then the card folds; Undo brings it back.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [left, setLeft] = useState(45);
    const [state, setState] = useState<ApprovalCardState>('pending');
    useEffect(() => {
      if (state !== 'pending') return;
      if (left === 0) {
        setState('expired');
        return;
      }
      const t = setTimeout(() => setLeft(s => s - 1), 1000);
      return () => clearTimeout(t);
    }, [left, state]);
    return <div style={WIDTH}>
        <ApprovalCard icon={<RiGitBranchLine />} title="Delete 3 stale branches" description="git push --delete · Repo agent" risk="high" state={state} countdown={\`Denies itself in 0:\${String(left).padStart(2, '0')}\`} onApprove={() => setState('approved')} onDeny={() => setState('denied')} outcome={state === 'expired' ? 'Nobody answered in 0:45' : 'By you just now'} onUndo={() => {
        setLeft(45);
        setState('pending');
      }}>
          <Branches />
        </ApprovalCard>
      </div>;
  }
}`,...z.parameters?.docs?.source},description:{story:`Figma "High risk": a preview of what changes, and a countdown; at 0 it denies itself.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={WIDTH}>
      <ApprovalCard icon={<RiMailLine />} title="Send the October newsletter" description="Newsletter · Marketing agent" risk="medium" state="approving" alwaysAllow={false} onApprove={() => {}} onDeny={() => {}}>
        <Newsletter />
      </ApprovalCard>
    </div>
}`,...B.parameters?.docs?.source},description:{story:`Figma "Approving": the button holds a spinner until the action is done; the card is busy.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...WIDTH,
    display: 'grid',
    gap: 12
  }}>
      <ApprovalCard state="approved" title="Send the October newsletter" outcome="By you at 9:02 · sending to 412 people" onUndo={() => {}} />
      <ApprovalCard state="denied" title="Delete 3 stale branches" outcome="By you at 12:04" />
      <ApprovalCard state="expired" title="Delete 3 stale branches" outcome="Nobody answered in 1:00" />
    </div>
}`,...V.parameters?.docs?.source},description:{story:`Figma "Decided": one line each – approved (with Undo), denied, or denied by itself.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24,
      display: 'grid',
      gap: 16,
      alignContent: 'start'
    }}>
          <ApprovalCard icon={<RiGitBranchLine />} title="Delete 3 stale branches" description="git push --delete · Repo agent" risk="high" countdown="Denies itself in 0:45" onApprove={() => {}} onDeny={() => {}}>
            <Branches />
          </ApprovalCard>
          <ApprovalCard state="approved" title="Send the October newsletter" outcome="By you at 9:02" onUndo={() => {}} />
          <ApprovalCard state="expired" title="Delete 3 stale branches" outcome="Nobody answered in 1:00" />
        </div>)}
    </div>
}`,...H.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...H.parameters?.docs?.description}}}})))()}init_ApprovalCard_stories();export{B as Approving,V as Decided,z as HighRisk,R as InChat,L as Playground,H as Themes,U as __namedExportsOrder,F as default};