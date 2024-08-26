﻿// Converted from src/app/pages/charts/amCharts/funnelChart/FunnelChartCtrl.js

import React, { useEffect } from 'react';
import AmCharts from '@amcharts/amcharts3-react';
import layoutPaths from '../utils/constants/layoutPaths';
import baConfig from '../routes/baConfig';

const FunnelChartCtrl: React.FC = () => {
  useEffect(() => {
    const layoutColors = baConfig.colors;
    const id = 'funnelChart'; // Assuming a static ID for the chart container

    AmCharts.makeChart(id, {
      type: 'funnel',
      theme: 'blur',
      color: layoutColors.defaultText,
      labelTickColor: layoutColors.borderDark,
      dataProvider: [
        {
          title: 'Website visits',
          value: 300,
        },
        {
          title: 'Downloads',
          value: 123,
        },
        {
          title: 'Requested prices',
          value: 98,
        },
        {
          title: 'Contaced',
          value: 72,
        },
        {
          title: 'Purchased',
          value: 35,
        },
        {
          title: 'Asked for support',
          value: 25,
        },
        {
          title: 'Purchased more',
          value: 18,
        },
      ],
      titleField: 'title',
      marginRight: 160,
      marginLeft: 15,
      labelPosition: 'right',
      funnelAlpha: 0.9,
      valueField: 'value',
      startX: 0,
      alpha: 0.8,
      neckWidth: '0%',
      startAlpha: 0,
      outlineThickness: 1,
      neckHeight: '0%',
      balloonText: '[[title]]:<b>[[value]]</b>',
      export: {
        enabled: true,
      },
      creditsPosition: 'bottom-left',
      pathToImages: layoutPaths.images.amChart,
    });
  }, []);

  return <div id="funnelChart" style={{ width: '100%', height: '500px' }} />;
};

export default FunnelChartCtrl;
