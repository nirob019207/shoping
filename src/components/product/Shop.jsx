import React from 'react';
import Product from './Product';
import Form from '../form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../features/shopping/shoppingSlice';

const Shop = () => {
  const shoppingState = useSelector((state) => state.shopping);



  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    const selectedProduct = shoppingState.storeProduct.find((item) => item.id === id);
    dispatch(addItem(selectedProduct));
  };

  return (
  
      <div className="productWrapper">
        {shoppingState.storeProduct.length > 0 ? (
          shoppingState.storeProduct.map((product, index) => (
            <Product product={product} key={index}  handleAddToCart={handleAddToCart} />
          ))
        ) : (
          <p>No products available</p>
        )}
        <Form />
      </div>
  
  );
};

export default Shop;
