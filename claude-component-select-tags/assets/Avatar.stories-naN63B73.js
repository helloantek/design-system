import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{h as t,i as n,n as r,r as i}from"./iframe-lax6a6Ye.js";import{l as a,r as o}from"./react-DUHoXRg6.js";function s({ref:e,src:t,initials:n,name:r,size:i=`md`,shape:a=`circular`,ring:o=!1,topBadge:s,bottomBadge:d,className:f,...p}){let[m,h]=(0,c.useState)(),g=t&&m!==t,_=g?`userpic`:n?`initials`:`empty`,v=[`ds-avatar`,`ds-avatar--${i}`,`ds-avatar--${a}`,_===`initials`&&`ds-avatar--initials`,o&&`ds-avatar--ring`,f].filter(Boolean).join(` `);return(0,l.jsxs)(`span`,{...!g&&r?{role:`img`,"aria-label":r}:{},...p,ref:e,className:v,children:[(0,l.jsx)(`span`,{className:`ds-avatar__image`,children:g?(0,l.jsx)(`img`,{src:t,alt:r??``,onError:()=>h(t)}):n?(0,l.jsx)(`span`,{className:`ds-avatar__initials`,"aria-hidden":!0,children:n}):u}),s&&(0,l.jsx)(`span`,{className:`ds-avatar__badge ds-avatar__badge--top`,children:s}),d&&(0,l.jsx)(`span`,{className:`ds-avatar__badge ds-avatar__badge--bottom`,children:d})]})}var c,l,u;function d(){return(d=e((()=>{c=t(),l=r(),u=(0,l.jsxs)(`svg`,{className:`ds-avatar__placeholder`,viewBox:`0 0 64 64`,"aria-hidden":!0,children:[(0,l.jsx)(`ellipse`,{cx:`32`,cy:`24`,rx:`12`,ry:`14`}),(0,l.jsx)(`ellipse`,{cx:`32`,cy:`72`,rx:`33`,ry:`32`})]}),s.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:``},src:{required:!1,tsType:{name:`string`},description:`Figma Variant=Userpic: the picture's URL. Falls back to the initials (or Empty) when it fails to load.`},initials:{required:!1,tsType:{name:`string`},description:`Figma Variant=Initials, e.g. "SR". Figma shows one letter up to size md and two from lg.`},name:{required:!1,tsType:{name:`string`},description:`Who the avatar shows; the accessible name of the picture or initials. Without it the avatar is decorative.`},size:{required:!1,tsType:{name:`union`,raw:`'2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`,elements:[{name:`literal`,value:`'2xs'`},{name:`literal`,value:`'xs'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`},{name:`literal`,value:`'2xl'`},{name:`literal`,value:`'3xl'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},shape:{required:!1,tsType:{name:`union`,raw:`'circular' | 'rounded'`,elements:[{name:`literal`,value:`'circular'`},{name:`literal`,value:`'rounded'`}]},description:``,defaultValue:{value:`'circular'`,computed:!1}},ring:{required:!1,tsType:{name:`boolean`},description:`Figma "Ring": a 2 px ring in the page colour, e.g. for overlapping avatars.`,defaultValue:{value:`false`,computed:!1}},topBadge:{required:!1,tsType:{name:`ReactNode`},description:'Figma "Top badge", e.g. `<StatusBadge variant="checkmark" />`.'},bottomBadge:{required:!1,tsType:{name:`ReactNode`},description:'Figma "Bottom badge", e.g. `<StatusBadge variant="online" />`.'}},composes:[`HTMLAttributes`]}})))()}function f({ref:e,variant:t=`checkmark`,icon:n,image:r,label:i,className:a,...o}){let s=i??m[t],c=t===`icon`?n:t===`logo`?r:null;return(0,p.jsxs)(`span`,{...o,ref:e,className:[`ds-status-badge`,`ds-status-badge--${t}`,a].filter(Boolean).join(` `),...s?{role:`img`,"aria-label":s}:{"aria-hidden":!0},children:[(0,p.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":!0,children:t===`checkmark`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`path`,{className:`ds-status-badge__ring`,fillRule:`evenodd`,d:h}),(0,p.jsx)(`path`,{className:`ds-status-badge__mark`,d:g})]}):c?(0,p.jsx)(`circle`,{className:`ds-status-badge__ring`,cx:`12`,cy:`12`,r:`12`}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`circle`,{className:`ds-status-badge__ring`,cx:`12`,cy:`12`,r:`9`}),(0,p.jsx)(`circle`,{className:`ds-status-badge__mark`,cx:`12`,cy:`12`,r:`7`})]})}),c&&(0,p.jsx)(`span`,{className:`ds-status-badge__content`,children:c})]})}var p,m,h,g;function _(){return(_=e((()=>{p=r(),m={checkmark:`Verified`,online:`Online`,offline:`Offline`,notification:`New notification`,icon:``,logo:``},h=`M0.243 13.369L0.686 12L0.243 10.632C-0.511 8.302 0.538 5.769 2.719 4.654L4 4L4.654 2.719C5.769 0.538 8.302 -0.511 10.632 0.243L12 0.686L13.369 0.243C15.699 -0.511 18.232 0.538 19.346 2.719L20.001 4L21.282 4.654C23.463 5.769 24.512 8.302 23.758 10.632L23.314 12L23.757 13.369C24.512 15.699 23.463 18.232 21.282 19.346L20.001 20.001L19.346 21.282C18.232 23.462 15.699 24.512 13.369 23.758L12 23.314L10.632 23.757C8.302 24.512 5.769 23.463 4.654 21.282L4 20.001L2.719 19.346C0.538 18.232 -0.511 15.699 0.243 13.369Z`,g=`M10.016 2.146C8.62 1.694 7.103 2.323 6.435 3.629L5.633 5.199C5.538 5.386 5.386 5.538 5.199 5.633L3.629 6.435C2.323 7.103 1.694 8.62 2.146 10.016L2.689 11.694C2.754 11.893 2.754 12.108 2.689 12.307L2.146 13.985C1.694 15.381 2.323 16.898 3.629 17.565L5.199 18.367C5.386 18.463 5.538 18.615 5.633 18.801L6.435 20.372C7.103 21.678 8.62 22.306 10.016 21.855L11.694 21.312C11.893 21.247 12.108 21.247 12.307 21.312L13.985 21.855C15.381 22.306 16.898 21.678 17.565 20.372L18.367 18.801C18.463 18.615 18.615 18.463 18.801 18.367L20.372 17.565C21.678 16.898 22.307 15.381 21.855 13.985L21.312 12.307C21.247 12.108 21.247 11.893 21.312 11.694L21.855 10.016C22.307 8.62 21.678 7.103 20.372 6.435L18.801 5.633C18.615 5.538 18.463 5.386 18.367 5.199L17.565 3.629C16.898 2.323 15.381 1.694 13.985 2.146L12.307 2.689C12.108 2.754 11.893 2.754 11.694 2.689L10.016 2.146ZM6.782 11.759L8.19 10.35L11.007 13.167L16.64 7.534L18.048 8.942L11.007 15.983L6.782 11.759Z`,f.__docgenInfo={description:``,methods:[],displayName:`StatusBadge`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'checkmark' | 'online' | 'offline' | 'notification' | 'icon' | 'logo'`,elements:[{name:`literal`,value:`'checkmark'`},{name:`literal`,value:`'online'`},{name:`literal`,value:`'offline'`},{name:`literal`,value:`'notification'`},{name:`literal`,value:`'icon'`},{name:`literal`,value:`'logo'`}]},description:``,defaultValue:{value:`'checkmark'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:'Variant=Icon: Figma "❖ Icon". Icons should use `currentColor`.'},image:{required:!1,tsType:{name:`ReactNode`},description:'Variant=Logo: a picture, e.g. an `<img>` (give it `alt=""`; the badge carries the label).'},label:{required:!1,tsType:{name:`string`},description:'What the badge means, read by screen readers (defaults per variant; `""` makes it decorative).'}},composes:[`HTMLAttributes`]}})))()}var v;function y(){return(y=e((()=>{v=`data:image/png;base64,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`})))()}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{a(),n(),d(),_(),y(),b=r(),x=`https://www.figma.com/design/4tiBR2hKd4yvQehtKhM9OY?node-id=2725-4557`,S=[`2xs`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`],C=[`circular`,`rounded`],w=[`checkmark`,`online`,`offline`,`notification`,`icon`],T=e=>[`2xs`,`xs`,`sm`,`md`].includes(e)?`S`:`SR`,E={title:`Components/Avatar`,parameters:{docs:{description:{component:`Implements the Figma component set **Avatar** ([open in Figma](${x})) and the **Status Badge** it shows. Figma "Variant" follows the content: \`src\` → Userpic, \`initials\` → Initials, neither → Empty (a picture that fails to load falls back to the initials or Empty). "Ring", "Top badge" and "Bottom badge" → \`ring\`, \`topBadge\`, \`bottomBadge\` (Figma's defaults: a Checkmark on top, Online at the bottom). \`name\` is the accessible name.`}}}},D=e=>(0,b.jsx)(f,{variant:e,icon:e===`icon`?(0,b.jsx)(o,{}):void 0}),O={args:{variant:`Userpic`,size:`3xl`,shape:`circular`,ring:!1,topBadge:!1,topBadgeVariant:`checkmark`,bottomBadge:!1,bottomBadgeVariant:`online`,initials:`SR`,name:`Sam Rivera`},argTypes:{variant:{name:`Variant`,control:`inline-radio`,options:[`Userpic`,`Initials`,`Empty`],description:"Set by the content: `src`, `initials` or neither"},size:{name:`Size`,control:`select`,options:S},shape:{name:`Shape`,control:`inline-radio`,options:C},ring:{name:`Ring`},topBadge:{name:`Top badge`},topBadgeVariant:{name:`Top badge variant`,control:`select`,options:w,if:{arg:`topBadge`}},bottomBadge:{name:`Bottom badge`},bottomBadgeVariant:{name:`Bottom badge variant`,control:`select`,options:w,if:{arg:`bottomBadge`}},initials:{if:{arg:`variant`,eq:`Initials`}},name:{description:`Accessible name`}},render:({variant:e,topBadge:t,topBadgeVariant:n,bottomBadge:r,bottomBadgeVariant:i,initials:a,...o})=>(0,b.jsx)(s,{...o,src:e===`Userpic`?v:void 0,initials:e===`Initials`?a:void 0,topBadge:t?D(n):void 0,bottomBadge:r?D(i):void 0})},k=e=>({display:`grid`,gridTemplateColumns:`120px repeat(${e}, auto)`,gap:16,alignItems:`center`,justifyItems:`center`,fontFamily:`var(--ds-font-family-body)`,fontSize:12,color:`var(--ds-text-muted)`}),A={render:()=>(0,b.jsxs)(`div`,{style:k(S.length),children:[(0,b.jsx)(`span`,{}),S.map(e=>(0,b.jsx)(`span`,{children:e},e)),C.flatMap(e=>[`Userpic`,`Empty`,`Initials`].map(t=>(0,b.jsxs)(`div`,{style:{display:`contents`},children:[(0,b.jsxs)(`span`,{style:{justifySelf:`start`},children:[t,` · `,e]}),S.map(n=>(0,b.jsx)(s,{size:n,shape:e,src:t===`Userpic`?v:void 0,initials:t===`Initials`?T(n):void 0},n))]},e+t)))]})},j={render:()=>(0,b.jsxs)(`div`,{style:k(S.length),children:[(0,b.jsx)(`span`,{}),S.map(e=>(0,b.jsx)(`span`,{children:e},e)),C.map(e=>(0,b.jsxs)(`div`,{style:{display:`contents`},children:[(0,b.jsxs)(`span`,{style:{justifySelf:`start`},children:[`Top + Bottom · `,e]}),S.map(t=>(0,b.jsx)(s,{size:t,shape:e,src:v,name:`Sam Rivera`,topBadge:(0,b.jsx)(f,{variant:`checkmark`}),bottomBadge:(0,b.jsx)(f,{variant:`online`})},t))]},e)),(0,b.jsx)(`span`,{style:{justifySelf:`start`},children:`Ring (on a tint)`}),S.map(e=>(0,b.jsx)(`span`,{style:{padding:6,background:`var(--ds-bg-basic-gray-subtle)`,borderRadius:8,display:`flex`},children:(0,b.jsx)(s,{size:e,ring:!0,initials:T(e)})},e))]})},M={render:()=>(0,b.jsxs)(`div`,{style:k(w.length),children:[(0,b.jsx)(`span`,{}),w.map(e=>(0,b.jsx)(`span`,{children:e},e)),(0,b.jsx)(`span`,{style:{justifySelf:`start`},children:`Status Badge`}),w.map(e=>(0,b.jsx)(`span`,{children:D(e)},e)),(0,b.jsx)(`span`,{style:{justifySelf:`start`},children:`On a 3xl avatar`}),w.map(e=>(0,b.jsx)(s,{size:`3xl`,src:v,name:`Sam Rivera`,bottomBadge:D(e)},e))]})},N={render:()=>(0,b.jsx)(`div`,{style:{display:`flex`},children:[{src:v,name:`Sam Rivera`},{initials:`AJ`,name:`Alex Jhonson`},{name:`Unknown user`},{initials:`EC`,name:`Emma Chen`}].map((e,t)=>(0,b.jsx)(s,{...e,size:`lg`,ring:!0,style:{marginLeft:t?-8:0}},e.name))})},P={parameters:{layout:`fullscreen`},render:()=>(0,b.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:Object.keys(i).flatMap(e=>[`light`,`dark`].map(t=>(0,b.jsxs)(`div`,{"data-ds-brand":e,"data-ds-scheme":t,style:{background:`var(--ds-bg-default)`,padding:24,display:`grid`,gap:12},children:[(0,b.jsxs)(`div`,{style:{fontFamily:`var(--ds-font-family-body)`,fontSize:12,color:`var(--ds-text-muted)`},children:[e,` · `,t]}),C.map(e=>(0,b.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,b.jsx)(s,{size:`xl`,shape:e,src:v,name:`Sam Rivera`,topBadge:(0,b.jsx)(f,{variant:`checkmark`})}),(0,b.jsx)(s,{size:`xl`,shape:e,initials:`SR`,name:`Sam Rivera`,bottomBadge:(0,b.jsx)(f,{variant:`online`})}),(0,b.jsx)(s,{size:`xl`,shape:e,name:`Unknown user`,bottomBadge:(0,b.jsx)(f,{variant:`offline`})}),(0,b.jsx)(s,{size:`xl`,shape:e,initials:`EC`,ring:!0,name:`Emma Chen`,bottomBadge:(0,b.jsx)(f,{variant:`notification`})})]},e))]},`${e}-${t}`)))})},F=[`Playground`,`Variants`,`Badges`,`StatusBadges`,`Group`,`Brands`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'Userpic',
    size: '3xl',
    shape: 'circular',
    ring: false,
    topBadge: false,
    topBadgeVariant: 'checkmark',
    bottomBadge: false,
    bottomBadgeVariant: 'online',
    initials: 'SR',
    name: 'Sam Rivera'
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: 'inline-radio',
      options: ['Userpic', 'Initials', 'Empty'],
      description: 'Set by the content: \`src\`, \`initials\` or neither'
    },
    size: {
      name: 'Size',
      control: 'select',
      options: sizes
    },
    shape: {
      name: 'Shape',
      control: 'inline-radio',
      options: shapes
    },
    ring: {
      name: 'Ring'
    },
    topBadge: {
      name: 'Top badge'
    },
    topBadgeVariant: {
      name: 'Top badge variant',
      control: 'select',
      options: badgeVariants,
      if: {
        arg: 'topBadge'
      }
    },
    bottomBadge: {
      name: 'Bottom badge'
    },
    bottomBadgeVariant: {
      name: 'Bottom badge variant',
      control: 'select',
      options: badgeVariants,
      if: {
        arg: 'bottomBadge'
      }
    },
    initials: {
      if: {
        arg: 'variant',
        eq: 'Initials'
      }
    },
    name: {
      description: 'Accessible name'
    }
  },
  render: ({
    variant,
    topBadge,
    topBadgeVariant,
    bottomBadge,
    bottomBadgeVariant,
    initials,
    ...props
  }) => <Avatar {...props} src={variant === 'Userpic' ? avatarImage : undefined} initials={variant === 'Initials' ? initials : undefined} topBadge={topBadge ? badge(topBadgeVariant) : undefined} bottomBadge={bottomBadge ? badge(bottomBadgeVariant) : undefined} />
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid(sizes.length)}>
      <span />
      {sizes.map(s => <span key={s}>{s}</span>)}
      {shapes.flatMap(shape => (['Userpic', 'Empty', 'Initials'] as const).map(variant => <div key={shape + variant} style={{
      display: 'contents'
    }}>
            <span style={{
        justifySelf: 'start'
      }}>
              {variant} · {shape}
            </span>
            {sizes.map(size => <Avatar key={size} size={size} shape={shape} src={variant === 'Userpic' ? avatarImage : undefined} initials={variant === 'Initials' ? initialsFor(size) : undefined} />)}
          </div>))}
    </div>
}`,...A.parameters?.docs?.source},description:{story:`Every Figma Variant, Size and Shape, as in the Figma component set.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid(sizes.length)}>
      <span />
      {sizes.map(s => <span key={s}>{s}</span>)}
      {shapes.map(shape => <div key={shape} style={{
      display: 'contents'
    }}>
          <span style={{
        justifySelf: 'start'
      }}>Top + Bottom · {shape}</span>
          {sizes.map(size => <Avatar key={size} size={size} shape={shape} src={avatarImage} name="Sam Rivera" topBadge={<StatusBadge variant="checkmark" />} bottomBadge={<StatusBadge variant="online" />} />)}
        </div>)}
      <span style={{
      justifySelf: 'start'
    }}>Ring (on a tint)</span>
      {sizes.map(size => <span key={size} style={{
      padding: 6,
      background: 'var(--ds-bg-basic-gray-subtle)',
      borderRadius: 8,
      display: 'flex'
    }}>
          <Avatar size={size} ring initials={initialsFor(size)} />
        </span>)}
    </div>
}`,...j.parameters?.docs?.source},description:{story:`"Top badge" and "Bottom badge" at every size and in both shapes, plus "Ring".`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid(badgeVariants.length)}>
      <span />
      {badgeVariants.map(v => <span key={v}>{v}</span>)}
      <span style={{
      justifySelf: 'start'
    }}>Status Badge</span>
      {badgeVariants.map(v => <span key={v}>{badge(v)}</span>)}
      <span style={{
      justifySelf: 'start'
    }}>On a 3xl avatar</span>
      {badgeVariants.map(v => <Avatar key={v} size="3xl" src={avatarImage} name="Sam Rivera" bottomBadge={badge(v)} />)}
    </div>
}`,...M.parameters?.docs?.source},description:{story:`Figma Status Badge: every Variant, alone (24 px) and on an avatar.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex'
  }}>
      {[{
      src: avatarImage,
      name: 'Sam Rivera'
    }, {
      initials: 'AJ',
      name: 'Alex Jhonson'
    }, {
      name: 'Unknown user'
    }, {
      initials: 'EC',
      name: 'Emma Chen'
    }].map((p, i) => <Avatar key={p.name} {...p} size="lg" ring style={{
      marginLeft: i ? -8 : 0
    }} />)}
    </div>
}`,...N.parameters?.docs?.source},description:{story:`Overlapping avatars: the ring separates each from the one beneath.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {Object.keys(brands).flatMap(brand => (['light', 'dark'] as const).map(scheme => <div key={\`\${brand}-\${scheme}\`} data-ds-brand={brand} data-ds-scheme={scheme} style={{
      background: 'var(--ds-bg-default)',
      padding: 24,
      display: 'grid',
      gap: 12
    }}>
            <div style={{
        fontFamily: 'var(--ds-font-family-body)',
        fontSize: 12,
        color: 'var(--ds-text-muted)'
      }}>
              {brand} · {scheme}
            </div>
            {shapes.map(shape => <div key={shape} style={{
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }}>
                <Avatar size="xl" shape={shape} src={avatarImage} name="Sam Rivera" topBadge={<StatusBadge variant="checkmark" />} />
                <Avatar size="xl" shape={shape} initials="SR" name="Sam Rivera" bottomBadge={<StatusBadge variant="online" />} />
                <Avatar size="xl" shape={shape} name="Unknown user" bottomBadge={<StatusBadge variant="offline" />} />
                <Avatar size="xl" shape={shape} initials="EC" ring name="Emma Chen" bottomBadge={<StatusBadge variant="notification" />} />
              </div>)}
          </div>))}
    </div>
}`,...P.parameters?.docs?.source},description:{story:`The same avatars under every brand and colour scheme, driven only by tokens.`,...P.parameters?.docs?.description}}}})))()}I();export{j as Badges,P as Brands,N as Group,O as Playground,M as StatusBadges,A as Variants,F as __namedExportsOrder,E as default};