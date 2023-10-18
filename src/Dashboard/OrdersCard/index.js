// OrdersCard.js
import React from 'react';
import { FaClipboardList, FaArrowDown } from 'react-icons/fa';
import "./index.css"

const OrdersCard = () => {
  return (
    <div className="orders-card">
      <div className="icon">
        <FaClipboardList size={80} color="thinkpink" style={{ borderRadius: "50%"}} />
      </div>
      <div >
        <p><b>Orders</b></p>
        <h2 >$2.4k</h2>
        <div className="percentage">
          
          <FaArrowDown size={12} color="red" />
          <span style={{color: "red"}}>2.5%</span>
        </div>
        <p>This Month</p>
      </div>
    </div>
  );
};

export default OrdersCard;
