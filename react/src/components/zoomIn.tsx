// Converted from src/app/theme/directives/zoomIn.js

import React, { useEffect } from 'react';

interface ZoomInProps {
  pageFinishedLoading: boolean;
}

const ZoomIn: React.FC<ZoomInProps> = ({ pageFinishedLoading, children }) => {
  useEffect(() => {
    const delay = pageFinishedLoading ? 100 : 1000;
    const timer = setTimeout(() => {
      const element = document.querySelector('.full-invisible');
      if (element) {
        element.classList.remove('full-invisible');
        element.classList.add('animated', 'zoomIn');
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [pageFinishedLoading]);

  return <div className="full-invisible">{children}</div>;
};

export default ZoomIn;
