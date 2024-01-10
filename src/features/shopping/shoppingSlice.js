// shoppingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storeProduct: [],
  cartProduct: [], // Array of products in the cart with individual quantities
};

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.storeProduct.push(action.payload);
    },
    addItem: (state, action) => {
      const selectedProduct = state.storeProduct.find((item) => item.id === action.payload.id);

      if (selectedProduct) {
        const existingCartItem = state.cartProduct.find((item) => item.id === action.payload.id);

        if (existingCartItem) {
          // If the product is already in the cart, increment its quantity
          existingCartItem.quantity += 1;
        } else {
          // If the product is not in the cart, add it with quantity 1
          state.cartProduct.push({ ...selectedProduct, quantity: 1 });
        }

        // Update the quantity in the storeProduct (if needed)
        selectedProduct.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.cartProduct = state.cartProduct.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProduct, addItem, removeItem } = shoppingSlice.actions;

export default shoppingSlice.reducer;
