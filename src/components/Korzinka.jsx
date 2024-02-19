import React from 'react'
import Korzinkaget from './korzinka/korzinkaget/Korzinkaget'
import Korzinkapayment from './korzinka/korzinkapayment/Korzinkapayment'
import Korzinkaimage from './korzinka/korzinkaimage/Korzinkaimage'
import Korzinkafooter from './korzinka/korzinkafooter/Korzinkafooter'

import './Korzinka.scss'
import { NavLink } from 'react-router-dom'
import { eatly, korzinka } from '../assets'
import Navbar from './navbar/Navbar'

const Korzinka = () => {
  return (
    <div className='korzinkaa'>
        <Navbar/>
      <Korzinkaget/>
      <Korzinkapayment/>
      <Korzinkaimage/>
      <Korzinkafooter/>
      
      
    </div>
  )
}

export default Korzinka
