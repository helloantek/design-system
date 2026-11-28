import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BHjVqdnj.js";import{n as r,t as i}from"./Badge-ouoh3aRI.js";import{n as a,t as o}from"./Button-CAZ0LyPn.js";import{n as s,t as c}from"./Select-2uVnv5HI.js";import{n as l,t as u}from"./Pagination-6X1UWncw.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{d=n(),r(),a(),s(),l(),f=t(),p={title:`Components/Pagination`,parameters:{layout:`centered`,docs:{description:{component:'Implements the Sort UI 2.0 **Pagination** and **Pagination Ellipsis** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=251-3)): Previous and Next (Ghost Buttons with a chevron), 32 px page links (Ghost; the current page Outline with `aria-current="page"`) and ellipses, 4 px apart. `page` / `pageCount` / `onPageChange`, `getHref` (links instead of buttons), `siblingCount` and `boundaryCount` (which pages show around the gaps), `iconsOnly` and `showFirstLast` ("Icons only" demo), `labels` for other languages. Previous / Next are disabled on the first / last page. The "Previous and next" and "Rows per page" demos are layouts built from Button and Select.'}}}},m={fontFamily:`var(--ds-font-sans)`,fontSize:14,lineHeight:`20px`,letterSpacing:`-0.005em`,margin:0},h=e=>(0,f.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:1.25,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),g=h((0,f.jsx)(`path`,{d:`m10 12-4-4 4-4`})),_=h((0,f.jsx)(`path`,{d:`m6 12 4-4-4-4`})),v={args:{pageCount:12,siblingCount:1,boundaryCount:1,iconsOnly:!1,showFirstLast:!1},render:function(e){let[t,n]=(0,d.useState)(2);return(0,f.jsx)(u,{...e,page:t,onPageChange:n})}},y={render:function(){let[e,t]=(0,d.useState)(2);return(0,f.jsx)(u,{page:e,pageCount:12,onPageChange:t})}},b={render:()=>(0,f.jsx)(u,{page:5,pageCount:12,getHref:e=>`?page=${e}`,"aria-label":`Search results pages`})},x={render:function(){let[e,t]=(0,d.useState)(2);return(0,f.jsxs)(`nav`,{"aria-label":`Pagination`,style:{width:384,maxWidth:`100%`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:12},children:[(0,f.jsx)(o,{variant:`outline`,leadingIcon:g,disabled:e<=1,onClick:()=>t(e-1),children:`Previous`}),(0,f.jsxs)(`p`,{style:{...m,color:`var(--ds-muted-foreground)`},"aria-live":`polite`,children:[`Page `,e,` of `,12]}),(0,f.jsx)(o,{variant:`outline`,trailingIcon:_,disabled:e>=12,onClick:()=>t(e+1),children:`Next`})]})}},S={render:function(){let[e,t]=(0,d.useState)(`10`),[n,r]=(0,d.useState)(3),i=Number(e),a=Math.ceil(128/i),s=(n-1)*i+1,l=Math.min(n*i,128);return(0,f.jsxs)(`div`,{style:{width:600,maxWidth:`100%`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:16},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,f.jsx)(`span`,{id:`rows-label`,style:{...m,color:`var(--ds-foreground)`},children:`Rows per page`}),(0,f.jsx)(c,{size:`sm`,"aria-label":`Rows per page`,options:[`10`,`20`,`50`].map(e=>({value:e,label:e})),value:e,onValueChange:e=>{t(e),r(1)},style:{width:72}})]}),(0,f.jsxs)(`nav`,{"aria-label":`Pagination`,style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,f.jsxs)(`p`,{style:{...m,color:`var(--ds-muted-foreground)`},"aria-live":`polite`,children:[s,`–`,l,` of `,128]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:4},children:[(0,f.jsx)(o,{variant:`outline`,size:`sm`,icon:g,"aria-label":`Previous page`,disabled:n<=1,onClick:()=>r(n-1)}),(0,f.jsx)(o,{variant:`outline`,size:`sm`,icon:_,"aria-label":`Next page`,disabled:n>=a,onClick:()=>r(n+1)})]})]})]})}},C={render:function(){let[e,t]=(0,d.useState)(3);return(0,f.jsx)(u,{iconsOnly:!0,page:e,pageCount:5,onPageChange:t})}},w=[{id:`#4821`,date:`Sep 24 · 3 items`,status:`Delivered`,price:`$36.49`},{id:`#4790`,date:`Sep 18 · 1 item`,status:`Delivered`,price:`$12.00`},{id:`#4755`,date:`Sep 11 · 2 items`,status:`Refunded`,price:`$58.20`},{id:`#4731`,date:`Sep 4 · 4 items`,status:`Delivered`,price:`$74.10`},{id:`#4702`,date:`Aug 29 · 1 item`,status:`Delivered`,price:`$9.99`},{id:`#4688`,date:`Aug 22 · 2 items`,status:`Refunded`,price:`$31.40`},{id:`#4650`,date:`Aug 15 · 3 items`,status:`Delivered`,price:`$45.00`},{id:`#4612`,date:`Aug 8 · 1 item`,status:`Delivered`,price:`$18.75`},{id:`#4597`,date:`Aug 1 · 2 items`,status:`Delivered`,price:`$27.30`}],T={render:function(){let[e,t]=(0,d.useState)(1),n=w.slice((e-1)*3,e*3);return(0,f.jsxs)(`div`,{style:{width:384,maxWidth:`100%`,display:`grid`,gap:24},children:[(0,f.jsx)(`ul`,{"aria-label":`Orders`,style:{listStyle:`none`,margin:0,padding:0,display:`grid`,gap:8},children:n.map(e=>(0,f.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:14,padding:`12px 14px`,borderRadius:`var(--ds-radius-xl)`,boxShadow:`inset 0 0 0 1px var(--ds-border)`},children:[(0,f.jsxs)(`div`,{style:{flex:1,display:`grid`,gap:4},children:[(0,f.jsxs)(`span`,{style:{...m,color:`var(--ds-foreground)`,fontWeight:500},children:[`Order `,e.id]}),(0,f.jsx)(`span`,{style:{...m,color:`var(--ds-muted-foreground)`},children:e.date})]}),(0,f.jsx)(i,{border:e.status===`Refunded`,children:e.status}),(0,f.jsx)(`span`,{style:{...m,color:`var(--ds-foreground)`,fontWeight:500},children:e.price})]},e.id))}),(0,f.jsx)(u,{page:e,pageCount:3,onPageChange:t,"aria-label":`Orders pages`})]})}},E={render:function(){let[e,t]=(0,d.useState)(4);return(0,f.jsx)(u,{page:e,pageCount:20,onPageChange:t,"aria-label":`Strony`,labels:{previous:`Poprzednia`,next:`Następna`,page:e=>`Strona ${e}`}})}},D={parameters:{layout:`fullscreen`},render:()=>(0,f.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,f.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16},children:[(0,f.jsx)(u,{page:2,pageCount:12,"aria-label":`Pagination (${e})`}),(0,f.jsx)(u,{iconsOnly:!0,page:3,pageCount:5,"aria-label":`Pagination, icons (${e})`})]},e))})},O=[`Playground`,`Default`,`Links`,`PreviousAndNext`,`RowsPerPage`,`IconsOnly`,`WithAList`,`Labels`,`Themes`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 12,
    siblingCount: 1,
    boundaryCount: 1,
    iconsOnly: false,
    showFirstLast: false
  },
  render: function Render(args) {
    const [page, setPage] = useState(2);
    return <Pagination {...args} page={page} onPageChange={setPage} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [page, setPage] = useState(2);
    return <Pagination page={page} pageCount={12} onPageChange={setPage} />;
  }
}`,...y.parameters?.docs?.source},description:{story:`Figma demo "Pagination": page 2 of 12.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'{\n  render: () => <Pagination page={5} pageCount={12} getHref={p => `?page=${p}`} aria-label="Search results pages" />\n}',...b.parameters?.docs?.source},description:{story:"Links instead of buttons (`getHref`), for server-rendered pages.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [page, setPage] = useState(2);
    const pages = 12;
    return <nav aria-label="Pagination" style={{
      width: 384,
      maxWidth: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }}>
        <Button variant="outline" leadingIcon={chevronLeft} disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <p style={{
        ...text,
        color: 'var(--ds-muted-foreground)'
      }} aria-live="polite">
          Page {page} of {pages}
        </p>
        <Button variant="outline" trailingIcon={chevronRight} disabled={page >= pages} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </nav>;
  }
}`,...x.parameters?.docs?.source},description:{story:`Figma demo "Previous and next": Outline Buttons and a muted page count, spread across 384 px.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const total = 128;
    const [size, setSize] = useState('10');
    const [page, setPage] = useState(3);
    const rows = Number(size);
    const pages = Math.ceil(total / rows);
    const first = (page - 1) * rows + 1;
    const last = Math.min(page * rows, total);
    return <div style={{
      width: 600,
      maxWidth: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
          <span id="rows-label" style={{
          ...text,
          color: 'var(--ds-foreground)'
        }}>
            Rows per page
          </span>
          <Select size="sm" aria-label="Rows per page" options={['10', '20', '50'].map(v => ({
          value: v,
          label: v
        }))} value={size} onValueChange={v => {
          setSize(v);
          setPage(1);
        }} style={{
          width: 72
        }} />
        </div>
        <nav aria-label="Pagination" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }}>
          <p style={{
          ...text,
          color: 'var(--ds-muted-foreground)'
        }} aria-live="polite">
            {first}–{last} of {total}
          </p>
          <div style={{
          display: 'flex',
          gap: 4
        }}>
            <Button variant="outline" size="sm" icon={chevronLeft} aria-label="Previous page" disabled={page <= 1} onClick={() => setPage(page - 1)} />
            <Button variant="outline" size="sm" icon={chevronRight} aria-label="Next page" disabled={page >= pages} onClick={() => setPage(page + 1)} />
          </div>
        </nav>
      </div>;
  }
}`,...S.parameters?.docs?.source},description:{story:`Figma demo "Rows per page": a table footer with a Select sm and icon buttons.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [page, setPage] = useState(3);
    return <Pagination iconsOnly page={page} pageCount={5} onPageChange={setPage} />;
  }
}`,...C.parameters?.docs?.source},description:{story:`Figma demo "Icons only": First, Previous, Next and Last as icon buttons.`,...C.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [page, setPage] = useState(1);
    const shown = orders.slice((page - 1) * 3, page * 3);
    return <div style={{
      width: 384,
      maxWidth: '100%',
      display: 'grid',
      gap: 24
    }}>
        <ul aria-label="Orders" style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'grid',
        gap: 8
      }}>
          {shown.map(o => <li key={o.id} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '12px 14px',
          borderRadius: 'var(--ds-radius-xl)',
          boxShadow: 'inset 0 0 0 1px var(--ds-border)'
        }}>
              <div style={{
            flex: 1,
            display: 'grid',
            gap: 4
          }}>
                <span style={{
              ...text,
              color: 'var(--ds-foreground)',
              fontWeight: 500
            }}>Order {o.id}</span>
                <span style={{
              ...text,
              color: 'var(--ds-muted-foreground)'
            }}>{o.date}</span>
              </div>
              <Badge border={o.status === 'Refunded'}>{o.status}</Badge>
              <span style={{
            ...text,
            color: 'var(--ds-foreground)',
            fontWeight: 500
          }}>{o.price}</span>
            </li>)}
        </ul>
        <Pagination page={page} pageCount={3} onPageChange={setPage} aria-label="Orders pages" />
      </div>;
  }
}`,...T.parameters?.docs?.source},description:{story:`Figma demo "With a list": three orders a page.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [page, setPage] = useState(4);
    return <Pagination page={page} pageCount={20} onPageChange={setPage} aria-label="Strony" labels={{
      previous: 'Poprzednia',
      next: 'Następna',
      page: p => \`Strona \${p}\`
    }} />;
  }
}`,...E.parameters?.docs?.source},description:{story:`Labels in another language (Polish).`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
      gap: 16
    }}>
          <Pagination page={2} pageCount={12} aria-label={\`Pagination (\${scheme})\`} />
          <Pagination iconsOnly page={3} pageCount={5} aria-label={\`Pagination, icons (\${scheme})\`} />
        </div>)}
    </div>
}`,...D.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...D.parameters?.docs?.description}}}})))()}k();export{y as Default,C as IconsOnly,E as Labels,b as Links,v as Playground,x as PreviousAndNext,S as RowsPerPage,D as Themes,T as WithAList,O as __namedExportsOrder,p as default};