import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount, fetchLoggedInUser, fetchLoggedInUserOrders,updateUserAddress } from "./userAPI";

const initialState = {
  userOrders: [],
  status: "idle",
  userInfo: null,
};

export const fetchLoggedInUserOrdersAsync = createAsyncThunk(
  "user/fetchLoggedInUserOrders",
  async (userId) => {
  
    const response = await fetchLoggedInUserOrders(userId);
    // The value we return becomes the `fulfilled` action payload
  
    return response.data;
  }
);
export const fetchLoggedInUserAsync = createAsyncThunk(
  "user/fetchLoggedInUser",
  async (userId) => {
    
    const response = await fetchLoggedInUser(userId);
    // The value we return becomes the `fulfilled` action payload
    
    return response.data;
  }
);

export const updateUserAddressAsync = createAsyncThunk(
  "user/updateUserAddress",
  async (id) => {
    const response = await updateUserAddress(id);
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
      })
      .addCase(updateUserAddressAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserAddressAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userInfo= action.payload;
      })
      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userInfo = action.payload;
      });
  },
});

export const { increment } = counterSlice.actions;

export const selectOrders = (state) => state.user.userOrders;
export const selectUserInfo=(state)=>state.user.userInfo;

export default counterSlice.reducer;
