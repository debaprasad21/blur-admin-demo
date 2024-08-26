// Converted from src/app/theme/components/baPanel/baPanelBlurHelper.service.js

import { useState, useEffect } from 'react';

export default function useBaPanelBlurHelper() {
  const [bodyBgImageSizes, setBodyBgImageSizes] = useState<{ width: number; height: number; positionX: number; positionY: number } | null>(null);

  useEffect(() => {
    const computedStyle = getComputedStyle(document.body, ':before');
    const image = new Image();
    image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');

    image.onload = () => {
      const elemW = document.documentElement.clientWidth;
      const elemH = document.documentElement.clientHeight;
      if (elemW <= 640) return;

      const imgRatio = image.height / image.width; // original img ratio
      const containerRatio = elemH / elemW; // container ratio

      let finalHeight, finalWidth;
      if (containerRatio > imgRatio) {
        finalHeight = elemH;
        finalWidth = elemH / imgRatio;
      } else {
        finalWidth = elemW;
        finalHeight = elemW * imgRatio;
      }

      setBodyBgImageSizes({
        width: finalWidth,
        height: finalHeight,
        positionX: (elemW - finalWidth) / 2,
        positionY: (elemH - finalHeight) / 2,
      });
    };

    image.onerror = () => {
      setBodyBgImageSizes(null);
    };
  }, []);

  return bodyBgImageSizes;
}
