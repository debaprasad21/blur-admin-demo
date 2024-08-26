// Converted from src/app/pages/dashboard/dashboardPieChart/DashboardPieChartCtrl.js

import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import baConfig from '../routes/baConfig';
import baUtil from '../services/baUtil';

const DashboardPieChartCtrl: React.FC = () => {
  const [charts, setCharts] = useState([
    {
      color: baUtil().hexToRGB(baConfig.colors.defaultText, 0.2),
      description: 'New Visits',
      stats: '57,820',
      icon: 'person',
    },
    {
      color: baUtil().hexToRGB(baConfig.colors.defaultText, 0.2),
      description: 'Purchases',
      stats: '$ 89,745',
      icon: 'money',
    },
    {
      color: baUtil().hexToRGB(baConfig.colors.defaultText, 0.2),
      description: 'Active Users',
      stats: '178,391',
      icon: 'face',
    },
    {
      color: baUtil().hexToRGB(baConfig.colors.defaultText, 0.2),
      description: 'Returned',
      stats: '32,592',
      icon: 'refresh',
    },
  ]);

  const getRandomArbitrary = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  const updatePieCharts = () => {
    setCharts((prevCharts) =>
      prevCharts.map((chart) => ({
        ...chart,
        stats: getRandomArbitrary(55, 90).toFixed(0),
      }))
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      updatePieCharts();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pie-charts">
      {charts.map((chart, index) => (
        <div key={index} className="chart" style={{ color: chart.color }}>
          <Pie
            data={{
              datasets: [
                {
                  data: [chart.stats, 100 - parseFloat(chart.stats)],
                  backgroundColor: [chart.color, 'rgba(0,0,0,0)'],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              animation: {
                duration: 2000,
                easing: 'easeOutBounce',
              },
            }}
          />
          <div className="description">{chart.description}</div>
          <div className="stats">{chart.stats}</div>
          <div className="icon">{chart.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardPieChartCtrl;
