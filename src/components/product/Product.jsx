import React from 'react';



const Product = ({product,handleAddToCart}) => {
  
  
 

  return (
    <>
     
          <div  className="productContainer" id="lws-productContainer">
            <div className="lws-productCard">
              <img
                className="lws-productImage"
                src={product.imgUrl}
                alt="product"
              />
              <div className="p-4 space-y-2">
                <h4 className="lws-productName">{product.product}</h4>
                <p className="lws-productCategory">{product.category}</p>
                <div className="flex items-center justify-between pb-2">
                  <p className="productPrice">
                    BDT <span className="lws-price">{product.price}</span>
                  </p>
                  <p className="productQuantity">
                    QTY <span className="lws-quantity">{product.quantity}</span>
                  </p>
                </div>
                <button className="lws-btnAddToCart"  onClick={()=>handleAddToCart(product.id)}  disabled={product.quantity === 0} >Add To Cart</button>
              </div>
            </div>
          </div>
      
    </>
  );
};

export default Product;
