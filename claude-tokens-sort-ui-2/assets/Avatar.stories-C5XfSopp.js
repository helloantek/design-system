import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,n,r}from"./iframe-AC3bzNHM.js";import{l as i,r as a}from"./react-CRGrreBp.js";import{i as o,n as s,r as c,t as l}from"./Avatar.fixtures-C6ZJzoDR.js";function u({ref:e,variant:t=`checkmark`,icon:n,image:r,label:i,className:a,...o}){let s=i??f[t],c=t===`icon`?n:t===`logo`?r:null;return(0,d.jsxs)(`span`,{...o,ref:e,className:[`ds-status-badge`,`ds-status-badge--${t}`,a].filter(Boolean).join(` `),...s?{role:`img`,"aria-label":s}:{"aria-hidden":!0},children:[(0,d.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":!0,children:t===`checkmark`?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`path`,{className:`ds-status-badge__ring`,fillRule:`evenodd`,d:p}),(0,d.jsx)(`path`,{className:`ds-status-badge__mark`,d:m})]}):c?(0,d.jsx)(`circle`,{className:`ds-status-badge__ring`,cx:`12`,cy:`12`,r:`12`}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`circle`,{className:`ds-status-badge__ring`,cx:`12`,cy:`12`,r:`9`}),(0,d.jsx)(`circle`,{className:`ds-status-badge__mark`,cx:`12`,cy:`12`,r:`7`})]})}),c&&(0,d.jsx)(`span`,{className:`ds-status-badge__content`,children:c})]})}var d,f,p,m;function h(){return(h=e((()=>{d=n(),f={checkmark:`Verified`,online:`Online`,offline:`Offline`,notification:`New notification`,icon:``,logo:``},p=`M0.243 13.369L0.686 12L0.243 10.632C-0.511 8.302 0.538 5.769 2.719 4.654L4 4L4.654 2.719C5.769 0.538 8.302 -0.511 10.632 0.243L12 0.686L13.369 0.243C15.699 -0.511 18.232 0.538 19.346 2.719L20.001 4L21.282 4.654C23.463 5.769 24.512 8.302 23.758 10.632L23.314 12L23.757 13.369C24.512 15.699 23.463 18.232 21.282 19.346L20.001 20.001L19.346 21.282C18.232 23.462 15.699 24.512 13.369 23.758L12 23.314L10.632 23.757C8.302 24.512 5.769 23.463 4.654 21.282L4 20.001L2.719 19.346C0.538 18.232 -0.511 15.699 0.243 13.369Z`,m=`M10.016 2.146C8.62 1.694 7.103 2.323 6.435 3.629L5.633 5.199C5.538 5.386 5.386 5.538 5.199 5.633L3.629 6.435C2.323 7.103 1.694 8.62 2.146 10.016L2.689 11.694C2.754 11.893 2.754 12.108 2.689 12.307L2.146 13.985C1.694 15.381 2.323 16.898 3.629 17.565L5.199 18.367C5.386 18.463 5.538 18.615 5.633 18.801L6.435 20.372C7.103 21.678 8.62 22.306 10.016 21.855L11.694 21.312C11.893 21.247 12.108 21.247 12.307 21.312L13.985 21.855C15.381 22.306 16.898 21.678 17.565 20.372L18.367 18.801C18.463 18.615 18.615 18.463 18.801 18.367L20.372 17.565C21.678 16.898 22.307 15.381 21.855 13.985L21.312 12.307C21.247 12.108 21.247 11.893 21.312 11.694L21.855 10.016C22.307 8.62 21.678 7.103 20.372 6.435L18.801 5.633C18.615 5.538 18.463 5.386 18.367 5.199L17.565 3.629C16.898 2.323 15.381 1.694 13.985 2.146L12.307 2.689C12.108 2.754 11.893 2.754 11.694 2.689L10.016 2.146ZM6.782 11.759L8.19 10.35L11.007 13.167L16.64 7.534L18.048 8.942L11.007 15.983L6.782 11.759Z`,u.__docgenInfo={description:``,methods:[],displayName:`StatusBadge`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'checkmark' | 'online' | 'offline' | 'notification' | 'icon' | 'logo'`,elements:[{name:`literal`,value:`'checkmark'`},{name:`literal`,value:`'online'`},{name:`literal`,value:`'offline'`},{name:`literal`,value:`'notification'`},{name:`literal`,value:`'icon'`},{name:`literal`,value:`'logo'`}]},description:``,defaultValue:{value:`'checkmark'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:'Variant=Icon: Figma "❖ Icon". Icons should use `currentColor`.'},image:{required:!1,tsType:{name:`ReactNode`},description:'Variant=Logo: a picture, e.g. an `<img>` (give it `alt=""`; the badge carries the label).'},label:{required:!1,tsType:{name:`string`},description:'What the badge means, read by screen readers (defaults per variant; `""` makes it decorative).'}},composes:[`HTMLAttributes`]}})))()}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{i(),t(),o(),h(),s(),g=n(),_=`https://www.figma.com/design/4tiBR2hKd4yvQehtKhM9OY?node-id=2725-4557`,v=[`2xs`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`],y=[`circular`,`rounded`],b=[`checkmark`,`online`,`offline`,`notification`,`icon`],x=e=>[`2xs`,`xs`,`sm`,`md`].includes(e)?`S`:`SR`,S={title:`Components/Avatar`,parameters:{docs:{description:{component:`Implements the Figma component set **Avatar** ([open in Figma](${_})) and the **Status Badge** it shows. Figma "Variant" follows the content: \`src\` → Userpic, \`initials\` → Initials, neither → Empty (a picture that fails to load falls back to the initials or Empty). "Ring", "Top badge" and "Bottom badge" → \`ring\`, \`topBadge\`, \`bottomBadge\` (Figma's defaults: a Checkmark on top, Online at the bottom). \`name\` is the accessible name.`}}}},C=e=>(0,g.jsx)(u,{variant:e,icon:e===`icon`?(0,g.jsx)(a,{}):void 0}),w={args:{variant:`Userpic`,size:`3xl`,shape:`circular`,ring:!1,topBadge:!1,topBadgeVariant:`checkmark`,bottomBadge:!1,bottomBadgeVariant:`online`,initials:`SR`,name:`Sam Rivera`},argTypes:{variant:{name:`Variant`,control:`inline-radio`,options:[`Userpic`,`Initials`,`Empty`],description:"Set by the content: `src`, `initials` or neither"},size:{name:`Size`,control:`select`,options:v},shape:{name:`Shape`,control:`inline-radio`,options:y},ring:{name:`Ring`},topBadge:{name:`Top badge`},topBadgeVariant:{name:`Top badge variant`,control:`select`,options:b,if:{arg:`topBadge`}},bottomBadge:{name:`Bottom badge`},bottomBadgeVariant:{name:`Bottom badge variant`,control:`select`,options:b,if:{arg:`bottomBadge`}},initials:{if:{arg:`variant`,eq:`Initials`}},name:{description:`Accessible name`}},render:({variant:e,topBadge:t,topBadgeVariant:n,bottomBadge:r,bottomBadgeVariant:i,initials:a,...o})=>(0,g.jsx)(c,{...o,src:e===`Userpic`?l:void 0,initials:e===`Initials`?a:void 0,topBadge:t?C(n):void 0,bottomBadge:r?C(i):void 0})},T=e=>({display:`grid`,gridTemplateColumns:`120px repeat(${e}, auto)`,gap:16,alignItems:`center`,justifyItems:`center`,fontFamily:`var(--ds-font-family-body)`,fontSize:12,color:`var(--ds-text-muted)`}),E={render:()=>(0,g.jsxs)(`div`,{style:T(v.length),children:[(0,g.jsx)(`span`,{}),v.map(e=>(0,g.jsx)(`span`,{children:e},e)),y.flatMap(e=>[`Userpic`,`Empty`,`Initials`].map(t=>(0,g.jsxs)(`div`,{style:{display:`contents`},children:[(0,g.jsxs)(`span`,{style:{justifySelf:`start`},children:[t,` · `,e]}),v.map(n=>(0,g.jsx)(c,{size:n,shape:e,src:t===`Userpic`?l:void 0,initials:t===`Initials`?x(n):void 0},n))]},e+t)))]})},D={render:()=>(0,g.jsxs)(`div`,{style:T(v.length),children:[(0,g.jsx)(`span`,{}),v.map(e=>(0,g.jsx)(`span`,{children:e},e)),y.map(e=>(0,g.jsxs)(`div`,{style:{display:`contents`},children:[(0,g.jsxs)(`span`,{style:{justifySelf:`start`},children:[`Top + Bottom · `,e]}),v.map(t=>(0,g.jsx)(c,{size:t,shape:e,src:l,name:`Sam Rivera`,topBadge:(0,g.jsx)(u,{variant:`checkmark`}),bottomBadge:(0,g.jsx)(u,{variant:`online`})},t))]},e)),(0,g.jsx)(`span`,{style:{justifySelf:`start`},children:`Ring (on a tint)`}),v.map(e=>(0,g.jsx)(`span`,{style:{padding:6,background:`var(--ds-bg-basic-gray-subtle)`,borderRadius:8,display:`flex`},children:(0,g.jsx)(c,{size:e,ring:!0,initials:x(e)})},e))]})},O={render:()=>(0,g.jsxs)(`div`,{style:T(b.length),children:[(0,g.jsx)(`span`,{}),b.map(e=>(0,g.jsx)(`span`,{children:e},e)),(0,g.jsx)(`span`,{style:{justifySelf:`start`},children:`Status Badge`}),b.map(e=>(0,g.jsx)(`span`,{children:C(e)},e)),(0,g.jsx)(`span`,{style:{justifySelf:`start`},children:`On a 3xl avatar`}),b.map(e=>(0,g.jsx)(c,{size:`3xl`,src:l,name:`Sam Rivera`,bottomBadge:C(e)},e))]})},k={render:()=>(0,g.jsx)(`div`,{style:{display:`flex`},children:[{src:l,name:`Sam Rivera`},{initials:`AJ`,name:`Alex Jhonson`},{name:`Unknown user`},{initials:`EC`,name:`Emma Chen`}].map((e,t)=>(0,g.jsx)(c,{...e,size:`lg`,ring:!0,style:{marginLeft:t?-8:0}},e.name))})},A={parameters:{layout:`fullscreen`},render:()=>(0,g.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:Object.keys(r).flatMap(e=>[`light`,`dark`].map(t=>(0,g.jsxs)(`div`,{"data-ds-brand":e,"data-ds-scheme":t,style:{background:`var(--ds-bg-default)`,padding:24,display:`grid`,gap:12},children:[(0,g.jsxs)(`div`,{style:{fontFamily:`var(--ds-font-family-body)`,fontSize:12,color:`var(--ds-text-muted)`},children:[e,` · `,t]}),y.map(e=>(0,g.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,g.jsx)(c,{size:`xl`,shape:e,src:l,name:`Sam Rivera`,topBadge:(0,g.jsx)(u,{variant:`checkmark`})}),(0,g.jsx)(c,{size:`xl`,shape:e,initials:`SR`,name:`Sam Rivera`,bottomBadge:(0,g.jsx)(u,{variant:`online`})}),(0,g.jsx)(c,{size:`xl`,shape:e,name:`Unknown user`,bottomBadge:(0,g.jsx)(u,{variant:`offline`})}),(0,g.jsx)(c,{size:`xl`,shape:e,initials:`EC`,ring:!0,name:`Emma Chen`,bottomBadge:(0,g.jsx)(u,{variant:`notification`})})]},e))]},`${e}-${t}`)))})},j=[`Playground`,`Variants`,`Badges`,`StatusBadges`,`Group`,`Brands`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Every Figma Variant, Size and Shape, as in the Figma component set.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`"Top badge" and "Bottom badge" at every size and in both shapes, plus "Ring".`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`Figma Status Badge: every Variant, alone (24 px) and on an avatar.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Overlapping avatars: the ring separates each from the one beneath.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`The same avatars under every brand and colour scheme, driven only by tokens.`,...A.parameters?.docs?.description}}}})))()}M();export{D as Badges,A as Brands,k as Group,w as Playground,O as StatusBadges,E as Variants,j as __namedExportsOrder,S as default};