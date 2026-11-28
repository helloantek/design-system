import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BwbsjbhE.js";import{n as r,r as i,t as a}from"./Radio-B3AHFC9V.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{o=n(),i(),s=t(),c={title:`Components/Radio`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Radio** and **Radio Group** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=121-3)) on native `<input type=\"radio\">`s, with **Field** Orientation=Horizontal for `label` and `caption` (`control`: `start` · `end`) and **Choice Card** for `card`. `RadioGroup` is a fieldset that shares a name, the value and Invalid with its radios; the arrow keys move between them. Figma Checked = the group's `value`; State: Focus = keyboard focus, Disabled = `disabled`, Invalid = the group's `invalid` or `error`."}}}},l=[`Automatic`,`Low · 96 kbps`,`Normal · 160 kbps`,`High · 320 kbps`],u={args:{state:`Default`,control:`start`,card:!1,error:`Pick one to continue.`},argTypes:{state:{name:`State`,control:`inline-radio`,options:[`Default`,`Invalid`,`Disabled`],description:`Focus: press Tab`},control:{name:`Control`,control:`inline-radio`,options:[`start`,`end`]},card:{name:`Choice Card`},error:{name:`Error`,if:{arg:`state`,eq:`Invalid`}}},render:function({state:e,control:t,card:n,error:i}){let[c,u]=(0,o.useState)(`Normal · 160 kbps`);return(0,s.jsx)(`div`,{style:{width:360},children:(0,s.jsx)(r,{label:`Streaming quality`,caption:`Higher quality uses more data.`,value:c,onValueChange:u,error:e===`Invalid`?i:void 0,disabled:e===`Disabled`,children:l.map(e=>(0,s.jsx)(a,{value:e,label:e,control:t,card:n},e))})})}},d={fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},f=[`Default`,`Focus`,`Disabled`,`Invalid`],p={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`120px repeat(4, 64px)`,gap:16,alignItems:`center`,justifyItems:`center`},children:[(0,s.jsx)(`span`,{}),f.map(e=>(0,s.jsx)(`span`,{style:d,children:e},e)),[`False`,`True`].map(e=>(0,s.jsxs)(`div`,{style:{display:`contents`},children:[(0,s.jsxs)(`span`,{style:{...d,justifySelf:`start`},children:[`Checked=`,e]}),f.map(t=>(0,s.jsx)(a,{name:`${e}-${t}`,value:`x`,"aria-label":`Checked=${e}, ${t}`,defaultChecked:e===`True`,disabled:t===`Disabled`,invalid:t===`Invalid`},t))]},e))]})},m={render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 320px)`,gap:32},children:[`start`,`end`].map(e=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:24,alignContent:`start`},children:[(0,s.jsxs)(`span`,{style:d,children:[`Control=`,e===`start`?`Start`:`End`]}),(0,s.jsx)(a,{name:`field-${e}-1`,value:`a`,control:e,label:`Label`,caption:`Description`}),(0,s.jsx)(a,{name:`field-${e}-2`,value:`a`,control:e,label:`Label`,caption:`Description`,invalid:!0}),(0,s.jsx)(a,{name:`field-${e}-3`,value:`a`,control:e,label:`Label`,caption:`Description`,disabled:!0})]},e))})},h=[{value:`monthly`,label:`Monthly`,caption:`$12 a month, cancel any time.`},{value:`yearly`,label:`Yearly`,caption:`$120 a year — two months free.`},{value:`lifetime`,label:`Lifetime`,caption:`$299 once, updates included.`}],g={render:()=>(0,s.jsx)(`div`,{style:{width:408},children:(0,s.jsx)(r,{label:`Billing period`,caption:`Change how often the plan renews.`,defaultValue:`yearly`,children:h.map(e=>(0,s.jsx)(a,{card:!0,control:`end`,...e},e.value))})})},_={render:()=>(0,s.jsx)(`div`,{style:{width:440},children:(0,s.jsxs)(r,{label:`Streaming quality`,caption:`Higher quality uses more data.`,defaultValue:`Normal · 160 kbps`,children:[l.map(e=>(0,s.jsx)(a,{value:e,label:e},e)),(0,s.jsx)(a,{value:`Lossless`,label:`Lossless`,disabled:!0})]})})},v={render:()=>(0,s.jsx)(`div`,{style:{width:440},children:(0,s.jsx)(r,{label:`Default landing page`,caption:`Where the app opens after you sign in.`,defaultValue:`search`,columns:2,children:[`Home`,`Search`,`Library`,`Downloads`,`Podcasts`,`Settings`].map(e=>(0,s.jsx)(a,{value:e.toLowerCase(),label:e},e))})})},y={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:32,width:440},children:[(0,s.jsx)(r,{label:`Who can see your playlists`,caption:`Pick one to finish setting up your profile.`,invalid:!0,children:[`Everyone`,`Followers only`,`Only me`].map(e=>(0,s.jsx)(a,{value:e,label:e},e))}),(0,s.jsx)(r,{label:`Who can see your playlists`,error:`Pick one to finish setting up your profile.`,required:!0,children:[`Everyone`,`Followers only`,`Only me`].map(e=>(0,s.jsx)(a,{value:e,label:e},e))})]})},b={parameters:{layout:`fullscreen`},render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,s.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,alignContent:`start`},children:[(0,s.jsx)(`div`,{style:d,children:e===`light`?`Light`:`Dark`}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,s.jsx)(a,{name:`t-${e}-1`,value:`a`,"aria-label":`Unchecked (${e})`}),(0,s.jsx)(a,{name:`t-${e}-2`,value:`a`,"aria-label":`Checked (${e})`,defaultChecked:!0}),(0,s.jsx)(a,{name:`t-${e}-3`,value:`a`,"aria-label":`Invalid (${e})`,invalid:!0}),(0,s.jsx)(a,{name:`t-${e}-4`,value:`a`,"aria-label":`Disabled (${e})`,defaultChecked:!0,disabled:!0})]}),(0,s.jsx)(r,{label:`Billing period`,defaultValue:`yearly`,children:h.slice(0,2).map(e=>(0,s.jsx)(a,{card:!0,control:`end`,...e},e.value))})]},e))})},x=[`Playground`,`Variants`,`Field`,`ChoiceCards`,`List`,`Grid`,`Invalid`,`Themes`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'Default',
    control: 'start',
    card: false,
    error: 'Pick one to continue.'
  },
  argTypes: {
    state: {
      name: 'State',
      control: 'inline-radio',
      options: ['Default', 'Invalid', 'Disabled'],
      description: 'Focus: press Tab'
    },
    control: {
      name: 'Control',
      control: 'inline-radio',
      options: ['start', 'end']
    },
    card: {
      name: 'Choice Card'
    },
    error: {
      name: 'Error',
      if: {
        arg: 'state',
        eq: 'Invalid'
      }
    }
  },
  render: function Render({
    state,
    control,
    card,
    error
  }) {
    const [value, setValue] = useState<string | null>('Normal · 160 kbps');
    return <div style={{
      width: 360
    }}>
        <RadioGroup label="Streaming quality" caption="Higher quality uses more data." value={value} onValueChange={setValue} error={state === 'Invalid' ? error : undefined} disabled={state === 'Disabled'}>
          {qualities.map(q => <Radio key={q} value={q} label={q} control={control} card={card} />)}
        </RadioGroup>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '120px repeat(4, 64px)',
    gap: 16,
    alignItems: 'center',
    justifyItems: 'center'
  }}>
      <span />
      {states.map(s => <span key={s} style={caption}>
          {s}
        </span>)}
      {(['False', 'True'] as const).map(checked => <div key={checked} style={{
      display: 'contents'
    }}>
          <span style={{
        ...caption,
        justifySelf: 'start'
      }}>Checked={checked}</span>
          {states.map(s => <Radio key={s} name={\`\${checked}-\${s}\`} value="x" aria-label={\`Checked=\${checked}, \${s}\`} defaultChecked={checked === 'True'} disabled={s === 'Disabled'} invalid={s === 'Invalid'} />)}
        </div>)}
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Figma "Radio": Checked × State. State=Focus is keyboard focus: press Tab to see it.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 320px)',
    gap: 32
  }}>
      {(['start', 'end'] as const).map(control => <div key={control} style={{
      display: 'grid',
      gap: 24,
      alignContent: 'start'
    }}>
          <span style={caption}>Control={control === 'start' ? 'Start' : 'End'}</span>
          <Radio name={\`field-\${control}-1\`} value="a" control={control} label="Label" caption="Description" />
          <Radio name={\`field-\${control}-2\`} value="a" control={control} label="Label" caption="Description" invalid />
          <Radio name={\`field-\${control}-3\`} value="a" control={control} label="Label" caption="Description" disabled />
        </div>)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Figma "Field" Orientation=Horizontal with a Radio: Control (start, end) × State.`,...m.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 408
  }}>
      <RadioGroup label="Billing period" caption="Change how often the plan renews." defaultValue="yearly">
        {plans.map(p => <Radio key={p.value} card control="end" {...p} />)}
      </RadioGroup>
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Figma demo "Radio Group": Choice Cards (the radio at the end), 8 px apart.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 440
  }}>
      <RadioGroup label="Streaming quality" caption="Higher quality uses more data." defaultValue="Normal · 160 kbps">
        {qualities.map(q => <Radio key={q} value={q} label={q} />)}
        <Radio value="Lossless" label="Lossless" disabled />
      </RadioGroup>
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Figma demo "List", with a disabled option.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 440
  }}>
      <RadioGroup label="Default landing page" caption="Where the app opens after you sign in." defaultValue="search" columns={2}>
        {['Home', 'Search', 'Library', 'Downloads', 'Podcasts', 'Settings'].map(page => <Radio key={page} value={page.toLowerCase()} label={page} />)}
      </RadioGroup>
    </div>
}`,...v.parameters?.docs?.source},description:{story:'Figma demo "Grid": `columns={2}`.',...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 32,
    width: 440
  }}>
      <RadioGroup label="Who can see your playlists" caption="Pick one to finish setting up your profile." invalid>
        {['Everyone', 'Followers only', 'Only me'].map(o => <Radio key={o} value={o} label={o} />)}
      </RadioGroup>
      <RadioGroup label="Who can see your playlists" error="Pick one to finish setting up your profile." required>
        {['Everyone', 'Followers only', 'Only me'].map(o => <Radio key={o} value={o} label={o} />)}
      </RadioGroup>
    </div>
}`,...y.parameters?.docs?.source},description:{story:'Figma demo "Invalid": `invalid` marks every radio; `error` also shows a message in place of the description.',...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
      gap: 16,
      alignContent: 'start'
    }}>
          <div style={caption}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          <div style={{
        display: 'flex',
        gap: 16
      }}>
            <Radio name={\`t-\${scheme}-1\`} value="a" aria-label={\`Unchecked (\${scheme})\`} />
            <Radio name={\`t-\${scheme}-2\`} value="a" aria-label={\`Checked (\${scheme})\`} defaultChecked />
            <Radio name={\`t-\${scheme}-3\`} value="a" aria-label={\`Invalid (\${scheme})\`} invalid />
            <Radio name={\`t-\${scheme}-4\`} value="a" aria-label={\`Disabled (\${scheme})\`} defaultChecked disabled />
          </div>
          <RadioGroup label="Billing period" defaultValue="yearly">
            {plans.slice(0, 2).map(p => <Radio key={p.value} card control="end" {...p} />)}
          </RadioGroup>
        </div>)}
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...b.parameters?.docs?.description}}}})))()}S();export{g as ChoiceCards,m as Field,v as Grid,y as Invalid,_ as List,u as Playground,b as Themes,p as Variants,x as __namedExportsOrder,c as default};