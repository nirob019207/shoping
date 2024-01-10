import React from 'react'

const SingleCart = ({cart,removeCart}) => {
  return (
    <div>
        <div class="space-y-6">
        
        <div class="cartCard">
          <div class="flex items-center col-span-6 space-x-6">
        
            <img class="lws-cartImage" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" alt="product" />
          
            <div class="space-y-2">
              <h4 class="lws-cartName">{cart.name}</h4>
              <p class="lws-cartCategory">{cart.category}</p>
              <p>BDT <span class="lws-cartPrice">{cart.price}</span></p>
            </div>
          </div>
          <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        
            <div class="flex items-center space-x-4">
              <button class="lws-incrementQuantity">
                <i class="text-lg fa-solid fa-plus"></i>
              </button>
              <span class="lws-cartQuantity">{cart.quantity}</span>
              <button class="lws-decrementQuantity">
                <i class="text-lg fa-solid fa-minus"></i>
              </button>
            </div>
  
            <p class="text-lg font-bold">BDT <span class="lws-calculatedPrice">{cart.price*cart.quantity}</span></p>
          </div>
         
          <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
            <button class="lws-removeFromCart" onClick={()=>removeCart(cart.id)}>
              <i class="text-lg text-red-400 fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
       

      </div>
    </div>
  )
}

export default SingleCart
