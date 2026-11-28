import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-B7gKgDlE.js";import{n as r,t as i}from"./Button-CNqA7MFl.js";import{n as a,t as o}from"./Textarea-C0dlWIHs.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{s=n(),r(),a(),c=t(),l={title:`Components/Textarea`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Textarea** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=99-2)) on a native `<textarea>`, in a **Field** for `label`, `caption` and `error`. The box is at least 64 px tall and grows with its text. `showCount` with `maxLength` (or a soft `limit`) adds the "Character limit" demo\'s count and Progress circle to the label. Figma Value = the value or the placeholder; State: Focus = focus, Disabled = `disabled`, Invalid = `error` or `invalid`.'}}}},u={args:{variant:`default`,state:`Default`,label:`Summary`,caption:`Shown at the top of the release notes and in the changelog feed.`,error:`Write a short summary before publishing.`,placeholder:`What changed in this release and why?`,showCount:!1,maxLength:280},argTypes:{variant:{name:`Style`,control:`inline-radio`,options:[`default`,`shadow`,`soft`],description:`As Input and Select`},state:{name:`State`,control:`inline-radio`,options:[`Default`,`Invalid`,`Disabled`],description:`Focus: click or press Tab`},label:{name:`Field Label`},caption:{name:`Description`},error:{name:`Error`,if:{arg:`state`,eq:`Invalid`}},placeholder:{name:`Placeholder`},showCount:{name:`Character limit`},maxLength:{name:`Max length`,if:{arg:`showCount`}}},render:({variant:e,state:t,label:n,caption:r,error:i,placeholder:a,showCount:s,maxLength:l})=>(0,c.jsx)(`div`,{style:{width:360},children:(0,c.jsx)(o,{variant:e,label:n,caption:r,error:t===`Invalid`?i:void 0,disabled:t===`Disabled`,placeholder:a,showCount:s,maxLength:s?l:void 0})})},d={fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},f=[`Default`,`Focus`,`Disabled`,`Invalid`],p=`Adds a vertical orientation and keeps focus when the active tab is removed.`,m={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`120px repeat(4, 280px)`,gap:24,alignItems:`start`},children:[(0,c.jsx)(`span`,{}),f.map(e=>(0,c.jsx)(`span`,{style:d,children:e},e)),[`Placeholder`,`Filled`].map(e=>(0,c.jsxs)(`div`,{style:{display:`contents`},children:[(0,c.jsxs)(`span`,{style:d,children:[`Value=`,e]}),f.map(t=>(0,c.jsx)(o,{"aria-label":`${e}, ${t}`,placeholder:`Placeholder`,defaultValue:e===`Filled`?p:void 0,disabled:t===`Disabled`,invalid:t===`Invalid`},t))]},e))]})},h={render:()=>(0,c.jsx)(`div`,{style:{width:360},children:(0,c.jsx)(o,{label:`Summary`,placeholder:`What changed in this release and why?`,caption:`Shown at the top of the release notes and in the changelog feed.`})})},g={render:()=>(0,c.jsxs)(`form`,{style:{display:`grid`,gap:16,width:360,justifyItems:`center`,fontFamily:`var(--ds-font-sans)`},onSubmit:e=>e.preventDefault(),children:[(0,c.jsxs)(`div`,{style:{display:`grid`,gap:4,textAlign:`center`},children:[(0,c.jsx)(`h2`,{id:`feedback-title`,style:{margin:0,fontSize:16,lineHeight:`24px`,fontWeight:500,color:`var(--ds-foreground)`},children:`Send feedback`}),(0,c.jsx)(`p`,{id:`feedback-text`,style:{margin:0,fontSize:14,lineHeight:`20px`,color:`var(--ds-muted-foreground)`},children:`Tell us what felt confusing or what is missing — every message is read by the team.`})]}),(0,c.jsx)(o,{"aria-labelledby":`feedback-title`,"aria-describedby":`feedback-text`,placeholder:`I expected the export to include my archived projects…`}),(0,c.jsx)(i,{type:`submit`,children:`Send feedback`})]})},_={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:32,width:360},children:[(0,c.jsx)(o,{label:`Bio`,placeholder:`A couple of lines teammates will see on your profile`,invalid:!0}),(0,c.jsx)(o,{label:`Bio`,placeholder:`A couple of lines teammates will see on your profile`,error:`Add a couple of lines about yourself.`,required:!0})]})},v={render:()=>(0,c.jsx)(`div`,{style:{width:360},children:(0,c.jsx)(o,{label:`Internal notes`,placeholder:`Only workspace admins can edit this field`,disabled:!0})})},y={render:function(){let[e,t]=(0,s.useState)(`Just booked 24 hours in Lisbon for the autumn — real trams, real tiles, real pastries`);return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:32,width:360},children:[(0,c.jsx)(o,{label:`Post`,value:e,onChange:e=>t(e.target.value),maxLength:280,showCount:!0}),(0,c.jsx)(o,{label:`Tagline`,defaultValue:`Ship small, ship often, and keep the changelog honest.`,limit:48,showCount:!0,caption:`Keep it under 48 characters.`})]})}},b={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:32,width:360},children:[(0,c.jsx)(o,{label:`Grows with its text`,defaultValue:`${p}\n\nA second paragraph makes the box taller, and so does a third.\n\nThird.`}),(0,c.jsx)(o,{label:`Resizable`,placeholder:`Drag the corner`,resizable:!0})]})},x={parameters:{layout:`fullscreen`},render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,c.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:24,alignContent:`start`},children:[(0,c.jsx)(`div`,{style:d,children:e===`light`?`Light`:`Dark`}),(0,c.jsx)(o,{label:`Summary`,placeholder:`What changed in this release and why?`,caption:`Shown at the top of the release notes.`}),(0,c.jsx)(o,{label:`Post`,defaultValue:`Just booked 24 hours in Lisbon for the autumn — real trams, real tiles, real pastries`,maxLength:280,showCount:!0}),(0,c.jsx)(o,{label:`Bio`,placeholder:`A couple of lines teammates will see on your profile`,error:`Add a couple of lines about yourself.`}),(0,c.jsx)(o,{label:`Internal notes`,placeholder:`Only workspace admins can edit this field`,disabled:!0})]},e))})},S={render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 280px)`,gap:16},children:[`default`,`shadow`,`soft`].map(e=>(0,c.jsx)(o,{variant:e,label:e,caption:`Caption text`,placeholder:`What changed in this release and why?`},e))})},C=[`Playground`,`Variants`,`Field`,`FeedbackForm`,`Invalid`,`Disabled`,`CharacterLimit`,`Growing`,`Themes`,`Styles`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    state: 'Default',
    label: 'Summary',
    caption: 'Shown at the top of the release notes and in the changelog feed.',
    error: 'Write a short summary before publishing.',
    placeholder: 'What changed in this release and why?',
    showCount: false,
    maxLength: 280
  },
  argTypes: {
    variant: {
      name: 'Style',
      control: 'inline-radio',
      options: ['default', 'shadow', 'soft'],
      description: 'As Input and Select'
    },
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
    variant,
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
      <Textarea variant={variant} label={label} caption={caption} error={state === 'Invalid' ? error : undefined} disabled={state === 'Disabled'} placeholder={placeholder} showCount={showCount} maxLength={showCount ? maxLength : undefined} />
    </div>
}`,...u.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Figma "Textarea": Value × State. State=Focus is focus: click or press Tab to see it.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <Textarea label="Summary" placeholder="What changed in this release and why?" caption="Shown at the top of the release notes and in the changelog feed." />
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Figma demo "Textarea": a Field with a label and a description.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Figma demo "Feedback form": a textarea named by the heading above it, with a button.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 32,
    width: 360
  }}>
      <Textarea label="Bio" placeholder="A couple of lines teammates will see on your profile" invalid />
      <Textarea label="Bio" placeholder="A couple of lines teammates will see on your profile" error="Add a couple of lines about yourself." required />
    </div>
}`,..._.parameters?.docs?.source},description:{story:'Figma demo "Invalid": `invalid` marks it; `error` also shows a message in place of the description.',..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <Textarea label="Internal notes" placeholder="Only workspace admins can edit this field" disabled />
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Figma demo "Disabled".`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:'Figma demo "Character limit": the characters left and a Progress circle in the label; `limit` lets typing go over.',...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 32,
    width: 360
  }}>
      <Textarea label="Grows with its text" defaultValue={\`\${filled}\\n\\nA second paragraph makes the box taller, and so does a third.\\n\\nThird.\`} />
      <Textarea label="Resizable" placeholder="Drag the corner" resizable />
    </div>
}`,...b.parameters?.docs?.source},description:{story:"The box grows with its text; `resizable` adds a drag handle.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 280px)',
    gap: 16
  }}>
      {(['default', 'shadow', 'soft'] as const).map(variant => <Textarea key={variant} variant={variant} label={variant} caption="Caption text" placeholder="What changed in this release and why?" />)}
    </div>
}`,...S.parameters?.docs?.source},description:{story:`Style, as Input and Select: default (the Sort UI 2.0 field), shadow (+ Shadow/xs) and soft (borderless, tinted).`,...S.parameters?.docs?.description}}}})))()}w();export{y as CharacterLimit,v as Disabled,g as FeedbackForm,h as Field,b as Growing,_ as Invalid,u as Playground,S as Styles,x as Themes,m as Variants,C as __namedExportsOrder,l as default};