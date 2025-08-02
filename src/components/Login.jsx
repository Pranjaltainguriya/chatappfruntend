import React from 'react'
import "./Signup.css"
import { useForm } from "react-hook-form"
import {Link} from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import {toast} from "react-hot-toast"
import {useDispatch} from "react-redux"
import { setauthUser } from '../../redux/userSlice'
const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

const navigate=useNavigate()
const dispatch=useDispatch()
  const onSubmit = async(data) => {
   try {
  const res= await axios.post("https://chatappbackend-theta.vercel.app/api/user/login" ,data ,{withCredentials:true})
  
console.log(res);
  toast.success("login successfully")
  navigate("/")
 
  
 dispatch(setauthUser(res.data))

} catch (error) {
  toast.error(error.response.data.message)
  console.log(error)
  
}
  }

  return (
    <div className='main-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <p>Login</p>

       

        <div className="items">
          <div className="label">
            <label htmlFor="username">Username</label>
          </div>
          <input
            type="text"
            placeholder='Enter your username'
            {...register("username", { required: true })}
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

        <div className="link">
          <p>don't have account <Link to={"/signup"}> creat new acount</Link></p> 
        </div>

        
        

        <div className="signup-btn">
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
