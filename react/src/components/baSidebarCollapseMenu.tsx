// Converted from src/app/theme/components/baSidebar/baSidebarHelpers.directive.js

import React from 'react';

type BaSidebarCollapseMenuProps = {
  isMenuCollapsed: boolean;
  setMenuCollapsed: (collapsed: boolean) => void;
};

const BaSidebarCollapseMenu: React.FC<BaSidebarCollapseMenuProps> = ({ isMenuCollapsed, setMenuCollapsed }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!isMenuCollapsed) {
      setMenuCollapsed(true);
    }
  };

  return (
    <div onClick={handleClick}>
      {/* Add any additional UI elements or styles here */}
    </div>
  );
};

export default BaSidebarCollapseMenu;
