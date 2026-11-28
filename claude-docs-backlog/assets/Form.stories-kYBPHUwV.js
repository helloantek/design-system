import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-C1bnYZzs.js";import{Ct as r,L as i,Lt as a,i as o,z as s}from"./react-1pD5tsKm.js";import{n as c,t as l}from"./Button-CbIxVB1p.js";import{a as ee,i as u,n as d,o as f,t as p}from"./Field-BSsD2v-M.js";import{i as m,t as h}from"./Input-5ve6i3F4.js";import{r as g,t as _}from"./Checkbox-0pHrRjXZ.js";import{r as v,t as te}from"./Switch-CVe_dtCz.js";import{n as y,t as ne}from"./Alert-BhnJlO1z.js";import{i as b,n as x,o as S,r as C,t as w}from"./Card-BGRelJIB.js";import{n as T,t as E}from"./Combobox-DIqhzdaW.js";import{n as D,t as re}from"./DatePicker-CU354p3W.js";import{n as O,t as k}from"./Select-mz-4zUVD.js";import{n as A,r as j,t as M}from"./Radio-DftVn-6p.js";import{n as N,t as P}from"./Textarea-B701IzV5.js";import{n as F,t as I}from"./InputOTP-D-3-Pa_g.js";import{n as L,t as R}from"./Tooltip-Ci_dh62S.js";import{n as z,t as B}from"./Slider-CYIc1ApG.js";import{i as V,n as H,r as U}from"./Sonner-Cl4vbJrL.js";var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{W=n(),r(),y(),c(),S(),g(),T(),D(),f(),m(),F(),j(),O(),z(),U(),v(),N(),L(),G=t(),K=[{value:`designer`,label:`Designer`},{value:`engineer`,label:`Engineer`},{value:`pm`,label:`Product manager`}],q=[{value:`web`,label:`Web`},{value:`ios`,label:`iOS`},{value:`android`,label:`Android`},{value:`design`,label:`Design`}],J=[{label:`Plans`,options:[{value:`free`,label:`Free`,caption:`€0`},{value:`pro`,label:`Pro`,caption:`€12`,badge:`Popular`},{value:`enterprise`,label:`Enterprise`,caption:`Contact us`,disabled:!0}]},{type:`separator`},{value:`trial`,label:`Start a 14-day trial`}],Y=[[`lisbon`,`(GMT+0) Lisbon`],[`warsaw`,`(GMT+1) Warsaw`],[`new-york`,`(GMT-5) New York`],[`tokyo`,`(GMT+9) Tokyo`]].map(([e,t])=>({value:e,label:t})),X={title:`Playground/Form`,parameters:{layout:`padded`,docs:{description:{component:`A sign-up form in a Card, made of Input, Input OTP, Date Picker, Select, Combobox, Textarea, Radio, Switch, Slider, Checkbox, Field (Field, Field Group, Field Set, Field Separator), Tooltip, Alert, Button and a toast, for trying components together before they are merged. Submit to see the validation and the submitted form data. Use the toolbar to switch brand and colour scheme.`}}}},Z={args:{variant:`default`,size:`lg`,disabled:!1},argTypes:{variant:{control:`inline-radio`,options:[`default`,`shadow`,`soft`]},size:{control:`inline-radio`,options:[`xl`,`lg`,`default`],description:`Figma Size, shared by Input, Select, Combobox and Button`}},render:function({variant:e,size:t,disabled:n}){let[r,c]=(0,W.useState)({}),[f,m]=(0,W.useState)(null),[g,v]=(0,W.useState)(15),[y,S]=(0,W.useState)(``),[T,D]=(0,W.useState)(0),O={variant:e,size:t,disabled:n},j=e=>{e.preventDefault();let t=new FormData(e.currentTarget),n={...Object.fromEntries(t),teams:t.getAll(`teams`)},r={};String(n.name??``).trim()||(r.name=`Enter your name`),/^\S+@\S+\.\S+$/.test(String(n.email??``))||(r.email=`Enter a valid email address`),n.role||(r.role=`Choose a role`),n.terms||(r.terms=`Accept the terms to continue`),c(r);let i=!Object.keys(r).length;m(i?n:null),i&&V.success(`Account created`,{description:`Welcome, ${n.name}`})},N=Object.keys(r).length;return(0,G.jsxs)(w,{as:`section`,"aria-label":`Create an account`,style:{width:420},children:[(0,G.jsx)(b,{title:`Create an account`,description:`It takes a minute; you can change everything later.`,action:(0,G.jsx)(R,{content:`All fields except Name, Email, Role and the terms are optional`,children:(0,G.jsx)(l,{variant:`ghost`,size:`sm`,icon:(0,G.jsx)(s,{}),"aria-label":`Help`})})}),(0,G.jsx)(x,{children:(0,G.jsx)(`form`,{id:`sign-up`,onSubmit:j,noValidate:!0,children:(0,G.jsxs)(d,{children:[N>0&&(0,G.jsx)(ne,{variant:`destructive`,title:`Fix ${N} ${N===1?`field`:`fields`} to continue`}),(0,G.jsx)(h,{...O,name:`name`,label:`Name`,placeholder:`Jane Doe`,leadIcon:(0,G.jsx)(i,{}),error:r.name}),(0,G.jsx)(h,{...O,name:`email`,type:`email`,label:`Email`,placeholder:`mail@domain.com`,leadIcon:(0,G.jsx)(o,{}),caption:`We never share it`,error:r.email}),(0,G.jsx)(k,{...O,name:`role`,label:`Role`,placeholder:`Select a role`,options:K,error:r.role}),(0,G.jsx)(k,{...O,name:`teams`,label:`Teams`,placeholder:`Select teams`,options:q,multiple:!0,caption:`Pick all that apply`}),(0,G.jsx)(p,{label:`Timezone`,description:`Reminders follow it`,disabled:n,children:(0,G.jsx)(E,{variant:e,size:t,name:`timezone`,placeholder:`Search timezones`,options:Y,leadIcon:(0,G.jsx)(a,{})})}),(0,G.jsx)(p,{label:`Start date`,description:`When your account opens`,disabled:n,children:(0,G.jsx)(re,{name:`start`,placeholder:`Pick a start date`},T)}),(0,G.jsx)(u,{children:`Subscription`}),(0,G.jsx)(p,{label:`Invite code`,description:`Optional: 6 digits from a teammate's invite`,disabled:n,children:(0,G.jsx)(I,{name:`invite`,groups:2,value:y,onValueChange:S})}),(0,G.jsx)(k,{...O,name:`plan`,label:`Plan`,placeholder:`Select a plan`,options:J,defaultValue:`free`,caption:`You can change it later`}),(0,G.jsxs)(A,{name:`billing`,label:`Billing`,defaultValue:`monthly`,columns:2,disabled:n,children:[(0,G.jsx)(M,{value:`monthly`,label:`Monthly`}),(0,G.jsx)(M,{value:`yearly`,label:`Yearly`,caption:`2 months free`})]}),(0,G.jsx)(P,{variant:e,disabled:n,name:`bio`,label:`About you`,placeholder:`What do you work on?`,showCount:!0,limit:160}),(0,G.jsxs)(ee,{legend:`Notifications`,description:`You can change these any time.`,children:[(0,G.jsx)(te,{name:`updates`,label:`Product updates`,caption:`One email a month`,disabled:n}),(0,G.jsx)(B,{name:`reminder`,label:`Remind me before events`,valueText:`${g} min`,value:g,onValueChange:v,min:5,max:60,step:5,disabled:n})]}),(0,G.jsx)(_,{name:`terms`,label:`I accept the terms of service`,error:r.terms,disabled:n})]})})}),(0,G.jsxs)(C,{children:[(0,G.jsx)(l,{type:`reset`,form:`sign-up`,variant:`ghost`,size:t,disabled:n,onClick:()=>{c({}),m(null),v(15),S(``),D(e=>e+1)},children:`Reset`}),(0,G.jsx)(l,{type:`submit`,form:`sign-up`,size:t,disabled:n,children:`Create account`})]}),f&&(0,G.jsx)(x,{children:(0,G.jsx)(`pre`,{"data-testid":`submitted`,style:{margin:0,padding:12,borderRadius:4,background:`var(--ds-fill-1)`,color:`var(--ds-foreground)`,fontSize:12},children:JSON.stringify(f,null,2)})}),(0,G.jsx)(H,{})]})}},Q=[`SignUp`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
    const [invite, setInvite] = useState('');
    // Remounts the uncontrolled Date Picker on Reset.
    const [formKey, setFormKey] = useState(0);
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
            <Field label="Start date" description="When your account opens" disabled={disabled}>
              <DatePicker key={formKey} name="start" placeholder="Pick a start date" />
            </Field>
            <FieldSeparator>Subscription</FieldSeparator>
            <Field label="Invite code" description="Optional: 6 digits from a teammate's invite" disabled={disabled}>
              <InputOTP name="invite" groups={2} value={invite} onValueChange={setInvite} />
            </Field>
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
          setInvite('');
          setFormKey(k => k + 1);
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