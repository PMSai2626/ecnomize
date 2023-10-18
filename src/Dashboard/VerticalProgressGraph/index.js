import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "./index.css"

const VerticalProgressGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Monthly Earnings',
            data: [5000, 8000, 12000, 9500, 13000, 11000, 14000, 16000, 10500, 12500, 13500, 12000],
            backgroundColor: 'rgba(255,0,0,0.3)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: true,
          },
          y: {
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, []);

  return (
    
    <div >
        
    <div className="tiny-bar-chart">
      
        
    <h2 style={{marginLeft: "50px"}}>Overview</h2>
    <p style={{marginLeft: "50px"}}>Monthly Earning</p>
    
    <select style={{width: "125px", marginLeft:"500px", border: "none"}}>
        <option>
        Quantity
        </option>
    </select>
    
    
      <canvas ref={chartRef} width="600" height="300" />
    </div>
    </div>
   
  );
};

export default VerticalProgressGraph;
