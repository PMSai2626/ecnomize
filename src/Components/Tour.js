import React from 'react'
import { useState, useEffect } from 'react'
import TourCard from './TourCard'; 
import Loading from './Loading'
import "./index.css"


const Tour = () => {
    const [loading, setloading] = useState(true)
    const [tours, settours] = useState([])
    const url = 'https://course-api.com/react-tours-project';

    const fetchTours = async () => {
        setloading(true);
        try {
            
        const response=  await fetch(url);
        const tours = await response.json();
        setloading(false)
        settours(tours)
        } catch (error) {
            setloading(false)
        }
        
    };
    useEffect(() => {
        fetchTours()
    } ,[]);

    const onclick = (id) =>{
        const updated = tours.filter((tour) => 
        tour.id !== id)
        settours(updated) 
    }
 
    if(loading){
        return (
            <main>
                <Loading />
            </main>
        )
    }
   
    if (tours.length === 0) {
    
        return (
          <main>
            <div className='title'>
              <h2>no tours left</h2>
              <button className='btn' onClick={() => fetchTours()}>
                refresh
              </button>
            </div>
          </main>
        )
        
      }
      

  return (
    <section>
    <div className='title'>
      <center>
        <h2>Our tours</h2>
        </center>
        <div className="underline">
        </div>
        </div>
        <div>
          <ul className='items'>
        {tours.map((tour) => (
            
            <TourCard key={tour.id} {...tour} onDelete={onclick} />

            ))}
            </ul>
      
    </div>
    </section>
  )
}

export default Tour
