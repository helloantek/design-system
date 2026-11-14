import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-D2lXCpRQ.js";import{Ct as r,Dt as i,Ft as a,Gt as ee,Lt as o,Mt as s,Nt as c,Tt as l,U as u,X as d,Xt as f,Y as p,ct as m,g as h,lt as g,nt as _,q as v,s as y,st as b,tn as te}from"./react-BmPNGE4b.js";import{r as ne,t as x}from"./FileIcon-elRvZiWW.js";import{n as re,t as ie}from"./Button-Dl3zx18Z.js";import{a as ae,i as S,n as C,r as w,t as T}from"./AITrace-CO9J0GnM.js";function E(e,t){let[n,r]=(0,D.useState)(0),[i,a]=(0,D.useState)(0);return(0,D.useEffect)(()=>{r(0);let n=window.setInterval(()=>r(t=>t>=e?t:t+1),t);return()=>window.clearInterval(n)},[i,e,t]),{step:n,replay:()=>a(e=>e+1)}}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{D=n(),r(),re(),ne(),ae(),O=t(),k={title:`Components/AI Trace`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Trace Line**, **Trace Content** and **Trace** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=3030-2)): the steps an AI agent took, one line each. `TraceLine` is a step (`status` `done` · `running` · `error` · `pending`, an `icon`, a `description` and a `trailingIcon`; `href` makes it a link, `onClick` a button). `TraceCollapsible` is Type=Trigger: a button that opens its **Trace Content** (`open`, `defaultOpen`, `onOpenChange`). `Trace` stacks them 8 px apart; `TraceCode` shows command output. Running, failed and pending steps say so to assistive technology (`statusLabel`). The icons here are Remix icons; Figma draws lucide ones."}}}},A={width:`min(480px, calc(100vw - 32px))`},j={margin:0,color:`var(--ds-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`},M={args:{title:`Searched for minimumReleaseAge`,status:`done`,type:`line`,description:`8 results`,icon:!0},argTypes:{title:{name:`Title`},status:{name:`Status`,control:`inline-radio`,options:[`done`,`running`,`error`,`pending`]},type:{name:`Type`,control:`inline-radio`,options:[`line`,`trigger`,`link`]},description:{name:`Description text`,description:`Empty hides it`},icon:{name:`Icon`}},render:({title:e,status:t,type:n,description:r,icon:i})=>{let a={status:t,description:r||void 0,icon:i?(0,O.jsx)(o,{}):void 0};return(0,O.jsx)(`div`,{style:A,children:n===`trigger`?(0,O.jsx)(w,{...a,title:e,defaultOpen:!0,children:(0,O.jsx)(`p`,{children:`Found 2 matches in packages/web/package.json and pnpm-workspace.yaml.`})}):(0,O.jsx)(S,{...a,href:n===`link`?`https://pnpm.io/settings`:void 0,target:`_blank`,trailingIcon:n===`link`?(0,O.jsx)(c,{}):void 0,children:e})})}},N={render:()=>(0,O.jsxs)(T,{style:A,children:[(0,O.jsx)(S,{icon:(0,O.jsx)(i,{}),children:`Thought for 8s`}),(0,O.jsx)(S,{icon:(0,O.jsx)(g,{}),description:`8 results`,children:`Searched the web`}),(0,O.jsx)(S,{icon:(0,O.jsx)(d,{}),children:`Read 3 pages`}),(0,O.jsx)(w,{icon:(0,O.jsx)(l,{}),title:`Ran pnpm test`,description:`14s`,defaultOpen:!0,children:(0,O.jsx)(C,{children:`Packages: +412
Progress: resolved 412, reused 398, downloaded 14
Done in 8.7s`})})]})},P={render:()=>(0,O.jsx)(S,{icon:(0,O.jsx)(p,{}),children:`Created branch fix/frozen-lockfile`})},F={render:()=>(0,O.jsxs)(T,{style:A,children:[(0,O.jsx)(S,{icon:(0,O.jsx)(l,{}),children:`Ran pnpm install`}),(0,O.jsx)(S,{status:`error`,icon:(0,O.jsx)(u,{}),children:`Failed to start the dev server`}),(0,O.jsx)(S,{status:`running`,icon:(0,O.jsx)(l,{}),children:`Running the test suite`}),(0,O.jsx)(S,{status:`pending`,icon:(0,O.jsx)(m,{}),children:`Deploy a preview`})]})},I={render:()=>(0,O.jsxs)(T,{style:A,children:[(0,O.jsx)(S,{icon:(0,O.jsx)(_,{}),description:`+48 −12`,children:`Edited package.json`}),(0,O.jsx)(S,{icon:(0,O.jsx)(l,{}),description:`14s`,children:`Ran pnpm test`}),(0,O.jsx)(S,{icon:(0,O.jsx)(g,{}),description:`8 results`,children:`Searched the web`})]})},L={render:()=>(0,O.jsx)(`div`,{style:A,children:(0,O.jsx)(w,{icon:(0,O.jsx)(l,{}),title:`Ran node --version`,defaultOpen:!0,children:(0,O.jsx)(C,{children:`v22.11.0`})})})},R={render:()=>(0,O.jsx)(S,{icon:(0,O.jsx)(b,{}),trailingIcon:(0,O.jsx)(c,{}),href:`https://base-ui.com/react/overview/quick-start`,target:`_blank`,children:`Read the Base UI install guide`})},z={render:()=>(0,O.jsxs)(T,{style:A,children:[(0,O.jsx)(S,{icon:(0,O.jsx)(o,{}),children:`Searched for pnpm minimumReleaseAge`}),(0,O.jsx)(w,{icon:(0,O.jsx)(g,{}),title:`Read 3 sources`,defaultOpen:!0,children:[[`Settings (.npmrc)`,`pnpm.io`,`https://pnpm.io/settings`],[`Previous releases`,`nodejs.org`,`https://nodejs.org/en/about/previous-releases`],[`Releases`,`github.com`,`https://github.com/pnpm/pnpm/releases`]].map(([e,t,n])=>(0,O.jsx)(S,{description:t,trailingIcon:(0,O.jsx)(c,{}),href:n,target:`_blank`,children:e},n))})]})},B=(e,t=`Replay`,n)=>(0,O.jsx)(ie,{variant:`outline`,size:`sm`,leadingIcon:n,onClick:e,style:{justifySelf:`start`},children:t}),V=`The bug only shows on a fresh install, so the lockfile is the first suspect. The CI log says the frozen lockfile no longer matches package.json. Someone bumped a dependency without running install, so the fix is to regenerate the lockfile and commit it with the bump.`,H={render:function(){let e=V.split(` `),{step:t,replay:n}=E(e.length,60),r=t>=e.length;return(0,O.jsxs)(`div`,{style:{display:`grid`,gap:24,...A},children:[(0,O.jsx)(w,{icon:(0,O.jsx)(i,{}),status:r?`done`:`running`,title:r?`Thought for 6s`:`Thinking`,defaultOpen:!0,children:(0,O.jsx)(`p`,{style:{color:`var(--ds-foreground)`},"aria-live":`off`,children:e.slice(0,t).join(` `)})}),B(n)]})}},U=[{icon:(0,O.jsx)(d,{}),running:`Reading src/cart.ts`,done:`Read src/cart.ts`,description:`214 lines`},{icon:(0,O.jsx)(_,{}),running:`Editing src/cart.ts`,done:`Edited src/cart.ts`,description:`+12 −3`},{icon:(0,O.jsx)(l,{}),running:`Running pnpm test`,done:`Ran pnpm test`,description:`38 passed · 11s`}],W={render:function(){let{step:e,replay:t}=E(U.length*2,700);return(0,O.jsxs)(`div`,{style:{display:`grid`,gap:24,...A},children:[(0,O.jsx)(T,{"aria-busy":e<U.length*2,children:U.slice(0,Math.ceil(e/2)).map((t,n)=>{let r=e>=(n+1)*2;return(0,O.jsx)(S,{icon:t.icon,status:r?`done`:`running`,description:r?t.description:void 0,children:r?t.done:t.running},t.done)})}),B(t)]})}},G=[`Find where the discount is applied`,`Round the total after the discount`,`Add a test for a 15% coupon`,`Run the test suite`],K={render:function(){let{step:e,replay:t}=E(G.length+1,900),n=Math.max(0,Math.min(G.length,e-1));return(0,O.jsxs)(`div`,{style:{display:`grid`,gap:24,...A},children:[(0,O.jsx)(w,{icon:(0,O.jsx)(y,{}),title:`Plan`,description:`${n} of ${G.length} done`,defaultOpen:!0,children:G.map((t,r)=>{let i=r<n?`done`:r===n&&e>0?`running`:`pending`;return(0,O.jsx)(S,{status:i,icon:i===`done`?(0,O.jsx)(s,{}):(0,O.jsx)(m,{}),children:t},t)})}),B(t)]})}},q={render:function(){let{step:e,replay:t}=E(4,1200),n=t=>t<e?`done`:t===e?`running`:`pending`,r=[[(0,O.jsx)(f,{},`i`),`Planned 5 questions`],[(0,O.jsx)(g,{},`i`),e>1?`Searched the web`:`Searching the web`,`21 sources`],[(0,O.jsx)(b,{},`i`),e>2?`Read sources`:`Reading sources`],[(0,O.jsx)(h,{},`i`),e>3?`Wrote the report`:`Writing the report`]];return(0,O.jsxs)(`div`,{style:{display:`grid`,gap:24,...A},children:[(0,O.jsx)(T,{children:r.map(([e,t,r],i)=>(0,O.jsx)(S,{icon:e,status:n(i),description:r,children:t},i))}),B(t,`Reset`,(0,O.jsx)(ee,{}))]})}},J={render:()=>(0,O.jsxs)(`div`,{style:{display:`grid`,gap:12,...A},children:[(0,O.jsxs)(w,{icon:(0,O.jsx)(l,{}),title:`Analyzed signups.csv`,description:`14s`,defaultOpen:!0,children:[(0,O.jsx)(C,{children:`df = pd.read_csv("signups.csv")
weekly = df.resample("W", on="date").size()
weekly.pct_change().tail(4).round(3)`}),(0,O.jsx)(C,{children:`2026-09-21    0.041
2026-09-28    0.112
2026-10-05   -0.018
2026-10-12    0.236`})]}),(0,O.jsx)(`p`,{style:j,children:`Signups grew 24% last week, the biggest jump this quarter — right after the pricing page went live.`})]})},Y={render:()=>(0,O.jsxs)(T,{style:A,children:[(0,O.jsx)(S,{icon:(0,O.jsx)(x,{variant:`pdf`}),description:`18 pages`,children:`Read quarterly-report.pdf`}),(0,O.jsx)(S,{icon:(0,O.jsx)(x,{variant:`spreadsheet`}),description:`2,400 rows`,children:`Read signups.csv`}),(0,O.jsx)(S,{status:`error`,icon:(0,O.jsx)(x,{variant:`image`}),description:`no text found`,children:`Couldn't read whiteboard.png`})]})},X={render:()=>(0,O.jsx)(`div`,{style:A,children:(0,O.jsxs)(w,{icon:(0,O.jsx)(v,{}),title:`Ran 2 agents`,defaultOpen:!0,children:[(0,O.jsxs)(w,{title:`Explored the checkout flow`,description:`41s`,defaultOpen:!0,children:[(0,O.jsx)(S,{icon:(0,O.jsx)(te,{}),description:`12 files`,children:`Listed src/checkout`}),(0,O.jsx)(S,{icon:(0,O.jsx)(a,{}),description:`88 lines`,children:`Read src/checkout/total.ts`})]}),(0,O.jsxs)(w,{title:`Looked for rounding bug`,description:`1m 3s`,defaultOpen:!0,children:[(0,O.jsx)(S,{icon:(0,O.jsx)(o,{}),description:`9 matches`,children:`Searched for Math.round`}),(0,O.jsx)(S,{icon:(0,O.jsx)(a,{}),description:`54 lines`,children:`Read src/lib/money.ts`})]})]})})},Z={parameters:{layout:`fullscreen`},render:()=>(0,O.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`},children:[`light`,`dark`].map(e=>(0,O.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{padding:24,background:`var(--ds-background)`},children:(0,O.jsxs)(T,{children:[(0,O.jsx)(S,{icon:(0,O.jsx)(l,{}),description:`14s`,children:`Ran pnpm install`}),(0,O.jsx)(S,{status:`error`,icon:(0,O.jsx)(u,{}),children:`Failed to start the dev server`}),(0,O.jsx)(S,{status:`running`,icon:(0,O.jsx)(l,{}),children:`Running the test suite`}),(0,O.jsx)(S,{status:`pending`,icon:(0,O.jsx)(m,{}),children:`Deploy a preview`}),(0,O.jsx)(w,{icon:(0,O.jsx)(l,{}),title:`Ran node --version`,defaultOpen:!0,children:(0,O.jsx)(C,{children:`v22.11.0`})})]})},e))})},Q=[`Playground`,`Demo`,`Line`,`Status`,`Description`,`Collapsible`,`Link`,`WebSearch`,`StreamingReasoning`,`ToolCalls`,`Plan`,`DeepResearch`,`CodeInterpreter`,`Files`,`Subagents`,`Themes`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`Figma demo "Demo": three steps and an open command with its output.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <TraceLine icon={<RiGitBranchLine />}>Created branch fix/frozen-lockfile</TraceLine>
}`,...P.parameters?.docs?.source},description:{story:`Figma demo "Line": one step.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`Figma demo "Status": done, failed, running and pending.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`Figma demo "Description": a diff count, a duration, a result count.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={width}>
      <TraceCollapsible icon={<RiTerminalLine />} title="Ran node --version" defaultOpen>
        <TraceCode>v22.11.0</TraceCode>
      </TraceCollapsible>
    </div>
}`,...L.parameters?.docs?.source},description:{story:`Figma demo "Collapsible": a command that opens to show its output.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <TraceLine icon={<RiBookOpenLine />} trailingIcon={<RiArrowRightUpLine />} href="https://base-ui.com/react/overview/quick-start" target="_blank">
      Read the Base UI install guide
    </TraceLine>
}`,...R.parameters?.docs?.source},description:{story:`Figma demo "Link": a step that opens what it read.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Trace style={width}>
      <TraceLine icon={<RiSearchLine />}>Searched for pnpm minimumReleaseAge</TraceLine>
      <TraceCollapsible icon={<RiGlobalLine />} title="Read 3 sources" defaultOpen>
        {[['Settings (.npmrc)', 'pnpm.io', 'https://pnpm.io/settings'], ['Previous releases', 'nodejs.org', 'https://nodejs.org/en/about/previous-releases'], ['Releases', 'github.com', 'https://github.com/pnpm/pnpm/releases']].map(([title, site, href]) => <TraceLine key={href} description={site} trailingIcon={<RiArrowRightUpLine />} href={href} target="_blank">
            {title}
          </TraceLine>)}
      </TraceCollapsible>
    </Trace>
}`,...z.parameters?.docs?.source},description:{story:`Figma demo "Web search": a search, then the sources it read, each a link.`,...z.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`Figma demo "Streaming reasoning": the thought streams in while the title sweeps, then settles as "Thought for 6s".`,...H.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`Figma demo "Tool calls": each call runs, then shows what it did.`,...W.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Figma demo "Plan": a checklist that fills in as the agent works through it.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Figma demo "Deep research": planned, searching, then reading and writing, step by step.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Figma demo "Code interpreter": the code, its output and the answer it led to.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Figma demo "Files": files the agent read, and one it could not.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Figma demo "Subagents": agents that ran in parallel, each with its own steps.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...Z.parameters?.docs?.description}}}})))()}$();export{J as CodeInterpreter,L as Collapsible,q as DeepResearch,N as Demo,I as Description,Y as Files,P as Line,R as Link,K as Plan,M as Playground,F as Status,H as StreamingReasoning,X as Subagents,Z as Themes,W as ToolCalls,z as WebSearch,Q as __namedExportsOrder,k as default};