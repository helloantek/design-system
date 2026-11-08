import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties, ReactNode } from 'react';
import { Button } from '../Button';
import { Combobox } from '../Combobox';
import { DatePicker } from '../DatePicker';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSub } from '../DropdownMenu';
import { HoverCard } from '../HoverCard';
import { Popover } from '../Popover';
import { Select } from '../Select';
import { Tooltip } from '../Tooltip';

const meta = {
  title: 'Playground/Popups near the edge',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Popups opened next to the edges of the window: each one flips to the side with room (a menu at the bottom opens upwards, a submenu at the right edge opens on the left, a tooltip on the right edge shows on the left) and shifts along its side so it stays 8 px inside the window. Select and Combobox lists also get shorter, and scroll, when neither side has room for them. Resize the window or scroll to see them follow.',
      },
    },
  },
} satisfies Meta;

export default meta;

const fruits = ['Apple', 'Banana', 'Blueberry', 'Cherry', 'Grape', 'Kiwi', 'Lemon', 'Mango', 'Orange', 'Peach', 'Pear', 'Plum'].map((f) => ({ value: f.toLowerCase(), label: f }));

const corner = (style: CSSProperties, children: ReactNode) => <div style={{ position: 'absolute', display: 'flex', gap: 8, ...style }}>{children}</div>;

/** Triggers in the corners and along the edges of the window. */
export const Corners: StoryObj = {
  render: () => (
    <div style={{ position: 'relative', height: '100vh', minHeight: 480, overflow: 'hidden', background: 'var(--ds-background)', fontFamily: 'var(--ds-font-sans)' }}>
      {corner(
        { top: 16, right: 16 },
        <Popover trigger={<Button variant="outline">Popover</Button>} title="Popover at the top right" description="Centred on its trigger, it shifts left to stay inside the window.">
          <p style={{ margin: 0 }}>Its content.</p>
        </Popover>,
      )}
      {corner(
        { top: '45%', right: 16 },
        <Tooltip content="On the left: no room on the right" side="right">
          <Button variant="outline">Tooltip</Button>
        </Tooltip>,
      )}
      {corner(
        { bottom: 16, left: 16, width: 200, display: 'grid' },
        <Select aria-label="Fruit at the bottom left" placeholder="Fruit" options={fruits} />,
      )}
      {corner(
        { bottom: 16, left: 232, width: 200, display: 'grid' },
        <Combobox aria-label="Fruit to search" placeholder="Search a fruit" options={fruits} />,
      )}
      {corner(
        { bottom: 16, left: 448 },
        <DatePicker aria-label="Date at the bottom" today={new Date(2026, 10, 8)} />,
      )}
      {corner(
        { bottom: 16, right: 16 },
        <>
          <HoverCard trigger={<a href="#card">@orbit</a>}>The Orbit team: a card that opens upwards near the bottom.</HoverCard>
          <DropdownMenu trigger={<Button variant="outline">Menu</Button>} align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSub label="More">
              <DropdownMenuItem>Opens on the left</DropdownMenuItem>
              <DropdownMenuItem>Near the right edge</DropdownMenuItem>
            </DropdownMenuSub>
          </DropdownMenu>
        </>,
      )}
    </div>
  ),
};
