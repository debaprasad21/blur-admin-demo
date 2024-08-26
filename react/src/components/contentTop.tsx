// Converted from src/app/theme/components/contentTop/contentTop.directive.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const ContentTop: React.FC = () => {
  const location = useLocation();

  // Assuming the state title is stored in the location state
  const activePageTitle = location.state?.title || 'Default Title';

  return (
    <div>
      <h1>{activePageTitle}</h1>
    </div>
  );
};

export default ContentTop;
