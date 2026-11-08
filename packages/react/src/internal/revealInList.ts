// Brings a list's active item into view by scrolling only the list it sits in, never the page: `scrollIntoView`
// would also scroll the window (and every scrolling ancestor) when the list itself is below the fold, e.g. a Command
// rendered further down a page selecting its first item.

const scrolls = (el: HTMLElement) => /(auto|scroll)/.test(getComputedStyle(el).overflowY) && el.scrollHeight > el.clientHeight;

export function revealInList(item: HTMLElement | null | undefined) {
  if (!item) return;
  let list = item.parentElement;
  while (list && list !== document.body && !scrolls(list)) list = list.parentElement;
  if (!list || list === document.body) return;
  const box = list.getBoundingClientRect();
  const rect = item.getBoundingClientRect();
  if (rect.top < box.top) list.scrollTop -= box.top - rect.top;
  else if (rect.bottom > box.bottom) list.scrollTop += rect.bottom - box.bottom;
}
