import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BGJ9go0F.js";import{i as n,n as r,r as i,t as a}from"./AspectRatio.fixtures-CyvgB-8N.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),r(),o=t(),s={title:`Components/Aspect Ratio`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Aspect Ratio** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=336-14955)): `ratio` (`1:1` · `4:3` · `3:2` · `16:9` · `21:9` · `2:3` · `3:4` · `9:16`, or any number) and `rounded` (the demos' 12 px corners). The box takes its container's width and keeps the ratio; a picture, video or iframe inside fills it, cropped from the middle. Give pictures their own `alt`."}}}},c=[`1:1`,`4:3`,`3:2`,`16:9`,`21:9`,`2:3`,`3:4`,`9:16`],l={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,color:`var(--ds-muted-foreground)`,letterSpacing:`-0.005em`},u={args:{ratio:`16:9`,rounded:!0,width:320},argTypes:{ratio:{name:`ratio`,control:`select`,options:c},rounded:{name:`Rounded`},width:{name:`Width (px)`,control:{type:`range`,min:80,max:480,step:8}}},render:({ratio:e,rounded:t,width:n})=>(0,o.jsx)(`div`,{style:{width:`min(${n}px, calc(100vw - 32px))`},children:(0,o.jsx)(i,{ratio:e,rounded:t,children:(0,o.jsx)(`img`,{src:a,alt:`Sample photo`})})})},d={render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:24,alignItems:`flex-start`},children:c.map(e=>(0,o.jsxs)(`figure`,{style:{display:`grid`,gap:8,width:120,margin:0},children:[(0,o.jsx)(i,{ratio:e,children:(0,o.jsx)(`img`,{src:a,alt:``})}),(0,o.jsx)(`figcaption`,{style:l,children:e})]},e))})},f={render:()=>(0,o.jsx)(`div`,{style:{width:320},children:(0,o.jsx)(i,{ratio:`16:9`,rounded:!0,children:(0,o.jsx)(`img`,{src:a,alt:`Sample photo`})})})},p={render:()=>(0,o.jsx)(`div`,{style:{width:320},children:(0,o.jsx)(i,{ratio:`16:9`,rounded:!0,style:{display:`grid`,placeItems:`center`,background:`var(--ds-fill-2)`},children:(0,o.jsx)(`span`,{style:l,children:`Video loading…`})})})},m={parameters:{layout:`fullscreen`},render:()=>(0,o.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,o.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24},children:(0,o.jsx)(`div`,{style:{width:240},children:(0,o.jsx)(i,{ratio:`4:3`,rounded:!0,children:(0,o.jsx)(`img`,{src:a,alt:``})})})},e))})},h=[`Playground`,`Ratios`,`Demo`,`Placeholder`,`Themes`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: '16:9',
    rounded: true,
    width: 320
  },
  argTypes: {
    ratio: {
      name: 'ratio',
      control: 'select',
      options: presets
    },
    rounded: {
      name: 'Rounded'
    },
    width: {
      name: 'Width (px)',
      control: {
        type: 'range',
        min: 80,
        max: 480,
        step: 8
      }
    }
  },
  render: ({
    ratio,
    rounded,
    width
  }) => <div style={{
    width: \`min(\${width}px, calc(100vw - 32px))\`
  }}>
      <AspectRatio ratio={ratio} rounded={rounded}>
        <img src={aspectRatioPhoto} alt="Sample photo" />
      </AspectRatio>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24,
    alignItems: 'flex-start'
  }}>
      {presets.map(ratio => <figure key={ratio} style={{
      display: 'grid',
      gap: 8,
      width: 120,
      margin: 0
    }}>
          <AspectRatio ratio={ratio}>
            <img src={aspectRatioPhoto} alt="" />
          </AspectRatio>
          <figcaption style={caption}>{ratio}</figcaption>
        </figure>)}
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Figma ratio: every preset, 120 px wide, as in the component set.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <AspectRatio ratio="16:9" rounded>
        <img src={aspectRatioPhoto} alt="Sample photo" />
      </AspectRatio>
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Figma demos: a 320 px box with rounded corners, here at 16:9.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <AspectRatio ratio="16:9" rounded style={{
      display: 'grid',
      placeItems: 'center',
      background: 'var(--ds-fill-2)'
    }}>
        <span style={caption}>Video loading…</span>
      </AspectRatio>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Any content keeps the ratio: a placeholder while a video loads.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <div style={{
        width: 240
      }}>
            <AspectRatio ratio="4:3" rounded>
              <img src={aspectRatioPhoto} alt="" />
            </AspectRatio>
          </div>
        </div>)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Light and Dark: the box itself draws nothing, so it looks the same in both.`,...m.parameters?.docs?.description}}}})))()}g();export{f as Demo,p as Placeholder,u as Playground,d as Ratios,m as Themes,h as __namedExportsOrder,s as default};