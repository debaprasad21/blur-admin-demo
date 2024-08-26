// Converted from src/app/theme/components/baSidebar/baSidebarHelpers.directive.js

import React from 'react';
import { useSidebarService } from '../services/sidebarService';

interface BaUiSrefTogglerProps {
  baSidebarTogglingItem: {
    $expand: () => void;
    $toggle: () => void;
  };
}

const BaUiSrefToggler: React.FC<BaUiSrefTogglerProps> = ({ baSidebarTogglingItem }) => {
  const baSidebarService = useSidebarService();

  const handleClick = () => {
    if (baSidebarService.isMenuCollapsed()) {
      // If the whole sidebar is collapsed and this item has submenu. We need to open sidebar.
      // This should not affect mobiles, because on mobiles sidebar should be hidden at all
      baSidebarService.setMenuCollapsed(false);
      baSidebarTogglingItem.$expand();
    } else {
      baSidebarTogglingItem.$toggle();
    }
  };

  return <div onClick={handleClick} />;
};

export default BaUiSrefToggler;
