import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSearchBarResults = createAsyncThunk(
  "searchBar/fetchSearchBarResults",
  async ({ search }) => {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  }
);

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchBarResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchBarResults.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchSearchBarResults.rejected, (state) => {
        state.error = "failed to fetch products";
      });
  },
});

export default searchBarSlice.reducer;
