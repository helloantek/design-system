import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import { Button } from '../Button';
import { Card, CardContent, CardHeader } from '../Card';
import { Slider, type SliderVariant } from './Slider';

const FIGMA_URL = 'https://www.figma.com/design/4JnqgEbdlnKgiFrfmiwEZw?node-id=245-3';

const meta = {
  title: 'Components/Slider',
  parameters: {
    docs: {
      description: {
        component: `Implements the Sort UI 2.0 **Slider** and **Slider Thumb** ([open in Figma](${FIGMA_URL})): a number (\`value\` / \`defaultValue\` / \`onValueChange\`, \`onValueCommit\` when the pointer is released) between \`min\` and \`max\` in \`step\`s, or a range when the value is \`[from, to]\` (Figma Range=True; the thumbs cannot cross). Figma Orientation → \`orientation\` (vertical runs bottom to top), State=Disabled → \`disabled\`. \`label\` and \`valueText\` add the demos' label row; without a label, name the thumbs with \`aria-label\`. Each thumb is a \`role="slider"\` with its own Tab stop: arrow keys move by a step, Page Up / Page Down by ten, Home and End to the ends. \`variant\` adds the demos' looks: \`block\` (a 24 px track with 20 × 24 thumbs and optional step \`marks\`, \`thumbDot\` for a colour dot) and \`scrubber\` (a 32 px bar with the label and value inside). \`--slider-track\`, \`--slider-fill\` and \`--slider-thickness\` repaint the track and the fill.`,
      },
    },
  },
} satisfies Meta;

export default meta;

const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', fontSize: 14, lineHeight: '20px', color: 'var(--ds-foreground)' };
const muted: CSSProperties = { ...text, color: 'var(--ds-muted-foreground)' };
const stage: CSSProperties = { width: 448, maxWidth: '100%' };

