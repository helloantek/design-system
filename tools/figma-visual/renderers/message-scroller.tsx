import { Avatar, Bubble, Marker, Message, MessageScroller, MessageScrollerItem } from '@helloantek/ds-react';
import type { CSSProperties } from 'react';
import type { Renderer } from './types';

// Sort UI 2.0 Message Scroller (359:3) with Figma's sample thread on the card surface, 448 × 440, opened at the start:
// a Separator Marker, Tomás Herrera and Mira Okafor ('TH' / 'MO' on palette orange, Muted bubbles), an End message in
// a Default bubble and Mira again, cut by the bottom edge under the fade and the end button.
const avatar = (initials: string) => (
  <Avatar initials={initials} style={{ '--avatar-fill': 'var(--ds-palette-orange-solid)', '--avatar-ink': 'var(--ds-primary-foreground)' } as CSSProperties} />
);

export const renderMessageScroller: Renderer = (p) => (
  <div style={{ width: 448, background: 'var(--ds-card)' }}>
    <MessageScroller
      id="target"
      aria-label="Thread"
      defaultScrollPosition="start"
      fade={p.Fade === 'True'}
      scrollToEndButton={p['Button end'] === 'True'}
      scrollToStartButton={p['Button start'] === 'True'}
      style={{ height: 440 }}
    >
      <MessageScrollerItem>
        <Marker variant="separator">Today · 92% adopted, 4 screens left</Marker>
      </MessageScrollerItem>
      <MessageScrollerItem>
        <Message avatar={avatar('TH')} sender="Tomás Herrera">
          <Bubble variant="muted">Settings is done. One catch: FieldGroup had a hard-coded 24px between fields, so it now reads space.6.</Bubble>
        </Message>
      </MessageScrollerItem>
      <MessageScrollerItem>
        <Message avatar={avatar('MO')} sender="Mira Okafor">
          <Bubble variant="muted">The last four are in Reports. Who can take them before Friday's 4.2 release cut?</Bubble>
        </Message>
      </MessageScrollerItem>
      <MessageScrollerItem>
        <Message align="end">
          <Bubble>Reports is mine. I'll post here once the PR is up.</Bubble>
        </Message>
      </MessageScrollerItem>
      <MessageScrollerItem>
        <Message avatar={avatar('MO')} sender="Mira Okafor">
          <Bubble variant="muted">Yes. Confirmed. The curve points to a microorganism harvesting stellar energy and breeding near carbon dioxide. If @rocky agrees, this is the clue we need.</Bubble>
        </Message>
      </MessageScrollerItem>
    </MessageScroller>
  </div>
);
