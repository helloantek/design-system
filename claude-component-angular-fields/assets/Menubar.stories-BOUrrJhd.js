import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-DmGxFmVQ.js";import{Ct as r,St as i,X as a,Zt as o}from"./react-DLZv9Y1M.js";import{c as s,d as c,f as l,h as u,l as d,n as f,o as p}from"./DropdownMenu-BHGu138y.js";import{n as m,r as h,t as g}from"./Menubar-DCGFqvOr.js";function ViewMenu(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(!0);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f,{type:`menubar`,checked:e,onCheckedChange:t,children:`Always Show Bookmarks Bar`}),(0,v.jsx)(f,{type:`menubar`,checked:n,onCheckedChange:r,children:`Always Show Full URLs`}),(0,v.jsx)(c,{}),(0,v.jsx)(p,{inset:!0,shortcut:`⌘R`,children:`Reload`}),(0,v.jsx)(p,{inset:!0,shortcut:`⇧⌘R`,disabled:!0,children:`Force Reload`})]})}function ProfilesMenu(){let[e,t]=(0,_.useState)(`benoit`);return(0,v.jsxs)(s,{label:`Profiles`,value:e,onValueChange:t,children:[(0,v.jsx)(d,{type:`menubar`,value:`andy`,children:`Andy`}),(0,v.jsx)(d,{type:`menubar`,value:`benoit`,children:`Benoit`}),(0,v.jsx)(d,{type:`menubar`,value:`luis`,children:`Luis`})]})}var _,v,y,b,x,S,C,w,T,E,D,O;function init_Menubar_stories(){return(init_Menubar_stories=e((()=>{_=n(),r(),u(),h(),v=t(),y={title:`Components/Menubar`,parameters:{layout:`padded`,docs:{description:{component:'Implements the Sort UI 2.0 **Menubar** and **Menubar Trigger** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=161-1175)): a 32 px bordered bar of 26 px pill triggers (Hover fill-1, Open fill-2), each opening a Dropdown Menu 8 px below it. `MenubarMenu` takes the menu\'s items: DropdownMenuItem (with `shortcut` and `icon`), DropdownMenuCheckboxItem and DropdownMenuRadioItem (with `type="menubar"`: the check on the left), DropdownMenuRadioGroup, DropdownMenuSub and DropdownMenuSeparator. It follows the WAI-ARIA menubar pattern: one Tab stop, Arrow Left / Right between the triggers, Enter / Space / Arrow Down open a menu on its first item; with a menu open, Arrow Left / Right and the pointer switch menus; Escape closes it.'}}},decorators:[e=>(0,v.jsx)(`div`,{style:{minHeight:320},children:e()})]},b=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p,{shortcut:`⌘N`,children:`New Tab`}),(0,v.jsx)(p,{shortcut:`⌘T`,children:`New Window`}),(0,v.jsx)(p,{disabled:!0,children:`New Incognito Window`}),(0,v.jsx)(c,{}),(0,v.jsxs)(l,{label:`Share`,children:[(0,v.jsx)(p,{children:`Email link`}),(0,v.jsx)(p,{children:`Messages`}),(0,v.jsx)(p,{children:`Notes`})]}),(0,v.jsx)(p,{shortcut:`⌘P`,children:`Print…`})]}),x=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p,{shortcut:`⌘Z`,children:`Undo`}),(0,v.jsx)(p,{shortcut:`⇧⌘Z`,children:`Redo`}),(0,v.jsx)(c,{}),(0,v.jsx)(p,{shortcut:`⌘X`,children:`Cut`}),(0,v.jsx)(p,{shortcut:`⌘C`,children:`Copy`}),(0,v.jsx)(p,{shortcut:`⌘V`,children:`Paste`})]}),S={args:{open:!1},render:e=>(0,v.jsxs)(g,{"aria-label":`Browser`,defaultValue:e.open?`file`:void 0,children:[(0,v.jsx)(m,{value:`file`,label:`File`,children:b}),(0,v.jsx)(m,{label:`Edit`,children:x}),(0,v.jsx)(m,{label:`View`,children:(0,v.jsx)(ViewMenu,{})}),(0,v.jsx)(m,{label:`Profiles`,children:(0,v.jsx)(ProfilesMenu,{})})]},String(e.open))},C={render:()=>(0,v.jsxs)(g,{"aria-label":`Browser`,defaultValue:`file`,style:{width:320},children:[(0,v.jsx)(m,{value:`file`,label:`File`,children:b}),(0,v.jsx)(m,{label:`Edit`,children:x}),(0,v.jsx)(m,{label:`View`,children:(0,v.jsx)(ViewMenu,{})}),(0,v.jsx)(m,{label:`Profiles`,children:(0,v.jsx)(ProfilesMenu,{})})]})},w={render:()=>(0,v.jsxs)(g,{"aria-label":`Browser view`,defaultValue:`view`,style:{width:320},children:[(0,v.jsx)(m,{value:`view`,label:`View`,children:(0,v.jsx)(ViewMenu,{})}),(0,v.jsxs)(m,{label:`Format`,children:[(0,v.jsx)(p,{children:`Bold`}),(0,v.jsx)(p,{children:`Italic`}),(0,v.jsx)(p,{children:`Underline`})]})]})},T={render:function Render(){let[e,t]=(0,_.useState)(`system`);return(0,v.jsxs)(g,{"aria-label":`Editor`,defaultValue:`theme`,style:{width:320},children:[(0,v.jsx)(m,{label:`File`,children:b}),(0,v.jsx)(m,{label:`Edit`,children:x}),(0,v.jsx)(m,{value:`theme`,label:`Theme`,children:(0,v.jsxs)(s,{label:`Theme`,value:e,onValueChange:t,children:[(0,v.jsx)(d,{type:`menubar`,value:`light`,children:`Light`}),(0,v.jsx)(d,{type:`menubar`,value:`dark`,children:`Dark`}),(0,v.jsx)(d,{type:`menubar`,value:`system`,children:`System`})]})})]})}},E={render:()=>(0,v.jsxs)(g,{"aria-label":`Editor`,defaultValue:`file`,style:{width:320},children:[(0,v.jsxs)(m,{value:`file`,label:`File`,children:[(0,v.jsx)(p,{icon:(0,v.jsx)(a,{}),shortcut:`⌘N`,children:`New File`}),(0,v.jsx)(p,{icon:(0,v.jsx)(i,{}),children:`Open Folder`}),(0,v.jsx)(c,{}),(0,v.jsx)(p,{icon:(0,v.jsx)(o,{}),shortcut:`⌘S`,children:`Save local copy`})]}),(0,v.jsx)(m,{label:`Edit`,children:x}),(0,v.jsx)(m,{label:`View`,children:(0,v.jsx)(ViewMenu,{})}),(0,v.jsx)(m,{label:`Profiles`,children:(0,v.jsx)(ProfilesMenu,{})})]})},D={parameters:{layout:`fullscreen`},render:()=>(0,v.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,v.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,minHeight:280},children:(0,v.jsxs)(g,{"aria-label":`Editor (${e})`,defaultValue:`file`,children:[(0,v.jsxs)(m,{value:`file`,label:`File`,children:[(0,v.jsx)(p,{icon:(0,v.jsx)(a,{}),shortcut:`⌘N`,children:`New File`}),(0,v.jsx)(p,{icon:(0,v.jsx)(i,{}),children:`Open Folder`})]}),(0,v.jsx)(m,{label:`Edit`,children:x}),(0,v.jsx)(m,{label:`View`,children:(0,v.jsx)(ViewMenu,{})})]})},e))})},O=[`Playground`,`Default`,`Checkbox`,`Radio`,`WithIcons`,`Themes`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: args => <Menubar key={String(args.open)} aria-label="Browser" defaultValue={args.open ? 'file' : undefined}>
      <MenubarMenu value="file" label="File">
        {fileMenu}
      </MenubarMenu>
      <MenubarMenu label="Edit">{editMenu}</MenubarMenu>
      <MenubarMenu label="View">
        <ViewMenu />
      </MenubarMenu>
      <MenubarMenu label="Profiles">
        <ProfilesMenu />
      </MenubarMenu>
    </Menubar>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Menubar aria-label="Browser" defaultValue="file" style={{
    width: 320
  }}>
      <MenubarMenu value="file" label="File">
        {fileMenu}
      </MenubarMenu>
      <MenubarMenu label="Edit">{editMenu}</MenubarMenu>
      <MenubarMenu label="View">
        <ViewMenu />
      </MenubarMenu>
      <MenubarMenu label="Profiles">
        <ProfilesMenu />
      </MenubarMenu>
    </Menubar>
}`,...C.parameters?.docs?.source},description:{story:`Figma demo "Menubar": File is open, with shortcuts, a disabled item and a Share submenu.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Menubar aria-label="Browser view" defaultValue="view" style={{
    width: 320
  }}>
      <MenubarMenu value="view" label="View">
        <ViewMenu />
      </MenubarMenu>
      <MenubarMenu label="Format">
        <DropdownMenuItem>Bold</DropdownMenuItem>
        <DropdownMenuItem>Italic</DropdownMenuItem>
        <DropdownMenuItem>Underline</DropdownMenuItem>
      </MenubarMenu>
    </Menubar>
}`,...w.parameters?.docs?.source},description:{story:`Figma demo "Checkbox": checkbox items, then inset items with shortcuts.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [theme, setTheme] = useState<string | null>('system');
    return <Menubar aria-label="Editor" defaultValue="theme" style={{
      width: 320
    }}>
        <MenubarMenu label="File">{fileMenu}</MenubarMenu>
        <MenubarMenu label="Edit">{editMenu}</MenubarMenu>
        <MenubarMenu value="theme" label="Theme">
          <DropdownMenuRadioGroup label="Theme" value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem type="menubar" value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem type="menubar" value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem type="menubar" value="system">System</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </MenubarMenu>
      </Menubar>;
  }
}`,...T.parameters?.docs?.source},description:{story:`Figma demo "Radio": a radio group picks one option.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Menubar aria-label="Editor" defaultValue="file" style={{
    width: 320
  }}>
      <MenubarMenu value="file" label="File">
        <DropdownMenuItem icon={<RiFileLine />} shortcut="⌘N">
          New File
        </DropdownMenuItem>
        <DropdownMenuItem icon={<RiFolderLine />}>Open Folder</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<RiDownloadLine />} shortcut="⌘S">
          Save local copy
        </DropdownMenuItem>
      </MenubarMenu>
      <MenubarMenu label="Edit">{editMenu}</MenubarMenu>
      <MenubarMenu label="View">
        <ViewMenu />
      </MenubarMenu>
      <MenubarMenu label="Profiles">
        <ProfilesMenu />
      </MenubarMenu>
    </Menubar>
}`,...E.parameters?.docs?.source},description:{story:`Figma demo "With icons": items with a 16 px icon.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
      minHeight: 280
    }}>
          <Menubar aria-label={\`Editor (\${scheme})\`} defaultValue="file">
            <MenubarMenu value="file" label="File">
              <DropdownMenuItem icon={<RiFileLine />} shortcut="⌘N">
                New File
              </DropdownMenuItem>
              <DropdownMenuItem icon={<RiFolderLine />}>Open Folder</DropdownMenuItem>
            </MenubarMenu>
            <MenubarMenu label="Edit">{editMenu}</MenubarMenu>
            <MenubarMenu label="View">
              <ViewMenu />
            </MenubarMenu>
          </Menubar>
        </div>)}
    </div>
}`,...D.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...D.parameters?.docs?.description}}}})))()}init_Menubar_stories();export{w as Checkbox,C as Default,S as Playground,T as Radio,D as Themes,E as WithIcons,O as __namedExportsOrder,y as default};