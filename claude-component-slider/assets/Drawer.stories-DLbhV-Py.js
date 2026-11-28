import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-B0xAhTFV.js";import{n as r,t as i}from"./Button-BNEDxZ_5.js";import{n as a,t as o}from"./Avatar-Rd0K_rF2.js";import{n as s,t as c}from"./Badge-DIviuGNo.js";import{i as l,t as u}from"./Input-DKGV2tSW.js";import{r as d,t as f}from"./ButtonGroup--yObe6jY.js";import{r as p,t as m}from"./Switch-D8Qn0P5N.js";import{n as h,o as g,t as _}from"./Field-DQHMYjkZ.js";import{n as v,t as y}from"./Separator-D-pfouIF.js";import{n as b,r as x,t as S}from"./Radio-zIgvnG7Y.js";import{n as C,t as w}from"./Textarea-DEJBlLBb.js";import{n as T,r as E,t as D}from"./Drawer-VIWZ6FsB.js";var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{O=n(),a(),s(),r(),d(),g(),l(),x(),v(),p(),C(),E(),k=t(),A={title:`Components/Drawer`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Drawer** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=195-109)): a rounded modal panel, Figma Direction → `direction` (`down` at the bottom · `up` at the top · `side` on the end edge), with the Figma "Swipe handle" (`swipeHandle`; drag it towards the edge to close), the header (`title`, `description`, centred when down or up), any content and the `footer`, whose buttons stack full-width with the main action first. It floats 8 px from the edge: 664 px wide when down or up, 384 px wide and full-height on the side (`width` changes it). It behaves like Dialog and Sheet: a native modal `<dialog>`, focus inside, Escape or a click on the backdrop closes it and focus goes back to the trigger; `DrawerClose` makes a button close it. Figma\'s Drawer has no Close button; `closeButton` adds one.'}}}},j={margin:0,color:`var(--ds-muted-foreground)`},M={margin:0,fontWeight:500},N={display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:12},P=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.`,F={args:{direction:`down`,swipeHandle:!0,title:`Drawer title`,description:`Drawer description — what this panel is for.`,footer:!0},argTypes:{direction:{name:`Direction`,control:`inline-radio`,options:[`down`,`up`,`side`]},swipeHandle:{name:`Swipe handle`},footer:{name:`Footer`}},render:({direction:e,swipeHandle:t,title:n,description:r,footer:a})=>(0,k.jsx)(D,{trigger:(0,k.jsx)(i,{variant:`outline`,children:`Open drawer`}),direction:e,swipeHandle:t,title:n||void 0,description:r||void 0,"aria-label":n?void 0:`Drawer`,footer:a?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(T,{children:(0,k.jsx)(i,{children:`Continue`})}),(0,k.jsx)(T,{children:(0,k.jsx)(i,{variant:`outline`,children:`Cancel`})})]}):void 0,children:(0,k.jsx)(`p`,{style:{margin:0,textAlign:e===`side`?void 0:`center`},children:P})})},I=[62,70,48,81,55,74,40,66,79,52,72,58,90],L=[[`Name`,`Northwind Labs`],[`Owner`,`Mira Okafor`],[`Industry`,`Logistics software`],[`Headcount`,`101–250`],[`Revenue`,`$50M–$100M`],[`Website`,`northwind.example.com`],[`Last interaction`,`17h ago`]],R=[{title:`Mira Okafor mentioned you`,text:`“Can you check the Lisbon itinerary before Friday?”`,when:`Just now`,kind:`mention`},{title:`Receipt saved`,text:`cafe-receipt.jpg was added to Lisbon trip.`,when:`2 hours ago`,kind:`action`},{title:`Check-in is open`,text:`SFO → ATH departs Thu, Oct 15 at 16:05.`,when:`Yesterday`,kind:`action`},{title:`Jonas Lindqvist shared a note`,text:`Packing list for the trailhead and the cabin.`,when:`Oct 1`,kind:`mention`}],z={render:function(){let[e,t]=(0,O.useState)(``),[n,r]=(0,O.useState)(8e3),[a,s]=(0,O.useState)(`all`),l=R.filter(e=>a===`all`||e.kind===a);return(0,k.jsxs)(`div`,{style:{display:`grid`,gap:16,justifyItems:`start`},children:[(0,k.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,k.jsxs)(D,{trigger:(0,k.jsx)(i,{variant:`outline`,children:`Step goal`}),width:`384px`,title:`Daily step goal`,description:`Set how many steps you want to walk each day.`,footer:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(T,{children:(0,k.jsx)(i,{onClick:()=>t(`Goal set to ${n.toLocaleString(`en-US`)} steps`),children:`Save goal`})}),(0,k.jsx)(T,{children:(0,k.jsx)(i,{variant:`outline`,children:`Cancel`})})]}),children:[(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:32},children:[(0,k.jsx)(i,{variant:`outline`,"aria-label":`Fewer steps`,disabled:n<=1e3,onClick:()=>r(e=>e-500),icon:(0,k.jsx)(`span`,{"aria-hidden":!0,children:`−`})}),(0,k.jsxs)(`div`,{style:{display:`grid`,textAlign:`center`},children:[(0,k.jsx)(`span`,{"aria-live":`polite`,style:{fontSize:40,lineHeight:`44px`,fontWeight:600},children:n.toLocaleString(`en-US`)}),(0,k.jsx)(`span`,{style:j,children:`steps a day`})]}),(0,k.jsx)(i,{variant:`outline`,"aria-label":`More steps`,onClick:()=>r(e=>e+500),icon:(0,k.jsx)(`span`,{"aria-hidden":!0,children:`+`})})]}),(0,k.jsx)(`div`,{"aria-hidden":!0,style:{display:`flex`,alignItems:`flex-end`,gap:6,height:96},children:I.map((e,t)=>(0,k.jsx)(`span`,{style:{flex:1,height:`${e}%`,borderRadius:4,background:t===I.length-1?`var(--ds-primary)`:`var(--ds-fill-2)`}},t))})]}),(0,k.jsxs)(D,{trigger:(0,k.jsx)(i,{variant:`outline`,children:`Company record`}),direction:`side`,closeButton:!0,title:`Northwind Labs`,children:[(0,k.jsx)(`dl`,{style:{display:`grid`,gap:10,margin:0},children:L.map(([e,t])=>(0,k.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`128px 1fr`,gap:12},children:[(0,k.jsx)(`dt`,{style:j,children:e}),(0,k.jsx)(`dd`,{style:{margin:0},children:e===`Industry`?(0,k.jsx)(c,{variant:`soft`,children:t}):t})]},e))}),(0,k.jsx)(y,{}),(0,k.jsx)(`p`,{style:j,children:`Account summary`}),(0,k.jsx)(`p`,{style:{margin:0},children:`Priya from Northwind Labs asked about route planning for their fleet and requested a demo. No opportunity yet — reply with a short overview and propose times for an intro call.`}),(0,k.jsx)(`p`,{style:j,children:`About the company`}),(0,k.jsx)(`p`,{style:{margin:0},children:`Northwind Labs builds dispatch software for regional delivery fleets, sold per vehicle to logistics teams.`}),(0,k.jsxs)(`div`,{style:N,children:[(0,k.jsx)(`p`,{style:j,children:`Open tasks`}),(0,k.jsx)(i,{variant:`ghost`,size:`sm`,children:`See all`})]}),(0,k.jsx)(`p`,{style:{margin:0},children:`Reply to Priya with times for an intro call`})]}),(0,k.jsxs)(D,{trigger:(0,k.jsx)(i,{variant:`outline`,children:`Notifications`}),direction:`side`,closeButton:!0,title:`Updates`,description:`3 new since yesterday`,children:[(0,k.jsx)(f,{"aria-label":`Show`,children:[`all`,`mention`,`action`].map(e=>(0,k.jsx)(i,{size:`sm`,variant:a===e?`secondary`:`outline`,"aria-pressed":a===e,onClick:()=>s(e),children:e===`all`?`All`:e===`mention`?`Mentions`:`Actions`},e))}),(0,k.jsx)(`ul`,{"aria-label":`Recent`,style:{display:`grid`,gap:16,margin:0,padding:0,listStyle:`none`},children:l.map(e=>(0,k.jsxs)(`li`,{style:{display:`grid`,gap:2},children:[(0,k.jsx)(`span`,{style:M,children:e.title}),(0,k.jsx)(`span`,{children:e.text}),(0,k.jsx)(`span`,{style:j,children:e.when})]},e.title))})]}),(0,k.jsxs)(D,{trigger:(0,k.jsx)(i,{variant:`outline`,children:`Account`}),direction:`side`,closeButton:!0,"aria-label":`Account`,children:[(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,k.jsx)(o,{initials:`MC`,name:`Maya Chen`}),(0,k.jsx)(`span`,{style:{...M,fontSize:16},children:`Maya Chen`})]}),(0,k.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:8},children:[(0,k.jsxs)(`div`,{style:{padding:12,borderRadius:12,background:`var(--ds-muted)`},children:[(0,k.jsx)(`p`,{style:j,children:`Wallet balance`}),(0,k.jsx)(`p`,{style:{...M,fontSize:20,lineHeight:`28px`},children:`$12.40`})]}),(0,k.jsxs)(`div`,{style:{padding:12,borderRadius:12,background:`var(--ds-muted)`},children:[(0,k.jsx)(`p`,{style:j,children:`Spending limit`}),(0,k.jsx)(`p`,{style:{...M,fontSize:20,lineHeight:`28px`},children:`$3,500`})]})]}),(0,k.jsx)(y,{}),(0,k.jsx)(`p`,{style:j,children:`How you pay`}),[`Payment methods`,`Autopay`,`Payment preferences`,`Subscriptions`].map(e=>(0,k.jsx)(i,{variant:`ghost`,style:{justifyContent:`flex-start`},onClick:()=>t(`${e} opened`),children:e},e)),(0,k.jsx)(y,{}),(0,k.jsx)(m,{label:`Cashback on every ride`,defaultChecked:!0})]}),(0,k.jsx)(D,{trigger:(0,k.jsx)(i,{variant:`outline`,children:`New automation`}),direction:`side`,closeButton:!0,title:`New automation`,footer:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(T,{children:(0,k.jsx)(i,{onClick:()=>t(`Automation created`),children:`Create automation`})}),(0,k.jsx)(T,{children:(0,k.jsx)(i,{variant:`outline`,children:`Cancel`})})]}),children:(0,k.jsxs)(h,{children:[(0,k.jsx)(_,{label:`Name`,children:(0,k.jsx)(u,{defaultValue:`Weekly docs clarity review`})}),(0,k.jsxs)(b,{label:`When should it run?`,defaultValue:`publish`,children:[(0,k.jsx)(S,{value:`publish`,label:`Content update`,caption:`When a page is published`}),(0,k.jsx)(S,{value:`schedule`,label:`Custom schedule`,caption:`On a recurring schedule`}),(0,k.jsx)(S,{value:`merge`,label:`Code change`,caption:`When a pull request merges`})]}),(0,k.jsx)(_,{label:`Context repository`,description:`Cloned so the agent can read the code.`,children:(0,k.jsx)(u,{defaultValue:`northwind/docs-site`})}),(0,k.jsx)(_,{label:`Additional prompt`,description:`Appended to our prompt on every run.`,children:(0,k.jsx)(w,{defaultValue:`You are a copy editor polishing product docs for clarity and tone.`})})]})}),(0,k.jsx)(D,{trigger:(0,k.jsx)(i,{variant:`outline`,children:`From the top`}),direction:`up`,title:`You're offline`,description:`Changes are saved on this device and sync when you reconnect.`,footer:(0,k.jsx)(T,{children:(0,k.jsx)(i,{children:`Got it`})})})]}),(0,k.jsx)(`p`,{role:`status`,style:{margin:0,minHeight:20,fontFamily:`var(--ds-font-sans)`,fontSize:14,color:`var(--ds-muted-foreground)`},children:e})]})}},B=({direction:e,style:t})=>{let n=e!==`side`&&(0,k.jsx)(`div`,{className:`ds-drawer__handle`,"aria-hidden":!0,children:(0,k.jsx)(`span`,{className:`ds-drawer__bar`})});return(0,k.jsxs)(`div`,{className:`ds-drawer ds-drawer--${e}`,role:`dialog`,"aria-label":`Direction ${e}`,style:{display:`flex`,position:`static`,animation:`none`,...t},children:[e===`down`&&n,(0,k.jsx)(`div`,{className:`ds-drawer__header`,children:(0,k.jsxs)(`div`,{className:`ds-drawer__heading`,children:[(0,k.jsxs)(`h2`,{className:`ds-drawer__title`,children:[`Direction `,e]}),(0,k.jsx)(`p`,{className:`ds-drawer__description`,children:`Drawer description — what this panel is for.`})]})}),(0,k.jsx)(`div`,{className:`ds-drawer__body`,children:(0,k.jsx)(`p`,{style:{margin:0,textAlign:e===`side`?void 0:`center`},children:P})}),(0,k.jsxs)(`div`,{className:`ds-drawer__footer`,children:[(0,k.jsx)(i,{children:`Continue`}),(0,k.jsx)(i,{variant:`outline`,children:`Cancel`})]}),e===`up`&&n]})},V={render:()=>(0,k.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,alignItems:`flex-start`},children:[(0,k.jsxs)(`div`,{style:{display:`grid`,gap:24},children:[(0,k.jsx)(B,{direction:`down`,style:{width:`min(664px, 100%)`}}),(0,k.jsx)(B,{direction:`up`,style:{width:`min(664px, 100%)`}})]}),(0,k.jsx)(B,{direction:`side`,style:{height:480}})]})},H={parameters:{layout:`fullscreen`},render:()=>(0,k.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,k.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24},children:(0,k.jsx)(B,{direction:`down`,style:{width:`100%`,maxWidth:`100%`}})},e))})},U=[`Playground`,`Demos`,`Directions`,`Themes`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'down',
    swipeHandle: true,
    title: 'Drawer title',
    description: 'Drawer description — what this panel is for.',
    footer: true
  },
  argTypes: {
    direction: {
      name: 'Direction',
      control: 'inline-radio',
      options: ['down', 'up', 'side']
    },
    swipeHandle: {
      name: 'Swipe handle'
    },
    footer: {
      name: 'Footer'
    }
  },
  render: ({
    direction,
    swipeHandle,
    title,
    description,
    footer
  }) => <Drawer trigger={<Button variant="outline">Open drawer</Button>} direction={direction} swipeHandle={swipeHandle} title={title || undefined} description={description || undefined} aria-label={title ? undefined : 'Drawer'} footer={footer ? <>
            <DrawerClose>
              <Button>Continue</Button>
            </DrawerClose>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </> : undefined}>
      <p style={{
      margin: 0,
      textAlign: direction === 'side' ? undefined : 'center'
    }}>{lorem}</p>
    </Drawer>
}`,...F.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function Demos() {
    const [result, setResult] = useState('');
    const [steps, setSteps] = useState(8000);
    const [filter, setFilter] = useState<'all' | 'mention' | 'action'>('all');
    const shown = updates.filter(u => filter === 'all' || u.kind === filter);
    return <div style={{
      display: 'grid',
      gap: 16,
      justifyItems: 'start'
    }}>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }}>
          <Drawer trigger={<Button variant="outline">Step goal</Button>} width="384px" title="Daily step goal" description="Set how many steps you want to walk each day." footer={<>
                <DrawerClose>
                  <Button onClick={() => setResult(\`Goal set to \${steps.toLocaleString('en-US')} steps\`)}>Save goal</Button>
                </DrawerClose>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </>}>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32
          }}>
              <Button variant="outline" aria-label="Fewer steps" disabled={steps <= 1000} onClick={() => setSteps(s => s - 500)} icon={<span aria-hidden>−</span>} />
              <div style={{
              display: 'grid',
              textAlign: 'center'
            }}>
                <span aria-live="polite" style={{
                fontSize: 40,
                lineHeight: '44px',
                fontWeight: 600
              }}>
                  {steps.toLocaleString('en-US')}
                </span>
                <span style={muted}>steps a day</span>
              </div>
              <Button variant="outline" aria-label="More steps" onClick={() => setSteps(s => s + 500)} icon={<span aria-hidden>+</span>} />
            </div>
            <div aria-hidden style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 6,
            height: 96
          }}>
              {week.map((h, i) => <span key={i} style={{
              flex: 1,
              height: \`\${h}%\`,
              borderRadius: 4,
              background: i === week.length - 1 ? 'var(--ds-primary)' : 'var(--ds-fill-2)'
            }} />)}
            </div>
          </Drawer>

          <Drawer trigger={<Button variant="outline">Company record</Button>} direction="side" closeButton title="Northwind Labs">
            <dl style={{
            display: 'grid',
            gap: 10,
            margin: 0
          }}>
              {record.map(([k, v]) => <div key={k} style={{
              display: 'grid',
              gridTemplateColumns: '128px 1fr',
              gap: 12
            }}>
                  <dt style={muted}>{k}</dt>
                  <dd style={{
                margin: 0
              }}>{k === 'Industry' ? <Badge variant="soft">{v}</Badge> : v}</dd>
                </div>)}
            </dl>
            <Separator />
            <p style={muted}>Account summary</p>
            <p style={{
            margin: 0
          }}>Priya from Northwind Labs asked about route planning for their fleet and requested a demo. No opportunity yet — reply with a short overview and propose times for an intro call.</p>
            <p style={muted}>About the company</p>
            <p style={{
            margin: 0
          }}>Northwind Labs builds dispatch software for regional delivery fleets, sold per vehicle to logistics teams.</p>
            <div style={row}>
              <p style={muted}>Open tasks</p>
              <Button variant="ghost" size="sm">
                See all
              </Button>
            </div>
            <p style={{
            margin: 0
          }}>Reply to Priya with times for an intro call</p>
          </Drawer>

          <Drawer trigger={<Button variant="outline">Notifications</Button>} direction="side" closeButton title="Updates" description="3 new since yesterday">
            <ButtonGroup aria-label="Show">
              {(['all', 'mention', 'action'] as const).map(f => <Button key={f} size="sm" variant={filter === f ? 'secondary' : 'outline'} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                  {f === 'all' ? 'All' : f === 'mention' ? 'Mentions' : 'Actions'}
                </Button>)}
            </ButtonGroup>
            <ul aria-label="Recent" style={{
            display: 'grid',
            gap: 16,
            margin: 0,
            padding: 0,
            listStyle: 'none'
          }}>
              {shown.map(u => <li key={u.title} style={{
              display: 'grid',
              gap: 2
            }}>
                  <span style={strong}>{u.title}</span>
                  <span>{u.text}</span>
                  <span style={muted}>{u.when}</span>
                </li>)}
            </ul>
          </Drawer>

          <Drawer trigger={<Button variant="outline">Account</Button>} direction="side" closeButton aria-label="Account">
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}>
              <Avatar initials="MC" name="Maya Chen" />
              <span style={{
              ...strong,
              fontSize: 16
            }}>Maya Chen</span>
            </div>
            <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 8
          }}>
              <div style={{
              padding: 12,
              borderRadius: 12,
              background: 'var(--ds-muted)'
            }}>
                <p style={muted}>Wallet balance</p>
                <p style={{
                ...strong,
                fontSize: 20,
                lineHeight: '28px'
              }}>$12.40</p>
              </div>
              <div style={{
              padding: 12,
              borderRadius: 12,
              background: 'var(--ds-muted)'
            }}>
                <p style={muted}>Spending limit</p>
                <p style={{
                ...strong,
                fontSize: 20,
                lineHeight: '28px'
              }}>$3,500</p>
              </div>
            </div>
            <Separator />
            <p style={muted}>How you pay</p>
            {['Payment methods', 'Autopay', 'Payment preferences', 'Subscriptions'].map(item => <Button key={item} variant="ghost" style={{
            justifyContent: 'flex-start'
          }} onClick={() => setResult(\`\${item} opened\`)}>
                {item}
              </Button>)}
            <Separator />
            <Switch label="Cashback on every ride" defaultChecked />
          </Drawer>

          <Drawer trigger={<Button variant="outline">New automation</Button>} direction="side" closeButton title="New automation" footer={<>
                <DrawerClose>
                  <Button onClick={() => setResult('Automation created')}>Create automation</Button>
                </DrawerClose>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </>}>
            <FieldGroup>
              <Field label="Name">
                <Input defaultValue="Weekly docs clarity review" />
              </Field>
              <RadioGroup label="When should it run?" defaultValue="publish">
                <Radio value="publish" label="Content update" caption="When a page is published" />
                <Radio value="schedule" label="Custom schedule" caption="On a recurring schedule" />
                <Radio value="merge" label="Code change" caption="When a pull request merges" />
              </RadioGroup>
              <Field label="Context repository" description="Cloned so the agent can read the code.">
                <Input defaultValue="northwind/docs-site" />
              </Field>
              <Field label="Additional prompt" description="Appended to our prompt on every run.">
                <Textarea defaultValue="You are a copy editor polishing product docs for clarity and tone." />
              </Field>
            </FieldGroup>
          </Drawer>

          <Drawer trigger={<Button variant="outline">From the top</Button>} direction="up" title="You're offline" description="Changes are saved on this device and sync when you reconnect." footer={<DrawerClose><Button>Got it</Button></DrawerClose>} />
        </div>
        <p role="status" style={{
        margin: 0,
        minHeight: 20,
        fontFamily: 'var(--ds-font-sans)',
        fontSize: 14,
        color: 'var(--ds-muted-foreground)'
      }}>
          {result}
        </p>
      </div>;
  }
}`,...z.parameters?.docs?.source},description:{story:`The Figma demos: each button opens one. What a drawer did shows below.`,...z.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      <div style={{
      display: 'grid',
      gap: 24
    }}>
        <Still direction="down" style={{
        width: 'min(664px, 100%)'
      }} />
        <Still direction="up" style={{
        width: 'min(664px, 100%)'
      }} />
      </div>
      <Still direction="side" style={{
      height: 480
    }} />
    </div>
}`,...V.parameters?.docs?.source},description:{story:`Figma Direction, drawn in the page: down (handle on top), up (handle below) and side (here 480 px tall).`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24
    }}>
          <Still direction="down" style={{
        width: '100%',
        maxWidth: '100%'
      }} />
        </div>)}
    </div>
}`,...H.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...H.parameters?.docs?.description}}}})))()}W();export{z as Demos,V as Directions,F as Playground,H as Themes,U as __namedExportsOrder,A as default};