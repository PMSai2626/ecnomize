// EarningCard.js
import React from 'react';
import { FaDollarSign, FaArrowUp } from 'react-icons/fa';
import "./index.css"

const EarningCard = () => {
  return (
    <div className="earning-card">
      <div className="icon">
        <FaDollarSign size={80} color="purple" />
      </div>
      <div >
        <p><b>Earning</b></p>
        <h2>$198k</h2>
        <div className="percentage">
          <span>37.8%</span>
          <FaArrowUp size={12} color="green" />
        </div>
        <p>This Month</p>
      </div>
    </div>
  );
};

export default EarningCard;
