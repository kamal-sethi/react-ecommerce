import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchProductsByFilters,
  fetchProductById,
  createProduct,
  updateProduct,
} from "./productAPI";

const initialState = {
  products: [],
  status: "idle",
  selectedProduct: null,
  totalProducts: 0,
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload

    return response.data;
  }
);
export const fetchAllProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    console.log(id);
    const response = await fetchProductById(id);
    // The value we return becomes the `fulfilled` action payload
    console.log(response);
    return response.data;
  }
);
export const fetchAllProductsByFilterAsync = createAsyncThunk(
  "product/fetchProductsByFilters",
  async ({ filter, sort, pagination }) => {
    const response = await fetchProductsByFilters(filter, sort, pagination);
    // The value we return becomes the `fulfilled` action payload

    return response;
  }
);
export const createProductAsync = createAsyncThunk(
  "product/createProduct",
  async (product) => {
    const response = await createProduct(product);
    // The value we return becomes the `fulfilled` action payload

    return response;
  }
);
export const updateProductAsync = createAsyncThunk(
  "product/updateProduct",
  async (update) => {
    console.log(update);
    const response = await updateProduct(update);
    console.log(response);
    // The value we return becomes the `fulfilled` action payload

    return response;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    // selectTotalProducts: (state) => {
    //   state.totalProducts = state.products.length;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllProductsByFilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      })
      .addCase(createProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products.push(action.payload);
      })
      .addCase(updateProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        state.products[index] = action.payload;
      });
  },
});

export const { clearSelectedProduct, selectTotalProducts } =
  productSlice.actions;

//selecting all products
export const selectAllProducts = (state) => state.product.products;

export const selectProductById = (state) => state.product.selectedProduct;

// export const selectTotalProducts = (state) => state.product.totalProducts;

export default productSlice.reducer;
