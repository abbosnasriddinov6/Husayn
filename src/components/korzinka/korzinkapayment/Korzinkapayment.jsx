import React from 'react'
import './Korzinkapayment.scss'
const Korzinkapayment = () => {
  return (
    <div className='korzinkapayment'>
        <div className="borders">



          <div className="border">
               <h3>Subtotal</h3>
               <h3>$58.96</h3>
          </div>


          <div className="border">
               <h3>Delivery</h3>
               <h3>$3.59</h3>
          </div>


          <div className="bordersiz">
               <h2>Total</h2>
               <h2>$62.55</h2>
          </div>



          <button><h3>Review Payment</h3></button>
        </div>
    </div>
  )
}

export default Korzinkapayment
