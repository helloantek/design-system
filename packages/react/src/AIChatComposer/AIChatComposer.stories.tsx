import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { RiAddLine, RiArrowDownSLine, RiCloseLine, RiFolderAddLine, RiGlobalLine, RiImageAddLine, RiPlugLine, RiSearchEyeLine, RiSparklingLine } from '@remixicon/react';
import { Attachment } from '../Attachment';
import { attachmentImage } from '../Attachment/Attachment.fixtures';
import { Badge } from '../Badge';
import { Button } from '../Button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
} from '../DropdownMenu';
import { AIChatComposer, AIChatComposerToken, type AIChatComposerLayout, type AIChatComposerState } from './AIChatComposer';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=1623-141714';

const meta = {
  title: 'Components/AI Chat Composer',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **AI Chat Composer**, **AI Chat Composer Bar** and **AI Chat Composer Token** ([open in Figma](${FIGMA_URL})): the prompt box of an AI chat. \`layout\` (\`auto\` · \`row\` · \`column\`; \`auto\` is a row until the text wraps, has a line break, a \`header\` or \`badges\`) × \`state\` (\`default\` · \`recording\` · \`transcribing\`). Slots: \`leading\` (the + menu), \`badges\` (tools), \`model\` (the model picker), \`header\` (attachments). The prompt grows to 8 lines (24 when maximized; the expand button shows once it scrolls), Enter sends and Shift+Enter adds a line, and /commands are tinted (\`tokens\`). \`AIChatComposerToken\` draws a /command elsewhere, e.g. in a sent message.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const width: CSSProperties = { width: 'min(448px, calc(100vw - 32px))' };

const plus = (label = 'Add files or tools') => <Button variant="ghost" size="sm" icon={<RiAddLine />} aria-label={label} />;
const model = (label = 'Opus 5.5 High') => (
  <Button variant="ghost" size="sm" trailingIcon={<RiArrowDownSLine />}>
    {label}
  </Button>
);

type PlaygroundArgs = { layout: AIChatComposerLayout; state: AIChatComposerState; placeholder: string; dictate: boolean; maximize: boolean; badges: boolean; header: boolean; disabled: boolean };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { layout: 'auto', state: 'default', placeholder: 'Ask about anything…', dictate: true, maximize: false, badges: false, header: false, disabled: false },
  argTypes: {
    layout: { name: 'Layout', control: 'inline-radio', options: ['auto', 'row', 'column'] },
    state: { name: 'State', control: 'inline-radio', options: ['default', 'recording', 'transcribing'] },
    placeholder: { name: 'Placeholder' },
    dictate: { name: 'Dictate' },
    maximize: { name: 'Maximize', description: 'Always show the expand button (Column)' },
    badges: { name: 'Badges', description: 'Bar Type=Badges' },
    header: { name: 'Header', description: 'Attachments above the text' },
    disabled: { name: 'Disabled' },
  },
  render: function Render({ badges, header, maximize, ...args }) {
    const [value, setValue] = useState('');
    return (
      <AIChatComposer
        {...args}
        style={width}
        value={value}
        onValueChange={setValue}
        onSubmit={() => setValue('')}
        maximize={maximize || 'auto'}
        leading={plus()}
        model={model()}
        badges={badges ? <ToolBadges /> : undefined}
        header={header ? <Attachment type="card" style={{ '--attachment-width': '120px', '--attachment-height': '120px' } as CSSProperties} title="acme-audit.docx" typeLabel="DOCX" description="2.1 MB" /> : undefined}
      />
    );
  },
};

function ToolBadges({ onRemove }: { onRemove?: (tool: string) => void }) {
  return (
    <>
      <Badge size="lg" color="blue" icon={<RiGlobalLine />} onRemove={() => onRemove?.('search')}>
        Web search
      </Badge>
      <Badge size="lg" color="blue" icon={<RiSearchEyeLine />} onRemove={() => onRemove?.('research')}>
        Research
      </Badge>
    </>
  );
}

/** Figma demo "AI Chat Composer": empty (send disabled), a /command, recording and tool badges. */
export const Demo: StoryObj = {
  render: function Render() {
    const [tools, setTools] = useState(['search', 'research']);
    return (
      <div style={{ display: 'grid', gap: 24, ...width }}>
        <AIChatComposer leading={plus()} model={model()} />
        <AIChatComposer layout="column" defaultValue="Use /release-notes to draft the notes for version 4.2 of the mobile app." leading={plus()} model={model()} />
        <AIChatComposer layout="column" state="recording" leading={plus()} model={model()} />
        <AIChatComposer
          leading={plus()}
          model={model()}
          badges={
            tools.length > 0 ? (
              <>
                {tools.includes('search') && (
                  <Badge size="lg" color="blue" icon={<RiGlobalLine />} onRemove={() => setTools((t) => t.filter((x) => x !== 'search'))}>
                    Web search
                  </Badge>
                )}
                {tools.includes('research') && (
                  <Badge size="lg" color="blue" icon={<RiSearchEyeLine />} onRemove={() => setTools((t) => t.filter((x) => x !== 'research'))}>
                    Research
                  </Badge>
                )}
              </>
            ) : undefined
          }
        />
      </div>
    );
  },
};

/** Figma demo "With attachments": a picture and a document in the header, removable before sending. */
export const WithAttachments: StoryObj = {
  render: function Render() {
    const [items, setItems] = useState(['picture', 'doc']);
    const drop = (id: string) => setItems((i) => i.filter((x) => x !== id));
    const square = { '--attachment-width': '120px', '--attachment-height': '120px' } as CSSProperties;
    const remove = (name: string, id: string) => <Button variant="ghost" size="xs" icon={<RiCloseLine />} aria-label={`Remove ${name}`} onClick={() => drop(id)} />;
    return (
      <AIChatComposer
        style={width}
        defaultValue="Compare the peak in the photo with the one in the audit."
        leading={<Button variant="ghost" size="sm" icon={<RiAddLine />} aria-label="Add files or photos" onClick={() => setItems(['picture', 'doc'])} />}
        model={model()}
        header={
          items.length > 0 ? (
            <>
              {items.includes('picture') && <Attachment type="image" style={square} title="red-forest-peak.webp" description="1.4 MB" src={attachmentImage} actions={remove('red-forest-peak.webp', 'picture')} />}
              {items.includes('doc') && <Attachment type="card" style={square} title="acme-audit.docx" typeLabel="DOCX" description="2.1 MB" actions={remove('acme-audit.docx', 'doc')} />}
            </>
          ) : undefined
        }
      />
    );
  },
};

const LONG = [
  'Draft the release notes for version 4.2 of the mobile app.',
  '',
  'Highlights: offline mode for saved trips, a new map style, faster sync on slow networks.',
  'Fixes: the share sheet no longer closes on rotation; push notifications respect quiet hours.',
  'Tone: friendly and short, one line per change, no marketing language.',
  'Audience: people who already use the app every week.',
  'Format: a title, three highlights, then the fixes as a list.',
  'Also suggest a one-line summary for the store listing.',
  'Keep it under 120 words.',
].join('\n');

/** Figma demo "Long text": past 8 lines the prompt scrolls and the expand button appears; expanded it grows to 24. */
export const LongText: StoryObj = {
  render: () => <AIChatComposer style={width} defaultValue={LONG} leading={plus()} model={model()} />,
};

/** Figma's dropdowns: the + menu (files, project, skills, connectors, web search, research) and the model picker with effort. */
export const Menus: StoryObj = {
  parameters: { layout: 'padded' },
  render: function Render() {
    const [search, setSearch] = useState(true);
    const [research, setResearch] = useState(false);
    const [name, setName] = useState('Opus 5.5');
    const [effort, setEffort] = useState('High');
    return (
      <div style={{ paddingBottom: 280, ...width }}>
        <AIChatComposer
          leading={
            <DropdownMenu trigger={<Button variant="ghost" size="sm" icon={<RiAddLine />} aria-label="Add files or tools" />}>
              <DropdownMenuItem icon={<RiImageAddLine />}>Add files or photos</DropdownMenuItem>
              <DropdownMenuSub label="Add to project" icon={<RiFolderAddLine />}>
                <DropdownMenuItem>Mobile app 4.2</DropdownMenuItem>
                <DropdownMenuItem>Vendor review</DropdownMenuItem>
              </DropdownMenuSub>
              <DropdownMenuSub label="Skills" icon={<RiSparklingLine />}>
                <DropdownMenuItem>release-notes</DropdownMenuItem>
                <DropdownMenuItem>meeting-summary</DropdownMenuItem>
              </DropdownMenuSub>
              <DropdownMenuSub label="Connectors" icon={<RiPlugLine />}>
                <DropdownMenuItem>Calendar</DropdownMenuItem>
                <DropdownMenuItem>Drive</DropdownMenuItem>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked={search} onCheckedChange={setSearch}>
                Web search
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={research} onCheckedChange={setResearch}>
                Research
              </DropdownMenuCheckboxItem>
            </DropdownMenu>
          }
          badges={
            search || research ? (
              <>
                {search && (
                  <Badge size="lg" color="blue" icon={<RiGlobalLine />} onRemove={() => setSearch(false)}>
                    Web search
                  </Badge>
                )}
                {research && (
                  <Badge size="lg" color="blue" icon={<RiSearchEyeLine />} onRemove={() => setResearch(false)}>
                    Research
                  </Badge>
                )}
              </>
            ) : undefined
          }
          model={
            <DropdownMenu align="end" trigger={model(`${name} ${effort}`)} aria-label="Model">
              <DropdownMenuRadioGroup label="Model" value={name} onValueChange={(v) => v && setName(v)}>
                {['Opus 5.5', 'Fable 5.1', 'Sonnet 5.5', 'Haiku 4.5'].map((m) => (
                  <DropdownMenuRadioItem key={m} value={m}>
                    {m}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup label="Effort" value={effort} onValueChange={(v) => v && setEffort(v)}>
                {['Low', 'Medium', 'High'].map((e) => (
                  <DropdownMenuRadioItem key={e} value={e}>
                    {e}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenu>
          }
        />
      </div>
    );
  },
};

/** Dictation: the dictate button records (a moving waveform), stop transcribes for a moment, then the text lands in the prompt. */
export const Dictation: StoryObj = {
  render: function Render() {
    const [state, setState] = useState<AIChatComposerState>('default');
    const [value, setValue] = useState('');
    const [levels, setLevels] = useState<number[]>(() => Array(48).fill(0));
    const timer = useRef<number>(undefined);
    useEffect(() => {
      if (state !== 'recording') return;
      const id = window.setInterval(() => setLevels((l) => [...l.slice(1), Math.random() < 0.3 ? 0 : Math.random()]), 120);
      return () => window.clearInterval(id);
    }, [state]);
    useEffect(() => () => window.clearTimeout(timer.current), []);
    const stop = () => {
      setState('transcribing');
      timer.current = window.setTimeout(() => {
        setValue((v) => (v ? `${v} ` : '') + 'Summarize the vendor review for the team.');
        setState('default');
      }, 1500);
    };
    return (
      <AIChatComposer
        style={width}
        state={state}
        value={value}
        onValueChange={setValue}
        onSubmit={() => setValue('')}
        levels={levels}
        leading={plus()}
        model={model()}
        onDictate={() => {
          setLevels(Array(48).fill(0));
          setState('recording');
        }}
        onCancelRecording={() => {
          window.clearTimeout(timer.current);
          setState('default');
        }}
        onStopRecording={stop}
      />
    );
  },
};

/** Figma "AI Chat Composer Token": a /command in a sent message. */
export const Token: StoryObj = {
  render: () => (
    <p style={{ margin: 0, color: 'var(--ds-foreground)', fontFamily: 'var(--ds-font-sans)', fontSize: 13, lineHeight: '20px' }}>
      Use <AIChatComposerToken>/release-notes</AIChatComposerToken> to draft the notes for version 4.2.
    </p>
  ),
};

const themed = (scheme: 'light' | 'dark', children: ReactNode) => (
  <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ display: 'grid', gap: 16, padding: 24, background: 'var(--ds-background)' }}>
    {children}
  </div>
);

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
      {(['light', 'dark'] as const).map((scheme) =>
        themed(
          scheme,
          <>
            <AIChatComposer inputLabel={`Message, ${scheme}`} leading={plus()} model={model()} />
            <AIChatComposer inputLabel={`Message with a command, ${scheme}`} layout="column" defaultValue="Use /release-notes for version 4.2." leading={plus()} model={model()} badges={<ToolBadges />} />
            <AIChatComposer inputLabel={`Message while recording, ${scheme}`} state="recording" leading={plus()} model={model()} />
            <AIChatComposer inputLabel={`Message while transcribing, ${scheme}`} state="transcribing" leading={plus()} model={model()} />
          </>,
        ),
      )}
    </div>
  ),
};
