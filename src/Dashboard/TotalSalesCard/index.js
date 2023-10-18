// TotalSalesCard.js
import React from 'react';
import "./index.css";
import { FaChartBar, FaArrowUp } from 'react-icons/fa';

const TotalSalesCard = () => {
  return (
    <div className="total-sales-card">
      <div className="icon">
        <FaChartBar size={80} color="red" />
      </div>
      <div >
        <p><b>Total Sales</b></p>
        <h2>$89k</h2>
        <div className="percentage">
          <span>21.3%</span>
          <FaArrowUp size={12} color="green" />
        </div>
        <p>This Month</p>
      </div>
    </div>
  );
};

export default TotalSalesCard;
