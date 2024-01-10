import React from 'react';
import GaugeChart from 'react-gauge-chart';

const ContinuousGaugeChart = () => {
  const percentage = 0.65; // Adjust the percentage here

  return (
    <div className="customer-progress" style={{ height: "200px", width: "300px", background: "#fff", border: "1px solid #ccc", marginLeft: "50px", marginRight: "10px", textAlign: "center" }}>
      <div style={{ paddingLeft: "0px" }}>
        <h2>Level 5 </h2>
        <p>+32,050 in the last month</p>
      </div>
      <div style={{ width: '200px', height: '200px', marginLeft: "50px", marginTop: "50px" }}>
        <GaugeChart
          id="gauge-chart1"
          style={{ width: '100%' }}
          textColor="#4A90E2"
          colors={['#d6d6d6', '#4A90E2']}
          percent={percentage}
          arcWidth={0.2}
          needleColor="#4A90E2" // Set the color of the needle
          needleBaseSize={15} // Set the base size of the needle
          formatTextValue={() => `${percentage * 100}%`}
        />
      </div>
    </div>
  );
};

export default ContinuousGaugeChart;
