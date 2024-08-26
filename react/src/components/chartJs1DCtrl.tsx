// Converted from src/app/pages/charts/chartJs/chartJs1DCtrl.js

import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const ChartJs1DCtrl: React.FC = () => {
  const layoutColors = {
    defaultText: '#000000' // Assuming a default color, replace with actual value if available
  };

  const [data, setData] = useState<number[]>([20, 40, 5, 35]);

  const shuffle = (array: number[]): number[] => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const changeData = () => {
    setData(shuffle([...data]));
  };

  const chartData = {
    labels: ["Sleeping", "Designing", "Coding", "Cycling"],
    datasets: [{
      data: data,
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FF9F40'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FF9F40'
      ]
    }]
  };

  const options = {
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: layoutColors.defaultText
      }
    }
  };

  return (
    <div>
      <Doughnut data={chartData} options={options} />
      <button onClick={changeData}>Shuffle Data</button>
    </div>
  );
};

export default ChartJs1DCtrl;
