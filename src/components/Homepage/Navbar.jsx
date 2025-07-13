import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import "./homepage.css"
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [search, setsearch]=useState("")
    const {authUser}=useSelector(store=>store.user)
    const {otherUser}=useSelector(store=>store.user)

    const searchSubmithandler=(e)=>{
      e.preventDefault()
     
alert(search)

    }
  return (
    <form onSubmit={searchSubmithandler}>
    <div className='Navbar'>
      
      <img src={authUser?.profileimage} alt="" />
      
        <div className="navinput">
        <input 
        type="text" 
         placeholder='search here'
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
        
        />
        <button><FaSearch /></button>
      </div>
    
    </div>
      </form>
  )
}

export default Navbar
