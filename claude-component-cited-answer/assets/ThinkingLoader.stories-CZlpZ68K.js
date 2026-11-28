import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-Q5LMigFZ.js";import{Ft as r,Ot as i,rn as a}from"./react-CiyfYIWI.js";import{n as o,t as s}from"./Button-DFYhoY5Q.js";import{n as c,t as l}from"./Spinner-Bf1Sg8gH.js";import{r as u,t as d}from"./Bubble-Crv_yJJ6.js";function ThinkingLoader({status:e=`thinking`,children:t,elapsed:n,onStop:r,labels:o={},className:c,...u}){let d={slow:`Taking longer than usual`,stop:`Stop`,...o},p=e===`thinking`||e===`slow`;return(0,f.jsxs)(`div`,{...u,className:[`ds-thinking`,`ds-thinking--${e}`,c].filter(Boolean).join(` `),children:[p?(0,f.jsx)(l,{size:`sm`,decorative:!0}):e===`done`?(0,f.jsx)(a,{"aria-hidden":!0}):(0,f.jsx)(i,{"aria-hidden":!0}),(0,f.jsx)(`span`,{className:`ds-thinking__label`,role:`status`,children:t??(e===`slow`?d.slow:null)}),e===`slow`&&n!==void 0&&(0,f.jsxs)(`span`,{className:`ds-thinking__time`,children:[`· `,n]}),e===`slow`&&r&&(0,f.jsx)(s,{variant:`secondary`,size:`xs`,onClick:r,children:d.stop})]})}var f;function init_ThinkingLoader(){return(init_ThinkingLoader=e((()=>{r(),o(),c(),f=t(),ThinkingLoader.__docgenInfo={description:`The small pill an AI reply shows before its first word: a spinner and what it is doing, then how long it thought.`,methods:[],displayName:`ThinkingLoader`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:``},status:{required:!1,tsType:{name:`union`,raw:`'thinking' | 'slow' | 'done' | 'stopped'`,elements:[{name:`literal`,value:`'thinking'`},{name:`literal`,value:`'slow'`},{name:`literal`,value:`'done'`},{name:`literal`,value:`'stopped'`}]},description:"Defaults to `thinking`.",defaultValue:{value:`'thinking'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:'What it is doing or did: "Reading 4 files…", "Thought for 10 s", "Stopped after 52 s". Read out when it changes.\nDefaults to "Taking longer than usual" when `slow`.'},elapsed:{required:!1,tsType:{name:`ReactNode`},description:'How long it has run, after the words when `slow`: "0:48".'},onStop:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Stop, shown when `slow`."},labels:{required:!1,tsType:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{ slow: string; stop: string }`,signature:{properties:[{key:`slow`,value:{name:`string`,required:!0}},{key:`stop`,value:{name:`string`,required:!0}}]}}],raw:`Partial<{ slow: string; stop: string }>`},description:`Texts, for other languages.`,defaultValue:{value:`{}`,computed:!1}}},composes:[`HTMLAttributes`]}})))()}var p,m,h,g,_,v,y,b,x,S;function init_ThinkingLoader_stories(){return(init_ThinkingLoader_stories=e((()=>{p=n(),u(),init_ThinkingLoader(),m=t(),h={title:`Patterns/Thinking Loader`,parameters:{docs:{description:{component:'The Sort UI 2.0 pattern **Thinking Loader** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6126-2130)): the small pill an AI reply shows before its first word. A spinner and a label that rolls through what it is doing (`children`, read out as it changes), then a check with how long it thought (`status="done"`). When it takes long it says so, with the time and Stop (`status="slow"`, `elapsed`, `onStop`); stopped, a clock (`status="stopped"`).\n\n**When to use:** filling the short wait before an AI reply\'s first word, saying what it is doing and how long it thought.\n**When not to use:** people need to follow the steps and sources (use Thinking State), or the reply starts streaming at once: no loader at all.'}}}},g={display:`grid`,gap:10,justifyItems:`start`},_=[`Reading 4 files…`,`Searching the docs…`,`Writing the answer…`],v={render:function Render(){let[e,t]=(0,p.useState)(0);(0,p.useEffect)(()=>{if(e>_.length-1)return;let n=setTimeout(()=>t(e=>e+1),1500);return()=>clearTimeout(n)},[e]);let n=e>=_.length;return(0,m.jsxs)(`div`,{style:{...g,width:`min(420px, calc(100vw - 32px))`},children:[(0,m.jsx)(d,{variant:`muted`,align:`end`,style:{justifySelf:`end`},children:`Which CRM fits a 10-person sales team best?`}),(0,m.jsx)(ThinkingLoader,{status:n?`done`:`thinking`,children:n?`Thought for 5 s`:_[e]})]})}},y={render:()=>(0,m.jsx)(`div`,{style:g,children:_.map(e=>(0,m.jsx)(ThinkingLoader,{children:e},e))})},b={render:function Render(){let[e,t]=(0,p.useState)(`slow`);return(0,m.jsxs)(`div`,{style:g,children:[(0,m.jsx)(ThinkingLoader,{status:`done`,children:`Thought for 10 s`}),(0,m.jsx)(ThinkingLoader,{status:e,elapsed:`0:48`,onStop:()=>t(`stopped`),children:e===`stopped`?`Stopped after 48 s`:void 0}),(0,m.jsx)(ThinkingLoader,{status:`stopped`,children:`Stopped after 52 s`})]})}},x={parameters:{layout:`fullscreen`},render:()=>(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,m.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{...g,background:`var(--ds-background)`,padding:24},children:[(0,m.jsx)(ThinkingLoader,{children:`Reading 4 files…`}),(0,m.jsx)(ThinkingLoader,{status:`done`,children:`Thought for 10 s`}),(0,m.jsx)(ThinkingLoader,{status:`slow`,elapsed:`0:48`,onStop:()=>{}}),(0,m.jsx)(ThinkingLoader,{status:`stopped`,children:`Stopped after 52 s`})]},e))})},S=[`InChat`,`Phases`,`Ends`,`Themes`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [step, setStep] = useState(0);
    useEffect(() => {
      if (step > PHASES.length - 1) return;
      const timer = setTimeout(() => setStep(s => s + 1), 1500);
      return () => clearTimeout(timer);
    }, [step]);
    const done = step >= PHASES.length;
    return <div style={{
      ...column,
      width: 'min(420px, calc(100vw - 32px))'
    }}>
        <Bubble variant="muted" align="end" style={{
        justifySelf: 'end'
      }}>
          Which CRM fits a 10-person sales team best?
        </Bubble>
        <ThinkingLoader status={done ? 'done' : 'thinking'}>{done ? 'Thought for 5 s' : PHASES[step]}</ThinkingLoader>
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`Figma "In chat": under the question, where the answer will start. The label rolls through the phases, then it is done.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      {PHASES.map(phase => <ThinkingLoader key={phase}>{phase}</ThinkingLoader>)}
    </div>
}`,...y.parameters?.docs?.source},description:{story:`Figma "Phases": the label rolls through what it does.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [status, setStatus] = useState<ThinkingLoaderStatus>('slow');
    return <div style={column}>
        <ThinkingLoader status="done">Thought for 10 s</ThinkingLoader>
        <ThinkingLoader status={status} elapsed="0:48" onStop={() => setStatus('stopped')}>
          {status === 'stopped' ? 'Stopped after 48 s' : undefined}
        </ThinkingLoader>
        <ThinkingLoader status="stopped">Stopped after 52 s</ThinkingLoader>
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:`Figma "Done, taking long with Stop, stopped". Stop ends it.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      ...column,
      background: 'var(--ds-background)',
      padding: 24
    }}>
          <ThinkingLoader>Reading 4 files…</ThinkingLoader>
          <ThinkingLoader status="done">Thought for 10 s</ThinkingLoader>
          <ThinkingLoader status="slow" elapsed="0:48" onStop={() => {}} />
          <ThinkingLoader status="stopped">Stopped after 52 s</ThinkingLoader>
        </div>)}
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...x.parameters?.docs?.description}}}})))()}init_ThinkingLoader_stories();export{b as Ends,v as InChat,y as Phases,x as Themes,S as __namedExportsOrder,h as default};