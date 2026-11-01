import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BGJ9go0F.js";import{n as r,r as i,t as a}from"./Checkbox-BKXDY4Dt.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{o=n(),i(),s=t(),c={title:`Components/Checkbox`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Checkbox** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=121-2)) on a native `<input type=\"checkbox\">`, with **Field** Orientation=Horizontal for `label`, `caption` and `error` (`control`: `start` · `end`; `card` for Figma's choice cards) and **Field Group** for `CheckboxGroup`. Figma Checked = `checked` / `defaultChecked`; State: Focus = keyboard focus, Disabled = `disabled`, Invalid = `invalid` or `error`. `indeterminate` draws the minus of Figma's demos. Without `label`, `aria-label` is required."}}}},l={args:{checked:!0,indeterminate:!1,state:`Default`,label:`Subscription renewal emails`,caption:`Send customers email receipts for subscription payments`,error:`This field is required.`,control:`start`},argTypes:{checked:{name:`Checked`},indeterminate:{description:`Not a Figma variant: the minus of the demos`},state:{name:`State`,control:`inline-radio`,options:[`Default`,`Invalid`,`Disabled`],description:`Focus: press Tab`},label:{name:`Field Label`,description:`Empty: a bare checkbox (aria-label)`},caption:{name:`Description`},error:{name:`Error`,if:{arg:`state`,eq:`Invalid`}},control:{name:`Control`,control:`inline-radio`,options:[`start`,`end`]}},render:function({checked:e,indeterminate:t,state:n,label:r,caption:i,error:c,control:l}){let[u,d]=(0,o.useState)(e),[f,p]=(0,o.useState)(t),[m,h]=(0,o.useState)({checked:e,indeterminate:t});(m.checked!==e||m.indeterminate!==t)&&(h({checked:e,indeterminate:t}),d(e),p(t));let g={checked:u,indeterminate:f,onCheckedChange:e=>{d(e),p(!1)},disabled:n===`Disabled`};return r?(0,s.jsx)(`div`,{style:{width:360},children:(0,s.jsx)(a,{...g,label:r,caption:i||void 0,error:n===`Invalid`?c:void 0,control:l})}):(0,s.jsx)(a,{...g,invalid:n===`Invalid`,"aria-label":`Checkbox`})}},u={fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},d=[`Default`,`Focus`,`Disabled`,`Invalid`],f={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`120px repeat(4, 64px)`,gap:16,alignItems:`center`,justifyItems:`center`},children:[(0,s.jsx)(`span`,{}),d.map(e=>(0,s.jsx)(`span`,{style:u,children:e},e)),[`Checked=False`,`Checked=True`,`indeterminate`].map(e=>(0,s.jsxs)(`div`,{style:{display:`contents`},children:[(0,s.jsx)(`span`,{style:{...u,justifySelf:`start`},children:e}),d.map(t=>(0,s.jsx)(a,{"aria-label":`${e}, ${t}`,defaultChecked:e===`Checked=True`,indeterminate:e===`indeterminate`,disabled:t===`Disabled`,invalid:t===`Invalid`},t))]},e))]})},p={render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 320px)`,gap:32},children:[`start`,`end`].map(e=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:24,alignContent:`start`},children:[(0,s.jsxs)(`span`,{style:u,children:[`Control=`,e===`start`?`Start`:`End`]}),(0,s.jsx)(a,{control:e,label:`Label`,caption:`Description`}),(0,s.jsx)(a,{control:e,label:`Label`,caption:`Description`,error:`This field is required.`}),(0,s.jsx)(a,{control:e,label:`Label`,caption:`Description`,disabled:!0})]},e))})},m={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:20,width:440},children:[(0,s.jsx)(a,{label:`User onboarding emails`,caption:`Welcome new users with a guide to getting started`}),(0,s.jsx)(a,{label:`Subscription renewal emails`,caption:`Send customers email receipts for subscription payments`,defaultChecked:!0}),(0,s.jsx)(a,{label:`Product update notifications`,caption:`Inform users about the latest features and improvements`,disabled:!0})]})},h={render:()=>(0,s.jsx)(`div`,{style:{width:440},children:(0,s.jsxs)(r,{label:`Import from Tunely`,caption:`Choose what to bring over to your new library.`,children:[(0,s.jsx)(a,{label:`Playlists`}),(0,s.jsx)(a,{label:`Liked songs`,defaultChecked:!0}),(0,s.jsx)(a,{label:`Followed artists`}),(0,s.jsx)(a,{label:`Podcast subscriptions`}),(0,s.jsx)(a,{label:`Listening history`})]})})},g=[`Direct messages`,`Mentions`,`Comments on your posts`],_={render:function(){let[e,t]=(0,o.useState)([`Mentions`]),n=e.length===g.length;return(0,s.jsx)(`div`,{style:{width:408},children:(0,s.jsxs)(r,{label:`Deliver to`,children:[(0,s.jsx)(a,{label:`Push notifications`,caption:`Alerts on your phone and desktop.`,checked:n,indeterminate:e.length>0&&!n,onCheckedChange:()=>t(n?[]:g),"aria-controls":`push-channels`}),(0,s.jsx)(`div`,{id:`push-channels`,style:{display:`grid`,gap:12,paddingLeft:24},children:g.map(n=>(0,s.jsx)(a,{label:n,checked:e.includes(n),onCheckedChange:r=>t(r?[...e,n]:e.filter(e=>e!==n))},n))}),(0,s.jsx)(a,{label:`SMS alerts`,caption:`Available once a phone number is verified.`,disabled:!0})]})})}},v={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:8,width:448},children:[(0,s.jsx)(a,{card:!0,label:`Extra storage`,caption:`Another 200 GB for photos and backups.`}),(0,s.jsx)(a,{card:!0,label:`Family sharing`,caption:`Share the plan with up to five people.`,defaultChecked:!0}),(0,s.jsx)(a,{card:!0,label:`Priority support`,caption:`Answers within an hour, day or night.`}),(0,s.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:8,marginTop:16},children:[(0,s.jsx)(a,{card:!0,label:`Email receipts`,caption:`A copy of every invoice in your inbox.`}),(0,s.jsx)(a,{card:!0,label:`Usage alerts`,caption:`A heads-up at 80% of your storage.`,defaultChecked:!0})]})]})},y={parameters:{layout:`fullscreen`},render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,s.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,alignContent:`start`},children:[(0,s.jsx)(`div`,{style:u,children:e===`light`?`Light`:`Dark`}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,s.jsx)(a,{"aria-label":`Unchecked (${e})`}),(0,s.jsx)(a,{"aria-label":`Checked (${e})`,defaultChecked:!0}),(0,s.jsx)(a,{"aria-label":`Indeterminate (${e})`,indeterminate:!0}),(0,s.jsx)(a,{"aria-label":`Invalid (${e})`,invalid:!0}),(0,s.jsx)(a,{"aria-label":`Disabled (${e})`,defaultChecked:!0,disabled:!0})]}),(0,s.jsx)(a,{label:`Subscription renewal emails`,caption:`Send customers email receipts for subscription payments`,defaultChecked:!0}),(0,s.jsx)(a,{label:`Accept the terms`,error:`This field is required.`}),(0,s.jsx)(a,{card:!0,label:`Family sharing`,caption:`Share the plan with up to five people.`,defaultChecked:!0})]},e))})},b=[`Playground`,`Variants`,`Field`,`WithDescriptions`,`Group`,`Nested`,`ChoiceCards`,`Themes`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    indeterminate: false,
    state: 'Default',
    label: 'Subscription renewal emails',
    caption: 'Send customers email receipts for subscription payments',
    error: 'This field is required.',
    control: 'start'
  },
  argTypes: {
    checked: {
      name: 'Checked'
    },
    indeterminate: {
      description: 'Not a Figma variant: the minus of the demos'
    },
    state: {
      name: 'State',
      control: 'inline-radio',
      options: ['Default', 'Invalid', 'Disabled'],
      description: 'Focus: press Tab'
    },
    label: {
      name: 'Field Label',
      description: 'Empty: a bare checkbox (aria-label)'
    },
    caption: {
      name: 'Description'
    },
    error: {
      name: 'Error',
      if: {
        arg: 'state',
        eq: 'Invalid'
      }
    },
    control: {
      name: 'Control',
      control: 'inline-radio',
      options: ['start', 'end']
    }
  },
  render: function Render({
    checked,
    indeterminate,
    state,
    label,
    caption,
    error,
    control
  }) {
    const [value, setValue] = useState(checked);
    const [mixed, setMixed] = useState(indeterminate);
    const [prev, setPrev] = useState({
      checked,
      indeterminate
    });
    if (prev.checked !== checked || prev.indeterminate !== indeterminate) {
      setPrev({
        checked,
        indeterminate
      });
      setValue(checked);
      setMixed(indeterminate);
    }
    const common = {
      checked: value,
      indeterminate: mixed,
      onCheckedChange: (next: boolean) => {
        setValue(next);
        setMixed(false);
      },
      disabled: state === 'Disabled'
    };
    return label ? <div style={{
      width: 360
    }}>
        <Checkbox {...common} label={label} caption={caption || undefined} error={state === 'Invalid' ? error : undefined} control={control} />
      </div> : <Checkbox {...common} invalid={state === 'Invalid'} aria-label="Checkbox" />;
  }
}`,...l.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
      {(['Checked=False', 'Checked=True', 'indeterminate'] as const).map(row => <div key={row} style={{
      display: 'contents'
    }}>
          <span style={{
        ...caption,
        justifySelf: 'start'
      }}>{row}</span>
          {states.map(s => <Checkbox key={s} aria-label={\`\${row}, \${s}\`} defaultChecked={row === 'Checked=True'} indeterminate={row === 'indeterminate'} disabled={s === 'Disabled'} invalid={s === 'Invalid'} />)}
        </div>)}
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Figma "Checkbox": Checked × State, plus indeterminate. State=Focus is keyboard focus: press Tab to see it.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
          <Checkbox control={control} label="Label" caption="Description" />
          <Checkbox control={control} label="Label" caption="Description" error="This field is required." />
          <Checkbox control={control} label="Label" caption="Description" disabled />
        </div>)}
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Figma "Field" Orientation=Horizontal: Control (start, end) × State (Default, Invalid, Disabled).`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 20,
    width: 440
  }}>
      <Checkbox label="User onboarding emails" caption="Welcome new users with a guide to getting started" />
      <Checkbox label="Subscription renewal emails" caption="Send customers email receipts for subscription payments" defaultChecked />
      <Checkbox label="Product update notifications" caption="Inform users about the latest features and improvements" disabled />
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Figma demo "Checkbox": fields with descriptions, 20 px apart.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 440
  }}>
      <CheckboxGroup label="Import from Tunely" caption="Choose what to bring over to your new library.">
        <Checkbox label="Playlists" />
        <Checkbox label="Liked songs" defaultChecked />
        <Checkbox label="Followed artists" />
        <Checkbox label="Podcast subscriptions" />
        <Checkbox label="Listening history" />
      </CheckboxGroup>
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Figma demo "Checkbox group": a fieldset with a legend and description.`,...h.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [on, setOn] = useState<string[]>(['Mentions']);
    const all = on.length === channels.length;
    return <div style={{
      width: 408
    }}>
        <CheckboxGroup label="Deliver to">
          <Checkbox label="Push notifications" caption="Alerts on your phone and desktop." checked={all} indeterminate={on.length > 0 && !all} onCheckedChange={() => setOn(all ? [] : channels)} aria-controls="push-channels" />
          <div id="push-channels" style={{
          display: 'grid',
          gap: 12,
          paddingLeft: 24
        }}>
            {channels.map(c => <Checkbox key={c} label={c} checked={on.includes(c)} onCheckedChange={v => setOn(v ? [...on, c] : on.filter(x => x !== c))} />)}
          </div>
          <Checkbox label="SMS alerts" caption="Available once a phone number is verified." disabled />
        </CheckboxGroup>
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:`Figma demo "Nested": the parent is indeterminate while some children are checked; clicking it sets them all.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 8,
    width: 448
  }}>
      <Checkbox card label="Extra storage" caption="Another 200 GB for photos and backups." />
      <Checkbox card label="Family sharing" caption="Share the plan with up to five people." defaultChecked />
      <Checkbox card label="Priority support" caption="Answers within an hour, day or night." />
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      marginTop: 16
    }}>
        <Checkbox card label="Email receipts" caption="A copy of every invoice in your inbox." />
        <Checkbox card label="Usage alerts" caption="A heads-up at 80% of your storage." defaultChecked />
      </div>
    </div>
}`,...v.parameters?.docs?.source},description:{story:'Figma demo "Choice cards": `card` puts the field in a bordered card, filled when checked; the whole card is clickable.',...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
            <Checkbox aria-label={\`Unchecked (\${scheme})\`} />
            <Checkbox aria-label={\`Checked (\${scheme})\`} defaultChecked />
            <Checkbox aria-label={\`Indeterminate (\${scheme})\`} indeterminate />
            <Checkbox aria-label={\`Invalid (\${scheme})\`} invalid />
            <Checkbox aria-label={\`Disabled (\${scheme})\`} defaultChecked disabled />
          </div>
          <Checkbox label="Subscription renewal emails" caption="Send customers email receipts for subscription payments" defaultChecked />
          <Checkbox label="Accept the terms" error="This field is required." />
          <Checkbox card label="Family sharing" caption="Share the plan with up to five people." defaultChecked />
        </div>)}
    </div>
}`,...y.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...y.parameters?.docs?.description}}}})))()}x();export{v as ChoiceCards,p as Field,h as Group,_ as Nested,l as Playground,y as Themes,f as Variants,m as WithDescriptions,b as __namedExportsOrder,c as default};