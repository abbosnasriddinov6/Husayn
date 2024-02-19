import React from 'react'
import './Section1.scss'
import { Mobile } from '../../../assets'
const Section1 = () => {
  return (
    <div className='homesection1'>
        <div className="reyting">

          <div className="info">
            <h1>10K+</h1>
            <h6>
              Satisfied Costumers
              All Great Over The World 
            </h6>
          </div>


          <div className="info">
            <h1>4M</h1>
            <h6>
            Healthy Dishes Sold Including Milk Shakes Smooth
            </h6>
          </div>


          <div className="info">
            <h1>99.99%</h1>
            <h6>
            Reliable Customer Support We Provide Great Experiences
            </h6>
          </div>
          
        </div>

    <div className="section1__more">

    <div className="home__section1__left">
      <img src={Mobile} alt="" />
    </div>


    <div className="home__section1__right">
      <h1>Premium <span>Quality</span> For Your Health</h1>
      <li>
        Premium quality food is made with ingredients that 
        are packed with essential vitamins, minerals.
      </li>
      <li>
      These foods promote overall wellness by support healthy digestion and boosting immunity
      </li>
      <button>Download -</button>
    </div>



    </div>
    
    </div>
  )
}

export default Section1
