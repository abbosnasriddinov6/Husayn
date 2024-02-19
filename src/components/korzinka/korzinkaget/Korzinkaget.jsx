import React, { useEffect, useState } from 'react'
import './Korzinkaget.scss'
import { newproducts} from '../../../app/newproducts'
import { minus, plus } from '../../../assets'
const Korzinkaget = () => {
  const {getnew, products2}=newproducts()


  useEffect(()=>{
    getnew()
  },[products2])

  return (
    <div className='korzinkapage'>
     

     <div className="korget">
      {products2.map((kl)=>(
        <div key={kl.id} className="new">
          {/* <img className='heart' src={kl.image1} alt="" /> */}
          <div className='immg1'>
          <img src={kl.image2} alt="" />
          </div>
         <div className='hlar'>
         {/* <h1>{kl.title}</h1> */}
          <h1>{kl.name}</h1>
          <h1>{kl.dollor}</h1>
         </div>
         <div className='plusminus'>
          <div className='ochil'>
            <img src={minus} alt="" />
            <p>03</p>
            <img src={plus} alt="" />
          </div>
          <div className='pul'>
          <h3>$38.97</h3>
          </div>
         </div>
        </div>
      ))}
     </div>
    </div>
  )
}

export default Korzinkaget
