import { RiAddLine, RiArrowDownSLine } from '@remixicon/react';
import { AIChatComposer, AIChatComposerToken, Button, type AIChatComposerState } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Sort UI 2.0 AI Chat Composer (1660:754) with Figma's samples: the ghost sm + button, the 'Ask about anything...'
// placeholder, the 'Opus 5.5 High' model button with a chevron, dictate and an enabled send button (as drawn), Figma's
// sample waveform while recording and 'Transcribing...' while transcribing. The composer is 448 px wide, as in Figma.
export const renderAIChatComposer: Renderer = (p) => (
  <div id="target" style={{ display: 'inline-flex', padding: 4, background: 'var(--ds-background)' }}>
    <AIChatComposer
      style={{ width: 448 }}
      layout={p.Layout === 'Column' ? 'column' : 'row'}
      state={p.State.toLowerCase() as AIChatComposerState}
      placeholder="Ask about anything..."
      transcribingLabel="Transcribing..."
      submitDisabled={false}
      maximize={false}
      leading={<Button variant="ghost" size="sm" icon={<RiAddLine />} aria-label="Add files or tools" />}
      model={
        <Button variant="ghost" size="sm" trailingIcon={<RiArrowDownSLine />}>
          Opus 5.5 High
        </Button>
      }
    />
  </div>
);

// Sort UI 2.0 AI Chat Composer Token (1659:433): '/Lorem-ipsum'.
export const renderAIChatComposerToken: Renderer = () => (
  <div id="target" style={{ display: 'inline-flex', padding: 4, background: 'var(--ds-background)' }}>
    <AIChatComposerToken>/Lorem-ipsum</AIChatComposerToken>
  </div>
);
