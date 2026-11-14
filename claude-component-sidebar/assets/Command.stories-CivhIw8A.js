import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-B4iNn6FU.js";import{n as r,t as i}from"./Button-BGuFphYk.js";import{$ as ee,B as a,D as o,F as s,K as c,M as l,N as u,O as d,Y as te,_t as ne,b as re,bt as ie,c as f,d as ae,dt as oe,et as se,gt as ce,ht as le,i as ue,j as de,lt as p,mt as m,q as fe,s as h,st as g,t as pe,u as _,x as v,yt as me,z as he}from"./react-CxIXQsWg.js";import{n as y,t as b}from"./Avatar-CcHIj57w.js";import{n as ge,t as x}from"./Empty-Ci1q9jZf.js";import{r as _e,t as ve}from"./Kbd-Cp6z2fa9.js";import{i as ye,t as be}from"./Popover-B0jbTQWE.js";import{a as xe,i as S,n as Se,r as Ce,t as we}from"./Tabs-DKpQMsIT.js";import{a as C,c as w,i as T,l as E,n as D,o as O,r as k,s as A,t as j}from"./Command-Cnis4HHS.js";var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{M=n(),se(),y(),r(),ge(),_e(),ye(),xe(),E(),N=t(),P={title:`Components/Command`,parameters:{layout:`centered`,docs:{description:{component:"Implements the Sort UI 2.0 **Command**, **Command Item**, **Command Group Heading** and **Command Separator** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=208-2)): a search field over a filtered list of commands. `CommandInput` keeps focus while Arrow Up / Down (Home / End) move the selected item and Enter runs it (`onSelect`); typing filters the items by their text, `value` and `keywords`, hiding empty groups and separators, and `CommandEmpty` shows when nothing matches. Items take an `icon`, a `description`, a `shortcut` (or any trailing note), `checked` and `disabled`. `CommandDialog` opens it as a modal palette; `plain` puts it inside a Popover."}}}},F=e=>()=>console.info(`Ran: ${e}`),I=(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(T,{heading:`Suggestions`,children:[(0,N.jsx)(O,{icon:(0,N.jsx)(d,{}),onSelect:F(`Calendar`),children:`Calendar`}),(0,N.jsx)(O,{icon:(0,N.jsx)(ce,{}),onSelect:F(`Search Emoji`),children:`Search Emoji`}),(0,N.jsx)(O,{icon:(0,N.jsx)(m,{}),disabled:!0,children:`Calculator`})]}),(0,N.jsx)(w,{}),(0,N.jsxs)(T,{heading:`Settings`,children:[(0,N.jsx)(O,{icon:(0,N.jsx)(s,{}),shortcut:`P`,onSelect:F(`Profile`),children:`Profile`}),(0,N.jsx)(O,{icon:(0,N.jsx)(h,{}),shortcut:`B`,keywords:[`invoices`,`plan`],onSelect:F(`Billing`),children:`Billing`}),(0,N.jsx)(O,{icon:(0,N.jsx)(v,{}),shortcut:`/`,keywords:[`preferences`],onSelect:F(`Settings`),children:`Settings`})]})]}),L=(0,N.jsx)(k,{children:(0,N.jsx)(x,{titleAs:`p`,icon:(0,N.jsx)(p,{}),title:`No results found.`,description:`Try another word, or check the spelling.`})}),R={args:{placeholder:`Placeholder`,search:``,width:`450px`},render:e=>(0,N.jsxs)(j,{label:`Commands`,defaultSearch:e.search,width:e.width,children:[(0,N.jsx)(C,{placeholder:e.placeholder}),(0,N.jsxs)(A,{children:[I,L]})]},e.search)},z={render:()=>(0,N.jsxs)(j,{label:`Commands`,width:`450px`,children:[(0,N.jsx)(C,{placeholder:`Placeholder`}),(0,N.jsxs)(A,{children:[I,L]})]})},B={render:()=>(0,N.jsxs)(j,{label:`Item states`,children:[(0,N.jsx)(C,{placeholder:`Filter`}),(0,N.jsxs)(A,{children:[(0,N.jsx)(O,{icon:(0,N.jsx)(u,{}),children:`Selected (the first item)`}),(0,N.jsx)(O,{icon:(0,N.jsx)(u,{}),children:`Default`}),(0,N.jsx)(O,{icon:(0,N.jsx)(u,{}),disabled:!0,children:`Disabled`}),(0,N.jsx)(O,{icon:(0,N.jsx)(u,{}),shortcut:`⌘K`,children:`With a shortcut`}),(0,N.jsx)(O,{icon:(0,N.jsx)(u,{}),checked:!0,children:`Checked`}),(0,N.jsx)(O,{children:`Without a leading icon`})]})]})},V=[{name:`Shiryoku`,role:`Owner`},{name:`Alex Derek`,role:`Designer`},{name:`Mira Bloom`,role:`Designer`}],H={render:function(){let[e,t]=(0,M.useState)(`all`),n=t=>e===`all`||e===t,r=(0,N.jsxs)(A,{maxHeight:`480px`,children:[n(`actions`)&&(0,N.jsxs)(T,{heading:`Actions`,children:[(0,N.jsx)(O,{icon:(0,N.jsx)(g,{}),children:`Create new task`}),(0,N.jsx)(O,{icon:(0,N.jsx)(ue,{}),children:`Duplicate page`}),(0,N.jsx)(O,{icon:(0,N.jsx)(le,{}),children:`Export as CSV`})]}),e===`all`&&(0,N.jsx)(w,{}),n(`files`)&&(0,N.jsxs)(T,{heading:`Files`,children:[(0,N.jsx)(O,{icon:(0,N.jsx)(u,{}),children:`src/app/page.tsx`}),(0,N.jsx)(O,{icon:(0,N.jsx)(u,{}),children:`package.json`}),(0,N.jsx)(O,{icon:(0,N.jsx)(u,{}),children:`next.config.js`})]}),e===`all`&&(0,N.jsx)(w,{}),n(`people`)&&(0,N.jsx)(T,{heading:`People`,children:V.map(e=>(0,N.jsx)(O,{icon:(0,N.jsx)(b,{size:`xs`,initials:e.name[0]}),shortcut:e.role,keywords:[e.role],children:e.name},e.name))}),L]});return(0,N.jsxs)(j,{label:`Search the workspace`,width:`450px`,children:[(0,N.jsx)(C,{placeholder:`Search across the workspace…`}),(0,N.jsxs)(we,{value:e,onValueChange:t,children:[(0,N.jsx)(`div`,{style:{padding:`2px 6px 0`},children:(0,N.jsxs)(Ce,{fullWidth:!0,"aria-label":`Result type`,children:[(0,N.jsx)(S,{value:`all`,children:`All`}),(0,N.jsx)(S,{value:`actions`,children:`Actions`}),(0,N.jsx)(S,{value:`files`,children:`Files`}),(0,N.jsx)(S,{value:`people`,children:`People`})]})}),[`all`,`actions`,`files`,`people`].map(t=>(0,N.jsx)(Se,{value:t,children:e===t&&r},t))]})]})}},U=[{name:`ACME Inc.`,role:`Owner`,members:24},{name:`Lumen Studio`,role:`Admin`,members:8},{name:`Northwind Labs`,role:`Member`,members:142},{name:`Harbor Bank`,role:`Member`,members:67},{name:`Paper Kite`,role:`Member`,members:6},{name:`Juniper Health`,role:`Guest`,members:12,blocked:!0}],W={render:function(){let[e,t]=(0,M.useState)(`ACME Inc.`);return(0,N.jsxs)(j,{label:`Workspaces`,width:`450px`,children:[(0,N.jsx)(C,{placeholder:`Find workspace…`}),(0,N.jsxs)(A,{maxHeight:`480px`,children:[(0,N.jsx)(T,{heading:`Workspaces`,children:U.map(n=>(0,N.jsx)(O,{icon:(0,N.jsx)(b,{size:`sm`,shape:`square`,initials:n.name[0]}),description:`${n.role} · ${n.members} members`,checked:e===n.name,disabled:n.blocked,shortcut:n.blocked?`Blocked`:void 0,onSelect:()=>t(n.name),children:n.name},n.name))}),(0,N.jsx)(w,{}),(0,N.jsxs)(T,{heading:`Manage`,children:[(0,N.jsx)(O,{icon:(0,N.jsx)(g,{}),children:`New workspace`}),(0,N.jsx)(O,{icon:(0,N.jsx)(ne,{}),children:`Browse workspaces`}),(0,N.jsx)(O,{icon:(0,N.jsx)(oe,{}),children:`Leave workspace`})]}),L]})]})}},G={render:()=>(0,N.jsxs)(j,{label:`Commands`,defaultSearch:`xyz`,children:[(0,N.jsx)(C,{placeholder:`Placeholder`}),(0,N.jsxs)(A,{children:[I,(0,N.jsx)(k,{children:(0,N.jsx)(x,{titleAs:`p`,icon:(0,N.jsx)(p,{}),title:`No results found.`,description:`You haven't created any projects yet. Get started by creating your first project.`})})]})]})},K=[[`Light`,(0,N.jsx)(o,{},`i`)],[`Dark`,(0,N.jsx)(pe,{},`i`)],[`System`,(0,N.jsx)(me,{},`i`)],[`High contrast`,(0,N.jsx)(ae,{},`i`)]],q={render:function(){let[e,t]=(0,M.useState)(`root`),[n,r]=(0,M.useState)(``),[i,o]=(0,M.useState)(`System`),s=e=>{t(e),r(``)};return(0,N.jsxs)(j,{label:e===`root`?`Commands`:`Themes`,width:`450px`,search:n,onSearchChange:r,children:[(0,N.jsx)(C,{placeholder:e===`root`?`Type a command or search…`:`Pick a theme…`,onKeyDown:t=>{t.key===`Backspace`&&n===``&&e!==`root`&&s(`root`)}}),(0,N.jsxs)(A,{children:[e===`root`?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(T,{heading:`Navigate`,children:[(0,N.jsx)(O,{icon:(0,N.jsx)(f,{}),children:`Dashboard`}),(0,N.jsx)(O,{icon:(0,N.jsx)(te,{}),children:`Inbox`}),(0,N.jsx)(O,{icon:(0,N.jsx)(ee,{}),children:`Projects`}),(0,N.jsx)(O,{icon:(0,N.jsx)(a,{}),children:`Members`})]}),(0,N.jsx)(w,{}),(0,N.jsxs)(T,{heading:`Preferences`,children:[(0,N.jsx)(O,{icon:(0,N.jsx)(re,{}),onSelect:()=>s(`theme`),children:`Change theme…`}),(0,N.jsx)(O,{icon:(0,N.jsx)(de,{}),children:`Change language`}),(0,N.jsx)(O,{icon:(0,N.jsx)(ie,{}),children:`Notification settings`})]})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(O,{icon:(0,N.jsx)(_,{}),value:`Back`,onSelect:()=>s(`root`),children:`Back`}),K.map(([e,t])=>(0,N.jsx)(O,{icon:t,checked:i===e,onSelect:()=>o(e),children:e},e))]}),L]})]})}},J={render:function(){let[e,t]=(0,M.useState)(!1);(0,M.useEffect)(()=>{let e=e=>{let n=e.target instanceof HTMLElement&&e.target.closest(`input, textarea, [contenteditable]`);(e.key===`k`&&(e.metaKey||e.ctrlKey)||e.key===`/`&&!n)&&(e.preventDefault(),t(!0))};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[]);let n=e=>()=>{console.info(`Ran: ${e}`),t(!1)};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(i,{variant:`outline`,leadingIcon:(0,N.jsx)(p,{}),onClick:()=>t(!0),"aria-keyshortcuts":`/ Control+K Meta+K`,children:[`Search workspace `,(0,N.jsx)(ve,{children:`/`})]}),(0,N.jsxs)(D,{open:e,onOpenChange:t,label:`Search workspace`,children:[(0,N.jsx)(C,{}),(0,N.jsxs)(A,{children:[(0,N.jsxs)(T,{heading:`Pages`,children:[(0,N.jsx)(O,{icon:(0,N.jsx)(f,{}),onSelect:n(`Overview`),children:`Overview`}),(0,N.jsx)(O,{icon:(0,N.jsx)(c,{}),onSelect:n(`Analytics`),children:`Analytics`}),(0,N.jsx)(O,{icon:(0,N.jsx)(h,{}),onSelect:n(`Billing`),children:`Billing`}),(0,N.jsx)(O,{icon:(0,N.jsx)(a,{}),onSelect:n(`Team`),children:`Team`})]}),(0,N.jsx)(w,{}),(0,N.jsxs)(T,{heading:`Actions`,children:[(0,N.jsx)(O,{icon:(0,N.jsx)(l,{}),onSelect:n(`Invite a member`),children:`Invite a member`}),(0,N.jsx)(O,{icon:(0,N.jsx)(he,{}),onSelect:n(`Create project`),children:`Create project`}),(0,N.jsx)(O,{icon:(0,N.jsx)(v,{}),onSelect:n(`Open settings`),children:`Open settings`})]}),L]})]})]})}},Y=[`Adam Miller`,`Alex Derek`,`Mira Bloom`,`Priya Raman`,`Jonas Lindqvist`,`Tomás Herrera`],X={parameters:{layout:`padded`},render:function(){let[e,t]=(0,M.useState)(`Adam Miller`),[n,r]=(0,M.useState)(!1);return(0,N.jsx)(`div`,{style:{minHeight:360,display:`flex`,justifyContent:`center`,alignItems:`flex-start`},children:(0,N.jsx)(be,{open:n,onOpenChange:r,width:`240px`,"aria-label":`Assignee`,trigger:(0,N.jsx)(i,{variant:`outline`,leadingIcon:(0,N.jsx)(b,{size:`xs`,initials:e[0]}),trailingIcon:(0,N.jsx)(fe,{}),children:e}),children:(0,N.jsxs)(j,{label:`People`,plain:!0,children:[(0,N.jsx)(C,{placeholder:`Search people…`}),(0,N.jsxs)(A,{children:[Y.map(n=>(0,N.jsx)(O,{icon:(0,N.jsx)(b,{size:`xs`,initials:n[0]}),checked:e===n,onSelect:()=>{t(n),r(!1)},children:n},n)),(0,N.jsx)(k,{children:(0,N.jsx)(`p`,{style:{margin:0,padding:`24px 8px`,textAlign:`center`,color:`var(--ds-muted-foreground)`},children:`No one by that name.`})})]})]})})})}},Z={parameters:{layout:`fullscreen`},render:()=>(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,N.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24},children:(0,N.jsxs)(j,{label:`Commands (${e})`,width:`100%`,children:[(0,N.jsx)(C,{placeholder:`Placeholder`}),(0,N.jsx)(A,{children:I})]})},e))})},Q=[`Playground`,`Default`,`ItemStates`,`WithTabs`,`WorkspaceSwitcher`,`EmptyResults`,`NestedPages`,`Dialog`,`InAPopover`,`Themes`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Command label="Commands" width="450px">
      <CommandInput placeholder="Placeholder" />
      <CommandList>
        {suggestions}
        {emptyState}
      </CommandList>
    </Command>
}`,...z.parameters?.docs?.source},description:{story:`Figma demo "Command": suggestions (one disabled) and settings with shortcuts.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`Figma Command Item State=Default / Selected / Disabled, with the leading slot, a shortcut and Checked.`,...B.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`Figma demo "With tabs": tabs under the search narrow the list to one kind of result.`,...H.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`Figma demo "Workspace switcher": two-line items with a picture, a check on the current one and a blocked one.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Command label="Commands" defaultSearch="xyz">
      <CommandInput placeholder="Placeholder" />
      <CommandList>
        {suggestions}
        <CommandEmpty>
          <Empty titleAs="p" icon={<RiSearchLine />} title="No results found." description="You haven't created any projects yet. Get started by creating your first project." />
        </CommandEmpty>
      </CommandList>
    </Command>
}`,...G.parameters?.docs?.source},description:{story:`Figma Command Variant=Empty: nothing matches the search.`,...G.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Figma demo "Nested pages": "Change theme…" opens a page of themes; Back (or Backspace in an empty field) returns.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Figma demo "Dialog": a button (or / and ⌘K) opens the palette in a modal window; running an item closes it.`,...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Figma demo "In a popover": a person picker; the Command fills the Popover without its own surface.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...Z.parameters?.docs?.description}}}})))()}$();export{z as Default,J as Dialog,G as EmptyResults,X as InAPopover,B as ItemStates,q as NestedPages,R as Playground,Z as Themes,H as WithTabs,W as WorkspaceSwitcher,Q as __namedExportsOrder,P as default};