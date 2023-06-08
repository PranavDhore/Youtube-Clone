import React from 'react'
import Navbar from '../components/Navbar'

const Base = ({children}) => {
  return (
    <div>
      <Navbar />  
      {children}
    </div>
  )
}

export default Base

