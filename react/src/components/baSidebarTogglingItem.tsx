// Converted from src/app/theme/components/baSidebar/baSidebarHelpers.directive.js

import React, { useState, useEffect } from 'react';

type BaSidebarTogglingItemProps = {
  menuItem: {
    subMenu: any[];
  };
  isState: (state: any) => boolean;
  onStateChangeStart: (callback: (event: any, toState: any) => void) => void;
  onStateChangeSuccess: (callback: (event: any, toState: any) => void) => void;
};

const BaSidebarTogglingItem: React.FC<BaSidebarTogglingItemProps> = ({
  menuItem,
  isState,
  onStateChangeStart,
  onStateChangeSuccess,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isState({})) {
      setIsExpanded(true);
    }

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

    onStateChangeStart(handleStateChangeStart);
    onStateChangeSuccess(handleStateChangeSuccess);

    return () => {
      // Cleanup listeners if necessary
    };
  }, [isExpanded, isState, onStateChangeStart, onStateChangeSuccess]);

  const expand = () => {
    setIsExpanded(true);
  };

  const collapse = () => {
    setIsExpanded(false);
  };

  const toggle = () => {
    isExpanded ? collapse() : expand();
  };

  return (
    <div className={`ba-sidebar-item ${isExpanded ? 'ba-sidebar-item-expanded' : ''}`}>
      {/* Render menu item content here */}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default BaSidebarTogglingItem;
