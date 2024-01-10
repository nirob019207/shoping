import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/shopping/shoppingSlice";

const shortid = require('shortid');

const Form = () => {
    const dispatch=useDispatch();
    
  const [product, setProduct] = useState({
    product: "",
    price: 0,
    quantity: 0,
    imgUrl: "",
    category: "",
    id: "",
  });

  const handalInput = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...product,
      id: shortid.generate(), // Generate and set the product ID
    };
    dispatch(addProduct(newProduct));
    setProduct({
      product: "",
      price: 0,
      quantity: 0,
      imgUrl: "",
      category: "",
      id: "",
    });
  };
  

  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              value={product.product}
              onChange={handalInput}
              id="lws-inputName"
              type="text"
              name="product"
            
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              value={product.category}
              onChange={handalInput}
              type="text"
              name="category"
              
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              value={product.imgUrl}
              onChange={handalInput}
              type="text"
              name="imgUrl"
          
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="lws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                value={product.price}
                onChange={handalInput}
                id="lws-inputPrice"
                name="price"
               
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                value={product.quantity}
                onChange={handalInput}
                id="lws-inputQuantity"
                name="quantity"
               
              />
            </div>
          </div>

          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;