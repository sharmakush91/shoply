import { configureStore } from "@reduxjs/toolkit";
import ProductDataSlice from "./ProductDataslice";
import AutoSearchSlice from "./AutosearchSlice";

const store = configureStore({
  reducer: {
    product: ProductDataSlice,
    searchBar: AutoSearchSlice,
  },
});

export default store;
