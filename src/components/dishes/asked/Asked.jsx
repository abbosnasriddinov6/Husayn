import React, { useState } from 'react'
import './Asked.scss'
const Asked = () => {

  const [open1,setopen1]=useState(true)
  const [open2,setopen2]=useState(true)
  const [open3,setopen3]=useState(true)
  const [open4,setopen4]=useState(true)
  const [open5,setopen5]=useState(true)


  return (
    <div className='asked'>

        <div className="contextt">
          <h1>Frequently Asked <span>Questions</span></h1>


<div className="asked__infos">
{open1?<div className="asked__info">
  <h3>How long does delivery take?</h3>
  <div onClick={()=>setopen1(!open1)} className="dum">+</div>
</div>:<div className="asked__infok">
 <div className="false">
 <h3>How long does delivery take?</h3>
  <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim et autem earum ipsam sapiente optio voluptate similique odit cumque molestias?</h4>
 </div>
  <div onClick={()=>setopen1(!open1)} className="dum">-</div>
 
</div>}


{open2?<div className="asked__info">
  <h3>How Does It Work ?</h3>
  <div onClick={()=>setopen2(!open2)} className="dum">+</div>
</div>:<div className="asked__infok">
<div className="false">
 <h3>How Does It Work ?</h3>
  <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id ea rem atque delectus nemo libero quisquam excepturi debitis esse.</h4>
 </div>
  <div onClick={()=>setopen2(!open2)} className="dum">-</div>
</div>}


{open3?<div className="asked__info">
  <h3>How does your food delivery service work?</h3>
  <div onClick={()=>setopen3(!open3)} className="dum">+</div>
</div>:<div className="asked__infok">
<div className="false">
 <h3>How does your food delivery service work?</h3>
  <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quia maiores nam neque officiis dolore porro a obcaecati, accusantium beatae.</h4>
 </div>
  <div onClick={()=>setopen3(!open3)} className="dum">-</div>
</div>}


{open4?<div className="asked__info">
  <h3>What payment options do you accept?</h3>
  <div onClick={()=>setopen4(!open4)} className="dum">+</div>
</div>:<div className="asked__infok">
<div className="false">
 <h3>What payment options do you accept?</h3>
  <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor nesciunt error, quos temporibus nostrum sequi quidem repellat laborum ipsam eaque!</h4>
 </div>
  <div onClick={()=>setopen4(!open4)} className="dum">-</div>
 
</div>}


{open5?<div className="asked__info">
  <h3>Do you offer discounts or promotions?</h3>
  <div onClick={()=>setopen5(!open5)} className="dum">+</div>
</div>:<div className="asked__infok">
<div className="false">
 <h3>Do you offer discounts or promotions?</h3>
  <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, incidunt. A laudantium ut ipsum ea, est repudiandae commodi excepturi officiis?</h4>
 </div>
  <div onClick={()=>setopen5(!open5)} className="dum">-</div>
</div>}



</div>
         
        </div>

    </div>
  )
}

export default Asked
