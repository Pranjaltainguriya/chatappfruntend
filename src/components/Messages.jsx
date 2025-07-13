import React from 'react'
import Singlemessage from './singlemessage'
import {useSelector} from "react-redux"
import useGetRealTimeMessage from './hooks/useGetrealtimemsg'

const Messages = () => {
  useGetRealTimeMessage()
const {messages}=useSelector(store=>store.message)
const {selectedUser}=useSelector(store=>store.user)

  return (

   
    <div>
{
  selectedUser ? (
    messages && messages.length > 0 ? (
      messages.map((message) => (
        <Singlemessage key={message._id} message={message} />
      ))
    ) : (
      <p style={{ margin: "50px", fontSize: "24px", color: "gray" }}>No messages yet</p>
    )
  ) : (
    <p style={{ margin: "100px", fontSize: "40px", color: "black" }}>Let's have a chat</p>
  )
}
    </div>
  )
}

export default Messages
