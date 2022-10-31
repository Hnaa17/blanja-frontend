import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getHomeProductNew = createAsyncThunk("HomeProductNew/getHomeProductNew", async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_BACKEND + "products?sortby=product_name&sort=asc&page=1&limit=5", {
        headers: { "Content-Type": "application/json" },
      });
      return response.data.data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  });
  
  const HomeProductSlice = createSlice({
    name: "HomeProductNew",
    initialState: {
      isLoading: false,
      isError: null,
      HomeProductNew: [],
    },
    extraReducers: {
      [getHomeProductNew.pending]: (state) => {
        state.isLoading = true;
      },
      [getHomeProductNew.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.HomeProductNew = action.payload;
      },
      [getHomeProductNew.rejected]: (state, action) => {
        state.isLoading = false;
        state.isError = action.error;
      },
    },
  });
  
  export default HomeProductSlice.reducer;