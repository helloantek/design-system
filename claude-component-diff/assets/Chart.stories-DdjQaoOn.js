import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-C1bnYZzs.js";import{Ct as n,Ut as r,Xt as i,n as ee}from"./react-1pD5tsKm.js";import{n as te,t as a}from"./Button-CbIxVB1p.js";import{a as ne,i as re,n as ie,r as ae,t as oe}from"./Tabs-ChJ5fqNy.js";import{a as se,c as o,i as ce,l as le,n as s,o as c,r as l,s as ue,t as u}from"./Chart-C81UaXCe.js";function d({id:e,heading:t,sub:n,children:r}){return(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-end`,justifyContent:`space-between`,gap:16,flexWrap:`wrap`},children:[(0,p.jsxs)(`div`,{style:{display:`grid`,gap:6},children:[(0,p.jsx)(`h3`,{id:e,style:h,children:t}),(0,p.jsx)(`p`,{style:g,children:n})]}),r]})}function f({name:e,kind:t,children:n}){return(0,p.jsxs)(`section`,{style:{display:`grid`,gap:24,width:`min(480px, calc(100vw - 32px))`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,p.jsx)(`h4`,{style:{...m,fontSize:14,lineHeight:`20px`,fontWeight:500,color:`var(--ds-foreground)`},children:e}),(0,p.jsx)(`span`,{style:g,children:t})]}),n]})}var p,de,m,h,g,_,v,y,b,fe,pe,x,S,C,w,T,E,D,O,me,k,he,A,ge,j,_e,M,ve,ye,be,xe,N,P,F,I,Se,L,R,z,B,V,H,Ce,U,W,we,G,K,Te,q,J,Y,X,Ee,De,Z,Q,$,Oe;function ke(){return(ke=e((()=>{n(),te(),ne(),le(),p=t(),de={title:`Components/Chart`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Chart** page ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=3143-14350)): `BarChart` (vertical or horizontal, default or capped, grouped or `stacked`, value `labels`), `LineChart` (`monotone`, `linear` or `step`, `dots`), `AreaChart`, `PieChart` (pie or donut) and `RadialChart` (rings, half ring, progress), built from **Chart Grid**, **Chart Axis**, **Chart Bar**, **Chart Reference Line**, **Chart Tooltip** and **Swatch**. Cartesian charts take `data` rows, the `index` field and `series` ({ key, label, color }); hovering, or focusing the plot and using the arrow keys, shows the values in a tooltip, and every chart carries its data as a table for screen readers. `ChartLegend` and `ChartTooltip` also work on their own."}}}},m={fontFamily:`var(--ds-font-sans)`,letterSpacing:`-0.005em`,margin:0},h={...m,fontSize:16,lineHeight:`24px`,fontWeight:500,color:`var(--ds-card-foreground)`},g={...m,fontSize:14,lineHeight:`20px`,color:`var(--ds-muted-foreground)`},_={display:`grid`,gap:32,width:`min(600px, calc(100vw - 32px))`},v=e=>`var(--ds-chart-${e})`,y=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],b=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],fe=e=>`$${e.toLocaleString(`en-US`)}`,pe=[72,136,84,56,113,238,97,149,29,97,26,58].map((e,t)=>({month:y[t],subscriptions:Math.round(e/256*11e3/10)*10,orders:Math.round((256-e)/256*6e3/10)*10})),x=[{month:`Jan`,desktop:100,mobile:25},{month:`Feb`,desktop:200,mobile:40},{month:`Mar`,desktop:120,mobile:20},{month:`Apr`,desktop:305,mobile:60},{month:`May`,desktop:40,mobile:30},{month:`Jun`,desktop:90,mobile:50}],S=[{key:`desktop`,label:`Desktop`}],C=[{key:`desktop`,label:`Desktop`},{key:`mobile`,label:`Mobile`}],w={args:{type:`bar`,stacked:!1,layout:`vertical`,variant:`default`,curve:`monotone`,dots:!1,labels:!1},argTypes:{type:{name:`Chart`,control:`inline-radio`,options:[`bar`,`line`,`area`]},stacked:{name:`Two series, stacked (bar)`,control:`boolean`},layout:{name:`Orientation (bar)`,control:`inline-radio`,options:[`vertical`,`horizontal`]},variant:{name:`Vaiant (bar)`,control:`inline-radio`,options:[`default`,`capped`]},labels:{name:`Labels (bar)`,control:`boolean`},curve:{name:`Curve (line, area)`,control:`inline-radio`,options:[`monotone`,`linear`,`step`]},dots:{name:`Dots (line)`,control:`boolean`}},render:({type:e,stacked:t,layout:n,variant:r,curve:i,dots:ee,labels:te})=>(0,p.jsx)(`div`,{style:{width:`min(480px, calc(100vw - 32px))`},children:e===`bar`?(0,p.jsx)(s,{"aria-label":`Visitors`,data:x,index:`month`,series:t?C:S,stacked:t,layout:n,variant:r,labels:te,height:240}):(0,p.jsx)(c,{"aria-label":`Visitors`,data:x,index:`month`,series:S,curve:i,dots:ee,area:e===`area`,height:240})})},T={render:()=>(0,p.jsxs)(oe,{defaultValue:`subscriptions`,style:_,children:[(0,p.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,p.jsx)(d,{id:`revenue-title`,heading:`Revenue`,sub:`Subscriptions and orders, January – December`}),(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:20,flexWrap:`wrap`},children:[(0,p.jsxs)(ae,{"aria-label":`Revenue source`,children:[(0,p.jsx)(re,{value:`subscriptions`,children:`Subscriptions`}),(0,p.jsx)(re,{value:`orders`,children:`Orders`})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:4},children:[(0,p.jsx)(a,{variant:`outline`,leadingIcon:(0,p.jsx)(i,{}),children:`Export`}),(0,p.jsx)(a,{variant:`secondary`,icon:(0,p.jsx)(ee,{}),"aria-label":`Filter`}),(0,p.jsx)(a,{variant:`secondary`,icon:(0,p.jsx)(r,{}),"aria-label":`More`})]})]})]}),[`subscriptions`,`orders`].map(e=>(0,p.jsx)(ie,{value:e,children:(0,p.jsx)(s,{"aria-label":`Revenue from ${e}`,data:pe,index:`month`,series:[{key:e,label:e===`subscriptions`?`Subscriptions`:`Orders`}],max:11e3,formatValue:fe,tooltipLabel:(e,t)=>b[t],defaultActiveIndex:e===`subscriptions`?6:null})},e))]})},E=[{day:`Mo`,name:`Monday`,music:20,podcasts:29,audiobooks:20,other:36},{day:`Tu`,name:`Tuesday`,music:105,podcasts:35,audiobooks:18,other:10},{day:`We`,name:`Wednesday`,music:120,podcasts:60,audiobooks:30,other:20},{day:`Th`,name:`Thursday`,music:60,podcasts:25,audiobooks:20,other:26},{day:`Fr`,name:`Friday`,music:46,podcasts:20,audiobooks:10,other:14},{day:`Sa`,name:`Saturday`,music:40,podcasts:60,audiobooks:40,other:4},{day:`Su`,name:`Sunday`,music:120,podcasts:36,audiobooks:40,other:18}],D=[{key:`music`,label:`Music`,color:v(7)},{key:`podcasts`,label:`Podcasts`,color:v(3)},{key:`audiobooks`,label:`Audiobooks`,color:v(5)},{key:`other`,label:`Other`,color:v(6)}],O=e=>`${Math.floor(e/60)}h ${Math.round(e%60)}min`,me=e=>E.reduce((t,n)=>t+Number(n[e]),0),k={render:()=>(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-end`,justifyContent:`space-between`,gap:16,flexWrap:`wrap`},children:[(0,p.jsxs)(`div`,{style:{display:`grid`,gap:6},children:[(0,p.jsx)(`p`,{style:g,children:`13–19 Oct average`}),(0,p.jsx)(`p`,{id:`listening-title`,style:{...m,fontSize:30,lineHeight:`36px`,fontWeight:600,color:`var(--ds-card-foreground)`},children:`2h 35min`})]}),(0,p.jsxs)(`p`,{style:{...g,display:`flex`,gap:12},children:[(0,p.jsx)(`span`,{style:{fontWeight:500,color:`var(--ds-card-foreground)`},children:`Total listening time`}),`18h 2min`]})]}),(0,p.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,p.jsx)(s,{"aria-label":`Listening time per day, 13–19 October`,data:E,index:`day`,series:D,stacked:!0,max:240,height:246,references:[{value:155,label:`avg.`}],yAxis:{side:`end`,ticks:[0,240],format:e=>e?`${e/60}h`:`0`},formatValue:O,tooltipLabel:e=>String(e.name)}),(0,p.jsx)(l,{variant:`totals`,"aria-label":`Total per kind`,items:D.map(e=>({label:e.label,color:e.color,value:O(me(e.key))}))})]})]})},he=[[13,34],[57,155],[30,110],[45,130],[20,95],[25,70],[35,120],[65,135],[30,200],[18,80],[15,30],[10,25]].map(([e,t],n)=>({month:y[n],pickup:e,delivery:t})),A={render:()=>(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsx)(d,{id:`orders-title`,heading:`Orders`,sub:`Delivery and pickup, January – December`,children:(0,p.jsx)(l,{"aria-label":`Series`,items:[{label:`Delivery`,color:v(7)},{label:`Pickup`,color:v(3)}]})}),(0,p.jsx)(s,{"aria-labelledby":`orders-title`,data:he,index:`month`,series:[{key:`pickup`,label:`Pickup`,color:v(3)},{key:`delivery`,label:`Delivery`,color:v(7)}],max:220,tooltipLabel:(e,t)=>b[t]})]})},ge=[72,136,84,196,20,70].map((e,t)=>({month:y[t],accounts:Math.round(e/256*400)})),j={render:()=>(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsx)(d,{id:`signups-title`,heading:`Sign-ups`,sub:`New accounts, January – June`}),(0,p.jsx)(s,{"aria-labelledby":`signups-title`,data:ge,index:`month`,series:[{key:`accounts`,label:`Accounts`}],variant:`capped`,max:400,tooltipLabel:(e,t)=>b[t]})]})},_e=[{city:`Tokyo`,trips:1380},{city:`Lisbon`,trips:1210},{city:`Paris`,trips:720},{city:`Bali`,trips:392},{city:`Rome`,trips:340},{city:`Oslo`,trips:115}],M={render:()=>(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsx)(d,{id:`destinations-title`,heading:`Top destinations`,sub:`Trips booked this year`}),(0,p.jsx)(s,{"aria-labelledby":`destinations-title`,data:_e,index:`city`,series:[{key:`trips`,label:`Trips`}],layout:`horizontal`,max:1385,height:280,grid:4})]})},ve=e=>new Date(Date.UTC(2026,0,5+e*7)).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,timeZone:`UTC`}),ye=[1150,1180,1320,1400,1650,1820,2100,2500,3e3,3600,4260,4400,4500,4450,4900,5600,5800,5850,5300,4700,4300,4e3,4150,4500,4800,4950],be=[2e3,2600,2550,2500,2550,2450,2600,3500,4600,5600,6580,6900,7050,7100,6900,6600,6200,5800,5500,5300,5450,6300,7300,7700,8100,8400],xe=[1500,1750,1900,2e3,2500,3300,4300,5500,6400,7200,7880,8300,9100,9400,9500,9200,8100,7800,7600,6800,6500,6600,7e3,7300,7500,7700],N=ye.map((e,t)=>({week:ve(t),users:e,web:xe[t],ios:be[t]})),P=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`],F={render:()=>(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsx)(d,{id:`users-title`,heading:`Active users`,sub:`Daily average per week, January – June`}),(0,p.jsx)(c,{"aria-labelledby":`users-title`,data:N,index:`week`,series:[{key:`users`,label:`Users`}],max:6e3,ticks:P,defaultActiveIndex:10})]})},I={render:()=>(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsx)(d,{id:`sessions-title`,heading:`Sessions`,sub:`Web and iOS per week, January – June`,children:(0,p.jsx)(l,{"aria-label":`Series`,items:[{label:`Web`,color:v(7)},{label:`iOS`,color:v(3)}]})}),(0,p.jsx)(c,{"aria-labelledby":`sessions-title`,data:N,index:`week`,series:[{key:`web`,label:`Web`,color:v(7)},{key:`ios`,label:`iOS`,color:v(3)}],max:1e4,ticks:P,defaultActiveIndex:10})]})},Se=[38,56,44,6,22,32].map((e,t)=>({month:P[t],name:b[t],deploys:e})),L={render:()=>(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsx)(d,{id:`deploys-title`,heading:`Deploys`,sub:`Production releases, January – June`}),(0,p.jsx)(u,{"aria-labelledby":`deploys-title`,data:Se,index:`month`,series:[{key:`deploys`,label:`Deploys`}],curve:`step`,max:60,tooltipLabel:e=>String(e.name),defaultActiveIndex:1})]})},R=[{label:`Messages`,value:70,color:v(7),time:`1h 24min`},{label:`Video`,value:65,color:v(1),time:`1h 18min`},{label:`Music`,value:55,color:v(3),time:`1h 6min`},{label:`Games`,value:58,color:v(5),time:`1h 10min`},{label:`Reading`,value:35,color:v(4),time:`0h 42min`},{label:`Work`,value:79,color:v(9),time:`1h 35min`}],z={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:24,width:`min(600px, calc(100vw - 32px))`},children:[(0,p.jsx)(o,{"aria-label":`Screen time against each app's limit`,size:190,data:R,style:{marginInline:37}}),(0,p.jsx)(l,{variant:`totals`,columns:2,"aria-label":`Time per app`,style:{flex:`1 1 260px`},items:R.map(e=>({label:e.label,color:e.color,value:e.time}))})]})},B={render:()=>(0,p.jsxs)(`div`,{style:{..._,justifyItems:`center`,textAlign:`center`},children:[(0,p.jsxs)(`div`,{style:{display:`grid`,gap:6},children:[(0,p.jsx)(`h3`,{style:{...h,fontSize:24,lineHeight:`32px`,fontWeight:600},children:`Daily goal`}),(0,p.jsx)(`p`,{style:g,children:`Steps walked today`})]}),(0,p.jsx)(o,{variant:`progress`,"aria-label":`7,240 of 10,000 steps`,data:[{label:`Steps`,value:7240}],max:1e4,value:`7,240`,caption:`Steps`}),(0,p.jsx)(`p`,{style:g,children:`2,760 steps to go — about a 25-minute walk.`})]})},V={display:`grid`,gap:64},H={render:()=>(0,p.jsxs)(`div`,{style:V,children:[(0,p.jsx)(f,{name:`Default`,kind:`Bar Chart`,children:(0,p.jsx)(s,{"aria-label":`Default`,data:x,index:`month`,series:S,max:360,height:240})}),(0,p.jsx)(f,{name:`Capped`,kind:`Bar Chart`,children:(0,p.jsx)(s,{"aria-label":`Capped`,data:x,index:`month`,series:S,variant:`capped`,max:360,height:240})}),(0,p.jsx)(f,{name:`Stacked`,kind:`Bar Chart`,children:(0,p.jsx)(s,{"aria-label":`Stacked`,data:x,index:`month`,series:C,stacked:!0,max:420,height:240})}),(0,p.jsx)(f,{name:`Multiple`,kind:`Bar Chart`,children:(0,p.jsx)(s,{"aria-label":`Multiple`,data:x,index:`month`,series:[C[1],C[0]].map((e,t)=>({...e,color:v(t?7:3)})),max:360,height:240})}),(0,p.jsx)(f,{name:`Label`,kind:`Bar Chart`,children:(0,p.jsx)(s,{"aria-label":`Label`,data:x,index:`month`,series:S,labels:!0,max:360,height:240})}),(0,p.jsx)(f,{name:`Horizontal`,kind:`Bar Chart`,children:(0,p.jsx)(s,{"aria-label":`Horizontal`,data:[...x].reverse(),index:`month`,series:S,layout:`horizontal`,max:330,height:240})})]})},Ce=[40,42,48,52,60,66,78,96,120,132,145,150,147,150,172,180,178,168,152,140,128,120,122,132,145,152],U=[30,45,50,80,140,155,190,200,160,150,120,140,155].map((e,t)=>({point:String(t),desktop:e,mobile:[80,108,104,104,98,168,182,188,175,150,140,190,205][t]})),W=Ce.map((e,t)=>({point:String(t),desktop:e,mobile:Math.round(e*.75+30)})),we=[6.4,6.9,7.3,7.1,6.8,7.5,7.7].map((e,t)=>({point:String(t),hours:e})),G={render:()=>(0,p.jsxs)(`div`,{style:V,children:[(0,p.jsx)(f,{name:`Default`,kind:`Line Chart`,children:(0,p.jsx)(c,{"aria-label":`Default`,data:W,index:`point`,series:S,ticks:P,max:190,height:240})}),(0,p.jsx)(f,{name:`Linear`,kind:`Line Chart`,children:(0,p.jsx)(c,{"aria-label":`Linear`,data:U,index:`point`,series:S,curve:`linear`,ticks:P,max:230,height:240})}),(0,p.jsx)(f,{name:`Step`,kind:`Line Chart`,children:(0,p.jsx)(c,{"aria-label":`Step`,data:x,index:`month`,series:S,curve:`step`,max:340,height:240})}),(0,p.jsx)(f,{name:`Multiple`,kind:`Line Chart`,children:(0,p.jsx)(c,{"aria-label":`Multiple`,data:U,index:`point`,series:C,curve:`monotone`,ticks:P,max:230,height:240})}),(0,p.jsx)(f,{name:`Dots`,kind:`Line Chart`,children:(0,p.jsx)(c,{"aria-label":`Dots`,data:U,index:`point`,series:S,dots:!0,ticks:P,max:230,height:240})}),(0,p.jsx)(f,{name:`Reference`,kind:`Line Chart`,children:(0,p.jsx)(c,{"aria-label":`Reference`,data:we,index:`point`,series:[{key:`hours`,label:`Sleep`}],ticks:P,max:10,references:[{value:8,label:`Goal · 8 h`}],height:240})})]})},K={render:()=>(0,p.jsxs)(`div`,{style:V,children:[(0,p.jsx)(f,{name:`Default`,kind:`Area Chart`,children:(0,p.jsx)(u,{"aria-label":`Default`,data:W,index:`point`,series:S,ticks:P,max:190,height:240})}),(0,p.jsx)(f,{name:`Linear`,kind:`Area Chart`,children:(0,p.jsx)(u,{"aria-label":`Linear`,data:U,index:`point`,series:S,curve:`linear`,ticks:P,max:230,height:240})}),(0,p.jsx)(f,{name:`Step`,kind:`Area Chart`,children:(0,p.jsx)(u,{"aria-label":`Step`,data:x,index:`month`,series:S,curve:`step`,max:340,height:240})}),(0,p.jsx)(f,{name:`Multiple`,kind:`Area Chart`,children:(0,p.jsx)(u,{"aria-label":`Multiple`,data:U,index:`point`,series:C,ticks:P,max:230,height:240})})]})},Te=[{label:`Chrome`,color:v(3)},{label:`Safari`,color:v(5)},{label:`Firefox`,color:v(1)},{label:`Edge`,color:v(2)},{label:`Opera`,color:v(4)},{label:`Arc`,color:v(9)},{label:`Other`,color:v(7)}],q=[[25,0,0,75],[25,37.5,0,37.5],[30,35,0,35],[25,25,0,12.5,25],[16,18,20,16,22],[22,12,20,15,8,8,8]].map(e=>e.map((e,t)=>({...Te[t],value:e})).filter(e=>e.value>0)),J={display:`grid`,gridTemplateColumns:`repeat(3, auto)`,justifyContent:`start`,gap:40},Y={render:()=>(0,p.jsx)(`div`,{style:V,children:[[`Default`,`pie`,!1],[`Donut`,`donut`,!1],[`Donut with Label`,`donut`,!0]].map(([e,t,n])=>(0,p.jsx)(f,{name:e,kind:`Pie Chart`,children:(0,p.jsx)(`div`,{style:J,children:q.map((r,i)=>(0,p.jsx)(ue,{"aria-label":`${e}, ${r.length} slices`,variant:t,data:r,size:140,value:n?`925`:void 0,caption:n?`Visitors`:void 0},i))})},e))})},X=[{label:`Messages`,value:70,color:v(7)},{label:`Video`,value:65,color:v(1)},{label:`Music`,value:55,color:v(3)},{label:`Games`,value:45,color:v(5)},{label:`Reading`,value:70,color:v(4)},{label:`Work`,value:25,color:v(9)},{label:`Other`,value:40,color:v(2)}],Ee=[{label:`Direct`,color:v(7)},{label:`Search`,color:v(10)},{label:`Social`,color:v(3)},{label:`Email`,color:v(1)},{label:`Ads`,color:v(5)},{label:`Referral`,color:v(9)},{label:`Other`,color:v(8)}],De=[[80,20],[20,25,55],[20,25,12,43],[15,25,12,20,28],[15,25,12,20,18,10],[15,25,12,15,6,14,13]].map(e=>e.map((e,t)=>({...Ee[t],value:e}))),Z={render:()=>(0,p.jsxs)(`div`,{style:V,children:[(0,p.jsx)(f,{name:`Simple`,kind:`Radial Chart`,children:(0,p.jsx)(`div`,{style:J,children:[2,3,4,5,6,7].map(e=>(0,p.jsx)(o,{"aria-label":`${e} rings`,data:X.slice(0,e),size:140},e))})}),(0,p.jsx)(f,{name:`Stacked`,kind:`Radial Chart`,children:(0,p.jsx)(`div`,{style:J,children:De.map((e,t)=>(0,p.jsx)(o,{variant:`half`,"aria-label":`${e.length} sources`,data:e,size:140,value:`925`,caption:`Visitors`},t))})}),(0,p.jsx)(f,{name:`Text`,kind:`Radial Chart`,children:(0,p.jsx)(o,{variant:`progress`,"aria-label":`72% complete`,data:[{label:`Complete`,value:72}],value:`72%`,caption:`Complete`})})]})},Q={render:()=>(0,p.jsxs)(`div`,{style:{display:`grid`,gap:24,justifyItems:`start`},children:[(0,p.jsx)(se,{label:`Input`,style:{width:180},items:[{label:`Library`,value:`962`,color:v(2)},{label:`Detached`,value:`143`,color:v(5)},{label:`Pending`,value:`58`,color:v(3)},{label:`Archived`,value:`21`,color:v(4)},{label:`Draft`,value:`7`,color:v(1)}],description:`Subscriptions and orders, January – December`}),(0,p.jsx)(l,{"aria-label":`Swatches`,items:[`default`,`line`,`line-horizontal`,`dashed`,`dashed-horizontal`].map(e=>({label:e,swatch:e,color:v(2)}))}),(0,p.jsx)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[`default`,`line`,`line-horizontal`,`dashed`,`dashed-horizontal`].map(e=>(0,p.jsx)(ce,{variant:e,color:v(2)},e))})]})},$={parameters:{layout:`fullscreen`},render:()=>(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`},children:[`light`,`dark`].map(e=>(0,p.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:32},children:[(0,p.jsx)(s,{"aria-label":`Stacked bars (${e})`,data:x,index:`month`,series:C,stacked:!0,max:420,height:160,defaultActiveIndex:3}),(0,p.jsx)(u,{"aria-label":`Areas (${e})`,data:U,index:`point`,series:C,ticks:P,max:230,height:160,references:[{value:180,label:`Target`}]}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[(0,p.jsx)(ue,{"aria-label":`Donut (${e})`,variant:`donut`,data:q[5],size:120,value:`925`,caption:`Visitors`}),(0,p.jsx)(o,{"aria-label":`Rings (${e})`,data:X.slice(0,4),size:120})]})]},e))})},Oe=[`Playground`,`Revenue`,`ListeningTime`,`Orders`,`SignUps`,`TopDestinations`,`ActiveUsers`,`Sessions`,`Deploys`,`ScreenTime`,`DailyGoal`,`BarSamples`,`LineSamples`,`AreaSamples`,`PieSamples`,`RadialSamples`,`Parts`,`Themes`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    stacked: false,
    layout: 'vertical',
    variant: 'default',
    curve: 'monotone',
    dots: false,
    labels: false
  },
  argTypes: {
    type: {
      name: 'Chart',
      control: 'inline-radio',
      options: ['bar', 'line', 'area']
    },
    stacked: {
      name: 'Two series, stacked (bar)',
      control: 'boolean'
    },
    layout: {
      name: 'Orientation (bar)',
      control: 'inline-radio',
      options: ['vertical', 'horizontal']
    },
    variant: {
      name: 'Vaiant (bar)',
      control: 'inline-radio',
      options: ['default', 'capped']
    },
    labels: {
      name: 'Labels (bar)',
      control: 'boolean'
    },
    curve: {
      name: 'Curve (line, area)',
      control: 'inline-radio',
      options: ['monotone', 'linear', 'step']
    },
    dots: {
      name: 'Dots (line)',
      control: 'boolean'
    }
  },
  render: ({
    type,
    stacked,
    layout,
    variant,
    curve,
    dots,
    labels
  }) => <div style={{
    width: 'min(480px, calc(100vw - 32px))'
  }}>
      {type === 'bar' ? <BarChart aria-label="Visitors" data={sample} index="month" series={stacked ? both : desktop} stacked={stacked} layout={layout} variant={variant} labels={labels} height={240} /> : <LineChart aria-label="Visitors" data={sample} index="month" series={desktop} curve={curve} dots={dots} area={type === 'area'} height={240} />}
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="subscriptions" style={frame}>
      <div style={{
      display: 'grid',
      gap: 16
    }}>
        <Header id="revenue-title" heading="Revenue" sub="Subscriptions and orders, January – December" />
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 20,
        flexWrap: 'wrap'
      }}>
          <TabsList aria-label="Revenue source">
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
          </TabsList>
          <div style={{
          display: 'flex',
          gap: 4
        }}>
            <Button variant="outline" leadingIcon={<RiDownloadLine />}>
              Export
            </Button>
            <Button variant="secondary" icon={<RiFilter3Line />} aria-label="Filter" />
            <Button variant="secondary" icon={<RiMore2Line />} aria-label="More" />
          </div>
        </div>
      </div>
      {(['subscriptions', 'orders'] as const).map(key => <TabsContent key={key} value={key}>
          <BarChart aria-label={\`Revenue from \${key}\`} data={revenue} index="month" series={[{
        key,
        label: key === 'subscriptions' ? 'Subscriptions' : 'Orders'
      }]} max={11000} formatValue={usd} tooltipLabel={(_, i) => monthNames[i]} defaultActiveIndex={key === 'subscriptions' ? 6 : null} />
        </TabsContent>)}
    </Tabs>
}`,...T.parameters?.docs?.source},description:{story:`Figma demo "Chart" (Revenue): monthly bars under tabs and actions; July is highlighted with its tooltip, as in Figma.`,...T.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={frame}>
      <div style={{
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }}>
        <div style={{
        display: 'grid',
        gap: 6
      }}>
          <p style={description}>13–19 Oct average</p>
          <p id="listening-title" style={{
          ...text,
          fontSize: 30,
          lineHeight: '36px',
          fontWeight: 600,
          color: 'var(--ds-card-foreground)'
        }}>
            2h 35min
          </p>
        </div>
        <p style={{
        ...description,
        display: 'flex',
        gap: 12
      }}>
          <span style={{
          fontWeight: 500,
          color: 'var(--ds-card-foreground)'
        }}>Total listening time</span>18h 2min
        </p>
      </div>
      <div style={{
      display: 'grid',
      gap: 16
    }}>
        <BarChart aria-label="Listening time per day, 13–19 October" data={listening} index="day" series={listeningSeries} stacked max={240} height={246} references={[{
        value: 155,
        label: 'avg.'
      }]} yAxis={{
        side: 'end',
        ticks: [0, 240],
        format: v => v ? \`\${v / 60}h\` : '0'
      }} formatValue={hm} tooltipLabel={row => String(row.name)} />
        <ChartLegend variant="totals" aria-label="Total per kind" items={listeningSeries.map(s => ({
        label: s.label,
        color: s.color,
        value: hm(total(s.key))
      }))} />
      </div>
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Figma demo "Chart" (listening time): a week of stacked bars with an average line, a right-hand axis and a totals card.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={frame}>
      <Header id="orders-title" heading="Orders" sub="Delivery and pickup, January – December">
        <ChartLegend aria-label="Series" items={[{
        label: 'Delivery',
        color: chart(7)
      }, {
        label: 'Pickup',
        color: chart(3)
      }]} />
      </Header>
      <BarChart aria-labelledby="orders-title" data={orders} index="month" series={[{
      key: 'pickup',
      label: 'Pickup',
      color: chart(3)
    }, {
      key: 'delivery',
      label: 'Delivery',
      color: chart(7)
    }]} max={220} tooltipLabel={(_, i) => monthNames[i]} />
    </div>
}`,...A.parameters?.docs?.source},description:{story:`Figma demo "Chart" (Orders): two series side by side in each month, with the legend in the header.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={frame}>
      <Header id="signups-title" heading="Sign-ups" sub="New accounts, January – June" />
      <BarChart aria-labelledby="signups-title" data={signups} index="month" series={[{
      key: 'accounts',
      label: 'Accounts'
    }]} variant="capped" max={400} tooltipLabel={(_, i) => monthNames[i]} />
    </div>
}`,...j.parameters?.docs?.source},description:{story:`Figma demo "Chart" (Sign-ups): capped bars.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={frame}>
      <Header id="destinations-title" heading="Top destinations" sub="Trips booked this year" />
      <BarChart aria-labelledby="destinations-title" data={destinations} index="city" series={[{
      key: 'trips',
      label: 'Trips'
    }]} layout="horizontal" max={1385} height={280} grid={4} />
    </div>
}`,...M.parameters?.docs?.source},description:{story:`Figma demo "Chart" (Top destinations): horizontal bars with the categories on the left.`,...M.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={frame}>
      <Header id="users-title" heading="Active users" sub="Daily average per week, January – June" />
      <LineChart aria-labelledby="users-title" data={weekly} index="week" series={[{
      key: 'users',
      label: 'Users'
    }]} max={6000} ticks={half} defaultActiveIndex={10} />
    </div>
}`,...F.parameters?.docs?.source},description:{story:`Figma demo "Chart" (Active users): a smooth line over 26 weeks; 16 March is hovered, as in Figma.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={frame}>
      <Header id="sessions-title" heading="Sessions" sub="Web and iOS per week, January – June">
        <ChartLegend aria-label="Series" items={[{
        label: 'Web',
        color: chart(7)
      }, {
        label: 'iOS',
        color: chart(3)
      }]} />
      </Header>
      <LineChart aria-labelledby="sessions-title" data={weekly} index="week" series={[{
      key: 'web',
      label: 'Web',
      color: chart(7)
    }, {
      key: 'ios',
      label: 'iOS',
      color: chart(3)
    }]} max={10000} ticks={half} defaultActiveIndex={10} />
    </div>
}`,...I.parameters?.docs?.source},description:{story:`Figma demo "Chart" (Sessions): two lines with a legend; the tooltip lists both.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={frame}>
      <Header id="deploys-title" heading="Deploys" sub="Production releases, January – June" />
      <AreaChart aria-labelledby="deploys-title" data={deploys} index="month" series={[{
      key: 'deploys',
      label: 'Deploys'
    }]} curve="step" max={60} tooltipLabel={row => String(row.name)} defaultActiveIndex={1} />
    </div>
}`,...L.parameters?.docs?.source},description:{story:`Figma demo "Chart" (Deploys): a step area per month; February is hovered, as in Figma.`,...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 24,
    width: 'min(600px, calc(100vw - 32px))'
  }}>
      <RadialChart aria-label="Screen time against each app's limit" size={190} data={screenTime} style={{
      marginInline: 37
    }} />
      <ChartLegend variant="totals" columns={2} aria-label="Time per app" style={{
      flex: '1 1 260px'
    }} items={screenTime.map(d => ({
      label: d.label,
      color: d.color,
      value: d.time
    }))} />
    </div>
}`,...z.parameters?.docs?.source},description:{story:`Figma demo "Chart" (screen time): one ring per app beside a totals card.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...frame,
    justifyItems: 'center',
    textAlign: 'center'
  }}>
      <div style={{
      display: 'grid',
      gap: 6
    }}>
        <h3 style={{
        ...title,
        fontSize: 24,
        lineHeight: '32px',
        fontWeight: 600
      }}>Daily goal</h3>
        <p style={description}>Steps walked today</p>
      </div>
      <RadialChart variant="progress" aria-label="7,240 of 10,000 steps" data={[{
      label: 'Steps',
      value: 7240
    }]} max={10000} value="7,240" caption="Steps" />
      <p style={description}>2,760 steps to go — about a 25-minute walk.</p>
    </div>
}`,...B.parameters?.docs?.source},description:{story:`Figma demo "Chart" (Daily goal): a progress ring with the value in the middle.`,...B.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <div style={samples}>
      <Sample name="Default" kind="Bar Chart">
        <BarChart aria-label="Default" data={sample} index="month" series={desktop} max={360} height={240} />
      </Sample>
      <Sample name="Capped" kind="Bar Chart">
        <BarChart aria-label="Capped" data={sample} index="month" series={desktop} variant="capped" max={360} height={240} />
      </Sample>
      <Sample name="Stacked" kind="Bar Chart">
        <BarChart aria-label="Stacked" data={sample} index="month" series={both} stacked max={420} height={240} />
      </Sample>
      <Sample name="Multiple" kind="Bar Chart">
        <BarChart aria-label="Multiple" data={sample} index="month" series={[both[1], both[0]].map((s, i) => ({
        ...s,
        color: chart(i ? 7 : 3)
      }))} max={360} height={240} />
      </Sample>
      <Sample name="Label" kind="Bar Chart">
        <BarChart aria-label="Label" data={sample} index="month" series={desktop} labels max={360} height={240} />
      </Sample>
      <Sample name="Horizontal" kind="Bar Chart">
        <BarChart aria-label="Horizontal" data={[...sample].reverse()} index="month" series={desktop} layout="horizontal" max={330} height={240} />
      </Sample>
    </div>
}`,...H.parameters?.docs?.source},description:{story:`Figma "Bar Chart - Samples": Default, Capped, Stacked, Multiple, Label and Horizontal.`,...H.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div style={samples}>
      <Sample name="Default" kind="Line Chart">
        <LineChart aria-label="Default" data={smoothRows} index="point" series={desktop} ticks={half} max={190} height={240} />
      </Sample>
      <Sample name="Linear" kind="Line Chart">
        <LineChart aria-label="Linear" data={coarse} index="point" series={desktop} curve="linear" ticks={half} max={230} height={240} />
      </Sample>
      <Sample name="Step" kind="Line Chart">
        <LineChart aria-label="Step" data={sample} index="month" series={desktop} curve="step" max={340} height={240} />
      </Sample>
      <Sample name="Multiple" kind="Line Chart">
        <LineChart aria-label="Multiple" data={coarse} index="point" series={both} curve="monotone" ticks={half} max={230} height={240} />
      </Sample>
      <Sample name="Dots" kind="Line Chart">
        <LineChart aria-label="Dots" data={coarse} index="point" series={desktop} dots ticks={half} max={230} height={240} />
      </Sample>
      <Sample name="Reference" kind="Line Chart">
        <LineChart aria-label="Reference" data={sleep} index="point" series={[{
        key: 'hours',
        label: 'Sleep'
      }]} ticks={half} max={10} references={[{
        value: 8,
        label: 'Goal · 8 h'
      }]} height={240} />
      </Sample>
    </div>
}`,...G.parameters?.docs?.source},description:{story:`Figma "Line Chart - Samples": Default, Linear, Step, Multiple, Dots and Reference.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div style={samples}>
      <Sample name="Default" kind="Area Chart">
        <AreaChart aria-label="Default" data={smoothRows} index="point" series={desktop} ticks={half} max={190} height={240} />
      </Sample>
      <Sample name="Linear" kind="Area Chart">
        <AreaChart aria-label="Linear" data={coarse} index="point" series={desktop} curve="linear" ticks={half} max={230} height={240} />
      </Sample>
      <Sample name="Step" kind="Area Chart">
        <AreaChart aria-label="Step" data={sample} index="month" series={desktop} curve="step" max={340} height={240} />
      </Sample>
      <Sample name="Multiple" kind="Area Chart">
        <AreaChart aria-label="Multiple" data={coarse} index="point" series={both} ticks={half} max={230} height={240} />
      </Sample>
    </div>
}`,...K.parameters?.docs?.source},description:{story:`Figma "Area Chart - Samples": Default, Linear, Step and Multiple.`,...K.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={samples}>
      {([['Default', 'pie', false], ['Donut', 'donut', false], ['Donut with Label', 'donut', true]] as const).map(([name, variant, label]) => <Sample key={name} name={name} kind="Pie Chart">
          <div style={grid3}>
            {pieSets.map((data, i) => <PieChart key={i} aria-label={\`\${name}, \${data.length} slices\`} variant={variant} data={data} size={140} value={label ? '925' : undefined} caption={label ? 'Visitors' : undefined} />)}
          </div>
        </Sample>)}
    </div>
}`,...Y.parameters?.docs?.source},description:{story:`Figma "Pie Chart - Samples": Default, Donut and Donut with Label, with two to seven slices.`,...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={samples}>
      <Sample name="Simple" kind="Radial Chart">
        <div style={grid3}>
          {[2, 3, 4, 5, 6, 7].map(n => <RadialChart key={n} aria-label={\`\${n} rings\`} data={rings.slice(0, n)} size={140} />)}
        </div>
      </Sample>
      <Sample name="Stacked" kind="Radial Chart">
        <div style={grid3}>
          {halfSets.map((data, i) => <RadialChart key={i} variant="half" aria-label={\`\${data.length} sources\`} data={data} size={140} value="925" caption="Visitors" />)}
        </div>
      </Sample>
      <Sample name="Text" kind="Radial Chart">
        <RadialChart variant="progress" aria-label="72% complete" data={[{
        label: 'Complete',
        value: 72
      }]} value="72%" caption="Complete" />
      </Sample>
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`Figma "Radial Chart - Samples": Simple (two to seven rings), Stacked (half rings) and Text.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24,
    justifyItems: 'start'
  }}>
      <ChartTooltip label="Input" style={{
      width: 180
    }} items={[{
      label: 'Library',
      value: '962',
      color: chart(2)
    }, {
      label: 'Detached',
      value: '143',
      color: chart(5)
    }, {
      label: 'Pending',
      value: '58',
      color: chart(3)
    }, {
      label: 'Archived',
      value: '21',
      color: chart(4)
    }, {
      label: 'Draft',
      value: '7',
      color: chart(1)
    }]} description="Subscriptions and orders, January – December" />
      <ChartLegend aria-label="Swatches" items={(['default', 'line', 'line-horizontal', 'dashed', 'dashed-horizontal'] as ChartSwatchVariant[]).map(swatch => ({
      label: swatch,
      swatch,
      color: chart(2)
    }))} />
      <div style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }}>
        {(['default', 'line', 'line-horizontal', 'dashed', 'dashed-horizontal'] as const).map(variant => <ChartSwatch key={variant} variant={variant} color={chart(2)} />)}
      </div>
    </div>
}`,...Q.parameters?.docs?.source},description:{story:`The parts on their own: Chart Tooltip, the legends and every Swatch variant.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24,
      display: 'grid',
      gap: 32
    }}>
          <BarChart aria-label={\`Stacked bars (\${scheme})\`} data={sample} index="month" series={both} stacked max={420} height={160} defaultActiveIndex={3} />
          <AreaChart aria-label={\`Areas (\${scheme})\`} data={coarse} index="point" series={both} ticks={half} max={230} height={160} references={[{
        value: 180,
        label: 'Target'
      }]} />
          <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
            <PieChart aria-label={\`Donut (\${scheme})\`} variant="donut" data={pieSets[5]} size={120} value="925" caption="Visitors" />
            <RadialChart aria-label={\`Rings (\${scheme})\`} data={rings.slice(0, 4)} size={120} />
          </div>
        </div>)}
    </div>
}`,...$.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...$.parameters?.docs?.description}}}})))()}ke();export{F as ActiveUsers,K as AreaSamples,H as BarSamples,B as DailyGoal,L as Deploys,G as LineSamples,k as ListeningTime,A as Orders,Q as Parts,Y as PieSamples,w as Playground,Z as RadialSamples,T as Revenue,z as ScreenTime,I as Sessions,j as SignUps,$ as Themes,M as TopDestinations,Oe as __namedExportsOrder,de as default};