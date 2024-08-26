// Converted from src/app/theme/services/baUtil.js

export default function baUtil() {

  const isDescendant = (parent: Node, child: Node): boolean => {
    let node = child.parentNode;
    while (node != null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  };

  const hexToRGB = (hex: string, alpha: number): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const hasAttr = (elem: Element, attrName: string): boolean => {
    const attr = elem.getAttribute(attrName);
    return attr !== null;
  };

  return {
    isDescendant,
    hexToRGB,
    hasAttr
  };
}
