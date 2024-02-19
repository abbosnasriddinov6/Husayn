import React from 'react'
import './Korzinkafooter.scss'
import { eatly } from '../../../assets'
const Korzinkafooter = () => {
  return (
    <div className='korzinkafooter'>

        <div className="content">
        <img src={eatly} alt="" />
        <hr />
        <div className="elem">
            <h6>© 2023 EATLY All Rights Reserved.</h6>
            <div className="icons">
            <i className="fa-brands fa-instagram"></i>
            <h3>in</h3>
            <h3>f</h3>
            <i className="fa-brands fa-twitter"></i>

            </div>
        </div>
        </div>
           
    </div>
  )
}

export default Korzinkafooter

