import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-Diau3x_I.js";import{Ct as r,Dt as i,Ft as a,Gt as o,Lt as s,Mt as ee,Nt as c,Tt as l,U as u,X as d,Xt as f,Y as p,ct as m,g as te,lt as h,nt as g,q as ne,s as _,st as v,tn as y}from"./react-DeAKwB_L.js";import{r as b,t as x}from"./FileIcon-D3QmwHWX.js";import{n as S,t as C}from"./Button-hgGEFKG0.js";import{a as w,i as T,n as E,r as D,t as O}from"./AITrace-CYtZmKss.js";function useTimeline(e,t){let[n,r]=(0,k.useState)(0),[i,a]=(0,k.useState)(0);return(0,k.useEffect)(()=>{r(0);let n=window.setInterval(()=>r(t=>t>=e?t:t+1),t);return()=>window.clearInterval(n)},[i,e,t]),{step:n,replay:()=>a(e=>e+1)}}var k,A,j,M,N,P,F,I,L,R,z,B,V,replayButton,H,U,W,G,K,q,J,Y,X,Z,Q,$;function init_AITrace_stories(){return(init_AITrace_stories=e((()=>{k=n(),r(),S(),b(),w(),A=t(),j={title:`Components/AI Trace`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Trace Line**, **Trace Content** and **Trace** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=3030-2)): the steps an AI agent took, one line each. `TraceLine` is a step (`status` `done` · `running` · `error` · `pending`, an `icon`, a `description` and a `trailingIcon`; `href` makes it a link, `onClick` a button). `TraceCollapsible` is Type=Trigger: a button that opens its **Trace Content** (`open`, `defaultOpen`, `onOpenChange`). `Trace` stacks them 8 px apart; `TraceCode` shows command output. Running, failed and pending steps say so to assistive technology (`statusLabel`). The icons here are Remix icons; Figma draws lucide ones."}}}},M={width:`min(480px, calc(100vw - 32px))`},N={margin:0,color:`var(--ds-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`},P={args:{title:`Searched for minimumReleaseAge`,status:`done`,type:`line`,description:`8 results`,icon:!0},argTypes:{title:{name:`Title`},status:{name:`Status`,control:`inline-radio`,options:[`done`,`running`,`error`,`pending`]},type:{name:`Type`,control:`inline-radio`,options:[`line`,`trigger`,`link`]},description:{name:`Description text`,description:`Empty hides it`},icon:{name:`Icon`}},render:({title:e,status:t,type:n,description:r,icon:i})=>{let a={status:t,description:r||void 0,icon:i?(0,A.jsx)(s,{}):void 0};return(0,A.jsx)(`div`,{style:M,children:n===`trigger`?(0,A.jsx)(D,{...a,title:e,defaultOpen:!0,children:(0,A.jsx)(`p`,{children:`Found 2 matches in packages/web/package.json and pnpm-workspace.yaml.`})}):(0,A.jsx)(T,{...a,href:n===`link`?`https://pnpm.io/settings`:void 0,target:`_blank`,trailingIcon:n===`link`?(0,A.jsx)(c,{}):void 0,children:e})})}},F={render:()=>(0,A.jsxs)(O,{style:M,children:[(0,A.jsx)(T,{icon:(0,A.jsx)(i,{}),children:`Thought for 8s`}),(0,A.jsx)(T,{icon:(0,A.jsx)(h,{}),description:`8 results`,children:`Searched the web`}),(0,A.jsx)(T,{icon:(0,A.jsx)(d,{}),children:`Read 3 pages`}),(0,A.jsx)(D,{icon:(0,A.jsx)(l,{}),title:`Ran pnpm test`,description:`14s`,defaultOpen:!0,children:(0,A.jsx)(E,{children:`Packages: +412
Progress: resolved 412, reused 398, downloaded 14
Done in 8.7s`})})]})},I={render:()=>(0,A.jsx)(T,{icon:(0,A.jsx)(p,{}),children:`Created branch fix/frozen-lockfile`})},L={render:()=>(0,A.jsxs)(O,{style:M,children:[(0,A.jsx)(T,{icon:(0,A.jsx)(l,{}),children:`Ran pnpm install`}),(0,A.jsx)(T,{status:`error`,icon:(0,A.jsx)(u,{}),children:`Failed to start the dev server`}),(0,A.jsx)(T,{status:`running`,icon:(0,A.jsx)(l,{}),children:`Running the test suite`}),(0,A.jsx)(T,{status:`pending`,icon:(0,A.jsx)(m,{}),children:`Deploy a preview`})]})},R={render:()=>(0,A.jsxs)(O,{style:M,children:[(0,A.jsx)(T,{icon:(0,A.jsx)(g,{}),description:`+48 −12`,children:`Edited package.json`}),(0,A.jsx)(T,{icon:(0,A.jsx)(l,{}),description:`14s`,children:`Ran pnpm test`}),(0,A.jsx)(T,{icon:(0,A.jsx)(h,{}),description:`8 results`,children:`Searched the web`})]})},z={render:()=>(0,A.jsx)(`div`,{style:M,children:(0,A.jsx)(D,{icon:(0,A.jsx)(l,{}),title:`Ran node --version`,defaultOpen:!0,children:(0,A.jsx)(E,{children:`v22.11.0`})})})},B={render:()=>(0,A.jsx)(T,{icon:(0,A.jsx)(v,{}),trailingIcon:(0,A.jsx)(c,{}),href:`https://base-ui.com/react/overview/quick-start`,target:`_blank`,children:`Read the Base UI install guide`})},V={render:()=>(0,A.jsxs)(O,{style:M,children:[(0,A.jsx)(T,{icon:(0,A.jsx)(s,{}),children:`Searched for pnpm minimumReleaseAge`}),(0,A.jsx)(D,{icon:(0,A.jsx)(h,{}),title:`Read 3 sources`,defaultOpen:!0,children:[[`Settings (.npmrc)`,`pnpm.io`,`https://pnpm.io/settings`],[`Previous releases`,`nodejs.org`,`https://nodejs.org/en/about/previous-releases`],[`Releases`,`github.com`,`https://github.com/pnpm/pnpm/releases`]].map(([e,t,n])=>(0,A.jsx)(T,{description:t,trailingIcon:(0,A.jsx)(c,{}),href:n,target:`_blank`,children:e},n))})]})},replayButton=(e,t=`Replay`,n)=>(0,A.jsx)(C,{variant:`outline`,size:`sm`,leadingIcon:n,onClick:e,style:{justifySelf:`start`},children:t}),H=`The bug only shows on a fresh install, so the lockfile is the first suspect. The CI log says the frozen lockfile no longer matches package.json. Someone bumped a dependency without running install, so the fix is to regenerate the lockfile and commit it with the bump.`,U={render:function Render(){let e=H.split(` `),{step:t,replay:n}=useTimeline(e.length,60),r=t>=e.length;return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:24,...M},children:[(0,A.jsx)(D,{icon:(0,A.jsx)(i,{}),status:r?`done`:`running`,title:r?`Thought for 6s`:`Thinking`,defaultOpen:!0,children:(0,A.jsx)(`p`,{style:{color:`var(--ds-foreground)`},"aria-live":`off`,children:e.slice(0,t).join(` `)})}),replayButton(n)]})}},W=[{icon:(0,A.jsx)(d,{}),running:`Reading src/cart.ts`,done:`Read src/cart.ts`,description:`214 lines`},{icon:(0,A.jsx)(g,{}),running:`Editing src/cart.ts`,done:`Edited src/cart.ts`,description:`+12 −3`},{icon:(0,A.jsx)(l,{}),running:`Running pnpm test`,done:`Ran pnpm test`,description:`38 passed · 11s`}],G={render:function Render(){let{step:e,replay:t}=useTimeline(W.length*2,700);return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:24,...M},children:[(0,A.jsx)(O,{"aria-busy":e<W.length*2,children:W.slice(0,Math.ceil(e/2)).map((t,n)=>{let r=e>=(n+1)*2;return(0,A.jsx)(T,{icon:t.icon,status:r?`done`:`running`,description:r?t.description:void 0,children:r?t.done:t.running},t.done)})}),replayButton(t)]})}},K=[`Find where the discount is applied`,`Round the total after the discount`,`Add a test for a 15% coupon`,`Run the test suite`],q={render:function Render(){let{step:e,replay:t}=useTimeline(K.length+1,900),n=Math.max(0,Math.min(K.length,e-1));return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:24,...M},children:[(0,A.jsx)(D,{icon:(0,A.jsx)(_,{}),title:`Plan`,description:`${n} of ${K.length} done`,defaultOpen:!0,children:K.map((t,r)=>{let i=r<n?`done`:r===n&&e>0?`running`:`pending`;return(0,A.jsx)(T,{status:i,icon:i===`done`?(0,A.jsx)(ee,{}):(0,A.jsx)(m,{}),children:t},t)})}),replayButton(t)]})}},J={render:function Render(){let{step:e,replay:t}=useTimeline(4,1200),status=t=>t<e?`done`:t===e?`running`:`pending`,n=[[(0,A.jsx)(f,{},`i`),`Planned 5 questions`],[(0,A.jsx)(h,{},`i`),e>1?`Searched the web`:`Searching the web`,`21 sources`],[(0,A.jsx)(v,{},`i`),e>2?`Read sources`:`Reading sources`],[(0,A.jsx)(te,{},`i`),e>3?`Wrote the report`:`Writing the report`]];return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:24,...M},children:[(0,A.jsx)(O,{children:n.map(([e,t,n],r)=>(0,A.jsx)(T,{icon:e,status:status(r),description:n,children:t},r))}),replayButton(t,`Reset`,(0,A.jsx)(o,{}))]})}},Y={render:()=>(0,A.jsxs)(`div`,{style:{display:`grid`,gap:12,...M},children:[(0,A.jsxs)(D,{icon:(0,A.jsx)(l,{}),title:`Analyzed signups.csv`,description:`14s`,defaultOpen:!0,children:[(0,A.jsx)(E,{children:`df = pd.read_csv("signups.csv")
weekly = df.resample("W", on="date").size()
weekly.pct_change().tail(4).round(3)`}),(0,A.jsx)(E,{children:`2026-09-21    0.041
2026-09-28    0.112
2026-10-05   -0.018
2026-10-12    0.236`})]}),(0,A.jsx)(`p`,{style:N,children:`Signups grew 24% last week, the biggest jump this quarter — right after the pricing page went live.`})]})},X={render:()=>(0,A.jsxs)(O,{style:M,children:[(0,A.jsx)(T,{icon:(0,A.jsx)(x,{variant:`pdf`}),description:`18 pages`,children:`Read quarterly-report.pdf`}),(0,A.jsx)(T,{icon:(0,A.jsx)(x,{variant:`spreadsheet`}),description:`2,400 rows`,children:`Read signups.csv`}),(0,A.jsx)(T,{status:`error`,icon:(0,A.jsx)(x,{variant:`image`}),description:`no text found`,children:`Couldn't read whiteboard.png`})]})},Z={render:()=>(0,A.jsx)(`div`,{style:M,children:(0,A.jsxs)(D,{icon:(0,A.jsx)(ne,{}),title:`Ran 2 agents`,defaultOpen:!0,children:[(0,A.jsxs)(D,{title:`Explored the checkout flow`,description:`41s`,defaultOpen:!0,children:[(0,A.jsx)(T,{icon:(0,A.jsx)(y,{}),description:`12 files`,children:`Listed src/checkout`}),(0,A.jsx)(T,{icon:(0,A.jsx)(a,{}),description:`88 lines`,children:`Read src/checkout/total.ts`})]}),(0,A.jsxs)(D,{title:`Looked for rounding bug`,description:`1m 3s`,defaultOpen:!0,children:[(0,A.jsx)(T,{icon:(0,A.jsx)(s,{}),description:`9 matches`,children:`Searched for Math.round`}),(0,A.jsx)(T,{icon:(0,A.jsx)(a,{}),description:`54 lines`,children:`Read src/lib/money.ts`})]})]})})},Q={parameters:{layout:`fullscreen`},render:()=>(0,A.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`},children:[`light`,`dark`].map(e=>(0,A.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{padding:24,background:`var(--ds-background)`},children:(0,A.jsxs)(O,{children:[(0,A.jsx)(T,{icon:(0,A.jsx)(l,{}),description:`14s`,children:`Ran pnpm install`}),(0,A.jsx)(T,{status:`error`,icon:(0,A.jsx)(u,{}),children:`Failed to start the dev server`}),(0,A.jsx)(T,{status:`running`,icon:(0,A.jsx)(l,{}),children:`Running the test suite`}),(0,A.jsx)(T,{status:`pending`,icon:(0,A.jsx)(m,{}),children:`Deploy a preview`}),(0,A.jsx)(D,{icon:(0,A.jsx)(l,{}),title:`Ran node --version`,defaultOpen:!0,children:(0,A.jsx)(E,{children:`v22.11.0`})})]})},e))})},$=[`Playground`,`Demo`,`Line`,`Status`,`Description`,`Collapsible`,`Link`,`WebSearch`,`StreamingReasoning`,`ToolCalls`,`Plan`,`DeepResearch`,`CodeInterpreter`,`Files`,`Subagents`,`Themes`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Searched for minimumReleaseAge',
    status: 'done',
    type: 'line',
    description: '8 results',
    icon: true
  },
  argTypes: {
    title: {
      name: 'Title'
    },
    status: {
      name: 'Status',
      control: 'inline-radio',
      options: ['done', 'running', 'error', 'pending']
    },
    type: {
      name: 'Type',
      control: 'inline-radio',
      options: ['line', 'trigger', 'link']
    },
    description: {
      name: 'Description text',
      description: 'Empty hides it'
    },
    icon: {
      name: 'Icon'
    }
  },
  render: ({
    title,
    status,
    type,
    description,
    icon
  }) => {
    const common = {
      status,
      description: description || undefined,
      icon: icon ? <RiSearchLine /> : undefined
    };
    return <div style={width}>
        {type === 'trigger' ? <TraceCollapsible {...common} title={title} defaultOpen>
            <p>Found 2 matches in packages/web/package.json and pnpm-workspace.yaml.</p>
          </TraceCollapsible> : <TraceLine {...common} href={type === 'link' ? 'https://pnpm.io/settings' : undefined} target="_blank" trailingIcon={type === 'link' ? <RiArrowRightUpLine /> : undefined}>
            {title}
          </TraceLine>}
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Trace style={width}>
      <TraceLine icon={<RiBrainLine />}>Thought for 8s</TraceLine>
      <TraceLine icon={<RiGlobalLine />} description="8 results">
        Searched the web
      </TraceLine>
      <TraceLine icon={<RiFileLine />}>Read 3 pages</TraceLine>
      <TraceCollapsible icon={<RiTerminalLine />} title="Ran pnpm test" description="14s" defaultOpen>
        <TraceCode>{'Packages: +412\\nProgress: resolved 412, reused 398, downloaded 14\\nDone in 8.7s'}</TraceCode>
      </TraceCollapsible>
    </Trace>
}`,...F.parameters?.docs?.source},description:{story:`Figma demo "Demo": three steps and an open command with its output.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <TraceLine icon={<RiGitBranchLine />}>Created branch fix/frozen-lockfile</TraceLine>
}`,...I.parameters?.docs?.source},description:{story:`Figma demo "Line": one step.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Trace style={width}>
      <TraceLine icon={<RiTerminalLine />}>Ran pnpm install</TraceLine>
      <TraceLine status="error" icon={<RiErrorWarningLine />}>
        Failed to start the dev server
      </TraceLine>
      <TraceLine status="running" icon={<RiTerminalLine />}>
        Running the test suite
      </TraceLine>
      <TraceLine status="pending" icon={<RiCheckboxBlankCircleLine />}>
        Deploy a preview
      </TraceLine>
    </Trace>
}`,...L.parameters?.docs?.source},description:{story:`Figma demo "Status": done, failed, running and pending.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Trace style={width}>
      <TraceLine icon={<RiPencilLine />} description="+48 −12">
        Edited package.json
      </TraceLine>
      <TraceLine icon={<RiTerminalLine />} description="14s">
        Ran pnpm test
      </TraceLine>
      <TraceLine icon={<RiGlobalLine />} description="8 results">
        Searched the web
      </TraceLine>
    </Trace>
}`,...R.parameters?.docs?.source},description:{story:`Figma demo "Description": a diff count, a duration, a result count.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={width}>
      <TraceCollapsible icon={<RiTerminalLine />} title="Ran node --version" defaultOpen>
        <TraceCode>v22.11.0</TraceCode>
      </TraceCollapsible>
    </div>
}`,...z.parameters?.docs?.source},description:{story:`Figma demo "Collapsible": a command that opens to show its output.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <TraceLine icon={<RiBookOpenLine />} trailingIcon={<RiArrowRightUpLine />} href="https://base-ui.com/react/overview/quick-start" target="_blank">
      Read the Base UI install guide
    </TraceLine>
}`,...B.parameters?.docs?.source},description:{story:`Figma demo "Link": a step that opens what it read.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Trace style={width}>
      <TraceLine icon={<RiSearchLine />}>Searched for pnpm minimumReleaseAge</TraceLine>
      <TraceCollapsible icon={<RiGlobalLine />} title="Read 3 sources" defaultOpen>
        {[['Settings (.npmrc)', 'pnpm.io', 'https://pnpm.io/settings'], ['Previous releases', 'nodejs.org', 'https://nodejs.org/en/about/previous-releases'], ['Releases', 'github.com', 'https://github.com/pnpm/pnpm/releases']].map(([title, site, href]) => <TraceLine key={href} description={site} trailingIcon={<RiArrowRightUpLine />} href={href} target="_blank">
            {title}
          </TraceLine>)}
      </TraceCollapsible>
    </Trace>
}`,...V.parameters?.docs?.source},description:{story:`Figma demo "Web search": a search, then the sources it read, each a link.`,...V.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const words = REASONING.split(' ');
    const {
      step,
      replay
    } = useTimeline(words.length, 60);
    const done = step >= words.length;
    return <div style={{
      display: 'grid',
      gap: 24,
      ...width
    }}>
        <TraceCollapsible icon={<RiBrainLine />} status={done ? 'done' : 'running'} title={done ? 'Thought for 6s' : 'Thinking'} defaultOpen>
          <p style={{
          color: 'var(--ds-foreground)'
        }} aria-live="off">
            {words.slice(0, step).join(' ')}
          </p>
        </TraceCollapsible>
        {replayButton(replay)}
      </div>;
  }
}`,...U.parameters?.docs?.source},description:{story:`Figma demo "Streaming reasoning": the thought streams in while the title sweeps, then settles as "Thought for 6s".`,...U.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      step,
      replay
    } = useTimeline(TOOL_CALLS.length * 2, 700);
    return <div style={{
      display: 'grid',
      gap: 24,
      ...width
    }}>
        <Trace aria-busy={step < TOOL_CALLS.length * 2}>
          {TOOL_CALLS.slice(0, Math.ceil(step / 2)).map((c, i) => {
          const done = step >= (i + 1) * 2;
          return <TraceLine key={c.done} icon={c.icon} status={done ? 'done' : 'running'} description={done ? c.description : undefined}>
                {done ? c.done : c.running}
              </TraceLine>;
        })}
        </Trace>
        {replayButton(replay)}
      </div>;
  }
}`,...G.parameters?.docs?.source},description:{story:`Figma demo "Tool calls": each call runs, then shows what it did.`,...G.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      step,
      replay
    } = useTimeline(PLAN.length + 1, 900);
    const doneCount = Math.max(0, Math.min(PLAN.length, step - 1));
    return <div style={{
      display: 'grid',
      gap: 24,
      ...width
    }}>
        <TraceCollapsible icon={<RiListCheck2 />} title="Plan" description={\`\${doneCount} of \${PLAN.length} done\`} defaultOpen>
          {PLAN.map((item, i) => {
          const status: TraceStatus = i < doneCount ? 'done' : i === doneCount && step > 0 ? 'running' : 'pending';
          return <TraceLine key={item} status={status} icon={status === 'done' ? <RiCheckboxCircleLine /> : <RiCheckboxBlankCircleLine />}>
                {item}
              </TraceLine>;
        })}
        </TraceCollapsible>
        {replayButton(replay)}
      </div>;
  }
}`,...q.parameters?.docs?.source},description:{story:`Figma demo "Plan": a checklist that fills in as the agent works through it.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      step,
      replay
    } = useTimeline(4, 1200);
    const status = (i: number): TraceStatus => i < step ? 'done' : i === step ? 'running' : 'pending';
    const steps: [ReactNode, string, string?][] = [[<RiSearchEyeLine key="i" />, 'Planned 5 questions'], [<RiGlobalLine key="i" />, step > 1 ? 'Searched the web' : 'Searching the web', '21 sources'], [<RiBookOpenLine key="i" />, step > 2 ? 'Read sources' : 'Reading sources'], [<RiQuillPenLine key="i" />, step > 3 ? 'Wrote the report' : 'Writing the report']];
    return <div style={{
      display: 'grid',
      gap: 24,
      ...width
    }}>
        <Trace>
          {steps.map(([icon, title, description], i) => <TraceLine key={i} icon={icon} status={status(i)} description={description}>
              {title}
            </TraceLine>)}
        </Trace>
        {replayButton(replay, 'Reset', <RiResetLeftLine />)}
      </div>;
  }
}`,...J.parameters?.docs?.source},description:{story:`Figma demo "Deep research": planned, searching, then reading and writing, step by step.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    ...width
  }}>
      <TraceCollapsible icon={<RiTerminalLine />} title="Analyzed signups.csv" description="14s" defaultOpen>
        <TraceCode>{'df = pd.read_csv("signups.csv")\\nweekly = df.resample("W", on="date").size()\\nweekly.pct_change().tail(4).round(3)'}</TraceCode>
        <TraceCode>{'2026-09-21    0.041\\n2026-09-28    0.112\\n2026-10-05   -0.018\\n2026-10-12    0.236'}</TraceCode>
      </TraceCollapsible>
      <p style={prose}>Signups grew 24% last week, the biggest jump this quarter — right after the pricing page went live.</p>
    </div>
}`,...Y.parameters?.docs?.source},description:{story:`Figma demo "Code interpreter": the code, its output and the answer it led to.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Trace style={width}>
      <TraceLine icon={<FileIcon variant="pdf" />} description="18 pages">
        Read quarterly-report.pdf
      </TraceLine>
      <TraceLine icon={<FileIcon variant="spreadsheet" />} description="2,400 rows">
        Read signups.csv
      </TraceLine>
      <TraceLine status="error" icon={<FileIcon variant="image" />} description="no text found">
        Couldn&apos;t read whiteboard.png
      </TraceLine>
    </Trace>
}`,...X.parameters?.docs?.source},description:{story:`Figma demo "Files": files the agent read, and one it could not.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={width}>
      <TraceCollapsible icon={<RiRobot2Line />} title="Ran 2 agents" defaultOpen>
        <TraceCollapsible title="Explored the checkout flow" description="41s" defaultOpen>
          <TraceLine icon={<RiFolderOpenLine />} description="12 files">
            Listed src/checkout
          </TraceLine>
          <TraceLine icon={<RiFileCodeLine />} description="88 lines">
            Read src/checkout/total.ts
          </TraceLine>
        </TraceCollapsible>
        <TraceCollapsible title="Looked for rounding bug" description="1m 3s" defaultOpen>
          <TraceLine icon={<RiSearchLine />} description="9 matches">
            Searched for Math.round
          </TraceLine>
          <TraceLine icon={<RiFileCodeLine />} description="54 lines">
            Read src/lib/money.ts
          </TraceLine>
        </TraceCollapsible>
      </TraceCollapsible>
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`Figma demo "Subagents": agents that ran in parallel, each with its own steps.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      padding: 24,
      background: 'var(--ds-background)'
    }}>
          <Trace>
            <TraceLine icon={<RiTerminalLine />} description="14s">
              Ran pnpm install
            </TraceLine>
            <TraceLine status="error" icon={<RiErrorWarningLine />}>
              Failed to start the dev server
            </TraceLine>
            <TraceLine status="running" icon={<RiTerminalLine />}>
              Running the test suite
            </TraceLine>
            <TraceLine status="pending" icon={<RiCheckboxBlankCircleLine />}>
              Deploy a preview
            </TraceLine>
            <TraceCollapsible icon={<RiTerminalLine />} title="Ran node --version" defaultOpen>
              <TraceCode>v22.11.0</TraceCode>
            </TraceCollapsible>
          </Trace>
        </div>)}
    </div>
}`,...Q.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...Q.parameters?.docs?.description}}}})))()}init_AITrace_stories();export{Y as CodeInterpreter,z as Collapsible,J as DeepResearch,F as Demo,R as Description,X as Files,I as Line,B as Link,q as Plan,P as Playground,L as Status,U as StreamingReasoning,Z as Subagents,Q as Themes,G as ToolCalls,V as WebSearch,$ as __namedExportsOrder,j as default};