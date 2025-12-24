import { configureStore } from "@reduxjs/toolkit";
import ProductDataSlice from "./ProductDataslice";

const store = configureStore({
  reducer: {
    product: ProductDataSlice,
  },
});

export default store;
