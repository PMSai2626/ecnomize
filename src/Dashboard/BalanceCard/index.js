// BalanceCard.js
import React from 'react';
import { FaWallet, FaArrowDown } from 'react-icons/fa';
import "./index.css"


const BalanceCard = () => {
  return (
    <div className="balance-card">
      <div className="icon">
        <FaWallet size={80}  color="blue" />
      </div>
      <div >
        <p><b>Balance</b></p>
        <h2 className='content'>$2.4k</h2>
        <div className="percentage">
          <span>5.2%</span>
          <FaArrowDown size={12} color="red" />
        </div>
        <p>This Month</p>
      </div>
    </div>
  );
};

export default BalanceCard;
