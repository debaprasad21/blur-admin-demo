// Converted from src/app/theme/components/baSidebar/baSidebarHelpers.directive.js

import React, { useEffect, useRef } from 'react';

type BaUiSrefTogglingSubmenuProps = {
  expandSubmenu: () => void;
  collapseSubmenu: () => void;
};

const BaUiSrefTogglingSubmenu: React.FC<BaUiSrefTogglingSubmenuProps> = ({ expandSubmenu, collapseSubmenu }) => {
  const submenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (submenuRef.current) {
      expandSubmenu = () => {
        if (submenuRef.current) {
          submenuRef.current.style.display = 'block';
        }
      };

      collapseSubmenu = () => {
        if (submenuRef.current) {
          submenuRef.current.style.display = 'none';
        }
      };
    }
  }, [expandSubmenu, collapseSubmenu]);

  return <div ref={submenuRef} />;
};

export default BaUiSrefTogglingSubmenu;
