import React from 'react'
import './Section5.scss'
import { Subcribe, section5person, vergul, yulduzchalar } from '../../../assets'
const Section5 = () => {
  return (
    <div className='homesection5'>

      <h1><span>Customer</span> Say</h1>


    <div className="section5__about">


      <div className="abouts1">
       <div className="br">
       <img src={section5person} alt="" />
        <div className="abouts__info">
          <h3>Alexander R.</h3>
          <h5>01 Year With Us </h5>
        </div>
        <img src={vergul} alt="" />
       </div>

       <div className="ik">
       “ Online invoice payment helps companies
        save time, are faster and save maximum effort for the clients and 
       save maximum effort. Online invoice payment helps companies save time ”
       </div>


       <img className='yulduzchalar' src={yulduzchalar} alt="" />
      </div>



      <div className="abouts2">
       
       <div className="ik">
       “ Online invoice payment helps companies save time, 
       are faster and save maximum effort for the clients and save maximum effort.
        Online invoice payment helps companies save time ”
       </div>
       <img className='yulduzchalar' src={yulduzchalar} alt="" />
      </div>



      <div className="abouts3">
       
       <div className="ik">
       “ Online invoice payment helps companies save time, are 
       faster and save maximum effort for the clients and save maximum 
       effort. Online invoice payment helps companies save time ”
       </div>
       <img className='yulduzchalar' src={yulduzchalar} alt="" />
      </div>




    </div>


    <div className="img">
    <h2>GET 50%</h2>
    <div className="refs">
      <input placeholder=' Enter Your Email Address' type="text" />
      <button>Subscribe</button>
    </div>
    </div>



    </div>
  )
}

export default Section5