type PlaygroundArgs = { variant: SliderVariant; marks: boolean; orientation: 'horizontal' | 'vertical'; range: boolean; disabled: boolean; min: number; max: number; step: number };

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { variant: 'default', marks: false, orientation: 'horizontal', range: false, disabled: false, min: 0, max: 100, step: 1 },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'block', 'scrubber'] },
    marks: { description: 'Step dots (block)' },
    orientation: { name: 'Orientation', control: 'inline-radio', options: ['horizontal', 'vertical'] },
    range: { name: 'Range' },
    disabled: { name: 'State: Disabled' },
  },
  render: function Render({ variant, marks, orientation, range, disabled, min, max, step }) {
    const [single, setSingle] = useState(50);
    const [pair, setPair] = useState<[number, number]>([25, 75]);
    const valueText = range ? `${pair[0]} – ${pair[1]}` : String(single);
    return (
      <div style={orientation === 'vertical' ? undefined : stage}>
        {range ? (
          <Slider label="Value" valueText={valueText} value={pair} onValueChange={setPair} variant={variant} marks={marks} min={min} max={max} step={step} orientation={orientation} disabled={disabled} />
        ) : (
          <Slider label="Value" valueText={valueText} value={single} onValueChange={setSingle} variant={variant} marks={marks} min={min} max={max} step={step} orientation={orientation} disabled={disabled} />
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

/** Figma demo "Autoscaling range": a block range with a dot under every step, labelled under the track. */
export const AutoscalingRange: StoryObj = {
  render: function Render() {
    const [at, setAt] = useState<[number, number]>([0, 2]);
    const cu = (i: number) => `${scale[i]} CU (~${scale[i] * 4} GB RAM)`;
    return (
      <Card style={stage}>
        <CardContent style={{ display: 'grid', gap: 12 }}>
          <Slider
            variant="block"
            marks
            label="Configure the autoscaling range"
            valueText={`${scale[at[0]]} – ${scale[at[1]]} CU`}
            value={at}
            onValueChange={setAt}
            min={0}
            max={scale.length - 1}
            aria-label={['Scale from', 'Scale up to']}
            getAriaValueText={(i) => cu(i)}
          />
          <div aria-hidden style={{ ...muted, fontSize: 12, lineHeight: '16px', position: 'relative', height: 16, margin: '0 10px' }}>
            {scale.map((s, i) => (
              <span key={s} style={{ position: 'absolute', left: `${(i / (scale.length - 1)) * 100}%`, translate: '-50% 0' }}>
                {String(s).replace(/^0/, '')}
              </span>
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

const efforts = ['Low', 'Medium', 'High', 'Higher', 'Max', 'Extra'];

/** Figma demo "Claude Effort Slider": a block slider over named levels; the recommended one is marked with a bar. */
export const EffortSlider: StoryObj = {
  render: function Render() {
    const [level, setLevel] = useState(2);
    return (
      <Card style={{ width: 288, maxWidth: '100%' }}>
        <CardContent style={{ display: 'grid', gap: 8 }}>
          <span id="effort-label" style={{ ...text, fontSize: 16, lineHeight: '24px' }}>
            <span style={muted}>Effort</span> {efforts[level]}
          </span>
          <div aria-hidden style={{ ...muted, display: 'flex', justifyContent: 'space-between' }}>
            <span>Faster</span>
            <span>Smarter</span>
          </div>
          <Slider
            variant="block"
            aria-label="Effort"
            value={level}
            onValueChange={setLevel}
            min={0}
            max={efforts.length - 1}
            marks={efforts.map((_, i) => (i === 1 ? { value: i, emphasis: true } : i))}
            getAriaValueText={(i) => efforts[i] + (i === 1 ? ' (recommended)' : '')}
          />
        </CardContent>
      </Card>
    );
  },
};

// Figma's stops: the ends sit under the thumb's centre at min and max (2.5 % and 97.5 % of a 408 px track).
const hueTrack = 'linear-gradient(to right, #ff0000 2.5%, #ffff00 18.3%, #00ff00 34.2%, #00ffff 50%, #0000ff 65.8%, #ff00ff 81.7%, #ff0000 97.5%)';

/** Figma demo "Color picker": block thumbs with a colour dot over painted tracks (--slider-track, 16 px thick). */
export const ColorPicker: StoryObj = {
  render: function Render() {
    const [hue, setHue] = useState(130);
    const [alpha, setAlpha] = useState(70);
    const colour = `hsl(${hue} 100% 50%)`;
    const withAlpha = `hsl(${hue} 100% 50% / ${alpha}%)`;
    const track = (paint: string): CSSProperties => ({ '--slider-thickness': '16px', '--slider-track': paint, '--slider-fill': 'transparent' }) as CSSProperties;
    return (
      <Card style={stage}>
        <CardHeader
          title="Color"
          action={
            <span style={{ ...muted, display: 'flex', gap: 8, alignItems: 'center' }}>
              {withAlpha}
              <span style={{ width: 12, height: 12, borderRadius: 3, background: withAlpha }} />
            </span>
          }
        />
        <CardContent style={{ display: 'grid', gap: 16 }}>
          <Slider variant="block" thumbDot={colour} aria-label="Hue" value={hue} onValueChange={setHue} max={360} getAriaValueText={(v) => `${v} degrees`} style={track(hueTrack)} />
          <Slider
            variant="block"
            thumbDot={withAlpha}
            aria-label="Opacity"
            value={alpha}
            onValueChange={setAlpha}
            getAriaValueText={(v) => `${v}%`}
            style={track(`linear-gradient(to right, transparent 2.5%, ${colour} 97.5%), repeating-conic-gradient(var(--ds-fill-3) 0 25%, transparent 0 50%) 0 0 / 8px 8px`)}
          />
        </CardContent>
      </Card>
    );
  },
};

/** Figma demo "Scrubber": the whole bar is the control, with the label and value inside. */
export const Scrubber: StoryObj = {
  render: function Render() {
    const [brightness, setBrightness] = useState(50);
    return (
      <div style={{ width: 288, maxWidth: '100%' }}>
        <Slider variant="scrubber" label="Brightness" valueText={`${brightness}%`} value={brightness} onValueChange={setBrightness} getAriaValueText={(v) => `${v}%`} />
      </div>
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
          <Slider variant="block" marks aria-label={[`Block from (${scheme})`, `Block to (${scheme})`]} defaultValue={[1, 3]} max={6} />
          <Slider variant="scrubber" label={`Brightness (${scheme})`} valueText="50%" defaultValue={50} />
        </div>
      ))}
    </div>
  ),
};
