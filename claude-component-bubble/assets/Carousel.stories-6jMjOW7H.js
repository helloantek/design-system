import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BVO6iHHJ.js";import{n as r,t as i}from"./Button-BI8GECPB.js";import{Ct as a,F as o,Ot as s,Q as c,St as l,a as u,gt as d,j as f,kt as p,l as m,ot as h,u as g,y as _}from"./react-CDCQ_rig.js";import{n as v,t as y}from"./Avatar-B6_AG_qH.js";import{i as b,n as x,o as ee,t as te}from"./Card-C33HLUlk.js";import{n as S,r as C,t as w}from"./Carousel-B5BH8gtv.js";function T(e,t,n){let r=L(n)?`black`:`white`;return(0,D.jsxs)(S,{style:{display:`flex`,flexDirection:`column`,gap:4,minHeight:192,padding:20,borderRadius:20,background:I[n]},children:[(0,D.jsx)(`p`,{style:{...k,fontSize:14,lineHeight:`20px`,fontWeight:500,color:`var(--ds-alpha-${r}-90)`},children:e}),(0,D.jsx)(`p`,{style:{...k,fontSize:12,lineHeight:`16px`,color:`var(--ds-alpha-${r}-70)`},children:t})]},e)}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{E=n(),h(),v(),r(),ee(),C(),D=t(),O={title:`Components/Carousel`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 **Carousel** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=329-2)): slides shown one at a time (or `perView`), moved with Previous / Next, `indicators`, the arrow keys on the focused viewport or a swipe. `orientation` (`horizontal` · `vertical`, with `slideSize`), `gap`, `controls` (`outside` · `overlay` · `none` to drive it with `index` / `onIndexChange` from elsewhere). A region with `aria-roledescription="carousel"`; each slide is a group named "n of total", and slides out of view leave the Tab order.'}}}},k={fontFamily:`var(--ds-font-sans)`,letterSpacing:`-0.005em`,margin:0},A=e=>({width:`min(${e}px, calc(100vw - 32px))`}),j=(e,t)=>(0,D.jsxs)(S,{style:{display:`flex`,flexDirection:`column`,justifyContent:`flex-end`,gap:4,minHeight:192,padding:20,borderRadius:16,background:`var(--ds-fill-2)`},children:[(0,D.jsx)(`p`,{style:{...k,fontSize:14,lineHeight:`20px`,fontWeight:500,color:`var(--ds-foreground)`},children:e}),(0,D.jsx)(`p`,{style:{...k,fontSize:12,lineHeight:`16px`,color:`var(--ds-muted-foreground)`},children:t})]},e),M=[[`Token inspector`,`6 participants`],[`Release checklist`,`5 participants`],[`Adoption dashboard`,`8 participants`]],N={args:{orientation:`horizontal`,perView:1,indicators:!1,controls:`outside`},argTypes:{orientation:{name:`Orientation`,control:`inline-radio`,options:[`horizontal`,`vertical`]},perView:{name:`Slides in view`,control:{type:`range`,min:1,max:2}},indicators:{name:`Indicators`,control:`boolean`},controls:{name:`Controls`,control:`inline-radio`,options:[`outside`,`overlay`,`none`]}},render:({orientation:e,perView:t,indicators:n,controls:r})=>(0,D.jsx)(`div`,{style:A(448),children:(0,D.jsx)(w,{"aria-label":`Projects`,orientation:e,perView:t,indicators:n,controls:r,slideSize:e===`vertical`?200:void 0,children:r===`overlay`?M.map(([e,t],n)=>T(e,t,n)):M.map(([e,t])=>j(e,t))})})},P=[{name:`Lisbon`,meta:`Portugal · 248 stays`,hue:`orange`,icon:(0,D.jsx)(f,{size:32})},{name:`Kyoto`,meta:`Japan · 186 stays`,hue:`fuchsia`,icon:(0,D.jsx)(o,{size:32})},{name:`Cape Town`,meta:`South Africa · 132 stays`,hue:`cyan`,icon:(0,D.jsx)(l,{size:32})}],F={render:()=>(0,D.jsx)(`div`,{style:A(448),children:(0,D.jsx)(w,{"aria-label":`Destinations`,children:P.map(e=>(0,D.jsxs)(S,{style:{display:`flex`,flexDirection:`column`,justifyContent:`space-between`,minHeight:192,padding:20,borderRadius:16,background:`var(--ds-palette-${e.hue}-tint)`,color:`var(--ds-palette-${e.hue}-text)`},children:[(0,D.jsx)(`span`,{style:{display:`flex`,color:`var(--ds-palette-${e.hue}-solid)`},"aria-hidden":!0,children:e.icon}),(0,D.jsxs)(`div`,{style:{display:`grid`,gap:4},children:[(0,D.jsx)(`h3`,{style:{...k,fontSize:20,lineHeight:`28px`,fontWeight:600},children:e.name}),(0,D.jsx)(`p`,{style:{...k,fontSize:14,lineHeight:`20px`},children:e.meta})]})]},e.name))})})},I=[`radial-gradient(120% 90% at 30% 40%, #8a8a8a, #1f1f1f 70%)`,`radial-gradient(100% 80% at 70% 30%, #ffffff, #d4d4d4 75%)`,`linear-gradient(135deg, #1c1c1c, #050505)`,`radial-gradient(90% 90% at 50% 60%, #f5f5f5, #c8c8c8 70%)`],L=e=>e%2==1,R={pointerEvents:`auto`},z={render:()=>(0,D.jsxs)(`div`,{style:{...A(384),position:`relative`,borderRadius:20,overflow:`hidden`},children:[(0,D.jsx)(w,{"aria-label":`Photos`,controls:`overlay`,indicators:!0,gap:0,children:I.map((e,t)=>(0,D.jsx)(S,{role:`img`,"aria-label":`Photo ${t+1}`,style:{height:256,background:e},children:(0,D.jsx)(`div`,{style:{height:`100%`,background:`linear-gradient(180deg, rgb(0 0 0 / 0.3), transparent 25%, transparent 75%, rgb(0 0 0 / 0.3))`}})},t))}),(0,D.jsxs)(`div`,{style:{position:`absolute`,top:12,left:12,right:12,display:`flex`,justifyContent:`space-between`,pointerEvents:`none`},children:[(0,D.jsx)(`button`,{type:`button`,className:`ds-carousel__control`,"aria-label":`Download`,style:R,children:(0,D.jsx)(a,{"aria-hidden":!0})}),(0,D.jsx)(`button`,{type:`button`,className:`ds-carousel__control`,"aria-label":`More`,style:R,children:(0,D.jsx)(c,{"aria-hidden":!0})})]})]})},B=e=>`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="768" height="512">${e}</svg>`)}`,V=[{alt:`Night sky over a dark hill`,src:B(`<rect width="768" height="512" fill="#0f172a"/><circle cx="560" cy="120" r="48" fill="#e2e8f0"/><path d="M0 420 Q 300 300 768 400 V512 H0Z" fill="#020617"/>`)},{alt:`Snowy field under a pale sky`,src:B(`<rect width="768" height="512" fill="#f1f5f9"/><path d="M0 330 Q 380 260 768 340 V512 H0Z" fill="#ffffff"/><circle cx="180" cy="110" r="40" fill="#fde68a"/>`)},{alt:`Dusk: a bright sky over a dark shore`,src:B(`<rect width="768" height="300" fill="#fed7aa"/><rect y="300" width="768" height="212" fill="#1c1917"/>`)},{alt:`Fog over grey rocks`,src:B(`<rect width="768" height="512" fill="#9ca3af"/><path d="M0 380 Q 260 320 768 390 V512 H0Z" fill="#6b7280"/>`)}],H={render:()=>(0,D.jsx)(`div`,{style:{...A(384),borderRadius:20,overflow:`hidden`},children:(0,D.jsx)(w,{"aria-label":`Pictures`,controls:`overlay`,indicators:!0,gap:0,children:V.map(e=>(0,D.jsx)(S,{children:(0,D.jsx)(`img`,{src:e.src,alt:e.alt,style:{display:`block`,width:`100%`,height:256,objectFit:`cover`}})},e.alt))})})},U=[{title:`Blue Hour`,artist:`Nora Vale`,hue:`blue`},{title:`Paper Lanterns`,artist:`The Kites`,hue:`orange`},{title:`Slow Tide`,artist:`Mika Sol`,hue:`green`},{title:`Night Drive`,artist:`Aurel`,hue:`fuchsia`},{title:`Lowlight`,artist:`Juniper Lane`,hue:`cyan`}],W={render:()=>(0,D.jsx)(`div`,{style:A(448),children:(0,D.jsx)(w,{"aria-label":`New albums`,perView:3,gap:8,children:U.map(e=>(0,D.jsxs)(S,{style:{display:`grid`,gap:8},children:[(0,D.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,aspectRatio:`1`,borderRadius:12,background:`var(--ds-palette-${e.hue}-tint)`,color:`var(--ds-palette-${e.hue}-solid)`},"aria-hidden":!0,children:(0,D.jsx)(s,{size:32})}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`p`,{style:{...k,fontSize:14,lineHeight:`20px`,fontWeight:500,color:`var(--ds-foreground)`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e.title}),(0,D.jsx)(`p`,{style:{...k,fontSize:12,lineHeight:`16px`,color:`var(--ds-muted-foreground)`},children:e.artist})]})]},e.title))})})},G=[{day:`4`,title:`Sunset yoga in the park`,meta:`Sat · 7:00 PM · Parque Eduardo VII`},{day:`9`,title:`Food market night`,meta:`Thu · 6:30 PM · Time Out Market`},{day:`12`,title:`River cruise at dusk`,meta:`Sun · 5:45 PM · Cais do Sodré`},{day:`18`,title:`Fado evening`,meta:`Sat · 9:00 PM · Alfama`}],K={render:()=>(0,D.jsx)(`div`,{style:A(448),children:(0,D.jsx)(w,{"aria-label":`Upcoming events`,orientation:`vertical`,perView:2,gap:8,slideSize:88,children:G.map(e=>(0,D.jsxs)(S,{style:{display:`flex`,alignItems:`center`,gap:16,padding:12,borderRadius:16,background:`var(--ds-muted)`},children:[(0,D.jsxs)(`div`,{style:{display:`grid`,placeItems:`center`,alignContent:`center`,flex:`none`,width:64,height:64,borderRadius:10,background:`var(--ds-background)`},children:[(0,D.jsx)(`span`,{style:{...k,fontSize:12,lineHeight:`16px`,fontWeight:500,color:`var(--ds-muted-foreground)`},children:`OCT`}),(0,D.jsx)(`span`,{style:{...k,fontSize:16,lineHeight:`24px`,fontWeight:600,color:`var(--ds-foreground)`},children:e.day})]}),(0,D.jsxs)(`div`,{style:{display:`grid`,gap:2,minWidth:0},children:[(0,D.jsx)(`p`,{style:{...k,fontSize:14,lineHeight:`20px`,fontWeight:500,color:`var(--ds-foreground)`},children:e.title}),(0,D.jsx)(`p`,{style:{...k,fontSize:14,lineHeight:`20px`,color:`var(--ds-muted-foreground)`},children:e.meta})]})]},e.title))})})},q=[{title:`Find stays you will love`,body:`Save favorites and compare prices in one place.`,hue:`blue`,icon:(0,D.jsx)(_,{size:32})},{title:`Get price alerts`,body:`We will tell you the moment a fare drops.`,hue:`green`,icon:(0,D.jsx)(p,{size:32})},{title:`Travel with friends`,body:`Share trips and split costs in a tap.`,hue:`fuchsia`,icon:(0,D.jsx)(u,{size:32})}],J={render:()=>(0,D.jsx)(`div`,{style:A(448),children:(0,D.jsx)(w,{"aria-label":`Getting started`,indicators:!0,children:q.map(e=>(0,D.jsxs)(S,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:12,minHeight:192,padding:24,borderRadius:16,textAlign:`center`,background:`var(--ds-palette-${e.hue}-tint)`,color:`var(--ds-palette-${e.hue}-text)`},children:[(0,D.jsx)(`span`,{style:{display:`flex`,color:`var(--ds-palette-${e.hue}-solid)`},"aria-hidden":!0,children:e.icon}),(0,D.jsxs)(`div`,{style:{display:`grid`,gap:4},children:[(0,D.jsx)(`h3`,{style:{...k,fontSize:16,lineHeight:`24px`,fontWeight:600},children:e.title}),(0,D.jsx)(`p`,{style:{...k,fontSize:14,lineHeight:`20px`},children:e.body})]})]},e.title))})})},Y=[{text:`The terrace at sunset was unreal, and the hosts left us a list of their favorite spots nearby.`,name:`Maya C.`,when:`Stayed in September`},{text:`Spotless, quiet and a five minute walk to the tram. We would book it again in a heartbeat.`,name:`Leo P.`,when:`Stayed in August`},{text:`Beautiful light in every room and the comfiest bed we have slept in all year.`,name:`Ana R.`,when:`Stayed in July`}],X={render:function(){let[e,t]=(0,E.useState)(0);return(0,D.jsxs)(te,{size:`sm`,style:A(384),children:[(0,D.jsx)(b,{title:`What guests say`,description:`4.9 average from 128 reviews`,action:(0,D.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,D.jsx)(i,{variant:`outline`,size:`sm`,icon:(0,D.jsx)(g,{}),"aria-label":`Previous review`,disabled:e===0,onClick:()=>t(e-1)}),(0,D.jsx)(i,{variant:`outline`,size:`sm`,icon:(0,D.jsx)(d,{}),"aria-label":`Next review`,disabled:e===Y.length-1,onClick:()=>t(e+1)})]})}),(0,D.jsx)(x,{style:{padding:`0 8px 8px`},children:(0,D.jsx)(w,{"aria-label":`Reviews`,controls:`none`,index:e,onIndexChange:t,children:Y.map(e=>(0,D.jsxs)(S,{style:{display:`flex`,flexDirection:`column`,justifyContent:`space-between`,gap:16,minHeight:192,padding:20,borderRadius:12,background:`var(--ds-fill-1)`},children:[(0,D.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,D.jsx)(`span`,{style:{display:`flex`,gap:2,color:`var(--ds-palette-orange-solid)`},role:`img`,"aria-label":`5 out of 5 stars`,children:Array.from({length:5},(e,t)=>(0,D.jsx)(m,{size:17,"aria-hidden":!0},t))}),(0,D.jsx)(`p`,{style:{...k,fontSize:14,lineHeight:`20px`,color:`var(--ds-foreground)`},children:e.text})]}),(0,D.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`},children:[(0,D.jsx)(y,{size:`sm`,initials:e.name[0]}),(0,D.jsx)(`span`,{style:{fontWeight:500,color:`var(--ds-foreground)`},children:e.name}),(0,D.jsx)(`span`,{style:{color:`var(--ds-muted-foreground)`},children:e.when})]})]},e.name))})})]})}},Z={parameters:{layout:`fullscreen`},render:()=>(0,D.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`},children:[`light`,`dark`].map(e=>(0,D.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:32},children:[(0,D.jsx)(w,{"aria-label":`Projects (${e})`,indicators:!0,defaultIndex:1,children:M.map(([e,t])=>j(e,t))}),(0,D.jsx)(w,{"aria-label":`Photos (${e})`,controls:`overlay`,indicators:!0,defaultIndex:1,children:M.map(([e,t],n)=>T(e,t,n))})]},e))})},Q=[`Playground`,`Demo`,`ImageCarousel`,`AdaptiveControls`,`MultipleItems`,`Vertical`,`WithIndicators`,`InACard`,`Themes`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    perView: 1,
    indicators: false,
    controls: 'outside'
  },
  argTypes: {
    orientation: {
      name: 'Orientation',
      control: 'inline-radio',
      options: ['horizontal', 'vertical']
    },
    perView: {
      name: 'Slides in view',
      control: {
        type: 'range',
        min: 1,
        max: 2
      }
    },
    indicators: {
      name: 'Indicators',
      control: 'boolean'
    },
    controls: {
      name: 'Controls',
      control: 'inline-radio',
      options: ['outside', 'overlay', 'none']
    }
  },
  // Overlay controls cover the bottom of the slides, so with them the slides are photos with the text at the top.
  render: ({
    orientation,
    perView,
    indicators,
    controls
  }) => <div style={width(448)}>
      <Carousel aria-label="Projects" orientation={orientation} perView={perView} indicators={indicators} controls={controls} slideSize={orientation === 'vertical' ? 200 : undefined}>
        {controls === 'overlay' ? samples.map(([t, m], i) => photoSlide(t, m, i)) : samples.map(([t, m]) => sampleSlide(t, m))}
      </Carousel>
    </div>
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={width(448)}>
      <Carousel aria-label="Destinations">
        {cities.map(c => <CarouselSlide key={c.name} style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 192,
        padding: 20,
        borderRadius: 16,
        background: \`var(--ds-palette-\${c.hue}-tint)\`,
        color: \`var(--ds-palette-\${c.hue}-text)\`
      }}>
            <span style={{
          display: 'flex',
          color: \`var(--ds-palette-\${c.hue}-solid)\`
        }} aria-hidden>
              {c.icon}
            </span>
            <div style={{
          display: 'grid',
          gap: 4
        }}>
              <h3 style={{
            ...text,
            fontSize: 20,
            lineHeight: '28px',
            fontWeight: 600
          }}>{c.name}</h3>
              <p style={{
            ...text,
            fontSize: 14,
            lineHeight: '20px'
          }}>{c.meta}</p>
            </div>
          </CarouselSlide>)}
      </Carousel>
    </div>
}`,...F.parameters?.docs?.source},description:{story:`Figma demo "Carousel": one destination at a time between Previous and Next.`,...F.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...width(384),
    position: 'relative',
    borderRadius: 20,
    overflow: 'hidden'
  }}>
      <Carousel aria-label="Photos" controls="overlay" indicators gap={0}>
        {photos.map((background, i) => <CarouselSlide key={i} role="img" aria-label={\`Photo \${i + 1}\`} style={{
        height: 256,
        background
      }}>
            <div style={{
          height: '100%',
          background: 'linear-gradient(180deg, rgb(0 0 0 / 0.3), transparent 25%, transparent 75%, rgb(0 0 0 / 0.3))'
        }} />
          </CarouselSlide>)}
      </Carousel>
      <div style={{
      position: 'absolute',
      top: 12,
      left: 12,
      right: 12,
      display: 'flex',
      justifyContent: 'space-between',
      pointerEvents: 'none'
    }}>
        <button type="button" className="ds-carousel__control" aria-label="Download" style={roundButton}>
          <RiDownloadLine aria-hidden />
        </button>
        <button type="button" className="ds-carousel__control" aria-label="More" style={roundButton}>
          <RiMore2Fill aria-hidden />
        </button>
      </div>
    </div>
}`,...z.parameters?.docs?.source},description:{story:`Figma demo "Image Carousel": photos with the controls and a dot pill over them, and actions at the top.`,...z.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...width(384),
    borderRadius: 20,
    overflow: 'hidden'
  }}>
      <Carousel aria-label="Pictures" controls="overlay" indicators gap={0}>
        {pictures.map(p => <CarouselSlide key={p.alt}>
            <img src={p.src} alt={p.alt} style={{
          display: 'block',
          width: '100%',
          height: 256,
          objectFit: 'cover'
        }} />
          </CarouselSlide>)}
      </Carousel>
    </div>
}`,...H.parameters?.docs?.source},description:{story:`Overlay controls that adapt: each button and the dot pill read what lies under them (here the pixels of an <img>): white with a black arrow on near-black pictures, dark with a white arrow on grey and light ones.`,...H.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div style={width(448)}>
      <Carousel aria-label="New albums" perView={3} gap={8}>
        {albums.map(a => <CarouselSlide key={a.title} style={{
        display: 'grid',
        gap: 8
      }}>
            <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          aspectRatio: '1',
          borderRadius: 12,
          background: \`var(--ds-palette-\${a.hue}-tint)\`,
          color: \`var(--ds-palette-\${a.hue}-solid)\`
        }} aria-hidden>
              <RiDiscLine size={32} />
            </div>
            <div>
              <p style={{
            ...text,
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: 500,
            color: 'var(--ds-foreground)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>{a.title}</p>
              <p style={{
            ...text,
            fontSize: 12,
            lineHeight: '16px',
            color: 'var(--ds-muted-foreground)'
          }}>{a.artist}</p>
            </div>
          </CarouselSlide>)}
      </Carousel>
    </div>
}`,...W.parameters?.docs?.source},description:{story:`Figma demo "Multiple items": three albums in view, stepping one at a time.`,...W.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div style={width(448)}>
      <Carousel aria-label="Upcoming events" orientation="vertical" perView={2} gap={8} slideSize={88}>
        {events.map(e => <CarouselSlide key={e.title} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: 12,
        borderRadius: 16,
        background: 'var(--ds-muted)'
      }}>
            <div style={{
          display: 'grid',
          placeItems: 'center',
          alignContent: 'center',
          flex: 'none',
          width: 64,
          height: 64,
          borderRadius: 10,
          background: 'var(--ds-background)'
        }}>
              <span style={{
            ...text,
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 500,
            color: 'var(--ds-muted-foreground)'
          }}>OCT</span>
              <span style={{
            ...text,
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 600,
            color: 'var(--ds-foreground)'
          }}>{e.day}</span>
            </div>
            <div style={{
          display: 'grid',
          gap: 2,
          minWidth: 0
        }}>
              <p style={{
            ...text,
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: 500,
            color: 'var(--ds-foreground)'
          }}>{e.title}</p>
              <p style={{
            ...text,
            fontSize: 14,
            lineHeight: '20px',
            color: 'var(--ds-muted-foreground)'
          }}>{e.meta}</p>
            </div>
          </CarouselSlide>)}
      </Carousel>
    </div>
}`,...K.parameters?.docs?.source},description:{story:`Figma demo "Vertical": two events in view, moving up and down.`,...K.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div style={width(448)}>
      <Carousel aria-label="Getting started" indicators>
        {steps.map(s => <CarouselSlide key={s.title} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        minHeight: 192,
        padding: 24,
        borderRadius: 16,
        textAlign: 'center',
        background: \`var(--ds-palette-\${s.hue}-tint)\`,
        color: \`var(--ds-palette-\${s.hue}-text)\`
      }}>
            <span style={{
          display: 'flex',
          color: \`var(--ds-palette-\${s.hue}-solid)\`
        }} aria-hidden>
              {s.icon}
            </span>
            <div style={{
          display: 'grid',
          gap: 4
        }}>
              <h3 style={{
            ...text,
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 600
          }}>{s.title}</h3>
              <p style={{
            ...text,
            fontSize: 14,
            lineHeight: '20px'
          }}>{s.body}</p>
            </div>
          </CarouselSlide>)}
      </Carousel>
    </div>
}`,...J.parameters?.docs?.source},description:{story:`Figma demo "With indicators": onboarding steps with dots under them.`,...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [index, setIndex] = useState(0);
    return <Card size="sm" style={width(384)}>
        <CardHeader title="What guests say" description="4.9 average from 128 reviews" action={<div style={{
        display: 'flex',
        gap: 8
      }}>
              <Button variant="outline" size="sm" icon={<RiArrowLeftSLine />} aria-label="Previous review" disabled={index === 0} onClick={() => setIndex(index - 1)} />
              <Button variant="outline" size="sm" icon={<RiArrowRightSLine />} aria-label="Next review" disabled={index === reviews.length - 1} onClick={() => setIndex(index + 1)} />
            </div>} />
        <CardContent style={{
        padding: '0 8px 8px'
      }}>
          <Carousel aria-label="Reviews" controls="none" index={index} onIndexChange={setIndex}>
            {reviews.map(r => <CarouselSlide key={r.name} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 16,
            minHeight: 192,
            padding: 20,
            borderRadius: 12,
            background: 'var(--ds-fill-1)'
          }}>
                <div style={{
              display: 'grid',
              gap: 12
            }}>
                  <span style={{
                display: 'flex',
                gap: 2,
                color: 'var(--ds-palette-orange-solid)'
              }} role="img" aria-label="5 out of 5 stars">
                    {Array.from({
                  length: 5
                }, (_, i) => <RiStarFill key={i} size={17} aria-hidden />)}
                  </span>
                  <p style={{
                ...text,
                fontSize: 14,
                lineHeight: '20px',
                color: 'var(--ds-foreground)'
              }}>{r.text}</p>
                </div>
                <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--ds-font-sans)',
              fontSize: 14,
              lineHeight: '20px'
            }}>
                  <Avatar size="sm" initials={r.name[0]} />
                  <span style={{
                fontWeight: 500,
                color: 'var(--ds-foreground)'
              }}>{r.name}</span>
                  <span style={{
                color: 'var(--ds-muted-foreground)'
              }}>{r.when}</span>
                </div>
              </CarouselSlide>)}
          </Carousel>
        </CardContent>
      </Card>;
  }
}`,...X.parameters?.docs?.source},description:{story:'Figma demo "In a card": reviews with Previous and Next in the card header (`controls="none"`, driven by `index`).',...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24,
      display: 'grid',
      gap: 32
    }}>
          <Carousel aria-label={\`Projects (\${scheme})\`} indicators defaultIndex={1}>
            {samples.map(([t, m]) => sampleSlide(t, m))}
          </Carousel>
          <Carousel aria-label={\`Photos (\${scheme})\`} controls="overlay" indicators defaultIndex={1}>
            {samples.map(([t, m], i) => photoSlide(t, m, i))}
          </Carousel>
        </div>)}
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...Z.parameters?.docs?.description}}}})))()}$();export{H as AdaptiveControls,F as Demo,z as ImageCarousel,X as InACard,W as MultipleItems,N as Playground,Z as Themes,K as Vertical,J as WithIndicators,Q as __namedExportsOrder,O as default};