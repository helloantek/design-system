import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-B0xAhTFV.js";import{n as r,t as i}from"./Button-BNEDxZ_5.js";import{n as a,t as o}from"./Alert-BwW60mXP.js";import{T as s,d as c,n as l,u,y as d}from"./react-BiARavYV.js";import{i as f,t as p}from"./Input-DKGV2tSW.js";import{r as m,t as h}from"./Checkbox-Dykk9fbt.js";import{r as g,t as _}from"./Switch-D8Qn0P5N.js";import{i as v,n as y,o as b,r as x,t as S}from"./Card-DweoSJPB.js";import{n as C,t as w}from"./Combobox-DZBJG9C9.js";import{a as T,i as E,n as D,o as O,t as k}from"./Field-DQHMYjkZ.js";import{n as A,t as j}from"./Select-ulSmBwVV.js";import{n as M,r as N,t as P}from"./Radio-zIgvnG7Y.js";import{n as F,t as I}from"./Textarea-DEJBlLBb.js";import{n as L,t as R}from"./Tooltip-KMUALoT1.js";import{n as z,t as B}from"./Slider-FCMZr7gE.js";import{i as V,n as H,r as U}from"./Sonner-CYcUj1Ms.js";var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{W=n(),d(),a(),r(),b(),m(),C(),O(),f(),N(),A(),z(),U(),g(),F(),L(),G=t(),K=[{value:`designer`,label:`Designer`},{value:`engineer`,label:`Engineer`},{value:`pm`,label:`Product manager`}],q=[{value:`web`,label:`Web`},{value:`ios`,label:`iOS`},{value:`android`,label:`Android`},{value:`design`,label:`Design`}],J=[{label:`Plans`,options:[{value:`free`,label:`Free`,caption:`€0`},{value:`pro`,label:`Pro`,caption:`€12`,badge:`Popular`},{value:`enterprise`,label:`Enterprise`,caption:`Contact us`,disabled:!0}]},{type:`separator`},{value:`trial`,label:`Start a 14-day trial`}],Y=[[`lisbon`,`(GMT+0) Lisbon`],[`warsaw`,`(GMT+1) Warsaw`],[`new-york`,`(GMT-5) New York`],[`tokyo`,`(GMT+9) Tokyo`]].map(([e,t])=>({value:e,label:t})),X={title:`Playground/Form`,parameters:{layout:`padded`,docs:{description:{component:`A sign-up form in a Card, made of Input, Select, Combobox, Textarea, Radio, Switch, Slider, Checkbox, Field (Field, Field Group, Field Set, Field Separator), Tooltip, Alert, Button and a toast, for trying components together before they are merged. Submit to see the validation and the submitted form data. Use the toolbar to switch brand and colour scheme.`}}}},Z={args:{variant:`default`,size:`lg`,disabled:!1},argTypes:{variant:{control:`inline-radio`,options:[`default`,`shadow`,`soft`]},size:{control:`inline-radio`,options:[`xl`,`lg`,`default`],description:`Figma Size, shared by Input, Select, Combobox and Button`}},render:function({variant:e,size:t,disabled:n}){let[r,a]=(0,W.useState)({}),[d,f]=(0,W.useState)(null),[m,g]=(0,W.useState)(15),b={variant:e,size:t,disabled:n},C=e=>{e.preventDefault();let t=new FormData(e.currentTarget),n={...Object.fromEntries(t),teams:t.getAll(`teams`)},r={};String(n.name??``).trim()||(r.name=`Enter your name`),/^\S+@\S+\.\S+$/.test(String(n.email??``))||(r.email=`Enter a valid email address`),n.role||(r.role=`Choose a role`),n.terms||(r.terms=`Accept the terms to continue`),a(r);let i=!Object.keys(r).length;f(i?n:null),i&&V.success(`Account created`,{description:`Welcome, ${n.name}`})},O=Object.keys(r).length;return(0,G.jsxs)(S,{as:`section`,"aria-label":`Create an account`,style:{width:420},children:[(0,G.jsx)(v,{title:`Create an account`,description:`It takes a minute; you can change everything later.`,action:(0,G.jsx)(R,{content:`All fields except Name, Email, Role and the terms are optional`,children:(0,G.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,G.jsx)(c,{}),"aria-label":`Help`})})}),(0,G.jsx)(y,{children:(0,G.jsx)(`form`,{id:`sign-up`,onSubmit:C,noValidate:!0,children:(0,G.jsxs)(D,{children:[O>0&&(0,G.jsx)(o,{variant:`destructive`,title:`Fix ${O} ${O===1?`field`:`fields`} to continue`}),(0,G.jsx)(p,{...b,name:`name`,label:`Name`,placeholder:`Jane Doe`,leadIcon:(0,G.jsx)(u,{}),error:r.name}),(0,G.jsx)(p,{...b,name:`email`,type:`email`,label:`Email`,placeholder:`mail@domain.com`,leadIcon:(0,G.jsx)(l,{}),caption:`We never share it`,error:r.email}),(0,G.jsx)(j,{...b,name:`role`,label:`Role`,placeholder:`Select a role`,options:K,error:r.role}),(0,G.jsx)(j,{...b,name:`teams`,label:`Teams`,placeholder:`Select teams`,options:q,multiple:!0,caption:`Pick all that apply`}),(0,G.jsx)(k,{label:`Timezone`,description:`Reminders follow it`,disabled:n,children:(0,G.jsx)(w,{variant:e,size:t,name:`timezone`,placeholder:`Search timezones`,options:Y,leadIcon:(0,G.jsx)(s,{})})}),(0,G.jsx)(E,{children:`Subscription`}),(0,G.jsx)(j,{...b,name:`plan`,label:`Plan`,placeholder:`Select a plan`,options:J,defaultValue:`free`,caption:`You can change it later`}),(0,G.jsxs)(M,{name:`billing`,label:`Billing`,defaultValue:`monthly`,columns:2,disabled:n,children:[(0,G.jsx)(P,{value:`monthly`,label:`Monthly`}),(0,G.jsx)(P,{value:`yearly`,label:`Yearly`,caption:`2 months free`})]}),(0,G.jsx)(I,{variant:e,disabled:n,name:`bio`,label:`About you`,placeholder:`What do you work on?`,showCount:!0,limit:160}),(0,G.jsxs)(T,{legend:`Notifications`,description:`You can change these any time.`,children:[(0,G.jsx)(_,{name:`updates`,label:`Product updates`,caption:`One email a month`,disabled:n}),(0,G.jsx)(B,{name:`reminder`,label:`Remind me before events`,valueText:`${m} min`,value:m,onValueChange:g,min:5,max:60,step:5,disabled:n})]}),(0,G.jsx)(h,{name:`terms`,label:`I accept the terms of service`,error:r.terms,disabled:n})]})})}),(0,G.jsxs)(x,{children:[(0,G.jsx)(i,{type:`reset`,form:`sign-up`,variant:`ghost`,size:t,disabled:n,onClick:()=>{a({}),f(null),g(15)},children:`Reset`}),(0,G.jsx)(i,{type:`submit`,form:`sign-up`,size:t,disabled:n,children:`Create account`})]}),d&&(0,G.jsx)(y,{children:(0,G.jsx)(`pre`,{"data-testid":`submitted`,style:{margin:0,padding:12,borderRadius:4,background:`var(--ds-fill-1)`,color:`var(--ds-foreground)`,fontSize:12},children:JSON.stringify(d,null,2)})}),(0,G.jsx)(H,{})]})}},Q=[`SignUp`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'lg',
    disabled: false
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'shadow', 'soft']
    },
    size: {
      control: 'inline-radio',
      options: ['xl', 'lg', 'default'],
      description: 'Figma Size, shared by Input, Select, Combobox and Button'
    }
  },
  render: function Render({
    variant,
    size,
    disabled
  }) {
    const [errors, setErrors] = useState<Errors>({});
    const [submitted, setSubmitted] = useState<Record<string, FormDataEntryValue | FormDataEntryValue[]> | null>(null);
    const [reminder, setReminder] = useState(15);
    const field = {
      variant,
      size,
      disabled
    };
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      // A multiple Select submits one entry per value.
      const data: Record<string, FormDataEntryValue | FormDataEntryValue[]> = {
        ...Object.fromEntries(form),
        teams: form.getAll('teams')
      };
      const next: Errors = {};
      if (!String(data.name ?? '').trim()) next.name = 'Enter your name';
      if (!/^\\S+@\\S+\\.\\S+$/.test(String(data.email ?? ''))) next.email = 'Enter a valid email address';
      if (!data.role) next.role = 'Choose a role';
      if (!data.terms) next.terms = 'Accept the terms to continue';
      setErrors(next);
      const ok = !Object.keys(next).length;
      setSubmitted(ok ? data : null);
      if (ok) toast.success('Account created', {
        description: \`Welcome, \${data.name}\`
      });
    };
    const errorCount = Object.keys(errors).length;
    return <Card as="section" aria-label="Create an account" style={{
      width: 420
    }}>
        <CardHeader title="Create an account" description="It takes a minute; you can change everything later." action={<Tooltip content="All fields except Name, Email, Role and the terms are optional">
              <Button variant="ghost" size="sm" icon={<RiQuestionLine />} aria-label="Help" />
            </Tooltip>} />
        <CardContent>
          <form id="sign-up" onSubmit={onSubmit} noValidate>
            <FieldGroup>
            {errorCount > 0 && <Alert variant="destructive" title={\`Fix \${errorCount} \${errorCount === 1 ? 'field' : 'fields'} to continue\`} />}
            <Input {...field} name="name" label="Name" placeholder="Jane Doe" leadIcon={<RiUser3Line />} error={errors.name} />
            <Input {...field} name="email" type="email" label="Email" placeholder="mail@domain.com" leadIcon={<RiAtLine />} caption="We never share it" error={errors.email} />
            <Select {...field} name="role" label="Role" placeholder="Select a role" options={roles} error={errors.role} />
            <Select {...field} name="teams" label="Teams" placeholder="Select teams" options={teams} multiple caption="Pick all that apply" />
            <Field label="Timezone" description="Reminders follow it" disabled={disabled}>
              <Combobox variant={variant} size={size} name="timezone" placeholder="Search timezones" options={timezones} leadIcon={<RiSearchLine />} />
            </Field>
            <FieldSeparator>Subscription</FieldSeparator>
            <Select {...field} name="plan" label="Plan" placeholder="Select a plan" options={plans} defaultValue="free" caption="You can change it later" />
            <RadioGroup name="billing" label="Billing" defaultValue="monthly" columns={2} disabled={disabled}>
              <Radio value="monthly" label="Monthly" />
              <Radio value="yearly" label="Yearly" caption="2 months free" />
            </RadioGroup>
            <Textarea variant={variant} disabled={disabled} name="bio" label="About you" placeholder="What do you work on?" showCount limit={160} />
            <FieldSet legend="Notifications" description="You can change these any time.">
              <Switch name="updates" label="Product updates" caption="One email a month" disabled={disabled} />
              <Slider name="reminder" label="Remind me before events" valueText={\`\${reminder} min\`} value={reminder} onValueChange={setReminder} min={5} max={60} step={5} disabled={disabled} />
            </FieldSet>
            <Checkbox name="terms" label="I accept the terms of service" error={errors.terms} disabled={disabled} />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="reset" form="sign-up" variant="ghost" size={size} disabled={disabled} onClick={() => {
          setErrors({});
          setSubmitted(null);
          setReminder(15);
        }}>
            Reset
          </Button>
          <Button type="submit" form="sign-up" size={size} disabled={disabled}>
            Create account
          </Button>
        </CardFooter>
        {submitted && <CardContent>
            <pre data-testid="submitted" style={{
          margin: 0,
          padding: 12,
          borderRadius: 4,
          background: 'var(--ds-fill-1)',
          color: 'var(--ds-foreground)',
          fontSize: 12
        }}>
              {JSON.stringify(submitted, null, 2)}
            </pre>
          </CardContent>}
        <Toaster />
      </Card>;
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as SignUp,Q as __namedExportsOrder,X as default};