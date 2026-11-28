import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t}from"./iframe-CEPbjgPm.js";import{C as n,Ct as r,It as i,Kt as a,Q as o,V as s,at as c,et as l,k as u,lt as d,ot as f,st as p,ut as m}from"./react-B_-L1QTZ.js";import{n as h,t as g}from"./Badge-CEXh9NLl.js";import{n as _,t as v}from"./Button-G1r8qACU.js";import{a as y,i as b,n as x,r as S,t as C}from"./NavigationMenu-DB-to2VN.js";var w,T,E,icon,D,O,k,A,href,j,M,N,P,F,I,L,R,z,B;function init_NavigationMenu_stories(){return(init_NavigationMenu_stories=e((()=>{r(),h(),_(),y(),w=t(),T={title:`Components/Navigation Menu`,parameters:{layout:`padded`,docs:{description:{component:"Implements the Sort UI 2.0 **Navigation Menu**, **Navigation Menu Trigger**, **Navigation Menu Content** and **Navigation Menu Link** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=208-3)): a nav landmark with a row of 32 px triggers and links. A trigger (`NavigationMenuItem label`) is a button with `aria-expanded` that opens its panel 8 px below: on click, Enter, Space or Arrow Down (focus moves to the first link), or after resting the mouse on it; Escape, a click outside or focus leaving it closes the panel, and Arrow Left / Right move between the items. `NavigationMenuItem href` is Figma Type=Link (`active` marks the current page). Panels hold a `NavigationMenuList` (a column, or `columns` for a grid) of `NavigationMenuLink` (title, `description`, `icon`), or any content (`flush` drops the padding)."}}},decorators:[e=>(0,w.jsx)(`div`,{style:{minHeight:420},children:e()})]},E={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,letterSpacing:`-0.005em`,margin:0},icon=e=>e,D=[{title:`Hosting`,description:`Deploy from Git`,icon:(0,w.jsx)(f,{})},{title:`Databases`,description:`Postgres and Redis`,icon:(0,w.jsx)(l,{})},{title:`Edge Functions`,description:`Code at the edge`,icon:(0,w.jsx)(i,{})},{title:`Analytics`,description:`Traffic and Web Vitals`,icon:(0,w.jsx)(n,{})}],O=[{title:`Storage`,description:`Files on a global CDN`,icon:(0,w.jsx)(o,{})},{title:`Domains`,description:`DNS and automatic SSL`,icon:(0,w.jsx)(d,{})}],k=[{title:`Startups`,description:`Ship the first version`},{title:`Enterprise`,description:`SSO, audit logs, SLAs`},{title:`Agencies`,description:`Client sites in one place`},{title:`E-commerce`,description:`Storefronts that stay up`},{title:`AI apps`,description:`Stream from the edge`},{title:`Open source`,description:`Free for maintainers`}],A=[{title:`Documentation`,description:`Guides and reference`,icon:(0,w.jsx)(p,{})},{title:`Changelog`,description:`What shipped this week`,icon:(0,w.jsx)(a,{})},{title:`Blog`,description:`Engineering stories`,icon:(0,w.jsx)(u,{})},{title:`Community`,description:`Forum and Discord`,icon:(0,w.jsx)(c,{})},{title:`Status`,description:`Uptime and incidents`,icon:(0,w.jsx)(s,{})},{title:`Support`,description:`Talk to an engineer`,icon:(0,w.jsx)(m,{})}],href=e=>`#${e.toLowerCase().replace(/[^a-z]+/g,`-`)}`,j={args:{open:!0,columns:1,icons:!1},render:e=>(0,w.jsxs)(C,{defaultValue:e.open?`product`:void 0,children:[(0,w.jsx)(x,{value:`product`,label:`Product`,width:e.columns>1?`368px`:void 0,children:(0,w.jsx)(b,{columns:e.columns,children:D.map(t=>(0,w.jsx)(S,{href:href(t.title),title:t.title,description:e.columns>1?t.description:void 0,icon:e.icons?icon(t.icon):void 0},t.title))})}),(0,w.jsx)(x,{label:`Solutions`,children:(0,w.jsx)(b,{children:k.map(e=>(0,w.jsx)(S,{href:href(e.title),title:e.title},e.title))})}),(0,w.jsx)(x,{href:`#pricing`,label:`Pricing`}),(0,w.jsx)(x,{href:`#docs`,label:`Docs`})]},String(e.open))},M={render:()=>(0,w.jsxs)(C,{defaultValue:`product`,children:[(0,w.jsx)(x,{value:`product`,label:`Product`,children:(0,w.jsx)(b,{children:D.map(e=>(0,w.jsx)(S,{href:href(e.title),title:e.title},e.title))})}),(0,w.jsx)(x,{label:`Solutions`,children:(0,w.jsx)(b,{children:k.map(e=>(0,w.jsx)(S,{href:href(e.title),title:e.title},e.title))})}),(0,w.jsx)(x,{label:`Resources`,children:(0,w.jsx)(b,{children:A.map(e=>(0,w.jsx)(S,{href:href(e.title),title:e.title},e.title))})}),(0,w.jsx)(x,{href:`#pricing`,label:`Pricing`}),(0,w.jsx)(x,{href:`#docs`,label:`Docs`})]})},N={render:()=>(0,w.jsxs)(C,{"aria-label":`States`,defaultValue:`open`,children:[(0,w.jsx)(x,{label:`Default`,children:(0,w.jsx)(b,{children:(0,w.jsx)(S,{href:`#a`,title:`Link`})})}),(0,w.jsx)(x,{value:`open`,label:`Active (open)`,children:(0,w.jsxs)(b,{children:[(0,w.jsx)(S,{href:`#b`,title:`Link`}),(0,w.jsx)(S,{href:`#c`,title:`Current page`,active:!0})]})}),(0,w.jsx)(x,{label:`Disabled`,disabled:!0}),(0,w.jsx)(x,{href:`#link`,label:`Link`}),(0,w.jsx)(x,{href:`#current`,label:`Current`,active:!0}),(0,w.jsx)(x,{href:`#off`,label:`Disabled link`,disabled:!0})]})},P={render:()=>(0,w.jsxs)(C,{defaultValue:`product`,children:[(0,w.jsx)(x,{value:`product`,label:`Product`,width:`368px`,children:(0,w.jsx)(b,{columns:2,children:D.map(e=>(0,w.jsx)(S,{href:href(e.title),title:e.title,description:e.description},e.title))})}),(0,w.jsx)(x,{label:`Solutions`,width:`368px`,children:(0,w.jsx)(b,{columns:2,children:k.map(e=>(0,w.jsx)(S,{href:href(e.title),title:e.title,description:e.description},e.title))})})]})},F={render:()=>(0,w.jsxs)(C,{defaultValue:`product`,children:[(0,w.jsx)(x,{value:`product`,label:`Product`,width:`368px`,children:(0,w.jsx)(b,{columns:2,children:D.map(e=>(0,w.jsx)(S,{href:href(e.title),title:e.title,description:e.description,icon:e.icon,iconPlacement:`top`},e.title))})}),(0,w.jsx)(x,{label:`Resources`,width:`368px`,children:(0,w.jsx)(b,{columns:2,children:A.map(e=>(0,w.jsx)(S,{href:href(e.title),title:e.title,description:e.description,icon:e.icon},e.title))})})]})},I={render:()=>(0,w.jsx)(C,{defaultValue:`product`,children:(0,w.jsx)(x,{value:`product`,label:`Product`,width:`640px`,children:(0,w.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,w.jsxs)(`div`,{style:{flex:`1 1 200px`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`,gap:24,padding:16,borderRadius:`var(--ds-radius-md)`,background:`var(--ds-fill-2)`,minHeight:200},children:[(0,w.jsx)(g,{border:!0,shape:`pill`,style:{alignSelf:`flex-start`},children:`Beta`}),(0,w.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,w.jsxs)(`div`,{style:{display:`grid`,gap:2},children:[(0,w.jsx)(`p`,{style:{...E,fontSize:16,lineHeight:`24px`,fontWeight:500},children:`Fluid compute`}),(0,w.jsx)(`p`,{style:{...E,fontSize:12,lineHeight:`16px`,color:`var(--ds-muted-foreground)`},children:`Compute that scales to zero`})]}),(0,w.jsx)(v,{size:`sm`,style:{justifySelf:`start`},children:`Get started`})]})]}),(0,w.jsxs)(`div`,{style:{flex:`1.6 1 280px`,display:`grid`,gap:8,alignContent:`space-between`},children:[(0,w.jsx)(b,{columns:2,children:[...D,...O].map(e=>(0,w.jsx)(S,{href:href(e.title),title:e.title,description:e.description,icon:e.icon},e.title))}),(0,w.jsxs)(`div`,{style:{margin:`0 8px`,padding:`16px 0 12px`,borderTop:`1px solid var(--ds-border)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:8},children:[(0,w.jsx)(`p`,{style:{...E,fontWeight:500},children:`Looking for the API docs?`}),(0,w.jsx)(v,{variant:`ghost`,size:`sm`,children:`Open docs`})]})]})]})})})},L=[{label:`Platform`,links:[...D,...O]},{label:`Resources`,links:A.slice(0,5)},{label:`Company`,links:[{title:`About`,description:`Who builds the platform`},{title:`Careers`,description:`Open roles across teams`},{title:`Contact`,description:`Sales and press`}]}],R={render:()=>(0,w.jsx)(C,{defaultValue:`explore`,children:(0,w.jsx)(x,{value:`explore`,label:`Explore`,width:`640px`,flush:!0,children:(0,w.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(180px, 1fr))`},children:L.map((e,t)=>(0,w.jsxs)(`section`,{"aria-labelledby":`group-${e.label}`,style:{padding:20,display:`grid`,gap:8,alignContent:`start`,background:t===L.length-1?`var(--ds-fill-1)`:void 0},children:[(0,w.jsx)(`h3`,{id:`group-${e.label}`,style:{...E,fontSize:12,lineHeight:`16px`,fontWeight:500,color:`var(--ds-muted-foreground)`,paddingBottom:4},children:e.label}),(0,w.jsx)(`hr`,{style:{margin:`4px 0`,border:0,borderTop:`1px solid var(--ds-border)`}}),(0,w.jsx)(b,{style:{margin:`0 -8px`},children:e.links.map(e=>(0,w.jsx)(S,{href:href(e.title),title:e.title,description:e.description},e.title))})]},e.label))})})})},z={parameters:{layout:`fullscreen`},decorators:[e=>e()],render:()=>(0,w.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,w.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,minHeight:300},children:(0,w.jsxs)(C,{"aria-label":`Main (${e})`,defaultValue:`product`,children:[(0,w.jsx)(x,{value:`product`,label:`Product`,children:(0,w.jsx)(b,{children:D.slice(0,3).map(e=>(0,w.jsx)(S,{href:href(e.title),title:e.title,description:e.description,icon:e.icon,active:e.title===`Hosting`},e.title))})}),(0,w.jsx)(x,{href:`#pricing`,label:`Pricing`,active:!0}),(0,w.jsx)(x,{href:`#docs`,label:`Docs`})]})},e))})},B=[`Playground`,`Default`,`States`,`Grid`,`WithIcons`,`Featured`,`Groups`,`Themes`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    columns: 1,
    icons: false
  },
  render: args => <NavigationMenu key={String(args.open)} defaultValue={args.open ? 'product' : undefined}>
      <NavigationMenuItem value="product" label="Product" width={args.columns > 1 ? '368px' : undefined}>
        <NavigationMenuList columns={args.columns}>
          {product.map(p => <NavigationMenuLink key={p.title} href={href(p.title)} title={p.title} description={args.columns > 1 ? p.description : undefined} icon={args.icons ? icon(p.icon) : undefined} />)}
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem label="Solutions">
        <NavigationMenuList>
          {solutions.map(s => <NavigationMenuLink key={s.title} href={href(s.title)} title={s.title} />)}
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem href="#pricing" label="Pricing" />
      <NavigationMenuItem href="#docs" label="Docs" />
    </NavigationMenu>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <NavigationMenu defaultValue="product">
      <NavigationMenuItem value="product" label="Product">
        <NavigationMenuList>
          {product.map(p => <NavigationMenuLink key={p.title} href={href(p.title)} title={p.title} />)}
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem label="Solutions">
        <NavigationMenuList>
          {solutions.map(s => <NavigationMenuLink key={s.title} href={href(s.title)} title={s.title} />)}
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem label="Resources">
        <NavigationMenuList>
          {resources.map(r => <NavigationMenuLink key={r.title} href={href(r.title)} title={r.title} />)}
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem href="#pricing" label="Pricing" />
      <NavigationMenuItem href="#docs" label="Docs" />
    </NavigationMenu>
}`,...M.parameters?.docs?.source},description:{story:`Figma demo "Navigation Menu": three triggers and two links; Product is open.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <NavigationMenu aria-label="States" defaultValue="open">
      <NavigationMenuItem label="Default">
        <NavigationMenuList>
          <NavigationMenuLink href="#a" title="Link" />
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem value="open" label="Active (open)">
        <NavigationMenuList>
          <NavigationMenuLink href="#b" title="Link" />
          <NavigationMenuLink href="#c" title="Current page" active />
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem label="Disabled" disabled />
      <NavigationMenuItem href="#link" label="Link" />
      <NavigationMenuItem href="#current" label="Current" active />
      <NavigationMenuItem href="#off" label="Disabled link" disabled />
    </NavigationMenu>
}`,...N.parameters?.docs?.source},description:{story:`Figma Navigation Menu Trigger: Type=Trigger and Type=Link; Active is the open trigger or the current page; Disabled.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <NavigationMenu defaultValue="product">
      <NavigationMenuItem value="product" label="Product" width="368px">
        <NavigationMenuList columns={2}>
          {product.map(p => <NavigationMenuLink key={p.title} href={href(p.title)} title={p.title} description={p.description} />)}
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem label="Solutions" width="368px">
        <NavigationMenuList columns={2}>
          {solutions.map(s => <NavigationMenuLink key={s.title} href={href(s.title)} title={s.title} description={s.description} />)}
        </NavigationMenuList>
      </NavigationMenuItem>
    </NavigationMenu>
}`,...P.parameters?.docs?.source},description:{story:`Figma demo "Grid": two columns of links with descriptions, 368 px.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <NavigationMenu defaultValue="product">
      <NavigationMenuItem value="product" label="Product" width="368px">
        <NavigationMenuList columns={2}>
          {product.map(p => <NavigationMenuLink key={p.title} href={href(p.title)} title={p.title} description={p.description} icon={p.icon} iconPlacement="top" />)}
        </NavigationMenuList>
      </NavigationMenuItem>
      <NavigationMenuItem label="Resources" width="368px">
        <NavigationMenuList columns={2}>
          {resources.map(r => <NavigationMenuLink key={r.title} href={href(r.title)} title={r.title} description={r.description} icon={r.icon} />)}
        </NavigationMenuList>
      </NavigationMenuItem>
    </NavigationMenu>
}`,...F.parameters?.docs?.source},description:{story:`Figma demo "With icons": icons above the text (Product) or before it (Resources).`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <NavigationMenu defaultValue="product">
      <NavigationMenuItem value="product" label="Product" width="640px">
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <div style={{
          flex: '1 1 200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 24,
          padding: 16,
          borderRadius: 'var(--ds-radius-md)',
          background: 'var(--ds-fill-2)',
          minHeight: 200
        }}>
            <Badge border shape="pill" style={{
            alignSelf: 'flex-start'
          }}>
              Beta
            </Badge>
            <div style={{
            display: 'grid',
            gap: 12
          }}>
              <div style={{
              display: 'grid',
              gap: 2
            }}>
                <p style={{
                ...text,
                fontSize: 16,
                lineHeight: '24px',
                fontWeight: 500
              }}>Fluid compute</p>
                <p style={{
                ...text,
                fontSize: 12,
                lineHeight: '16px',
                color: 'var(--ds-muted-foreground)'
              }}>Compute that scales to zero</p>
              </div>
              <Button size="sm" style={{
              justifySelf: 'start'
            }}>
                Get started
              </Button>
            </div>
          </div>
          <div style={{
          flex: '1.6 1 280px',
          display: 'grid',
          gap: 8,
          alignContent: 'space-between'
        }}>
            <NavigationMenuList columns={2}>
              {[...product, ...more].map(p => <NavigationMenuLink key={p.title} href={href(p.title)} title={p.title} description={p.description} icon={p.icon} />)}
            </NavigationMenuList>
            <div style={{
            margin: '0 8px',
            padding: '16px 0 12px',
            borderTop: '1px solid var(--ds-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8
          }}>
              <p style={{
              ...text,
              fontWeight: 500
            }}>Looking for the API docs?</p>
              <Button variant="ghost" size="sm">
                Open docs
              </Button>
            </div>
          </div>
        </div>
      </NavigationMenuItem>
    </NavigationMenu>
}`,...I.parameters?.docs?.source},description:{story:`Figma demo "Featured": a promoted card beside a grid of links, with a footer line.`,...I.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <NavigationMenu defaultValue="explore">
      <NavigationMenuItem value="explore" label="Explore" width="640px" flush>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))'
      }}>
          {groups.map((g, i) => <section key={g.label} aria-labelledby={\`group-\${g.label}\`} style={{
          padding: 20,
          display: 'grid',
          gap: 8,
          alignContent: 'start',
          background: i === groups.length - 1 ? 'var(--ds-fill-1)' : undefined
        }}>
              <h3 id={\`group-\${g.label}\`} style={{
            ...text,
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 500,
            color: 'var(--ds-muted-foreground)',
            paddingBottom: 4
          }}>
                {g.label}
              </h3>
              <hr style={{
            margin: '4px 0',
            border: 0,
            borderTop: '1px solid var(--ds-border)'
          }} />
              <NavigationMenuList style={{
            margin: '0 -8px'
          }}>
                {g.links.map(l => <NavigationMenuLink key={l.title} href={href(l.title)} title={l.title} description={l.description} />)}
              </NavigationMenuList>
            </section>)}
        </div>
      </NavigationMenuItem>
    </NavigationMenu>
}`,...R.parameters?.docs?.source},description:{story:`Figma demo "Groups": three labelled columns without panel padding; the last on the fill-1 tint.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [Story => Story()],
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24,
      minHeight: 300
    }}>
          <NavigationMenu aria-label={\`Main (\${scheme})\`} defaultValue="product">
            <NavigationMenuItem value="product" label="Product">
              <NavigationMenuList>
                {product.slice(0, 3).map(p => <NavigationMenuLink key={p.title} href={href(p.title)} title={p.title} description={p.description} icon={p.icon} active={p.title === 'Hosting'} />)}
              </NavigationMenuList>
            </NavigationMenuItem>
            <NavigationMenuItem href="#pricing" label="Pricing" active />
            <NavigationMenuItem href="#docs" label="Docs" />
          </NavigationMenu>
        </div>)}
    </div>
}`,...z.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...z.parameters?.docs?.description}}}})))()}init_NavigationMenu_stories();export{M as Default,I as Featured,P as Grid,R as Groups,j as Playground,N as States,z as Themes,F as WithIcons,B as __namedExportsOrder,T as default};