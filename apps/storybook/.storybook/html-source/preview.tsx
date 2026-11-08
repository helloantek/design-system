import { useEffect, type ReactNode } from 'react';
import { addons } from 'storybook/preview-api';
import type { Decorator } from '@storybook/react-vite';
import { HTML_EVENT, REQUEST_EVENT, type HtmlPayload } from './constants';
import { formatHtml } from './format';

// Sends the story's rendered markup to the "HTML" panel, again whenever it changes (a control, a click, an open menu).
function HtmlSource({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.getElementById('storybook-root');
    if (!root) return;
    const channel = addons.getChannel();
    let frame = 0;
    const send = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const payload: HtmlPayload = { short: formatHtml(root, true), full: formatHtml(root, false) };
        channel.emit(HTML_EVENT, payload);
      });
    };
    const observer = new MutationObserver(send);
    observer.observe(root, { subtree: true, childList: true, attributes: true, characterData: true });
    channel.on(REQUEST_EVENT, send);
    send();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      channel.off(REQUEST_EVENT, send);
    };
  }, []);
  return children;
}

/** Only on a story's own page; a Docs page shows "Show code" instead. */
export const withHtmlSource: Decorator = (Story, { viewMode }) =>
  viewMode === 'story' ? (
    <HtmlSource>
      <Story />
    </HtmlSource>
  ) : (
    <Story />
  );
