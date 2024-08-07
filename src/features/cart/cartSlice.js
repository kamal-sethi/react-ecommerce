import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart,fetchItemByUserId,updateCart,deleteItemFromCart,resetCart } from './cartAPI';

const initialState = {
  status: "idle",
  items: []
};

export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async (item) => {
    const response = await addToCart(item);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchItemByUserIdAsync = createAsyncThunk(
  'cart/fetchItemByUserId',
  async (userId) => {
    const response = await fetchItemByUserId(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const updateCartAsync = createAsyncThunk(
  'cart/updateCart',
  async (update) => {
    const response = await updateCart(update);
    // The value we return becomes the `fulfilled` action payload
    console.log(response);
    return response.data;
  }
);
export const deleteItemFromCartAsync = createAsyncThunk(
  'cart/deleteItemFromCart',
  async (itemId) => {
    const response = await deleteItemFromCart(itemId);
    // The value we return becomes the `fulfilled` action payload
    console.log(response);
    return response.data;
  }
);
export const resetCartAsync = createAsyncThunk(
  'cart/resetCart',
  async (userId) => {
    const response = await resetCart(userId);
    console.log(response);
    // The value we return becomes the `fulfilled` action payload
    console.log(response);
    return response.data;
  }
);


export const counterSlice = createSlice({
  name: 'cart',
  initialState,
 
  reducers: {
    increment: (state) => {
    
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(fetchItemByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items=action.payload;
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.items.findIndex((item)=>item.id===action.payload.id)
        state.items[index]=action.payload;
      })
      .addCase(deleteItemFromCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.items.findIndex((item)=>item.id===action.payload.id);
        state.items.splice(index,1);
      })
      .addCase(resetCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items=[];
      })
  },
});

export const { increment } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const productsInCart=(state)=>state.cart.items;


export default counterSlice.reducer;
