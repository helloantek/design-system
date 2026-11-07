import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { RiAddLine, RiArrowUpLine, RiChatSmile2Line, RiRefreshLine } from '@remixicon/react';
import { Avatar } from '../Avatar';
import { Bubble } from '../Bubble';
import { Button } from '../Button';
import { Card, CardContent, CardFooter, CardHeader } from '../Card';
import { DropdownMenu, DropdownMenuItem } from '../DropdownMenu';
import { Empty } from '../Empty';
import { Marker } from '../Marker';
import { Message } from '../Message';
import { Select } from '../Select';
import { Slider } from '../Slider';
import { ToggleGroup, ToggleGroupItem } from '../ToggleGroup';
import { MessageScroller, MessageScrollerItem, type MessageScrollerAnimation, type MessageScrollerHandle, type MessageScrollerPosition, type MessageScrollerState } from './MessageScroller';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=359-2';

const meta = {
  title: 'Components/Message Scroller',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Message Scroller** ([open in Figma](${FIGMA_URL})): a chat transcript in a fixed height with a \`fade\` over the bottom edge and buttons to the end (\`scrollToEndButton\`) and the start (\`scrollToStartButton\`). It follows the live edge (\`autoScroll\`), settles a new turn marked \`scrollAnchor\` near the top edge with \`anchorOffset\` px of the previous reply in view, keeps the reader's place when earlier messages load, opens at \`defaultScrollPosition\` and animates new turns (\`animation\`). \`controlRef\` drives it from outside; \`onScrollStateChange\` and \`onAnchorChange\` report where the reader is. The demos' composer is a stand-in until AI Chat Composer ships.`,
      },
    },
  },
} satisfies Meta;

export default meta;

// ——— The Figma component's sample: a team thread ———

const person = (initials: string, name: string) => (
  <Avatar initials={initials} name={name} style={{ '--avatar-fill': 'var(--ds-palette-orange-solid)', '--avatar-ink': 'var(--ds-primary-foreground)' } as CSSProperties} />
);

const thread = (
  <>
    <MessageScrollerItem>
      <Marker variant="separator">Today · 92% adopted, 4 screens left</Marker>
    </MessageScrollerItem>
    <MessageScrollerItem>
      <Message avatar={person('TH', 'Tomás Herrera')} sender="Tomás Herrera">
        <Bubble variant="muted">Settings is done. One catch: FieldGroup had a hard-coded 24px between fields, so it now reads space.6.</Bubble>
      </Message>
    </MessageScrollerItem>
    <MessageScrollerItem>
      <Message avatar={person('MO', 'Mira Okafor')} sender="Mira Okafor">
        <Bubble variant="muted">The last four are in Reports. Who can take them before Friday's 4.2 release cut?</Bubble>
      </Message>
    </MessageScrollerItem>
    <MessageScrollerItem scrollAnchor>
      <Message align="end">
        <Bubble>Reports is mine. I'll post here once the PR is up.</Bubble>
      </Message>
    </MessageScrollerItem>
    <MessageScrollerItem>
      <Message avatar={person('MO', 'Mira Okafor')} sender="Mira Okafor">
        <Bubble variant="muted">Yes. Confirmed. The curve points to a microorganism harvesting stellar energy and breeding near carbon dioxide. If @rocky agrees, this is the clue we need.</Bubble>
      </Message>
    </MessageScrollerItem>
  </>
);

type PlaygroundArgs = { fade: boolean; scrollToEndButton: boolean; scrollToStartButton: boolean; defaultScrollPosition: MessageScrollerPosition };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { fade: true, scrollToEndButton: true, scrollToStartButton: false, defaultScrollPosition: 'start' },
  argTypes: {
    fade: { name: 'Fade', control: 'boolean' },
    scrollToEndButton: { name: 'Button end', control: 'boolean' },
    scrollToStartButton: { name: 'Button start', control: 'boolean' },
    defaultScrollPosition: { name: 'Opening position', control: 'inline-radio', options: ['start', 'end', 'last-anchor'] },
  },
  render: (args) => (
    <div style={{ width: 'min(448px, calc(100vw - 32px))', background: 'var(--ds-card)' }}>
      <MessageScroller key={args.defaultScrollPosition} {...args} aria-label="Design system thread" style={{ height: 440 }}>
        {thread}
      </MessageScroller>
    </div>
  ),
};

