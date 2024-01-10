// OrdersCard.js
import React from 'react';
import { FaClipboardList, FaArrowDown } from 'react-icons/fa';
import "./index.css"

const OrdersCard = () => {
  return (
    <div className="order-card">
    <div className="icon">
      <FaClipboardList size={50} color="purple" />
    </div>
    <div >
      <div style={{display:"flex"}}>
      <p><b>Subscribers</b></p>
      <span style={{color: "green"}}>+25.5%</span>
      </div>
      
      <div className="percentage">
       
        <h2>$198k</h2>
        <FaArrowDown size={12} color="green" />
      </div>
      <p>433 orders</p>
    </div>
  </div>
  );
};

export default OrdersCard;
