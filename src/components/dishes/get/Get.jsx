import React, { useEffect, useState } from 'react'
import './Get.scss'
import { useproducts } from '../../../app/useproducts'
import { newproducts } from '../../../app/newproducts'
const Get = ({number,setnumber}) => {

  const [newe,setnewe]=useState([])

  const {products,loading,error,getproducts}=useproducts()
 
  const {postnew}=newproducts()
  const [search,setsearch]=useState('')
  useEffect(()=>{
    getproducts()
  },[])

useEffect(()=>{
  postnew(newe)
  setnumber(number+1)
  console.log(number);
},[newe])
  
  

  return (
    <div className='dishesget'>
        <input onChange={(e)=>setsearch(e.target.value)} className='search' placeholder='Search...' type="text" />
        {loading?<><h1>Loading</h1></>:null}
        {error?<><h1>Error</h1></>:null}
      








    <div className="gett">



    {products?products.filter((product)=>{
                if(search===''){
                    return product
                }else if(product.name.toLowerCase().includes(search.toLowerCase())){
                    return product
                }
            }) 



      .map((td)=>(
        <div key={td.id} className="product">
        <img className='image1' src={td.image1} alt="" />
        <img className='image2' src={td.image2} alt="" />
          <h2>{td.name}</h2>
        

        <div className="e3">
          <h3>{td.dollor}</h3>
          <div onClick={(e)=>setnewe({...newe , title:td.title, name:td.name ,dollor:td.dollor, image2:td.image2, })} className="dev"><h1>+</h1></div> 
        </div>


        </div>
      )):null}
    </div>

        
    </div>
  )
      }


export default Get