// ——— The demos: a chat card with a scripted conversation ———

type Turn = { id: string; role: 'user' | 'assistant' | 'marker'; text: string; sender?: string };

const script: { user: string; reply: string }[] = [
  {
    user: "We're shipping offline mode for our notes app next week, and I'm worried about sync conflicts. What happens when two devices edit the same note while offline?",
    reply:
      "That's the classic sync conflict. Give every edit a timestamp and a device ID, then merge changes paragraph by paragraph when the devices reconnect — most edits touch different parts of a note, so they combine cleanly.\n\nWhen two devices change the same paragraph, keep both versions and show a small conflict badge on the note. Nothing is overwritten silently, and the writer decides which version wins.",
  },
  {
    user: 'How do we test that before launch?',
    reply:
      'Script it. Put two test devices in airplane mode, edit the same note on both, then reconnect them in different orders.\n\nCover three cases: different paragraphs, the same paragraph, and one device deleting the note while the other edits it. The last one is where most apps lose data.',
  },
  {
    user: 'And if a user ignores the conflict badge?',
    reply: 'Then both versions stay. The badge is quiet on purpose: it never blocks writing, and the older version moves to the note history after 30 days, so nothing piles up.',
  },
];

const history: Turn[] = script.flatMap(({ user, reply }, i) => [
  { id: `saved-user-${i}`, role: 'user', text: user },
  { id: `saved-reply-${i}`, role: 'assistant', text: reply },
]);

function TurnView({ turn }: { turn: Turn }) {
  if (turn.role === 'marker') return <Marker variant="separator">{turn.text}</Marker>;
  if (turn.role === 'user')
    return (
      <Message align="end" sender={turn.sender}>
        <Bubble variant="muted">{turn.text}</Bubble>
      </Message>
    );
  return (
    <Message sender={turn.sender}>
      {turn.text.split('\n\n').map((paragraph, i) => (
        <Bubble key={i} variant="ghost">
          {paragraph}
        </Bubble>
      ))}
    </Message>
  );
}

const turns = (list: Turn[], anchor: (turn: Turn) => boolean = (t) => t.role === 'user') =>
  list.map((turn) => (
    <MessageScrollerItem key={turn.id} id={turn.id} scrollAnchor={anchor(turn)}>
      <TurnView turn={turn} />
    </MessageScrollerItem>
  ));

/** A conversation the demos add to: `send` posts the next scripted question and streams its reply word by word. */
function useChat(initial: Turn[] = []) {
  const [list, setList] = useState<Turn[]>(initial);
  const [step, setStep] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>>(undefined);
  const count = useRef(0);
  const id = (role: string) => `${role}-${++count.current}`;
  useEffect(() => () => clearInterval(timer.current), []);

  const stream = (reply: string, sender?: string) => {
    const replyId = id('reply');
    const words = reply.split(/(?<= )/);
    let shown = 0;
    setList((l) => [...l, { id: replyId, role: 'assistant', text: '', sender }]);
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      shown = Math.min(words.length, shown + 2);
      setList((l) => l.map((t) => (t.id === replyId ? { ...t, text: words.slice(0, shown).join('') } : t)));
      if (shown >= words.length) clearInterval(timer.current);
    }, 50);
  };

  const send = () => {
    const { user, reply } = script[step % script.length];
    setStep((s) => s + 1);
    setList((l) => [...l, { id: id('user'), role: 'user', text: user }]);
    setTimeout(() => stream(reply), 400);
  };

  const reset = () => {
    clearInterval(timer.current);
    setList(initial);
    setStep(0);
  };

  return { list, setList, send, reset, nextPrompt: script[step % script.length].user, id };
}

function ChatCard({ title, description, action, children, footer, note }: { title: string; description: string; action?: ReactNode; children: ReactNode; footer?: ReactNode; note: string }) {
  return (
    <div style={{ display: 'grid', justifyItems: 'center', gap: 12, width: 'min(384px, calc(100vw - 32px))' }}>
      <Card style={{ width: '100%', boxSizing: 'border-box' }}>
        <CardHeader title={title} description={description} action={action} />
        <CardContent>{children}</CardContent>
        {footer && <CardFooter justify="between">{footer}</CardFooter>}
      </Card>
      <p style={{ margin: 0, textAlign: 'center', color: 'var(--ds-muted-foreground)', fontFamily: 'var(--ds-font-sans)', fontSize: 12, lineHeight: '16px' }}>{note}</p>
    </div>
  );
}

