import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-DGAHtm6w.js";import{n as r,t as i}from"./Button-BycccIgu.js";import{n as a,t as o}from"./Badge-B10wJcc3.js";import{i as s,t as c}from"./Input-BtshDXfx.js";import{r as l,t as u}from"./Checkbox-de6-kbYc.js";import{r as d,t as f}from"./Switch-Dj6mTAiu.js";import{i as p,n as m,o as h,r as g,t as _}from"./Card-cYnABsq_.js";import{n as v,r as y,t as b}from"./Radio-Dy0DQ67B.js";import{n as x,t as S}from"./Select-CRq_bAlR.js";import{n as C,t as w}from"./Textarea-CPjfY95r.js";import{a as T,i as E,n as D,o as O,r as k,t as A}from"./Field-B4uscy5f.js";var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{j=n(),a(),r(),h(),l(),s(),y(),x(),d(),C(),O(),M=t(),N={title:`Components/Field`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Field** page ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=132-3)): `Field` (Orientation, Control, State, Field Label with Required, Helper and label-addon, Description, Error), `FieldGroup`, `FieldSet` (Field Label Variant=Legend) and `FieldSeparator`. A Field wires its label, description and error to the control: Input, Select, Combobox and Textarea take them from the Field, a native element gets them as attributes, and a custom control reads them with `useField()`. Checkbox, Radio and Switch draw their own horizontal Field and Choice Card (`label`, `caption`, `card`)."}}}},P=[`Frankfurt`,`London`,`Virginia`,`Tokyo`].map(e=>({value:e.toLowerCase(),label:e})),F=[`Next.js`,`Remix`,`Astro`,`SvelteKit`].map(e=>({value:e.toLowerCase().replace(/\W/g,``),label:e})),I={args:{orientation:`vertical`,state:`default`,description:!0,required:!1,helper:!1,addon:!1},argTypes:{orientation:{name:`Orientation`,control:`inline-radio`,options:[`vertical`,`horizontal`,`responsive`]},state:{name:`State`,control:`inline-radio`,options:[`default`,`invalid`,`disabled`]},description:{name:`Show Description`},required:{name:`Required`},helper:{name:`Helper`},addon:{name:`Trail addon`}},render:({orientation:e,state:t,description:n,required:r,helper:i,addon:a})=>(0,M.jsx)(`div`,{style:{width:360},children:(0,M.jsx)(A,{label:`Label`,orientation:e,description:n?`Description`:void 0,error:t===`invalid`?`This field is required.`:void 0,disabled:t===`disabled`,required:r,helper:i?`(Optional)`:void 0,labelAddon:a?(0,M.jsx)(o,{variant:`soft`,children:`Badge`}):void 0,children:(0,M.jsx)(c,{placeholder:`Placeholder`})})})},L={render:()=>(0,M.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 240px)`,gap:24,alignItems:`start`},children:[(0,M.jsx)(A,{label:`Label`,description:`Description`,children:(0,M.jsx)(c,{placeholder:`Placeholder`})}),(0,M.jsx)(A,{label:`Label`,description:`Description`,error:`This field is required.`,children:(0,M.jsx)(c,{placeholder:`Placeholder`})}),(0,M.jsx)(A,{label:`Label`,description:`Description`,disabled:!0,children:(0,M.jsx)(c,{placeholder:`Placeholder`})})]})},R={render:()=>(0,M.jsxs)(`div`,{style:{display:`grid`,gap:24,width:320},children:[(0,M.jsx)(k,{htmlFor:`labels-email`,required:!0,helper:`(Optional)`,addon:(0,M.jsx)(o,{variant:`soft`,children:`Beta`}),children:`Email`}),(0,M.jsx)(A,{label:`Display name`,required:!0,helper:`(shown on your profile)`,children:(0,M.jsx)(c,{placeholder:`Ada`})}),(0,M.jsx)(A,{label:`Bio`,labelAddon:(0,M.jsx)(o,{variant:`soft`,children:`New`}),description:`A sentence or two.`,children:(0,M.jsx)(w,{placeholder:`What do you do?`})})]})},z={render:()=>(0,M.jsxs)(_,{as:`section`,"aria-label":`New project`,style:{width:356},children:[(0,M.jsx)(p,{title:`New project`,description:`Deploy a repository from your Git provider.`}),(0,M.jsx)(m,{children:(0,M.jsxs)(D,{children:[(0,M.jsx)(A,{label:`Project name`,description:`Lowercase letters, numbers and dashes.`,children:(0,M.jsx)(c,{defaultValue:`launch-site`})}),(0,M.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:12},children:[(0,M.jsx)(A,{label:`Region`,children:(0,M.jsx)(S,{options:P,defaultValue:`frankfurt`})}),(0,M.jsx)(A,{label:`Framework`,children:(0,M.jsx)(S,{options:F,defaultValue:`nextjs`})})]}),(0,M.jsx)(f,{label:`Preview deployments`,caption:`Every pull request gets its own link to review.`,defaultChecked:!0})]})}),(0,M.jsxs)(g,{children:[(0,M.jsx)(i,{variant:`outline`,size:`sm`,children:`Cancel`}),(0,M.jsx)(i,{size:`sm`,children:`Create project`})]})]})},B={render:()=>(0,M.jsxs)(`div`,{style:{display:`grid`,gap:24,width:440},children:[(0,M.jsx)(T,{legend:`Vertical`,children:(0,M.jsx)(A,{label:`Playlist name`,description:`Shown to anyone you share the link with.`,children:(0,M.jsx)(c,{defaultValue:`Late night focus`})})}),(0,M.jsx)(E,{}),(0,M.jsxs)(T,{legend:`Horizontal`,children:[(0,M.jsx)(f,{label:`Autoplay similar tracks`,caption:`Keeps the music going when the playlist ends.`,defaultChecked:!0}),(0,M.jsx)(u,{label:`Hide explicit tracks`})]}),(0,M.jsx)(E,{}),(0,M.jsx)(T,{legend:`Responsive`,children:(0,M.jsx)(A,{label:`Crossfade`,description:`Seconds of overlap between two tracks.`,orientation:`responsive`,children:(0,M.jsx)(c,{defaultValue:`6 seconds`,style:{width:128}})})})]})},V={render:()=>(0,M.jsxs)(D,{style:{width:360},children:[(0,M.jsx)(A,{label:`Plan`,description:`Managed by the account owner; ask them to change it.`,disabled:!0,children:(0,M.jsx)(c,{defaultValue:`Family · 6 accounts`})}),(0,M.jsx)(f,{label:`Offline downloads`,caption:`Included with every Family plan.`,defaultChecked:!0,disabled:!0}),(0,M.jsx)(u,{label:`Email me the monthly listening recap`,disabled:!0})]})},H={render:function(){let[e,t]=(0,j.useState)(`ada lovelace!`),n=/\s/.test(e)?`Spaces aren't allowed.`:/[^\w.]/.test(e)?`Only letters, numbers, dots and underscores.`:void 0;return(0,M.jsx)(`div`,{style:{width:360},children:(0,M.jsx)(A,{label:`Username`,error:n,description:`Use letters, numbers, dots and underscores only.`,required:!0,children:(0,M.jsx)(c,{value:e,onChange:e=>t(e.currentTarget.value)})})})}},U={render:()=>(0,M.jsx)(`div`,{style:{width:360},children:(0,M.jsxs)(v,{className:`ds-fieldset--set`,label:`Backup frequency`,caption:`How often new photos are copied to the cloud.`,defaultValue:`daily`,children:[(0,M.jsx)(b,{value:`hourly`,label:`Every hour`,caption:`Best for phones that are online all day.`}),(0,M.jsx)(b,{value:`daily`,label:`Once a day`,caption:`Runs overnight while the phone is charging.`}),(0,M.jsx)(b,{value:`wifi`,label:`Only on Wi-Fi`,caption:`Waits for Wi-Fi, then uploads everything at once.`})]})})},W={render:()=>(0,M.jsx)(`div`,{style:{width:360},children:(0,M.jsxs)(v,{className:`ds-fieldset--set`,label:`Storage plan`,caption:`Change or cancel at any time; billed monthly.`,defaultValue:`standard`,children:[(0,M.jsx)(b,{card:!0,control:`end`,value:`basic`,label:`Basic`,caption:`100 GB for photos and documents.`}),(0,M.jsx)(b,{card:!0,control:`end`,value:`standard`,label:`Standard`,caption:`2 TB with room for videos and a full phone backup.`}),(0,M.jsx)(b,{card:!0,control:`end`,value:`premium`,label:`Premium`,caption:`10 TB shared with up to five family members.`})]})})},G={render:()=>(0,M.jsxs)(D,{style:{width:320},children:[(0,M.jsx)(i,{variant:`outline`,children:`Continue with Google`}),(0,M.jsx)(E,{children:`or`}),(0,M.jsx)(A,{label:`Email`,children:(0,M.jsx)(c,{type:`email`,placeholder:`ada@example.com`})}),(0,M.jsx)(E,{}),(0,M.jsx)(i,{children:`Continue`})]})},K={render:()=>(0,M.jsx)(`div`,{style:{width:320},children:(0,M.jsx)(A,{label:`Birthday`,description:`We send a song on the day.`,children:(0,M.jsx)(c,{type:`date`})})})},q={render:()=>(0,M.jsx)(`div`,{style:{width:320},children:(0,M.jsx)(A,{label:`Audio quality`,description:`A plain <select>, drawn by the browser.`,children:(0,M.jsxs)(`select`,{defaultValue:`high`,children:[(0,M.jsx)(`option`,{value:`normal`,children:`Normal`}),(0,M.jsx)(`option`,{value:`high`,children:`High`}),(0,M.jsx)(`option`,{value:`lossless`,children:`Lossless`})]})})})},J={parameters:{layout:`fullscreen`},render:()=>(0,M.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,M.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24},children:(0,M.jsxs)(T,{legend:`Profile`,description:`How others see you.`,children:[(0,M.jsx)(A,{label:`Name`,required:!0,children:(0,M.jsx)(c,{defaultValue:`Ada Lovelace`})}),(0,M.jsx)(E,{children:`or`}),(0,M.jsx)(A,{label:`Handle`,error:`That handle is taken.`,children:(0,M.jsx)(c,{defaultValue:`ada`})})]})},e))})},Y=[`Playground`,`States`,`Labels`,`NewProject`,`Orientation`,`Disabled`,`Validation`,`Fieldset`,`ChoiceCards`,`Separator`,`DateInput`,`NativeElement`,`Themes`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    state: 'default',
    description: true,
    required: false,
    helper: false,
    addon: false
  },
  argTypes: {
    orientation: {
      name: 'Orientation',
      control: 'inline-radio',
      options: ['vertical', 'horizontal', 'responsive']
    },
    state: {
      name: 'State',
      control: 'inline-radio',
      options: ['default', 'invalid', 'disabled']
    },
    description: {
      name: 'Show Description'
    },
    required: {
      name: 'Required'
    },
    helper: {
      name: 'Helper'
    },
    addon: {
      name: 'Trail addon'
    }
  },
  render: ({
    orientation,
    state,
    description,
    required,
    helper,
    addon
  }) => <div style={{
    width: 360
  }}>
      <Field label="Label" orientation={orientation} description={description ? 'Description' : undefined} error={state === 'invalid' ? 'This field is required.' : undefined} disabled={state === 'disabled'} required={required} helper={helper ? '(Optional)' : undefined} labelAddon={addon ? <Badge variant="soft">Badge</Badge> : undefined}>
        <Input placeholder="Placeholder" />
      </Field>
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 240px)',
    gap: 24,
    alignItems: 'start'
  }}>
      <Field label="Label" description="Description">
        <Input placeholder="Placeholder" />
      </Field>
      <Field label="Label" description="Description" error="This field is required.">
        <Input placeholder="Placeholder" />
      </Field>
      <Field label="Label" description="Description" disabled>
        <Input placeholder="Placeholder" />
      </Field>
    </div>
}`,...L.parameters?.docs?.source},description:{story:`Figma Field State: Default, Invalid and Disabled (Orientation=Vertical, with an Input).`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24,
    width: 320
  }}>
      <FieldLabel htmlFor="labels-email" required helper="(Optional)" addon={<Badge variant="soft">Beta</Badge>}>
        Email
      </FieldLabel>
      <Field label="Display name" required helper="(shown on your profile)">
        <Input placeholder="Ada" />
      </Field>
      <Field label="Bio" labelAddon={<Badge variant="soft">New</Badge>} description="A sentence or two.">
        <Textarea placeholder="What do you do?" />
      </Field>
    </div>
}`,...R.parameters?.docs?.source},description:{story:`Figma "Field Label": Variant=Label with Required, Helper and a trail add-on; Variant=Legend is the Field Set's name.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Card as="section" aria-label="New project" style={{
    width: 356
  }}>
      <CardHeader title="New project" description="Deploy a repository from your Git provider." />
      <CardContent>
        <FieldGroup>
          <Field label="Project name" description="Lowercase letters, numbers and dashes.">
            <Input defaultValue="launch-site" />
          </Field>
          <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12
        }}>
            <Field label="Region">
              <Select options={regions} defaultValue="frankfurt" />
            </Field>
            <Field label="Framework">
              <Select options={frameworks} defaultValue="nextjs" />
            </Field>
          </div>
          <Switch label="Preview deployments" caption="Every pull request gets its own link to review." defaultChecked />
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">Create project</Button>
      </CardFooter>
    </Card>
}`,...z.parameters?.docs?.source},description:{story:`Figma demo "Field": a form in a Card; two fields side by side; a Switch's own horizontal Field.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24,
    width: 440
  }}>
      <FieldSet legend="Vertical">
        <Field label="Playlist name" description="Shown to anyone you share the link with.">
          <Input defaultValue="Late night focus" />
        </Field>
      </FieldSet>
      <FieldSeparator />
      <FieldSet legend="Horizontal">
        <Switch label="Autoplay similar tracks" caption="Keeps the music going when the playlist ends." defaultChecked />
        <Checkbox label="Hide explicit tracks" />
      </FieldSet>
      <FieldSeparator />
      <FieldSet legend="Responsive">
        <Field label="Crossfade" description="Seconds of overlap between two tracks." orientation="responsive">
          <Input defaultValue="6 seconds" style={{
          width: 128
        }} />
        </Field>
      </FieldSet>
    </div>
}`,...B.parameters?.docs?.source},description:{story:`Figma demo "Orientation": vertical, horizontal (the controls' own Fields) and responsive, divided by Field Separators.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <FieldGroup style={{
    width: 360
  }}>
      <Field label="Plan" description="Managed by the account owner; ask them to change it." disabled>
        <Input defaultValue="Family · 6 accounts" />
      </Field>
      <Switch label="Offline downloads" caption="Included with every Family plan." defaultChecked disabled />
      <Checkbox label="Email me the monthly listening recap" disabled />
    </FieldGroup>
}`,...V.parameters?.docs?.source},description:{story:`Figma demo "Disabled": a disabled Field fades its label; the controls are disabled with it.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('ada lovelace!');
    const error = /\\s/.test(value) ? "Spaces aren't allowed." : /[^\\w.]/.test(value) ? 'Only letters, numbers, dots and underscores.' : undefined;
    return <div style={{
      width: 360
    }}>
        <Field label="Username" error={error} description="Use letters, numbers, dots and underscores only." required>
          <Input value={value} onChange={event => setValue(event.currentTarget.value)} />
        </Field>
      </div>;
  }
}`,...H.parameters?.docs?.source},description:{story:`Figma demo "Validation": the error goes under the description and turns the label and the control red.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <RadioGroup className="ds-fieldset--set" label="Backup frequency" caption="How often new photos are copied to the cloud." defaultValue="daily">
        <Radio value="hourly" label="Every hour" caption="Best for phones that are online all day." />
        <Radio value="daily" label="Once a day" caption="Runs overnight while the phone is charging." />
        <Radio value="wifi" label="Only on Wi-Fi" caption="Waits for Wi-Fi, then uploads everything at once." />
      </RadioGroup>
    </div>
}`,...U.parameters?.docs?.source},description:{story:'Figma demo "Fieldset": a Field Set\'s 16 px legend and description over radios (`RadioGroup` with the Field Set look).',...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <RadioGroup className="ds-fieldset--set" label="Storage plan" caption="Change or cancel at any time; billed monthly." defaultValue="standard">
        <Radio card control="end" value="basic" label="Basic" caption="100 GB for photos and documents." />
        <Radio card control="end" value="standard" label="Standard" caption="2 TB with room for videos and a full phone backup." />
        <Radio card control="end" value="premium" label="Premium" caption="10 TB shared with up to five family members." />
      </RadioGroup>
    </div>
}`,...W.parameters?.docs?.source},description:{story:'Figma demo "Choice cards": the controls\' `card` (Figma "Choice Card") in a Field Set.',...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <FieldGroup style={{
    width: 320
  }}>
      <Button variant="outline">Continue with Google</Button>
      <FieldSeparator>or</FieldSeparator>
      <Field label="Email">
        <Input type="email" placeholder="ada@example.com" />
      </Field>
      <FieldSeparator />
      <Button>Continue</Button>
    </FieldGroup>
}`,...G.parameters?.docs?.source},description:{story:`Figma "Field Separator": Content=None and Content=Text, e.g. between sign-in methods.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <Field label="Birthday" description="We send a song on the day.">
        <Input type="date" />
      </Field>
    </div>
}`,...K.parameters?.docs?.source},description:{story:'A date in a Field: the design system\'s Input with `type="date"` (the calendar icon and the date format come from the browser until Date Picker).',...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <Field label="Audio quality" description="A plain <select>, drawn by the browser.">
        <select defaultValue="high">
          <option value="normal">Normal</option>
          <option value="high">High</option>
          <option value="lossless">Lossless</option>
        </select>
      </Field>
    </div>
}`,...q.parameters?.docs?.source},description:{story:"Any element works: a plain `<select>` gets the id, the description and the state as attributes. The Field styles only\nits label, description and error, so the element keeps the browser's own look; use Select for the design system's.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24
    }}>
          <FieldSet legend="Profile" description="How others see you.">
            <Field label="Name" required>
              <Input defaultValue="Ada Lovelace" />
            </Field>
            <FieldSeparator>or</FieldSeparator>
            <Field label="Handle" error="That handle is taken.">
              <Input defaultValue="ada" />
            </Field>
          </FieldSet>
        </div>)}
    </div>
}`,...J.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...J.parameters?.docs?.description}}}})))()}X();export{W as ChoiceCards,K as DateInput,V as Disabled,U as Fieldset,R as Labels,q as NativeElement,z as NewProject,B as Orientation,I as Playground,G as Separator,L as States,J as Themes,H as Validation,Y as __namedExportsOrder,N as default};