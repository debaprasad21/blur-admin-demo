﻿// Converted from src/app/pages/charts/chartist/chartistCtrl.js

import React, { useEffect } from 'react';
import Chartist from 'chartist';
import baConfig from '../routes/baConfig';

const ChartistCtrl: React.FC = () => {
  useEffect(() => {
    const simpleLineOptions = {
      color: baConfig.colors.defaultText,
      fullWidth: true,
      height: "300px",
      chartPadding: {
        right: 40
      }
    };

    const simpleLineData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [
        [20, 20, 12, 45, 50],
        [10, 45, 30, 14, 12],
        [34, 12, 12, 40, 50],
        [10, 43, 25, 22, 16],
        [3, 6, 30, 33, 43]
      ]
    };

    const areaLineData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [
        [5, 9, 7, 8, 5, 3, 5, 4]
      ]
    };

    const areaLineOptions = {
      fullWidth: true,
      height: "300px",
      low: 0,
      showArea: true
    };

    const biLineData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      series: [
        [1, 2, 3, 1, -2, 0, 1],
        [-2, -1, -2, -1, -2.5, -1, -2],
        [0, 0, 0, 1, 2, 2.5, 2],
        [2.5, 2, 1, 0.5, 1, 0.5, -1]
      ]
    };

    const biLineOptions = {
      height: "300px",
      high: 3,
      low: -3,
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showGrid: false
      }
    };

    const simpleBarData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [15, 24, 43, 27, 5, 10, 23, 44, 68, 50, 26, 8],
        [13, 22, 49, 22, 4, 6, 24, 46, 57, 48, 22, 4]
      ]
    };

    const simpleBarOptions = {
      fullWidth: true,
      height: "300px"
    };

    const multiBarData = {
      labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
      series: [
        [5, 4, 3, 7],
        [3, 2, 9, 5],
        [1, 5, 8, 4],
        [2, 3, 4, 6],
        [4, 1, 2, 1]
      ]
    };

    const multiBarOptions = {
      fullWidth: true,
      height: "300px",
      stackBars: true,
      axisX: {
        labelInterpolationFnc: function (value: string) {
          return value.split(/\s+/).map(function (word) {
            return word[0];
          }).join('');
        }
      },
      axisY: {
        offset: 20
      }
    };

    const multiBarResponsive = [
      ['screen and (min-width: 400px)', {
        reverseData: true,
        horizontalBars: true,
        axisX: {
          labelInterpolationFnc: Chartist.noop
        },
        axisY: {
          offset: 60
        }
      }],
      ['screen and (min-width: 700px)', {
        stackBars: false,
        reverseData: false,
        horizontalBars: false,
        seriesBarDistance: 15
      }]
    ];

    const stackedBarData = {
      labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
      series: [
        [800000, 1200000, 1400000, 1300000],
        [200000, 400000, 500000, 300000],
        [100000, 200000, 400000, 600000]
      ]
    };

    const stackedBarOptions = {
      fullWidth: true,
      height: "300px",
      stackBars: true,
      axisY: {
        labelInterpolationFnc: function (value: number) {
          return (value / 1000) + 'k';
        }
      }
    };

    const simplePieData = {
      series: [5, 3, 4]
    };

    const simplePieOptions = {
      fullWidth: true,
      height: "300px",
      weight: "300px",
      labelInterpolationFnc: function (value: number) {
        return Math.round(value / 12 * 100) + '%';
      }
    };

    const labelsPieData = {
      labels: ['Bananas', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    };

    const labelsPieOptions = {
      fullWidth: true,
      height: "300px",
      weight: "300px",
      labelDirection: 'explode',
      labelInterpolationFnc: function (value: string) {
        return value[0];
      }
    };

    const simpleDonutData = {
      labels: ['Bananas', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    };

    const simpleDonutOptions = {
      fullWidth: true,
      donut: true,
      height: "300px",
      weight: "300px",
      labelDirection: 'explode',
      labelInterpolationFnc: function (value: string) {
        return value[0];
      }
    };

    const getResponsive = (padding: number, offset: number) => [
      ['screen and (min-width: 1550px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value: string) {
          return value;
        }
      }],
      ['screen and (max-width: 1200px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value: string) {
          return value;
        }
      }],
      ['screen and (max-width: 600px)', {
        chartPadding: 0,
        labelOffset: 0,
        labelInterpolationFnc: function (value: string) {
          return value[0];
        }
      }]
    ];

    const donutResponsive = getResponsive(5, 40);
    const pieResponsive = getResponsive(20, 80);

    new Chartist.Line('#line-chart', simpleLineData, simpleLineOptions);
    new Chartist.Line('#area-chart', areaLineData, areaLineOptions);
    new Chartist.Line('#bi-chart', biLineData, biLineOptions);

    new Chartist.Bar('#simple-bar', simpleBarData, simpleBarOptions);
    new Chartist.Bar('#multi-bar', multiBarData, multiBarOptions, multiBarResponsive);
    new Chartist.Bar('#stacked-bar', stackedBarData, stackedBarOptions);

    new Chartist.Pie('#simple-pie', simplePieData, simplePieOptions, pieResponsive);
    new Chartist.Pie('#label-pie', labelsPieData, labelsPieOptions);
    new Chartist.Pie('#donut', simpleDonutData, simpleDonutOptions, donutResponsive);
  }, []);

  return (
    <div>
      <div id="line-chart"></div>
      <div id="area-chart"></div>
      <div id="bi-chart"></div>
      <div id="simple-bar"></div>
      <div id="multi-bar"></div>
      <div id="stacked-bar"></div>
      <div id="simple-pie"></div>
      <div id="label-pie"></div>
      <div id="donut"></div>
    </div>
  );
};

export default ChartistCtrl;
