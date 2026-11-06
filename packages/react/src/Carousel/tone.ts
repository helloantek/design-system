// Works out whether what lies under an overlay control is light or dark, so the control can take the opposite look.
// Order: an explicit data-tone on the slide content, then the pixels of an <img> under the control (read through a
// canvas; skipped when the image is cross-origin without CORS), then the element's background colour or the colour
// stops of its background gradient. Returns null when nothing readable lies there.

export type CarouselTone = 'light' | 'dark';

type RGB = [number, number, number];

const channel = (c: number) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const luminance = ([r, g, b]: RGB) => 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);

// The point where black and white text have the same contrast (WCAG): above it the background reads as light.
const toneOf = (rgb: RGB): CarouselTone => (luminance(rgb) > 0.179 ? 'light' : 'dark');

function parseColors(value: string): { rgb: RGB; alpha: number }[] {
  const out: { rgb: RGB; alpha: number }[] = [];
  for (const m of value.matchAll(/rgba?\(([^)]+)\)/g)) {
    const parts = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
    if (parts.length >= 3) out.push({ rgb: [parts[0], parts[1], parts[2]], alpha: parts[3] ?? 1 });
  }
  return out;
}

let canvas: HTMLCanvasElement | null = null;

function sampleImage(img: HTMLImageElement, rect: DOMRect): RGB | null {
  if (!img.complete || !img.naturalWidth) return null;
  const box = img.getBoundingClientRect();
  if (!box.width || !box.height) return null;
  // Map the control's box onto the picture, for object-fit cover (the usual for slides), contain and fill.
  const fit = getComputedStyle(img).objectFit;
  const nw = img.naturalWidth;
  const nh = img.naturalHeight;
  let scaleX = box.width / nw;
  let scaleY = box.height / nh;
  if (fit === 'cover' || fit === 'contain') scaleX = scaleY = fit === 'cover' ? Math.max(scaleX, scaleY) : Math.min(scaleX, scaleY);
  const offsetX = (box.width - nw * scaleX) / 2;
  const offsetY = (box.height - nh * scaleY) / 2;
  const sx = Math.max(0, (rect.left - box.left - offsetX) / scaleX);
  const sy = Math.max(0, (rect.top - box.top - offsetY) / scaleY);
  const sw = Math.min(nw - sx, rect.width / scaleX);
  const sh = Math.min(nh - sy, rect.height / scaleY);
  if (sw <= 0 || sh <= 0) return null;
  try {
    canvas ??= document.createElement('canvas');
    canvas.width = 8;
    canvas.height = 8;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return null;
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, 8, 8);
    const data = ctx.getImageData(0, 0, 8, 8).data;
    let r = 0;
    let g = 0;
    let b = 0;
    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
    }
    const n = data.length / 4;
    return [r / n, g / n, b / n];
  } catch {
    return null; // A cross-origin image without CORS taints the canvas.
  }
}

function backgroundOf(el: Element): RGB | null {
  const style = getComputedStyle(el);
  // Translucent stops (a scrim over a photo) are skipped, so the photo under them decides.
  const stops = parseColors(style.backgroundImage).filter((c) => c.alpha > 0.6);
  if (stops.length) {
    const sum = stops.reduce<RGB>((acc, c) => [acc[0] + c.rgb[0], acc[1] + c.rgb[1], acc[2] + c.rgb[2]], [0, 0, 0]);
    return [sum[0] / stops.length, sum[1] / stops.length, sum[2] / stops.length];
  }
  const [color] = parseColors(style.backgroundColor);
  return color && color.alpha > 0.5 ? color.rgb : null;
}

/** The tone of what lies under `control` inside `track` (null when unknown). */
export function toneUnder(control: Element, track: Element): CarouselTone | null {
  const rect = control.getBoundingClientRect();
  if (!rect.width) return null;
  const stack = document.elementsFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2).filter((el) => track.contains(el) && el !== track);
  if (!stack.length) return null;
  const marked = stack[0].closest('[data-tone]');
  if (marked && track.contains(marked)) {
    const tone = marked.getAttribute('data-tone');
    if (tone === 'light' || tone === 'dark') return tone;
  }
  for (const el of stack) {
    const rgb = el instanceof HTMLImageElement ? sampleImage(el, rect) : backgroundOf(el);
    if (rgb) return toneOf(rgb);
  }
  return null;
}
