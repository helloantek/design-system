import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-Dzrefqrb.js";import{$t as r,Cn as i,L as a,Pt as o,Ut as s,_t as c,a as l,g as u,nn as d,ut as f,xt as p}from"./react-CninEqZu.js";import{n as m,t as h}from"./Button-DkJIZbxC.js";import{r as g,t as _}from"./Bubble-C0kQndw0.js";import{n as v,t as y}from"./Toggle-D8UcsWW8.js";import{i as b,r as x,t as S}from"./Popover-P_j0eV3t.js";function MessageActions({copyText:e,onCopy:t,onRegenerate:n,version:i,versions:o,onVersionChange:m,rating:g,defaultRating:_=null,onRatingChange:v,reasons:b=E,onReason:D,onReadAloudChange:O,reading:k=!1,readTime:A,children:j,labels:M={},className:N,...P}){let F={...T,...M},[I,L]=(0,C.useState)(_),R=g===void 0?I:g,[z,B]=(0,C.useState)(!1),[V,H]=(0,C.useState)(!1),U=(0,C.useRef)(void 0);(0,C.useEffect)(()=>()=>clearTimeout(U.current),[]);let rate=e=>{g===void 0&&L(e),v?.(e),B(e===`down`&&b.length>0)},copy=()=>{e!==void 0&&navigator.clipboard?.writeText(e).catch(()=>{}),t?.(),H(!0),clearTimeout(U.current),U.current=setTimeout(()=>H(!1),2e3)},W=i!==void 0&&o!==void 0&&o>1,G=(0,w.jsx)(y,{size:`sm`,icon:(0,w.jsx)(c,{}),"aria-label":F.bad,pressed:R===`down`,onClick:e=>{e.preventDefault(),rate(R===`down`?null:`down`)}});return(0,w.jsxs)(`div`,{...P,role:`group`,"aria-label":P[`aria-label`]??F.group,className:[`ds-message-actions`,N].filter(Boolean).join(` `),children:[(0,w.jsx)(h,{variant:`ghost`,size:`sm`,icon:V?(0,w.jsx)(d,{}):(0,w.jsx)(l,{}),"aria-label":V?F.copied:F.copy,className:V?`ds-message-actions__copied`:void 0,onClick:copy}),n&&(0,w.jsx)(h,{variant:`ghost`,size:`sm`,icon:(0,w.jsx)(p,{}),"aria-label":F.regenerate,onClick:n}),W&&(0,w.jsxs)(`span`,{className:`ds-message-actions__versions`,role:`group`,"aria-label":F.versionName(i,o),children:[(0,w.jsx)(h,{variant:`ghost`,size:`sm`,icon:(0,w.jsx)(u,{}),"aria-label":F.previous,disabled:i<=1,onClick:()=>m?.(i-1)}),(0,w.jsx)(`span`,{className:`ds-message-actions__version`,"aria-hidden":!0,children:F.version(i,o)}),(0,w.jsx)(h,{variant:`ghost`,size:`sm`,icon:(0,w.jsx)(r,{}),"aria-label":F.next,disabled:i>=o,onClick:()=>m?.(i+1)})]}),(0,w.jsx)(y,{size:`sm`,icon:(0,w.jsx)(f,{}),"aria-label":F.good,pressed:R===`up`,onPressedChange:e=>rate(e?`up`:null)}),b.length>0?(0,w.jsx)(S,{trigger:G,title:F.whatWasWrong,align:`start`,open:z,onOpenChange:e=>!e&&B(!1),children:(0,w.jsx)(`div`,{className:`ds-message-actions__reasons`,children:b.map(e=>(0,w.jsx)(x,{children:(0,w.jsx)(h,{variant:`outline`,size:`sm`,onClick:()=>D?.(e),children:e})},e))})}):G,O&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(y,{size:`sm`,icon:k?(0,w.jsx)(a,{}):(0,w.jsx)(s,{}),"aria-label":F.readAloud,pressed:k,className:k?`ds-message-actions__reading`:void 0,onPressedChange:O}),k&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`span`,{className:`ds-message-actions__wave`,"aria-hidden":!0,children:Array.from({length:8},(e,t)=>(0,w.jsx)(`span`,{},t))}),A!==void 0&&(0,w.jsx)(`span`,{className:`ds-message-actions__time`,children:A})]})]}),j,(0,w.jsx)(`span`,{className:`ds-message-actions__status`,role:`status`,children:V?F.copied:``})]})}var C,w,T,E;function init_MessageActions(){return(init_MessageActions=e((()=>{o(),C=n(),m(),b(),v(),w=t(),T={group:`Message actions`,copy:`Copy`,copied:`Copied`,regenerate:`Regenerate`,previous:`Previous version`,next:`Next version`,version:(e,t)=>`${e} / ${t}`,versionName:(e,t)=>`Version ${e} of ${t}`,good:`Good response`,bad:`Bad response`,whatWasWrong:`What was wrong?`,readAloud:`Read aloud`},E=[`Not true`,`Not helpful`,`Too long`,`Other…`],MessageActions.__docgenInfo={description:`The quiet bar under an AI message: Copy, Regenerate (with ‹ 2 / 3 › between versions), thumbs up and down, Read
aloud. Copy turns into a check for 2 s; thumbs down asks what was wrong; reading aloud shows a wave and Pause.`,methods:[],displayName:`MessageActions`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:``},copyText:{required:!1,tsType:{name:`string`},description:`The text Copy puts on the clipboard.`},onCopy:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Called on Copy (after `copyText` is written, if given). The icon is a green check for 2 s either way."},onRegenerate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Regenerate. Without it there is no Regenerate.`},version:{required:!1,tsType:{name:`number`},description:`With more than one version: ‹ 2 / 3 › between them (1-based).`},versions:{required:!1,tsType:{name:`number`},description:``},onVersionChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(version: number) => void`,signature:{arguments:[{type:{name:`number`},name:`version`}],return:{name:`void`}}},description:``},rating:{required:!1,tsType:{name:`union`,raw:`'up' | 'down' | null`,elements:[{name:`literal`,value:`'up'`},{name:`literal`,value:`'down'`},{name:`null`}]},description:`Thumbs up or down; leave out for uncontrolled. Pressing the pressed one again takes the rating back.`},defaultRating:{required:!1,tsType:{name:`union`,raw:`'up' | 'down' | null`,elements:[{name:`literal`,value:`'up'`},{name:`literal`,value:`'down'`},{name:`null`}]},description:``,defaultValue:{value:`null`,computed:!1}},onRatingChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(rating: MessageRating) => void`,signature:{arguments:[{type:{name:`union`,raw:`'up' | 'down' | null`,elements:[{name:`literal`,value:`'up'`},{name:`literal`,value:`'down'`},{name:`null`}]},name:`rating`}],return:{name:`void`}}},description:``},reasons:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:"Thumbs down asks what was wrong with these; `[]` asks nothing.",defaultValue:{value:`['Not true', 'Not helpful', 'Too long', 'Other…']`,computed:!1}},onReason:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(reason: string) => void`,signature:{arguments:[{type:{name:`string`},name:`reason`}],return:{name:`void`}}},description:``},onReadAloudChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(reading: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`reading`}],return:{name:`void`}}},description:`Read aloud. Without it there is no Read aloud.`},reading:{required:!1,tsType:{name:`boolean`},description:"While it reads: a wave, `readTime` and Pause.",defaultValue:{value:`false`,computed:!1}},readTime:{required:!1,tsType:{name:`ReactNode`},description:`How far it has read: "0:07".`},children:{required:!1,tsType:{name:`ReactNode`},description:`Other actions at the end (Ghost Buttons, size sm, icon only).`},labels:{required:!1,tsType:{name:`Partial`,elements:[{name:`MessageActionsLabels`}],raw:`Partial<MessageActionsLabels>`},description:`Texts, for other languages.`,defaultValue:{value:`{}`,computed:!1}}},composes:[`Omit`]}})))()}function AnswerCard({answer:e,children:t}){return(0,O.jsxs)(`div`,{style:M,children:[(0,O.jsxs)(`div`,{style:{display:`grid`,gap:10,padding:`12px 16px 10px`},children:[(0,O.jsx)(_,{variant:`muted`,align:`end`,style:{justifySelf:`end`},children:A}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,color:`var(--ds-muted-foreground)`,fontSize:`var(--ds-text-xs)`},children:[(0,O.jsx)(i,{size:12,"aria-hidden":!0}),` Sonnet 4.5`]}),(0,O.jsx)(`p`,{style:{margin:0},children:e})]}),(0,O.jsx)(`div`,{style:{padding:`6px 16px`,borderTop:`1px solid var(--ds-border)`},children:t})]})}var D,O,k,A,j,M,N,P,F,I,L,R;function init_MessageActions_stories(){return(init_MessageActions_stories=e((()=>{o(),D=n(),g(),init_MessageActions(),O=t(),k={title:`Patterns/Message Actions`,parameters:{docs:{description:{component:"The Sort UI 2.0 pattern **Message Actions** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6126-2162)): the quiet bar under an AI message. Copy (`copyText`, `onCopy`; the icon is a green check for 2 s), Regenerate (`onRegenerate`) with ‹ 2 / 3 › between the versions (`version`, `versions`, `onVersionChange`), thumbs up and down (`rating`; down asks what was wrong in a Popover: `reasons`, `onReason`), Read aloud (`onReadAloudChange`; while `reading`, a wave, `readTime` and Pause). Ghost Buttons and Toggles, size sm, in the muted colour; a pressed one is in the text colour.\n\n**When to use:** the quiet actions under every finished AI message: copy, regenerate, rate, read aloud.\n**When not to use:** the message is still streaming, or it is not from the AI. Don't add actions that change the conversation's data here (use a menu)."}}}},A=`Summarize the 2.4 release notes in one sentence.`,j=[`Shared workspaces arrive in 2.4, sync is twice as fast, and exports on Windows work again.`,`2.4 brings shared workspaces, sync that is twice as fast, and working exports on Windows.`,`In 2.4: shared workspaces, twice-as-fast sync, and fixed exports on Windows.`],M={width:`min(420px, calc(100vw - 32px))`,borderRadius:`var(--ds-radius-xl)`,background:`var(--ds-card)`,boxShadow:`0 0 0 1px var(--ds-border), var(--ds-surface-card)`,color:`var(--ds-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:`var(--ds-text-sm)`,lineHeight:`var(--ds-text-sm--line-height)`},N={render:function Render(){let[e,t]=(0,D.useState)(1),[n,r]=(0,D.useState)(1),[i,a]=(0,D.useState)(!1),[o,s]=(0,D.useState)(0);(0,D.useEffect)(()=>{if(!i)return;let e=setInterval(()=>s(e=>e+1),1e3);return()=>clearInterval(e)},[i]);let c=j[(n-1)%j.length];return(0,O.jsx)(AnswerCard,{answer:c,children:(0,O.jsx)(MessageActions,{copyText:c,onRegenerate:()=>{t(e=>e+1),r(e+1)},version:n,versions:e,onVersionChange:r,onReadAloudChange:a,reading:i,readTime:`0:${String(o).padStart(2,`0`)}`})})}},P={render:function Render(){let[e,t]=(0,D.useState)(2);return(0,O.jsx)(AnswerCard,{answer:j[e-1],children:(0,O.jsx)(MessageActions,{copyText:j[e-1],onRegenerate:()=>{},version:e,versions:3,onVersionChange:t,onReadAloudChange:()=>{}})})}},F={render:function Render(){let[e,t]=(0,D.useState)(null),[n,r]=(0,D.useState)();return(0,O.jsxs)(`div`,{style:{display:`grid`,gap:12,paddingBottom:140},children:[(0,O.jsx)(AnswerCard,{answer:j[0],children:(0,O.jsx)(MessageActions,{copyText:j[0],onRegenerate:()=>{},rating:e,onRatingChange:e=>{t(e),r(void 0)},onReason:r,onReadAloudChange:()=>{}})}),(0,O.jsxs)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:`var(--ds-text-xs)`},children:[`Rating: `,e??`none`,n?` · ${n}`:``]})]})}},I={render:()=>(0,O.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,O.jsx)(MessageActions,{copyText:j[0],onRegenerate:()=>{},defaultRating:`up`,onReadAloudChange:()=>{}}),(0,O.jsx)(MessageActions,{copyText:j[0],onRegenerate:()=>{},onReadAloudChange:()=>{},reading:!0,readTime:`0:07`})]})},L={parameters:{layout:`fullscreen`},render:()=>(0,O.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(340px, 1fr))`},children:[`light`,`dark`].map(e=>(0,O.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,alignContent:`start`},children:[(0,O.jsx)(AnswerCard,{answer:j[1],children:(0,O.jsx)(MessageActions,{copyText:j[1],onRegenerate:()=>{},version:2,versions:3,onReadAloudChange:()=>{}})}),(0,O.jsx)(MessageActions,{copyText:j[0],onRegenerate:()=>{},defaultRating:`up`,onReadAloudChange:()=>{},reading:!0,readTime:`0:07`})]},e))})},R=[`InAMessage`,`Versions`,`ThumbsDown`,`BarStates`,`Themes`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [versions, setVersions] = useState(1);
    const [version, setVersion] = useState(1);
    const [reading, setReading] = useState(false);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
      if (!reading) return;
      const tick = setInterval(() => setSeconds(s => s + 1), 1000);
      return () => clearInterval(tick);
    }, [reading]);
    const answer = ANSWERS[(version - 1) % ANSWERS.length];
    return <AnswerCard answer={answer}>
        <MessageActions copyText={answer} onRegenerate={() => {
        setVersions(n => n + 1);
        setVersion(versions + 1);
      }} version={version} versions={versions} onVersionChange={setVersion} onReadAloudChange={setReading} reading={reading} readTime={\`0:\${String(seconds).padStart(2, '0')}\`} />
      </AnswerCard>;
  }
}`,...N.parameters?.docs?.source},description:{story:`Figma "In a message": under the answer, at rest. Every action works: Regenerate adds a version, Read aloud reads.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [version, setVersion] = useState(2);
    return <AnswerCard answer={ANSWERS[version - 1]}>
        <MessageActions copyText={ANSWERS[version - 1]} onRegenerate={() => {}} version={version} versions={3} onVersionChange={setVersion} onReadAloudChange={() => {}} />
      </AnswerCard>;
  }
}`,...P.parameters?.docs?.source},description:{story:`Figma "Regenerated": ‹ 2 / 3 › to switch between the versions.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [rating, setRating] = useState<MessageRating>(null);
    const [reason, setReason] = useState<string>();
    return <div style={{
      display: 'grid',
      gap: 12,
      paddingBottom: 140
    }}>
        <AnswerCard answer={ANSWERS[0]}>
          <MessageActions copyText={ANSWERS[0]} onRegenerate={() => {}} rating={rating} onRatingChange={next => {
          setRating(next);
          setReason(undefined);
        }} onReason={setReason} onReadAloudChange={() => {}} />
        </AnswerCard>
        <p style={{
        margin: 0,
        color: 'var(--ds-muted-foreground)',
        fontFamily: 'var(--ds-font-sans)',
        fontSize: 'var(--ds-text-xs)'
      }}>
          Rating: {rating ?? 'none'}
          {reason ? \` · \${reason}\` : ''}
        </p>
      </div>;
  }
}`,...F.parameters?.docs?.source},description:{story:`Figma "Thumbs down": it asks what was wrong. Pressing it again takes the rating back.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>
      <MessageActions copyText={ANSWERS[0]} onRegenerate={() => {}} defaultRating="up" onReadAloudChange={() => {}} />
      <MessageActions copyText={ANSWERS[0]} onRegenerate={() => {}} onReadAloudChange={() => {}} reading readTime="0:07" />
    </div>
}`,...I.parameters?.docs?.source},description:{story:`Figma "Bar states": rated up, and reading aloud with a wave and Pause. Copy turns into a check for 2 s.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
          <AnswerCard answer={ANSWERS[1]}>
            <MessageActions copyText={ANSWERS[1]} onRegenerate={() => {}} version={2} versions={3} onReadAloudChange={() => {}} />
          </AnswerCard>
          <MessageActions copyText={ANSWERS[0]} onRegenerate={() => {}} defaultRating="up" onReadAloudChange={() => {}} reading readTime="0:07" />
        </div>)}
    </div>
}`,...L.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...L.parameters?.docs?.description}}}})))()}init_MessageActions_stories();export{I as BarStates,N as InAMessage,L as Themes,F as ThumbsDown,P as Versions,R as __namedExportsOrder,k as default};