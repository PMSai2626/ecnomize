import React, { useContext } from 'react'

const useCont = () => {
    const userContext = useContext(cotextHook)
  return (
    <div>
      <h1>{`hello ${userContext} `}</h1>
    </div>
  )
}

export default useCont
