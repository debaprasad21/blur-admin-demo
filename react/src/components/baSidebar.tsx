// Converted from src/app/theme/components/baSidebar/baSidebar.directive.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import baSidebarService from '../services/baSidebarService';
import baUtil from '../services/baUtil';
import layoutSizes from '../utils/constants/layoutSizes';

const BaSidebar: React.FC = () => {
  const [menuHeight, setMenuHeight] = useState<number>(0);
  const location = useLocation();

  useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !baUtil.isDescendant(document.getElementById('ba-sidebar')!, target) &&
        !event['$sidebarEventProcessed'] &&
        !baSidebarService.isMenuCollapsed() &&
        baSidebarService.canSidebarBeHidden()
      ) {
        event['$sidebarEventProcessed'] = true;
        setTimeout(() => {
          baSidebarService.setMenuCollapsed(true);
        }, 10);
      }
    };

    const handleWindowResize = () => {
      const newMenuCollapsed = baSidebarService.shouldMenuBeCollapsed();
      const newMenuHeight = calculateMenuHeight();
      if (
        newMenuCollapsed !== baSidebarService.isMenuCollapsed() ||
        menuHeight !== newMenuHeight
      ) {
        setMenuHeight(newMenuHeight);
        baSidebarService.setMenuCollapsed(newMenuCollapsed);
      }
    };

    const calculateMenuHeight = () => {
      const sidebarElement = document.getElementById('ba-sidebar');
      return sidebarElement ? sidebarElement.clientHeight - 84 : 0;
    };

    window.addEventListener('click', handleWindowClick);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('click', handleWindowClick);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [menuHeight]);

  useEffect(() => {
    setMenuHeight(calculateMenuHeight());
  }, [location]);

  const calculateMenuHeight = () => {
    const sidebarElement = document.getElementById('ba-sidebar');
    return sidebarElement ? sidebarElement.clientHeight - 84 : 0;
  };

  return (
    <div id="ba-sidebar">
      {/* Render sidebar content here */}
    </div>
  );
};

export default BaSidebar;
