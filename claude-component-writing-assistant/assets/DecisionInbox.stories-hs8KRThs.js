import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-McvNIDxm.js";import{Ft as r,dt as i,en as a,l as o,rn as s}from"./react-CgMEp7Lb.js";import{n as c,t as l}from"./Button-CvszARjW.js";function DecisionInbox({count:e,children:t,folded:n=!1,onOpen:r,meta:i,emptyDescription:c,labels:l={},className:p,...m}){let h=(0,u.useId)(),g=(0,u.useRef)(!1),_={title:e=>`${e} ${e===1?`needs`:`need`} your input`,empty:`Nothing needs you`,...l},v=m[`aria-label`]?void 0:`${h}-title`,y=[`ds-inbox`,n&&`ds-inbox--folded`,p].filter(Boolean).join(` `);return e===0&&!n?(0,d.jsx)(`section`,{...m,"aria-labelledby":v,className:y,children:(0,d.jsxs)(`div`,{className:`ds-inbox__empty`,role:`status`,children:[(0,d.jsx)(`span`,{className:`ds-inbox__done`,"aria-hidden":!0,children:(0,d.jsx)(s,{})}),(0,d.jsxs)(`div`,{className:`ds-inbox__text`,children:[(0,d.jsx)(`p`,{className:`ds-inbox__question`,id:`${h}-title`,children:_.empty}),c!==void 0&&(0,d.jsx)(`p`,{className:`ds-inbox__context`,children:c})]})]})}):n?(0,d.jsx)(`section`,{...m,"aria-labelledby":v,className:y,children:(0,d.jsxs)(`button`,{type:`button`,className:`ds-inbox__fold`,"aria-expanded":!1,onClick:r,children:[(0,d.jsx)(o,{"aria-hidden":!0}),(0,d.jsx)(`span`,{className:`ds-inbox__title`,id:`${h}-title`,children:e===0?_.empty:_.title(e)}),(0,d.jsx)(`span`,{className:`ds-inbox__meta`,children:i}),(0,d.jsx)(a,{"aria-hidden":!0})]})}):(0,d.jsxs)(`section`,{...m,"aria-labelledby":v,className:y,children:[(0,d.jsxs)(`div`,{className:`ds-inbox__header`,children:[(0,d.jsx)(o,{"aria-hidden":!0}),(0,d.jsx)(`h3`,{className:`ds-inbox__title`,id:`${h}-title`,children:_.title(e)})]}),(0,d.jsx)(`ul`,{className:`ds-inbox__list`,onClickCapture:e=>{e.target.closest(`.ds-inbox__answers`)&&(g.current=!0)},children:(0,d.jsx)(f.Provider,{value:g,children:t})})]})}function DecisionInboxItem({question:e,context:t,answers:n,className:r,...i}){let a=(0,u.useId)();return(0,d.jsxs)(`li`,{...i,"aria-labelledby":a,className:[`ds-inbox__item`,r].filter(Boolean).join(` `),children:[(0,d.jsxs)(`div`,{className:`ds-inbox__text`,children:[(0,d.jsx)(`p`,{className:`ds-inbox__question`,id:a,children:e}),t!==void 0&&(0,d.jsx)(`p`,{className:`ds-inbox__context`,children:t})]}),(0,d.jsx)(`div`,{className:`ds-inbox__answers`,role:`group`,"aria-labelledby":a,children:n.map((e,t)=>(0,d.jsx)(l,{size:`xs`,variant:t===0?`default`:`outline`,onClick:e.onSelect,children:e.label},t))})]})}function DecisionInboxAnswered({title:e,description:t,onUndo:n,dismissAfter:r,onDismiss:a,labels:o={},className:c,onMouseEnter:p,onMouseLeave:m,onFocus:h,onBlur:g,..._}){let v={undo:`Undo`,...o},y=(0,u.useRef)(null),b=(0,u.useRef)(void 0),x=(0,u.useContext)(f),S=(0,u.useRef)(a);S.current=a;let stop=()=>clearTimeout(b.current),start=()=>{stop(),r!==void 0&&(b.current=setTimeout(()=>S.current?.(),r))};return(0,u.useEffect)(()=>{let e=!document.activeElement||document.activeElement===document.body;return x?.current&&e&&y.current?y.current.focus():start(),x&&(x.current=!1),stop},[r]),(0,d.jsxs)(`li`,{..._,className:[`ds-inbox__item`,`ds-inbox__item--answered`,c].filter(Boolean).join(` `),onMouseEnter:e=>{stop(),p?.(e)},onMouseLeave:e=>{e.currentTarget.contains(document.activeElement)||start(),m?.(e)},onFocus:e=>{stop(),h?.(e)},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||start(),g?.(e)},children:[(0,d.jsxs)(`div`,{className:`ds-inbox__answered`,role:`status`,children:[(0,d.jsx)(`span`,{className:`ds-inbox__done`,"aria-hidden":!0,children:(0,d.jsx)(s,{})}),(0,d.jsxs)(`div`,{className:`ds-inbox__text`,children:[(0,d.jsx)(`p`,{className:`ds-inbox__question`,children:e}),t!==void 0&&(0,d.jsx)(`p`,{className:`ds-inbox__context`,children:t})]})]}),n&&(0,d.jsx)(l,{ref:y,variant:`ghost`,size:`xs`,leadingIcon:(0,d.jsx)(i,{}),onClick:n,children:v.undo})]})}var u,d,f;function init_DecisionInbox(){return(init_DecisionInbox=e((()=>{r(),u=n(),c(),d=t(),f=(0,u.createContext)(null),DecisionInbox.__docgenInfo={description:`The open decisions that wait on you, each with two quick answers.`,methods:[],displayName:`DecisionInbox`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`},description:``},count:{required:!0,tsType:{name:`number`},description:`How many decisions are open; 0 shows "Nothing needs you".`},children:{required:!1,tsType:{name:`ReactNode`},description:"The rows: `DecisionInboxItem` and `DecisionInboxAnswered`."},folded:{required:!1,tsType:{name:`boolean`},description:'One line in a sidebar ("3 need your input · oldest 2 h ago ›"); a click calls `onOpen`.',defaultValue:{value:`false`,computed:!1}},onOpen:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},meta:{required:!1,tsType:{name:`ReactNode`},description:`After the count on the folded line: "· oldest 2 h ago".`},emptyDescription:{required:!1,tsType:{name:`ReactNode`},description:`Under "Nothing needs you": "3 decided today · the agents go on by themselves".`},labels:{required:!1,tsType:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{
  title: (count: number) => string;
  empty: string;
}`,signature:{properties:[{key:`title`,value:{name:`signature`,type:`function`,raw:`(count: number) => string`,signature:{arguments:[{type:{name:`number`},name:`count`}],return:{name:`string`}},required:!0}},{key:`empty`,value:{name:`string`,required:!0}}]}}],raw:`Partial<{
  title: (count: number) => string;
  empty: string;
}>`},description:`Texts, for other languages.`,defaultValue:{value:`{}`,computed:!1}}},composes:[`Omit`]},DecisionInboxItem.__docgenInfo={description:`An open decision: what to decide, why now and who asks, with its answers.`,methods:[],displayName:`DecisionInboxItem`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLLIElement`}],raw:`Ref<HTMLLIElement>`},description:``},question:{required:!0,tsType:{name:`ReactNode`},description:`What to decide: "Send the refund of €48 to Ana Silva?"`},context:{required:!1,tsType:{name:`ReactNode`},description:`Why now and the agent that asks: "Over the €40 limit agents may refund alone · Support agent".`},answers:{required:!0,tsType:{name:`Array`,elements:[{name:`DecisionInboxAnswer`}],raw:`DecisionInboxAnswer[]`},description:`The two quick answers: the first is the main (filled) one, the rest are outline.`}},composes:[`Omit`]},DecisionInboxAnswered.__docgenInfo={description:`A just-answered decision: confirms in place with Undo, then folds away.`,methods:[],displayName:`DecisionInboxAnswered`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLLIElement`}],raw:`Ref<HTMLLIElement>`},description:``},title:{required:!0,tsType:{name:`ReactNode`},description:`What happened: "Sent · €48 to Ana Silva".`},description:{required:!1,tsType:{name:`ReactNode`},description:`What comes next: "Support agent goes on with the ticket".`},onUndo:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Takes the answer back; the row then shows the question again.`},dismissAfter:{required:!1,tsType:{name:`number`},description:`Folds the row away after this many milliseconds (paused while the pointer or focus is on it).`},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},labels:{required:!1,tsType:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{ undo: string }`,signature:{properties:[{key:`undo`,value:{name:`string`,required:!0}}]}}],raw:`Partial<{ undo: string }>`},description:`Texts, for other languages.`,defaultValue:{value:`{}`,computed:!1}}},composes:[`Omit`]}})))()}var p,m,h,g,_,v,y,b,x,S,C;function init_DecisionInbox_stories(){return(init_DecisionInbox_stories=e((()=>{p=n(),init_DecisionInbox(),m=t(),h={title:`Patterns/Decision Inbox`,parameters:{docs:{description:{component:"The Sort UI 2.0 pattern **Decision Inbox** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6114-1780)): the open decisions that wait on you, each with two quick answers – what to decide, why now, and the agent that asks (`DecisionInboxItem`). An answered one confirms in place with Undo, then folds away (`DecisionInboxAnswered`, `dismissAfter`); with nothing open it says so (`count={0}`); it folds to one line in a sidebar (`folded`).\n\n**When to use:** several agents each wait on a quick decision and people want to clear them in one place, one or two clicks each.\n**When not to use:** a decision needs context, previews or a diff to judge (use Review Center), or there is only ever one at a time (use Decision Card)."}}}},g={width:`min(420px, calc(100vw - 32px))`},_=[{key:`refund`,question:`Send the refund of €48 to Ana Silva?`,context:`Over the €40 limit agents may refund alone · Support agent`,answers:[`Send`,`Hold`],done:[`Sent · €48 to Ana Silva`,`Support agent goes on with the ticket`]},{key:`onboarding`,question:`Roll out the new onboarding to everyone?`,context:`Test won with +8% activation · 2 weeks of data · Growth agent`,answers:[`Roll out`,`Keep testing`],done:[`Rolled out · the new onboarding`,`Growth agent switches everyone over`]},{key:`figma`,question:`Renew Figma for the design team?`,context:`12 seats · $1,800 a year · renews in 5 days · Finance agent`,answers:[`Renew`,`Change seats`],done:[`Renewed · Figma, 12 seats`,`Finance agent pays the invoice`]}],v={render:function Render(){let[e,t]=(0,p.useState)({}),n=_.filter(t=>!e[t.key]),answer=e=>t(t=>({...t,[e]:`now`})),undo=e=>t(t=>{let{[e]:n,...r}=t;return r});return n.length===0&&_.every(t=>e[t.key]===`gone`)?(0,m.jsx)(`div`,{style:g,children:(0,m.jsx)(DecisionInbox,{count:0,emptyDescription:`3 decided today · the agents go on by themselves`})}):(0,m.jsx)(`div`,{style:g,children:(0,m.jsx)(DecisionInbox,{count:n.length,children:_.map(n=>e[n.key]===`gone`?null:e[n.key]===`now`?(0,m.jsx)(DecisionInboxAnswered,{title:n.done[0],description:n.done[1],onUndo:()=>undo(n.key),dismissAfter:5e3,onDismiss:()=>t(e=>({...e,[n.key]:`gone`}))},n.key):(0,m.jsx)(DecisionInboxItem,{question:n.question,context:n.context,answers:n.answers.map(e=>({label:e,onSelect:()=>answer(n.key)}))},n.key))})})}},y={render:()=>(0,m.jsx)(`div`,{style:g,children:(0,m.jsxs)(DecisionInbox,{count:2,children:[(0,m.jsx)(DecisionInboxAnswered,{title:`Sent · €48 to Ana Silva`,description:`Support agent goes on with the ticket`,onUndo:()=>{}}),_.slice(1).map(e=>(0,m.jsx)(DecisionInboxItem,{question:e.question,context:e.context,answers:e.answers.map(e=>({label:e}))},e.key))]})})},b={render:function Render(){let[e,t]=(0,p.useState)(!0);return(0,m.jsx)(`div`,{style:g,children:(0,m.jsx)(DecisionInbox,{count:3,folded:e,onOpen:()=>t(!1),meta:`· oldest 2 h ago`,children:_.map(e=>(0,m.jsx)(DecisionInboxItem,{question:e.question,context:e.context,answers:e.answers.map(e=>({label:e}))},e.key))})})}},x={render:()=>(0,m.jsx)(`div`,{style:g,children:(0,m.jsx)(DecisionInbox,{count:0,emptyDescription:`3 decided today · the agents go on by themselves`})})},S={parameters:{layout:`fullscreen`},render:()=>(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(340px, 1fr))`},children:[`light`,`dark`].map(e=>(0,m.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,alignContent:`start`},children:[(0,m.jsxs)(DecisionInbox,{count:2,"aria-label":`Decision Inbox (${e})`,children:[(0,m.jsx)(DecisionInboxAnswered,{title:`Sent · €48 to Ana Silva`,description:`Support agent goes on with the ticket`,onUndo:()=>{}}),_.slice(1).map(e=>(0,m.jsx)(DecisionInboxItem,{question:e.question,context:e.context,answers:e.answers.map(e=>({label:e}))},e.key))]}),(0,m.jsx)(DecisionInbox,{count:3,folded:!0,meta:`· oldest 2 h ago`,"aria-label":`Decision Inbox, folded (${e})`}),(0,m.jsx)(DecisionInbox,{count:0,emptyDescription:`3 decided today`,"aria-label":`Decision Inbox, nothing open (${e})`})]},e))})},C=[`Open`,`JustAnswered`,`Folded`,`NothingOpen`,`Themes`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [answered, setAnswered] = useState<Record<string, 'now' | 'gone'>>({});
    const open = DECISIONS.filter(d => !answered[d.key]);
    const answer = (key: string) => setAnswered(a => ({
      ...a,
      [key]: 'now'
    }));
    const undo = (key: string) => setAnswered(a => {
      const {
        [key]: _,
        ...rest
      } = a;
      return rest;
    });
    if (open.length === 0 && DECISIONS.every(d => answered[d.key] === 'gone')) {
      return <div style={WIDTH}>
          <DecisionInbox count={0} emptyDescription="3 decided today · the agents go on by themselves" />
        </div>;
    }
    return <div style={WIDTH}>
        <DecisionInbox count={open.length}>
          {DECISIONS.map(d => answered[d.key] === 'gone' ? null : answered[d.key] === 'now' ? <DecisionInboxAnswered key={d.key} title={d.done[0]} description={d.done[1]} onUndo={() => undo(d.key)} dismissAfter={5000} onDismiss={() => setAnswered(a => ({
          ...a,
          [d.key]: 'gone'
        }))} /> : <DecisionInboxItem key={d.key} question={d.question} context={d.context} answers={d.answers.map(label => ({
          label,
          onSelect: () => answer(d.key)
        }))} />)}
        </DecisionInbox>
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`Figma "Open": one click answers each. Answer one: it confirms in place with Undo and folds away after 5 s.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={WIDTH}>
      <DecisionInbox count={2}>
        <DecisionInboxAnswered title="Sent · €48 to Ana Silva" description="Support agent goes on with the ticket" onUndo={() => {}} />
        {DECISIONS.slice(1).map(d => <DecisionInboxItem key={d.key} question={d.question} context={d.context} answers={d.answers.map(label => ({
        label
      }))} />)}
      </DecisionInbox>
    </div>
}`,...y.parameters?.docs?.source},description:{story:`Figma "Just answered": confirms in place with Undo, then folds away.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [folded, setFolded] = useState(true);
    return <div style={WIDTH}>
        <DecisionInbox count={3} folded={folded} onOpen={() => setFolded(false)} meta="· oldest 2 h ago">
          {DECISIONS.map(d => <DecisionInboxItem key={d.key} question={d.question} context={d.context} answers={d.answers.map(label => ({
          label
        }))} />)}
        </DecisionInbox>
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:`Figma "Folded": one line in a sidebar; a click opens the inbox.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={WIDTH}>
      <DecisionInbox count={0} emptyDescription="3 decided today · the agents go on by themselves" />
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Figma "Nothing open".`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24,
      display: 'grid',
      gap: 16,
      alignContent: 'start'
    }}>
          <DecisionInbox count={2} aria-label={\`Decision Inbox (\${scheme})\`}>
            <DecisionInboxAnswered title="Sent · €48 to Ana Silva" description="Support agent goes on with the ticket" onUndo={() => {}} />
            {DECISIONS.slice(1).map(d => <DecisionInboxItem key={d.key} question={d.question} context={d.context} answers={d.answers.map(label => ({
          label
        }))} />)}
          </DecisionInbox>
          <DecisionInbox count={3} folded meta="· oldest 2 h ago" aria-label={\`Decision Inbox, folded (\${scheme})\`} />
          <DecisionInbox count={0} emptyDescription="3 decided today" aria-label={\`Decision Inbox, nothing open (\${scheme})\`} />
        </div>)}
    </div>
}`,...S.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...S.parameters?.docs?.description}}}})))()}init_DecisionInbox_stories();export{b as Folded,y as JustAnswered,x as NothingOpen,v as Open,S as Themes,C as __namedExportsOrder,h as default};