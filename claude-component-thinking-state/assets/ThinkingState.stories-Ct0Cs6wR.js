import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-Bz_wQz1d.js";import{Gt as r,J as i,Qt as a,Yt as o,an as s,f as c,ht as l,jt as u,l as d,mt as f,ot as p,xt as m}from"./react-qrHsYpV_.js";import{n as h,t as g}from"./Spinner-D3n331FT.js";function ThinkingState({status:e=`working`,title:t,summary:n,open:r,defaultOpen:i=!1,onOpenChange:s,children:c,labels:l={},className:u,...d}){let f=(0,_.useId)(),[p,h]=(0,_.useState)(i),g=e===`done`,y=g?r??p:!0,toggle=()=>{r===void 0&&h(!y),s?.(!y)};return(0,v.jsxs)(`div`,{...d,className:[`ds-thinking-state`,g&&`ds-thinking-state--done`,g&&y&&`ds-thinking-state--open`,u].filter(Boolean).join(` `),children:[g&&(0,v.jsxs)(`button`,{type:`button`,className:`ds-thinking-state__head`,"aria-expanded":y,"aria-controls":`${f}-steps`,onClick:toggle,children:[(0,v.jsx)(a,{"aria-hidden":!0}),(0,v.jsx)(`span`,{className:`ds-thinking-state__title`,children:t}),n!==void 0&&(0,v.jsxs)(`span`,{className:`ds-thinking-state__meta`,children:[`· `,n]}),y?(0,v.jsx)(m,{"aria-hidden":!0}):(0,v.jsx)(o,{"aria-hidden":!0})]}),(0,v.jsx)(`ol`,{className:`ds-thinking-state__steps`,id:`${f}-steps`,"aria-label":l.steps??`Steps`,"aria-live":g?void 0:`polite`,hidden:!y,children:c})]})}function ThinkingStep({status:e=`done`,icon:t,label:n,detail:r,time:i,children:a,className:o,...s}){return(0,v.jsxs)(`li`,{...s,className:[`ds-thinking-step`,e===`running`&&`ds-thinking-step--running`,o].filter(Boolean).join(` `),children:[(0,v.jsxs)(`div`,{className:`ds-thinking-step__line`,children:[e===`running`?(0,v.jsx)(g,{decorative:!0}):t,(0,v.jsx)(`span`,{className:`ds-thinking-step__label`,children:n}),r!==void 0&&(0,v.jsx)(`span`,{className:`ds-thinking-step__detail`,children:r}),i!==void 0&&(0,v.jsx)(`span`,{className:`ds-thinking-step__time`,children:i})]}),a]})}function ThinkingSources({sources:e,more:t=0,labels:n={},className:r,...i}){return(0,v.jsxs)(`ul`,{...i,"aria-label":n.sources??`Sources`,className:[`ds-thinking-state__sources`,r].filter(Boolean).join(` `),children:[e.map((e,t)=>(0,v.jsx)(`li`,{children:e.href?(0,v.jsxs)(`a`,{className:`ds-thinking-state__source`,href:e.href,children:[e.icon,e.label]}):(0,v.jsxs)(`span`,{className:`ds-thinking-state__source`,children:[e.icon,e.label]})},t)),t>0&&(0,v.jsx)(`li`,{children:(0,v.jsx)(`span`,{className:`ds-thinking-state__source`,children:n.more?n.more(t):`+${t} more`})})]})}function ThinkingNote({children:e,className:t,...n}){return(0,v.jsxs)(`p`,{...n,className:[`ds-thinking-state__note`,t].filter(Boolean).join(` `),children:[(0,v.jsx)(d,{"aria-hidden":!0}),e]})}var _,v;function init_ThinkingState(){return(init_ThinkingState=e((()=>{u(),_=n(),h(),v=t(),ThinkingState.__docgenInfo={description:`The AI at work, step by step, where the answer will appear; when the answer starts it folds into one line.`,methods:[],displayName:`ThinkingState`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:``},status:{required:!1,tsType:{name:`union`,raw:`'working' | 'done'`,elements:[{name:`literal`,value:`'working'`},{name:`literal`,value:`'done'`}]},description:"`working` shows the steps as they happen; `done` folds them into one line that opens back.",defaultValue:{value:`'working'`,computed:!1}},title:{required:!1,tsType:{name:`ReactNode`},description:`Done, the line's words: "Thought for 14 s".`},summary:{required:!1,tsType:{name:`ReactNode`},description:`Done, after the words: "6 sources · 4 steps".`},open:{required:!1,tsType:{name:`boolean`},description:`Done, open state (controlled); it starts folded.`},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:"The `ThinkingStep`s, in order."},labels:{required:!1,tsType:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{ steps: string }`,signature:{properties:[{key:`steps`,value:{name:`string`,required:!0}}]}}],raw:`Partial<{ steps: string }>`},description:`Texts, for other languages.`,defaultValue:{value:`{}`,computed:!1}}},composes:[`Omit`]},ThinkingStep.__docgenInfo={description:`One step: its icon (a spinner while it runs), what it did and how long, with what it found under it.`,methods:[],displayName:`ThinkingStep`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLLIElement`}],raw:`Ref<HTMLLIElement>`},description:``},status:{required:!1,tsType:{name:`union`,raw:`'done' | 'running'`,elements:[{name:`literal`,value:`'done'`},{name:`literal`,value:`'running'`}]},description:"`running` shows the spinner and the words in the text colour.",defaultValue:{value:`'done'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:`The step's 16 px icon (done steps).`},label:{required:!0,tsType:{name:`ReactNode`},description:`What it does or did: "Searching", "Read the refund policy".`},detail:{required:!1,tsType:{name:`ReactNode`},description:`After the words: "3 matches".`},time:{required:!1,tsType:{name:`ReactNode`},description:`How long it took, or the live time while running: "2 s", "0:04".`},children:{required:!1,tsType:{name:`ReactNode`},description:"Under the line: `ThinkingSources`, `ThinkingNote`."}},composes:[`Omit`]},ThinkingSources.__docgenInfo={description:`The sources a step searched, as chips that wrap.`,methods:[],displayName:`ThinkingSources`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLUListElement`}],raw:`Ref<HTMLUListElement>`},description:``},sources:{required:!0,tsType:{name:`Array`,elements:[{name:`ThinkingSource`}],raw:`ThinkingSource[]`},description:``},more:{required:!1,tsType:{name:`number`},description:`How many more it searched: "+3 more".`,defaultValue:{value:`0`,computed:!1}},labels:{required:!1,tsType:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{ sources: string; more: (count: number) => string }`,signature:{properties:[{key:`sources`,value:{name:`string`,required:!0}},{key:`more`,value:{name:`signature`,type:`function`,raw:`(count: number) => string`,signature:{arguments:[{type:{name:`number`},name:`count`}],return:{name:`string`}},required:!0}}]}}],raw:`Partial<{ sources: string; more: (count: number) => string }>`},description:`Texts, for other languages.`,defaultValue:{value:`{}`,computed:!1}}},composes:[`HTMLAttributes`]},ThinkingNote.__docgenInfo={description:`Something that went wrong on the way and how it went on, in amber: "Couldn’t open GitHub – went on without it".`,methods:[],displayName:`ThinkingNote`}})))()}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function init_ThinkingState_stories(){return(init_ThinkingState_stories=e((()=>{u(),y=n(),init_ThinkingState(),b=t(),x={title:`Patterns/Thinking State`,parameters:{docs:{description:{component:'The Sort UI 2.0 pattern **Thinking State** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6127-2219)): the AI at work, step by step, right where the answer will appear. Each `ThinkingStep` with its icon and a live `time` (a spinner while it runs), the sources it searched as chips with their logos (`ThinkingSources`), a source it could not reach in amber (`ThinkingNote`). When the answer starts it folds (`status="done"`) into "Thought for 14 s · 6 sources", which opens back into the steps.\n\n**When to use:** showing an AI\'s research or reasoning steps live where the answer will appear, with the sources it reads.\n**When not to use:** the wait is a few seconds with nothing worth following (use Thinking Loader), or the steps are actions in your systems (use Agent Trail).'}}}},S={width:`min(480px, calc(100vw - 32px))`},C=[{label:`Notion – Refund policy`,icon:(0,b.jsx)(f,{"aria-hidden":!0}),href:`#notion`},{label:`Slack – #support`,icon:(0,b.jsx)(i,{"aria-hidden":!0}),href:`#slack`},{label:`Drive – orders-2026.csv`,icon:(0,b.jsx)(r,{"aria-hidden":!0}),href:`#drive`}],w=(0,b.jsx)(ThinkingStep,{icon:(0,b.jsx)(c,{"aria-hidden":!0}),label:`Thought about the question`,time:`2 s`}),T=(0,b.jsx)(ThinkingStep,{icon:(0,b.jsx)(l,{"aria-hidden":!0}),label:`Searched 6 sources`,time:`4 s`,children:(0,b.jsx)(ThinkingSources,{sources:C,more:3})}),E=(0,b.jsx)(ThinkingStep,{icon:(0,b.jsx)(s,{"aria-hidden":!0}),label:`Read the refund policy`,detail:`3 matches`,time:`3 s`}),D={render:()=>(0,b.jsx)(`div`,{style:S,children:(0,b.jsxs)(ThinkingState,{children:[w,(0,b.jsx)(ThinkingStep,{status:`running`,label:`Searching`,time:`0:04`,children:(0,b.jsx)(ThinkingSources,{sources:C,more:3})})]})})},O={render:()=>(0,b.jsx)(`div`,{style:S,children:(0,b.jsxs)(ThinkingState,{children:[w,(0,b.jsxs)(ThinkingStep,{icon:(0,b.jsx)(l,{"aria-hidden":!0}),label:`Searched 6 sources`,time:`4 s`,children:[(0,b.jsx)(ThinkingSources,{sources:C,more:3}),(0,b.jsx)(ThinkingNote,{children:`Couldn’t open GitHub – went on without it`})]}),E,(0,b.jsx)(ThinkingStep,{status:`running`,label:`Writing the answer`,time:`0:01`})]})})},k={render:()=>(0,b.jsx)(`div`,{style:S,children:(0,b.jsxs)(ThinkingState,{status:`done`,title:`Thought for 14 s`,summary:`6 sources · 4 steps`,children:[w,T,E,(0,b.jsx)(ThinkingStep,{icon:(0,b.jsx)(p,{"aria-hidden":!0}),label:`Wrote the answer`,time:`5 s`})]})})},A={render:()=>(0,b.jsx)(`div`,{style:S,children:(0,b.jsxs)(ThinkingState,{status:`done`,defaultOpen:!0,title:`Thought for 14 s`,summary:`6 sources · 4 steps`,children:[w,T,E,(0,b.jsx)(ThinkingStep,{icon:(0,b.jsx)(p,{"aria-hidden":!0}),label:`Wrote the answer`,time:`5 s`})]})})},j={render:function Render(){let[e,t]=(0,y.useState)(0),[n,r]=(0,y.useState)(0);(0,y.useEffect)(()=>{if(e>=3)return;let n=setInterval(()=>r(e=>e+1),1e3),i=setTimeout(()=>{t(e=>e+1),r(0)},2500);return()=>{clearInterval(n),clearTimeout(i)}},[e]);let i=`0:${String(n).padStart(2,`0`)}`;return(0,b.jsx)(`div`,{style:S,children:(0,b.jsxs)(ThinkingState,{status:e>=3?`done`:`working`,title:`Thought for 8 s`,summary:`6 sources · 3 steps`,children:[e===0?(0,b.jsx)(ThinkingStep,{status:`running`,label:`Thinking about the question`,time:i}):w,e===1&&(0,b.jsx)(ThinkingStep,{status:`running`,label:`Searching`,time:i,children:(0,b.jsx)(ThinkingSources,{sources:C.slice(0,2)})}),e>1&&T,e===2&&(0,b.jsx)(ThinkingStep,{status:`running`,label:`Reading the refund policy`,time:i}),e>2&&E]})})}},M={parameters:{layout:`fullscreen`},render:()=>(0,b.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(340px, 1fr))`},children:[`light`,`dark`].map(e=>(0,b.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:24,alignContent:`start`},children:[(0,b.jsxs)(ThinkingState,{children:[w,(0,b.jsxs)(ThinkingStep,{icon:(0,b.jsx)(l,{"aria-hidden":!0}),label:`Searched 6 sources`,time:`4 s`,children:[(0,b.jsx)(ThinkingSources,{sources:C,more:3}),(0,b.jsx)(ThinkingNote,{children:`Couldn’t open GitHub – went on without it`})]}),(0,b.jsx)(ThinkingStep,{status:`running`,label:`Writing the answer`,time:`0:01`})]}),(0,b.jsx)(ThinkingState,{status:`done`,title:`Thought for 14 s`,summary:`6 sources · 4 steps`,children:w})]},e))})},N=[`Searching`,`ReadingAndWriting`,`Done`,`Opened`,`Live`,`Themes`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={WIDTH}>
      <ThinkingState>
        {thought}
        <ThinkingStep status="running" label="Searching" time="0:04">
          <ThinkingSources sources={SOURCES} more={3} />
        </ThinkingStep>
      </ThinkingState>
    </div>
}`,...D.parameters?.docs?.source},description:{story:`Figma "Searching": the sources appear as it finds them.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={WIDTH}>
      <ThinkingState>
        {thought}
        <ThinkingStep icon={<RiGlobalLine aria-hidden />} label="Searched 6 sources" time="4 s">
          <ThinkingSources sources={SOURCES} more={3} />
          <ThinkingNote>Couldn’t open GitHub – went on without it</ThinkingNote>
        </ThinkingStep>
        {read}
        <ThinkingStep status="running" label="Writing the answer" time="0:01" />
      </ThinkingState>
    </div>
}`,...O.parameters?.docs?.source},description:{story:`Figma "Reading and writing": a source it could not reach is said in amber.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={WIDTH}>
      <ThinkingState status="done" title="Thought for 14 s" summary="6 sources · 4 steps">
        {thought}
        {searched}
        {read}
        <ThinkingStep icon={<RiPencilLine aria-hidden />} label="Wrote the answer" time="5 s" />
      </ThinkingState>
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Figma "Done": folds to one line when the answer starts; a click opens it again, every step with its time.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={WIDTH}>
      <ThinkingState status="done" defaultOpen title="Thought for 14 s" summary="6 sources · 4 steps">
        {thought}
        {searched}
        {read}
        <ThinkingStep icon={<RiPencilLine aria-hidden />} label="Wrote the answer" time="5 s" />
      </ThinkingState>
    </div>
}`,...A.parameters?.docs?.source},description:{story:`Figma "Opened again": every step with its time.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [step, setStep] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
      if (step >= 3) return;
      const tick = setInterval(() => setSeconds(s => s + 1), 1000);
      const next = setTimeout(() => {
        setStep(s => s + 1);
        setSeconds(0);
      }, 2500);
      return () => {
        clearInterval(tick);
        clearTimeout(next);
      };
    }, [step]);
    const clock = \`0:\${String(seconds).padStart(2, '0')}\`;
    return <div style={WIDTH}>
        <ThinkingState status={step >= 3 ? 'done' : 'working'} title="Thought for 8 s" summary="6 sources · 3 steps">
          {step === 0 ? <ThinkingStep status="running" label="Thinking about the question" time={clock} /> : thought}
          {step === 1 && <ThinkingStep status="running" label="Searching" time={clock}>
              <ThinkingSources sources={SOURCES.slice(0, 2)} />
            </ThinkingStep>}
          {step > 1 && searched}
          {step === 2 && <ThinkingStep status="running" label="Reading the refund policy" time={clock} />}
          {step > 2 && read}
        </ThinkingState>
      </div>;
  }
}`,...j.parameters?.docs?.source},description:{story:`Live: the steps arrive one by one, the running one with a spinner and a ticking time; then it folds.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
      gap: 24,
      alignContent: 'start'
    }}>
          <ThinkingState>
            {thought}
            <ThinkingStep icon={<RiGlobalLine aria-hidden />} label="Searched 6 sources" time="4 s">
              <ThinkingSources sources={SOURCES} more={3} />
              <ThinkingNote>Couldn’t open GitHub – went on without it</ThinkingNote>
            </ThinkingStep>
            <ThinkingStep status="running" label="Writing the answer" time="0:01" />
          </ThinkingState>
          <ThinkingState status="done" title="Thought for 14 s" summary="6 sources · 4 steps">
            {thought}
          </ThinkingState>
        </div>)}
    </div>
}`,...M.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...M.parameters?.docs?.description}}}})))()}init_ThinkingState_stories();export{k as Done,j as Live,A as Opened,O as ReadingAndWriting,D as Searching,M as Themes,N as __namedExportsOrder,x as default};