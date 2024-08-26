// Converted from src/app/theme/components/baWizard/baWizard.directive.js

import React from 'react';
import BaWizardCtrl from './baWizardCtrl';

const BaWizard: React.FC = ({ children }) => {
  return (
    <div>
      <BaWizardCtrl />
      {children}
    </div>
  );
};

export default BaWizard;
