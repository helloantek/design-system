import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-Bwlfjp_V.js";import{i as r,n as i,r as a,t as o}from"./Avatar.fixtures-DrWRXd-0.js";import{n as s,t as c}from"./Button-MntKCVMx.js";function l(){let e=(0,E.useContext)(A);if(!e)throw Error(`Dropdown menu parts must be used inside <DropdownMenu>`);return e}function u(){let e=(0,E.useRef)({text:``,at:0});return(t,n,r)=>{let i=t.currentTarget;if(t.defaultPrevented||t.target.closest(`[role="menu"]`)!==i)return;let a=k(i),o=a.indexOf(document.activeElement),s=e=>a[(e+a.length)%a.length]?.focus(),{key:c}=t,l=c.length===1&&c!==` `&&!t.ctrlKey&&!t.metaKey&&!t.altKey,u=!0;if(c===`ArrowDown`)s(o+1);else if(c===`ArrowUp`)s(o<0?-1:o-1);else if(c===`Home`)s(0);else if(c===`End`)s(-1);else if((c===`Enter`||c===` `)&&o>=0)a[o].click();else if(c===`Escape`)n();else if(c===`ArrowLeft`&&r)r();else if(l){let t=Date.now(),n=e.current;n.text=t-n.at>500?c.toLowerCase():n.text+c.toLowerCase(),n.at=t;let r=n.text.split(``).every(e=>e===n.text[0])?n.text[0]:n.text;a.map((e,t)=>a[(o+1+t)%a.length]).find(e=>ne(e).startsWith(r))?.focus()}else u=!1;u&&t.preventDefault()}}function d(e){let t=e.currentTarget,n=document.activeElement;t.contains(n)&&n?.closest(`[role="menu"]`)===t&&n.getAttribute(`aria-expanded`)!==`true`&&t.focus()}function f(e,t){let n=e.currentTarget;t?n.closest(`[role="menu"]`)?.focus():document.activeElement!==n&&n.focus()}function p({trigger:e,children:t,open:n,defaultOpen:r=!1,onOpenChange:i,align:a=`start`,className:o,"aria-label":s}){let c=(0,E.useId)(),l=e.props.id??`${c}-trigger`,f=`${c}-menu`,[p,m]=(0,E.useState)(r),h=n??p,g=(0,E.useRef)(null),_=(0,E.useRef)(null),v=(0,E.useRef)(null),y=(0,E.useRef)(null),b=u(),x=e=>{n===void 0&&m(e),i?.(e)},S=e=>{y.current=e,x(!0)},C=e=>{x(!1),e&&_.current?.focus()};(0,E.useEffect)(()=>{let e=v.current;if(!h||!e||!y.current)return;let t=k(e);((y.current===`first`?t[0]:y.current===`last`?t[t.length-1]:void 0)??e).focus(),y.current=null},[h]),(0,E.useEffect)(()=>{if(!h)return;let e=e=>{g.current?.contains(e.target)||C(!1)};return document.addEventListener(`pointerdown`,e),document.addEventListener(`focusin`,e),()=>{document.removeEventListener(`pointerdown`,e),document.removeEventListener(`focusin`,e)}});let{ref:w,onClick:T,onKeyDown:ee}=e.props;return(0,D.jsx)(A.Provider,{value:{close:C},children:(0,D.jsxs)(`div`,{ref:g,className:`ds-dropdown`,children:[(0,E.cloneElement)(e,{ref:e=>{_.current=e,typeof w==`function`?w(e):w&&(w.current=e)},id:l,"aria-haspopup":`menu`,"aria-expanded":h,"aria-controls":h?f:void 0,onClick:e=>{T?.(e),!e.defaultPrevented&&(h?C(!1):S(e.detail===0?`first`:`menu`))},onKeyDown:e=>{ee?.(e),!e.defaultPrevented&&(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),S(e.key===`ArrowDown`?`first`:`last`))}}),(0,D.jsx)(`div`,{ref:v,id:f,role:`menu`,tabIndex:-1,className:O(`ds-dropdown__content`,a===`end`&&`ds-dropdown__content--end`,o),"aria-labelledby":s===void 0?l:void 0,"aria-label":s,hidden:!h,onKeyDown:e=>{e.key===`Tab`?C(!1):b(e,()=>C(!0))},onMouseLeave:d,children:t})]})})}function m({children:e,onClose:t,className:n,onKeyDown:r,onMouseLeave:i,...a}){let o=u();return(0,D.jsx)(A.Provider,{value:{close:()=>t?.()},children:(0,D.jsx)(`div`,{role:`menu`,tabIndex:-1,...a,className:O(`ds-dropdown__content`,n),onKeyDown:e=>{r?.(e),e.key===`Tab`?t?.():o(e,()=>t?.())},onMouseLeave:e=>{i?.(e),d(e)},children:e})})}function h({icon:e,children:t,shortcut:n}){return(0,D.jsxs)(D.Fragment,{children:[e&&(0,D.jsx)(`span`,{className:`ds-dropdown__icon`,"aria-hidden":!0,children:e}),(0,D.jsx)(`span`,{className:`ds-dropdown__text`,children:t}),n!==void 0&&(0,D.jsx)(`kbd`,{className:`ds-dropdown__shortcut`,children:n})]})}function g({type:e=`item`,icon:t,shortcut:n,inset:r=!1,disabled:i=!1,className:a,children:o,onClick:s,onMouseMove:c,...u}){let d=l();return(0,D.jsx)(`div`,{role:`menuitem`,tabIndex:-1,"aria-disabled":i||void 0,...u,className:O(`ds-dropdown__item`,e===`destructive`&&`ds-dropdown__item--destructive`,r&&`ds-dropdown__item--inset`,a),onMouseMove:e=>{c?.(e),f(e,i)},onClick:e=>{i||(s?.(e),e.defaultPrevented||d.close(!0))},children:(0,D.jsx)(h,{icon:t,shortcut:n,children:o})})}function _({role:e,checked:t,onToggle:n,type:r=`checkbox`,icon:i,shortcut:a,inset:o=!1,disabled:s=!1,className:c,children:l,onClick:u,onMouseMove:d,...p}){return(0,D.jsxs)(`div`,{tabIndex:-1,"aria-disabled":s||void 0,...p,role:e,"aria-checked":t,className:O(`ds-dropdown__item`,`ds-dropdown__item--${r}`,o&&`ds-dropdown__item--inset`,c),onMouseMove:e=>{d?.(e),f(e,s)},onClick:e=>{s||(u?.(e),e.defaultPrevented||n())},children:[(0,D.jsx)(`span`,{className:`ds-dropdown__check`,"aria-hidden":!0,children:ee}),(0,D.jsx)(h,{icon:i,shortcut:a,children:l})]})}function v({checked:e,defaultChecked:t=!1,onCheckedChange:n,...r}){let[i,a]=(0,E.useState)(t),o=e??i,s=()=>{e===void 0&&a(!o),n?.(!o)};return(0,D.jsx)(_,{...r,role:`menuitemcheckbox`,checked:o,onToggle:s})}function y({value:e,defaultValue:t=null,onValueChange:n,label:r,children:i,...a}){let[o,s]=(0,E.useState)(t),c=e===void 0?o:e;return(0,D.jsx)(j.Provider,{value:{value:c,select:t=>{e===void 0&&s(t),t!==c&&n?.(t)}},children:(0,D.jsx)(C,{...a,label:r,children:i})})}function b({value:e,...t}){let n=(0,E.useContext)(j);if(!n)throw Error(`<DropdownMenuRadioItem> must be used inside <DropdownMenuRadioGroup>`);return(0,D.jsx)(_,{...t,role:`menuitemradio`,checked:n.value===e,onToggle:()=>n.select(e)})}function x({label:e,icon:t,inset:n=!1,disabled:r=!1,className:i,contentClassName:a,children:o,onClick:s,onMouseMove:c,onKeyDown:p,...m}){l();let g=(0,E.useId)(),[_,v]=(0,E.useState)(!1),y=(0,E.useRef)(null),b=(0,E.useRef)(null),x=(0,E.useRef)(null),S=(0,E.useRef)(!1),C=u(),w=e=>{r||(S.current=e,v(!0))},T=()=>{v(!1),b.current?.focus()};return(0,E.useEffect)(()=>{_&&S.current&&x.current&&(k(x.current)[0]?.focus(),S.current=!1)}),(0,E.useEffect)(()=>{if(!_)return;let e=e=>{y.current?.contains(e.target)||v(!1)};return document.addEventListener(`focusin`,e),()=>document.removeEventListener(`focusin`,e)},[_]),(0,D.jsxs)(`div`,{ref:y,className:`ds-dropdown__sub`,role:`none`,children:[(0,D.jsxs)(`div`,{ref:b,role:`menuitem`,tabIndex:-1,"aria-disabled":r||void 0,"aria-haspopup":`menu`,"aria-expanded":_,"aria-controls":_?`${g}-menu`:void 0,id:`${g}-trigger`,...m,className:O(`ds-dropdown__item`,n&&`ds-dropdown__item--inset`,i),onMouseMove:e=>{c?.(e),f(e,r),_||w(!1)},onClick:e=>{s?.(e),e.defaultPrevented||w(!1)},onKeyDown:e=>{p?.(e),!e.defaultPrevented&&[`ArrowRight`,`Enter`,` `].includes(e.key)&&(e.preventDefault(),w(!0))},children:[(0,D.jsx)(h,{icon:t,children:e}),(0,D.jsx)(`span`,{className:`ds-dropdown__chevron`,"aria-hidden":!0,children:te})]}),(0,D.jsx)(`div`,{ref:x,id:`${g}-menu`,role:`menu`,tabIndex:-1,className:O(`ds-dropdown__content`,a),"aria-labelledby":m.id??`${g}-trigger`,hidden:!_,onKeyDown:e=>C(e,T,T),onMouseLeave:d,children:o})]})}function S({size:e=`xs`,inset:t=!1,className:n,children:r,...i}){return(0,D.jsx)(`div`,{role:`presentation`,...i,className:O(`ds-dropdown__label`,e===`sm`&&`ds-dropdown__label--sm`,t&&`ds-dropdown__label--inset`,n),children:(0,D.jsx)(`span`,{children:r})})}function C({label:e,labelSize:t,labelInset:n,children:r,...i}){let a=(0,E.useId)();return(0,D.jsxs)(`div`,{role:`group`,"aria-labelledby":e===void 0?void 0:a,...i,children:[e!==void 0&&(0,D.jsx)(S,{id:a,size:t,inset:n,children:e}),r]})}function w({className:e,...t}){return(0,D.jsx)(`div`,{role:`separator`,...t,className:O(`ds-dropdown__separator`,e)})}function T({size:e=`lg`,name:t,handle:n,src:r,initials:i,disabled:o=!1,className:s,onClick:c,onMouseMove:u,...d}){let p=l(),m=e===`lg`;return(0,D.jsxs)(`div`,{role:`menuitem`,tabIndex:-1,"aria-disabled":o||void 0,...d,className:O(`ds-dropdown__item`,`ds-dropdown__profile`,s),onMouseMove:e=>{u?.(e),f(e,o)},onClick:e=>{o||(c?.(e),e.defaultPrevented||p.close(!0))},children:[(0,D.jsx)(a,{size:m?`default`:`xs`,src:r,initials:i}),(0,D.jsxs)(`span`,{className:`ds-dropdown__person`,children:[(0,D.jsx)(`span`,{className:`ds-dropdown__name`,children:t}),m&&n!==void 0&&(0,D.jsx)(`span`,{className:`ds-dropdown__handle`,children:n})]}),(0,D.jsx)(`span`,{className:`ds-dropdown__chevron`,"aria-hidden":!0,children:te})]})}var E,D,ee,te,O,k,ne,A,j;function re(){return(re=e((()=>{E=n(),r(),D=t(),ee=(0,D.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.736,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:(0,D.jsx)(`path`,{d:`M20 6 9 17l-5-5`})}),te=(0,D.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.736,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:(0,D.jsx)(`path`,{d:`m9 18 6-6-6-6`})}),O=(...e)=>e.filter(Boolean).join(` `)||void 0,k=e=>Array.from(e.querySelectorAll(`[role^="menuitem"]`)).filter(t=>t.closest(`[role="menu"]`)===e&&t.getAttribute(`aria-disabled`)!==`true`),ne=e=>(e.querySelector(`.ds-dropdown__text, .ds-dropdown__name`)?.textContent??``).trim().toLowerCase(),A=(0,E.createContext)(null),j=(0,E.createContext)(null),p.__docgenInfo={description:`Figma "Dropdown Menu Trigger" + "Dropdown Menu Content".`,methods:[],displayName:`DropdownMenu`,props:{trigger:{required:!0,tsType:{name:`ReactElement`,elements:[{name:`intersection`,raw:`HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> }`,elements:[{name:`HTMLAttributes`,elements:[{name:`HTMLElement`}],raw:`HTMLAttributes<HTMLElement>`},{name:`signature`,type:`object`,raw:`{ ref?: Ref<HTMLElement> }`,signature:{properties:[{key:`ref`,value:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`,required:!1}}]}}]}],raw:`ReactElement<HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> }>`},description:'Figma "Dropdown Menu Trigger": the element that opens the menu, usually\n`<Button variant="outline" trailingIcon={…chevron…}>`. It gets `aria-haspopup`, `aria-expanded` and the handlers.'},children:{required:!0,tsType:{name:`ReactNode`},description:`Figma "items": DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuSub, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuUserProfile.`},open:{required:!1,tsType:{name:`boolean`},description:`Open state (controlled).`},defaultOpen:{required:!1,tsType:{name:`boolean`},description:`Opens the menu on first render (uncontrolled).`,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},align:{required:!1,tsType:{name:`union`,raw:`'start' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'end'`}]},description:"Lines the menu up with the trigger's left (`start`, default) or right (`end`) edge.",defaultValue:{value:`'start'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Class for the menu (Figma "Dropdown Menu Content"), e.g. to set its width.`},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name of the menu; by default the trigger names it.`}}},m.__docgenInfo={description:'Figma "Dropdown Menu Content" on its own: a menu that is always shown, in the page flow (e.g. inside a panel or\na context menu the app positions). Name it with `aria-label` or `aria-labelledby`.',methods:[],displayName:`DropdownMenuContent`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:`The menu's items.`},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when an item asks the menu to close (a click on an item, Escape, Tab).`}},composes:[`HTMLAttributes`]},g.__docgenInfo={description:'Figma "Dropdown Menu Item", Type=Item or Destructive. A click runs `onClick` and closes the menu unless it calls `preventDefault()`.',methods:[],displayName:`DropdownMenuItem`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:`Figma "Label".`},icon:{required:!1,tsType:{name:`ReactNode`},description:'Figma "L slot" (Leading slot): a 16 px icon using `currentColor`, or a 20 px picture such as `<Avatar size="xs" />`.'},inset:{required:!1,tsType:{name:`boolean`},description:`Figma Inset=True: lines the label up with the labels of items that have an icon.`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Figma State=Disabled.`,defaultValue:{value:`false`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`'item' | 'destructive'`,elements:[{name:`literal`,value:`'item'`},{name:`literal`,value:`'destructive'`}]},description:`Figma Type=Item (default) or Destructive.`,defaultValue:{value:`'item'`,computed:!1}},shortcut:{required:!1,tsType:{name:`ReactNode`},description:`Figma "Shortcut" (Keys), e.g. "⌘K". Only shown; handling the keys is up to the app.`}},composes:[`HTMLAttributes`]},v.__docgenInfo={description:`Figma "Dropdown Menu Item", Type=Checkbox or Menubar checkbox.`,methods:[],displayName:`DropdownMenuCheckboxItem`,props:{type:{required:!1,tsType:{name:`union`,raw:`'checkbox' | 'menubar'`,elements:[{name:`literal`,value:`'checkbox'`},{name:`literal`,value:`'menubar'`}]},description:`Figma Type=Checkbox (default) or Menubar checkbox.`},shortcut:{required:!1,tsType:{name:`ReactNode`},description:`Figma "Shortcut" (Keys).`},checked:{required:!1,tsType:{name:`boolean`},description:`Figma "Checked" (controlled).`},defaultChecked:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onCheckedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``}},composes:[`Omit`]},y.__docgenInfo={description:`One choice out of several items; Figma draws them as Type=Checkbox items.`,methods:[],displayName:`DropdownMenuRadioGroup`,props:{value:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:`The checked item's value (controlled).`},defaultValue:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``,defaultValue:{value:`null`,computed:!1}},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},label:{required:!1,tsType:{name:`ReactNode`},description:`A Dropdown Menu Label above the items, which names the group.`},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]},b.__docgenInfo={description:`An item of a DropdownMenuRadioGroup.`,methods:[],displayName:`DropdownMenuRadioItem`,props:{type:{required:!1,tsType:{name:`union`,raw:`'checkbox' | 'menubar'`,elements:[{name:`literal`,value:`'checkbox'`},{name:`literal`,value:`'menubar'`}]},description:`Figma Type=Checkbox (default) or Menubar checkbox.`},shortcut:{required:!1,tsType:{name:`ReactNode`},description:`Figma "Shortcut" (Keys).`},value:{required:!0,tsType:{name:`string`},description:``}},composes:[`Omit`]},x.__docgenInfo={description:`Figma "Dropdown Menu Item", Type=Sub trigger, with its submenu (a Dropdown Menu Content).`,methods:[],displayName:`DropdownMenuSub`,props:{label:{required:!0,tsType:{name:`ReactNode`},description:`Figma "Label" of the sub trigger.`},children:{required:!0,tsType:{name:`ReactNode`},description:`The submenu's items.`},contentClassName:{required:!1,tsType:{name:`string`},description:`Class for the submenu.`},inset:{defaultValue:{value:`false`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`Omit`]},S.__docgenInfo={description:'Figma "Dropdown Menu Label": a heading in the menu. To name the items under it, use DropdownMenuGroup\'s `label`.',methods:[],displayName:`DropdownMenuLabel`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Figma "Label".`},size:{required:!1,tsType:{name:`union`,raw:`'xs' | 'sm'`,elements:[{name:`literal`,value:`'xs'`},{name:`literal`,value:`'sm'`}]},description:``,defaultValue:{value:`'xs'`,computed:!1}},inset:{required:!1,tsType:{name:`boolean`},description:`Figma Inset=True.`,defaultValue:{value:`false`,computed:!1}}},composes:[`HTMLAttributes`]},C.__docgenInfo={description:`Items that belong together, optionally under a Dropdown Menu Label.`,methods:[],displayName:`DropdownMenuGroup`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:`A Dropdown Menu Label above the items, which names the group.`},labelSize:{required:!1,tsType:{name:`union`,raw:`'xs' | 'sm'`,elements:[{name:`literal`,value:`'xs'`},{name:`literal`,value:`'sm'`}]},description:``},labelInset:{required:!1,tsType:{name:`boolean`},description:`Figma Inset=True for the label.`},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`HTMLAttributes`]},w.__docgenInfo={description:`Figma "Dropdown Menu Separator".`,methods:[],displayName:`DropdownMenuSeparator`},T.__docgenInfo={description:'Figma "Dropdown Menu User Profile": an item for the signed-in person. A click runs `onClick` and closes the menu.',methods:[],displayName:`DropdownMenuUserProfile`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'lg' | 'default'`,elements:[{name:`literal`,value:`'lg'`},{name:`literal`,value:`'default'`}]},description:``,defaultValue:{value:`'lg'`,computed:!1}},name:{required:!0,tsType:{name:`string`},description:`The person's name (Figma "Label").`},handle:{required:!1,tsType:{name:`ReactNode`},description:`The second line in Size=lg, e.g. "@handle".`},src:{required:!1,tsType:{name:`string`},description:`Avatar picture URL.`},initials:{required:!1,tsType:{name:`string`},description:`Avatar initials when there is no picture.`},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`HTMLAttributes`]}})))()}var M,N,P,F,ie;function ae(){return(ae=e((()=>{M=t(),N=e=>(0,M.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.875,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),P=()=>(0,M.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:1.25,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:(0,M.jsx)(`path`,{d:`M3.333 2A1.333 1.333 0 0 0 2 3.333M12.667 2A1.333 1.333 0 0 1 14 3.333M14 12.667A1.333 1.333 0 0 1 12.667 14M3.333 14A1.333 1.333 0 0 1 2 12.667M6 2h.667M6 14h.667M9.333 2H10M9.333 14H10M2 6v.667M14 6v.667M2 9.333V10M14 9.333V10`})}),F={user:N((0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`circle`,{cx:`12`,cy:`8`,r:`5`}),(0,M.jsx)(`path`,{d:`M20 21a8 8 0 0 0-16 0`})]})),card:N((0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`rect`,{width:`20`,height:`14`,x:`2`,y:`5`,rx:`2`}),(0,M.jsx)(`path`,{d:`M2 10h20`})]})),settings:N((0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`path`,{d:`M20 7h-9M14 17H5`}),(0,M.jsx)(`circle`,{cx:`17`,cy:`17`,r:`3`}),(0,M.jsx)(`circle`,{cx:`7`,cy:`7`,r:`3`})]})),help:N((0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,M.jsx)(`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01`})]})),logOut:N((0,M.jsx)(`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9`})),userPlus:N((0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M19 8v6M22 11h-6`}),(0,M.jsx)(`circle`,{cx:`9`,cy:`7`,r:`4`})]})),users:N((0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75`}),(0,M.jsx)(`circle`,{cx:`9`,cy:`7`,r:`4`})]})),trash:N((0,M.jsx)(`path`,{d:`M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`})),mail:N((0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`rect`,{width:`20`,height:`16`,x:`2`,y:`4`,rx:`2`}),(0,M.jsx)(`path`,{d:`m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`})]})),message:N((0,M.jsx)(`path`,{d:`M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z`})),bell:N((0,M.jsx)(`path`,{d:`M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0`})),panelTop:N((0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`}),(0,M.jsx)(`path`,{d:`M3 9h18`})]})),panelBottom:N((0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`}),(0,M.jsx)(`path`,{d:`M3 15h18`})]})),panelLeft:N((0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`}),(0,M.jsx)(`path`,{d:`M9 3v18`})]})),panelRight:N((0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`}),(0,M.jsx)(`path`,{d:`M15 3v18`})]}))},ie=N((0,M.jsx)(`path`,{d:`m6 9 6 6 6-6`})),P.__docgenInfo={description:`The Figma item's placeholder icon (square-dashed), exported from the file.`,methods:[],displayName:`SquareDashed`}})))()}function oe({type:e,state:t,inset:n}){let r={icon:(0,I.jsx)(P,{}),inset:n,disabled:t===`Disabled`,"data-highlighted":t===`Focus`||void 0};return e===`Checkbox`||e===`Menubar checkbox`?(0,I.jsx)(v,{...r,type:e===`Checkbox`?`checkbox`:`menubar`,shortcut:`⌘K`,defaultChecked:!0,children:`Item`}):e===`Sub trigger`?(0,I.jsx)(x,{...r,label:`Item`,children:(0,I.jsx)(g,{children:`Sub item`})}):(0,I.jsx)(g,{...r,type:e===`Destructive`?`destructive`:`item`,shortcut:`⌘K`,children:`Item`})}function se({scheme:e,children:t}){return(0,I.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16,alignContent:`start`},children:[(0,I.jsx)(`div`,{style:fe,children:e===`light`?`Light`:`Dark`}),t]})}var ce,I,le,L,R,ue,z,B,de,fe,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,pe;function me(){return(me=e((()=>{ce=n(),r(),i(),s(),re(),ae(),I=t(),le=`https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=148-2`,L=e=>t=>(0,I.jsx)(`div`,{style:{minHeight:e},children:(0,I.jsx)(t,{})}),R=(e=`Open`)=>(0,I.jsx)(c,{variant:`outline`,trailingIcon:ie,children:e}),ue={title:`Components/Dropdown Menu`,parameters:{docs:{description:{component:`Implements the Sort UI 2.0 page **Dropdown Menu** ([open in Figma](${le})): Dropdown Menu Trigger and Content (\`DropdownMenu\`, or \`DropdownMenuContent\` on its own), Item (\`DropdownMenuItem\` type \`item\` · \`destructive\`; \`DropdownMenuCheckboxItem\` and \`DropdownMenuRadioItem\` type \`checkbox\` · \`menubar\`; \`DropdownMenuSub\` for Type=Sub trigger), Label (\`DropdownMenuLabel\`, or a \`DropdownMenuGroup\` \`label\`; size \`xs\` · \`sm\`), Separator and User Profile (size \`lg\` · \`default\`). Every item takes \`inset\` and \`disabled\`; State=Focus is the item under the pointer or the keyboard. Keyboard: Enter, Space or the arrows open the menu; arrows, Home/End and letters move; Enter or Space picks; → and ← open and close submenus; Escape closes.`}}}},z={args:{type:`item`,icon:!0,shortcut:!0,inset:!1,disabled:!1,align:`start`,labelSize:`xs`},argTypes:{type:{name:`Type`,control:`inline-radio`,options:[`item`,`destructive`]},icon:{name:`Leading slot`},shortcut:{name:`Shortcut`},inset:{name:`Inset`},disabled:{name:`State=Disabled`},align:{control:`inline-radio`,options:[`start`,`end`]},labelSize:{name:`Label size`,control:`inline-radio`,options:[`xs`,`sm`]}},decorators:[L(280)],render:({type:e,icon:t,shortcut:n,inset:r,disabled:i,align:a,labelSize:o})=>(0,I.jsxs)(p,{trigger:R(),align:a,defaultOpen:!0,children:[(0,I.jsxs)(C,{label:`My Account`,labelSize:o,labelInset:r,children:[(0,I.jsx)(g,{type:e,icon:t?(0,I.jsx)(P,{}):void 0,shortcut:n?`⌘K`:void 0,inset:r,disabled:i,children:`Item`}),(0,I.jsx)(g,{icon:F.card,children:`Billing`}),(0,I.jsx)(g,{icon:F.settings,children:`Settings`})]}),(0,I.jsx)(w,{}),(0,I.jsx)(g,{type:`destructive`,icon:F.logOut,children:`Sign out`})]})},B=[`Item`,`Destructive`,`Checkbox`,`Menubar checkbox`,`Sub trigger`],de=[`Default`,`Focus`,`Disabled`],fe={fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},V={render:()=>(0,I.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 232px)`,gap:24,alignItems:`start`},children:[!1,!0].map(e=>(0,I.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,I.jsxs)(`span`,{style:fe,children:[`Inset=`,e?`True`:`False`]}),(0,I.jsx)(m,{"aria-label":`Items, inset ${e}`,style:{width:224},children:B.map((t,n)=>(0,I.jsxs)(C,{label:t,children:[de.map(n=>(0,I.jsx)(oe,{type:t,state:n,inset:e},n)),n<B.length-1&&(0,I.jsx)(w,{})]},t))})]},String(e)))})},H={name:`Labels, Separator and User Profile`,render:()=>(0,I.jsxs)(m,{"aria-label":`Parts`,style:{width:224},children:[(0,I.jsx)(S,{children:`Group (xs)`}),(0,I.jsx)(S,{inset:!0,children:`Group (xs, inset)`}),(0,I.jsx)(S,{size:`sm`,children:`Group (sm)`}),(0,I.jsx)(S,{size:`sm`,inset:!0,children:`Group (sm, inset)`}),(0,I.jsx)(w,{}),(0,I.jsx)(T,{name:`Shiryoku`,handle:`@mx.shiryoku`,src:o}),(0,I.jsx)(T,{name:`Shiryoku`,handle:`@mx.shiryoku`,src:o,"data-highlighted":!0}),(0,I.jsx)(T,{size:`default`,name:`Shiryoku`,src:o}),(0,I.jsx)(T,{size:`default`,name:`Shiryoku`,src:o,"data-highlighted":!0})]})},U={decorators:[L(300)],render:()=>(0,I.jsxs)(p,{trigger:R(`Shiryoku`),defaultOpen:!0,children:[(0,I.jsxs)(y,{label:`Workspace`,defaultValue:`shiryoku`,children:[(0,I.jsx)(b,{value:`shiryoku`,icon:(0,I.jsx)(a,{size:`xs`,shape:`square`,src:o}),children:`Shiryoku`}),(0,I.jsx)(b,{value:`orbit`,icon:(0,I.jsx)(a,{size:`xs`,shape:`square`,initials:`O`}),children:`Orbit Labs`})]}),(0,I.jsx)(w,{}),(0,I.jsxs)(C,{label:`Manage`,children:[(0,I.jsx)(g,{icon:F.userPlus,children:`Invite members`}),(0,I.jsx)(g,{icon:F.settings,children:`Workspace settings`}),(0,I.jsxs)(x,{icon:F.users,label:`Switch account`,children:[(0,I.jsx)(g,{children:`sam@shiryoku.dev`}),(0,I.jsx)(g,{children:`sam@orbit.dev`})]}),(0,I.jsx)(g,{icon:F.logOut,children:`Sign out`})]})]})},W={decorators:[L(280)],render:()=>(0,I.jsxs)(p,{trigger:R(),defaultOpen:!0,children:[(0,I.jsxs)(C,{label:`My Account`,children:[(0,I.jsx)(g,{children:`Profile`}),(0,I.jsx)(g,{children:`Billing`}),(0,I.jsx)(g,{children:`Settings`})]}),(0,I.jsx)(w,{}),(0,I.jsx)(g,{children:`Changelog`}),(0,I.jsx)(g,{children:`Support`}),(0,I.jsx)(g,{disabled:!0,children:`API`})]})},G={decorators:[L(200)],render:()=>(0,I.jsxs)(p,{trigger:R(),defaultOpen:!0,children:[(0,I.jsxs)(C,{label:`My Account`,children:[(0,I.jsx)(g,{shortcut:`⌘P`,children:`Profile`}),(0,I.jsx)(g,{shortcut:`⌘B`,children:`Billing`}),(0,I.jsx)(g,{shortcut:`⌘S`,children:`Settings`})]}),(0,I.jsx)(w,{}),(0,I.jsx)(g,{shortcut:`⌘Q`,children:`Logout`})]})},K={parameters:{layout:`padded`},decorators:[L(300)],render:()=>(0,I.jsxs)(p,{trigger:R(`Menu`),defaultOpen:!0,children:[(0,I.jsx)(g,{children:`Paste here`}),(0,I.jsx)(w,{}),(0,I.jsx)(g,{shortcut:`⌘/`,children:`Show/Hide UI`}),(0,I.jsx)(g,{shortcut:`⇧C`,children:`Show/Hide comments`}),(0,I.jsxs)(x,{label:`Widgets`,children:[(0,I.jsxs)(x,{label:`Development`,children:[(0,I.jsx)(g,{children:`New widget`}),(0,I.jsx)(g,{children:`Import widget from manifest`}),(0,I.jsx)(w,{}),(0,I.jsx)(g,{children:`Show/Hide console`}),(0,I.jsx)(g,{children:`Use developer VM`})]}),(0,I.jsx)(w,{}),(0,I.jsx)(g,{children:`Manage widgets`}),(0,I.jsx)(g,{children:`Select all widgets`})]}),(0,I.jsx)(w,{}),(0,I.jsx)(g,{shortcut:`/`,children:`Cursor chat`}),(0,I.jsx)(g,{shortcut:`⌘K`,children:`Actions…`}),(0,I.jsx)(x,{label:`Plugins`,children:(0,I.jsx)(g,{children:`Manage plugins`})})]})},q=(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(g,{icon:F.user,children:`Profile`}),(0,I.jsx)(g,{icon:F.card,children:`Billing`}),(0,I.jsx)(g,{icon:F.settings,children:`Settings`}),(0,I.jsx)(w,{}),(0,I.jsx)(g,{icon:F.help,children:`Support`})]}),J={decorators:[L(220)],render:()=>(0,I.jsxs)(p,{trigger:R(),defaultOpen:!0,children:[q,(0,I.jsx)(g,{type:`destructive`,icon:F.trash,children:`Delete account`})]})},Y={decorators:[L(240)],render:()=>(0,I.jsxs)(p,{trigger:R(`Account`),defaultOpen:!0,children:[(0,I.jsx)(T,{name:`Shiryoku`,handle:`@mx.shiryoku`,src:o}),(0,I.jsx)(w,{}),q]})},X={decorators:[L(160)],render:function(){let[e,t]=(0,ce.useState)(!0);return(0,I.jsxs)(p,{trigger:R(`Notifications`),defaultOpen:!0,children:[(0,I.jsxs)(C,{label:`Notification Preferences`,children:[(0,I.jsx)(v,{icon:F.mail,children:`Email`}),(0,I.jsx)(v,{icon:F.message,checked:e,onCheckedChange:t,children:`SMS`}),(0,I.jsx)(v,{icon:F.bell,children:`Push`})]}),(0,I.jsx)(w,{}),(0,I.jsx)(v,{type:`menubar`,defaultChecked:!0,children:`Menubar checkbox`})]})}},Z={decorators:[L(200)],render:()=>(0,I.jsx)(p,{trigger:R(`Panel`),defaultOpen:!0,children:(0,I.jsxs)(y,{label:`Panel Position`,defaultValue:`bottom`,children:[(0,I.jsx)(b,{value:`top`,icon:F.panelTop,children:`Top`}),(0,I.jsx)(b,{value:`bottom`,icon:F.panelBottom,children:`Bottom`}),(0,I.jsx)(b,{value:`left`,icon:F.panelLeft,children:`Left`}),(0,I.jsx)(b,{value:`right`,icon:F.panelRight,children:`Right`})]})})},Q={decorators:[L(200)],render:()=>(0,I.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,width:320},children:(0,I.jsx)(p,{trigger:(0,I.jsx)(c,{variant:`outline`,icon:F.settings,"aria-label":`Settings`}),align:`end`,defaultOpen:!0,children:q})})},$={parameters:{layout:`fullscreen`},render:()=>(0,I.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,I.jsx)(se,{scheme:e,children:(0,I.jsxs)(m,{"aria-label":`Account (${e})`,style:{width:224},children:[(0,I.jsx)(T,{name:`Shiryoku`,handle:`@mx.shiryoku`,src:o}),(0,I.jsx)(w,{}),(0,I.jsx)(S,{children:`My Account`}),(0,I.jsx)(g,{icon:F.user,shortcut:`⌘P`,"data-highlighted":!0,children:`Profile`}),(0,I.jsx)(g,{icon:F.card,shortcut:`⌘B`,children:`Billing`}),(0,I.jsx)(v,{icon:F.bell,defaultChecked:!0,children:`Notifications`}),(0,I.jsx)(x,{icon:F.settings,label:`Settings`,children:(0,I.jsx)(g,{children:`General`})}),(0,I.jsx)(g,{icon:F.help,disabled:!0,children:`Support`}),(0,I.jsx)(w,{}),(0,I.jsx)(g,{type:`destructive`,icon:F.logOut,"data-highlighted":!0,children:`Sign out`})]})},e))})},pe=[`Playground`,`Items`,`LabelsAndProfile`,`Workspace`,`Default`,`WithShortcuts`,`Submenus`,`WithIcons`,`UserProfile`,`Checkboxes`,`Radio`,`AlignEnd`,`Themes`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'item',
    icon: true,
    shortcut: true,
    inset: false,
    disabled: false,
    align: 'start',
    labelSize: 'xs'
  },
  argTypes: {
    type: {
      name: 'Type',
      control: 'inline-radio',
      options: ['item', 'destructive']
    },
    icon: {
      name: 'Leading slot'
    },
    shortcut: {
      name: 'Shortcut'
    },
    inset: {
      name: 'Inset'
    },
    disabled: {
      name: 'State=Disabled'
    },
    align: {
      control: 'inline-radio',
      options: ['start', 'end']
    },
    labelSize: {
      name: 'Label size',
      control: 'inline-radio',
      options: ['xs', 'sm']
    }
  },
  decorators: [room(280)],
  render: ({
    type,
    icon,
    shortcut,
    inset,
    disabled,
    align,
    labelSize
  }) => <DropdownMenu trigger={trigger()} align={align} defaultOpen>
      <DropdownMenuGroup label="My Account" labelSize={labelSize} labelInset={inset}>
        <DropdownMenuItem type={type} icon={icon ? <SquareDashed /> : undefined} shortcut={shortcut ? '⌘K' : undefined} inset={inset} disabled={disabled}>
          Item
        </DropdownMenuItem>
        <DropdownMenuItem icon={icons.card}>Billing</DropdownMenuItem>
        <DropdownMenuItem icon={icons.settings}>Settings</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem type="destructive" icon={icons.logOut}>
        Sign out
      </DropdownMenuItem>
    </DropdownMenu>
}`,...z.parameters?.docs?.source},description:{story:`The first item follows the controls.`,...z.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 232px)',
    gap: 24,
    alignItems: 'start'
  }}>
      {[false, true].map(inset => <div key={String(inset)} style={{
      display: 'grid',
      gap: 8
    }}>
          <span style={caption}>Inset={inset ? 'True' : 'False'}</span>
          <DropdownMenuContent aria-label={\`Items, inset \${inset}\`} style={{
        width: 224
      }}>
            {types.map((type, i) => <DropdownMenuGroup key={type} label={type}>
                {states.map(state => <MatrixItem key={state} type={type} state={state} inset={inset} />)}
                {i < types.length - 1 && <DropdownMenuSeparator />}
              </DropdownMenuGroup>)}
          </DropdownMenuContent>
        </div>)}
    </div>
}`,...V.parameters?.docs?.source},description:{story:'Figma "Dropdown Menu Item": every Type × State × Inset (Focus drawn with `data-highlighted`).',...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Labels, Separator and User Profile',
  render: () => <DropdownMenuContent aria-label="Parts" style={{
    width: 224
  }}>
      <DropdownMenuLabel>Group (xs)</DropdownMenuLabel>
      <DropdownMenuLabel inset>Group (xs, inset)</DropdownMenuLabel>
      <DropdownMenuLabel size="sm">Group (sm)</DropdownMenuLabel>
      <DropdownMenuLabel size="sm" inset>
        Group (sm, inset)
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuUserProfile name="Shiryoku" handle="@mx.shiryoku" src={avatarImage} />
      <DropdownMenuUserProfile name="Shiryoku" handle="@mx.shiryoku" src={avatarImage} data-highlighted />
      <DropdownMenuUserProfile size="default" name="Shiryoku" src={avatarImage} />
      <DropdownMenuUserProfile size="default" name="Shiryoku" src={avatarImage} data-highlighted />
    </DropdownMenuContent>
}`,...H.parameters?.docs?.source},description:{story:`Figma "Dropdown Menu Label" (Size × Inset), "Dropdown Menu Separator" and "Dropdown Menu User Profile" (Size × State).`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  decorators: [room(300)],
  render: () => <DropdownMenu trigger={trigger('Shiryoku')} defaultOpen>
      <DropdownMenuRadioGroup label="Workspace" defaultValue="shiryoku">
        <DropdownMenuRadioItem value="shiryoku" icon={<Avatar size="xs" shape="square" src={avatarImage} />}>
          Shiryoku
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="orbit" icon={<Avatar size="xs" shape="square" initials="O" />}>
          Orbit Labs
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup label="Manage">
        <DropdownMenuItem icon={icons.userPlus}>Invite members</DropdownMenuItem>
        <DropdownMenuItem icon={icons.settings}>Workspace settings</DropdownMenuItem>
        <DropdownMenuSub icon={icons.users} label="Switch account">
          <DropdownMenuItem>sam@shiryoku.dev</DropdownMenuItem>
          <DropdownMenuItem>sam@orbit.dev</DropdownMenuItem>
        </DropdownMenuSub>
        <DropdownMenuItem icon={icons.logOut}>Sign out</DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenu>
}`,...U.parameters?.docs?.source},description:{story:`Figma demo "Dropdown Menu": a workspace switcher.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  decorators: [room(280)],
  render: () => <DropdownMenu trigger={trigger()} defaultOpen>
      <DropdownMenuGroup label="My Account">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Changelog</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuItem disabled>API</DropdownMenuItem>
    </DropdownMenu>
}`,...W.parameters?.docs?.source},description:{story:`Figma demo "Default", with a disabled item.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  decorators: [room(200)],
  render: () => <DropdownMenu trigger={trigger()} defaultOpen>
      <DropdownMenuGroup label="My Account">
        <DropdownMenuItem shortcut="⌘P">Profile</DropdownMenuItem>
        <DropdownMenuItem shortcut="⌘B">Billing</DropdownMenuItem>
        <DropdownMenuItem shortcut="⌘S">Settings</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem shortcut="⌘Q">Logout</DropdownMenuItem>
    </DropdownMenu>
}`,...G.parameters?.docs?.source},description:{story:`Figma demo "With shortcuts".`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  decorators: [room(300)],
  render: () => <DropdownMenu trigger={trigger('Menu')} defaultOpen>
      <DropdownMenuItem>Paste here</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem shortcut="⌘/">Show/Hide UI</DropdownMenuItem>
      <DropdownMenuItem shortcut="⇧C">Show/Hide comments</DropdownMenuItem>
      <DropdownMenuSub label="Widgets">
        <DropdownMenuSub label="Development">
          <DropdownMenuItem>New widget</DropdownMenuItem>
          <DropdownMenuItem>Import widget from manifest</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Show/Hide console</DropdownMenuItem>
          <DropdownMenuItem>Use developer VM</DropdownMenuItem>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Manage widgets</DropdownMenuItem>
        <DropdownMenuItem>Select all widgets</DropdownMenuItem>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
      <DropdownMenuItem shortcut="/">Cursor chat</DropdownMenuItem>
      <DropdownMenuItem shortcut="⌘K">Actions…</DropdownMenuItem>
      <DropdownMenuSub label="Plugins">
        <DropdownMenuItem>Manage plugins</DropdownMenuItem>
      </DropdownMenuSub>
    </DropdownMenu>
}`,...K.parameters?.docs?.source},description:{story:`Figma demo "Submenus": hover or → opens a submenu (4 px right of its menu), ← or Escape closes it.`,...K.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  decorators: [room(220)],
  render: () => <DropdownMenu trigger={trigger()} defaultOpen>
      {accountItems}
      <DropdownMenuItem type="destructive" icon={icons.trash}>
        Delete account
      </DropdownMenuItem>
    </DropdownMenu>
}`,...J.parameters?.docs?.source},description:{story:`Figma demo "With icons", plus a destructive item.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  decorators: [room(240)],
  render: () => <DropdownMenu trigger={trigger('Account')} defaultOpen>
      <DropdownMenuUserProfile name="Shiryoku" handle="@mx.shiryoku" src={avatarImage} />
      <DropdownMenuSeparator />
      {accountItems}
    </DropdownMenu>
}`,...Y.parameters?.docs?.source},description:{story:`Figma demo "User profile".`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  decorators: [room(160)],
  render: function Render() {
    const [sms, setSms] = useState(true);
    return <DropdownMenu trigger={trigger('Notifications')} defaultOpen>
        <DropdownMenuGroup label="Notification Preferences">
          <DropdownMenuCheckboxItem icon={icons.mail}>Email</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem icon={icons.message} checked={sms} onCheckedChange={setSms}>
            SMS
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem icon={icons.bell}>Push</DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem type="menubar" defaultChecked>
          Menubar checkbox
        </DropdownMenuCheckboxItem>
      </DropdownMenu>;
  }
}`,...X.parameters?.docs?.source},description:{story:`Figma demo "Checkboxes": checking keeps the menu open.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  decorators: [room(200)],
  render: () => <DropdownMenu trigger={trigger('Panel')} defaultOpen>
      <DropdownMenuRadioGroup label="Panel Position" defaultValue="bottom">
        <DropdownMenuRadioItem value="top" icon={icons.panelTop}>
          Top
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="bottom" icon={icons.panelBottom}>
          Bottom
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="left" icon={icons.panelLeft}>
          Left
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="right" icon={icons.panelRight}>
          Right
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenu>
}`,...Z.parameters?.docs?.source},description:{story:`Figma demo "Radio": one choice, drawn with the check mark.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  decorators: [room(200)],
  render: () => <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    width: 320
  }}>
      <DropdownMenu trigger={<Button variant="outline" icon={icons.settings} aria-label="Settings" />} align="end" defaultOpen>
        {accountItems}
      </DropdownMenu>
    </div>
}`,...Q.parameters?.docs?.source},description:{story:'`align="end"` lines the menu up with the trigger\'s right edge, e.g. for an icon button at the end of a toolbar.',...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <Scheme key={scheme} scheme={scheme}>
          <DropdownMenuContent aria-label={\`Account (\${scheme})\`} style={{
        width: 224
      }}>
            <DropdownMenuUserProfile name="Shiryoku" handle="@mx.shiryoku" src={avatarImage} />
            <DropdownMenuSeparator />
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem icon={icons.user} shortcut="⌘P" data-highlighted>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem icon={icons.card} shortcut="⌘B">
              Billing
            </DropdownMenuItem>
            <DropdownMenuCheckboxItem icon={icons.bell} defaultChecked>
              Notifications
            </DropdownMenuCheckboxItem>
            <DropdownMenuSub icon={icons.settings} label="Settings">
              <DropdownMenuItem>General</DropdownMenuItem>
            </DropdownMenuSub>
            <DropdownMenuItem icon={icons.help} disabled>
              Support
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem type="destructive" icon={icons.logOut} data-highlighted>
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </Scheme>)}
    </div>
}`,...$.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...$.parameters?.docs?.description}}}})))()}me();export{Q as AlignEnd,X as Checkboxes,W as Default,V as Items,H as LabelsAndProfile,z as Playground,Z as Radio,K as Submenus,$ as Themes,Y as UserProfile,J as WithIcons,G as WithShortcuts,U as Workspace,pe as __namedExportsOrder,ue as default};