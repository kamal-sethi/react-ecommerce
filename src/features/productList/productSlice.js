import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductsByFilters } from './productAPI';

const initialState = {
  products: [],
  status: 'idle',
};

export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
  
    return response.data;
  
  }
);
export const fetchAllProductsByFilterAsync = createAsyncThunk(
  'product/fetchProductsByFilters',
  async ({filter,sort,pagination}) => {
    const response = await fetchProductsByFilters(filter,sort,pagination);
    // The value we return becomes the `fulfilled` action payload
   console.log(response);
    return response;
  
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
 
  reducers: {
    increment: (state) => {
    
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
        
      })
      .addCase(fetchAllProductsByFilterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

//selecting all products
export const selectAllProducts = (state) => state.product.products;


export default productSlice.reducer;
