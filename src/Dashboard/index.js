import React from 'react'

import "./index.css"
import {FaHandSparkles} from "react-icons/fa";
import BalanceCard from './BalanceCard';
import OrdersCard from './OrdersCard';
import EarningCard from './EarningCard';
import TotalSalesCard from './TotalSalesCard';
import VerticalProgressGraph from './ProgressGraph';
import  RoundProgress  from './RoundProgress';
import Tabs from './Tabs/Tabs';






const Dashboard = () => {
  return ( 
    <>
   
    <div className='dasborad-main'>
        <div style={{display:"flex", paddingTop: "20px"}}>
       <h3>Good Morning Oguz  </h3><FaHandSparkles style={{color: "red", height: "30px", width: "30px", marginLeft: "10px"}} />
      
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
    <Tabs />
    </>
    
    
  )
}

export default Dashboard
