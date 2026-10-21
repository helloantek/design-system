// use_figma, read-only. Set SET_ID to the component set node id.
const SET_ID = 'REPLACE_ME';
const set = await figma.getNodeByIdAsync(SET_ID);
if (!set || set.type !== 'COMPONENT_SET') throw new Error(`${SET_ID} is not a component set`);
return Object.fromEntries(
  Object.entries(set.componentPropertyDefinitions).map(([k, v]) => [k, { type: v.type, default: v.defaultValue, options: v.variantOptions }]),
);
