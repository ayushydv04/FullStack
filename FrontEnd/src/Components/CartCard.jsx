import React from 'react'
import { useState } from 'react'

const CartCard = () => {
    


  return (
      <div className="flex gap-10 bg-yellow-100 mb-5">

        
        <div className="w-32 h-32">image box</div>

        <div className="flex justify-between bg-red-200 w-full font-mono font-medium">
          <div className="ml-10">
            <h2>{name}</h2>
            <h4>description</h4>
            <h4>Quantity</h4>
          </div>

          <div className="my-auto mr-20 font-semibold">
            <h3>₹1000</h3>
          </div>
        </div>
      </div>
  )
}

export default CartCard
