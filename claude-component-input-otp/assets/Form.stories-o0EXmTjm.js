import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-CRN1FiER.js";import{n as r,t as i}from"./Button-C4OTX42r.js";import{n as a,t as ee}from"./Alert-EG-zWMBB.js";import{T as o,d as s,n as c,u as l,y as u}from"./react-CMlKPR3o.js";import{i as d,t as f}from"./Input-Chj7d_ET.js";import{r as p,t as m}from"./Checkbox-wMAYumBa.js";import{r as h,t as g}from"./Switch-TPpG-Oso.js";import{i as _,n as v,o as y,r as b,t as te}from"./Card-CI22Fnzk.js";import{n as x,t as S}from"./Combobox-FrXxjaVX.js";import{a as C,i as w,n as T,o as E,t as D}from"./Field-YdnR2Z_c.js";import{n as O,t as k}from"./Select-CooZh_tT.js";import{n as A,r as j,t as M}from"./Radio-DWe2_wtX.js";import{n as N,t as P}from"./Textarea-B97UV1R4.js";import{n as F,t as I}from"./InputOTP-DTwWc9m9.js";import{n as L,t as R}from"./Tooltip-ru0RW52P.js";import{n as z,t as B}from"./Slider-BtcTpjJC.js";import{i as V,n as H,r as U}from"./Sonner-hsJl3pNi.js";var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{W=n(),u(),a(),r(),y(),p(),x(),E(),d(),F(),j(),O(),z(),U(),h(),N(),L(),G=t(),K=[{value:`designer`,label:`Designer`},{value:`engineer`,label:`Engineer`},{value:`pm`,label:`Product manager`}],q=[{value:`web`,label:`Web`},{value:`ios`,label:`iOS`},{value:`android`,label:`Android`},{value:`design`,label:`Design`}],J=[{label:`Plans`,options:[{value:`free`,label:`Free`,caption:`€0`},{value:`pro`,label:`Pro`,caption:`€12`,badge:`Popular`},{value:`enterprise`,label:`Enterprise`,caption:`Contact us`,disabled:!0}]},{type:`separator`},{value:`trial`,label:`Start a 14-day trial`}],Y=[[`lisbon`,`(GMT+0) Lisbon`],[`warsaw`,`(GMT+1) Warsaw`],[`new-york`,`(GMT-5) New York`],[`tokyo`,`(GMT+9) Tokyo`]].map(([e,t])=>({value:e,label:t})),X={title:`Playground/Form`,parameters:{layout:`padded`,docs:{description:{component:`A sign-up form in a Card, made of Input, Input OTP, Select, Combobox, Textarea, Radio, Switch, Slider, Checkbox, Field (Field, Field Group, Field Set, Field Separator), Tooltip, Alert, Button and a toast, for trying components together before they are merged. Submit to see the validation and the submitted form data. Use the toolbar to switch brand and colour scheme.`}}}},Z={args:{variant:`default`,size:`lg`,disabled:!1},argTypes:{variant:{control:`inline-radio`,options:[`default`,`shadow`,`soft`]},size:{control:`inline-radio`,options:[`xl`,`lg`,`default`],description:`Figma Size, shared by Input, Select, Combobox and Button`}},render:function({variant:e,size:t,disabled:n}){let[r,a]=(0,W.useState)({}),[u,d]=(0,W.useState)(null),[p,h]=(0,W.useState)(15),[y,x]=(0,W.useState)(``),E={variant:e,size:t,disabled:n},O=e=>{e.preventDefault();let t=new FormData(e.currentTarget),n={...Object.fromEntries(t),teams:t.getAll(`teams`)},r={};String(n.name??``).trim()||(r.name=`Enter your name`),/^\S+@\S+\.\S+$/.test(String(n.email??``))||(r.email=`Enter a valid email address`),n.role||(r.role=`Choose a role`),n.terms||(r.terms=`Accept the terms to continue`),a(r);let i=!Object.keys(r).length;d(i?n:null),i&&V.success(`Account created`,{description:`Welcome, ${n.name}`})},j=Object.keys(r).length;return(0,G.jsxs)(te,{as:`section`,"aria-label":`Create an account`,style:{width:420},children:[(0,G.jsx)(_,{title:`Create an account`,description:`It takes a minute; you can change everything later.`,action:(0,G.jsx)(R,{content:`All fields except Name, Email, Role and the terms are optional`,children:(0,G.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,G.jsx)(s,{}),"aria-label":`Help`})})}),(0,G.jsx)(v,{children:(0,G.jsx)(`form`,{id:`sign-up`,onSubmit:O,noValidate:!0,children:(0,G.jsxs)(T,{children:[j>0&&(0,G.jsx)(ee,{variant:`destructive`,title:`Fix ${j} ${j===1?`field`:`fields`} to continue`}),(0,G.jsx)(f,{...E,name:`name`,label:`Name`,placeholder:`Jane Doe`,leadIcon:(0,G.jsx)(l,{}),error:r.name}),(0,G.jsx)(f,{...E,name:`email`,type:`email`,label:`Email`,placeholder:`mail@domain.com`,leadIcon:(0,G.jsx)(c,{}),caption:`We never share it`,error:r.email}),(0,G.jsx)(k,{...E,name:`role`,label:`Role`,placeholder:`Select a role`,options:K,error:r.role}),(0,G.jsx)(k,{...E,name:`teams`,label:`Teams`,placeholder:`Select teams`,options:q,multiple:!0,caption:`Pick all that apply`}),(0,G.jsx)(D,{label:`Timezone`,description:`Reminders follow it`,disabled:n,children:(0,G.jsx)(S,{variant:e,size:t,name:`timezone`,placeholder:`Search timezones`,options:Y,leadIcon:(0,G.jsx)(o,{})})}),(0,G.jsx)(w,{children:`Subscription`}),(0,G.jsx)(D,{label:`Invite code`,description:`Optional: 6 digits from a teammate's invite`,disabled:n,children:(0,G.jsx)(I,{name:`invite`,groups:2,value:y,onValueChange:x})}),(0,G.jsx)(k,{...E,name:`plan`,label:`Plan`,placeholder:`Select a plan`,options:J,defaultValue:`free`,caption:`You can change it later`}),(0,G.jsxs)(A,{name:`billing`,label:`Billing`,defaultValue:`monthly`,columns:2,disabled:n,children:[(0,G.jsx)(M,{value:`monthly`,label:`Monthly`}),(0,G.jsx)(M,{value:`yearly`,label:`Yearly`,caption:`2 months free`})]}),(0,G.jsx)(P,{variant:e,disabled:n,name:`bio`,label:`About you`,placeholder:`What do you work on?`,showCount:!0,limit:160}),(0,G.jsxs)(C,{legend:`Notifications`,description:`You can change these any time.`,children:[(0,G.jsx)(g,{name:`updates`,label:`Product updates`,caption:`One email a month`,disabled:n}),(0,G.jsx)(B,{name:`reminder`,label:`Remind me before events`,valueText:`${p} min`,value:p,onValueChange:h,min:5,max:60,step:5,disabled:n})]}),(0,G.jsx)(m,{name:`terms`,label:`I accept the terms of service`,error:r.terms,disabled:n})]})})}),(0,G.jsxs)(b,{children:[(0,G.jsx)(i,{type:`reset`,form:`sign-up`,variant:`ghost`,size:t,disabled:n,onClick:()=>{a({}),d(null),h(15),x(``)},children:`Reset`}),(0,G.jsx)(i,{type:`submit`,form:`sign-up`,size:t,disabled:n,children:`Create account`})]}),u&&(0,G.jsx)(v,{children:(0,G.jsx)(`pre`,{"data-testid":`submitted`,style:{margin:0,padding:12,borderRadius:4,background:`var(--ds-fill-1)`,color:`var(--ds-foreground)`,fontSize:12},children:JSON.stringify(u,null,2)})}),(0,G.jsx)(H,{})]})}},Q=[`SignUp`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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