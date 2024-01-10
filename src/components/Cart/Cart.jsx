// Cart.js
import React from 'react';
import SingleCart from './SingleCart';
import CartDetails from './CartDetails';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../features/shopping/shoppingSlice';


const Cart = () => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.shopping.cartProduct);

  const removeCart = (productId) => {
    dispatch(removeItem(productId));
  };
  

  return (
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        {cartProduct.length > 0 ? (
          cartProduct.map((cart, index) => (
            <SingleCart cart={cart} removeCart={removeCart} key={index} />
          ))
        ) : (
          <p>No products available</p>
        )}

        <CartDetails />
      </div>
    </div>
  );
};

export default Cart;
