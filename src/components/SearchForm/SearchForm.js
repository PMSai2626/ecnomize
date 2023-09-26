import React, { useEffect, useRef } from 'react'
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../Context';
import "./SearchForm.css"


const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchtext = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchtext.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchtext.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something...");
    }
    else{
      setSearchTerm(searchtext.current.value);
    };
    navigate("/book")
  }

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
             <div className='search-form-elem flex flex-sb bg-white'>
              <input type='text' ref={searchtext} className='form-control' 
              placeholder='the lost word ...' />
              <button className='flex flex-c' type='submit' onClick={handleSubmit}
             >
              <FaSearch className='text-purple' size= {32} />
              </button>
              
             </div>

          </form>

        </div>

      </div>
      
    </div>
  )
}

export default SearchForm
