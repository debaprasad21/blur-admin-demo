// Converted from src/app/pages/charts/chartJs/chartJsWaveCtrl.js

import React, { useState, useEffect } from 'react';
import useStopableInterval from '../services/stopableInterval';

const ChartJsWaveCtrl: React.FC = () => {
  const [data, setData] = useState<number[]>([1, 9, 3, 4, 5, 6, 7, 8, 2].map(e => Math.sin(e) * 25 + 25));
  const labels = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  useStopableInterval(() => {
    setData(prevData => {
      const tempArray = [...prevData];
      const lastElement = tempArray[tempArray.length - 1];
      for (let i = tempArray.length - 1; i > 0; i--) {
        tempArray[i] = tempArray[i - 1];
      }
      tempArray[0] = lastElement;
      return tempArray;
    });
  }, 400);

  return (
    <div>
      {/* Render your chart here using the `data` and `labels` */}
    </div>
  );
};

export default ChartJsWaveCtrl;
