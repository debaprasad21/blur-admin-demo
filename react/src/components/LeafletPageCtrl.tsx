// Converted from src/app/pages/maps/leaflet/LeafletPageCtrl.js

import React, { useEffect } from 'react';
import L from 'leaflet';

const LeafletPageCtrl: React.FC = () => {
  useEffect(() => {
    const initialize = () => {
      L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet/dist/images';
      const map = L.map('leaflet-map').setView([51.505, -0.09], 13);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    };

    initialize();
  }, []);

  return <div id="leaflet-map" style={{ height: '100vh' }}></div>;
};

export default LeafletPageCtrl;
