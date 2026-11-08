// The "HTML" panel: the preview sends the current story's markup, the manager shows it.
export const ADDON_ID = 'ds/html-source';
export const PANEL_ID = `${ADDON_ID}/panel`;
/** Preview → manager: `{ short, full }`, the formatted markup with SVG contents folded and in full. */
export const HTML_EVENT = `${ADDON_ID}/html`;
/** Manager → preview: send the markup again (the panel opened after the story rendered). */
export const REQUEST_EVENT = `${ADDON_ID}/request`;

export interface HtmlPayload {
  short: string;
  full: string;
}
