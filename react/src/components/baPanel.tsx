// Converted from src/app/theme/components/baPanel/baPanel.directive.js

import React from 'react';
import baConfig from '../routes/baConfig';

interface BaPanelProps {
  baPanelClass?: string;
}

const BaPanel: React.FC<BaPanelProps> = ({ baPanelClass, children }) => {
  const panelClass = `panel ${baConfig.theme.blur ? 'panel-blur' : ''} full-invisible ${baPanelClass || ''}`;
  const zoomInClass = baConfig.theme.blur ? 'ba-panel-blur' : '';

  return (
    <div className={`${panelClass} ${zoomInClass}`}>
      {children}
    </div>
  );
};

export default BaPanel;
