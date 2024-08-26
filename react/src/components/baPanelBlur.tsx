// Converted from src/app/theme/components/baPanel/baPanelBlur.directive.js

import React, { useEffect, useState } from 'react';
import useBaPanelBlurHelper from '../services/baPanelBlurHelper';

interface BaPanelBlurProps {
  isMobile: boolean;
}

const BaPanelBlur: React.FC<BaPanelBlurProps> = ({ isMobile }) => {
  const [bodyBgSize, setBodyBgSize] = useState<{
    width: number;
    height: number;
    positionX: number;
    positionY: number;
  } | null>(null);

  const bodyBgImageSizes = useBaPanelBlurHelper();

  useEffect(() => {
    if (!isMobile) {
      const recalculatePanelStyle = () => {
        if (!bodyBgSize) {
          return;
        }
        // Assuming elem is a ref to the component's DOM element
        const elem = document.getElementById('ba-panel-blur');
        if (elem) {
          elem.style.backgroundSize = `${Math.round(bodyBgSize.width)}px ${Math.round(bodyBgSize.height)}px`;
          elem.style.backgroundPosition = `${Math.floor(bodyBgSize.positionX)}px ${Math.floor(bodyBgSize.positionY)}px`;
        }
      };

      setBodyBgSize(bodyBgImageSizes);

      window.addEventListener('resize', recalculatePanelStyle);

      return () => {
        window.removeEventListener('resize', recalculatePanelStyle);
      };
    }
  }, [isMobile, bodyBgImageSizes, bodyBgSize]);

  return <div id="ba-panel-blur" />;
};

export default BaPanelBlur;
