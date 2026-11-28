import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BHjVqdnj.js";import{n,r,t as i}from"./Bubble-_TeJKeI6.js";var a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),a=t(),o={title:`Components/Bubble`,parameters:{docs:{description:{component:"Implements the Sort UI 2.0 **Bubble** and **Bubble Reactions** ([open in Figma](https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=343-2)): a chat message up to 320 px wide. `variant` (`default` · `muted` · `ghost` · `destructive`), `align` (or the `BubbleGroup`'s), `reactions` in a pill on a corner (`reactionsPlacement`), and `collapsible` for long text with a \"Show more\" toggle. `BubbleGroup` stacks one sender's bubbles 8 px apart with an optional `footer`."}}}},s=e=>({width:`min(${e}px, calc(100vw - 32px))`}),c=e=>({...s(448),display:`flex`,flexDirection:`column`,gap:e}),l={args:{variant:`default`,align:`start`,text:`This bubble is aligned to the start. This is the default alignment.`,reactions:``},argTypes:{variant:{name:`Variant`,control:`inline-radio`,options:[`default`,`muted`,`ghost`,`destructive`]},align:{name:`Align`,control:`inline-radio`,options:[`start`,`end`]},text:{name:`Text`},reactions:{name:`Reactions`,description:`Empty hides them`}},render:({variant:e,align:t,text:r,reactions:o})=>(0,a.jsx)(`div`,{style:c(0),children:(0,a.jsx)(n,{align:t,children:(0,a.jsx)(i,{variant:e,reactions:o||void 0,children:r})})})},u={render:()=>(0,a.jsxs)(`div`,{style:c(32),role:`log`,"aria-label":`Release chat`,children:[(0,a.jsxs)(n,{children:[(0,a.jsx)(i,{variant:`muted`,children:`Morning! Is the 2.4 build ready?`}),(0,a.jsx)(i,{variant:`muted`,reactions:(0,a.jsx)(`span`,{"aria-label":`Heart eyes`,children:`😍`}),children:`QA signed off on the new checkout, so we can ship today if it is.`})]}),(0,a.jsxs)(n,{align:`end`,children:[(0,a.jsx)(i,{children:`Almost, it is uploading now`}),(0,a.jsx)(i,{children:`The Android build should reach the store in about ten minutes.`}),(0,a.jsx)(i,{children:`iOS already passed review overnight, so both versions can go live together. I will post the release notes in the launch channel as soon as they are out.`})]}),(0,a.jsx)(n,{children:(0,a.jsx)(i,{variant:`muted`,reactions:(0,a.jsx)(`span`,{"aria-label":`Lightning`,children:`⚡`}),children:`Perfect, ship it!`})}),(0,a.jsx)(n,{align:`end`,footer:`Sent 9:51 AM · Read by Mira`,children:(0,a.jsx)(i,{children:`Rolling out now`})})]})},d={render:()=>(0,a.jsxs)(`div`,{style:c(24),children:[(0,a.jsx)(n,{align:`end`,children:(0,a.jsx)(i,{children:`Your order is on its way and should arrive before 6 PM today.`})}),(0,a.jsx)(n,{children:(0,a.jsx)(i,{variant:`muted`,children:`Sure, I have added a note for the courier to leave it at reception.`})}),(0,a.jsx)(n,{align:`end`,children:(0,a.jsx)(i,{variant:`destructive`,children:`The payment for your last order failed. Update your card to retry.`})}),(0,a.jsx)(n,{children:(0,a.jsx)(i,{variant:`ghost`,children:`Here is a summary of your order: two items ship from our Berlin warehouse today and the third arrives separately on Thursday. You can track both parcels from the Orders page, and we will email you when each one is out for delivery.`})})]})},f={render:()=>(0,a.jsxs)(`div`,{style:c(24),children:[(0,a.jsx)(n,{children:(0,a.jsx)(i,{variant:`muted`,children:`Did the new pricing page go live with this morning's deploy?`})}),(0,a.jsx)(n,{align:`end`,children:(0,a.jsx)(i,{children:`Yes, it shipped together with the annual plans and the new FAQ.`})})]})},p={render:()=>(0,a.jsxs)(`div`,{style:c(32),children:[(0,a.jsx)(n,{children:(0,a.jsx)(i,{variant:`muted`,reactions:`🎉`,children:`We just passed 10,000 active users, two weeks earlier than planned!`})}),(0,a.jsx)(n,{align:`end`,children:(0,a.jsx)(i,{reactions:`🚀`,children:`Amazing work! Let's celebrate at Friday's all-hands with the whole team.`})}),(0,a.jsx)(n,{children:(0,a.jsx)(i,{variant:`muted`,reactionsPlacement:`top-start`,reactions:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`span`,{children:`😍🙏`}),(0,a.jsx)(`span`,{children:`+2`})]}),children:`The new onboarding flow cut drop-off during sign-up by almost half.`})}),(0,a.jsx)(n,{align:`end`,children:(0,a.jsx)(i,{reactionsPlacement:`top-start`,reactions:`👍`,children:`Let's share these numbers in next week's investor update.`})}),(0,a.jsx)(n,{children:(0,a.jsx)(i,{variant:`destructive`,reactions:`Yes run it`,children:`Are you sure I can run this command?`})})]})},m={render:()=>(0,a.jsxs)(`div`,{style:c(24),children:[(0,a.jsx)(n,{children:(0,a.jsx)(i,{variant:`muted`,children:`Can you sum up what changed in the 2.4 release for our customers?`})}),(0,a.jsx)(n,{align:`end`,children:(0,a.jsx)(i,{collapsible:!0,children:`Version 2.4 brings a faster checkout, saved payment methods and a redesigned order history. We fixed the sync issue that duplicated items in carts on slow connections, trimmed the app size by 18% and added offline access to your last 50 orders. Push notifications now group by order, so a busy day no longer floods your lock screen. The full changelog lists everything else, including new accessibility settings, dark mode refinements and support for the latest OS versions on both platforms.`})})]})},h={parameters:{layout:`fullscreen`},render:()=>(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`},children:[`light`,`dark`].map(e=>(0,a.jsxs)(`div`,{"data-ds-brand":`theme-1`,"data-ds-scheme":e,style:{background:`var(--ds-background)`,padding:24,display:`flex`,flexDirection:`column`,gap:24},children:[(0,a.jsx)(n,{children:(0,a.jsx)(i,{variant:`muted`,reactions:`👍`,children:`Is the deploy done?`})}),(0,a.jsxs)(n,{align:`end`,footer:`Read`,children:[(0,a.jsx)(i,{children:`Yes, all green.`}),(0,a.jsx)(i,{variant:`destructive`,children:`One migration needs a retry.`})]}),(0,a.jsx)(i,{variant:`ghost`,children:`A ghost bubble is plain text across the width, for long answers.`})]},e))})},g=[`Playground`,`Demo`,`Variants`,`Alignment`,`Reactions`,`LongMessage`,`Themes`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    align: 'start',
    text: 'This bubble is aligned to the start. This is the default alignment.',
    reactions: ''
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: 'inline-radio',
      options: ['default', 'muted', 'ghost', 'destructive']
    },
    align: {
      name: 'Align',
      control: 'inline-radio',
      options: ['start', 'end']
    },
    text: {
      name: 'Text'
    },
    reactions: {
      name: 'Reactions',
      description: 'Empty hides them'
    }
  },
  render: ({
    variant,
    align,
    text,
    reactions
  }) => <div style={column(0)}>
      <BubbleGroup align={align}>
        <Bubble variant={variant} reactions={reactions || undefined}>
          {text}
        </Bubble>
      </BubbleGroup>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column(32)} role="log" aria-label="Release chat">
      <BubbleGroup>
        <Bubble variant="muted">Morning! Is the 2.4 build ready?</Bubble>
        <Bubble variant="muted" reactions={<span aria-label="Heart eyes">😍</span>}>
          QA signed off on the new checkout, so we can ship today if it is.
        </Bubble>
      </BubbleGroup>
      <BubbleGroup align="end">
        <Bubble>Almost, it is uploading now</Bubble>
        <Bubble>The Android build should reach the store in about ten minutes.</Bubble>
        <Bubble>iOS already passed review overnight, so both versions can go live together. I will post the release notes in the launch channel as soon as they are out.</Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble variant="muted" reactions={<span aria-label="Lightning">⚡</span>}>
          Perfect, ship it!
        </Bubble>
      </BubbleGroup>
      <BubbleGroup align="end" footer="Sent 9:51 AM · Read by Mira">
        <Bubble>Rolling out now</Bubble>
      </BubbleGroup>
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Figma demo "Bubble": a conversation in groups, theirs muted at the start and yours on the card at the end, with reactions and a read receipt.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column(24)}>
      <BubbleGroup align="end">
        <Bubble>Your order is on its way and should arrive before 6 PM today.</Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble variant="muted">Sure, I have added a note for the courier to leave it at reception.</Bubble>
      </BubbleGroup>
      <BubbleGroup align="end">
        <Bubble variant="destructive">The payment for your last order failed. Update your card to retry.</Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble variant="ghost">
          Here is a summary of your order: two items ship from our Berlin warehouse today and the third arrives separately on Thursday. You can track both parcels from the Orders page, and we will email you when each one is out for delivery.
        </Bubble>
      </BubbleGroup>
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Figma demo "Variants": Default, Muted, Destructive and Ghost.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column(24)}>
      <BubbleGroup>
        <Bubble variant="muted">Did the new pricing page go live with this morning's deploy?</Bubble>
      </BubbleGroup>
      <BubbleGroup align="end">
        <Bubble>Yes, it shipped together with the annual plans and the new FAQ.</Bubble>
      </BubbleGroup>
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Figma demo "Alignment": theirs at the start, yours at the end.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column(32)}>
      <BubbleGroup>
        <Bubble variant="muted" reactions="🎉">
          We just passed 10,000 active users, two weeks earlier than planned!
        </Bubble>
      </BubbleGroup>
      <BubbleGroup align="end">
        <Bubble reactions="🚀">Amazing work! Let's celebrate at Friday's all-hands with the whole team.</Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble variant="muted" reactionsPlacement="top-start" reactions={<>
              <span>😍🙏</span>
              <span>+2</span>
            </>}>
          The new onboarding flow cut drop-off during sign-up by almost half.
        </Bubble>
      </BubbleGroup>
      <BubbleGroup align="end">
        <Bubble reactionsPlacement="top-start" reactions="👍">
          Let's share these numbers in next week's investor update.
        </Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble variant="destructive" reactions="Yes run it">
          Are you sure I can run this command?
        </Bubble>
      </BubbleGroup>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Figma demo "Reactions": on the bottom or top corner, several with a count, or a short reply.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column(24)}>
      <BubbleGroup>
        <Bubble variant="muted">Can you sum up what changed in the 2.4 release for our customers?</Bubble>
      </BubbleGroup>
      <BubbleGroup align="end">
        <Bubble collapsible>
          Version 2.4 brings a faster checkout, saved payment methods and a redesigned order history. We fixed the sync issue that duplicated items in carts on slow connections, trimmed the app size by 18% and added offline access to your last 50 orders. Push notifications now group by order, so a busy day no longer floods your lock screen. The full changelog lists everything else, including new accessibility settings, dark mode refinements and support for the latest OS versions on both platforms.
        </Bubble>
      </BubbleGroup>
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Figma demo "Long message": the first eight lines, then "Show more".`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
  }}>
      {(['light', 'dark'] as const).map(scheme => <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{
      background: 'var(--ds-background)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
          <BubbleGroup>
            <Bubble variant="muted" reactions="👍">
              Is the deploy done?
            </Bubble>
          </BubbleGroup>
          <BubbleGroup align="end" footer="Read">
            <Bubble>Yes, all green.</Bubble>
            <Bubble variant="destructive">One migration needs a retry.</Bubble>
          </BubbleGroup>
          <Bubble variant="ghost">A ghost bubble is plain text across the width, for long answers.</Bubble>
        </div>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Light and Dark, driven only by tokens.`,...h.parameters?.docs?.description}}}})))()}_();export{f as Alignment,u as Demo,m as LongMessage,l as Playground,p as Reactions,h as Themes,d as Variants,g as __namedExportsOrder,o as default};