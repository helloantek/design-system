import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-B_4MHl6h.js";import{n,t as r}from"./Button-DQqWUwDM.js";import{d as i,h as a,o,t as s}from"./DropdownMenu-Ds04Ja43.js";import{i as c,t as l}from"./Input-CU9Y4G5D.js";import{n as u,r as d,t as f}from"./ButtonGroup-BnLSWaFH.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),a(),c(),d(),p=t(),m=`https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=302-14707`,h=e=>(0,p.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.875,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),g={plus:h((0,p.jsx)(`path`,{d:`M5 12h14M12 5v14`})),minus:h((0,p.jsx)(`path`,{d:`M5 12h14`})),globe:h((0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,p.jsx)(`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20`})]})),chevronDown:h((0,p.jsx)(`path`,{d:`m6 9 6 6 6-6`})),chevronUp:h((0,p.jsx)(`path`,{d:`m18 15-6-6-6 6`})),search:h((0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,p.jsx)(`path`,{d:`m21 21-4.3-4.3`})]})),arrowRight:h((0,p.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`})),at:h((0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`}),(0,p.jsx)(`path`,{d:`M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8`})]})),branch:h((0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`circle`,{cx:`18`,cy:`6`,r:`3`}),(0,p.jsx)(`circle`,{cx:`6`,cy:`18`,r:`3`}),(0,p.jsx)(`path`,{d:`M6 3v12M18 9a9 9 0 0 1-9 9`})]})),download:h((0,p.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3`})),copy:h((0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`}),(0,p.jsx)(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})),trash:h((0,p.jsx)(`path`,{d:`M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}))},_={title:`Components/Button Group`,parameters:{docs:{description:{component:`Implements the Sort UI 2.0 page **Button Group** ([open in Figma](${m})): **Button Group** (\`orientation\`: \`horizontal\` · \`vertical\`), its Start / Middle / End buttons (any \`Button\`; the group rounds only the outer corners and drops the shared stroke) and **Button Group Text** (\`ButtonGroupText\`). An \`Input\` or a \`Select\` can join a group, and a group of groups spaces them 8 px apart. Name a group with \`aria-label\`.`}}}},v={args:{orientation:`horizontal`,variant:`outline`,count:4,text:!1},argTypes:{orientation:{name:`Orientation`,control:`inline-radio`,options:[`horizontal`,`vertical`]},variant:{name:`Button Variant`,control:`inline-radio`,options:[`outline`,`default`,`secondary`,`ghost`]},count:{name:`Buttons`,control:{type:`range`,min:2,max:6}},text:{name:`Button Group Text first`}},render:({orientation:e,variant:t,count:n,text:i})=>(0,p.jsxs)(f,{orientation:e,"aria-label":`Actions`,children:[i&&(0,p.jsx)(u,{children:`Text`}),Array.from({length:n},(e,n)=>(0,p.jsx)(r,{variant:t,children:`Button`},n))]})},y={fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},b={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:48,alignItems:`flex-start`},children:[(0,p.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,p.jsx)(`span`,{style:y,children:`Horizontal`}),(0,p.jsx)(f,{"aria-label":`Horizontal`,children:[`Button`,`Button`,`Button`,`Button`].map((e,t)=>(0,p.jsx)(r,{variant:`outline`,children:e},t))})]}),(0,p.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,p.jsx)(`span`,{style:y,children:`Vertical`}),(0,p.jsx)(f,{orientation:`vertical`,"aria-label":`Vertical`,style:{width:120},children:[`Button`,`Button`,`Button`,`Button`].map((e,t)=>(0,p.jsx)(r,{variant:`outline`,children:e},t))})]}),(0,p.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,p.jsx)(`span`,{style:y,children:`Button Group Text`}),(0,p.jsxs)(f,{"aria-label":`With text`,children:[(0,p.jsx)(u,{children:`Text`}),(0,p.jsx)(u,{icon:g.globe,children:`Icon`})]})]})]})},x={render:()=>(0,p.jsxs)(f,{"aria-label":`Toolbar`,children:[(0,p.jsx)(r,{variant:`outline`,icon:g.plus,"aria-label":`Add`}),(0,p.jsxs)(f,{"aria-label":`Review`,children:[(0,p.jsx)(r,{variant:`outline`,children:`Preview`}),(0,p.jsx)(r,{variant:`outline`,children:`Share`})]}),(0,p.jsx)(r,{leadingIcon:g.globe,children:`Deploy`})]})},S={render:()=>(0,p.jsx)(`div`,{style:{display:`grid`,gap:16,justifyItems:`center`},children:[`default`,`outline`,`secondary`].map(e=>(0,p.jsxs)(f,{"aria-label":`Approve (${e})`,children:[(0,p.jsx)(r,{variant:e,children:`Approve`}),(0,p.jsx)(r,{variant:e,icon:g.chevronDown,"aria-label":`More approve options`})]},e))})},C={render:()=>(0,p.jsxs)(`div`,{style:{display:`grid`,gap:16,justifyItems:`center`},children:[(0,p.jsxs)(f,{orientation:`vertical`,"aria-label":`Create`,style:{width:160},children:[(0,p.jsx)(r,{variant:`outline`,leadingIcon:g.at,children:`Email invite`}),(0,p.jsx)(r,{variant:`outline`,leadingIcon:g.branch,children:`New branch`}),(0,p.jsx)(r,{variant:`outline`,leadingIcon:g.download,children:`Download CSV`})]}),(0,p.jsxs)(f,{orientation:`vertical`,"aria-label":`Zoom`,children:[(0,p.jsx)(r,{variant:`outline`,icon:g.plus,"aria-label":`Zoom in`}),(0,p.jsx)(r,{variant:`outline`,icon:g.minus,"aria-label":`Zoom out`})]})]})},w={render:()=>(0,p.jsxs)(f,{"aria-label":`Message`,style:{width:360},children:[(0,p.jsx)(r,{variant:`outline`,icon:g.plus,"aria-label":`Attach`}),(0,p.jsx)(f,{"aria-label":`Compose`,style:{flex:1},children:(0,p.jsx)(l,{"aria-label":`Message`,placeholder:`Send a message`})}),(0,p.jsx)(r,{icon:g.arrowRight,"aria-label":`Send`})]})},T={render:()=>(0,p.jsxs)(`div`,{style:{display:`grid`,gap:16,width:272},children:[(0,p.jsxs)(f,{"aria-label":`Search`,children:[(0,p.jsx)(l,{"aria-label":`Search`,placeholder:`Search...`}),(0,p.jsx)(r,{variant:`outline`,icon:g.search,"aria-label":`Search`})]}),(0,p.jsxs)(f,{"aria-label":`Website`,children:[(0,p.jsx)(u,{children:`https://`}),(0,p.jsx)(l,{"aria-label":`Website`,placeholder:`example.com`})]})]})},E=e=>(0,p.jsx)(`div`,{style:{minHeight:160},children:(0,p.jsx)(e,{})}),D={decorators:[E],render:()=>(0,p.jsxs)(f,{"aria-label":`Follow`,children:[(0,p.jsx)(r,{variant:`outline`,children:`Follow`}),(0,p.jsxs)(s,{trigger:(0,p.jsx)(r,{variant:`outline`,icon:g.chevronDown,"aria-label":`More follow options`}),align:`end`,children:[(0,p.jsx)(o,{icon:g.copy,children:`Copy link`}),(0,p.jsx)(i,{}),(0,p.jsx)(o,{type:`destructive`,icon:g.trash,children:`Delete conversation`})]})]})},O={parameters:{layout:`fullscreen`},render:()=>(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,p.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,justifyItems:`start`},children:[(0,p.jsx)(`div`,{style:y,children:e===`light`?`Light`:`Dark`}),(0,p.jsxs)(f,{"aria-label":`Review (${e})`,children:[(0,p.jsx)(r,{variant:`outline`,children:`Preview`}),(0,p.jsx)(r,{variant:`outline`,children:`Share`}),(0,p.jsx)(r,{variant:`outline`,children:`Export`})]}),[`default`,`secondary`].map(t=>(0,p.jsxs)(f,{"aria-label":`Approve ${t} (${e})`,children:[(0,p.jsx)(r,{variant:t,children:`Approve`}),(0,p.jsx)(r,{variant:t,icon:g.chevronDown,"aria-label":`More`})]},t)),(0,p.jsxs)(f,{"aria-label":`Website (${e})`,style:{width:272},children:[(0,p.jsx)(u,{children:`https://`}),(0,p.jsx)(l,{"aria-label":`Website`,placeholder:`example.com`})]})]},e))})},k=[`Playground`,`Orientation`,`Toolbar`,`SplitButton`,`Vertical`,`Nested`,`WithInput`,`WithDropdownMenu`,`Themes`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'outline',
    count: 4,
    text: false
  },
  argTypes: {
    orientation: {
      name: 'Orientation',
      control: 'inline-radio',
      options: ['horizontal', 'vertical']
    },
    variant: {
      name: 'Button Variant',
      control: 'inline-radio',
      options: ['outline', 'default', 'secondary', 'ghost']
    },
    count: {
      name: 'Buttons',
      control: {
        type: 'range',
        min: 2,
        max: 6
      }
    },
    text: {
      name: 'Button Group Text first'
    }
  },
  render: ({
    orientation,
    variant,
    count,
    text
  }) => <ButtonGroup orientation={orientation} aria-label="Actions">
      {text && <ButtonGroupText>Text</ButtonGroupText>}
      {Array.from({
      length: count
    }, (_, i) => <Button key={i} variant={variant}>
          Button
        </Button>)}
    </ButtonGroup>
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 48,
    alignItems: 'flex-start'
  }}>
      <div style={{
      display: 'grid',
      gap: 8
    }}>
        <span style={caption}>Horizontal</span>
        <ButtonGroup aria-label="Horizontal">
          {['Button', 'Button', 'Button', 'Button'].map((label, i) => <Button key={i} variant="outline">
              {label}
            </Button>)}
        </ButtonGroup>
      </div>
      <div style={{
      display: 'grid',
      gap: 8
    }}>
        <span style={caption}>Vertical</span>
        <ButtonGroup orientation="vertical" aria-label="Vertical" style={{
        width: 120
      }}>
          {['Button', 'Button', 'Button', 'Button'].map((label, i) => <Button key={i} variant="outline">
              {label}
            </Button>)}
        </ButtonGroup>
      </div>
      <div style={{
      display: 'grid',
      gap: 8
    }}>
        <span style={caption}>Button Group Text</span>
        <ButtonGroup aria-label="With text">
          <ButtonGroupText>Text</ButtonGroupText>
          <ButtonGroupText icon={icons.globe}>Icon</ButtonGroupText>
        </ButtonGroup>
      </div>
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Figma "Button Group" (Orientation) and its Button set: Start, Middle, End in a row and in a column.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup aria-label="Toolbar">
      <Button variant="outline" icon={icons.plus} aria-label="Add" />
      <ButtonGroup aria-label="Review">
        <Button variant="outline">Preview</Button>
        <Button variant="outline">Share</Button>
      </ButtonGroup>
      <Button leadingIcon={icons.globe}>Deploy</Button>
    </ButtonGroup>
}`,...x.parameters?.docs?.source},description:{story:`Figma demo "Button Group": a group of groups, 8 px apart.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    justifyItems: 'center'
  }}>
      {(['default', 'outline', 'secondary'] as const).map(variant => <ButtonGroup key={variant} aria-label={\`Approve (\${variant})\`}>
          <Button variant={variant}>Approve</Button>
          <Button variant={variant} icon={icons.chevronDown} aria-label="More approve options" />
        </ButtonGroup>)}
    </div>
}`,...S.parameters?.docs?.source},description:{story:`Figma demo "Split button": Default, Outline and Secondary.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    justifyItems: 'center'
  }}>
      <ButtonGroup orientation="vertical" aria-label="Create" style={{
      width: 160
    }}>
        <Button variant="outline" leadingIcon={icons.at}>
          Email invite
        </Button>
        <Button variant="outline" leadingIcon={icons.branch}>
          New branch
        </Button>
        <Button variant="outline" leadingIcon={icons.download}>
          Download CSV
        </Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" aria-label="Zoom">
        <Button variant="outline" icon={icons.plus} aria-label="Zoom in" />
        <Button variant="outline" icon={icons.minus} aria-label="Zoom out" />
      </ButtonGroup>
    </div>
}`,...C.parameters?.docs?.source},description:{story:`Figma demo "Vertical".`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup aria-label="Message" style={{
    width: 360
  }}>
      <Button variant="outline" icon={icons.plus} aria-label="Attach" />
      <ButtonGroup aria-label="Compose" style={{
      flex: 1
    }}>
        <Input aria-label="Message" placeholder="Send a message" />
      </ButtonGroup>
      <Button icon={icons.arrowRight} aria-label="Send" />
    </ButtonGroup>
}`,...w.parameters?.docs?.source},description:{story:`Figma demo "Nested": an Input between buttons, 8 px apart.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    width: 272
  }}>
      <ButtonGroup aria-label="Search">
        <Input aria-label="Search" placeholder="Search..." />
        <Button variant="outline" icon={icons.search} aria-label="Search" />
      </ButtonGroup>
      <ButtonGroup aria-label="Website">
        <ButtonGroupText>https://</ButtonGroupText>
        <Input aria-label="Website" placeholder="example.com" />
      </ButtonGroup>
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Figma demo "With input": an Input joined to an icon button; ButtonGroupText as a prefix.`,...T.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  decorators: [room],
  render: () => <ButtonGroup aria-label="Follow">
      <Button variant="outline">Follow</Button>
      <DropdownMenu trigger={<Button variant="outline" icon={icons.chevronDown} aria-label="More follow options" />} align="end">
        <DropdownMenuItem icon={icons.copy}>Copy link</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem type="destructive" icon={icons.trash}>
          Delete conversation
        </DropdownMenuItem>
      </DropdownMenu>
    </ButtonGroup>
}`,...D.parameters?.docs?.source},description:{story:`Figma demo "With dropdown menu": the second button opens a Dropdown Menu.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
      display: 'grid',
      gap: 16,
      justifyItems: 'start'
    }}>
          <div style={caption}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          <ButtonGroup aria-label={\`Review (\${scheme})\`}>
            <Button variant="outline">Preview</Button>
            <Button variant="outline">Share</Button>
            <Button variant="outline">Export</Button>
          </ButtonGroup>
          {(['default', 'secondary'] as const).map(variant => <ButtonGroup key={variant} aria-label={\`Approve \${variant} (\${scheme})\`}>
              <Button variant={variant}>Approve</Button>
              <Button variant={variant} icon={icons.chevronDown} aria-label="More" />
            </ButtonGroup>)}
          <ButtonGroup aria-label={\`Website (\${scheme})\`} style={{
        width: 272
      }}>
            <ButtonGroupText>https://</ButtonGroupText>
            <Input aria-label="Website" placeholder="example.com" />
          </ButtonGroup>
        </div>)}
    </div>
}`,...O.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...O.parameters?.docs?.description}}}})))()}A();export{w as Nested,b as Orientation,v as Playground,S as SplitButton,O as Themes,x as Toolbar,C as Vertical,D as WithDropdownMenu,T as WithInput,k as __namedExportsOrder,_ as default};