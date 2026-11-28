import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-q-o9wUds.js";import{i as r,o as i,t as a}from"./react-BYt6_34q.js";import{n as o,t as s}from"./Button-Bra-nAR5.js";import{r as c,t as l}from"./Input-Cu0H-Z8Q.js";import{n as u,t as d}from"./Select-_v6sD54k.js";var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{f=n(),i(),o(),c(),u(),p=t(),m=[{value:`designer`,label:`Designer`},{value:`engineer`,label:`Engineer`},{value:`pm`,label:`Product manager`}],h=[{value:`web`,label:`Web`},{value:`ios`,label:`iOS`},{value:`android`,label:`Android`},{value:`design`,label:`Design`}],g=[{label:`Plans`,options:[{value:`free`,label:`Free`,caption:`€0`},{value:`pro`,label:`Pro`,caption:`€12`,badge:`Popular`},{value:`enterprise`,label:`Enterprise`,caption:`Contact us`,disabled:!0}]},{type:`separator`},{value:`trial`,label:`Start a 14-day trial`}],_={title:`Playground/Form`,parameters:{layout:`padded`,docs:{description:{component:`A sign-up form made of Input, Select and Button, for trying components together before they are merged. Submit to see the validation and the submitted form data. Use the toolbar to switch brand and colour scheme.`}}}},v={args:{variant:`default`,size:`lg`,disabled:!1},argTypes:{variant:{control:`inline-radio`,options:[`default`,`shadow`,`soft`]},size:{control:`inline-radio`,options:[`xl`,`lg`,`default`],description:`Figma Size, shared by Input, Select and Button`}},render:function({variant:e,size:t,disabled:n}){let[i,o]=(0,f.useState)({}),[c,u]=(0,f.useState)(null),_={variant:e,size:t,disabled:n};return(0,p.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t=new FormData(e.currentTarget),n={...Object.fromEntries(t),teams:t.getAll(`teams`)},r={};String(n.name??``).trim()||(r.name=`Enter your name`),/^\S+@\S+\.\S+$/.test(String(n.email??``))||(r.email=`Enter a valid email address`),n.role||(r.role=`Choose a role`),o(r),u(Object.keys(r).length?null:n)},noValidate:!0,style:{display:`grid`,gap:20,width:360,fontFamily:`var(--ds-font-sans)`},children:[(0,p.jsx)(l,{..._,name:`name`,label:`Name`,placeholder:`Jane Doe`,leadIcon:(0,p.jsx)(r,{}),error:i.name}),(0,p.jsx)(l,{..._,name:`email`,type:`email`,label:`Email`,placeholder:`mail@domain.com`,leadIcon:(0,p.jsx)(a,{}),caption:`We never share it`,error:i.email}),(0,p.jsx)(d,{..._,name:`role`,label:`Role`,placeholder:`Select a role`,options:m,error:i.role}),(0,p.jsx)(d,{..._,name:`teams`,label:`Teams`,placeholder:`Select teams`,options:h,multiple:!0,caption:`Pick all that apply`}),(0,p.jsx)(d,{..._,name:`plan`,label:`Plan`,placeholder:`Select a plan`,options:g,defaultValue:`free`,caption:`You can change it later`}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:8,justifyContent:`flex-end`},children:[(0,p.jsx)(s,{type:`reset`,variant:`ghost`,size:t,disabled:n,onClick:()=>{o({}),u(null)},children:`Reset`}),(0,p.jsx)(s,{type:`submit`,size:t,disabled:n,children:`Create account`})]}),c&&(0,p.jsx)(`pre`,{"data-testid":`submitted`,style:{margin:0,padding:12,borderRadius:4,background:`var(--ds-fill-1)`,color:`var(--ds-foreground)`,fontSize:12},children:JSON.stringify(c,null,2)})]})}},y=[`SignUp`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
      description: 'Figma Size, shared by Input, Select and Button'
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
      setErrors(next);
      setSubmitted(Object.keys(next).length ? null : data);
    };
    return <form onSubmit={onSubmit} noValidate style={{
      display: 'grid',
      gap: 20,
      width: 360,
      fontFamily: 'var(--ds-font-sans)'
    }}>
        <Input {...field} name="name" label="Name" placeholder="Jane Doe" leadIcon={<RiUser3Line />} error={errors.name} />
        <Input {...field} name="email" type="email" label="Email" placeholder="mail@domain.com" leadIcon={<RiAtLine />} caption="We never share it" error={errors.email} />
        <Select {...field} name="role" label="Role" placeholder="Select a role" options={roles} error={errors.role} />
        <Select {...field} name="teams" label="Teams" placeholder="Select teams" options={teams} multiple caption="Pick all that apply" />
        <Select {...field} name="plan" label="Plan" placeholder="Select a plan" options={plans} defaultValue="free" caption="You can change it later" />
        <div style={{
        display: 'flex',
        gap: 8,
        justifyContent: 'flex-end'
      }}>
          <Button type="reset" variant="ghost" size={size} disabled={disabled} onClick={() => {
          setErrors({});
          setSubmitted(null);
        }}>
            Reset
          </Button>
          <Button type="submit" size={size} disabled={disabled}>
            Create account
          </Button>
        </div>
        {submitted && <pre data-testid="submitted" style={{
        margin: 0,
        padding: 12,
        borderRadius: 4,
        background: 'var(--ds-fill-1)',
        color: 'var(--ds-foreground)',
        fontSize: 12
      }}>
            {JSON.stringify(submitted, null, 2)}
          </pre>}
      </form>;
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as SignUp,y as __namedExportsOrder,_ as default};