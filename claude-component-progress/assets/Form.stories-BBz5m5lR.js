import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-DlYzGY-9.js";import{n as r,t as i}from"./Button-m4AM0iJQ.js";import{n as a,t as o}from"./Alert-QMJmu39H.js";import{S as s,c,g as l,l as u,n as d}from"./react-C-kGSEFF.js";import{i as f,t as p}from"./Input-BNjPHmUv.js";import{r as m,t as h}from"./Checkbox-DSngk3Q3.js";import{r as g,t as _}from"./Switch-DSNvqnck.js";import{i as v,n as y,o as b,r as x,t as S}from"./Card-UsC7hcF7.js";import{n as C,t as w}from"./Combobox-DJZTRVRB.js";import{n as T,r as E,t as D}from"./Radio-CJ4esY39.js";import{n as O,t as k}from"./Select-D4QA584F.js";import{n as A,t as j}from"./Textarea-DMhHb6-A.js";import{i as M,o as N}from"./Field-yyHd51e2.js";import{n as P,t as F}from"./Tooltip-C9WOkHXO.js";import{i as I,n as L,r as R}from"./Sonner-CXRpxGdp.js";var z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{z=n(),l(),a(),r(),b(),m(),C(),N(),f(),E(),O(),R(),g(),A(),P(),B=t(),V=[{value:`designer`,label:`Designer`},{value:`engineer`,label:`Engineer`},{value:`pm`,label:`Product manager`}],H=[{value:`web`,label:`Web`},{value:`ios`,label:`iOS`},{value:`android`,label:`Android`},{value:`design`,label:`Design`}],U=[{label:`Plans`,options:[{value:`free`,label:`Free`,caption:`€0`},{value:`pro`,label:`Pro`,caption:`€12`,badge:`Popular`},{value:`enterprise`,label:`Enterprise`,caption:`Contact us`,disabled:!0}]},{type:`separator`},{value:`trial`,label:`Start a 14-day trial`}],W=[[`lisbon`,`(GMT+0) Lisbon`],[`warsaw`,`(GMT+1) Warsaw`],[`new-york`,`(GMT-5) New York`],[`tokyo`,`(GMT+9) Tokyo`]].map(([e,t])=>({value:e,label:t})),G={title:`Playground/Form`,parameters:{layout:`padded`,docs:{description:{component:`A sign-up form in a Card, made of Input, Select, Combobox, Textarea, Radio, Switch, Checkbox, Field Separator, Tooltip, Alert, Button and a toast, for trying components together before they are merged. Submit to see the validation and the submitted form data. Use the toolbar to switch brand and colour scheme.`}}}},K={args:{variant:`default`,size:`lg`,disabled:!1},argTypes:{variant:{control:`inline-radio`,options:[`default`,`shadow`,`soft`]},size:{control:`inline-radio`,options:[`xl`,`lg`,`default`],description:`Figma Size, shared by Input, Select, Combobox and Button`}},render:function({variant:e,size:t,disabled:n}){let[r,a]=(0,z.useState)({}),[l,f]=(0,z.useState)(null),m={variant:e,size:t,disabled:n},g=e=>{e.preventDefault();let t=new FormData(e.currentTarget),n={...Object.fromEntries(t),teams:t.getAll(`teams`)},r={};String(n.name??``).trim()||(r.name=`Enter your name`),/^\S+@\S+\.\S+$/.test(String(n.email??``))||(r.email=`Enter a valid email address`),n.role||(r.role=`Choose a role`),n.terms||(r.terms=`Accept the terms to continue`),a(r);let i=!Object.keys(r).length;f(i?n:null),i&&I.success(`Account created`,{description:`Welcome, ${n.name}`})},b=Object.keys(r).length;return(0,B.jsxs)(S,{as:`section`,"aria-label":`Create an account`,style:{width:420},children:[(0,B.jsx)(v,{title:`Create an account`,description:`It takes a minute; you can change everything later.`,action:(0,B.jsx)(F,{content:`All fields except Name, Email, Role and the terms are optional`,children:(0,B.jsx)(i,{variant:`ghost`,size:`sm`,icon:(0,B.jsx)(u,{}),"aria-label":`Help`})})}),(0,B.jsx)(y,{children:(0,B.jsxs)(`form`,{id:`sign-up`,onSubmit:g,noValidate:!0,style:{display:`grid`,gap:20},children:[b>0&&(0,B.jsx)(o,{variant:`destructive`,title:`Fix ${b} ${b===1?`field`:`fields`} to continue`}),(0,B.jsx)(p,{...m,name:`name`,label:`Name`,placeholder:`Jane Doe`,leadIcon:(0,B.jsx)(c,{}),error:r.name}),(0,B.jsx)(p,{...m,name:`email`,type:`email`,label:`Email`,placeholder:`mail@domain.com`,leadIcon:(0,B.jsx)(d,{}),caption:`We never share it`,error:r.email}),(0,B.jsx)(k,{...m,name:`role`,label:`Role`,placeholder:`Select a role`,options:V,error:r.role}),(0,B.jsx)(k,{...m,name:`teams`,label:`Teams`,placeholder:`Select teams`,options:H,multiple:!0,caption:`Pick all that apply`}),(0,B.jsx)(w,{...m,name:`timezone`,label:`Timezone`,placeholder:`Search timezones`,options:W,leadIcon:(0,B.jsx)(s,{})}),(0,B.jsx)(M,{children:`Subscription`}),(0,B.jsx)(k,{...m,name:`plan`,label:`Plan`,placeholder:`Select a plan`,options:U,defaultValue:`free`,caption:`You can change it later`}),(0,B.jsxs)(T,{name:`billing`,label:`Billing`,defaultValue:`monthly`,columns:2,disabled:n,children:[(0,B.jsx)(D,{value:`monthly`,label:`Monthly`}),(0,B.jsx)(D,{value:`yearly`,label:`Yearly`,caption:`2 months free`})]}),(0,B.jsx)(j,{variant:e,disabled:n,name:`bio`,label:`About you`,placeholder:`What do you work on?`,showCount:!0,limit:160}),(0,B.jsx)(_,{name:`updates`,label:`Product updates`,caption:`One email a month`,disabled:n}),(0,B.jsx)(h,{name:`terms`,label:`I accept the terms of service`,error:r.terms,disabled:n})]})}),(0,B.jsxs)(x,{children:[(0,B.jsx)(i,{type:`reset`,form:`sign-up`,variant:`ghost`,size:t,disabled:n,onClick:()=>{a({}),f(null)},children:`Reset`}),(0,B.jsx)(i,{type:`submit`,form:`sign-up`,size:t,disabled:n,children:`Create account`})]}),l&&(0,B.jsx)(y,{children:(0,B.jsx)(`pre`,{"data-testid":`submitted`,style:{margin:0,padding:12,borderRadius:4,background:`var(--ds-fill-1)`,color:`var(--ds-foreground)`,fontSize:12},children:JSON.stringify(l,null,2)})}),(0,B.jsx)(L,{})]})}},q=[`SignUp`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
            <FieldSeparator>Subscription</FieldSeparator>
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
}`,...K.parameters?.docs?.source}}}})))()}J();export{K as SignUp,q as __namedExportsOrder,G as default};