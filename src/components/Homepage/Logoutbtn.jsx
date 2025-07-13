import React from 'react';
import { useSelector } from 'react-redux';
import './Logoutbtn.css'; // Import the CSS

const Logoutbtn = () => {
  const { authUser } = useSelector((store) => store.user);

  return (
    <div className="logout-container">
      {authUser ? (
        <button className="btn logout-btn">Logout</button>
      ) : (
        <button className="btn login-btn">Login</button>
      )}
    </div>
  );
};

export default Logoutbtn;
