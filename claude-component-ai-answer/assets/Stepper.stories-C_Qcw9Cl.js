import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-BdyC5bE3.js";import{n as r,t as i}from"./Button-N2eme1nx.js";import{n as a,r as o,t as s}from"./Stepper-yiqdrl4B.js";var c,l,u,d,f,p,m,h,g,_,v,y;function init_Stepper_stories(){return(init_Stepper_stories=e((()=>{c=n(),r(),o(),l=t(),u={title:`Components/Stepper`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Stepper**, **Stepper Item** and **Stepper Indicator** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6714-1290)), ported from Sort UI 1.3. `Stepper`: `orientation` (horizontal · vertical), `variant` (Figma "Style": `indicator` · `bar`, horizontal only), and either `steps` with `current` or `StepperItem` children. `StepperItem`: `state` (upcoming · current · complete · error), `label`, `caption`, `number` (defaults to its place). It is an ordered list; the current step has `aria-current="step"`, and done or failed steps say so to screen readers (`statusLabel`).'}}}},d=[{label:`Account`,caption:`Email and password`},{label:`Workspace`,caption:`Name and address`},{label:`Team`,caption:`Invite people`},{label:`Billing`,caption:`Plan and card`},{label:`Done`,caption:`Start working`}],f={args:{orientation:`horizontal`,variant:`indicator`,steps:4,current:1,error:!1,captions:!0},argTypes:{orientation:{name:`Orientation`,control:`inline-radio`,options:[`horizontal`,`vertical`]},variant:{name:`Style`,control:`inline-radio`,options:[`indicator`,`bar`],description:`Bar exists only horizontally`},steps:{name:`Steps`,control:{type:`range`,min:3,max:5}},current:{name:`Current step (0-based)`,control:{type:`range`,min:0,max:5}},error:{name:`Current step failed`,control:`boolean`},captions:{name:`Show caption`,control:`boolean`}},render:({orientation:e,variant:t,steps:n,current:r,error:i,captions:a})=>(0,l.jsx)(`div`,{style:{width:e===`vertical`?280:`min(${n*150}px, calc(100vw - 32px))`},children:(0,l.jsx)(s,{"aria-label":`Setup`,orientation:t===`bar`?`horizontal`:e,variant:t,current:r,steps:d.slice(0,n).map((e,t)=>({label:e.label,caption:a?e.caption:void 0,error:i&&t===r}))})})},p=[`upcoming`,`current`,`complete`,`error`],m={render:()=>(0,l.jsx)(`div`,{style:{display:`grid`,gap:32},children:[[`horizontal`,`indicator`],[`vertical`,`indicator`],[`horizontal`,`bar`]].map(([e,t])=>(0,l.jsx)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:p.map(n=>(0,l.jsx)(`div`,{style:{width:e===`vertical`?240:160},children:(0,l.jsx)(s,{"aria-label":`${n} ${e} ${t}`,orientation:e,variant:t,children:(0,l.jsx)(a,{state:n,label:`Label`,caption:`Caption`,showLine:!0})})},n))},e+t))})},h={render:()=>(0,l.jsxs)(`div`,{style:{display:`grid`,gap:40},children:[[3,4,5].map(e=>(0,l.jsx)(`div`,{style:{width:e*150},children:(0,l.jsx)(s,{"aria-label":`${e} steps`,current:1,steps:d.slice(0,e)})},e)),[3,4,5].map(e=>(0,l.jsx)(`div`,{style:{width:e*150},children:(0,l.jsx)(s,{"aria-label":`${e} steps, bar`,variant:`bar`,current:1,steps:d.slice(0,e)})},`bar${e}`)),(0,l.jsx)(`div`,{style:{display:`flex`,gap:40,flexWrap:`wrap`},children:[3,4,5].map(e=>(0,l.jsx)(`div`,{style:{width:280},children:(0,l.jsx)(s,{"aria-label":`${e} steps, vertical`,orientation:`vertical`,current:1,steps:d.slice(0,e)})},`v${e}`))})]})},g={render:()=>(0,l.jsx)(`div`,{style:{width:600},children:(0,l.jsxs)(s,{"aria-label":`Import`,children:[(0,l.jsx)(a,{state:`complete`,label:`Upload`,caption:`contacts.csv`}),(0,l.jsx)(a,{state:`error`,label:`Check columns`,caption:`2 columns have no name`}),(0,l.jsx)(a,{label:`Match fields`,caption:`Map to contacts`}),(0,l.jsx)(a,{label:`Import`,caption:`Add 1,204 contacts`})]})})},_={render:function Render(){let[e,t]=(0,c.useState)(0),n=d.slice(0,4);return(0,l.jsxs)(`div`,{style:{display:`grid`,gap:24,width:600},children:[(0,l.jsx)(s,{"aria-label":`Create a workspace`,current:e,steps:n}),(0,l.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,l.jsx)(i,{variant:`outline`,disabled:e===0,onClick:()=>t(e=>Math.max(0,e-1)),children:`Back`}),(0,l.jsx)(i,{onClick:()=>t(e=>Math.min(n.length,e+1)),disabled:e===n.length,children:e>=n.length-1?`Finish`:`Next`})]})]})}},v={parameters:{layout:`fullscreen`},render:()=>(0,l.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,l.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:32},children:[(0,l.jsxs)(s,{"aria-label":`Setup (${e})`,children:[(0,l.jsx)(a,{state:`complete`,label:`Account`,caption:`Email`}),(0,l.jsx)(a,{state:`current`,label:`Workspace`,caption:`Name`}),(0,l.jsx)(a,{state:`error`,label:`Team`,caption:`Invite`}),(0,l.jsx)(a,{label:`Billing`,caption:`Card`})]}),(0,l.jsx)(s,{"aria-label":`Setup, bar (${e})`,variant:`bar`,current:1,steps:d.slice(0,3)})]},e))})},y=[`Playground`,`States`,`Steps`,`WithError`,`InAForm`,`Themes`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'indicator',
    steps: 4,
    current: 1,
    error: false,
    captions: true
  },
  argTypes: {
    orientation: {
      name: 'Orientation',
      control: 'inline-radio',
      options: ['horizontal', 'vertical']
    },
    variant: {
      name: 'Style',
      control: 'inline-radio',
      options: ['indicator', 'bar'],
      description: 'Bar exists only horizontally'
    },
    steps: {
      name: 'Steps',
      control: {
        type: 'range',
        min: 3,
        max: 5
      }
    },
    current: {
      name: 'Current step (0-based)',
      control: {
        type: 'range',
        min: 0,
        max: 5
      }
    },
    error: {
      name: 'Current step failed',
      control: 'boolean'
    },
    captions: {
      name: 'Show caption',
      control: 'boolean'
    }
  },
  render: ({
    orientation,
    variant,
    steps,
    current,
    error,
    captions
  }) => <div style={{
    width: orientation === 'vertical' ? 280 : \`min(\${steps * 150}px, calc(100vw - 32px))\`
  }}>
      <Stepper aria-label="Setup" orientation={variant === 'bar' ? 'horizontal' : orientation} variant={variant} current={current} steps={STEPS.slice(0, steps).map((s, i) => ({
      label: s.label,
      caption: captions ? s.caption : undefined,
      error: error && i === current
    }))} />
    </div>
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 32
  }}>
      {([['horizontal', 'indicator'], ['vertical', 'indicator'], ['horizontal', 'bar']] as const).map(([orientation, variant]) => <div key={orientation + variant} style={{
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }}>
          {STATES.map(state => <div key={state} style={{
        width: orientation === 'vertical' ? 240 : 160
      }}>
              <Stepper aria-label={\`\${state} \${orientation} \${variant}\`} orientation={orientation} variant={variant}>
                <StepperItem state={state} label="Label" caption="Caption" showLine />
              </Stepper>
            </div>)}
        </div>)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Figma Stepper Item: every State in each Orientation and Style (one step on its own, with its line).`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 40
  }}>
      {[3, 4, 5].map(n => <div key={n} style={{
      width: n * 150
    }}>
          <Stepper aria-label={\`\${n} steps\`} current={1} steps={STEPS.slice(0, n)} />
        </div>)}
      {[3, 4, 5].map(n => <div key={\`bar\${n}\`} style={{
      width: n * 150
    }}>
          <Stepper aria-label={\`\${n} steps, bar\`} variant="bar" current={1} steps={STEPS.slice(0, n)} />
        </div>)}
      <div style={{
      display: 'flex',
      gap: 40,
      flexWrap: 'wrap'
    }}>
        {[3, 4, 5].map(n => <div key={\`v\${n}\`} style={{
        width: 280
      }}>
            <Stepper aria-label={\`\${n} steps, vertical\`} orientation="vertical" current={1} steps={STEPS.slice(0, n)} />
          </div>)}
      </div>
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Figma Stepper: Horizontal and Vertical with 3, 4 and 5 steps, and Style=Bar.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 600
  }}>
      <Stepper aria-label="Import">
        <StepperItem state="complete" label="Upload" caption="contacts.csv" />
        <StepperItem state="error" label="Check columns" caption="2 columns have no name" />
        <StepperItem label="Match fields" caption="Map to contacts" />
        <StepperItem label="Import" caption="Add 1,204 contacts" />
      </Stepper>
    </div>
}`,...g.parameters?.docs?.source},description:{story:`A step that failed: the cross, the label in destructive, and a caption that says why.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [current, setCurrent] = useState(0);
    const steps = STEPS.slice(0, 4);
    return <div style={{
      display: 'grid',
      gap: 24,
      width: 600
    }}>
        <Stepper aria-label="Create a workspace" current={current} steps={steps} />
        <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 8
      }}>
          <Button variant="outline" disabled={current === 0} onClick={() => setCurrent(c => Math.max(0, c - 1))}>
            Back
          </Button>
          <Button onClick={() => setCurrent(c => Math.min(steps.length, c + 1))} disabled={current === steps.length}>
            {current >= steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:`A form that moves through the steps with Back and Next.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24,
      display: 'grid',
      gap: 32
    }}>
          <Stepper aria-label={\`Setup (\${scheme})\`}>
            <StepperItem state="complete" label="Account" caption="Email" />
            <StepperItem state="current" label="Workspace" caption="Name" />
            <StepperItem state="error" label="Team" caption="Invite" />
            <StepperItem label="Billing" caption="Card" />
          </Stepper>
          <Stepper aria-label={\`Setup, bar (\${scheme})\`} variant="bar" current={1} steps={STEPS.slice(0, 3)} />
        </div>)}
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...v.parameters?.docs?.description}}}})))()}init_Stepper_stories();export{_ as InAForm,f as Playground,m as States,h as Steps,v as Themes,g as WithError,y as __namedExportsOrder,u as default};