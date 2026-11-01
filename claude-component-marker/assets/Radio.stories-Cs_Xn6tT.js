import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-CuuctXxA.js";function r(e){let{label:t,caption:n,control:r=`start`,card:i=!1,className:c,invalid:l=!1,value:u,id:d,onChange:f,"aria-describedby":p,...m}=e,h=(0,a.useContext)(s),g=(0,a.useId)(),_=d??g,v=`${_}-caption`,y=(0,o.jsxs)(`span`,{className:t===void 0?[`ds-radio`,c].filter(Boolean).join(` `):`ds-radio`,children:[(0,o.jsx)(`input`,{name:h?.name,required:h?.required,checked:h&&h.value!==void 0?h.value===u:void 0,...m,id:_,type:`radio`,value:u,className:`ds-radio__input`,"aria-invalid":l||h?.invalid||void 0,"aria-describedby":[n===void 0?null:v,p,h?.describedBy].filter(Boolean).join(` `)||void 0,onChange:e=>{f?.(e),e.currentTarget.checked&&h?.select(u)}}),(0,o.jsx)(`span`,{className:`ds-radio__dot`,"aria-hidden":!0})]});return t===void 0?y:(0,o.jsxs)(`div`,{className:[`ds-field`,`ds-field--horizontal`,r===`end`&&`ds-field--control-end`,i&&`ds-field--card`,c].filter(Boolean).join(` `),children:[(0,o.jsx)(`span`,{className:`ds-field__control`,children:y}),(0,o.jsxs)(`div`,{className:`ds-field__content`,children:[(0,o.jsx)(`label`,{className:`ds-field__label`,htmlFor:_,children:t}),n!==void 0&&(0,o.jsx)(`p`,{id:v,className:`ds-field__caption`,children:n})]})]})}function i({label:e,caption:t,error:n,invalid:r=!1,value:i,defaultValue:c=null,onValueChange:l,name:u,required:d,columns:f,className:p,children:m,...h}){let g=(0,a.useId)(),[_,v]=(0,a.useState)(c),y=i===void 0?_:i,b=n!=null&&n!==!1,x=b?n:t,S=e=>{i===void 0&&v(e),l?.(e)},C=f!==void 0&&f>1;return(0,o.jsx)(s.Provider,{value:{name:u??g,value:y,select:S,invalid:r||b,required:d,describedBy:b?`${g}-caption`:void 0},children:(0,o.jsxs)(`fieldset`,{...h,className:[`ds-fieldset`,p].filter(Boolean).join(` `),"aria-describedby":x===void 0?void 0:`${g}-caption`,children:[(0,o.jsx)(`legend`,{className:`ds-fieldset__legend`,children:e}),x!==void 0&&(0,o.jsx)(`p`,{id:`${g}-caption`,className:b?`ds-field__caption ds-field__caption--error`:`ds-field__caption`,children:x}),(0,o.jsx)(`div`,{className:C?`ds-fieldset__fields ds-fieldset__fields--grid`:`ds-fieldset__fields`,style:C?{"--fieldset-columns":f}:void 0,children:m})]})})}var a,o,s;function c(){return(c=e((()=>{a=n(),o=t(),s=(0,a.createContext)(null),r.__docgenInfo={description:'Figma "Radio". Inside a RadioGroup, `checked` and `name` come from the group.',methods:[],displayName:`Radio`},i.__docgenInfo={description:`Figma "Radio Group": radios under a legend, 12 px apart; one of them can be checked.`,methods:[],displayName:`RadioGroup`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLFieldSetElement`}],raw:`Ref<HTMLFieldSetElement>`},description:``},label:{required:!0,tsType:{name:`ReactNode`},description:`Figma "Field Label" over the group: the fieldset's legend.`},caption:{required:!1,tsType:{name:`ReactNode`},description:`Figma Field "Description" under the legend.`},error:{required:!1,tsType:{name:`ReactNode`},description:`Figma State=Invalid ("Error"): the message replaces the description and marks every radio invalid.`},invalid:{required:!1,tsType:{name:`boolean`},description:`Figma State=Invalid without a message (the "Invalid" demo).`,defaultValue:{value:`false`,computed:!1}},value:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:"The checked radio's value (controlled); `null` checks none."},defaultValue:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``,defaultValue:{value:`null`,computed:!1}},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},name:{required:!1,tsType:{name:`string`},description:`Form field name shared by the radios (generated when left out).`},required:{required:!1,tsType:{name:`boolean`},description:`Requires a choice before the form submits.`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disables every radio (native fieldset).`},columns:{required:!1,tsType:{name:`number`},description:`Lays the radios out in this many columns (Figma's "Grid" demo); one column by default.`},children:{required:!0,tsType:{name:`ReactNode`},description:`The Radios.`}},composes:[`Omit`]}})))()}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{l=n(),c(),u=t(),d={title:`Components/Radio`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Radio** and **Radio Group** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=121-3)) on native `<input type=\"radio\">`s, with **Field** Orientation=Horizontal for `label` and `caption` (`control`: `start` · `end`) and **Choice Card** for `card`. `RadioGroup` is a fieldset that shares a name, the value and Invalid with its radios; the arrow keys move between them. Figma Checked = the group's `value`; State: Focus = keyboard focus, Disabled = `disabled`, Invalid = the group's `invalid` or `error`."}}}},f=[`Automatic`,`Low · 96 kbps`,`Normal · 160 kbps`,`High · 320 kbps`],p={args:{state:`Default`,control:`start`,card:!1,error:`Pick one to continue.`},argTypes:{state:{name:`State`,control:`inline-radio`,options:[`Default`,`Invalid`,`Disabled`],description:`Focus: press Tab`},control:{name:`Control`,control:`inline-radio`,options:[`start`,`end`]},card:{name:`Choice Card`},error:{name:`Error`,if:{arg:`state`,eq:`Invalid`}}},render:function({state:e,control:t,card:n,error:a}){let[o,s]=(0,l.useState)(`Normal · 160 kbps`);return(0,u.jsx)(`div`,{style:{width:360},children:(0,u.jsx)(i,{label:`Streaming quality`,caption:`Higher quality uses more data.`,value:o,onValueChange:s,error:e===`Invalid`?a:void 0,disabled:e===`Disabled`,children:f.map(e=>(0,u.jsx)(r,{value:e,label:e,control:t,card:n},e))})})}},m={fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},h=[`Default`,`Focus`,`Disabled`,`Invalid`],g={render:()=>(0,u.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`120px repeat(4, 64px)`,gap:16,alignItems:`center`,justifyItems:`center`},children:[(0,u.jsx)(`span`,{}),h.map(e=>(0,u.jsx)(`span`,{style:m,children:e},e)),[`False`,`True`].map(e=>(0,u.jsxs)(`div`,{style:{display:`contents`},children:[(0,u.jsxs)(`span`,{style:{...m,justifySelf:`start`},children:[`Checked=`,e]}),h.map(t=>(0,u.jsx)(r,{name:`${e}-${t}`,value:`x`,"aria-label":`Checked=${e}, ${t}`,defaultChecked:e===`True`,disabled:t===`Disabled`,invalid:t===`Invalid`},t))]},e))]})},_={render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 320px)`,gap:32},children:[`start`,`end`].map(e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:24,alignContent:`start`},children:[(0,u.jsxs)(`span`,{style:m,children:[`Control=`,e===`start`?`Start`:`End`]}),(0,u.jsx)(r,{name:`field-${e}-1`,value:`a`,control:e,label:`Label`,caption:`Description`}),(0,u.jsx)(r,{name:`field-${e}-2`,value:`a`,control:e,label:`Label`,caption:`Description`,invalid:!0}),(0,u.jsx)(r,{name:`field-${e}-3`,value:`a`,control:e,label:`Label`,caption:`Description`,disabled:!0})]},e))})},v=[{value:`monthly`,label:`Monthly`,caption:`$12 a month, cancel any time.`},{value:`yearly`,label:`Yearly`,caption:`$120 a year — two months free.`},{value:`lifetime`,label:`Lifetime`,caption:`$299 once, updates included.`}],y={render:()=>(0,u.jsx)(`div`,{style:{width:408},children:(0,u.jsx)(i,{label:`Billing period`,caption:`Change how often the plan renews.`,defaultValue:`yearly`,children:v.map(e=>(0,u.jsx)(r,{card:!0,control:`end`,...e},e.value))})})},b={render:()=>(0,u.jsx)(`div`,{style:{width:440},children:(0,u.jsxs)(i,{label:`Streaming quality`,caption:`Higher quality uses more data.`,defaultValue:`Normal · 160 kbps`,children:[f.map(e=>(0,u.jsx)(r,{value:e,label:e},e)),(0,u.jsx)(r,{value:`Lossless`,label:`Lossless`,disabled:!0})]})})},x={render:()=>(0,u.jsx)(`div`,{style:{width:440},children:(0,u.jsx)(i,{label:`Default landing page`,caption:`Where the app opens after you sign in.`,defaultValue:`search`,columns:2,children:[`Home`,`Search`,`Library`,`Downloads`,`Podcasts`,`Settings`].map(e=>(0,u.jsx)(r,{value:e.toLowerCase(),label:e},e))})})},S={render:()=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:32,width:440},children:[(0,u.jsx)(i,{label:`Who can see your playlists`,caption:`Pick one to finish setting up your profile.`,invalid:!0,children:[`Everyone`,`Followers only`,`Only me`].map(e=>(0,u.jsx)(r,{value:e,label:e},e))}),(0,u.jsx)(i,{label:`Who can see your playlists`,error:`Pick one to finish setting up your profile.`,required:!0,children:[`Everyone`,`Followers only`,`Only me`].map(e=>(0,u.jsx)(r,{value:e,label:e},e))})]})},C={parameters:{layout:`fullscreen`},render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,u.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,alignContent:`start`},children:[(0,u.jsx)(`div`,{style:m,children:e===`light`?`Light`:`Dark`}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,u.jsx)(r,{name:`t-${e}-1`,value:`a`,"aria-label":`Unchecked (${e})`}),(0,u.jsx)(r,{name:`t-${e}-2`,value:`a`,"aria-label":`Checked (${e})`,defaultChecked:!0}),(0,u.jsx)(r,{name:`t-${e}-3`,value:`a`,"aria-label":`Invalid (${e})`,invalid:!0}),(0,u.jsx)(r,{name:`t-${e}-4`,value:`a`,"aria-label":`Disabled (${e})`,defaultChecked:!0,disabled:!0})]}),(0,u.jsx)(i,{label:`Billing period`,defaultValue:`yearly`,children:v.slice(0,2).map(e=>(0,u.jsx)(r,{card:!0,control:`end`,...e},e.value))})]},e))})},w=[`Playground`,`Variants`,`Field`,`ChoiceCards`,`List`,`Grid`,`Invalid`,`Themes`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Figma "Radio": Checked × State. State=Focus is keyboard focus: press Tab to see it.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Figma "Field" Orientation=Horizontal with a Radio: Control (start, end) × State.`,..._.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 408
  }}>
      <RadioGroup label="Billing period" caption="Change how often the plan renews." defaultValue="yearly">
        {plans.map(p => <Radio key={p.value} card control="end" {...p} />)}
      </RadioGroup>
    </div>
}`,...y.parameters?.docs?.source},description:{story:`Figma demo "Radio Group": Choice Cards (the radio at the end), 8 px apart.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 440
  }}>
      <RadioGroup label="Streaming quality" caption="Higher quality uses more data." defaultValue="Normal · 160 kbps">
        {qualities.map(q => <Radio key={q} value={q} label={q} />)}
        <Radio value="Lossless" label="Lossless" disabled />
      </RadioGroup>
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Figma demo "List", with a disabled option.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 440
  }}>
      <RadioGroup label="Default landing page" caption="Where the app opens after you sign in." defaultValue="search" columns={2}>
        {['Home', 'Search', 'Library', 'Downloads', 'Podcasts', 'Settings'].map(page => <Radio key={page} value={page.toLowerCase()} label={page} />)}
      </RadioGroup>
    </div>
}`,...x.parameters?.docs?.source},description:{story:'Figma demo "Grid": `columns={2}`.',...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:'Figma demo "Invalid": `invalid` marks every radio; `error` also shows a message in place of the description.',...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...C.parameters?.docs?.description}}}})))()}T();export{y as ChoiceCards,_ as Field,x as Grid,S as Invalid,b as List,p as Playground,C as Themes,g as Variants,w as __namedExportsOrder,d as default};