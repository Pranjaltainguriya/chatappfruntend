import React from "react";
import Navbar from "./Navbar";
import "./messagebox.css";
import { IoSend } from "react-icons/io5";
import { MdOutlinePermMedia } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import Messages from "../Messages";
import MessageNavBar from "./MessagenavBar"
import Sendmessage from "./Sendmessage";
import { useSelector } from "react-redux";
const Massagebox = () => {
  const  {authUser , slectedUser}=useSelector(store=>store.user)
   
  
  return (
    <div className="messagebox">
     <MessageNavBar/>
      <div className="msgcontant"  >
        <Messages />
      </div>
      <Sendmessage/> {/* put it down side*/}
     
      </div>
      
  );
};

export default Massagebox;
