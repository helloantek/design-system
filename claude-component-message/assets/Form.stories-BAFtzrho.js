import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-CRU8aC5i.js";import{n as r,t as i}from"./Button-0C1Ejvx3.js";import{a,i as ee,n as o,o as s,t as c}from"./Field-DK_QkOgl.js";import{i as l,t as u}from"./Input-DczHqD8i.js";import{r as d,t as f}from"./Checkbox-DeqktyfX.js";import{r as p,t as te}from"./Switch-DPBmGHRy.js";import{n as m,t as h}from"./Alert-Cblglk0M.js";import{N as g,i as ne,j as _,lt as v,vt as y}from"./react-BcIinrex.js";import{i as b,n as x,o as S,r as C,t as w}from"./Card-DVWkpqpr.js";import{n as T,t as E}from"./Combobox-kmpIMjVS.js";import{n as D,t as re}from"./DatePicker-CJkg9Ece.js";import{n as O,t as k}from"./Select-D4VulCdr.js";import{n as A,r as j,t as M}from"./Radio-Fnjl5BYp.js";import{n as N,t as P}from"./Textarea-S0_B5TkV.js";import{n as F,t as I}from"./InputOTP-4OeqHNAI.js";import{n as L,t as R}from"./Tooltip-DRoBTUuS.js";import{n as z,t as B}from"./Slider-C22uXqWQ.js";import{i as V,n as H,r as U}from"./Sonner-BZdGILJR.js";var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{W=n(),v(),m(),r(),S(),d(),T(),D(),s(),l(),F(),j(),O(),z(),U(),p(),N(),L(),G=t(),K=[{value:`designer`,label:`Designer`},{value:`engineer`,label:`Engineer`},{value:`pm`,label:`Product manager`}],q=[{value:`web`,label:`Web`},{value:`ios`,label:`iOS`},{value:`android`,label:`Android`},{value:`design`,label:`Design`}],J=[{label:`Plans`,options:[{value:`free`,label:`Free`,caption:`€0`},{value:`pro`,label:`Pro`,caption:`€12`,badge:`Popular`},{value:`enterprise`,label:`Enterprise`,caption:`Contact us`,disabled:!0}]},{type:`separator`},{value:`trial`,label:`Start a 14-day trial`}],Y=[[`lisbon`,`(GMT+0) Lisbon`],[`warsaw`,`(GMT+1) Warsaw`],[`new-york`,`(GMT-5) New York`],[`tokyo`,`(GMT+9) Tokyo`]].map(([e,t])=>({value:e,label:t})),X={title:`Playground/Form`,parameters:{layout:`padded`,docs:{description:{component:`A sign-up form in a Card, made of Input, Input OTP, Date Picker, Select, Combobox, Textarea, Radio, Switch, Slider, Checkbox, Field (Field, Field Group, Field Set, Field Separator), Tooltip, Alert, Button and a toast, for trying components together before they are merged. Submit to see the validation and the submitted form data. Use the toolbar to switch brand and colour scheme.`}}}},Z={args:{variant:`default`,size:`lg`,disabled:!1},argTypes:{variant:{control:`inline-radio`,options:[`default`,`shadow`,`soft`]},size:{control:`inline-radio`,options:[`xl`,`lg`,`default`],description:`Figma Size, shared by Input, Select, Combobox and Button`}},render:function({variant:e,size:t,disabled:n}){let[r,s]=(0,W.useState)({}),[l,d]=(0,W.useState)(null),[p,m]=(0,W.useState)(15),[v,S]=(0,W.useState)(``),[T,D]=(0,W.useState)(0),O={variant:e,size:t,disabled:n},j=e=>{e.preventDefault();let t=new FormData(e.currentTarget),n={...Object.fromEntries(t),teams:t.getAll(`teams`)},r={};String(n.name??``).trim()||(r.name=`Enter your name`),/^\S+@\S+\.\S+$/.test(String(n.email??``))||(r.email=`Enter a valid email address`),n.role||(r.role=`Choose a role`),n.terms||(r.terms=`Accept the terms to continue`),s(r);let i=!Object.keys(r).length;d(i?n:null),i&&V.success(`Account created`,{description:`Welcome, ${n.name}`})},N=Object.keys(r).length;return(0,G.jsxs)(w,{as:`section`,"aria-label":`Create an account`,style:{width:420},children:[(0,G.jsx)(b,{title:`Create an account`,description:`It takes a minute; you can change everything later.`,action:(0,G.jsx)(R,{content:`All fields except Name, Email, Role and the terms are optional`,children:(0,G.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,G.jsx)(g,{}),"aria-label":`Help`})})}),(0,G.jsx)(x,{children:(0,G.jsx)(`form`,{id:`sign-up`,onSubmit:j,noValidate:!0,children:(0,G.jsxs)(o,{children:[N>0&&(0,G.jsx)(h,{variant:`destructive`,title:`Fix ${N} ${N===1?`field`:`fields`} to continue`}),(0,G.jsx)(u,{...O,name:`name`,label:`Name`,placeholder:`Jane Doe`,leadIcon:(0,G.jsx)(_,{}),error:r.name}),(0,G.jsx)(u,{...O,name:`email`,type:`email`,label:`Email`,placeholder:`mail@domain.com`,leadIcon:(0,G.jsx)(ne,{}),caption:`We never share it`,error:r.email}),(0,G.jsx)(k,{...O,name:`role`,label:`Role`,placeholder:`Select a role`,options:K,error:r.role}),(0,G.jsx)(k,{...O,name:`teams`,label:`Teams`,placeholder:`Select teams`,options:q,multiple:!0,caption:`Pick all that apply`}),(0,G.jsx)(c,{label:`Timezone`,description:`Reminders follow it`,disabled:n,children:(0,G.jsx)(E,{variant:e,size:t,name:`timezone`,placeholder:`Search timezones`,options:Y,leadIcon:(0,G.jsx)(y,{})})}),(0,G.jsx)(c,{label:`Start date`,description:`When your account opens`,disabled:n,children:(0,G.jsx)(re,{name:`start`,placeholder:`Pick a start date`},T)}),(0,G.jsx)(ee,{children:`Subscription`}),(0,G.jsx)(c,{label:`Invite code`,description:`Optional: 6 digits from a teammate's invite`,disabled:n,children:(0,G.jsx)(I,{name:`invite`,groups:2,value:v,onValueChange:S})}),(0,G.jsx)(k,{...O,name:`plan`,label:`Plan`,placeholder:`Select a plan`,options:J,defaultValue:`free`,caption:`You can change it later`}),(0,G.jsxs)(A,{name:`billing`,label:`Billing`,defaultValue:`monthly`,columns:2,disabled:n,children:[(0,G.jsx)(M,{value:`monthly`,label:`Monthly`}),(0,G.jsx)(M,{value:`yearly`,label:`Yearly`,caption:`2 months free`})]}),(0,G.jsx)(P,{variant:e,disabled:n,name:`bio`,label:`About you`,placeholder:`What do you work on?`,showCount:!0,limit:160}),(0,G.jsxs)(a,{legend:`Notifications`,description:`You can change these any time.`,children:[(0,G.jsx)(te,{name:`updates`,label:`Product updates`,caption:`One email a month`,disabled:n}),(0,G.jsx)(B,{name:`reminder`,label:`Remind me before events`,valueText:`${p} min`,value:p,onValueChange:m,min:5,max:60,step:5,disabled:n})]}),(0,G.jsx)(f,{name:`terms`,label:`I accept the terms of service`,error:r.terms,disabled:n})]})})}),(0,G.jsxs)(C,{children:[(0,G.jsx)(i,{type:`reset`,form:`sign-up`,variant:`ghost`,size:t,disabled:n,onClick:()=>{s({}),d(null),m(15),S(``),D(e=>e+1)},children:`Reset`}),(0,G.jsx)(i,{type:`submit`,form:`sign-up`,size:t,disabled:n,children:`Create account`})]}),l&&(0,G.jsx)(x,{children:(0,G.jsx)(`pre`,{"data-testid":`submitted`,style:{margin:0,padding:12,borderRadius:4,background:`var(--ds-fill-1)`,color:`var(--ds-foreground)`,fontSize:12},children:JSON.stringify(l,null,2)})}),(0,G.jsx)(H,{})]})}},Q=[`SignUp`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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