import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
import {RiSettingsLine} from 'react-icons/ri'
import {FaArrowRight} from 'react-icons/fa'
import {FaDashcube, FaProductHunt} from 'react-icons/fa'
import {GiHumanPyramid} from 'react-icons/gi'
import {FcMoneyTransfer} from 'react-icons/fc'
import {FaPercent} from 'react-icons/fa'
import {IoMdHelpCircle} from 'react-icons/io'
import {FcBusinessman} from "react-icons/fc"


const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
        <h3 style={{textAlign: "center"}}><RiSettingsLine size={35} style={{paddingTop: "12px"}} />Dashboard</h3>

      <Link to="/dashboard">{<FaDashcube style={{color: "white", marginRight: "10px"}} />}Dashboard {<FaArrowRight style={{marginLeft: "100px"}} />} </Link>
      <Link to="/products">{<FaProductHunt style={{color: "white", marginRight: "10px"}} /> } Products {<FaArrowRight style={{marginLeft: "110px"}} />}</Link>
      <Link to="/customers"> {<GiHumanPyramid style={{color: "white", marginRight: "10px"}} />}Customers {<FaArrowRight style={{marginLeft: "100px"}} />}</Link>
      <Link to="/income">{<FcMoneyTransfer style={{color: "white", marginRight: "10px"}} />} Income {<FaArrowRight style={{marginLeft: "121px"}} />}</Link>
      <Link to="/promotion"> {<FaPercent style={{color: "white", marginRight: "10px"}}  />} Promote {<FaArrowRight style={{marginLeft: "112px"}} />}</Link>
      <Link to="/help"> {<IoMdHelpCircle style={{color: "white", marginRight: "10px"}}  />} Help {<FaArrowRight style={{marginLeft: "138px"}} />}</Link>
      <div style={{marginTop: "320px"}}>
      <Link to="/profile"> {<FcBusinessman style={{color: "white", marginRight: "10px", lineBreak: "none"}}  />} Evano {<FaArrowRight style={{marginLeft: "138px"}} />}</Link>
      <p style={{paddingLeft: "20px", color: "white"}}>Project manager</p>
      </div>
    </div>
  
    </>
    
  );
}

export default Sidebar;
