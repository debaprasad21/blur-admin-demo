// Converted from src/app/pages/maps/google-maps/GmapPageCtrl.js

import React, { useEffect } from 'react';

const GmapPageCtrl: React.FC = () => {
  useEffect(() => {
    const initialize = () => {
      const mapCanvas = document.getElementById('google-maps') as HTMLElement;
      const mapOptions = {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      new google.maps.Map(mapCanvas, mapOptions);
    };

    const timeoutId = setTimeout(() => {
      initialize();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return <div id="google-maps" style={{ height: '100%', width: '100%' }} />;
};

export default GmapPageCtrl;
