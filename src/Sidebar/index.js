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
import {BsSearch} from 'react-icons/bs'
import { BsSegmentedNav } from 'react-icons/bs';
import { BsIntersect } from 'react-icons/bs';



const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
        <h3 style={{textAlign: "center"}}><RiSettingsLine size={35} style={{paddingTop: "12px"}} />BlueReciept</h3>
        <div>
        <BsSearch  />
       <input  style={{height: "25px"}} type='search' placeholder='search' />
       </div>
      <Link to="/">{<FaDashcube style={{color: "white", marginRight: "10px"}} />}Dashboard  </Link>
      <Link to="/products">{<FaProductHunt style={{color: "white", marginRight: "10px"}} /> } Conversations </Link>
      <Link to="/customers"> {<GiHumanPyramid style={{color: "white", marginRight: "10px"}} />}Automations </Link>
      <Link to="/income">{<FcMoneyTransfer style={{color: "white", marginRight: "10px"}} />} Compaigns </Link>
      <Link to="/promotion"> {<FaPercent style={{color: "white", marginRight: "10px"}}  />} Popup </Link>
      <Link to="/help"> {<IoMdHelpCircle style={{color: "white", marginRight: "10px"}}  />} Live chat </Link>
      <Link to="/help"> {<BsSegmentedNav style={{color: "white", marginRight: "10px"}}  />} segments </Link>
      <Link to="/help"> {<BsIntersect style={{color: "white", marginRight: "10px"}}  />} Integrations </Link>

      <div style={{marginTop: "320px"}}>
      <Link to="/profile"> {<FcBusinessman style={{color: "white", marginRight: "10px", lineBreak: "none"}}  />} Evano </Link>
      <p style={{paddingLeft: "20px", color: "white"}}>Project manager</p>
      </div>
    </div>
  
    </>
    
  );
}

export default Sidebar;
