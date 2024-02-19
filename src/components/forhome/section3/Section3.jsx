import React, { useEffect } from 'react'
import './Section3.scss'
import { useproducts } from '../../../app/useproducts'
const Section3 = () => {







  const {products,loading,error,getproducts}=useproducts()
  const products2=products.slice(0,5)

 


  useEffect(()=>{
    getproducts()
  },[])
  return (
    <div>
       <div className='dishesget'>
        <input className='search' placeholder='Search...' type="text" />
        {loading?<><h1>Loading</h1></>:null}
        {error?<><h1>Error</h1></>:null}
      











    <div className="gett">
      {products2.map((td)=>(
        <div key={td.id} className="product">
        <img className='image1' src={td.image1} alt="" />
        <img className='image2' src={td.image2} alt="" />
          <h2>{td.name}</h2>
        

        <div className="e3">
          <h3>{td.dollor}</h3>
          <div className="dev"><h1>+</h1></div>
        </div>


        </div>
      ))}
    </div>

        
    </div>
    </div>
  )
}

export default Section3
