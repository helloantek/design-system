import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BHjVqdnj.js";import{Ct as n,Zt as r}from"./react-DoTdZFUN.js";import{n as i,r as a,t as o}from"./FileIcon-Y8c7HVmd.js";import{n as s,r as c,t as l}from"./Attachment-BeC-9cjH.js";import{n as u,t as d}from"./Button-CAZ0LyPn.js";var f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),c(),u(),a(),f=t(),p={title:`Components/File Icon`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **File Icons** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=1759-163672)): a file's type as a small illustration. `variant` (`archive` · `file` · `document` · `spreadsheet` · `presentation` · `pdf` · `video` · `music` · `image`), `size` (default 24 px) and `title` (without it the icon is decorative). `fileIconFor(name)` picks the variant for a file name; Attachment uses it when it has no `icon`. The outline follows the control-border token; the fills are Figma's illustration colours in both schemes."}}}},m=[`archive`,`file`,`document`,`spreadsheet`,`presentation`,`pdf`,`video`,`music`,`image`],h={args:{variant:`pdf`,size:24},argTypes:{variant:{name:`Variant`,control:`select`,options:m},size:{name:`Size`,control:`inline-radio`,options:[16,20,24,32,40,48,64],description:`Pixels; 16–40 are the Figma demo sizes`}},render:({variant:e,size:t})=>(0,f.jsx)(o,{variant:e,size:t,title:`${e} file`})},g={render:()=>(0,f.jsx)(s,{direction:`column`,"aria-label":`Files`,style:{width:`min(320px, calc(100vw - 32px))`},children:[`acme-audit.pdf`,`acme-audit.pptx`,`acme-audit.zip`,`acme-audit.xlsx`].map(e=>(0,f.jsx)(l,{style:{width:`100%`},title:e,description:`2.1 MB`,icon:(0,f.jsx)(o,{variant:i(e)}),actions:(0,f.jsx)(d,{variant:`ghost`,size:`xs`,icon:(0,f.jsx)(r,{}),"aria-label":`Download ${e}`})},e))})},_={render:()=>(0,f.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:32},children:m.map(e=>(0,f.jsx)(o,{variant:e,title:e},e))})},v={render:()=>(0,f.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:32},children:[40,32,24,20,16].map(e=>(0,f.jsx)(o,{variant:`archive`,size:e,title:`Archive, ${e} px`},e))})},y={render:()=>(0,f.jsx)(`table`,{style:{borderCollapse:`collapse`,color:`var(--ds-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:13},children:(0,f.jsx)(`tbody`,{children:[`quarterly-report.pdf`,`signups.csv`,`launch.key`,`notes.md`,`site-visit.mov`,`interview.m4a`,`whiteboard.png`,`backup.tar.gz`,`LICENSE`].map(e=>(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{style:{padding:`4px 12px 4px 0`},children:(0,f.jsx)(o,{variant:i(e)})}),(0,f.jsx)(`td`,{style:{padding:`4px 12px 4px 0`,fontFamily:`var(--ds-font-mono)`},children:e}),(0,f.jsx)(`td`,{style:{padding:4,color:`var(--ds-muted-foreground)`},children:i(e)})]},e))})})},b={parameters:{layout:`fullscreen`},render:()=>(0,f.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`},children:[`light`,`dark`].map(e=>(0,f.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{display:`flex`,flexWrap:`wrap`,gap:24,padding:24,background:`var(--ds-background)`},children:m.map(e=>(0,f.jsx)(o,{variant:e,size:32},e))},e))})},x=[`Playground`,`Demo`,`Types`,`Sizes`,`FromAFileName`,`Themes`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pdf',
    size: 24
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: 'select',
      options: VARIANTS
    },
    size: {
      name: 'Size',
      control: 'inline-radio',
      options: [16, 20, 24, 32, 40, 48, 64],
      description: 'Pixels; 16–40 are the Figma demo sizes'
    }
  },
  render: ({
    variant,
    size
  }) => <FileIcon variant={variant} size={size} title={\`\${variant} file\`} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <AttachmentGroup direction="column" aria-label="Files" style={{
    width: 'min(320px, calc(100vw - 32px))'
  }}>
      {['acme-audit.pdf', 'acme-audit.pptx', 'acme-audit.zip', 'acme-audit.xlsx'].map(name => <Attachment key={name} style={{
      width: '100%'
    }} title={name} description="2.1 MB" icon={<FileIcon variant={fileIconFor(name)} />} actions={<Button variant="ghost" size="xs" icon={<RiDownloadLine />} aria-label={\`Download \${name}\`} />} />)}
    </AttachmentGroup>
}`,...g.parameters?.docs?.source},description:{story:`Figma demo "File Icon": files on a request, each with the icon for its type.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 32
  }}>
      {VARIANTS.map(v => <FileIcon key={v} variant={v} title={v} />)}
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Figma demo "Types": every variant.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 32
  }}>
      {[40, 32, 24, 20, 16].map(s => <FileIcon key={s} variant="archive" size={s} title={\`Archive, \${s} px\`} />)}
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Figma demo "Sizes": 40, 32, 24, 20 and 16 px.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <table style={{
    borderCollapse: 'collapse',
    color: 'var(--ds-foreground)',
    fontFamily: 'var(--ds-font-sans)',
    fontSize: 13
  }}>
      <tbody>
        {['quarterly-report.pdf', 'signups.csv', 'launch.key', 'notes.md', 'site-visit.mov', 'interview.m4a', 'whiteboard.png', 'backup.tar.gz', 'LICENSE'].map(name => <tr key={name}>
            <td style={{
          padding: '4px 12px 4px 0'
        }}>
              <FileIcon variant={fileIconFor(name)} />
            </td>
            <td style={{
          padding: '4px 12px 4px 0',
          fontFamily: 'var(--ds-font-mono)'
        }}>{name}</td>
            <td style={{
          padding: 4,
          color: 'var(--ds-muted-foreground)'
        }}>{fileIconFor(name)}</td>
          </tr>)}
      </tbody>
    </table>
}`,...y.parameters?.docs?.source},description:{story:"fileIconFor: the variant for a file name's extension (`file` when it is unknown).",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
      padding: 24,
      background: 'var(--ds-background)'
    }}>
          {VARIANTS.map(v => <FileIcon key={v} variant={v} size={32} />)}
        </div>)}
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Light and Dark: the outline follows control-border; the illustration colours stay.`,...b.parameters?.docs?.description}}}})))()}S();export{g as Demo,y as FromAFileName,h as Playground,v as Sizes,b as Themes,_ as Types,x as __namedExportsOrder,p as default};