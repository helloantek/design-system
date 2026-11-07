import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-D2TEpJb3.js";import{n as r,r as i,t as a}from"./Checkbox-x4tL8Gb5.js";import{n as o,r as s,t as c}from"./Progress-DzUgnWse.js";var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{l=n(),i(),s(),u=t(),d={title:`Components/Progress`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Progress** and **Progress circle** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=245-2)). `Progress`: `value` of `max`, `variant` (`default` · `dashed` in steps), `label` and `valueLabel` (header), `description` (footer); without a value it is indeterminate. `ProgressCircle`: `value`, `size`, `thickness`, `variant="destructive"` and a `label` in the middle. Both are `role="progressbar"` with their value read as text.'}}}},f={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,fontWeight:500,color:`var(--ds-muted-foreground)`,letterSpacing:`-0.005em`},p={args:{variant:`default`,value:54,steps:10,label:`Overall`,description:`2.5GB of 5GB`},argTypes:{variant:{name:`Variant`,control:`inline-radio`,options:[`default`,`dashed`]},value:{name:`Value (%)`,control:{type:`range`,min:0,max:100}},steps:{name:`Steps (Dashed)`,control:{type:`range`,min:2,max:20},description:`Dashed draws one segment per step (max)`},label:{name:`Label`},description:{name:`Description`}},render:({variant:e,value:t,steps:n,label:r,description:i})=>(0,u.jsx)(`div`,{style:{width:`min(448px, calc(100vw - 32px))`},children:e===`dashed`?(0,u.jsx)(c,{variant:`dashed`,value:Math.round(t/100*n),max:n,label:r||void 0,"aria-label":r?void 0:`Progress`,description:i||void 0}):(0,u.jsx)(c,{value:t,label:r||void 0,"aria-label":r?void 0:`Progress`,description:i||void 0})})},m={render:()=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:24,width:320},children:[(0,u.jsx)(c,{label:`Copying`,value:54,description:`2.5GB of 5GB`}),(0,u.jsx)(c,{label:`Rendering`,value:10,description:`Frame 60/600`}),(0,u.jsx)(c,{label:`Storage`,value:70,valueLabel:`Used: 70GB of 100GB`}),(0,u.jsx)(c,{variant:`dashed`,label:`Steps`,value:3,max:10,valueLabel:`3/10 completed`})]})},h={render:function(){let e=[`Connect a custom domain`,`Turn on analytics`,`Schedule nightly backups`,`Invite two teammates`,`Add a billing address`],[t,n]=(0,l.useState)(e.slice(0,2));return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:24,width:340},children:[(0,u.jsx)(c,{label:`Launch checklist`,value:t.length,max:e.length,valueLabel:`${t.length} of ${e.length} done`}),(0,u.jsx)(r,{label:`Before you go live`,caption:`Five things worth doing on the day you ship.`,children:e.map(e=>(0,u.jsx)(a,{label:e,checked:t.includes(e),onCheckedChange:t=>n(n=>t?[...n,e]:n.filter(t=>t!==e))},e))})]})}},g={render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,gap:32},children:[{name:`Tailwind CSS`,value:75},{name:`CSS`,value:96},{name:`JavaScript`,value:25,variant:`destructive`}].map(({name:e,value:t,variant:n})=>(0,u.jsxs)(`div`,{style:{display:`grid`,justifyItems:`center`,gap:16,width:96},children:[(0,u.jsx)(o,{value:t,size:`96px`,thickness:7.5,variant:n,label:`${t}%`,"aria-label":e}),(0,u.jsx)(`span`,{style:f,children:e})]},e))})},_={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,u.jsx)(o,{value:0,"aria-label":`Not started`}),(0,u.jsx)(o,{value:25,"aria-label":`A quarter done`}),(0,u.jsx)(o,{value:60,size:`24px`,thickness:16,"aria-label":`Uploading`})]})},v={render:()=>(0,u.jsx)(`div`,{style:{width:320},children:(0,u.jsx)(c,{label:`Preparing your export`,description:`This can take a minute.`})})},y={parameters:{layout:`fullscreen`},render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,u.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:24},children:[(0,u.jsx)(c,{label:`Copying`,value:54,description:`2.5GB of 5GB`}),(0,u.jsx)(c,{variant:`dashed`,label:`Steps`,value:3,max:10,valueLabel:`3/10 completed`}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,u.jsx)(o,{value:75,label:`75%`,"aria-label":`Score (${e})`}),(0,u.jsx)(o,{value:25,label:`25%`,variant:`destructive`,"aria-label":`Budget (${e})`})]})]},e))})},b=[`Playground`,`Demo`,`Controlled`,`Circle`,`CircleValues`,`Indeterminate`,`Themes`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    value: 54,
    steps: 10,
    label: 'Overall',
    description: '2.5GB of 5GB'
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: 'inline-radio',
      options: ['default', 'dashed']
    },
    value: {
      name: 'Value (%)',
      control: {
        type: 'range',
        min: 0,
        max: 100
      }
    },
    steps: {
      name: 'Steps (Dashed)',
      control: {
        type: 'range',
        min: 2,
        max: 20
      },
      description: 'Dashed draws one segment per step (max)'
    },
    label: {
      name: 'Label'
    },
    description: {
      name: 'Description'
    }
  },
  // Dashed counts steps: the value becomes that share of the steps (54 % of 10 → 5 of 10), as one segment per step.
  render: ({
    variant,
    value,
    steps,
    label,
    description
  }) => <div style={{
    width: 'min(448px, calc(100vw - 32px))'
  }}>
      {variant === 'dashed' ? <Progress variant="dashed" value={Math.round(value / 100 * steps)} max={steps} label={label || undefined} aria-label={label ? undefined : 'Progress'} description={description || undefined} /> : <Progress value={value} label={label || undefined} aria-label={label ? undefined : 'Progress'} description={description || undefined} />}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24,
    width: 320
  }}>
      <Progress label="Copying" value={54} description="2.5GB of 5GB" />
      <Progress label="Rendering" value={10} description="Frame 60/600" />
      <Progress label="Storage" value={70} valueLabel="Used: 70GB of 100GB" />
      <Progress variant="dashed" label="Steps" value={3} max={10} valueLabel="3/10 completed" />
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Figma demo "Progress": a percentage, a step count, a custom value and dashed steps.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const tasks = ['Connect a custom domain', 'Turn on analytics', 'Schedule nightly backups', 'Invite two teammates', 'Add a billing address'];
    const [done, setDone] = useState<string[]>(tasks.slice(0, 2));
    return <div style={{
      display: 'grid',
      gap: 24,
      width: 340
    }}>
        <Progress label="Launch checklist" value={done.length} max={tasks.length} valueLabel={\`\${done.length} of \${tasks.length} done\`} />
        <CheckboxGroup label="Before you go live" caption="Five things worth doing on the day you ship.">
          {tasks.map(task => <Checkbox key={task} label={task} checked={done.includes(task)} onCheckedChange={checked => setDone(list => checked ? [...list, task] : list.filter(t => t !== task))} />)}
        </CheckboxGroup>
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:`Figma demo "Controlled": the bar follows a checklist.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32
  }}>
      {[{
      name: 'Tailwind CSS',
      value: 75
    }, {
      name: 'CSS',
      value: 96
    }, {
      name: 'JavaScript',
      value: 25,
      variant: 'destructive' as const
    }].map(({
      name,
      value,
      variant
    }) => <div key={name} style={{
      display: 'grid',
      justifyItems: 'center',
      gap: 16,
      width: 96
    }}>
          <ProgressCircle value={value} size="96px" thickness={7.5} variant={variant} label={\`\${value}%\`} aria-label={name} />
          <span style={muted}>{name}</span>
        </div>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Figma demo "Circle": 96 px rings (7.5 % thick) with the value inside; a warning in destructive.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      <ProgressCircle value={0} aria-label="Not started" />
      <ProgressCircle value={25} aria-label="A quarter done" />
      <ProgressCircle value={60} size="24px" thickness={16} aria-label="Uploading" />
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Figma Progress circle Value=Empty and Filled (25 %), 72 px, and a small one.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <Progress label="Preparing your export" description="This can take a minute." />
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Not in Figma: while the amount is unknown, a third of the bar slides across (with reduced motion, a still half-tint bar).`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      gap: 24
    }}>
          <Progress label="Copying" value={54} description="2.5GB of 5GB" />
          <Progress variant="dashed" label="Steps" value={3} max={10} valueLabel="3/10 completed" />
          <div style={{
        display: 'flex',
        gap: 16
      }}>
            <ProgressCircle value={75} label="75%" aria-label={\`Score (\${scheme})\`} />
            <ProgressCircle value={25} label="25%" variant="destructive" aria-label={\`Budget (\${scheme})\`} />
          </div>
        </div>)}
    </div>
}`,...y.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...y.parameters?.docs?.description}}}})))()}x();export{g as Circle,_ as CircleValues,h as Controlled,m as Demo,v as Indeterminate,p as Playground,y as Themes,b as __namedExportsOrder,d as default};