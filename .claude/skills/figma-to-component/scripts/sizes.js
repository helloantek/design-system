// use_figma, read-only. Layout numbers for a list of variant node ids (one per size).
const IDS = { md: 'REPLACE_ME' };
const out = {};
for (const [k, id] of Object.entries(IDS)) {
  const n = await figma.getNodeByIdAsync(id);
  out[k] = {
    w: n.width, h: n.height, pad: [n.paddingTop, n.paddingRight, n.paddingBottom, n.paddingLeft], gap: n.itemSpacing,
    minW: n.minWidth, minH: n.minHeight,
    children: n.children.map((c) => ({ name: c.name, type: c.type, w: c.width, h: c.height, visible: c.visible })),
  };
}
return out;