const ResetButton = ({ onClick }: { onClick: () => void }) => <Button variant="outline" size="sm" icon={<RiRefreshLine />} aria-label="Reset the conversation" onClick={onClick} />;
const SendButton = ({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) => <Button size="sm" icon={<RiArrowUpLine />} aria-label="Send" onClick={onClick} disabled={disabled} />;

/** A read-only stand-in for AI Chat Composer: the next scripted prompt, a + and a send button. */
function Composer({ prompt, onSend, children }: { prompt: string; onSend: () => void; children?: ReactNode }) {
  return (
    <div style={{ display: 'grid', gap: 8, width: '100%', padding: 8, boxSizing: 'border-box', borderRadius: 16, background: 'var(--ds-fill-2)', fontFamily: 'var(--ds-font-sans)' }}>
      <span style={{ display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, color: 'var(--ds-foreground)', fontSize: 13, lineHeight: '20px' }}>{prompt}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Button variant="outline" size="xs" icon={<RiAddLine />} aria-label="Add an attachment" />
        {children}
        <span style={{ flex: 1 }} />
        <SendButton onClick={onSend} />
      </span>
    </div>
  );
}

const emptyState = (title: string, description: string) => <Empty icon={<RiChatSmile2Line />} title={title} description={description} style={{ height: '100%' }} />;

const scrollerHeight = 340;

/** Figma demo "Message Scroller": a new chat; send posts a question that settles at the top and streams the reply. */
export const Demo: StoryObj = {
  render: function Render() {
    const chat = useChat();
    return (
      <ChatCard title="New Chat" description="How can I help you today?" action={<ResetButton onClick={chat.reset} />} note="Demo is read only. Press send to send messages." footer={<Composer prompt={chat.nextPrompt} onSend={chat.send} />}>
        <MessageScroller aria-label="New chat" style={{ height: scrollerHeight }}>
          {chat.list.length ? turns(chat.list) : <MessageScrollerItem style={{ height: scrollerHeight }}>{emptyState('Morning, Shiryoku!', 'What are we working on today? Press send to start a new conversation')}</MessageScrollerItem>}
        </MessageScroller>
      </ChatCard>
    );
  },
};

/** Figma demo "Anchoring Turns": choose whether the user's or the assistant's turn settles near the top edge. */
export const AnchoringTurns: StoryObj = {
  render: function Render() {
    const chat = useChat();
    const [role, setRole] = useState('user');
    return (
      <ChatCard
        title="Anchoring Turns"
        description="Choose which role settles near the top edge."
        action={<ResetButton onClick={chat.reset} />}
        note="Toggle the anchor role, then send messages to compare where turns settle."
        footer={
          <>
            <ToggleGroup type="single" aria-label="Anchor role" value={role} onValueChange={(v) => v && setRole(v)}>
              <ToggleGroupItem value="user">User</ToggleGroupItem>
              <ToggleGroupItem value="assistant">Assistant</ToggleGroupItem>
            </ToggleGroup>
            <SendButton onClick={chat.send} />
          </>
        }
      >
        <MessageScroller aria-label="Anchored conversation" style={{ height: scrollerHeight }}>
          {chat.list.length ? turns(chat.list, (t) => t.role === role) : <MessageScrollerItem style={{ height: scrollerHeight }}>{emptyState('No anchored messages yet', 'Send the first message to see the selected role anchor.')}</MessageScrollerItem>}
        </MessageScroller>
      </ChatCard>
    );
  },
};

const groupChat: Turn[] = [
  { id: 'g1', role: 'user', text: '@mary, the astrophage line keeps matching Venus energy output. Can you check my math?' },
  { id: 'g2', role: 'assistant', sender: 'Mary (Agent)', text: 'Yes. Confirmed. The curve points to a microorganism harvesting stellar energy and breeding near carbon dioxide. If @rocky agrees, this is the clue we need.' },
  { id: 'g3', role: 'user', text: 'ping @rocky' },
];

/** Figma demo "Group Chat": when someone joins, a Marker is added and anchored as the next turn. */
export const GroupChat: StoryObj = {
  render: function Render() {
    const chat = useChat(groupChat);
    const joined = chat.list.some((t) => t.role === 'marker');
    const addRocky = () => {
      chat.setList((l) => [...l, { id: chat.id('marker'), role: 'marker', text: 'Rocky joined the chat' }]);
      setTimeout(() => chat.setList((l) => [...l, { id: chat.id('rocky'), role: 'assistant', sender: 'Rocky', text: 'Amaze! Math is good. Astrophage eats light, makes more astrophage. Is bad for star. We fix together, question?' }]), 600);
    };
    return (
      <ChatCard
        title="Group Chat"
        description="A group chat with several participants and an assistant. The Marker is marked as a turn."
        action={<ResetButton onClick={chat.reset} />}
        note="When a user joins, a marker is created. scrollAnchor on the marker marks it as the next turn."
        footer={
          <div style={{ display: 'grid', gap: 8, width: '100%', textAlign: 'center' }}>
            <Button variant="secondary" onClick={addRocky} disabled={joined}>
              Add Rocky
            </Button>
            <span style={{ color: 'var(--ds-muted-foreground)', fontFamily: 'var(--ds-font-sans)', fontSize: 12, lineHeight: '16px' }}>This will create a marker and make it the anchor</span>
          </div>
        }
      >
        <MessageScroller aria-label="Group chat" style={{ height: scrollerHeight }}>
          {turns(chat.list, (t) => t.role === 'marker')}
        </MessageScroller>
      </ChatCard>
    );
  },
};

/** Figma demo "Keeping Context Visible": `anchorOffset` keeps part of the previous reply above a new turn. */
export const KeepingContextVisible: StoryObj = {
  render: function Render() {
    const chat = useChat(history.slice(0, 2));
    const [peek, setPeek] = useState(64);
    return (
      <ChatCard
        title="Keeping Context Visible"
        description="New turns keep part of the previous reply in view."
        action={<ResetButton onClick={chat.reset} />}
        note="Adjust the slider and send. Observe the previous message peek."
        footer={
          <Composer prompt={chat.nextPrompt} onSend={chat.send}>
            <span style={{ color: 'var(--ds-muted-foreground)', fontFamily: 'var(--ds-font-sans)', fontSize: 12, minWidth: 40 }}>{peek}px</span>
            <span style={{ width: 80 }}>
              <Slider aria-label="Peek" min={0} max={128} step={8} value={peek} onValueChange={(v) => setPeek(v as number)} />
            </span>
          </Composer>
        }
      >
        <MessageScroller aria-label="Conversation with context" anchorOffset={peek} style={{ height: scrollerHeight }}>
          {turns(chat.list)}
        </MessageScroller>
      </ChatCard>
    );
  },
};

/** Figma demo "Following the Live Edge": replies stream in and auto-scroll follows them while the reader is at the end. */
export const FollowingTheLiveEdge: StoryObj = {
  render: function Render() {
    const chat = useChat();
    return (
      <ChatCard title="Streaming Messages" description="Auto-scroll follows the live edge of the conversation." action={<ResetButton onClick={chat.reset} />} note="Streaming is simulated. autoScroll is enabled." footer={<Composer prompt={chat.nextPrompt} onSend={chat.send} />}>
        <MessageScroller aria-label="Streaming conversation" style={{ height: scrollerHeight }}>
          {chat.list.length ? turns(chat.list, () => false) : <MessageScrollerItem style={{ height: scrollerHeight }}>{emptyState('Ready to Stream', 'Press send to stream a scripted conversation.')}</MessageScrollerItem>}
        </MessageScroller>
      </ChatCard>
    );
  },
};

/** Figma demo "Opening Saved Threads": `defaultScrollPosition` opens a saved transcript at the start, the end or the last anchored turn. */
export const OpeningSavedThreads: StoryObj = {
  render: function Render() {
    const [position, setPosition] = useState<MessageScrollerPosition>('last-anchor');
    return (
      <ChatCard
        title="Opening Position"
        description="Choose where a saved transcript opens."
        note="Toggle the defaultScrollPosition to see where the transcript starts when you open the thread."
        footer={
          <ToggleGroup type="single" variant="outline" aria-label="Opening position" value={position} onValueChange={(v) => v && setPosition(v as MessageScrollerPosition)} style={{ width: '100%' }}>
            <ToggleGroupItem value="start">start</ToggleGroupItem>
            <ToggleGroupItem value="end">end</ToggleGroupItem>
            <ToggleGroupItem value="last-anchor">last-anchor</ToggleGroupItem>
          </ToggleGroup>
        }
      >
        <MessageScroller key={position} aria-label="Saved thread" defaultScrollPosition={position} style={{ height: scrollerHeight }}>
          {turns(history)}
        </MessageScroller>
      </ChatCard>
    );
  },
};

const earlier: Turn[] = [
  { id: 'e1', role: 'user', text: 'Checkout errors went up after this morning’s deploy. What changed?' },
  { id: 'e2', role: 'assistant', text: 'Only the export queue worker changed. The deploy moved large CSV jobs onto the shared retry policy, which made each failed attempt hold a worker slot longer than before.\n\nThe app deploy did not include checkout, pricing, or billing API changes.' },
];
const latest: Turn[] = [
  { id: 'l1', role: 'user', text: 'Do we need to roll back?' },
  { id: 'l2', role: 'assistant', text: 'Not yet. Queue depth is recovering after we reduced retry concurrency, and the oldest pending job is now under five minutes old.\n\nKeep rollback ready if the queue starts climbing again, but the current trend points toward recovery.' },
  { id: 'l3', role: 'user', text: 'Okay. Post an update in the incident channel.' },
  { id: 'l4', role: 'assistant', text: 'Posted: queue recovering, no rollback for now, next check in 30 minutes.' },
  { id: 'l5', role: 'user', text: 'What should the follow-up ticket say?' },
  { id: 'l6', role: 'assistant', text: 'Give large CSV exports their own retry policy with a lower concurrency cap, and add a queue-depth alert at 500 pending jobs so the next spike pages someone before customers notice.' },
];

/** Figma demo "Loading Earlier Messages": messages added above keep the reader's place. */
export const LoadingEarlierMessages: StoryObj = {
  render: function Render() {
    const [list, setList] = useState(latest);
    const loaded = list.length > latest.length;
    return (
      <ChatCard
        title="Load History"
        description="Prepended messages keep your place."
        action={<ResetButton onClick={() => setList(latest)} />}
        note="Click Load History to load the entire conversation."
        footer={
          <div style={{ display: 'grid', gap: 8, width: '100%', textAlign: 'center' }}>
            <Button variant="secondary" onClick={() => setList([...earlier, ...latest])} disabled={loaded}>
              Load History
            </Button>
            <span style={{ color: 'var(--ds-muted-foreground)', fontFamily: 'var(--ds-font-sans)', fontSize: 12, lineHeight: '16px' }}>Restore earlier messages while keeping your place.</span>
          </div>
        }
      >
        <MessageScroller aria-label="Incident thread" defaultScrollPosition="start" style={{ height: scrollerHeight }}>
          {turns(list)}
        </MessageScroller>
      </ChatCard>
    );
  },
};

/** Figma demo "Animating New Messages": choose how new turns come in. */
export const AnimatingNewMessages: StoryObj = {
  render: function Render() {
    const chat = useChat();
    const [animation, setAnimation] = useState<MessageScrollerAnimation>('slide');
    return (
      <ChatCard
        title="Animation"
        description="Choose how user messages are animated when they are added to the conversation."
        action={<ResetButton onClick={chat.reset} />}
        note="Select an animation then click send to see it in action."
        footer={
          <>
            <Select
              aria-label="Animation"
              size="sm"
              value={animation}
              onValueChange={(v) => setAnimation(v as MessageScrollerAnimation)}
              options={['none', 'fade', 'slide', 'scale'].map((value) => ({ value, label: value[0].toUpperCase() + value.slice(1) }))}
            />
            <SendButton onClick={chat.send} />
          </>
        }
      >
        <MessageScroller aria-label="Animated conversation" animation={animation} style={{ height: scrollerHeight }}>
          {chat.list.length ? turns(chat.list) : <MessageScrollerItem style={{ height: scrollerHeight }}>{emptyState('No Messages Yet', 'Click the button below to send the first message.')}</MessageScrollerItem>}
        </MessageScroller>
      </ChatCard>
    );
  },
};

/** Figma demo "Jumping to Messages": `controlRef` drives the transcript from outside. */
export const JumpingToMessages: StoryObj = {
  render: function Render() {
    const scroller = useRef<MessageScrollerHandle>(null);
    return (
      <ChatCard
        title="Commands"
        description="Drive the transcript from outside."
        action={
          <DropdownMenu align="end" aria-label="Jump to" trigger={<Button variant="secondary" size="sm">Jump to…</Button>}>
            <DropdownMenuItem onClick={() => scroller.current?.scrollToStart()}>First message</DropdownMenuItem>
            {script.map((_, i) => (
              <DropdownMenuItem key={i} onClick={() => scroller.current?.scrollToItem(`saved-user-${i}`)}>
                {`Question ${i + 1}`}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem onClick={() => scroller.current?.scrollToEnd()}>Latest message</DropdownMenuItem>
          </DropdownMenu>
        }
        note="Use the controls to jump to any message in the conversation."
      >
        <MessageScroller controlRef={scroller} aria-label="Conversation" style={{ height: scrollerHeight }}>
          {turns(history)}
        </MessageScroller>
      </ChatCard>
    );
  },
};

/** Figma demo "Tracking the Reader's Position": `onAnchorChange` drives an outline of the anchored turns. */
export const TrackingTheReadersPosition: StoryObj = {
  render: function Render() {
    const scroller = useRef<MessageScrollerHandle>(null);
    const [current, setCurrent] = useState<string | null>(null);
    const questions = history.filter((t) => t.role === 'user');
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <ChatCard title="Transcript Outline" description="Track the current anchored turn." note="Open the outline to jump between anchored turns as you read.">
          <MessageScroller controlRef={scroller} onAnchorChange={setCurrent} aria-label="Incident handoff" defaultScrollPosition="start" style={{ height: scrollerHeight }}>
            {turns(history)}
          </MessageScroller>
        </ChatCard>
        <nav aria-label="Outline" style={{ display: 'grid', gap: 2 }}>
          {questions.map((q, i) => (
            <button
              key={q.id}
              type="button"
              aria-label={`Question ${i + 1}: ${q.text}`}
              aria-current={current === q.id ? 'true' : undefined}
              onClick={() => scroller.current?.scrollToItem(q.id)}
              style={{ width: 20, height: 8, padding: 0, border: 0, background: 'none', cursor: 'pointer', display: 'grid', alignItems: 'center' }}
            >
              <span style={{ display: 'block', height: current === q.id ? 2 : 1, background: current === q.id ? 'var(--ds-foreground)' : 'var(--ds-muted-foreground)', borderRadius: 1 }} />
            </button>
          ))}
        </nav>
      </div>
    );
  },
};

const statusText = ({ atStart, atEnd }: MessageScrollerState) =>
  atStart && atEnd ? 'Everything is in view.' : atStart ? 'You are at the top. You can only scroll down.' : atEnd ? 'You are at the latest message. You can only scroll up.' : 'You can scroll up and down.';

/** Figma demo "Reading Scroll State": `onScrollStateChange` reports where the reader can scroll to. */
export const ReadingScrollState: StoryObj = {
  render: function Render() {
    const [state, setState] = useState<MessageScrollerState>({ atStart: true, atEnd: false });
    return (
      <ChatCard
        title="Scroll Status"
        description="Where the reader can scroll to from the current position."
        note="Scroll the transcript to see the footer update."
        footer={
          <p role="status" style={{ margin: 0, width: '100%', textAlign: 'center', color: 'var(--ds-muted-foreground)', fontFamily: 'var(--ds-font-sans)', fontSize: 13, lineHeight: '20px' }}>
            {statusText(state)}
          </p>
        }
      >
        <MessageScroller aria-label="Training plan" defaultScrollPosition="start" scrollToStartButton onScrollStateChange={setState} style={{ height: scrollerHeight }}>
          {turns(history)}
        </MessageScroller>
      </ChatCard>
    );
  },
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-card)', padding: 24 }}>
          <MessageScroller aria-label={`Thread, ${scheme}`} defaultScrollPosition="start" scrollToStartButton style={{ height: 360 }}>
            {thread}
          </MessageScroller>
        </div>
      ))}
    </div>
  ),
};
