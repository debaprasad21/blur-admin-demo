// Converted from src/app/theme/components/baPanel/baPanelSelf.directive.js

import React from 'react';

interface BaPanelSelfProps {
  baPanelClass?: string;
}

const BaPanelSelf: React.FC<BaPanelSelfProps> = ({ baPanelClass, children }) => {
  const panelClasses = `panel panel-white ${baPanelClass || ''}`.trim();

  return <div className={panelClasses}>{children}</div>;
};

export default BaPanelSelf;
