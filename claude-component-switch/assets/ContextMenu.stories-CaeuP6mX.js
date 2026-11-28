import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-q-o9wUds.js";import{_ as r,a as i,c as a,d as o,f as s,g as c,h as l,l as u,m as d,n as f,o as p,s as m,u as h,v as g}from"./DropdownMenu-Ceky9PW4.js";function _(e,t,n,r){let i=document.documentElement.clientWidth,a=document.documentElement.clientHeight;return{left:e+n>i?Math.max(0,e-n):e,top:t+r>a?Math.max(0,a-r):t}}function v({trigger:e,children:t,"aria-label":n,onOpenChange:i,disabled:a=!1,className:o,style:s}){let l=`${(0,y.useId)()}-menu`,[u,f]=(0,y.useState)(null),p=u!==null,m=(0,y.useRef)(null),h=(0,y.useRef)(null),v=(0,y.useRef)(null),S=(0,y.useRef)(null),C=(0,y.useRef)(0),w=g(),T=(e,t,n)=>{S.current=n,f({x:e,y:t}),p||i?.(!0)},E=e=>{p&&(f(null),i?.(!1),e&&h.current?.focus())};(0,y.useLayoutEffect)(()=>{let e=v.current;if(!u||!e)return;let{left:t,top:n}=_(u.x,u.y,e.offsetWidth,e.offsetHeight);e.style.left=`${t}px`,e.style.top=`${n}px`,S.current&&=((S.current===`first`?c(e)[0]??e:e).focus(),null)},[u]),(0,y.useEffect)(()=>{if(!p)return;let e=e=>{m.current?.contains(e.target)||E(!1)},t=e=>{v.current?.contains(e.target)||E(!1)},n=()=>E(!1);return document.addEventListener(`pointerdown`,e),document.addEventListener(`focusin`,e),document.addEventListener(`scroll`,t,!0),window.addEventListener(`resize`,n),window.addEventListener(`blur`,n),()=>{document.removeEventListener(`pointerdown`,e),document.removeEventListener(`focusin`,e),document.removeEventListener(`scroll`,t,!0),window.removeEventListener(`resize`,n),window.removeEventListener(`blur`,n)}});let{ref:D,onContextMenu:O,onKeyDown:k,tabIndex:A}=e.props;return(0,b.jsx)(d.Provider,{value:{close:E},children:(0,b.jsxs)(`div`,{ref:m,className:`ds-context-menu`,children:[(0,y.cloneElement)(e,{ref:e=>{h.current=e,typeof D==`function`?D(e):D&&(D.current=e)},"data-open":p||void 0,tabIndex:A??0,"aria-controls":p?l:void 0,onContextMenu:e=>{O?.(e),!(e.defaultPrevented||a)&&(e.preventDefault(),!(p&&Date.now()-C.current<500)&&T(e.clientX,e.clientY,`menu`))},onKeyDown:e=>{if(k?.(e),!(e.defaultPrevented||a||e.target!==e.currentTarget)&&(e.key===`ContextMenu`||e.key===`F10`&&e.shiftKey)){e.preventDefault(),C.current=Date.now();let t=e.currentTarget.getBoundingClientRect();T(t.left,t.top,`first`)}}}),(0,b.jsx)(`div`,{ref:v,id:l,role:`menu`,tabIndex:-1,className:x(`ds-dropdown__content`,o),style:s,"aria-label":n,hidden:!p,onContextMenu:e=>e.preventDefault(),onKeyDown:e=>{e.key===`Tab`?E(!1):w(e,()=>E(!0))},onMouseLeave:r,children:t})]})})}var y,b,x;function S(){return(S=e((()=>{y=n(),l(),b=t(),x=(...e)=>e.filter(Boolean).join(` `)||void 0,v.__docgenInfo={description:`Figma "Context Menu": Dropdown Menu Content opened at the pointer.`,methods:[],displayName:`ContextMenu`,props:{trigger:{required:!0,tsType:{name:`ReactElement`,elements:[{name:`intersection`,raw:`HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> }`,elements:[{name:`HTMLAttributes`,elements:[{name:`HTMLElement`}],raw:`HTMLAttributes<HTMLElement>`},{name:`signature`,type:`object`,raw:`{ ref?: Ref<HTMLElement> }`,signature:{properties:[{key:`ref`,value:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`,required:!1}}]}}]}],raw:`ReactElement<HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> }>`},description:"The area that opens the menu on a right-click, or with Shift+F10 or the Menu key while it has focus. It gets a\n`tabIndex` of 0 (unless it sets one), `data-open` while the menu is open, and the handlers."},children:{required:!0,tsType:{name:`ReactNode`},description:`Figma "items": DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuSub, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRow.`},"aria-label":{required:!0,tsType:{name:`string`},description:`Names the menu (the area does not), e.g. "Photo actions".`},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:`Called when the menu opens or closes.`},disabled:{required:!1,tsType:{name:`boolean`},description:`Leaves the browser's own menu in place.`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Class for the menu (Figma "Dropdown Menu Content"), e.g. to set its width.`},style:{required:!1,tsType:{name:`CSSProperties`},description:`Style for the menu, e.g. its width; its position is set by the component.`}}}})))()}var C,w,T,E;function D(){return(D=e((()=>{l(),C=t(),w=(e,t)=>(0,C.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.875,strokeLinecap:`round`,strokeLinejoin:`round`,style:t?{color:t}:void 0,"aria-hidden":!0,children:e}),T={circleDot:e=>w((0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,C.jsx)(`circle`,{cx:`12`,cy:`12`,r:`1`})]}),e),circleDashed:e=>w((0,C.jsx)(`path`,{d:`M10.1 2.18a9.93 9.93 0 0 1 3.8 0M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7M21.82 10.1a9.93 9.93 0 0 1 0 3.8M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69M13.9 21.82a9.94 9.94 0 0 1-3.8 0M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7M2.18 13.9a9.93 9.93 0 0 1 0-3.8M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69`}),e),circle:w((0,C.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`})),circleCheck:e=>w((0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,C.jsx)(`path`,{d:`m9 12 2 2 4-4`})]}),e),circleX:w((0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,C.jsx)(`path`,{d:`m15 9-6 6M9 9l6 6`})]})),user:w((0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`circle`,{cx:`12`,cy:`8`,r:`5`}),(0,C.jsx)(`path`,{d:`M20 21a8 8 0 0 0-16 0`})]})),signal:w((0,C.jsx)(`path`,{d:`M2 20h.01M7 20v-4M12 20v-8M17 20V8`})),tag:w((0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`}),(0,C.jsx)(`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`})]})),link:w((0,C.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71`})),hash:w((0,C.jsx)(`path`,{d:`M4 9h16M4 15h16M10 3 8 21M16 3l-2 18`})),trash:w((0,C.jsx)(`path`,{d:`M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6`})),copy:w((0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`}),(0,C.jsx)(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})),download:w((0,C.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3`})),share:w((0,C.jsx)(`path`,{d:`M12 2v13M16 6l-4-4-4 4M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8`})),heart:w((0,C.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`})),rotate:w((0,C.jsx)(`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5`})),image:w((0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`}),(0,C.jsx)(`circle`,{cx:`9`,cy:`9`,r:`2`}),(0,C.jsx)(`path`,{d:`m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`})]})),eyeOff:w((0,C.jsx)(`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49M14.084 14.158a3 3 0 0 1-4.242-4.242M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143M2 2l20 20`})),reply:w((0,C.jsx)(`path`,{d:`M9 17 4 12l5-5M20 18v-2a4 4 0 0 0-4-4H4`})),forward:w((0,C.jsx)(`path`,{d:`m15 17 5-5-5-5M4 18v-2a4 4 0 0 1 4-4h12`})),pin:w((0,C.jsx)(`path`,{d:`M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`})),mail:w((0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`rect`,{width:`20`,height:`16`,x:`2`,y:`4`,rx:`2`}),(0,C.jsx)(`path`,{d:`m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`})]})),pencil:w((0,C.jsx)(`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4`})),smilePlus:w((0,C.jsx)(`path`,{d:`M22 11v1a10 10 0 1 1-9-10M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M16 5h6M19 2v6`}))},E=(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(m,{children:`IMG_2041.HEIC`}),(0,C.jsx)(p,{icon:T.copy,shortcut:`⌘C`,children:`Copy image`}),(0,C.jsx)(p,{icon:T.download,shortcut:`⇧⌘E`,children:`Export…`}),(0,C.jsx)(p,{icon:T.share,children:`Share…`}),(0,C.jsx)(o,{}),(0,C.jsx)(p,{icon:T.heart,shortcut:`.`,children:`Favorite`}),(0,C.jsx)(p,{icon:T.rotate,shortcut:`⌘R`,children:`Rotate`}),(0,C.jsx)(p,{icon:T.image,children:`Set as wallpaper`}),(0,C.jsx)(o,{}),(0,C.jsx)(p,{icon:T.eyeOff,shortcut:`⌘L`,children:`Hide photo`}),(0,C.jsx)(p,{type:`destructive`,icon:T.trash,shortcut:`⌘⌫`,children:`Delete photo`})]})})))()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{O=n(),l(),S(),D(),k=t(),A={title:`Components/Context Menu`,parameters:{docs:{description:{component:'Implements the Sort UI 2.0 page **Context Menu** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=161-1174)). Figma has no component set for it: its demos are **Dropdown Menu Content**, **Item**, **Label** and **Separator** opened at the pointer, so `ContextMenu` takes the Dropdown Menu parts as children. Right-click the area (or focus it and press Shift+F10 or the Menu key); the keys then work as in Dropdown Menu. `DropdownMenuRow` with `DropdownMenuIconItem`s draws the "Chat message" demo\'s reactions.'}}}},j={width:224},M={display:`grid`,placeItems:`center`,boxSizing:`border-box`,width:360,height:200,border:`1px dashed var(--ds-border)`,borderRadius:8,color:`var(--ds-muted-foreground)`,fontFamily:`var(--ds-font-sans)`,fontSize:14,userSelect:`none`,outlineOffset:2},N=e=>(0,k.jsx)(`div`,{style:{minHeight:480},children:(0,k.jsx)(e,{})}),P={decorators:[N],render:function(){let[e,t]=(0,O.useState)(!0);return(0,k.jsxs)(v,{"aria-label":`Canvas`,trigger:(0,k.jsx)(`div`,{style:M,children:`Right-click here`}),style:j,children:[(0,k.jsx)(p,{children:`Paste here`}),(0,k.jsx)(o,{}),(0,k.jsx)(p,{shortcut:`⌘/`,children:`Show/Hide UI`}),(0,k.jsx)(p,{shortcut:`⇧C`,children:`Show/Hide comments`}),(0,k.jsxs)(s,{label:`Development`,children:[(0,k.jsx)(p,{children:`New plugin`}),(0,k.jsx)(p,{children:`Import plugin`}),(0,k.jsx)(o,{}),(0,k.jsx)(p,{children:`View API documentation`}),(0,k.jsx)(p,{children:`Show/Hide console`}),(0,k.jsx)(p,{children:`Use developer VM`}),(0,k.jsx)(f,{type:`menubar`,checked:e,onCheckedChange:t,children:`Hot reload plugin`})]}),(0,k.jsx)(o,{}),(0,k.jsx)(p,{shortcut:`/`,children:`Cursor chat`}),(0,k.jsx)(p,{shortcut:`⌘K`,children:`Actions…`}),(0,k.jsx)(s,{label:`Plugins`,children:(0,k.jsx)(p,{children:`Manage plugins…`})})]})}},F=[{value:`backlog`,label:`Backlog`,icon:T.circleDashed()},{value:`todo`,label:`Todo`,icon:T.circle},{value:`in-progress`,label:`In Progress`,icon:T.circleDot(`var(--ds-palette-orange-solid)`)},{value:`in-review`,label:`In Review`,icon:T.circleDashed(`var(--ds-palette-green-solid)`)},{value:`done`,label:`Done`,icon:T.circleCheck(`var(--ds-palette-blue-solid)`)},{value:`canceled`,label:`Canceled`,icon:T.circleX}],I={decorators:[N],render:function(){let[e,t]=(0,O.useState)(`in-progress`),n=F.find(t=>t.value===e);return(0,k.jsxs)(v,{"aria-label":`Issue`,trigger:(0,k.jsx)(`div`,{style:M,children:`Right-click the issue`}),children:[(0,k.jsx)(s,{label:`Status`,icon:n.icon,children:(0,k.jsx)(a,{"aria-label":`Status`,value:e,onValueChange:t,children:F.map(e=>(0,k.jsx)(u,{value:e.value,icon:e.icon,children:e.label},e.value))})}),(0,k.jsx)(s,{label:`Assignee`,icon:T.user,children:(0,k.jsx)(p,{children:`Assign to me`})}),(0,k.jsx)(s,{label:`Priority`,icon:T.signal,children:(0,k.jsx)(p,{children:`Urgent`})}),(0,k.jsx)(s,{label:`Labels`,icon:T.tag,children:(0,k.jsx)(p,{children:`Bug`})}),(0,k.jsx)(o,{}),(0,k.jsx)(p,{icon:T.link,shortcut:`⇧⌘C`,children:`Copy link`}),(0,k.jsx)(p,{icon:T.hash,shortcut:`⌘.`,children:`Copy ID`}),(0,k.jsx)(o,{}),(0,k.jsx)(p,{type:`destructive`,icon:T.trash,shortcut:`⌘⌫`,children:`Delete`})]})}},L={decorators:[N],render:()=>(0,k.jsx)(v,{"aria-label":`Photo`,style:j,trigger:(0,k.jsx)(`div`,{style:M,children:`Right-click the photo`}),children:E})},R=[{emoji:`🙂`,label:`Smile`},{emoji:`😴`,label:`Sleepy`},{emoji:`🫢`,label:`Surprised`},{emoji:`😮‍💨`,label:`Phew`},{emoji:`🫠`,label:`Melting`}],z={decorators:[N],render:function(){let[e,t]=(0,O.useState)(null);return(0,k.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,k.jsxs)(v,{"aria-label":`Message`,style:j,trigger:(0,k.jsx)(`div`,{style:M,children:`Right-click the message`}),children:[(0,k.jsxs)(h,{"aria-label":`Reactions`,children:[R.map(e=>(0,k.jsx)(i,{"aria-label":e.label,onClick:()=>t(e.emoji),children:e.emoji},e.label)),(0,k.jsx)(i,{"aria-label":`Add reaction`,children:T.smilePlus})]}),(0,k.jsx)(o,{}),(0,k.jsx)(p,{icon:T.reply,shortcut:`R`,children:`Reply`}),(0,k.jsx)(p,{icon:T.forward,children:`Forward`}),(0,k.jsx)(p,{icon:T.copy,shortcut:`⌘C`,children:`Copy text`}),(0,k.jsx)(p,{icon:T.pin,children:`Pin to chat`}),(0,k.jsx)(p,{icon:T.mail,shortcut:`U`,children:`Mark as unread`}),(0,k.jsx)(o,{}),(0,k.jsx)(p,{icon:T.pencil,shortcut:`E`,children:`Edit`}),(0,k.jsx)(p,{type:`destructive`,icon:T.trash,shortcut:`⌫`,children:`Delete message`})]}),(0,k.jsxs)(`span`,{style:{fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},children:[`Reaction: `,e??`none`]})]})}},B={parameters:{layout:`fullscreen`},render:()=>(0,k.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,k.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,minHeight:520},children:(0,k.jsx)(v,{"aria-label":`Photo (${e})`,style:j,trigger:(0,k.jsxs)(`div`,{style:{...M,width:`100%`},children:[e===`light`?`Light`:`Dark`,`: right-click here`]}),children:E})},e))})},V=[`Default`,`Issue`,`Photo`,`ChatMessage`,`Themes`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  decorators: [room],
  render: function Render() {
    const [hotReload, setHotReload] = useState(true);
    return <ContextMenu aria-label="Canvas" trigger={<div style={area}>Right-click here</div>} style={menuWidth}>
        <DropdownMenuItem>Paste here</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem shortcut="⌘/">Show/Hide UI</DropdownMenuItem>
        <DropdownMenuItem shortcut="⇧C">Show/Hide comments</DropdownMenuItem>
        <DropdownMenuSub label="Development">
          <DropdownMenuItem>New plugin</DropdownMenuItem>
          <DropdownMenuItem>Import plugin</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>View API documentation</DropdownMenuItem>
          <DropdownMenuItem>Show/Hide console</DropdownMenuItem>
          <DropdownMenuItem>Use developer VM</DropdownMenuItem>
          <DropdownMenuCheckboxItem type="menubar" checked={hotReload} onCheckedChange={setHotReload}>
            Hot reload plugin
          </DropdownMenuCheckboxItem>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem shortcut="/">Cursor chat</DropdownMenuItem>
        <DropdownMenuItem shortcut="⌘K">Actions…</DropdownMenuItem>
        <DropdownMenuSub label="Plugins">
          <DropdownMenuItem>Manage plugins…</DropdownMenuItem>
        </DropdownMenuSub>
      </ContextMenu>;
  }
}`,...P.parameters?.docs?.source},description:{story:`Figma demo "Context Menu": shortcuts, a submenu with a menubar check item.`,...P.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  decorators: [room],
  render: function Render() {
    const [status, setStatus] = useState('in-progress');
    const current = statuses.find(s => s.value === status)!;
    return <ContextMenu aria-label="Issue" trigger={<div style={area}>Right-click the issue</div>}>
        <DropdownMenuSub label="Status" icon={current.icon}>
          <DropdownMenuRadioGroup aria-label="Status" value={status} onValueChange={setStatus}>
            {statuses.map(s => <DropdownMenuRadioItem key={s.value} value={s.value} icon={s.icon}>
                {s.label}
              </DropdownMenuRadioItem>)}
          </DropdownMenuRadioGroup>
        </DropdownMenuSub>
        <DropdownMenuSub label="Assignee" icon={icons.user}>
          <DropdownMenuItem>Assign to me</DropdownMenuItem>
        </DropdownMenuSub>
        <DropdownMenuSub label="Priority" icon={icons.signal}>
          <DropdownMenuItem>Urgent</DropdownMenuItem>
        </DropdownMenuSub>
        <DropdownMenuSub label="Labels" icon={icons.tag}>
          <DropdownMenuItem>Bug</DropdownMenuItem>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={icons.link} shortcut="⇧⌘C">
          Copy link
        </DropdownMenuItem>
        <DropdownMenuItem icon={icons.hash} shortcut="⌘.">
          Copy ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem type="destructive" icon={icons.trash} shortcut="⌘⌫">
          Delete
        </DropdownMenuItem>
      </ContextMenu>;
  }
}`,...I.parameters?.docs?.source},description:{story:`Figma demo "Issue": icons, a status submenu with one choice, and a destructive item.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  decorators: [room],
  render: () => <ContextMenu aria-label="Photo" style={menuWidth} trigger={<div style={area}>Right-click the photo</div>}>
      {photoItems}
    </ContextMenu>
}`,...L.parameters?.docs?.source},description:{story:`Figma demo "Photo": a label naming the file over the actions.`,...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  decorators: [room],
  render: function Render() {
    const [reaction, setReaction] = useState<string | null>(null);
    return <div style={{
      display: 'grid',
      gap: 12
    }}>
        <ContextMenu aria-label="Message" style={menuWidth} trigger={<div style={area}>Right-click the message</div>}>
          <DropdownMenuRow aria-label="Reactions">
            {reactions.map(r => <DropdownMenuIconItem key={r.label} aria-label={r.label} onClick={() => setReaction(r.emoji)}>
                {r.emoji}
              </DropdownMenuIconItem>)}
            <DropdownMenuIconItem aria-label="Add reaction">{icons.smilePlus}</DropdownMenuIconItem>
          </DropdownMenuRow>
          <DropdownMenuSeparator />
          <DropdownMenuItem icon={icons.reply} shortcut="R">
            Reply
          </DropdownMenuItem>
          <DropdownMenuItem icon={icons.forward}>Forward</DropdownMenuItem>
          <DropdownMenuItem icon={icons.copy} shortcut="⌘C">
            Copy text
          </DropdownMenuItem>
          <DropdownMenuItem icon={icons.pin}>Pin to chat</DropdownMenuItem>
          <DropdownMenuItem icon={icons.mail} shortcut="U">
            Mark as unread
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem icon={icons.pencil} shortcut="E">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem type="destructive" icon={icons.trash} shortcut="⌫">
            Delete message
          </DropdownMenuItem>
        </ContextMenu>
        <span style={{
        fontFamily: 'var(--ds-font-sans)',
        fontSize: 12,
        color: 'var(--ds-muted-foreground)'
      }}>Reaction: {reaction ?? 'none'}</span>
      </div>;
  }
}`,...z.parameters?.docs?.source},description:{story:`Figma demo "Chat message": a row of reactions over the actions.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
      minHeight: 520
    }}>
          <ContextMenu aria-label={\`Photo (\${scheme})\`} style={menuWidth} trigger={<div style={{
        ...area,
        width: '100%'
      }}>{scheme === 'light' ? 'Light' : 'Dark'}: right-click here</div>}>
            {photoItems}
          </ContextMenu>
        </div>)}
    </div>
}`,...B.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...B.parameters?.docs?.description}}}})))()}H();export{z as ChatMessage,P as Default,I as Issue,L as Photo,B as Themes,V as __namedExportsOrder,A as default};