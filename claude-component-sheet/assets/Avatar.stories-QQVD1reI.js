import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DeQ_nHsj.js";import{i as n,v as r}from"./react-Ci7IEHAr.js";import{n as i,t as a}from"./Avatar-SSBJE_qC.js";import{n as o,t as s}from"./AvatarGroup-CRgFI4CP.js";import{n as c,t as l}from"./Avatar.fixtures-BW_JbX3l.js";function u({ref:e,icon:t,label:n,className:r,...i}){return(0,d.jsx)(`span`,{...i,ref:e,className:[`ds-avatar-badge`,t!==void 0&&`ds-avatar-badge--icon`,r].filter(Boolean).join(` `),...n?{role:`img`,"aria-label":n}:{"aria-hidden":!0},children:t})}var d;function f(){return(f=e((()=>{d=t(),u.__docgenInfo={description:`Figma "Avatar Badge": a primary dot, put in an Avatar's \`bottomBadge\` (Figma "badge"). Its size follows the avatar:
8 px up to sm, 10 px in default, 12 px from lg.`,methods:[],displayName:`AvatarBadge`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:"Figma variant=icon: a small icon in the dot, e.g. a plus. Use `currentColor`."},label:{required:!1,tsType:{name:`string`},description:`What the badge means, read by screen readers; without it the badge is decorative.`}},composes:[`HTMLAttributes`]}})))()}function p({ref:e,variant:t=`checkmark`,icon:n,image:r,label:i,className:a,...o}){let s=i??h[t],c=t===`icon`?n:t===`logo`?r:null;return(0,m.jsxs)(`span`,{...o,ref:e,className:[`ds-status-badge`,`ds-status-badge--${t}`,a].filter(Boolean).join(` `),...s?{role:`img`,"aria-label":s}:{"aria-hidden":!0},children:[(0,m.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":!0,children:t===`checkmark`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`path`,{className:`ds-status-badge__ring`,fillRule:`evenodd`,d:g}),(0,m.jsx)(`path`,{className:`ds-status-badge__mark`,d:_})]}):c?(0,m.jsx)(`circle`,{className:`ds-status-badge__ring`,cx:`12`,cy:`12`,r:`12`}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`circle`,{className:`ds-status-badge__ring`,cx:`12`,cy:`12`,r:`9`}),(0,m.jsx)(`circle`,{className:`ds-status-badge__mark`,cx:`12`,cy:`12`,r:`7`})]})}),c&&(0,m.jsx)(`span`,{className:`ds-status-badge__content`,children:c})]})}var m,h,g,_;function v(){return(v=e((()=>{m=t(),h={checkmark:`Verified`,online:`Online`,offline:`Offline`,notification:`New notification`,icon:``,logo:``},g=`M0.243 13.369L0.686 12L0.243 10.632C-0.511 8.302 0.538 5.769 2.719 4.654L4 4L4.654 2.719C5.769 0.538 8.302 -0.511 10.632 0.243L12 0.686L13.369 0.243C15.699 -0.511 18.232 0.538 19.346 2.719L20.001 4L21.282 4.654C23.463 5.769 24.512 8.302 23.758 10.632L23.314 12L23.757 13.369C24.512 15.699 23.463 18.232 21.282 19.346L20.001 20.001L19.346 21.282C18.232 23.462 15.699 24.512 13.369 23.758L12 23.314L10.632 23.757C8.302 24.512 5.769 23.463 4.654 21.282L4 20.001L2.719 19.346C0.538 18.232 -0.511 15.699 0.243 13.369Z`,_=`M10.016 2.146C8.62 1.694 7.103 2.323 6.435 3.629L5.633 5.199C5.538 5.386 5.386 5.538 5.199 5.633L3.629 6.435C2.323 7.103 1.694 8.62 2.146 10.016L2.689 11.694C2.754 11.893 2.754 12.108 2.689 12.307L2.146 13.985C1.694 15.381 2.323 16.898 3.629 17.565L5.199 18.367C5.386 18.463 5.538 18.615 5.633 18.801L6.435 20.372C7.103 21.678 8.62 22.306 10.016 21.855L11.694 21.312C11.893 21.247 12.108 21.247 12.307 21.312L13.985 21.855C15.381 22.306 16.898 21.678 17.565 20.372L18.367 18.801C18.463 18.615 18.615 18.463 18.801 18.367L20.372 17.565C21.678 16.898 22.307 15.381 21.855 13.985L21.312 12.307C21.247 12.108 21.247 11.893 21.312 11.694L21.855 10.016C22.307 8.62 21.678 7.103 20.372 6.435L18.801 5.633C18.615 5.538 18.463 5.386 18.367 5.199L17.565 3.629C16.898 2.323 15.381 1.694 13.985 2.146L12.307 2.689C12.108 2.754 11.893 2.754 11.694 2.689L10.016 2.146ZM6.782 11.759L8.19 10.35L11.007 13.167L16.64 7.534L18.048 8.942L11.007 15.983L6.782 11.759Z`,p.__docgenInfo={description:``,methods:[],displayName:`StatusBadge`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'checkmark' | 'online' | 'offline' | 'notification' | 'icon' | 'logo'`,elements:[{name:`literal`,value:`'checkmark'`},{name:`literal`,value:`'online'`},{name:`literal`,value:`'offline'`},{name:`literal`,value:`'notification'`},{name:`literal`,value:`'icon'`},{name:`literal`,value:`'logo'`}]},description:``,defaultValue:{value:`'checkmark'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:'Variant=Icon: Figma "❖ Icon". Icons should use `currentColor`.'},image:{required:!1,tsType:{name:`ReactNode`},description:'Variant=Logo: a picture, e.g. an `<img>` (give it `alt=""`; the badge carries the label).'},label:{required:!1,tsType:{name:`string`},description:'What the badge means, read by screen readers (defaults per variant; `""` makes it decorative).'}},composes:[`HTMLAttributes`]}})))()}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{r(),i(),f(),o(),v(),c(),y=t(),b=`https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=174-6534`,x=[`xs`,`sm`,`default`,`lg`,`xl`],S=[`round`,`square`],C=[`checkmark`,`online`,`offline`,`notification`,`icon`],w=({stroke:e=1.875})=>(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:e,strokeLinecap:`round`,"aria-hidden":!0,children:(0,y.jsx)(`path`,{d:`M5 12h14M12 5v14`})}),T={title:`Components/Avatar`,parameters:{docs:{description:{component:`Implements the Sort UI 2.0 component sets **Avatar**, **Avatar Badge** and **Avatar Group** ([open in Figma](${b})). Figma "variant" follows the content: \`src\` → image, \`initials\` → fallback, neither → icon (a person, or \`icon\`); a picture that fails to load falls back. \`size\`: \`xs\` · \`sm\` · \`default\` · \`lg\` · \`xl\`; \`shape\`: \`round\` · \`square\`. Figma "badge" is \`bottomBadge={<AvatarBadge />}\`; the Sort UI 1.3 **Status Badge** (checkmark, online, offline, notification, icon, logo) stays available in \`topBadge\` and \`bottomBadge\`. \`name\` is the accessible name.`}}}},E=e=>(0,y.jsx)(p,{variant:e,icon:e===`icon`?(0,y.jsx)(n,{}):void 0}),D={args:{variant:`image`,size:`xl`,shape:`round`,ring:!1,badge:`none`,bottomBadgeVariant:`online`,topBadge:!1,topBadgeVariant:`checkmark`,initials:`SH`,name:`Sam Rivera`},argTypes:{variant:{name:`variant`,control:`inline-radio`,options:[`image`,`fallback`,`icon`],description:"Set by the content: `src`, `initials` or neither"},size:{name:`size`,control:`select`,options:x},shape:{name:`shape`,control:`inline-radio`,options:S},ring:{description:`2 px ring in the page colour (Avatar Group)`},badge:{name:`badge`,control:{type:`inline-radio`,labels:{none:`none`,avatar:`Avatar Badge`,"avatar-icon":`Avatar Badge (icon)`,status:`Status Badge`}},options:[`none`,`avatar`,`avatar-icon`,`status`],description:`Bottom badge: Figma "badge" (Avatar Badge) or a Status Badge`},bottomBadgeVariant:{name:`Status Badge (bottom)`,control:`select`,options:C,if:{arg:`badge`,eq:`status`}},topBadge:{name:`Top badge`,description:`A Status Badge on the top right`},topBadgeVariant:{name:`Status Badge (top)`,control:`select`,options:C,if:{arg:`topBadge`}},initials:{if:{arg:`variant`,eq:`fallback`}},name:{description:`Accessible name`}},render:({variant:e,badge:t,bottomBadgeVariant:n,topBadge:r,topBadgeVariant:i,initials:o,...s})=>(0,y.jsx)(a,{...s,src:e===`image`?l:void 0,initials:e===`fallback`?o:void 0,topBadge:r?E(i):void 0,bottomBadge:t===`avatar`?(0,y.jsx)(u,{label:`Online`}):t===`avatar-icon`?(0,y.jsx)(u,{label:`Add`,icon:(0,y.jsx)(w,{stroke:3})}):t===`status`?E(n):void 0})},O=e=>({display:`grid`,gridTemplateColumns:`140px repeat(${e}, auto)`,gap:16,alignItems:`center`,justifyItems:`center`,fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`}),k={render:()=>(0,y.jsxs)(`div`,{style:O(x.length),children:[(0,y.jsx)(`span`,{}),x.map(e=>(0,y.jsx)(`span`,{children:e},e)),S.flatMap(e=>[`image`,`fallback`,`icon`].map(t=>(0,y.jsxs)(`div`,{style:{display:`contents`},children:[(0,y.jsxs)(`span`,{style:{justifySelf:`start`},children:[t,` · `,e]}),x.map(n=>(0,y.jsx)(a,{size:n,shape:e,src:t===`image`?l:void 0,initials:t===`fallback`?`SH`:void 0,icon:t===`icon`?(0,y.jsx)(w,{}):void 0},n))]},e+t)))]})},A={render:()=>(0,y.jsxs)(`div`,{style:O(x.length),children:[(0,y.jsx)(`span`,{}),x.map(e=>(0,y.jsx)(`span`,{children:e},e)),(0,y.jsx)(`span`,{style:{justifySelf:`start`},children:`Avatar Badge`}),x.map(e=>(0,y.jsx)(a,{size:e,src:l,name:`Sam Rivera`,bottomBadge:(0,y.jsx)(u,{label:`Online`})},e)),(0,y.jsx)(`span`,{style:{justifySelf:`start`},children:`Avatar Badge · icon`}),x.map(e=>(0,y.jsx)(a,{size:e,initials:`SH`,name:`Sam Rivera`,bottomBadge:(0,y.jsx)(u,{label:`Add`,icon:(0,y.jsx)(w,{stroke:3})})},e)),S.map(e=>(0,y.jsxs)(`div`,{style:{display:`contents`},children:[(0,y.jsxs)(`span`,{style:{justifySelf:`start`},children:[`Status Badges · `,e]}),x.map(t=>(0,y.jsx)(a,{size:t,shape:e,src:l,name:`Sam Rivera`,topBadge:(0,y.jsx)(p,{variant:`checkmark`}),bottomBadge:(0,y.jsx)(p,{variant:`online`})},t))]},e))]})},j={render:()=>(0,y.jsxs)(`div`,{style:O(C.length),children:[(0,y.jsx)(`span`,{}),C.map(e=>(0,y.jsx)(`span`,{children:e},e)),(0,y.jsx)(`span`,{style:{justifySelf:`start`},children:`Status Badge`}),C.map(e=>(0,y.jsx)(`span`,{children:E(e)},e)),(0,y.jsx)(`span`,{style:{justifySelf:`start`},children:`On an xl avatar`}),C.map(e=>(0,y.jsx)(a,{size:`xl`,src:l,name:`Sam Rivera`,bottomBadge:E(e)},e))]})},M=[{src:l,name:`Sam Rivera`},{initials:`AJ`,name:`Alex Jhonson`},{name:`Unknown user`},{initials:`EC`,name:`Emma Chen`},{initials:`RP`,name:`Ryan Parker`},{initials:`LC`,name:`Lily Chen`}],N={render:()=>(0,y.jsx)(`div`,{style:{display:`grid`,gap:16,justifyItems:`start`},children:x.map(e=>(0,y.jsx)(s,{size:e,max:3,"aria-label":`Reviewers`,children:M.map(e=>(0,y.jsx)(a,{...e},e.name))},e))})},P={parameters:{layout:`fullscreen`},render:()=>(0,y.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,y.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`grid`,gap:16},children:[(0,y.jsx)(`div`,{style:{fontFamily:`var(--ds-font-sans)`,fontSize:12,color:`var(--ds-muted-foreground)`},children:e===`light`?`Light`:`Dark`}),S.map(e=>(0,y.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,y.jsx)(a,{size:`xl`,shape:e,src:l,name:`Sam Rivera`,bottomBadge:(0,y.jsx)(u,{label:`Online`})}),(0,y.jsx)(a,{size:`xl`,shape:e,initials:`SR`,name:`Sam Rivera`,topBadge:(0,y.jsx)(p,{variant:`checkmark`})}),(0,y.jsx)(a,{size:`xl`,shape:e,name:`Unknown user`}),(0,y.jsx)(a,{size:`xl`,shape:e,icon:(0,y.jsx)(w,{}),name:`Add a person`})]},e)),(0,y.jsx)(s,{size:`lg`,max:3,"aria-label":`Reviewers`,children:M.map(e=>(0,y.jsx)(a,{...e},e.name))})]},e))})},F=[`Playground`,`Variants`,`Badges`,`StatusBadges`,`Group`,`Themes`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'image',
    size: 'xl',
    shape: 'round',
    ring: false,
    badge: 'none',
    bottomBadgeVariant: 'online',
    topBadge: false,
    topBadgeVariant: 'checkmark',
    initials: 'SH',
    name: 'Sam Rivera'
  },
  argTypes: {
    variant: {
      name: 'variant',
      control: 'inline-radio',
      options: ['image', 'fallback', 'icon'],
      description: 'Set by the content: \`src\`, \`initials\` or neither'
    },
    size: {
      name: 'size',
      control: 'select',
      options: sizes
    },
    shape: {
      name: 'shape',
      control: 'inline-radio',
      options: shapes
    },
    ring: {
      description: '2 px ring in the page colour (Avatar Group)'
    },
    badge: {
      name: 'badge',
      control: {
        type: 'inline-radio',
        labels: {
          none: 'none',
          avatar: 'Avatar Badge',
          'avatar-icon': 'Avatar Badge (icon)',
          status: 'Status Badge'
        }
      },
      options: ['none', 'avatar', 'avatar-icon', 'status'],
      description: 'Bottom badge: Figma "badge" (Avatar Badge) or a Status Badge'
    },
    bottomBadgeVariant: {
      name: 'Status Badge (bottom)',
      control: 'select',
      options: badgeVariants,
      if: {
        arg: 'badge',
        eq: 'status'
      }
    },
    topBadge: {
      name: 'Top badge',
      description: 'A Status Badge on the top right'
    },
    topBadgeVariant: {
      name: 'Status Badge (top)',
      control: 'select',
      options: badgeVariants,
      if: {
        arg: 'topBadge'
      }
    },
    initials: {
      if: {
        arg: 'variant',
        eq: 'fallback'
      }
    },
    name: {
      description: 'Accessible name'
    }
  },
  render: ({
    variant,
    badge,
    bottomBadgeVariant,
    topBadge,
    topBadgeVariant,
    initials,
    ...props
  }) => <Avatar {...props} src={variant === 'image' ? avatarImage : undefined} initials={variant === 'fallback' ? initials : undefined} topBadge={topBadge ? statusBadge(topBadgeVariant) : undefined} bottomBadge={badge === 'avatar' ? <AvatarBadge label="Online" /> : badge === 'avatar-icon' ? <AvatarBadge label="Add" icon={<Plus stroke={3} />} /> : badge === 'status' ? statusBadge(bottomBadgeVariant) : undefined} />
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid(sizes.length)}>
      <span />
      {sizes.map(s => <span key={s}>{s}</span>)}
      {shapes.flatMap(shape => (['image', 'fallback', 'icon'] as const).map(variant => <div key={shape + variant} style={{
      display: 'contents'
    }}>
            <span style={{
        justifySelf: 'start'
      }}>
              {variant} · {shape}
            </span>
            {sizes.map(size => <Avatar key={size} size={size} shape={shape} src={variant === 'image' ? avatarImage : undefined} initials={variant === 'fallback' ? 'SH' : undefined} icon={variant === 'icon' ? <Plus /> : undefined} />)}
          </div>))}
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Every Figma variant, size and shape.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid(sizes.length)}>
      <span />
      {sizes.map(s => <span key={s}>{s}</span>)}
      <span style={{
      justifySelf: 'start'
    }}>Avatar Badge</span>
      {sizes.map(size => <Avatar key={size} size={size} src={avatarImage} name="Sam Rivera" bottomBadge={<AvatarBadge label="Online" />} />)}
      <span style={{
      justifySelf: 'start'
    }}>Avatar Badge · icon</span>
      {sizes.map(size => <Avatar key={size} size={size} initials="SH" name="Sam Rivera" bottomBadge={<AvatarBadge label="Add" icon={<Plus stroke={3} />} />} />)}
      {shapes.map(shape => <div key={shape} style={{
      display: 'contents'
    }}>
          <span style={{
        justifySelf: 'start'
      }}>Status Badges · {shape}</span>
          {sizes.map(size => <Avatar key={size} size={size} shape={shape} src={avatarImage} name="Sam Rivera" topBadge={<StatusBadge variant="checkmark" />} bottomBadge={<StatusBadge variant="online" />} />)}
        </div>)}
    </div>
}`,...A.parameters?.docs?.source},description:{story:`Figma "badge" (Avatar Badge, plain and with an icon) at every size, and the Status Badges in both slots.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid(badgeVariants.length)}>
      <span />
      {badgeVariants.map(v => <span key={v}>{v}</span>)}
      <span style={{
      justifySelf: 'start'
    }}>Status Badge</span>
      {badgeVariants.map(v => <span key={v}>{statusBadge(v)}</span>)}
      <span style={{
      justifySelf: 'start'
    }}>On an xl avatar</span>
      {badgeVariants.map(v => <Avatar key={v} size="xl" src={avatarImage} name="Sam Rivera" bottomBadge={statusBadge(v)} />)}
    </div>
}`,...j.parameters?.docs?.source},description:{story:`The Sort UI 1.3 Status Badge: every variant, alone (24 px) and on an xl avatar.`,...j.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    justifyItems: 'start'
  }}>
      {sizes.map(size => <AvatarGroup key={size} size={size} max={3} aria-label="Reviewers">
          {people.map(p => <Avatar key={p.name} {...p} />)}
        </AvatarGroup>)}
    </div>
}`,...N.parameters?.docs?.source},description:{story:'Figma "Avatar Group": avatars overlap by 8 px with the ring, and `max` turns the rest into the "+N" count.',...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
          <div style={{
        fontFamily: 'var(--ds-font-sans)',
        fontSize: 12,
        color: 'var(--ds-muted-foreground)'
      }}>{scheme === 'light' ? 'Light' : 'Dark'}</div>
          {shapes.map(shape => <div key={shape} style={{
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }}>
              <Avatar size="xl" shape={shape} src={avatarImage} name="Sam Rivera" bottomBadge={<AvatarBadge label="Online" />} />
              <Avatar size="xl" shape={shape} initials="SR" name="Sam Rivera" topBadge={<StatusBadge variant="checkmark" />} />
              <Avatar size="xl" shape={shape} name="Unknown user" />
              <Avatar size="xl" shape={shape} icon={<Plus />} name="Add a person" />
            </div>)}
          <AvatarGroup size="lg" max={3} aria-label="Reviewers">
            {people.map(p => <Avatar key={p.name} {...p} />)}
          </AvatarGroup>
        </div>)}
    </div>
}`,...P.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...P.parameters?.docs?.description}}}})))()}I();export{A as Badges,N as Group,D as Playground,j as StatusBadges,P as Themes,k as Variants,F as __namedExportsOrder,T as default};