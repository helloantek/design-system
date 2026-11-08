// Ids for the label, description and inputs a component ties together (ds-react uses React's useId).
let next = 0;
export const uniqueId = (prefix: string) => `${prefix}-${++next}`;
