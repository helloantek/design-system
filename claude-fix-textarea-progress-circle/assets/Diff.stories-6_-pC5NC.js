import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BHjVqdnj.js";import{Ct as r,Ft as i,Ht as a}from"./react-DoTdZFUN.js";import{n as o,t as s}from"./Button-CAZ0LyPn.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./Diff-DCaonGqN.js";function v(e){let t=[],n=``,r;for(T.lastIndex=0;r=T.exec(e);){let[i,a,o,s,c]=r,l=e.slice(T.lastIndex),u;a?u=/^\s*:/.test(l)?`constant`:`string`:o?u=`constant`:c?u=`keyword`:s&&(C.has(s)?u=`keyword`:w.has(s)||/^[A-Z]/.test(s)||n===`const`||n===`let`?u=`constant`:/^\(/.test(l)?u=`function`:/^\??:/.test(l)&&(u=`variable`)),t.push(u?(0,S.jsx)(p,{kind:u,children:i},r.index):i),i.trim()&&(n=i)}return t}function y(e,t=[]){let n=[],r=0;for(let[i,a]of t)i>r&&n.push(...v(e.slice(r,i)).map((e,t)=>(0,S.jsx)(`span`,{children:e},`${r}-${t}`))),n.push((0,S.jsx)(h,{children:v(e.slice(i,a))},`w${i}`)),r=a;return r<e.length&&n.push(...v(e.slice(r)).map((e,t)=>(0,S.jsx)(`span`,{children:e},`${r}-${t}`))),n}function b(e){let t=e.map(()=>[]);for(let n=0;n<e.length;n++){if(e[n].type===`context`)continue;let r=n;for(;r<e.length&&e[r].type!==`context`;)r++;let i=e.slice(n,r).map((e,t)=>({r:e,i:n+t})).filter(e=>e.r.type===`removed`),a=e.slice(n,r).map((e,t)=>({r:e,i:n+t})).filter(e=>e.r.type===`added`);for(let e=0;e<Math.min(i.length,a.length);e++){let n=d(i[e].r.text,a[e].r.text),r=d(a[e].r.text,i[e].r.text),o=(e,t)=>e.reduce((e,[t,n])=>e+n-t,0)/Math.max(1,t.trim().length);Math.min(o(n,i[e].r.text),o(r,a[e].r.text))>.5||(t[i[e].i]=n,t[a[e].i]=r)}n=r-1}return t}function x(e,{words:t=!0}={}){let n=t?b(e):e.map(()=>[]);return e.map((e,t)=>(0,S.jsx)(u,{type:e.type,oldNumber:e.oldNumber,newNumber:e.newNumber,number:e.type===`removed`?e.oldNumber:e.newNumber,indent:e.text.length-e.text.trimStart().length,children:y(e.text,n[t])},t))}var S,C,w,T;function E(){return(E=e((()=>{_(),S=t(),C=new Set([`const`,`let`,`var`,`for`,`of`,`in`,`if`,`else`,`return`,`export`,`function`,`new`,`await`,`async`,`import`,`from`,`continue`,`break`,`typeof`]),w=new Set([`null`,`undefined`,`true`,`false`,`string`,`number`,`boolean`]),T=/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b\d+(?:\.\d+)*\b)|([A-Za-z_$][\w$]*)|(=>|\|\||&&|[=!+*<>-])|(\s+|.)/g})))()}function D(e){return x(e.map(([e,t,n])=>({type:e,oldNumber:t,newNumber:t,text:n})))}function O(e){let t=e.map(([e,t,n])=>({type:e===`added`||e===`removed`?e:`context`,newNumber:t??void 0,oldNumber:t??void 0,text:n}));return e.map(([e,n,r],i)=>(0,A.jsx)(u,{type:e,number:e===`hunk`?void 0:n??void 0,indent:r.length-r.trimStart().length,children:e===`hunk`?r:y(r,e===`empty`?[]:b(t)[i])},i))}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{k=n(),r(),o(),_(),E(),A=t(),j={title:`Components/Diff`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Diff Line** and **Diff** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=1699-2)): a file's changes. `Diff` is the card (`title`, `icon`, `added` and `removed` counts, `numbers` `both` · `single`); `DiffLine` is a line (`type` `context` · `added` · `removed` · `empty` · `hunk`, `oldNumber`/`newNumber` or `number`, indent guides from its leading spaces); `DiffFold` (Type=Folded) is a button that shows unchanged lines; `DiffActions` (Type=Actions) holds buttons under a change; `DiffSplit` shows old and new side by side. `DiffToken` colours syntax and `DiffWord` marks a changed word. `diffLines(before, after)` and `diffWords(line, other)` compute the lines and changed words from two versions. The highlighter in the stories is a small demo, not part of the library."}}}},M=(e=520)=>({width:`min(${e}px, calc(100vw - 32px))`}),N=(0,A.jsx)(a,{}),P={args:{type:`added`,numbers:`both`,code:`  const saved = await api.save(note)`,guides:!0},argTypes:{type:{name:`Type`,control:`inline-radio`,options:[`context`,`added`,`removed`,`empty`,`hunk`]},numbers:{name:`Numbers`,control:`inline-radio`,options:[`both`,`single`]},code:{name:`Code`},guides:{name:`Indent guides`}},render:({type:e,numbers:t,code:n,guides:r})=>(0,A.jsxs)(g,{style:M(),title:`src/notes/sync.ts`,icon:N,added:1,removed:0,numbers:t,children:[(0,A.jsx)(u,{oldNumber:17,newNumber:17,number:17,indent:r?void 0:0,children:`for (const note of queue) {`}),(0,A.jsx)(u,{type:e,oldNumber:e===`added`?void 0:18,newNumber:e===`removed`?void 0:18,number:18,indent:r?n.length-n.trimStart().length:0,children:e===`hunk`?n:v(n)})]})},F={render:()=>(0,A.jsx)(g,{style:M(),title:`src/notes/sync.ts`,icon:N,added:5,removed:1,numbers:`single`,children:D([[`context`,18,`  for (const note of queue) {`],[`removed`,19,`    await api.save(note)`],[`added`,19,`    const saved = await api.save(note).catch(() => null)`],[`added`,20,`    if (!saved) {`],[`added`,21,`      offline.push(note)`],[`added`,22,`      continue`],[`added`,23,`    }`],[`context`,24,`    synced.add(note.id)`],[`context`,25,`  }`]])})},I={render:()=>(0,A.jsx)(g,{style:M(600),title:`src/billing/invoice.ts`,icon:N,added:5,removed:4,children:(0,A.jsx)(c,{before:O([[`context`,4,`export function invoiceTotal(items: LineItem[]) {`],[`removed`,5,`  let total = 0`],[`removed`,6,`  for (const item of items) total += item.price`],[`removed`,7,`  return total`],[`empty`,null,``],[`context`,8,`}`],[`context`,9,`export function dueDate(issued: Date) {`],[`hunk`,null,`@@ -21,3 +22,3 @@`],[`context`,21,`export function invoiceTitle(invoice: Invoice) {`],[`removed`,22,`  return "Invoice " + invoice.number`],[`context`,23,`}`]]),after:O([[`context`,4,`export function invoiceTotal(items: LineItem[]) {`],[`added`,5,`  return items.reduce(`],[`added`,6,`    (total, item) => total + item.price * item.quantity,`],[`added`,7,`    0`],[`added`,8,`  )`],[`context`,9,`}`],[`context`,10,`export function dueDate(issued: Date) {`],[`hunk`,null,`@@ -21,3 +22,3 @@`],[`context`,22,`export function invoiceTitle(invoice: Invoice) {`],[`added`,23,"  return `Invoice ${invoice.number} · ${invoice.customer}`"],[`context`,24,`}`]])})})},L=`{
  "name": "notes-app",
  "version": "2.3.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  },
  "dependencies": {
    "next": "15.4.0",
    "react": "19.1.0"
  }
}`,R=`{
  "name": "notes-app",
  "version": "2.4.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "test": "vitest"
  },
  "dependencies": {
    "next": "16.0.0",
    "react": "19.2.0"
  }
}`,z={render:()=>{let e=l(L,R);return(0,A.jsx)(g,{style:M(440),title:`package.json`,icon:(0,A.jsx)(i,{}),added:e.filter(e=>e.type===`added`).length,removed:e.filter(e=>e.type===`removed`).length,children:x(e)})}},B=[`import { slugify } from "./slugify"`,``,`export type Note = {`,`  id: string`,`  createdAt: Date`,`  title: string`,`  body: string`,`  updatedAt: Date`,`}`,``,`export function createNote(): Note {`,`  return {`,`    id: crypto.randomUUID(),`,`    createdAt: new Date(),`,`    title,`,`    body: "",`,`    updatedAt: new Date(),`,`  }`,`}`],V={render:function(){let[e,t]=(0,k.useState)([]),n=(n,r,i)=>e.includes(n)?D(i.map(([e,t])=>[`context`,e,t])):(0,A.jsx)(m,{label:`Show ${r} unchanged lines`,onClick:()=>t(e=>[...e,n])},`f${n}`);return(0,A.jsxs)(g,{style:M(),title:`src/notes/notes.ts`,icon:N,added:3,removed:1,numbers:`single`,children:[n(1,5,B.slice(0,5).map((e,t)=>[t+1,e])),D([[`context`,6,`  title: string`],[`context`,7,`  body: string`],[`added`,8,`  pinned: boolean`],[`context`,9,`  updatedAt: Date`],[`context`,10,`}`]]),n(2,4,B.slice(9,13).map((e,t)=>[t+11,e])),D([[`context`,15,`    title,`],[`context`,16,`    body: "",`],[`added`,17,`    pinned: false,`],[`context`,18,`    updatedAt: new Date(),`],[`context`,19,`  }`]]),n(3,11,Array.from({length:11},(e,t)=>[t+20,t===0?`}`:``])),x([{type:`context`,newNumber:32,text:`export function noteUrl(note: Note) {`},{type:`removed`,oldNumber:31,text:`  return "/notes/" + note.id`},{type:`added`,newNumber:33,text:"  return `/notes/${slugify(note.title)}-${note.id}`"},{type:`context`,newNumber:34,text:`}`}])]})}},H=[{id:`search`,rows:[{type:`removed`,oldNumber:2,text:`  const q = query.toLowerCase()`},{type:`removed`,oldNumber:3,text:`  return notes.filter((note) => note.title.toLowerCase().includes(q))`},{type:`added`,newNumber:2,text:`  const q = query.trim().toLowerCase()`},{type:`added`,newNumber:3,text:`  if (!q) return notes`},{type:`added`,newNumber:4,text:`  return notes.filter(`},{type:`added`,newNumber:5,text:`    (note) =>`},{type:`added`,newNumber:6,text:`      note.title.toLowerCase().includes(q) ||`},{type:`added`,newNumber:7,text:`      note.body.toLowerCase().includes(q)`},{type:`added`,newNumber:8,text:`  )`}]},{id:`sort`,rows:[{type:`removed`,oldNumber:7,text:`  return [...notes].sort((a, b) => b.updatedAt - a.updatedAt)`},{type:`added`,newNumber:12,text:`  return [...notes].sort(`},{type:`added`,newNumber:13,text:`    (a, b) => Number(b.pinned) - Number(a.pinned) || b.updatedAt - a.updatedAt`},{type:`added`,newNumber:14,text:`  )`}]}],U={render:function(){let[e,t]=(0,k.useState)({}),n=n=>{let r=e[n.id];return r?x(n.rows.filter(e=>e.type===(r===`accepted`?`added`:`removed`)).map(e=>({...e,type:`context`})),{words:!1}):[...x(n.rows),(0,A.jsxs)(f,{children:[(0,A.jsx)(s,{size:`xs`,onClick:()=>t(e=>({...e,[n.id]:`accepted`})),children:`Accept`}),(0,A.jsx)(s,{size:`xs`,variant:`outline`,onClick:()=>t(e=>({...e,[n.id]:`rejected`})),children:`Reject`})]},`${n.id}-actions`)]},r=H.filter(t=>!e[t.id]),i=e=>r.flatMap(e=>e.rows).filter(t=>t.type===e).length;return(0,A.jsxs)(g,{style:M(600),title:`src/notes/search.ts`,icon:N,added:i(`added`),removed:i(`removed`),numbers:`single`,children:[x([{type:`context`,newNumber:1,text:`export function searchNotes(notes: Note[], query: string) {`}]),n(H[0]),x([{type:`context`,newNumber:9,text:`}`},{type:`context`,newNumber:10,text:``},{type:`context`,newNumber:11,text:`export function sortNotes(notes: Note[]) {`}]),n(H[1]),x([{type:`context`,newNumber:15,text:`}`}])]})}},W={parameters:{layout:`fullscreen`},render:()=>(0,A.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(340px, 1fr))`},children:[`light`,`dark`].map(e=>(0,A.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{padding:24,background:`var(--ds-background)`},children:(0,A.jsxs)(g,{title:`src/notes/sync.ts (${e})`,icon:N,added:2,removed:1,numbers:`single`,children:[D([[`context`,18,`  for (const note of queue) {`],[`removed`,19,`    await api.save(note)`],[`added`,19,`    const saved = await api.save(note).catch(() => null)`],[`added`,20,`    if (!saved) continue`]]),(0,A.jsx)(u,{type:`hunk`,children:`@@ -30,2 +31,2 @@`}),(0,A.jsx)(u,{type:`empty`}),(0,A.jsx)(m,{label:`Show 6 unchanged lines`})]})},e))})},G=[`Playground`,`Demo`,`Split`,`FromTwoVersions`,`FoldedContext`,`ReviewAnAgentsEdit`,`Themes`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'added',
    numbers: 'both',
    code: '  const saved = await api.save(note)',
    guides: true
  },
  argTypes: {
    type: {
      name: 'Type',
      control: 'inline-radio',
      options: ['context', 'added', 'removed', 'empty', 'hunk']
    },
    numbers: {
      name: 'Numbers',
      control: 'inline-radio',
      options: ['both', 'single']
    },
    code: {
      name: 'Code'
    },
    guides: {
      name: 'Indent guides'
    }
  },
  render: ({
    type,
    numbers,
    code,
    guides
  }) => <Diff style={width()} title="src/notes/sync.ts" icon={codeIcon} added={1} removed={0} numbers={numbers}>
      <DiffLine oldNumber={17} newNumber={17} number={17} indent={guides ? undefined : 0}>
        {'for (const note of queue) {'}
      </DiffLine>
      <DiffLine type={type} oldNumber={type === 'added' ? undefined : 18} newNumber={type === 'removed' ? undefined : 18} number={18} indent={guides ? code.length - code.trimStart().length : 0}>
        {type === 'hunk' ? code : highlight(code)}
      </DiffLine>
    </Diff>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Diff style={width()} title="src/notes/sync.ts" icon={codeIcon} added={5} removed={1} numbers="single">
      {lines([['context', 18, '  for (const note of queue) {'], ['removed', 19, '    await api.save(note)'], ['added', 19, '    const saved = await api.save(note).catch(() => null)'], ['added', 20, '    if (!saved) {'], ['added', 21, '      offline.push(note)'], ['added', 22, '      continue'], ['added', 23, '    }'], ['context', 24, '    synced.add(note.id)'], ['context', 25, '  }']])}
    </Diff>
}`,...F.parameters?.docs?.source},description:{story:`Figma demo "Diff": a change that retries a failed save, in one column of numbers.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Diff style={width(600)} title="src/billing/invoice.ts" icon={codeIcon} added={5} removed={4}>
      <DiffSplit before={side([['context', 4, 'export function invoiceTotal(items: LineItem[]) {'], ['removed', 5, '  let total = 0'], ['removed', 6, '  for (const item of items) total += item.price'], ['removed', 7, '  return total'], ['empty', null, ''], ['context', 8, '}'], ['context', 9, 'export function dueDate(issued: Date) {'], ['hunk', null, '@@ -21,3 +22,3 @@'], ['context', 21, 'export function invoiceTitle(invoice: Invoice) {'], ['removed', 22, '  return "Invoice " + invoice.number'], ['context', 23, '}']])} after={side([['context', 4, 'export function invoiceTotal(items: LineItem[]) {'], ['added', 5, '  return items.reduce('], ['added', 6, '    (total, item) => total + item.price * item.quantity,'], ['added', 7, '    0'], ['added', 8, '  )'], ['context', 9, '}'], ['context', 10, 'export function dueDate(issued: Date) {'], ['hunk', null, '@@ -21,3 +22,3 @@'], ['context', 22, 'export function invoiceTitle(invoice: Invoice) {'], ['added', 23, '  return \`Invoice \${invoice.number} · \${invoice.customer}\`'], ['context', 24, '}']])} />
    </Diff>
}`,...I.parameters?.docs?.source},description:{story:`Figma demo "Split": the old file on the left, the new one on the right.`,...I.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rows = diffLines(PACKAGE_BEFORE, PACKAGE_AFTER);
    return <Diff style={width(440)} title="package.json" icon={<RiFileCodeLine />} added={rows.filter(r => r.type === 'added').length} removed={rows.filter(r => r.type === 'removed').length}>
        {renderRows(rows)}
      </Diff>;
  }
}`,...z.parameters?.docs?.source},description:{story:`Figma demo "From two versions": diffLines and diffWords compute the lines and changed words from two package.json files.`,...z.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState<number[]>([]);
    const fold = (id: number, count: number, hidden: [number, string][]) => open.includes(id) ? lines(hidden.map(([n, t]) => ['context', n, t])) : <DiffFold key={\`f\${id}\`} label={\`Show \${count} unchanged lines\`} onClick={() => setOpen(o => [...o, id])} />;
    return <Diff style={width()} title="src/notes/notes.ts" icon={codeIcon} added={3} removed={1} numbers="single">
        {fold(1, 5, NOTES_FILE.slice(0, 5).map((t, i) => [i + 1, t]))}
        {lines([['context', 6, '  title: string'], ['context', 7, '  body: string'], ['added', 8, '  pinned: boolean'], ['context', 9, '  updatedAt: Date'], ['context', 10, '}']])}
        {fold(2, 4, NOTES_FILE.slice(9, 13).map((t, i) => [i + 11, t]))}
        {lines([['context', 15, '    title,'], ['context', 16, '    body: "",'], ['added', 17, '    pinned: false,'], ['context', 18, '    updatedAt: new Date(),'], ['context', 19, '  }']])}
        {fold(3, 11, Array.from({
        length: 11
      }, (_, i) => [i + 20, i === 0 ? '}' : '']))}
        {renderRows([{
        type: 'context',
        newNumber: 32,
        text: 'export function noteUrl(note: Note) {'
      }, {
        type: 'removed',
        oldNumber: 31,
        text: '  return "/notes/" + note.id'
      }, {
        type: 'added',
        newNumber: 33,
        text: '  return \`/notes/\${slugify(note.title)}-\${note.id}\`'
      }, {
        type: 'context',
        newNumber: 34,
        text: '}'
      }])}
      </Diff>;
  }
}`,...V.parameters?.docs?.source},description:{story:`Figma demo "Folded context": unchanged lines stay folded until their button shows them.`,...V.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [decisions, setDecisions] = useState<Record<string, 'accepted' | 'rejected'>>({});
    const hunk = (h: Hunk) => {
      const decision = decisions[h.id];
      if (decision) {
        const kept = h.rows.filter(r => r.type === (decision === 'accepted' ? 'added' : 'removed'));
        return renderRows(kept.map(r => ({
          ...r,
          type: 'context'
        })), {
          words: false
        });
      }
      return [...renderRows(h.rows), <DiffActions key={\`\${h.id}-actions\`}>
          <Button size="xs" onClick={() => setDecisions(d => ({
          ...d,
          [h.id]: 'accepted'
        }))}>
            Accept
          </Button>
          <Button size="xs" variant="outline" onClick={() => setDecisions(d => ({
          ...d,
          [h.id]: 'rejected'
        }))}>
            Reject
          </Button>
        </DiffActions>];
    };
    const pending = REVIEW_HUNKS.filter(h => !decisions[h.id]);
    const count = (t: 'added' | 'removed') => pending.flatMap(h => h.rows).filter(r => r.type === t).length;
    return <Diff style={width(600)} title="src/notes/search.ts" icon={codeIcon} added={count('added')} removed={count('removed')} numbers="single">
        {renderRows([{
        type: 'context',
        newNumber: 1,
        text: 'export function searchNotes(notes: Note[], query: string) {'
      }])}
        {hunk(REVIEW_HUNKS[0])}
        {renderRows([{
        type: 'context',
        newNumber: 9,
        text: '}'
      }, {
        type: 'context',
        newNumber: 10,
        text: ''
      }, {
        type: 'context',
        newNumber: 11,
        text: 'export function sortNotes(notes: Note[]) {'
      }])}
        {hunk(REVIEW_HUNKS[1])}
        {renderRows([{
        type: 'context',
        newNumber: 15,
        text: '}'
      }])}
      </Diff>;
  }
}`,...U.parameters?.docs?.source},description:{story:`Figma demo "Review an agent's edit": accept or reject each change; the diff keeps what you chose.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      padding: 24,
      background: 'var(--ds-background)'
    }}>
          <Diff title={\`src/notes/sync.ts (\${scheme})\`} icon={codeIcon} added={2} removed={1} numbers="single">
            {lines([['context', 18, '  for (const note of queue) {'], ['removed', 19, '    await api.save(note)'], ['added', 19, '    const saved = await api.save(note).catch(() => null)'], ['added', 20, '    if (!saved) continue']])}
            <DiffLine type="hunk">@@ -30,2 +31,2 @@</DiffLine>
            <DiffLine type="empty" />
            <DiffFold label="Show 6 unchanged lines" />
          </Diff>
        </div>)}
    </div>
}`,...W.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...W.parameters?.docs?.description}}}})))()}K();export{F as Demo,V as FoldedContext,z as FromTwoVersions,P as Playground,U as ReviewAnAgentsEdit,I as Split,W as Themes,G as __namedExportsOrder,j as default};