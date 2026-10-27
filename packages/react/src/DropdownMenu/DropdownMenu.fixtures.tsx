import type { ReactNode } from 'react';

// Icons of the Figma demos (Sort UI 2.0 / Lucide, 24 px grid drawn at 16 px with a 1.25 px stroke).
const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.875} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);

/** The Figma item's placeholder icon (square-dashed), exported from the file. */
export const SquareDashed = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3.333 2A1.333 1.333 0 0 0 2 3.333M12.667 2A1.333 1.333 0 0 1 14 3.333M14 12.667A1.333 1.333 0 0 1 12.667 14M3.333 14A1.333 1.333 0 0 1 2 12.667M6 2h.667M6 14h.667M9.333 2H10M9.333 14H10M2 6v.667M14 6v.667M2 9.333V10M14 9.333V10" />
  </svg>
);

export const icons = {
  user: icon(
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </>,
  ),
  card: icon(
    <>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <path d="M2 10h20" />
    </>,
  ),
  settings: icon(
    <>
      <path d="M20 7h-9M14 17H5" />
      <circle cx="17" cy="17" r="3" />
      <circle cx="7" cy="7" r="3" />
    </>,
  ),
  help: icon(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
    </>,
  ),
  logOut: icon(<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />),
  userPlus: icon(
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M19 8v6M22 11h-6" />
      <circle cx="9" cy="7" r="4" />
    </>,
  ),
  users: icon(
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      <circle cx="9" cy="7" r="4" />
    </>,
  ),
  trash: icon(<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />),
  mail: icon(
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>,
  ),
  message: icon(<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />),
  bell: icon(<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0" />),
  panelTop: icon(
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
    </>,
  ),
  panelBottom: icon(
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 15h18" />
    </>,
  ),
  panelLeft: icon(
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
    </>,
  ),
  panelRight: icon(
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M15 3v18" />
    </>,
  ),
};

/** Sort UI 2.0 chevron-down for the trigger button (16 px). */
export const chevronDown = icon(<path d="m6 9 6 6 6-6" />);
