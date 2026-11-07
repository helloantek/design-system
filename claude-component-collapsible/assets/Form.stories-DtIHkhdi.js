import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-D2yus7lO.js";import{n as r,t as i}from"./Button-CNNIEAiE.js";import{n as a,t as o}from"./Alert-W_LKZa35.js";import{T as ee,d as s,n as c,u as l,y as u}from"./react-BpFzvgsn.js";import{i as d,t as f}from"./Input-CnVqyErO.js";import{r as p,t as m}from"./Checkbox-C5e3Y4Rh.js";import{r as h,t as g}from"./Switch-Cd7luz2M.js";import{i as te,n as _,o as v,r as ne,t as y}from"./Card-Do9aXs38.js";import{n as b,t as x}from"./Combobox-Bg13r0GZ.js";import{a as S,i as C,n as w,o as T,t as E}from"./Field-Dko_235-.js";import{n as D,t as re}from"./DatePicker-DiM0ixc2.js";import{n as O,t as k}from"./Select-DYuIEPUf.js";import{n as A,r as j,t as M}from"./Radio-LI0TNR8T.js";import{n as N,t as P}from"./Textarea--ln1Npaa.js";import{n as F,t as I}from"./InputOTP-CyeOmQ2Q.js";import{n as L,t as R}from"./Tooltip-ys9OKwvK.js";import{n as z,t as B}from"./Slider-BdUX2fqB.js";import{i as V,n as H,r as U}from"./Sonner-BVG7XcND.js";var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{W=n(),u(),a(),r(),v(),p(),b(),D(),T(),d(),F(),j(),O(),z(),U(),h(),N(),L(),G=t(),K=[{value:`designer`,label:`Designer`},{value:`engineer`,label:`Engineer`},{value:`pm`,label:`Product manager`}],q=[{value:`web`,label:`Web`},{value:`ios`,label:`iOS`},{value:`android`,label:`Android`},{value:`design`,label:`Design`}],J=[{label:`Plans`,options:[{value:`free`,label:`Free`,caption:`€0`},{value:`pro`,label:`Pro`,caption:`€12`,badge:`Popular`},{value:`enterprise`,label:`Enterprise`,caption:`Contact us`,disabled:!0}]},{type:`separator`},{value:`trial`,label:`Start a 14-day trial`}],Y=[[`lisbon`,`(GMT+0) Lisbon`],[`warsaw`,`(GMT+1) Warsaw`],[`new-york`,`(GMT-5) New York`],[`tokyo`,`(GMT+9) Tokyo`]].map(([e,t])=>({value:e,label:t})),X={title:`Playground/Form`,parameters:{layout:`padded`,docs:{description:{component:`A sign-up form in a Card, made of Input, Input OTP, Date Picker, Select, Combobox, Textarea, Radio, Switch, Slider, Checkbox, Field (Field, Field Group, Field Set, Field Separator), Tooltip, Alert, Button and a toast, for trying components together before they are merged. Submit to see the validation and the submitted form data. Use the toolbar to switch brand and colour scheme.`}}}},Z={args:{variant:`default`,size:`lg`,disabled:!1},argTypes:{variant:{control:`inline-radio`,options:[`default`,`shadow`,`soft`]},size:{control:`inline-radio`,options:[`xl`,`lg`,`default`],description:`Figma Size, shared by Input, Select, Combobox and Button`}},render:function({variant:e,size:t,disabled:n}){let[r,a]=(0,W.useState)({}),[u,d]=(0,W.useState)(null),[p,h]=(0,W.useState)(15),[v,b]=(0,W.useState)(``),[T,D]=(0,W.useState)(0),O={variant:e,size:t,disabled:n},j=e=>{e.preventDefault();let t=new FormData(e.currentTarget),n={...Object.fromEntries(t),teams:t.getAll(`teams`)},r={};String(n.name??``).trim()||(r.name=`Enter your name`),/^\S+@\S+\.\S+$/.test(String(n.email??``))||(r.email=`Enter a valid email address`),n.role||(r.role=`Choose a role`),n.terms||(r.terms=`Accept the terms to continue`),a(r);let i=!Object.keys(r).length;d(i?n:null),i&&V.success(`Account created`,{description:`Welcome, ${n.name}`})},N=Object.keys(r).length;return(0,G.jsxs)(y,{as:`section`,"aria-label":`Create an account`,style:{width:420},children:[(0,G.jsx)(te,{title:`Create an account`,description:`It takes a minute; you can change everything later.`,action:(0,G.jsx)(R,{content:`All fields except Name, Email, Role and the terms are optional`,children:(0,G.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,G.jsx)(s,{}),"aria-label":`Help`})})}),(0,G.jsx)(_,{children:(0,G.jsx)(`form`,{id:`sign-up`,onSubmit:j,noValidate:!0,children:(0,G.jsxs)(w,{children:[N>0&&(0,G.jsx)(o,{variant:`destructive`,title:`Fix ${N} ${N===1?`field`:`fields`} to continue`}),(0,G.jsx)(f,{...O,name:`name`,label:`Name`,placeholder:`Jane Doe`,leadIcon:(0,G.jsx)(l,{}),error:r.name}),(0,G.jsx)(f,{...O,name:`email`,type:`email`,label:`Email`,placeholder:`mail@domain.com`,leadIcon:(0,G.jsx)(c,{}),caption:`We never share it`,error:r.email}),(0,G.jsx)(k,{...O,name:`role`,label:`Role`,placeholder:`Select a role`,options:K,error:r.role}),(0,G.jsx)(k,{...O,name:`teams`,label:`Teams`,placeholder:`Select teams`,options:q,multiple:!0,caption:`Pick all that apply`}),(0,G.jsx)(E,{label:`Timezone`,description:`Reminders follow it`,disabled:n,children:(0,G.jsx)(x,{variant:e,size:t,name:`timezone`,placeholder:`Search timezones`,options:Y,leadIcon:(0,G.jsx)(ee,{})})}),(0,G.jsx)(E,{label:`Start date`,description:`When your account opens`,disabled:n,children:(0,G.jsx)(re,{name:`start`,placeholder:`Pick a start date`},T)}),(0,G.jsx)(C,{children:`Subscription`}),(0,G.jsx)(E,{label:`Invite code`,description:`Optional: 6 digits from a teammate's invite`,disabled:n,children:(0,G.jsx)(I,{name:`invite`,groups:2,value:v,onValueChange:b})}),(0,G.jsx)(k,{...O,name:`plan`,label:`Plan`,placeholder:`Select a plan`,options:J,defaultValue:`free`,caption:`You can change it later`}),(0,G.jsxs)(A,{name:`billing`,label:`Billing`,defaultValue:`monthly`,columns:2,disabled:n,children:[(0,G.jsx)(M,{value:`monthly`,label:`Monthly`}),(0,G.jsx)(M,{value:`yearly`,label:`Yearly`,caption:`2 months free`})]}),(0,G.jsx)(P,{variant:e,disabled:n,name:`bio`,label:`About you`,placeholder:`What do you work on?`,showCount:!0,limit:160}),(0,G.jsxs)(S,{legend:`Notifications`,description:`You can change these any time.`,children:[(0,G.jsx)(g,{name:`updates`,label:`Product updates`,caption:`One email a month`,disabled:n}),(0,G.jsx)(B,{name:`reminder`,label:`Remind me before events`,valueText:`${p} min`,value:p,onValueChange:h,min:5,max:60,step:5,disabled:n})]}),(0,G.jsx)(m,{name:`terms`,label:`I accept the terms of service`,error:r.terms,disabled:n})]})})}),(0,G.jsxs)(ne,{children:[(0,G.jsx)(i,{type:`reset`,form:`sign-up`,variant:`ghost`,size:t,disabled:n,onClick:()=>{a({}),d(null),h(15),b(``),D(e=>e+1)},children:`Reset`}),(0,G.jsx)(i,{type:`submit`,form:`sign-up`,size:t,disabled:n,children:`Create account`})]}),u&&(0,G.jsx)(_,{children:(0,G.jsx)(`pre`,{"data-testid":`submitted`,style:{margin:0,padding:12,borderRadius:4,background:`var(--ds-fill-1)`,color:`var(--ds-foreground)`,fontSize:12},children:JSON.stringify(u,null,2)})}),(0,G.jsx)(H,{})]})}},Q=[`SignUp`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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