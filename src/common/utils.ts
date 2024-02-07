export const getDOMElement = (selector: string): Element | null => {
  return document.querySelector(selector);
};
