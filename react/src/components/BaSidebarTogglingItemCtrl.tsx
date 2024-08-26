// Converted from src/app/theme/components/baSidebar/baSidebarHelpers.directive.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type BaSidebarTogglingItemCtrlProps = {
  menuItem: {
    subMenu: any[];
  };
  baSidebarService: {
    getAllStateRefsRecursive: (menuItem: any) => string[];
  };
};

const BaSidebarTogglingItemCtrl: React.FC<BaSidebarTogglingItemCtrlProps> = ({ menuItem, baSidebarService }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const subItemsStateRefs = baSidebarService.getAllStateRefsRecursive(menuItem);

  const expandSubmenu = () => {
    console.warn('$$expandMenu should be overwritten by baUiSrefTogglingSubmenu');
  };

  const collapseSubmenu = () => {
    console.warn('$$collapseSubmenu should be overwritten by baUiSrefTogglingSubmenu');
  };

  const expand = () => {
    expandSubmenu();
    setIsExpanded(true);
  };

  const collapse = () => {
    collapseSubmenu();
    setIsExpanded(false);
  };

  const toggle = () => {
    isExpanded ? collapse() : expand();
  };

  const isState = (state: any) => {
    return state && subItemsStateRefs.some((subItemState) => state.name.indexOf(subItemState) === 0);
  };

  useEffect(() => {
    if (isState(location)) {
      setIsExpanded(true);
    }
  }, [location]);

  useEffect(() => {
    const handleStateChangeStart = (event: any, toState: any) => {
      if (!isState(toState) && isExpanded) {
        collapse();
      }
    };

    const handleStateChangeSuccess = (event: any, toState: any) => {
      if (isState(toState) && !isExpanded) {
        expand();
      }
    };

    // Assuming some event system to replace AngularJS $scope.$on
    // SECOND AGENT: [MISSING CONTEXT] - Need a React equivalent for AngularJS $scope.$on for state change events

    return () => {
      // Cleanup listeners if necessary
    };
  }, [isExpanded, location]);

  return (
    <div className={`ba-sidebar-item ${isExpanded ? 'ba-sidebar-item-expanded' : ''}`}>
      {/* Render the component's children or submenu here */}
    </div>
  );
};

export default BaSidebarTogglingItemCtrl;
