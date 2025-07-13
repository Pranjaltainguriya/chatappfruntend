import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../../../redux/userSlice';
import useGetMessage from "../hooks/usegetmessage";
import useGetRealTimeMessage from '../hooks/useGetrealtimemsg';
import './homepage.css';

const Contant = () => {
  const [contacts, setContacts] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const dispatch = useDispatch();

  const { selectedUser, authUser ,onlineUser} = useSelector(store => store.user);

   // useGetRealTimeMessage()
 useGetMessage();


  useEffect(() => {
    const fetchData = async () => {

      try {
        console.log("Fetching users...");
        const res = await axios.get("http://localhost:8080/api/user", {
          withCredentials: true,
        });
        setContacts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
 

  const handleUserClick = (contact) => {
    dispatch(setSelectedUser(contact));
  };

  return (
    <div className="card-body">
      {authUser && contacts.map((contact, index) => (
        <div
          className={selectedUser?._id===contact._id? "selected" :"contant"}
          key={contact._id || index}
          onClick={() => handleUserClick(contact)}
        >
          <div className="cntantimage-container">
            <img src={contact.profileimage  } alt={`${contact.fullname}'s profile`} 

            onClick={(e) => {
    e.stopPropagation(); // so it doesn't trigger the whole card click
    setPreviewImage(contact.profileimage);
  }}
            
            />
          </div>
          <div className="lastmsg">
            <p>{contact.fullname}</p>
            <div className={onlineUser?.includes(contact._id)?"online":"ofline"} >
              <p >
              {onlineUser?.includes(contact._id)?"online":"ofline"

              }
                
              </p>
    
            </div>
          </div>
        </div>
      ))}
              {previewImage && (
  <div className="image-popup-overlay" onClick={() => setPreviewImage(null)}>
    <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
      <img src={previewImage} alt="Profile Preview" />
      <button className="close-button" onClick={() => setPreviewImage(null)}>×</button>
    </div>
  </div>)
  }
    </div>
    
  );
};

export default Contant;
