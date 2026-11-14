import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-Diau3x_I.js";import{$ as r,B as i,Bt as a,Ct as ee,G as te,J as ne,Lt as o,M as s,Pt as c,Qt as l,St as re,X as u,Zt as ie,_t as ae,a as oe,at as d,f,h as p,ht as se,in as ce,j as le,nn as ue,on as de,pt as fe,qt as pe,rt as me,t as he,v as m,y as ge,z as h}from"./react-DeAKwB_L.js";import{n as g,t as _}from"./Button-hgGEFKG0.js";import{n as _e,t as v}from"./Avatar-CeLEaWsk.js";import{a as y,i as b,n as ve,r as ye,t as be}from"./Tabs-DXwj1EsB.js";import{n as xe,t as x}from"./Empty-Brjs77-m.js";import{r as Se,t as S}from"./Kbd-Cyx9ZOAF.js";import{i as C,t as w}from"./Popover-BpmzwIrv.js";import{a as T,c as E,i as D,l as O,n as k,o as A,r as j,s as M,t as N}from"./Command-DSf0wihf.js";var P,F,I,log,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;function init_Command_stories(){return(init_Command_stories=e((()=>{P=n(),ee(),_e(),g(),xe(),Se(),C(),y(),O(),F=t(),I={title:`Components/Command`,parameters:{layout:`centered`,docs:{description:{component:"Implements the Sort UI 2.0 **Command**, **Command Item**, **Command Group Heading** and **Command Separator** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=208-2)): a search field over a filtered list of commands. `CommandInput` keeps focus while Arrow Up / Down (Home / End) move the selected item and Enter runs it (`onSelect`); typing filters the items by their text, `value` and `keywords`, hiding empty groups and separators, and `CommandEmpty` shows when nothing matches. Items take an `icon`, a `description`, a `shortcut` (or any trailing note), `checked` and `disabled`. `CommandDialog` opens it as a modal palette; `plain` puts it inside a Popover."}}}},log=e=>()=>console.info(`Ran: ${e}`),L=(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(D,{heading:`Suggestions`,children:[(0,F.jsx)(A,{icon:(0,F.jsx)(i,{}),onSelect:log(`Calendar`),children:`Calendar`}),(0,F.jsx)(A,{icon:(0,F.jsx)(l,{}),onSelect:log(`Search Emoji`),children:`Search Emoji`}),(0,F.jsx)(A,{icon:(0,F.jsx)(pe,{}),disabled:!0,children:`Calculator`})]}),(0,F.jsx)(E,{}),(0,F.jsxs)(D,{heading:`Settings`,children:[(0,F.jsx)(A,{icon:(0,F.jsx)(r,{}),shortcut:`P`,onSelect:log(`Profile`),children:`Profile`}),(0,F.jsx)(A,{icon:(0,F.jsx)(f,{}),shortcut:`B`,keywords:[`invoices`,`plan`],onSelect:log(`Billing`),children:`Billing`}),(0,F.jsx)(A,{icon:(0,F.jsx)(s,{}),shortcut:`/`,keywords:[`preferences`],onSelect:log(`Settings`),children:`Settings`})]})]}),R=(0,F.jsx)(j,{children:(0,F.jsx)(x,{titleAs:`p`,icon:(0,F.jsx)(o,{}),title:`No results found.`,description:`Try another word, or check the spelling.`})}),z={args:{placeholder:`Placeholder`,search:``,width:`450px`},render:e=>(0,F.jsxs)(N,{label:`Commands`,defaultSearch:e.search,width:e.width,children:[(0,F.jsx)(T,{placeholder:e.placeholder}),(0,F.jsxs)(M,{children:[L,R]})]},e.search)},B={render:()=>(0,F.jsxs)(N,{label:`Commands`,width:`450px`,children:[(0,F.jsx)(T,{placeholder:`Placeholder`}),(0,F.jsxs)(M,{children:[L,R]})]})},V={render:()=>(0,F.jsxs)(N,{label:`Item states`,children:[(0,F.jsx)(T,{placeholder:`Filter`}),(0,F.jsxs)(M,{children:[(0,F.jsx)(A,{icon:(0,F.jsx)(u,{}),children:`Selected (the first item)`}),(0,F.jsx)(A,{icon:(0,F.jsx)(u,{}),children:`Default`}),(0,F.jsx)(A,{icon:(0,F.jsx)(u,{}),disabled:!0,children:`Disabled`}),(0,F.jsx)(A,{icon:(0,F.jsx)(u,{}),shortcut:`⌘K`,children:`With a shortcut`}),(0,F.jsx)(A,{icon:(0,F.jsx)(u,{}),checked:!0,children:`Checked`}),(0,F.jsx)(A,{children:`Without a leading icon`})]})]})},H=[{name:`Shiryoku`,role:`Owner`},{name:`Alex Derek`,role:`Designer`},{name:`Mira Bloom`,role:`Designer`}],U={render:function Render(){let[e,t]=(0,P.useState)(`all`),show=t=>e===`all`||e===t,n=(0,F.jsxs)(M,{maxHeight:`480px`,children:[show(`actions`)&&(0,F.jsxs)(D,{heading:`Actions`,children:[(0,F.jsx)(A,{icon:(0,F.jsx)(c,{}),children:`Create new task`}),(0,F.jsx)(A,{icon:(0,F.jsx)(oe,{}),children:`Duplicate page`}),(0,F.jsx)(A,{icon:(0,F.jsx)(ie,{}),children:`Export as CSV`})]}),e===`all`&&(0,F.jsx)(E,{}),show(`files`)&&(0,F.jsxs)(D,{heading:`Files`,children:[(0,F.jsx)(A,{icon:(0,F.jsx)(u,{}),children:`src/app/page.tsx`}),(0,F.jsx)(A,{icon:(0,F.jsx)(u,{}),children:`package.json`}),(0,F.jsx)(A,{icon:(0,F.jsx)(u,{}),children:`next.config.js`})]}),e===`all`&&(0,F.jsx)(E,{}),show(`people`)&&(0,F.jsx)(D,{heading:`People`,children:H.map(e=>(0,F.jsx)(A,{icon:(0,F.jsx)(v,{size:`xs`,initials:e.name[0]}),shortcut:e.role,keywords:[e.role],children:e.name},e.name))}),R]});return(0,F.jsxs)(N,{label:`Search the workspace`,width:`450px`,children:[(0,F.jsx)(T,{placeholder:`Search across the workspace…`}),(0,F.jsxs)(be,{value:e,onValueChange:t,children:[(0,F.jsx)(`div`,{style:{padding:`2px 6px 0`},children:(0,F.jsxs)(ye,{fullWidth:!0,"aria-label":`Result type`,children:[(0,F.jsx)(b,{value:`all`,children:`All`}),(0,F.jsx)(b,{value:`actions`,children:`Actions`}),(0,F.jsx)(b,{value:`files`,children:`Files`}),(0,F.jsx)(b,{value:`people`,children:`People`})]})}),[`all`,`actions`,`files`,`people`].map(t=>(0,F.jsx)(ve,{value:t,children:e===t&&n},t))]})]})}},W=[{name:`ACME Inc.`,role:`Owner`,members:24},{name:`Lumen Studio`,role:`Admin`,members:8},{name:`Northwind Labs`,role:`Member`,members:142},{name:`Harbor Bank`,role:`Member`,members:67},{name:`Paper Kite`,role:`Member`,members:6},{name:`Juniper Health`,role:`Guest`,members:12,blocked:!0}],G={render:function Render(){let[e,t]=(0,P.useState)(`ACME Inc.`);return(0,F.jsxs)(N,{label:`Workspaces`,width:`450px`,children:[(0,F.jsx)(T,{placeholder:`Find workspace…`}),(0,F.jsxs)(M,{maxHeight:`480px`,children:[(0,F.jsx)(D,{heading:`Workspaces`,children:W.map(n=>(0,F.jsx)(A,{icon:(0,F.jsx)(v,{size:`sm`,shape:`square`,initials:n.name[0]}),description:`${n.role} · ${n.members} members`,checked:e===n.name,disabled:n.blocked,shortcut:n.blocked?`Blocked`:void 0,onSelect:()=>t(n.name),children:n.name},n.name))}),(0,F.jsx)(E,{}),(0,F.jsxs)(D,{heading:`Manage`,children:[(0,F.jsx)(A,{icon:(0,F.jsx)(c,{}),children:`New workspace`}),(0,F.jsx)(A,{icon:(0,F.jsx)(ue,{}),children:`Browse workspaces`}),(0,F.jsx)(A,{icon:(0,F.jsx)(a,{}),children:`Leave workspace`})]}),R]})]})}},K={render:()=>(0,F.jsxs)(N,{label:`Commands`,defaultSearch:`xyz`,children:[(0,F.jsx)(T,{placeholder:`Placeholder`}),(0,F.jsxs)(M,{children:[L,(0,F.jsx)(j,{children:(0,F.jsx)(x,{titleAs:`p`,icon:(0,F.jsx)(o,{}),title:`No results found.`,description:`You haven't created any projects yet. Get started by creating your first project.`})})]})]})},q=[[`Light`,(0,F.jsx)(h,{},`i`)],[`Dark`,(0,F.jsx)(he,{},`i`)],[`System`,(0,F.jsx)(ce,{},`i`)],[`High contrast`,(0,F.jsx)(ge,{},`i`)]],J={render:function Render(){let[e,t]=(0,P.useState)(`root`),[n,r]=(0,P.useState)(``),[i,a]=(0,P.useState)(`System`),go=e=>{t(e),r(``)};return(0,F.jsxs)(N,{label:e===`root`?`Commands`:`Themes`,width:`450px`,search:n,onSearchChange:r,children:[(0,F.jsx)(T,{placeholder:e===`root`?`Type a command or search…`:`Pick a theme…`,onKeyDown:t=>{t.key===`Backspace`&&n===``&&e!==`root`&&go(`root`)}}),(0,F.jsxs)(M,{children:[e===`root`?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(D,{heading:`Navigate`,children:[(0,F.jsx)(A,{icon:(0,F.jsx)(p,{}),children:`Dashboard`}),(0,F.jsx)(A,{icon:(0,F.jsx)(ae,{}),children:`Inbox`}),(0,F.jsx)(A,{icon:(0,F.jsx)(re,{}),children:`Projects`}),(0,F.jsx)(A,{icon:(0,F.jsx)(d,{}),children:`Members`})]}),(0,F.jsx)(E,{}),(0,F.jsxs)(D,{heading:`Preferences`,children:[(0,F.jsx)(A,{icon:(0,F.jsx)(le,{}),onSelect:()=>go(`theme`),children:`Change theme…`}),(0,F.jsx)(A,{icon:(0,F.jsx)(te,{}),children:`Change language`}),(0,F.jsx)(A,{icon:(0,F.jsx)(de,{}),children:`Notification settings`})]})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(A,{icon:(0,F.jsx)(m,{}),value:`Back`,onSelect:()=>go(`root`),children:`Back`}),q.map(([e,t])=>(0,F.jsx)(A,{icon:t,checked:i===e,onSelect:()=>a(e),children:e},e))]}),R]})]})}},Y={render:function Render(){let[e,t]=(0,P.useState)(!1);(0,P.useEffect)(()=>{let key=e=>{let n=e.target instanceof HTMLElement&&e.target.closest(`input, textarea, [contenteditable]`);(e.key===`k`&&(e.metaKey||e.ctrlKey)||e.key===`/`&&!n)&&(e.preventDefault(),t(!0))};return document.addEventListener(`keydown`,key),()=>document.removeEventListener(`keydown`,key)},[]);let run=e=>()=>{console.info(`Ran: ${e}`),t(!1)};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(_,{variant:`outline`,leadingIcon:(0,F.jsx)(o,{}),onClick:()=>t(!0),"aria-keyshortcuts":`/ Control+K Meta+K`,children:[`Search workspace `,(0,F.jsx)(S,{children:`/`})]}),(0,F.jsxs)(k,{open:e,onOpenChange:t,label:`Search workspace`,children:[(0,F.jsx)(T,{}),(0,F.jsxs)(M,{children:[(0,F.jsxs)(D,{heading:`Pages`,children:[(0,F.jsx)(A,{icon:(0,F.jsx)(p,{}),onSelect:run(`Overview`),children:`Overview`}),(0,F.jsx)(A,{icon:(0,F.jsx)(fe,{}),onSelect:run(`Analytics`),children:`Analytics`}),(0,F.jsx)(A,{icon:(0,F.jsx)(f,{}),onSelect:run(`Billing`),children:`Billing`}),(0,F.jsx)(A,{icon:(0,F.jsx)(d,{}),onSelect:run(`Team`),children:`Team`})]}),(0,F.jsx)(E,{}),(0,F.jsxs)(D,{heading:`Actions`,children:[(0,F.jsx)(A,{icon:(0,F.jsx)(ne,{}),onSelect:run(`Invite a member`),children:`Invite a member`}),(0,F.jsx)(A,{icon:(0,F.jsx)(me,{}),onSelect:run(`Create project`),children:`Create project`}),(0,F.jsx)(A,{icon:(0,F.jsx)(s,{}),onSelect:run(`Open settings`),children:`Open settings`})]}),R]})]})]})}},X=[`Adam Miller`,`Alex Derek`,`Mira Bloom`,`Priya Raman`,`Jonas Lindqvist`,`Tomás Herrera`],Z={parameters:{layout:`padded`},render:function Render(){let[e,t]=(0,P.useState)(`Adam Miller`),[n,r]=(0,P.useState)(!1);return(0,F.jsx)(`div`,{style:{minHeight:360,display:`flex`,justifyContent:`center`,alignItems:`flex-start`},children:(0,F.jsx)(w,{open:n,onOpenChange:r,width:`240px`,"aria-label":`Assignee`,trigger:(0,F.jsx)(_,{variant:`outline`,leadingIcon:(0,F.jsx)(v,{size:`xs`,initials:e[0]}),trailingIcon:(0,F.jsx)(se,{}),children:e}),children:(0,F.jsxs)(N,{label:`People`,plain:!0,children:[(0,F.jsx)(T,{placeholder:`Search people…`}),(0,F.jsxs)(M,{children:[X.map(n=>(0,F.jsx)(A,{icon:(0,F.jsx)(v,{size:`xs`,initials:n[0]}),checked:e===n,onSelect:()=>{t(n),r(!1)},children:n},n)),(0,F.jsx)(j,{children:(0,F.jsx)(`p`,{style:{margin:0,padding:`24px 8px`,textAlign:`center`,color:`var(--ds-muted-foreground)`},children:`No one by that name.`})})]})]})})})}},Q={parameters:{layout:`fullscreen`},render:()=>(0,F.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,F.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24},children:(0,F.jsxs)(N,{label:`Commands (${e})`,width:`100%`,children:[(0,F.jsx)(T,{placeholder:`Placeholder`}),(0,F.jsx)(M,{children:L})]})},e))})},$=[`Playground`,`Default`,`ItemStates`,`WithTabs`,`WorkspaceSwitcher`,`EmptyResults`,`NestedPages`,`Dialog`,`InAPopover`,`Themes`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    search: '',
    width: '450px'
  },
  render: args => <Command key={args.search} label="Commands" defaultSearch={args.search} width={args.width}>
      <CommandInput placeholder={args.placeholder} />
      <CommandList>
        {suggestions}
        {emptyState}
      </CommandList>
    </Command>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Command label="Commands" width="450px">
      <CommandInput placeholder="Placeholder" />
      <CommandList>
        {suggestions}
        {emptyState}
      </CommandList>
    </Command>
}`,...B.parameters?.docs?.source},description:{story:`Figma demo "Command": suggestions (one disabled) and settings with shortcuts.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Command label="Item states">
      <CommandInput placeholder="Filter" />
      <CommandList>
        <CommandItem icon={<RiFileLine />}>Selected (the first item)</CommandItem>
        <CommandItem icon={<RiFileLine />}>Default</CommandItem>
        <CommandItem icon={<RiFileLine />} disabled>
          Disabled
        </CommandItem>
        <CommandItem icon={<RiFileLine />} shortcut="⌘K">
          With a shortcut
        </CommandItem>
        <CommandItem icon={<RiFileLine />} checked>
          Checked
        </CommandItem>
        <CommandItem>Without a leading icon</CommandItem>
      </CommandList>
    </Command>
}`,...V.parameters?.docs?.source},description:{story:`Figma Command Item State=Default / Selected / Disabled, with the leading slot, a shortcut and Checked.`,...V.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [tab, setTab] = useState('all');
    const show = (kind: string) => tab === 'all' || tab === kind;
    const list = <CommandList maxHeight="480px">
        {show('actions') && <CommandGroup heading="Actions">
            <CommandItem icon={<RiAddLine />}>Create new task</CommandItem>
            <CommandItem icon={<RiFileCopyLine />}>Duplicate page</CommandItem>
            <CommandItem icon={<RiDownloadLine />}>Export as CSV</CommandItem>
          </CommandGroup>}
        {tab === 'all' && <CommandSeparator />}
        {show('files') && <CommandGroup heading="Files">
            <CommandItem icon={<RiFileLine />}>src/app/page.tsx</CommandItem>
            <CommandItem icon={<RiFileLine />}>package.json</CommandItem>
            <CommandItem icon={<RiFileLine />}>next.config.js</CommandItem>
          </CommandGroup>}
        {tab === 'all' && <CommandSeparator />}
        {show('people') && <CommandGroup heading="People">
            {people.map(p => <CommandItem key={p.name} icon={<Avatar size="xs" initials={p.name[0]} />} shortcut={p.role} keywords={[p.role]}>
                {p.name}
              </CommandItem>)}
          </CommandGroup>}
        {emptyState}
      </CommandList>;
    return <Command label="Search the workspace" width="450px">
        <CommandInput placeholder="Search across the workspace…" />
        <Tabs value={tab} onValueChange={setTab}>
          <div style={{
          padding: '2px 6px 0'
        }}>
            <TabsList fullWidth aria-label="Result type">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="actions">Actions</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
              <TabsTrigger value="people">People</TabsTrigger>
            </TabsList>
          </div>
          {['all', 'actions', 'files', 'people'].map(t => <TabsContent key={t} value={t}>
              {tab === t && list}
            </TabsContent>)}
        </Tabs>
      </Command>;
  }
}`,...U.parameters?.docs?.source},description:{story:`Figma demo "With tabs": tabs under the search narrow the list to one kind of result.`,...U.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [current, setCurrent] = useState('ACME Inc.');
    return <Command label="Workspaces" width="450px">
        <CommandInput placeholder="Find workspace…" />
        <CommandList maxHeight="480px">
          <CommandGroup heading="Workspaces">
            {workspaces.map(w => <CommandItem key={w.name} icon={<Avatar size="sm" shape="square" initials={w.name[0]} />} description={\`\${w.role} · \${w.members} members\`} checked={current === w.name} disabled={w.blocked} shortcut={w.blocked ? 'Blocked' : undefined} onSelect={() => setCurrent(w.name)}>
                {w.name}
              </CommandItem>)}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Manage">
            <CommandItem icon={<RiAddLine />}>New workspace</CommandItem>
            <CommandItem icon={<RiStackLine />}>Browse workspaces</CommandItem>
            <CommandItem icon={<RiLogoutBoxRLine />}>Leave workspace</CommandItem>
          </CommandGroup>
          {emptyState}
        </CommandList>
      </Command>;
  }
}`,...G.parameters?.docs?.source},description:{story:`Figma demo "Workspace switcher": two-line items with a picture, a check on the current one and a blocked one.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Command label="Commands" defaultSearch="xyz">
      <CommandInput placeholder="Placeholder" />
      <CommandList>
        {suggestions}
        <CommandEmpty>
          <Empty titleAs="p" icon={<RiSearchLine />} title="No results found." description="You haven't created any projects yet. Get started by creating your first project." />
        </CommandEmpty>
      </CommandList>
    </Command>
}`,...K.parameters?.docs?.source},description:{story:`Figma Command Variant=Empty: nothing matches the search.`,...K.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [page, setPage] = useState<'root' | 'theme'>('root');
    const [search, setSearch] = useState('');
    const [theme, setTheme] = useState('System');
    const go = (next: 'root' | 'theme') => {
      setPage(next);
      setSearch('');
    };
    return <Command label={page === 'root' ? 'Commands' : 'Themes'} width="450px" search={search} onSearchChange={setSearch}>
        <CommandInput placeholder={page === 'root' ? 'Type a command or search…' : 'Pick a theme…'} onKeyDown={event => {
        if (event.key === 'Backspace' && search === '' && page !== 'root') go('root');
      }} />
        <CommandList>
          {page === 'root' ? <>
              <CommandGroup heading="Navigate">
                <CommandItem icon={<RiDashboardLine />}>Dashboard</CommandItem>
                <CommandItem icon={<RiInboxLine />}>Inbox</CommandItem>
                <CommandItem icon={<RiFolderLine />}>Projects</CommandItem>
                <CommandItem icon={<RiTeamLine />}>Members</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Preferences">
                <CommandItem icon={<RiPaletteLine />} onSelect={() => go('theme')}>
                  Change theme…
                </CommandItem>
                <CommandItem icon={<RiTranslate2 />}>Change language</CommandItem>
                <CommandItem icon={<RiNotification3Line />}>Notification settings</CommandItem>
              </CommandGroup>
            </> : <>
              <CommandItem icon={<RiArrowLeftLine />} value="Back" onSelect={() => go('root')}>
                Back
              </CommandItem>
              {themes.map(([name, icon]) => <CommandItem key={name} icon={icon} checked={theme === name} onSelect={() => setTheme(name)}>
                  {name}
                </CommandItem>)}
            </>}
          {emptyState}
        </CommandList>
      </Command>;
  }
}`,...J.parameters?.docs?.source},description:{story:`Figma demo "Nested pages": "Change theme…" opens a page of themes; Back (or Backspace in an empty field) returns.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    useEffect(() => {
      const key = (event: KeyboardEvent) => {
        const typing = event.target instanceof HTMLElement && event.target.closest('input, textarea, [contenteditable]');
        if (event.key === 'k' && (event.metaKey || event.ctrlKey) || event.key === '/' && !typing) {
          event.preventDefault();
          setOpen(true);
        }
      };
      document.addEventListener('keydown', key);
      return () => document.removeEventListener('keydown', key);
    }, []);
    const run = (what: string) => () => {
      console.info(\`Ran: \${what}\`);
      setOpen(false);
    };
    return <>
        <Button variant="outline" leadingIcon={<RiSearchLine />} onClick={() => setOpen(true)} aria-keyshortcuts="/ Control+K Meta+K">
          Search workspace <Kbd>/</Kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen} label="Search workspace">
          <CommandInput />
          <CommandList>
            <CommandGroup heading="Pages">
              <CommandItem icon={<RiDashboardLine />} onSelect={run('Overview')}>
                Overview
              </CommandItem>
              <CommandItem icon={<RiBarChartLine />} onSelect={run('Analytics')}>
                Analytics
              </CommandItem>
              <CommandItem icon={<RiBankCardLine />} onSelect={run('Billing')}>
                Billing
              </CommandItem>
              <CommandItem icon={<RiTeamLine />} onSelect={run('Team')}>
                Team
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem icon={<RiUserAddLine />} onSelect={run('Invite a member')}>
                Invite a member
              </CommandItem>
              <CommandItem icon={<RiFolderAddLine />} onSelect={run('Create project')}>
                Create project
              </CommandItem>
              <CommandItem icon={<RiEqualizerLine />} onSelect={run('Open settings')}>
                Open settings
              </CommandItem>
            </CommandGroup>
            {emptyState}
          </CommandList>
        </CommandDialog>
      </>;
  }
}`,...Y.parameters?.docs?.source},description:{story:`Figma demo "Dialog": a button (or / and ⌘K) opens the palette in a modal window; running an item closes it.`,...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: function Render() {
    const [person, setPerson] = useState('Adam Miller');
    const [open, setOpen] = useState(false);
    return <div style={{
      minHeight: 360,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
        <Popover open={open} onOpenChange={setOpen} width="240px" aria-label="Assignee" trigger={<Button variant="outline" leadingIcon={<Avatar size="xs" initials={person[0]} />} trailingIcon={<RiArrowDownSLine />}>
              {person}
            </Button>}>
          <Command label="People" plain>
            <CommandInput placeholder="Search people…" />
            <CommandList>
              {everyone.map(name => <CommandItem key={name} icon={<Avatar size="xs" initials={name[0]} />} checked={person === name} onSelect={() => {
              setPerson(name);
              setOpen(false);
            }}>
                  {name}
                </CommandItem>)}
              <CommandEmpty>
                <p style={{
                margin: 0,
                padding: '24px 8px',
                textAlign: 'center',
                color: 'var(--ds-muted-foreground)'
              }}>No one by that name.</p>
              </CommandEmpty>
            </CommandList>
          </Command>
        </Popover>
      </div>;
  }
}`,...Z.parameters?.docs?.source},description:{story:`Figma demo "In a popover": a person picker; the Command fills the Popover without its own surface.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
          <Command label={\`Commands (\${scheme})\`} width="100%">
            <CommandInput placeholder="Placeholder" />
            <CommandList>{suggestions}</CommandList>
          </Command>
        </div>)}
    </div>
}`,...Q.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...Q.parameters?.docs?.description}}}})))()}init_Command_stories();export{B as Default,Y as Dialog,K as EmptyResults,Z as InAPopover,V as ItemStates,J as NestedPages,z as Playground,Q as Themes,U as WithTabs,G as WorkspaceSwitcher,$ as __namedExportsOrder,I as default};