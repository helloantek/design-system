import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-B7gKgDlE.js";import{n as r,t as i}from"./Button-CNqA7MFl.js";import{n as a,t as o}from"./Alert-CxCk3mYX.js";import{S as s,c,g as l,l as u,n as d}from"./react-C9OmGP70.js";import{i as f,t as p}from"./Input-COukG7wX.js";import{r as m,t as h}from"./Checkbox-gMpiSsp-.js";import{r as g,t as _}from"./Switch-Hp4IWP1U.js";import{i as v,n as y,o as b,r as x,t as S}from"./Card-Cap0dUCM.js";import{n as C,t as w}from"./Combobox-aJBN7nUM.js";import{n as T,r as E,t as D}from"./Radio-CRE2STZk.js";import{n as O,t as k}from"./Select-C0SW1o_s.js";import{i as A,n as j,r as M}from"./Sonner-CJlD3XJ-.js";import{n as N,t as P}from"./Textarea-C0dlWIHs.js";import{n as F,t as I}from"./Tooltip-6bVFL3eW.js";var L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{L=n(),l(),a(),r(),b(),m(),C(),f(),E(),O(),M(),g(),N(),F(),R=t(),z=[{value:`designer`,label:`Designer`},{value:`engineer`,label:`Engineer`},{value:`pm`,label:`Product manager`}],B=[{value:`web`,label:`Web`},{value:`ios`,label:`iOS`},{value:`android`,label:`Android`},{value:`design`,label:`Design`}],V=[{label:`Plans`,options:[{value:`free`,label:`Free`,caption:`€0`},{value:`pro`,label:`Pro`,caption:`€12`,badge:`Popular`},{value:`enterprise`,label:`Enterprise`,caption:`Contact us`,disabled:!0}]},{type:`separator`},{value:`trial`,label:`Start a 14-day trial`}],H=[[`lisbon`,`(GMT+0) Lisbon`],[`warsaw`,`(GMT+1) Warsaw`],[`new-york`,`(GMT-5) New York`],[`tokyo`,`(GMT+9) Tokyo`]].map(([e,t])=>({value:e,label:t})),U={title:`Playground/Form`,parameters:{layout:`padded`,docs:{description:{component:`A sign-up form in a Card, made of Input, Select, Combobox, Textarea, Radio, Switch, Checkbox, Tooltip, Alert, Button and a toast, for trying components together before they are merged. Submit to see the validation and the submitted form data. Use the toolbar to switch brand and colour scheme.`}}}},W={args:{variant:`default`,size:`lg`,disabled:!1},argTypes:{variant:{control:`inline-radio`,options:[`default`,`shadow`,`soft`]},size:{control:`inline-radio`,options:[`xl`,`lg`,`default`],description:`Figma Size, shared by Input, Select, Combobox and Button`}},render:function({variant:e,size:t,disabled:n}){let[r,a]=(0,L.useState)({}),[l,f]=(0,L.useState)(null),m={variant:e,size:t,disabled:n},g=e=>{e.preventDefault();let t=new FormData(e.currentTarget),n={...Object.fromEntries(t),teams:t.getAll(`teams`)},r={};String(n.name??``).trim()||(r.name=`Enter your name`),/^\S+@\S+\.\S+$/.test(String(n.email??``))||(r.email=`Enter a valid email address`),n.role||(r.role=`Choose a role`),n.terms||(r.terms=`Accept the terms to continue`),a(r);let i=!Object.keys(r).length;f(i?n:null),i&&A.success(`Account created`,{description:`Welcome, ${n.name}`})},b=Object.keys(r).length;return(0,R.jsxs)(S,{as:`section`,"aria-label":`Create an account`,style:{width:420},children:[(0,R.jsx)(v,{title:`Create an account`,description:`It takes a minute; you can change everything later.`,action:(0,R.jsx)(I,{content:`All fields except Name, Email, Role and the terms are optional`,children:(0,R.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,R.jsx)(u,{}),"aria-label":`Help`})})}),(0,R.jsx)(y,{children:(0,R.jsxs)(`form`,{id:`sign-up`,onSubmit:g,noValidate:!0,style:{display:`grid`,gap:20},children:[b>0&&(0,R.jsx)(o,{variant:`destructive`,title:`Fix ${b} ${b===1?`field`:`fields`} to continue`}),(0,R.jsx)(p,{...m,name:`name`,label:`Name`,placeholder:`Jane Doe`,leadIcon:(0,R.jsx)(c,{}),error:r.name}),(0,R.jsx)(p,{...m,name:`email`,type:`email`,label:`Email`,placeholder:`mail@domain.com`,leadIcon:(0,R.jsx)(d,{}),caption:`We never share it`,error:r.email}),(0,R.jsx)(k,{...m,name:`role`,label:`Role`,placeholder:`Select a role`,options:z,error:r.role}),(0,R.jsx)(k,{...m,name:`teams`,label:`Teams`,placeholder:`Select teams`,options:B,multiple:!0,caption:`Pick all that apply`}),(0,R.jsx)(w,{...m,name:`timezone`,label:`Timezone`,placeholder:`Search timezones`,options:H,leadIcon:(0,R.jsx)(s,{})}),(0,R.jsx)(k,{...m,name:`plan`,label:`Plan`,placeholder:`Select a plan`,options:V,defaultValue:`free`,caption:`You can change it later`}),(0,R.jsxs)(T,{name:`billing`,label:`Billing`,defaultValue:`monthly`,columns:2,disabled:n,children:[(0,R.jsx)(D,{value:`monthly`,label:`Monthly`}),(0,R.jsx)(D,{value:`yearly`,label:`Yearly`,caption:`2 months free`})]}),(0,R.jsx)(P,{variant:e,disabled:n,name:`bio`,label:`About you`,placeholder:`What do you work on?`,showCount:!0,limit:160}),(0,R.jsx)(_,{name:`updates`,label:`Product updates`,caption:`One email a month`,disabled:n}),(0,R.jsx)(h,{name:`terms`,label:`I accept the terms of service`,error:r.terms,disabled:n})]})}),(0,R.jsxs)(x,{children:[(0,R.jsx)(i,{type:`reset`,form:`sign-up`,variant:`ghost`,size:t,disabled:n,onClick:()=>{a({}),f(null)},children:`Reset`}),(0,R.jsx)(i,{type:`submit`,form:`sign-up`,size:t,disabled:n,children:`Create account`})]}),l&&(0,R.jsx)(y,{children:(0,R.jsx)(`pre`,{"data-testid":`submitted`,style:{margin:0,padding:12,borderRadius:4,background:`var(--ds-fill-1)`,color:`var(--ds-foreground)`,fontSize:12},children:JSON.stringify(l,null,2)})}),(0,R.jsx)(j,{})]})}},G=[`SignUp`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
          <form id="sign-up" onSubmit={onSubmit} noValidate style={{
          display: 'grid',
          gap: 20
        }}>
            {errorCount > 0 && <Alert variant="destructive" title={\`Fix \${errorCount} \${errorCount === 1 ? 'field' : 'fields'} to continue\`} />}
            <Input {...field} name="name" label="Name" placeholder="Jane Doe" leadIcon={<RiUser3Line />} error={errors.name} />
            <Input {...field} name="email" type="email" label="Email" placeholder="mail@domain.com" leadIcon={<RiAtLine />} caption="We never share it" error={errors.email} />
            <Select {...field} name="role" label="Role" placeholder="Select a role" options={roles} error={errors.role} />
            <Select {...field} name="teams" label="Teams" placeholder="Select teams" options={teams} multiple caption="Pick all that apply" />
            <Combobox {...field} name="timezone" label="Timezone" placeholder="Search timezones" options={timezones} leadIcon={<RiSearchLine />} />
            <Select {...field} name="plan" label="Plan" placeholder="Select a plan" options={plans} defaultValue="free" caption="You can change it later" />
            <RadioGroup name="billing" label="Billing" defaultValue="monthly" columns={2} disabled={disabled}>
              <Radio value="monthly" label="Monthly" />
              <Radio value="yearly" label="Yearly" caption="2 months free" />
            </RadioGroup>
            <Textarea variant={variant} disabled={disabled} name="bio" label="About you" placeholder="What do you work on?" showCount limit={160} />
            <Switch name="updates" label="Product updates" caption="One email a month" disabled={disabled} />
            <Checkbox name="terms" label="I accept the terms of service" error={errors.terms} disabled={disabled} />
          </form>
        </CardContent>
        <CardFooter>
          <Button type="reset" form="sign-up" variant="ghost" size={size} disabled={disabled} onClick={() => {
          setErrors({});
          setSubmitted(null);
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
}`,...W.parameters?.docs?.source}}}})))()}K();export{W as SignUp,G as __namedExportsOrder,U as default};