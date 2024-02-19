import React from 'react'
import './Dishes.scss'
import Get from './dishes/get/Get'
import Asked from './dishes/asked/Asked'
import Footer from './dishes/footer/Footer'
import { NavLink } from 'react-router-dom'
import { eatly, korzinka } from '../assets'
import Navbar from './navbar/Navbar'
const Dishes = ({number,setnumber}) => {
  return (
    <div className='dishes'>
        <Navbar/>
        <Get number={number} setnumber={setnumber}/>
        <Asked/>
        <Footer/>
    </div>
  )
}

export default Dishes
