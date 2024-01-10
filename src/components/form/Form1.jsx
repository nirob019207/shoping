// Form.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  setCategory,
  setImgurl,
  setPrice,
  setProduct,
  setQuantity,
} from "../../features/shopping/shoppingSlice";

const Form1 = () => {
  const dispatch = useDispatch();
  const shopping = useSelector((state) => state.shopping);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { product, price, quantity, imgUrl, category } = shopping;
    dispatch(addProduct({ product, price, quantity, imgUrl, category }));
    // Reset form fields after submission
    dispatch(setProduct(""));
    dispatch(setPrice(""));
    dispatch(setQuantity(""));
    dispatch(setCategory(""));
    dispatch(setImgurl(""));
  };

  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={handleFormSubmit}
        >
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              value={shopping.product}
              onChange={(e) => dispatch(setProduct(e.target.value))}
              id="lws-inputName"
              type="text"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              value={shopping.category}
              onChange={(e) => dispatch(setCategory(e.target.value))}
              type="text"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              value={shopping.imgUrl}
              onChange={(e) => dispatch(setImgurl(e.target.value))}
              type="text"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="lws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                value={shopping.price}
                onChange={(e) => dispatch(setPrice(e.target.value))}
                id="lws-inputPrice"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                value={shopping.quantity}
                onChange={(e) => dispatch(setQuantity(e.target.value))}
                id="lws-inputQuantity"
                required
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

export default Form1;
