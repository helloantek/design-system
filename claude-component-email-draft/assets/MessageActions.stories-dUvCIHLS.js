import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-4j9267yI.js";import{Dn as r,It as i}from"./react-DWOn_GiV.js";import{n as a,t as o}from"./MessageActions-Do37d5Y7.js";import{r as s,t as c}from"./Bubble-CcTJcKt-.js";function AnswerCard({answer:e,children:t}){return(0,u.jsxs)(`div`,{style:m,children:[(0,u.jsxs)(`div`,{style:{display:`grid`,gap:10,padding:`12px 16px 10px`},children:[(0,u.jsx)(c,{variant:`muted`,align:`end`,style:{justifySelf:`end`},children:f}),(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,color:`var(--ds-muted-foreground)`,fontSize:`var(--ds-text-xs)`},children:[(0,u.jsx)(r,{size:12,"aria-hidden":!0}),` Sonnet 4.5`]}),(0,u.jsx)(`p`,{style:{margin:0},children:e})]}),(0,u.jsx)(`div`,{style:{padding:`6px 16px`,borderTop:`1px solid var(--ds-border)`},children:t})]})}var l,u,d,f,p,m,h,g,_,v,y,b;function init_MessageActions_stories(){return(init_MessageActions_stories=e((()=>{i(),l=n(),s(),a(),u=t(),d={title:`Patterns/Message Actions`,parameters:{docs:{description:{component:"The Sort UI 2.0 pattern **Message Actions** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6126-2162)): the quiet bar under an AI message. Copy (`copyText`, `onCopy`; the icon is a green check for 2 s), Regenerate (`onRegenerate`) with ‹ 2 / 3 › between the versions (`version`, `versions`, `onVersionChange`), thumbs up and down (`rating`; down asks what was wrong in a Popover: `reasons`, `onReason`), Read aloud (`onReadAloudChange`; while `reading`, a wave, `readTime` and Pause). Ghost Buttons and Toggles, size sm, in the muted colour; a pressed one is in the text colour.\n\n**When to use:** the quiet actions under every finished AI message: copy, regenerate, rate, read aloud.\n**When not to use:** the message is still streaming, or it is not from the AI. Don't add actions that change the conversation's data here (use a menu)."}}}},f=`Summarize the 2.4 release notes in one sentence.`,p=[`Shared workspaces arrive in 2.4, sync is twice as fast, and exports on Windows work again.`,`2.4 brings shared workspaces, sync that is twice as fast, and working exports on Windows.`,`In 2.4: shared workspaces, twice-as-fast sync, and fixed exports on Windows.`],m={width:`min(420px, calc(100vw - 32px))`,borderRadius:`var(--ds-radius-xl)`,background:`var(--ds-card)`,boxShadow:`0 0 0 1px var(--ds-border), var(--ds-surface-card)`,color:`var(--ds-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:`var(--ds-text-sm)`,lineHeight:`var(--ds-text-sm--line-height)`},h={render:function Render(){let[e,t]=(0,l.useState)(1),[n,r]=(0,l.useState)(1),[i,a]=(0,l.useState)(!1),[s,c]=(0,l.useState)(0);(0,l.useEffect)(()=>{if(!i)return;let e=setInterval(()=>c(e=>e+1),1e3);return()=>clearInterval(e)},[i]);let d=p[(n-1)%p.length];return(0,u.jsx)(AnswerCard,{answer:d,children:(0,u.jsx)(o,{copyText:d,onRegenerate:()=>{t(e=>e+1),r(e+1)},version:n,versions:e,onVersionChange:r,onReadAloudChange:a,reading:i,readTime:`0:${String(s).padStart(2,`0`)}`})})}},g={render:function Render(){let[e,t]=(0,l.useState)(2);return(0,u.jsx)(AnswerCard,{answer:p[e-1],children:(0,u.jsx)(o,{copyText:p[e-1],onRegenerate:()=>{},version:e,versions:3,onVersionChange:t,onReadAloudChange:()=>{}})})}},_={render:function Render(){let[e,t]=(0,l.useState)(null),[n,r]=(0,l.useState)();return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,paddingBottom:140},children:[(0,u.jsx)(AnswerCard,{answer:p[0],children:(0,u.jsx)(o,{copyText:p[0],onRegenerate:()=>{},rating:e,onRatingChange:e=>{t(e),r(void 0)},onReason:r,onReadAloudChange:()=>{}})}),(0,u.jsxs)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:`var(--ds-text-xs)`},children:[`Rating: `,e??`none`,n?` · ${n}`:``]})]})}},v={render:()=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,u.jsx)(o,{copyText:p[0],onRegenerate:()=>{},defaultRating:`up`,onReadAloudChange:()=>{}}),(0,u.jsx)(o,{copyText:p[0],onRegenerate:()=>{},onReadAloudChange:()=>{},reading:!0,readTime:`0:07`})]})},y={parameters:{layout:`fullscreen`},render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(340px, 1fr))`},children:[`light`,`dark`].map(e=>(0,u.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,alignContent:`start`},children:[(0,u.jsx)(AnswerCard,{answer:p[1],children:(0,u.jsx)(o,{copyText:p[1],onRegenerate:()=>{},version:2,versions:3,onReadAloudChange:()=>{}})}),(0,u.jsx)(o,{copyText:p[0],onRegenerate:()=>{},defaultRating:`up`,onReadAloudChange:()=>{},reading:!0,readTime:`0:07`})]},e))})},b=[`InAMessage`,`Versions`,`ThumbsDown`,`BarStates`,`Themes`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Figma "In a message": under the answer, at rest. Every action works: Regenerate adds a version, Read aloud reads.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [version, setVersion] = useState(2);
    return <AnswerCard answer={ANSWERS[version - 1]}>
        <MessageActions copyText={ANSWERS[version - 1]} onRegenerate={() => {}} version={version} versions={3} onVersionChange={setVersion} onReadAloudChange={() => {}} />
      </AnswerCard>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Figma "Regenerated": ‹ 2 / 3 › to switch between the versions.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Figma "Thumbs down": it asks what was wrong. Pressing it again takes the rating back.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>
      <MessageActions copyText={ANSWERS[0]} onRegenerate={() => {}} defaultRating="up" onReadAloudChange={() => {}} />
      <MessageActions copyText={ANSWERS[0]} onRegenerate={() => {}} onReadAloudChange={() => {}} reading readTime="0:07" />
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Figma "Bar states": rated up, and reading aloud with a wave and Pause. Copy turns into a check for 2 s.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...y.parameters?.docs?.description}}}})))()}init_MessageActions_stories();export{v as BarStates,h as InAMessage,y as Themes,_ as ThumbsDown,g as Versions,b as __namedExportsOrder,d as default};