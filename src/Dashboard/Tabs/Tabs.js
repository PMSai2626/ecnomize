import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Tabs.css"
import { BsCart } from 'react-icons/bs'
import { BsArrowBarRight } from 'react-icons/bs'


const Tabs = () => {
  const [toggle, setToggle] = useState(1)

  function  updateToggle(id)  {
    setToggle(id)
  }

  return (
    <div className='d-flex align-items-center justify-content-center'>
     
      <div className='col-6 tab p-5'>
        
          <ul className='d-flex'>
            <li className='flex-fill' onClick={() => updateToggle(1)}>
            Automations
            </li>
            <li className='flex-fill' onClick={() => updateToggle(2)}>
            Compaigns
            </li>
            <li className='flex-fill' onClick={() => updateToggle(3)}>
            segments
            </li>
            <li className='flex-fill' onClick={() => updateToggle(3)}>
            Last Month
            </li>
          </ul>

        

        <div style={{display:"grid"}} className={toggle === 1 ? "show-content": "content1"}>
          <div style={{display: "flex"}}>
          <BsCart />
          <h6>Abandoned cart 7 days <BsArrowBarRight />  </h6>
          
          <p style={{marginLeft: "350px"}}>
            $5,231
          </p>
          </div>
          <div style={{display: "flex", marginRight: "20px"}}>
          <BsCart />
          <h6>Abandoned cart 7 days <BsArrowBarRight />  </h6>
          
          <p style={{marginLeft: "350px"}}>
            $24,521
          </p>
          </div>

          <div style={{display: "flex", marginRight: "20px"}}>
          <BsCart />
          <h6>Abandoned cart 7 days <BsArrowBarRight />  </h6>
          
          <p style={{marginLeft: "350px"}}>
            $5,231
          </p>
          </div>
          

        </div>
        <div  className={toggle === 2 ? "show-content": "content1"}>
          <h2>Compaigns</h2>
          <hr />
          <p>
            two
          </p>

        </div>
        <div className={toggle === 3 ? "show-content": "content1"}>
          <h2>segments</h2>
          <hr />
          <p>
            three
          </p>

        </div>

        <div  className={toggle === 2 ? "show-content": "content1"}>
          <h2>dkjrb</h2>
          <hr />
          <p>
            dfv
          </p>

        </div>
      </div>
     
    </div>
  )
}

export default Tabs
