import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import shoppingReducer from "../features/shopping/shoppingSlice"; // Fix import name

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shopping: shoppingReducer, // Fix import name
  },
});