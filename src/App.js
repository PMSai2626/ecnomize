import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './Context'
import Home from './pages/Home'
import About from './pages/About/About'
import Booklist from './components/Booklist/Booklist'
import BookDetails from './components/BookDetails/BookDetails'
import "./App.css"

const App = () => {
  return (
    <>
    <AppProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} >
        <Route path='about' element={<About />} />
    <Route path='book' element={<Booklist />} />
    <Route path='/book/:id' element={<BookDetails />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </AppProvider>
    </>
  )
}

export default App
