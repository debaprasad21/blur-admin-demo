// Converted from src/app/theme/components/backTop/backTop.directive.js

import React, { useEffect } from 'react';
import $ from 'jquery';

const BackTop: React.FC = () => {
  useEffect(() => {
    $('#backTop').backTop({
      position: 200,
      speed: 100,
    });
  }, []);

  return (
    <div id="backTop">
      {/* Add your back to top button content here */}
    </div>
  );
};

export default BackTop;
