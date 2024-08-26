// Converted from src/app/pages/dashboard/trafficChart/TrafficChartCtrl.js

import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import baConfig from '../routes/baConfig';
import colorHelper from '../utils/constants/colorHelper';

const TrafficChartCtrl: React.FC = () => {
  const transparent = baConfig.theme.blur;
  const dashboardColors = baConfig.colors.dashboard;

  const doughnutData = {
    labels: [
      'Other',
      'Search engines',
      'Referral Traffic',
      'Direct Traffic',
      'Ad Campaigns'
    ],
    datasets: [
      {
        data: [2000, 1500, 1000, 1200, 400],
        backgroundColor: [
          dashboardColors.white,
          dashboardColors.blueStone,
          dashboardColors.surfieGreen,
          dashboardColors.silverTree,
          dashboardColors.gossip
        ],
        hoverBackgroundColor: [
          colorHelper.shade(dashboardColors.white, 15),
          colorHelper.shade(dashboardColors.blueStone, 15),
          colorHelper.shade(dashboardColors.surfieGreen, 15),
          colorHelper.shade(dashboardColors.silverTree, 15),
          colorHelper.shade(dashboardColors.gossip, 15)
        ],
        percentage: [87, 22, 70, 38, 17]
      }
    ]
  };

  useEffect(() => {
    // Any additional setup can be done here if needed
  }, []);

  return (
    <div>
      <Doughnut
        data={doughnutData}
        options={{
          cutoutPercentage: 64,
          responsive: true,
          elements: {
            arc: {
              borderWidth: 0
            }
          }
        }}
      />
    </div>
  );
};

export default TrafficChartCtrl;
