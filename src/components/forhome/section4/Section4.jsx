import React from 'react'
import './Section4.scss'
import { hell, section4, section42, section4rasm2, section4reyting, swe, veg } from '../../../assets'
const Section4 = () => {
  return (
    <div className='homesection4'>



        <div className="section4__left">
          <h1>Control <span>Purchases</span> Via Dashboard</h1>

          <div className="section4__left__card">
            <img src={hell} alt="" />
            <div className="section4__infos">
              <h3>Chicken Hell</h3>
              <h5>On The Way</h5>
            </div>
            <h6>3:09 PM</h6>
          </div>



          <div className="section4__left__card">
            <img src={swe} alt="" />
            <div className="section4__infos">
              <h3>Swe Dish</h3>
              <h5>Delivered</h5>
            </div>
            <h6>Yesterday</h6>
          </div>


          <div className="section4__left__card">
            <img src={veg} alt="" />
            <div className="section4__infos">
              <h3>Fish Hell Veg</h3>
              <h5 className='red'>Cancelled</h5>
            </div>
            <h6>Yesterday</h6>
          </div>

        </div>



    <div className="section4__right">

      <div className="section4__right__element1">
        <h2>Purchases</h2>
        <select>
          <option>This month</option>
        </select>
      </div>



      <div className="section4__right__element2">
          <div className="section4__infos">
          <img src={section4} alt="" />
            <div className="section4__mayda">
            <h3>Expense</h3>
            <h4>Increased By 10%</h4>
            </div>
            <h2>$409.00</h2>
          
          </div>
          <img className='img__top' src={section4reyting} alt="" />
      </div>





      <div className="section4__right__element3">
          <div className="section4__infos">
          <img src={section42} alt="" />
            <div className="section4__mayda">
            <h3>Vocher Usage</h3>
            <h4>IIncreased By 5%</h4>
            </div>
            <h2>$45.78</h2>
          
          </div>



          <img className='img__top' src={section4rasm2} alt="" />
      </div>





     
    </div>

        
    </div>
  )
}

export default Section4
