import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async ({ categories }) => {
    const product = await fetch(
      `https://dummyjson.com/products/category/${categories}?limit=0`
    );
    const data = await product.json();
    console.log(data);
    return data.products;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    status: "idle",
    items: [],
    error: null,
  },
  reducers: {
    clearItems: (state) => {
      state.items = [];
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "failed to fetch products";
      });
  },
});

export default productSlice.reducer;
export const { clearItems } = productSlice.actions;
