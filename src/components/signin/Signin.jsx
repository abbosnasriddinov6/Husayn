import React, { useEffect, useState } from 'react'
import './Signin.scss'
import { logo, reytingimg } from '../../assets'
import { NavLink } from 'react-router-dom'
const Signin = () => {
  const [signin,setsignin]=useState('')
  const [forgot,setforgot]=useState(true)
  return (
    <div className='signin'>

        <div className="left">
          <div className="img">
          <img src={logo} alt="" />
          <i id='bars' className="fa-solid fa-bars"></i>
          </div>
            <form>
              <h1>Sign In To eatly</h1>
              <div className="inputs">
              <i className="fa-regular fa-envelope"></i>
              <input placeholder='Email' type="text" />
              </div>

            {forgot? <div className="inputs">
              <i className="fa-solid fa-lock"></i>
              <input value={signin} onChange={(e)=>setsignin(e.target.value)} name='password' placeholder='Password' type="password" />
              <i onClick={()=>setforgot(!forgot)} className="fa-regular fa-eye"></i>
              </div>: <div className="inputs">
              <i className="fa-solid fa-lock"></i>
              <input value={signin} onChange={(e)=>setsignin(e.target.value)} name='password' placeholder='Password' type="text" />
             
              <i onClick={()=>setforgot(!forgot)} className="fa-regular fa-eye-slash"></i>
              </div>}
             

              <span>Forget Password ?</span>
          <NavLink to='/home'> <button>SIGN IN</button></NavLink>
              <h6>Create A New Account? <span>Sign Up</span></h6>
            </form>

            <div className="policy">
              <h6>Privacy Policy</h6>
              <h6>Copyright 2022</h6>
            </div>
        </div>



        <div className="right">
          <img src={reytingimg} alt="" />
          
            <h1>  Find Foods With Love </h1>
            <h6>
              Eatly Is The Food Delivery Dashboard And Having More Than 2K+ 
              Dishes Including Asian, Chinese, Italians And Many More. Our 
              Dashboard Helps You To Manage Orders And Money.
            </h6>
          </div>
        </div>
  
  )
}

export default Signin
