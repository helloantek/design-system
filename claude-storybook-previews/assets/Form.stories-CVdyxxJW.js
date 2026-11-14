import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{h as t,n}from"./iframe-CscUdWY6.js";import{r,s as i,t as a}from"./react-DIX2QV3q.js";import{n as o,t as s}from"./Button-Dttl8qqy.js";import{r as c,t as l}from"./Input-5CvbNOQ-.js";import{n as u,t as d}from"./Select-BaB781yo.js";var f,p,m,h,g,_,v;function y(){return(y=e((()=>{f=t(),i(),o(),c(),u(),p=n(),m=[{value:`designer`,label:`Designer`},{value:`engineer`,label:`Engineer`},{value:`pm`,label:`Product manager`}],h=[{label:`Plans`,options:[{value:`free`,label:`Free`,caption:`€0`},{value:`pro`,label:`Pro`,caption:`€12`,badge:`Popular`},{value:`enterprise`,label:`Enterprise`,caption:`Contact us`,disabled:!0}]},{type:`separator`},{value:`trial`,label:`Start a 14-day trial`}],g={title:`Playground/Form`,parameters:{layout:`padded`,docs:{description:{component:`A sign-up form made of Input, Select and Button, for trying components together before they are merged. Submit to see the validation and the submitted form data. Use the toolbar to switch brand and colour scheme.`}}}},_={args:{variant:`default`,size:`lg`,disabled:!1},argTypes:{variant:{control:`inline-radio`,options:[`default`,`shadow`,`soft`]},size:{control:`inline-radio`,options:[`lg`,`sm`]}},render:function({variant:e,size:t,disabled:n}){let[i,o]=(0,f.useState)({}),[c,u]=(0,f.useState)(null),g={variant:e,size:t,disabled:n};return(0,p.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t=Object.fromEntries(new FormData(e.currentTarget)),n={};String(t.name??``).trim()||(n.name=`Enter your name`),/^\S+@\S+\.\S+$/.test(String(t.email??``))||(n.email=`Enter a valid email address`),t.role||(n.role=`Choose a role`),o(n),u(Object.keys(n).length?null:t)},noValidate:!0,style:{display:`grid`,gap:20,width:360,fontFamily:`var(--ds-font-family-body)`},children:[(0,p.jsx)(l,{...g,name:`name`,label:`Name`,placeholder:`Jane Doe`,leadIcon:(0,p.jsx)(r,{}),error:i.name}),(0,p.jsx)(l,{...g,name:`email`,type:`email`,label:`Email`,placeholder:`mail@domain.com`,leadIcon:(0,p.jsx)(a,{}),caption:`We never share it`,error:i.email}),(0,p.jsx)(d,{...g,name:`role`,label:`Role`,placeholder:`Select a role`,options:m,error:i.role}),(0,p.jsx)(d,{...g,name:`plan`,label:`Plan`,placeholder:`Select a plan`,options:h,defaultValue:`free`,caption:`You can change it later`}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:8,justifyContent:`flex-end`},children:[(0,p.jsx)(s,{type:`reset`,variant:`ghost`,size:t===`sm`?`sm`:`md`,disabled:n,onClick:()=>{o({}),u(null)},children:`Reset`}),(0,p.jsx)(s,{type:`submit`,size:t===`sm`?`sm`:`md`,disabled:n,children:`Create account`})]}),c&&(0,p.jsx)(`pre`,{"data-testid":`submitted`,style:{margin:0,padding:12,borderRadius:4,background:`var(--ds-bg-input-soft)`,color:`var(--ds-text-default)`,fontSize:12},children:JSON.stringify(c,null,2)})]})}},v=[`SignUp`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
      options: ['lg', 'sm']
    }
  },
  render: function Render({
    variant,
    size,
    disabled
  }) {
    const [errors, setErrors] = useState<Errors>({});
    const [submitted, setSubmitted] = useState<Record<string, FormDataEntryValue> | null>(null);
    const field = {
      variant,
      size,
      disabled
    };
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.currentTarget));
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
      fontFamily: 'var(--ds-font-family-body)'
    }}>
        <Input {...field} name="name" label="Name" placeholder="Jane Doe" leadIcon={<RiUser3Line />} error={errors.name} />
        <Input {...field} name="email" type="email" label="Email" placeholder="mail@domain.com" leadIcon={<RiAtLine />} caption="We never share it" error={errors.email} />
        <Select {...field} name="role" label="Role" placeholder="Select a role" options={roles} error={errors.role} />
        <Select {...field} name="plan" label="Plan" placeholder="Select a plan" options={plans} defaultValue="free" caption="You can change it later" />
        <div style={{
        display: 'flex',
        gap: 8,
        justifyContent: 'flex-end'
      }}>
          <Button type="reset" variant="ghost" size={size === 'sm' ? 'sm' : 'md'} disabled={disabled} onClick={() => {
          setErrors({});
          setSubmitted(null);
        }}>
            Reset
          </Button>
          <Button type="submit" size={size === 'sm' ? 'sm' : 'md'} disabled={disabled}>
            Create account
          </Button>
        </div>
        {submitted && <pre data-testid="submitted" style={{
        margin: 0,
        padding: 12,
        borderRadius: 4,
        background: 'var(--ds-bg-input-soft)',
        color: 'var(--ds-text-default)',
        fontSize: 12
      }}>
            {JSON.stringify(submitted, null, 2)}
          </pre>}
      </form>;
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as SignUp,v as __namedExportsOrder,g as default};