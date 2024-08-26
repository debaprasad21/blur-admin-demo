// Converted from src/app/pages/charts/amCharts/pieChart/PieChartCtrl.js

import React, { useEffect } from 'react';
import AmCharts from '@amcharts/amcharts3-react';
import layoutPaths from '../utils/constants/layoutPaths';
import baConfig from '../routes/baConfig';

const PieChartCtrl: React.FC<{ id: string }> = ({ id }) => {
  useEffect(() => {
    const layoutColors = baConfig.colors;

    const pieChart = AmCharts.makeChart(id, {
      type: 'pie',
      startDuration: 0,
      theme: 'blur',
      addClassNames: true,
      color: layoutColors.defaultText,
      labelTickColor: layoutColors.borderDark,
      legend: {
        position: 'right',
        marginRight: 100,
        autoMargins: false,
      },
      innerRadius: '40%',
      defs: {
        filter: [
          {
            id: 'shadow',
            width: '200%',
            height: '200%',
            feOffset: {
              result: 'offOut',
              in: 'SourceAlpha',
              dx: 0,
              dy: 0,
            },
            feGaussianBlur: {
              result: 'blurOut',
              in: 'offOut',
              stdDeviation: 5,
            },
            feBlend: {
              in: 'SourceGraphic',
              in2: 'blurOut',
              mode: 'normal',
            },
          },
        ],
      },
      dataProvider: [
        { country: 'Lithuania', litres: 501.9 },
        { country: 'Czech Republic', litres: 301.9 },
        { country: 'Ireland', litres: 201.1 },
        { country: 'Germany', litres: 165.8 },
        { country: 'Australia', litres: 139.9 },
        { country: 'Austria', litres: 128.3 },
        { country: 'UK', litres: 99 },
        { country: 'Belgium', litres: 60 },
      ],
      valueField: 'litres',
      titleField: 'country',
      export: {
        enabled: true,
      },
      creditsPosition: 'bottom-left',
      autoMargins: false,
      marginTop: 10,
      alpha: 0.8,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      pullOutRadius: 0,
      pathToImages: layoutPaths.images.amChart,
      responsive: {
        enabled: true,
        rules: [
          {
            maxWidth: 900,
            overrides: {
              legend: {
                enabled: false,
              },
            },
          },
          {
            maxWidth: 200,
            overrides: {
              valueAxes: {
                labelsEnabled: false,
              },
              marginTop: 30,
              marginBottom: 30,
              marginLeft: 30,
              marginRight: 30,
            },
          },
        ],
      },
    });

    pieChart.addListener('init', handleInit);

    pieChart.addListener('rollOverSlice', (e) => {
      handleRollOver(e);
    });

    function handleInit() {
      pieChart.legend.addListener('rollOverItem', handleRollOver);
    }

    function handleRollOver(e: any) {
      const wedge = e.dataItem.wedge.node;
      wedge.parentNode.appendChild(wedge);
    }
  }, [id]);

  return <div id={id} />;
};

export default PieChartCtrl;
