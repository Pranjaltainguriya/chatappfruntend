import React, { useRef, useEffect } from 'react';
import './message.css';
import { useSelector } from 'react-redux';

const SingleMessage = ({ message }) => {
  const { authUser, selectedUser } = useSelector((store) => store.user);
  
  const scrollRef = useRef();

 
  // Correct logic: Check if the message is from the current user
  const isOwnMessage = authUser?._id === message.senderId
;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [message]);

  return (
    <div
      ref={scrollRef}
      className={`chat-container ${isOwnMessage ? 'right' : 'left'}`}
    >
      {!isOwnMessage && (
        <div className="chat-avatar">
          <img src={selectedUser.profileimage} alt="Avatar" />
        </div>
      )}
      <div className="chat-bubble">
         <span className="chat-time">
    {new Date(message.createdAt).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })}
  </span>
        <p>{message.message}</p>
        
      </div>
      
      {isOwnMessage && (
        <div className="chat-avatar">
          <img src={authUser.profileimage} alt="Avatar" />
        </div>
      )}
    </div>
  );
};

export default SingleMessage;
