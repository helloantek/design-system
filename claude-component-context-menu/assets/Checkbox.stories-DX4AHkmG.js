import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-B23VHTYX.js";function r(e){let{ref:t,label:n,caption:r,error:i,control:l=`start`,card:u=!1,className:d,indeterminate:f=!1,invalid:p=!1,onChange:m,onCheckedChange:h,id:g,"aria-describedby":_,...v}=e,y=(0,a.useId)(),b=g??y,x=`${b}-caption`,S=(0,a.useRef)(null),C=i!=null&&i!==!1,w=C?i:r;(0,a.useEffect)(()=>{S.current&&(S.current.indeterminate=f)},[f]);let T=e=>{S.current=e,typeof t==`function`?t(e):t&&(t.current=e)},E=(0,o.jsxs)(`span`,{className:n===void 0?[`ds-checkbox`,d].filter(Boolean).join(` `):`ds-checkbox`,children:[(0,o.jsx)(`input`,{...v,ref:T,id:b,type:`checkbox`,className:`ds-checkbox__input`,"aria-invalid":p||C||void 0,"aria-describedby":[w===void 0?null:x,_].filter(Boolean).join(` `)||void 0,onChange:e=>{m?.(e),h?.(e.currentTarget.checked)}}),s,c]});return n===void 0?E:(0,o.jsxs)(`div`,{className:[`ds-field`,`ds-field--horizontal`,l===`end`&&`ds-field--control-end`,u&&`ds-field--card`,d].filter(Boolean).join(` `),children:[(0,o.jsx)(`span`,{className:`ds-field__control`,children:E}),(0,o.jsxs)(`div`,{className:`ds-field__content`,children:[(0,o.jsx)(`label`,{className:`ds-field__label`,htmlFor:b,children:n}),w!==void 0&&(0,o.jsx)(`p`,{id:x,className:C?`ds-field__caption ds-field__caption--error`:`ds-field__caption`,children:w})]})]})}function i({label:e,caption:t,error:n,className:r,children:i,...s}){let c=(0,a.useId)(),l=n!=null&&n!==!1,u=l?n:t;return(0,o.jsxs)(`fieldset`,{...s,className:[`ds-fieldset`,r].filter(Boolean).join(` `),"aria-describedby":u===void 0?void 0:`${c}-caption`,children:[(0,o.jsx)(`legend`,{className:`ds-fieldset__legend`,children:e}),u!==void 0&&(0,o.jsx)(`p`,{id:`${c}-caption`,className:l?`ds-field__caption ds-field__caption--error`:`ds-field__caption`,children:u}),(0,o.jsx)(`div`,{className:`ds-fieldset__fields`,children:i})]})}var a,o,s,c;function l(){return(l=e((()=>{a=n(),o=t(),s=(0,o.jsx)(`svg`,{className:`ds-checkbox__check`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2.14,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:(0,o.jsx)(`path`,{d:`M20 6 9 17l-5-5`})}),c=(0,o.jsx)(`svg`,{className:`ds-checkbox__minus`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2.14,strokeLinecap:`round`,"aria-hidden":!0,children:(0,o.jsx)(`path`,{d:`M5 12h14`})}),r.__docgenInfo={description:``,methods:[],displayName:`Checkbox`},i.__docgenInfo={description:`Figma "Field Group": related checkboxes under a legend, 12 px apart.`,methods:[],displayName:`CheckboxGroup`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLFieldSetElement`}],raw:`Ref<HTMLFieldSetElement>`},description:``},label:{required:!0,tsType:{name:`ReactNode`},description:`Figma "Field Label" over the group: the fieldset's legend.`},caption:{required:!1,tsType:{name:`ReactNode`},description:`Figma Field "Description" under the legend.`},error:{required:!1,tsType:{name:`ReactNode`},description:`A message for the whole group (e.g. "Pick at least one"); replaces the description.`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disables every checkbox in the group (native fieldset).`},children:{required:!0,tsType:{name:`ReactNode`},description:`The Checkboxes.`}},composes:[`FieldsetHTMLAttributes`]}})))()}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{u=n(),l(),d=t(),f={title:`Components/Checkbox`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Checkbox** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=121-2)) on a native `<input type=\"checkbox\">`, with **Field** Orientation=Horizontal for `label`, `caption` and `error` (`control`: `start` · `end`; `card` for Figma's choice cards) and **Field Group** for `CheckboxGroup`. Figma Checked = `checked` / `defaultChecked`; State: Focus = keyboard focus, Disabled = `disabled`, Invalid = `invalid` or `error`. `indeterminate` draws the minus of Figma's demos. Without `label`, `aria-label` is required."}}}},p={args:{checked:!0,indeterminate:!1,state:`Default`,label:`Subscription renewal emails`,caption:`Send customers email receipts for subscription payments`,error:`This field is required.`,control:`start`},argTypes:{checked:{name:`Checked`},indeterminate:{description:`Not a Figma variant: the minus of the demos`},state:{name:`State`,control:`inline-radio`,options:[`Default`,`Invalid`,`Disabled`],description:`Focus: press Tab`},label:{name:`Field Label`,description:`Empty: a bare checkbox (aria-label)`},caption:{name:`Description`},error:{name:`Error`,if:{arg:`state`,eq:`Invalid`}},control:{name:`Control`,control:`inline-radio`,options:[`start`,`end`]}},render:function({checked:e,indeterminate:t,state:n,label:i,caption:a,error:o,control:s}){let[c,l]=(0,u.useState)(e),[f,p]=(0,u.useState)(t),[m,h]=(0,u.useState)({checked:e,indeterminate:t});(m.checked!==e||m.indeterminate!==t)&&(h({checked:e,indeterminate:t}),l(e),p(t));let g={checked:c,indeterminate:f,onCheckedChange:e=>{l(e),p(!1)},disabled:n===`Disabled`};return i?(0,d.jsx)(`div`,{style:{width:360},children:(0,d.jsx)(r,{...g,label:i,caption:a||void 0,error:n===`Invalid`?o:void 0,control:s})}):(0,d.jsx)(r,{...g,invalid:n===`Invalid`,"aria-label":`Checkbox`})}},m={fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},h=[`Default`,`Focus`,`Disabled`,`Invalid`],g={render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`120px repeat(4, 64px)`,gap:16,alignItems:`center`,justifyItems:`center`},children:[(0,d.jsx)(`span`,{}),h.map(e=>(0,d.jsx)(`span`,{style:m,children:e},e)),[`Checked=False`,`Checked=True`,`indeterminate`].map(e=>(0,d.jsxs)(`div`,{style:{display:`contents`},children:[(0,d.jsx)(`span`,{style:{...m,justifySelf:`start`},children:e}),h.map(t=>(0,d.jsx)(r,{"aria-label":`${e}, ${t}`,defaultChecked:e===`Checked=True`,indeterminate:e===`indeterminate`,disabled:t===`Disabled`,invalid:t===`Invalid`},t))]},e))]})},_={render:()=>(0,d.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 320px)`,gap:32},children:[`start`,`end`].map(e=>(0,d.jsxs)(`div`,{style:{display:`grid`,gap:24,alignContent:`start`},children:[(0,d.jsxs)(`span`,{style:m,children:[`Control=`,e===`start`?`Start`:`End`]}),(0,d.jsx)(r,{control:e,label:`Label`,caption:`Description`}),(0,d.jsx)(r,{control:e,label:`Label`,caption:`Description`,error:`This field is required.`}),(0,d.jsx)(r,{control:e,label:`Label`,caption:`Description`,disabled:!0})]},e))})},v={render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gap:20,width:440},children:[(0,d.jsx)(r,{label:`User onboarding emails`,caption:`Welcome new users with a guide to getting started`}),(0,d.jsx)(r,{label:`Subscription renewal emails`,caption:`Send customers email receipts for subscription payments`,defaultChecked:!0}),(0,d.jsx)(r,{label:`Product update notifications`,caption:`Inform users about the latest features and improvements`,disabled:!0})]})},y={render:()=>(0,d.jsx)(`div`,{style:{width:440},children:(0,d.jsxs)(i,{label:`Import from Tunely`,caption:`Choose what to bring over to your new library.`,children:[(0,d.jsx)(r,{label:`Playlists`}),(0,d.jsx)(r,{label:`Liked songs`,defaultChecked:!0}),(0,d.jsx)(r,{label:`Followed artists`}),(0,d.jsx)(r,{label:`Podcast subscriptions`}),(0,d.jsx)(r,{label:`Listening history`})]})})},b=[`Direct messages`,`Mentions`,`Comments on your posts`],x={render:function(){let[e,t]=(0,u.useState)([`Mentions`]),n=e.length===b.length;return(0,d.jsx)(`div`,{style:{width:408},children:(0,d.jsxs)(i,{label:`Deliver to`,children:[(0,d.jsx)(r,{label:`Push notifications`,caption:`Alerts on your phone and desktop.`,checked:n,indeterminate:e.length>0&&!n,onCheckedChange:()=>t(n?[]:b),"aria-controls":`push-channels`}),(0,d.jsx)(`div`,{id:`push-channels`,style:{display:`grid`,gap:12,paddingLeft:24},children:b.map(n=>(0,d.jsx)(r,{label:n,checked:e.includes(n),onCheckedChange:r=>t(r?[...e,n]:e.filter(e=>e!==n))},n))}),(0,d.jsx)(r,{label:`SMS alerts`,caption:`Available once a phone number is verified.`,disabled:!0})]})})}},S={render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gap:8,width:448},children:[(0,d.jsx)(r,{card:!0,label:`Extra storage`,caption:`Another 200 GB for photos and backups.`}),(0,d.jsx)(r,{card:!0,label:`Family sharing`,caption:`Share the plan with up to five people.`,defaultChecked:!0}),(0,d.jsx)(r,{card:!0,label:`Priority support`,caption:`Answers within an hour, day or night.`}),(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:8,marginTop:16},children:[(0,d.jsx)(r,{card:!0,label:`Email receipts`,caption:`A copy of every invoice in your inbox.`}),(0,d.jsx)(r,{card:!0,label:`Usage alerts`,caption:`A heads-up at 80% of your storage.`,defaultChecked:!0})]})]})},C={parameters:{layout:`fullscreen`},render:()=>(0,d.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,d.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,alignContent:`start`},children:[(0,d.jsx)(`div`,{style:m,children:e===`light`?`Light`:`Dark`}),(0,d.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,d.jsx)(r,{"aria-label":`Unchecked (${e})`}),(0,d.jsx)(r,{"aria-label":`Checked (${e})`,defaultChecked:!0}),(0,d.jsx)(r,{"aria-label":`Indeterminate (${e})`,indeterminate:!0}),(0,d.jsx)(r,{"aria-label":`Invalid (${e})`,invalid:!0}),(0,d.jsx)(r,{"aria-label":`Disabled (${e})`,defaultChecked:!0,disabled:!0})]}),(0,d.jsx)(r,{label:`Subscription renewal emails`,caption:`Send customers email receipts for subscription payments`,defaultChecked:!0}),(0,d.jsx)(r,{label:`Accept the terms`,error:`This field is required.`}),(0,d.jsx)(r,{card:!0,label:`Family sharing`,caption:`Share the plan with up to five people.`,defaultChecked:!0})]},e))})},w=[`Playground`,`Variants`,`Field`,`WithDescriptions`,`Group`,`Nested`,`ChoiceCards`,`Themes`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Figma "Checkbox": Checked × State, plus indeterminate. State=Focus is keyboard focus: press Tab to see it.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Figma "Field" Orientation=Horizontal: Control (start, end) × State (Default, Invalid, Disabled).`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 20,
    width: 440
  }}>
      <Checkbox label="User onboarding emails" caption="Welcome new users with a guide to getting started" />
      <Checkbox label="Subscription renewal emails" caption="Send customers email receipts for subscription payments" defaultChecked />
      <Checkbox label="Product update notifications" caption="Inform users about the latest features and improvements" disabled />
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Figma demo "Checkbox": fields with descriptions, 20 px apart.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Figma demo "Checkbox group": a fieldset with a legend and description.`,...y.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Figma demo "Nested": the parent is indeterminate while some children are checked; clicking it sets them all.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:'Figma demo "Choice cards": `card` puts the field in a bordered card, filled when checked; the whole card is clickable.',...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...C.parameters?.docs?.description}}}})))()}T();export{S as ChoiceCards,_ as Field,y as Group,x as Nested,p as Playground,C as Themes,g as Variants,v as WithDescriptions,w as __namedExportsOrder,f as default};