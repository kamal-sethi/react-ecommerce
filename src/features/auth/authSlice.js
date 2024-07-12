import { createAsyncThunk, createSlice, isRejected } from "@reduxjs/toolkit";
import { createUser, checkUser, updateUserAddress } from "./authAPI";

const initialState = {
  loggedInUser: null,
  status: "idle",
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const updateUserAddressAsync = createAsyncThunk(
  "user/updateUserAddress",
  async (update) => {
    console.log(update);
    const response = await updateUserAddress(update);
    // The value we return becomes the `fulfilled` action payload
    console.log(response)
    return response.data;
  }
);
export const checkUserAsync = createAsyncThunk(
  "user/checkUser",
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
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
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(updateUserAddressAsync.pending, (state) => {
        state.status = "loading";
      })

      .addCase(updateUserAddressAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      });
  },
});
export const { increment } = counterSlice.actions;

export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state.auth.error;

// export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
