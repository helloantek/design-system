import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-DqE1DVRD.js";import{n as r,t as i}from"./Button-BU62DCj5.js";import{n as a,t as o}from"./Avatar-DxOK57gL.js";function s(e){let{ref:t,options:n,multiple:r=!1,value:i,defaultValue:a,onValueChange:o,placeholder:s,label:p,caption:h,error:g,size:_=`default`,variant:v=`default`,leadIcon:y,leadMedia:b,disabled:x=!1,emptyMessage:S=`No results.`,filter:C=te,onInputChange:w,defaultOpen:T=!1,name:E,required:D,id:O,className:k,onKeyDown:A,onBlur:j,"aria-describedby":M,...N}=e,P=(0,c.useId)(),F=O??P,I=`${F}-menu`,ae=`${F}-caption`,[oe,se]=(0,c.useState)(()=>ne(e.defaultValue)??[]),L=ne(e.value)??oe,[R,z]=(0,c.useState)(T&&!x),[B,ce]=(0,c.useState)(null),[V,H]=(0,c.useState)(null),[le,U]=(0,c.useState)(``),W=(0,c.useRef)(null),ue=(0,c.useMemo)(()=>n.flatMap(e=>d(e)?e.options:f(e)?[e]:[]),[n]),G=e=>`${F}-option-${ue.findIndex(t=>t.value===e)}`,de=`${F}-label`,K=L.map(e=>ue.find(t=>t.value===e)).filter(e=>e!==void 0),q=g!=null&&g!==!1,J=q?g:h,fe=(0,c.useMemo)(()=>{if(!B)return n;let e=[];for(let t of n)if(d(t)){let n=t.options.filter(e=>C(e,B));n.length&&e.push({...t,options:n})}else f(t)?C(t,B)&&e.push(t):u(t)&&e.length&&!u(e[e.length-1])&&e.push(t);for(;e.length&&u(e[e.length-1]);)e.pop();return e},[n,B,C]),Y=fe.flatMap(e=>d(e)?e.options:f(e)?[e]:[]).filter(e=>!e.disabled),pe=B??(r?``:K[0]?.label??``);(0,c.useEffect)(()=>{R&&V&&document.getElementById(G(V))?.scrollIntoView({block:`nearest`})},[R,V]),(0,c.useEffect)(()=>{R&&B!==null&&U(Y.length?`${Y.length} ${Y.length===1?`result`:`results`}`:typeof S==`string`?S:`No results`)},[R,B,Y.length]);let me=e=>{W.current=e,typeof t==`function`?t(e):t&&(t.current=e)},X=t=>{e.value===void 0&&se(t),e.multiple?e.onValueChange?.(t):t[0]!==L[0]&&e.onValueChange?.(t[0]??null)},Z=e=>{ce(e),w?.(e??``)},Q=()=>{z(!1),H(null)},he=e=>{if(e.disabled)return;if(!r){X([e.value]),Z(null),Q();return}let t=L.includes(e.value);X(t?L.filter(t=>t!==e.value):[...L,e.value]),U(`${e.label} ${t?`removed`:`added`}`),Z(null),H(e.value)},ge=e=>{X(L.filter(t=>t!==e.value)),U(`${e.label} removed`)},_e=e=>{if(!Y.length)return;let t=Y.findIndex(e=>e.value===V),n=t<0?e>0?0:Y.length-1:Math.min(Y.length-1,Math.max(0,t+e));H(Y[n].value)},$=e=>{z(!0),e===`first`?H(Y[0]?.value??null):e===`last`?H(Y[Y.length-1]?.value??null):e===`selected`&&H(Y.find(e=>L.includes(e.value))?.value??Y[0]?.value??null)},ve=e=>{if(A?.(e),x||e.defaultPrevented)return;let{key:t,altKey:n}=e,i=!0;if(t===`ArrowDown`)R?_e(1):$(n?void 0:`selected`);else if(t===`ArrowUp`)R?n?Q():_e(-1):$(`last`);else if(t===`Enter`&&R&&V){let e=Y.find(e=>e.value===V);e&&he(e)}else t===`Escape`?R?Q():pe?(Z(null),r||X([])):i=!1:t===`Backspace`&&r&&!B&&K.length?ge(K[K.length-1]):((t===`Home`||t===`End`)&&H(null),i=!1);i&&e.preventDefault()},ye=-1,be=e=>{ye++;let t=L.includes(e.value),n=e.description!==void 0;return(0,l.jsxs)(`div`,{id:G(e.value),role:`option`,className:n?`ds-select__option ds-select__option--large`:`ds-select__option`,"aria-selected":t,"aria-disabled":e.disabled||void 0,"data-highlighted":e.value===V||void 0,onMouseMove:()=>e.value!==V&&H(e.disabled?null:e.value),onClick:()=>he(e),children:[!n&&(0,l.jsx)(`span`,{className:`ds-select__check`,"aria-hidden":!0,children:t&&m}),(0,l.jsxs)(`span`,{className:`ds-select__content`,children:[e.icon&&(0,l.jsx)(`span`,{className:`ds-select__icon`,"aria-hidden":!0,children:e.icon}),e.media&&(0,l.jsx)(`span`,{className:`ds-select__media`,"aria-hidden":!0,children:e.media}),n?(0,l.jsxs)(`span`,{className:`ds-select__text`,children:[(0,l.jsx)(`span`,{className:`ds-select__label`,children:e.label}),(0,l.jsx)(`span`,{className:`ds-select__description`,children:e.description})]}):(0,l.jsx)(`span`,{className:`ds-select__label`,children:e.label}),e.caption!==void 0&&(0,l.jsx)(`span`,{className:`ds-select__caption`,children:e.caption}),n&&t&&(0,l.jsx)(`span`,{className:`ds-select__check`,"aria-hidden":!0,children:m})]})]},e.value)},xe=[`ds-combobox__field`,v!=="default"&&`ds-combobox__field--${v}`,q&&`ds-combobox__field--invalid`,x&&`ds-combobox__field--disabled`].filter(Boolean).join(` `);return(0,l.jsxs)(`div`,{className:[`ds-field`,`ds-field--${_}`,`ds-combobox`,k].filter(Boolean).join(` `),children:[p!==void 0&&(0,l.jsx)(`label`,{className:`ds-field__label`,id:de,htmlFor:F,children:p}),(0,l.jsxs)(`div`,{className:`ds-select__anchor`,children:[(0,l.jsxs)(`div`,{className:xe,onMouseDown:e=>e.target!==W.current&&!x&&(e.preventDefault(),W.current?.focus()),children:[b&&(0,l.jsx)(`span`,{className:`ds-combobox__media`,"aria-hidden":!0,children:b}),(0,l.jsxs)(`div`,{className:`ds-combobox__body`,children:[y&&(0,l.jsx)(`span`,{className:`ds-combobox__icon`,"aria-hidden":!0,children:y}),r&&K.map(e=>(0,l.jsxs)(`span`,{className:`ds-combobox__chip`,children:[(0,l.jsx)(`span`,{className:`ds-combobox__chip-label`,children:e.label}),!x&&(0,l.jsx)(`button`,{type:`button`,tabIndex:-1,className:`ds-combobox__chip-remove`,"aria-label":`Remove ${e.label}`,onClick:()=>ge(e),children:ie})]},e.value)),(0,l.jsx)(`input`,{...N,ref:me,id:F,type:`text`,role:`combobox`,className:`ds-combobox__input`,value:pe,placeholder:r&&K.length?void 0:s,disabled:x,required:D&&!L.length,autoComplete:`off`,"aria-autocomplete":`list`,"aria-expanded":R,"aria-controls":I,"aria-activedescendant":R&&V?G(V):void 0,"aria-describedby":[J===void 0?null:ae,M].filter(Boolean).join(` `)||void 0,"aria-invalid":q||void 0,onChange:e=>{Z(e.target.value),z(!0),H(null)},onClick:()=>!R&&$(),onKeyDown:ve,onBlur:e=>{j?.(e),!r&&B===``&&X([]),Z(null),Q()}})]}),(0,l.jsx)(`button`,{type:`button`,tabIndex:-1,className:`ds-combobox__toggle`,"aria-label":R?`Hide options`:`Show options`,"aria-controls":I,"aria-expanded":R,disabled:x,onClick:()=>{W.current?.focus(),R?Q():$()},children:re})]}),(0,l.jsxs)(`div`,{id:I,role:`listbox`,className:`ds-select__menu`,"aria-labelledby":p===void 0?void 0:de,"aria-label":p===void 0?N[`aria-label`]:void 0,"aria-multiselectable":r||void 0,tabIndex:-1,hidden:!R,onMouseDown:e=>e.preventDefault(),onMouseLeave:()=>H(null),children:[fe.map((e,t)=>{if(u(e))return(0,l.jsx)(`div`,{className:`ds-select__separator`,"aria-hidden":!0},`separator-${t}`);if(ee(e))return(0,l.jsx)(`div`,{className:`ds-select__note`,"aria-hidden":!0,children:(0,l.jsx)(`span`,{children:e.label})},`note-${t}`);if(!d(e))return be(e);let n=`${F}-group-${t}`;return(0,l.jsxs)(`div`,{role:`group`,"aria-labelledby":n,children:[(0,l.jsxs)(`div`,{className:`ds-select__group-label`,id:n,role:`presentation`,children:[(0,l.jsx)(`span`,{children:e.label}),e.caption!==void 0&&(0,l.jsx)(`span`,{className:`ds-select__group-caption`,children:e.caption})]}),e.options.map(be)]},`group-${t}`)}),ye<0&&(0,l.jsx)(`div`,{className:`ds-combobox__empty`,children:S})]})]}),E!==void 0&&(r?L.map(e=>(0,l.jsx)(`input`,{type:`hidden`,name:E,value:e,disabled:x},e)):(0,l.jsx)(`input`,{type:`hidden`,name:E,value:L[0]??``,disabled:x})),(0,l.jsx)(`span`,{className:`ds-combobox__status`,"aria-live":`polite`,children:le}),J!==void 0&&(0,l.jsx)(`p`,{id:ae,className:q?`ds-field__caption ds-field__caption--error`:`ds-field__caption`,children:J})]})}var c,l,u,ee,d,f,p,te,ne,re,m,ie;function h(){return(h=e((()=>{c=n(),l=t(),u=e=>`type`in e&&e.type===`separator`,ee=e=>`type`in e&&e.type===`caption`,d=e=>`options`in e,f=e=>`value`in e,p=e=>e.normalize(`NFD`).replace(/\p{M}/gu,``).toLowerCase(),te=(e,t)=>p(e.label).includes(p(t)),ne=e=>e===void 0?void 0:e===null?[]:Array.isArray(e)?e:[e],re=(0,l.jsx)(`svg`,{viewBox:`0.9 0.9 22.2 22.2`,fill:`none`,stroke:`currentColor`,strokeWidth:1.736,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:(0,l.jsx)(`path`,{d:`m6 9 6 6 6-6`})}),m=(0,l.jsx)(`svg`,{viewBox:`0.9 0.9 22.2 22.2`,fill:`none`,stroke:`currentColor`,strokeWidth:1.736,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:(0,l.jsx)(`path`,{d:`M20 6 9 17l-5-5`})}),ie=(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:(0,l.jsx)(`path`,{d:`M18 6 6 18M6 6l12 12`})}),s.__docgenInfo={description:`Figma "Combobox": a text field that filters a list of options.`,methods:[],displayName:`Combobox`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLInputElement`}],raw:`Ref<HTMLInputElement>`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`SelectOption | SelectGroup | SelectSeparator | SelectCaption`,elements:[{name:`SelectOption`},{name:`SelectGroup`},{name:`SelectSeparator`},{name:`SelectCaption`}]}],raw:`SelectItem[]`},description:`Options, Figma "Select Label" groups and separators (the Select's item types).`},placeholder:{required:!1,tsType:{name:`string`},description:`Figma "Placeholder".`},label:{required:!1,tsType:{name:`ReactNode`},description:`Figma Field "Label".`},caption:{required:!1,tsType:{name:`ReactNode`},description:`Figma Field "Description": help text under the field.`},error:{required:!1,tsType:{name:`ReactNode`},description:`Figma State=Invalid (Field "Error"): the message replaces the caption and marks the field invalid.`},size:{required:!1,tsType:{name:`union`,raw:`'default' | 'lg' | 'xl'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`}]},description:`Figma Size.`},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'shadow' | 'soft'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'shadow'`},{name:`literal`,value:`'soft'`}]},description:`Field style, as Input and Select.`},leadIcon:{required:!1,tsType:{name:`ReactNode`},description:'Figma "Leading icon", e.g. a search icon (16 px, `currentColor`).'},leadMedia:{required:!1,tsType:{name:`ReactNode`},description:'Figma "Leading slot": a 20 px picture before the text, e.g. the selected person\'s `<Avatar size="xs">`.'},disabled:{required:!1,tsType:{name:`boolean`},description:`Figma State=Disabled.`},emptyMessage:{required:!1,tsType:{name:`ReactNode`},description:`Figma "Combobox Empty": shown when nothing matches the text.`},filter:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(option: SelectOption, query: string) => boolean`,signature:{arguments:[{type:{name:`SelectOption`},name:`option`},{type:{name:`string`},name:`query`}],return:{name:`boolean`}}},description:`Which options match the typed text; by default the label contains it, ignoring case and accents.`},onInputChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(text: string) => void`,signature:{arguments:[{type:{name:`string`},name:`text`}],return:{name:`void`}}},description:`Called as the text changes.`},defaultOpen:{required:!1,tsType:{name:`boolean`},description:`Opens the list on first render.`},name:{required:!1,tsType:{name:`string`},description:"Form field name: the value is submitted through a hidden input (one per value with `multiple`)."},className:{required:!1,tsType:{name:`string`},description:`Class for the outer field element.`}},composes:[`Omit`]}})))()}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{a(),r(),h(),g=t(),_={title:`Components/Combobox`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Combobox** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=111-2)): `size` (`default` · `lg` · `xl`), `placeholder`, `leadIcon`, `leadMedia`, `multiple` (Figma Chips), `error` and `disabled`, with the Select's options, groups and separators, and `emptyMessage` (Figma Combobox Empty). Typing filters the list; arrows move, Enter picks, Escape closes; with `multiple`, Backspace removes the last chip."}}},decorators:[e=>(0,g.jsx)(`div`,{style:{minHeight:320},children:(0,g.jsx)(e,{})})]},v=[`Astro`,`SvelteKit`,`Nuxt.js`,`Next.js`,`React`,`Remix`].map(e=>({value:e.toLowerCase().replace(/\W/g,``),label:e})),y=[{label:`Americas`,options:[[`ny`,`(GMT-5) New York`],[`la`,`(GMT-8) Los Angeles`],[`chi`,`(GMT-6) Chicago`],[`tor`,`(GMT-5) Toronto`],[`sp`,`(GMT-3) São Paulo`]].map(([e,t])=>({value:e,label:t}))},{type:`separator`},{label:`Europe`,options:[[`lon`,`(GMT+0) London`],[`par`,`(GMT+1) Paris`],[`ber`,`(GMT+1) Berlin`]].map(([e,t])=>({value:e,label:t}))}],b=[{label:`Americas`,options:[[`ny`,`New York`,`GMT-5 United States`],[`la`,`Los Angeles`,`GMT-8 United States`],[`chi`,`Chicago`,`GMT-6 United States`],[`tor`,`Toronto`,`GMT-5 United States`],[`sp`,`São Paulo`,`GMT-3 Brazil`]].map(([e,t,n])=>({value:e,label:t,description:n}))},{type:`separator`},{label:`Europe`,options:[[`lon`,`London`,`GMT+0 United Kingdom`],[`par`,`Paris`,`GMT+1 France`],[`ber`,`Berlin`,`GMT+1 Germany`]].map(([e,t,n])=>({value:e,label:t,description:n}))}],x=[`Mira Okafor`,`Jonas Lindqvist`,`Priya Raman`,`Tomás Herrera`,`Aiko Tanaka`].map(e=>({value:e.split(` `)[0].toLowerCase(),label:e})),S=(0,g.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.875,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:[(0,g.jsx)(`path`,{d:`m21 21-4.34-4.34`}),(0,g.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`})]}),C=e=>(0,g.jsx)(`div`,{style:{width:280},children:e}),w={args:{variant:`default`,size:`default`,multiple:!1,leadIcon:!1,invalid:!1,disabled:!1,placeholder:`Select a framework`},argTypes:{variant:{name:`Style`,control:`inline-radio`,options:[`default`,`shadow`,`soft`],description:`As Input and Select`},size:{name:`Size`,control:`inline-radio`,options:[`default`,`lg`,`xl`]},multiple:{name:`Chips (multiple)`},leadIcon:{name:`Leading icon`},invalid:{name:`Invalid`},disabled:{name:`Disabled`},placeholder:{name:`Placeholder`}},render:({variant:e,size:t,multiple:n,leadIcon:r,invalid:i,disabled:a,placeholder:o})=>C(n?(0,g.jsx)(s,{multiple:!0,label:`Frameworks`,options:v,variant:e,size:t,leadIcon:r?S:void 0,error:i?`Pick at least one framework.`:void 0,disabled:a,placeholder:o},`multiple`):(0,g.jsx)(s,{label:`Framework`,options:v,variant:e,size:t,leadIcon:r?S:void 0,error:i?`Pick a framework.`:void 0,disabled:a,placeholder:o},`single`))},T={render:()=>(0,g.jsxs)(`form`,{style:{display:`grid`,gap:16,width:360},onSubmit:e=>e.preventDefault(),children:[(0,g.jsxs)(`div`,{style:{display:`grid`,gap:4},children:[(0,g.jsx)(`strong`,{style:{fontWeight:500,fontSize:16},children:`Transfer ownership`}),(0,g.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`,fontSize:14},children:`The new owner can manage billing and members.`})]}),(0,g.jsx)(s,{label:`New owner`,name:`owner`,options:x,leadIcon:S,placeholder:`Search teammates`,caption:`You keep editor access after the transfer.`}),(0,g.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,g.jsx)(i,{variant:`outline`,children:`Cancel`}),(0,g.jsx)(i,{type:`submit`,children:`Transfer`})]})]})},E={render:()=>(0,g.jsx)(`div`,{style:{display:`grid`,gap:12,width:280},children:[`default`,`lg`,`xl`].map((e,t)=>(0,g.jsx)(s,{"aria-label":`Teammate (${e})`,size:e,options:x,defaultValue:x[t].value},e))})},D={render:()=>C((0,g.jsx)(s,{"aria-label":`Framework`,options:v,defaultValue:`nextjs`,placeholder:`Select a framework`}))},O={render:()=>C((0,g.jsx)(s,{multiple:!0,"aria-label":`Frameworks`,options:v,defaultValue:[`sveltekit`,`nextjs`],placeholder:`Select frameworks`}))},k={render:()=>C((0,g.jsx)(s,{"aria-label":`Timezone`,options:y,placeholder:`Select a timezone`}))},A={render:()=>C((0,g.jsx)(s,{"aria-label":`City`,options:b,placeholder:`Select a city`}))},j={render:()=>C((0,g.jsx)(s,{"aria-label":`Assignee`,options:x,defaultValue:`mira`,leadMedia:(0,g.jsx)(o,{size:`xs`,initials:`MO`})}))},M={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 280px)`,gap:16},children:[(0,g.jsx)(s,{"aria-label":`Placeholder`,options:v,placeholder:`Select…`}),(0,g.jsx)(s,{"aria-label":`Filled`,options:v,defaultValue:`nextjs`}),(0,g.jsx)(s,{"aria-label":`Disabled placeholder`,options:v,placeholder:`Select…`,disabled:!0}),(0,g.jsx)(s,{"aria-label":`Disabled filled`,options:v,defaultValue:`nextjs`,disabled:!0}),(0,g.jsx)(s,{"aria-label":`Invalid placeholder`,options:v,placeholder:`Select…`,error:`Pick a framework.`}),(0,g.jsx)(s,{"aria-label":`Invalid filled`,options:v,defaultValue:`nextjs`,error:`Next.js is not available on this plan.`})]})},N={parameters:{layout:`fullscreen`},render:()=>(0,g.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,g.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:12,alignContent:`start`,minHeight:360},children:[(0,g.jsx)(s,{"aria-label":`Framework ${e}`,options:v,defaultValue:`nextjs`}),(0,g.jsx)(s,{multiple:!0,"aria-label":`Frameworks ${e}`,options:v,defaultValue:[`sveltekit`,`nextjs`]}),(0,g.jsx)(s,{"aria-label":`Timezone ${e}`,options:y,placeholder:`Select a timezone`,leadIcon:S,defaultOpen:!0})]},e))})},P={render:()=>(0,g.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 240px)`,gap:16},children:[`default`,`shadow`,`soft`].map(e=>(0,g.jsx)(s,{variant:e,label:e,caption:`Caption text`,options:v,placeholder:`Select a framework`},e))})},F=[`Playground`,`InAForm`,`Sizes`,`SingleSelection`,`MultipleSelection`,`Groups`,`WithDescription`,`LeadingSlot`,`States`,`Themes`,`Styles`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    multiple: false,
    leadIcon: false,
    invalid: false,
    disabled: false,
    placeholder: 'Select a framework'
  },
  argTypes: {
    variant: {
      name: 'Style',
      control: 'inline-radio',
      options: ['default', 'shadow', 'soft'],
      description: 'As Input and Select'
    },
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
    variant,
    size,
    multiple,
    leadIcon,
    invalid,
    disabled,
    placeholder
  }) => box(multiple ? <Combobox key="multiple" multiple label="Frameworks" options={frameworks} variant={variant} size={size} leadIcon={leadIcon ? searchIcon : undefined} error={invalid ? 'Pick at least one framework.' : undefined} disabled={disabled} placeholder={placeholder} /> : <Combobox key="single" label="Framework" options={frameworks} variant={variant} size={size} leadIcon={leadIcon ? searchIcon : undefined} error={invalid ? 'Pick a framework.' : undefined} disabled={disabled} placeholder={placeholder} />)
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
}`,...N.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 240px)',
    gap: 16
  }}>
      {(['default', 'shadow', 'soft'] as const).map(variant => <Combobox key={variant} variant={variant} label={variant} caption="Caption text" options={frameworks} placeholder="Select a framework" />)}
    </div>
}`,...P.parameters?.docs?.source},description:{story:`Style, as Input and Select: default (the Sort UI 2.0 field), shadow (+ Shadow/xs) and soft (borderless, tinted).`,...P.parameters?.docs?.description}}}})))()}I();export{k as Groups,T as InAForm,j as LeadingSlot,O as MultipleSelection,w as Playground,D as SingleSelection,E as Sizes,M as States,P as Styles,N as Themes,A as WithDescription,F as __namedExportsOrder,_ as default};