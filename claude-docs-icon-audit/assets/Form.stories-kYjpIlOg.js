import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BR8JWdzR.js";import{I as r,P as i,Pt as ee,bt as a,i as o}from"./react-2U6Crt6a.js";import{n as s,t as c}from"./Button-Da8ftHW3.js";import{a as l,i as u,n as d,o as f,t as p}from"./Field-Jpl0Wl1-.js";import{i as m,t as h}from"./Input-D_A4lBeq.js";import{r as g,t as _}from"./Checkbox-DOKKPXYF.js";import{r as v,t as te}from"./Switch-BrDZvO8n.js";import{n as y,t as b}from"./Alert-BtxV9CWo.js";import{i as x,n as S,o as C,r as w,t as T}from"./Card-BW6m_Y46.js";import{n as E,t as D}from"./Combobox-BJdHQKYS.js";import{n as O,t as ne}from"./DatePicker-D-xd1Hvi.js";import{n as k,t as A}from"./Select-endmpKrR.js";import{n as re,r as j,t as M}from"./Radio-BvZFLrxC.js";import{n as N,t as P}from"./Textarea-81FN0AVP.js";import{n as F,t as I}from"./InputOTP-DApffqoD.js";import{n as L,t as R}from"./Tooltip-NosvJaBB.js";import{n as z,t as B}from"./Slider-DQP5jpf0.js";import{i as V,n as H,r as U}from"./Sonner-DFP9gno3.js";var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{W=n(),a(),y(),s(),C(),g(),E(),O(),f(),m(),F(),j(),k(),z(),U(),v(),N(),L(),G=t(),K=[{value:`designer`,label:`Designer`},{value:`engineer`,label:`Engineer`},{value:`pm`,label:`Product manager`}],q=[{value:`web`,label:`Web`},{value:`ios`,label:`iOS`},{value:`android`,label:`Android`},{value:`design`,label:`Design`}],J=[{label:`Plans`,options:[{value:`free`,label:`Free`,caption:`€0`},{value:`pro`,label:`Pro`,caption:`€12`,badge:`Popular`},{value:`enterprise`,label:`Enterprise`,caption:`Contact us`,disabled:!0}]},{type:`separator`},{value:`trial`,label:`Start a 14-day trial`}],Y=[[`lisbon`,`(GMT+0) Lisbon`],[`warsaw`,`(GMT+1) Warsaw`],[`new-york`,`(GMT-5) New York`],[`tokyo`,`(GMT+9) Tokyo`]].map(([e,t])=>({value:e,label:t})),X={title:`Playground/Form`,parameters:{layout:`padded`,docs:{description:{component:`A sign-up form in a Card, made of Input, Input OTP, Date Picker, Select, Combobox, Textarea, Radio, Switch, Slider, Checkbox, Field (Field, Field Group, Field Set, Field Separator), Tooltip, Alert, Button and a toast, for trying components together before they are merged. Submit to see the validation and the submitted form data. Use the toolbar to switch brand and colour scheme.`}}}},Z={args:{variant:`default`,size:`lg`,disabled:!1},argTypes:{variant:{control:`inline-radio`,options:[`default`,`shadow`,`soft`]},size:{control:`inline-radio`,options:[`xl`,`lg`,`default`],description:`Figma Size, shared by Input, Select, Combobox and Button`}},render:function({variant:e,size:t,disabled:n}){let[a,s]=(0,W.useState)({}),[f,m]=(0,W.useState)(null),[g,v]=(0,W.useState)(15),[y,C]=(0,W.useState)(``),[E,O]=(0,W.useState)(0),k={variant:e,size:t,disabled:n},j=e=>{e.preventDefault();let t=new FormData(e.currentTarget),n={...Object.fromEntries(t),teams:t.getAll(`teams`)},r={};String(n.name??``).trim()||(r.name=`Enter your name`),/^\S+@\S+\.\S+$/.test(String(n.email??``))||(r.email=`Enter a valid email address`),n.role||(r.role=`Choose a role`),n.terms||(r.terms=`Accept the terms to continue`),s(r);let i=!Object.keys(r).length;m(i?n:null),i&&V.success(`Account created`,{description:`Welcome, ${n.name}`})},N=Object.keys(a).length;return(0,G.jsxs)(T,{as:`section`,"aria-label":`Create an account`,style:{width:420},children:[(0,G.jsx)(x,{title:`Create an account`,description:`It takes a minute; you can change everything later.`,action:(0,G.jsx)(R,{content:`All fields except Name, Email, Role and the terms are optional`,children:(0,G.jsx)(c,{variant:`ghost`,size:`sm`,icon:(0,G.jsx)(r,{}),"aria-label":`Help`})})}),(0,G.jsx)(S,{children:(0,G.jsx)(`form`,{id:`sign-up`,onSubmit:j,noValidate:!0,children:(0,G.jsxs)(d,{children:[N>0&&(0,G.jsx)(b,{variant:`destructive`,title:`Fix ${N} ${N===1?`field`:`fields`} to continue`}),(0,G.jsx)(h,{...k,name:`name`,label:`Name`,placeholder:`Jane Doe`,leadIcon:(0,G.jsx)(i,{}),error:a.name}),(0,G.jsx)(h,{...k,name:`email`,type:`email`,label:`Email`,placeholder:`mail@domain.com`,leadIcon:(0,G.jsx)(o,{}),caption:`We never share it`,error:a.email}),(0,G.jsx)(A,{...k,name:`role`,label:`Role`,placeholder:`Select a role`,options:K,error:a.role}),(0,G.jsx)(A,{...k,name:`teams`,label:`Teams`,placeholder:`Select teams`,options:q,multiple:!0,caption:`Pick all that apply`}),(0,G.jsx)(p,{label:`Timezone`,description:`Reminders follow it`,disabled:n,children:(0,G.jsx)(D,{variant:e,size:t,name:`timezone`,placeholder:`Search timezones`,options:Y,leadIcon:(0,G.jsx)(ee,{})})}),(0,G.jsx)(p,{label:`Start date`,description:`When your account opens`,disabled:n,children:(0,G.jsx)(ne,{name:`start`,placeholder:`Pick a start date`},E)}),(0,G.jsx)(u,{children:`Subscription`}),(0,G.jsx)(p,{label:`Invite code`,description:`Optional: 6 digits from a teammate's invite`,disabled:n,children:(0,G.jsx)(I,{name:`invite`,groups:2,value:y,onValueChange:C})}),(0,G.jsx)(A,{...k,name:`plan`,label:`Plan`,placeholder:`Select a plan`,options:J,defaultValue:`free`,caption:`You can change it later`}),(0,G.jsxs)(re,{name:`billing`,label:`Billing`,defaultValue:`monthly`,columns:2,disabled:n,children:[(0,G.jsx)(M,{value:`monthly`,label:`Monthly`}),(0,G.jsx)(M,{value:`yearly`,label:`Yearly`,caption:`2 months free`})]}),(0,G.jsx)(P,{variant:e,disabled:n,name:`bio`,label:`About you`,placeholder:`What do you work on?`,showCount:!0,limit:160}),(0,G.jsxs)(l,{legend:`Notifications`,description:`You can change these any time.`,children:[(0,G.jsx)(te,{name:`updates`,label:`Product updates`,caption:`One email a month`,disabled:n}),(0,G.jsx)(B,{name:`reminder`,label:`Remind me before events`,valueText:`${g} min`,value:g,onValueChange:v,min:5,max:60,step:5,disabled:n})]}),(0,G.jsx)(_,{name:`terms`,label:`I accept the terms of service`,error:a.terms,disabled:n})]})})}),(0,G.jsxs)(w,{children:[(0,G.jsx)(c,{type:`reset`,form:`sign-up`,variant:`ghost`,size:t,disabled:n,onClick:()=>{s({}),m(null),v(15),C(``),O(e=>e+1)},children:`Reset`}),(0,G.jsx)(c,{type:`submit`,form:`sign-up`,size:t,disabled:n,children:`Create account`})]}),f&&(0,G.jsx)(S,{children:(0,G.jsx)(`pre`,{"data-testid":`submitted`,style:{margin:0,padding:12,borderRadius:4,background:`var(--ds-fill-1)`,color:`var(--ds-foreground)`,fontSize:12},children:JSON.stringify(f,null,2)})}),(0,G.jsx)(H,{})]})}},Q=[`SignUp`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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