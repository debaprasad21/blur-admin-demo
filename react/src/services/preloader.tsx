// Converted from src/app/theme/services/preloader.js

import { useEffect } from 'react';

export default function usePreloader() {
  const loadImg = (src: string): Promise<void> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        resolve();
      };
    });
  };

  const loadAmCharts = (): Promise<void> => {
    return new Promise((resolve) => {
      // Assuming AmCharts is globally available
      if (typeof AmCharts !== 'undefined') {
        AmCharts.ready(() => {
          resolve();
        });
      } else {
        // Handle the case where AmCharts is not available
        console.error('AmCharts is not available');
        resolve();
      }
    });
  };

  useEffect(() => {
    // Example usage of the preloader functions
    // loadImg('path/to/image.jpg').then(() => console.log('Image loaded'));
    // loadAmCharts().then(() => console.log('AmCharts loaded'));
  }, []);

  return { loadImg, loadAmCharts };
}
