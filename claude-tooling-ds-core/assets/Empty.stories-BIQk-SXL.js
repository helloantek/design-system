import{n as e}from"./rolldown-runtime-vtgMY1y5.js";import{n as t,p as n}from"./iframe-Dn36BRHu.js";import{Ct as r,J as i,Lt as a}from"./react-Dyd8_QjB.js";import{n as o,t as s}from"./Button-CLmPt_Gx.js";import{n as c,t as l}from"./Avatar-5JHHehwd.js";import{n as u,t as d}from"./AvatarGroup-nRBTjEmX.js";import{i as f,t as p}from"./Input-B1romta_.js";import{o as m,t as h}from"./Card-DVRDyKGZ.js";import{n as g,t as _}from"./Avatar.fixtures-8M8kT8xK.js";import{n as v,t as y}from"./Empty-CGlxhgAV.js";var b,x,S,icon,C,w,T,E,D,O,k,A;function init_Empty_stories(){return(init_Empty_stories=e((()=>{b=n(),r(),c(),u(),g(),o(),m(),f(),v(),x=t(),S={title:`Components/Empty`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Empty** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=227-46)): `icon` (a 32 px tile) or `media` (e.g. an Avatar Group), `title` (`titleAs` picks the heading level), `description`, `actions` (buttons side by side) and children under them (a search field, a link). What a view shows when it has nothing yet, with a way forward."}}}},icon=e=>(0,x.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.875,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":!0,children:e}),C={clipboardCheck:icon((0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`}),(0,x.jsx)(`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 14l2 2 4-4`})]})),search:icon((0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`path`,{d:`m21 21-4.34-4.34`}),(0,x.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`})]}))},w={args:{media:`icon`,title:`No deployments yet`,description:`Connect a repository and every push to main will ship a preview automatically.`,actions:1},argTypes:{media:{name:`Media`,control:`inline-radio`,options:[`icon`,`avatars`,`none`]},title:{name:`Title`},description:{name:`Description`},actions:{name:`Buttons`,control:{type:`range`,min:0,max:2}}},render:({media:e,title:t,description:n,actions:r})=>(0,x.jsx)(`div`,{style:{width:384},children:(0,x.jsx)(y,{icon:e===`icon`?C.clipboardCheck:void 0,media:e===`avatars`?(0,x.jsxs)(d,{size:`sm`,children:[(0,x.jsx)(l,{src:_,name:`Mira Okafor`}),(0,x.jsx)(l,{initials:`JL`,name:`Jonas Lindqvist`}),(0,x.jsx)(l,{initials:`PR`,name:`Priya Raman`})]}):void 0,title:t,description:n||void 0,actions:r>0?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s,{children:`Connect repository`}),r>1&&(0,x.jsx)(s,{variant:`outline`,children:`Read the docs`})]}):void 0})})},T={render:()=>(0,x.jsx)(`div`,{style:{width:384},children:(0,x.jsx)(y,{icon:C.search,title:`No trips yet`,description:`Your upcoming stays and flights will show up here once you book them.`,actions:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s,{children:`Explore stays`}),(0,x.jsx)(s,{variant:`outline`,children:`Import booking`})]})})})},E={render:()=>(0,x.jsx)(`div`,{style:{width:384},children:(0,x.jsx)(y,{media:(0,x.jsxs)(d,{size:`sm`,children:[(0,x.jsx)(l,{src:_,name:`Mira Okafor`}),(0,x.jsx)(l,{initials:`JL`,name:`Jonas Lindqvist`}),(0,x.jsx)(l,{initials:`PR`,name:`Priya Raman`})]}),title:`Listen together`,description:`Invite friends to add songs to Late night focus and see what they are playing.`,actions:(0,x.jsx)(s,{leadingIcon:(0,x.jsx)(i,{}),children:`Invite friends`})})})},D={render:function Render(){let[e,t]=(0,b.useState)(`sushi`);return(0,x.jsx)(`div`,{style:{width:384},children:(0,x.jsxs)(y,{icon:C.search,title:`No restaurants found`,description:`Nothing matches “${e}” near you. Try another search or clear your filters.`,children:[(0,x.jsx)(p,{"aria-label":`Search restaurants`,value:e,onChange:e=>t(e.currentTarget.value),leadIcon:(0,x.jsx)(a,{})}),(0,x.jsx)(s,{variant:`ghost`,size:`sm`,onClick:()=>t(``),children:`Clear filters`})]})})}},O={render:()=>(0,x.jsx)(h,{style:{width:420},children:(0,x.jsx)(y,{icon:C.clipboardCheck,title:`No deployments yet`,titleAs:`h2`,description:`Connect a repository and every push to main will ship a preview automatically.`,actions:(0,x.jsx)(s,{children:`Connect repository`})})})},k={parameters:{layout:`fullscreen`},render:()=>(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`},children:[`light`,`dark`].map(e=>(0,x.jsx)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`},children:(0,x.jsx)(y,{icon:C.search,title:`No trips yet`,description:`Your upcoming stays will show up here.`,actions:(0,x.jsx)(s,{variant:`outline`,children:`Explore stays`})})},e))})},A=[`Playground`,`Trips`,`WithAvatars`,`NoResults`,`InACard`,`Themes`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    media: 'icon',
    title: 'No deployments yet',
    description: 'Connect a repository and every push to main will ship a preview automatically.',
    actions: 1
  },
  argTypes: {
    media: {
      name: 'Media',
      control: 'inline-radio',
      options: ['icon', 'avatars', 'none']
    },
    title: {
      name: 'Title'
    },
    description: {
      name: 'Description'
    },
    actions: {
      name: 'Buttons',
      control: {
        type: 'range',
        min: 0,
        max: 2
      }
    }
  },
  render: ({
    media,
    title,
    description,
    actions
  }) => <div style={{
    width: 384
  }}>
      <Empty icon={media === 'icon' ? icons.clipboardCheck : undefined} media={media === 'avatars' ? <AvatarGroup size="sm">
              <Avatar src={avatarImage} name="Mira Okafor" />
              <Avatar initials="JL" name="Jonas Lindqvist" />
              <Avatar initials="PR" name="Priya Raman" />
            </AvatarGroup> : undefined} title={title} description={description || undefined} actions={actions > 0 ? <>
              <Button>Connect repository</Button>
              {actions > 1 && <Button variant="outline">Read the docs</Button>}
            </> : undefined} />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 384
  }}>
      <Empty icon={icons.search} title="No trips yet" description="Your upcoming stays and flights will show up here once you book them." actions={<>
            <Button>Explore stays</Button>
            <Button variant="outline">Import booking</Button>
          </>} />
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Figma demo "Empty": two actions.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 384
  }}>
      <Empty media={<AvatarGroup size="sm">
            <Avatar src={avatarImage} name="Mira Okafor" />
            <Avatar initials="JL" name="Jonas Lindqvist" />
            <Avatar initials="PR" name="Priya Raman" />
          </AvatarGroup>} title="Listen together" description="Invite friends to add songs to Late night focus and see what they are playing." actions={<Button leadingIcon={<RiUserAddLine />}>Invite friends</Button>} />
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Figma demo "With avatars": an Avatar Group as the media.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [query, setQuery] = useState('sushi');
    return <div style={{
      width: 384
    }}>
        <Empty icon={icons.search} title="No restaurants found" description={\`Nothing matches “\${query}” near you. Try another search or clear your filters.\`}>
          <Input aria-label="Search restaurants" value={query} onChange={event => setQuery(event.currentTarget.value)} leadIcon={<RiSearchLine />} />
          <Button variant="ghost" size="sm" onClick={() => setQuery('')}>
            Clear filters
          </Button>
        </Empty>
      </div>;
  }
}`,...D.parameters?.docs?.source},description:{story:`Figma demo "No results": a search field and a way to clear the filters.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 420
  }}>
      <Empty icon={icons.clipboardCheck} title="No deployments yet" titleAs="h2" description="Connect a repository and every push to main will ship a preview automatically." actions={<Button>Connect repository</Button>} />
    </Card>
}`,...O.parameters?.docs?.source},description:{story:`In a Card: Empty fills the card's content area.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)'
    }}>
          <Empty icon={icons.search} title="No trips yet" description="Your upcoming stays will show up here." actions={<Button variant="outline">Explore stays</Button>} />
        </div>)}
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...k.parameters?.docs?.description}}}})))()}init_Empty_stories();export{O as InACard,D as NoResults,w as Playground,k as Themes,T as Trips,E as WithAvatars,A as __namedExportsOrder,S as default};