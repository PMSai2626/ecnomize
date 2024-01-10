// TotalSalesCard.js
import React from 'react';
import "./index.css";
import { FaChartBar, FaArrowUp } from 'react-icons/fa';

const TotalSalesCard = () => {
  return (
    <div className="order-card1">
    <div className="icon1">
      <FaChartBar size={50} color="purple" />
    </div>
    <div >
      <div style={{display:"flex"}}>
      <p><b>Popup rate</b></p>
      <span style={{color: "green"}}>+25.5%</span>
      </div>
      
      <div className="percentage1">
       
        <h2>$198k</h2>
        <FaArrowUp size={12} color="green" />
      </div>
      <p>433 orders</p>
    </div>
  </div>
  );
};

export default TotalSalesCard;
