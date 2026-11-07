import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-L1K4C0a9.js";import{n as r,t as i}from"./Button-xW3OHKAk.js";import{n as a,t as ee}from"./Avatar-A5DKFDio.js";function o(e){let{ref:t,options:n,multiple:r=!1,value:i,defaultValue:a,onValueChange:ee,placeholder:o,label:f,caption:h,error:g,size:_=`default`,leadIcon:v,leadMedia:y,disabled:b=!1,emptyMessage:x=`No results.`,filter:S=ne,onInputChange:C,defaultOpen:w=!1,name:T,required:E,id:D,className:O,onKeyDown:k,onBlur:A,"aria-describedby":j,...M}=e,N=(0,s.useId)(),P=D??N,F=`${P}-menu`,ae=`${P}-caption`,[oe,se]=(0,s.useState)(()=>p(e.defaultValue)??[]),I=p(e.value)??oe,[L,R]=(0,s.useState)(w&&!b),[z,ce]=(0,s.useState)(null),[B,V]=(0,s.useState)(null),[le,H]=(0,s.useState)(``),U=(0,s.useRef)(null),ue=(0,s.useMemo)(()=>n.flatMap(e=>u(e)?e.options:d(e)?[e]:[]),[n]),W=e=>`${P}-option-${ue.findIndex(t=>t.value===e)}`,de=`${P}-label`,G=I.map(e=>ue.find(t=>t.value===e)).filter(e=>e!==void 0),K=g!=null&&g!==!1,q=K?g:h,fe=(0,s.useMemo)(()=>{if(!z)return n;let e=[];for(let t of n)if(u(t)){let n=t.options.filter(e=>S(e,z));n.length&&e.push({...t,options:n})}else d(t)?S(t,z)&&e.push(t):l(t)&&e.length&&!l(e[e.length-1])&&e.push(t);for(;e.length&&l(e[e.length-1]);)e.pop();return e},[n,z,S]),J=fe.flatMap(e=>u(e)?e.options:d(e)?[e]:[]).filter(e=>!e.disabled),pe=z??(r?``:G[0]?.label??``);(0,s.useEffect)(()=>{L&&B&&document.getElementById(W(B))?.scrollIntoView({block:`nearest`})},[L,B]),(0,s.useEffect)(()=>{L&&z!==null&&H(J.length?`${J.length} ${J.length===1?`result`:`results`}`:typeof x==`string`?x:`No results`)},[L,z,J.length]);let me=e=>{U.current=e,typeof t==`function`?t(e):t&&(t.current=e)},Y=t=>{e.value===void 0&&se(t),e.multiple?e.onValueChange?.(t):t[0]!==I[0]&&e.onValueChange?.(t[0]??null)},X=e=>{ce(e),C?.(e??``)},Z=()=>{R(!1),V(null)},he=e=>{if(e.disabled)return;if(!r){Y([e.value]),X(null),Z();return}let t=I.includes(e.value);Y(t?I.filter(t=>t!==e.value):[...I,e.value]),H(`${e.label} ${t?`removed`:`added`}`),X(null),V(e.value)},ge=e=>{Y(I.filter(t=>t!==e.value)),H(`${e.label} removed`)},Q=e=>{if(!J.length)return;let t=J.findIndex(e=>e.value===B),n=t<0?e>0?0:J.length-1:Math.min(J.length-1,Math.max(0,t+e));V(J[n].value)},$=e=>{R(!0),e===`first`?V(J[0]?.value??null):e===`last`?V(J[J.length-1]?.value??null):e===`selected`&&V(J.find(e=>I.includes(e.value))?.value??J[0]?.value??null)},_e=e=>{if(k?.(e),b||e.defaultPrevented)return;let{key:t,altKey:n}=e,i=!0;if(t===`ArrowDown`)L?Q(1):$(n?void 0:`selected`);else if(t===`ArrowUp`)L?n?Z():Q(-1):$(`last`);else if(t===`Enter`&&L&&B){let e=J.find(e=>e.value===B);e&&he(e)}else t===`Escape`?L?Z():pe?(X(null),r||Y([])):i=!1:t===`Backspace`&&r&&!z&&G.length?ge(G[G.length-1]):((t===`Home`||t===`End`)&&V(null),i=!1);i&&e.preventDefault()},ve=-1,ye=e=>{ve++;let t=I.includes(e.value),n=e.description!==void 0;return(0,c.jsxs)(`div`,{id:W(e.value),role:`option`,className:n?`ds-select__option ds-select__option--large`:`ds-select__option`,"aria-selected":t,"aria-disabled":e.disabled||void 0,"data-highlighted":e.value===B||void 0,onMouseMove:()=>e.value!==B&&V(e.disabled?null:e.value),onClick:()=>he(e),children:[!n&&(0,c.jsx)(`span`,{className:`ds-select__check`,"aria-hidden":!0,children:t&&m}),(0,c.jsxs)(`span`,{className:`ds-select__content`,children:[e.icon&&(0,c.jsx)(`span`,{className:`ds-select__icon`,"aria-hidden":!0,children:e.icon}),e.media&&(0,c.jsx)(`span`,{className:`ds-select__media`,"aria-hidden":!0,children:e.media}),n?(0,c.jsxs)(`span`,{className:`ds-select__text`,children:[(0,c.jsx)(`span`,{className:`ds-select__label`,children:e.label}),(0,c.jsx)(`span`,{className:`ds-select__description`,children:e.description})]}):(0,c.jsx)(`span`,{className:`ds-select__label`,children:e.label}),e.caption!==void 0&&(0,c.jsx)(`span`,{className:`ds-select__caption`,children:e.caption}),n&&t&&(0,c.jsx)(`span`,{className:`ds-select__check`,"aria-hidden":!0,children:m})]})]},e.value)},be=[`ds-combobox__field`,K&&`ds-combobox__field--invalid`,b&&`ds-combobox__field--disabled`].filter(Boolean).join(` `);return(0,c.jsxs)(`div`,{className:[`ds-field`,`ds-field--${_}`,`ds-combobox`,O].filter(Boolean).join(` `),children:[f!==void 0&&(0,c.jsx)(`label`,{className:`ds-field__label`,id:de,htmlFor:P,children:f}),(0,c.jsxs)(`div`,{className:`ds-select__anchor`,children:[(0,c.jsxs)(`div`,{className:be,onMouseDown:e=>e.target!==U.current&&!b&&(e.preventDefault(),U.current?.focus()),children:[y&&(0,c.jsx)(`span`,{className:`ds-combobox__media`,"aria-hidden":!0,children:y}),(0,c.jsxs)(`div`,{className:`ds-combobox__body`,children:[v&&(0,c.jsx)(`span`,{className:`ds-combobox__icon`,"aria-hidden":!0,children:v}),r&&G.map(e=>(0,c.jsxs)(`span`,{className:`ds-combobox__chip`,children:[(0,c.jsx)(`span`,{className:`ds-combobox__chip-label`,children:e.label}),!b&&(0,c.jsx)(`button`,{type:`button`,tabIndex:-1,className:`ds-combobox__chip-remove`,"aria-label":`Remove ${e.label}`,onClick:()=>ge(e),children:ie})]},e.value)),(0,c.jsx)(`input`,{...M,ref:me,id:P,type:`text`,role:`combobox`,className:`ds-combobox__input`,value:pe,placeholder:r&&G.length?void 0:o,disabled:b,required:E&&!I.length,autoComplete:`off`,"aria-autocomplete":`list`,"aria-expanded":L,"aria-controls":F,"aria-activedescendant":L&&B?W(B):void 0,"aria-describedby":[q===void 0?null:ae,j].filter(Boolean).join(` `)||void 0,"aria-invalid":K||void 0,onChange:e=>{X(e.target.value),R(!0),V(null)},onClick:()=>!L&&$(),onKeyDown:_e,onBlur:e=>{A?.(e),!r&&z===``&&Y([]),X(null),Z()}})]}),(0,c.jsx)(`button`,{type:`button`,tabIndex:-1,className:`ds-combobox__toggle`,"aria-label":L?`Hide options`:`Show options`,"aria-controls":F,"aria-expanded":L,disabled:b,onClick:()=>{U.current?.focus(),L?Z():$()},children:re})]}),(0,c.jsxs)(`div`,{id:F,role:`listbox`,className:`ds-select__menu`,"aria-labelledby":f===void 0?void 0:de,"aria-label":f===void 0?M[`aria-label`]:void 0,"aria-multiselectable":r||void 0,tabIndex:-1,hidden:!L,onMouseDown:e=>e.preventDefault(),onMouseLeave:()=>V(null),children:[fe.map((e,t)=>{if(l(e))return(0,c.jsx)(`div`,{className:`ds-select__separator`,"aria-hidden":!0},`separator-${t}`);if(te(e))return(0,c.jsx)(`div`,{className:`ds-select__note`,"aria-hidden":!0,children:(0,c.jsx)(`span`,{children:e.label})},`note-${t}`);if(!u(e))return ye(e);let n=`${P}-group-${t}`;return(0,c.jsxs)(`div`,{role:`group`,"aria-labelledby":n,children:[(0,c.jsxs)(`div`,{className:`ds-select__group-label`,id:n,role:`presentation`,children:[(0,c.jsx)(`span`,{children:e.label}),e.caption!==void 0&&(0,c.jsx)(`span`,{className:`ds-select__group-caption`,children:e.caption})]}),e.options.map(ye)]},`group-${t}`)}),ve<0&&(0,c.jsx)(`div`,{className:`ds-combobox__empty`,children:x})]})]}),T!==void 0&&(r?I.map(e=>(0,c.jsx)(`input`,{type:`hidden`,name:T,value:e,disabled:b},e)):(0,c.jsx)(`input`,{type:`hidden`,name:T,value:I[0]??``,disabled:b})),(0,c.jsx)(`span`,{className:`ds-combobox__status`,"aria-live":`polite`,children:le}),q!==void 0&&(0,c.jsx)(`p`,{id:ae,className:K?`ds-field__caption ds-field__caption--error`:`ds-field__caption`,children:q})]})}var s,c,l,te,u,d,f,ne,p,re,m,ie;function h(){return(h=e((()=>{s=n(),c=t(),l=e=>`type`in e&&e.type===`separator`,te=e=>`type`in e&&e.type===`caption`,u=e=>`options`in e,d=e=>`value`in e,f=e=>e.normalize(`NFD`).replace(/\p{M}/gu,``).toLowerCase(),ne=(e,t)=>f(e.label).includes(f(t)),p=e=>e===void 0?void 0:e===null?[]:Array.isArray(e)?e:[e],re=(0,c.jsx)(`svg`,{viewBox:`0.9 0.9 22.2 22.2`,fill:`none`,stroke:`currentColor`,strokeWidth:1.736,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:(0,c.jsx)(`path`,{d:`m6 9 6 6 6-6`})}),m=(0,c.jsx)(`svg`,{viewBox:`0.9 0.9 22.2 22.2`,fill:`none`,stroke:`currentColor`,strokeWidth:1.736,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:(0,c.jsx)(`path`,{d:`M20 6 9 17l-5-5`})}),ie=(0,c.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:(0,c.jsx)(`path`,{d:`M18 6 6 18M6 6l12 12`})}),o.__docgenInfo={description:`Figma "Combobox": a text field that filters a list of options.`,methods:[],displayName:`Combobox`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLInputElement`}],raw:`Ref<HTMLInputElement>`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`SelectOption | SelectGroup | SelectSeparator | SelectCaption`,elements:[{name:`SelectOption`},{name:`SelectGroup`},{name:`SelectSeparator`},{name:`SelectCaption`}]}],raw:`SelectItem[]`},description:`Options, Figma "Select Label" groups and separators (the Select's item types).`},placeholder:{required:!1,tsType:{name:`string`},description:`Figma "Placeholder".`},label:{required:!1,tsType:{name:`ReactNode`},description:`Figma Field "Label".`},caption:{required:!1,tsType:{name:`ReactNode`},description:`Figma Field "Description": help text under the field.`},error:{required:!1,tsType:{name:`ReactNode`},description:`Figma State=Invalid (Field "Error"): the message replaces the caption and marks the field invalid.`},size:{required:!1,tsType:{name:`union`,raw:`'default' | 'lg' | 'xl'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`}]},description:`Figma Size.`},leadIcon:{required:!1,tsType:{name:`ReactNode`},description:'Figma "Leading icon", e.g. a search icon (16 px, `currentColor`).'},leadMedia:{required:!1,tsType:{name:`ReactNode`},description:'Figma "Leading slot": a 20 px picture before the text, e.g. the selected person\'s `<Avatar size="xs">`.'},disabled:{required:!1,tsType:{name:`boolean`},description:`Figma State=Disabled.`},emptyMessage:{required:!1,tsType:{name:`ReactNode`},description:`Figma "Combobox Empty": shown when nothing matches the text.`},filter:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(option: SelectOption, query: string) => boolean`,signature:{arguments:[{type:{name:`SelectOption`},name:`option`},{type:{name:`string`},name:`query`}],return:{name:`boolean`}}},description:`Which options match the typed text; by default the label contains it, ignoring case and accents.`},onInputChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(text: string) => void`,signature:{arguments:[{type:{name:`string`},name:`text`}],return:{name:`void`}}},description:`Called as the text changes.`},defaultOpen:{required:!1,tsType:{name:`boolean`},description:`Opens the list on first render.`},name:{required:!1,tsType:{name:`string`},description:"Form field name: the value is submitted through a hidden input (one per value with `multiple`)."},className:{required:!1,tsType:{name:`string`},description:`Class for the outer field element.`}},composes:[`Omit`]}})))()}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{a(),r(),h(),g=t(),_={title:`Components/Combobox`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Combobox** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=111-2)): `size` (`default` · `lg` · `xl`), `placeholder`, `leadIcon`, `leadMedia`, `multiple` (Figma Chips), `error` and `disabled`, with the Select's options, groups and separators, and `emptyMessage` (Figma Combobox Empty). Typing filters the list; arrows move, Enter picks, Escape closes; with `multiple`, Backspace removes the last chip."}}},decorators:[e=>(0,g.jsx)(`div`,{style:{minHeight:320},children:(0,g.jsx)(e,{})})]},v=[`Astro`,`SvelteKit`,`Nuxt.js`,`Next.js`,`React`,`Remix`].map(e=>({value:e.toLowerCase().replace(/\W/g,``),label:e})),y=[{label:`Americas`,options:[[`ny`,`(GMT-5) New York`],[`la`,`(GMT-8) Los Angeles`],[`chi`,`(GMT-6) Chicago`],[`tor`,`(GMT-5) Toronto`],[`sp`,`(GMT-3) São Paulo`]].map(([e,t])=>({value:e,label:t}))},{type:`separator`},{label:`Europe`,options:[[`lon`,`(GMT+0) London`],[`par`,`(GMT+1) Paris`],[`ber`,`(GMT+1) Berlin`]].map(([e,t])=>({value:e,label:t}))}],b=[{label:`Americas`,options:[[`ny`,`New York`,`GMT-5 United States`],[`la`,`Los Angeles`,`GMT-8 United States`],[`chi`,`Chicago`,`GMT-6 United States`],[`tor`,`Toronto`,`GMT-5 United States`],[`sp`,`São Paulo`,`GMT-3 Brazil`]].map(([e,t,n])=>({value:e,label:t,description:n}))},{type:`separator`},{label:`Europe`,options:[[`lon`,`London`,`GMT+0 United Kingdom`],[`par`,`Paris`,`GMT+1 France`],[`ber`,`Berlin`,`GMT+1 Germany`]].map(([e,t,n])=>({value:e,label:t,description:n}))}],x=[`Mira Okafor`,`Jonas Lindqvist`,`Priya Raman`,`Tomás Herrera`,`Aiko Tanaka`].map(e=>({value:e.split(` `)[0].toLowerCase(),label:e})),S=(0,g.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.875,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:[(0,g.jsx)(`path`,{d:`m21 21-4.34-4.34`}),(0,g.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`})]}),C=e=>(0,g.jsx)(`div`,{style:{width:280},children:e}),w={args:{size:`default`,multiple:!1,leadIcon:!1,invalid:!1,disabled:!1,placeholder:`Select a framework`},argTypes:{size:{name:`Size`,control:`inline-radio`,options:[`default`,`lg`,`xl`]},multiple:{name:`Chips (multiple)`},leadIcon:{name:`Leading icon`},invalid:{name:`Invalid`},disabled:{name:`Disabled`},placeholder:{name:`Placeholder`}},render:({size:e,multiple:t,leadIcon:n,invalid:r,disabled:i,placeholder:a})=>C(t?(0,g.jsx)(o,{multiple:!0,label:`Frameworks`,options:v,size:e,leadIcon:n?S:void 0,error:r?`Pick at least one framework.`:void 0,disabled:i,placeholder:a},`multiple`):(0,g.jsx)(o,{label:`Framework`,options:v,size:e,leadIcon:n?S:void 0,error:r?`Pick a framework.`:void 0,disabled:i,placeholder:a},`single`))},T={render:()=>(0,g.jsxs)(`form`,{style:{display:`grid`,gap:16,width:360},onSubmit:e=>e.preventDefault(),children:[(0,g.jsxs)(`div`,{style:{display:`grid`,gap:4},children:[(0,g.jsx)(`strong`,{style:{fontWeight:500,fontSize:16},children:`Transfer ownership`}),(0,g.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontSize:14},children:`The new owner can manage billing and members.`})]}),(0,g.jsx)(o,{label:`New owner`,name:`owner`,options:x,leadIcon:S,placeholder:`Search teammates`,caption:`You keep editor access after the transfer.`}),(0,g.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,g.jsx)(i,{variant:`outline`,children:`Cancel`}),(0,g.jsx)(i,{type:`submit`,children:`Transfer`})]})]})},E={render:()=>(0,g.jsx)(`div`,{style:{display:`grid`,gap:12,width:280},children:[`default`,`lg`,`xl`].map((e,t)=>(0,g.jsx)(o,{"aria-label":`Teammate (${e})`,size:e,options:x,defaultValue:x[t].value},e))})},D={render:()=>C((0,g.jsx)(o,{"aria-label":`Framework`,options:v,defaultValue:`nextjs`,placeholder:`Select a framework`}))},O={render:()=>C((0,g.jsx)(o,{multiple:!0,"aria-label":`Frameworks`,options:v,defaultValue:[`sveltekit`,`nextjs`],placeholder:`Select frameworks`}))},k={render:()=>C((0,g.jsx)(o,{"aria-label":`Timezone`,options:y,placeholder:`Select a timezone`}))},A={render:()=>C((0,g.jsx)(o,{"aria-label":`City`,options:b,placeholder:`Select a city`}))},j={render:()=>C((0,g.jsx)(o,{"aria-label":`Assignee`,options:x,defaultValue:`mira`,leadMedia:(0,g.jsx)(ee,{size:`xs`,initials:`MO`})}))},M={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 280px)`,gap:16},children:[(0,g.jsx)(o,{"aria-label":`Placeholder`,options:v,placeholder:`Select…`}),(0,g.jsx)(o,{"aria-label":`Filled`,options:v,defaultValue:`nextjs`}),(0,g.jsx)(o,{"aria-label":`Disabled placeholder`,options:v,placeholder:`Select…`,disabled:!0}),(0,g.jsx)(o,{"aria-label":`Disabled filled`,options:v,defaultValue:`nextjs`,disabled:!0}),(0,g.jsx)(o,{"aria-label":`Invalid placeholder`,options:v,placeholder:`Select…`,error:`Pick a framework.`}),(0,g.jsx)(o,{"aria-label":`Invalid filled`,options:v,defaultValue:`nextjs`,error:`Next.js is not available on this plan.`})]})},N={parameters:{layout:`fullscreen`},render:()=>(0,g.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,g.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:12,alignContent:`start`,minHeight:360},children:[(0,g.jsx)(o,{"aria-label":`Framework ${e}`,options:v,defaultValue:`nextjs`}),(0,g.jsx)(o,{multiple:!0,"aria-label":`Frameworks ${e}`,options:v,defaultValue:[`sveltekit`,`nextjs`]}),(0,g.jsx)(o,{"aria-label":`Timezone ${e}`,options:y,placeholder:`Select a timezone`,leadIcon:S,defaultOpen:!0})]},e))})},P=[`Playground`,`InAForm`,`Sizes`,`SingleSelection`,`MultipleSelection`,`Groups`,`WithDescription`,`LeadingSlot`,`States`,`Themes`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'default',
    multiple: false,
    leadIcon: false,
    invalid: false,
    disabled: false,
    placeholder: 'Select a framework'
  },
  argTypes: {
    size: {
      name: 'Size',
      control: 'inline-radio',
      options: ['default', 'lg', 'xl']
    },
    multiple: {
      name: 'Chips (multiple)'
    },
    leadIcon: {
      name: 'Leading icon'
    },
    invalid: {
      name: 'Invalid'
    },
    disabled: {
      name: 'Disabled'
    },
    placeholder: {
      name: 'Placeholder'
    }
  },
  render: ({
    size,
    multiple,
    leadIcon,
    invalid,
    disabled,
    placeholder
  }) => box(multiple ? <Combobox key="multiple" multiple label="Frameworks" options={frameworks} size={size} leadIcon={leadIcon ? searchIcon : undefined} error={invalid ? 'Pick at least one framework.' : undefined} disabled={disabled} placeholder={placeholder} /> : <Combobox key="single" label="Framework" options={frameworks} size={size} leadIcon={leadIcon ? searchIcon : undefined} error={invalid ? 'Pick a framework.' : undefined} disabled={disabled} placeholder={placeholder} />)
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <form style={{
    display: 'grid',
    gap: 16,
    width: 360
  }} onSubmit={event => event.preventDefault()}>
      <div style={{
      display: 'grid',
      gap: 4
    }}>
        <strong style={{
        fontWeight: 500,
        fontSize: 16
      }}>Transfer ownership</strong>
        <span style={{
        color: 'var(--ds-muted-foreground)',
        fontSize: 14
      }}>The new owner can manage billing and members.</span>
      </div>
      <Combobox label="New owner" name="owner" options={people} leadIcon={searchIcon} placeholder="Search teammates" caption="You keep editor access after the transfer." />
      <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }}>
        <Button variant="outline">Cancel</Button>
        <Button type="submit">Transfer</Button>
      </div>
    </form>
}`,...T.parameters?.docs?.source},description:{story:`Figma demo "Combobox": in a form, with a label and a caption.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    width: 280
  }}>
      {(['default', 'lg', 'xl'] as const).map((size, i) => <Combobox key={size} aria-label={\`Teammate (\${size})\`} size={size} options={people} defaultValue={people[i].value} />)}
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Figma demo "Sizes": default, lg and xl.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => box(<Combobox aria-label="Framework" options={frameworks} defaultValue="nextjs" placeholder="Select a framework" />)
}`,...D.parameters?.docs?.source},description:{story:`Figma demo "Single selection": the list opens on click, typing or ↓; the selected option has a check mark.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => box(<Combobox multiple aria-label="Frameworks" options={frameworks} defaultValue={['sveltekit', 'nextjs']} placeholder="Select frameworks" />)
}`,...O.parameters?.docs?.source},description:{story:`Figma demo "Multiple selection": values are chips; × or Backspace removes them.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => box(<Combobox aria-label="Timezone" options={timezones} placeholder="Select a timezone" />)
}`,...k.parameters?.docs?.source},description:{story:`Figma demo "Groups": Select Labels and a separator; empty groups go as you type.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => box(<Combobox aria-label="City" options={cities} placeholder="Select a city" />)
}`,...A.parameters?.docs?.source},description:{story:`Figma demo "With description": options on two lines.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => box(<Combobox aria-label="Assignee" options={people} defaultValue="mira" leadMedia={<Avatar size="xs" initials="MO" />} />)
}`,...j.parameters?.docs?.source},description:{story:`Figma "Leading slot": the selected person's avatar before the text.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 280px)',
    gap: 16
  }}>
      <Combobox aria-label="Placeholder" options={frameworks} placeholder="Select…" />
      <Combobox aria-label="Filled" options={frameworks} defaultValue="nextjs" />
      <Combobox aria-label="Disabled placeholder" options={frameworks} placeholder="Select…" disabled />
      <Combobox aria-label="Disabled filled" options={frameworks} defaultValue="nextjs" disabled />
      <Combobox aria-label="Invalid placeholder" options={frameworks} placeholder="Select…" error="Pick a framework." />
      <Combobox aria-label="Invalid filled" options={frameworks} defaultValue="nextjs" error="Next.js is not available on this plan." />
    </div>
}`,...M.parameters?.docs?.source},description:{story:`Figma State: Default, Focus (click it), Disabled and Invalid, with Placeholder and Filled.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
      gap: 12,
      alignContent: 'start',
      minHeight: 360
    }}>
          <Combobox aria-label={\`Framework \${scheme}\`} options={frameworks} defaultValue="nextjs" />
          <Combobox multiple aria-label={\`Frameworks \${scheme}\`} options={frameworks} defaultValue={['sveltekit', 'nextjs']} />
          <Combobox aria-label={\`Timezone \${scheme}\`} options={timezones} placeholder="Select a timezone" leadIcon={searchIcon} defaultOpen />
        </div>)}
    </div>
}`,...N.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...N.parameters?.docs?.description}}}})))()}F();export{k as Groups,T as InAForm,j as LeadingSlot,O as MultipleSelection,w as Playground,D as SingleSelection,E as Sizes,M as States,N as Themes,A as WithDescription,P as __namedExportsOrder,_ as default};