import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-D3dyT97Z.js";import{n as r,t as i}from"./Button-B-BuCCvh.js";function a(e){let{label:t,caption:n,error:r,invalid:i=!1,showCount:a=!1,limit:c,resizable:l=!1,className:u,id:d,"aria-describedby":f,onChange:p,...m}=e,h=(0,o.useId)(),g=d??h,_=`${g}-caption`,v=`${g}-count`,y=r!=null&&r!==!1,b=y?r:n,[x,S]=(0,o.useState)(String(m.defaultValue??``)),C=[...m.value===void 0?x:String(m.value)].length,w=c??m.maxLength,T=a&&w!==void 0,E=T?w-C:0,D=T&&E<0,O=y||i||D,k=(0,s.jsx)(`textarea`,{...m,id:g,className:[`ds-textarea`,l&&`ds-textarea--resize`].filter(Boolean).join(` `),"aria-invalid":O||void 0,"aria-describedby":[b===void 0?null:_,T?v:null,f].filter(Boolean).join(` `)||void 0,onChange:e=>{S(e.currentTarget.value),p?.(e)}}),A=T&&(0,s.jsxs)(`span`,{id:v,className:[`ds-field__addon`,`ds-textarea__count`,D&&`ds-textarea__count--over`].filter(Boolean).join(` `),children:[(0,s.jsx)(`span`,{"aria-hidden":!0,children:E}),(0,s.jsx)(`span`,{className:`ds-textarea__count-label`,children:D?`${-E} characters over the limit of ${w}`:`${E} of ${w} characters left`}),(0,s.jsxs)(`svg`,{className:`ds-textarea__progress`,viewBox:`0 0 16 16`,"aria-hidden":!0,children:[(0,s.jsx)(`circle`,{className:`ds-textarea__progress-track`,cx:`8`,cy:`8`,r:`6.8`}),(0,s.jsx)(`circle`,{className:`ds-textarea__progress-indicator`,cx:`8`,cy:`8`,r:`6.8`,pathLength:100,style:{"--textarea-progress":Math.min(100,C/w*100)}})]})]});return(0,s.jsxs)(`div`,{className:[`ds-field`,u].filter(Boolean).join(` `),children:[(t!==void 0||A)&&(0,s.jsxs)(`div`,{className:`ds-field__label-row`,children:[t!==void 0&&(0,s.jsx)(`label`,{className:`ds-field__label`,htmlFor:g,children:t}),A]}),k,b!==void 0&&(0,s.jsx)(`p`,{id:_,className:y?`ds-field__caption ds-field__caption--error`:`ds-field__caption`,children:b})]})}var o,s;function c(){return(c=e((()=>{o=n(),s=t(),a.__docgenInfo={description:`Figma "Textarea": a multi-line text field, 64 px tall at least, growing with its text.`,methods:[],displayName:`Textarea`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLTextAreaElement`}],raw:`Ref<HTMLTextAreaElement>`},description:``},label:{required:!1,tsType:{name:`ReactNode`},description:`Figma "Field Label". Rendered as a <label> tied to the textarea.`},caption:{required:!1,tsType:{name:`ReactNode`},description:`Figma Field "Description": help text under the textarea.`},error:{required:!1,tsType:{name:`ReactNode`},description:`Figma State=Invalid (Field "Error"): the message replaces the caption and marks the textarea invalid.`},invalid:{required:!1,tsType:{name:`boolean`},description:`Figma State=Invalid without a message.`},showCount:{required:!1,tsType:{name:`boolean`},description:'Figma "Character limit" demo: the characters left and a Progress circle in the label\'s trail add-on.\nNeeds `maxLength` (the browser stops typing at the limit) or `limit` (typing past it is allowed and turns red).'},limit:{required:!1,tsType:{name:`number`},description:"A soft limit for `showCount`: past it the count goes negative and red, and the textarea is marked invalid."},resizable:{required:!1,tsType:{name:`boolean`},description:`Lets the user drag the height (off by default: the box grows with its text, as in Figma).`},className:{required:!1,tsType:{name:`string`},description:`Class for the outer field element.`}},composes:[`TextareaHTMLAttributes`]}})))()}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{l=n(),r(),c(),u=t(),d={title:`Components/Textarea`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Textarea** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=99-2)) on a native `<textarea>`, in a **Field** for `label`, `caption` and `error`. The box is at least 64 px tall and grows with its text. `showCount` with `maxLength` (or a soft `limit`) adds the "Character limit" demo\'s count and Progress circle to the label. Figma Value = the value or the placeholder; State: Focus = focus, Disabled = `disabled`, Invalid = `error` or `invalid`.'}}}},f={args:{state:`Default`,label:`Summary`,caption:`Shown at the top of the release notes and in the changelog feed.`,error:`Write a short summary before publishing.`,placeholder:`What changed in this release and why?`,showCount:!1,maxLength:280},argTypes:{state:{name:`State`,control:`inline-radio`,options:[`Default`,`Invalid`,`Disabled`],description:`Focus: click or press Tab`},label:{name:`Field Label`},caption:{name:`Description`},error:{name:`Error`,if:{arg:`state`,eq:`Invalid`}},placeholder:{name:`Placeholder`},showCount:{name:`Character limit`},maxLength:{name:`Max length`,if:{arg:`showCount`}}},render:({state:e,label:t,caption:n,error:r,placeholder:i,showCount:o,maxLength:s})=>(0,u.jsx)(`div`,{style:{width:360},children:(0,u.jsx)(a,{label:t,caption:n,error:e===`Invalid`?r:void 0,disabled:e===`Disabled`,placeholder:i,showCount:o,maxLength:o?s:void 0})})},p={fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},m=[`Default`,`Focus`,`Disabled`,`Invalid`],h=`Adds a vertical orientation and keeps focus when the active tab is removed.`,g={render:()=>(0,u.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`120px repeat(4, 280px)`,gap:24,alignItems:`start`},children:[(0,u.jsx)(`span`,{}),m.map(e=>(0,u.jsx)(`span`,{style:p,children:e},e)),[`Placeholder`,`Filled`].map(e=>(0,u.jsxs)(`div`,{style:{display:`contents`},children:[(0,u.jsxs)(`span`,{style:p,children:[`Value=`,e]}),m.map(t=>(0,u.jsx)(a,{"aria-label":`${e}, ${t}`,placeholder:`Placeholder`,defaultValue:e===`Filled`?h:void 0,disabled:t===`Disabled`,invalid:t===`Invalid`},t))]},e))]})},_={render:()=>(0,u.jsx)(`div`,{style:{width:360},children:(0,u.jsx)(a,{label:`Summary`,placeholder:`What changed in this release and why?`,caption:`Shown at the top of the release notes and in the changelog feed.`})})},v={render:()=>(0,u.jsxs)(`form`,{style:{display:`grid`,gap:16,width:360,justifyItems:`center`,fontFamily:`var(--ds-font-sans)`},onSubmit:e=>e.preventDefault(),children:[(0,u.jsxs)(`div`,{style:{display:`grid`,gap:4,textAlign:`center`},children:[(0,u.jsx)(`h2`,{id:`feedback-title`,style:{margin:0,fontSize:16,lineHeight:`24px`,fontWeight:500,color:`var(--ds-foreground)`},children:`Send feedback`}),(0,u.jsx)(`p`,{id:`feedback-text`,style:{margin:0,fontSize:14,lineHeight:`20px`,color:`var(--ds-muted-foreground)`},children:`Tell us what felt confusing or what is missing — every message is read by the team.`})]}),(0,u.jsx)(a,{"aria-labelledby":`feedback-title`,"aria-describedby":`feedback-text`,placeholder:`I expected the export to include my archived projects…`}),(0,u.jsx)(i,{type:`submit`,children:`Send feedback`})]})},y={render:()=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:32,width:360},children:[(0,u.jsx)(a,{label:`Bio`,placeholder:`A couple of lines teammates will see on your profile`,invalid:!0}),(0,u.jsx)(a,{label:`Bio`,placeholder:`A couple of lines teammates will see on your profile`,error:`Add a couple of lines about yourself.`,required:!0})]})},b={render:()=>(0,u.jsx)(`div`,{style:{width:360},children:(0,u.jsx)(a,{label:`Internal notes`,placeholder:`Only workspace admins can edit this field`,disabled:!0})})},x={render:function(){let[e,t]=(0,l.useState)(`Just booked 24 hours in Lisbon for the autumn — real trams, real tiles, real pastries`);return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:32,width:360},children:[(0,u.jsx)(a,{label:`Post`,value:e,onChange:e=>t(e.target.value),maxLength:280,showCount:!0}),(0,u.jsx)(a,{label:`Tagline`,defaultValue:`Ship small, ship often, and keep the changelog honest.`,limit:48,showCount:!0,caption:`Keep it under 48 characters.`})]})}},S={render:()=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:32,width:360},children:[(0,u.jsx)(a,{label:`Grows with its text`,defaultValue:`${h}\n\nA second paragraph makes the box taller, and so does a third.\n\nThird.`}),(0,u.jsx)(a,{label:`Resizable`,placeholder:`Drag the corner`,resizable:!0})]})},C={parameters:{layout:`fullscreen`},render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,u.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:24,alignContent:`start`},children:[(0,u.jsx)(`div`,{style:p,children:e===`light`?`Light`:`Dark`}),(0,u.jsx)(a,{label:`Summary`,placeholder:`What changed in this release and why?`,caption:`Shown at the top of the release notes.`}),(0,u.jsx)(a,{label:`Post`,defaultValue:`Just booked 24 hours in Lisbon for the autumn — real trams, real tiles, real pastries`,maxLength:280,showCount:!0}),(0,u.jsx)(a,{label:`Bio`,placeholder:`A couple of lines teammates will see on your profile`,error:`Add a couple of lines about yourself.`}),(0,u.jsx)(a,{label:`Internal notes`,placeholder:`Only workspace admins can edit this field`,disabled:!0})]},e))})},w=[`Playground`,`Variants`,`Field`,`FeedbackForm`,`Invalid`,`Disabled`,`CharacterLimit`,`Growing`,`Themes`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'Default',
    label: 'Summary',
    caption: 'Shown at the top of the release notes and in the changelog feed.',
    error: 'Write a short summary before publishing.',
    placeholder: 'What changed in this release and why?',
    showCount: false,
    maxLength: 280
  },
  argTypes: {
    state: {
      name: 'State',
      control: 'inline-radio',
      options: ['Default', 'Invalid', 'Disabled'],
      description: 'Focus: click or press Tab'
    },
    label: {
      name: 'Field Label'
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
    placeholder: {
      name: 'Placeholder'
    },
    showCount: {
      name: 'Character limit'
    },
    maxLength: {
      name: 'Max length',
      if: {
        arg: 'showCount'
      }
    }
  },
  render: ({
    state,
    label,
    caption,
    error,
    placeholder,
    showCount,
    maxLength
  }) => <div style={{
    width: 360
  }}>
      <Textarea label={label} caption={caption} error={state === 'Invalid' ? error : undefined} disabled={state === 'Disabled'} placeholder={placeholder} showCount={showCount} maxLength={showCount ? maxLength : undefined} />
    </div>
}`,...f.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '120px repeat(4, 280px)',
    gap: 24,
    alignItems: 'start'
  }}>
      <span />
      {states.map(s => <span key={s} style={caption}>
          {s}
        </span>)}
      {(['Placeholder', 'Filled'] as const).map(value => <div key={value} style={{
      display: 'contents'
    }}>
          <span style={caption}>Value={value}</span>
          {states.map(s => <Textarea key={s} aria-label={\`\${value}, \${s}\`} placeholder="Placeholder" defaultValue={value === 'Filled' ? filled : undefined} disabled={s === 'Disabled'} invalid={s === 'Invalid'} />)}
        </div>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Figma "Textarea": Value × State. State=Focus is focus: click or press Tab to see it.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <Textarea label="Summary" placeholder="What changed in this release and why?" caption="Shown at the top of the release notes and in the changelog feed." />
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Figma demo "Textarea": a Field with a label and a description.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <form style={{
    display: 'grid',
    gap: 16,
    width: 360,
    justifyItems: 'center',
    fontFamily: 'var(--ds-font-sans)'
  }} onSubmit={e => e.preventDefault()}>
      <div style={{
      display: 'grid',
      gap: 4,
      textAlign: 'center'
    }}>
        <h2 id="feedback-title" style={{
        margin: 0,
        fontSize: 16,
        lineHeight: '24px',
        fontWeight: 500,
        color: 'var(--ds-foreground)'
      }}>
          Send feedback
        </h2>
        <p id="feedback-text" style={{
        margin: 0,
        fontSize: 14,
        lineHeight: '20px',
        color: 'var(--ds-muted-foreground)'
      }}>
          Tell us what felt confusing or what is missing — every message is read by the team.
        </p>
      </div>
      <Textarea aria-labelledby="feedback-title" aria-describedby="feedback-text" placeholder="I expected the export to include my archived projects…" />
      <Button type="submit">Send feedback</Button>
    </form>
}`,...v.parameters?.docs?.source},description:{story:`Figma demo "Feedback form": a textarea named by the heading above it, with a button.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 32,
    width: 360
  }}>
      <Textarea label="Bio" placeholder="A couple of lines teammates will see on your profile" invalid />
      <Textarea label="Bio" placeholder="A couple of lines teammates will see on your profile" error="Add a couple of lines about yourself." required />
    </div>
}`,...y.parameters?.docs?.source},description:{story:'Figma demo "Invalid": `invalid` marks it; `error` also shows a message in place of the description.',...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <Textarea label="Internal notes" placeholder="Only workspace admins can edit this field" disabled />
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Figma demo "Disabled".`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [post, setPost] = useState('Just booked 24 hours in Lisbon for the autumn — real trams, real tiles, real pastries');
    return <div style={{
      display: 'grid',
      gap: 32,
      width: 360
    }}>
        <Textarea label="Post" value={post} onChange={e => setPost(e.target.value)} maxLength={280} showCount />
        <Textarea label="Tagline" defaultValue="Ship small, ship often, and keep the changelog honest." limit={48} showCount caption="Keep it under 48 characters." />
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:'Figma demo "Character limit": the characters left and a Progress circle in the label; `limit` lets typing go over.',...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 32,
    width: 360
  }}>
      <Textarea label="Grows with its text" defaultValue={\`\${filled}\\n\\nA second paragraph makes the box taller, and so does a third.\\n\\nThird.\`} />
      <Textarea label="Resizable" placeholder="Drag the corner" resizable />
    </div>
}`,...S.parameters?.docs?.source},description:{story:"The box grows with its text; `resizable` adds a drag handle.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
      gap: 24,
      alignContent: 'start'
    }}>
          <div style={caption}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          <Textarea label="Summary" placeholder="What changed in this release and why?" caption="Shown at the top of the release notes." />
          <Textarea label="Post" defaultValue="Just booked 24 hours in Lisbon for the autumn — real trams, real tiles, real pastries" maxLength={280} showCount />
          <Textarea label="Bio" placeholder="A couple of lines teammates will see on your profile" error="Add a couple of lines about yourself." />
          <Textarea label="Internal notes" placeholder="Only workspace admins can edit this field" disabled />
        </div>)}
    </div>
}`,...C.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...C.parameters?.docs?.description}}}})))()}T();export{x as CharacterLimit,b as Disabled,v as FeedbackForm,_ as Field,S as Growing,y as Invalid,f as Playground,C as Themes,g as Variants,w as __namedExportsOrder,d as default};