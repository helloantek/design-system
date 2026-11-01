import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-DeQ_nHsj.js";import{n as r,t as i}from"./Button-DFiPKFCe.js";import{n as a,t as o}from"./Alert-BlYg6E5P.js";import{l as s,n as c,u as l,v as u,w as d}from"./react-Ci7IEHAr.js";import{i as f,t as p}from"./Input-GdaJDmFC.js";import{r as m,t as h}from"./Checkbox-DasvVv10.js";import{r as g,t as _}from"./Switch-2fNKE0D_.js";import{i as v,n as y,o as b,r as x,t as S}from"./Card-Dg5vCQ24.js";import{n as C,t as w}from"./Combobox-DAthv8VZ.js";import{a as T,i as E,n as D,o as O,t as k}from"./Field-BlxxqkyO.js";import{n as A,t as j}from"./Select-0Jy-yljW.js";import{n as M,r as N,t as P}from"./Radio-c2oA-sm8.js";import{n as F,t as I}from"./Textarea-BvJrqqeM.js";import{n as L,t as R}from"./Tooltip-3vy1YyYv.js";import{i as z,n as B,r as V}from"./Sonner-BRN6hf2n.js";var H,U,W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{H=n(),u(),a(),r(),b(),m(),C(),O(),f(),N(),A(),V(),g(),F(),L(),U=t(),W=[{value:`designer`,label:`Designer`},{value:`engineer`,label:`Engineer`},{value:`pm`,label:`Product manager`}],G=[{value:`web`,label:`Web`},{value:`ios`,label:`iOS`},{value:`android`,label:`Android`},{value:`design`,label:`Design`}],K=[{label:`Plans`,options:[{value:`free`,label:`Free`,caption:`€0`},{value:`pro`,label:`Pro`,caption:`€12`,badge:`Popular`},{value:`enterprise`,label:`Enterprise`,caption:`Contact us`,disabled:!0}]},{type:`separator`},{value:`trial`,label:`Start a 14-day trial`}],q=[[`lisbon`,`(GMT+0) Lisbon`],[`warsaw`,`(GMT+1) Warsaw`],[`new-york`,`(GMT-5) New York`],[`tokyo`,`(GMT+9) Tokyo`]].map(([e,t])=>({value:e,label:t})),J={title:`Playground/Form`,parameters:{layout:`padded`,docs:{description:{component:`A sign-up form in a Card, made of Input, Select, Combobox, Textarea, Radio, Switch, Checkbox, Field (Field, Field Group, Field Set, Field Separator), Tooltip, Alert, Button and a toast, for trying components together before they are merged. Submit to see the validation and the submitted form data. Use the toolbar to switch brand and colour scheme.`}}}},Y={args:{variant:`default`,size:`lg`,disabled:!1},argTypes:{variant:{control:`inline-radio`,options:[`default`,`shadow`,`soft`]},size:{control:`inline-radio`,options:[`xl`,`lg`,`default`],description:`Figma Size, shared by Input, Select, Combobox and Button`}},render:function({variant:e,size:t,disabled:n}){let[r,a]=(0,H.useState)({}),[u,f]=(0,H.useState)(null),m={variant:e,size:t,disabled:n},g=e=>{e.preventDefault();let t=new FormData(e.currentTarget),n={...Object.fromEntries(t),teams:t.getAll(`teams`)},r={};String(n.name??``).trim()||(r.name=`Enter your name`),/^\S+@\S+\.\S+$/.test(String(n.email??``))||(r.email=`Enter a valid email address`),n.role||(r.role=`Choose a role`),n.terms||(r.terms=`Accept the terms to continue`),a(r);let i=!Object.keys(r).length;f(i?n:null),i&&z.success(`Account created`,{description:`Welcome, ${n.name}`})},b=Object.keys(r).length;return(0,U.jsxs)(S,{as:`section`,"aria-label":`Create an account`,style:{width:420},children:[(0,U.jsx)(v,{title:`Create an account`,description:`It takes a minute; you can change everything later.`,action:(0,U.jsx)(R,{content:`All fields except Name, Email, Role and the terms are optional`,children:(0,U.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,U.jsx)(l,{}),"aria-label":`Help`})})}),(0,U.jsx)(y,{children:(0,U.jsx)(`form`,{id:`sign-up`,onSubmit:g,noValidate:!0,children:(0,U.jsxs)(D,{children:[b>0&&(0,U.jsx)(o,{variant:`destructive`,title:`Fix ${b} ${b===1?`field`:`fields`} to continue`}),(0,U.jsx)(p,{...m,name:`name`,label:`Name`,placeholder:`Jane Doe`,leadIcon:(0,U.jsx)(s,{}),error:r.name}),(0,U.jsx)(p,{...m,name:`email`,type:`email`,label:`Email`,placeholder:`mail@domain.com`,leadIcon:(0,U.jsx)(c,{}),caption:`We never share it`,error:r.email}),(0,U.jsx)(j,{...m,name:`role`,label:`Role`,placeholder:`Select a role`,options:W,error:r.role}),(0,U.jsx)(j,{...m,name:`teams`,label:`Teams`,placeholder:`Select teams`,options:G,multiple:!0,caption:`Pick all that apply`}),(0,U.jsx)(k,{label:`Timezone`,description:`Reminders follow it`,disabled:n,children:(0,U.jsx)(w,{variant:e,size:t,name:`timezone`,placeholder:`Search timezones`,options:q,leadIcon:(0,U.jsx)(d,{})})}),(0,U.jsx)(E,{children:`Subscription`}),(0,U.jsx)(j,{...m,name:`plan`,label:`Plan`,placeholder:`Select a plan`,options:K,defaultValue:`free`,caption:`You can change it later`}),(0,U.jsxs)(M,{name:`billing`,label:`Billing`,defaultValue:`monthly`,columns:2,disabled:n,children:[(0,U.jsx)(P,{value:`monthly`,label:`Monthly`}),(0,U.jsx)(P,{value:`yearly`,label:`Yearly`,caption:`2 months free`})]}),(0,U.jsx)(I,{variant:e,disabled:n,name:`bio`,label:`About you`,placeholder:`What do you work on?`,showCount:!0,limit:160}),(0,U.jsx)(T,{legend:`Notifications`,description:`You can change these any time.`,children:(0,U.jsx)(_,{name:`updates`,label:`Product updates`,caption:`One email a month`,disabled:n})}),(0,U.jsx)(h,{name:`terms`,label:`I accept the terms of service`,error:r.terms,disabled:n})]})})}),(0,U.jsxs)(x,{children:[(0,U.jsx)(i,{type:`reset`,form:`sign-up`,variant:`ghost`,size:t,disabled:n,onClick:()=>{a({}),f(null)},children:`Reset`}),(0,U.jsx)(i,{type:`submit`,form:`sign-up`,size:t,disabled:n,children:`Create account`})]}),u&&(0,U.jsx)(y,{children:(0,U.jsx)(`pre`,{"data-testid":`submitted`,style:{margin:0,padding:12,borderRadius:4,background:`var(--ds-fill-1)`,color:`var(--ds-foreground)`,fontSize:12},children:JSON.stringify(u,null,2)})}),(0,U.jsx)(B,{})]})}},X=[`SignUp`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
            </FieldSet>
            <Checkbox name="terms" label="I accept the terms of service" error={errors.terms} disabled={disabled} />
            </FieldGroup>
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
}`,...Y.parameters?.docs?.source}}}})))()}Z();export{Y as SignUp,X as __namedExportsOrder,J as default};