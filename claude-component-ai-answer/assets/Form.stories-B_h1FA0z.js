import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-BdyC5bE3.js";import{B as r,H as i,Pt as a,Zt as o,i as s}from"./react-CKaju1BM.js";import{n as c,t as l}from"./Button-N2eme1nx.js";import{n as u,t as d}from"./Select-BZurRdfK.js";import{a as f,i as p,n as ee,o as m,t as h}from"./Field-Ct6s2g3x.js";import{i as g,t as _}from"./Input-BOw2W9m2.js";import{i as v,t as te}from"./Checkbox-DN-SqS7z.js";import{r as y,t as b}from"./Switch-CKCbQWvf.js";import{n as x,t as S}from"./Alert-ByOYCqPk.js";import{i as C,n as w,o as T,r as ne,t as re}from"./Card-CFccD6qs.js";import{n as E,t as ie}from"./Tooltip-DZxZ2_1X.js";import{n as D,t as O}from"./Combobox-sdiuWWJI.js";import{n as k,t as A}from"./DatePicker-DBJ1N649.js";import{i as j,n as M,t as N}from"./Radio-D_MXdNUg.js";import{n as P,t as F}from"./Textarea-CuZDcpnf.js";import{n as I,t as L}from"./InputOTP-Bx1kPP6D.js";import{n as R,t as z}from"./Slider-Dg19jnYu.js";import{i as B,n as V,r as H}from"./Sonner-C1feibFJ.js";import{r as U,t as W}from"./Stepper-yiqdrl4B.js";var G,K,q,J,Y,X,Z,Q,$;function init_Form_stories(){return(init_Form_stories=e((()=>{G=n(),a(),x(),c(),T(),v(),D(),k(),m(),g(),I(),j(),u(),R(),H(),U(),y(),P(),E(),K=t(),q=[{value:`designer`,label:`Designer`},{value:`engineer`,label:`Engineer`},{value:`pm`,label:`Product manager`}],J=[{value:`web`,label:`Web`},{value:`ios`,label:`iOS`},{value:`android`,label:`Android`},{value:`design`,label:`Design`}],Y=[{label:`Plans`,options:[{value:`free`,label:`Free`,caption:`€0`},{value:`pro`,label:`Pro`,caption:`€12`,badge:`Popular`},{value:`enterprise`,label:`Enterprise`,caption:`Contact us`,disabled:!0}]},{type:`separator`},{value:`trial`,label:`Start a 14-day trial`}],X=[[`lisbon`,`(GMT+0) Lisbon`],[`warsaw`,`(GMT+1) Warsaw`],[`new-york`,`(GMT-5) New York`],[`tokyo`,`(GMT+9) Tokyo`]].map(([e,t])=>({value:e,label:t})),Z={title:`Playground/Form`,tags:[`!autodocs`],parameters:{layout:`padded`,docs:{description:{component:`A sign-up form in a Card, made of Input, Input OTP, Date Picker, Select, Combobox, Textarea, Radio, Switch, Slider, Checkbox, Field (Field, Field Group, Field Set, Field Separator), Tooltip, Alert, Button and a toast, for trying components together before they are merged. Submit to see the validation and the submitted form data. Use the toolbar to switch brand and colour scheme.`}}}},Q={args:{variant:`default`,size:`lg`,disabled:!1},argTypes:{variant:{control:`inline-radio`,options:[`default`,`shadow`,`soft`]},size:{control:`inline-radio`,options:[`xl`,`lg`,`default`],description:`Figma Size, shared by Input, Select, Combobox and Button`}},render:function Render({variant:e,size:t,disabled:n}){let[a,c]=(0,G.useState)({}),[u,m]=(0,G.useState)(null),[g,v]=(0,G.useState)(15),[y,x]=(0,G.useState)(``),[T,E]=(0,G.useState)(0),D={variant:e,size:t,disabled:n},onSubmit=e=>{e.preventDefault();let t=new FormData(e.currentTarget),n={...Object.fromEntries(t),teams:t.getAll(`teams`)},r={};String(n.name??``).trim()||(r.name=`Enter your name`),/^\S+@\S+\.\S+$/.test(String(n.email??``))||(r.email=`Enter a valid email address`),n.role||(r.role=`Choose a role`),n.terms||(r.terms=`Accept the terms to continue`),c(r);let i=!Object.keys(r).length;m(i?n:null),i&&B.success(`Account created`,{description:`Welcome, ${n.name}`})},k=Object.keys(a).length;return(0,K.jsxs)(re,{as:`section`,"aria-label":`Create an account`,style:{width:420},children:[(0,K.jsx)(C,{title:`Create an account`,description:`It takes a minute; you can change everything later.`,action:(0,K.jsx)(ie,{content:`All fields except Name, Email, Role and the terms are optional`,children:(0,K.jsx)(l,{variant:`ghost`,size:`sm`,icon:(0,K.jsx)(i,{}),"aria-label":`Help`})})}),(0,K.jsx)(w,{children:(0,K.jsx)(`form`,{id:`sign-up`,onSubmit,noValidate:!0,children:(0,K.jsxs)(ee,{children:[(0,K.jsx)(W,{"aria-label":`Sign-up steps`,variant:`bar`,current:u?3:0,steps:[{label:`Account`,error:k>0},{label:`Subscription`},{label:`Done`}]}),k>0&&(0,K.jsx)(S,{variant:`destructive`,title:`Fix ${k} ${k===1?`field`:`fields`} to continue`}),(0,K.jsx)(_,{...D,name:`name`,label:`Name`,placeholder:`Jane Doe`,leadIcon:(0,K.jsx)(r,{}),error:a.name}),(0,K.jsx)(_,{...D,name:`email`,type:`email`,label:`Email`,placeholder:`mail@domain.com`,leadIcon:(0,K.jsx)(s,{}),caption:`We never share it`,error:a.email}),(0,K.jsx)(d,{...D,name:`role`,label:`Role`,placeholder:`Select a role`,options:q,error:a.role}),(0,K.jsx)(d,{...D,name:`teams`,label:`Teams`,placeholder:`Select teams`,options:J,multiple:!0,caption:`Pick all that apply`}),(0,K.jsx)(h,{label:`Timezone`,description:`Reminders follow it`,disabled:n,children:(0,K.jsx)(O,{variant:e,size:t,name:`timezone`,placeholder:`Search timezones`,options:X,leadIcon:(0,K.jsx)(o,{})})}),(0,K.jsx)(h,{label:`Start date`,description:`When your account opens`,disabled:n,children:(0,K.jsx)(A,{name:`start`,placeholder:`Pick a start date`},T)}),(0,K.jsx)(p,{children:`Subscription`}),(0,K.jsx)(h,{label:`Invite code`,description:`Optional: 6 digits from a teammate's invite`,disabled:n,children:(0,K.jsx)(L,{name:`invite`,groups:2,value:y,onValueChange:x})}),(0,K.jsx)(d,{...D,name:`plan`,label:`Plan`,placeholder:`Select a plan`,options:Y,defaultValue:`free`,caption:`You can change it later`}),(0,K.jsxs)(M,{name:`billing`,label:`Billing`,defaultValue:`monthly`,columns:2,disabled:n,children:[(0,K.jsx)(N,{value:`monthly`,label:`Monthly`}),(0,K.jsx)(N,{value:`yearly`,label:`Yearly`,caption:`2 months free`})]}),(0,K.jsx)(F,{variant:e,disabled:n,name:`bio`,label:`About you`,placeholder:`What do you work on?`,showCount:!0,limit:160}),(0,K.jsxs)(f,{legend:`Notifications`,description:`You can change these any time.`,children:[(0,K.jsx)(b,{name:`updates`,label:`Product updates`,caption:`One email a month`,disabled:n}),(0,K.jsx)(z,{name:`reminder`,label:`Remind me before events`,valueText:`${g} min`,value:g,onValueChange:v,min:5,max:60,step:5,disabled:n})]}),(0,K.jsx)(te,{name:`terms`,label:`I accept the terms of service`,error:a.terms,disabled:n})]})})}),(0,K.jsxs)(ne,{children:[(0,K.jsx)(l,{type:`reset`,form:`sign-up`,variant:`ghost`,size:t,disabled:n,onClick:()=>{c({}),m(null),v(15),x(``),E(e=>e+1)},children:`Reset`}),(0,K.jsx)(l,{type:`submit`,form:`sign-up`,size:t,disabled:n,children:`Create account`})]}),u&&(0,K.jsx)(w,{children:(0,K.jsx)(`pre`,{"data-testid":`submitted`,style:{margin:0,padding:12,borderRadius:4,background:`var(--ds-fill-1)`,color:`var(--ds-foreground)`,fontSize:12},children:JSON.stringify(u,null,2)})}),(0,K.jsx)(V,{})]})}},$=[`SignUp`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
            <Stepper aria-label="Sign-up steps" variant="bar" current={submitted ? 3 : 0} steps={[{
              label: 'Account',
              error: errorCount > 0
            }, {
              label: 'Subscription'
            }, {
              label: 'Done'
            }]} />
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
}`,...Q.parameters?.docs?.source}}}})))()}init_Form_stories();export{Q as SignUp,$ as __namedExportsOrder,Z as default};