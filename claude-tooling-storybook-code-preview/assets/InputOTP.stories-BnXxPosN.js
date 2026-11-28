import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-CEPbjgPm.js";import{n as r,t as i}from"./Button-G1r8qACU.js";import{o as a,t as o}from"./Field-Nh9CgWIt.js";import{i as s,n as c,o as l,r as u,t as d}from"./Card-C0pBlbg3.js";import{n as f,t as p}from"./InputOTP-BshlHIiP.js";var m,h,g,_,v,y,b,x,identity,S,C,w,T,E,D,O,k,A;function init_InputOTP_stories(){return(init_InputOTP_stories=e((()=>{m=n(),r(),l(),a(),f(),h=t(),g={title:`Components/Input OTP`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Input OTP** and **OTP Slot** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=113-2)): a one-time code of `length` characters (6 by default) with `value` / `defaultValue` / `onValueChange` and `onComplete` once every slot is filled. Figma Layout → `layout` (`groups` with `groups` 1–3, or `cells`), Separator → `separator`, State=Invalid → `invalid` (or a Field's error), Disabled → `disabled`. `pattern` keeps digits (default), letters and digits, or a RegExp. One real `<input autocomplete=\"one-time-code\">` lies invisible over the slots, so typing, Backspace, paste and the phone's code autofill all work and screen readers meet one text field; name it with a Field label or `aria-label`."}}}},_={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,color:`var(--ds-foreground)`,margin:0},v={..._,color:`var(--ds-muted-foreground)`},y={display:`grid`,justifyItems:`center`,gap:16,textAlign:`center`},b={args:{layout:`groups`,groups:1,separator:!0,length:6,invalid:!1,disabled:!1},argTypes:{layout:{name:`Layout`,control:`inline-radio`,options:[`groups`,`cells`]},groups:{control:{type:`number`,min:1,max:3}},separator:{name:`Separator`},invalid:{name:`State: Invalid`},disabled:{name:`State: Disabled`}},render:e=>(0,h.jsx)(p,{"aria-label":`Verification code`,...e})},x={render:function Render(){let[e,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(!1);return(0,h.jsxs)(d,{style:{width:360,maxWidth:`100%`},children:[(0,h.jsx)(s,{title:`Verify your email`,description:`Enter the 6-digit code we sent to your inbox.`}),(0,h.jsx)(c,{children:(0,h.jsx)(p,{"aria-label":`Verification code`,layout:`cells`,fullWidth:!0,value:e,onValueChange:t,style:{"--otp-slot-height":`48px`}})}),(0,h.jsx)(u,{children:(0,h.jsx)(i,{style:{width:`100%`},disabled:e.length<6,onClick:()=>r(!0),children:n?`Verified`:`Verify`})})]})}},identity=e=>(0,h.jsxs)(`div`,{style:y,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`p`,{style:{..._,fontSize:16,lineHeight:`24px`,fontWeight:500},children:`Verify your identity`}),(0,h.jsxs)(`p`,{style:v,children:[`We’ve sent an email with your code to`,(0,h.jsx)(`br`,{}),`hey@example.com`]})]}),e]}),S={render:function Render(){let[e,t]=(0,m.useState)(``);return identity((0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p,{"aria-label":`Verification code`,layout:`cells`,value:e,onValueChange:t}),(0,h.jsx)(i,{disabled:e.length<6,children:`Continue`})]}))}},C={render:function Render(){let[e,t]=(0,m.useState)(``);return identity((0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p,{"aria-label":`Verification code`,value:e,onValueChange:t}),(0,h.jsx)(i,{disabled:e.length<6,children:`Continue`})]}))}},w={render:function Render(){let[e,t]=(0,m.useState)(``);return identity((0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p,{"aria-label":`Verification code`,groups:2,value:e,onValueChange:t}),(0,h.jsx)(i,{disabled:e.length<6,children:`Continue`})]}))}},T={render:()=>(0,h.jsxs)(`div`,{style:{display:`grid`,gap:16,justifyItems:`start`},children:[(0,h.jsx)(p,{"aria-label":`Single group`,defaultValue:`42`}),(0,h.jsx)(p,{"aria-label":`Two groups`,groups:2,defaultValue:`42`}),(0,h.jsx)(p,{"aria-label":`Three groups`,groups:3,defaultValue:`42`}),(0,h.jsx)(p,{"aria-label":`Cells`,layout:`cells`,defaultValue:`42`})]})},E={render:function Render(){let[e,t]=(0,m.useState)(``),n=e.length===6&&e!==`123456`;return(0,h.jsx)(`div`,{style:{width:320},children:(0,h.jsx)(o,{label:`Recovery code`,description:`Try 123456.`,error:n?`That code is not right. Check the email and try again.`:void 0,children:(0,h.jsx)(p,{groups:2,value:e,onValueChange:t,name:`code`})})})}},D={render:()=>(0,h.jsx)(p,{"aria-label":`Backup key`,length:8,groups:2,pattern:`alphanumeric`,defaultValue:`AB12`})},O={render:()=>(0,h.jsxs)(`div`,{style:{display:`grid`,gap:16,justifyItems:`start`},children:[(0,h.jsx)(p,{"aria-label":`Default`,defaultValue:`42`}),(0,h.jsx)(p,{"aria-label":`Invalid`,defaultValue:`429173`,invalid:!0}),(0,h.jsx)(p,{"aria-label":`Disabled`,disabled:!0})]})},k={parameters:{layout:`fullscreen`},render:()=>(0,h.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,h.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,justifyItems:`start`},children:[(0,h.jsx)(p,{"aria-label":`Code (${e})`,groups:2,defaultValue:`42`}),(0,h.jsx)(p,{"aria-label":`Cells (${e})`,layout:`cells`,defaultValue:`42`}),(0,h.jsx)(p,{"aria-label":`Invalid (${e})`,defaultValue:`429173`,invalid:!0})]},e))})},A=[`Playground`,`VerifyEmail`,`Cells`,`DigitsOnly`,`Separator`,`Layouts`,`WithField`,`Alphanumeric`,`States`,`Themes`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'groups',
    groups: 1,
    separator: true,
    length: 6,
    invalid: false,
    disabled: false
  },
  argTypes: {
    layout: {
      name: 'Layout',
      control: 'inline-radio',
      options: ['groups', 'cells']
    },
    groups: {
      control: {
        type: 'number',
        min: 1,
        max: 3
      }
    },
    separator: {
      name: 'Separator'
    },
    invalid: {
      name: 'State: Invalid'
    },
    disabled: {
      name: 'State: Disabled'
    }
  },
  render: args => <InputOTP aria-label="Verification code" {...args} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [code, setCode] = useState('');
    const [verified, setVerified] = useState(false);
    return <Card style={{
      width: 360,
      maxWidth: '100%'
    }}>
        <CardHeader title="Verify your email" description="Enter the 6-digit code we sent to your inbox." />
        <CardContent>
          <InputOTP aria-label="Verification code" layout="cells" fullWidth value={code} onValueChange={setCode} style={{
          '--otp-slot-height': '48px'
        } as CSSProperties} />
        </CardContent>
        <CardFooter>
          <Button style={{
          width: '100%'
        }} disabled={code.length < 6} onClick={() => setVerified(true)}>
            {verified ? 'Verified' : 'Verify'}
          </Button>
        </CardFooter>
      </Card>;
  }
}`,...x.parameters?.docs?.source},description:{story:`Figma demo "Input OTP": wide cells in a card; Verify waits for all six digits.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [code, setCode] = useState('');
    return identity(<>
        <InputOTP aria-label="Verification code" layout="cells" value={code} onValueChange={setCode} />
        <Button disabled={code.length < 6}>Continue</Button>
      </>);
  }
}`,...S.parameters?.docs?.source},description:{story:`Figma demo "Cells": each slot in its own box; Continue submits once the code is complete.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [code, setCode] = useState('');
    return identity(<>
        <InputOTP aria-label="Verification code" value={code} onValueChange={setCode} />
        <Button disabled={code.length < 6}>Continue</Button>
      </>);
  }
}`,...C.parameters?.docs?.source},description:{story:`Figma demo "Digits only": one joined group; letters are dropped as you type or paste.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [code, setCode] = useState('');
    return identity(<>
        <InputOTP aria-label="Verification code" groups={2} value={code} onValueChange={setCode} />
        <Button disabled={code.length < 6}>Continue</Button>
      </>);
  }
}`,...w.parameters?.docs?.source},description:{story:`Figma demo "Separator": two groups of three with a minus between them.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    justifyItems: 'start'
  }}>
      <InputOTP aria-label="Single group" defaultValue="42" />
      <InputOTP aria-label="Two groups" groups={2} defaultValue="42" />
      <InputOTP aria-label="Three groups" groups={3} defaultValue="42" />
      <InputOTP aria-label="Cells" layout="cells" defaultValue="42" />
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Figma Layout: Single group, Two groups, Three groups and Cells.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [code, setCode] = useState('');
    const wrong = code.length === 6 && code !== '123456';
    return <div style={{
      width: 320
    }}>
        <Field label="Recovery code" description="Try 123456." error={wrong ? 'That code is not right. Check the email and try again.' : undefined}>
          <InputOTP groups={2} value={code} onValueChange={setCode} name="code" />
        </Field>
      </div>;
  }
}`,...E.parameters?.docs?.source},description:{story:`In a Field: the label names it and a wrong code turns it invalid with the Field's error.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <InputOTP aria-label="Backup key" length={8} groups={2} pattern="alphanumeric" defaultValue="AB12" />
}`,...D.parameters?.docs?.source},description:{story:`pattern="alphanumeric": letters and digits, for codes such as backup keys.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    justifyItems: 'start'
  }}>
      <InputOTP aria-label="Default" defaultValue="42" />
      <InputOTP aria-label="Invalid" defaultValue="429173" invalid />
      <InputOTP aria-label="Disabled" disabled />
    </div>
}`,...O.parameters?.docs?.source},description:{story:`Figma State: Default, Invalid, Disabled.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24,
      display: 'grid',
      gap: 16,
      justifyItems: 'start'
    }}>
          <InputOTP aria-label={\`Code (\${scheme})\`} groups={2} defaultValue="42" />
          <InputOTP aria-label={\`Cells (\${scheme})\`} layout="cells" defaultValue="42" />
          <InputOTP aria-label={\`Invalid (\${scheme})\`} defaultValue="429173" invalid />
        </div>)}
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...k.parameters?.docs?.description}}}})))()}init_InputOTP_stories();export{D as Alphanumeric,S as Cells,C as DigitsOnly,T as Layouts,b as Playground,w as Separator,O as States,k as Themes,x as VerifyEmail,E as WithField,A as __namedExportsOrder,g as default};