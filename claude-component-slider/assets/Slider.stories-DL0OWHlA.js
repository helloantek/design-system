import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-B4-cDREj.js";import{n as r,t as i}from"./Button--lVnUOVp.js";import{i as a,n as o,o as s,t as c}from"./Card-BlgGj2WD.js";import{n as l,t as u}from"./Slider-CYcGBHcM.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{d=n(),r(),s(),l(),f=t(),p={title:`Components/Slider`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Slider** and **Slider Thumb** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=245-3)): a number (`value` / `defaultValue` / `onValueChange`, `onValueCommit` when the pointer is released) between `min` and `max` in `step`s, or a range when the value is `[from, to]` (Figma Range=True; the thumbs cannot cross). Figma Orientation → `orientation` (vertical runs bottom to top), State=Disabled → `disabled`. `label` and `valueText` add the demos' label row; without a label, name the thumbs with `aria-label`. Each thumb is a `role=\"slider\"` with its own Tab stop: arrow keys move by a step, Page Up / Page Down by ten, Home and End to the ends. `variant` adds the demos' looks: `block` (a 24 px track with 20 × 24 thumbs and optional step `marks`, `thumbDot` for a colour dot) and `scrubber` (a 32 px bar with the label and value inside). `--slider-track`, `--slider-fill` and `--slider-thickness` repaint the track and the fill."}}}},m={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,color:`var(--ds-foreground)`},h={...m,color:`var(--ds-muted-foreground)`},g={width:448,maxWidth:`100%`},_={args:{variant:`default`,marks:!1,orientation:`horizontal`,range:!1,disabled:!1,min:0,max:100,step:1},argTypes:{variant:{control:`inline-radio`,options:[`default`,`block`,`scrubber`]},marks:{description:`Step dots (block)`},orientation:{name:`Orientation`,control:`inline-radio`,options:[`horizontal`,`vertical`]},range:{name:`Range`},disabled:{name:`State: Disabled`}},render:function({variant:e,marks:t,orientation:n,range:r,disabled:i,min:a,max:o,step:s}){let[c,l]=(0,d.useState)(50),[p,m]=(0,d.useState)([25,75]),h=r?`${p[0]} – ${p[1]}`:String(c);return(0,f.jsx)(`div`,{style:n===`vertical`?void 0:g,children:r?(0,f.jsx)(u,{label:`Value`,valueText:h,value:p,onValueChange:m,variant:e,marks:t,min:a,max:o,step:s,orientation:n,disabled:i}):(0,f.jsx)(u,{label:`Value`,valueText:h,value:c,onValueChange:l,variant:e,marks:t,min:a,max:o,step:s,orientation:n,disabled:i})})}},v={render:function(){let[e,t]=(0,d.useState)(80);return(0,f.jsx)(`div`,{style:g,children:(0,f.jsx)(u,{label:`Stagger`,valueText:`${e} ms`,value:e,onValueChange:t,min:0,max:160,step:5})})}},y={render:function(){let[e,t]=(0,d.useState)([40,120]);return(0,f.jsx)(`div`,{style:g,children:(0,f.jsx)(u,{label:`Delay window`,valueText:`${e[0]} – ${e[1]} ms`,value:e,onValueChange:t,min:0,max:160,step:5,"aria-label":[`Shortest delay`,`Longest delay`],getAriaValueText:e=>`${e} ms`})})}},b=(0,f.jsx)(`svg`,{viewBox:`0 0 24 24`,width:16,height:16,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:(0,f.jsx)(`path`,{d:`M11 4.7a.7.7 0 0 0-1.2-.5L6.4 7.6A1.4 1.4 0 0 1 5.4 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.4a1.4 1.4 0 0 1 1 .4l3.4 3.4a.7.7 0 0 0 1.2-.5ZM16 9a5 5 0 0 1 0 6M19.4 18.4a9 9 0 0 0 0-12.8`})}),x={render:function(){let[e,t]=(0,d.useState)(50);return(0,f.jsxs)(`div`,{style:{...g,...h,display:`flex`,alignItems:`center`,gap:8},children:[b,(0,f.jsx)(u,{"aria-label":`Volume`,value:e,onValueChange:t,getAriaValueText:e=>`${e}%`}),(0,f.jsxs)(`span`,{style:{minWidth:36,textAlign:`end`,fontVariantNumeric:`tabular-nums`},children:[e,`%`]})]})}},S=[.25,.5,1,2,3,4,5],C={render:function(){let[e,t]=(0,d.useState)([0,2]),n=e=>`${S[e]} CU (~${S[e]*4} GB RAM)`;return(0,f.jsx)(c,{style:g,children:(0,f.jsxs)(o,{style:{display:`grid`,gap:12},children:[(0,f.jsx)(u,{variant:`block`,marks:!0,label:`Configure the autoscaling range`,valueText:`${S[e[0]]} – ${S[e[1]]} CU`,value:e,onValueChange:t,min:0,max:S.length-1,"aria-label":[`Scale from`,`Scale up to`],getAriaValueText:e=>n(e)}),(0,f.jsx)(`div`,{"aria-hidden":!0,style:{...h,fontSize:12,lineHeight:`16px`,position:`relative`,height:16,margin:`0 10px`},children:S.map((e,t)=>(0,f.jsx)(`span`,{style:{position:`absolute`,left:`${t/(S.length-1)*100}%`,translate:`-50% 0`},children:String(e).replace(/^0/,``)},e))}),(0,f.jsxs)(`div`,{style:{...m,display:`flex`,justifyContent:`space-between`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:h,children:`Scale from`}),n(e[0])]}),(0,f.jsxs)(`div`,{style:{textAlign:`end`},children:[(0,f.jsx)(`div`,{style:h,children:`Scale up to`}),n(e[1])]})]})]})})}},w=[`Low`,`Medium`,`High`,`Higher`,`Max`,`Extra`],T={render:function(){let[e,t]=(0,d.useState)(2);return(0,f.jsx)(c,{style:{width:288,maxWidth:`100%`},children:(0,f.jsxs)(o,{style:{display:`grid`,gap:8},children:[(0,f.jsxs)(`span`,{id:`effort-label`,style:{...m,fontSize:16,lineHeight:`24px`},children:[(0,f.jsx)(`span`,{style:h,children:`Effort`}),` `,w[e]]}),(0,f.jsxs)(`div`,{"aria-hidden":!0,style:{...h,display:`flex`,justifyContent:`space-between`},children:[(0,f.jsx)(`span`,{children:`Faster`}),(0,f.jsx)(`span`,{children:`Smarter`})]}),(0,f.jsx)(u,{variant:`block`,"aria-label":`Effort`,value:e,onValueChange:t,min:0,max:w.length-1,marks:w.map((e,t)=>t===1?{value:t,emphasis:!0}:t),getAriaValueText:e=>w[e]+(e===1?` (recommended)`:``)})]})})}},E=`linear-gradient(to right, #ff0000 2.5%, #ffff00 18.3%, #00ff00 34.2%, #00ffff 50%, #0000ff 65.8%, #ff00ff 81.7%, #ff0000 97.5%)`,D={render:function(){let[e,t]=(0,d.useState)(130),[n,r]=(0,d.useState)(70),i=`hsl(${e} 100% 50%)`,s=`hsl(${e} 100% 50% / ${n}%)`,l=e=>({"--slider-thickness":`16px`,"--slider-track":e,"--slider-fill":`transparent`});return(0,f.jsxs)(c,{style:g,children:[(0,f.jsx)(a,{title:`Color`,action:(0,f.jsxs)(`span`,{style:{...h,display:`flex`,gap:8,alignItems:`center`},children:[s,(0,f.jsx)(`span`,{style:{width:12,height:12,borderRadius:3,background:s}})]})}),(0,f.jsxs)(o,{style:{display:`grid`,gap:16},children:[(0,f.jsx)(u,{variant:`block`,thumbDot:i,"aria-label":`Hue`,value:e,onValueChange:t,max:360,getAriaValueText:e=>`${e} degrees`,style:l(E)}),(0,f.jsx)(u,{variant:`block`,thumbDot:s,"aria-label":`Opacity`,value:n,onValueChange:r,getAriaValueText:e=>`${e}%`,style:l(`linear-gradient(to right, transparent 2.5%, ${i} 97.5%), repeating-conic-gradient(var(--ds-fill-3) 0 25%, transparent 0 50%) 0 0 / 8px 8px`)})]})]})}},O={render:function(){let[e,t]=(0,d.useState)(50);return(0,f.jsx)(`div`,{style:{width:288,maxWidth:`100%`},children:(0,f.jsx)(u,{variant:`scrubber`,label:`Brightness`,valueText:`${e}%`,value:e,onValueChange:t,getAriaValueText:e=>`${e}%`})})}},k={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:32},children:[(0,f.jsx)(u,{orientation:`vertical`,"aria-label":`Bass`,defaultValue:45}),(0,f.jsx)(u,{orientation:`vertical`,"aria-label":[`Low cut`,`High cut`],defaultValue:[40,70]})]})},A={render:()=>(0,f.jsxs)(`div`,{style:{...g,display:`grid`,gap:24},children:[(0,f.jsx)(u,{"aria-label":`Locked volume`,defaultValue:50,disabled:!0}),(0,f.jsx)(u,{label:`Locked window`,valueText:`40 – 120 ms`,defaultValue:[25,75],disabled:!0})]})},j={render:function(){let[e,t]=(0,d.useState)(``);return(0,f.jsxs)(`form`,{style:{...g,display:`grid`,gap:16},onSubmit:e=>{e.preventDefault(),t(new URLSearchParams(new FormData(e.currentTarget)).toString())},children:[(0,f.jsx)(u,{label:`Budget`,name:`budget`,defaultValue:[200,800],min:0,max:1e3,step:50,"aria-label":[`Minimum budget`,`Maximum budget`]}),(0,f.jsx)(i,{type:`submit`,style:{justifySelf:`start`},children:`Submit`}),(0,f.jsx)(`output`,{style:h,children:e})]})}},M={parameters:{layout:`fullscreen`},render:()=>(0,f.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,f.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:24},children:[(0,f.jsx)(u,{label:`Stagger`,valueText:`80 ms`,defaultValue:50}),(0,f.jsx)(u,{"aria-label":[`From (${e})`,`To (${e})`],defaultValue:[25,75]}),(0,f.jsx)(u,{"aria-label":`Disabled (${e})`,defaultValue:50,disabled:!0}),(0,f.jsx)(u,{variant:`block`,marks:!0,"aria-label":[`Block from (${e})`,`Block to (${e})`],defaultValue:[1,3],max:6}),(0,f.jsx)(u,{variant:`scrubber`,label:`Brightness (${e})`,valueText:`50%`,defaultValue:50})]},e))})},N=[`Playground`,`Default`,`Range`,`Inline`,`AutoscalingRange`,`EffortSlider`,`ColorPicker`,`Scrubber`,`Vertical`,`Disabled`,`InAForm`,`Themes`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    marks: false,
    orientation: 'horizontal',
    range: false,
    disabled: false,
    min: 0,
    max: 100,
    step: 1
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'block', 'scrubber']
    },
    marks: {
      description: 'Step dots (block)'
    },
    orientation: {
      name: 'Orientation',
      control: 'inline-radio',
      options: ['horizontal', 'vertical']
    },
    range: {
      name: 'Range'
    },
    disabled: {
      name: 'State: Disabled'
    }
  },
  render: function Render({
    variant,
    marks,
    orientation,
    range,
    disabled,
    min,
    max,
    step
  }) {
    const [single, setSingle] = useState(50);
    const [pair, setPair] = useState<[number, number]>([25, 75]);
    const valueText = range ? \`\${pair[0]} – \${pair[1]}\` : String(single);
    return <div style={orientation === 'vertical' ? undefined : stage}>
        {range ? <Slider label="Value" valueText={valueText} value={pair} onValueChange={setPair} variant={variant} marks={marks} min={min} max={max} step={step} orientation={orientation} disabled={disabled} /> : <Slider label="Value" valueText={valueText} value={single} onValueChange={setSingle} variant={variant} marks={marks} min={min} max={max} step={step} orientation={orientation} disabled={disabled} />}
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [ms, setMs] = useState(80);
    return <div style={stage}>
        <Slider label="Stagger" valueText={\`\${ms} ms\`} value={ms} onValueChange={setMs} min={0} max={160} step={5} />
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`Figma demo "Slider": a label and the value above the track.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [delay, setDelay] = useState<[number, number]>([40, 120]);
    return <div style={stage}>
        <Slider label="Delay window" valueText={\`\${delay[0]} – \${delay[1]} ms\`} value={delay} onValueChange={setDelay} min={0} max={160} step={5} aria-label={['Shortest delay', 'Longest delay']} getAriaValueText={v => \`\${v} ms\`} />
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:`Figma demo "Range": two thumbs that cannot cross.`,...y.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [volume, setVolume] = useState(50);
    return <div style={{
      ...stage,
      ...muted,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
        {volumeIcon}
        <Slider aria-label="Volume" value={volume} onValueChange={setVolume} getAriaValueText={v => \`\${v}%\`} />
        <span style={{
        minWidth: 36,
        textAlign: 'end',
        fontVariantNumeric: 'tabular-nums'
      }}>{volume}%</span>
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:`Figma demo "Inline": an icon, the slider and its value on one row.`,...x.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [at, setAt] = useState<[number, number]>([0, 2]);
    const cu = (i: number) => \`\${scale[i]} CU (~\${scale[i] * 4} GB RAM)\`;
    return <Card style={stage}>
        <CardContent style={{
        display: 'grid',
        gap: 12
      }}>
          <Slider variant="block" marks label="Configure the autoscaling range" valueText={\`\${scale[at[0]]} – \${scale[at[1]]} CU\`} value={at} onValueChange={setAt} min={0} max={scale.length - 1} aria-label={['Scale from', 'Scale up to']} getAriaValueText={i => cu(i)} />
          <div aria-hidden style={{
          ...muted,
          fontSize: 12,
          lineHeight: '16px',
          position: 'relative',
          height: 16,
          margin: '0 10px'
        }}>
            {scale.map((s, i) => <span key={s} style={{
            position: 'absolute',
            left: \`\${i / (scale.length - 1) * 100}%\`,
            translate: '-50% 0'
          }}>
                {String(s).replace(/^0/, '')}
              </span>)}
          </div>
          <div style={{
          ...text,
          display: 'flex',
          justifyContent: 'space-between'
        }}>
            <div>
              <div style={muted}>Scale from</div>
              {cu(at[0])}
            </div>
            <div style={{
            textAlign: 'end'
          }}>
              <div style={muted}>Scale up to</div>
              {cu(at[1])}
            </div>
          </div>
        </CardContent>
      </Card>;
  }
}`,...C.parameters?.docs?.source},description:{story:`Figma demo "Autoscaling range": a block range with a dot under every step, labelled under the track.`,...C.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [level, setLevel] = useState(2);
    return <Card style={{
      width: 288,
      maxWidth: '100%'
    }}>
        <CardContent style={{
        display: 'grid',
        gap: 8
      }}>
          <span id="effort-label" style={{
          ...text,
          fontSize: 16,
          lineHeight: '24px'
        }}>
            <span style={muted}>Effort</span> {efforts[level]}
          </span>
          <div aria-hidden style={{
          ...muted,
          display: 'flex',
          justifyContent: 'space-between'
        }}>
            <span>Faster</span>
            <span>Smarter</span>
          </div>
          <Slider variant="block" aria-label="Effort" value={level} onValueChange={setLevel} min={0} max={efforts.length - 1} marks={efforts.map((_, i) => i === 1 ? {
          value: i,
          emphasis: true
        } : i)} getAriaValueText={i => efforts[i] + (i === 1 ? ' (recommended)' : '')} />
        </CardContent>
      </Card>;
  }
}`,...T.parameters?.docs?.source},description:{story:`Figma demo "Claude Effort Slider": a block slider over named levels; the recommended one is marked with a bar.`,...T.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [hue, setHue] = useState(130);
    const [alpha, setAlpha] = useState(70);
    const colour = \`hsl(\${hue} 100% 50%)\`;
    const withAlpha = \`hsl(\${hue} 100% 50% / \${alpha}%)\`;
    const track = (paint: string): CSSProperties => ({
      '--slider-thickness': '16px',
      '--slider-track': paint,
      '--slider-fill': 'transparent'
    }) as CSSProperties;
    return <Card style={stage}>
        <CardHeader title="Color" action={<span style={{
        ...muted,
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }}>
              {withAlpha}
              <span style={{
          width: 12,
          height: 12,
          borderRadius: 3,
          background: withAlpha
        }} />
            </span>} />
        <CardContent style={{
        display: 'grid',
        gap: 16
      }}>
          <Slider variant="block" thumbDot={colour} aria-label="Hue" value={hue} onValueChange={setHue} max={360} getAriaValueText={v => \`\${v} degrees\`} style={track(hueTrack)} />
          <Slider variant="block" thumbDot={withAlpha} aria-label="Opacity" value={alpha} onValueChange={setAlpha} getAriaValueText={v => \`\${v}%\`} style={track(\`linear-gradient(to right, transparent 2.5%, \${colour} 97.5%), repeating-conic-gradient(var(--ds-fill-3) 0 25%, transparent 0 50%) 0 0 / 8px 8px\`)} />
        </CardContent>
      </Card>;
  }
}`,...D.parameters?.docs?.source},description:{story:`Figma demo "Color picker": block thumbs with a colour dot over painted tracks (--slider-track, 16 px thick).`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [brightness, setBrightness] = useState(50);
    return <div style={{
      width: 288,
      maxWidth: '100%'
    }}>
        <Slider variant="scrubber" label="Brightness" valueText={\`\${brightness}%\`} value={brightness} onValueChange={setBrightness} getAriaValueText={v => \`\${v}%\`} />
      </div>;
  }
}`,...O.parameters?.docs?.source},description:{story:`Figma demo "Scrubber": the whole bar is the control, with the label and value inside.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32
  }}>
      <Slider orientation="vertical" aria-label="Bass" defaultValue={45} />
      <Slider orientation="vertical" aria-label={['Low cut', 'High cut']} defaultValue={[40, 70]} />
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Figma demo "Vertical": a single slider and a range, bottom to top.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...stage,
    display: 'grid',
    gap: 24
  }}>
      <Slider aria-label="Locked volume" defaultValue={50} disabled />
      <Slider label="Locked window" valueText="40 – 120 ms" defaultValue={[25, 75]} disabled />
    </div>
}`,...A.parameters?.docs?.source},description:{story:`Figma demo "Disabled".`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [sent, setSent] = useState('');
    return <form style={{
      ...stage,
      display: 'grid',
      gap: 16
    }} onSubmit={event => {
      event.preventDefault();
      setSent(new URLSearchParams(new FormData(event.currentTarget) as unknown as Record<string, string>).toString());
    }}>
        <Slider label="Budget" name="budget" defaultValue={[200, 800]} min={0} max={1000} step={50} aria-label={['Minimum budget', 'Maximum budget']} />
        <Button type="submit" style={{
        justifySelf: 'start'
      }}>
          Submit
        </Button>
        <output style={muted}>{sent}</output>
      </form>;
  }
}`,...j.parameters?.docs?.source},description:{story:`A slider in a form submits its value (a range submits two fields with the same name).`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
          <Slider label="Stagger" valueText="80 ms" defaultValue={50} />
          <Slider aria-label={[\`From (\${scheme})\`, \`To (\${scheme})\`]} defaultValue={[25, 75]} />
          <Slider aria-label={\`Disabled (\${scheme})\`} defaultValue={50} disabled />
          <Slider variant="block" marks aria-label={[\`Block from (\${scheme})\`, \`Block to (\${scheme})\`]} defaultValue={[1, 3]} max={6} />
          <Slider variant="scrubber" label={\`Brightness (\${scheme})\`} valueText="50%" defaultValue={50} />
        </div>)}
    </div>
}`,...M.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...M.parameters?.docs?.description}}}})))()}P();export{C as AutoscalingRange,D as ColorPicker,v as Default,A as Disabled,T as EffortSlider,j as InAForm,x as Inline,_ as Playground,y as Range,O as Scrubber,M as Themes,k as Vertical,N as __namedExportsOrder,p as default};