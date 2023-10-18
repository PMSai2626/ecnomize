import React from 'react'

import "./index.css"
import {BsSearch} from 'react-icons/bs'
import {FaHandSparkles} from "react-icons/fa";
import BalanceCard from './BalanceCard';
import OrdersCard from './OrdersCard';
import EarningCard from './EarningCard';
import TotalSalesCard from './TotalSalesCard';
import VerticalProgressGraph from './VerticalProgressGraph';
import  RoundProgress  from './RoundProgress';






const Dashboard = () => {
  return ( 
    <>
   
    <div className='dasborad-main'>
        <div style={{display:"flex", paddingTop: "20px"}}>
       <h3>Hello Sai kumar  </h3><FaHandSparkles style={{color: "red", height: "30px", width: "30px", marginLeft: "10px"}} />
       </div>
       <div>
        <BsSearch  />
       <input  style={{height: "25px"}} type='search' placeholder='search' />
       </div>
    </div>
    <div style={{display: "flex", marginTop: "30px"}}>
    <EarningCard />
    <OrdersCard />
    <BalanceCard />
    <TotalSalesCard />
     
    </div>
    <div style={{display: "flex"}}>
        <VerticalProgressGraph />
        <div style={{marginTop: "50px"}}>
        <RoundProgress />
        </div>
    </div>
                
    </>
    
    
  )
}

export default Dashboard
