import React from 'react'
import "./homepage.css"
import Navbar from './Navbar'
import Contant from './Contant'
import  { useEffect } from 'react';
import axios from 'axios';
import "./homepage.css"
import  Logoutbtn from "./Logoutbtn"
const Sidebar = () => {
    useEffect(() => {
          const fetchData = async () => {
              try {
                  console.log("working 1");
                  
                  const res = await axios.get("http://localhost:8080/api/user",{withCredentials:true});
                  console.log("working");
                  console.log(res.data); 
              } catch (error) {
                  console.error("Error fetching data:", error);
              }
          };
  
          fetchData();
      }, []);
  return (
    <div className='sidebar'>
      <Navbar/>
      <Contant/>
      <Logoutbtn/>
     
    </div>
  )
}

export default Sidebar
