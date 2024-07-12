import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount, fetchLoggedInUserOrders } from "./userAPI";

const initialState = {
  userOrders: [],
  status: "idle",
};

export const fetchLoggedInUserOrdersAsync = createAsyncThunk(
  "user/fetchLoggedInUserOrders",
  async (userId) => {
    console.log(userId);
    const response = await fetchLoggedInUserOrders(userId);
    // The value we return becomes the `fulfilled` action payload
    console.log(response);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserOrdersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoggedInUserOrdersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userOrders = action.payload;
      });
  },
});

export const { increment } = counterSlice.actions;

export const selectOrders = (state) => state.user.userOrders;

export default counterSlice.reducer;
