import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
const MessageNavBar = () => {
    const {selectedUser}=useSelector(store=>store.user)
  return (
    <div className='Navbar'>
      <img src={selectedUser?.profileimage} alt="" />
      <div className="navinput">
        <p>{selectedUser?.username}</p>
      </div>
    </div>
  )
}

export default MessageNavBar