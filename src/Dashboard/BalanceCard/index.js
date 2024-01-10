// BalanceCard.js
import React from 'react';
import { FaWallet, FaArrowDown } from 'react-icons/fa';
import "./index.css"


const BalanceCard = () => {
  return (
    <div className="balance-card">
    <div className="icon-1">
      <FaWallet size={50} color="purple" />
    </div>
    <div >
      <div style={{display:"flex"}}>
      <p><b>Conversations</b></p>
      <span style={{color: "red"}}>-3.4%</span>
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

export default BalanceCard;
