import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import "./index.css"


const RoundProgress = () => {
  const percentage = 65; // Adjust the percentage here

  return (
    <div className="customer-progress" style={{height:"350px", width:"400px",  background: "#fff", border: "1px solid #ccc", marginLeft: "50px", marginRight: "10px", textAlign: "center"}}>
      <div style={{paddingLeft: "0px"}}>
      <h2>Customers</h2>
      <p>Customers that but products</p>
      </div>
      <div style={{ width: '200px', height: '200px', marginLeft: "100px", marginTop: "20px",  }}>
        <CircularProgressbar
        style={{stroke: "#4A90E2",
          
          }}
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: '30px',
            
            textColor: '#4A90E2',
            pathColor: '#4A90E2',
            trailColor: '#d6d6d6',
          })}
        />
      </div>
    </div>
  );
};

export default RoundProgress;
