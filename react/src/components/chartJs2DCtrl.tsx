// Converted from src/app/pages/charts/chartJs/chartJs2DCtrl.js

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const ChartJs2DCtrl: React.FC = () => {
  const [data, setData] = useState<number[][]>([
    [65, 59, 90, 81, 56],
    [28, 48, 40, 19, 88]
  ]);

  const labels = ["May", "Jun", "Jul", "Aug", "Sep"];
  const series = ['Product A', 'Product B'];

  const shuffle = (array: number[]): number[] => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  const changeData = () => {
    setData([
      shuffle([...data[0]]),
      shuffle([...data[1]])
    ]);
  };

  const chartData = {
    labels: labels,
    datasets: series.map((label, index) => ({
      label: label,
      data: data[index],
      fill: false,
      borderColor: index === 0 ? 'rgba(75,192,192,1)' : 'rgba(153,102,255,1)',
    }))
  };

  return (
    <div>
      <Line data={chartData} />
      <button onClick={changeData}>Change Data</button>
    </div>
  );
};

export default ChartJs2DCtrl;
