// Converted from src/app/theme/components/baSidebar/baSidebarHelpers.directive.js

import React from 'react';

type BaSidebarToggleMenuProps = {
  toggleMenuCollapsed: () => void;
};

const BaSidebarToggleMenu: React.FC<BaSidebarToggleMenuProps> = ({ toggleMenuCollapsed }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toggleMenuCollapsed();
  };

  return (
    <button onClick={handleClick}>
      Toggle Sidebar
    </button>
  );
};

export default BaSidebarToggleMenu;
