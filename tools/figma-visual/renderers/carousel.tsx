import { Carousel, CarouselSlide } from '@helloantek/ds-react';
import type { CSSProperties } from 'react';
import type { Renderer } from './types';

// Sort UI 2.0 Carousel (331:28) with Figma's sample slides on the page background: fill-2 slides, radius 16, 20 px
// padding, "Token inspector" over "6 participants" at the bottom; 448 px wide, on the first slide (Previous disabled).
// Orientation=Vertical uses 200 px slides.
const text: CSSProperties = { fontFamily: 'var(--ds-font-sans)', letterSpacing: '-0.005em', margin: 0 };
const slides = [
  ['Token inspector', '6 participants'],
  ['Release checklist', '5 participants'],
  ['Adoption dashboard', '8 participants'],
];

export const renderCarousel: Renderer = (p) => {
  const vertical = p.Orientation === 'Vertical';
  return (
    <div id="target" style={{ width: 448, background: 'var(--ds-background)' }}>
      <Carousel aria-label="Projects" orientation={vertical ? 'vertical' : 'horizontal'} slideSize={vertical ? 200 : undefined}>
        {slides.map(([title, meta]) => (
          <CarouselSlide key={title} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 4, minHeight: vertical ? undefined : 192, padding: 20, borderRadius: 16, background: 'var(--ds-fill-2)' }}>
            <p style={{ ...text, fontSize: 14, lineHeight: '20px', fontWeight: 500, color: 'var(--ds-foreground)' }}>{title}</p>
            <p style={{ ...text, fontSize: 12, lineHeight: '16px', color: 'var(--ds-muted-foreground)' }}>{meta}</p>
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  );
};
