import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BjUDyAHz.js";import{n,t as r}from"./Button-BAsZMaFE.js";import{r as i,t as a}from"./Input-DzlhDKg4.js";import{r as o,t as s}from"./Switch-De4LAocX.js";function c({size:e=`default`,as:t=`div`,className:n,children:r,...i}){return(0,p.jsx)(t,{...i,className:m(`ds-card`,e===`sm`&&`ds-card--sm`,n),children:r})}function l({ratio:e,className:t,style:n,children:r,...i}){return(0,p.jsx)(`div`,{...i,className:m(`ds-card__media`,t),style:e?{"--card-media-ratio":e,...n}:n,children:r})}function u({title:e,titleAs:t=`h3`,description:n,icon:r,action:i,className:a,children:o,...s}){return(0,p.jsxs)(`div`,{...s,className:m(`ds-card__header`,a),children:[r&&(0,p.jsx)(`span`,{className:`ds-card__icon`,children:r}),(0,p.jsxs)(`div`,{className:`ds-card__heading`,children:[(0,p.jsx)(t,{className:`ds-card__title`,children:e}),n!==void 0&&(0,p.jsx)(`p`,{className:`ds-card__description`,children:n}),o]}),i&&(0,p.jsx)(`div`,{className:`ds-card__action`,children:i})]})}function d({className:e,...t}){return(0,p.jsx)(`div`,{...t,className:m(`ds-card__content`,e)})}function f({justify:e=`end`,muted:t=!1,className:n,...r}){return(0,p.jsx)(`div`,{...r,className:m(`ds-card__footer`,e!==`end`&&`ds-card__footer--${e}`,t&&`ds-card__footer--muted`,n)})}var p,m;function h(){return(h=e((()=>{p=t(),m=(...e)=>e.filter(Boolean).join(` `)||void 0,c.__docgenInfo={description:`Figma "Card": a surface (20 px radius, outside border, Surface/Card) for related content and actions.`,methods:[],displayName:`Card`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'default' | 'sm'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'sm'`}]},description:`Figma Size.`,defaultValue:{value:`'default'`,computed:!1}},as:{required:!1,tsType:{name:`union`,raw:`'div' | 'article' | 'section' | 'li'`,elements:[{name:`literal`,value:`'div'`},{name:`literal`,value:`'article'`},{name:`literal`,value:`'section'`},{name:`literal`,value:`'li'`}]},description:"The element: `div` (default), or `article` / `section` when the card stands on its own.",defaultValue:{value:`'div'`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:`CardMedia, CardHeader, CardContent and CardFooter, in that order; each is optional.`}},composes:[`HTMLAttributes`]},l.__docgenInfo={description:`Figma "Media": a picture over the card's full width, above the header.`,methods:[],displayName:`CardMedia`,props:{ratio:{required:!1,tsType:{name:`number`},description:`Width ÷ height (Figma: 16 / 9).`},children:{required:!0,tsType:{name:`ReactNode`},description:"An `<img>` (with `alt`), `<video>` or `<svg>`; it covers the area."}},composes:[`HTMLAttributes`]},u.__docgenInfo={description:`Figma "header" slot: title, description and an action.`,methods:[],displayName:`CardHeader`,props:{title:{required:!0,tsType:{name:`ReactNode`},description:`Figma "Title" (16/24 medium).`},titleAs:{required:!1,tsType:{name:`union`,raw:`'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div'`,elements:[{name:`literal`,value:`'h2'`},{name:`literal`,value:`'h3'`},{name:`literal`,value:`'h4'`},{name:`literal`,value:`'h5'`},{name:`literal`,value:`'h6'`},{name:`literal`,value:`'p'`},{name:`literal`,value:`'div'`}]},description:"The title's element; `h3` by default, so set it to fit the page's headings.",defaultValue:{value:`'h3'`,computed:!1}},description:{required:!1,tsType:{name:`ReactNode`},description:`Figma "Description" (14/20 muted).`},icon:{required:!1,tsType:{name:`ReactNode`},description:`A leading icon or picture, e.g. a file icon.`},action:{required:!1,tsType:{name:`ReactNode`},description:`Figma "action": buttons at the end of the header.`}},composes:[`Omit`]},d.__docgenInfo={description:`Figma "content" slot: anything, along the card's sides.`,methods:[],displayName:`CardContent`},f.__docgenInfo={description:`Figma "footer" slot: actions, 8 px apart.`,methods:[],displayName:`CardFooter`,props:{justify:{required:!1,tsType:{name:`union`,raw:`'end' | 'start' | 'between'`,elements:[{name:`literal`,value:`'end'`},{name:`literal`,value:`'start'`},{name:`literal`,value:`'between'`}]},description:"Where the footer's items go: `end` (default, Figma), `start` or `between` (spread to both ends).",defaultValue:{value:`'end'`,computed:!1}},muted:{required:!1,tsType:{name:`boolean`},description:`The "With action" demo: the footer on a fill-1 band, e.g. for a total.`,defaultValue:{value:`false`,computed:!1}}},composes:[`HTMLAttributes`]}})))()}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{n(),i(),o(),h(),g=t(),_={title:`Components/Card`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Card** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=180-2)): `size` (`default` 20 px · `sm` 16 px) and its slots as parts: `CardMedia`, `CardHeader` (`title`, `description`, `icon`, `action`), `CardContent` and `CardFooter` (`justify`, `muted`). Every part is optional; content takes the space above or below when it starts or ends the card."}}}},v=(e,t=16)=>(0,g.jsx)(`svg`,{viewBox:`0 0 24 24`,width:t,height:t,fill:`none`,stroke:`currentColor`,strokeWidth:30/t,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),y={heart:v((0,g.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`})),zap:v((0,g.jsx)(`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`})),wifi:v((0,g.jsx)(`path`,{d:`M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.86a10 10 0 0 1 14 0M8.5 16.43a5 5 0 0 1 7 0`})),music:v((0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`path`,{d:`M9 18V5l12-2v13`}),(0,g.jsx)(`circle`,{cx:`6`,cy:`18`,r:`3`}),(0,g.jsx)(`circle`,{cx:`18`,cy:`16`,r:`3`})]})),chevronLeft:v((0,g.jsx)(`path`,{d:`m15 18-6-6 6-6`})),chevronRight:v((0,g.jsx)(`path`,{d:`m9 18 6-6-6-6`})),more:v((0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`circle`,{cx:`12`,cy:`5`,r:`1`}),(0,g.jsx)(`circle`,{cx:`12`,cy:`12`,r:`1`}),(0,g.jsx)(`circle`,{cx:`12`,cy:`19`,r:`1`})]})),trendingUp:v((0,g.jsx)(`path`,{d:`M22 7 13.5 15.5 8.5 10.5 2 17M16 7h6v6`}),12),trendingDown:v((0,g.jsx)(`path`,{d:`M22 17 13.5 8.5 8.5 13.5 2 7M16 17h6v-6`}),12)},b=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%209%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%239fb2c3%22%2F%3E%3Cstop%20offset%3D%22.55%22%20stop-color%3D%22%23e7c9a3%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23ffb347%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%2216%22%20height%3D%229%22%20fill%3D%22url(%23g)%22%2F%3E%3C%2Fsvg%3E`,x={color:`var(--ds-muted-foreground)`},S={args:{size:`default`,media:!1,title:`Card title`,description:`Card description`,muted:!1},argTypes:{size:{name:`Size`,control:`inline-radio`,options:[`default`,`sm`]},media:{name:`Media`},title:{name:`Title`},description:{name:`Description`},muted:{name:`Muted footer`}},render:({size:e,media:t,title:n,description:i,muted:a})=>(0,g.jsxs)(c,{size:e,style:{width:448},children:[t&&(0,g.jsx)(l,{children:(0,g.jsx)(`img`,{src:b,alt:``})}),(0,g.jsx)(u,{title:n,description:i,action:(0,g.jsx)(r,{variant:`outline`,size:`sm`,children:`Action`})}),(0,g.jsx)(d,{children:`Card content — put anything here: text, fields, lists, media`}),(0,g.jsxs)(f,{muted:a,children:[(0,g.jsx)(r,{variant:`outline`,children:`Cancel`}),(0,g.jsx)(r,{children:`Save`})]})]})},C={render:()=>(0,g.jsx)(`div`,{style:{display:`grid`,gap:32},children:[`default`,`sm`].map(e=>(0,g.jsxs)(c,{size:e,style:{width:448},children:[(0,g.jsx)(u,{title:`Card title`,description:`Card description`,action:(0,g.jsx)(r,{variant:`outline`,size:`sm`,children:`Action`})}),(0,g.jsx)(d,{children:`Card content — put anything here: text, fields, lists, media`}),(0,g.jsxs)(f,{children:[(0,g.jsx)(r,{variant:`outline`,children:`Cancel`}),(0,g.jsx)(r,{children:`Save`})]})]},e))})},w={render:()=>(0,g.jsxs)(c,{as:`section`,style:{width:384},"aria-label":`Sign in`,children:[(0,g.jsx)(u,{title:`Sign in to your account`,description:`Enter your email below to continue.`,action:(0,g.jsx)(r,{variant:`ghost`,size:`sm`,children:`Sign up`})}),(0,g.jsx)(d,{children:(0,g.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,g.jsx)(a,{label:`Email`,type:`email`,placeholder:`maya@example.com`}),(0,g.jsx)(a,{label:`Password`,type:`password`,defaultValue:`correct-horse`})]})}),(0,g.jsx)(f,{children:(0,g.jsxs)(`div`,{style:{display:`grid`,gap:8,width:`100%`},children:[(0,g.jsx)(r,{children:`Sign in`}),(0,g.jsx)(r,{variant:`outline`,children:`Continue with Google`})]})})]})},T={render:()=>(0,g.jsxs)(c,{as:`article`,style:{width:384},children:[(0,g.jsx)(l,{children:(0,g.jsx)(`img`,{src:b,alt:`Lake at dusk under an orange sky`})}),(0,g.jsx)(u,{title:`Lakeside cabin in Hallstatt`,description:`Entire cabin · 2 guests · 1 bedroom`,action:(0,g.jsx)(`span`,{children:`9.4/10`})}),(0,g.jsx)(d,{children:(0,g.jsx)(`p`,{style:{margin:0,...x},children:`A timber cabin on the shore of the lake with a wood stove, a private jetty and mountain views from the deck. The village is a ten-minute walk away.`})}),(0,g.jsxs)(f,{justify:`between`,children:[(0,g.jsxs)(`span`,{children:[(0,g.jsx)(`strong`,{style:{fontWeight:600},children:`$180`}),` `,(0,g.jsx)(`span`,{style:x,children:`night`})]}),(0,g.jsxs)(`span`,{style:{display:`flex`,gap:8},children:[(0,g.jsx)(r,{children:`Reserve`}),(0,g.jsx)(r,{variant:`outline`,icon:y.heart,"aria-label":`Save to wishlist`})]})]})]})},E=[{label:`Steps`,value:`8,432`,change:`+12%`,up:!0,foot:`Goal: 10,000 steps`},{label:`Calories`,value:`1,920`,change:`+4%`,up:!0,foot:`Burned today`},{label:`Sleep`,value:`7h 20m`,change:`−6%`,up:!1,foot:`Last night`}],D={render:()=>(0,g.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 192px)`,gap:12},children:E.map(e=>(0,g.jsxs)(c,{size:`sm`,children:[(0,g.jsx)(u,{titleAs:`p`,title:(0,g.jsx)(`span`,{style:{fontSize:14,lineHeight:`20px`,fontWeight:400,color:`var(--ds-muted-foreground)`},children:e.label}),action:(0,g.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:2,fontSize:12,lineHeight:`16px`,color:e.up?`var(--ds-foreground)`:`var(--ds-destructive-foreground)`},children:[e.up?y.trendingUp:y.trendingDown,e.change]}),children:(0,g.jsx)(`span`,{style:{fontSize:24,lineHeight:`32px`,fontWeight:600},children:e.value})}),(0,g.jsx)(f,{justify:`start`,children:(0,g.jsx)(`span`,{style:x,children:e.foot})})]},e.label))})},O=[{name:`Electricity`,due:`Due Sep 28`,amount:`$64.20`,icon:y.zap},{name:`Home internet`,due:`Due Oct 1`,amount:`$45.00`,icon:y.wifi},{name:`Music Premium`,due:`Due Oct 5`,amount:`$10.99`,icon:y.music}],k={render:()=>(0,g.jsxs)(c,{style:{width:448},children:[(0,g.jsx)(u,{title:`Upcoming bills`,description:`3 payments due in the next 14 days`,action:(0,g.jsx)(r,{variant:`outline`,size:`sm`,children:`Pay all`})}),(0,g.jsx)(d,{children:(0,g.jsx)(`ul`,{style:{display:`grid`,gap:16,margin:0,padding:0,listStyle:`none`},children:O.map(e=>(0,g.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,g.jsx)(`span`,{style:{display:`grid`,placeItems:`center`,width:36,height:36,borderRadius:10,background:`var(--ds-fill-2)`},children:e.icon}),(0,g.jsxs)(`span`,{style:{display:`grid`,flex:1},children:[(0,g.jsx)(`span`,{style:{fontWeight:500},children:e.name}),(0,g.jsx)(`span`,{style:x,children:e.due})]}),(0,g.jsx)(`span`,{style:{fontWeight:500},children:e.amount})]},e.name))})}),(0,g.jsxs)(f,{justify:`start`,muted:!0,children:[(0,g.jsx)(`span`,{style:x,children:`Total due`}),(0,g.jsx)(`strong`,{style:{fontWeight:600},children:`$120.19`})]})]})},A={render:()=>(0,g.jsxs)(c,{style:{width:448},children:[(0,g.jsx)(u,{title:`Email notifications`,description:`Choose what we send to your inbox.`}),(0,g.jsxs)(d,{style:{gap:16,paddingBottom:20},children:[(0,g.jsx)(s,{label:`Order updates`,caption:`Shipping and delivery status.`,defaultChecked:!0}),(0,g.jsx)(s,{label:`Price drops`,caption:`When items on your wishlist go on sale.`,defaultChecked:!0}),(0,g.jsx)(s,{label:`Weekly picks`,caption:`A short list of new arrivals we love.`})]})]})},j=[{date:`Oct 2`,name:`Northwind Studio`,amount:`+$1,200.00`,income:!0},{date:`Oct 1`,name:`Lumen Labs`,amount:`+$860.00`,income:!0},{date:`Sep 30`,name:`Cloud hosting`,amount:`$24.00`,income:!1},{date:`Sep 29`,name:`Paperleaf`,amount:`+$340.00`,income:!0}],M={render:()=>(0,g.jsxs)(c,{style:{width:448},children:[(0,g.jsx)(u,{title:`Payments`,description:`Received and paid in the last 30 days`,action:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{variant:`ghost`,size:`sm`,icon:y.chevronLeft,"aria-label":`Newer`,disabled:!0}),(0,g.jsx)(r,{variant:`ghost`,size:`sm`,icon:y.chevronRight,"aria-label":`Older`})]})}),(0,g.jsx)(d,{children:(0,g.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:8},children:j.map(e=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:12,padding:12,borderRadius:10,background:`var(--ds-fill-1)`},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,g.jsx)(`span`,{style:x,children:e.date}),(0,g.jsx)(r,{variant:`ghost`,size:`xs`,icon:y.more,"aria-label":`More for ${e.name}`})]}),(0,g.jsxs)(`div`,{style:{display:`grid`,gap:2},children:[(0,g.jsx)(`span`,{style:{fontWeight:500},children:e.name}),(0,g.jsx)(`span`,{style:{fontSize:16,lineHeight:`24px`,fontWeight:600,color:e.income?`var(--ds-palette-green-text)`:void 0},children:e.amount})]})]},e.name))})}),(0,g.jsx)(f,{children:(0,g.jsx)(r,{variant:`secondary`,style:{width:`100%`},children:`See all payments`})})]})},N={parameters:{layout:`fullscreen`},render:()=>(0,g.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,g.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:24,justifyItems:`start`},children:(0,g.jsxs)(c,{style:{width:360},children:[(0,g.jsx)(l,{children:(0,g.jsx)(`img`,{src:b,alt:``})}),(0,g.jsx)(u,{title:e===`light`?`Light`:`Dark`,description:`Card description`,action:(0,g.jsx)(r,{variant:`outline`,size:`sm`,children:`Action`})}),(0,g.jsx)(d,{children:`Card content — put anything here.`}),(0,g.jsxs)(f,{muted:!0,children:[(0,g.jsx)(r,{variant:`outline`,children:`Cancel`}),(0,g.jsx)(r,{children:`Save`})]})]})},e))})},P=[`Playground`,`Sizes`,`SignIn`,`WithImage`,`Stats`,`WithAction`,`Settings`,`PaymentsGrid`,`Themes`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'default',
    media: false,
    title: 'Card title',
    description: 'Card description',
    muted: false
  },
  argTypes: {
    size: {
      name: 'Size',
      control: 'inline-radio',
      options: ['default', 'sm']
    },
    media: {
      name: 'Media'
    },
    title: {
      name: 'Title'
    },
    description: {
      name: 'Description'
    },
    muted: {
      name: 'Muted footer'
    }
  },
  render: ({
    size,
    media,
    title,
    description,
    muted: mutedFooter
  }) => <Card size={size} style={{
    width: 448
  }}>
      {media && <CardMedia>
          <img src={dusk} alt="" />
        </CardMedia>}
      <CardHeader title={title} description={description} action={<Button variant="outline" size="sm">Action</Button>} />
      <CardContent>Card content — put anything here: text, fields, lists, media</CardContent>
      <CardFooter muted={mutedFooter}>
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 32
  }}>
      {(['default', 'sm'] as const).map(size => <Card key={size} size={size} style={{
      width: 448
    }}>
          <CardHeader title="Card title" description="Card description" action={<Button variant="outline" size="sm">Action</Button>} />
          <CardContent>Card content — put anything here: text, fields, lists, media</CardContent>
          <CardFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>)}
    </div>
}`,...C.parameters?.docs?.source},description:{story:`Figma "Card": Size default and sm.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Card as="section" style={{
    width: 384
  }} aria-label="Sign in">
      <CardHeader title="Sign in to your account" description="Enter your email below to continue." action={<Button variant="ghost" size="sm">Sign up</Button>} />
      <CardContent>
        <div style={{
        display: 'grid',
        gap: 16
      }}>
          <Input label="Email" type="email" placeholder="maya@example.com" />
          <Input label="Password" type="password" defaultValue="correct-horse" />
        </div>
      </CardContent>
      <CardFooter>
        <div style={{
        display: 'grid',
        gap: 8,
        width: '100%'
      }}>
          <Button>Sign in</Button>
          <Button variant="outline">Continue with Google</Button>
        </div>
      </CardFooter>
    </Card>
}`,...w.parameters?.docs?.source},description:{story:`Figma demo "Card": a sign-in form.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Card as="article" style={{
    width: 384
  }}>
      <CardMedia>
        <img src={dusk} alt="Lake at dusk under an orange sky" />
      </CardMedia>
      <CardHeader title="Lakeside cabin in Hallstatt" description="Entire cabin · 2 guests · 1 bedroom" action={<span>9.4/10</span>} />
      <CardContent>
        <p style={{
        margin: 0,
        ...muted
      }}>A timber cabin on the shore of the lake with a wood stove, a private jetty and mountain views from the deck. The village is a ten-minute walk away.</p>
      </CardContent>
      <CardFooter justify="between">
        <span>
          <strong style={{
          fontWeight: 600
        }}>$180</strong> <span style={muted}>night</span>
        </span>
        <span style={{
        display: 'flex',
        gap: 8
      }}>
          <Button>Reserve</Button>
          <Button variant="outline" icon={icons.heart} aria-label="Save to wishlist" />
        </span>
      </CardFooter>
    </Card>
}`,...T.parameters?.docs?.source},description:{story:`Figma demo "With image": media over the header; the footer spreads price and actions.`,...T.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 192px)',
    gap: 12
  }}>
      {stats.map(s => <Card key={s.label} size="sm">
          <CardHeader titleAs="p" title={<span style={{
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 400,
        color: 'var(--ds-muted-foreground)'
      }}>{s.label}</span>} action={<span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 2,
        fontSize: 12,
        lineHeight: '16px',
        color: s.up ? 'var(--ds-foreground)' : 'var(--ds-destructive-foreground)'
      }}>
                {s.up ? icons.trendingUp : icons.trendingDown}
                {s.change}
              </span>}>
            <span style={{
          fontSize: 24,
          lineHeight: '32px',
          fontWeight: 600
        }}>{s.value}</span>
          </CardHeader>
          <CardFooter justify="start">
            <span style={muted}>{s.foot}</span>
          </CardFooter>
        </Card>)}
    </div>
}`,...D.parameters?.docs?.source},description:{story:`Figma demo "Stats": small cards with a value and a trend.`,...D.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 448
  }}>
      <CardHeader title="Upcoming bills" description="3 payments due in the next 14 days" action={<Button variant="outline" size="sm">Pay all</Button>} />
      <CardContent>
        <ul style={{
        display: 'grid',
        gap: 16,
        margin: 0,
        padding: 0,
        listStyle: 'none'
      }}>
          {bills.map(b => <li key={b.name} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
              <span style={{
            display: 'grid',
            placeItems: 'center',
            width: 36,
            height: 36,
            borderRadius: 10,
            background: 'var(--ds-fill-2)'
          }}>{b.icon}</span>
              <span style={{
            display: 'grid',
            flex: 1
          }}>
                <span style={{
              fontWeight: 500
            }}>{b.name}</span>
                <span style={muted}>{b.due}</span>
              </span>
              <span style={{
            fontWeight: 500
          }}>{b.amount}</span>
            </li>)}
        </ul>
      </CardContent>
      <CardFooter justify="start" muted>
        <span style={muted}>Total due</span>
        <strong style={{
        fontWeight: 600
      }}>$120.19</strong>
      </CardFooter>
    </Card>
}`,...k.parameters?.docs?.source},description:{story:`Figma demo "With action": an action in the header and a muted footer with the total.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 448
  }}>
      <CardHeader title="Email notifications" description="Choose what we send to your inbox." />
      <CardContent style={{
      gap: 16,
      paddingBottom: 20
    }}>
        <Switch label="Order updates" caption="Shipping and delivery status." defaultChecked />
        <Switch label="Price drops" caption="When items on your wishlist go on sale." defaultChecked />
        <Switch label="Weekly picks" caption="A short list of new arrivals we love." />
      </CardContent>
    </Card>
}`,...A.parameters?.docs?.source},description:{story:`Figma demo "Settings": switches as the content.`,...A.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 448
  }}>
      <CardHeader title="Payments" description="Received and paid in the last 30 days" action={<>
            <Button variant="ghost" size="sm" icon={icons.chevronLeft} aria-label="Newer" disabled />
            <Button variant="ghost" size="sm" icon={icons.chevronRight} aria-label="Older" />
          </>} />
      <CardContent>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 8
      }}>
          {payments.map(p => <div key={p.name} style={{
          display: 'grid',
          gap: 12,
          padding: 12,
          borderRadius: 10,
          background: 'var(--ds-fill-1)'
        }}>
              <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
                <span style={muted}>{p.date}</span>
                <Button variant="ghost" size="xs" icon={icons.more} aria-label={\`More for \${p.name}\`} />
              </div>
              <div style={{
            display: 'grid',
            gap: 2
          }}>
                <span style={{
              fontWeight: 500
            }}>{p.name}</span>
                <span style={{
              fontSize: 16,
              lineHeight: '24px',
              fontWeight: 600,
              color: p.income ? 'var(--ds-palette-green-text)' : undefined
            }}>{p.amount}</span>
              </div>
            </div>)}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" style={{
        width: '100%'
      }}>
          See all payments
        </Button>
      </CardFooter>
    </Card>
}`,...M.parameters?.docs?.source},description:{story:`Figma demo "Payments grid": tiles on fill-1 in the content, paging in the header, a full-width footer button.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
      gap: 24,
      justifyItems: 'start'
    }}>
          <Card style={{
        width: 360
      }}>
            <CardMedia>
              <img src={dusk} alt="" />
            </CardMedia>
            <CardHeader title={scheme === 'light' ? 'Light' : 'Dark'} description="Card description" action={<Button variant="outline" size="sm">Action</Button>} />
            <CardContent>Card content — put anything here.</CardContent>
            <CardFooter muted>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </div>)}
    </div>
}`,...N.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...N.parameters?.docs?.description}}}})))()}F();export{M as PaymentsGrid,S as Playground,A as Settings,w as SignIn,C as Sizes,D as Stats,N as Themes,k as WithAction,T as WithImage,P as __namedExportsOrder,_ as default};