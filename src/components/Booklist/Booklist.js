import React from 'react'
import { useGlobalContext } from '../../Context'
import Book from './Book'
import Loader from "../Loader/Loader"
import convering from "../images/cover_not_found.jpg"
import "./Booklist.css"

//https://covers.openlibrary.org/b/id/240727-S.jpg


const Booklist = () => {
  const{books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {

      ...singleBook,
      id:(singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : convering
    }
  })

  if(loading) return <Loader />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>
            {resultTitle}
          </h2>
        </div>
        <div className='booklist-content grid'>
          {booksWithCovers.slice(0,30).map((item, index) => {
            return (
              <Book key={index} {...item} />
            )
          })
}
        </div>

      </div>

    </section>
  )
}

export default Booklist
