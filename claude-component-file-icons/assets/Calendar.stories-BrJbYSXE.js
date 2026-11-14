import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BAUMTE2E.js";import{n as r,t as i}from"./Button-BW9JWdh6.js";import{n as a,r as o,t as s}from"./ToggleGroup-CDLx9YjV.js";import{n as c,t as l}from"./Calendar-B9nvWex5.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{u=n(),r(),o(),c(),d=t(),f={title:`Components/Calendar`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Calendar**, **Calendar Navigation** and **Calendar Day** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=263-9095)): Figma Mode → `mode` (`single` · `range`) with `selected` / `defaultSelected` / `onSelect` (a `Date`, or `{ from, to }`), Type → `variant` (`panel` · `flat`), Calendar Navigation Variant → `captionLayout` (`label` · `dropdown` · `dropdown-months` · `dropdown-years`). `month` / `defaultMonth` / `onMonthChange` choose the month, `numberOfMonths` and `orientation` show several, `min` / `max` / `disabled` block days (Day=disabled), `weekStartsOn` and `locale` follow the reader, `footer` and `aside` hold presets. The grid is one Tab stop: arrows move by a day or a week, Home / End to the week's ends, Page Up / Page Down by a month (Shift: a year), Enter or Space picks."}}}},p=new Date(2026,2,17),m=new Date(2026,2,1),h={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,color:`var(--ds-muted-foreground)`,margin:0},g=e=>e?e.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}):`…`,_={args:{mode:`single`,variant:`panel`,captionLayout:`label`,numberOfMonths:1,weekStartsOn:0,showOutsideDays:!0},argTypes:{mode:{name:`Mode`,control:`inline-radio`,options:[`single`,`range`]},variant:{name:`Type`,control:`inline-radio`,options:[`panel`,`flat`]},captionLayout:{name:`Navigation`,control:`select`,options:[`label`,`dropdown`,`dropdown-months`,`dropdown-years`]},numberOfMonths:{control:{type:`number`,min:1,max:3}},weekStartsOn:{control:`inline-radio`,options:[0,1]}},render:({mode:e,...t})=>e===`range`?(0,d.jsx)(l,{mode:`range`,defaultMonth:m,today:p,...t}):(0,d.jsx)(l,{defaultMonth:m,today:p,defaultSelected:new Date(2026,2,27),...t})},v={render:function(){let[e,t]=(0,u.useState)(new Date(2026,2,27));return(0,d.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`center`},children:[(0,d.jsx)(l,{selected:e,onSelect:t,defaultMonth:m,today:p}),(0,d.jsxs)(`p`,{style:h,"aria-live":`polite`,children:[`Selected: `,g(e)]})]})}},y={render:()=>(0,d.jsx)(l,{captionLayout:`dropdown`,defaultMonth:m,today:p,defaultSelected:new Date(2026,2,27),startMonth:new Date(2016,0,1),endMonth:new Date(2030,11,1)})},b={render:()=>(0,d.jsx)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[`label`,`dropdown`,`dropdown-months`,`dropdown-years`].map(e=>(0,d.jsx)(l,{"aria-label":`Calendar (${e})`,captionLayout:e,defaultMonth:m,today:p},e))})},x=(e,t)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+t),S={render:function(){let[e,t]=(0,u.useState)(new Date(2026,2,27)),[n,r]=(0,u.useState)(m),a=e=>{t(e),r(new Date(e.getFullYear(),e.getMonth(),1))},o=[[`Today`,p],[`Tomorrow`,x(p,1)],[`In a week`,x(p,7)],[`In a month`,new Date(2026,3,17)]];return(0,d.jsx)(l,{selected:e,onSelect:t,month:n,onMonthChange:r,today:p,footer:(0,d.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:8},children:o.map(([e,t])=>(0,d.jsx)(i,{variant:`outline`,size:`sm`,onClick:()=>a(t),children:e},e))})})}},C={render:function(){let[e,t]=(0,u.useState)({from:new Date(2026,2,27),to:new Date(2026,3,14)});return(0,d.jsxs)(`div`,{style:{display:`grid`,gap:12,justifyItems:`center`},children:[(0,d.jsx)(l,{mode:`range`,selected:e,onSelect:t,numberOfMonths:2,defaultMonth:m,today:p}),(0,d.jsxs)(`p`,{style:h,"aria-live":`polite`,children:[g(e.from),` – `,g(e.to)]})]})}},w={render:()=>(0,d.jsx)(l,{mode:`range`,orientation:`vertical`,numberOfMonths:2,defaultMonth:m,today:p,defaultSelected:{from:new Date(2026,2,27),to:new Date(2026,3,14)}})},T={today:()=>({from:p,to:p}),week:()=>({from:x(p,-6),to:p}),month:()=>({from:new Date(2026,1,17),to:p}),year:()=>({from:new Date(2025,2,17),to:p})},E={render:function(){let[e,t]=(0,u.useState)(`month`),[n,r]=(0,u.useState)(T.month()),[i,o]=(0,u.useState)(new Date(2026,1,1));return(0,d.jsx)(l,{mode:`range`,numberOfMonths:2,selected:n,onSelect:e=>{r(e),t(``)},month:i,onMonthChange:o,today:p,aside:(0,d.jsxs)(s,{type:`single`,orientation:`vertical`,"aria-label":`Presets`,value:e,onValueChange:e=>{if(!e)return;let n=T[e]();t(e),r(n),o(new Date(n.from.getFullYear(),n.from.getMonth(),1))},style:{width:`100%`},children:[(0,d.jsx)(a,{value:`today`,children:`Today`}),(0,d.jsx)(a,{value:`week`,children:`Last week`}),(0,d.jsx)(a,{value:`month`,children:`Last month`}),(0,d.jsx)(a,{value:`year`,children:`Last year`})]})})}},D={render:()=>(0,d.jsx)(l,{defaultMonth:m,today:p,min:p,disabled:e=>e.getDay()===0||e.getDay()===6,"aria-label":`Delivery date`})},O={render:()=>(0,d.jsx)(l,{locale:`pl-PL`,weekStartsOn:1,defaultMonth:m,today:p,defaultSelected:new Date(2026,2,27),"aria-label":`Kalendarz`})},k={parameters:{layout:`fullscreen`},render:()=>(0,d.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,d.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`flex`,gap:16,flexWrap:`wrap`},children:[(0,d.jsx)(l,{"aria-label":`Single (${e})`,defaultMonth:m,today:p,defaultSelected:new Date(2026,2,27)}),(0,d.jsx)(l,{"aria-label":`Range (${e})`,mode:`range`,variant:`flat`,defaultMonth:m,today:p,defaultSelected:{from:new Date(2026,2,20),to:new Date(2026,2,27)}})]},e))})},A=[`Playground`,`Single`,`MonthAndYearSelector`,`NavigationVariants`,`Presets`,`Range`,`RangeVertical`,`RangeWithPresets`,`DisabledDays`,`Locale`,`Themes`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    variant: 'panel',
    captionLayout: 'label',
    numberOfMonths: 1,
    weekStartsOn: 0,
    showOutsideDays: true
  },
  argTypes: {
    mode: {
      name: 'Mode',
      control: 'inline-radio',
      options: ['single', 'range']
    },
    variant: {
      name: 'Type',
      control: 'inline-radio',
      options: ['panel', 'flat']
    },
    captionLayout: {
      name: 'Navigation',
      control: 'select',
      options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years']
    },
    numberOfMonths: {
      control: {
        type: 'number',
        min: 1,
        max: 3
      }
    },
    weekStartsOn: {
      control: 'inline-radio',
      options: [0, 1]
    }
  },
  render: ({
    mode,
    ...args
  }) => mode === 'range' ? <Calendar mode="range" defaultMonth={march} today={today} {...args} /> : <Calendar defaultMonth={march} today={today} defaultSelected={new Date(2026, 2, 27)} {...args} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [date, setDate] = useState<Date>(new Date(2026, 2, 27));
    return <div style={{
      display: 'grid',
      gap: 12,
      justifyItems: 'center'
    }}>
        <Calendar selected={date} onSelect={setDate} defaultMonth={march} today={today} />
        <p style={text} aria-live="polite">
          Selected: {fmt(date)}
        </p>
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`Figma demo "Calendar": one date.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Calendar captionLayout="dropdown" defaultMonth={march} today={today} defaultSelected={new Date(2026, 2, 27)} startMonth={new Date(2016, 0, 1)} endMonth={new Date(2030, 11, 1)} />
}`,...y.parameters?.docs?.source},description:{story:`Figma demo "Month and year selector": Calendar Navigation Variant=dropdown.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }}>
      {(['label', 'dropdown', 'dropdown-months', 'dropdown-years'] as const).map(layout => <Calendar key={layout} aria-label={\`Calendar (\${layout})\`} captionLayout={layout} defaultMonth={march} today={today} />)}
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Calendar Navigation Variant=dropdown-months and dropdown-years.`,...b.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [date, setDate] = useState<Date>(new Date(2026, 2, 27));
    const [month, setMonth] = useState(march);
    const pick = (d: Date) => {
      setDate(d);
      setMonth(new Date(d.getFullYear(), d.getMonth(), 1));
    };
    const presets: [string, Date][] = [['Today', today], ['Tomorrow', addDays(today, 1)], ['In a week', addDays(today, 7)], ['In a month', new Date(2026, 3, 17)]];
    return <Calendar selected={date} onSelect={setDate} month={month} onMonthChange={setMonth} today={today} footer={<div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }}>
            {presets.map(([label, d]) => <Button key={label} variant="outline" size="sm" onClick={() => pick(d)}>
                {label}
              </Button>)}
          </div>} />;
  }
}`,...S.parameters?.docs?.source},description:{story:`Figma demo "Presets": quick picks under the month.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [range, setRange] = useState<DateRange>({
      from: new Date(2026, 2, 27),
      to: new Date(2026, 3, 14)
    });
    return <div style={{
      display: 'grid',
      gap: 12,
      justifyItems: 'center'
    }}>
        <Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} defaultMonth={march} today={today} />
        <p style={text} aria-live="polite">
          {fmt(range.from)} – {fmt(range.to)}
        </p>
      </div>;
  }
}`,...C.parameters?.docs?.source},description:{story:`Figma demo "Range": two months side by side.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Calendar mode="range" orientation="vertical" numberOfMonths={2} defaultMonth={march} today={today} defaultSelected={{
    from: new Date(2026, 2, 27),
    to: new Date(2026, 3, 14)
  }} />
}`,...w.parameters?.docs?.source},description:{story:`Figma demo "Range vertical": two months stacked.`,...w.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [preset, setPreset] = useState('month');
    const [range, setRange] = useState<DateRange>(rangePresets.month());
    const [month, setMonth] = useState(new Date(2026, 1, 1));
    return <Calendar mode="range" numberOfMonths={2} selected={range} onSelect={r => {
      setRange(r);
      setPreset('');
    }} month={month} onMonthChange={setMonth} today={today} aside={<ToggleGroup type="single" orientation="vertical" aria-label="Presets" value={preset} onValueChange={v => {
      if (!v) return;
      const r = rangePresets[v]();
      setPreset(v);
      setRange(r);
      setMonth(new Date(r.from!.getFullYear(), r.from!.getMonth(), 1));
    }} style={{
      width: '100%'
    }}>
            <ToggleGroupItem value="today">Today</ToggleGroupItem>
            <ToggleGroupItem value="week">Last week</ToggleGroupItem>
            <ToggleGroupItem value="month">Last month</ToggleGroupItem>
            <ToggleGroupItem value="year">Last year</ToggleGroupItem>
          </ToggleGroup>} />;
  }
}`,...E.parameters?.docs?.source},description:{story:`Figma demo "Range with presets": a column of presets beside two months.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Calendar defaultMonth={march} today={today} min={today} disabled={d => d.getDay() === 0 || d.getDay() === 6} aria-label="Delivery date" />
}`,...D.parameters?.docs?.source},description:{story:`Figma Day=disabled: weekends and days before today cannot be picked.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Calendar locale="pl-PL" weekStartsOn={1} defaultMonth={march} today={today} defaultSelected={new Date(2026, 2, 27)} aria-label="Kalendarz" />
}`,...O.parameters?.docs?.source},description:{story:`weekStartsOn={1} and another locale (Polish).`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }}>
          <Calendar aria-label={\`Single (\${scheme})\`} defaultMonth={march} today={today} defaultSelected={new Date(2026, 2, 27)} />
          <Calendar aria-label={\`Range (\${scheme})\`} mode="range" variant="flat" defaultMonth={march} today={today} defaultSelected={{
        from: new Date(2026, 2, 20),
        to: new Date(2026, 2, 27)
      }} />
        </div>)}
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...k.parameters?.docs?.description}}}})))()}j();export{D as DisabledDays,O as Locale,y as MonthAndYearSelector,b as NavigationVariants,_ as Playground,S as Presets,C as Range,w as RangeVertical,E as RangeWithPresets,v as Single,k as Themes,A as __namedExportsOrder,f as default};