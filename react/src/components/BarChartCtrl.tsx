// Converted from src/app/pages/charts/amCharts/barChart/BarChartCtrl.js

import React, { useEffect } from 'react';
import AmCharts from '@amcharts/amcharts3-react';
import baConfig from '../routes/baConfig';
import layoutPaths from '../utils/constants/layoutPaths';

const BarChartCtrl: React.FC = () => {
  useEffect(() => {
    const layoutColors = baConfig.colors;
    const id = 'barChart'; // Assuming a static ID for the chart container

    AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      dataProvider: [
        {
          country: 'USA',
          visits: 3025,
          color: layoutColors.primary,
        },
        {
          country: 'China',
          visits: 1882,
          color: layoutColors.danger,
        },
        {
          country: 'Japan',
          visits: 1809,
          color: layoutColors.info,
        },
        {
          country: 'Germany',
          visits: 1322,
          color: layoutColors.success,
        },
        {
          country: 'UK',
          visits: 1122,
          color: layoutColors.warning,
        },
        {
          country: 'France',
          visits: 1114,
          color: layoutColors.primaryLight,
        },
      ],
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          title: 'Visitors from country',
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        },
      ],
      startDuration: 1,
      graphs: [
        {
          balloonText: '<b>[[category]]: [[value]]</b>',
          fillColorsField: 'color',
          fillAlphas: 0.7,
          lineAlpha: 0.2,
          type: 'column',
          valueField: 'visits',
        },
      ],
      chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false,
      },
      categoryField: 'country',
      categoryAxis: {
        gridPosition: 'start',
        labelRotation: 45,
        gridAlpha: 0.5,
        gridColor: layoutColors.border,
      },
      export: {
        enabled: true,
      },
      creditsPosition: 'top-right',
      pathToImages: layoutPaths.images.amChart,
    });
  }, []);

  return <div id="barChart" style={{ width: '100%', height: '500px' }} />;
};

export default BarChartCtrl;
