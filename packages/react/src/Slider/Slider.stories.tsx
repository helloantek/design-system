import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import { Button } from '../Button';
import { Card, CardContent, CardHeader } from '../Card';
import { Slider } from './Slider';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=245-3';

const meta = {
  title: 'Components/Slider',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Slider** and **Slider Thumb** ([open in Figma](${FIGMA_URL})): a number (\`value\` / \`defaultValue\` / \`onValueChange\`, \`onValueCommit\` when the pointer is released) between \`min\` and \`max\` in \`step\`s, or a range when the value is \`[from, to]\` (Figma Range=True; the thumbs cannot cross). Figma Orientation → \`orientation\` (vertical runs bottom to top), State=Disabled → \`disabled\`. \`label\` and \`valueText\` add the demos' label row; without a label, name the thumbs with \`aria-label\`. Each thumb is a \`role="slider"\` with its own Tab stop: arrow keys move by a step, Page Up / Page Down by ten, Home and End to the ends. \`--slider-track\` and \`--slider-fill\` repaint the track and the fill.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', color: 'var(--ds-foreground)' };
const muted: CSSProperties = { ...text, color: 'var(--ds-muted-foreground)' };
const stage: CSSProperties = { width: 448, maxWidth: '100%' };

type PlaygroundArgs = { orientation: 'horizontal' | 'vertical'; range: boolean; disabled: boolean; min: number; max: number; step: number };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { orientation: 'horizontal', range: false, disabled: false, min: 0, max: 100, step: 1 },
  argTypes: {
    orientation: { name: 'Orientation', control: 'inline-radio', options: ['horizontal', 'vertical'] },
    range: { name: 'Range' },
    disabled: { name: 'State: Disabled' },
  },
  render: function Render({ orientation, range, disabled, min, max, step }) {
    const [single, setSingle] = useState(50);
    const [pair, setPair] = useState<[number, number]>([25, 75]);
    const valueText = range ? `${pair[0]} – ${pair[1]}` : String(single);
    return (
      <div style={orientation === 'vertical' ? undefined : stage}>
        {range ? (
          <Slider label="Value" valueText={valueText} value={pair} onValueChange={setPair} min={min} max={max} step={step} orientation={orientation} disabled={disabled} />
        ) : (
          <Slider label="Value" valueText={valueText} value={single} onValueChange={setSingle} min={min} max={max} step={step} orientation={orientation} disabled={disabled} />
        )}
      </div>
    );
  },
};

/** Figma demo "Slider": a label and the value above the track. */
export const Default: StoryObj = {
  render: function Render() {
    const [ms, setMs] = useState(80);
    return (
      <div style={stage}>
        <Slider label="Stagger" valueText={`${ms} ms`} value={ms} onValueChange={setMs} min={0} max={160} step={5} />
      </div>
    );
  },
};

/** Figma demo "Range": two thumbs that cannot cross. */
export const Range: StoryObj = {
  render: function Render() {
    const [delay, setDelay] = useState<[number, number]>([40, 120]);
    return (
      <div style={stage}>
        <Slider
          label="Delay window"
          valueText={`${delay[0]} – ${delay[1]} ms`}
          value={delay}
          onValueChange={setDelay}
          min={0}
          max={160}
          step={5}
          aria-label={['Shortest delay', 'Longest delay']}
          getAriaValueText={(v) => `${v} ms`}
        />
      </div>
    );
  },
};

const volumeIcon = (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M11 4.7a.7.7 0 0 0-1.2-.5L6.4 7.6A1.4 1.4 0 0 1 5.4 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.4a1.4 1.4 0 0 1 1 .4l3.4 3.4a.7.7 0 0 0 1.2-.5ZM16 9a5 5 0 0 1 0 6M19.4 18.4a9 9 0 0 0 0-12.8" />
  </svg>
);

/** Figma demo "Inline": an icon, the slider and its value on one row. */
export const Inline: StoryObj = {
  render: function Render() {
    const [volume, setVolume] = useState(50);
    return (
      <div style={{ ...stage, ...muted, display: 'flex', alignItems: 'center', gap: 8 }}>
        {volumeIcon}
        <Slider aria-label="Volume" value={volume} onValueChange={setVolume} getAriaValueText={(v) => `${v}%`} />
        <span style={{ minWidth: 36, textAlign: 'end', fontVariantNumeric: 'tabular-nums' }}>{volume}%</span>
      </div>
    );
  },
};

const scale = [0.25, 0.5, 1, 2, 3, 4, 5];

/** Figma demo "Autoscaling range": a range over uneven steps, labelled under the track. */
export const Steps: StoryObj = {
  render: function Render() {
    const [at, setAt] = useState<[number, number]>([0, 2]);
    const cu = (i: number) => `${scale[i]} CU (~${scale[i] * 4} GB RAM)`;
    return (
      <Card style={stage}>
        <CardContent style={{ display: 'grid', gap: 12 }}>
          <Slider
            label="Configure the autoscaling range"
            valueText={`${scale[at[0]]} – ${scale[at[1]]} CU`}
            value={at}
            onValueChange={setAt}
            min={0}
            max={scale.length - 1}
            aria-label={['Scale from', 'Scale up to']}
            getAriaValueText={(i) => cu(i)}
          />
          <div aria-hidden style={{ ...muted, fontSize: 12, lineHeight: '16px', display: 'flex', justifyContent: 'space-between', padding: '0 4px' }}>
            {scale.map((s) => (
              <span key={s}>{String(s).replace(/^0/, '')}</span>
            ))}
          </div>
          <div style={{ ...text, display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={muted}>Scale from</div>
              {cu(at[0])}
            </div>
            <div style={{ textAlign: 'end' }}>
              <div style={muted}>Scale up to</div>
              {cu(at[1])}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

/** Figma demo "Color picker": the track and fill repainted with --slider-track and --slider-fill. */
export const ColorTracks: StoryObj = {
  render: function Render() {
    const [hue, setHue] = useState(130);
    const [alpha, setAlpha] = useState(70);
    const colour = `hsl(${hue} 100% 50%)`;
    return (
      <Card style={stage}>
        <CardHeader title="Color" action={<span style={{ ...muted, display: 'flex', gap: 8, alignItems: 'center' }}>{`hsl(${hue} 100% 50% / ${alpha}%)`}<span style={{ width: 12, height: 12, borderRadius: 3, background: colour, opacity: alpha / 100 }} /></span>} />
        <CardContent style={{ display: 'grid', gap: 16 }}>
          <Slider
            aria-label="Hue"
            value={hue}
            onValueChange={setHue}
            max={360}
            getAriaValueText={(v) => `${v} degrees`}
            style={{ '--slider-thickness': '12px', '--slider-track': 'linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red)', '--slider-fill': 'transparent' } as CSSProperties}
          />
          <Slider
            aria-label="Opacity"
            value={alpha}
            onValueChange={setAlpha}
            getAriaValueText={(v) => `${v}%`}
            style={{ '--slider-thickness': '12px', '--slider-track': `linear-gradient(to right, transparent, ${colour})`, '--slider-fill': 'transparent' } as CSSProperties}
          />
        </CardContent>
      </Card>
    );
  },
};

/** Figma demo "Vertical": a single slider and a range, bottom to top. */
export const Vertical: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      <Slider orientation="vertical" aria-label="Bass" defaultValue={45} />
      <Slider orientation="vertical" aria-label={['Low cut', 'High cut']} defaultValue={[40, 70]} />
    </div>
  ),
};

/** Figma demo "Disabled". */
export const Disabled: StoryObj = {
  render: () => (
    <div style={{ ...stage, display: 'grid', gap: 24 }}>
      <Slider aria-label="Locked volume" defaultValue={50} disabled />
      <Slider label="Locked window" valueText="40 – 120 ms" defaultValue={[25, 75]} disabled />
    </div>
  ),
};

/** A slider in a form submits its value (a range submits two fields with the same name). */
export const InAForm: StoryObj = {
  render: function Render() {
    const [sent, setSent] = useState('');
    return (
      <form
        style={{ ...stage, display: 'grid', gap: 16 }}
        onSubmit={(event) => {
          event.preventDefault();
          setSent(new URLSearchParams(new FormData(event.currentTarget) as unknown as Record<string, string>).toString());
        }}
      >
        <Slider label="Budget" name="budget" defaultValue={[200, 800]} min={0} max={1000} step={50} aria-label={['Minimum budget', 'Maximum budget']} />
        <Button type="submit" style={{ justifySelf: 'start' }}>
          Submit
        </Button>
        <output style={muted}>{sent}</output>
      </form>
    );
  },
};

/** Light and Dark, driven only by tokens. */
export const Themes: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {(['light', 'dark'] as const).map((scheme) => (
        <div key={scheme} data-ds-brand="theme-1" data-ds-scheme={scheme} style={{ background: 'var(--ds-background)', padding: 24, display: 'grid', gap: 24 }}>
          <Slider label="Stagger" valueText="80 ms" defaultValue={50} />
          <Slider aria-label={[`From (${scheme})`, `To (${scheme})`]} defaultValue={[25, 75]} />
          <Slider aria-label={`Disabled (${scheme})`} defaultValue={50} disabled />
        </div>
      ))}
    </div>
  ),
};
