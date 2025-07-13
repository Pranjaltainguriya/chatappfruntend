import React, { useState } from 'react'

import Navbar from "./Navbar";
import "./messagebox.css";
import { IoSend } from "react-icons/io5";
import { MdOutlinePermMedia } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import Messages from "../Messages";
import MessageNavBar from "./MessagenavBar"
import { setmessages } from "../../../redux/messageSlice.js";
import axios from"axios"

useSelector
import { useDispatch, useSelector } from 'react-redux';

const Sendmessage = () => {
    const dispatch=useDispatch()

    const {selectedUser}=useSelector(store=>store.user)
    
    const {messages}=useSelector(store=>store.message)
    
    const [ message ,setMessage]=useState("")



    //submit handler 
    const submithandler= async (e)=>{
        e.preventDefault();
          try {
         
   const res = await axios.post(
  `http://localhost:8080/api/massage/send/${selectedUser._id}`,
  { message }, // this is the actual data
  { withCredentials: true } // config
);
 console.log("your res,",res.data)
dispatch(setmessages([...messages, res.data]));
setMessage("")

    } catch (error) {
        console.log(error)
    }
    }

    
  
  return (
    <form onSubmit={submithandler} className="chatbox">
  <div className="icons">
    <ul>
      <li><MdOutlinePermMedia /></li>
      <li><MdOutlineEmojiEmotions /></li>
    </ul>
  </div>
  <div className="inputbox">
    <input
      type="text"
      placeholder="send message here"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
    <button type="submit">
      <IoSend />
    </button>
  </div>
</form>

  
  )
}

export default Sendmessage

