import type { ReactNode } from 'react';
import { DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '../DropdownMenu';

// Icons of the Figma demos (Sort UI 2.0 / Lucide, 24 px grid drawn at 16 px with a 1.25 px stroke).
const icon = (children: ReactNode, color?: string) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" style={color ? { color } : undefined} aria-hidden>
    {children}
  </svg>
);
export const icons = {
  circleDot: (color?: string) =>
    icon(
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="1" />
      </>,
      color,
    ),
  circleDashed: (color?: string) => icon(<path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7M21.82 10.1a9.93 9.93 0 0 1 0 3.8M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69M13.9 21.82a9.94 9.94 0 0 1-3.8 0M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7M2.18 13.9a9.93 9.93 0 0 1 0-3.8M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />, color),
  circle: icon(<circle cx="12" cy="12" r="10" />),
  circleCheck: (color?: string) =>
    icon(
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </>,
      color,
    ),
  circleX: icon(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </>,
  ),
  user: icon(
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </>,
  ),
  signal: icon(<path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8" />),
  tag: icon(
    <>
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </>,
  ),
  link: icon(<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />),
  hash: icon(<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" />),
  trash: icon(<path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6" />),
  copy: icon(
    <>
      <rect width="14" height="14" x="8" y="8" rx="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </>,
  ),
  download: icon(<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />),
  share: icon(<path d="M12 2v13M16 6l-4-4-4 4M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />),
  heart: icon(<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />),
  rotate: icon(<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5" />),
  image: icon(
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </>,
  ),
  eyeOff: icon(<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49M14.084 14.158a3 3 0 0 1-4.242-4.242M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143M2 2l20 20" />),
  reply: icon(<path d="M9 17 4 12l5-5M20 18v-2a4 4 0 0 0-4-4H4" />),
  forward: icon(<path d="m15 17 5-5-5-5M4 18v-2a4 4 0 0 1 4-4h12" />),
  pin: icon(<path d="M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />),
  mail: icon(
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>,
  ),
  pencil: icon(<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4" />),
  smilePlus: icon(<path d="M22 11v1a10 10 0 1 1-9-10M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M16 5h6M19 2v6" />),
};

/** The items of the "Photo" demo, shared with the visual check. */
export const photoItems = (
  <>
    <DropdownMenuLabel>IMG_2041.HEIC</DropdownMenuLabel>
    <DropdownMenuItem icon={icons.copy} shortcut="⌘C">
      Copy image
    </DropdownMenuItem>
    <DropdownMenuItem icon={icons.download} shortcut="⇧⌘E">
      Export…
    </DropdownMenuItem>
    <DropdownMenuItem icon={icons.share}>Share…</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem icon={icons.heart} shortcut=".">
      Favorite
    </DropdownMenuItem>
    <DropdownMenuItem icon={icons.rotate} shortcut="⌘R">
      Rotate
    </DropdownMenuItem>
    <DropdownMenuItem icon={icons.image}>Set as wallpaper</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem icon={icons.eyeOff} shortcut="⌘L">
      Hide photo
    </DropdownMenuItem>
    <DropdownMenuItem type="destructive" icon={icons.trash} shortcut="⌘⌫">
      Delete photo
    </DropdownMenuItem>
  </>
);

