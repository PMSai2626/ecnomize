import React from 'react'
import Sidebar from './Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Customers from './Customers'
import Products from './Products';
import Income  from './Income'
import Promotion from './Promotion'
import Help from './Help'

const App = () => {
  return (
    <>
    <div>
    <Sidebar />
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route  path='/products' element={<Products />}/>
      <Route path='/customers' element={<Customers />} />
      <Route path='/income' element={<Income />} />
      <Route path='/promotion' element={<Promotion />} />
      <Route path='/help' element={<Help />} />
    </Routes>
    </div>
    </>
  )
}

export default App
