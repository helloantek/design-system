import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-CMaucr84.js";import{n as r,r as i}from"./Checkbox-C0TsSliV.js";function a(e){let{label:t,caption:n,error:r,control:i=`end`,card:a=!1,size:o=`default`,className:l,invalid:u=!1,onChange:d,onCheckedChange:f,id:p,"aria-describedby":m,...h}=e,g=(0,s.useId)(),_=p??g,v=`${_}-caption`,y=r!=null&&r!==!1,b=y?r:n,x=(0,c.jsxs)(`span`,{className:[`ds-switch`,o===`sm`&&`ds-switch--sm`,t===void 0&&l].filter(Boolean).join(` `),children:[(0,c.jsx)(`input`,{...h,id:_,type:`checkbox`,role:`switch`,className:`ds-switch__input`,"aria-invalid":u||y||void 0,"aria-describedby":[b===void 0?null:v,m].filter(Boolean).join(` `)||void 0,onChange:e=>{d?.(e),f?.(e.currentTarget.checked)}}),(0,c.jsx)(`span`,{className:`ds-switch__thumb`,"aria-hidden":!0})]});return t===void 0?x:(0,c.jsxs)(`div`,{className:[`ds-field`,`ds-field--horizontal`,i===`end`&&`ds-field--control-end`,a&&`ds-field--card`,l].filter(Boolean).join(` `),children:[(0,c.jsx)(`span`,{className:`ds-field__control`,children:x}),(0,c.jsxs)(`div`,{className:`ds-field__content`,children:[(0,c.jsx)(`label`,{className:`ds-field__label`,htmlFor:_,children:t}),b!==void 0&&(0,c.jsx)(`p`,{id:v,className:y?`ds-field__caption ds-field__caption--error`:`ds-field__caption`,children:b})]})]})}function o(e){return(0,c.jsx)(r,{...e})}var s,c;function l(){return(l=e((()=>{s=n(),i(),c=t(),a.__docgenInfo={description:`Figma "Switch": turns a setting on or off at once (use a Checkbox for choices sent with a form).`,methods:[],displayName:`Switch`},o.__docgenInfo={description:`Figma "Field Group" of switches (the "Switch" demo's Collections): a fieldset with a legend, switches 12 px apart.`,methods:[],displayName:`SwitchGroup`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLFieldSetElement`}],raw:`Ref<HTMLFieldSetElement>`},description:``},label:{required:!0,tsType:{name:`ReactNode`},description:`Figma "Field Label" over the group: the fieldset's legend.`},caption:{required:!1,tsType:{name:`ReactNode`},description:`Figma Field "Description" under the legend.`},error:{required:!1,tsType:{name:`ReactNode`},description:`A message for the whole group (e.g. "Pick at least one"); replaces the description.`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disables every checkbox in the group (native fieldset).`},children:{required:!0,tsType:{name:`ReactNode`},description:`The Checkboxes.`}},composes:[`FieldsetHTMLAttributes`]}})))()}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{u=n(),l(),d=t(),f={title:`Components/Switch`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Switch** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=121-4)) on a native checkbox with `role="switch"`, with **Field** Orientation=Horizontal for `label` and `caption` (the switch at the `end`, as in every demo) and the choice card for `card`. Figma Size = `size` (`default` · `sm`), Checked = `checked` / `defaultChecked`; State: Focus = keyboard focus, Disabled = `disabled`, Invalid = `invalid` or `error`. A switch acts at once; use a Checkbox for choices sent with a form.'}}}},p={args:{size:`default`,state:`Default`,control:`end`,card:!1,label:`Download over Wi-Fi only`,caption:`Cellular data is never used for downloads.`,error:`Turn it on to keep the role.`},argTypes:{size:{name:`Size`,control:`inline-radio`,options:[`default`,`sm`]},state:{name:`State`,control:`inline-radio`,options:[`Default`,`Invalid`,`Disabled`],description:`Focus: press Tab`},control:{name:`Control`,control:`inline-radio`,options:[`start`,`end`]},card:{name:`Choice Card`},label:{name:`Field Label`},caption:{name:`Description`},error:{name:`Error`,if:{arg:`state`,eq:`Invalid`}}},render:({size:e,state:t,control:n,card:r,label:i,caption:o,error:s})=>(0,d.jsx)(`div`,{style:{width:400},children:(0,d.jsx)(a,{size:e,label:i,caption:o,control:n,card:r,error:t===`Invalid`?s:void 0,disabled:t===`Disabled`,defaultChecked:!0})})},m={fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},h=[`Default`,`Focus`,`Disabled`,`Invalid`],g={render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`160px repeat(4, 64px)`,gap:16,alignItems:`center`,justifyItems:`center`},children:[(0,d.jsx)(`span`,{}),h.map(e=>(0,d.jsx)(`span`,{style:m,children:e},e)),[`default`,`sm`].map(e=>[`False`,`True`].map(t=>(0,d.jsxs)(`div`,{style:{display:`contents`},children:[(0,d.jsxs)(`span`,{style:{...m,justifySelf:`start`},children:[`Size=`,e,`, Checked=`,t]}),h.map(n=>(0,d.jsx)(a,{size:e,"aria-label":`Size=${e}, Checked=${t}, ${n}`,defaultChecked:t===`True`,disabled:n===`Disabled`,invalid:n===`Invalid`},n))]},`${e}-${t}`)))]})},_={boxSizing:`border-box`,display:`grid`,gap:20,width:448,padding:20,borderRadius:14,background:`var(--ds-card, var(--ds-background))`,boxShadow:`0 0 0 1px var(--ds-border)`,fontFamily:`var(--ds-font-sans)`},v={margin:0,color:`var(--ds-foreground)`,fontSize:16,lineHeight:`24px`,fontWeight:500},y={margin:0,color:`var(--ds-muted-foreground)`,fontSize:14,lineHeight:`20px`},b=e=>(0,d.jsx)(`span`,{className:`ds-field__helper`,children:e}),x={render:()=>(0,d.jsxs)(`section`,{style:_,"aria-labelledby":`downloads-title`,children:[(0,d.jsxs)(`div`,{style:{display:`grid`,gap:6},children:[(0,d.jsx)(`h2`,{id:`downloads-title`,style:v,children:`Downloads`}),(0,d.jsx)(`p`,{style:y,children:`Keep music on this device for offline listening.`})]}),(0,d.jsx)(a,{label:`Download over Wi-Fi only`,caption:`Cellular data is never used for downloads.`,defaultChecked:!0}),(0,d.jsxs)(o,{label:`Collections`,children:[(0,d.jsx)(a,{size:`sm`,label:(0,d.jsxs)(d.Fragment,{children:[`Liked songs `,b(`1,204 tracks`)]}),defaultChecked:!0}),(0,d.jsx)(a,{size:`sm`,label:(0,d.jsxs)(d.Fragment,{children:[`Late night focus `,b(`48 tracks`)]}),defaultChecked:!0}),(0,d.jsx)(a,{size:`sm`,label:(0,d.jsxs)(d.Fragment,{children:[`Road trip `,b(`112 tracks`)]})}),(0,d.jsx)(a,{size:`sm`,label:(0,d.jsxs)(d.Fragment,{children:[`Podcasts `,b(`3 shows`)]})})]}),(0,d.jsx)(`p`,{style:y,children:`Downloads use 6.2 GB of the 64 GB on this phone.`})]})},S={render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gap:24,width:400},children:[(0,d.jsx)(a,{label:`User onboarding emails`,caption:`Welcome new users with a guide to getting started`,defaultChecked:!0}),(0,d.jsx)(a,{label:`Subscription renewal emails`,caption:`Send customers email receipts for subscription payments`}),(0,d.jsx)(a,{label:`Product update notifications`,caption:`Inform users about the latest features and improvements`,disabled:!0})]})},C={render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gap:24,width:400},children:[(0,d.jsx)(a,{label:`Autoplay`,caption:`Keep playing similar tracks when your queue ends.`,defaultChecked:!0}),(0,d.jsx)(a,{size:`sm`,label:`Crossfade`,caption:`Blend the end of one track into the start of the next.`,defaultChecked:!0})]})},w={render:()=>(0,d.jsx)(`div`,{style:{width:400},children:(0,d.jsx)(a,{label:`Two-factor authentication`,error:`Required for admins — turn it on to keep the role.`})})},T={render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gap:8,width:400},children:[(0,d.jsx)(a,{card:!0,label:`Smart shuffle`,caption:`Mixes in songs you might like.`}),(0,d.jsx)(a,{card:!0,label:`Sleep timer`,caption:`Stops playback after 30 minutes.`,defaultChecked:!0})]})},E=e=>(0,d.jsx)(`svg`,{viewBox:`0 0 24 24`,width:16,height:16,fill:`none`,stroke:`currentColor`,strokeWidth:1.875,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),D=[{label:`Online payments`,caption:`Pay for goods and services on the internet.`,on:!0,icon:E((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,d.jsx)(`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20`})]}))},{label:`Mobile wallet`,caption:`Pay with your phone or watch in shops.`,on:!0,icon:E((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`}),(0,d.jsx)(`path`,{d:`M12 18h.01`})]}))},{label:`Cash withdrawals`,caption:`Take out cash at ATMs.`,on:!1,icon:E((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`rect`,{width:`20`,height:`12`,x:`2`,y:`6`,rx:`2`}),(0,d.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2`}),(0,d.jsx)(`path`,{d:`M6 12h.01M18 12h.01`})]}))},{label:`Payments without 3D Secure`,caption:`Allow online payments that skip the extra check.`,on:!1,icon:E((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`}),(0,d.jsx)(`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`})]}))},{label:`Overseas payments`,caption:`Pay in shops outside your home country.`,on:!0,icon:E((0,d.jsx)(`path`,{d:`M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z`}))}],O={render:function(){let[e,t]=(0,u.useState)(()=>D.map(e=>e.on));return(0,d.jsxs)(`div`,{style:{display:`grid`,gap:20,width:400,fontFamily:`var(--ds-font-sans)`},children:[(0,d.jsxs)(`div`,{style:{display:`grid`,gap:6},children:[(0,d.jsx)(`h2`,{style:v,children:`Card controls`}),(0,d.jsx)(`p`,{style:y,children:`Choose where your card can be used.`})]}),D.map((n,r)=>(0,d.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`flex-start`},children:[(0,d.jsx)(`span`,{style:{display:`grid`,placeItems:`center`,flexShrink:0,width:32,height:32,borderRadius:8,background:`var(--ds-fill-2)`,color:`var(--ds-muted-foreground)`},children:n.icon}),(0,d.jsx)(a,{className:`story-flex`,label:n.label,caption:n.caption,checked:e[r],onCheckedChange:e=>t(t=>t.map((t,n)=>n===r?e:t))})]},n.label)),(0,d.jsx)(`style`,{children:`.story-flex { flex: 1; }`})]})}},k={parameters:{layout:`fullscreen`},render:()=>(0,d.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,d.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,alignContent:`start`},children:[(0,d.jsx)(`div`,{style:m,children:e===`light`?`Light`:`Dark`}),(0,d.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,d.jsx)(a,{"aria-label":`Off (${e})`}),(0,d.jsx)(a,{"aria-label":`On (${e})`,defaultChecked:!0}),(0,d.jsx)(a,{"aria-label":`Invalid (${e})`,invalid:!0}),(0,d.jsx)(a,{"aria-label":`Disabled (${e})`,defaultChecked:!0,disabled:!0}),(0,d.jsx)(a,{size:`sm`,"aria-label":`Small off (${e})`}),(0,d.jsx)(a,{size:`sm`,"aria-label":`Small on (${e})`,defaultChecked:!0})]}),(0,d.jsx)(a,{label:`Download over Wi-Fi only`,caption:`Cellular data is never used for downloads.`,defaultChecked:!0}),(0,d.jsx)(a,{card:!0,label:`Sleep timer`,caption:`Stops playback after 30 minutes.`,defaultChecked:!0})]},e))})},A=[`Playground`,`Variants`,`Downloads`,`WithDescription`,`Sizes`,`Invalid`,`ChoiceCards`,`CardControls`,`Themes`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'default',
    state: 'Default',
    control: 'end',
    card: false,
    label: 'Download over Wi-Fi only',
    caption: 'Cellular data is never used for downloads.',
    error: 'Turn it on to keep the role.'
  },
  argTypes: {
    size: {
      name: 'Size',
      control: 'inline-radio',
      options: ['default', 'sm']
    },
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
    }
  },
  render: ({
    size,
    state,
    control,
    card,
    label,
    caption,
    error
  }) => <div style={{
    width: 400
  }}>
      <Switch size={size} label={label} caption={caption} control={control} card={card} error={state === 'Invalid' ? error : undefined} disabled={state === 'Disabled'} defaultChecked />
    </div>
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '160px repeat(4, 64px)',
    gap: 16,
    alignItems: 'center',
    justifyItems: 'center'
  }}>
      <span />
      {states.map(s => <span key={s} style={caption}>
          {s}
        </span>)}
      {(['default', 'sm'] as const).map(size => (['False', 'True'] as const).map(checked => <div key={\`\${size}-\${checked}\`} style={{
      display: 'contents'
    }}>
            <span style={{
        ...caption,
        justifySelf: 'start'
      }}>
              Size={size}, Checked={checked}
            </span>
            {states.map(s => <Switch key={s} size={size} aria-label={\`Size=\${size}, Checked=\${checked}, \${s}\`} defaultChecked={checked === 'True'} disabled={s === 'Disabled'} invalid={s === 'Invalid'} />)}
          </div>))}
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Figma "Switch": Size × Checked × State. State=Focus is keyboard focus: press Tab to see it.`,...g.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <section style={panel} aria-labelledby="downloads-title">
      <div style={{
      display: 'grid',
      gap: 6
    }}>
        <h2 id="downloads-title" style={title}>
          Downloads
        </h2>
        <p style={text}>Keep music on this device for offline listening.</p>
      </div>
      <Switch label="Download over Wi-Fi only" caption="Cellular data is never used for downloads." defaultChecked />
      <SwitchGroup label="Collections">
        <Switch size="sm" label={<>Liked songs {helper('1,204 tracks')}</>} defaultChecked />
        <Switch size="sm" label={<>Late night focus {helper('48 tracks')}</>} defaultChecked />
        <Switch size="sm" label={<>Road trip {helper('112 tracks')}</>} />
        <Switch size="sm" label={<>Podcasts {helper('3 shows')}</>} />
      </SwitchGroup>
      <p style={text}>Downloads use 6.2 GB of the 64 GB on this phone.</p>
    </section>
}`,...x.parameters?.docs?.source},description:{story:`Figma demo "Switch": a settings panel with a group of small switches (labels with a Helper).`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24,
    width: 400
  }}>
      <Switch label="User onboarding emails" caption="Welcome new users with a guide to getting started" defaultChecked />
      <Switch label="Subscription renewal emails" caption="Send customers email receipts for subscription payments" />
      <Switch label="Product update notifications" caption="Inform users about the latest features and improvements" disabled />
    </div>
}`,...S.parameters?.docs?.source},description:{story:`Figma demo "With description", with a disabled switch.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24,
    width: 400
  }}>
      <Switch label="Autoplay" caption="Keep playing similar tracks when your queue ends." defaultChecked />
      <Switch size="sm" label="Crossfade" caption="Blend the end of one track into the start of the next." defaultChecked />
    </div>
}`,...C.parameters?.docs?.source},description:{story:`Figma demo "Sizes": default and sm.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400
  }}>
      <Switch label="Two-factor authentication" error="Required for admins — turn it on to keep the role." />
    </div>
}`,...w.parameters?.docs?.source},description:{story:'Figma demo "Invalid": `error` replaces the description and marks the switch.',...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 8,
    width: 400
  }}>
      <Switch card label="Smart shuffle" caption="Mixes in songs you might like." />
      <Switch card label="Sleep timer" caption="Stops playback after 30 minutes." defaultChecked />
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Figma demo "Choice cards": a click anywhere on the card toggles it.`,...T.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [on, setOn] = useState(() => controls.map(c => c.on));
    return <div style={{
      display: 'grid',
      gap: 20,
      width: 400,
      fontFamily: 'var(--ds-font-sans)'
    }}>
        <div style={{
        display: 'grid',
        gap: 6
      }}>
          <h2 style={title}>Card controls</h2>
          <p style={text}>Choose where your card can be used.</p>
        </div>
        {controls.map((c, i) => <div key={c.label} style={{
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start'
      }}>
            <span style={{
          display: 'grid',
          placeItems: 'center',
          flexShrink: 0,
          width: 32,
          height: 32,
          borderRadius: 8,
          background: 'var(--ds-fill-2)',
          color: 'var(--ds-muted-foreground)'
        }}>{c.icon}</span>
            <Switch className="story-flex" label={c.label} caption={c.caption} checked={on[i]} onCheckedChange={next => setOn(all => all.map((v, j) => j === i ? next : v))} />
          </div>)}
        <style>{'.story-flex { flex: 1; }'}</style>
      </div>;
  }
}`,...O.parameters?.docs?.source},description:{story:`Figma demo "Card controls": an icon tile before each field.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
        gap: 16,
        alignItems: 'center'
      }}>
            <Switch aria-label={\`Off (\${scheme})\`} />
            <Switch aria-label={\`On (\${scheme})\`} defaultChecked />
            <Switch aria-label={\`Invalid (\${scheme})\`} invalid />
            <Switch aria-label={\`Disabled (\${scheme})\`} defaultChecked disabled />
            <Switch size="sm" aria-label={\`Small off (\${scheme})\`} />
            <Switch size="sm" aria-label={\`Small on (\${scheme})\`} defaultChecked />
          </div>
          <Switch label="Download over Wi-Fi only" caption="Cellular data is never used for downloads." defaultChecked />
          <Switch card label="Sleep timer" caption="Stops playback after 30 minutes." defaultChecked />
        </div>)}
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...k.parameters?.docs?.description}}}})))()}j();export{O as CardControls,T as ChoiceCards,x as Downloads,w as Invalid,p as Playground,C as Sizes,k as Themes,g as Variants,S as WithDescription,A as __namedExportsOrder,f as default};