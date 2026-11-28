import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-C1bnYZzs.js";import{n as r,t as i}from"./Button-CbIxVB1p.js";import{o as a,t as o}from"./Field-BSsD2v-M.js";import{n as s,t as c}from"./DatePicker-CU354p3W.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{l=n(),r(),a(),s(),u=t(),d={title:`Components/Date Picker`,parameters:{layout:`padded`,docs:{description:{component:"Implements the Sort UI 2.0 **Date Picker** demos ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=340-2)): an Outline Button (or, with `input`, an Input with a calendar button) that opens a Calendar 4 px below. `mode` (`single` · `range`) with `value` / `defaultValue` / `onValueChange`, `placeholder`, `format`, `showIcon`, `align`, `fullWidth`, `name` (submits YYYY-MM-DD), and the Calendar's `min`, `max`, `isDateDisabled`, `captionLayout`, `startMonth` / `endMonth`, `weekStartsOn`, `locale`, `numberOfMonths`. Opening moves focus to the calendar's day; picking a date (or a range's second date), Escape or a click outside closes it, and Escape returns focus to the trigger. Inside a Field it takes the label, description and error."}}}},f=new Date(2026,2,17),p={width:240,minHeight:400},m={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,color:`var(--ds-muted-foreground)`,margin:0},h={args:{mode:`single`,showIcon:!1,input:!1,disabled:!1},argTypes:{mode:{control:`inline-radio`,options:[`single`,`range`]}},render:({mode:e,showIcon:t,input:n,disabled:r})=>(0,u.jsx)(`div`,{style:{minHeight:400},children:e===`range`?(0,u.jsx)(c,{mode:`range`,"aria-label":`Dates`,showIcon:t,disabled:r,today:f}):(0,u.jsx)(c,{"aria-label":`Date`,showIcon:t,input:n,disabled:r,today:f})})},g={render:function(){let[e,t]=(0,l.useState)(new Date(2026,2,27));return(0,u.jsx)(`div`,{style:p,children:(0,u.jsx)(o,{label:`Review due`,description:`Jonas Lindqvist is notified on the morning of the due date.`,children:(0,u.jsx)(c,{value:e,onValueChange:t,today:f,calendarWidth:`240px`})})})}},_={render:function(){let[e,t]=(0,l.useState)({from:new Date(2026,2,27),to:new Date(2026,3,14)});return(0,u.jsx)(`div`,{style:{minHeight:400},children:(0,u.jsx)(c,{mode:`range`,"aria-label":`Trip dates`,showIcon:!0,value:e,onValueChange:t,today:f})})}},v={render:()=>(0,u.jsx)(`div`,{style:p,children:(0,u.jsx)(o,{label:`Date of birth`,children:(0,u.jsx)(c,{showIcon:!0,defaultValue:new Date(1990,8,9),format:e=>e.toLocaleDateString(`en-GB`),captionLayout:`dropdown`,startMonth:new Date(1900,0,1),endMonth:f,max:f,today:f,calendarWidth:`240px`})})})},y={render:function(){let[e,t]=(0,l.useState)(new Date(2026,8,20));return(0,u.jsxs)(`div`,{style:{...p,display:`grid`,gap:12,alignContent:`start`},children:[(0,u.jsx)(o,{label:`Subscription date`,description:`Type a date like September 20, 2026, or pick one.`,children:(0,u.jsx)(c,{input:!0,value:e,onValueChange:t,today:f,calendarWidth:`240px`})}),(0,u.jsxs)(`p`,{style:m,"aria-live":`polite`,children:[`Value: `,e?e.toDateString():`none`]})]})}},b={render:()=>(0,u.jsxs)(`div`,{style:{width:240,display:`grid`,gap:16},children:[(0,u.jsx)(o,{label:`Start date`,children:(0,u.jsx)(c,{placeholder:`Pick a start date`,today:f})}),(0,u.jsx)(o,{label:`Deadline`,error:`Pick a date after the start date.`,children:(0,u.jsx)(c,{defaultValue:new Date(2026,2,2),today:f})}),(0,u.jsx)(o,{label:`Locked`,disabled:!0,children:(0,u.jsx)(c,{defaultValue:new Date(2026,2,27),today:f})})]})},x={render:function(){let[e,t]=(0,l.useState)(``);return(0,u.jsxs)(`form`,{style:{width:280,display:`grid`,gap:12,minHeight:420,alignContent:`start`},onSubmit:e=>{e.preventDefault(),t(new URLSearchParams(new FormData(e.currentTarget)).toString())},children:[(0,u.jsx)(o,{label:`Check-in and check-out`,children:(0,u.jsx)(c,{mode:`range`,name:`stay`,defaultValue:{from:new Date(2026,2,20),to:new Date(2026,2,23)},today:f})}),(0,u.jsx)(i,{type:`submit`,style:{justifySelf:`start`},children:`Book`}),(0,u.jsx)(`output`,{style:m,children:e})]})}},S={parameters:{layout:`fullscreen`},render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,u.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,minHeight:420},children:(0,u.jsx)(`div`,{style:{width:240},children:(0,u.jsx)(o,{label:`Review due (${e})`,children:(0,u.jsx)(c,{defaultOpen:!0,defaultValue:new Date(2026,2,27),today:f,calendarWidth:`240px`})})})},e))})},C=[`Playground`,`Default`,`RangePicker`,`DateOfBirth`,`Input`,`States`,`InAForm`,`Themes`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    showIcon: false,
    input: false,
    disabled: false
  },
  argTypes: {
    mode: {
      control: 'inline-radio',
      options: ['single', 'range']
    }
  },
  render: ({
    mode,
    showIcon,
    input,
    disabled
  }) => <div style={{
    minHeight: 400
  }}>
      {mode === 'range' ? <DatePicker mode="range" aria-label="Dates" showIcon={showIcon} disabled={disabled} today={today} /> : <DatePicker aria-label="Date" showIcon={showIcon} input={input} disabled={disabled} today={today} />}
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [due, setDue] = useState<Date | null>(new Date(2026, 2, 27));
    return <div style={box}>
        <Field label="Review due" description="Jonas Lindqvist is notified on the morning of the due date.">
          <DatePicker value={due} onValueChange={setDue} today={today} calendarWidth="240px" />
        </Field>
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Figma demo "Date Picker": a Field with an Outline Button trigger.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [range, setRange] = useState<DateRange>({
      from: new Date(2026, 2, 27),
      to: new Date(2026, 3, 14)
    });
    return <div style={{
      minHeight: 400
    }}>
        <DatePicker mode="range" aria-label="Trip dates" showIcon value={range} onValueChange={setRange} today={today} />
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:`Figma demo "Range picker": a range in two months, with a calendar icon on the trigger.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={box}>
      <Field label="Date of birth">
        <DatePicker showIcon defaultValue={new Date(1990, 8, 9)} format={d => d.toLocaleDateString('en-GB')} captionLayout="dropdown" startMonth={new Date(1900, 0, 1)} endMonth={today} max={today} today={today} calendarWidth="240px" />
      </Field>
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Figma demo "Date of birth": month and year dropdowns, a numeric format, no dates after today.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [date, setDate] = useState<Date | null>(new Date(2026, 8, 20));
    return <div style={{
      ...box,
      display: 'grid',
      gap: 12,
      alignContent: 'start'
    }}>
        <Field label="Subscription date" description="Type a date like September 20, 2026, or pick one.">
          <DatePicker input value={date} onValueChange={setDate} today={today} calendarWidth="240px" />
        </Field>
        <p style={muted} aria-live="polite">
          Value: {date ? date.toDateString() : 'none'}
        </p>
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:`Figma demo "Input": type the date, or open the calendar from the button at the end.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 240,
    display: 'grid',
    gap: 16
  }}>
      <Field label="Start date">
        <DatePicker placeholder="Pick a start date" today={today} />
      </Field>
      <Field label="Deadline" error="Pick a date after the start date.">
        <DatePicker defaultValue={new Date(2026, 2, 2)} today={today} />
      </Field>
      <Field label="Locked" disabled>
        <DatePicker defaultValue={new Date(2026, 2, 27)} today={today} />
      </Field>
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Field error, disabled, and a placeholder before anything is picked.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [sent, setSent] = useState('');
    return <form style={{
      width: 280,
      display: 'grid',
      gap: 12,
      minHeight: 420,
      alignContent: 'start'
    }} onSubmit={event => {
      event.preventDefault();
      setSent(new URLSearchParams(new FormData(event.currentTarget) as unknown as Record<string, string>).toString());
    }}>
        <Field label="Check-in and check-out">
          <DatePicker mode="range" name="stay" defaultValue={{
          from: new Date(2026, 2, 20),
          to: new Date(2026, 2, 23)
        }} today={today} />
        </Field>
        <Button type="submit" style={{
        justifySelf: 'start'
      }}>
          Book
        </Button>
        <output style={muted}>{sent}</output>
      </form>;
  }
}`,...x.parameters?.docs?.source},description:{story:`In a form: the date is submitted as YYYY-MM-DD (a range as two fields).`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      minHeight: 420
    }}>
          <div style={{
        width: 240
      }}>
            <Field label={\`Review due (\${scheme})\`}>
              <DatePicker defaultOpen defaultValue={new Date(2026, 2, 27)} today={today} calendarWidth="240px" />
            </Field>
          </div>
        </div>)}
    </div>
}`,...S.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens (pickers drawn open).`,...S.parameters?.docs?.description}}}})))()}w();export{v as DateOfBirth,g as Default,x as InAForm,y as Input,h as Playground,_ as RangePicker,b as States,S as Themes,C as __namedExportsOrder,d as default};