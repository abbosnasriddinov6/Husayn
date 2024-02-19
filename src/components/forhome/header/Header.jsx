import React from 'react'
import './Header.scss'
import { homerightimg } from '../../../assets'
const Header = () => {
  return (
    <div className='homeheader'>




      <div className="header__left">
          <h4>OVER 1000 USERS</h4>
          <h1>Enjoy Foods All Over The <span>World</span></h1>
          <h4>EatLy help you set saving goals, earn cash 
            back offers, Go to disclaimer for more details 
            and get paychecks up to two days early. Get a $20 bonus.
            </h4>
            <button className='getstarted'>Get Started</button>
      </div>



      <div className="header__right">
        <img src={homerightimg} alt="" />
      </div>



    </div>
  )
}

export default Header
