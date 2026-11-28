import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-hNUR_eGY.js";import{n as r,t as i}from"./Badge-Dkw-vB4y.js";import{n as a,t as o}from"./Button-Dp7j3ZOj.js";import{n as s,t as c}from"./Avatar-Qmm5c1Bg.js";import{n as l,o as u,t as d}from"./Field-B9uJPtXf.js";import{i as f,t as p}from"./Input-BLTwMHBp.js";import{i as m,t as h}from"./Checkbox-DaiYGTHP.js";import{r as g,t as _}from"./ButtonGroup-DjIVqCsv.js";import{n as v,r as y,t as b}from"./Kbd-D8m4JQxJ.js";import{n as x,t as S}from"./Separator-CwdQMRDg.js";import{n as C,t as w}from"./Textarea-BXPYTyk-.js";import{n as T,r as E,t as D}from"./Sheet-C_SmdgMM.js";var O,k,A,j,M,N,P,F,I,L,R,z,initials,B,Still,V,H,U;function init_Sheet_stories(){return(init_Sheet_stories=e((()=>{O=n(),s(),r(),a(),g(),m(),u(),f(),y(),x(),C(),E(),k=t(),A={title:`Components/Sheet`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Sheet** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=188-115)): a modal panel along an edge of the screen, Figma Side → `side` (`right` · `left` · `top` · `bottom`), with the header (`title`, `description`, Figma "Close button" → `closeButton`), any content (children) and the `footer`, whose buttons stack full-width with the main action first. Left and right sheets are full-height and 384 px wide (`width`); top and bottom are full-width and as tall as their content. The content scrolls, the header and the footer stay. It behaves like Dialog: a native modal `<dialog>`, focus inside, Escape, Close or a click on the backdrop closes it and focus goes back to the trigger; `SheetClose` makes a button close it.'}}}},j={margin:0,color:`var(--ds-muted-foreground)`},M={margin:0,fontWeight:500},N={display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:12},P={display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:8},F=(0,k.jsx)(`svg`,{viewBox:`0 0 24 24`,width:16,height:16,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:(0,k.jsx)(`path`,{d:`M18 6 6 18M6 6l12 12`})}),I={args:{side:`right`,title:`Sheet title`,description:`Sheet description — what this panel is for.`,closeButton:!0,footer:!0},argTypes:{side:{name:`Side`,control:`inline-radio`,options:[`right`,`left`,`top`,`bottom`]},closeButton:{name:`Close button`},footer:{name:`Footer`}},render:({side:e,title:t,description:n,closeButton:r,footer:i})=>(0,k.jsx)(D,{trigger:(0,k.jsx)(o,{variant:`outline`,children:`Open sheet`}),side:e,title:t||void 0,description:n||void 0,"aria-label":t?void 0:`Sheet`,closeButton:r,footer:i?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(T,{children:(0,k.jsx)(o,{children:`Save changes`})}),(0,k.jsx)(T,{children:(0,k.jsx)(o,{variant:`outline`,children:`Cancel`})})]}):void 0,children:(0,k.jsx)(`p`,{style:{margin:0},children:`Sheet content — a form, settings, a list; it scrolls when taller than the panel.`})})},L=[`12–1 PM`,`1–2 PM`,`5–6 PM`,`6–7 PM`,`7–8 PM`],R=[[`General`,[[`Open command menu`,(0,k.jsxs)(v,{children:[(0,k.jsx)(b,{label:`Command`,children:`⌘`}),(0,k.jsx)(b,{children:`K`})]},`k`)],[`Search mail`,(0,k.jsx)(b,{children:`/`},`s`)],[`Show shortcuts`,(0,k.jsx)(b,{children:`?`},`q`)]]],[`Navigation`,[[`Go to inbox`,(0,k.jsxs)(v,{children:[(0,k.jsx)(b,{children:`G`}),(0,k.jsx)(`span`,{style:j,children:`then`}),(0,k.jsx)(b,{children:`I`})]},`gi`)],[`Go to sent`,(0,k.jsxs)(v,{children:[(0,k.jsx)(b,{children:`G`}),(0,k.jsx)(`span`,{style:j,children:`then`}),(0,k.jsx)(b,{children:`S`})]},`gs`)],[`Next conversation`,(0,k.jsx)(b,{children:`J`},`j`)],[`Previous conversation`,(0,k.jsx)(b,{children:`K`},`kk`)]]],[`Actions`,[[`Compose`,(0,k.jsx)(b,{children:`C`},`c`)],[`Reply`,(0,k.jsx)(b,{children:`R`},`r`)],[`Archive`,(0,k.jsx)(b,{children:`E`},`e`)],[`Snooze`,(0,k.jsx)(b,{children:`H`},`h`)]]]],z=[{who:`Maya Chen`,when:`2h`,where:`Day 3 · Cooking class`,text:`Can we move the cooking class to Thursday? Friday is the only free evening for the fado show.`,replies:2},{who:`Leo Park`,when:`5h`,where:`Day 2 · Belém`,text:`Booked the 10:00 slot for the tower. Tickets are in the shared folder.`,replies:0},{who:`Ana Ruiz`,when:`Yesterday`,where:`Hotel`,text:`Is breakfast included, or should we plan a café each morning?`,replies:1}],initials=e=>e.split(` `).map(e=>e[0]).join(``),B={render:function Demos(){let[e,t]=(0,O.useState)(``),[n,r]=(0,O.useState)(`5–6 PM`),[a,s]=(0,O.useState)(``),[u,f]=(0,O.useState)(`open`),m=R.map(([e,t])=>[e,t.filter(([e])=>e.toLowerCase().includes(a.toLowerCase()))]).filter(([,e])=>e.length);return(0,k.jsxs)(`div`,{style:{display:`grid`,gap:16,justifyItems:`start`},children:[(0,k.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,k.jsx)(D,{trigger:(0,k.jsx)(o,{variant:`outline`,children:`Edit profile`}),title:`Edit profile`,description:`Make changes to your profile here. Click save when you're done.`,footer:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(T,{children:(0,k.jsx)(o,{onClick:()=>t(`Profile saved`),children:`Save changes`})}),(0,k.jsx)(T,{children:(0,k.jsx)(o,{variant:`outline`,children:`Cancel`})})]}),children:(0,k.jsxs)(l,{children:[(0,k.jsx)(d,{label:`Name`,children:(0,k.jsx)(p,{defaultValue:`Maya Chen`})}),(0,k.jsx)(d,{label:`Username`,children:(0,k.jsx)(p,{defaultValue:`@maya.travels`})}),(0,k.jsx)(d,{label:`Email`,description:`We never share your email with anyone.`,children:(0,k.jsx)(p,{type:`email`,defaultValue:`maya@example.com`})})]})}),(0,k.jsxs)(D,{trigger:(0,k.jsx)(o,{variant:`outline`,children:`Payment details`}),title:`Payment`,description:`Oct 2, 2026 at 2:32 PM`,footer:(0,k.jsxs)(`div`,{style:P,children:[(0,k.jsx)(o,{variant:`outline`,onClick:()=>t(`Refund started`),children:`Refund`}),(0,k.jsx)(o,{onClick:()=>t(`Receipt downloaded`),children:`Download receipt`})]}),children:[(0,k.jsxs)(`div`,{style:{display:`grid`,gap:4},children:[(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:8},children:[(0,k.jsx)(`span`,{style:{fontSize:30,lineHeight:`36px`,fontWeight:600},children:`$249.00`}),(0,k.jsx)(`span`,{style:j,children:`USD`}),(0,k.jsx)(i,{color:`green`,children:`Succeeded`})]}),(0,k.jsx)(`p`,{style:j,children:`Soundwave Premium · Yearly plan`})]}),(0,k.jsx)(S,{}),(0,k.jsx)(`p`,{style:M,children:`Timeline`}),(0,k.jsxs)(`ol`,{style:{display:`grid`,gap:8,margin:0,paddingLeft:20},children:[(0,k.jsx)(`li`,{children:`Payment started`}),(0,k.jsx)(`li`,{children:`Payment succeeded`}),(0,k.jsx)(`li`,{children:`Receipt sent to maya.chen@example.com`})]}),(0,k.jsx)(S,{}),(0,k.jsx)(`p`,{style:M,children:`Details`}),(0,k.jsx)(`dl`,{style:{display:`grid`,gap:8,margin:0},children:[[`Payment method`,`Visa 4242`],[`Customer`,`Maya Chen`],[`Email`,`maya.chen@example.com`],[`Statement descriptor`,`SOUNDWAVE PREMIUM`],[`Risk evaluation`,`Normal`]].map(([e,t])=>(0,k.jsxs)(`div`,{style:N,children:[(0,k.jsx)(`dt`,{style:j,children:e}),(0,k.jsx)(`dd`,{style:{margin:0},children:t})]},e))})]}),(0,k.jsx)(D,{trigger:(0,k.jsx)(o,{variant:`outline`,children:`Delivery time`}),side:`bottom`,title:`Delivery time`,description:`Today, Friday, October 2`,footer:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(T,{children:(0,k.jsxs)(o,{onClick:()=>t(`Delivery at ${n}`),children:[`Confirm `,n]})}),(0,k.jsx)(T,{children:(0,k.jsx)(o,{variant:`outline`,children:`Cancel`})})]}),children:(0,k.jsx)(_,{"aria-label":`Delivery slot`,children:L.map(e=>(0,k.jsx)(o,{variant:e===n?`secondary`:`outline`,"aria-pressed":e===n,onClick:()=>r(e),children:e},e))})}),(0,k.jsxs)(D,{trigger:(0,k.jsx)(o,{variant:`outline`,children:`Keyboard shortcuts`}),title:`Keyboard shortcuts`,description:`Work through your inbox without the mouse.`,children:[(0,k.jsx)(p,{"aria-label":`Search shortcuts`,placeholder:`Search shortcuts`,value:a,onChange:e=>s(e.currentTarget.value)}),m.map(([e,t])=>(0,k.jsxs)(`section`,{style:{display:`grid`,gap:8},children:[(0,k.jsx)(`p`,{style:{...j,fontWeight:500},children:e}),t.map(([e,t])=>(0,k.jsxs)(`div`,{style:N,children:[(0,k.jsx)(`span`,{children:e}),t]},e))]},e)),!m.length&&(0,k.jsxs)(`p`,{style:j,children:[`No shortcuts match “`,a,`”.`]})]}),(0,k.jsxs)(D,{trigger:(0,k.jsx)(o,{variant:`outline`,children:`Edit event`}),title:`Edit event`,description:`Guests get an update when you save.`,footer:(0,k.jsxs)(`div`,{style:P,children:[(0,k.jsx)(T,{children:(0,k.jsx)(o,{variant:`outline`,children:`Cancel`})}),(0,k.jsx)(T,{children:(0,k.jsx)(o,{onClick:()=>t(`Event saved`),children:`Save`})})]}),children:[(0,k.jsxs)(l,{children:[(0,k.jsx)(d,{label:`Title`,children:(0,k.jsx)(p,{defaultValue:`Morning run with Leo`})}),(0,k.jsxs)(`div`,{style:P,children:[(0,k.jsx)(d,{label:`Date`,children:(0,k.jsx)(p,{defaultValue:`Sat, Oct 10`})}),(0,k.jsx)(d,{label:`Time`,children:(0,k.jsx)(p,{defaultValue:`7:00 AM`})})]}),(0,k.jsx)(h,{label:`All day`}),(0,k.jsx)(d,{label:`Location`,children:(0,k.jsx)(p,{defaultValue:`Riverside Park, north gate`})})]}),(0,k.jsx)(S,{}),(0,k.jsxs)(`div`,{style:N,children:[(0,k.jsx)(`p`,{style:M,children:`Guests`}),(0,k.jsx)(`span`,{style:j,children:`3 going`})]}),[[`Maya Chen`,`Organizer`],[`Leo Park`,`Going`],[`Ana Ruiz`,`Going`]].map(([e,t])=>(0,k.jsxs)(`div`,{style:{...N,justifyContent:`flex-start`},children:[(0,k.jsx)(c,{size:`sm`,initials:initials(e),name:e}),(0,k.jsx)(`span`,{style:{flex:1},children:e}),(0,k.jsx)(`span`,{style:j,children:t})]},e))]}),(0,k.jsxs)(D,{trigger:(0,k.jsx)(o,{variant:`outline`,children:`Comments`}),side:`left`,title:`Comments`,description:`Lisbon trip itinerary`,footer:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(w,{"aria-label":`Add a comment`,placeholder:`Add a comment…`}),(0,k.jsx)(o,{onClick:()=>t(`Comment posted`),children:`Comment`})]}),children:[(0,k.jsx)(_,{"aria-label":`Show`,children:[`open`,`resolved`].map(e=>(0,k.jsx)(o,{size:`sm`,variant:u===e?`secondary`:`outline`,"aria-pressed":u===e,onClick:()=>f(e),children:e===`open`?`Open`:`Resolved`},e))}),u===`open`?z.map(e=>(0,k.jsxs)(`article`,{style:{display:`grid`,gridTemplateColumns:`auto 1fr`,gap:`4px 12px`},children:[(0,k.jsx)(c,{size:`sm`,initials:initials(e.who),name:e.who}),(0,k.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`baseline`},children:[(0,k.jsx)(`span`,{style:M,children:e.who}),(0,k.jsx)(`span`,{style:j,children:e.when})]}),(0,k.jsxs)(`div`,{style:{gridColumn:2,display:`grid`,gap:4},children:[(0,k.jsx)(`span`,{style:j,children:e.where}),(0,k.jsx)(`p`,{style:{margin:0},children:e.text}),e.replies>0&&(0,k.jsx)(`span`,{style:j,children:e.replies===1?`1 reply`:`${e.replies} replies`})]})]},e.who)):(0,k.jsx)(`p`,{style:j,children:`No resolved comments yet.`})]})]}),(0,k.jsx)(`p`,{role:`status`,style:{margin:0,minHeight:20,fontFamily:`var(--ds-font-sans)`,fontSize:14,color:`var(--ds-muted-foreground)`},children:e})]})}},Still=({side:e,style:t})=>(0,k.jsxs)(`div`,{className:`ds-sheet ds-sheet--${e}`,role:`dialog`,"aria-label":`Side ${e}`,style:{display:`flex`,position:`static`,animation:`none`,...t},children:[(0,k.jsxs)(`div`,{className:`ds-sheet__header`,children:[(0,k.jsxs)(`div`,{className:`ds-sheet__heading`,children:[(0,k.jsxs)(`h2`,{className:`ds-sheet__title`,children:[`Side `,e]}),(0,k.jsx)(`p`,{className:`ds-sheet__description`,children:`Sheet description — what this panel is for.`})]}),(0,k.jsx)(o,{variant:`ghost`,size:`sm`,icon:F,"aria-label":`Close`,className:`ds-sheet__close`})]}),(0,k.jsx)(`div`,{className:`ds-sheet__body`,children:(0,k.jsx)(`p`,{style:{margin:0},children:`Sheet content — a form, settings, a list; it scrolls when taller than the panel.`})}),(0,k.jsxs)(`div`,{className:`ds-sheet__footer`,children:[(0,k.jsx)(o,{children:`Save changes`}),(0,k.jsx)(o,{variant:`outline`,children:`Cancel`})]})]}),V={render:()=>(0,k.jsxs)(`div`,{style:{display:`grid`,gap:24},children:[(0,k.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[(0,k.jsx)(Still,{side:`right`,style:{height:480}}),(0,k.jsx)(Still,{side:`left`,style:{height:480}})]}),(0,k.jsx)(Still,{side:`top`,style:{width:`auto`}})]})},H={parameters:{layout:`fullscreen`},render:()=>(0,k.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,k.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24},children:(0,k.jsx)(Still,{side:`right`,style:{height:420,maxWidth:`100%`}})},e))})},U=[`Playground`,`Demos`,`Sides`,`Themes`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'right',
    title: 'Sheet title',
    description: 'Sheet description — what this panel is for.',
    closeButton: true,
    footer: true
  },
  argTypes: {
    side: {
      name: 'Side',
      control: 'inline-radio',
      options: ['right', 'left', 'top', 'bottom']
    },
    closeButton: {
      name: 'Close button'
    },
    footer: {
      name: 'Footer'
    }
  },
  render: ({
    side,
    title,
    description,
    closeButton,
    footer
  }) => <Sheet trigger={<Button variant="outline">Open sheet</Button>} side={side} title={title || undefined} description={description || undefined} aria-label={title ? undefined : 'Sheet'} closeButton={closeButton} footer={footer ? <>
            <SheetClose>
              <Button>Save changes</Button>
            </SheetClose>
            <SheetClose>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
          </> : undefined}>
      <p style={{
      margin: 0
    }}>Sheet content — a form, settings, a list; it scrolls when taller than the panel.</p>
    </Sheet>
}`,...I.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: function Demos() {
    const [result, setResult] = useState('');
    const [slot, setSlot] = useState('5–6 PM');
    const [query, setQuery] = useState('');
    const [tab, setTab] = useState<'open' | 'resolved'>('open');
    const groups = shortcuts.map(([group, items]) => [group, items.filter(([label]) => label.toLowerCase().includes(query.toLowerCase()))] as const).filter(([, items]) => items.length);
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
          <Sheet trigger={<Button variant="outline">Edit profile</Button>} title="Edit profile" description="Make changes to your profile here. Click save when you're done." footer={<>
                <SheetClose>
                  <Button onClick={() => setResult('Profile saved')}>Save changes</Button>
                </SheetClose>
                <SheetClose>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
              </>}>
            <FieldGroup>
              <Field label="Name">
                <Input defaultValue="Maya Chen" />
              </Field>
              <Field label="Username">
                <Input defaultValue="@maya.travels" />
              </Field>
              <Field label="Email" description="We never share your email with anyone.">
                <Input type="email" defaultValue="maya@example.com" />
              </Field>
            </FieldGroup>
          </Sheet>

          <Sheet trigger={<Button variant="outline">Payment details</Button>} title="Payment" description="Oct 2, 2026 at 2:32 PM" footer={<div style={pair}>
                <Button variant="outline" onClick={() => setResult('Refund started')}>
                  Refund
                </Button>
                <Button onClick={() => setResult('Receipt downloaded')}>Download receipt</Button>
              </div>}>
            <div style={{
            display: 'grid',
            gap: 4
          }}>
              <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 8
            }}>
                <span style={{
                fontSize: 30,
                lineHeight: '36px',
                fontWeight: 600
              }}>$249.00</span>
                <span style={muted}>USD</span>
                <Badge color="green">Succeeded</Badge>
              </div>
              <p style={muted}>Soundwave Premium · Yearly plan</p>
            </div>
            <Separator />
            <p style={strong}>Timeline</p>
            <ol style={{
            display: 'grid',
            gap: 8,
            margin: 0,
            paddingLeft: 20
          }}>
              <li>Payment started</li>
              <li>Payment succeeded</li>
              <li>Receipt sent to maya.chen@example.com</li>
            </ol>
            <Separator />
            <p style={strong}>Details</p>
            <dl style={{
            display: 'grid',
            gap: 8,
            margin: 0
          }}>
              {[['Payment method', 'Visa 4242'], ['Customer', 'Maya Chen'], ['Email', 'maya.chen@example.com'], ['Statement descriptor', 'SOUNDWAVE PREMIUM'], ['Risk evaluation', 'Normal']].map(([k, v]) => <div key={k} style={row}>
                  <dt style={muted}>{k}</dt>
                  <dd style={{
                margin: 0
              }}>{v}</dd>
                </div>)}
            </dl>
          </Sheet>

          <Sheet trigger={<Button variant="outline">Delivery time</Button>} side="bottom" title="Delivery time" description="Today, Friday, October 2" footer={<>
                <SheetClose>
                  <Button onClick={() => setResult(\`Delivery at \${slot}\`)}>Confirm {slot}</Button>
                </SheetClose>
                <SheetClose>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
              </>}>
            <ButtonGroup aria-label="Delivery slot">
              {slots.map(s => <Button key={s} variant={s === slot ? 'secondary' : 'outline'} aria-pressed={s === slot} onClick={() => setSlot(s)}>
                  {s}
                </Button>)}
            </ButtonGroup>
          </Sheet>

          <Sheet trigger={<Button variant="outline">Keyboard shortcuts</Button>} title="Keyboard shortcuts" description="Work through your inbox without the mouse.">
            <Input aria-label="Search shortcuts" placeholder="Search shortcuts" value={query} onChange={event => setQuery(event.currentTarget.value)} />
            {groups.map(([group, items]) => <section key={group} style={{
            display: 'grid',
            gap: 8
          }}>
                <p style={{
              ...muted,
              fontWeight: 500
            }}>{group}</p>
                {items.map(([label, keys]) => <div key={label} style={row}>
                    <span>{label}</span>
                    {keys}
                  </div>)}
              </section>)}
            {!groups.length && <p style={muted}>No shortcuts match “{query}”.</p>}
          </Sheet>

          <Sheet trigger={<Button variant="outline">Edit event</Button>} title="Edit event" description="Guests get an update when you save." footer={<div style={pair}>
                <SheetClose>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
                <SheetClose>
                  <Button onClick={() => setResult('Event saved')}>Save</Button>
                </SheetClose>
              </div>}>
            <FieldGroup>
              <Field label="Title">
                <Input defaultValue="Morning run with Leo" />
              </Field>
              <div style={pair}>
                <Field label="Date">
                  <Input defaultValue="Sat, Oct 10" />
                </Field>
                <Field label="Time">
                  <Input defaultValue="7:00 AM" />
                </Field>
              </div>
              <Checkbox label="All day" />
              <Field label="Location">
                <Input defaultValue="Riverside Park, north gate" />
              </Field>
            </FieldGroup>
            <Separator />
            <div style={row}>
              <p style={strong}>Guests</p>
              <span style={muted}>3 going</span>
            </div>
            {[['Maya Chen', 'Organizer'], ['Leo Park', 'Going'], ['Ana Ruiz', 'Going']].map(([name, status]) => <div key={name} style={{
            ...row,
            justifyContent: 'flex-start'
          }}>
                <Avatar size="sm" initials={initials(name)} name={name} />
                <span style={{
              flex: 1
            }}>{name}</span>
                <span style={muted}>{status}</span>
              </div>)}
          </Sheet>

          <Sheet trigger={<Button variant="outline">Comments</Button>} side="left" title="Comments" description="Lisbon trip itinerary" footer={<>
                <Textarea aria-label="Add a comment" placeholder="Add a comment…" />
                <Button onClick={() => setResult('Comment posted')}>Comment</Button>
              </>}>
            <ButtonGroup aria-label="Show">
              {(['open', 'resolved'] as const).map(t => <Button key={t} size="sm" variant={tab === t ? 'secondary' : 'outline'} aria-pressed={tab === t} onClick={() => setTab(t)}>
                  {t === 'open' ? 'Open' : 'Resolved'}
                </Button>)}
            </ButtonGroup>
            {tab === 'open' ? comments.map(c => <article key={c.who} style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '4px 12px'
          }}>
                  <Avatar size="sm" initials={initials(c.who)} name={c.who} />
                  <div style={{
              display: 'flex',
              gap: 8,
              alignItems: 'baseline'
            }}>
                    <span style={strong}>{c.who}</span>
                    <span style={muted}>{c.when}</span>
                  </div>
                  <div style={{
              gridColumn: 2,
              display: 'grid',
              gap: 4
            }}>
                    <span style={muted}>{c.where}</span>
                    <p style={{
                margin: 0
              }}>{c.text}</p>
                    {c.replies > 0 && <span style={muted}>{c.replies === 1 ? '1 reply' : \`\${c.replies} replies\`}</span>}
                  </div>
                </article>) : <p style={muted}>No resolved comments yet.</p>}
          </Sheet>
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
}`,...B.parameters?.docs?.source},description:{story:`The Figma demos: each button opens one. What a sheet did shows below.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      <div style={{
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }}>
        <Still side="right" style={{
        height: 480
      }} />
        <Still side="left" style={{
        height: 480
      }} />
      </div>
      <Still side="top" style={{
      width: 'auto'
    }} />
    </div>
}`,...V.parameters?.docs?.source},description:{story:`Figma Side, drawn in the page: left and right 384 px wide (here 480 px tall), top and bottom full-width.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
          <Still side="right" style={{
        height: 420,
        maxWidth: '100%'
      }} />
        </div>)}
    </div>
}`,...H.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...H.parameters?.docs?.description}}}})))()}init_Sheet_stories();export{B as Demos,I as Playground,V as Sides,H as Themes,U as __namedExportsOrder,A as default};