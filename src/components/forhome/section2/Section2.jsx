import React from 'react'
import './Section2.scss'
import { izbrannoe, tovuq, yulduzcha } from '../../../assets'
const Section2 = () => {
  return (
    <div className='homesection2'>
        <img className='tovuq' src={tovuq} alt="" />




        <div className="the__chicken__king">
          <h2>The Chicken King</h2>
          <div className="min">
            <h5>24min •</h5>
            <img src={yulduzcha} alt="" />
            <h5>4.8</h5>
          </div>




          <img src={izbrannoe} alt="" />
        </div>
    </div>
  )
}

export default Section2
