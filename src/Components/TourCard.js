import React from 'react'
import { useState } from 'react';
import "./index.css"

const TourCard = ({ name, id, image,info,price, onDelete }) => {
    const [more, setMore] = useState(false);
  
    const handleClick = () => {
      setMore(!more);
    };
  
    return (
      
     
        <li className='single-tour'>
       
          <img src={image} alt={name} />
          <footer>
          <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
          </div>
          <p className='para'>
            {more ? info : `${info.substring(0, 200)} ...`} <br />
            <button className='label' onClick={handleClick}>
              {more ? 'Show less' : 'Show more'}
            </button>
          </p>
         
          <button className='delete-btn' onClick={() => onDelete(id)}>Not interested</button>
          </footer>
        </li>
     
   
    );
  };
  export default TourCard