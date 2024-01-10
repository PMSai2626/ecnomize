// EarningCard.js
import React from 'react';
import { FaDollarSign, FaArrowUp } from 'react-icons/fa';
import "./index.css"

const EarningCard = () => {
  return (
    <div className="earning-card">
      <div className="icon">
        <FaDollarSign size={50} color="purple" />
      </div>
      <div >
        <div style={{display:"flex"}}>
        <p><b>Total Revenue</b></p>
        <span style={{color: "green"}}>+25.5%</span>
        </div>
        
        <div className="percentage">
         
          <h2>$198k</h2>
          <FaArrowUp size={12} color="green" />
        </div>
        <p>433 orders</p>
      </div>
    </div>
  );
};

export default EarningCard;
