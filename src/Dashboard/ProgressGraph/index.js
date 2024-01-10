import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './index.css';

const ProgressGraph = () => {
  const chartRef = useRef(null);

  const labels = ['12am', '1am', '2am', '3am', '4am', '5am', 'Now']; // Replace with your desired time labels

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: [65000, 59000, 80000, 81000, 56000, 55000, 40000], // Adjust y-values as needed (multiplied by 1000)
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: true,
          },
          y: {
            beginAtZero: true,
            max: 100000, // Set y-axis maximum value as needed
            display: true,
            ticks: {
              stepSize: 25000, // Adjust the step size as needed
              callback: function (value) {
                return value / 1000 + 'k'; // Append 'k' to the values
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, [labels]);

  return (
    <div>
      <div className="tiny-bar-chart1">
        <h2 style={{ marginLeft: '50px' }}>Overview</h2>
       
        <canvas ref={chartRef} width="700" height="250"/>
      </div>
    </div>
  );
};

export default ProgressGraph;
