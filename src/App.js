import React, { useState } from 'react';

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  }
]

function App() {
  const [inpu, setInput] = useState("")
  const [usedetailsList, setUserdetailsList]  =  useState(initialUserDetailsList);


const searchInput = event => {
  setInput(event.target.value)


}

const searchMain = usedetailsList.filter(each => each.name.includes(inpu))

const onDelete = uniqueNo => {
  const dele = usedetailsList.filter(each => each.uniqueNo !== uniqueNo
    )
  setUserdetailsList(dele)  
}


  return (
    <>
    <center>
      <input type='search' onChange={searchInput} value={inpu}  />
      <ul>
        {searchMain.map((user) => (
          <li>
            <h1>{user.name}</h1>
            <p>{user.role}</p>
            <button onClick={() => onDelete(user.uniqueNo)}> <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img"
        /></button>
          </li>
     
        ))}
         </ul>
        
     
      
    </center>
    </>
  )
}

export default App
