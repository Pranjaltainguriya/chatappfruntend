import React from 'react'
import "./Signup.css"
import { useForm } from "react-hook-form"
import {Link} from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

const navigate=useNavigate()
  const onSubmit = async (data) => {
   
try {
  const res= await axios.post("https://chatappbackend-theta.vercel.app/api/user/ragister" ,data ,{withCredentials:true})
if(res.data){
  console.log(res.data)
  navigate("/login")
  toast.success(res.data.massage)
}
} catch (error) {
  toast.error(error.response.data.message)
  console.log(error)
  
}
    
  }



  return (
    <div className='main-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <p>Signup</p>

        <div className="items">
          <div className="label">
            <label htmlFor="fullname">Full name</label>
          </div>
          <input
            type="text"
            placeholder='Enter your full name'
            {...register("fullname", { required: true })}
          />
          {errors.fullname && <span>This field is required</span>}
        </div>

        <div className="items">
          <div className="label">
            <label htmlFor="username">Username</label>
          </div>
          <input
            type="text"
            placeholder='Enter your username'
       {...register("username", {
  required: "Username is required",
  pattern: {
    value: /^[A-Za-z]+$/,
    message: "Only letters are allowed"
  }
})}
          />
          {errors.username && <span>This field is required</span>}
        </div>

        <div className="items">
          <div className="label">
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="password"
            placeholder='Enter your password'
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>

        

        <div className="items">
          <div className="label">
            <label htmlFor="gender">Select your gender</label>
          </div>
          <select {...register("gender", { required: true })}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <span>This field is required</span>}
        </div>

        <div className="link">
          <p>Already have an account? <Link to={"/login"}> login</Link></p> 
        </div>

        <div className="signup-btn">
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
