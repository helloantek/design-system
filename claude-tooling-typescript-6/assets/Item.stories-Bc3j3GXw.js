import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-Dn36BRHu.js";import{n as r,t as i}from"./Badge-Dqs8ARA7.js";import{n as a,t as o}from"./Button-CLmPt_Gx.js";import{n as s,t as c}from"./Avatar-5JHHehwd.js";import{r as l,t as u}from"./Switch-DtoMbN7g.js";import{i as d,t as f}from"./Radio-DPK-SyUy.js";import{a as p,i as m,n as h,r as g,t as _}from"./Item-DSoD1TZS.js";var v,y,b,icon,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function init_Item_stories(){return(init_Item_stories=e((()=>{v=n(),s(),r(),a(),d(),l(),p(),y=t(),b={title:`Components/Item`,parameters:{layout:`centered`,docs:{description:{component:'Implements the Sort UI 2.0 **Item**, **Item Media**, **Item Group** and **Item Separator** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=227-45)): Figma Variant → `variant` (`default` · `outline` · `muted`), Size → `size` (`default` · `sm` · `xs`), the slots → `header`, `media`, `title` / `description` (content), `actions` and `footer`. State=Hover and Focus belong to rows that are one action: a link (`href`), a button (`as="button"`) or a label around a Switch, Radio or Checkbox (`as="label"`). `ItemGroup` is a list, 16 px apart, or `joined` into one block ("Navigation" demo); `ItemSeparator` draws a line between rows.'}}}},icon=e=>(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),x={database:icon((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`}),(0,y.jsx)(`path`,{d:`M3 5v14a9 3 0 0 0 18 0V5`}),(0,y.jsx)(`path`,{d:`M3 12a9 3 0 0 0 18 0`})]})),server:icon((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`}),(0,y.jsx)(`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`}),(0,y.jsx)(`path`,{d:`M6 6h.01M6 18h.01`})]})),cloud:icon((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`path`,{d:`M12 13v8m-4-4 4-4 4 4`}),(0,y.jsx)(`path`,{d:`M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2`})]})),key:icon((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`path`,{d:`m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4m2-2-9.6 9.6`}),(0,y.jsx)(`circle`,{cx:`7.5`,cy:`15.5`,r:`5.5`})]})),file:icon((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`path`,{d:`M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`}),(0,y.jsx)(`path`,{d:`M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8`})]})),image:icon((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`}),(0,y.jsx)(`circle`,{cx:`9`,cy:`9`,r:`2`}),(0,y.jsx)(`path`,{d:`m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21`})]})),package:icon((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`path`,{d:`M11 21.7a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7z`}),(0,y.jsx)(`path`,{d:`M12 22V12M3.3 7 12 12l8.7-5`})]})),users:icon((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`}),(0,y.jsx)(`circle`,{cx:`9`,cy:`7`,r:`4`}),(0,y.jsx)(`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8`})]})),card:icon((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`rect`,{width:`20`,height:`14`,x:`2`,y:`5`,rx:`2`}),(0,y.jsx)(`path`,{d:`M2 10h20`})]})),bell:icon((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`path`,{d:`M10.3 21a1.9 1.9 0 0 0 3.4 0`}),(0,y.jsx)(`path`,{d:`M3.3 15.3A1 1 0 0 0 4 17h16a1 1 0 0 0 .7-1.7C19.4 14 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.4 6-2.7 7.3`})]})),shield:icon((0,y.jsx)(`path`,{d:`M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z`})),rocket:icon((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`path`,{d:`M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z`}),(0,y.jsx)(`path`,{d:`m12 15-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z`}),(0,y.jsx)(`path`,{d:`M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0m1 7v5s3-.6 4-2c1.1-1.6 0-5 0-5`})]})),bug:icon((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`path`,{d:`m8 2 1.9 1.9M14.1 3.9 16 2M9 7.1v-1a3 3 0 1 1 6 0v1`}),(0,y.jsx)(`path`,{d:`M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6m0 0v-9M6.5 9C4.6 8.8 3 7.1 3 5m3 8H2m1 8c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4m-.8 4c2.1.1 3.8 1.9 3.8 4`})]})),mail:icon((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`rect`,{width:`20`,height:`16`,x:`2`,y:`4`,rx:`2`}),(0,y.jsx)(`path`,{d:`m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`})]}))},S=icon((0,y.jsx)(`path`,{d:`m9 18 6-6-6-6`})),C={width:448,maxWidth:`100%`},w={args:{variant:`outline`,size:`default`,media:!0,actions:!0,header:!1,footer:!1},argTypes:{variant:{control:`inline-radio`,options:[`default`,`outline`,`muted`]},size:{control:`inline-radio`,options:[`default`,`sm`,`xs`]}},render:({variant:e,size:t,media:n,actions:r,header:i,footer:a})=>(0,y.jsx)(`div`,{style:C,children:(0,y.jsx)(_,{variant:e,size:t,header:i?`Header`:void 0,footer:a?`Footer`:void 0,media:n?(0,y.jsx)(g,{children:x.database}):void 0,title:`Placeholder label`,description:`Lorem Ipsum is simply dummy text.`,actions:r?(0,y.jsx)(o,{variant:`outline`,size:`sm`,children:`Button`}):void 0})})},T={render:()=>(0,y.jsxs)(h,{"aria-label":`Backups`,style:C,children:[(0,y.jsx)(_,{variant:`outline`,header:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`span`,{children:`Backup`}),(0,y.jsx)(`span`,{children:`2 hours ago`})]}),media:(0,y.jsx)(g,{variant:`image`,children:x.database}),title:`Production database`,description:`Snapshot of 14 tables, 2.4 GB, stored in Frankfurt.`,actions:(0,y.jsx)(o,{variant:`outline`,size:`sm`,children:`Restore`})}),(0,y.jsx)(_,{variant:`outline`,title:`Weekly usage report`,description:`Sent every Monday to the billing address on file.`,actions:(0,y.jsx)(o,{variant:`outline`,size:`sm`,children:`Manage`})}),(0,y.jsx)(_,{variant:`muted`,href:`#audit`,title:`Open the audit log`,actions:S})]})},E={render:()=>(0,y.jsx)(h,{"aria-label":`Infrastructure`,style:C,children:[[`default`,x.server,`Frankfurt region`,`Three nodes, all healthy since 4 March.`,`Details`],[`outline`,x.cloud,`Nightly backups`,`Runs at 02:00 UTC and keeps 30 days.`,`Configure`],[`muted`,x.key,`Deploy keys`,`Two keys have access to this project.`,`Rotate`]].map(([e,t,n,r,i])=>(0,y.jsx)(_,{variant:e,media:(0,y.jsx)(g,{children:t}),title:n,description:r,actions:(0,y.jsx)(o,{variant:`outline`,size:`sm`,children:i})},e))})},D={render:()=>(0,y.jsx)(h,{"aria-label":`Sizes`,style:C,children:[[`default`,`Default row`],[`sm`,`Small row`],[`xs`,`Extra small row`]].map(([e,t])=>(0,y.jsx)(_,{variant:`outline`,size:e,title:t,description:`Invoices, receipts and usage exports live here.`,actions:(0,y.jsx)(o,{variant:`outline`,size:`sm`,children:`Open`})},e))})},O=[{name:`invoice-2026-03.pdf`,meta:`Billing · 184 KB`,count:`2.4k`,glyph:x.file},{name:`onboarding-hero.png`,meta:`Marketing · 1.2 MB`,count:`860`,glyph:x.image},{name:`sdk-4.3.0.tgz`,meta:`Releases · 640 KB`,count:`12k`,glyph:x.package}],k={render:()=>(0,y.jsx)(h,{"aria-label":`Downloads`,style:C,children:O.flatMap((e,t)=>[...t>0?[(0,y.jsx)(m,{},`sep-${e.name}`)]:[],(0,y.jsx)(_,{flush:!0,media:(0,y.jsx)(g,{children:e.glyph}),title:e.name,description:e.meta,actions:(0,y.jsxs)(`span`,{style:{display:`grid`,justifyItems:`end`,gap:2},children:[(0,y.jsx)(`span`,{style:{fontWeight:500},children:e.count}),(0,y.jsx)(`span`,{style:{fontSize:12,lineHeight:`16px`,color:`var(--ds-muted-foreground)`},children:`downloads`})]})},e.name)])})},A={render:()=>(0,y.jsx)(h,{"aria-label":`People`,style:C,children:[[`MO`,`Mira Okafor`,`Owner since 2024`,`Owner`],[`JL`,`Jonas Lindqvist`,`Last active 2 hours ago`,`Member`],[`PR`,`Priya Raman`,`Last active yesterday`,`Member`]].map(([e,t,n,r])=>(0,y.jsx)(_,{variant:`outline`,media:(0,y.jsx)(c,{size:`lg`,initials:e,name:t}),title:t,description:n,actions:r===`Owner`?(0,y.jsx)(i,{color:`fuchsia`,children:r}):(0,y.jsx)(i,{children:r})},t))})},j={render:()=>(0,y.jsx)(`nav`,{"aria-label":`Settings`,style:C,children:(0,y.jsx)(h,{variant:`joined`,children:[[x.users,`Members and roles`],[x.card,`Billing`],[x.bell,`Notifications`],[x.shield,`Security`]].map(([e,t])=>(0,y.jsx)(_,{variant:`muted`,size:`sm`,href:`#${t.toLowerCase().replace(/ /g,`-`)}`,media:(0,y.jsx)(g,{children:e}),title:t,actions:S},t))})})},M={render:function Render(){let[e,t]=(0,v.useState)({deploy:!0,errors:!1,digest:!1}),n=[[`deploy`,x.rocket,`Deploy notifications`,`Tell me when a build reaches production.`],[`errors`,x.bug,`Error alerts`,`Page me when the error rate passes 1%.`],[`digest`,x.mail,`Weekly digest`,`One email every Monday with the numbers.`]];return(0,y.jsx)(h,{"aria-label":`Notifications`,style:C,children:n.map(([n,r,i,a])=>(0,y.jsx)(_,{as:`label`,variant:`outline`,media:(0,y.jsx)(g,{children:r}),title:(0,y.jsx)(`span`,{id:`notify-${n}`,children:i}),description:a,actions:(0,y.jsx)(u,{checked:e[n],onCheckedChange:r=>t({...e,[n]:r}),"aria-labelledby":`notify-${n}`})},n))})}},N={render:function Render(){let[e,t]=(0,v.useState)(`pro`);return(0,y.jsx)(`div`,{role:`radiogroup`,"aria-label":`Plan`,style:C,children:(0,y.jsx)(h,{children:[[`hobby`,`Hobby`,`One project, 100 GB bandwidth, community support.`],[`pro`,`Pro`,`Ten projects, 1 TB bandwidth, email support.`],[`enterprise`,`Enterprise`,`Unlimited projects, SSO and a support channel.`]].map(([n,r,i])=>(0,y.jsx)(_,{as:`label`,variant:`outline`,media:(0,y.jsx)(f,{name:`plan`,value:n,checked:e===n,onChange:()=>t(n),"aria-labelledby":`plan-${n}`}),title:(0,y.jsx)(`span`,{id:`plan-${n}`,children:r}),description:i},n))})})}},P={render:()=>(0,y.jsx)(h,{"aria-label":`Links`,style:C,children:[`default`,`outline`,`muted`].map(e=>(0,y.jsx)(_,{variant:e,href:`#${e}`,media:(0,y.jsx)(g,{children:x.file}),title:`${e[0].toUpperCase()}${e.slice(1)} link row`,description:`Hover it, or Tab to it.`,actions:S},e))})},F={parameters:{layout:`fullscreen`},render:()=>(0,y.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,y.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24},children:(0,y.jsx)(h,{"aria-label":`Items (${e})`,children:[`default`,`outline`,`muted`].map(t=>(0,y.jsx)(_,{variant:t,media:(0,y.jsx)(g,{variant:`image`,children:x.database}),title:`${t} (${e})`,description:`Snapshot of 14 tables.`,actions:(0,y.jsx)(o,{variant:`outline`,size:`sm`,children:`Open`})},t))})},e))})},I=[`Playground`,`Default`,`Variants`,`Sizes`,`SeparatedList`,`Avatars`,`Navigation`,`WithSwitch`,`WithRadio`,`States`,`Themes`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'default',
    media: true,
    actions: true,
    header: false,
    footer: false
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'outline', 'muted']
    },
    size: {
      control: 'inline-radio',
      options: ['default', 'sm', 'xs']
    }
  },
  render: ({
    variant,
    size,
    media,
    actions,
    header,
    footer
  }) => <div style={box}>
      <Item variant={variant} size={size} header={header ? 'Header' : undefined} footer={footer ? 'Footer' : undefined} media={media ? <ItemMedia>{icons.database}</ItemMedia> : undefined} title="Placeholder label" description="Lorem Ipsum is simply dummy text." actions={actions ? <Button variant="outline" size="sm">
              Button
            </Button> : undefined} />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ItemGroup aria-label="Backups" style={box}>
      <Item variant="outline" header={<>
            <span>Backup</span>
            <span>2 hours ago</span>
          </>} media={<ItemMedia variant="image">{icons.database}</ItemMedia>} title="Production database" description="Snapshot of 14 tables, 2.4 GB, stored in Frankfurt." actions={<Button variant="outline" size="sm">
            Restore
          </Button>} />
      <Item variant="outline" title="Weekly usage report" description="Sent every Monday to the billing address on file." actions={<Button variant="outline" size="sm">
            Manage
          </Button>} />
      <Item variant="muted" href="#audit" title="Open the audit log" actions={chevron} />
    </ItemGroup>
}`,...T.parameters?.docs?.source},description:{story:`Figma demo "Item": a header and an image, a plain row, and a muted link row.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ItemGroup aria-label="Infrastructure" style={box}>
      {([['default', icons.server, 'Frankfurt region', 'Three nodes, all healthy since 4 March.', 'Details'], ['outline', icons.cloud, 'Nightly backups', 'Runs at 02:00 UTC and keeps 30 days.', 'Configure'], ['muted', icons.key, 'Deploy keys', 'Two keys have access to this project.', 'Rotate']] as const).map(([variant, glyph, title, description, action]) => <Item key={variant} variant={variant} media={<ItemMedia>{glyph}</ItemMedia>} title={title} description={description} actions={<Button variant="outline" size="sm">
              {action}
            </Button>} />)}
    </ItemGroup>
}`,...E.parameters?.docs?.source},description:{story:`Figma demo "Variants": Default, Outline and Muted.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <ItemGroup aria-label="Sizes" style={box}>
      {([['default', 'Default row'], ['sm', 'Small row'], ['xs', 'Extra small row']] as const).map(([size, title]) => <Item key={size} variant="outline" size={size} title={title} description="Invoices, receipts and usage exports live here." actions={<Button variant="outline" size="sm">
              Open
            </Button>} />)}
    </ItemGroup>
}`,...D.parameters?.docs?.source},description:{story:`Figma demo "Size": default, sm and xs.`,...D.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <ItemGroup aria-label="Downloads" style={box}>
      {files.flatMap((f, i) => [...(i > 0 ? [<ItemSeparator key={\`sep-\${f.name}\`} />] : []), <Item key={f.name} flush media={<ItemMedia>{f.glyph}</ItemMedia>} title={f.name} description={f.meta} actions={<span style={{
      display: 'grid',
      justifyItems: 'end',
      gap: 2
    }}>
              <span style={{
        fontWeight: 500
      }}>{f.count}</span>
              <span style={{
        fontSize: 12,
        lineHeight: '16px',
        color: 'var(--ds-muted-foreground)'
      }}>downloads</span>
            </span>} />])}
    </ItemGroup>
}`,...k.parameters?.docs?.source},description:{story:`Figma demo "Separated list": flush rows with Item Separators.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <ItemGroup aria-label="People" style={box}>
      {([['MO', 'Mira Okafor', 'Owner since 2024', 'Owner'], ['JL', 'Jonas Lindqvist', 'Last active 2 hours ago', 'Member'], ['PR', 'Priya Raman', 'Last active yesterday', 'Member']] as const).map(([initials, name, description, role]) => <Item key={name} variant="outline" media={<Avatar size="lg" initials={initials} name={name} />} title={name} description={description} actions={role === 'Owner' ? <Badge color="fuchsia">{role}</Badge> : <Badge>{role}</Badge>} />)}
    </ItemGroup>
}`,...A.parameters?.docs?.source},description:{story:`Figma demo "Avatars": Avatar media and a Badge.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <nav aria-label="Settings" style={box}>
      <ItemGroup variant="joined">
        {([[icons.users, 'Members and roles'], [icons.card, 'Billing'], [icons.bell, 'Notifications'], [icons.shield, 'Security']] as const).map(([glyph, title]) => <Item key={title} variant="muted" size="sm" href={\`#\${title.toLowerCase().replace(/ /g, '-')}\`} media={<ItemMedia>{glyph}</ItemMedia>} title={title} actions={chevron} />)}
      </ItemGroup>
    </nav>
}`,...j.parameters?.docs?.source},description:{story:`Figma demo "Navigation": muted sm link rows joined into one block.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [on, setOn] = useState({
      deploy: true,
      errors: false,
      digest: false
    });
    const rows = [['deploy', icons.rocket, 'Deploy notifications', 'Tell me when a build reaches production.'], ['errors', icons.bug, 'Error alerts', 'Page me when the error rate passes 1%.'], ['digest', icons.mail, 'Weekly digest', 'One email every Monday with the numbers.']] as const;
    return <ItemGroup aria-label="Notifications" style={box}>
        {rows.map(([key, glyph, title, description]) => <Item key={key} as="label" variant="outline" media={<ItemMedia>{glyph}</ItemMedia>} title={<span id={\`notify-\${key}\`}>{title}</span>} description={description} actions={<Switch checked={on[key]} onCheckedChange={v => setOn({
        ...on,
        [key]: v
      })} aria-labelledby={\`notify-\${key}\`} />} />)}
      </ItemGroup>;
  }
}`,...M.parameters?.docs?.source},description:{story:`Figma demo "Switch": the whole row is the switch's label.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [plan, setPlan] = useState('pro');
    const plans = [['hobby', 'Hobby', 'One project, 100 GB bandwidth, community support.'], ['pro', 'Pro', 'Ten projects, 1 TB bandwidth, email support.'], ['enterprise', 'Enterprise', 'Unlimited projects, SSO and a support channel.']] as const;
    return <div role="radiogroup" aria-label="Plan" style={box}>
        <ItemGroup>
          {plans.map(([value, title, description]) => <Item key={value} as="label" variant="outline" media={<Radio name="plan" value={value} checked={plan === value} onChange={() => setPlan(value)} aria-labelledby={\`plan-\${value}\`} />} title={<span id={\`plan-\${value}\`}>{title}</span>} description={description} />)}
        </ItemGroup>
      </div>;
  }
}`,...N.parameters?.docs?.source},description:{story:`Figma demo "Radio": plans as labelled radio rows.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <ItemGroup aria-label="Links" style={box}>
      {(['default', 'outline', 'muted'] as const).map(variant => <Item key={variant} variant={variant} href={\`#\${variant}\`} media={<ItemMedia>{icons.file}</ItemMedia>} title={\`\${variant[0].toUpperCase()}\${variant.slice(1)} link row\`} description="Hover it, or Tab to it." actions={chevron} />)}
    </ItemGroup>
}`,...P.parameters?.docs?.source},description:{story:`Figma State=Hover and Focus on link rows, in every variant.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
          <ItemGroup aria-label={\`Items (\${scheme})\`}>
            {(['default', 'outline', 'muted'] as const).map(variant => <Item key={variant} variant={variant} media={<ItemMedia variant="image">{icons.database}</ItemMedia>} title={\`\${variant} (\${scheme})\`} description="Snapshot of 14 tables." actions={<Button variant="outline" size="sm">
                    Open
                  </Button>} />)}
          </ItemGroup>
        </div>)}
    </div>
}`,...F.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...F.parameters?.docs?.description}}}})))()}init_Item_stories();export{A as Avatars,T as Default,j as Navigation,w as Playground,k as SeparatedList,D as Sizes,P as States,F as Themes,E as Variants,N as WithRadio,M as WithSwitch,I as __namedExportsOrder,b as default};