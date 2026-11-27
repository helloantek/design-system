import { RiFigmaFill, RiSlackFill } from '@remixicon/react';
import type { Memory } from './MemoryPanel';

/** The memories drawn in Figma: three preferences, two about work, and three projects (not shown under All in the frames). */
export const MEMORIES: Memory[] = [
  { id: 'ts', category: 'Preferences', text: 'Prefers TypeScript examples over plain JavaScript', source: 'From chat · Oct 12' },
  { id: 'short', category: 'Preferences', text: 'Likes short answers first, details only when asked', source: 'You added · Oct 2', paused: true },
  { id: 'inter', category: 'Preferences', text: 'Designs with Inter and a 4 px spacing grid', source: 'From Figma · Oct 7', sourceIcon: <RiFigmaFill aria-hidden /> },
  { id: 'role', category: 'Work', text: 'Product designer and front-end developer at a small studio', source: 'From chat · Sep 28' },
  { id: 'ships', category: 'Work', text: 'Ships every second Thursday', source: 'From Slack · Sep 30', sourceIcon: <RiSlackFill aria-hidden /> },
];

export const COUNTED: Memory[] = [
  ...MEMORIES,
  { id: 'hours', category: 'Work', text: 'Works 9–5 Berlin time', source: 'From chat · Sep 12' },
  { id: 'ds', category: 'Projects', text: 'Builds a multi-brand design system', source: 'From chat · Oct 1' },
  { id: 'app', category: 'Projects', text: 'Is shipping a visual memory app', source: 'From chat · Oct 9' },
];
