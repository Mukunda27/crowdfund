import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import backingReducer from "./backingSlice";
import productsReducer from "./productsSlice";

export default configureStore({
  reducer: {
    modal: modalReducer,
    backing: backingReducer,
    products: productsReducer,
  },
});
