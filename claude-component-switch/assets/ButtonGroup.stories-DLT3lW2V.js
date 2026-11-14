import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CMaucr84.js";import{n,t as r}from"./Button-Bdl5Y3pl.js";import{d as i,h as a,o,t as s}from"./DropdownMenu-4_0DSzTG.js";import{r as c,t as l}from"./Input-BuH9py9-.js";function u({orientation:e=`horizontal`,className:t,children:n,...r}){return(0,f.jsx)(`div`,{role:`group`,...r,className:[`ds-button-group`,e===`vertical`&&`ds-button-group--vertical`,t].filter(Boolean).join(` `),children:n})}function d({icon:e,className:t,children:n,...r}){return(0,f.jsxs)(`span`,{...r,className:[`ds-button-group__text`,t].filter(Boolean).join(` `),children:[e,(0,f.jsx)(`span`,{children:n})]})}var f;function p(){return(p=e((()=>{f=t(),u.__docgenInfo={description:`Figma "Button Group".`,methods:[],displayName:`ButtonGroup`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:``},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:`Figma "Orientation": a row (default) or a column.`,defaultValue:{value:`'horizontal'`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:`Figma "items": Buttons, ButtonGroupText, an Input or a Select. They touch, and only the outer corners are rounded.
A ButtonGroup of ButtonGroups spaces them 8 px apart instead (Figma's "Button Group" demo).`}},composes:[`HTMLAttributes`]},d.__docgenInfo={description:`Figma "Button Group Text": a label segment in a group, e.g. a unit or a prefix next to an Input.`,methods:[],displayName:`ButtonGroupText`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:`Figma "Label".`},icon:{required:!1,tsType:{name:`ReactNode`},description:'Figma "Icon" (Icon swap): a 16 px icon before the label, using `currentColor`.'}},composes:[`HTMLAttributes`]}})))()}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{n(),a(),c(),p(),m=t(),h=`https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=302-14707`,g=e=>(0,m.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.875,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),_={plus:g((0,m.jsx)(`path`,{d:`M5 12h14M12 5v14`})),minus:g((0,m.jsx)(`path`,{d:`M5 12h14`})),globe:g((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,m.jsx)(`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20`})]})),chevronDown:g((0,m.jsx)(`path`,{d:`m6 9 6 6 6-6`})),chevronUp:g((0,m.jsx)(`path`,{d:`m18 15-6-6-6 6`})),search:g((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,m.jsx)(`path`,{d:`m21 21-4.3-4.3`})]})),arrowRight:g((0,m.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`})),at:g((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`}),(0,m.jsx)(`path`,{d:`M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8`})]})),branch:g((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`circle`,{cx:`18`,cy:`6`,r:`3`}),(0,m.jsx)(`circle`,{cx:`6`,cy:`18`,r:`3`}),(0,m.jsx)(`path`,{d:`M6 3v12M18 9a9 9 0 0 1-9 9`})]})),download:g((0,m.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3`})),copy:g((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`}),(0,m.jsx)(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})),trash:g((0,m.jsx)(`path`,{d:`M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}))},v={title:`Components/Button Group`,parameters:{docs:{description:{component:`Implements the Sort UI 2.0 page **Button Group** ([open in Figma](${h})): **Button Group** (\`orientation\`: \`horizontal\` · \`vertical\`), its Start / Middle / End buttons (any \`Button\`; the group rounds only the outer corners and drops the shared stroke) and **Button Group Text** (\`ButtonGroupText\`). An \`Input\` or a \`Select\` can join a group, and a group of groups spaces them 8 px apart. Name a group with \`aria-label\`.`}}}},y={args:{orientation:`horizontal`,variant:`outline`,count:4,text:!1},argTypes:{orientation:{name:`Orientation`,control:`inline-radio`,options:[`horizontal`,`vertical`]},variant:{name:`Button Variant`,control:`inline-radio`,options:[`outline`,`default`,`secondary`,`ghost`]},count:{name:`Buttons`,control:{type:`range`,min:2,max:6}},text:{name:`Button Group Text first`}},render:({orientation:e,variant:t,count:n,text:i})=>(0,m.jsxs)(u,{orientation:e,"aria-label":`Actions`,children:[i&&(0,m.jsx)(d,{children:`Text`}),Array.from({length:n},(e,n)=>(0,m.jsx)(r,{variant:t,children:`Button`},n))]})},b={fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},x={render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,gap:48,alignItems:`flex-start`},children:[(0,m.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,m.jsx)(`span`,{style:b,children:`Horizontal`}),(0,m.jsx)(u,{"aria-label":`Horizontal`,children:[`Button`,`Button`,`Button`,`Button`].map((e,t)=>(0,m.jsx)(r,{variant:`outline`,children:e},t))})]}),(0,m.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,m.jsx)(`span`,{style:b,children:`Vertical`}),(0,m.jsx)(u,{orientation:`vertical`,"aria-label":`Vertical`,style:{width:120},children:[`Button`,`Button`,`Button`,`Button`].map((e,t)=>(0,m.jsx)(r,{variant:`outline`,children:e},t))})]}),(0,m.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,m.jsx)(`span`,{style:b,children:`Button Group Text`}),(0,m.jsxs)(u,{"aria-label":`With text`,children:[(0,m.jsx)(d,{children:`Text`}),(0,m.jsx)(d,{icon:_.globe,children:`Icon`})]})]})]})},S={render:()=>(0,m.jsxs)(u,{"aria-label":`Toolbar`,children:[(0,m.jsx)(r,{variant:`outline`,icon:_.plus,"aria-label":`Add`}),(0,m.jsxs)(u,{"aria-label":`Review`,children:[(0,m.jsx)(r,{variant:`outline`,children:`Preview`}),(0,m.jsx)(r,{variant:`outline`,children:`Share`})]}),(0,m.jsx)(r,{leadingIcon:_.globe,children:`Deploy`})]})},C={render:()=>(0,m.jsx)(`div`,{style:{display:`grid`,gap:16,justifyItems:`center`},children:[`default`,`outline`,`secondary`].map(e=>(0,m.jsxs)(u,{"aria-label":`Approve (${e})`,children:[(0,m.jsx)(r,{variant:e,children:`Approve`}),(0,m.jsx)(r,{variant:e,icon:_.chevronDown,"aria-label":`More approve options`})]},e))})},w={render:()=>(0,m.jsxs)(`div`,{style:{display:`grid`,gap:16,justifyItems:`center`},children:[(0,m.jsxs)(u,{orientation:`vertical`,"aria-label":`Create`,style:{width:160},children:[(0,m.jsx)(r,{variant:`outline`,leadingIcon:_.at,children:`Email invite`}),(0,m.jsx)(r,{variant:`outline`,leadingIcon:_.branch,children:`New branch`}),(0,m.jsx)(r,{variant:`outline`,leadingIcon:_.download,children:`Download CSV`})]}),(0,m.jsxs)(u,{orientation:`vertical`,"aria-label":`Zoom`,children:[(0,m.jsx)(r,{variant:`outline`,icon:_.plus,"aria-label":`Zoom in`}),(0,m.jsx)(r,{variant:`outline`,icon:_.minus,"aria-label":`Zoom out`})]})]})},T={render:()=>(0,m.jsxs)(u,{"aria-label":`Message`,style:{width:360},children:[(0,m.jsx)(r,{variant:`outline`,icon:_.plus,"aria-label":`Attach`}),(0,m.jsx)(u,{"aria-label":`Compose`,style:{flex:1},children:(0,m.jsx)(l,{"aria-label":`Message`,placeholder:`Send a message`})}),(0,m.jsx)(r,{icon:_.arrowRight,"aria-label":`Send`})]})},E={render:()=>(0,m.jsxs)(`div`,{style:{display:`grid`,gap:16,width:272},children:[(0,m.jsxs)(u,{"aria-label":`Search`,children:[(0,m.jsx)(l,{"aria-label":`Search`,placeholder:`Search...`}),(0,m.jsx)(r,{variant:`outline`,icon:_.search,"aria-label":`Search`})]}),(0,m.jsxs)(u,{"aria-label":`Website`,children:[(0,m.jsx)(d,{children:`https://`}),(0,m.jsx)(l,{"aria-label":`Website`,placeholder:`example.com`})]})]})},D=e=>(0,m.jsx)(`div`,{style:{minHeight:160},children:(0,m.jsx)(e,{})}),O={decorators:[D],render:()=>(0,m.jsxs)(u,{"aria-label":`Follow`,children:[(0,m.jsx)(r,{variant:`outline`,children:`Follow`}),(0,m.jsxs)(s,{trigger:(0,m.jsx)(r,{variant:`outline`,icon:_.chevronDown,"aria-label":`More follow options`}),align:`end`,children:[(0,m.jsx)(o,{icon:_.copy,children:`Copy link`}),(0,m.jsx)(i,{}),(0,m.jsx)(o,{type:`destructive`,icon:_.trash,children:`Delete conversation`})]})]})},k={parameters:{layout:`fullscreen`},render:()=>(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,m.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,justifyItems:`start`},children:[(0,m.jsx)(`div`,{style:b,children:e===`light`?`Light`:`Dark`}),(0,m.jsxs)(u,{"aria-label":`Review (${e})`,children:[(0,m.jsx)(r,{variant:`outline`,children:`Preview`}),(0,m.jsx)(r,{variant:`outline`,children:`Share`}),(0,m.jsx)(r,{variant:`outline`,children:`Export`})]}),[`default`,`secondary`].map(t=>(0,m.jsxs)(u,{"aria-label":`Approve ${t} (${e})`,children:[(0,m.jsx)(r,{variant:t,children:`Approve`}),(0,m.jsx)(r,{variant:t,icon:_.chevronDown,"aria-label":`More`})]},t)),(0,m.jsxs)(u,{"aria-label":`Website (${e})`,style:{width:272},children:[(0,m.jsx)(d,{children:`https://`}),(0,m.jsx)(l,{"aria-label":`Website`,placeholder:`example.com`})]})]},e))})},A=[`Playground`,`Orientation`,`Toolbar`,`SplitButton`,`Vertical`,`Nested`,`WithInput`,`WithDropdownMenu`,`Themes`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Figma "Button Group" (Orientation) and its Button set: Start, Middle, End in a row and in a column.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup aria-label="Toolbar">
      <Button variant="outline" icon={icons.plus} aria-label="Add" />
      <ButtonGroup aria-label="Review">
        <Button variant="outline">Preview</Button>
        <Button variant="outline">Share</Button>
      </ButtonGroup>
      <Button leadingIcon={icons.globe}>Deploy</Button>
    </ButtonGroup>
}`,...S.parameters?.docs?.source},description:{story:`Figma demo "Button Group": a group of groups, 8 px apart.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Figma demo "Split button": Default, Outline and Secondary.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Figma demo "Vertical".`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`Figma demo "Nested": an Input between buttons, 8 px apart.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Figma demo "With input": an Input joined to an icon button; ButtonGroupText as a prefix.`,...E.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`Figma demo "With dropdown menu": the second button opens a Dropdown Menu.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...k.parameters?.docs?.description}}}})))()}j();export{T as Nested,x as Orientation,y as Playground,C as SplitButton,k as Themes,S as Toolbar,w as Vertical,O as WithDropdownMenu,E as WithInput,A as __namedExportsOrder,v as default};