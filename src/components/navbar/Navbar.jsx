import React, { useState } from 'react'
import { eatly, korzinka } from '../../assets'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.scss'


const Navbar = ({number,setnumber}) => {
  

  const [bars,setbars]=useState(true)
  const num=()=>{
      setnumber(0)
  }


  const navigate=useNavigate()


  const s=()=>{
      navigate('/signin')
  }
  const k=()=>{
    navigate('/')
}
  return (
    <div className='navbar'>
       <nav>
        
         <ul className='imge'>
            <img src={eatly} alt="" />
          </ul>



          <div className="ull">
         {bars? <i onClick={()=>setbars(!bars)} id='bars' className="fa-solid fa-bars"></i>: 
         
          <div className="kty">
              <i onClick={()=>setbars(!bars)} id='bars' className="fa-solid fa-bars"></i>
          <ul>
          <NavLink to='/home'><li>Home</li></NavLink>
          <NavLink to='/dishes'><li>Dishes</li></NavLink>
          </ul>










          <ul>
          <ul>
            {number.length<0? <NavLink to='/korzinka'> <img onClick={(e)=>num()} className='korzinkaimg' src={korzinka} alt="" /></NavLink>
            :
            
              <div className="redd">
                <h5>{console.log(number)}</h5>
                <NavLink to='/korzinka'> <img onClick={(e)=>num()} className='korzinkaimg' src={korzinka} alt="" /></NavLink>
              </div>
           

            } 
           
          </ul>
           <NavLink to='/signin'> <button onClick={s} className='login'><h3>Login</h3></button></NavLink>
           <NavLink to='/'> <button onClick={k} className='signup'><h3>Signup</h3></button></NavLink>
          </ul>
          </div>
          }

          </div>
          






         <div className="ll">
         <ul>
          <NavLink to='/home'><li>Home</li></NavLink>
          <NavLink to='/dishes'><li>Dishes</li></NavLink>

        

          </ul>
          <ul>
           <NavLink to='/korzinka'> <img className='korzinka' src={korzinka} alt="" /></NavLink>
         <button onClick={s} className='login'><h3>Login</h3></button>
          <button onClick={k} className='signup'><h3>Signup</h3></button>
          </ul>
         </div>
        </nav>
    </div>
  )
}

export default Navbar
