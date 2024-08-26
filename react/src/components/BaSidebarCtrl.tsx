// Converted from src/app/theme/components/baSidebar/BaSidebarCtrl.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import baSidebarService from '../services/baSidebarService';

const BaSidebarCtrl: React.FC = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [defaultSidebarState, setDefaultSidebarState] = useState('');
  const [showHoverElem, setShowHoverElem] = useState(false);
  const [hoverElemHeight, setHoverElemHeight] = useState(0);
  const [hoverElemTop, setHoverElemTop] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const items = baSidebarService.getMenuItems();
    setMenuItems(items);
    setDefaultSidebarState(items[0]?.stateRef || '');
  }, []);

  const hoverItem = (event: React.MouseEvent<HTMLElement>) => {
    setShowHoverElem(true);
    setHoverElemHeight(event.currentTarget.clientHeight);
    const menuTopValue = 66;
    setHoverElemTop(event.currentTarget.getBoundingClientRect().top - menuTopValue);
  };

  useEffect(() => {
    if (baSidebarService.canSidebarBeHidden()) {
      baSidebarService.setMenuCollapsed(true);
    }
  }, [location]);

  return (
    <div>
      {menuItems.map((item, index) => (
        <div key={index} onMouseEnter={hoverItem}>
          {item.name}
        </div>
      ))}
      {showHoverElem && (
        <div style={{ height: hoverElemHeight, top: hoverElemTop }}>
          Hover Element
        </div>
      )}
    </div>
  );
};

export default BaSidebarCtrl;
