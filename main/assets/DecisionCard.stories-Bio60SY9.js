import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-I5sHxWst.js";import{Dt as r,Rt as i,Xt as a,b as o,p as s,rn as c,v as l}from"./react-C9n7R217.js";import{n as u,t as d}from"./Button-C2u7s6oe.js";import{n as f,t as p}from"./Badge-PudfOI2Y.js";import{r as m,t as h}from"./AIChatComposer-Bb6nsLeW.js";import{i as g,t as _}from"./Input-B8avPdf3.js";import{r as v,t as y}from"./Kbd-DiHBKh16.js";function DecisionCard({question:e,context:t,details:n,options:r=[],tiles:i=[],allowOther:a=!0,otherPlaceholder:s=`Something else…`,defaultOtherText:u=``,onAnswer:f,page:m=1,pageCount:h=1,onPageChange:g,onLater:v,folded:S=!1,onOpen:C,labels:w={},className:T,onKeyDown:E,...D}){let O=(0,b.useId)(),k={needsYou:`Needs you`,later:`Later`,recommended:`Recommended`,send:`Send`,answer:`Answer`,previous:`Previous question`,next:`Next question`,of:(e,t)=>`${e} of ${t}`,waiting:e=>`${e} ${e===1?`question`:`questions`} waiting`,...w},A=[...i,...r].findIndex(e=>e.recommended),[j,M]=(0,b.useState)(A>=0?A:null),[N,P]=(0,b.useState)(u),F=i.length+r.length,I=F+1;if(S)return(0,x.jsx)(`section`,{...D,"aria-labelledby":`${O}-title ${O}-peek`,className:[`ds-decision`,`ds-decision--later`,T].filter(Boolean).join(` `),children:(0,x.jsxs)(`div`,{className:`ds-decision__later`,children:[(0,x.jsx)(`span`,{className:`ds-decision__ring`,"aria-hidden":!0}),(0,x.jsx)(`p`,{className:`ds-decision__title`,id:`${O}-title`,children:k.waiting(h)}),(0,x.jsx)(`span`,{className:`ds-decision__peek`,id:`${O}-peek`,children:e}),(0,x.jsx)(d,{variant:`outline`,size:`xs`,onClick:C,children:k.answer})]})});let send=()=>{let e=N.trim();e&&(f?.({text:e}),P(``))},handleKeyDown=e=>{if(E?.(e),e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.target.closest(`input, textarea, [contenteditable="true"]`))return;let t=Number(e.key);!Number.isInteger(t)||t<1||(t<=F?(e.preventDefault(),f?.({index:t-1})):t===I&&a&&(e.preventDefault(),e.currentTarget.querySelector(`.ds-decision__other input`)?.focus()))};return(0,x.jsxs)(`section`,{...D,"aria-labelledby":`${O}-question`,tabIndex:-1,onKeyDown:handleKeyDown,className:[`ds-decision`,T].filter(Boolean).join(` `),children:[(0,x.jsxs)(`div`,{className:`ds-decision__header`,children:[(0,x.jsxs)(`span`,{className:`ds-decision__status`,children:[(0,x.jsx)(`span`,{className:`ds-decision__ring`,"aria-hidden":!0}),k.needsYou]}),t===void 0?(0,x.jsx)(`span`,{className:`ds-decision__context`,"aria-hidden":!0}):(0,x.jsx)(`span`,{className:`ds-decision__context`,children:t}),h>1&&(0,x.jsxs)(`div`,{className:`ds-decision__pager`,children:[(0,x.jsx)(d,{variant:`ghost`,size:`xs`,icon:(0,x.jsx)(l,{}),"aria-label":k.previous,onClick:()=>g?.(m<=1?h:m-1)}),(0,x.jsx)(`span`,{children:k.of(m,h)}),(0,x.jsx)(d,{variant:`ghost`,size:`xs`,icon:(0,x.jsx)(c,{}),"aria-label":k.next,onClick:()=>g?.(m>=h?1:m+1)})]}),v&&(0,x.jsx)(d,{variant:`ghost`,size:`xs`,onClick:v,children:k.later})]}),(0,x.jsx)(`h3`,{className:`ds-decision__question`,id:`${O}-question`,children:e}),n&&n.length>0&&(0,x.jsx)(`dl`,{className:`ds-decision__details`,children:n.map(([e,t],n)=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`dt`,{children:e}),(0,x.jsx)(`dd`,{children:t})]},n))}),i.length>0&&(0,x.jsx)(`div`,{className:`ds-decision__tiles`,role:`group`,"aria-labelledby":`${O}-question`,children:i.map((e,t)=>(0,x.jsxs)(`button`,{type:`button`,className:[`ds-decision__tile`,j===t&&`ds-decision__tile--active`].filter(Boolean).join(` `),"aria-keyshortcuts":String(t+1),onMouseEnter:()=>M(t),onFocus:()=>M(t),onClick:()=>f?.({index:t}),children:[(0,x.jsx)(`span`,{className:`ds-decision__preview`,children:e.preview}),(0,x.jsxs)(`span`,{className:`ds-decision__caption`,children:[(0,x.jsx)(y,{size:`sm`,children:t+1}),e.label]})]},t))}),(0,x.jsxs)(`div`,{className:`ds-decision__answers`,role:`group`,"aria-labelledby":`${O}-question`,children:[r.map((e,t)=>{let n=i.length+t;return(0,x.jsxs)(`button`,{type:`button`,className:[`ds-decision__option`,j===n&&`ds-decision__option--active`].filter(Boolean).join(` `),"aria-keyshortcuts":String(n+1),onMouseEnter:()=>M(n),onFocus:()=>M(n),onClick:()=>f?.({index:n}),children:[(0,x.jsx)(y,{size:`sm`,children:n+1}),(0,x.jsxs)(`span`,{className:`ds-decision__text`,children:[(0,x.jsx)(`span`,{className:`ds-decision__label`,children:e.label}),e.description!==void 0&&(0,x.jsx)(`span`,{className:`ds-decision__description`,children:e.description})]}),e.recommended&&(0,x.jsx)(p,{variant:`tint`,color:`green`,children:k.recommended})]},t)}),a&&(0,x.jsxs)(`div`,{className:`ds-decision__other`,children:[(0,x.jsx)(y,{size:`sm`,children:I}),(0,x.jsx)(_,{"aria-label":s.replace(/…$/,``),"aria-keyshortcuts":String(I),placeholder:s,value:N,onChange:e=>P(e.currentTarget.value),onFocus:()=>M(null),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),send())}}),N.trim()!==``&&(0,x.jsx)(d,{size:`xs`,trailingIcon:(0,x.jsx)(y,{size:`sm`,variant:`inverted`,icon:(0,x.jsx)(o,{}),label:`Enter`}),onClick:send,children:k.send})]})]})]})}var b,x;function init_DecisionCard(){return(init_DecisionCard=e((()=>{i(),b=n(),f(),u(),g(),v(),x=t(),DecisionCard.__docgenInfo={description:`An agent's question right above the composer: numbered answers, preview tiles, or your own words.`,methods:[],displayName:`DecisionCard`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`},description:``},question:{required:!0,tsType:{name:`ReactNode`},description:`The question: "Which plan should the new team start on?"`},context:{required:!1,tsType:{name:`ReactNode`},description:`What it is about, after "Needs you": "Onboarding".`},details:{required:!1,tsType:{name:`Array`,elements:[{name:`tuple`,raw:`[ReactNode, ReactNode]`,elements:[{name:`ReactNode`},{name:`ReactNode`}]}],raw:`[ReactNode, ReactNode][]`},description:`What goes out, as name–value rows (one line each), for an approval.`},options:{required:!1,tsType:{name:`Array`,elements:[{name:`DecisionOption`}],raw:`DecisionOption[]`},description:`Numbered answers (Approve / Decline for an approval).`,defaultValue:{value:`[]`,computed:!1}},tiles:{required:!1,tsType:{name:`Array`,elements:[{name:`DecisionTile`}],raw:`DecisionTile[]`},description:`Preview tiles for a pick, numbered before the options.`,defaultValue:{value:`[]`,computed:!1}},allowOther:{required:!1,tsType:{name:`boolean`},description:'A last row for your own words (default true); `otherPlaceholder` defaults to "Something else…".',defaultValue:{value:`true`,computed:!1}},otherPlaceholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Something else…'`,computed:!1}},defaultOtherText:{required:!1,tsType:{name:`string`},description:`Text the last row starts with, e.g. a saved draft.`,defaultValue:{value:`''`,computed:!1}},onAnswer:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(answer: DecisionAnswer) => void`,signature:{arguments:[{type:{name:`union`,raw:`{ index: number } | { text: string }`,elements:[{name:`signature`,type:`object`,raw:`{ index: number }`,signature:{properties:[{key:`index`,value:{name:`number`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ text: string }`,signature:{properties:[{key:`text`,value:{name:`string`,required:!0}}]}}]},name:`answer`}],return:{name:`void`}}},description:`Called with the chosen answer: a click, its number key, or Send / Enter in the last row.`},page:{required:!1,tsType:{name:`number`},description:`Several questions in one card: this one's place (1-based) and how many, with ‹ › to move (round the ends).`,defaultValue:{value:`1`,computed:!1}},pageCount:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},onPageChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(page: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`void`}}},description:``},onLater:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Later: folds the card to one line above the composer.`},folded:{required:!1,tsType:{name:`boolean`},description:'`later` shows the one line ("2 questions waiting", the question, Answer).',defaultValue:{value:`false`,computed:!1}},onOpen:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Answer on the folded line opens the card again.`},labels:{required:!1,tsType:{name:`Partial`,elements:[{name:`signature`,type:`object`,raw:`{
  needsYou: string;
  later: string;
  recommended: string;
  send: string;
  answer: string;
  previous: string;
  next: string;
  of: (page: number, count: number) => string;
  waiting: (count: number) => string;
}`,signature:{properties:[{key:`needsYou`,value:{name:`string`,required:!0}},{key:`later`,value:{name:`string`,required:!0}},{key:`recommended`,value:{name:`string`,required:!0}},{key:`send`,value:{name:`string`,required:!0}},{key:`answer`,value:{name:`string`,required:!0}},{key:`previous`,value:{name:`string`,required:!0}},{key:`next`,value:{name:`string`,required:!0}},{key:`of`,value:{name:`signature`,type:`function`,raw:`(page: number, count: number) => string`,signature:{arguments:[{type:{name:`number`},name:`page`},{type:{name:`number`},name:`count`}],return:{name:`string`}},required:!0}},{key:`waiting`,value:{name:`signature`,type:`function`,raw:`(count: number) => string`,signature:{arguments:[{type:{name:`number`},name:`count`}],return:{name:`string`}},required:!0}}]}}],raw:`Partial<{
  needsYou: string;
  later: string;
  recommended: string;
  send: string;
  answer: string;
  previous: string;
  next: string;
  of: (page: number, count: number) => string;
  waiting: (count: number) => string;
}>`},description:`Texts, for other languages.`,defaultValue:{value:`{}`,computed:!1}}},composes:[`Omit`]}})))()}function Composer(){return(0,C.jsx)(h,{placeholder:`Ask about anything…`,leading:(0,C.jsx)(d,{variant:`ghost`,size:`sm`,icon:(0,C.jsx)(a,{}),"aria-label":`Add files or tools`}),model:(0,C.jsx)(d,{variant:`ghost`,size:`sm`,trailingIcon:(0,C.jsx)(r,{}),children:`Opus 5.5 High`})})}function Above({children:e}){return(0,C.jsxs)(`div`,{style:T,children:[e,(0,C.jsx)(Composer,{})]})}var S,C,w,T,E,describe,D,O,k,A,j,M,N,P;function init_DecisionCard_stories(){return(init_DecisionCard_stories=e((()=>{i(),S=n(),m(),u(),init_DecisionCard(),C=t(),w={title:`Patterns/Decision Card`,parameters:{docs:{description:{component:"The Sort UI 2.0 pattern **Decision Card** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=6111-1606)): an agent's question, asked right above the chat composer. Numbered `options` with one `recommended` (Approve / Decline for an approval, with `details` of what goes out), preview `tiles` for a pick, and a last row for your own words. A click or the answer's number answers (`onAnswer`); in the last row Enter or Send does. Several questions share one card with a pager (`page`, `pageCount`); Later folds it to one line (`folded`, with Answer to open it again).\n\n**When to use:** an agent is blocked on a question only the person can answer, with a few clear options and one it recommends, asked right where they type.\n**When not to use:** the question needs no options (let the agent ask in chat), several decisions wait across agents (use Decision Inbox), or the options branch into consequences (use Decision Tree)."}}}},T={width:`min(480px, calc(100vw - 32px))`,display:`grid`,gap:8},E=[{label:`Starter`,description:`Free, up to 3 people`},{label:`Team`,description:`€12 per person a month, with SSO`,recommended:!0},{label:`Enterprise`,description:`Talk to sales first`}],describe=(e,t)=>`text`in e?`“${e.text}”`:t[e.index],D={args:{kind:`options`,pager:!0,other:!0},argTypes:{kind:{name:`Kind`,control:`inline-radio`,options:[`options`,`approval`,`pick`]},pager:{name:`Pager (2 questions)`},other:{name:`Your own words`}},render:function Render({kind:e,pager:t,other:n}){let[r,i]=(0,S.useState)(null);return(0,C.jsxs)(Above,{children:[(0,C.jsx)(DecisionCard,{...e===`approval`?{context:`Weekly update`,question:`Send the weekly update to Northwind?`,details:[[`To`,`Dana Reyes, Northwind`],[`Subject`,`Week 45: ingest is live, dashboard in review`],[`Body`,`Ingest runs on staging and took Tuesday’s spike without losing a row.`]],options:[{label:`Approve`,recommended:!0},{label:`Decline`}]}:e===`pick`?{context:`Launch post`,question:`Which header image for the launch post?`,tiles:[{label:`Photo, team at work`},{label:`Product screenshot`,recommended:!0},{label:`Illustration`}],otherPlaceholder:`Describe another one…`}:{context:`Onboarding`,question:`Which plan should the new team start on?`,options:E},allowOther:n,page:1,pageCount:t?2:1,onPageChange:()=>{},onLater:()=>{},onAnswer:e=>i(JSON.stringify(e))}),r&&(0,C.jsxs)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`},children:[`onAnswer `,r]})]})}},O={render:function Render(){let[e,t]=(0,S.useState)(null);return(0,C.jsx)(Above,{children:e?(0,C.jsxs)(`p`,{role:`status`,style:{display:`flex`,alignItems:`center`,gap:8,margin:0,color:`var(--ds-muted-foreground)`},children:[(0,C.jsx)(s,{size:14,"aria-hidden":!0}),` `,e]}):(0,C.jsx)(DecisionCard,{context:`Weekly update`,question:`Send the weekly update to Northwind?`,details:[[`To`,`Dana Reyes, Northwind`],[`Subject`,`Week 45: ingest is live, dashboard in review`],[`Body`,`Ingest runs on staging and took Tuesday’s spike without losing a row.`]],options:[{label:`Approve`,recommended:!0},{label:`Decline`}],page:1,pageCount:2,onPageChange:()=>{},onLater:()=>{},onAnswer:e=>t(`text`in e?`Got it – ${e.text}`:e.index===0?`Approved – sending the weekly update now.`:`Declined – I won’t send it.`)})})}},k={render:function Render(){let e=[{context:`Onboarding`,question:`Which plan should the new team start on?`,options:E},{context:`Onboarding`,question:`Who should own billing?`,options:[{label:`Ana Silva`,recommended:!0},{label:`Jonas Weber`}]}],[t,n]=(0,S.useState)(1),[r,i]=(0,S.useState)(!1),[a,o]=(0,S.useState)([]),s=e[t-1];return(0,C.jsxs)(Above,{children:[(0,C.jsx)(DecisionCard,{...s,page:t,pageCount:e.length,onPageChange:n,folded:r,onLater:()=>i(!0),onOpen:()=>i(!1),onAnswer:e=>o(t=>[...t,describe(e,s.options.map(e=>String(e.label)))])},t),a.length>0&&(0,C.jsxs)(`p`,{style:{margin:0,color:`var(--ds-muted-foreground)`},children:[`Answered: `,a.join(`, `)]})]})}},A={render:()=>(0,C.jsx)(Above,{children:(0,C.jsx)(DecisionCard,{context:`Launch post`,question:`Which header image for the launch post?`,tiles:[{label:`Photo, team at work`},{label:`Product screenshot`,recommended:!0},{label:`Illustration`}],otherPlaceholder:`Describe another one…`,onLater:()=>{},onAnswer:()=>{}})})},j={render:()=>(0,C.jsx)(Above,{children:(0,C.jsx)(DecisionCard,{folded:!0,question:`Which plan should the new team start on?`,pageCount:2,onOpen:()=>{}})})},M={render:function Render(){let e=[{context:`Onboarding`,question:`Which plan should the new team start on?`,options:E},{context:`Onboarding`,question:`Who should own billing?`,options:[{label:`Ana Silva`,recommended:!0},{label:`Jonas Weber`}]}],[t,n]=(0,S.useState)(1),[r,i]=(0,S.useState)(!1),[a,o]=(0,S.useState)(``),s=e[t-1];return(0,C.jsxs)(`div`,{style:T,children:[(0,C.jsx)(DecisionCard,{...s,page:t,pageCount:e.length,onPageChange:n,folded:r,onLater:()=>i(!0),onOpen:()=>i(!1),onAnswer:e=>o(describe(e,s.options.map(e=>String(e.label))))},t),(0,C.jsx)(`p`,{role:`status`,style:{margin:0,color:`var(--ds-muted-foreground)`},children:a&&`Answered: ${a}`})]})}},N={parameters:{layout:`fullscreen`},render:()=>(0,C.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(340px, 1fr))`},children:[`light`,`dark`].map(e=>(0,C.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,alignContent:`start`},children:[(0,C.jsx)(DecisionCard,{context:`Onboarding`,question:`Which plan should the new team start on? (${e})`,options:E,page:1,pageCount:2,onPageChange:()=>{},onLater:()=>{}}),(0,C.jsx)(DecisionCard,{context:`Launch post`,question:`Which header image? (${e})`,tiles:[{label:`Photo`},{label:`Screenshot`,recommended:!0},{label:`Illustration`}]}),(0,C.jsx)(DecisionCard,{folded:!0,question:`Which plan should the new team start on? (${e})`,pageCount:2,onOpen:()=>{}})]},e))})},P=[`Playground`,`Approval`,`Options`,`Pick`,`Later`,`Questions`,`Themes`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'options',
    pager: true,
    other: true
  },
  argTypes: {
    kind: {
      name: 'Kind',
      control: 'inline-radio',
      options: ['options', 'approval', 'pick']
    },
    pager: {
      name: 'Pager (2 questions)'
    },
    other: {
      name: 'Your own words'
    }
  },
  render: function Render({
    kind,
    pager,
    other
  }) {
    const [answer, setAnswer] = useState<string | null>(null);
    const props: DecisionCardProps = kind === 'approval' ? {
      context: 'Weekly update',
      question: 'Send the weekly update to Northwind?',
      details: [['To', 'Dana Reyes, Northwind'], ['Subject', 'Week 45: ingest is live, dashboard in review'], ['Body', 'Ingest runs on staging and took Tuesday’s spike without losing a row.']],
      options: [{
        label: 'Approve',
        recommended: true
      }, {
        label: 'Decline'
      }]
    } : kind === 'pick' ? {
      context: 'Launch post',
      question: 'Which header image for the launch post?',
      tiles: [{
        label: 'Photo, team at work'
      }, {
        label: 'Product screenshot',
        recommended: true
      }, {
        label: 'Illustration'
      }],
      otherPlaceholder: 'Describe another one…'
    } : {
      context: 'Onboarding',
      question: 'Which plan should the new team start on?',
      options: plans
    };
    return <Above>
        <DecisionCard {...props} allowOther={other} page={1} pageCount={pager ? 2 : 1} onPageChange={() => {}} onLater={() => {}} onAnswer={a => setAnswer(JSON.stringify(a))} />
        {answer && <p style={{
        margin: 0,
        color: 'var(--ds-muted-foreground)'
      }}>onAnswer {answer}</p>}
      </Above>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [reply, setReply] = useState<string | null>(null);
    return <Above>
        {reply ? <p role="status" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        margin: 0,
        color: 'var(--ds-muted-foreground)'
      }}>
            <RiSparkling2Fill size={14} aria-hidden /> {reply}
          </p> : <DecisionCard context="Weekly update" question="Send the weekly update to Northwind?" details={[['To', 'Dana Reyes, Northwind'], ['Subject', 'Week 45: ingest is live, dashboard in review'], ['Body', 'Ingest runs on staging and took Tuesday’s spike without losing a row.']]} options={[{
        label: 'Approve',
        recommended: true
      }, {
        label: 'Decline'
      }]} page={1} pageCount={2} onPageChange={() => {}} onLater={() => {}} onAnswer={a => setReply('text' in a ? \`Got it – \${a.text}\` : a.index === 0 ? 'Approved – sending the weekly update now.' : 'Declined – I won’t send it.')} />}
      </Above>;
  }
}`,...O.parameters?.docs?.source},description:{story:`Figma "An approval": what goes out, then 1 Approve · 2 Decline · 3 your own words. Answering hands back to the agent.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const questions = [{
      context: 'Onboarding',
      question: 'Which plan should the new team start on?',
      options: plans
    }, {
      context: 'Onboarding',
      question: 'Who should own billing?',
      options: [{
        label: 'Ana Silva',
        recommended: true
      }, {
        label: 'Jonas Weber'
      }]
    }];
    const [page, setPage] = useState(1);
    const [folded, setFolded] = useState(false);
    const [answers, setAnswers] = useState<string[]>([]);
    const q = questions[page - 1];
    return <Above>
        <DecisionCard key={page} {...q} page={page} pageCount={questions.length} onPageChange={setPage} folded={folded} onLater={() => setFolded(true)} onOpen={() => setFolded(false)} onAnswer={a => setAnswers(list => [...list, describe(a, q.options.map(o => String(o.label)))])} />
        {answers.length > 0 && <p style={{
        margin: 0,
        color: 'var(--ds-muted-foreground)'
      }}>Answered: {answers.join(', ')}</p>}
      </Above>;
  }
}`,...k.parameters?.docs?.source},description:{story:`Figma "Options": numbered, one Recommended; two questions share the card, Later folds it, Answer opens it again.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Above>
      <DecisionCard context="Launch post" question="Which header image for the launch post?" tiles={[{
      label: 'Photo, team at work'
    }, {
      label: 'Product screenshot',
      recommended: true
    }, {
      label: 'Illustration'
    }]} otherPlaceholder="Describe another one…" onLater={() => {}} onAnswer={() => {}} />
    </Above>
}`,...A.parameters?.docs?.source},description:{story:`Figma "A pick": preview tiles with their numbers, and a last row to describe another one.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Above>
      <DecisionCard folded question="Which plan should the new team start on?" pageCount={2} onOpen={() => {}} />
    </Above>
}`,...j.parameters?.docs?.source},description:{story:`Figma "Later": one line above the composer until you answer.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const questions = [{
      context: 'Onboarding',
      question: 'Which plan should the new team start on?',
      options: plans
    }, {
      context: 'Onboarding',
      question: 'Who should own billing?',
      options: [{
        label: 'Ana Silva',
        recommended: true
      }, {
        label: 'Jonas Weber'
      }]
    }];
    const [page, setPage] = useState(1);
    const [folded, setFolded] = useState(false);
    const [answer, setAnswer] = useState('');
    const q = questions[page - 1];
    return <div style={WIDTH}>
        <DecisionCard key={page} {...q} page={page} pageCount={questions.length} onPageChange={setPage} folded={folded} onLater={() => setFolded(true)} onOpen={() => setFolded(false)} onAnswer={a => setAnswer(describe(a, q.options.map(o => String(o.label))))} />
        <p role="status" style={{
        margin: 0,
        color: 'var(--ds-muted-foreground)'
      }}>
          {answer && \`Answered: \${answer}\`}
        </p>
      </div>;
  }
}`,...M.parameters?.docs?.source},description:{story:`The card on its own (no composer): two questions with the pager, numbers answer, Later folds it and Answer opens it.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
          <DecisionCard context="Onboarding" question={\`Which plan should the new team start on? (\${scheme})\`} options={plans} page={1} pageCount={2} onPageChange={() => {}} onLater={() => {}} />
          <DecisionCard context="Launch post" question={\`Which header image? (\${scheme})\`} tiles={[{
        label: 'Photo'
      }, {
        label: 'Screenshot',
        recommended: true
      }, {
        label: 'Illustration'
      }]} />
          <DecisionCard folded question={\`Which plan should the new team start on? (\${scheme})\`} pageCount={2} onOpen={() => {}} />
        </div>)}
    </div>
}`,...N.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...N.parameters?.docs?.description}}}})))()}init_DecisionCard_stories();export{O as Approval,j as Later,k as Options,A as Pick,D as Playground,M as Questions,N as Themes,P as __namedExportsOrder,w as default};