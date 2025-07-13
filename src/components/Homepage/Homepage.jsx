import React from 'react'
import Sidebar from './Sidebar'
import Massagebox from './Massagebox'
import "./homepage.css"

const Homepage = () => {
  return (
    <div className='home'>
      <Sidebar/>
      
      <Massagebox/>
    </div>
  )
}

export default Homepage
