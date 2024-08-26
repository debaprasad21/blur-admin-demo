// Converted from docs/contents/articles/051-sidebar/index.md

type MenuItem = {
  title: string;
  icon?: string;
  stateRef?: string;
  fixedHref?: string;
  blank?: boolean;
  subMenu?: MenuItem[];
};

const addStaticItem = (menuItem: MenuItem) => {
  // Implement the logic to add a static item to the sidebar
  // This function should handle the addition of the menuItem to the sidebar configuration
};

export { addStaticItem };
